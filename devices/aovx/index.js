export const brand = {
  "name": "AOVX",
  "website": "https://www.aovx.com/",
  "description": "To configure the tracker, send the following commands via text messages Configure your carrier\u0027s APN APN,{{apn}} ,{{apnu}},{{apnp}} # Setup the GPRS server SERVER,1,d.plaspy.com,8888,0# Set up the update interval TIMER,60,60# Switch to GPRS mode GPRSON,1# To check the configuration PARAM# To check tracker status STATUS#",
  "image": require("./logo.png").default,
  "trackers": [
    {
      "name": "AG300",
      "slug": "ag300",
      "image": require("./ag300/tracker.jpg").default
    },
    {
      "name": "AL300",
      "slug": "al300",
      "image": require("./al300/tracker.jpg").default
    },
    {
      "name": "AM300",
      "slug": "am300",
      "image": require("./am300/tracker.jpg").default
    },
    {
      "name": "EB100",
      "slug": "eb100",
      "image": require("./eb100/tracker.png").default
    },
    {
      "name": "EB110",
      "slug": "eb110",
      "image": require("./eb110/tracker.png").default
    },
    {
      "name": "GG100",
      "slug": "gg100",
      "image": require("./gg100/tracker.jpg").default
    },
    {
      "name": "GL100",
      "slug": "gl100",
      "image": require("./gl100/tracker.jpg").default
    },
    {
      "name": "GM100",
      "slug": "gm100",
      "image": require("./gm100/tracker.jpg").default
    },
    {
      "name": "VG200",
      "slug": "vg200",
      "image": require("./vg200/tracker.png").default
    },
    {
      "name": "VL100",
      "slug": "vl100",
      "image": require("./vl100/tracker.jpg").default
    },
    {
      "name": "VL100L",
      "slug": "vl100l",
      "image": require("./vl100l/tracker.jpg").default
    },
    {
      "name": "VL300 - (4G)",
      "slug": "vl300_4g",
      "image": require("./vl300_4g/tracker.jpg").default
    },
    {
      "name": "VL300R - (4G)",
      "slug": "vl300r_4g",
      "image": require("./vl300r_4g/tracker.jpg").default
    },
    {
      "name": "VL300W",
      "slug": "vl300w",
      "image": require("./vl300w/tracker.jpg").default
    },
    {
      "name": "VL350",
      "slug": "vl350",
      "image": require("./vl350/tracker.jpg").default
    },
    {
      "name": "VX300",
      "slug": "vx300",
      "image": require("./vx300/tracker.png").default
    }
  ]
};
