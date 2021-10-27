const express = require("express");

const app = express();

const {google} = require('googleapis');

const oauth2Client = new google.auth.OAuth2(
  "537167556169-ahuum1evs43p50kd4jasco79c2rm5p20.apps.googleusercontent.com",
  "3y9xBn2suUMH3cxVH9QLHpg5",
  "http://localhost:8000/auth"
);

const scopes = [
  'https://www.googleapis.com/auth/youtube.readonly'
];

const url = oauth2Client.generateAuthUrl({
  // 'online' (default) or 'offline' (gets refresh_token)
  access_type: 'offline',

  // If you only need one scope you can pass it as a string
  scope: scopes
});

app.get('/',(req,res)=>{
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

app.listen(8000)
