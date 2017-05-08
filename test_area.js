const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJhZG1pbkBhZG1pbi5jb20iLCJpYXQiOjE0OTQyNzI3NjUsImp0aSI6ImI2ZDNiOGJkLTFiZDQtNGQ2My1iMjc0LWE5MWI4MGY4MmUzOSIsImlzcyI6Ii8vbG9jYWxob3N0OjMwMDAiLCJleHAiOjE0OTc3Mjg3NjUsIm1xdHQiOiIxMC4wLjAuNiIsIm9zX3VwZGF0ZV9zZXJ2ZXIiOiJodHRwczovL2FwaS5naXRodWIuY29tL3JlcG9zL2Zhcm1ib3QvZmFybWJvdF9vcy9yZWxlYXNlcy9sYXRlc3QiLCJmd191cGRhdGVfc2VydmVyIjoiaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS9yZXBvcy9GYXJtQm90L2Zhcm1ib3QtYXJkdWluby1maXJtd2FyZS9yZWxlYXNlcy9sYXRlc3QiLCJib3QiOiJkZXZpY2VfMiJ9.QKLYJ50mQml1T1fgxwOKMhNYv7lAdt3wwKE1WPaXUlhYceQUMwoD3vCwEVab7imGVJK19R89DQ0606uAcwN4xTJGpfZg06_eqL4DiKUDsM9JRCjsorN3FNA3chmtmptVo-lYzdJcKrFIYQZZmBipcf1DbGjymnGMtH3PrmEFvXWXWivznfhGPic0DNuIA9geDB3HdLuUaZPZ0USn6O9yvvc6rVlv1wqSiuB1IlVit6JjfG9QBR5NzAPi-tHDIj1BHCrtqpjrLUIBq5z8xF5ZXH0RBwJcRL2iIt5FPDpRhSrzTMrQrrEzpTOvJ4Kd50GUNFoRMFg-L7-omMoOhpq44g";

let Farmbot = require("farmbot").Farmbot;

let bot = new Farmbot({ token: token, secure: true });

bot
  .connect()
  .then(function () {
    console.log("CONNECTED TO BOT!")
    // STEP THREE: Connect to IRC
    // var client = new irc.Client(IRC_SERVER, IRC_NICK, IRC_CONFIG);
    // client.addListener('message', function (from, to, message) {
    //   if (message.startsWith("up")) {
    //     bot
    //       .moveRelative({ x: 7, y: 0, z: 0 })
    //       .then(() => console.log("MOVING!!!"))
    //       .catch(() => console.log("CANT MOVE T_T"));
    //   }
    //   console.log("GOT: " + message);
    // });
  })
