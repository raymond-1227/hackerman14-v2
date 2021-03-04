const { Command } = require("discord.js-commando");

module.exports = class changelog extends Command {
  constructor(client) {
    super(client, {
      name: "changelog",
      aliases: ["whatsnew", "updates"],
      group: "basic",
      memberName: "changelog",
      description: "Displays the error of the command!",
      error: true,
      hidden: true
    });
  }

  run(message, owner) {
    return message.channel.send({
      embed: {
        color: Math.floor(Math.random() * 16777214) + 1,
        title: "**Bot Changelog**",
        description: "Date: February 28, 2021",
        timestamp: new Date(),
        fields: [
          {
            name: "Command Handler",
            value:
              "Nicer way for developers to read codes, and easier for me to edit codes."
          }
        ],
        footer: {
          text: "Made with ❤️ created by " + owner
        }
      }
    });
  }
};
