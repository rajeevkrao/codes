const express = require("express");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//Uncomment this section to Enable CORS
/* app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
}); */

app.get('/test',(req,res)=>{
	res.sendFile(__dirname+"/test.html")
})

app.get('/test/*',(req,res)=>{
	res.sendFile(__dirname+"/test.html")
})

app.listen(5000)