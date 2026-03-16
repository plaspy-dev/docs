export const brand = {
  "name": "TopTen",
  "website": "http://www.t10.cn",
  "description": "TopTen trackers work in Plaspy with the tracker ID that corresponds to the last 14 digits of the IMEI found in the PAR command, to configure the tracker send the following commands via text messages Type IMEI number Your identifier is {{imei.substring(1)}} Restore factory settings 111111CLR Set up the APN and GPRS server 111111WWW:IPN:54.85.159.138;COM:8888;APN:{{apn}},{{apnu}},{{apnp}};RPT:60;SLP:60;RUN:2; To check the settings 111111WWW:",
  "image": require("./Logo.jpg").default,
  "trackers": [
    {
      "name": "GT08",
      "slug": "gt08",
      "image": require("./gt08/Logo.jpg").default
    },
    {
      "name": "GT08S",
      "slug": "gt08s",
      "image": require("./gt08s/Logo.jpg").default
    },
    {
      "name": "LT02",
      "slug": "lt02",
      "image": require("./lt02/Logo.jpg").default
    },
    {
      "name": "MT05",
      "slug": "mt05",
      "image": require("./mt05/Logo.jpg").default
    },
    {
      "name": "MT35",
      "slug": "mt35",
      "image": ""
    },
    {
      "name": "PG99",
      "slug": "pg99",
      "image": require("./pg99/Logo.jpg").default
    },
    {
      "name": "PT99",
      "slug": "pt99",
      "image": require("./pt99/Logo.jpg").default
    },
    {
      "name": "TK108",
      "slug": "tk108",
      "image": require("./tk108/Logo.jpg").default
    },
    {
      "name": "TK208",
      "slug": "tk208",
      "image": require("./tk208/Logo.jpg").default
    },
    {
      "name": "TK218",
      "slug": "tk218",
      "image": require("./tk218/Logo.jpg").default
    },
    {
      "name": "TK228",
      "slug": "tk228",
      "image": require("./tk228/Logo.jpg").default
    },
    {
      "name": "TK428",
      "slug": "tk428",
      "image": require("./tk428/Logo.jpg").default
    },
    {
      "name": "TK510",
      "slug": "tk510",
      "image": require("./tk510/Logo.jpg").default
    }
  ]
};
