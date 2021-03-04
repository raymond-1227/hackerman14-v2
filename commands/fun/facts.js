const { Command } = require("discord.js-commando");
const fetch = require("node-fetch");

module.exports = class facts extends Command {
  constructor(client) {
    super(client, {
      name: "facts",
      aliases: ['fact'],
      group: "fun",
      memberName: "facts",
      description: "Sends your/other's Discord profile information!"
    });
  }

  run(message, owner) {
    fetch("https://useless-facts.sameerkumar.website/api")
      .then(res => res.json())
      .then(body => {
        return message.channel.send({
          embed: {
            color: Math.floor(Math.random() * 16777214) + 1,
            title: "**Boring Facts**",
            description: body.data,
            timestamp: new Date(),
            footer: {
              text: "Made with ❤️ created by " + owner
            }
          }
        });
      });
  }
};
