const mongoose=require('mongoose');

var Employee = mongoose.model('Employee',{
    nameValue:{type:String},
    password:{type:String},
    role:{type:String},
});

module.exports={Employee};