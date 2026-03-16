export const brand = {
  "name": "MiniFinder",
  "website": "https://minifinder.se/",
  "description": "To set the tracker send the following commands by SMS messages Set the time zone UTC-0 tz\u002B00 Set the operator APN S1,{{apn}} ,{{apnu}},{{apnp}} Set the GPRS server IP1,54.85.159.138,8888",
  "image": require("./logo.jpg").default,
  "trackers": [
    {
      "name": "ATTO",
      "slug": "atto",
      "image": require("./atto/logo.jpg").default
    },
    {
      "name": "Atto Pro",
      "slug": "atto_pro",
      "image": require("./atto_pro/tracker.jpg").default
    },
    {
      "name": "Nano",
      "slug": "nano",
      "image": require("./nano/tracker.jpg").default
    },
    {
      "name": "Pico",
      "slug": "pico",
      "image": require("./pico/tracker.jpg").default
    },
    {
      "name": "Rex",
      "slug": "rex",
      "image": require("./rex/tracker.png").default
    },
    {
      "name": "Watch",
      "slug": "watch",
      "image": require("./watch/tracker.jpg").default
    },
    {
      "name": "Xtreme",
      "slug": "xtreme",
      "image": require("./xtreme/tracker.png").default
    },
    {
      "name": "Zepto",
      "slug": "zepto",
      "image": require("./zepto/tracker.png").default
    }
  ]
};
