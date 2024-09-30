const { GoatWrapper } = require('fca-liane-utils');
const axios = require('axios');
const fs = require('fs');
const path = require('path');

module.exports = {
	config: {
		name: "info",
		author: "ArYan",
		role: 0,
		shortDescription: "info and my owner the cmd",
		longDescription: "",
		category: "admin",
		guide: "{pn}"
	},

	onStart: async function ({ api, event }) {
		try {
			const ownerInfo = {
				name: 'It`s ArYan',
				gender: 'Male',
				github: 'ARYAN-ROBOT',
				Tiktok: 'itzaryanchowdhury',
				whatsapp: '+8801309769542',
				Relationship: 'single',
				bio: 'I Love my mather',
				messenger: 'https://m.me/xxxx.com.404'
			};

			const bold = 'https://i.imgur.com/BSSIs0h.jpeg','https://i.imgur.com/F6D71wH.jpeg','https://i.imgur.com/ZBL3PIE.jpeg';
			const tmpFolderPath = path.join(__dirname, 'tmp');

			if (!fs.existsSync(tmpFolderPath)) {
				fs.mkdirSync(tmpFolderPath);
			}

			const imgResponse = await axios.get(bold, { responseType: 'arraybuffer' });
			const imgPath = path.join(tmpFolderPath, 'owner_img.jpeg');

			fs.writeFileSync(imgPath, Buffer.from(imgResponse.data, 'binary'));

			const response = `╭─────❁\n│  𝗢𝗪𝗡𝗘𝗥 𝗜𝗡𝗙𝗢  \n│
│Name: ${ownerInfo.name}
│gender : ${ownerInfo.gender}
│Relationship :${ownerInfo.Relationship}
│Tiktok : ${ownerInfo.Tiktok}
│Github :${ownerInfo.github}
│whatsapp : ${ownerInfo.whatsapp}
│bio : ${ownerInfo.bio}
│messenger: ${ownerInfo.messenger}\n╰────────────❁`;

			await api.sendMessage({
				body: response,
				attachment: fs.createReadStream(imgPath)
			}, event.threadID, event.messageID);

			fs.unlinkSync(imgPath);

			api.setMessageReaction('🐔', event.messageID, (err) => {}, true);
		} catch (error) {
			console.error('Error in ownerinfo command:', error);
			return api.sendMessage('An error occurred while processing the command.', event.threadID);
		}
	}
};

const wrapper = new GoatWrapper(module.exports);
wrapper.applyNoPrefix({ allowPrefix: true });
