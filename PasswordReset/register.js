const express = require("express");
const cors = require("cors");
const dotenv=require("dotenv");
const bodyparser = require("body-parser");
const mongoClient=require("mongodb");
const bcrypt = require("bcrypt");
var nodemailer = require('nodemailer');


const mongodb=require('mongodb');
const { json } = require("body-parser");
//const url="mongodb://localhost:27017";
const app = express();
app.use(cors());
app.use(bodyparser.json());

const url="mongodb://127.0.0.1:27017";
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

app.get("/checkmail/:mailid",async(req,res)=>{
    let user_email=req.params.mailid;
    console.log("Here"+user_email);

    try{
        let client=await mongoClient.connect(url);
        let db=client.db(db_name);
        let data=await db.collection("users").findOne({email:user_email});
        console.log(data)
         if(data!=null)  {
         let random_str=Math.random().toString(36).slice(2) + Math.random().toString(36).toUpperCase().slice(2); 
          console.log(random_str);
         await db.collection("users").findOneAndUpdate({email:user_email},{$set:{"randomstring":random_str}});

         let mailTransporter = nodemailer.createTransport({ 
            service: 'gmail', 
            auth: { 
                user: '8765gbl@gmail.com', 
                pass: 'abcd@4321'
            } 
        }); 
          
        let mailDetails = { 
            from: '8765gbl@gmail.com', 
            to: '8765gbl@gmail.com', 
            subject: 'Password Reset mail', 
            text:'Please click on the following link, or paste this into your browser to reset your password:\n' + 'http://'+req.headers.host+'/reset/'+`${random_str}`
                   // 'http://localhost:5000/reset/' + `${random_str}`
        }; 
          
        mailTransporter.sendMail(mailDetails, function(err, data) { 
            if(err) { 
                console.log('Error Occured'); 
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

//Password Reset API
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
        res.redirect('/updatePwd.html');
        }
        else
        console.log("Sorry!! String not matched")
    }
    catch(error){
        console.log(error);
    }

})


app.listen(5000);