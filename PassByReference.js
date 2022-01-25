//Pass by Reference

var obj = {
	a:1,
	b:2
}

function a(obj){
	obj.c = 3
}

a(obj)

console.log(obj)



/*But this doesn't work
obj = {
	...obj,
	c:3
}*/