const redux = require('redux')
mongoose.schema = new user({
    name:{
        type:String,
        required : true,
        important:true
    },
    user:{
        type:String,
        required:true,
    },
    gmail:{
        type:String,
        required:true,
    },
    extra_number:{
        type:String,
        required:true,
        regex:'@#)&%'
    }
 });
 module.exports = userSchema;
