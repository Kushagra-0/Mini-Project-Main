const express = require('express');
const app = express();
const port = 8000;
const connectDB = require('./db/dbConnection');
const User = require('./db/user');
const cors = require('cors');
const bcrypt = require('bcrypt');

app.use(express.json());
app.use(cors())

const salt = bcrypt.genSaltSync(10);

//Registration
app.post('/register',async(req,res) => {
    try{
        const {username,password} = req.body;
        const hpassword = bcrypt.hashSync(req.body.password,salt) 
        console.log(hpassword)
        console.log(req.body)
        const user = new User({username,password});
        await user.save();
        res.status(201).json({message:'Registration Successful'}.redirect('/'));
    }
    catch(error){
        res.status(500).json({error:'Registration failed'});
    }
})


//Login
app.post('/login',async(req,res)=>{
    try{
        const {username,password} = req.body;
        const user = await User.findOne({username});

        if(!user){
            return res.status(401).json({error:'Invalid username or Password'});
        }

        if(user.password !== password){
            return res.status(401).json({error:'Invalid username or password'});
        }
        res.status(200).json({message:'Login successful'})
    }
    catch(error){
        res.status(500).json({error:'Login failed'})
    }
})

connectDB();

app.listen(port,()=> {
 console.log('Server is listening on Post 8000')
});