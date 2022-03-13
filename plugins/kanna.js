let handler = async (m, { conn }) => {
await m.reply(global.wait)
  conn.sendFile(m.chat, `https://api.lolhuman.xyz/api/random/kanna?apikey=${lolkey}`, '', '', m)
}
handler.help = ['kanna']
handler.tags = ['anime']
handler.command = /^(kanna)$/i

module.exports = handler