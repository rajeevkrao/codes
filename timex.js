const rj = require("r-json");
const wj = require('w-json');

var time = rj(__dirname+"/time.json")

var a = () =>{
	exmp();
}

a = a.toString();


var obj = {
	time: Date.now()+1000*30,
	func : a
}

console.log(obj)

time.push(obj)

wj(__dirname+"/time.json",time)


