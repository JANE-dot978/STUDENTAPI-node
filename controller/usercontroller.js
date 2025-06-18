 const {authSchema} = require('../helpers/validationschema.js');
 const User = require('../models/usermodel');
 const createError = require('http-errors'); 

 module.exports= {
    registerUser: async(req, res, next) =>{
        
    try{
        const result = await authSchema.validateAsync(req.body);
        const {email} = result;

        const Exists = await User.findOne({ email});
        if (Exists) throw createError.Conflict(`${email} has already been registered`)
            const user = new User(result)

        const savedUser = await user.save()

        res.send (savedUser);
    }catch (error){
        if(error.isJoi === true)error.status = 422
        next(error);
    }
},
 };

