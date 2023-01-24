const axios = require('axios-observable');
const { RxHR:http } = require('@akanass/rx-http-request');
const { race } = require('rxjs');

/*http.get("https://www.actcorp.in/",{json:true}).subscribe({
	next:res=>{
		console.log(res.response.socket.servername)
	}
})*/

let urls = [
	"https://google.com",
	"https://facebook.com",
	"https://cloudflare.com",
	"https://promo.excitel.com",
	"https://amazon.in",
	"https://quora.com",
	"https://twitter.com",
	"https://www.actcorp.in",
]

let racer = urls.map(url=>{
	return http.get(url,{json:true})
})

/*race(racer).subscribe({
	next:res=>{
		console.log(res.response.headers.age)
	}
})*/


racer.forEach(url=>{
	url.subscribe({
		next:res=>{
			console.log(res.response.socket.servername, res.response.headers.age)
		}
	})
})
