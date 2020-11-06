module.exports = {
  name: "duraklat",
  description: "şarkıyı duraklat",
  execute (client, message, args) {
  const { channel } = message.member.voice;
    if (!channel) {
      //Tolga aldemir
      return message.channel.send("Sesli kanalda değilsin :/");
    }

    const serverQueue = message.client.queue.get(message.guild.id);

    if (!serverQueue) {
      return message.channel.send("Duraklayabildiğim hiçbir şey çalmıyor");
    }

    if(serverQueue && serverQueue.playing) {
      serverQueue.playing = false;
      serverQueue.connection.dispatcher.pause(true)


      return message.channel.send("✅ | Şarkı duraklatıldı.")
  }
  }
}
