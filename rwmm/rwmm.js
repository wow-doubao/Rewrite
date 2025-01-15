/*
哎呀漫鸭
新商店版：让我喵喵
解锁会员权益
[rewrite_local]

https://www.pdreamer.com/aymyProd/api/getUserInfo url script-response-body https://raw.githubusercontent.com/wow-doubao/Rewrite/refs/heads/main/rwmm/rwmm.js

[mitm] 

hostname = www.pdreamer.com
*/
let obj = JSON.parse($response.body);
obj.data = {
  "purchasedVIPExpiresAt": "2099-09-09",//
  "vipexpiresAt": "2099-09-09",//
  "temporarySustainDay": "",
  "appAccountToken": "",
  "inviteNum": 99,
  "token": "",
  "purchasedVIP": "2099-09-09",
  "inviteCode": "",
  "vipStatus": 1//
};

$done({ body: JSON.stringify(obj) });
