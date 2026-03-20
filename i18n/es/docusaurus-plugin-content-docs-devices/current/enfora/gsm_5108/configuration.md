---
slug: /enfora/gsm_5108/configuration
id: gsm_5108-configuration
sidebar_label: Configuration
title: Enfora - GSM 5108 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar Enfora GSM 5108 con servidor Plaspy y ejemplos de comandos AT para reporte
keywords:
  - Configuración Enfora GSM 5108
  - Configuración GSM 5108 Enfora
  - Configuración servidor GSM 5108
  - Rastreador Enfora Plaspy
  - Configuración rastreador GSM
  - Configuración GPS Enfora
  - Comandos AT GSM 5108
  - Configuración rastreo vehicular
  - Integración rastreador GPS Plaspy
  - Guía configuración Enfora GSM
---

# Enfora - GSM 5108 Configuración

Esta página describe la configuración pública para usar el Enfora GSM 5108 con Plaspy. Reúne los valores prácticos de servidor y secuencias de comandos AT de ejemplo que habitualmente se usan para apuntar el GSM 5108 a un servidor de rastreo remoto. Utilice esta guía para entender cómo preparar el dispositivo para reportar en Plaspy y como referencia al aplicar los pasos de configuración del fabricante.

Plaspy utiliza un endpoint y puerto compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos de configuración en el lado del fabricante para el GSM 5108 pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Los comandos y ajustes mostrados aquí reflejan patrones de configuración públicos y deben aplicarse junto con la documentación oficial de Enfora.

## Resumen de la configuración

Configurar el Enfora GSM 5108 para Plaspy consiste en dirigir el dispositivo al endpoint del servidor Plaspy, asegurar que el equipo pueda conectarse mediante la red celular y habilitar los eventos e intervalos de reporte que su operación requiera. Los comandos AT de ejemplo que aparecen a continuación muestran una secuencia común para establecer el APN, la dirección del servidor, el transporte y varias reglas de evento en dispositivos que aceptan configuración estilo AT.

- Apuntar el dispositivo al dominio o IP del servidor Plaspy para que la telemetría llegue a Plaspy
- Configurar el transporte y el puerto para que coincidan con los requisitos de Plaspy y las condiciones de red
- Habilitar reportes periódicos de tiempo y reportes por evento para visibilidad en Plaspy
- Guardar los ajustes en la memoria no volátil del dispositivo y reiniciar si es necesario
- Validar que el dispositivo alcance d.plaspy.com o 54.85.159.138 en el puerto 8888 y aparezca en Plaspy

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador

Tenga en cuenta que Plaspy usa el mismo puerto 8888 para todos los dispositivos compatibles y su plataforma determina automáticamente el protocolo entrante.

## Requisitos típicos antes de la configuración

- SIM activa con plan de datos y ajustes APN correctos para el operador móvil instalado
- Alimentación al GSM 5108 y acceso a su interfaz de configuración o herramienta del proveedor
- Acceso a la consola del dispositivo o al canal de comandos SMS si el equipo soporta configuración vía AT o SMS
- Conocimiento del APN, y opcionalmente del usuario y contraseña del APN para completar los marcadores [apn], [apnu] y [apnp]
- Un plan de reportes y de intervalos de reporte que se ajuste a sus necesidades de monitoreo
- Acceso a la documentación oficial de Enfora o canales de soporte para variaciones específicas de firmware

## Cómo se conecta este rastreador a Plaspy

El Enfora GSM 5108 se configura para enviar mensajes de ubicación y eventos a través de la red celular al endpoint del servidor Plaspy. Plaspy recibe mensajes en un puerto compartido y detecta automáticamente el protocolo del dispositivo, por lo que el rastreador solo necesita apuntar al host y puerto correctos.

- El rastreador se dirige a d.plaspy.com o 54.85.159.138 como host destino
- El dispositivo envía telemetría al puerto 8888 usando UDP o TCP según la configuración
- Reportes periódicos de tiempo y reportes por evento actualizan la ubicación y el estado en Plaspy
- Las reglas de evento en el dispositivo desencadenan reportes inmediatos por entradas, eventos de energía o estado de la antena
- La conectividad exitosa hace que el dispositivo sea visible y reportable dentro de Plaspy para monitoreo e informes

## Flujo de trabajo típico de configuración

1. Acceda al método oficial de configuración de Enfora para el GSM 5108 (consola serie, herramienta del proveedor o canal de comandos SMS).
2. Ingrese el dominio del servidor Plaspy d.plaspy.com o la IP del servidor Plaspy 54.85.159.138 como destino del dispositivo.
3. Establezca el puerto en 8888 en la configuración de servidor o API del dispositivo.
4. Elija UDP o TCP si el dispositivo requiere selección de transporte; Plaspy acepta ambos y detecta el protocolo automáticamente.
5. Aplique o guarde la configuración en la memoria no volátil del dispositivo (por ejemplo con AT&W donde sea compatible).
6. Reinicie o restablezca el dispositivo si es necesario para activar los nuevos ajustes de servidor.
7. Valide que el dispositivo reporte a Plaspy verificando la conectividad y que los datos del equipo aparezcan en su cuenta de Plaspy.

