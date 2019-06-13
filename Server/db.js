const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/users');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
 console.log( 'we are connected!')
});

let doctorSchema= mongoose.Schema({
    "name": String ,
     "fbAccount": String,
    "description": String,
    "username": String,
    "phoneNumber":Number,
    "Location":String,
    "password": String
});

let Doctor = mongoose.model('Doctor', doctorSchema);


	
 
module.exports.Doctor = Doctor;