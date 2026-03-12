export const brand = {
  "name": "WanWay",
  "website": "https://www.wanwaytech.net/",
  "description": "To configure the tracker, send the following commands via text messages Configure your carrier\u0027s APN APN,{{apn}} ,{{apnu}},{{apnp}} # Setup the GPRS server SERVER,1,d.plaspy.com,8888,0# Set up the update interval TIMER,60,60# Switch to GPRS mode GPRSON,1# To check the configuration PARAM# To check tracker status STATUS#",
  "image": require("./Logo.jpeg").default,
  "trackers": [
    {
      "name": "EV02",
      "slug": "ev02",
      "image": require("./ev02/tracker.webp").default
    },
    {
      "name": "G18",
      "slug": "g18",
      "image": require("./g18/tracker.webp").default
    },
    {
      "name": "G19",
      "slug": "g19",
      "image": require("./g19/Logo.jpg").default
    },
    {
      "name": "G19H",
      "slug": "g19h",
      "image": require("./g19h/tracker.webp").default
    },
    {
      "name": "G19S",
      "slug": "g19s",
      "image": require("./g19s/Logo.jpg").default
    },
    {
      "name": "GP10",
      "slug": "gp10",
      "image": require("./gp10/Logo.jpg").default
    },
    {
      "name": "GS05",
      "slug": "gs05",
      "image": require("./gs05/tracker.webp").default
    },
    {
      "name": "GS10",
      "slug": "gs10",
      "image": require("./gs10/Logo.jpg").default
    },
    {
      "name": "GS10G",
      "slug": "gs10g",
      "image": require("./gs10g/tracker.webp").default
    },
    {
      "name": "GS12",
      "slug": "gs12",
      "image": require("./gs12/tracker.webp").default
    },
    {
      "name": "GS18",
      "slug": "gs18",
      "image": require("./gs18/Logo.jpg").default
    },
    {
      "name": "GS21",
      "slug": "gs21",
      "image": require("./gs21/Logo.jpg").default
    },
    {
      "name": "GS22",
      "slug": "gs22",
      "image": require("./gs22/Logo.jpg").default
    },
    {
      "name": "GS300",
      "slug": "gs300",
      "image": require("./gs300/tracker.webp").default
    },
    {
      "name": "GS900",
      "slug": "gs900",
      "image": require("./gs900/tracker.webp").default
    },
    {
      "name": "H29P",
      "slug": "h29p",
      "image": require("./h29p/tracker.webp").default
    },
    {
      "name": "S20",
      "slug": "s20",
      "image": require("./s20/tracker.webp").default
    }
  ]
};
