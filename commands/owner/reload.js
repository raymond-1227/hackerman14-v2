const { Command } = require("discord.js-commando");

module.exports = class reload extends Command {
  constructor(client) {
    super(client, {
      name: "reload",
      group: "owner",
      memberName: "reload",
      description: "Sends your/other's Discord profile information!"
    });
  }

  async run(message, client, owner) {
    if (!message.author.owner)
      return message.channel.send({
        embed: {
          color: Math.floor(Math.random() * 16777214) + 1,
          title: "**iReboot**",
          description:
            "Only the bot owner can perform this action you dumb item!",
          timestamp: new Date(),
          footer: {
            text: "Made with ❤️ created by " + owner
          }
        }
      });
    await message.channel.send({
      embed: {
        color: Math.floor(Math.random() * 16777214) + 1,
        title: "**iReboot**",
        description: "Bot is now rebooting!",
        timestamp: new Date(),
        footer: {
          text: "Made with ❤️ created by " + owner
        }
      }
    });
    await client.destroy();
    return process.exit(0);
  }
};
