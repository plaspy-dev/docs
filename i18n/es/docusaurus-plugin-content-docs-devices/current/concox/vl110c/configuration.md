---
slug: /concox/vl110c/configuration
id: vl110c-configuration
sidebar_label: Configuration
title: Concox - VL110C Configuration
sidebar_class_name: menu_item_tracker
description: Configurar el Concox VL110C para usar con Plaspy, con ajustes de servidor, comandos SMS y pasos prácticos para reportes fiables
keywords:
  - configuración Concox VL110C
  - instalación Concox VL110C
  - configuración servidor Concox VL110C
  - configuración VL110C Plaspy
  - configuración rastreador GPS VL110C
  - configuración dispositivo Plaspy
  - configuración rastreador vehicular
  - configuración GPS Concox
  - comandos SMS VL110C
  - configuración seguimiento de flotas
---

# Concox - Configuración del VL110C

Esta página resume el contexto público de configuración para usar el Concox VL110C con Plaspy. Describe los ajustes de servidor prácticos y los comandos y flujos de trabajo habituales del fabricante que puede usar para apuntar el dispositivo a Plaspy y así habilitar el seguimiento en tiempo real, la telemetría y la visibilidad en la plataforma.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador; sin embargo, los pasos exactos en el equipo del fabricante pueden variar según la versión de firmware, la revisión de hardware o las utilidades del proveedor. La guía a continuación recurre a los comandos SMS públicos para la configuración del VL110C cuando aplica y destaca los parámetros de servidor de Plaspy que debe establecer.

## Resumen de la configuración

El proceso de configuración prepara el VL110C para enviar su ubicación, eventos y datos de telemetría a Plaspy de forma confiable. En unidades VL110C esto se realiza comúnmente por comandos SMS o por herramientas de PC del fabricante e incluye configurar el APN, definir el servidor GPRS, elegir el transporte y habilitar los reportes periódicos.

- Configure el APN del dispositivo para que use datos móviles para reportes GPRS/4G.
- Apunte el dispositivo al endpoint del servidor de Plaspy y establezca el puerto compartido que usa Plaspy.
- Elija el transporte (UDP o TCP) si el dispositivo requiere una selección explícita.
- Configure los intervalos de reporte (timers) para controlar la frecuencia de envíos de posición a Plaspy.
- Habilite el modo GPRS o equivalente para que el dispositivo use datos móviles en lugar de solo SMS.
- Verifique la configuración con el comando de verificación del dispositivo o confirmando que la unidad aparece en Plaspy.

## Ajustes de servidor de Plaspy

- Dominio del servidor: d.plaspy.com
- IP del servidor: 54.85.159.138
- Puerto: 8888
- Transporte: compatible con UDP o TCP — el dispositivo puede configurarse usando UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador y todos los dispositivos en Plaspy usan el mismo puerto

## Requisitos habituales antes de la configuración

- Una unidad VL110C con alimentación y acceso para enviar SMS o usar la herramienta de PC del fabricante.
- Una tarjeta SIM activa con plan de datos y el APN correcto del operador móvil.
- Conocimiento del APN del operador y cualquier usuario o contraseña del APN si son requeridos (los comandos usan marcadores de posición).
- Acceso al número de la SIM del dispositivo o acceso físico para la configuración con la herramienta de PC o acceso USB a firmware/ajustes.
- Comprender la elección entre UDP o TCP según sus políticas de red.
- Capacidad para reiniciar el dispositivo después de la configuración para aplicar cambios.

## Cómo se conecta este rastreador a Plaspy

El VL110C se configura para enviar sus datos de ubicación y eventos al endpoint y puerto del servidor Plaspy para que Plaspy pueda recibir y mostrar la información para monitoreo e informes. Una vez configurado, el rastreador reportará según el intervalo fijado y Plaspy reconocerá automáticamente el protocolo.

- El dispositivo envía datos GPRS/4G a d.plaspy.com o 54.85.159.138 en el puerto 8888.
- Plaspy recibe los paquetes del dispositivo y detecta automáticamente el protocolo correcto para el VL110C.
- Las actualizaciones regulares de posición se envían según el valor TIMER configurado para que Plaspy ofrezca mapeo en vivo e historial.
- Las alarmas y mensajes de eventos se entregan a Plaspy para notificaciones y flujos de trabajo automatizados.
- Tras la configuración, se valida comprobando que el dispositivo aparece y reporta en la plataforma Plaspy.

