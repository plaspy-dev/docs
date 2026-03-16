export const brand = {
  "name": "Sanav",
  "website": "http://es.sanav.com/",
  "description": "To set the tracker send the following commands by SMS messages, the sample setup the device password is 0000 , this password is the default Factory reset #username,0000,9* Set the operator APN #username,0000,3,{{apn}},{{apnu}},{{apnp}}* Set the GPRS Server #username,0000,18,54.85.159.138:8888* Set the route for data transmission #username,0000,14,9* Set update interval to 60 seconds #username,0000,6,60,9999*",
  "image": require("./logo.jpg").default,
  "trackers": [
    {
      "name": "CT-24",
      "slug": "ct_24",
      "image": require("./ct_24/logo.jpg").default
    },
    {
      "name": "CT-58",
      "slug": "ct_58",
      "image": require("./ct_58/logo.jpg").default
    },
    {
      "name": "GC-101",
      "slug": "gc_101",
      "image": require("./gc_101/logo.jpg").default
    },
    {
      "name": "GS-819",
      "slug": "gs_819",
      "image": require("./gs_819/logo.jpg").default
    },
    {
      "name": "GX-101",
      "slug": "gx_101",
      "image": require("./gx_101/logo.jpg").default
    },
    {
      "name": "MU201S1",
      "slug": "mu201s1",
      "image": require("./mu201s1/logo.jpg").default
    }
  ]
};
