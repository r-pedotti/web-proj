const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/utfpr',{useMongoClient: true});
mongoose.Promise = global.Promise;

module.exports = mongoose;