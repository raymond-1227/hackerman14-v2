const { Command } = require("discord.js-commando");

module.exports = class unknowncmd extends Command {
  constructor(client) {
    super(client, {
      name: "unknowncmd",
      group: "basic",
      memberName: "unknowncmd",
      description:
        "Shows help information for when an unknown command is used!",
      unknown: true,
      hidden: true
    });
  }

  run(message, owner) {
    return message.channel.send({
      embed: {
        color: Math.floor(Math.random() * 16777214) + 1,
        title: "**Unknown Command**",
        description:
          "The command you've entered is not recognized, type h!help for a list of commands!",
        timestamp: new Date(),
        footer: {
          text: "Made with ❤️ created by " + owner
        }
      }
    });
  }
};
