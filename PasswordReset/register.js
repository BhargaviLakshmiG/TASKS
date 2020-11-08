const express = require("express");
const cors = require("cors");
const dotenv=require("dotenv").config();
const bodyparser = require("body-parser");
const mongoClient=require("mongodb");
const bcrypt = require("bcrypt");
var nodemailer = require('nodemailer');
const { publicDecrypt } = require("crypto");



const app = express();
app.use(cors());
app.use(bodyparser.json());

const url= process.env.DB_URL|| "mongodb://127.0.0.1:27017";
//const atlasUrl='mongodb+srv://bhargavi:zgc9kFoh2goS0rs3@testcluster.sl8ba.mongodb.net/zen?retryWrites=true&w=majority';
const db_name="zen";

app.get("/",(req,res)=>{
    res.send("Sample page from server");
});

app.post("/register",async (req,res)=>{
    try {
        let client=await mongoClient.connect(url);
        let db=client.db(db_name);
        let data=await db.collection("users").findOne({email:req.body.email});
        console.log(data)
        if(data){
            res.status(400).json({message:"user exists already"});
        }
        else{
            console.log(req.body)
            let salt=await bcrypt.genSalt(12);
            let hash=await bcrypt.hash(req.body.password,salt);
            req.body.password=hash;
            let result=await db.collection("users").insertOne(req.body);
            res.status(200).json({message:"User Registration successful"});
            client.close();
        }
    } catch (error) {
        console.log(error);
    }
})


//API to send email with link to update password
app.get("/checkmail/:mailid",async(req,res)=>{
    let user_email=req.params.mailid;
    console.log("Here"+user_email);

    try{
        let client=await mongoClient.connect(url);
        let db=client.db(db_name);
        let data=await db.collection("users").findOne({email:user_email});
        console.log(`DATA in checkmail ${data.email}`)
         if(data!=null)  {
         let random_str=Math.random().toString(36).slice(2) + Math.random().toString(36).toUpperCase().slice(2); 
          console.log(random_str);
         await db.collection("users").findOneAndUpdate({email:user_email},{$set:{"randomstring":random_str}});
         let mailTransporter = nodemailer.createTransport({ 
            service: 'gmail', 
            auth: { 
                user : process.env.MAIL_ID,
                pass : process.env.MAIL_PWD
            } 
        }); 
          
        let mailDetails = { 
            from: process.env.MAIL_ID, 
            to: user_email, 
            subject: 'Password Reset mail', 
            //text:'Please click on the following link, or paste this into your browser to reset your password:\n' + 'http://'+req.headers.host+'/reset/'+`${random_str}`
                   // 'http://localhost:5000/reset/' + `${random_str}`,
             html:`<p>Hello ${data.name}, your string is ${random_str}</p><a href='https://upbeat-nobel-34cd1a.netlify.app/'>Click on the below link to reset your password</a>`
        }; 
          
        mailTransporter.sendMail(mailDetails, function(err, data) { 
            if(err) { 
                console.log('Error Occured while sending email' + err); 
            } else { 
                console.log('Email sent successfully'); 
            } 
        }); 


         }

       res.status(200).json(data);
        await client.close();
    }
    catch(error){
        console.log(error);
    }
})

//Password Reset ,checking random string API
app.get("/reset/:random_str",async (req,res) =>{
    console.log("Into password reset part" +req.params.random_str) ;
    
    try{
        let client=await mongoClient.connect(url);
        let db=client.db(db_name);
        let user_match=await db.collection("users").findOne({randomstring:req.params.random_str});
        if(user_match!=null){
        console.log("Random string matched .Redirecting to reset password page");
        //res.send("Update pwd page")
         
       // res.writeHead(301, { "Location": "http://" + req.headers['host'] + '/updatePwd.html' });
          //      return res.end();
       // res.redirect("https://upbeat-nobel-34cd1a.netlify.app/");
         res.status(200).json(user_match.email)
          client.close();
        }
        else{
        console.log("Sorry!! String not matched");
        res.status(400).json({message :"String not matched"});
        client.close();
        }
    }
    catch(error){
        console.log(error);
    }

})

//Password Update API
app.patch("/updatePwd",async (req,res)=>{
    console.log("In update PWD" +req.body.email)
    try {
        let client=await mongoClient.connect(url);
        let db=client.db(db_name);
        console.log(req.body.password)
        let data=await db.collection("users").findOneAndUpdate({email:req.body.email},{$set:{"password":req.body.password,randomstring:""}});
        res.status(200).json({message :"Password updated successfully"});
        
      }
    catch(error){
        console.log(error);
    } 
    
})




app.listen(5000);