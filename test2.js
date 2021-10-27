const dropboxV2Api = require('dropbox-v2-api');
const fs = require("fs")

const dropbox = dropboxV2Api.authenticate({
    token: 'bvSrUG3Ple8AAAAAAAAAARZVHP-IWqFcV2Ra2fDUoYyLoOe9ykKG2lJQ_BHOMk-K'
});
var acc_id="dbid:AADu3irgbGqlI1f51e2TmmLhrWryZDXZtJo"
var cursor="AAGrw8J6L6kMxXOKF0SBtSf21M8JllVKN4K0bUmYRuu3tivoNGs01k-57Eg22JmGyMPg5UHQNbkujuHKDBrT9qb0MaqB7mUUnj6aC75HZ6QzWHSXsnJnc4_Cojz-iO-BGZaiWcd29QtbdRuICyiO-jt98VFClV_3A5pLd6l96xYbCSOoO4mm0RYyRAn4nA8Eulw"
var str
dropbox({
    resource: 'files/download',
    parameters: {
        path: '/users.json'
    }
}, (err, result, response) => {
    file = fs.createWriteStream("./temp.json");
    file.write(JSON.stringify(response));
})


/*
dropbox({
    resource: 'files/list_folder/continue',
    parameters: {
        cursor:cursor
    }
}, (err, result, response) => {
    if (err) { return console.log(err); }
    console.log(result);
});*/

// use session ref to call API, i.e.:
/*dropbox({
    resource: 'files/list_folder/get_latest_cursor',
    parameters: {
        path:""
    }
}, (err, result, response) => {
    if (err) { return console.log(err); }
    console.log(result);
});*/