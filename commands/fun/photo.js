const { Command } = require("discord.js-commando");
const fetch = require("node-fetch");

module.exports = class photo extends Command {
  constructor(client) {
    super(client, {
      name: "photo",
      aliases: ['hdphoto', 'unsplash'],
      group: "fun",
      memberName: "photo",
      description: "Sends your/other's Discord profile information!"
    });
  }

  run(message, args, owner) {
    return message.channel.send({
      embed: {
        color: Math.floor(Math.random() * 16777214) + 1,
        title: "**Random HD Photo**",
        description: "Here's your HD photo!",
        timestamp: new Date(),
        image: {
          url: "https://source.unsplash.com/random?sig=" + Math.random()
        },
        footer: {
          text: "Made with ❤️ created by " + owner
        }
      }
    });
  }
};
