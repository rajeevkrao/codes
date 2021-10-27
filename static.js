class disfuncs{
	constructor(){
		this.func = []
		this.wait=0;
		this.waiter = new Promise(function(resolve,reject){
			this.wait=1;
			setTimeout(()=>{
				resolve(1)
			},10000);
		})
	}
	displayfuncs(){
		console.log(this.func);
	}
	async showWaiter(){
		await 
	}
	addFunc(){

	}
}

var DisFuncs = new disfuncs();
console.log(func)
DisFuncs.displayfuncs();



