const delay = require("delay");

async function test(){
	return new Promise((resolve,reject)=>{
		for(i=0;i<200;i++)
			console.log(i);
	})

}


test()

console.log("abc")