/*const ngrok = require("ngrok");
//require('dotenv').config()
require('dotenv').config();

(async()=>{
	await ngrok.authtoken(process.env.NGROK_TOKEN);
	try{
		var url = await ngrok.connect({proto:'tcp',addr:25575})
		console.log(url)
	}
	catch(e){
		console.log(e)
	}
	var api = ngrok.getApi();
	const tunnels = await api.listTunnels();
	console.log(tunnels)
})()*/

const fs = require('fs')
const wj = require('w-json')
const rj = require('r-json')

var a={abc:123}

if(!fs.existsSync(__dirname+"/test"))
	fs.mkdirSync(__dirname+"/test");
if(!fs.existsSync(__dirname+"/test/user2"))
	fs.mkdirSync(__dirname+"/test/user2");
wj(__dirname+"/test/user2/test.json",a)


