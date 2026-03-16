export const brand = {
  "name": "Gator",
  "website": "http://en.gatorgroup.cn",
  "description": "To set the tracker send the following commands by SMS messages, the sample setup the device password is 123456 , this password is the default Type the device ID Type your phone number Set the GPRS server SS,*{{apn}}*,*{{apnu}}*,*{{apnp}}*,*54.85.159.138*,*8888*,*{{DeviceID}}*,*{{phoneNumberUser}}*,*123456* Set the GPRS server S,*{{apn}}*,*54.85.159.138*,*8888*,*{{DeviceID}}*,*{{phoneNumberUser}}*,*123456*",
  "image": require("./logo.jpg").default,
  "trackers": [
    {
      "name": "M508",
      "slug": "m508",
      "image": require("./m508/logo.jpg").default
    },
    {
      "name": "M528",
      "slug": "m528",
      "image": require("./m528/logo.jpg").default
    },
    {
      "name": "M588S",
      "slug": "m588s",
      "image": require("./m588s/logo.jpg").default
    },
    {
      "name": "M588T",
      "slug": "m588t",
      "image": require("./m588t/logo.jpg").default
    }
  ]
};
