export const brand = {
  "name": "Noran",
  "website": "http://www.norantracker.com/",
  "description": "Para configurar el rastreador env\u00EDe los siguientes comandos a trav\u00E9s de mensajes de texto, En el ejemplo se asume que la contrase\u00F1a del dispositivo es 000000 que es la inicial del dispositivo, El identificador del dispositivo se obtiene al enviar el comando de verificaci\u00F3n de configuraci\u00F3n donde la primera palabra es el identificador normalmente empieza con NR. Configurar el APN del operador A000000,012,{{apn}} ,{{apnu}},{{apnp}} Configurar el servidor GPRS A000000,010,54.85.159.138,8888 Cambiamos al modo GPRS A000000,011,1 Para verificar la configuraci\u00F3n A000000,004 Identificador, APN, servidor, puerto, estado del GPRS (1), conexi\u00F3n GPRS (1) y luego el nivel GSM (1-31)",
  "image": require("./logo.jpg").default,
  "trackers": [
    {
      "name": "NR006",
      "slug": "nr006",
      "image": require("./nr006/tracker.jpg").default
    },
    {
      "name": "NR008",
      "slug": "nr008",
      "image": require("./nr008/tracker.jpg").default
    },
    {
      "name": "NR016",
      "slug": "nr016",
      "image": require("./nr016/tracker.jpg").default
    },
    {
      "name": "NR024",
      "slug": "nr024",
      "image": require("./nr024/logo.jpg").default
    },
    {
      "name": "NR028",
      "slug": "nr028",
      "image": require("./nr028/tracker.jpg").default
    },
    {
      "name": "NR100",
      "slug": "nr100",
      "image": require("./nr100/tracker.jpg").default
    },
    {
      "name": "NR108",
      "slug": "nr108",
      "image": require("./nr108/tracker.jpg").default
    },
    {
      "name": "NR200",
      "slug": "nr200",
      "image": require("./nr200/tracker.jpg").default
    }
  ]
};
