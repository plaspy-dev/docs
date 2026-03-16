export const brand = {
  "name": "YulongDa",
  "website": "http://www.yulongdatechnology.com",
  "description": "Para configurar el rastreador env\u00EDe los siguientes comandos a trav\u00E9s de mensajes de texto, En el ejemplo se asume que la contrase\u00F1a del dispositivo es 000000 que es la inicial del dispositivo Configurar el APN del operador *APN#000000#{{apn}}# {{apnu}}#{{apnp}}# Configurar el servidor GPRS *IP#000000#54.85.159.138#8888# Configurar el intervalo de actualizacion en movimiento 60 segundos XT60 Configurar el intervalo de actualizacion detenido 60 segundos NXT60",
  "image": require("./logo.jpg").default,
  "trackers": [
    {
      "name": "H02",
      "slug": "h02",
      "image": require("./h02/logo.jpg").default
    },
    {
      "name": "H08",
      "slug": "h08",
      "image": require("./h08/logo.jpg").default
    },
    {
      "name": "H09",
      "slug": "h09",
      "image": require("./h09/logo.jpg").default
    },
    {
      "name": "TK102",
      "slug": "tk102",
      "image": require("./tk102/logo.jpg").default
    },
    {
      "name": "TK103",
      "slug": "tk103",
      "image": require("./tk103/logo.jpg").default
    }
  ]
};
