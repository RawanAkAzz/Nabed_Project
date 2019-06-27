const express = require("express");
const bcrypt = require("bcrypt");
const {
  HTTP_CREATED,
  HTTP_UNAUTHORIZED,
  HTTP_BAD_REQUEST,
  HTTP_SERVER_ERROR
} = require("./Https.js");
const db = require("./db.js");
const app = express();
var cors = require("cors");
var firebase = require("firebase/app");
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// app.post('/ProfilePage',(req,res) => {
//    var image = req.body.image;
//    var url =  req.body.url ;
//    var progress = req.body.progress;
//    db.save.findOne({}).then(function(save){
//        return res.send({image:image , url:url , progress:progress})
//    })
//    .catch(function(err){
//       console.log("ERRRROR")
//       return res.status(HTTP_SERVER_ERROR).send(err.message);
// })

app.get("/Doctors", (req, res) => {
  db.Doctor.find({})
    .then(function(doctors) {
      console.log("RESSSSULt", doctors);
      return res.send(doctors);
    })
    .catch(function(err) {
      console.log("ERRRROR");
      return res.status(404).send(err.message);
    });
});

// app.get("SignIn");

app.post("/SignIn", function(req, res) {
  console.log(req.body.email)
  var email = req.body.email;
  var password = req.body.password;
//   db.Doctor.findOne({ email: email , password:password}.then(function(doctor){
//     res.send(doctor)
//     })
//     .catch(function(err){
//        return res.status(404).send(err.message);
// })
    // function( err ,
  //  data ) {
    // if (err) {
    //   res.status(500).json({
    //     error: "Internal error please try again"
    //   });
    //   // if the user name is ronge return this error
    // } else if (!data) {
    //   res.status(401).json({
    //     error: "Incorrect username or password"
    //   });
    //   //else match this 200 with frontend and enter the page
    // } else {
    //   console.log(data+"dad")
    //   res.send(data.json());
    // }
  //});

  db.Doctor.findOne({email:email,password:password
   })
       .then(function(doctor){
         if(doctor){
          return res.send(doctor);
         } else {
          res.status(401).json({
                error: "Incorrect username or password"
              });
         }

       
       })
       .catch(function(err){
          return res.status(404).send(err.message);
      })
    })

// if (!user) {
//   res.status(401).json({
//     error: "Incorrect username or password"
//   });
// } else {
//  res.send(user)
//  console.log(user)
// }
//  })
//  .catch(function(err){
//     return res.status(404).send(err.message);
// })
app.post("/Register", (req, res) => {
     console.log(req.body)
    var name = req.body.name
    var email=req.body.email
     var password = req.body.password
    var phoneNumber = req.body.phoneNumber
    var specialty = req.body.specialty
    var  Location = req.body.Location
  

     db.Doctor.create({name: name ,email:email,password:password,phoneNumber:phoneNumber, specialty
        : specialty ,Location:Location })
           .then(function(doctor){
           res.send(doctor)
           })
           .catch(function(err){
              return res.status(404).send(err.message);
          })

  // console.log(req.body);

  // var name = req.body.name
  //  var password = req.body.password
  //   var phoneNumber = req.body.phoneNumber
  //   var specialty = req.body.specialty
  //   var  Location = req.body.Location
  //   var fbAccount = req.body.fbAccount

  // const hashedPassword = bcrypt.hashSync(password, 10);
  // doctorSchema
  //   .create({
  //     name: name,
  //     password: hashedPassword,
  //     phoneNumber: phoneNumber,
  //     specialty: specialty,
  //     Location:Location
  //   })
  //   .then(function() {
  //     return res.status(HTTP_CREATED).send("Sign Up Successfull");
  //   })
  //   .catch(function(err) {
  //     if (err.code === 11000) {
  //       res.status(HTTP_BAD_REQUEST).send("This username is already taken");
  //     }
  //     return res.status(HTTP_SERVER_ERROR).send("Server Error");
  //   });
  // console.log(req.body)
  // res.send("Hello World");
});

app.get("/Profile", (req, res) => {
  console.log(req.body.image); 
  var name = req.body.name
  var phoneNumber = req.body.phoneNumber
//  var specialty = req.body.specialty
//  var  Location = req.body.Location
//   var image = req.body.image;
//   var url = req.body.url;
  db.Doctor.findOne({name: name , phoneNumber?:phoneNumber})
       .then(function(data){
       res.send(data)
        console.log(res.data)
      //  if (err) {
      //   // console.error(err);
      //   res.status(500).json({
      //     error: "Internal error please try again"
      //   });
      // } else if (!data) {
      //   res.status(401).json({
      //     error: "Incorrect username or password"
      //   });
      // } else {
      //   // console.log(user)
      //   res.sendStatus(data);
      // }
       })

});
app.post("/EditProfile", (req, res) => {
  console.log(req.body.image); 
  var name = req.body.name
 var phoneNumber = req.body.phoneNumber
 var specialty = req.body.specialty
 var  Location = req.body.Location
  var url = req.body.url;
  db.Doctor.findOne(
  




    {
      specialty:{$specialty :"Dental section"}
    
    //phoneNumber:phoneNumber, 
    //   specialty : specialty,
    //      url:url,
    // Location:Location 
   }).then(function(data){
       res.send(user)
       console.log(user
        )
       })
       .catch(function(err){
          return res.status(404).send(err.message);
      })
    })
const port = 5001;
  app.listen(port, () => console.log(`listening on port ${port}`));
