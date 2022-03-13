let fetch = require('node-fetch')
let handler = async (m, { conn }) => conn.sendButtonLoc(m.chat, await (await fetch(fla + 'donasi')).buffer(), `››╭─〘 *Donasi* 〙
╭╡
│┝‷✧ *Pulsa:* 082217590187 & 085333803615
│┝‷✧ *Dana:* 082217590187
│╰───···─────
│⁺◛˖ Ingin Donasi? Chat
│wa.me/6282217590187?text=kak+mau+donasi
╰──────────···───╮
▌│█║▌║▌║║▌║▌║█│▌
`.trim(), `${wm}`, '👥Owner', '.owner')

module.exports = handler

let wm = global.botwm