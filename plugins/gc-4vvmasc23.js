let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `𝐂𝐔𝐏𝐈𝐓𝐎❤️: ${pesan}`
let teks = `╭┈┈  •• ${oi} ••:\n`
for (let mem of participants) {
teks += `@${mem.id.split('@')[0]}🔴`}
teks += `ㅤ
VERSUS DE HOY✨

🔷 4vs4 vivido interno MASC

HORARIO
23:00🇦🇷🇺🇾
22:00🇨🇱🇵🇾🇧🇴
21:00🇵🇪

ESCUADRA 1

🚹
🚹 
🚹
🚹 

ESCUADRA 2

🚹
🚹
🚹
🚹
`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['smsf22 <mesaje>','fem22 <mesaje>']
handler.tags = ['group']
handler.command = /^(smsf22|fem22)$/i
handler.admin = true
handler.group = true
export default handler
