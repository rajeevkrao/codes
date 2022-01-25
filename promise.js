function kickOff() {
  return new Promise(function(resolve, reject) {
    
    setTimeout(function() {
      resolve();
    }, 1000);
  }).then(function() {
    console.log('one')
    return "two";
  });
}

kickOff().then(function(result) {
    console.log(result);
});