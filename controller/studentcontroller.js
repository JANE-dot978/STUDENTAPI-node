const { default: mongoose } = require('mongoose');
const Student = require('../models/studentModels');
const createError = require('http-errors')

module.exports ={
    addStudent:async(req,res,next)=>{
        try{
            const student = new Student(req.body)
            const result = await student.save();
        res.send(result)
        }catch(error){
            console.log(error.message);
            if(error.name==="validtionError"){
                next(createError(422, error.message))
                return;
            }
            next(error)
        }
    },

    getstudent: async(req, res) => {
        const student = await Student.find({})
        res.send(students);
    },
    getStudent:async(req, res, next)=>{
        const id = req.params.id;
        try{
            const student = await Student.findById(id)
            if(!student){
                throw(createError(404,"student does not exist"))
            }
            res.send(student)
        }catch (error){
            console.log(error.message);
            if(error instanceof moongoose.CastError){
                next(createError(400, "invalid student id"));
                return;
            }
            next(error);
        }
    },

    updateStudent:async(req, res)=>{
    try{
        const id = req.params.id;
        const update = req.body;
        const options ={new: true}
        const result = await Student.findByIdAndUpdate(id, update, options)

        if(!result){
            throw(createError(404,"student does not exist"))
        }

        res.send(result);
    } catch (error) {
        console.log(error.message)

        if(error instanceof mongoose.CastError){
            return next(createError(400, "invalid student id"));
        }
        next(errror);
    }
   
},
deleteStudent:async(req, res)=>{
    const id = req.params.id
    try{
        const student = await Student.findByIdAndDelete(id)
        if(!student){
            throw(createError(404, "student does not exist"))
        }
        res.send(student);
    }catch (error){
        console.log(error.message)
        if(error instanceof mongoose.CastError){
            next(createError(404, "invalid student id"));
            return;
        }
    }
}
}