## Flujo típico de configuración

1. Acceda al método oficial de configuración Concox para el VL110C — comandos SMS, la herramienta de PC de Concox o la utilidad proporcionada por el proveedor.
2. Ingrese el servidor Plaspy como d.plaspy.com o 54.85.159.138 en el ajuste SERVER del equipo.
3. Establezca el puerto del servidor en 8888 (todos los dispositivos Plaspy usan el mismo puerto).
4. Elija UDP o TCP si el VL110C requiere selección explícita de transporte.
5. Introduzca el APN del operador y las credenciales APN opcionales si su SIM las requiere.
6. Aplique o guarde la configuración y reinicie el dispositivo si éste requiere reboot.
7. Valide que el dispositivo reporte a Plaspy revisando los datos entrantes en la plataforma o usando el comando de verificación del dispositivo.

## Ejemplos de comandos de configuración

El VL110C admite configuración via SMS. Los siguientes comandos SMS públicos aparecen en la documentación del fabricante y deben enviarse desde un número autorizado al número de la SIM del dispositivo. Mantenga los marcadores de APN tal como aparecen cuando introduzca la información de su operador.

- Reset opcional a configuración de fábrica (usar solo si necesita empezar desde cero):
```text
FACTORY#
```

- Establecer la zona horaria a UTC+0 (ajuste si necesita otra zona):
```text
GMT,E,0#
```

- Configurar el APN del operador. Reemplace {{apn}} por el APN del operador móvil. Si su proveedor requiere usuario o contraseña, incluya {{apnu}} y {{apnp}} después del APN:
```text
APN,{{apn}}# 
```
O con usuario/contraseña opcional:
```text
APN,{{apn}},{{apnu}},{{apnp}}#
```
(Marcadores: {{apn}} = cadena APN; {{apnu}} = usuario APN; {{apnp}} = contraseña APN)

- Establecer el servidor GPRS en Plaspy usando el dominio en el puerto 8888 (la elección UDP/TCP se hace según el ajuste del dispositivo):
```text
SERVER,1,d.plaspy.com,8888,0#
```
O establecer el servidor usando la IP de Plaspy:
```text
SERVER,0,54.85.159.138,8888,0#
```
(Estas dos opciones muestran variantes de dominio e IP según lo provea el fabricante.)

- Establecer el intervalo de actualización a cada 60 segundos. El dispositivo admite formatos alternativos de timer:
```text
TIMER,60#
```
O:
```text
TIMER,60,60#
```

- Activar modo GPRS para que el dispositivo use datos móviles:
```text
GPRSON,1#
```

- Verificar parámetros actuales de GPRS y servidor:
```text
GPRSSET#
```

Envíe cada comando como un SMS separado según lo requiera el dispositivo. Después de cambiar servidor o APN, guarde y reinicie el dispositivo si se recomienda.

## Notas sobre la configuración

- Los comandos anteriores son por SMS y provienen de la documentación pública de configuración del Concox VL110C; también puede usar la herramienta de PC de Concox o utilidades del proveedor cuando estén disponibles.
- Las revisiones de firmware y hardware pueden cambiar la sintaxis de los comandos o los parámetros soportados; confirme que su firmware admite los comandos usados.
- Elija UDP o TCP según la confiabilidad de la red y sus necesidades de monitoreo. El dispositivo puede configurarse para usar cualquiera de los dos transportes al establecer el servidor y el puerto 8888.
- Preserve los marcadores de APN ({{apn}}, {{apnu}}, {{apnp}}) y proporcione las credenciales de su operador cuando sea necesario.
- Use el comando de verificación (GPRSSET#) o revise Plaspy para confirmar que el dispositivo está reportando tras la configuración.

## Por qué usar Plaspy con esta configuración

Configurar el VL110C para reportar a Plaspy ofrece una forma directa de centralizar ubicación, alarmas y telemetría para operaciones de flota. La detección automática de protocolos de Plaspy y el uso de un puerto consistente simplifican la incorporación de dispositivos, permitiéndole concentrarse en el monitoreo operativo, las alertas y los informes en lugar de en la selección de protocolos de bajo nivel.

Para obtener más información sobre Plaspy visite https://www.plaspy.com. Para comandos específicos del dispositivo, notas de firmware y detalles del fabricante, verifique la información actual en el sitio de Concox https://www.iconcox.com/ ya que los métodos de configuración y el comportamiento del firmware pueden cambiar con el tiempo.
