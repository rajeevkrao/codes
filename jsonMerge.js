//Merge 2 object values
//Values of recently added object with spread operator will be available in the newly created object

var a = {
    a:1,b:2,c:3,d:4
}

var b = {
    c:5,d:6,e:7
}

a = {
    ...b,
    ...a
}

console.log(a)