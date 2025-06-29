

//  const { signAccessToken, verifyAccessToken } = require('../helpers/jwtToken'); // ✅ Make sure the path and filename match
// const { authSchema } = require('../helpers/validationschema.js');
// const User = require('../models/usermodel');
// const createError = require('http-errors');

 

//  module.exports= {
//     registerUser: async(req, res, next) =>{
        
//     try{
//         const result = await authSchema.validateAsync(req.body);
//         const {email} = result;

//         const Exists = await User.findOne({ email});
//         if (Exists) throw createError.Conflict(`${email} has already been registered`)
//             const user = new User(result)

//         const savedUser = await user.save()

//         res.send (savedUser);
//     }catch (error){
//         if(error.isJoi === true)error.status = 422
//         next(error);
//     }
// },
// login: async(req, res, next)=>{
//     try{
//         const result = await authSchema.validateAsync(req.body)
//         const user = await User.findOne({email: result.email})
//         if(!user) throw createError.NotFound('User not registered')

//             //matching the password
//             const isMatch = await user.isValidPassword(result.password)
//             if(!isMatch) throw createError.Unauthorized('usernmame/password not valid');
//             const accessToken = await signAccessToken(user.id);

//                 res.send({accessToken});
//     }catch (error){
//         if(error.isJoi ===true)
//             return next(createError.BadRequest('invalid username/password'))
//         next(error)
//     }
// }
//  };

const { signAccessToken, verifyAccessToken } = require('../helpers/jwtToken'); // ✔️ Make sure this file exists exactly as named (no spaces!)
const { authSchema } = require('../helpers/validationschema.js');
const User = require('../models/usermodel');
const createError = require('http-errors');

module.exports = {
  // ✅ Registration Controller
  registerUser: async (req, res, next) => {
    try {
      const result = await authSchema.validateAsync(req.body);
      const { email } = result;

      const exists = await User.findOne({ email });
      if (exists) throw createError.Conflict(`${email} has already been registered`);

      const user = new User(result);
      const savedUser = await user.save();

      res.send(savedUser);
    } catch (error) {
      if (error.isJoi === true) error.status = 422;
      next(error);
    }
  },

  // ✅ Login Controller
  login: async (req, res, next) => {
    try {
      const result = await authSchema.validateAsync(req.body);
      const user = await User.findOne({ email: result.email });
      if (!user) throw createError.NotFound('User not registered');

      // Check password
      const isMatch = await user.isValidPassword(result.password);
      if (!isMatch) throw createError.Unauthorized('Username or password not valid');

      // Generate access token
      const accessToken = await signAccessToken(user.id);

      res.send({ accessToken });
    } catch (error) {
      if (error.isJoi === true) {
        return next(createError.BadRequest('Invalid username or password'));
      }
      next(error);
    }
  },
};


