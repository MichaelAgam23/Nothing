let handler = async (m, { conn, command, usedPrefix}) => {
    let msgs = global.db.data.msgs
    let pesan = `
╭─────═[ *LIST PESAN* ]═─────⋆
┴
${Object.keys(msgs).map(v => '✧ ' + v).join('\n')}
┬
╰──────────···───✧
▌│█║▌║▌║║▌║▌║█│▌

➠ Gunakan *${usedPrefix}${command} <nama>* untuk mengambil`
conn.send2Button(m.chat, pesan, wm, '📌 MENU', '.menu', '👤 PROFILE', '.pp', m)
}
handler.help = ['vn', 'msg', 'video', 'audio', 'img', 'sticker'].map(v => 'list' + v)
handler.tags = ['database']
handler.command = /^list(vn|msg|video|audio|img|sticker)$/

module.exports = handler

let wm = global.botwm