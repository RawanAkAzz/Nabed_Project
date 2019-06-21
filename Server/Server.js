const express = require("express");
const bcrypt = require("bcrypt");
const {
  HTTP_CREATED,
  HTTP_UNAUTHORIZED,
  HTTP_BAD_REQUEST,
  HTTP_SERVER_ERROR
} = require("./constants.js");

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

app.get("SignIn");

app.post("SignIn", function(req, res) {
  var username = req.body.username;
  var password = req.body.password;
  db.Doctor.findOne({ username: username, password: password }, function(
    err,
    db
  ) {
    if (err) {
      return res.send({ username: username, password: password });
    } else {
      return res.status(200).send(); //200 and in the fetch make  if ==200 go to path
    }
  });

  res.send({ username: username, password: password });
});

app.post("/Register", (req, res) => {
  //    console.log(req.body.name)
  //   var name = req.body.name
  //    var password = req.body.password
  //   var phoneNumber = req.body.phoneNumber
  //   var description = req.body.description
  //   var  Location = req.body.Location
  //   var fbAccount = req.body.fbAccount

  //    db.Doctor.create({name: name ,password:password,phoneNumber:phoneNumber, description
  //       : description ,Location:Location , fbAccount: fbAccount})
  //          .then(function(doctor){
  //          res.send(doctor)
  //          })
  //          .catch(function(err){
  //             return res.status(404).send(err.message);
  //         })

  console.log(req.body);

  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const password = req.body.password;

  const hashedPassword = bcrypt.hashSync(password, 10);
  doctorSchema
    .create({
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: hashedPassword
    })
    .then(function() {
      return res.status(HTTP_CREATED).send("Sign Up Successfull");
    })
    .catch(function(err) {
      if (err.code === 11000) {
        res.status(HTTP_BAD_REQUEST).send("This username is already taken");
      }
      return res.status(HTTP_SERVER_ERROR).send("Server Error");
    });

  res.send("Hello World");
});

app.post("/Profile", (req, res) => {
  console.log(req.body.image);
  var image = req.body.image;
  var url = req.body.url;

  db.Doctor.create(
    { image: image, url: url }
      .then(function(doctor) {
        res.send(doctor);
      })
      .catch(function(err) {
        return res.status(404).send(err.message);
      })
  );
  const port = 5001;
  app.listen(port, () => console.log(`listening on port ${port}`));
});
