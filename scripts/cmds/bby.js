const axios = require("axios");
module.exports.config = {
  name: "bbyb",
    author:"ArYan",
    version: "2.5",
category: "text"

}
module.exports.onStart = async function ({}) { }
module.exports.onChat = async function ({api,event,args}) {
const u = event.body.toLowerCase();
  if (u.startsWith("bby")||u.startsWith("bot")||u.startsWith("hi")||u.startsWith("oii")){
  const fuck = args.join(" ");
  const res =  await axios.get(`https://www.noobs-api.000.pe/dipto/baby?text=${fuck}`)
  const response = res.data.reply 
 await api.sendMessage(`${response}`,event.threadID, (error,info) => {
global.GoatBot.onReply.set(info.messageID, {commandName: this.config.name,
            type: "reply",
            messageID: info.messageID,
            author: event.senderID,
            msg: response,
        });
 },event.messageID)
}
module.exports.onReply = async ({api,event,args}) => {
      const fuc = args.join(" ")
    const res =  await axios.get(`https://www.noobs-api.000.pe/dipto/baby?text=${fuc}`)
    const response = res.data.reply 
   await api.sendMessage(`${response}`,event.threadID, (error,info) => {
  global.GoatBot.onReply.set(info.messageID, {commandName: this.config.name,
              type: "reply",
              messageID: info.messageID,
              author: event.senderID,
              msg: response,
          });
   },event.messageID)
  }
}
