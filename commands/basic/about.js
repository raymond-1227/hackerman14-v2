const Discord = require("discord.js");
const { Command } = require("discord.js-commando");

module.exports = class about extends Command {
  constructor(client) {
    super(client, {
      name: "about",
      group: "basic",
      memberName: "about",
      description: "Shows you the info about the bot!"
    });
  }

  run(message, client, owner) {
    return message.channel.send({
      embed: {
        color: Math.floor(Math.random() * 16777214) + 1,
        title: "**About This Bot**",
        description: "The information about this bot!",
        thumbnail: {
          url: client.user.displayAvatarURL
        },
        fields: [
          {
            name: "Bot Name",
            value: "hackerman14"
          },
          {
            name: "Bot Since",
            value: "September 7, 2019"
          },
          {
            name: "Bot Website",
            value: "[https://hackerman14.tk](https://hackerman14.tk)"
          },
          {
            name: "Creator",
            value: "[" + owner + "](https://raymond-1227.github.io)"
          },
          {
            name: "Host",
            value: "[Glitch](https://glitch.com)"
          },
          {
            name: "Always Online",
            value:
              "A few lines of codes in the index file (but doesn't make the bot really stay on 24/7)"
          },
          {
            name: "Source Codes",
            value: "[GitHub/hackerman14](https://github.com/hackerman14)"
          },
          {
            name: "Library",
            value: "[Discord.js](https://discord.js.org)"
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
