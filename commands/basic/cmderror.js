const { Command } = require("discord.js-commando");

module.exports = class cmderror extends Command {
  constructor(client) {
    super(client, {
      name: "cmderror",
      group: "basic",
      memberName: "cmderror",
      description: "Displays the error of the command!",
      error: true,
      hidden: true
    });
  }

  run(message, owner, error) {
    return message.channel.send({
      embed: {
        color: Math.floor(Math.random() * 16777214) + 1,
        title: "**Command Error**",
        description:
          "An error occured while performing command, check below for error!",
        fields: [
          {
            name: "Console",
            value: "```" + error + "```"
          }
        ],
        timestamp: new Date(),
        footer: {
          text: "Made with ❤️ created by " + owner
        }
      }
    });
  }
};