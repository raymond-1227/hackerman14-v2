const Discord = require("discord.js");
const { Command } = require("discord.js-commando");

module.exports = class help extends Command {
  constructor(client) {
    super(client, {
      name: "help",
      group: "basic",
      memberName: "help",
      description: "Displays the error of the command!",
      error: true,
      hidden: true
    });
  }

  run(message, owner) {
    return message.channel.send({
      embed: {
        color: Math.floor(Math.random() * 16777214) + 1,
        title: "**Bot Changelog**",
        description: "Date: February 28, 2021",
        timestamp: new Date(),
        fields: [
          {
            name: "Command Handler",
            value:
              "Nicer way for developers to read codes, and easier for me to edit codes."
          }
        ],
        footer: {
          text: "Made with ❤️ created by " + owner
        }
      }
    });
  }
};

const emojiNext = "➡";
const emojiPrevious = "⬅";
const reactionArrow = [emojiPrevious, emojiNext];
const embed1 = () =>
  new Discord.MessageEmbed({
    color: Math.floor(Math.random() * 16777214) + 1,
    title: "**Commands List**",
    description: "Here's all the available commands!",
    fields: [
      {
        name: ":robot: Default Prefix",
        value: "r!",
        inline: true
      },
      {
        name: ":keyboard: Placeholder Requirements",
        value: "`<>` = REQUIRED, `[]` = OPTIONAL",
        inline: true
      },
      {
        name: ":information_source: Basic Commands",
        value: "Page 2"
      },
      {
        name: ":8ball: Fun Commands",
        value: "Page 3"
      },
      {
        name: ":cd: Misc Conmmands",
        value: "Page 4"
      }
    ],
    timestamp: new Date(),
    footer: {
      text: "Page 1"
    }
  });

const embed2 = () =>
  new Discord.MessageEmbed({
    color: Math.floor(Math.random() * 16777214) + 1,
    title: ":information_source: **Basic Commands**",
    fields: [
      {
        name: "`h!help`",
        value: "Shows this command list!"
      },
      {
        name: "`h!about`",
        value: "Shows you the info about the bot!"
      },
      {
        name: "`h!uptime`",
        value: "Shows you the uptime of the bot!"
      },
      {
        name: "`h!changelog`",
        value: "Shows you the change log of the bot with a specific date!"
      }
    ],
    timestamp: new Date(),
    footer: {
      text: "Page 2"
    }
  });

const embed3 = () =>
  new Discord.MessageEmbed({
    color: Math.floor(Math.random() * 16777214) + 1,
    title: ":8ball: **Fun Commands**",
    fields: [
      {
        name: "`h!facts`",
        value: "Tells you a boring fact!"
      },
      {
        name: "`h!skeppy`",
        value: "Tells you a random Skeppy quotes according to Wikitubia!"
      },
      {
        name: "`h!8`",
        value: "Ask any yes/no question, and it will answer you something!"
      },
      {
        name: "`h!gif`",
        value: "Sends you a random GIF!"
      },
      {
        name: "`h!photo`",
        value: "Sends you a random HD photo with a random thumbnail!"
      },
      {
        name: "`h!say <Message>`",
        value: "Says something what you say!"
      },
      {
        name: "`h!meme`",
        value: "Tells you a meme from Subreddits!"
      },
      {
        name: "`h!print`",
        value: "Say something, the bot will output your text as an image!"
      }
    ],
    timestamp: new Date(),
    footer: {
      text: "Page 3"
    }
  });

const embed4 = () =>
  new Discord.MessageEmbed({
    color: Math.floor(Math.random() * 16777214) + 1,
    title: ":cd: **Misc Commands**",
    fields: [
      {
        name: "`h!ping`",
        value: "Replies you the respond time of the bot!"
      },
      {
        name: "`h!user [Other Users]`",
        value: "Sends your/other's Discord profile information!"
      },
      {
        name: "`h!server`",
        value: "Sends the server's detail"
      },
      {
        name: "`h!urban <search/random> [query]`",
        value: "Search the words across the Urban Dictionary!"
      },
      {
        name: "`h!covid-19`",
        value: "Tells you any global numbers of COVID-19 cases! :("
      },
      {
        name: "`h!reload`",
        value: "Reboots the bot!"
      }
    ],
    timestamp: new Date(),
    footer: {
      text: "Page 4"
    }
  });

const list = [embed1, embed2, embed3, embed4];

function getList(i) {
  return list[i]()
    .setTimestamp()
    .setFooter(`Page ${i + 1}`); // i+1 because we start at 0
}

function filter(reaction, user) {
  return !user.bot && reactionArrow.includes(reaction.emoji.name); // check if the emoji is inside the list of emojis, and if the user is not a bot
}

function onCollect(emoji, message, i, getList) {
  if (emoji.name === emojiPrevious && i > 0) {
    message.edit(getList(--i));
  } else if (emoji.name === emojiNext && i < list.length - 1) {
    message.edit(getList(++i));
  }
  return i;
}

function createCollectorMessage(message, getList) {
  let i = 0;
  const collector = message.createReactionCollector(filter);
  collector.on("collect", r => {
    i = onCollect(r.emoji, message, i, getList);
  });
}

function sendList(channel, getList) {
  channel
    .send(getList(0))
    .then(msg => msg.react(emojiPrevious))
    .then(msgReaction => msgReaction.message.react(emojiNext))
    .then(msgReaction => createCollectorMessage(msgReaction.message, getList));
}
