const express= require('express');
const cors=require('cors');
const bodyParser=require('body-parser');
const app=express();
const mongodb=require('mongodb');
const url="mongodb://localhost:27017";

const db_name="zen";
app.use(cors());
app.use(bodyParser.json());

let mentorData=[];
let studentData=[];
let connection;


//ADD Mentor
  app.post("/addMentor", async (req, res) => {
    console.log("Mentor ADD")
  console.log(req.body);
  console.log(mentorData);
  if (req.body != null) {
    try {
         connection=await mongodb.connect(url);
        let db=connection.db(db_name);
        let mentor_Inserted=await db.collection("mentor").insertOne(req.body);
        await connection.close();
        res.json({
            message: "Added new Mentor",
          });
          
      } catch (error) {
          if(connection)
            {
                await connection.close();
               console.log(error);
               res.status(500).json(error);
            }  
      }
  }
 //  console.log(mentor_Inserted);
});


//API to show mentors
app.get("/mentor",async (req, res) => {
   // console.log("Mentor LIst")
     try {
     connection=await mongodb.connect(url);
    let db=connection.db(db_name);
    mentorData=await db.collection("mentor").find().toArray();
  // console.log(mentorData)
    await connection.close();
    res.json(mentorData);
      
  } catch (error) {
      if(connection)
        {
            await connection.close();
           console.log(error);
           res.status(500).json(error);
        }  
  }
  });


 
 //ADD Student with POST
app.post("/addStudent",async (req, res) => {   
  console.log("ADD STUDENT")
 // console.log(req.body);
   try {
      connection=await mongodb.connect(url);
      db=connection.db(db_name);
      let student_Inserted=await db.collection("student").insertOne(req.body);
      await connection.close();
      res.json({
        message: "Added new Student",
      });
    } catch (error) {
        if(connection)
      {
          await connection.close();
          console.log("Problem with closing connection while adding student"+error);
          res.status(500).json(error);
      }
  }
});

//API TO SHOW STUDENTS
app.get("/student",async (req, res) => {
    //console.log("STUDENT LIST")
     try {
     connection=await mongodb.connect(url);
    let db=connection.db(db_name);
    studentData=await db.collection("student").find().toArray();
  // console.log(studentData)
    await connection.close();
    res.json(studentData);
      
  } catch (error) {
      if(connection)
        {
            await connection.close();
           console.log("ERROR WHILE SHOWING STUDENTS"+error);
           res.status(500).json(error);
        }  
  }
  });


  //ADD Students to Mentor
app.post("/assignStudent/:id",async (req, res) => {
   console.log("ASSIGN STUDENTS");
   let mentor_id= req.params.id;
   let stu_id=req.body.students;
  try {
    let connection=await mongodb.connect(url);
    let db=connection.db(db_name);
    let obj_id=mongodb.ObjectID(mentor_id);
    //let mentor_sel=await db.collection("mentor").findOne({_id:obj_id});
    let studentsAll=await db.collection("student").find().toArray();
    if(stu_id.length>0){
      for(let i=0;i<studentsAll.length;i++){
          for(let j=0;j<stu_id.length;j++){
             // console.log(studentsAll[i]+" "+stu_id[j])
              if(studentsAll[i]._id==(stu_id[j])){
                await db.collection("mentor").updateOne({_id: mongodb.ObjectID(mentor_id)}, {$addToSet:{studentsAssigned : studentsAll[i]}});
                await db.collection("student").deleteOne({_id: studentsAll[i]._id})
              }
          }
      }
    }
   
    await connection.close();
    res.json(studentData);
      
  } catch (error) {
      if(connection)
        {
            await connection.close();
           console.log("ERROR WHILE ADDING STUDENTS TO MENTOR "+error);
           res.status(500).json(error);
        }  
  }
  });

  //SHOW ASSIGNED STUDENTS TO MENTOR
  app.get("/assignedStudents/:id",async (req, res) => {
    let mentor_show = req.params.id;
    try {
        connection=await mongodb.connect(url);
        let db=connection.db(db_name);
        let mentor_sel =await db.collection("mentor").findOne({_id : mongodb.ObjectID(mentor_show)});
        await connection.close();
        res.status(200).json(mentor_sel.studentsAssigned);
    } catch (error) {
        if(connection)
        {
            await connection.close();
           console.log("ERROR WHILE SHOWING ASSIGNED STUDENTS TO MENTOR "+error);
           res.status(500).json(error);
        }
        
    }
   // let mentor = mentorData.find((mentor_sel) => mentor_sel.id == mentor_show);
   // res.status(200).json(mentor.studentsAssigned);
  })



app.listen(4000);
