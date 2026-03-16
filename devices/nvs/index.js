export const brand = {
  "name": "NVS",
  "website": "https://www.nvs-ts.ru/",
  "description": "To set the tracker send the following commands by SMS messages, the sample setup the device password is 123456 , this password is the default Factory reset begin123456 Set the time zone UTC-0 time zone123456 0 Set the operator APN apn123456 {{apn}} Set the username and password of APN operator up123456 {{apnu}} {{apnp}} Set the GPRS server adminip123456 54.85.159.138 8888 Switch to GPRS mode gprs123456,1,1 or gprs123456 To check settings check123456",
  "image": require("./logo.jpg").default,
  "trackers": [
    {
      "name": "CH-5704",
      "slug": "ch_5704",
      "image": require("./ch_5704/logo.jpg").default
    },
    {
      "name": "Navitrek UM-02",
      "slug": "navitrek_um_02",
      "image": require("./navitrek_um_02/logo.jpg").default
    },
    {
      "name": "Navitrek UM-04",
      "slug": "navitrek_um_04",
      "image": require("./navitrek_um_04/logo.jpg").default
    },
    {
      "name": "SIGNAL S-2115",
      "slug": "signal_s_2115",
      "image": require("./signal_s_2115/logo.jpg").default
    },
    {
      "name": "SIGNAL S-2117",
      "slug": "signal_s_2117",
      "image": require("./signal_s_2117/logo.jpg").default
    },
    {
      "name": "SN-5001",
      "slug": "sn_5001",
      "image": require("./sn_5001/logo.jpg").default
    }
  ]
};
