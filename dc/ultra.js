const axios = require('axios');
const lf = require('linkifyjs');
const url = require('url');
const open = require('open');
const readline = require('readline');
const rl = readline.createInterface({
	  input: process.stdin,
	  output: process.stdout
	});

(async()=>{
var arr;
axios.get('https://carrybot.rajeevk1.repl.co/ultra/getlivechat')
.then(res=>{
	res.data.forEach((list,index)=>{
		var date = new Date(list.timestamp)
		console.log(`${index+1}:`+date)
	})
	arr=res.data;
})
.then(()=>{
	rl.question('Enter your number get live chat link\n',answer=>{
		var result = lf.find(arr[Number(answer)-1].content);
		console.log(result[0].href)
		const current_url = new URL(result[0].href);
		const search_params = current_url.searchParams;
		const id = search_params.get('v');
		open('https://www.youtube.com/live_chat?v='+id);
		rl.close();
	})

})
.catch(error=>{
	console.log("Discord Bot wasn't ready")
})

})();