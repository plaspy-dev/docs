export const brand = {
  "name": "UVI Group",
  "website": "http://www.uvi-group.com/",
  "description": "Para configurar Plaspy es necesario configurarlo de siguiente manera. Con los siguientes comandos a trav\u00E9s de varios mensajes de texto: En el ejemplo se asume que la contrase\u00F1a del dispositivo es 666666 que es la inicial del dispositivo Restaurar configuraci\u00F3n de fabrica FACTORY,666666# Configurar la zona horaria en UTC-0 gmt,666666,e,0# Configurar el APN del operador APN,666666,{{apn}} ,{{apnu}},{{apnp}} # Configurar el servidor GPRS server,666666,0,54.85.159.138,8888,0# Configurar intervalo de actualizaci\u00F3n cada 60 segundos timer,666666,,60# Para verificar la configuraci\u00F3n GPRSSET,666666# Para verificar el estado status,666666#",
  "image": require("./logo.jpg").default,
  "trackers": [
    {
      "name": "GT02",
      "slug": "gt02",
      "image": require("./gt02/logo.jpg").default
    },
    {
      "name": "GT06",
      "slug": "gt06",
      "image": require("./gt06/logo.jpg").default
    },
    {
      "name": "VT02N",
      "slug": "vt02n",
      "image": require("./vt02n/logo.jpg").default
    }
  ]
};
