// const { default: mongoose } = require("mongoose");

// const { default: mongoose } = require("mongoose");
const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email:{
        type: String,
        required: true,
        lowercase:true,
        unique:true,
    },
    password:{
        type: String,
        required: true,
    },
});
const user = mongoose.model('user', userSchema)
module.exports = user;