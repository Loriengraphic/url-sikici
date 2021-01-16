const { Discord, Client, WebhookClient, MessageEmbed, Message } = require('discord.js');
const client = global.client = new Client({fetchAllMembers: true});
global.client = client;
const fesgiymissura = require('fs');
const request = require('request');
client.aktif = "true"
client.token = ""
client.sunucuid = ""
client.url = ""
fesgiymissura.readdir("./Etkinlikler/", (err, orospuevladıklasor) => {
  if (err) return console.myTime(err);
  orospuevladıklasor.forEach(sikimsonikbot => {
    let evliyacelebi = require("./Etkinlikler/" + sikimsonikbot);
    if (evliyacelebi.yarrak) {
      evliyacelebi.sikiminbasi(client);
      client.on(evliyacelebi.amcık, evliyacelebi.ananınamı);
    }
    console.log(
      `[URL Sikici] ~ (${evliyacelebi.Isim}) Orospu Çocuğu Açıldı!`
    );
  });
});
setInterval(() => {
  if(client.aktif === "true") {
    urlSpammer()
  } else {
    console.log('[URL Sikici] ~ Lütfen ./acar.js dosyasının içinden aktif kısmı true olarak belirleyin!');
  }
}, 1000)
function urlSpammer() {
  console.log(`[URL Sikici] ~ (${client.url}) adlı URL Sikilmeye Başladı!`)
  const urlspammer = {
      url: `https://discord.com/api/v8/guilds/${client.sunucuid}/vanity-url`,
      body: {
        code: `${client.url}`
      },
      json: true,
      method: 'PATCH',
      headers: {
        "Authorization": `Bot ${client.token}`
      }
    };
    request(urlspammer, (err, res, body) => {
      if (err) {
        return console.log(err);
      }
    })
}

client.login(client.token).then(c => console.log(`[~ ${client.user.tag} ~]`)).catch(err => console.error("[URL Sikici] ~ Sen şimdi yarrağı yemedin mi siktir git tokeni değiştir amınakoyduğumun salağı!"));
