const { GoatWrapper } = require("fca-liane-utils");
const axios = require('axios');
const fs = require('fs');
const path = require('path');
const os = require('os');

module.exports = {
  config: {
    name: "sd3",
    version: "10.5",
    author: "ArYAN",
    shortDescription: { en: '' },
    longDescription: { en: "" },
    category: "image",
    countDown: 10,
    role: 0,
    guide: { en: '{pn} your prompt | image style' }
  },

  onStart: async function ({ api, event, args, message }) {
    const startTime = new Date().getTime();
    const prompt = args.slice(0, -1).join(" ");
    const imageStyle = args[args.length - 1];

    if (!prompt) {
      return message.reply("Please provide a prompt and model:\n\nNo style (default)\nCinematic\nPhotographic\nAnime\nManga\nDigital Art\nPixel art\nFantasy art\nNeonpunk\n3D Model");
    }

    message.reply(`⚙ Creating your imagination, please be patient...`, async (err, info) => {
      if (err) {
        console.error("Error sending initial message:", err);
        return;
      }
      
      let ui = info.messageID;
      api.setMessageReaction("⏰", event.messageID, () => {}, true);

      try {
        console.log("Sending request to API with prompt:", prompt, "and image style:", imageStyle);
        const response = await axios.get(`https://c-v3.onrender.com/xl/stablediffusion?prompt=${encodeURIComponent(prompt)}&negative_prompt=&image_style=${encodeURIComponent(imageStyle)}&guidance_scale=7.5`);
        
        const data = response.data;
        
        if (data.code !== 200 || !data.status) {
          throw new Error("Failed to generate images: " + (data.message || "Unknown error"));
        }

        console.log("Received response from API:", data);
        api.setMessageReaction("✅", event.messageID, () => {}, true);

        const images = data.images;
        if (!images || images.length === 0) {
          throw new Error("No images found in the response");
        }

        api.unsendMessage(ui);

        const endTime = new Date().getTime();
        const timeTaken = (endTime - startTime) / 1000;

        let imagesInfo = `🪄 𝗣𝗿𝗼𝗺𝗽𝘁: ${data.prompt}\n🛸 𝗜𝗺𝗮𝗴𝗲 𝗦𝘁𝘆𝗹𝗲: ${data.data.image_style}\n𝗧𝗮𝗸𝗲𝗻 𝗧𝗶𝗺𝗲: ${timeTaken}s`;

        const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), 'image-'));

        const imagePaths = await Promise.all(
          images.map(async (img, index) => {
            const imgPath = path.join(tempDir, `image_${index}.jpg`);
            const writer = fs.createWriteStream(imgPath);

            const imageResponse = await axios({
              url: img,
              method: 'GET',
              responseType: 'stream'
            });

            imageResponse.data.pipe(writer);

            return new Promise((resolve, reject) => {
              writer.on('finish', () => resolve(imgPath));
              writer.on('error', reject);
            });
          })
        );

        const imageAttachments = imagePaths.map(imgPath => fs.createReadStream(imgPath));

        console.log("Sending message with images.");
        message.reply({
          body: imagesInfo,
          attachment: imageAttachments
        }, async (err) => {
          if (err) {
            console.error("Failed to send message with images", err);
          }
          
          imagePaths.forEach(imgPath => fs.unlinkSync(imgPath));
          fs.rmdirSync(tempDir);
        });
      } catch (error) {
        console.error("Error during image generation or sending", error);
        api.unsendMessage(ui);
        api.sendMessage(`There was an error processing your request. Please check the logs for details.`, event.threadID, event.messageID);
      }
    });
  },
}

const wrapper = new GoatWrapper(module.exports);
wrapper.applyNoPrefix({ allowPrefix: true });
