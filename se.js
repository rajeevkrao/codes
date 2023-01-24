const axios = require("axios");

token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNWY2OWZmMDA4Nzg5MDU4Yzk4ZTc2YWFlIiwicm9sZSI6Im93bmVyIiwiY2hhbm5lbCI6IjVmNjlmZjAwODc4OTA1MTljN2U3NmFhZiIsInByb3ZpZGVyIjoieW91dHViZSIsImF1dGhUb2tlbiI6ImRkbVhLcVVoUjBoY3M3eDgwSl82QjNHWWo5MEhyWm1tNEh6ZzgxcWhfRTItYWlDZCIsImlhdCI6MTYzMDEyOTA3NSwiaXNzIjoiU3RyZWFtRWxlbWVudHMifQ.wulxkctkgvUTfO0hq6uEFI0TbK41JFK_hGPKJW0W83Y'

const seAPI = axios.create({
  baseURL: 'https://api.streamelements.com/kappa/v2/',
  headers: {'Authorization': 'Bearer '+token}
});

/*seAPI.get('/bot/commands/5f69ff0087890519c7e76aaf')
.then((res)=>{
	console.log(res.data)
})*/

/*seAPI.put('/bot/timers/5f69ff0087890519c7e76aaf/6129cec4a2f35a431c86f9b3',{enabled:true,name:'Test Timer',chatLines:5,messages:['123','1222','234']})
.then((res)=>{
	console.log(res.data)
})
.catch(err=>{
	console.log(err)
})*/

seAPI.put('/bot/commands/5f69ff0087890519c7e76aaf/61a2df2f1edae307f4564d7c',{
	command:"songa",
	reply:"Current Song Playing"
})
.then((res)=>{
	console.log(res.data)
})
.catch(err=>{
	console.log(err.response.data)
})