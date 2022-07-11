const MongoClient = require('mongodb').MongoClient;
const delay = require('delay');
const rj = require("r-json")
const wj = require("w-json")

class Mongo{
	
	constructor(creds){
		let self = this;
		if(typeof(creds) == "object")
			var uri = `mongodb+srv://${creds.user}:${creds.pass}@dbase.oj0xm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
		else
			var uri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@dbase.oj0xm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
		const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
		client.connect(err => {
		  if(!err){
		  	console.log("mongodb database connected");
		  	self.client = client;
		  }
		  else
		  	console.log(err)
		});
		//deprecated one
		/*MongoClient.connect(uri, function(err, client) {
		if(err) {
	    	console.log('Error occurred while connecting to MongoDB Atlas...\n',err);
	  	}
		console.log("mongodb database connected");
		self.client = client;
		})*/
	}

	insertTest(Data){
		return new Promise(async(resolve,reject)=>{
			await this.awaitClient();
			this.client.db("testing").collection("testing").insertOne({"Data":Data}).then(doc=>{
				console.log(doc.ops[0]);
			})
		})
	}

	async awaitClient(){
		while(!this.client)
			await delay(500);
	} 

	addPointsToUser(UID, GID, point){
		return new Promise(async(resolve, reject)=>{
			await this.awaitClient();
			this.getUser(UID,GID).then(doc=>{
				this.client.db("carrybot").collection("discord_users").updateOne({UID:UID,GID:GID},{
					$inc:{points:point}
				})
				.then(dat=>{
					resolve(dat)
				})
				.catch(err=>{
					reject(err);
				})
			})
			.catch(err=>{
				if(err.code==404)
					this.client.db("carrybot").collection("discord_users").insertOne({UID:UID,GID:GID,points:point})
			})
			
		})
	}

	setPointsOfUser(UID, GID, point){
		return new Promise(async(resolve, reject)=>{
			await this.awaitClient();
			this.getUser(UID,GID).then(doc=>{
				this.client.db("carrybot").collection("discord_users").updateOne({UID:UID,GID:GID},{points:point})
				.then(dat=>{
					resolve(dat)
				})
				.catch(err=>{
					reject(err);
				})
			})
			.catch(err=>{
				if(err.code==404)
					this.client.db("carrybot").collection("discord_users").insertOne({UID:UID,GID:GID,points:point})
			})
			
		})
	}
	
	getUser(UID, GID){ //UID- User ID, GID - Guild ID
		return new Promise(async(resolve,reject)=>{
			await this.awaitClient();
			this.client.db("carrybot").collection("discord_users").findOne({UID:UID,GID:GID})
			.then(doc=>{
				if(doc)
					resolve(doc)
				else{
					var e = new Error("Document of Specified User with Guild does not Exist")
					e.code = 404
					reject(e)
					//Identify this error with .catch(err=>if(err.code==404)//things)
				}
			})
			.catch(err=>{
				reject(err)
			
			})
		})
	}

	getUserServers(UID){
		return new Promise(async(resolve,reject)=>{
			await this.awaitClient();
			this.client.db("carrybot").collection("discord_users").countDocuments({UID:UID})
			.then(res=>{
				resolve(res)
			})
		})
	}

	async getState(){
		await this.awaitClient();
		console.log(this.client.topology.s.state)
	}

	getClient(){
		return new Promise(async(resolve,reject)=>{
			await this.awaitClient();
			resolve(this.client)
		})
	}

	getGuildLBoard(GID){
		return new Promise(async(resolve,reject)=>{
			await this.awaitClient();
			var list = await this.client.db("carrybot").collection("discord_users").find({GID:GID},{"UID":1,"points":1}).sort({points:-1}).limit(10).toArray().then(docs=>{
				resolve(docs);
			})
		})
	}

	getGuildUsers(GID){
		return new Promise(async(resolve,reject)=>{
			await this.awaitClient();
			this.client.db("carrybot").collection("discord_users").find({GID:GID}).toArray().then(docs=>{
				resolve(docs);
			}).catch(err=>{
				reject(err);
			})
		})
	}

/*	getEAllDocs(){
		return new Promise(async(resolve, reject)=>{
			await this.awaitClient();
			this.client.db("carrybot").collection("users").find({}).toArray().then(docs=>{
				var temp = {}
				var tempid = '';
				var ori = rj(__dirname+"/../usero.json")
				docs.forEach(element=>{
					delete element["_id"]
					if(ori[element.discord_id])
						return;
					temp[element.discord_id]={};
					tempid = element.discord_id
					delete element["discord_id"];
					temp[tempid] = element;
				})
				console.log(temp)
				wj(__dirname+"/../users.json",temp);
			})
		})
	}*/

	getStats(){
		return new Promise(async(resolve,reject)=>{
			await this.awaitClient();
			this.client.db("carrybot").collection("users").stats().then(data=>{
				console.log(this)
				resolve(data)
			})
			.catch(err=>{
				reject(err)
			})
		})
	}

	async test(){
		var self=test;
		return new Promise(async(resolve, reject)=>{
			await self.awaitClient();
			resolve(self.client)
		})
	}

	
}

module.exports = Mongo;