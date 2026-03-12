export const brand = {
  "name": "Telic",
  "website": "https://www.telic.de",
  "description": "To set the tracker send the following commands by SMS messages, the sample setup the device password is 123456 , this password is the default Factory reset begin123456 Set the time zone UTC-0 time zone123456 0 Set the operator APN apn123456 {{apn}} Set the username and password of APN operator up123456 {{apnu}} {{apnp}} Set the GPRS server adminip123456 54.85.159.138 8888 Switch to GPRS mode gprs123456,1,1 or gprs123456 To check settings check123456",
  "image": require("./logo.png").default,
  "trackers": [
    {
      "name": "LT910-EUbis",
      "slug": "lt910_eubis",
      "image": require("./lt910_eubis/tracker.jpg").default
    },
    {
      "name": "LT910-WW",
      "slug": "lt910_ww",
      "image": require("./lt910_ww/tracker.jpg").default
    },
    {
      "name": "NT910-G1",
      "slug": "nt910_g1",
      "image": require("./nt910_g1/tracker.jpg").default
    },
    {
      "name": "Picotrack 4G",
      "slug": "picotrack_4g",
      "image": require("./picotrack_4g/tracker.jpg").default
    },
    {
      "name": "SafeDrive",
      "slug": "safedrive",
      "image": require("./safedrive/logo.jpg").default
    },
    {
      "name": "SBC AVL",
      "slug": "sbc_avl",
      "image": require("./sbc_avl/logo.jpg").default
    },
    {
      "name": "SBC product family",
      "slug": "sbc_product_family",
      "image": require("./sbc_product_family/tracker.jpg").default
    },
    {
      "name": "SBC3 CAN",
      "slug": "sbc3_can",
      "image": require("./sbc3_can/logo.jpg").default
    },
    {
      "name": "SBC3 IO",
      "slug": "sbc3_io",
      "image": require("./sbc3_io/logo.jpg").default
    },
    {
      "name": "Telic Solar",
      "slug": "telic_solar",
      "image": require("./telic_solar/tracker.png").default
    }
  ]
};
