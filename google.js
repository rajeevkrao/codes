const {google} = require('googleapis');
const wj = require('w-json');

wj(__dirname+"/google.json",Object.getOwnPropertyNames(google.drive.prototype))