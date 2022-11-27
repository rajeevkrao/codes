a = [1,2,3,4]


//some -> returns true if the condition is true for any one of the element in an array
console.log(a.some(value=>{
    return value>3
}))

//some -> returns true if the condition is true for all the element in an array
console.log(a.every(value=>{
    return value>3
}))