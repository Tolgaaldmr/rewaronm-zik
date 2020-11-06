module.exports = {
  name: "döngü",
  description: "Döndüye alır.",
  execute (client, message, args) {

    const { channel } = message.member.voice;
    if (!channel) {
      //Tolga Aldemir
      return message.channel.send("Sesli kanalda değilsin :/");
    }

    const serverQueue = message.client.queue.get(message.guild.id);

    if (!serverQueue) {
      return message.channel.send("Döngüye alabileceğim herhangi bir şarkı bulunmamakta.");
    }

    //OOOOF
    serverQueue.loop = !serverQueue.loop



    message.channel.send(`Döngü şuanda **${serverQueue.loop ? "✅ | AÇIK" : "⛔️ | KAPALI"}**`)




  }
}
