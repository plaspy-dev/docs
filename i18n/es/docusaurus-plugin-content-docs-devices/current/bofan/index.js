export const brand = {
  "name": "Bofan",
  "website": "https://www.bofancloud.com/",
  "description": "Para configurar el rastreador env\u00EDe los siguientes comandos a trav\u00E9s de mensajes de texto: En el ejemplo se asume que la contrase\u00F1a del dispositivo es 000000 que es la inicial del dispositivo Ingrese el n\u00FAmero de IMEI Restaurar la configurac\u00F3n de fabrica 000000DFT Configurar el identificador de 14 d\u00EDgitos que se va a usar con Plaspy normalmente los \u00FAltimos 14 digitos del IMEI. 000000GID{{(\u0027XXXXXXXXXXXXXXX\u0027 \u002B imei).slice(-14)}} Configurar el APN del nuestro operador 000000APN{{apn}} ,{{apnu}},{{apnp}} Configurar el servidor GPRS 000000SVR54.85.159.138,8888 Configurar el intervalo de actualizaci\u00F3n en 1 minuto 000000GTI60",
  "image": require("./logo.gif").default,
  "trackers": [
    {
      "name": "B4",
      "slug": "b4",
      "image": require("./b4/logo..png").default
    },
    {
      "name": "B5",
      "slug": "b5",
      "image": require("./b5/tracker.png").default
    },
    {
      "name": "PT-100",
      "slug": "pt_100",
      "image": require("./pt_100/logo.jpg").default
    },
    {
      "name": "PT-201",
      "slug": "pt_201",
      "image": require("./pt_201/logo.jpg").default
    },
    {
      "name": "PT-30",
      "slug": "pt_30",
      "image": require("./pt_30/logo.jpg").default
    },
    {
      "name": "PT-300X",
      "slug": "pt_300x",
      "image": require("./pt_300x/logo.jpg").default
    },
    {
      "name": "PT-502",
      "slug": "pt_502",
      "image": require("./pt_502/logo.jpg").default
    },
    {
      "name": "PT-60",
      "slug": "pt_60",
      "image": require("./pt_60/logo.jpg").default
    },
    {
      "name": "PT-600",
      "slug": "pt_600",
      "image": require("./pt_600/logo.jpg").default
    },
    {
      "name": "PT-80",
      "slug": "pt_80",
      "image": require("./pt_80/logo.jpg").default
    },
    {
      "name": "PT502",
      "slug": "pt502",
      "image": require("./pt502/tracker.jpg").default
    },
    {
      "name": "PT621",
      "slug": "pt621",
      "image": require("./pt621/tracker.jpg").default
    }
  ]
};
