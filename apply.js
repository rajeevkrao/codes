function sum(a,b,c){
    console.log(a+b+c)
}

let arr = [1,2,3,4]

sum.apply(null, arr)

//Try apply with array.prototype.push()
//multiple parameters to push function can add multiple items to array
//Eventually we can concatenate 2 arrays this way

let a = [1,2]
let b = [3,4]

a.push.apply(a,b)

console.log(a)

//Instead you can also do

let c = [1,2]
let d = [3,4]

c.push(...d)

console.log(c)


