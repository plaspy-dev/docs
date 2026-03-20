---
slug: /queclink/gv310lau/configuration
id: gv310lau-configuration
sidebar_label: Configuration
title: QuecLink - GV310LAU Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el QuecLink GV310LAU con Plaspy, con ajustes de servidor, comandos SMS y flujo práctico
keywords:
  - Configuración QuecLink GV310LAU
  - Configuración GV310LAU Plaspy
  - Configuración servidor QuecLink
  - Comandos SMS GV310LAU
  - Configuración software GV310LAU
  - Configuración plataforma GPS QuecLink
  - Integración rastreador Plaspy
  - Rastreo de flotas GV310LAU
  - Configuración telemetría QuecLink
  - Configuración dispositivo GV310LAU
---

# QuecLink - Configuración del GV310LAU

Esta página documenta el contexto público de configuración para usar el QuecLink GV310LAU con Plaspy. Explica los pasos prácticos visibles para el fabricante y ejemplos de comandos SMS que se usan comúnmente para apuntar el equipo a los servidores de Plaspy y habilitar el rastreo en tiempo real y la ingesta de telemetría. Utilice esta guía junto con el manual del dispositivo y las herramientas del proveedor para completar una instalación en producción.

Plaspy emplea ajustes de servidor compartidos para todos los dispositivos soportados y detecta automáticamente el protocolo del rastreador para aceptar la telemetría entrante. Los pasos de configuración en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor, por lo que confirme cualquier diferencia específica del equipo con la documentación de QuecLink y los comandos indicados más abajo cuando corresponda.

## Visión general de la configuración

Este proceso prepara el GV310LAU para reportar ubicación y datos de sensores a Plaspy, validar la conectividad y permitir la visibilidad dentro de la plataforma Plaspy. Los comandos de ejemplo que siguen usan la configuración por SMS, un método público que muchos instaladores emplean; otras herramientas de QuecLink o utilidades de firmware pueden aplicar los mismos ajustes de servidor y transporte.

- Apuntar el rastreador al endpoint compartido de Plaspy para que la telemetría llegue a Plaspy.
- Configurar APN y parámetros GPRS para que el dispositivo pueda conectarse vía LTE/3G/2G.
- Establecer intervalos de reporte y habilitar entradas o alarmas para que los eventos sean visibles en Plaspy.
- Validar la conectividad y confirmar que el dispositivo aparece en Plaspy usando el endpoint configurado.
- Opcionalmente, restaurar la configuración de fábrica antes de una puesta en marcha controlada para garantizar un comportamiento predecible.

## Ajustes del servidor Plaspy

- Server domain: d.plaspy.com
- Server IP: 54.85.159.138
- Port: 8888
- Transport: support for UDP or TCP (the device may be configured using either UDP or TCP on port 8888)
- Plaspy automáticamente detecta el protocolo del rastreador y usa el mismo puerto para todos los dispositivos soportados

## Requisitos habituales antes de la instalación

- Un equipo GV310LAU con alimentación, tarjeta SIM funcional y plan de datos habilitado para GPRS/LTE.
- Acceso al número telefónico del dispositivo o a la herramienta de configuración del fabricante para enviar comandos SMS o aplicar ajustes.
- Conocimiento del APN correcto, usuario y contraseña del APN de la SIM (si son requeridos).
- Herramientas básicas de instalador como fuente de alimentación diagnóstica, cableado hacia E/S del vehículo si configura entradas/salidas, y acceso al manual del dispositivo.
- Confirmación de la versión de firmware y de cualquier diferencia en la sintaxis de comandos específica del proveedor según la documentación de QuecLink.
- Acceso a los datos del servidor Plaspy (d.plaspy.com y puerto 8888) para ingresarlos en la configuración del rastreador.

## Cómo se conecta este rastreador a Plaspy

El GV310LAU se configura para reportar ubicación, datos CAN y telemetría de sensores al endpoint y puerto compartido de Plaspy para que Plaspy pueda ingerir y visualizar los datos en tiempo real. La conectividad normalmente usa el módem celular del equipo, con SMS o TCP/UDP como métodos de transporte disponibles según la configuración y el firmware.

- El rastreador envía mensajes periódicos de posición y telemetría a d.plaspy.com en el puerto 8888.
- La telemetría del dispositivo, incluidos entradas, alarmas y datos CAN, se entrega a Plaspy para su procesamiento como eventos y su visualización en paneles.
- En el dispositivo se puede seleccionar TCP o UDP; Plaspy acepta ambos y detecta automáticamente el protocolo del rastreador.
- Las alarmas y eventos SOS pueden habilitarse en el GV310LAU y aparecerán en Plaspy como eventos configurados.
- La configuración exitosa se confirma cuando el dispositivo reporta al endpoint de Plaspy y aparece en la plataforma Plaspy.

