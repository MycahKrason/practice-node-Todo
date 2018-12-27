var mongoose = require('mongoose');

//Configure Mongoose to connect to DB and use Promises
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI);

module.exports = {mongoose};