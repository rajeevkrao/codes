const clipboardy = require('clipboardy');

// Copy
clipboardy.writeSync('Hello Worldaa');

clipboardy.readSync();

setTimeout(()=>{
	clipboardy.readSync();
},5000)

