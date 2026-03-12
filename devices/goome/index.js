export const brand = {
  "name": "Goome",
  "website": "http://www.goomegpstracker.com",
  "description": "To set the tracker send the following commands by SMS messages Factory reset FACTORY# Set the operator APN APN,{{apn}} ,{{apnu}},{{apnp}} # Set the GPRS server GPRSSET,54.85.159.138,8888# Set the update interval every 60 seconds TIMER,60# to check settings GPRSSET# to check the device status STATUS#",
  "image": require("./logo.jpg").default,
  "trackers": [
    {
      "name": "EV02",
      "slug": "ev02",
      "image": require("./ev02/logo.jpg").default
    },
    {
      "name": "GM02G",
      "slug": "gm02g",
      "image": require("./gm02g/logo.jpg").default
    },
    {
      "name": "GM06NW",
      "slug": "gm06nw",
      "image": require("./gm06nw/logo.jpg").default
    },
    {
      "name": "GMOBD",
      "slug": "gmobd",
      "image": require("./gmobd/logo.jpg").default
    },
    {
      "name": "U9",
      "slug": "u9",
      "image": require("./u9/logo.jpg").default
    }
  ]
};
