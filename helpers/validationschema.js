// const express = require("express");
// const Joi = require('joi');
//  const authSchema = Joi.object({
//     email: Joi.string().email().lowercase().required(),
//     password: Joi.string().min(6).required(),
//  })
//  module.exports ={
//     authSchema
//  }

const Joi = require('joi');

// Validation schema for auth
const authSchema = Joi.object({
  email: Joi.string().email().lowercase().required(),
  password: Joi.string().min(6).required(),
});

module.exports = {
  authSchema
};

 