const { GoatWrapper } = require("fca-liane-utils");
const axios = require("axios");
const fs = require("fs-extra");
const request = require("request");
module.exports = {
	config: {
		name: "Out",
		aliases: ["l"],
		version: "1.0",
		author: "ArYan",
		countDown: 5,
		role: 2,
		shortDescription: "bot will leave gc",
		longDescription: "",
		category: "admin",
		guide: {
			vi: "{pn} [tid,blank]",
			en: "{pn} [tid,blank]"
		}
	},

	onStart: async function ({ api,event,args, message }) {
 var id;
 if (!args.join(" ")) {
 id = event.threadID;
 } else {
 id = parseInt(args.join(" "));
 }
 return api.sendMessage('▣𝗉𝖾𝗄𝗈 𝖻𝗈𝗍 𝗅𝖾𝖺𝗏𝖾:\n》Mon succès est inévitable, car je suis destiné à être au sommet.\n\n➤𝖻𝗒𝖾 𝖺𝗅𝗅 𝖿𝗋𝖾𝗇𝖽𝗌', id, () => api.removeUserFromGroup(api.getCurrentUserID(), id))
		}
	}

const wrapper = new GoatWrapper(module.exports);
wrapper.applyNoPrefix({ allowPrefix: true });
