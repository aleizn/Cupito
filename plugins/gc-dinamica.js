let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `*𝐁𝐮𝐞𝐧 𝐝𝐢𝐚 𝐜𝐮𝐩𝐢𝐭𝐨𝐬, 𝐝𝐞𝐛𝐢𝐝𝐨 𝐚 𝐥𝐚 𝐬𝐢𝐭𝐮𝐚𝐜𝐢𝐨𝐧 𝐚𝐜𝐭𝐮𝐚𝐥 𝐬𝐞 𝐥𝐞𝐬 𝐬𝐨𝐥𝐢𝐜𝐢𝐭𝐚 𝐥𝐞𝐞𝐫 𝐞𝐥 𝐬𝐢𝐠𝐮𝐢𝐞𝐧𝐭𝐞 𝐜𝐨𝐦𝐮𝐧𝐢𝐜𝐚𝐝𝐨 𝐜𝐨𝐧 𝐚𝐭𝐞𝐧𝐜𝐢𝐨𝐧 🔍:* ${pesan}`
let teks = `🚨 𝐀𝐋𝐄𝐑𝐓𝐀 𝐂𝐎𝐌𝐔𝐍𝐈𝐂𝐀𝐃𝐎 🚨\n\n❏ ${oi}\n\n❏ *𝐂𝐔𝐏𝐈𝐓𝐎𝐒 ✨:*\n`
for (let mem of participants) {
teks += `┣🔴 @${mem.id.split('@')[0]}\n`}
teks += `└𝐂𝐔𝐏𝐈𝐓𝐎❤️`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['tagall <mesaje>','invocar <mesaje>']
handler.tags = ['group']
handler.command = /^(tagall|invocar|invocacion|todos|invocación)$/i
handler.admin = true
handler.group = true
export default handler