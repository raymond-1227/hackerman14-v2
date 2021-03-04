const { Command } = require("discord.js-commando");
const fetch = require("node-fetch");

module.exports = class joke extends Command {
  constructor(client) {
    super(client, {
      name: "joke",
      group: "fun",
      memberName: "joke",
      description: "Sends your/other's Discord profile information!"
    });
  }

  run(message, owner) {
    fetch("https://official-joke-api.appspot.com/jokes/random")
      .then(res => res.json())
      .then(body => {
        return message.channel.send({
          embed: {
            color: Math.floor(Math.random() * 16777214) + 1,
            title: "**Dumb Jokes**",
            description: body.data,
            timestamp: new Date(),
            footer: {
              text: `Made with ❤️ created by ${owner}`
            }
          }
        });
      });
  }
};
