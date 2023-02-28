const mongoose = require("mongoose");

const msgSchema = new mongoose.Schema({
    name :{
        type : String ,
        required : true,
        

    },
    email : {
        type : String ,
        required : true,
       

    },
    message :{
        type : String ,
        required : true,

    }
})

// create model

const Message = new mongoose.model("Message",msgSchema);
module.exports = Message;
