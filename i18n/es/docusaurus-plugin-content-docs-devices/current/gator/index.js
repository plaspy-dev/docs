export const brand = {
  "name": "Gator",
  "website": "http://en.gatorgroup.cn",
  "description": "Para configurar el rastreador env\u00EDe los siguientes comandos a trav\u00E9s de mensajes de texto, En el ejemplo se asume que la contrase\u00F1a del dispositivo es 123456 que es la inicial del dispositivo Ingrese el identificador del dispositivo Ingrese su n\u00FAmero de tel\u00E9fono Configurar el servidor GPRS SS,*{{apn}}*,*{{apnu}}*,*{{apnp}}*,*54.85.159.138*,*8888*,*{{DeviceID}}*,*{{phoneNumberUser}}*,*123456* Configurar el servidor GPRS S,*{{apn}}*,*54.85.159.138*,*8888*,*{{DeviceID}}*,*{{phoneNumberUser}}*,*123456*",
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
