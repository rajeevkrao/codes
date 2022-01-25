//Array of Function
//Storing Functions in JSON
var rj = require("r-json");
var wj = require('w-json');

var func = []

func[0] = (i) =>{
	console.log(i);
}

func[1] = () =>{
	console.log(1223);
}

for(i in func)
	func[i] = func[i].toString();

wj(__dirname+"/test.json",func)

nFunc = rj(__dirname+"/test.json")

console.log(nFunc)

for(i in nFunc){
	nFunc[i] = eval(nFunc[i])
}

console.log(typeof(nFunc[0]))

while(typeof(nFunc[0]) == 'function'){
	nFunc[0]();
	nFunc.splice(0,1);
}

console.log(nFunc)