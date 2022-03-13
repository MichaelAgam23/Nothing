let fs = require('fs')
let fetch = require('node-fetch')
let moment = require('moment-timezone')
let d = new Date(new Date + 3600000)
let locale = 'id'
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})

let time = d.toLocaleTimeString(locale, {
hour: 'numeric',
minute: 'numeric',
second: 'numeric'
})
let wktu = moment.tz('Asia/Jakarta').format('HH:mm:ss')

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}


global.DeveloperMode = 'false' //Buat Mode True False Moderator
global.linkGC = ['https://chat.whatsapp.com/GlW4acydGPuGvhTxQmxWK3'] // ganti jadi group lu
global.owner = ['6282217590187' ,'6285333803615'] // Put your number here
global.mods = ['6282217590187' ,'6285333803615'] // Want some help?
global.prems = JSON.parse(fs.readFileSync('./src/premium.json')) // Premium user has unlimited limit
global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com',
  rey: 'https://server-api-rey.herokuapp.com',
  xteam: 'https://api.xteam.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  lol: 'https://api.lolhuman.xyz',
  dhnjing: 'https://dhnjing.xyz',
  neoxr: 'https://neoxr-api.herokuapp.com',
  zeks: 'https://api.zeks.me',
  pencarikode: 'https://pencarikode.xyz',
  ana: 'https://anabotofc.herokuapp.com/',
  amel: 'https://melcanz.com',
  hardianto: 'https://hardianto.xyz',
  botstyle: 'https://botstyle-api.herokuapp.com',
adiisus: 'https://adiixyzapi.herokuapp.com',
  LeysCoder: 'https://leyscoders-api.herokuapp.com'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey' (apikey kalian)
  'https://api.xteam.xyz': '95815537354429be',
  'https://anabotofc.herokuapp.com/': 'AnaBot',
  'https://api.lolhuman.xyz': 'ec0dffe52536c7cfb7f8fdb1',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.me': 'apivinz',
  'https://pencarikode.xyz': 'pais',
  'https://melcanz.com': 'wEDTUsWj',
  'https://neoxr-api.herokuapp.com': 'yntkts',
  'https://server-api-rey.herokuapp.com': 'apirey',
  'https://botstyle-api.herokuapp.com': 'Eyar749L',
  'https://hardianto.xyz': 'hardianto',
  'https://leyscoders-api.herokuapp.com': 'dappakntlll'
}

// Apikey
lolkey = 'ec0dffe52536c7cfb7f8fdb1'
xteamkey = '95815537354429be'
zekskey = 'MIMINGANZ'

// WM
footer = '©Nothing Bot'
global.packname = 'Nothing Bot\nwa.me/12092603342\n\n\nBy Nothing & Icha\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.'
global.author = '۰ ⸼'

// silakan di ganti klo mau
global.botwm = `©Nothing Bot`//UBAH JADI NAMAMU
global.wm = `Nothing & Icha`
global.botdate = `❏ ${wktu}\n❏ ${week} ${date}`
global.imagebot = `https://i.ibb.co/NsGQcF8/IMG-20220308-075500-651.jpg`
global.logo = fs.readFileSync('./src/logo3.jpg')
global.thumb1 = 'https://i.ibb.co/NsGQcF8/IMG-20220308-075500-651.jpg'
global.thumb2 = 'https://i.ibb.co/NsGQcF8/IMG-20220308-075500-651.jpg'
global.thumb3 = 'https://i.ibb.co/NsGQcF8/IMG-20220308-075500-651.jpg'
global.thumb4 = 'https://i.ibb.co/NsGQcF8/IMG-20220308-075500-651.jpg'
global.logoowner = fs.readFileSync('./src/owner.jpg')

//Batas
captionnya = '_Nih Kak_'
wait = 'Wait a Minute....'
global.wait = 'Wait a Minute....'
global.rpg = '[ ! ] Fitur Rpg Dimatikan\nKetik *!enable* *rpg* untuk menggunakan fitur ini!\nKalo Mau main Disini aja\nhttps://chat.whatsapp.com/GlW4acydGPuGvhTxQmxWK3'
global.nsfw = '[ ! ] Fitur NSFW Dimatikan\nKetik *!enable* *nsfw* untuk menggunakan fitur ini!'
global.eror = 'Error'
global.pref = '( # . ! /)'
global.CanvasAPI = '';
global.fla = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text='

// tingkat kesulitan, semakin tinggi semakin susah
global.multiplier = 40 // The higher, The harder levelup

//*****************PEMBATAS*********************
// JANGAN DI GANTI NTAR KLO GABISA JAN TANYA GW

let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
