require('dotenv').config();

const rj = require("r-json")
const wj = require("w-json")

const Mongo = require('./modules/mongodb.js')

var mongo = new Mongo();
//---------------------------------------------

/*mongo.getGuildUsers("395640375533895691").then(docs=>{
	console.log(docs);
});*/

mongo.getGuildLBoard("395640375533895691").then(docs=>{
	console.log(docs)
})

/*mongo.getClient().then(client=>{
	client.db("carrybot").collection("discord_users").distinct("UID")
	.then(count=>{
		console.log(count.length)
	})
})*/

/*mongo.getClient().then(client=>{
	var r = rj(__dirname+"/usero.json")
	for (const [UID, value] of Object.entries(r)){
		if(value.name)
			delete value.name
		if(value.tokens)
			delete value.tokens
		console.log(value)
		for (const [GID, subvalue] of Object.entries(value)){
			mongo.setPointsToUser(UID,GID,subvalue.points)
		}
	}
})*/



/*mongo.getClient().then(client=>{
	client.db("carrybot").collection("discord_users").deleteMany();
})*/

/*mongo.addPointsToUser("123","123",-110)
.catch(err=>{
	console.log(err)
})*/

/*var r = rj(__dirname+"/usero.json")

var t = rj(__dirname+"/temp.json")

r = {
	...t,
	...r
}

wj(__dirname+"/usero.json",r)*/

//mongo.UsertoDU();

/*mongo.getUserPoints("366565330719473667","395640375533895691")
.then(points=>{
	console.log(points)
})
.catch(err=>{
	console.log(err)
})
*/
/*mongo.getClient().then(client=>{
	client.db("carrybot").collection("discord_users").countDocuments({UID:"366565330719473667"}).then(count=>{
		console.log(count)
	})
})
*/
/*mongo.getUserServers("366565330719473667").then(doc=>{
	console.log(doc)
})*/

//mongo.getEAllDocs();

/*var ori = rj(__dirname+"/usero.json")
var old = rj(__dirname+"/users.json")

var count = 0;
var subcount = 0;

const keys = Object.keys(old);

//console.log(ori)

var temp = {}

keys.forEach((key,index)=>{
	var temp = old[key]
	if(old[key].name)
		delete old[key].name
	if(old[key].tokens)
		delete old[key].tokens
	const subkeys = Object.keys(old[key])
	subkeys.forEach((subkey,index)=>{
		//console.log(old[key][subkey])
	})

	if(!ori[key]){
		count++;
		//console.log(old[key])
		temp[key] = old[key]
		console.log(old[key])
	}	

})

console.log(temp)

wj(__dirname+"/extras.json", temp)

console.log(count)*/