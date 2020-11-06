const discord = require("discord.js")
const client = new discord.Client({ disableEveryone: true, disabledEvents: ["TYPING_START"] });
const { readdirSync } = require("fs");
const { join } = require("path");
const { TOKEN, PREFIX } = require("./config.json")

//Eventler
client.on("ready", () => {
  console.log('Şarkı Botu hazır durumda.')
  client.user.setActivity("7/24 | Music")
})

client.on("warn", info => console.log(info));

client.on("error", console.error)

//belirlemek
client.commands = new discord.Collection()
client.prefix = PREFIX
client.queue = new Map();


//dosyaları yükler
const cmdFiles = readdirSync(join(__dirname, "commands")).filter(file => file.endsWith(".js"))
for (const file of cmdFiles) {
  const command = require(join(__dirname, "commands", file))
  client.commands.set(command.name, command)
} //yüklenecek


//mesaj ve zaman
client.on("message", message => {
   if (message.author.bot) return;
  if (!message.guild) return;

  if(message.content.startsWith(PREFIX)) { //Tolga aldemir

    const args = message.content.slice(PREFIX.length).trim().split(/ +/) //örnekleri kaldırma sakın
    const command = args.shift().toLowerCase();

    if(!client.commands.has(command)) {
      return;
    }

  try  { //komutu tekrar dener
      client.commands.get(command).execute(client, message, args)
    } catch (err) { //error durumunda
      console.log(err)
      message.reply("Bu komutu kullanırken hata alıyorum")
    }

  }


});




//Tokeni kullancak
client.login(TOKEN)
