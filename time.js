const rj = require('r-json')
const wj = require('w-json')

var time = rj(__dirname+"/time.json")

time.forEach(async(ele, index, arr)=>{
	if(new Date()<ele.time)
		setTimeout(()=>{
			eval(ele.func)
			arr.splice(index,1)
			wj(__dirname+"/time.json",arr)
		},ele.time-new Date())
	else{
		eval(ele.func)
		arr.splice(index,1)
		wj(__dirname+"/time.json"+arr)
	}
		
})

function exmp(){
	console.log(123)
}
