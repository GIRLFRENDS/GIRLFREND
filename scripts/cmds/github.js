const axios = require("axios");
const moment = require("moment");
const fetch = require("node-fetch");
const fs = require("fs-extra");

module.exports = {
  config: {
    name: "github",
    aliases: ["git"],
    version: "1.0",
    author: "ArYan",
    countDown: 5,
    role: 0,
    shortDescription: "Get GitHub user info",
    longDescription: {
      en: "Provides you the information of a GitHub user",
    },
    category: "utility",
    guide: {
      en: "{pn} <username>",
    },
  },

  onStart: async function ({ api, event, args, message }) {
    if (!args[0]) return api.sendMessage(`Please provide a GitHub username`, event.threadID, event.messageID);

    fetch(`https://api.github.com/users/${encodeURI(args.join(' '))}`)
      .then(res => res.json())
      .then(async body => {
        if (body.message) return api.sendMessage(`User Not Found | Please Give Me A Valid Username!`, event.threadID, event.messageID);

        let { login, avatar_url, name, id, html_url, public_repos, followers, following, location, created_at, updated_at, bio } = body;

        const info = 
          `=== [ ɪɴғᴏ ɢɪᴛʜᴜʙ ] ===\n━━━━━━━━━━━━\n\n☆ɴᴀᴍᴇ: ${name}\n💥 ᴜsᴇʀɴᴀᴍᴇ: ${login}\n🌠 ɪᴅ: ${id}\n💬 ʙɪᴏ: ${bio || "No Bio"}\n🔓 ᴘᴜʙʟɪᴄ ʀᴇᴘᴏsɪᴛᴏʀɪᴇs: ${public_repos || "None"}\n♥︎ ғᴏʟʟᴏᴡᴇʀs: ${followers}\n🔖 ғᴏʟʟᴏᴡɪɴɢ: ${following}\n🌎 ʟᴏᴄᴀᴛɪᴏɴ: ${location || "No Location"}\n📌 ᴀᴄᴄᴏᴜɴᴛ ᴄʀᴇᴀᴛᴇᴅ: ${moment.utc(created_at).format("dddd, MMMM, Do YYYY")}\n♻ ᴀᴄᴄᴏᴜɴᴛ ᴜᴘᴅᴀᴛᴇᴅ: ${moment.utc(updated_at).format("dddd, MMMM, Do YYYY")}\n🖼 ᴀᴠᴀᴛᴇʀ:`;

        let getimg = (await axios.get(`${avatar_url}`, { responseType: "arraybuffer" })).data;
        fs.writeFileSync(__dirname+"/cache/avatargithub.png", Buffer.from(getimg, "utf-8"));

        api.sendMessage({
          attachment: fs.createReadStream(__dirname+"/cache/avatargithub.png"),
          body: info
        }, event.threadID, () => fs.unlinkSync(__dirname+"/cache/avatargithub.png"), event.messageID);
      });
  }
};
