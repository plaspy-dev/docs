export const brand = {
  "name": "Noran",
  "website": "http://www.norantracker.com/",
  "description": "To set the tracker send the following commands by SMS messages, the sample setup the device password is 000000 , this password is the default, to get the device Id, send the command to check the device status, the device Id is the first word starts with NR Set the operator APN A000000,012,{{apn}} ,{{apnu}},{{apnp}} Set the GPRS server A000000,010,54.85.159.138,8888 Switch to GPRS mode A000000,011,1 To check settings A000000,004 Device Id, APN, server, port, GPRS status (1), GPRS connection status (1), GSM signal (1-31)",
  "image": require("./logo.jpg").default,
  "trackers": [
    {
      "name": "NR006",
      "slug": "nr006",
      "image": require("./nr006/tracker.jpg").default
    },
    {
      "name": "NR008",
      "slug": "nr008",
      "image": require("./nr008/tracker.jpg").default
    },
    {
      "name": "NR016",
      "slug": "nr016",
      "image": require("./nr016/tracker.jpg").default
    },
    {
      "name": "NR024",
      "slug": "nr024",
      "image": require("./nr024/logo.jpg").default
    },
    {
      "name": "NR028",
      "slug": "nr028",
      "image": require("./nr028/tracker.jpg").default
    },
    {
      "name": "NR100",
      "slug": "nr100",
      "image": require("./nr100/tracker.jpg").default
    },
    {
      "name": "NR108",
      "slug": "nr108",
      "image": require("./nr108/tracker.jpg").default
    },
    {
      "name": "NR200",
      "slug": "nr200",
      "image": require("./nr200/tracker.jpg").default
    }
  ]
};
