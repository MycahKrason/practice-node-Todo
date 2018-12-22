var mongoose = require('mongoose');

//Configure Mongoose to connect to DB and use Promises
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

module.exports = {mongoose};