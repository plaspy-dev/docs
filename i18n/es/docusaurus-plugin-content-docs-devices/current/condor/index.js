export const brand = {
  "name": "Condor",
  "website": "https://condorskyseeker.com/",
  "description": "Para configurar el rastreador env\u00EDe los siguientes comandos a trav\u00E9s de mensajes de texto, En el ejemplo se asume que la contrase\u00F1a del dispositivo es 0000 que es la inicial del dispositivo Ingrese el n\u00FAmero de IMEI Configurar el APN del operador APN,0000,{{apn}} ,{{apnu}},{{apnp}} Configurar el identificador de 5 d\u00EDgitos que se va a usar, use los \u00FAltimos 5 digitos del IMEI ALIAS,0000,{{(\u0027XXXXX\u0027 \u002B imei.substring(10,15)).slice(-5)}}# Configurar la zona horaria en UTC-0 GMT,0000,-0# Configurar el servidor GPRS SERVIDOR,0000,54.85.159.138,8888,U,A# Configurar el intervalo de actualizaci\u00F3n cada 1 minuto INTERVALO,0000,M,6# Activar el modo GPRS GPRS,0000,A# Para verificar la configuraci\u00F3n CONEXION,0000#",
  "image": require("./logo.jpg").default,
  "trackers": [
    {
      "name": "CB-714",
      "slug": "cb_714",
      "image": require("./cb_714/tracker.png").default
    },
    {
      "name": "CM-311",
      "slug": "cm_311",
      "image": require("./cm_311/tracker.png").default
    },
    {
      "name": "CS-146",
      "slug": "cs_146",
      "image": require("./cs_146/tracker.png").default
    },
    {
      "name": "GE-810",
      "slug": "ge_810",
      "image": require("./ge_810/tracker.png").default
    },
    {
      "name": "TA-913",
      "slug": "ta_913",
      "image": require("./ta_913/tracker.png").default
    },
    {
      "name": "TG-512",
      "slug": "tg_512",
      "image": require("./tg_512/logo..png").default
    },
    {
      "name": "TG-512",
      "slug": "tg_512",
      "image": require("./tg_512/tracker.png").default
    },
    {
      "name": "TG-610",
      "slug": "tg_610",
      "image": require("./tg_610/tracker.png").default
    },
    {
      "name": "TH-923",
      "slug": "th_923",
      "image": require("./th_923/tracker.png").default
    },
    {
      "name": "TP-810",
      "slug": "tp_810",
      "image": require("./tp_810/tracker.png").default
    },
    {
      "name": "TS-728",
      "slug": "ts_728",
      "image": require("./ts_728/tracker.png").default
    }
  ]
};
