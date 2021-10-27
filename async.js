function one(){
	new Promise((resolve, reject) =>{
		for(i=0;i<1e2;i++)
			console.log("one");
	});
	for(i=0;i<1e2;i++)
		console.log("two");
}
function two(){
	
}
one();
two();