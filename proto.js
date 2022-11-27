Array.prototype.asyncFE = async function (callback){
    var self = this;
    if(typeof(callback)!="function")
        throw new Error("Argument is not a function");
    await Promise.all(
        self.map(callback)
    )
}

const axios = require('axios');

let urls = [
	"https://facebook.com",
    "https://google.com",
	"https://twitter.com"
];

(async()=>{
    await urls.asyncFE(async(item,index,arr)=>{
        let result = await axios.get(item)
        console.log(result.config.url)
        return result
    })
    console.log(123)
})()