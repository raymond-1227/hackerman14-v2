const { Command } = require("discord.js-commando");

module.exports = class changelog extends Command {
  constructor(client) {
    super(client, {
      name: "ownership",
      group: "fun",
      memberName: "ownership",
      description: "Displays the error of the command!",
      error: true,
      hidden: true
    });
  }

  run(message, owner) {
    if (!message.author.owner)
      return message.channel.send({
        embed: {
          color: "#db564f",
          title: "**Bot Ownership Verification**",
          description: "You're not the owner tho!",
          timestamp: new Date(),
          footer: {
            text: "Made with ❤️ created by " + owner
          }
        }
      });
    return message.channel.send({
      embed: {
        color: "#64ab80",
        title: "**Bot Ownership Verification**",
        description:
          "Congratulations, you're the owner of the bot! (Verified by Professor DumbGuy123)",
        timestamp: new Date(),
        footer: {
          text: "Made with ❤️ created by " + owner
        }
      }
    });
  }
};
