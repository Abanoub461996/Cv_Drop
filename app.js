const express = require('express');

const bodyParser = require("body-parser");


const app = express();
app.use(express.static("public"));



app.get("/", (req,res) =>{
    res.sendFile(__dirname+"/index.html")
});

app.get("/uploadfiles", (req, res) => {
    res.sendFile(__dirname+"/form.html")
})

app.listen(3000, () =>{
    console.log('running on port 3000')
});
