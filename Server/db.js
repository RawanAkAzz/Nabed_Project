const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/users');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
 console.log( 'we are connected!')
});

let doctorSchema= mongoose.Schema({
    "name": { type : String },
    "email": { type : String , unique : true, required : true },
    "password":{ type : String , unique : true, required : true },
    "phoneNumber": { type : String , unique : true, required : true },
    "specialty":String,              
    "Location":String,
    "DepartName":String,
     "url":{
      type: String,
      default: 'https://previews.123rf.com/images/miceking/miceking1702/miceking170200267/72684680-doctor-word-in-retro-font.jpg'
  }
});


let categorySchema= mongoose.Schema({
  "name": { type : String , unique : true, required : true },
   "url": String ,
  "specialty":String,
   });
 
let Doctor = mongoose.model('Doctor', doctorSchema);

let save = (data => {
    // TODO: Your code here
    // This function should save a repo or repos to
    // the MongoDB
    for (var i = 0 ; i < data.length ; i++){
      var obj = {
        name:data[i].name,
        specialty:data[i].specialty,
   
  
  }
      var use = new Doctor(obj);
      use.save()
  }
  })
  
  module.exports.save = save;
	
 
module.exports.Doctor = Doctor;