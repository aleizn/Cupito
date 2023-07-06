let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `*𝐄𝐥 𝐝𝐢𝐚 𝐝𝐞 𝐡𝐨𝐲 𝐭𝐞𝐧𝐞𝐦𝐨𝐬 𝐯𝐞𝐫𝐬𝐮𝐬!!! 𝐀𝐭𝐞𝐧𝐭𝐨 𝐚 𝐚𝐧𝐨𝐭𝐚𝐫𝐭𝐞 𝐩𝐚𝐫𝐚 𝐪𝐮𝐞 𝐩𝐮𝐞𝐝𝐚𝐬 𝐩𝐚𝐫𝐭𝐢𝐜𝐢𝐩𝐚𝐫💪🏻💪🏻:* ${pesan}`
let teks = `😳 𝗔𝗧𝗘𝗡𝗖𝗜𝗢𝗡 𝗖𝗨𝗣𝗜𝗧𝗢𝗦 😳\n\n❏ ${oi}\n\n❏ *𝐂𝐔𝐏𝐈𝐓𝐎𝐒 ✨:*\n`
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