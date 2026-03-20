---
slug: /queclink/gv200/configuration
id: gv200-configuration
sidebar_label: Configuration
title: QuecLink - GV200 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar trackers QuecLink GV200 con Plaspy usando ajustes de servidor compartido
keywords:
  - Configuración QuecLink GV200
  - Instalación QuecLink GV200
  - Configuración servidor GV200
  - Configuración Plaspy GV200
  - Configuración rastreador QuecLink
  - Configuración rastreador GPS
  - Configuración seguimiento vehicular
  - Configuración dispositivo Plaspy
  - Configuración GPRS GV200
  - Configuración plataforma GPS QuecLink
---

# QuecLink - GV200: Configuración

Esta página ofrece orientación pública para configurar el rastreador QuecLink GV200 con la plataforma Plaspy. Resume los pasos prácticos y los valores de servidor que deberá aplicar en el dispositivo para que el GV200 reporte ubicación y eventos a Plaspy. Cuando existen comandos públicos del fabricante se incluyen como ejemplos que muchos instaladores usan para preparar el equipo para un servidor de backend.

Plaspy utiliza configuraciones de servidor compartidas entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando se conecta. Los pasos concretos en el equipo pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor, por lo que esta página debe usarse como guía práctica y confirmar detalles específicos del dispositivo con la documentación oficial de QuecLink.

## Resumen de la configuración

El proceso prepara el GV200 para enviar su telemetría a Plaspy y asegura que el dispositivo sea accesible y visible en la plataforma. Para unidades GV200 que aceptan comandos SMS, los ejemplos públicos a continuación muestran un orden de configuración común que incluye, opcionalmente, restauración de fábrica, zona horaria, APN, endpoint de servidor, intervalo de reporte y mapeo de entradas.

- Configure el APN y los ajustes GPRS del dispositivo para que pueda alcanzar Plaspy a través de la red celular.
- Apunte el rastreador al dominio o IP del servidor de Plaspy para que los reportes de posición lleguen a la plataforma.
- Elija transporte UDP o TCP y configure el puerto compartido de Plaspy usado por todos los dispositivos.
- Valide los envíos confirmando que el rastreador inicia sesión y envía actualizaciones periódicas de posición.
- Opcionalmente habilite entradas o eventos como SOS o entradas de alarma para que esos eventos aparezcan en Plaspy.

## Ajustes de servidor de Plaspy

- Server domain d.plaspy.com  
- Server IP 54.85.159.138  
- Port 8888 (Plaspy uses the same port for all supported devices)  
- Transport support for UDP or TCP on port 8888  
- Plaspy automatically detects the tracker protocol when the device connects

## Requisitos típicos antes de la configuración

- Acceso físico al GV200 para alimentación y para confirmar que el equipo está listo.  
- Una tarjeta SIM activa con plan de datos y capacidad de SMS insertada en el dispositivo.  
- Crédito de SMS o un canal de configuración si planea usar comandos SMS para la puesta en marcha.  
- Acceso al método de configuración de QuecLink aceptado por su dispositivo, como comandos SMS o herramientas oficiales para PC/móvil.  
- La contraseña del dispositivo si el rastreador requiere autenticación para la configuración remota; la contraseña por defecto utilizada en los ejemplos públicos a continuación es queclink.  
- Confirmación de los ajustes de APN correctos para el operador celular local.

## Cómo se conecta este rastreador a Plaspy

El GV200 se configura para enviar reportes de ubicación y eventos al endpoint y puerto compartidos de Plaspy, de modo que Plaspy pueda mostrar la ubicación, el historial y las alertas del dispositivo. Plaspy acepta la conexión entrante e interpreta automáticamente el protocolo del rastreador para integrar los datos en la plataforma.

- El rastreador envía actualizaciones periódicas de posición a d.plaspy.com o al IP de respaldo 54.85.159.138 en el puerto 8888.  
- El transporte puede ser UDP o TCP según la configuración del rastreador y la preferencia del instalador.  
- Eventos como SOS, entradas y reportes programados se reenvían a Plaspy para alertas y registro.  
- Plaspy detecta automáticamente el protocolo del rastreador para que la plataforma pueda decodificar los mensajes sin mapeo por dispositivo.  
- Una vez validado el reporte, el dispositivo queda visible en Plaspy para monitoreo y reproducción histórica.

## Flujo de trabajo de configuración habitual

