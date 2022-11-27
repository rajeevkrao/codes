//for Promises

const axios = require('axios');

let urls = [
	"https://google.com",
	"https://facebook.com",
	"https://twitter.com"
];

(async () => {
	await Promise.all(
		urls.map(async (item) => {
			let result = await axios.get(item)
			console.log(result.config.url)
			return result
		})
	)
	console.log("late")
})()

//Building Prototype
Array.prototype.asyncFE = async function (callback){
    var self = this;
    if(typeof(callback)!="function")
        throw new Error("Argument is not a function");
    await Promise.all(
        self.map(callback)
    )
}
//Example

(async () =>{
    await urls.asyncFE(async(item,index,arr)=>{
        let result = await axios.get(item)
        console.log(result.config.url)
        return result
    })
    console.log(123)
})()

/* 
.
.
.  for Callbacks
.
.
 */
const fs = require('fs');

let files = [
	"./test-files/1.txt",
	"./test-files/2.txt",
	"./test-files/3.txt"
];

(async()=>{
	await Promise.all(
		files.map(async(file)=>{
			return new Promise((resolve,reject)=>{
				fs.readFile(file,"utf-8",(err,data)=>{
					if(err)
						return console.log(err)
					console.log(data);
					resolve();
				})
			})
		})
	)
	console.log("late")
})()

