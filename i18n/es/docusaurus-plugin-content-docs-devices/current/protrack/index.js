export const brand = {
  "name": "Protrack",
  "website": "http://www.protrackgps.in/",
  "description": "Para configurar el rastreador env\u00EDe los siguientes comandos a trav\u00E9s de mensajes de texto Configurar el APN del nuestro operador APN,{{apn}} ,{{apnu}},{{apnp}} # Configurar el servidor GPRS SERVER,1,d.plaspy.com,8888,0# Configurar el intervalo de actualizaci\u00F3n TIMER,60,60# Cambiar al modo GPRS en UDP o TCP GPRSON,1# Para verificar la configuraci\u00F3n PARAM# Para verificar el estado del rastreador STATUS#",
  "image": require("./logo..png").default,
  "trackers": [
    {
      "name": "ET300",
      "slug": "et300",
      "image": require("./et300/tracker.png").default
    },
    {
      "name": "GT06N",
      "slug": "gt06n",
      "image": require("./gt06n/tracker.jpg").default
    },
    {
      "name": "VT03E\u002B",
      "slug": "vt03e",
      "image": require("./vt03e/tracker.png").default
    },
    {
      "name": "VT05C",
      "slug": "vt05c",
      "image": require("./vt05c/tracker.png").default
    },
    {
      "name": "VT05S",
      "slug": "vt05s",
      "image": require("./vt05s/logo..jpg").default
    },
    {
      "name": "VT08",
      "slug": "vt08",
      "image": require("./vt08/Logo.png").default
    },
    {
      "name": "VT08S",
      "slug": "vt08s",
      "image": require("./vt08s/tracker.jpg").default
    }
  ]
};