## Flujo típico de configuración

1. Acceda al método oficial de configuración de QuecLink para el GV310LAU (comandos SMS, herramienta de configuración de QuecLink o utilidad del proveedor) según el manual del equipo.
2. Ingrese la información del servidor Plaspy especificando d.plaspy.com o la dirección IP 54.85.159.138 como servidor GPRS/telemático.
3. Establezca el puerto del servidor en 8888 (Plaspy usa el mismo puerto para todos los dispositivos soportados).
4. Elija el protocolo de transporte (UDP o TCP) si el dispositivo requiere selección.
5. Configure los parámetros APN para la SIM usando el APN, usuario y contraseña de su operador cuando corresponda.
6. Aplique o guarde la configuración y reinicie el equipo si el firmware lo requiere.
7. Valide que el dispositivo reporte correctamente a Plaspy verificando la llegada de mensajes y la presencia en la plataforma Plaspy.

## Ejemplo de comandos de configuración

El GV310LAU puede configurarse por SMS según ejemplos públicos de comandos de QuecLink. La contraseña por defecto del dispositivo usada en estos ejemplos es queclink. Envíe estos comandos como mensajes SMS al número del dispositivo en el orden mostrado al realizar una configuración inicial. Las etiquetas a continuación aclaran la intención; mantenga los marcadores de posición sin modificar.

1. Optional initial step — restore factory settings (use only when needed)
```
AT+GTRTO=queclink,4,,,,,,FFFF$
```

2. Set the time zone to UTC+0
```
AT+GTTMA=queclink,+,0,0,0,,,,,,FFFF$
```

3. Set the operator APN (replace placeholders with your SIM/APN details)
```
AT+GTBSI=queclink,{{apn}},{{apnu}},{{apnp}},,,,,FFFF$
```
- {{apn}} = APN name from your mobile operator
- {{apnu}} = APN username if required (leave blank if not used)
- {{apnp}} = APN password if required (leave blank if not used)

4. Configure the GPRS server to report to Plaspy (domain and IP with port 8888)
```
AT+GTSRI=queclink,4,,1,d.plaspy.com,8888,54.85.159.138,8888,,0,0,0,,,,FFFF$
```

5. Set the periodic location update interval to 60 seconds
```
AT+GTFRI=queclink,1,1,0,0,,,60,60,60,60,7F,40,0,,,FFFF$
```

6. Enable SOS button notification on input 2
```
AT+GTSOS=queclink,2,2,,0,0,0,0,0,0,,,FFFF$
```

Estos comandos SMS reflejan un flujo de configuración público. Si utiliza el software de QuecLink o una herramienta de aprovisionamiento, aplique los campos equivalentes: APN, servidor d.plaspy.com (o 54.85.159.138), puerto 8888 y transporte UDP o TCP.

## Notas de configuración

- La configuración por SMS es un método públicamente disponible para dispositivos QuecLink, pero también pueden emplearse herramientas del proveedor o aprovisionamiento OTA según las prácticas de instalación.
- Plaspy acepta tanto TCP como UDP en el puerto 8888 y detectará automáticamente el protocolo del rastreador; elija el transporte que coincida con su red y el comportamiento del firmware.
- Las revisiones de firmware y las variantes regionales de hardware pueden cambiar la sintaxis de comandos o las funciones disponibles; verifique los comandos con el manual del QuecLink GV310LAU correspondiente a su firmware.
- Mantenga la contraseña por defecto en los ejemplos solo si entiende las implicaciones de seguridad del equipo; cambie las contraseñas del dispositivo después del aprovisionamiento cuando sea apropiado.
- Los marcadores de posición como {{apn}}, {{apnu}} y {{apnp}} deben reemplazarse por las credenciales de su operador al enviar los comandos.

## Por qué usar Plaspy con esta configuración

Usar el GV310LAU con Plaspy ofrece una vía práctica para obtener visibilidad fiable de la flota y telemetría. Con conectividad LTE, captura CAN, E/S configurable y soporte para sensores BLE, el GV310LAU aporta la posición y los eventos que Plaspy necesita para reproducción de rutas, alarmas e informes operacionales. Configurar el dispositivo para reportar al endpoint compartido de Plaspy garantiza una ingesta consistente y permite la monitorización centralizada en flotas mixtas.

Learn more about Plaspy and how it integrates with trackers like the GV310LAU at https://www.plaspy.com. For device-specific configuration details, firmware behavior, and the latest command syntax always verify current information on the manufacturer's site https://www.queclink.com/ as vendor specifications and setup methods can change over time.
