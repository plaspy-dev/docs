export const brand = {
  "name": "TopShine",
  "website": "https://www.gztopshine.com/",
  "description": "Para configurar el rastreador env\u00EDe los siguientes comandos a trav\u00E9s de mensajes de texto, En el ejemplo se asume que la contrase\u00F1a del dispositivo es 000000 que es la inicial del dispositivo Ingrese el n\u00FAmero de IMEI Restaurar configuraci\u00F3n de fabrica W000000,990,099### Configurar el Id del dispositivo, user los primeros 14 numeros del IMEI, Plaspy usa los 15 digitos del IMEI como identificador W000000,010,{{(\u0027XXXXXXXXXXXXXX\u0027 \u002B imei.substring(0,14)).slice(-14)}} Configurar el APN del opeardor W000000,011,{{apn}} ,{{apnu}},{{apnp}} Configurar el servidor GPRS W000000,012,54.85.159.138,8888 Cambiar el modo a GPRS y UDP W000000,013,2 Configurar el intervalo de actualizaci\u00F3n en 60 segundos W000000,014,6 Para obtener el IMEI del rastreador W000000,601",
  "image": require("./logo.jpg").default,
  "trackers": [
    {
      "name": "2FD-100",
      "slug": "2fd_100",
      "image": require("./2fd_100/tracker.jpg").default
    },
    {
      "name": "CA02",
      "slug": "ca02",
      "image": require("./ca02/tracker.jpg").default
    },
    {
      "name": "GT103",
      "slug": "gt103",
      "image": require("./gt103/tracker.jpg").default
    },
    {
      "name": "MT01",
      "slug": "mt01",
      "image": require("./mt01/tracker.jpg").default
    },
    {
      "name": "MT01-4G",
      "slug": "mt01_4g",
      "image": require("./mt01_4g/tracker.jpg").default
    },
    {
      "name": "MT01W-4G",
      "slug": "mt01w_4g",
      "image": require("./mt01w_4g/tracker.jpg").default
    },
    {
      "name": "MT02",
      "slug": "mt02",
      "image": require("./mt02/tracker.jpg").default
    },
    {
      "name": "MT02-4G",
      "slug": "mt02_4g",
      "image": require("./mt02_4g/tracker.jpg").default
    },
    {
      "name": "MT06",
      "slug": "mt06",
      "image": require("./mt06/tracker.jpg").default
    },
    {
      "name": "MT08",
      "slug": "mt08",
      "image": require("./mt08/tracker.jpg").default
    },
    {
      "name": "MT08B",
      "slug": "mt08b",
      "image": require("./mt08b/tracker.jpg").default
    },
    {
      "name": "MT100",
      "slug": "mt100",
      "image": require("./mt100/tracker.jpg").default
    },
    {
      "name": "MT101",
      "slug": "mt101",
      "image": require("./mt101/logo..png").default
    },
    {
      "name": "MT210",
      "slug": "mt210",
      "image": require("./mt210/tracker.jpg").default
    },
    {
      "name": "OGT01",
      "slug": "ogt01",
      "image": require("./ogt01/tracker.jpg").default
    },
    {
      "name": "OGT02",
      "slug": "ogt02",
      "image": require("./ogt02/tracker.jpg").default
    },
    {
      "name": "OTK01",
      "slug": "otk01",
      "image": require("./otk01/tracker.jpg").default
    },
    {
      "name": "OTK02-4G",
      "slug": "otk02_4g",
      "image": require("./otk02_4g/tracker.jpg").default
    },
    {
      "name": "PT20",
      "slug": "pt20",
      "image": require("./pt20/tracker.jpg").default
    },
    {
      "name": "PT30",
      "slug": "pt30",
      "image": require("./pt30/logo.jpg").default
    },
    {
      "name": "PT50",
      "slug": "pt50",
      "image": require("./pt50/tracker.jpg").default
    },
    {
      "name": "TK103R",
      "slug": "tk103r",
      "image": require("./tk103r/logo.jpg").default
    },
    {
      "name": "TLV01",
      "slug": "tlv01",
      "image": require("./tlv01/tracker.jpg").default
    },
    {
      "name": "Ublox 7",
      "slug": "ublox_7",
      "image": require("./ublox_7/tracker.jpg").default
    },
    {
      "name": "VT1000",
      "slug": "vt1000",
      "image": require("./vt1000/tracker.jpg").default
    },
    {
      "name": "VT1000F",
      "slug": "vt1000f",
      "image": require("./vt1000f/tracker.jpg").default
    },
    {
      "name": "VT111",
      "slug": "vt111",
      "image": require("./vt111/logo.jpg").default
    },
    {
      "name": "VT200",
      "slug": "vt200",
      "image": require("./vt200/tracker.jpg").default
    },
    {
      "name": "VT200B",
      "slug": "vt200b",
      "image": require("./vt200b/tracker.jpg").default
    },
    {
      "name": "VT310N",
      "slug": "vt310n",
      "image": require("./vt310n/tracker.jpg").default
    },
    {
      "name": "VT900",
      "slug": "vt900",
      "image": require("./vt900/logo.jpg").default
    }
  ]
};
