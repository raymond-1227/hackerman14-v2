const Discord = require("discord.js");
const { Command } = require("discord.js-commando");
const Canvas = require("canvas");

module.exports = class print extends Command {
  constructor(client) {
    super(client, {
      name: "print",
      group: "fun",
      memberName: "print",
      description: "Sends your/other's Discord profile information!",
    });
  }

  async run(message, args, owner) {
    const canvas = Canvas.createCanvas(700, 250);
    const ctx = canvas.getContext("2d");

    const background = await Canvas.loadImage("./wallpaper.jpg");
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

    ctx.strokeStyle = "#74037b";
    ctx.strokeRect(0, 0, canvas.width, canvas.height);

    ctx.beginPath();
    ctx.arc(125, 125, 100, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.clip();

    const attachment = new Discord.MessageAttachment(canvas.toBuffer());

    return message.channel.send({
      embed: {
        color: Math.floor(Math.random() * 16777214) + 1,
        title: "**Crappy Printing Machine**",
        description: "Here's your beautiful text-to-image thing!",
        timestamp: new Date(),
        fields: [
          {
            name: "Preparing a canva thing",
            value: "Will add an image manupulation stuff ok bye"
          }
        ],
        image: {
          url: attachment
        },
        footer: {
          text: "Made with ❤️ created by " + owner
        }
      }
    });
  }
};
