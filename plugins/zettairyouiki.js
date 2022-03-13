let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args) throw 'Masukkan Parameter'
  m.reply(wait)
  let res = `https://api.xteam.xyz/randomimage/zettairyouiki?APIKEY=${xteamkey}`
  conn.sendFile(m.chat, res, 'zettairyouiki.jpg', captionnya, m, false)
}
handler.help = ['zettairyouiki'].map(v => v + ' ')
handler.tags = ['random', 'anime']

handler.command = /^(zettairyouiki)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = true

module.exports = handler

