const axios = require('axios');

let urls = [
	"https://google.com",
	"https://facebook.com",
	"https://twitter.com"
];

(async () => {
	var a = await Promise.race(
		urls.map(async (item) => {
			let result = await axios.get(item)
			console.log(result.config.url)
			return result.config
		})
	)
    console.log(a)
})()


