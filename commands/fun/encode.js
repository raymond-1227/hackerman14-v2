const { Command } = require("discord.js-commando");

module.exports = class print extends Command {
  constructor(client) {
    super(client, {
      name: "encode",
      group: "fun",
      memberName: "encode",
      description: "Sends your/other's Discord profile information!",
    });
  }

  run(message, owner, { args }) {
    var toEncode = args.join(" ");
    var input = toEncode.value;
    var output;
    output.value = "";
    for (var i = 0; i < input.length; i++) {
      output.value += input[i].charCodeAt(0).toString(2) + " ";
    }
    if (!args[0])
      return message.channel.send({
        embed: {
          color: Math.floor(Math.random() * 16777214) + 1,
          title: "**Text Encoder**",
          description:
            "You need to say something for me to encode it to binaries!",
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
            value: output
          }
        ],
        footer: {
          text: "Made with ❤️ created by " + owner
        }
      }
    });
  }
};
