export const brand = {
  "name": "Zilogic",
  "website": "https://zilogic.com/",
  "description": "Para configurar el rastreador env\u00EDe los siguientes comandos a trav\u00E9s de mensajes de texto Configurar zona horaria en UTC-0 SET TZ \u002B00:00 Configurar el APN del operador SET APN {{apn}},{{apnu}},{{apnp}} Configurar servidor GPRS SET SERVER 54.85.159.138,8888 Activar el modo GRPS SET GPRS 1 Configurar el intervalo de actualizaci\u00F3n en 60 segundos SET PERIOD 60,60 Guardar la configuraci\u00F3n SAVE Para verificar la configuraci\u00F3n GET APN GET GPRS GET SERVER STATUS",
  "image": require("./logo.jpg").default,
  "trackers": [
    {
      "name": "Fleet",
      "slug": "fleet",
      "image": require("./fleet/logo.jpg").default
    },
    {
      "name": "Fleet Pro",
      "slug": "fleet_pro",
      "image": require("./fleet_pro/logo.jpg").default
    },
    {
      "name": "RTU",
      "slug": "rtu",
      "image": require("./rtu/logo.jpg").default
    }
  ]
};
