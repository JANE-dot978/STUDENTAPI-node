 const express = require('express');
 const routes = express.Router();
const usercontroller = require('../controller/usercontroller');
routes.post('/registerUser', usercontroller.registerUser );
// routes.post('/login', usercontroller.login);

module.exports = routes;
