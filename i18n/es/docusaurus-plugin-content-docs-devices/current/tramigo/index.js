export const brand = {
  "name": "Tramigo",
  "website": "http://www.tramigo.net/",
  "description": "Para configurar el rastreador env\u00EDe los siguientes comandos a trav\u00E9s de mensajes de texto Configurar el APN del operador GPRS,APN,{{apn}},{{apnu}},{{apnp}} Configurar intervalo de actualizaci\u00F3n cada 1 minuto R,10,F,1,1,1,35 Establcer ACK Set,GPRSPingResponse,0 Establcer ACK Set,GPRSMsgResponse,0 Configurar el servidor GPRS GPRS,Connect,54.85.159.138,8888,tcp Para verificar la configuraci\u00F3n Status",
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
