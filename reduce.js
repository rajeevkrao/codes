a = [1,2,3,4,5,6,7,8,9]

let sum = a.reduce(
    (acc,value)=>acc+=value
    ,0
)

console.log(sum)


/* 
Syntax

const sumWithInitial = array1.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue
  );
  
 */  