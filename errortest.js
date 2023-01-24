try{
	throw new Error(404)
}
catch(err){
	console.log(Number(err.message))
}