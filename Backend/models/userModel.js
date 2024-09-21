const mongoose = require('mongoose')

mongoose.Schema = {
    name:{
        type:String,
        required:true,
        hashed : false,
    },
    email:{
        type:String,
        required:true,
        hashed:false
    },
    number:{
        type:Number,
        required:true
    },
    password:{
        type:String,
        required:true,
        hashed:true
    }
}

module.exports = userModel