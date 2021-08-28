const mongoose = require('../database/index');

const userSchema = new mongoose.Schema({
name:{
    type: String,
    required: true,
},
email:{
    type: String,
    unique: true,
    required: true,
    lowercase: true,
},
pwd:{
    type: String,
    required: true,
    select: false,
},    
});

const user = mongoose.model('User', userSchema);

module.exports = user;