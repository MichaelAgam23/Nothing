let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args) throw 'Masukkan Parameter'
  m.reply(wait)
  let res = `https://api.xteam.xyz/randomimage/tentacles?apikey=${xteamkey}`
  conn.sendFile(m.chat, res, 'tentacles.jpg', captionnya, m, false)
}
handler.help = ['tentacles'].map(v => v + ' ')
handler.tags = ['hentai']

handler.command = /^(tentacles)$/i

module.exports = handler