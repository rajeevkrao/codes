// Import the lib
const { LiveChat } = require("yt-livechat");

var conf = {
    port:2000,
    chatCount:0,

}
// Or with TypeScript:
// import LiveChat from "yt-livechat"
 
//if()

// Let's do some config
const config = {
    liveChatID: process.env.LIVE_CHAT_ID || "KicKGFVDNTFPS0ZHcWlNR2NvMVFqWlFJNmdPZxILUTJ5eU50aDdOSzA", // ID of the LiveChat
    oauth: { // OAuth2 keys from Google Developers Console
        client_id: process.env.CLIENT_ID || "537167556169-ahuum1evs43p50kd4jasco79c2rm5p20.apps.googleusercontent.com",
        client_secret: process.env.CLIENT_SECRET || "3y9xBn2suUMH3cxVH9QLHpg5",
        refresh_token: process.env.REFRESH_TOKEN || "1//0gZadYBFneBm_CgYIARAAGBASNwF-L9IriY32DwQnJDnMlGvspltuYh97E4On5PumBCxQlH5SksAsE97eX5oz7JjTnTywdQB2wkY",
    },
};
 
const chat = new LiveChat(config); // Init chat object
 
// Register some events
chat.on("connected", () => console.log("Connected to the YouTube API."));
chat.on("error", (error) => console.log(error));
 
chat.on("chat", (message) => {
    console.log("hit")
    console.log(`New message from ${message.authorDetails.displayName}.`);
    console.log(message.authorDetails)
    if (message.snippet.displayMessage === "/hello") {
        chat.say("Hello world !");
    }
});
 
// Start polling messages
chat.connect();