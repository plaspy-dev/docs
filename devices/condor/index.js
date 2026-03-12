export const brand = {
  "name": "Condor",
  "website": "https://condorskyseeker.com/",
  "description": "To set the tracker send the following commands by SMS messages, the sample setup the device password is 0000 , this password is the default Type the IMEI number Set the operator APN APN,0000,{{apn}} ,{{apnu}},{{apnp}} Set 5-digit identifier to be used, use the last 5 digits of the IMEI ALIAS,0000,{{(\u0027XXXXX\u0027 \u002B imei.substring(10,15)).slice(-5)}}# Set the Timezone UTC-0 GMT,0000,-0# Set the GPRS server SERVIDOR,0000,54.85.159.138,8888,U,A# Set the update interval every 1 minute INTERVALO,0000,M,6# Set GPRS mode GPRS,0000,A# To check the settings CONEXION,0000#",
  "image": require("./logo.jpg").default,
  "trackers": [
    {
      "name": "CB-714",
      "slug": "cb_714",
      "image": require("./cb_714/tracker.png").default
    },
    {
      "name": "CM-311",
      "slug": "cm_311",
      "image": require("./cm_311/tracker.png").default
    },
    {
      "name": "CS-146",
      "slug": "cs_146",
      "image": require("./cs_146/tracker.png").default
    },
    {
      "name": "GE-810",
      "slug": "ge_810",
      "image": require("./ge_810/tracker.png").default
    },
    {
      "name": "TA-913",
      "slug": "ta_913",
      "image": require("./ta_913/tracker.png").default
    },
    {
      "name": "TG-512",
      "slug": "tg_512",
      "image": require("./tg_512/logo..png").default
    },
    {
      "name": "TG-512",
      "slug": "tg_512",
      "image": require("./tg_512/tracker.png").default
    },
    {
      "name": "TG-610",
      "slug": "tg_610",
      "image": require("./tg_610/tracker.png").default
    },
    {
      "name": "TH-923",
      "slug": "th_923",
      "image": require("./th_923/tracker.png").default
    },
    {
      "name": "TP-810",
      "slug": "tp_810",
      "image": require("./tp_810/tracker.png").default
    },
    {
      "name": "TS-728",
      "slug": "ts_728",
      "image": require("./ts_728/tracker.png").default
    }
  ]
};
