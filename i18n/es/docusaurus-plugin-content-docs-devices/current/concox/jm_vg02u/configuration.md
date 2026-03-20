---
slug: /concox/jm_vg02u/configuration
id: jm_vg02u-configuration
sidebar_label: Configuration
title: Concox - JM-VG02U Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el Concox JM-VG02U con el servidor Plaspy y comandos SMS prácticos
keywords:
  - Concox JM VG02U
  - configuración JM VG02U
  - configuración rastreador Concox
  - configuración rastreador Plaspy
  - configuración seguimiento vehicular
  - configuración servidor GPS
  - configuración OBDII
  - GPS para gestión de flotas
  - configuración software de rastreo
  - comandos SMS JM VG02U
---

# Concox - JM-VG02U: Configuración

Esta página explica el contexto público de configuración para usar el rastreador Concox JM-VG02U con Plaspy. Resume los ajustes de servidor y los comandos SMS comunes publicados para el JM-VG02U, de modo que usted pueda preparar el dispositivo para reportar a Plaspy y habilitar seguimiento y telemetría en tiempo real.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador en el borde de la plataforma. Los pasos de configuración del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor, por lo que use los comandos mostrados aquí en referencia con la documentación oficial de Concox y las notas específicas del dispositivo.

## Resumen de la configuración

El objetivo al configurar el JM-VG02U para Plaspy es apuntar el dispositivo al endpoint compartido de Plaspy, confirmar conectividad de red y APN, y activar reportes periódicos para que el equipo sea visible dentro de la plataforma.

- Configure el dispositivo con los ajustes del servidor de Plaspy para que la ubicación y los eventos se entreguen a la plataforma.
- Verifique el APN de la SIM y el modo GPRS para asegurar conectividad de datos móviles.
- Ajuste el intervalo de reporte (timer) y permita que el dispositivo envíe datos por el transporte elegido.
- Valide el dispositivo en Plaspy comprobando que aparezca como rastreador activo y envíe actualizaciones.
- Use los comandos SMS indicados cuando estén soportados para cambios rápidos y repetibles en despliegues masivos o en campo.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte compatible: UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador; todos los dispositivos usan el mismo puerto

Estos valores son los ajustes públicos de servidor que debe usar al configurar el JM-VG02U para reportar a Plaspy.

## Requisitos típicos antes de la configuración

- Un JM-VG02U con alimentación y operativo, conectado al puerto OBDII del vehículo o alimentado de otra forma.
- Una nano SIM válida instalada con datos móviles habilitados y el APN correcto del operador.
- Crédito de SMS y posibilidad de enviar mensajes SMS de configuración al número de la SIM del dispositivo si usa comandos SMS.
- Acceso a las instrucciones o herramientas de configuración oficiales de Concox para confirmar compatibilidad de comandos según el firmware.
- Una cuenta de Plaspy o acceso a la instancia de Plaspy y al flujo de provisión de dispositivos para confirmar que el dispositivo es visible tras la configuración.

## Cómo se conecta este rastreador a Plaspy

El JM-VG02U se configura para enviar fijaciones GNSS/INS y mensajes de evento al endpoint y puerto compartido de Plaspy. Plaspy ingiere esos mensajes en tiempo real y determina automáticamente el protocolo correcto para el dispositivo, de modo que el rastreador se vuelve visible en la plataforma sin mapeo de protocolo por dispositivo.

- El dispositivo se apunta a d.plaspy.com o a la IP del servidor de Plaspy y envía datos al puerto 8888.
- El rastreador usa GPRS móvil para entregar paquetes de ubicación y eventos al servidor.
- Plaspy recibe y parsea los mensajes entrantes y aplica la detección de protocolo de forma automática.
- Tras una configuración exitosa, el dispositivo reportará periódicamente según el timer y generará eventos visibles dentro de Plaspy.
- La verificación se realiza confirmando actualizaciones periódicas de ubicación y mensajes de evento en la interfaz de Plaspy.

## Flujo de configuración común

