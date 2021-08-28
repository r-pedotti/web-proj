const express = require('express');

const User = require('../models/user');

const router = express.Router();

router.post('/register', async (req,res) => {
    try{
        const user = await User.create(req.body);
    
        return res.send({user});
    }
    catch(error){
        return res.status(400).send("error 400: register feiled"+error);
    }
});

router.post('/authenticate', async (req,res) => {
     const {email, pwd} = req.body;
     
     const user = await User.findOne({email}).select('+pwd');
    
    if(!user){
        return res.status(400).send({error: 'User not found. '});
    }

    if( pwd != user.pwd){
        return res.status(400).send({error: 'Invalid password. '})
    }

    return res.send({user});
})

module.exports = app => app.use('/auth',router);

