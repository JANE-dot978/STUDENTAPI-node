const express = require('express');
const cors =require('cors')
require('dotenv').config();
require('./helpers/init_mongodb');
const app = express();
const studentRoutes = require( './routes/studentRoutes');
const userroutes = require('./routes/userroutes')

// app.use(cors({
//   credentials: true,
//   origin: 'http://localhost:3000'
// }));

// const cors = require('cors');
app.use(cors()); // 👈 Enable CORS globally


// ✅ Custom headers for Safari, mobile, strict CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  next();
});

// const routes = require('./routes/studentRoutes');
app.use(express.json()) 
app.use('/api/auth', userroutes);

app.use(studentRoutes);


//handling error 404
app.use((req, res, next)=>{
    const err = new Error("Not Found");
    err.status = 404
    next(err)
})

//error handler
app.use((err, req, res, next) =>{
    res.status(err.status || 500)
    res.send({
        error:{
            status: err.status || 500,
            message: err. message
        }
    })
})

app.listen(process.env.PORT || 4000, function() {
    console.log('Now listening for requests on: http://localhost:4000');
});



