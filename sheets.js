const { GoogleSpreadsheet } = require('google-spreadsheet');
var fs = require('fs');
const wJson = require('w-json');

var key = "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDGegTw56Hy3DQX\nn8DB++S7ZaH+d57xNC+A/yFwZay6YpbTk+ZLLQCMa4Vf15o+Fh06gXYd0rqhkhQe\n1/zp2o93IX+znQ3lY6ace0KbJvwFd7SY9DcqCgg8/ytR++qHHbZNgeJ9WU9merJY\n8nepSaSyuHz6mnElXv34JYFep7mAHMDqdKUZFDVEdiInJ3b/HFpw8ZFwnb2KYrp0\nOt74olbv1kPfD0MXOUJmFfqAkUIMM2F34sxpVGjD4XX8qCNSbmENsQAXaWmahziJ\nSQkViyn4iBCiRXXZbMjr1NvwbjlGrpKBrQ2BLukJoDjKgSzPDeHpImveL140Pd92\nfLE3RdqpAgMBAAECggEAAPrf2tDJcGtaE98d7+CBwSjDaBP3l3u3fcu1DL/Prj4X\na6UbUGZmAXvX5DjjYZl5k1Ch54v+GLDGvpb0ImOu+aMhePyNGYkydTxtMHyufXS7\ncWE6KF48d+NjZ/VNFGbuiyK9B6vKinjqxi8lRu5FvqdRL/3veFmUJ7tzf1o569xl\nLyhsw+Cr7Kaw0oUk5Mg3ygGCiEEhhxCCDdzUzV+1YpwptmbHvIxM8rNOOWh0Tj5x\nGQqxJRzjNoHvYMWDpHUl5Puz0Ew/Oa34Z/cnEfmRztIdIqWqayoRWG3jDHrjp3Bw\nHG6MLYg3fOqzTFDez2gu/1dmHtoUCO/VKrGYVpJx2QKBgQD0bwXIBgl54rEeu3rN\nLVwmgiADekdbwewnOW2ARxtbkv+fxWASaqTR3VnIZgPUCU3kAiGoRqDR8+OpyghK\nl8AlCsQEbFe7y5t3n1yrfHsWQ6RVE+4kxTU8+gE/mggaNytO+Oh+vbgG2UaEfyjj\n7h7kDO12PB8CWFQNzoxcDfYRJQKBgQDP3kpZFgTnAf79IsJSEAVaRCEYHM54w7bw\nyCBuT04AGEDqYW2BWwU7JlsI2U9pgNdvwFbnO4ameMwt05A7lvShQoIqcPYM3zr5\nbLhywIIykXcOxQHU7Wanq++JjWnoywipLJBaanDCKCZE6sXujwNLNDEhdN15MqoE\nHinUx1S2NQKBgAtm1l0zMuP1mA937U1+zSqarUWcQZHdJNfbjOkL6BHIdJYOTeHu\nCYwkiBiZ8ZnFaVW2Z72CteO1Paxg2SwpkfPoYaZXK2x+Hd1hmKADKXarZxH04Qnk\nDQywGLjPxYr7gdCoOagXz2q6Xdi2WcDwDY7Tr4vxV/zzA9C1DsUIfa7lAoGBAIpS\nJzMkvdpir6UObjRhSM6KK2N6N8KQqbmL0ljVGNhjSz8r2cyMHuz/VvCKepeADtvk\nJ2/zYmSAWY3dDEs65kowkaFgTbq/COVU/WAOzhSMS6deXRutZfQJK3piyakJAhhg\n+SXRUntAcEbH2zIlpFF0x4S12XJ+zjezQq6+fZZJAoGAO4If4V7q63RVxasU1G5U\n3Rcym5m6RFtSKrWNbXCimw0wTUQJ+EAKUEgB6FIUNRVjTncojsySX6yrhENAL46h\nBAH8atViaQR2KnP6TPz5yjOKYJewE81TivihD82g/FPxi6AJ1CKzS7dtv60qDp0o\nFnzEbPWIHzcuiS7vTPTJLY4=\n-----END PRIVATE KEY-----\n";

// Initialize the sheet - doc ID is the long id in the sheets URL
const doc = new GoogleSpreadsheet('1EMwGqLKnKZOqEGuiIoDox8wAEszmzY06kPOGCK82WtA');
(async()=>{
  // Initialize Auth - see more available options at https://theoephraim.github.io/node-google-spreadsheet/#/getting-started/authentication
  await doc.useServiceAccountAuth({
    client_email: "sheets@psychic-diorama-240708.iam.gserviceaccount.com",
    private_key: key,
  });

  await doc.loadInfo(); // loads document properties and worksheets
  //console.log(doc.title);
  const sheet = doc.sheetsByIndex[0];
  const points = doc.sheetsByIndex[1];

  await sheet.loadCells('A1:E300');
  await points.loadCells('A1:K300');

  var arr = [];
  var a = 0;
  var b = 0;

  // console.log(sheet.cellStats);
  // const test = sheet.getCell(0, 1);
  // console.log(test.value)
  for(i=1;i<=295;i+=6){
    if(!sheet.getCell(i+1, 0).value)
      break;
    var time = ""
    if(sheet.getCell(i+5, 0).value=="POOL-A"){
      a++;
      time = "7pm and 9pm Room Matches";
    }
    else{
      b++;
      time = "8pm and 10pm Room Matches"
    }
    var jsn = {
      "teamName":sheet.getCell(i+1, 0).value,
      "members":[],
      "time":time,
      "pool":sheet.getCell(i+5, 0).value,
      "tpoints":points.getCell(i+5,8).value
    }
    for(j=0;j<6;j++){
      if(!sheet.getCell(i+j, 1).value)
        continue;
      jsn.members.push(sheet.getCell(i+j, 1).value)
    }
    arr.push(jsn)
  }
  //console.log(arr)
  wJson(__dirname+"/reg.json",arr)
  var slota = []
  var slotb = []
  for(i=0;i<arr.length;i++){
    if(arr[i].pool="POOL-A"){
      slota.push(arr[i]);
    }
    else{
      slotb.push(arr[i]);
    }
  }
  console.log(slota.length)
  wJson(__dirname+'/slota.json',slota)
  wJson(__dirname+'/slotb.json',slotb)
  console.log("a="+a+"b="+b)

})()
