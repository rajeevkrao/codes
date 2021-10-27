const axios = require('axios');

var myArgs = process.argv.slice(2);
axios.post('http://192.168.0.102:1234/',{msg:myArgs.join(' ')})
.catch(err=>{
	console.log(err)
})