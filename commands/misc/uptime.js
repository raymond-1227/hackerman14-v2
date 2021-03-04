const { Command } = require("discord.js-commando");

module.exports = class uptime extends Command {
  constructor(client) {
    super(client, {
      name: "uptime",
      group: "misc",
      memberName: "uptime",
      description: "Sends your/other's Discord profile information!"
    });
  }

  run(message, client, owner) {
    let totalSeconds = client.uptime / 1000;
    let days = Math.floor(totalSeconds / 86400);
    let hours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;
    let roundedSeconds = Math.round(seconds);
    let uptime = `${days} days, ${hours} hours, ${minutes} minutes and ${roundedSeconds} seconds`;
    message.channel.send({
      embed: {
        color: Math.floor(Math.random() * 16777214) + 1,
        title: "**Time Tracker**",
        description: `The bot has stayed on for ${uptime}!`,
        timestamp: new Date(),
        footer: {
          text: "Made with ❤️ created by " + owner
        }
      }
    });
  }
};
