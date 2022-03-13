let handler = async (m, { conn }) => {
await m.reply(global.wait)
  conn.sendFile(m.chat, `https://api.xteam.xyz/randomimage/jahy?apikey=${xteamkey}`, 'Wangy.js', captionnya, m)
}
handler.help = ['jahy']
handler.tags = ['hentai']
handler.command = /^(jahy)$/i
handler.premium = true

module.exports = handler