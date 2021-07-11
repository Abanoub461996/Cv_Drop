var firebase = require("firebase/app");


// Add the Firebase products that you want to use
require("firebase/auth");
require("firebase/firestore");

const express = require('express');

const bodyParser = require("body-parser");


firebase.initializeApp({
    apiKey: "AIzaSyAbNoY1KoqC3VknnGzAjHFB-eJYnCmx_hg",
    authDomain: "cvexpress-68b7a.firebaseapp.com",
    projectId: "cvexpress-68b7a",
    storageBucket: "cvexpress-68b7a.appspot.com",
    messagingSenderId: "461719487106",
    appId: "1:461719487106:web:8b33e9b914a84a99252a9b",
    measurementId: "G-7SVH1N0GQZ"
});
const db = firebase.firestore();


const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
// const usersRef = ref.child('users');
// usersRef.set({
//   alanisawesome: {
//     date_of_birth: 'June 23, 1912',
//     full_name: 'Alan Turing'
//   },
//   gracehop: {
//     date_of_birth: 'December 9, 1906',
//     full_name: 'Grace Hopper'
//   }
// });
// Home Page

app.get("/", (req,res) =>{
    res.sendFile(__dirname+"/index.html")
});

// Form Page

app.get("/form", (req, res) => {
    res.sendFile(__dirname+"/form/form.html")
})

app.post("/form", function(req,res){
  var fName = req.body.fName;
  var lName =req.body.lName;
  var address = req.body.adress;
  var address2 = req.body.adress2;
  var linkedIn = req.body.linkedIn;
  var milotaryStatus = req.body.militaryStatus;
  var position =req.body.position;
  var degree = req .body.degree;
  var major = req.body.major;
  var experience = req.body.experience;
  var email = req.body.email;
  var skills = req.body.skills;
  var languages = req.body.languages;

//Firebase js code

// submit_cv.addEventListener("click", function () {

    db.collection("cvs").add({
        firstName: fName,
        lastName: lName,
        email: email,
        linkedIn: linkedIn,
        address: address,
        address2: address2,
        job_title: position,
        Major: major,
        experience: experience,
        Skills: skills,
        Languages: languages,
    }).then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
        });

    // console.log(value)
// });

//firebase js end code
  console.log(fName,lName,linkedIn)
  res.send("Your Details have been successfully uploaded")
});

app.get("/search", (req, res) => {
    res.sendFile(__dirname+"/form/search/search.html")
})



app.listen(3000, () =>{
    console.log('running on port 3000')
});
