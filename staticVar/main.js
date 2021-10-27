var test = require('./class.js');
console.log(test.vari)
test.vari = 2;

var test2 = require('./class.js');
console.log(test2.vari);
console.log(test.vari)