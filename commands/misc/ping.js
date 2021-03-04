const { Command } = require("discord.js-commando");

module.exports = class skeppy extends Command {
  constructor(client) {
    super(client, {
      name: "ping",
      group: "misc",
      memberName: "ping",
      description: "Sends your/other's Discord profile information!"
    });
  }

  async run(message, client, owner) {
    let m = await message.channel.send({
      embed: {
        color: Math.floor(Math.random() * 16777214) + 1,
        title: "**Lag Machine**",
        description: "Ping?",
        timestamp: new Date(),
        footer: {
          text: "Made with ❤️ created by " + owner
        }
      }
    });
    return m.edit({
      embed: {
        color: Math.floor(Math.random() * 16777214) + 1,
        title: "**Lag Machine**",
        description: "Pong!",
        fields: [
          {
            name: "Latency",
            value: `${m.createdTimestamp - message.createdTimestamp}ms`
          },
          {
            name: "API Latency",
            value: `${Math.round(client.ws.ping)}ms`
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
