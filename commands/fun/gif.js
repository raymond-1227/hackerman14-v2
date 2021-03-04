const { Command } = require("discord.js-commando");
const fetch = require("node-fetch");

module.exports = class gif extends Command {
  constructor(client) {
    super(client, {
      name: "gif",
      group: "fun",
      memberName: "gif",
      description: "Sends your/other's Discord profile information!"
    });
  }

  run(message, owner) {
    fetch(process.env.GIPHY)
      .then(res => res.json())
      .then(body => {
        return message.channel.send({
          embed: {
            color: Math.floor(Math.random() * 16777214) + 1,
            title: "**Random GIF**",
            description: "Here's your GIF!",
            timestamp: new Date(),
            image: {
              url: body.data.image_original_url
            },
            footer: {
              text: "Made with ❤️ created by " + owner
            }
          }
        });
      });
  }
};
