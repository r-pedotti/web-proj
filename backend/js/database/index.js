const mongoose = require('mongoose');

//rodar local:  mongoose.connect('mongodb://localhost/utfpr');
mongoose.connect('mongodb+srv://as34a:utfpr@cluster0.hiakv.mongodb.net/test');
mongoose.Promise = global.Promise;

module.exports = mongoose;