module.exports = {
  name: "geç",
  description: "Şarkıyı atlayın veya şarkıyı bir sonrakine kaydırın",
  execute(client, message, args) {
    const { channel } = message.member.voice;

    if (!channel) {
      //Tolga aldemir
      return message.channel.send("Sesli kanalda değilsin :/");
    }

    const serverQueue = message.client.queue.get(message.guild.id);

    if (!serverQueue) {
      return message.channel.send("Atlayabileceğim herhangi bir şey çalmıyor");
    }

    serverQueue.connection.dispatcher.end();
    message.channel.send("✅ | Şarkı geçildi.");
  }
};
