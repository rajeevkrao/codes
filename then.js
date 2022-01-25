function a(){
	return new Promise((resolve,reject)=>{
		resolve(123)
	})
}

a().then(()=>{
	console.log("234")
})

console.log(123)