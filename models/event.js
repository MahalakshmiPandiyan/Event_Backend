const mongoose1=require('mongoose');
var Event = mongoose1.model('Event',{
    event_name:{
        type:String
    },
    event_date:{
        type:Date
    },
    event_time:{
        type:String
    },
    photography:{
        type:String
    },
    food:{
        type:String
    },
    decoration:{
        type:String
    },
    orangizer:{
        type:String
    }
});

module.exports={Event};