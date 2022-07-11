/*const ngrok = require("ngrok");
//require('dotenv').config()


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