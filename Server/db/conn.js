const mongoose = require('mongoose');
const db = process.env.DATABASE;
 mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
 }).then (()=>{
console.log("mongo db is connected....");
 }).catch((e)=>{
   console.log(e);
 })