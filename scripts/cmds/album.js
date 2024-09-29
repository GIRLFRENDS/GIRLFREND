const { GoatWrapper } = require("fca-liane-utils");
module.exports.config = {
  name: "album",
  author: "ArYan",
  category: "VIDEO"
};

module.exports.onStart = async ({ api, event, args }) => {
  if (!args[0]) {
    api.setMessageReaction("🐼", event.messageID, (err) => {}, true);

    const ArYan= " ╭─────❁\n│      『 𝗔𝗟𝗕𝗨𝗠 𝗩𝗜𝗗𝗘𝗢 』 \n│\n├─❁ 1 - 𝗙𝗼𝗼𝘁𝗯𝘂𝗹𝗹 𝗩𝗶𝗱𝗲𝗼 \n├─❁ 2 - 𝗠𝗲𝘀𝘀𝗶 𝗦𝗸𝗶𝗹𝗹 \n├─❁ 3 - 𝗡𝗲𝘆𝗺𝗮𝗿 𝗦𝗸𝗶𝗹𝗹 \n├─❁ 4 - 𝗥𝗼𝗻𝗮𝗹𝗱𝗼 𝗦𝗸𝗶𝗹𝗹 \n├─❁ 5 - 𝗙𝗿𝗲𝗲 𝗙𝗶𝗿𝗲 𝗩𝗶𝗱𝗲𝗼 \n├─❁ 6 - 𝗙𝗿𝗲𝗲 𝗙𝗶𝗿𝗲 𝗦𝗮𝗱 \n├─❁ 7 - 𝗪𝗵𝗮𝗶𝘁𝗲 \n├─❁ 8 - 𝗕𝗼𝗻𝗲𝘅4 𝗙𝗙 \n├─❁ 9 - 𝗠1𝗻𝘅 𝗙𝗙\n├─❁ 11 - 𝗛𝗮𝘇𝘆 𝗠𝗮𝗻 \n├─❁ 12 - 𝗜𝘀𝗹𝗮𝗺𝗶𝗰 𝗩𝗶𝗱𝗲𝗼 \n├─❁ 13 - 𝗔𝗱𝗻𝗮𝗻 𝗛𝘂𝗷𝘂𝗿 \n├─❁ 14  - 𝗟𝗼𝘃𝗲 𝗩𝗶𝗱𝗲𝗼 \n├─❁ 15 - 𝗦𝘁𝗮𝘁𝘂𝘀 𝗩𝗶𝗱𝗲𝗼 \n├─❁ 16 - 𝗦𝗲𝘅 𝗩𝗶𝗱𝗲𝗼 \n╰────────────❁\n\n╭─────❁\n│   『 𝗘𝗩𝗘𝗥𝗬𝗢𝗡𝗘 』\n│please enter a valid\n│number of album\n╰────────────❁ ";
    await api.sendMessage(ArYan, event.threadID,
      (error, info) => {
        global.GoatBot.onReply.set(info.messageID, {
          commandName: this.config.name,
          type: "reply",
          messageID: info.messageID,
          author: event.senderID,
          msg: ArYan,
        });
      },
      event.messageID
    );
  } else if (args[0] === "2") {
    api.setMessageReaction("😍", event.messageID, (err) => {}, true);

    const ArYan = " ╭─────❃\n│      『 𝗔𝗟𝗕𝗨𝗠 𝗩𝗜𝗗𝗘𝗢 』 \n│\n├─❃ 17- 𝗟𝘆𝗿𝗶𝗰𝘀 𝗩𝗶𝗱𝗲𝗼 \n├─❃ 18 - 𝗔𝗲𝘀𝘁𝗵𝗲𝘁𝗶𝗰 𝗩𝗶𝗱𝗲𝗼 \n├─❃ 19 - 𝗖𝗮𝗿°𝘀 𝗩𝗶𝗱𝗲𝗼 \n├─❃ 20- 𝗔𝗻𝗶𝗺𝗲 𝗩𝗶𝗱𝗲𝗼 \n├─❃ 21- 𝗦𝗼𝗹𝗲 𝗟𝗲𝘃𝗲𝗹𝗶𝗻𝗴 \n├─❃ 22 - 𝗠𝗮𝗱𝗮𝗿𝗮 𝗩𝗶𝗱𝗲𝗼 \n├─❃23  - 𝗡𝗮𝗿𝘂𝘁𝗼 𝗩𝗶𝗱𝗲𝗼 \n├─❃ 24 - 𝗣𝗵𝗼𝗻𝗸 𝗩𝗶𝗱𝗲𝗼 \n├─❃ 25 - 𝗚𝗶𝗿𝗹 𝗩𝗶𝗱𝗲𝗼 \n╰────────────❃\n\n╭─────❃\n│  .『 𝗘𝗩𝗘𝗥𝗬𝗢𝗡𝗘 』\n│please enter a valid\n│number of album\n╰────────────❃";
    await api.sendMessage(ArYan, event.threadID,
      (error, info) => {
        global.GoatBot.onReply.set(info.messageID, {
          commandName: this.config.name,
          type: "reply",
          messageID: info.messageID,
          author: event.senderID,
          msg: ArYan,
        });
      },
      event.messageID
    );
  }
};

