const { Command } = require("discord.js-commando");
const weather = require("weather.js");

module.exports = class weather extends Command {
  constructor(client) {
    super(client, {
      name: "weather",
      group: "misc",
      memberName: "weather",
      description: "Sends your/other's Discord profile information!"
    });
  }

  run(message, owner, {args}) {
    weather.find({ search: args.join(" "), degreeType: "C" }),
      function(err, result) {
        if (err) console.log(err);
        if (!args[0]) return;
        console.log(JSON.stringify(result, null, 2));

        var location = result[0].location;
        var current = result[0].current;

        return message.channel.send({
          embed: {
            color: Math.floor(Math.random() * 16777214) + 1,
            title: "**Weather Forecast**",
            description: `${current.skytext}`,
            author: { name: `Weather for ${current.observationpoint}` },
            thumbnail: current.imageUrl,
            fields: [
              {
                name: "Timezone",
                value: `UTC${current.timezone}`,
                inline: true
              },
              {
                name: "Degree Type",
                value: location.degreeType,
                inline: true
              },
              {
                name: "Temperature",
                value: `${current.temperature} Degrees`,
                inline: true
              },
              {
                name: "Feels Like",
                value: `${current.feelslike} Degrees`,
                inline: true
              },
              {
                name: "Winds",
                value: current.winddisplay,
                inline: true
              },
              {
                name: "Humidity",
                value: `${current.humidity}%`,
                inline: true
              }
            ],
            timestamp: new Date(),
            footer: {
              text: "Made with ❤️ created by " + owner
            }
          }
        });
      };
  }
};
