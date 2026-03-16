export const brand = {
  "name": "Gnxis",
  "website": "",
  "description": "To set the tracker send the following commands by SMS messages, the sample setup the device password is 123456 , this password is the default Factory reset begin123456 Set the time zone UTC-0 time zone123456 0 Set the operator APN apn123456 {{apn}} Set the username and password of APN operator up123456 {{apnu}} {{apnp}} Set the GPRS Server adminip123456 54.85.159.138 8888 Set update interval fix060s060s***n123456 Enable SOS button transmission SOSALM,ON,1# Switch to GPRS mode to UDP or TCP gprs123456,1,1 or gprs123456 To check settings check123456",
  "image": "",
  "trackers": [
    {
      "name": "4-wire",
      "slug": "4_wire",
      "image": require("./4_wire/Logo.jpg").default
    },
    {
      "name": "8-wire",
      "slug": "8_wire",
      "image": require("./8_wire/Logo.png").default
    }
  ]
};
