(async()=>{
    await new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("hello")
            resolve();
        },1000)
    })
    console.log("world")
})();





