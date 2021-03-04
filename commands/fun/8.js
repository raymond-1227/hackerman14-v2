const { Command } = require("discord.js-commando");

module.exports = class eight extends Command {
  constructor(client) {
    super(client, {
      name: "8",
      group: "fun",
      memberName: "8",
      description: "Sends your/other's Discord profile information!",
    });
  }

  run(message, client, owner, { args }) {
    const sayMessage = args.join(" ");
    var answers = [
      "It is certain.",
      "It is decidedly so.",
      "Without a doubt.",
      "Yes - definitely.",
      "You may rely on it.",
      "As I see it, yes.",
      "Most likely.",
      "Outlook good.",
      "Yes",
      "Signs point to yes.",
      "Reply hazy, try again.",
      "Ask again later.",
      "Better not tell you now.",
      "Cannot predict now.",
      "Concentrate and ask again.",
      "Don't count on it.",
      "My reply is no.",
      "My sources say no.",
      "Outlook not so good.",
      "Very doubtful."
    ];
    var randomAnswer = answers[Math.floor(Math.random() * answers.length)];

    if (!args[0])
      return message.channel.send({
        embed: {
          color: Math.floor(Math.random() * 16777214) + 1,
          title: "**The Legendary 8 Ball**",
          description: "You need to say something for the bot to response!",
          timestamp: new Date(),
          footer: {
            text: "Made with ❤️ created by " + owner
          }
        }
      });

    return message.channel.send({
      embed: {
        color: Math.floor(Math.random() * 16777214) + 1,
        title: "**The Legendary 8 Ball**",
        description: "This smart ball has something to tell you.",
        fields: [
          {
            name: "Your Question",
            value: sayMessage
          },
          {
            name: "The 8 Ball's Big Words",
            value: randomAnswer
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
