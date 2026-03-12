export const brand = {
  "name": "BoxTrack",
  "website": "",
  "description": "Para configurar el rastreador env\u00EDe los siguientes comandos a trav\u00E9s de mensajes de texto, En el ejemplo se asume que la contrase\u00F1a del dispositivo es 123456 que es la inicial del dispositivo Restaurar la configuraci\u00F3n de fabrica begin123456 Configurar la zona horaria en UTC-0 time zone123456 0 Configurar el APN del nuestro operador apn123456 {{apn}} Configurar el usuario y contrase\u00F1a del APN del operador up123456 {{apnu}} {{apnp}} Configurar el servidor GPRS adminip123456 54.85.159.138 8888 Configurar el intervalo de actualizaci\u00F3n fix060s060s***n123456 Cambiar al modo GPRS en UDP o TCP gprs123456,1,1 o gprs123456 Para verificar la configuraci\u00F3n APNIP123456 , para verificar el estado del rastreador check123456 \u003C",
  "image": require("./Logo.png").default,
  "trackers": [
    {
      "name": "Control",
      "slug": "control",
      "image": require("./control/Logo.png").default
    }
  ]
};
