const axios = require('axios');
require('dotenv').config();

var { UID, UT } = process.env;

var image_location_1 = 'https://instagram.fblr22-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/232495215_321159526423751_4285005838201306476_n.jpg?_nc_ht=instagram.fblr22-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=IrO8tGGXvsoAX-agshE&tn=iClJ0znIbqY7pvGr&edm=AP_V10EBAAAA&ccb=7-4&oh=3e3502fb350a1b5b0143197a3decccd5&oe=611C678A&_nc_sid=4f375e'

var post_url = 'https://graph.facebook.com/v10.0/'+UID+'/media'
axios.post(post_url,{
  'image_url': image_location_1,
  'caption': '#bgmi #otakugaming #youtube',
  'access_token': UT
})
.then((res)=>{
  console.log(res.data)
  if('id' in res.data){
    var creation_id = res.data['id'];
    var second_url = 'https://graph.facebook.com/v10.0/'+UID+'/media_publish'
    axios.post(second_url,{
      'creation_id': creation_id,
      'access_token': UT
    })
  }
  else{
    console.log("Some Error");
  }
})
.catch((err)=>{
  console.log(err)
})