1. Acceda al método oficial de configuración de Concox para el JM-VG02U, normalmente comandos SMS o herramientas de provisión del proveedor, y revise el manual del dispositivo para su versión de firmware.
2. Ingrese la dirección del servidor Plaspy usando el dominio d.plaspy.com o la IP del servidor 54.85.159.138 según lo permita el dispositivo.
3. Establezca el puerto del servidor exactamente en 8888, ya que la plataforma usa un puerto compartido para todos los dispositivos.
4. Elija UDP o TCP si el dispositivo solicita selección de transporte durante la configuración del servidor.
5. Configure el APN de la SIM instalada mediante el comando APN y active el modo GPRS.
6. Aplique o guarde la configuración y reinicie el dispositivo si el firmware o el equipo lo requieren.
7. Valide que el dispositivo reporte a Plaspy observando mensajes periódicos de posición y comprobando que el rastreador quede activo en la plataforma.

## Comandos de configuración de ejemplo

El JM-VG02U soporta configuración vía SMS. A continuación se muestran los comandos SMS públicos publicados para este modelo en el orden comúnmente usado para la configuración inicial. Envíe cada línea como un SMS al número de la SIM del dispositivo. El paso etiquetado como reset es opcional y se recomienda solo cuando se parte de una configuración desconocida.

- Restauración de fábrica (paso inicial opcional)
```text
FACTORY#
```

- Ajustar la zona horaria a UTC 0
```text
GMT,E,0#
```

- Establecer el APN del operador (reemplace los marcadores según sea necesario)
```text
APN,[apn]#
```
Si su operador requiere usuario y contraseña incluya los campos opcionales:
```text
APN,[apn],[apnu],[apnp]#
```
Nota: [apn] es la cadena APN del operador. [apnu] y [apnp] son marcadores opcionales para usuario y contraseña del APN.

- Configurar el servidor GPRS a Plaspy por dominio (use esta opción para preferir dominio)
```text
SERVER,1,d.plaspy.com,8888,0#
```

- O configurar el servidor GPRS a Plaspy por dirección IP
```text
SERVER,0,54.85.159.138,8888,0#
```

- Establecer el intervalo de reporte a cada 60 segundos
```text
TIMER,60#
```
Forma alternativa de timer para algunas variantes de firmware:
```text
TIMER,60,60#
```

- Activar modo GPRS
```text
GPRSON,1#
```

- Verificar los parámetros GPRS actuales
```text
GPRSSET#
```

Estos comandos son las interacciones SMS públicas suministradas para la configuración del JM-VG02U. Tras enviarlos, espere respuestas SMS de confirmación del rastreador cuando estén disponibles y luego verifique la conectividad en Plaspy.

## Notas sobre la configuración

- El soporte de comandos y la sintaxis exacta pueden variar según la versión de firmware; confirme la disponibilidad de los comandos en el manual de Concox para la revisión de su dispositivo.
- La configuración vía SMS es adecuada para instalaciones en campo o para configurar dispositivos individuales. Para aprovisionamiento masivo consulte las herramientas de Concox o los servicios de provisión del proveedor.
- Elija TCP o UDP según la confiabilidad de la red y el comportamiento del operador en su ubicación; Plaspy soporta ambos transportes y aceptará conexiones en el puerto 8888.
- Siempre verifique el APN y la provisión de la SIM antes de apuntar el dispositivo a d.plaspy.com o a 54.85.159.138.
- Use el comando GPRSSET# para confirmar que el dispositivo ha registrado el servidor y los ajustes de APN antes de validar en Plaspy.

## Por qué usar Plaspy con esta configuración

Configurar el Concox JM-VG02U para reportar a Plaspy proporciona a las organizaciones visibilidad continua de la ubicación del vehículo, segmentación de viajes y datos de eventos como alertas de comportamiento de conducción y eventos de alimentación eléctrica. El conector OBDII y la asistencia INS al GNSS del JM-VG02U aportan datos robustos que Plaspy ingiere y visualiza para gestión de flotas, análisis de seguridad y supervisión operativa.

Conozca más sobre Plaspy y las capacidades de la plataforma en https://www.plaspy.com. Para comandos específicos del dispositivo, notas de firmware e instrucciones de configuración más recientes confirme los detalles con el fabricante en https://www.iconcox.com/ ya que los métodos y el comportamiento del firmware pueden cambiar con el tiempo.
