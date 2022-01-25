const jwt = require('jsonwebtoken')

var older_token = jwt.sign({ foo: 'bar', exp: Math.floor(Date.now() / 1000) + 20 }, 'shhhhh');
console.log(older_token);