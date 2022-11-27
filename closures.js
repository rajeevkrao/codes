let makeCounter = () =>{
    let count = 0;
    return ()=>{
        return count++;
    }
}

let counter1 = makeCounter();
console.log(counter1());
console.log(counter1());
console.log(counter1());

console.log('\n')

let counter2 = makeCounter();
console.log(counter2());
console.log(counter2());
console.log(counter2());
