---
slug: /queclink/gl501mg/configuration
id: gl501mg-configuration
sidebar_label: Configuration
title: QuecLink - GL501MG Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el QuecLink GL501MG y reportar a Plaspy con ajustes de servidor y comandos SMS de ejemplo
keywords:
  - Configuración QuecLink GL501MG
  - Instalación GL501MG Plaspy
  - Configuración rastreador QuecLink
  - Configuración servidor GL501MG
  - Configuración plataforma GPS GL501MG
  - Integración dispositivo Plaspy
  - Configuración SMS GL501MG
  - Configuración software QuecLink
  - Configuración rastreador de activos
  - Configuración rastreador LTE Cat M1
---

# QuecLink - Configuración GL501MG

Esta página describe el contexto público de configuración para usar el QuecLink GL501MG con Plaspy. Señala los ajustes de servidor compartidos de Plaspy que usted debe aplicar al dispositivo y muestra comandos SMS de ejemplo que se utilizan comúnmente en este modelo. Utilice esta guía para saber qué preparar y cómo validar que la conexión con Plaspy funciona correctamente.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, aunque los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el método de instalación o las herramientas del proveedor. El GL501MG admite múltiples interfaces de configuración, incluyendo SMS y BLE; los comandos de ejemplo a continuación muestran una configuración típica mediante SMS usando la contraseña predeterminada queclink.

## Visión general de la configuración

El objetivo de los pasos de configuración es preparar el GL501MG para que envíe de forma fiable ubicación y telemetría a Plaspy y aparezca en la plataforma para monitoreo y alertas. La configuración habitual se centra en acceso a la red, punto final del servidor, tiempos de reporte y ajustes de entradas o alarmas relevantes.

- Configure el dispositivo para que apunte al endpoint de ingestión de Plaspy y así los reportes lleguen a la plataforma.
- Proporcione el APN y parámetros celulares correctos para que el rastreador utilice LTE o retroceda a 2G según sea necesario.
- Establezca intervalos de reporte y eventos de entrada para que Plaspy reciba actualizaciones de ubicación y alertas oportunas.
- Valide que el dispositivo se registre y transmita correctamente al endpoint y puerto del servidor de Plaspy.
- Active notificaciones como SOS o entradas de manipulación para que los eventos críticos se reflejen en Plaspy.

## Ajustes del servidor Plaspy

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol so the platform can accept reports from supported transports

## Requisitos típicos antes de la configuración

- Un GL501MG alimentado con batería cargada o conectado a alimentación y que pueda aceptar comandos de configuración.
- Una SIM celular válida con datos habilitados y credenciales APN correctas para la red objetivo.
- Acceso a un emisor de SMS o a la herramienta de configuración de Queclink para enviar comandos SMS, o herramientas de aprovisionamiento BLE si están disponibles.
- Conocimiento de la contraseña predeterminada del dispositivo queclink utilizada en comandos SMS cuando el dispositivo tiene credenciales de fábrica.
- Capacidad para reiniciar o hacer un ciclo de energía del rastreador si es necesario tras aplicar la configuración.
- Confirmación de que en el lugar de despliegue existe cobertura celular para las bandas que usa el dispositivo.

## Cómo se conecta este rastreador a Plaspy

El GL501MG reporta posición y telemetría a Plaspy enviando datos con el protocolo @Track al endpoint y puerto compartidos de Plaspy. Plaspy acepta transporte TCP o UDP y detecta automáticamente el protocolo del dispositivo, por lo que los reportes se procesan sin necesidad de seleccionar manualmente el protocolo en la plataforma.

- El rastreador se configura para enviar reportes periódicos de posición a d.plaspy.com en el puerto 8888.
- Plaspy puede recibir datos por UDP o TCP según la configuración del dispositivo y el comportamiento de la red.
- Una vez conectado, el equipo envía ubicación, detección de movimiento o entradas de manipulación y telemetría de sensores visibles en Plaspy.
- Los reportes de eventos como SOS o mensajes de activación se encaminan a Plaspy para alertas y flujos de trabajo.
- Usar el endpoint compartido simplifica el manejo y facilita la incorporación de dispositivos adicionales.

## Flujo de configuración habitual

