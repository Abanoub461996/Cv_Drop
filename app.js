const express = require('express');

const bodyParser = require("body-parser");


const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));


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
  var adress = req.body.adress;
  var adress2 = req.body.adress2;
  var linkedIn = req.body.linkedIn;
  var milotaryStatus = req.body.militaryStatus;
  var position =req.body.position;
  var degree = req .body.degree;
  var major = req.body.major;
  var experience = req.body.experience;

  console.log(fName,lName)
  res.send("Your Details have been successfully uploaded")
});

app.get("/search", (req, res) => {
    res.sendFile(__dirname+"/form/search/search.html")
})



app.listen(3000, () =>{
    console.log('running on port 3000')
});
