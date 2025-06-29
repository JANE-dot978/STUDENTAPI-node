// const JWT =require('jsonwebtoken');
// const createError = require('http-errors');
// // const { verifyAccessToken } = require('../helpers/jwtToken');
// // const { verifyAccessToken } = require('../helpers/jwtToken');



// module.exports={
//     signAccessToken:(UserId)=>{
//         return new Promise((resolve, reject)=>{
//             const payload ={}
//             const secret = process.env.ACCESS_TOKEN_SECRET;
//             const options ={
//                 expiresIn: '10m',
//                 issuer: 'EddTechnologies.com',
//                 audience: UserId,
//             }
//             JWT.sign(payload, secret, options, (error, token)=>{
//                 // if(error) reject(createError);
//                 if (error) return reject(createError.InternalServerError());

//                 resolve(token);
//             })
//         })
//     },
//     //middleware to verify access token

//     verifyAccessToken:(req, res, next)=>{
//         if(!req.headers['authorization']) return next(createError.Unauthorized());
//         const authHeader = req.headers['authorization'];
//         const bearerToken = authHeader.split(' ');
//         const token = bearerToken[1];
//         JWT.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, payload)=>{
//             if(err){
//                 return next (createError.Unauthorized())
//             }
//             req.payload = payload;
//             next()
//         })
//     },


// }

const JWT = require('jsonwebtoken');
const createError = require('http-errors');

module.exports = {
  // Generate Access Token
  signAccessToken: (userId) => {
    return new Promise((resolve, reject) => {
      const payload = {}; // optional user info like role, email can go here
      const secret = process.env.ACCESS_TOKEN_SECRET;
      const options = {
        expiresIn: '10m',
        issuer: 'EddTechnologies.com',
        audience: userId, // audience is usually user ID
      };

      JWT.sign(payload, secret, options, (error, token) => {
        if (error) {
          return reject(createError.InternalServerError());
        }
        resolve(token);
      });
    });
  },

  // Middleware to Verify Access Token
  verifyAccessToken: (req, res, next) => {
    if (!req.headers['authorization']) {
      return next(createError.Unauthorized());
    }

    const authHeader = req.headers['authorization'];
    const bearerToken = authHeader.split(' ');
    const token = bearerToken[1];

    JWT.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, payload) => {
      if (err) {
        return next(createError.Unauthorized());
      }
      req.payload = payload;
      next();
    });
  },
};
