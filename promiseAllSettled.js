//Time Sorted Promise All Settled

const axios = require('axios');

let urls = [
	"https://google.com",
	"https://facebook.com",
	"https://twitter.com"
];


Promise.allSettled(
    urls.map(async (item) => {
        let result = await axios.get(item)
        console.log(result.config.url)
        return {url:result.config.url,timeStamp:Date.now()}
    })
).then(results=>{
    results  = results.sort(compareTimeStamp)
    results.forEach(result=>console.log(result))
})

function compareTimeStamp(a,b){
    if(a.value.timeStamp>b.value.timeStamp)
        return 1;
    else if(a.value.timeStamp<b.value.timeStamp)
        return -1;
    else
        return 0;
}

//Note- This will only work if All Promises are fulfilled

