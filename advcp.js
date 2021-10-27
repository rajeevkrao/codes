const clipboardListener = require('clipboard-event');
const clipboardy = require('clipboardy');

    // To start listening
    clipboardListener.startListening();

    clipboardListener.on('change', () => {
      if(!(clipboardy.readSync()).startsWith(' = ')){
        console.log('Clipboard changed');
        var word = clipboardy.readSync()
        clipboardy.writeSync(" = " + word.replace(/\"/g,""))
        console.log(clipboardy.readSync())
      }
    });



process.once('SIGINT', function (code) {
  // To stop listening
  clipboardListener.stopListening();
  console.log("end SIGINT")
});

// vs.

process.once('SIGTERM', function (code) {
  // To stop listening
  clipboardListener.stopListening();
  console.log("end SIGTERM")
});