## Ejemplos de comandos de configuración

El GSM 5108 acepta comandos estilo AT para muchos pasos de configuración. A continuación se muestran comandos públicos de ejemplo en un orden lógico basado en secuencias habitualmente publicadas. Preserve y reemplace los marcadores donde sea necesario.

Initial reset and defaults and APN configuration
- Reset to factory or ensure a clean state
```text
AT&F
```

- Ensure user settings saved
```text
AT&W
```

- Set PDP context with operator APN
```text
AT+CGDCONT=1,"IP","[apn]"
```
If the APN requires username or password, the following placeholder command may be used where supported:
```text
AT%CGPCO=1,"[apnu],[apnp]",0
```
(Explanation: [apn] is the APN string for your mobile operator. [apnu] and [apnp] are optional APN username and password.)

Plaspy server and transport settings
- Register a friend or target server IP for some firmware families
```text
AT$FRIEND=1,1,"54.85.159.138"
```

- Set UDP API port to Plaspy port
```text
AT$UDPAPI=,8888
```

- Enable wakeup or keepalive mode if supported
```text
AT$WAKEUP=1,1
```

Event and reporting configuration examples
- Time based reporting interval and event enable
```text
' Time report
AT$EVTIM4=60
AT$EVENT=9,1,12,1,1
AT$EVENT=9,3,40,2,28905678
AT$EVENT=9,3,60,2,28905678
```

- Reporting by input 1
```text
' reporting by input 1
AT$EVENT=10,0,0,1,1
AT$EVENT=10,3,40,1,28905678
AT$EVENT=10,3,60,1,28905678
```

- Reporting by input 2
```text
' reporting by input 2
AT$EVENT=12,0,1,1,1
AT$EVENT=12,3,40,4,28905678
AT$EVENT=12,3,60,4,28905678
```

- Power and antenna related events
```text
' Battery Disconnect
AT$EVENT=14,0,3,0,0
AT$EVENT=14,3,40,6,28905678
AT$EVENT=14,3,60,6,28905678

' GPS antenna disconnection
AT$EVENT=15,0,71,2,3
AT$EVENT=15,3,40,7,28905678

' GPS antenna connection
AT$EVENT=16,0,71,1,1
AT$EVENT=16,3,40,16,28905678

' Battery Connection
AT$EVENT=17,0,3,1,1
AT$EVENT=17,3,40,17,28905678
AT$EVENT=17,3,60,22,28905678
```

- Ignition events
```text
' Ignition ON
AT$EVENT=37,0,7,1,1
AT$EVENT=37,3,40,2,28905678

' Ignition OFF
AT$EVENT=38,0,7,0,0
AT$EVENT=38,3,40,3,28905678
```

Finalization
```text
AT$AREG=2
AT&W
```

Optional restart
```text
AT$RESET
```
Note: The AT$RESET command is typically used to restart the device so saved settings take effect. Use it as part of final setup if required by your firmware.

## Notas de configuración

- El soporte de comandos AT y la sintaxis exacta de parámetros pueden variar según la revisión del firmware; confirme los comandos correctos para el firmware de su dispositivo.
- Reemplace marcadores como [apn], [apnu] y [apnp] con los valores de su operador móvil según sea necesario. Si no se requiere usuario o contraseña, omita o deje los marcadores en blanco según la sintaxis del equipo.
- Elija UDP o TCP en función de la confiabilidad de la red y el soporte del dispositivo; Plaspy acepta ambos en el puerto 8888 y detectará el protocolo automáticamente.
- Los comandos de ejemplo muestran patrones comunes de reglas de evento. Ajuste los IDs de evento y parámetros para que coincidan con su instalación y política de reporte.
- Pueden estar disponibles herramientas del fabricante, comandos SMS o interfaces de configuración serie; utilice el método de configuración oficial de Enfora que corresponda a su instalación.

## Por qué usar Plaspy con esta configuración

Usar Plaspy con un Enfora GSM 5108 ofrece un camino sencillo para centralizar reportes de ubicación y eventos para flotas, activos u operaciones. Al dirigir el dispositivo al endpoint y puerto de Plaspy, usted puede aprovechar la detección de protocolos y el manejo de puerto unificado de Plaspy para simplificar la incorporación y reducir la complejidad de configuración por dispositivo.

Learn more about Plaspy and how it supports device integrations at https://www.plaspy.com. For the latest device specific details, firmware notes, and vendor tools review the official Enfora documentation at http://www.enfora.com/ since manufacturer setup methods and firmware behavior can change over time.
