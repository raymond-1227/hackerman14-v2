// Important Definitions

const Discord = require("discord.js");
const { CommandoClient } = require("discord.js-commando");
const path = require("path");
const client = new CommandoClient({
  commandPrefix: "h!",
  owner: "410839910204047360",
  invite: "https://discord.gg/4Xv6CDY"
});
client.registry
  .registerGroups([["basic", "Basic"], ["fun", "Fun"], ["misc", "Misc"], ["owner", "Owner Only"]])
  .registerCommandsIn(path.join(__dirname, "commands"));

// Not-That-Important Definitions

const randomPuppy = require("random-puppy");
const urban = require("urban");
const weather = require("weather.js");
const Canvas = require("canvas");
const { MongoClient } = require("mongodb");
const MongoDBProvider = require("commando-provider-mongo").MongoDBProvider;
const AutoPoster = require("topgg-autoposter");
const ap = AutoPoster(process.env.TOPGG, client);
const fetch = require("node-fetch");
const express = require("express");
const app = express();
const cheweyBotAnalyticsAPI = require("discord-bot-analytics");
const customAnalytics = new cheweyBotAnalyticsAPI(
  process.env.CHEYWEYAPI,
  client
);
var owner = "Raymond#2829";
var commandPrefix = "r!";

// Console Logging

client.once("ready", () => {
  console.log("Ready!");
  console.log(
    `The bot is currently serving ${client.users.cache.size} users, in ${client.guilds.cache.size} servers.`
  );
  client.user
    .setPresence({
      activity: { name: "h!help | hackerman14.tk | COMMANDO!" },
      status: "dnd"
    })
    .then(presence =>
      console.log(`Activity is set to "${presence.activities[0].name}"!`)
    )
    .catch(console.error);
});
client.once("reconnecting", () => {
  console.log("Reconnecting!");
});
client.once("disconnect", () => {
  console.log("Disconnect!");
});
client.on("warn", console.warn);
client.on("error", console.error);
client.on("uncaughtException", err => {
  console.log(err);
  process.exit(1);
});
ap.on("posted", () => {
  console.log("Posted stats to Top.gg!");
});
ap.on("error", e => {
  console.log(`An error occurred to TOP.gg! ${e}`);
});
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");
  response.sendStatus(200);
});
app.listen(process.env.PORT);

// Client Codes & Rules

client.on("message", async message => {
  let msg = message.content.toLowerCase();
  if (message.author.bot) return;
  if (!message.guild) return;
  if (!message.content.startsWith(commandPrefix)) return;
  var args = message.content.split(" ").slice(1);
  const channel = message.channel;
});

client.login(process.env.DISCORD);

// Functions

function showError(message, err) {
  message.channel.send({
    embed: {
      color: Math.floor(Math.random() * 16777214) + 1,
      title: "**Boring Facts**",
      description: "f",
      timestamp: new Date(),
      footer: {
        text: "Made with ❤️ created by " + owner
      }
    }
  });
}
