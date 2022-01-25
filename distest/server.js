const Discord = require("discord.js");

const client = new Discord.Client({
    disableEveryone: true,
    fetchAllMembers: false,
    sync: true,
    partials: ['MESSAGE', 'CHANNEL', 'REACTION'] 
});

const wj = require('w-json')
const { MessageEmbed } = require('discord.js');

var PORT    = process.env.PORT || 5000
var express   = require("express");
var path    = require('path');
var bodyParser  = require('body-parser');
var app       = express();
var math    = require("mathjs")

app.post('/test',function(request, response){
  console.log(request.body);
});

app.get('/api/discord/fetchmessages',(req,res) => {
  var {channelId, lastMsgId} = req.query;
  (async()=>{

    var arr=[];
    var i=0;
    if(lastMsgId)
    await client.channels.cache.get(channelId).messages.fetch({limit:20,before:lastMsgId}).then(messages => messages.forEach(function (message){
      arr[i++]={"username":message.author.username,"content":message.content,"id":message.id};
    }))
    else
    await client.channels.cache.get(channelId).messages.fetch({limit:20}).then(messages => messages.forEach(function (message){
      arr[i++]={"username":message.author.username,"content":message.content,"id":message.id};
    }))
    res.json({
        messages:arr,
        channeName:client.channels.cache.get(channelId).name,
        guildName:client.channels.cache.get(channelId).guild.name
      });
  })();
});

app.listen(PORT);

require('dotenv').config()

const config = {};
config.prefix = "!";
config.token = process.env.TOKEN;

client.on("ready", async() => {
  //934541194309042296
  let guild = client.guilds.cache.get("395640375533895691")
  let onlineMembers = (await guild.members.fetch()).filter((member) => !member.user.bot && (member.user.presence.status == 'online' || member.user.presence.status == 'dnd' || member.user.presence.status == 'idle')); // Remove the bot check as per use
  client.channels.cache.get("935474087071993886").setName("Online Count: "+onlineMembers.size.toString())
  //console.log(client.user.id) //get bot id
/*  client.users.cache.get("366565330719473667").send("testing")
  .then(msg=>{
    console.log(msg.channel.recipient.username)
  })*/
  /*var message = await client.channels.cache.get("480744870743506946").messages.fetch('835408034787491850')
  const exampleEmbed = new Discord.MessageEmbed()
  .setColor('#0099ff')
  .setTitle('Minecraft Server')
  .setDescription('If you are using Minecraft Java Edition you can join our server by using our ip below.\
    \nServer now is')
  .setImage('https://carrybot.rajeevk1.repl.co/img/online.png')
  .setFooter('Required Minecraft Version - 1.16.5');
  //message.edit(exampleEmbed)
  const emb = message.embeds[0];
  console.log(emb.fields)
  const example1Embed = new Discord.MessageEmbed(emb).setTitle('New title').setURL()
  message.edit(exampleEmbed)*/
  //message.edit("avb")
  //client.channels.cache.get("480744870743506946").send("123")

  
  
/*
  client.guilds.cache.get("395640375533895691").channels.cache.forEach(function(channel){
    if(channel.messages){

        channel.messages.fetch({limit:100})
        .then(message=>{
          console.log(message.type)
          
          if(message.author.id==='394497526801367041'){
            message.delete();
          }
          
        })
    }
  })
*/

  //remove hacked channels
  /*
  client.guilds.cache.get("395640375533895691").channels.cache.forEach(function(channel){
    if(channel.name==="hacked_by_ziksthemw"){
      channel.delete();
    }
  })
  */

  /*
  remove hacked roles
  client.guilds.cache.get("395640375533895691").roles.cache.forEach(function(role){
    if(role.name==='ziksthemw')
        role.delete();
  })
  */
  /*
  client.channels.cache.get("468827103182192640").messages.fetch("709200835434774548")
  .then(message=>console.log(message))
  */




//'@everyone @here PATLATILDINIZ! - ZepstaR\'da burda  Yakında **\"\".wra & .dcw\"** yi sikicek !!!https://discord.gg/QrXudAp - https://discord.gg/DxGyTB2   '

  console.log(`Bot has started, with ${client.users.cache.size} users, in ${client.channels.cache.size} channels of ${client.guilds.cache.size} guilds.`); 

  client.user.setActivity(`with ${client.guilds.cache.size} servers`);
});

client.on('messageReactionAdd', async (reaction, user) => {
  if (reaction.partial) {
    // If the message this reaction belongs to was removed the fetching might result in an API error, which we need to handle
    try {
      await reaction.fetch();
      await reaction.users.fetch();
      await reaction.message.fetch();
    } catch (error) {
      console.log('Something went wrong when fetching the message: ', error);
      // Return as `reaction.message.author` may be undefined/null
      return;
    }
  }
});

client.on("guildCreate", guild => {

  console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
  client.user.setActivity(`with ${client.guilds.cache.size} servers`);
});

client.on("guildDelete", guild => {

  console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
  client.user.setActivity(`with ${client.guilds.cache.size} servers`);
});

client.on("message", async message => {
  //console.log(message.guild);
  if(message.author.bot) return; 
  if(message.content.indexOf(config.prefix) !== 0) return;
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  if(command === "ping") {
    const m = await message.channel.send("Ping?");
    m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms`);
  } 



  if(message.content.startsWith(config.prefix + "botserversinv"))
  {
      let string = '';
      var i=1;
      client.guilds.cache.forEach(guild=>{
      string+= i + '. ' + guild.name + '\n';
      i++;
      })
      var embed = new MessageEmbed().setTitle("Servers which **" + client.user.username + "** has joined").setColor(0x0000FF).setDescription(string);
      message.channel.send(embed);
  };

  if(command === "test"){
    message.send(":thumbsup:").catch(err=>{
      console.log(err)
    })
  }
});

client.login(config.token);

