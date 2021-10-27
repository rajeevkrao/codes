const express = require("express");

const app = express();

const {google} = require('googleapis');

const oauth2Client = new google.auth.OAuth2(
  "537167556169-ahuum1evs43p50kd4jasco79c2rm5p20.apps.googleusercontent.com",
  "3y9xBn2suUMH3cxVH9QLHpg5",
  "http://localhost:5000/auth"
);

// generate a url that asks permissions for Blogger and Google Calendar scopes
const scopes = [
  //'https://www.googleapis.com/auth/youtube.channel-memberships.creator'
  'https://www.googleapis.com/auth/youtube',
	'https://www.googleapis.com/auth/youtube.force-ssl',
	'https://www.googleapis.com/auth/youtube.readonly'
];

const url = oauth2Client.generateAuthUrl({
  // 'online' (default) or 'offline' (gets refresh_token)
  access_type: 'offline',

  // If you only need one scope you can pass it as a string
  scope: scopes
});

app.get('/',(req,res)=>{
	if(req.params.code)
	{

	}
	else
		res.redirect(url)
})

app.get('/auth',async(req,res)=>{
	console.log(req.query)
	oauth2Client.getToken(req.query.code).then(tokens=>{
		oauth2Client.setCredentials(tokens);
		console.log(tokens)
	}).catch(err=>{
		console.error(err)
	})
	
})

app.get('/members',async(req,res)=>{

})


app.listen(5000)