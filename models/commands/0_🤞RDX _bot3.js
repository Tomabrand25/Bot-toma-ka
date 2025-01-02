const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "goibot", // Changed the command name to 'goibot'
  version: "1.0.1",
  hasPermssion: 0,
  credits: "RDX_ZAIN",
  description: "goibot",
  commandCategory: "Noprefix",
  usages: "noprefix",
  cooldowns: 5,
};

module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Kolkata").format("DD/MM/YYYY || HH:mm:ss");
  var id = event.senderID;
  var name = await Users.getNameUser(event.senderID);

  var tl = [
    "Hum dua karte hain khuda se, Ki wo aap jaisa dost aur na banaye, Ek cartoon jaisi cheez hai humare paas, Kahin wo bhi common na ho jaye",
    "Qayamat tak tujhe yaad karenge, Teri har baat par aitbaar karenge, Tujhe sms karne ko to nahi kahenge, Par phir bhi tere sms ka intezar karenge",
    "Ban Gayi Hai Dil K Majbori Mulakatain Ho Gayi Hai Ab Tu Zrori Mulakatain Aankhon Se Kuch Keh K Bichar Jana Jan Le Lain Gi Ye Adhoori Mulakatain",
    "Muhabat to thi usko beshak mujh say . . Bus meri hi umeedain had say ziada thi us sa",
    "Aksar Wohi Log Uthhate Hain Hum Per Ungliyan, Jinki Humein Chhune Ki Aukat Nahi Hoti.",
    "Dil jab tootta hai to Aawaaj nahin Aati! Har kisi ko Muhabbat raas nahin Aati! Ye to apane-apane naseeb ki baat Hai! Koi bhoolata Nahin aur kisi ko Yaad bhi nahin Aati",
    "Jane Wale Toh… Gulaab Toh Toot Kar Bikhar Jata Hain, Par Khushboo Hawa Main Bar-Krar Rahti Hain, Jane Wale Toh Mil Ke Chale Jate Hain, Par Ehasas Toh Dilon Main Bar-Krar Rahte hain",
    "Toota ho Dil to dukh hota hai, Karke mohabbat kisi se ye Dil rota hai, Dard ka ehsaas to tab hota hai jab, Kisi se mohabbat ho aur uske Dil mein koi aur hota hai",
    "Tears so wet blood so thick I can bearly walk Feeling so tortured and emotions so torn",
    "Chupane se nahi chupta, dikhane se nahi dikhta , Ye atish-e-ishq hai is mein bahana ho nahi sakta..",
    "Bewafai Bhi Log Baray Hunar Se Karte Hain Pehly Log Apki Zindagi Mein Atay Hain Apke Sath Mazaq Karte Hain Khue Hanste Hain Hamen Hansate Hain Aur Phir Usi Mazaq Mazaq Mein Apki Zindagi Ka Mazaq Bana Kar Chalay Jatay Hain Aur Ap Hanstay Hi Rehte Hain",
    "Hamaray Shehr Chalay Aao Sada Barsat Rehti Hai Kabhi Badal Baraste Hain Kabhi Ankhen Barasti Hain..",
    "Mohbbat mil nahi sakti yeh b maloom hai mujko,, Magar khamosh betha hun mohbat kr jo betha hun",
    "Hum ko Khushi Mili bhi to Kahan Rakhein gy Hum Ankhon mein Hasratein Hain or Dil mein Kesi ka Gum",
    "Jo dil k Aaine mein ho wohi hai pyar k Qabil. Wrna Deewar k Qabil to har tasweer hoti hai...",
    "Muddat k bad mile to mera naam hi yaad kr lena, kabhi time mle to milne ki fariyad kr lena..",
    "Ek muskan tu muhje ek baar de de khwab mein hi sahi ek deedar de de. Bas ek baar kar le tu aane ka wada phir Umar Bhar ka chahe intezar de de.",
    "Janon-e-Ishq se to Khuda bi na bach saka IQBAL tarif-e-husne yar me sara quran likh diya.",
    "Itna Bhi Gumaan Na Kar Apni Jeet Par Ae Bekhabar, Sheher Mein Teri Jeet Se Zyada, Charche To Meri Haar Ke Hain",
    "Chamak Suraj Ki Nahi Mere Kirdaar Ki Hai Khabar Ye Aasmaan Ke Akhbaar Ki Hai, Main Chaloon To Mere Sang Kaarwan Chale Baat Garoor Ki Nahi Aitwaar Ki Hai"
  ];

  var rand = tl[Math.floor(Math.random() * tl.length)];
  
  if (event.body.indexOf("goibot") == 0) { // Trigger on 'goibot'
    var msg = {
      body: `꧁🍒❤️‍🔥${name}❤️‍🔥🍒꧂,                 
  \n\n『꧁🍒\n   ${rand} 🍒꧂』\n\n❤️𝕆𝕎ℕ𝔼ℝ : ꧁𝐓𝐎𝐌𝐀-𝐁𝐑𝐀𝐍𝐃꧂🌹 `
    };
    return api.sendMessage(msg, threadID, messageID);
  }
};

module.exports.run = function({ api, event, client, __GLOBAL }) {};
