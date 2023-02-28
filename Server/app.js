const express = require('express');
const dotenv = require ('dotenv');
const bcryptjs = require('bcryptjs');
const jwt = require ('jsonwebtoken');
const cookieParser = require('cookie-parser');
const mongoose = require ('mongoose');
const cors =require("cors");


mongoose.set('strictQuery', true);
mongoose.set('strictQuery', false);


const app = express();

//Require model
const Users = require('./models/userSchema');
const Message = require('./models/msgSchema');
const authenticate = require('./middleware/authenticate');

app.use (express.json());
app.use(express.urlencoded({extended: false}));
app.use (cookieParser());
app.use (cors ('*'));


// Registration 
app.post ('/register', async (req,res)=>{
    try{
        // get data
        const username =req.body.username;
        const email =req.body.email;
        const password =req.body.password;

        const createUser = new Users ({
            username :username,
            email : email,
            password : password
        }); 

        // save method
const created =  await createUser.save ()
console.log(created);
res.status(200).send ('registered');

    }catch (error) {
        res.status(400).send (error)

    }
});


//Login
app.use('/login',async (req,res)=>{
    try {
        const email =req.body.email;
        const password =req.body.password;
const user  =await Users.findOne({email:email});
if(user) {
    //verify password
    const isMatch  = await bcryptjs.compare(password,user.password);
    if(isMatch){
        const token = await user.generateToken();
        res.cookie("jwt", token,{
            //expire token in 24 hours
            expires :new Date(Date.now()+86400000),
            httpOnly : true

        })
        res.status(200).send("LoggedIn")
    }else {
        res.status(400).send("Invalid Credentials");

    }
}else {
    res.status(400).send(error);

}
    }catch (error)  {
        res.status(400).send(error);

    }
});


//Message 
app.post ('/message', async (req,res)=>{
    try{
        // get data
        const name =req.body.name;
        const email =req.body.email;
        const  message =req.body.message;

        const sendMsg = new Message ({
            name :name,
            email : email,
            message : message
        });

        // save method
const created =  await sendMsg.save();
console.log('created');
res.status(200).send ('sent'); 

    }catch (error) {
        res.status(400).send (error)

    }
})



app.get ('/', (req,res)=>{
    res.send ('Hello world');
    })
    
// db connection
mongoose
  .connect(
    "mongodb+srv://user:narendra61@cluster0.9tspmym.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => console.log("mongo db is connected...."))
  .catch((err) => console.log("error occure while connecting time", err));


  //Logout

app.get ('/logout',(req,res)=>{
    res.clearCookie("jwt",{path : "/"}),
    res.status(200).send("user Logout")
})


// Authentication 
app.get ('/auth',authenticate,(req,res)=>{

})



//run server 
app.listen(5000, () => {
    console.log("Server Running")
});

