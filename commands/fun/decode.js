const { Command } = require("discord.js-commando");

module.exports = class decode extends Command {
  constructor(client) {
    super(client, {
      name: "decode",
      group: "fun",
      memberName: "decode",
      description: "Sends your/other's Discord profile information!",
    });
  }

  run(message, owner, { args }) {
    var toDecode = args.join(" ");
    if (!args[0])
      return message.channel.send({
        embed: {
          color: Math.floor(Math.random() * 16777214) + 1,
          title: "**Text Encoder**",
          description:
            "You need to say something for me to encode it into binary!",
          timestamp: new Date(),
          footer: {
            text: "Made with ❤️ created by " + owner
          }
        }
      });
    if (isNaN(args[0]))
      return message.channel.send({
        embed: {
          color: Math.floor(Math.random() * 16777214) + 1,
          title: "**Text Encoder**",
          description:
            "You need to say the binary code for decode it into text!",
          timestamp: new Date(),
          footer: {
            text: "Made with ❤️ created by " + owner
          }
        }
      });
    message.channel.send({
      embed: {
        color: Math.floor(Math.random() * 16777214) + 1,
        title: "**Text Encoder**",
        description: "Here's your encoded message!",
        timestamp: new Date(),
        fields: [
          {
            name: "Binary Results",
            value: parseInt(toDecode, 2).toString(10)
          }
        ],
        footer: {
          text: "Made with ❤️ created by " + owner
        }
      }
    });
  }
};
