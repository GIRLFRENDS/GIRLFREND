const axios = require("axios");



module.exports = {

  config: {

    name: 'store',
   
  aliases: ['st'],
    
    version: '1.0',

    author: 'ArYan',

    role: 0,

    shortDescription: 'store of store',

    longDescription: 'store of cmds all  made by ArYan',

    category: 'utility',

    guide: {

      en: 'To view commands: {p}cmdstore\nTo paginate: {p}cmdstore {page}\nTo search: {p}cmdstore {search}'

    }

  },



  onStart: async function ({ api, event, args, message }) {

    try {

      let page = 1;

      let searchQuery = "";



      if (args.length === 1 && !isNaN(parseInt(args[0]))) {

        page = parseInt(args[0]);

      } else if (args.length === 1 && typeof args[0] === 'string') {

        searchQuery = args[0];

      } else if (args.length === 2 && args[0] === 'search' && typeof args[1] === 'string') {

        searchQuery = args[1];

      }



      const response = await axios.get("https://cmd-store.vercel.app/kshitiz");

      const commands = response.data;



      let filteredCommands = commands;

      if (searchQuery) {

        filteredCommands = commands.filter(cmd => cmd.cmdName.toLowerCase().includes(searchQuery.toLowerCase()));

      }
      
      
      const permission = ['61566369721724', '61566915171925'];
    if (!permission.includes(event.senderID)) return api.sendMessage('Only Bot Admin\'s can use this command. My boss ArYan can do this.', event.threadId, event.messageId);
      

      const startIndex = (page - 1) * 10;

      const endIndex = page * 10;

      const paginatedCommands = filteredCommands.slice(startIndex, endIndex);



      let replyMessage = "";

      paginatedCommands.forEach(cmd => {

        replyMessage += `📚𝗔𝗥𝗬𝗔𝗡 𝗦𝗧𝗢𝗥𝗘\n━━━━━━━━━━━━\n\n👑 𝗜𝘁𝗲𝗺 𝗡𝗮𝗺𝗲: ${cmd.cmdName}\n🆔 𝗜𝘁𝗲𝗺 𝗜𝗗: ${cmd.id}\n📝 𝗗𝗲𝘀𝗰𝗿𝗶𝗽𝘁𝗶𝗼𝗻: ${cmd.description}\n📁 𝗜𝘁𝗲𝗺 𝗟𝗶𝗻𝗸: ${cmd.codeLink}\n\n-𝖳𝖾𝖺𝗆 𝗖𝗺𝗱𝘀𝘁𝗼𝗿𝗲\n𝖳𝗁𝖺𝗇𝗄 𝗒𝗈𝗎 𝖿𝗈𝗋 𝗎𝗌𝗂𝗇𝗀 𝗈𝗎𝗋 𝖢𝗆𝖽𝗌𝗍𝗈𝗋𝖾 𝗌𝖾𝗋𝗏𝗂𝖼𝖾𝗌 🥰\n\n`;

      });



      if (replyMessage === "") {

        replyMessage = "📚 𝗔𝗥𝗬𝗔𝗡 𝗦𝗧𝗢𝗥𝗘\n━━━━━━━━━━━━\n𝖳𝗁𝖾 𝗌𝖾𝖺𝗋𝖼𝗁 𝗍𝖾𝗋𝗆 𝗒𝗈𝗎 𝗉𝗋𝗈𝗏𝗂𝖽𝖾𝖽 𝖽𝗈𝖾𝗌 𝗇𝗈𝗍 𝗆𝖺𝗍𝖼𝗁 𝖺𝗇𝗒 𝖺𝗏𝖺𝗂𝗅𝖺𝖻𝗅𝖾 𝗂𝗍𝖾𝗆𝗌 𝗂𝗇 𝗈𝗎𝗋 𝗔𝗿𝗬𝗮𝗻𝘀𝘁𝗼𝗿𝗲 𝗐𝖾𝖻𝗌𝗂𝗍𝖾.\n\n- 𝖳𝖾𝖺𝗆 𝗔𝗿𝗬𝗮𝗻𝘀𝘁𝗼𝗿𝗲\n𝖳𝗁𝖺𝗇𝗄 𝗒𝗈𝗎 𝖿𝗈𝗋 𝗎𝗌𝗂𝗇𝗀 𝗈𝗎𝗋 𝖠𝗋𝖸𝖺𝗇 𝗌𝖾𝗋𝗏𝗂𝖼𝖾𝗌 🥰.";

      }



      message.reply(replyMessage, (err, info) => {

        global.GoatBot.onReply.set(info.messageID, {

          commandName: "cmdstore",

          messageID: info.messageID,

          author: event.senderID,

          commands,

        });

      });

    } catch (error) {

      console.error(error);

      message.reply("An error occurred while fetching commands.");

    }

  },



  onReply: async function ({ api, event, Reply, args, message }) {

    const { author, commandName, commands } = Reply;



    if (event.senderID !== author || !commands) {

      return;

    }



    const commandID = parseInt(args[0], 10);



    if (isNaN(commandID) || !commands.some(cmd => cmd.id === commandID)) {

      message.reply("Invalid input.\nPlease provide a valid command ID.");

      return;

    }



    const selectedCommand = commands.find(cmd => cmd.id === commandID);



    let replyMessage = `📚𝗔𝗥𝗬𝗔𝗡 𝗦𝗧𝗢𝗥𝗘\n━━━━━━━━━━━━\n\🆔 𝗜𝘁𝗲𝗺 𝗜𝗗:${selectedCommand.id}\n👑 𝗜𝘁𝗲𝗺 𝗡𝗮𝗺𝗲:${selectedCommand.cmdName}\n📁 𝗜𝘁𝗲𝗺 𝗟𝗶𝗻𝗸:${selectedCommand.codeLink}\n📝 𝗗𝗲𝘀𝗰𝗿𝗶𝗽𝘁𝗶𝗼𝗻:${selectedCommand.description}\n\n-𝖳𝖾𝖺𝗆 𝗖𝗺𝗱𝘀𝘁𝗼𝗿𝗲\n𝖳𝗁𝖺𝗇𝗄 𝗒𝗈𝗎 𝖿𝗈𝗋 𝗎𝗌𝗂𝗇𝗀 𝗈𝗎𝗋 𝖢𝗆𝖽𝗌𝗍𝗈𝗋𝖾 𝗌𝖾𝗋𝗏𝗂𝖼𝖾𝗌. 🥰`;



    message.reply(replyMessage);

    global.GoatBot.onReply.delete(event.messageID);

  },

};
