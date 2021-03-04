const { Command } = require("discord.js-commando");

module.exports = class server extends Command {
  constructor(client) {
    super(client, {
      name: "server",
      group: "misc",
      memberName: "server",
      description: "Sends your/other's Discord profile information!"
    });
  }

  run(message, owner) {
    var serverCreated = message.guild.createdAt.toString().split(" ");
      let region = {
        brazil: ":flag_br: Brazil",
        "eu-central": ":flag_eu: Central Europe",
        singapore: ":flag_sg: Singapore",
        "us-central": ":flag_us: U.S. Central",
        sydney: ":flag_au: Sydney",
        "us-east": ":flag_us: U.S. East",
        "us-south": ":flag_us: U.S. South",
        "us-west": ":flag_us: U.S. West",
        "eu-west": ":flag_eu: Western Europe",
        "vip-us-east": ":flag_us: VIP U.S. East",
        hongkong: ":flag_hk: Hong Kong",
        russia: ":flag_ru: Russia",
        southafrica: ":flag_za: South Africa",
        japan: ":flag_jp: Japan",
        india: ":flag_in: India",
      };
      return message.channel.send({
        embed: {
          color: Math.floor(Math.random() * 16777214) + 1,
          title: "**Server Information**",
          description: "Here's the server information!",
          thumbnail: {
            url: message.guild.iconURL()
          },
          fields: [
            {
              name: "Server Name",
              value: message.guild.name
            },
            {
              name: "Server ID",
              value: message.guild.id
            },
            {
              name: "Server Since",
              value:
                serverCreated[1] +
                " " +
                serverCreated[2] +
                ", " +
                serverCreated[3]
            },
            {
              name: "Server Owner",
              value: message.guild.owner.user
            },
            {
              name: "Server Owner's User ID",
              value: message.guild.owner.id
            },
            {
              name: "Server Region",
              value: region[message.guild.region]
            },
            {
              name: "Total Members",
              value: message.guild.memberCount
            },
            {
              name: "Total Channels",
              value: message.guild.channels.cache.size
            },
            {
              name: "Total Roles",
              value: message.guild.roles.cache.size
            },
            {
              name: "AFK Channel",
              value: message.guild.afkChannel
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
