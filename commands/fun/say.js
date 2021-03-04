const { Command } = require("discord.js-commando");

module.exports = class say extends Command {
  constructor(client) {
    super(client, {
      name: "say",
      group: "fun",
      memberName: "say",
      description: "Sends your/other's Discord profile information!",
    });
  }

  run(message, owner, {args}) {
    const sayMessage = args.join(" ");
    var member = message.author;
    if (!args[0])
      return message.channel
        .send({
          embed: {
            color: Math.floor(Math.random() * 16777214) + 1,
            title: "**Action Copy Cat**",
            description: "You need to say something for the bot to say!",
            timestamp: new Date(),
            footer: {
              text: "Made with ❤️ created by " + owner
            }
          }
        })
        .then(msg => {
          msg.delete(10000);
        });
    message.delete().catch(O_o => {});
    message.channel.send(`${sayMessage}\n-**${member.tag}**`);
  }
};
