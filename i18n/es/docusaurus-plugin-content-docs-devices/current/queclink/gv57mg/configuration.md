---
slug: /queclink/gv57mg/configuration
id: gv57mg-configuration
sidebar_label: Configuration
title: QuecLink - GV57MG Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el QuecLink GV57MG con Plaspy mediante ajustes de servidor compartido y comandos SMS de ejemplo
keywords:
  - QuecLink GV57MG
  - Configuración GV57MG
  - Configuración del rastreador QuecLink
  - Configuración de servidor GV57MG
  - Configuración de rastreador Plaspy
  - Configuración de servidor Plaspy
  - Guía configuración de rastreador GPS
  - Configuración de seguimiento vehicular
  - Configuración SMS QuecLink
  - Configuración GV57MG Plaspy
---

# QuecLink - Configuración del GV57MG

Esta página documenta el contexto de configuración pública para usar el rastreador QuecLink GV57MG con Plaspy. Se centra en los ajustes de servidor compartido de Plaspy que debe aplicar en el dispositivo y reproduce comandos SMS de ejemplo que se usan comúnmente para apuntar el rastreador a Plaspy. Use esta guía para preparar la integración y entender cómo el dispositivo reporta típicamente a la plataforma.

Plaspy usa un único endpoint y puerto de servidor compartido entre los modelos compatibles y detecta automáticamente el protocolo del dispositivo. Los pasos por parte del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Los comandos mostrados son ejemplos públicos para configuración vía SMS y ilustran las acciones prácticas necesarias para registrar el GV57MG en Plaspy; siempre verifique el procedimiento específico más reciente con la documentación del fabricante.

## Resumen de la configuración

El objetivo de esta configuración es preparar el GV57MG para comunicarse de forma fiable con Plaspy, de modo que las actualizaciones de ubicación, alarmas y telemetría sean visibles en la plataforma. Los comandos públicos que aparecen a continuación muestran un flujo típico de configuración por SMS para establecer APN, parámetros de servidor, intervalos de reporte y entradas opcionales.

- Apuntar el dispositivo al endpoint de Plaspy para que los mensajes de subida lleguen a la plataforma y sean procesados.
- Configurar el APN móvil y las credenciales para que el rastreador pueda abrir sesiones de datos GPRS/LTE.
- Definir un intervalo de reporte apropiado para que el dispositivo envíe posiciones y estados periódicamente a Plaspy.
- Habilitar o configurar entradas de alarma y el reporte SOS para que las notificaciones de eventos lleguen a la plataforma.
- Validar la conectividad después de aplicar los ajustes para que el dispositivo aparezca en Plaspy y comience a transmitir telemetría.

## Ajustes del servidor Plaspy

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support UDP or TCP
- Plaspy automatically detects the tracker protocol and all devices use the same port

## Requisitos previos típicos

- Un GV57MG con alimentación instalado o accesible para configuración, con batería de respaldo cargada o alimentación suministrada.
- Una tarjeta SIM de datos válida y aprovisionada con el APN correcto para su operador.
- Acceso a SMS o a la herramienta de configuración del fabricante que use QuecLink para enviar comandos (este modelo admite comandos SMS en los ejemplos públicos).
- Conocimiento de la contraseña del dispositivo que se emplea en los comandos; los ejemplos usan la contraseña por defecto queclink.
- Capacidad para recibir confirmaciones del dispositivo o comprobar la conectividad en Plaspy tras la configuración.

## Cómo se conecta este rastreador a Plaspy

El GV57MG se configura para reportar posiciones GNSS, actualizaciones de estado y eventos de alarma al endpoint y puerto compartido de Plaspy, de modo que los administradores de flotas puedan ver ubicaciones en tiempo real e históricos en la plataforma. Plaspy ingiere esos mensajes y aplica detección automática de protocolo para parsear el formato del rastreador.

- Los mensajes de ubicación y telemetría se envían a d.plaspy.com en el puerto 8888 para que Plaspy los procese y muestre.
- Los mensajes almacenados en buffer se suben cuando se restablece la conectividad, evitando pérdida de datos por cortes temporales.
- Los eventos de alarma y SOS se reenvían a Plaspy para notificaciones inmediatas y flujos de respuesta.
- Estados del dispositivo, como encendido de ignición o cambios en entradas, se reportan al mismo endpoint de Plaspy y son visibles en el monitoreo de la plataforma.

## Flujo típico de configuración

