const jwt = require("jsonwebtoken");

jwt.verify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmb28iOiJiYXIiLCJleHAiOjE2NDA5OTk4ODAsImlhdCI6MTY0MDk5OTg2MH0.akPEVesn_d4WeYIktMjjDlHqqkBkm09BrHcao5otJkA", "shhhhh", (err,data)=>{
	if(data)
		console.log(data)	
	if(err)
		console.log(err)
	console.log(Object.getOwnPropertyNames(err))

})