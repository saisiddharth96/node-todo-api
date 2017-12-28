var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
//mongoose.connect(process.env.MONGODB_URI, { useMongoClient: true });

//Use the below code to eliminate depreciation warning, the latest mongo client 
//needs a callback to handle errors while starting up servers
mongoose.connect(process.env.MONGODB_URI, { useMongoClient: true } , function(err, db) {
    if (err) {
        console.log('Unable to connect to the server. Please start the server. Error:', err);
    } else {
        console.log('Connected to Server successfully!');
    }
});

module.exports = {mongoose};
