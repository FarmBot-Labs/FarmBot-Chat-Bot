let irc = require("irc");
let axios = require("axios").default;
let secret = require("./secret.json");
let Farmbot = require("farmbot").Farmbot;

// Node JS workaround:
// SEE https://github.com/FarmBot/farmbot-js/issues/33
global.atob = require("atob");

// SEE: https://github.com/FarmBot/Farmbot-Web-API#generating-an-api-token
let API_URL = "https://my.farmbot.io/api/tokens";

// SEE: https://github.com/martynsmith/node-irc#basic-usage
let IRC_SERVER = "irc.freenode.net";
let IRC_NICK = "potato_tornado";
let IRC_CONFIG = { channels: ['#farmbot_example'] };

// STEP ONE: Get an API token
axios
  .post(API_URL, secret)
  .then(function (resp) {
    let token = resp.data.token.encoded;
    console.log(`Got API Token...`);
    console.dir(resp.data.token.unencoded)
    // STEP TWO: Connect to your FarmBot:
    let bot = new Farmbot({ token: token, secure: true });

    bot
      .connect()
      .then(function () {
        console.log("CONNECTED TO BOT!")
        // STEP THREE: Connect to IRC
        var client = new irc.Client(IRC_SERVER, IRC_NICK, IRC_CONFIG);
        client.addListener('message', function (from, to, message) {
          if (message.startsWith("up")) {
            bot
              .moveRelative({ x: 7, y: 0, z: 0 })
              .then(() => console.log("MOVING!!!"))
              .catch(() => console.log("CANT MOVE T_T"));
          }
          console.log("GOT: " + message);
        });
      })
      .catch(function (e) {
        console.log("FAILED TO CNNECT TO BOT!!");
        console.dir(e);
        console.dir(bot._state);
      })
  })
  .catch(function (err) {
    console.log("BAD PASSWORD OR EMAIL!");
    console.dir(err);
  });
