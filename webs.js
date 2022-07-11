/*const websocket = require("ws");

//const ws = new websocket('wss://detector.rkrao.repl.co');
var ws = new websocket('ws://detector.rkrao.repl.co/socket.io/?EIO=3&transport=websocket');



ws.on('connection', function connection(ws) {
	console.log('connected')
  ws.on("error", err=>{
  	console.log(err)
  })
  ws.on('message', function message(data) {
    console.log('received: %s', data);
  });

  
})

ws.onopen = () =>{
	ws.send("Hello")
}

ws.onclose = event =>{
	console.log(event)
}

ws.on('error',err=>{
	console.log(err)
})

process.on('SIGINT', function() {
	if(ws.readyState)
		ws.close();
});*/

const io = require("socket.io-client");

const socket = io("https://detector.rkrao.repl.co");

socket.on('connect',()=>{
	console.log("connected to socket.io server")
	socket.in('det').emit('detector',"Connect")
	socket.emit('detector',"Connect")
})

setTimeout(()=>{
	console.log(socket.status)
	if(socket.status){
		socket.emit('detector',"Hello")
		console.log("sent detector")
	}
},5000)

