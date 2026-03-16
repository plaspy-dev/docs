export const brand = {
  "name": "PST",
  "website": "",
  "description": "To set the tracker send the following commands by SMS messages, the sample setup the device password is 000000 , this password is the default Set the time zone UTC-0 W000000,032,0 Set the operator APN W000000,011,{{apn}} ,{{apnu}},{{apnp}} Set the GPRS server W000000,012,54.85.159.138,8888 Swich to GPRS mode W000000,013,1",
  "image": require("./logo.jpg").default,
  "trackers": [
    {
      "name": "AVL-011",
      "slug": "avl_011",
      "image": require("./avl_011/logo.jpg").default
    },
    {
      "name": "PST-AVL01",
      "slug": "pst_avl01",
      "image": require("./pst_avl01/logo.jpg").default
    }
  ]
};
