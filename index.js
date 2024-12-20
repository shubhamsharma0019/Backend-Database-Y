const express = require('express');
const morgan = require('morgan');
const userModel = require('./models/user')

const app = express();
app.use(express.json())
app.use(express.static("public"))
app.use(express.urlencoded({extended:true}))
app.set('view engine','ejs');
app.use(morgan('dev'));


app.get('/',function(req,res){
    res.render('app');
   
})

app.post('/register',async function(req,res){


    const {username , password ,email} =req.body;
    await userModel.create({
        username:username,
        email:email,
        password:password
    })
    res.send({
        msg:"user registered"
    }) 
})


app.get('/get-users',function(req,res){
    userModel.find().then((users)=>{
        res.send(users)
    })
})

// app.get('/get-users',function(req,res){
//     userModel.findOne({
//         username:'shubham'
//     }).then((user)=>{
//         res.send(user)
//     })
// })

app.get('/update-user',async function(req,res){
    await userModel.findOneAndUpdate({
        username:'shubham'
    },{
        email:"c@cgmail.com"
    })
    res.send("updated user")
})

app.get('/delete-user',async function(req,res){
     await userModel.findOneAndDelete({
        username:'shubham'
     })
     res.send("user deleted")
})




app.get('/get-form-data',function(req,res){
    console.log(req.query);
    res.send("data received");
   
})

app.post('/get-form-data',function(req,res){
    console.log(req.body);
    res.send("data received");
   
})

app.listen(3000);