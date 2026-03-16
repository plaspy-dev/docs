export const brand = {
  "name": "BoxTrack",
  "website": "",
  "description": "To configure the tracker, send the following commands via text messages. In the example, it is assumed that the device password is 123456 , which is the device\u0027s default password. Restore factory settings begin123456 Set the time zone to UTC-0 time zone123456 0 Set the APN of our operator apn123456 {{apn}} Set the APN username and password of the operator up123456 {{apnu}} {{apnp}} Configure the GPRS server adminip123456 54.85.159.138 8888 Set the update interval fix060s060s***n123456 Switch to GPRS mode in UDP or TCP gprs123456,1,1 or gprs123456 To check the configuration, send APNIP123456 , and to check the tracker status, send check123456 .",
  "image": require("./Logo.png").default,
  "trackers": [
    {
      "name": "Control",
      "slug": "control",
      "image": require("./control/Logo.png").default
    }
  ]
};
