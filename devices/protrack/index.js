export const brand = {
  "name": "Protrack",
  "website": "http://www.protrackgps.in/",
  "description": "To configure the tracker, send the following commands via text messages Configure your carrier\u0027s APN APN,{{apn}} ,{{apnu}},{{apnp}} # Setup the GPRS server SERVER,1,d.plaspy.com,8888,0# Set up the update interval TIMER,60,60# Switch to GPRS mode GPRSON,1# To check the configuration PARAM# To check tracker status STATUS#",
  "image": require("./logo..png").default,
  "trackers": [
    {
      "name": "ET300",
      "slug": "et300",
      "image": require("./et300/tracker.png").default
    },
    {
      "name": "GT06N",
      "slug": "gt06n",
      "image": require("./gt06n/tracker.jpg").default
    },
    {
      "name": "VT03E\u002B",
      "slug": "vt03e",
      "image": require("./vt03e/tracker.png").default
    },
    {
      "name": "VT05C",
      "slug": "vt05c",
      "image": require("./vt05c/tracker.png").default
    },
    {
      "name": "VT05S",
      "slug": "vt05s",
      "image": require("./vt05s/logo..jpg").default
    },
    {
      "name": "VT08",
      "slug": "vt08",
      "image": require("./vt08/Logo.png").default
    },
    {
      "name": "VT08S",
      "slug": "vt08s",
      "image": require("./vt08s/tracker.jpg").default
    }
  ]
};
