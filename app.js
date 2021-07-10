const express = require('express');

const bodyParser = require("body-parser");


const app = express();
app.use(express.static("public"));



app.get("/", (req,res) =>{
    res.sendFile(__dirname+"/index.html")
});

app.get("/form", (req, res) => {
    res.sendFile(__dirname+"/form/form.html")
})

app.get("/search", (req, res) => {
    res.sendFile(__dirname+"/form/search/search.html")
})

app.listen(3000, () =>{
    console.log('running on port 3000')
});
