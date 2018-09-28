const Discord = require('discord.js');

const cevaplar = [
"ÇaImak fiiIinin geIecek zamanı nedir? Hapse girmek.", 
"Geçen gün taksi çevirdim hala dönüyor.", 
"Adamın biri güneşte yanmış, ay da düz.", 
"Adamın biri kızmış istemeye gelmişler.", 
"Ayda 5 milyon kazanma ister misin? Evet.  O zaman Ay’a git.",
"Adamın kafası atmış bacakları eşek.",
"Geçen gün geçmiş günlerimi aradım ama meşguldü... :(",
"Adamın biri gülmüş, saksıya koymuşlar.",
"Uzun lafın kısası : U.R.L",
"Yağmur yağmış, kar peynir!",
"Sakla samanı, inekler aç kalsın.",
"Dünya dönermiş ay da köfte…",
"Bu erickson, başka erik yok.",
"Seven unutmaz oğlum, eight unutur.",
"Sen kamyonu al, leonardo da vinci.",
"Kim vurduya gittim, birazdan gelicem…",
"HyperSquadın Büyüğü Kimdir ? Cevap : MegaHyperSquad (Yeee)"
];

exports.run = function(client, message, args) {
    var soru = args.join(' ');

    var cevap = cevaplar[Math.floor(Math.random() * cevaplar.length)];

	 if(!soru) return message.reply('Sistemde Sorun Çıkıyo ?espri (Arkasına Bişiler Salla)')
    else message.channel.send(cevap)

};  

exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: [],
  permLevel: 0 
};

exports.help = {
  name: 'espri', 
  description: 'Sihirli espri isteğinizi yanıtlar',
  usage: 'espri'
};
