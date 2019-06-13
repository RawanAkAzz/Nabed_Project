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
app.post('/Register', (req , res)=>{
  var name = req.body.name 
  var username = req.body.username
   var password = req.body.password
  var phoneNumber = req.body.phoneNumber
  var  Location = req.body.Location
  var fbAccount = req.body.fbAccount
  
   db.Doctor.create({name: name, fbAccount: fbAccount, description
    : description ,username:username,phoneNumber:phoneNumber,Location:Location , password:password})
         .then(function(doctor){
            return res.send({name: name});
         })
         .catch(function(err){
            return res.status(HTTP_SERVER_ERROR).send(err.message);
        })
   } );
const port = 5000;
app.listen(port , () => console.log( `listening on port ${port}`));