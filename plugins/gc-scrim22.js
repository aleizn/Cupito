let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `𝐂𝐔𝐏𝐈𝐓𝐎❤️•: ${pesan}`
let teks = `╭┈┈•• ${oi} ••:\n`
for (let mem of participants) {
teks += `@${mem.id.split('@')[0]}❤️‍🔥`}
teks += `ㅤ
🔱 SCRIM 2 salas 🔱

⏰🇦🇷22 hs.
🇨🇱21hs.
🇵🇪20 hs.


1️⃣ SOPORTE/AGUILA:
2️⃣ MONO/MEDIO :
3️⃣ RUSH/DRAGON:
4️⃣ RUSH/ Draki : 

SUPLENTES:‼️
1.
2.
3.
4.
`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['smsm22 <mesaje>','masc22 <mesaje>']
handler.tags = ['group']
handler.command = /^(smsm22|masc22)$/i
handler.admin = true
handler.group = true
export default handler