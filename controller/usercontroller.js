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
login: async(req, res, next)=>{
    try{
        const result = await authSchema.validateAsync(req.body)
        const user = await User.findOne({email: result.email})
        if(!user) throw createError.NotFound('User not registered')

            //matching the password
            const isMatch = await user.isValidPassword(result.password)
            if(!isMatch) throw createError.Unauthorized('usernmame/password not valid')
                res.send('login successfull')
    }catch (error){
        if(error.isJoi ===true)
            return next(createError.BadRequest('invalid username/password'))
        next(error)
    }
}
 };

