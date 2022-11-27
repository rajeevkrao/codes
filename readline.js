const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What do you think of Node.js? ', (answer) => {
  // TODO: Log the answer in a database
  console.log(`Thank you for your valuable feedback: ${answer}`);

  rl.close();
});




//Synchronous
const rls = require("readline-sync");

let answer = rl.question('What do you think of Node.js? ')

console.log(`Thank you for your valuable feedback: ${answer}`);