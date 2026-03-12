export const brand = {
  "name": "Tramigo",
  "website": "http://www.tramigo.net/",
  "description": "To set the tracker send the following commands by SMS messages Set the operator APN GPRS,APN,{{apn}},{{apnu}},{{apnp}} Turn on FIND reporting every 1 minute R,10,F,1,1,1,35 Set ACK Ping Set,GPRSPingResponse,0 Set ACK Set,GPRSMsgResponse,0 Set the GPRS server GPRS,Connect,54.85.159.138,8888,tcp To check settings Status",
  "image": require("./logo.jpg").default,
  "trackers": [
    {
      "name": "T22",
      "slug": "t22",
      "image": require("./t22/logo.jpg").default
    },
    {
      "name": "T23",
      "slug": "t23",
      "image": require("./t23/logo.jpg").default
    }
  ]
};
