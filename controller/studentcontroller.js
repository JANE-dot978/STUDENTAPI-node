const Student = require('../models/studentModels');
module.exports ={
    addStudent:async(req,res,next)=>{
        try{
            const student = new Student(req.body)
            const result = await student.save();
        res.send(result)
        }catch(error){
            console.log(error.message);
        }
    },

    getStudent: async(req, res) => {
        const student = await Student.find({})
        res.send(student);
    },

    updateStudent:async(req, res)=>{
    try{
        const id = req.params.id;
        const update = req.body;
        const options ={new: true}
        const result = await Student.findByIdAndUpdate(id, update, options)

        res.send(result);
    } catch (error) {
        console.log(error.message)
    }
   
},
deleteStudent:async(req, res)=>{
    const id = req.params.id
    try{
        const student = await Student.findByIdAndDelete(id)
        res.send(student);
    }catch (error){
        console.log(error.message)
    }
}
}



