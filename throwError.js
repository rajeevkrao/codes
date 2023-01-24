function throwError(code, message){
    let err = new Error(message)
    err.code = code;
    throw err
}

try{
    throwError(404,"Not Found") 
}
catch(err){
    console.log(err.code)
}   

