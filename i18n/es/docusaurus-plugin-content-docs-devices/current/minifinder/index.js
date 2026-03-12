export const brand = {
  "name": "MiniFinder",
  "website": "https://minifinder.se/",
  "description": "Para configurar el rastreador env\u00EDe los siguientes comandos a trav\u00E9s de mensajes de texto Configurar la zona horaria en UTC-0 tz\u002B00 Configurar el APN del operador S1,{{apn}} ,{{apnu}},{{apnp}} Configurar el servidor GPRS IP1,54.85.159.138,8888",
  "image": require("./logo.jpg").default,
  "trackers": [
    {
      "name": "ATTO",
      "slug": "atto",
      "image": require("./atto/logo.jpg").default
    },
    {
      "name": "Atto Pro",
      "slug": "atto_pro",
      "image": require("./atto_pro/tracker.jpg").default
    },
    {
      "name": "Nano",
      "slug": "nano",
      "image": require("./nano/tracker.jpg").default
    },
    {
      "name": "Pico",
      "slug": "pico",
      "image": require("./pico/tracker.jpg").default
    },
    {
      "name": "Rex",
      "slug": "rex",
      "image": require("./rex/tracker.png").default
    },
    {
      "name": "Watch",
      "slug": "watch",
      "image": require("./watch/tracker.jpg").default
    },
    {
      "name": "Xtreme",
      "slug": "xtreme",
      "image": require("./xtreme/tracker.png").default
    },
    {
      "name": "Zepto",
      "slug": "zepto",
      "image": require("./zepto/tracker.png").default
    }
  ]
};
