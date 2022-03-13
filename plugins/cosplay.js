let handler = async (m, { conn }) => {
  m.reply(wait)
  let res = `https://velgrynd.herokuapp.com/api/image/cosplay`
  conn.sendFile(m.chat, res, 'cosplay.jpg', footer, m)
}
handler.help = ['cosplay']
handler.tags = ['anime']

handler.command = /^(cosplay)$/i

module.exports = handler