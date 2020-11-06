module.exports = {
  name: "isim",
  description: "devam eden şarkının adını gönder",
  execute (client, message, args) {

      const { channel } = message.member.voice;
    if (!channel) {
      //Tolga aldemir
      return message.channel.send("Sesli kanalda değilsin :/");
    }

    const serverQueue = message.client.queue.get(message.guild.id);

    if (!serverQueue) {
      return message.channel.send("Bot şuanda hiç bir şey çalmıyor.");
    }

    message.channel.send(serverQueue.songs[0].title)




  }
}
