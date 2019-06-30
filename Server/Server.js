const express = require("express");
const db = require("./db.js");
const app = express();
var cors = require("cors");
var firebase = require("firebase/app");
const bodyParser = require("body-parser");
app.use('/static', express.static(path.join(__dirname, '../build/static')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*"); 
		res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	 next();
  });

app.get("/*", (req, res) => {
	res.sendFile('index.html', {root: path.join(__dirname, '../build/')});
})

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

app.post("/Doctors", (req, res) => {
  console.log(req.body.cat , "xzdff")
  db.Doctor.find({ specialty: req.body.cat  })
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
  var email = req.body.email;
  var password = req.body.password;
  console.log("booooooody",req.body)
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
           console.log("HIIII",doctor)
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

app.post("/Register", (req, res) => {
     console.log(req.body)
    var name = req.body.name
    var email=req.body.email
     var password = req.body.password
    var phoneNumber = req.body.phoneNumber
    var specialty = req.body.specialty
    var  Location = req.body.Location
    console.log(name)

     db.Doctor.create({name: name ,email:email,password:password,phoneNumber:phoneNumber, specialty
        : specialty ,Location:Location })
           .then(function(doctor){
             console.log(doctor)
           res.send(doctor)
           })
           .catch(function(err){
              return res.status(404).send(err.message);
          })
 
});

app.get("/Profile", (req, res) => {
  console.log(req.body.image); 
  var name = req.body.name
  var phoneNumber = req.body.phoneNumber
//  var specialty = req.body.specialty
//  var  Location = req.body.Location
//   var image = req.body.image;
//   var url = req.body.url;
  db.Doctor.findOne({name: name , phoneNumber:phoneNumber})
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
app.get("/EditProfile/:name", (req, res) => {
  console.log("PARAMS",req.params); 
  db.Doctor.findOne(
  
    {
      name:req.params.name
   }).then(function(data){
    console.log("USER",data)
       res.send(data)
      
       })
       .catch(function(err){
          return res.status(404).send(err.message);
      })
    })
const port = 5001;
  app.listen(port, () => console.log(`listening on port ${port}`));
