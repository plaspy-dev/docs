export const brand = {
  "name": "Haicom",
  "website": "http://www.haicom.com.tw/",
  "description": "To set the tracker send the following commands by SMS messages, the sample setup the device password is 0000 , this password is the default Set the operator APN #0000,200,{{apn}},{{apnu}},{{apnp}} Set the GPRS server #0000,210,54.85.159.138,8888,8888,8888,0 Set the interval update to 60 seconds #0000,250,0,60,0,0,0,0,0,0",
  "image": require("./logo.jpg").default,
  "trackers": [
    {
      "name": "HI-602",
      "slug": "hi_602",
      "image": require("./hi_602/logo.jpg").default
    },
    {
      "name": "HI-602X",
      "slug": "hi_602x",
      "image": require("./hi_602x/logo.jpg").default
    },
    {
      "name": "HI-603",
      "slug": "hi_603",
      "image": require("./hi_603/logo.jpg").default
    },
    {
      "name": "HI-603X",
      "slug": "hi_603x",
      "image": require("./hi_603x/logo.jpg").default
    },
    {
      "name": "HI-604",
      "slug": "hi_604",
      "image": require("./hi_604/logo.jpg").default
    },
    {
      "name": "HI-604X",
      "slug": "hi_604x",
      "image": require("./hi_604x/logo.jpg").default
    }
  ]
};
