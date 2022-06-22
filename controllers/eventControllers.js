const express=require('express');
var router = express.Router();
var ObjectId= require('mongoose').Types.ObjectId;

var {Event}= require('../models/event');


router.post('/',(req,res)=>{
    var event=new Event({
        event_name:req.body.event_name,
        event_date:req.body.event_date,
        event_time:req.body.event_time,
        photography:req.body.photography,
        food:req.body.food,
        decoration:req.body.decoration,
        // decoration:req.body.role,

    });
    event.save((err,doc)=>{
        if(!err){res.send(doc);}
        else{console.log('error in save : '+ JSON.stringify(err,undefined,2));}
    });
});
module.exports=router;