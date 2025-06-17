const express = require('express');
require('dotenv').config();
require('./helpers/init_mongodb');
const app = express();



const routes = require('./routes/api');
app.use(express.json()) 
app.use(routes);


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



