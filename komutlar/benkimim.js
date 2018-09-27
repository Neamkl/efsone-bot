const Discord = require('discord.js');

const cevaplar = [
    "Bir Düşünüyüm \n \n Sen Bir İnsansın!",
    "Bir Düşünüyüm Bi Saniye eee \n \n Sen Bir Ayısın",
    "Bir Düşünüyüm Bi Saniye eee \n \n Sen Bir Hiçsin :D",
    "Bir Düşünüyüm Bi Saniye eee \n \n Sen Bir Pandasın",
    "Bir Düşünüyüm Bi Saniye eee \n \n Sen Bir Öküzsün",
    "Bir Düşünüyüm Bi Saniye eee \n \n Sen Bir Kutup Ayısısın",
	"Bir Düşünüyüm Bi Saniye eee \n \n Sen Bir Salatalıksın",
	"Bir Düşünüyüm Bi Saniye eee \n \n Sen Bir Su Şişesisin",
	"Bir Düşünüyüm Bi Saniye eee \n \n Sen Bir Kızsın",
	"Bir Düşünüyüm Bi Saniye eee \n \n Sen Bir Erkeksin. Wuw Sexy...",
	"Bir Düşünüyüm Bi Saniye eee \n \n Sen Bir Kuşsun",
	"Bir Düşünüyüm Bi Saniye eee \n \n Sen Bir Botsun :o",
	"Bir Düşünüyüm Bi Saniye eee \n \n Valla Bilmiyom",
	"Bir Düşünüyüm Bi Saniye eee \n \n Sen Bir Kulaklıksın",
	"Bir Düşünüyüm Bi Saniye eee \n \n Sen Bir IphoneX'sin (Reklamlar)"
];

exports.run = function(client, message, args) {
    var soru = args.join(' ');

    var cevap = cevaplar[Math.floor(Math.random() * cevaplar.length)];

	 if(!soru) return message.reply('Sistemde Sorun Çıkıyo ?benkimim (Arkasına Bişiler Salla)')
    else message.channel.send(cevap)

};  

exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: [],
  permLevel: 0 
};

exports.help = {
  name: 'benkimim', 
  description: 'Sihirli 8ball sorularınızı cevaplar',
  usage: 'benkimim'
};
