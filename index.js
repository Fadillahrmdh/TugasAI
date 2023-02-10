const { Client, GatewayIntentBits} = require('discord.js')
require('dotenv/config')

const client = new Client ({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ]
})

client.on('ready', () => {
    console.log('The Bot is Online')
})

client.on('messageCreate', messsage => {
    if (messsage.content === 'Hello') {
        messsage.reply('halo juga ada yang bisa dibantu ?)')
    }
})

client.on('messageCreate', messsage => {
    if (messsage.content === 'apakah kamu Ai bot Discord?') {
        messsage.reply('Iya Aku Ai bot yang bisa menjawab')
    }
})

client.on('messageCreate', messsage => {
    if (messsage.content === 'siapa yang membuat mu bot?') {
        messsage.reply('Yang Menciptakan saya adalah Fadillah Romadhon')
    }
})

client.on('messageCreate', messsage => {
    if (messsage.content === 'apa yang bisa kamu lakukan bot?') {
        messsage.reply('Menjawab pertanyaan-Pertanyaan sesuai yang diprogram oleh Fadillah Romadhon')
    }
})

client.on('messageCreate', messsage => {
    if (messsage.content === 'apa kata kata yang ingin disampaikan kepada pembuatnya bot?') {
        messsage.reply('saya berterimakasih kepada pembuat Fadillah Romadhon dan juga pemberi tugas Pak Dr. Abdusy Syarif, ST., MT. . karena mereka saya bisa hadir disini. Sekali lagi Terimakasih')
    }
})


client.login(process.env.TOKEN)