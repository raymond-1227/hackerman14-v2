const Discord = require("discord.js");
const { Command } = require("discord.js-commando");
const urban = require("urban");

module.exports = class urban extends Command {
  constructor(client) {
    super(client, {
      name: "urban",
      group: "fun",
      memberName: "urban",
      description: "Sends your/other's Discord profile information!",
    });
  }

  run(message, owner, { args }) {
    if (!message.channel.nsfw)
      return message.channel.send({
        embed: {
          color: Math.floor(Math.random() * 16777214) + 1,
          title: "**Urban Dictionary**",
          description:
            "You must run this command in NSFW channels because NSFW definitions exist!",
          timestamp: new Date(),
          footer: {
            text: "Made with ❤️ created by " + owner
          }
        }
      });

    if (args < 1 || !["random", "search"].includes(args[0]))
      return message.channel.send({
        embed: {
          color: Math.floor(Math.random() * 16777214) + 1,
          title: "**Urban Dictionary**",
          description: "Please enter something in order to search!",
          timestamp: new Date(),
          footer: {
            text: "Made with ❤️ created by " + owner
          }
        }
      });

    let search = args[1] ? urban(args.slice(1).join(" ")) : urban.random();
    search.first(res => {
      if (!res)
        return message.channel.send({
          embed: {
            color: Math.floor(Math.random() * 16777214) + 1,
            title: "**Urban Dictionary**",
            description: "No results found for this topic!",
            timestamp: new Date(),
            footer: {
              text: "Made with ❤️ created by " + owner
            }
          }
        });

      let {
        word,
        definition,
        example,
        thumbs_up,
        thumbs_down,
        permalink,
        author
      } = res;

      return message.channel.send({
        color: Math.floor(Math.random() * 16777214) + 1,
        title: "**Urban Dictionary**",
        description: "Here's the definition!",
        thumbnail: {
          url: "https://file.coffee/u/Q39Od2R9wwf.png"
        },
        fields: [
          {
            name: "Word",
            value: word
          },
          {
            name: "Definition",
            value: definition || "No definition given"
          },
          {
            name: "Word Example",
            value: example || "No example given"
          },
          {
            name: "Upvotes",
            value: thumbs_up || 0
          },
          {
            name: "Downvotes",
            value: thumbs_down || 0
          },
          {
            name: "Link to the word",
            value: `[${word}](${permalink || "https://urbandictionary.com"})`
          },
          {
            name: "Author",
            value: author || "Unknown"
          }
        ],
        timestamp: new Date(),
        footer: {
          text: "Made with ❤️ created by " + owner
        }
      });
    });
  }
};
