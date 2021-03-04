const { Command } = require("discord.js-commando");

module.exports = class sembed extends Command {
  constructor(client) {
    super(client, {
      name: "sembed",
      group: "misc",
      memberName: "sembed",
      description: "Sends your/other's Discord profile information!"
    });
  }

  run(message) {
    return message.channel.send({
      embed: {
        color: 0x0099ff,
        title: "Some title",
        url: "https://discord.js.org",
        author: {
          name: "Some name",
          icon_url: "https://i.imgur.com/wSTFkRM.png",
          url: "https://discord.js.org"
        },
        description: "Some description here",
        thumbnail: {
          url: "https://i.imgur.com/wSTFkRM.png"
        },
        fields: [
          {
            name: "Regular field title",
            value: "Some value here"
          },
          {
            name: "\u200b",
            value: "\u200b"
          },
          {
            name: "Inline field title",
            value: "Some value here",
            inline: true
          },
          {
            name: "Inline field title",
            value: "Some value here",
            inline: true
          },
          {
            name: "Inline field title",
            value: "Some value here",
            inline: true
          }
        ],
        image: {
          url: "https://i.imgur.com/wSTFkRM.png"
        },
        timestamp: new Date(),
        footer: {
          text: "Some footer text here",
          icon_url: "https://i.imgur.com/wSTFkRM.png"
        }
      }
    });
  }
};