module.exports.onReply = async ({ api, event, Reply }) => {
  const axios = require("axios");
  try {
    if (event.type === "message_reply") {
      const ArYan = parseInt(event.body);
      api.unsendMessage(Reply.messageID);
      let r4m1m1;

      switch (ArYan) {
        case 1:
          r4m1m1 = "https://a6-video-api-t0il.onrender.com/Romim/football";
          break;
        case 2:
          r4m1m1 = "https://a6-video-api-t0il.onrender.com/Romim/messi";
          break;
        case 3:
          r4m1m1 = "https://a6-video-api-t0il.onrender.com/Romim/Neymar";
          break;
        case 4:
          r4m1m1 = "https://a6-video-api-t0il.onrender.com/Romim/cr7";
          break;
        case 5:
          r4m1m1 = "https://a6-video-api-t0il.onrender.com/Romim/editff";
          break;
        case 6:
          r4m1m1 = "https://a6-video-api-t0il.onrender.com/Romim/sadff";
          break;
        case 7:
          r4m1m1 = "https://a6-video-api-t0il.onrender.com/Romim/white01";
          break;
        case 8:
          r4m1m1 = "https://a6-video-api-t0il.onrender.com/Romim/ff";
          break;
        case 9:
          r4m1m1 = "https://a6-video-api-t0il.onrender.com/Romim/m1nx";
          break;
        case 10:
          r4m1m1 = "https://a6-video-api-t0il.onrender.com/Romim/sakib";
          break;
        case 11:
          r4m1m1 = "https://a6-video-api-t0il.onrender.com/Romim/sigma";
          break;
        case 12:
          r4m1m1 = "https://a6-video-api-t0il.onrender.com/Romim/islamic";
          break;
        case 13:
          r4m1m1 = "https://a6-video-api-t0il.onrender.com/Romim/adnan";
          break;
        case 14:
          r4m1m1 = "https://a6-video-api-t0il.onrender.com/Romim/love";
          break;
        case 15:
          r4m1m1 = "https://a6-video-api-t0il.onrender.com/Romim/status";
          break;
        case 16:
          r4m1m1 = "https://a6-video-api-t0il.onrender.com/Romim/horny";
          break;
case 17:
          r4m1m1 = "https://a6-video-api-t0il.onrender.com/Romim/lyrics";
          break;
case 18:
          r4m1m1 = "https://a6-video-api-t0il.onrender.com/Romim/aesthetic";
          break;
case 19:
          r4m1m1 = "https://a6-video-api-t0il.onrender.com/Romim/car";
          break;
case 20:
          r4m1m1 = "https://a6-video-api-t0il.onrender.com/Romim/anime";
          break;
case 21:
          r4m1m1 = "https://a6-video-api-t0il.onrender.com/Romim/arise";
          break;
case 22:
          r4m1m1 = "https://a6-video-api-t0il.onrender.com/Romim/madara";
          break;
case 23:
          r4m1m1 = "https://a6-video-api-t0il.onrender.com/Romim/naruto";
          break;
case 24:
          r4m1m1 = "https://a6-video-api-t0il.onrender.com/Romim/phonk";
          break;
case 25:
          r4m1m1 = "https://a6-video-api-t0il.onrender.com/Romim/girl";
          break;

        default:
          api.sendMessage("╭─────❁\n│Invalid selection.\n│Please enter a valid\n│number from the album.\n╰────────────❁", event.threadID, event.messageID);
          return;
      }

      const resp = await axios.get(r4m1m1);
      const url1 = resp.data.data;
      const video1 = await axios.get(url1, { responseType: 'stream' });
      const uri1 = resp.data.count;
      const rm1 = video1.data;
      api.sendMessage({ body: `╭─────❁\n│𝗦𝘂𝗰𝗰𝗲𝘀𝘀𝗳𝘂𝗹𝗹𝘆 𝗦𝗲𝗻𝗱 \n│𝗬𝗼𝘂𝗿 𝗩𝗶𝗱𝗲𝗼 \n│[ ${uri1} ]\n╰────────────❁`, attachment: rm1 }, event.threadID, event.messageID);
    }
  } catch (error) {
    api.sendMessage(`Error: ${error.message}`, event.threadID, event.messageID);
  }
};

const wrapper = new GoatWrapper(module.exports);
wrapper.applyNoPrefix({ allowPrefix: true });
