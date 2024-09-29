const { GoatWrapper } = require("fca-liane-utils");
const axios = require('axios');

module.exports = {
  config: {
    name: 'gen',
    version: '1.0',
    author: 'Fahim_Noob',
    countDown: 0,
    role: 0,
    longDescription: {
      en: 'Text to Image'
    },
    category: 'image',
    guide: {
      en: '{pn} prompt'
    }
  },

  onStart: async function ({ message, api, args, event }) {
    const promptText = args.join(' ');

    if (!promptText) {
      return message.reply("😡 Please provide a prompt");
    }
    
    api.setMessageReaction("⏳", event.messageID, () => {}, true);
    
    const startTime = new Date().getTime();

    message.reply("✅| Generating please wait.", async (err, info) => {
      try {
        const o = 'xyz';
        const imageURL = `https://smfahim.${o}/gen2?prompt=${encodeURIComponent(promptText)}`;
        const attachment = await global.utils.getStreamFromURL(imageURL);

        const endTime = new Date().getTime();
        const timeTaken = (endTime - startTime) / 1000;

        message.reply({
          body: `Here is your imagination 🥰\nTime taken: ${timeTaken} seconds`,
          attachment: attachment
        });

        let tempMessageID = info.messageID;
        message.unsend(tempMessageID);
        api.setMessageReaction("✅", event.messageID, () => {}, true);
        
      } catch (error) {
        console.error(error);
        message.reply("😔 Something went wrong, Skill issue");
        
        if (error.response && error.response.status === 403) {
          message.reply("🔑Skill issue.");
        }
        
        api.setMessageReaction("❌", event.messageID, () => {}, true);
      }
    });
  }
}

const wrapper = new GoatWrapper(module.exports);
wrapper.applyNoPrefix({ allowPrefix: true });