1. Acceda al método oficial de configuración de Queclink que vaya a utilizar, por ejemplo comandos SMS, la herramienta de aprovisionamiento del proveedor o el aprovisionamiento por BLE.
2. Ingrese el servidor de Plaspy como d.plaspy.com o utilice la IP alternativa 54.85.159.138 en la configuración del servidor del dispositivo.
3. Establezca el puerto del servidor en 8888 en la entrada de servidor del dispositivo.
4. Elija transporte UDP o TCP en el dispositivo si la interfaz de configuración lo requiere.
5. Proporcione las credenciales APN para la SIM si es necesario y guarde los ajustes de red.
6. Aplique o guarde la configuración y reinicie o haga un ciclo de energía del rastreador si la documentación del dispositivo recomienda un reinicio.
7. Valide que el dispositivo reporte a Plaspy comprobando la recepción de datos en la plataforma o utilizando cualquier comando de verificación que soporte el equipo.

## Comandos de configuración de ejemplo

El GL501MG admite configuración mediante SMS. Los siguientes comandos públicos de ejemplo aparecen en la documentación del dispositivo. Estos comandos SMS usan la contraseña predeterminada del dispositivo queclink en los ejemplos. Reemplace los valores de marcador antes de enviar y asegúrese de preservar el parámetro de contraseña cuando se requiera.

1. Optional factory reset or initial restore step
Description: Restore factory settings. Use this only if needed for a clean configuration.
```
AT+GTRTO=queclink,4,,,,,,FFFF$
```

2. Set the time zone to UTC 0
```
AT+GTTMA=queclink,+,0,0,0,,,,,,FFFF$
```

3. Set the operator APN
Note: Replace the placeholders with your operator APN values. {{apn}} is the APN name, {{apnu}} is the APN username, and {{apnp}} is the APN password. If your operator does not require username or password, use empty values as appropriate.
```
AT+GTBSI=queclink,{{apn}},{{apnu}},{{apnp}},,,,,FFFF$
```

4. Set the GPRS server to Plaspy
This command configures both domain and IP entries for the Plaspy endpoint and uses port 8888. The command includes d.plaspy.com and 54.85.159.138 with port 8888.
```
AT+GTSRI=queclink,4,,1,d.plaspy.com,8888,54.85.159.138,8888,,0,0,0,,,,FFFF$
```

5. Set the reporting interval to 60 seconds
Description: Adjusts periodic report timing to 60 seconds in the sample configuration.
```
AT+GTFRI=queclink,1,1,0,0,,,60,60,60,60,7F,40,0,,,FFFF$
```

6. Enable SOS button notification on input 2
Description: Configure SOS reporting for input 2 so alerts are sent to Plaspy.
```
AT+GTSOS=queclink,2,2,,0,0,0,0,0,0,,,FFFF$
```

Siga el orden de comandos al aplicarlos para la configuración inicial del dispositivo. Reemplace los marcadores y la contraseña predeterminada si su dispositivo ha sido cambiada respecto al valor de fábrica.

## Notas de configuración

- Las revisiones de firmware y hardware pueden cambiar la sintaxis de comandos o los parámetros disponibles; verifique los comandos según la revisión de firmware del GL501MG si es posible.
- El GL501MG soporta configuración por SMS y también aprovisionamiento por BLE; elija el método que se adapte a su despliegue y a las herramientas del instalador.
- TCP y UDP son compatibles; en redes celulares UDP puede ser preferible por menor overhead, mientras que TCP puede ofrecer mayor fiabilidad de sesión según el comportamiento de la red.
- Plaspy usa el puerto 8888 para todos los dispositivos y detecta automáticamente el protocolo del rastreador, por lo que se recomienda configurar el dispositivo con el puerto 8888 para una ingestión consistente.
- Los comandos SMS de ejemplo emplean la contraseña predeterminada queclink; tenga registro de cualquier cambio de contraseña y asegure el acceso a los canales de configuración por SMS.

## Por qué usar Plaspy con esta configuración

Usar el QuecLink GL501MG con Plaspy le ofrece un camino eficiente hacia la visibilidad continua de activos y el monitoreo de eventos. El bajo consumo del GL501MG, su conectividad LTE Cat M1 y NB1 con retroceso a 2G, y sus opciones de transporte flexibles lo hacen adecuado para despliegues no atendidos a largo plazo donde se requiere reporte fiable a un único endpoint de Plaspy.

To learn more about Plaspy and supported integrations, visit https://www.plaspy.com. For the most current device specific details, firmware notes, and official Queclink documentation verify setup instructions on the manufacturer site https://www.queclink.com/ as manufacturer specifications and configuration methods can change over time.
