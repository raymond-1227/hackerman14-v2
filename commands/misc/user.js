const { Command } = require("discord.js-commando");

module.exports = class user extends Command {
  constructor(client) {
    super(client, {
      name: "user",
      group: "misc",
      memberName: "user",
      description: "Sends your/other's Discord profile information!"
    });
  }

  run(message, owner) {
    var member = message.mentions.users.first() || message.author;
    var userCreated = member.createdAt.toString().split(" ");
    return message.channel.send({
      embed: {
        color: Math.floor(Math.random() * 16777214) + 1,
        title: "**User Information**",
        description: "Here's the user information!",
        thumbnail: {
          url: member.avatarURL()
        },
        fields: [
          {
            name: "Username + Tag",
            value: member.tag
          },
          {
            name: "User ID",
            value: member.id
          },
          {
            name: "Account Since",
            value: userCreated[1] + " " + userCreated[2] + ", " + userCreated[3]
          },
          {
            name: "Game Presence",
            value: member.presence.activities[0]
              ? member.presence.activities.state
              : "none"
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
