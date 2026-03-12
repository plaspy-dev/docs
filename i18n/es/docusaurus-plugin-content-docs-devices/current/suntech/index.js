export const brand = {
  "name": "Suntech",
  "website": "http://www.suntechint.com/",
  "description": "Para configurar el rastreador env\u00EDe los siguientes comandos a trav\u00E9s de mensajes de texto, el identificador son los ultimos 6 digitos del IMEI excluyendo el \u00FAltimo digito por ejemplo si el IMEI es 12345678 901234 5 el identificador es 901234 Ingrese el n\u00FAmero de IMEI 13\u0022\u003E Su Identificador en Plaspy es {{imei.substring(8,14)}} Configurar el APN del operador y el servidor GPRS SA200NTW;{{(\u0027XXXXXX\u0027 \u002B imei.substring(8,14)).slice(-6)}};02; 1 0 ;{{apn}};{{apnu}};{{apnp}};54.85.159.138;8888;;;; Configurar el intervalo de actualizaci\u00F3n en 60 segundos SA200RPT;{{(\u0027XXXXXX\u0027 \u002B imei.substring(8,14)).slice(-6)}};02;60;60;60;3;0;0;0;0;0 Para revisar la configuraci\u00F3n SA200CMD;{{(\u0027XXXXXX\u0027 \u002B imei.substring(8,14)).slice(-6)}};02;PresetA",
  "image": require("./logo.jpg").default,
  "trackers": [
    {
      "name": "SNT 100",
      "slug": "snt_100",
      "image": require("./snt_100/logo.jpg").default
    },
    {
      "name": "ST 180 Wi-FI",
      "slug": "st_180_wi_fi",
      "image": require("./st_180_wi_fi/logo.jpg").default
    },
    {
      "name": "ST 210",
      "slug": "st_210",
      "image": require("./st_210/logo.jpg").default
    },
    {
      "name": "ST 215",
      "slug": "st_215",
      "image": require("./st_215/logo.jpg").default
    },
    {
      "name": "ST 215C",
      "slug": "st_215c",
      "image": require("./st_215c/logo.jpg").default
    },
    {
      "name": "ST 230",
      "slug": "st_230",
      "image": require("./st_230/logo.jpg").default
    },
    {
      "name": "ST 240",
      "slug": "st_240",
      "image": require("./st_240/logo.jpg").default
    },
    {
      "name": "ST 300",
      "slug": "st_300",
      "image": require("./st_300/logo.jpg").default
    },
    {
      "name": "ST 300A",
      "slug": "st_300a",
      "image": require("./st_300a/logo.jpg").default
    },
    {
      "name": "ST 300H",
      "slug": "st_300h",
      "image": require("./st_300h/logo.jpg").default
    },
    {
      "name": "ST 300K",
      "slug": "st_300k",
      "image": require("./st_300k/logo.jpg").default
    },
    {
      "name": "ST 300R",
      "slug": "st_300r",
      "image": require("./st_300r/logo.jpg").default
    },
    {
      "name": "ST 300V",
      "slug": "st_300v",
      "image": require("./st_300v/logo.jpg").default
    },
    {
      "name": "ST 330",
      "slug": "st_330",
      "image": require("./st_330/logo.jpg").default
    },
    {
      "name": "ST 340",
      "slug": "st_340",
      "image": require("./st_340/logo.jpg").default
    },
    {
      "name": "ST 340LC",
      "slug": "st_340lc",
      "image": require("./st_340lc/logo.jpg").default
    },
    {
      "name": "ST 600R",
      "slug": "st_600r",
      "image": require("./st_600r/logo.jpg").default
    },
    {
      "name": "ST 910",
      "slug": "st_910",
      "image": require("./st_910/logo.jpg").default
    },
    {
      "name": "ST 940",
      "slug": "st_940",
      "image": require("./st_940/logo.jpg").default
    },
    {
      "name": "ST20U",
      "slug": "st20u",
      "image": require("./st20u/tracker.jpg").default
    },
    {
      "name": "ST25T",
      "slug": "st25t",
      "image": require("./st25t/tracker.jpg").default
    },
    {
      "name": "ST410MG",
      "slug": "st410mg",
      "image": require("./st410mg/tracker.jpg").default
    },
    {
      "name": "ST419NG",
      "slug": "st419ng",
      "image": require("./st419ng/tracker.jpg").default
    },
    {
      "name": "ST4215/U",
      "slug": "st4215_u",
      "image": require("./st4215_u/tracker.jpg").default
    },
    {
      "name": "ST4290",
      "slug": "st4290",
      "image": require("./st4290/tracker.jpg").default
    },
    {
      "name": "ST4305",
      "slug": "st4305",
      "image": require("./st4305/tracker.jpg").default
    },
    {
      "name": "ST4315",
      "slug": "st4315",
      "image": require("./st4315/tracker.jpg").default
    },
    {
      "name": "ST4335",
      "slug": "st4335",
      "image": require("./st4335/tracker.jpg").default
    },
    {
      "name": "ST4345",
      "slug": "st4345",
      "image": require("./st4345/tracker.jpg").default
    },
    {
      "name": "ST4345LB",
      "slug": "st4345lb",
      "image": require("./st4345lb/tracker.jpg").default
    },
    {
      "name": "ST4410G",
      "slug": "st4410g",
      "image": require("./st4410g/tracker.jpg").default
    },
    {
      "name": "ST4505",
      "slug": "st4505",
      "image": require("./st4505/tracker.jpg").default
    },
    {
      "name": "ST4915",
      "slug": "st4915",
      "image": require("./st4915/tracker.jpg").default
    },
    {
      "name": "ST4915LCBF",
      "slug": "st4915lcbf",
      "image": require("./st4915lcbf/tracker.jpg").default
    },
    {
      "name": "ST4932",
      "slug": "st4932",
      "image": require("./st4932/tracker.jpg").default
    },
    {
      "name": "ST4945",
      "slug": "st4945",
      "image": require("./st4945/logo..png").default
    },
    {
      "name": "ST4945(S)",
      "slug": "st4945s",
      "image": require("./st4945s/tracker.jpg").default
    },
    {
      "name": "ST4945B",
      "slug": "st4945b",
      "image": require("./st4945b/tracker.jpg").default
    },
    {
      "name": "ST4955",
      "slug": "st4955",
      "image": require("./st4955/tracker.jpg").default
    },
    {
      "name": "ST4955LCBW",
      "slug": "st4955lcbw",
      "image": require("./st4955lcbw/tracker.jpg").default
    },
    {
      "name": "ST6560",
      "slug": "st6560",
      "image": require("./st6560/tracker.jpg").default
    },
    {
      "name": "ST8300",
      "slug": "st8300",
      "image": require("./st8300/tracker.jpg").default
    },
    {
      "name": "ST8310/U",
      "slug": "st8310_u",
      "image": require("./st8310_u/tracker.jpg").default
    },
    {
      "name": "ST8310U",
      "slug": "st8310u",
      "image": require("./st8310u/logo..png").default
    },
    {
      "name": "ST8310UM",
      "slug": "st8310um",
      "image": require("./st8310um/tracker.jpg").default
    }
  ]
};
