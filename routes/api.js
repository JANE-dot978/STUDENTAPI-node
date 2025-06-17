const express = require('express');
const routes = express.Router();

// const  controller =require('/controller/studentcontroller');
const studentcontroller = require('../controller/studentcontroller');

//get a list of students from the database
routes.get('/getAllStudent', studentcontroller.getStudent);
//get a specif student from the db
routes.get('/getStudent/:id', studentcontroller.getStudent);
//add student to the db
routes.post('/addStudent', studentcontroller.addStudent);

//update students inthe DB
routes.patch('/updateStudent/:id', studentcontroller.updateStudent);
//delete a student from the DB
routes.delete('/deleteStudent/:id', studentcontroller.deleteStudent);
module.exports = routes;




