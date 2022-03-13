let handler = function (m) {
	this.sendContact(m.chat, '6282217590187', 'Owner Nothing :)', m)
}

handler.customPrefix = ['wner'] 
handler.command = new RegExp

module.exports = handler