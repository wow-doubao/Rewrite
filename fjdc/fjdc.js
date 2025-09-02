/*************************************

项目名称：菲记单词
软件版本：1.0.0
脚本作者：南图
使用声明：⚠️仅供参考，🈲️转载与售卖！

**************************************

[rewrite_local]
^https:\/\/schoolapi\.xutongkeji\.com\/fjdc\/user\/home url script-response-body https://raw.githubusercontent.com/wow-doubao/Rewrite/main/fjdc/fjdc.js

[mitm]
hostname = schoolapi.xutongkeji.com

*************************************/

const obj = JSON.parse($response.body);

obj.data = {
  ...obj.data,
  "expireDate" : "2099-09-09",
  "active": true,
};

$done({body : JSON.stringify(obj)});