1. Acceda al método oficial de configuración QuecLink o al software para el GV200, como comandos SMS o la herramienta recomendada por el proveedor.  
2. Configure el APN del dispositivo usando los valores de su operador para que se establezca la conexión GPRS.  
3. Ingrese el endpoint del servidor de Plaspy usando d.plaspy.com o la IP 54.85.159.138.  
4. Establezca el puerto del servidor en 8888 y seleccione UDP o TCP si su dispositivo requiere elegir el transporte.  
5. Aplique o guarde la configuración en el dispositivo y, si es necesario, reinícielo para que los ajustes entren en vigor.  
6. Valide que el GV200 reporte a Plaspy y que posiciones y eventos aparezcan en la plataforma.  
7. Ajuste intervalos de reporte, entradas y configuraciones de alarma según sea necesario y vuelva a validar.

## Comandos de configuración de ejemplo

El GV200 puede configurarse mediante comandos SMS. Los ejemplos a continuación son comandos públicos de muestra. La contraseña del dispositivo mostrada es la predeterminada queclink. Reemplace los marcadores de posición y valores para que coincidan con el APN de su SIM y sus preferencias operativas. Envíe cada línea como un SMS independiente al equipo, a menos que su herramienta de aprovisionamiento soporte comandos por lotes.

- Optional initial step Restore factory settings
```text
AT+GTRTO=queclink,4,,,,,,FFFF$
```

- Set the time zone to UTC 0
```text
AT+GTTMA=queclink,+,0,0,0,,,,,,FFFF$
```

- Set the operator APN
```text
AT+GTBSI=queclink,[apn],[apnu],[apnp],,,,,FFFF$
```
Explanation: [apn] is the APN name for your mobile operator, [apnu] is the APN username if required, and [apnp] is the APN password if required. Keep placeholders and fill with operator values.

- Set the GPRS server to Plaspy by domain and IP on port 8888
```text
AT+GTSRI=queclink,4,,1,d.plaspy.com,8888,54.85.159.138,8888,,0,0,0,,,,FFFF$
```
Note: This command includes both the Plaspy domain d.plaspy.com and the server IP 54.85.159.138 and sets port 8888. Plaspy automatically detects the tracker protocol. The device may accept either the domain or IP; using both provides redundancy in many firmware versions.

- Set the position update interval to 60 seconds
```text
AT+GTFRI=queclink,1,1,0,0,,,60,60,60,60,7F,40,0,,,FFFF$
```

- Enable SOS button notification on input 2
```text
AT+GTSOS=queclink,2,2,,0,0,0,0,0,0,,,FFFF$
```

Envíe estos comandos siguiendo su flujo de aprovisionamiento. El orden mostrado se usa comúnmente para asegurar que la red, el servidor y los ajustes de intervalo estén establecidos antes de habilitar el reporte de eventos.

## Notas de configuración

- Los comandos SMS públicos anteriores usan la contraseña por defecto del dispositivo queclink. Si la contraseña se ha cambiado en una unidad, utilice la contraseña actual al enviar la configuración por SMS.  
- Los marcadores de APN [apn], [apnu] y [apnp] deben reemplazarse con los valores específicos del operador para la SIM instalada en el dispositivo.  
- Las versiones de firmware y las revisiones de hardware pueden cambiar la sintaxis exacta de los comandos o los parámetros soportados. Verifique la compatibilidad de los comandos con el firmware de la unidad.  
- Elija UDP o TCP según las necesidades de su despliegue y las condiciones de la red local. Ambos transportes son compatibles con Plaspy en el puerto 8888.  
- El aprovisionamiento por SMS es un método habitual para la configuración en campo, pero las herramientas oficiales de QuecLink o el software para PC pueden ofrecer un flujo más controlado para aprovisionamiento masivo.

## Por qué usar Plaspy con esta configuración

Usar el QuecLink GV200 con Plaspy brinda a las organizaciones visibilidad centralizada de las ubicaciones de los vehículos y de los datos de eventos. Configurar el GV200 para que reporte a Plaspy con los ajustes de servidor compartidos habilita el seguimiento en casi tiempo real, alertas de eventos y reproducción histórica en una sola plataforma, ayudando a los equipos operativos a responder incidentes y monitorear el comportamiento de la flota.

To learn more about Plaspy and how it supports device integrations visit https://www.plaspy.com. For the latest device specific configuration commands, firmware notes, and technical documentation for the QuecLink GV200 consult the manufacturer site at https://www.queclink.com/ to confirm current details and procedures.
