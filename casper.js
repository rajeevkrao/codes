
var casper = require('casper').create();
casper.start('http://casperjs.org/');

/*var casper = require("casper").create();

casper.start();

casper
  .then(function(){
    console.log("Start:");
  })
  .thenOpen("https://replit.com/@rkrao/yashwanth")
  .then(function(){
    // scrape something
    this.echo(this.getHTML('span.css-sgbfzi'));
  })
  .thenClick("button.css-634dgd")

casper.run(); */