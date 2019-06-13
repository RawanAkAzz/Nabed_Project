const express = require('express');
const db = require("./db.js");
const app = express();
const bodyParser= require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/Doctors', (req , res)=>{
    db.Doctor.find({}).then(function(doctor){
        return res.send(doctor);
     })
     .catch(function(err){
        return res.status(HTTP_SERVER_ERROR).send(err.message);
    })
} );

app.get('SignIn')

app.post('SignIn', function(req,res){
   var username = req.body.username;
   var password = req.body.password;
   db.Doctor.findOne({username:username , password:password} ,function(err,db){
      if(err){
         return res.send({username:username , password:password});
      } else{
         return res.status(404).send();
      }
   })
      console.log(Doctor)
   res.send({username:username , password:password});
})

app.post('/Register', (req , res)=>{
  var name = req.body.name 
  var username = req.body.username
   var password = req.body.password
  var phoneNumber = req.body.phoneNumber
  var description = req.body.description
  var  Location = req.body.Location
  var fbAccount = req.body.fbAccount
  
   db.Doctor.create({name: name ,username:username,password:password,phoneNumber:phoneNumber, description
      : description ,Location:Location , fbAccount: fbAccount,})
         .then(function(doctor){
           return res.send({name: name// ,username:username,phoneNumber:phoneNumber, description
   //  : description ,Location:Location , fbAccount: fbAccount*?});
         })
         .catch(function(err){
            return res.status(HTTP_SERVER_ERROR).send(err.message);
        })
   } );
})
const port = 5001;
app.listen(port , () => console.log( `listening on port ${port}`));