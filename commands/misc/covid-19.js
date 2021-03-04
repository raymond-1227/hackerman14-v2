const { Command } = require("discord.js-commando");
const fetch = require("node-fetch");

module.exports = class urban extends Command {
  constructor(client) {
    super(client, {
      name: "covid-19",
      group: "misc",
      memberName: "covid-19",
      description: "Sends your/other's Discord profile information!"
    });
  }

  run(message, args, owner) {
    fetch("https://api.covid19api.com/summary")
      .then(res => res.json())
      .then(body => {
        return message.channel.send({
          embed: {
            color: Math.floor(Math.random() * 16777214) + 1,
            title: "**COVID-19 Report**",
            description: "Here are some sad news :(",
            fields: [
              {
                name: "New Comfirmed Cases",
                value: body.Global.NewConfirmed
              },
              {
                name: "New Death Cases",
                value: body.Global.NewDeaths
              },
              {
                name: "New Recovered Cases",
                value: body.Global.NewRecovered
              },
              {
                name: "Total Comfirmed Cases",
                value: body.Global.TotalConfirmed
              },
              {
                name: "Total Death Cases",
                value: body.Global.TotalDeaths
              },
              {
                name: "Total Recovered Cases",
                value: body.Global.TotalRecovered
              }
            ],
            timestamp: new Date(),
            footer: {
              text: "Made with ❤️ created by " + owner
            }
          }
        });
      });
  }
};
