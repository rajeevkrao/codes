var string = "ROOM ID - 1234567\nPASS - OTAKU\nStarts at 8:45pm\nBGMI Version"
console.log(string)
var list = string.split('\n')
var lis = list.splice(3,1)
console.log(list)



/*var a = []

a.push({
	'vars':{message:"Hello World"},
	'func':(vars)=>{
		//console.log(vars)
		console.log(vars.message);
	}
})

a.push({
	'vars':{message:"Hello to Another World"},
	'func':(vars)=>{
		//console.log(vars)
		console.log(vars.message);
	}
})

//a[0].func()


var DisFnExec = () =>{
	while(a[0]){
		a[0].func(a[0].vars);
		a.splice(0,1);
	}
}

DisFnExec();
*/


/*const axios = require('axios');

axios.get('https://youtube.com/channel/UC8Ne4AAFNM2_D6v4vJ9xzJQ/live')
.then((response)=>{
	console.log(response)
})
.catch((error)=>{
	console.error(error)
})*/

/*const request = require("request");

var url = "https://youtube.com/channel/UC8Ne4AAFNM2_D6v4vJ9xzJQ/live"

request({ url: url, followRedirect: true }, function (err, res, body) {
  console.log(res.headers);
});*/

/*a = []

var loc = a.push(()=>{
	console.log("printing a");
})

console.log(loc-1)

a[loc-1]()*/

