let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `𝐂𝐔𝐏𝐈𝐓𝐎❤️•: ${pesan}`
let teks = `╭┈┈ •• ${oi} ••:\n`
for (let mem of participants) {
teks += `@${mem.id.split('@')[0]}🔴`}
teks += `ㅤ
VERSUS DE HOY✨

🔷 4vs4 vivido interno FEM

HORARIO
21:00🇦🇷🇺🇾
20:00🇨🇱🇵🇾🇧🇴
19:00🇵🇪

ESCUADRA 1

🚺
🚺
🚺
🚺 

ESCUADRA 2

🚺
🚺
🚺
🚺
`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['smsm21 <mesaje>','masc21 <mesaje>']
handler.tags = ['group']
handler.command = /^(smsm21|masc21)$/i
handler.admin = true
handler.group = true
export default handler