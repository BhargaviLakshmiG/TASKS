const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
const bodyparser = require("body-parser");
app.use(bodyparser.json());

let mentorData = [
  {
    id: 1,
    name: "Sam",
    studentsAssigned: [],
  },
  {
    id: 2,
    name: "Dia",
    studentsAssigned: [],
  },
];

let studentData = [
  {
    id: 1,
    name: "Ram",
  },
  {
    id: 2,
    name: "Joe",
  },
];

// API for mentor
app.get("/mentor", (req, res) => {
  res.json(mentorData);
});

// API for student
app.get("/student", (req, res) => {
  res.json(studentData);
});

//ADD Mentor with POST
app.post("/addMentor", (req, res) => {
    console.log("Mentor ADD")
  console.log(req.body);
  console.log(mentorData);
  if (req.body != null) {
    req.body.id = mentorData.length + 1;
    mentorData.push(req.body);
  }
  res.json({
    message: "Added new Mentor",
  });
  console.log(mentorData);
});

//ADD Student with POST
app.post("/addStudent", (req, res) => {
    let id_num=Math.floor(Math.random()*999);
  //req.body.id = studentData.length + 1;
  req.body.id=id_num;
  console.log("ADD STUDENT")
  console.log(req.body);
  studentData.push(req.body);
  res.json({
    message: "Added new Student",
  });
});

//ADD Students to Mentor
app.post("/assignStudent/:id", (req, res) => {
  let mentor_sel = req.params.id;
  let studentsList = req.body.students;
  // console.log(studentsList);
  // console.log(mentor_sel);
  let addStudent;
  let studentsAssigned = [];
  //console.log(studentsAssigned);
  let selected_mentor = mentorData.find((mentor) => mentor.id == mentor_sel);
  console.log(selected_mentor);
  for (var i = 0; i < studentData.length; i++) {
     // console.log(`Stu: ${studentData}`);
    for (var j = 0; j < studentsList.length; j++) {
      if (studentData[i].id == studentsList[j]) {
        addStudent = studentData[i];
        studentData.splice(i, 1);
        console.log("STU")
        console.log(addStudent);
        selected_mentor.studentsAssigned.push({
          id: addStudent.id,
          name: addStudent.name,
        });
      }
    }

    console.log(`Assigned Students to ${selected_mentor.name}`);
    console.log(selected_mentor.studentsAssigned);
  }
  res.json({
    message: "Assigned Students to Mentor",
  });
});

//API to show assigned students to mentor
app.get("/assignedStudents/:id", (req, res) => {
  let mentor_show = req.params.id;
  let mentor = mentorData.find((mentor_sel) => mentor_sel.id == mentor_show);
  res.status(200).json(mentor.studentsAssigned);
});

app.listen(4000);
