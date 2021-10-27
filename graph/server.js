const express = require("express"); 
var path		= require('path');
var bodyParser  = require('body-parser');


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'))

app.get('/',(req,res)=>{
	res.sendFile(__dirname+"/graph.html")
})
app.get('/test/*',(req,res)=>{
	res.sendFile(__dirname+"/test.html")
})

app.listen(5000)