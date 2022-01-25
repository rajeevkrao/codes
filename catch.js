function av(a){
	return new Promise((resolve, reject)=>{
		if(a==1)
			resolve("yes")
		else
			reject("no")
	})
}

(async()=>{
	var a = await av(2).catch(err=>{

	})
	console.log(a)
})()