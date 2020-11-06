const discord = require("discord.js");

module.exports = {
  name: "dur",
  description: "Müziği durdur",
  execute(client, message, args) {
    const { channel } = message.member.voice;
    if (!channel) {
      //Tolga Aldemir
      return message.channel.send("Sesli kanalda değilsin :/");
    }

    const serverQueue = message.client.queue.get(message.guild.id);

    if (!serverQueue) {
      return message.channel.send("Durdurabileceğim herhangi bir şarkı yok.");
    }

    serverQueue.songs = [];
    serverQueue.connection.dispatcher.end();

    serverQueue.textChannel.send("**✅ | Müzik durduruldu**");
  }
};
