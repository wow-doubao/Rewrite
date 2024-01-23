/*************************************

项目名称：妖精动漫
软件版本：1.0.0
脚本作者：南图
使用声明：⚠️仅供参考，🈲️转载与售卖！

**************************************

[rewrite_local]
^https:\/\/is5x9\.cc.*\.m3u8 url script-request-header https://raw.githubusercontent.com/wow-doubao/Rewrite/main/m3u8/yjdm.js

[mitm]
hostname = is5x9.cc

*************************************/
const headers = $request.headers
if (!headers.hasOwnProperty("X-Playback-Session-Id")) $done()

const url = $request.url
const newToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0aW1lc3RhbXAiOjE3MDM3MzQ4NDA4MzI4NzAwMDAsInVpZCI6MjI3MzA0NTh9.CCormhIlooOQJZyJq2qz_SdBKViiOww0Hib2Y-A-jY4";

function replaceTokenInUrl(url, newToken) {
  let matchResult = url.match(/^(.*\.m3u8)/);
  matchResult = matchResult ? matchResult[1] : "";

  return `${matchResult}?token=${newToken}`
}

const updatedUrl = replaceTokenInUrl(url, newToken);
$notify("视频链接捕获成功", "点击此通知在线观看", "视频还没开始播放之前会通知1-4次", {'open-url': updatedUrl});
console.log(`视频链接捕获成功:${updatedUrl}`)

$done()