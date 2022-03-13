let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
	conn.send2ButtonLoc(m.chat, await (await fetch(fla + 'sewa bot')).buffer(), `╭═══ *〘 SEWA 〙*
║ ┅ ๑————————————๑
║┊ ⌲ Sewa = _5k/grup (1 minggu)_
║┊ ⌲ Sewa = _15k/grup (1 bulan)_
║┊ ⌲ Sewa = _20k/grup (2 bulan)_
║┊ ⌲ Sewa = _35k/grup (8 bulan)_                                                                      ║┊ ⌲ Sewa = _45k/grup (12 bulan)_
╰═ ┅ ═══════
╭═══ *〘 PAKET HEMAT 〙*
║ ┅ ๑————————————๑
║┊ ⌲ _20k (Sewa 1 bulan, premium 1 Bulan)_
║┊ ⌲ _30k (Sewa 2 bulan, premium 1.5 bulan)_
║┊ ⌲  _45k (8 Bulan sewa, 5 Bulan premium)_
║┊ ⌲  _65k (all permanent)_
╰═ ┅ ═══════

༅ _*KEUNTUNGAN SEWABOT*_

✧ *Bot akan masuk gc*
✧ *Bisa Menyuruh Bot Buka/Tutup Group*
✧ *Kick Orang*
✧ *Add Orang*
✧ *Anti Link On*
✧ *Bisa Memasukkan Bot Ke dalam Grup*

*[❗] Jika Group Sepi 2 minggu, bot akan leave*

◪ *Jika Minat Hubungi owner kami*
◪ *Atau Masuk Group Bot*
_https://chat.whatsapp.com/GlW4acydGPuGvhTxQmxWK3_

▌│█║▌║▌║║▌║▌║█│▌
`.trim(), footer, '💵Payment', '#payment', '👥Owner', '.owner', m)
}

handler.help = ['sewa', 'sewabot']
handler.tags = ['info']
handler.command = /^sewa(bot)?$/i

module.exports = handler

let wm = global.botwm