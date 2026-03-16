export const brand = {
  "name": "Zilogic",
  "website": "https://zilogic.com/",
  "description": "To set the tracker send the following commands by SMS messages Set the time zone UTC-0 SET TZ \u002B00:00 Set the operator APN SET APN {{apn}},{{apnu}},{{apnp}} Set the GPRS server SET SERVER 54.85.159.138,8888 Switch to GPRS mode SET GPRS 1 Set interval update SET PERIOD 60,60 Save settings SAVE To check settings GET APN GET GPRS GET SERVER STATUS",
  "image": require("./logo.jpg").default,
  "trackers": [
    {
      "name": "Fleet",
      "slug": "fleet",
      "image": require("./fleet/logo.jpg").default
    },
    {
      "name": "Fleet Pro",
      "slug": "fleet_pro",
      "image": require("./fleet_pro/logo.jpg").default
    },
    {
      "name": "RTU",
      "slug": "rtu",
      "image": require("./rtu/logo.jpg").default
    }
  ]
};
