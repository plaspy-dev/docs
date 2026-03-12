export const brand = {
  "name": "Haicom",
  "website": "http://www.haicom.com.tw/",
  "description": "Para configurar el rastreador env\u00EDe los siguientes comandos a trav\u00E9s de mensajes de texto, En el ejemplo se asume que la contrase\u00F1a del dispositivo es 0000 que es la inicial del dispositivo Configurar el APN del operador #0000,200,{{apn}},{{apnu}},{{apnp}} Configurar el servidor GPRS #0000,210,54.85.159.138,8888,8888,8888,0 Configurar el intervalo de actualizaci\u00F3n en 60 segundos #0000,250,0,60,0,0,0,0,0,0",
  "image": require("./logo.jpg").default,
  "trackers": [
    {
      "name": "HI-602",
      "slug": "hi_602",
      "image": require("./hi_602/logo.jpg").default
    },
    {
      "name": "HI-602X",
      "slug": "hi_602x",
      "image": require("./hi_602x/logo.jpg").default
    },
    {
      "name": "HI-603",
      "slug": "hi_603",
      "image": require("./hi_603/logo.jpg").default
    },
    {
      "name": "HI-603X",
      "slug": "hi_603x",
      "image": require("./hi_603x/logo.jpg").default
    },
    {
      "name": "HI-604",
      "slug": "hi_604",
      "image": require("./hi_604/logo.jpg").default
    },
    {
      "name": "HI-604X",
      "slug": "hi_604x",
      "image": require("./hi_604x/logo.jpg").default
    }
  ]
};
