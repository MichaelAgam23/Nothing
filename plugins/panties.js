let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args) throw 'Masukkan Parameter'
  m.reply(wait)
  let res = `https://api.xteam.xyz/randomimage/panties?apikey=${xteamkey}`
  conn.sendFile(m.chat, res, 'panties.jpg', captionnya, m, false)
}
handler.help = ['panties'].map(v => v + ' ')
handler.tags = ['hentai']

handler.command = /^(panties)$/i
handler.owner = false
handler.mods = false
handler.premium = true
handler.group = false
handler.private = true

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = false

module.exports = handler

