const fs = require("fs-extra");
const axios = require("axios");
const path = require("path");
const { getPrefix } = global.utils;
const { commands, aliases } = global.GoatBot;
const doNotDelete ="「 🦋🖤 RAHAT HOSSAIN 🖤🦋 」";
/** 
* @author NTKhang
* @author: do not delete it
* @message if you delete or edit it you will get a global ban
*/
 
module.exports = {
	config: {
		name: "help",
		version: "1.0",
		author: "NTKhang",
		countDown: 20,
		role: 0,
		shortDescription: {
			vi: "Xem cách dùng lệnh",
			en: "View command usage"
		},
		longDescription: {
			vi: "Xem cách sử dụng của các lệnh",
			en: "View command usage"
		},
		category: "info",
		guide: {
			en: "{pn} [empty | <page number> | <command name>]"
				+ "\n   {pn} <command name> [-u | usage | -g | guide]: only show command usage"
				+ "\n   {pn} <command name> [-i | info]: only show command info"
				+ "\n   {pn} <command name> [-r | role]: only show command role"
				+ "\n   {pn} <command name> [-a | alias]: only show command alias"
		},
		priority: 1
	},
 
	langs: {
		en: {			help: 
      `
╭───✰《 𝗔𝗜 》
│❍ai ❍gpt 
│❍forever ❍pikachu 
│❍isha ❍ai2
|❍imagine ❍x
|❍bard
╰───────────○
╭───✰《 𝗔𝗡𝗜𝗠𝗘 》
│✿anime ✿waifu ✿animevideo
│✿aniboy ✿anigirl ✿aniblur
│✿animeinfo ✿animerelease
│✿malnews ✿animequote 
│✿animescrape
╰───────────○
╭───✰《 𝗚𝗥𝗢𝗨𝗣 》
│◎filteruser ◎all 
│◎kick ◎badwords 
│◎warn ◎tid
│◎busy ◎count 
│◎unsend ◎uid 
│◎setrole ◎setname
│◎adduser ◎antiout
│◎onlyadminbox ◎rules
│◎group ◎box
╰───────────○
╭───✰《 𝗢𝗪𝗡𝗘𝗥 》
│⚘setrole ⚘admin
│⚘user ⚘approve 
│⚘cmd ⚘event
╰───────────○
╭───✰《 𝗜𝗠𝗔𝗚𝗘 》
│✧avatar ✧avatar2 
│✧avatar3 ✧avatar4 
│✧gfx✧gfx2✧gfx3
│✧gfx4✧gfx5✧gfx6
│✧cover✧cover2✧cover3
│✧cover4 ✧blink ✧blink2
│✧clown ✧bed ✧sadcat
│✧fbcover ✧fbcover2 
│✧fbcover3 ✧moonwall
│✧mpanel ✧meme
╰───────────○
╭───✰《 𝗙𝗨𝗡 》
│✾emojimix ✾gay
│✾say ✾jail ✾slap
│✾buttslap ✾fak
│✾delate ✾install
│✾phub ✾spiderman
│✾pet ✾avoid
│✾hug ✾kiss
│✾pair ✾cdp2
│✾age ✾trash
 |✾meme
╰───────────○
╭───✰《 𝗕𝗔𝗡𝗞 》
│❖Bank ❖rob
╰───────────○
╭───✰《 𝗠𝗘𝗗𝗜𝗔 》
│▷fbvideo ▷insta 
│▷sing ▷ytb
│▷video▷music 
│▷play▷lyrics
│▷video2 ▷song
│▷spdl ▷vps
╰───────────○
╭───✰《 𝗥𝗔𝗡𝗞 》
│✘rank ✘rankup  
│✘customrankcard  
╰───────────○
╭───✰《 𝗦𝗬𝗦𝗧𝗘𝗠 》
│⏣say ⏣translate 
│⏣info ⏣weather 
│⏣help  ⏣ocr
│⏣supportgc ⏣uptime 
│⏣ping ⏣pastebin 
│⏣rbg ⏣out
│⏣outall ⏣set
│⏣git ⏣tikinfo
│⏣chrome ⏣tiksr
╰───────────○ 
╭───✰《 𝗪𝗜𝗞𝗜 》
│☻emojimean ☻wiki
│☻emojimix ☻exersiseinfo
│☻imbb ☻Pinterest
│☻gg ☻gg3☻img
╰───────────○
╭───✰《 𝕥𝕖𝕩𝕥 𝕡𝕣𝕠 》
│:⁠logo :bigtxt
╰───────────○
╭───✰《 𝗪𝗥𝗜𝗧𝗘 》
│✎zuck ✎post ✎biden
│✎kabby ✎elon ✎r
│✎post ✎ntkhang
│✎trump ✎smith 
│✎blackpanther 
╰───────────○
╭───✰《 𝗚𝗔𝗠𝗘 》
│๛bal ๛guessnumber
│๛quiz ๛slot 
│๛dice ๛flag ๛pokemon
│๛ttt ๛ttt2
│๛pubgguess 
╰───────────○
╭───✰《 𝗦𝗨𝗣𝗣𝗢𝗥𝗧 》
│ Type %5ishasupport
╰───────────○
\n ☞ Total cmds: [ %4 ].\n ☞ Type: [%5help <cmd> ]\n ☞ To see how to use it.
   `,
			help2: "%1\n❆────────────❆\n ⌲ Currently, the bot has %2  commands that can be used\n %4\n❆────────────❆",
			commandNotFound: "Command \"%1\" does not exist",
			getInfoCommand: "✭ ─── NAME ──── ✭\n » %1\n❆ ─── INFO ─── ❆\n ☞   Author: %8\n ☞   Description: %2\n\✎ ─── Usage ─── ✎\n%9",
			onlyInfo: "✰── INFO ────✰\n  Command name: %1\n Description: %2\n  Other names: %3\n  Other names in your group: %4\n  Version: %5\n  Role: %6\n  Time per command: %7s\n  Author: %8\n✰─────────────⌲",
			onlyUsage: "✰── USAGE ────✰\n %1\n✰─────────────⌲",
			onlyAlias: "✰── ALIAS ────✰\n  Other names: %1\n  Other names in your group: %2\n✰─────────────⌲",
			onlyRole: "✰── ROLE ────⌲\n %1\n✰─────────────⌲",
			doNotHave: "Do not have",
			roleText0: "0 (All users)",
			roleText1: "1 (Group administrators)",
			roleText2: "2 (Admin bot)",
			roleText0setRole: "0 (set role, all users)",
			roleText1setRole: "1 (set role, group administrators)",
			pageNotFound: "Page %1 does not exist"
		}
	},
 
	onStart: async function ({ message, args, event, threadsData, getLang, role }) {
		const langCode = await threadsData.get(event.threadID, "data.lang") || global.GoatBot.config.language;
		let customLang = {};
		const pathCustomLang = path.join(__dirname, "..", "..", "languages", "cmds", `${langCode}.js`);
		if (fs.existsSync(pathCustomLang))
			customLang = require(pathCustomLang);
		const { threadID } = event;
		const threadData = await threadsData.get(threadID);
		const prefix = getPrefix(threadID);
		let sortHelp = threadData.settings.sortHelp || "name";
		if (!["category", "name"].includes(sortHelp))
			sortHelp = "name";
		const commandName = (args[0] || "").toLowerCase();
		const command = commands.get(commandName) || commands.get(aliases.get(commandName));
		// ———————————————— LIST ALL COMMAND ——————————————— //
		if (!command && !args[0] || !isNaN(args[0])) {
			const arrayInfo = [];
			let msg = "";
			if (sortHelp == "name") {
				const page = parseInt(args[0]) || 1;
				const numberOfOnePage = 30;
				for (const [name, value] of commands) {
					if (value.config.role > 1 && role < value.config.role)
						continue;
					let describe = name;
					let shortDescription;
					const shortDescriptionCustomLang = customLang[name]?.shortDescription;
					if (shortDescriptionCustomLang != undefined)
						shortDescription = checkLangObject(shortDescriptionCustomLang, langCode);
					else if (value.config.shortDescription)
						shortDescription = checkLangObject(value.config.shortDescription, langCode);
					if (shortDescription)
						describe += `: ${cropContent(shortDescription.charAt(0).toUpperCase() + shortDescription.slice(1))}`;
					arrayInfo.push({
						data: describe,
						priority: value.priority || 0
					});
				}
				arrayInfo.sort((a, b) => a.data - b.data);
				arrayInfo.sort((a, b) => a.priority > b.priority ? -1 : 1);
				const { allPage, totalPage } = global.utils.splitPage(arrayInfo, numberOfOnePage);
				if (page < 1 || page > totalPage)
					return message.reply(getLang("pageNotFound", page));
				const returnArray = allPage[page - 1] || [];
				const startNumber = (page - 1) * numberOfOnePage + 1;
				msg += (returnArray || []).reduce((text, item, index) => text += `│ ${index + startNumber}${index + startNumber < 10 ? " " : ""}. ${item.data}\n`, '').slice(0, -1);
				await message.reply(getLang("help", msg, page, totalPage, commands.size, prefix, doNotDelete));
			}
			else if (sortHelp == "category") {
				for (const [, value] of commands) {
					if (value.config.role > 1 && role < value.config.role)
						continue;
					if (arrayInfo.some(item => item.category == value.config.category.toLowerCase())) {
						const index = arrayInfo.findIndex(item => item.category == value.config.category.toLowerCase());
						arrayInfo[index].names.push(value.config.name);
					}
					else
						arrayInfo.push({
							category: value.config.category.toLowerCase(),
							names: [value.config.name]
						});
				}
				arrayInfo.sort((a, b) => (a.category < b.category ? -1 : 1));
				arrayInfo.forEach((data, index) => {
					const categoryUpcase = `${index == 0 ? `╭` : `├`}─── ${data.category.toUpperCase()} ${index == 0 ? "⭓" : "⭔"}`;
					data.names = data.names.sort().map(item => item = `│ ${item}`);
					msg += `${categoryUpcase}\n${data.names.join("\n")}\n`;
				});
				message.reply(getLang("help2", msg, commands.size, prefix, doNotDelete));
			}
		}
		// ———————————— COMMAND DOES NOT EXIST ———————————— //
		else if (!command && args[0]) {
			return message.reply(getLang("commandNotFound", args[0]));
		}
		// ————————————————— INFO COMMAND ————————————————— //
		else {
			const formSendMessage = {};
			const configCommand = command.config;
 
			let guide = configCommand.guide?.[langCode] || configCommand.guide?.["en"];
			if (guide == undefined)
				guide = customLang[configCommand.name]?.guide?.[langCode] || customLang[configCommand.name]?.guide?.["en"];
 
			guide = guide || {
				body: ""
			};
			if (typeof guide == "string")
				guide = { body: guide };
			const guideBody = guide.body
				.replace(/\{prefix\}|\{p\}/g, prefix)
				.replace(/\{name\}|\{n\}/g, configCommand.name)
				.replace(/\{pn\}/g, prefix + configCommand.name);
 
			const aliasesString = configCommand.aliases ? configCommand.aliases.join(", ") : getLang("doNotHave");
			const aliasesThisGroup = threadData.data.aliases ? (threadData.data.aliases[configCommand.name] || []).join(", ") : getLang("doNotHave");
 
			let roleOfCommand = configCommand.role;
			let roleIsSet = false;
			if (threadData.data.setRole?.[configCommand.name]) {
				roleOfCommand = threadData.data.setRole[configCommand.name];
				roleIsSet = true;
			}
 
			const roleText = roleOfCommand == 0 ?
				(roleIsSet ? getLang("roleText0setRole") : getLang("roleText0")) :
				roleOfCommand == 1 ?
					(roleIsSet ? getLang("roleText1setRole") : getLang("roleText1")) :
					getLang("roleText2");
 
			const author = configCommand.author;
			const descriptionCustomLang = customLang[configCommand.name]?.longDescription;
			let description = checkLangObject(configCommand.longDescription, langCode);
			if (description == undefined)
				if (descriptionCustomLang != undefined)
					description = checkLangObject(descriptionCustomLang, langCode);
				else
					description = getLang("doNotHave");
 
			let sendWithAttachment = false;
 
			if (args[1]?.match(/^-g|guide|-u|usage$/)) {
				formSendMessage.body = getLang("onlyUsage", guideBody.split("\n").join("\n│"));
				sendWithAttachment = true;
			}
			else if (args[1]?.match(/^-a|alias|aliase|aliases$/))
				formSendMessage.body = getLang("onlyAlias", aliasesString, aliasesThisGroup);
			else if (args[1]?.match(/^-r|role$/))
				formSendMessage.body = getLang("onlyRole", roleText);
			else if (args[1]?.match(/^-i|info$/))
				formSendMessage.body = getLang("onlyInfo", configCommand.name, description, aliasesString, aliasesThisGroup, configCommand.version, roleText, configCommand.countDown || 1, author || "");
			else {
				formSendMessage.body = getLang("getInfoCommand", configCommand.name, description, aliasesString, aliasesThisGroup, configCommand.version, roleText, configCommand.countDown || 1, author || "", `${guideBody.split("\n").join("\n│")}`);
				sendWithAttachment = true;
			}
 
			if (sendWithAttachment && guide.attachment) {
				if (typeof guide.attachment == "object") {
					formSendMessage.attachment = [];
					for (const pathFile in guide.attachment) {
						if (!fs.existsSync(pathFile)) {
							const cutFullPath = pathFile.split("/").filter(item => item != "");
							cutFullPath.pop();
							for (let i = 0; i < cutFullPath.length; i++) {
								const path = cutFullPath.slice(0, i + 1).join('/');
								if (!fs.existsSync(path))
									fs.mkdirSync(path);
							}
							const getFile = await axios.get(guide.attachment[pathFile], { responseType: 'arraybuffer' });
							fs.writeFileSync(pathFile, Buffer.from(getFile.data));
						}
						formSendMessage.attachment.push(fs.createReadStream(pathFile));
					}
				}
			}
			return message.reply(formSendMessage);
		}
	}
};
 
function checkLangObject(data, langCode) {
	if (typeof data == "string")
		return data;
	if (typeof data == "object" && !Array.isArray(data))
		return data[langCode] || data.en || undefined;
	return undefined;
}
 
function cropContent(content, max) {
	if (content.length > max) {
		content = content.slice(0, max - 3);
		content = content + "...";
	}
	return content;
      }
