const { Telegraf } = require('telegraf')

const bot = new Telegraf("2036584610:AAFMTtZR0s4FgC1ZFWP-FquHI6PwWiZTqPU");

/*bot.command('poll',ctx=>{
	ctx.telegram.sendPoll(ctx.chat.id, "Ip for",["Java","Bedrock"])
})*/

(async()=>{
	console.log(await bot.telegram.getChat(-525476811))
})();
bot.on('text',(ctx)=>{
	try{
	console.log(ctx.message.chat.id)
	}
	catch(err){

	}
	console.log(ctx.message.text)
})

//bot.telegram.sendMessage("-1001163504506","Testing")

//otaku custom room telegram channel id => -1001163504506
//group chat id => -1001150726903

bot.launch().then(async()=>{
	//console.log(bot.telegram.getUpdates());
})

//bot.telegram.sendMessage("872954435", 'Javaa🟢', {})

/*bot.telegram.sendMessage("-1001572694864", 'w', {reply_markup:{
		inline_keyboard: [ [{"text":"123"}],[{"text":"123"}]]

}})*/


//bot.telegram.setChatTitle('-1001572694864',"Testing123")