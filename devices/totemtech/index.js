export const brand = {
  "name": "Totemtech",
  "website": "http://www.totemtek.com/",
  "description": "To set the tracker send the following commands by SMS messages, the sample setup the device password is 000000 , this password is the default Factory reset *000000,007# Set the operator APN *000000,002,{{apn}},{{apnu}},{{apnp}}# Set the GPRS server *000000,003,54.85.159.138,8888,1 Set ACK *000000,019,1# Set the update interval, 60 seconds *000000,60,60,0,60#",
  "image": require("./logo.png").default,
  "trackers": [
    {
      "name": "AT04",
      "slug": "at04",
      "image": require("./at04/tracker.jpg").default
    },
    {
      "name": "AT05",
      "slug": "at05",
      "image": require("./at05/logo.jpg").default
    },
    {
      "name": "AT07",
      "slug": "at07",
      "image": require("./at07/logo.jpg").default
    },
    {
      "name": "AT07-3G",
      "slug": "at07_3g",
      "image": require("./at07_3g/logo.jpg").default
    },
    {
      "name": "AT07-4G",
      "slug": "at07_4g",
      "image": require("./at07_4g/tracker.jpg").default
    },
    {
      "name": "AT08",
      "slug": "at08",
      "image": require("./at08/tracker.jpg").default
    },
    {
      "name": "AT09",
      "slug": "at09",
      "image": require("./at09/logo.jpg").default
    },
    {
      "name": "AT09-4G",
      "slug": "at09_4g",
      "image": require("./at09_4g/tracker.jpg").default
    },
    {
      "name": "AT21-4G",
      "slug": "at21_4g",
      "image": require("./at21_4g/tracker.jpg").default
    }
  ]
};
