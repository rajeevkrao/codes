/*
Understanding return in try catch finally block

return keyword in a try catch block always refer to the function where try catch has been used
and not on try or catch block.

if return is present in finally. If you use return in try or catch block.
Return in finally block is given priority.
That is return value in try or catch block is never returned

*/

function abc(){
  try{
     console.log(0);
     throw new Error("is empty");
     return 10;
  }
  catch(err){
     console.log(1);
     return 11;
  }
  finally{return 12;}
  return(4);
}
console.log(abc()); 