const { Command } = require("discord.js-commando");
const randomPuppy = require("random-puppy");

module.exports = class meme extends Command {
  constructor(client) {
    super(client, {
      name: "meme",
      group: "fun",
      memberName: "meme",
      description: "Sends your/other's Discord profile information!"
    });
  }

  async run(message, owner) {
    const subReddits = [
      "dankmeme",
      "memes",
      "me_irl",
      "AdviceAnimals",
      "MemeEconomy",
      "ComedyCemetery",
      "PrequelMemes",
      "terriblefacebookmemes",
      "PewdiepieSubmissions",
      "funny",
      "teenagers"
    ];
    const random = subReddits[Math.floor(Math.random() * subReddits.length)];
    const meme = await randomPuppy(random);
    return message.channel.send({
      embed: {
        color: Math.floor(Math.random() * 16777214) + 1,
        title: "**Reddit Memes**",
        description: `A meme from {/r/${random}}`,
        timestamp: new Date(),
        image: {
          url: meme
        },
        footer: {
          text: "Made with ❤️ created by " + owner
        }
      }
    });
  }
};
