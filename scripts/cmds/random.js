const { GoatWrapper } = require("fca-liane-utils");
module.exports = {
  config: {
    name: "random",
    role: 0,
    author: "ArYan",
    countDown: 5,
    longDescription: "video",
    category: "randomvideo",
    guide:{
      en: "{pn} <video>"
    } 
  },
   onStart: async function({ api, event }) {
  const axios = require('axios');
  const request = require('request');
  const fs = require("fs");
  var romim = [
    "https://a6-video-api-t0il.onrender.com/video/football","https://a6-video-api-t0il.onrender.com/video/messi",
   "https://a6-video-api-t0il.onrender.com/video/neymar",
    "https://a6-video-api-t0il.onrender.com/video/cr7",
    "https://a6-video-api-t0il.onrender.com/video/editfff",
  "https://a6-video-api-t0il.onrender.com/video/sadff",
  "https://a6-video-api-t0il.onrender.com/video/sakib",
  "https://a6-video-api-t0il.onrender.com/video/hazy",
    "https://a6-video-api-t0il.onrender.com/video/sigma"
  ]
  var romim1 = romim[Math.floor(Math.random() * romim.length)]
  axios.get(romim1).then(res => {
  let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
  let count = res.data.count;
  let romim2 = res.data.romim;
  let callback = function () {
          api.sendMessage({
            body: `𝗦𝗨𝗖𝗖𝗘𝗦𝗦𝗙𝗨𝗟𝗟𝗬 𝗔𝗣𝗜 𝗦𝗘𝗡𝗗 𝗩𝗜𝗗𝗘𝗢                           𝗥𝗔𝗡𝗗𝗢𝗠 𝗩𝗜𝗗𝗘𝗢\n\n｢ 𝗜𝘁𝘇 𝗔𝗿𝗬𝗔𝗡 ｣`,
            attachment: fs.createReadStream(__dirname + `/cache/Romim2.mp4`)
          }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/Romim2.mp4`), event.messageID);
        }
        request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/Romim2.mp4`)).on("close", callback);
      })
   } 
}

const wrapper = new GoatWrapper(module.exports);
wrapper.applyNoPrefix({ allowPrefix: true });
