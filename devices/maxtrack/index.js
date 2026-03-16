export const brand = {
  "name": "Maxtrack",
  "website": "https://maxtrack.com.br",
  "description": "To set the tracker send the following commands by SMS messages, the sample setup the device password is 0000 , this password is the default Type the device ID 0000,{{trackerID}},2,0,{{apn}},{{apnu}},{{apnp}},54.85.159.138,8888,,.",
  "image": require("./logo.jpg").default,
  "trackers": [
    {
      "name": "MTC-700",
      "slug": "mtc_700",
      "image": require("./mtc_700/logo.jpg").default
    },
    {
      "name": "MXT-140",
      "slug": "mxt_140",
      "image": require("./mxt_140/logo.jpg").default
    },
    {
      "name": "MXT-141",
      "slug": "mxt_141",
      "image": require("./mxt_141/logo.jpg").default
    },
    {
      "name": "MXT-160",
      "slug": "mxt_160",
      "image": require("./mxt_160/logo.jpg").default
    }
  ]
};
