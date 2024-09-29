const axios = require("axios");
module.exports = {
  'config': {
    'name': "country",
    'version': "1.0",
    'author': "MILAN",
    'countDown': 0x3c,
    'role': 0x0,
    'shortDescription': {
      'en': "country game"
    },
    'longDescription': {
      'en': "Reply with the name of a country"
    },
    'category': "game",
    'guide': {
      'en': "{pn}"
    },
    'envConfig': {
      'reward': 0x1f4
    }
  },
  'langs': {
    'en': {
      'notPlayer': "⚠️ | You are not the player of this question",
      'correct': "✅ | Congratulations, you answered correctly and received %1$",
      'wrong': "❌ | You gave the wrong answer"
    }
  },
  'onStart': async function ({
    message: _0x1c4b22,
    event: _0x524a01,
    commandName: _0x1af78e,
    getLang: _0x39f410
  }) {
    const _0x27de7a = await axios.get("https://milanbhandari.imageapi.repl.co/country");
    const _0xea7995 = _0x27de7a.data;
    const {
      country: _0x1bd6e1,
      link: _0x2e3fd7
    } = _0xea7995;
    _0x1c4b22.reply({
      'body': "✅ | Reply with the name of a country",
      'attachment': await global.utils.getStreamFromURL(_0x2e3fd7)
    }, (_0x9080c0, _0x28fe4b) => {
      global.GoatBot.onReply.set(_0x28fe4b.messageID, {
        'commandName': _0x1af78e,
        'messageID': _0x28fe4b.messageID,
        'author': _0x524a01.senderID,
        'answer': _0xea7995.country
      });
    });
  },
  'onReply': async ({
    message: _0xc20bfc,
    Reply: _0x2b1abe,
    event: _0x2a4de7,
    getLang: _0xa5193d,
    usersData: _0x4aa894,
    envCommands: _0x2be6d9,
    commandName: _0x10d8c5
  }) => {
    const {
      author: _0x5e2b46,
      messageID: _0x261698,
      answer: _0x304623
    } = _0x2b1abe;
    if (_0x2a4de7.senderID != _0x5e2b46) {
      return _0xc20bfc.reply(_0xa5193d("notPlayer"));
    }
    if (_0x2a4de7.body.normalize("NFD").toLowerCase() == _0x304623.normalize("NFD").toLowerCase()) {
      global.GoatBot.onReply["delete"](_0x261698);
      _0xc20bfc.unsend(_0x2a4de7.messageReply.messageID);
      await _0x4aa894.addMoney(_0x2a4de7.senderID, _0x2be6d9[_0x10d8c5].reward);
      _0xc20bfc.reply(_0xa5193d("correct", _0x2be6d9[_0x10d8c5].reward));
    } else {
      _0xc20bfc.reply(_0xa5193d("wrong"));
      global.GoatBot.onReply["delete"](_0x261698);
      _0xc20bfc.unsend(_0x2a4de7.messageReply.messageID);
    }
  }
};
function formatText(_0x504adc) {
  return _0x504adc.normalize("NFD").toLowerCase();
      }
