const clipboardy = require('clipboardy');
var express = require('express');
var app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post('/', function(req, res){
   //console.log(req.body)
   clipboardy.writeSync(req.body.msg);


   /*setTimeout(()=>{
      clipboardy.readSync();
   },5000)*/
});

app.listen(1234,()=>{
   require('dns').lookup(require('os').hostname(), function (err, add, fam) {
      console.log('Listening to Local Address: ' + add);
   })
});