1. Acceda al método oficial de configuración QuecLink que use (comandos SMS, herramienta del fabricante o software de aprovisionamiento del proveedor).
2. Si utiliza un nombre de host para el servidor, ingrese d.plaspy.com en el campo GPRS server o remote server; alternativamente, ingrese 54.85.159.138 como IP del servidor.
3. Establezca el puerto del servidor en 8888 (Plaspy utiliza el mismo puerto para todos los dispositivos compatibles).
4. Elija UDP o TCP como transporte si el dispositivo requiere selección de transporte.
5. Configure el APN y las credenciales del operador según sea necesario para la conectividad de datos móviles.
6. Aplique o guarde la configuración y reinicie el dispositivo si la herramienta lo solicita.
7. Valide que el dispositivo reporte a Plaspy revisando la actividad del equipo en la plataforma o confirmando mensajes SMS de respuesta/estado desde el rastreador.

## Comandos de configuración de ejemplo

El GV57MG puede configurarse mediante comandos SMS. Los siguientes comandos de ejemplo públicos se muestran en el orden típico. Las muestras usan la contraseña del dispositivo queclink como valor por defecto. Reemplace los marcadores [apn], [apnu] y [apnp] con el APN, nombre de usuario y contraseña de su operador según corresponda.

1. Paso inicial opcional para restaurar configuración de fábrica (úselo solo si necesita un inicio limpio)
```
AT+GTRTO=queclink,4,,,,,,FFFF$
```

2. Establecer la zona horaria a UTC 0
```
AT+GTTMA=queclink,+,0,0,0,,,,,,FFFF$
```

3. Configurar el APN del operador
```
AT+GTBSI=queclink,[apn],[apnu],[apnp],,,,,FFFF$
```
- [apn] = el APN de su operador móvil
- [apnu] = nombre de usuario del APN si su operador lo requiere
- [apnp] = contraseña del APN si su operador lo requiere

4. Ajustar el servidor GPRS para apuntar a Plaspy (se incluyen hostname e IP)
```
AT+GTSRI=queclink,4,,1,d.plaspy.com,8888,54.85.159.138,8888,,0,0,0,,,,FFFF$
```
- Este comando configura el servidor remoto como d.plaspy.com con fallback a 54.85.159.138 y establece el puerto en 8888.

5. Establecer intervalo de reporte a 60 segundos
```
AT+GTFRI=queclink,1,1,0,0,,,60,60,60,60,7F,40,0,,,FFFF$
```

6. Habilitar notificación del botón SOS en la entrada 2
```
AT+GTSOS=queclink,2,2,,0,0,0,0,0,0,,,FFFF$
```

Envíe cada comando como SMS al dispositivo y confirme las acuse de recibo según su práctica de instalación. Reemplace la contraseña por defecto y los marcadores del APN antes de enviar los comandos.

## Notas de configuración

- La configuración por SMS está soportada por los ejemplos públicos anteriores; también pueden existir otros métodos de aprovisionamiento provistos por QuecLink o su distribuidor.
- Plaspy utiliza el puerto 8888 para todos los dispositivos compatibles y detecta automáticamente el protocolo, por lo que solo necesita apuntar el equipo al endpoint de Plaspy.
- El comportamiento y los parámetros disponibles pueden variar según la versión de firmware y la revisión de hardware; consulte las notas de firmware del dispositivo si un comando no funciona como se espera.
- Al elegir transporte, UDP ofrece menor sobrecarga mientras que TCP puede brindar mayor fiabilidad; la mejor opción depende del dispositivo y la red.
- Si realiza una restauración de fábrica, marque ese paso como opcional y úselo únicamente cuando necesite un inicio limpio o para resolver problemas.

## Por qué usar Plaspy con esta configuración

Configurar el GV57MG para reportar a Plaspy ofrece visibilidad centralizada y consistente para flotas y propietarios de activos. Con el rastreador apuntando a Plaspy, las organizaciones obtienen ubicación en tiempo real, enrutamiento de alarmas y reproducción histórica que facilitan la recuperación, la seguridad y la toma de decisiones operativas. La combinación del hardware GV57MG y la ingestión de Plaspy proporciona una vía de integración directa para seguimiento, monitoreo de eventos y flujos de respuesta.

Learn more about Plaspy and how it handles device integrations on the Plaspy website https://www.plaspy.com. For the latest device specific commands, firmware notes, and installation guidance verify configuration details with QuecLink at https://www.queclink.com/ as manufacturer specifications and firmware behavior can change over time.
