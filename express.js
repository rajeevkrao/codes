const express = require("express");

const app = express();

app.get('/test',(req,res)=>{
	res.sendFile(__dirname+"/test.html")
})
app.get('/test/*',(req,res)=>{
	res.sendFile(__dirname+"/test.html")
})

app.listen(5000)