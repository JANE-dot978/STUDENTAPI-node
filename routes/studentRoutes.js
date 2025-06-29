// const express = require('express');
// const routes = express.Router();
// const { verifyAccessToken } = require('../helpers/jwt token');
// // const studentController = require('../controller/studentcontroller');



// // ✅ Get all students
// routes.get('/getStudents', studentController.getAllStudents); // Use a consistent function name

// // ✅ Get a single student by ID
// routes.get('/getStudent/:id', studentController.getStudentById);

// // ✅ Add a new student
// routes.post('/addStudent', studentController.addStudent);

// // ✅ Update a student
// routes.patch('/updateStudent/:id', studentController.updateStudent);

// // ✅ Delete a student
// routes.delete('/deleteStudent/:id', studentController.deleteStudent);

// // ✅ (Optional) Protect routes with JWT
// // routes.get('/getAllStudents', verifyAccessToken, studentController.getAllStudents);

// module.exports = routes;
// const express = require('express');
// const routes = express.Router();
// // const{verifyAccessToken} =require('../helpers/jwt token')
// const { verifyAccessToken } = require('../helpers/jwtToken');

// const createError = require('http-errors');

// // const  controller =require('/controller/studentcontroller');
// const studentcontroller = require('../controller/studentcontroller');
// // const { verifyAccessToken } = require('../helpers/jwt token');

// //get a list of students from the database
// routes.get('/getAllStudents', studentcontroller.getStudent);
// // routes.get('/getStudents', studentcontroller.getAllStudents);
// //get a specif student from the db
// // routes.get('/getStudent/:id', studentcontroller.getStudent);
// routes.get('/getStudent/:id', studentcontroller.getStudentById);
// //add student to the db
// routes.post('/addStudent', studentcontroller.addStudent);

// //update students inthe DB
// routes.patch('/updateStudent/:id', studentcontroller.updateStudent);
// //delete a student from the DB
// routes.delete('/deleteStudent/:id',studentcontroller.deleteStudent);
// module.exports = routes;

// const express = require('express');
// const routes = express.Router();
// const studentcontroller = require('../controller/studentcontroller');

// // Get ALL students
// // routes.get('/getstudent', studentcontroller.getStudent);
// routes.get('/getAllStudents', studentcontroller.AllStudents); // ✅ Case must match


// // Get ONE student by ID
// routes.get('/getStudent/:id', studentcontroller.getStudentById);



// // Add a student
// routes.post('/addStudent', studentcontroller.addStudent);

// // Update student
// routes.patch('/updateStudent/:id', studentcontroller.updateStudent);

// // Delete student
// routes.delete('/deleteStudent/:id', studentcontroller.deleteStudent);

// module.exports = routes;


const express = require('express');
const routes = express.Router();
const { verifyAccessToken } = require('../helpers/jwtToken');
const studentcontroller = require('../controller/studentcontroller');

// ✅ Use the correct names now
routes.get('/getAllStudents', studentcontroller.getStudent);
routes.get('/getStudent/:id', studentcontroller.getStudentById);
routes.post('/addStudent', studentcontroller.addStudent);
routes.patch('/updateStudent/:id', studentcontroller.updateStudent);
routes.delete('/deleteStudent/:id', studentcontroller.deleteStudent);

module.exports = routes;





