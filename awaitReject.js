function a(){
  return new Promise((resolve,reject)=>{
    let a = 1;
    if(a)
      resolve(a)
    else
      reject(a)
    console.log("still exec")
  })
}

(async()=>{

})()

async function abc(){
  let ab = await a().catch(err=>console.error(err))
  if(ab === undefined) return;
  console.log(ab)
}

abc();