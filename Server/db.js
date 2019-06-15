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

let save = (data => {
    // TODO: Your code here
    // This function should save a repo or repos to
    // the MongoDB
    for (var i = 0 ; i < data.length ; i++){
      var obj = {
        name:data[i].name,
        description:data[i].description,
   
  
  }
      var use = new Doctor(obj);
      use.save()
  }
  })
  
  module.exports.save = save;
	
 
module.exports.Doctor = Doctor;