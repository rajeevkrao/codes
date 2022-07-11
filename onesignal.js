const OneSignal = require('onesignal-node');

const client = new OneSignal.Client('9cf36288-5a02-42e6-8c87-4f0d29cd5a9a', 'OGM0MmRjYjEtNDUwZC00YzdiLTlmOWItZmVjZDcxYjE3M2Iz');

const notification = {
  headings:{
    'en':'New Room has been created'
  },
  contents: {
    'en': 'Test Room id - 1231231\nPass - OTAKU',
  },
  buttons:[
    {
      id:"id1",
      text:"OK"

    }
  ],
  included_segments: ['Active Users'],
}

client.createNotification(notification)
  .then(res => {
  	console.log(res.body.id)
  })
  .catch(e => {
  	console.log(e.statusCode);
    console.log(e.body);
  });