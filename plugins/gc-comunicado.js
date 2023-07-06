let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `*𝐋𝐨𝐬 𝐢𝐧𝐯𝐢𝐭𝐚𝐦𝐨𝐬 𝐚 𝐩𝐚𝐫𝐭𝐢𝐜𝐢𝐩𝐚𝐫 𝐞𝐧 𝐥𝐚 𝐝𝐢𝐧𝐚𝐦𝐢𝐜𝐚 𝐝𝐞 𝐡𝐨𝐲, 𝐬𝐮𝐞𝐫𝐭𝐞 𝐚 𝐭𝐨𝐝𝐨𝐬🥰✨:* ${pesan}`
let teks = `❤️ 𝐁𝐔𝐄𝐍 𝐃𝐈𝐀 𝐂𝐔𝐏𝐈𝐓𝐎𝐒 ❤️\n\n❏ ${oi}\n\n❏ *𝐂𝐔𝐏𝐈𝐓𝐎𝐒 ✨:*\n`
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