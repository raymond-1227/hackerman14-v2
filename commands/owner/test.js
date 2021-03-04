const { Command } = require("discord.js-commando");

module.exports = class test extends Command {
  constructor(client) {
    super(client, {
      name: "test",
      group: "owner",
      memberName: "test",
      description: "Sends your/other's Discord profile information!"
    });
  }

run(message, args, owner) {
    console.log(args)
  }
};
