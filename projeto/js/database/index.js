const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/utfpr');
mongoose.Promise = global.Promise;

module.exports = mongoose;