module.exports = {
  name: "devam",
  description: "Şarkıyı devam ettir.",
  execute (client, message, args) {
      const { channel } = message.member.voice;
    if (!channel) {
      //Tolga aldemir
      return message.channel.send("Sesli kanalda değilsin :/");
    }

    const serverQueue = message.client.queue.get(message.guild.id);
 if(serverQueue && !serverQueue.playing) {
      serverQueue.playing = true;
      serverQueue.connection.dispatcher.resume()

  return message.channel.send("✅ | Şarkı devam ettirildi.")
 }

    message.channel.send("Devam edebileceğim duraklatılmış herhangi bir şarkı bulunmamakta.")

  }
}
