const { Telegraf } = require('telegraf')

const bot = new Telegraf("1032314535:AAHMuYc7aIE5VcSn3XoXFjlX8-aqJvH44gE");

bot.on('text',async(ctx)=>{
	//console.log(ctx.message)
	/*bot.telegram.getChat("-1001568492513").then(chat=>{
		if(chat.title == "Minecraft Server - Online🟢")
			console.log(123)
	})*/
	console.log(ctx.update.message.chat);
})

bot.telegram.sendMessage("-1001163504506","Testing")

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