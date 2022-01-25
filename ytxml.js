const axios = require("axios");
const wj = require("w-json");
const fs = require("fs");
var util = require('util')

axios.get('https://www.youtube.com/channel/UCV0qA-eDDICsRR9rPcnG7tw/live')
.then((res)=>{
	console.log(res.request.res.fetchedUrls)
	fs.writeFileSync(__dirname+"/log.txt", util.inspect(res))
})