export const brand = {
  "name": "UVI Group",
  "website": "http://www.uvi-group.com/",
  "description": "To set the tracker send the following commands by SMS messages, the sample setup the device password is 666666 , this password is the default Factory settings FACTORY,666666# Set the time zone UTC-0 gmt,666666,e,0# Set the operator APN APN,666666,{{apn}} ,{{apnu}},{{apnp}} # Set GPRS server server,666666,0,54.85.159.138,8888,0# Set update interval 60 seconds timer,666666,,60# To check settings GPRSSET,666666# To check status status,666666#",
  "image": require("./logo.jpg").default,
  "trackers": [
    {
      "name": "GT02",
      "slug": "gt02",
      "image": require("./gt02/logo.jpg").default
    },
    {
      "name": "GT06",
      "slug": "gt06",
      "image": require("./gt06/logo.jpg").default
    },
    {
      "name": "VT02N",
      "slug": "vt02n",
      "image": require("./vt02n/logo.jpg").default
    }
  ]
};
