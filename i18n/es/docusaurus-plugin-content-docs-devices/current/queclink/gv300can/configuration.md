---
slug: /queclink/gv300can/configuration
id: gv300can-configuration
sidebar_label: Configuration
title: QuecLink - GV300CAN Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del rastreador QuecLink GV300CAN y su compatibilidad con Plaspy, incluyendo servidor, comandos SMS y flujo
keywords:
  - Configuración QuecLink GV300CAN
  - Instalación QuecLink GV300CAN
  - GV300CAN en Plaspy
  - Configuración de servidor GV300CAN
  - Configuración de rastreo QuecLink
  - Configuración SMS GV300CAN
  - Configuración de rastreador GPS vehicular
  - Configuración de dispositivo Plaspy
  - Configuración de plataforma GPS QuecLink
  - Configuración de rastreadores de flota
---

# QuecLink - Configuración del GV300CAN

Esta página ofrece el contexto público de configuración para usar el QuecLink GV300CAN con Plaspy. Describe los ajustes de servidor prácticos, el flujo típico de instalación y ejemplos de comandos SMS públicamente disponibles para dejar el rastreador reportando al servicio Plaspy. Utilice esta guía para preparar el equipo para la comunicación con Plaspy y para saber qué información requerirá del fabricante y del operador móvil.

Plaspy comparte ajustes de servidor entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, por lo que los valores principales de servidor que se indican a continuación aplican al GV300CAN. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Los comandos SMS de ejemplo aquí son representativos y deben validarse frente a la documentación actual de QuecLink y al firmware de su dispositivo.

## Resumen de la configuración

Preparar un GV300CAN para Plaspy implica apuntar el equipo al endpoint de servidor de Plaspy, confirmar los ajustes de transporte y validar que los reportes programados o por evento lleguen a su cuenta Plaspy. El GV300CAN soporta transporte TCP, UDP y SMS, y puede configurarse mediante comandos SMS o las herramientas del fabricante según sus preferencias de instalación.

- Configure el dispositivo para que reporte al endpoint de servidor de Plaspy y así la ubicación y datos vehiculares lleguen a Plaspy.
- Seleccione el tipo de transporte UDP o TCP si su firmware o operador lo requiere.
- Ingrese los ajustes APN correctos para que el dispositivo utilice datos GPRS para el reporte TCP/UDP.
- Valide la conectividad y la frecuencia de reporte para que la posición en tiempo real y la telemetría CANBus aparezcan en Plaspy.
- Use los comandos SMS del fabricante o el software de configuración para aplicar los ajustes y, si es necesario, restaure primero los valores de fábrica.

## Ajustes del servidor Plaspy

- Dominio de servidor d.plaspy.com para reporte e ingestión de dispositivos
- IP del servidor 54.85.159.138 como endpoint alterno
- Puerto 8888 que Plaspy utiliza para las conexiones de dispositivos
- Transporte soportado UDP o TCP dependiendo del dispositivo y del operador
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que el mismo puerto se usa para todos los dispositivos compatibles

Tenga en cuenta que Plaspy usa el mismo puerto para todos los dispositivos y determina automáticamente el protocolo del rastreador a nivel de plataforma.

## Requisitos típicos antes de la instalación

- Acceso físico al rastreador o un método remoto de aprovisionamiento por SMS para aplicar comandos
- Una tarjeta SIM con datos activados y el APN correcto del operador móvil
- Una herramienta o método para enviar comandos SMS de aprovisionamiento o acceso al software de configuración de QuecLink
- Energía al dispositivo e instalación estable para que el rastreador pueda adquirir señales GNSS y conectarse a la red
- Conocimiento de la contraseña del dispositivo si la unidad está protegida; los ejemplos públicos de SMS abajo usan la contraseña por defecto queclink
- Confirmación de la versión de firmware y cualquier instrucción específica del proveedor que afecte la sintaxis de los comandos

## Cómo se conecta este rastreador a Plaspy

Cuando se configura con los ajustes de Plaspy, el GV300CAN envía posiciones GNSS y telemetría vehicular al endpoint y puerto compartidos de Plaspy. Plaspy ingiere esos mensajes y asigna los datos entrantes al registro de dispositivo correspondiente usando el protocolo detectado.

- El dispositivo reporta actualizaciones de ubicación y notificaciones de eventos a d.plaspy.com o 54.85.159.138 en el puerto 8888
- El transporte se selecciona como UDP o TCP en el dispositivo según lo que soporte el operador y el firmware
- Plaspy detecta automáticamente el protocolo del rastreador para que los mensajes entrantes se analicen correctamente sin mapeos de puerto específicos por dispositivo
- La telemetría como tramas CANBus y entradas del dispositivo se entregan junto con los datos de posición en Plaspy
- Los intervalos de reporte programados o los reportes por evento garantizan visibilidad y alertas en la plataforma

## Flujo común de configuración

1. Acceda al método oficial de configuración de QuecLink para su GV300CAN, ya sea aprovisionamiento por SMS o la herramienta de PC del fabricante. Consulte la documentación de QuecLink para la sintaxis de comandos según su firmware.
2. Ingrese la dirección del servidor Plaspy como el dominio d.plaspy.com o la IP 54.85.159.138 en el campo de configuración de servidor.
3. Configure el puerto del servidor a 8888, que es el puerto compartido que Plaspy usa para todos los dispositivos.
4. Elija UDP o TCP en el dispositivo si su firmware o operador requiere selección de transporte.
5. Configure el APN y credenciales si el dispositivo usará datos GPRS para el reporte.
6. Aplique o guarde la configuración y reinicie el dispositivo si el firmware exige reboot para que los cambios surtan efecto.
7. Valide que el dispositivo reporte a Plaspy verificando la llegada del equipo y la telemetría en su cuenta Plaspy o mediante registros durante las pruebas iniciales.

Si va a usar comandos SMS como los que se muestran en los ejemplos más abajo, envíelos en el orden indicado y verifique las respuestas del rastreador después de cada paso.

## Comandos de configuración de ejemplo

El GV300CAN puede configurarse mediante comandos de aprovisionamiento SMS. Los siguientes comandos públicos aparecen en la documentación del fabricante. La contraseña por defecto usada en estos ejemplos es queclink. Envíe cada comando como un SMS al número del dispositivo. Mantenga el orden para la configuración inicial.

1. Paso opcional de restauración de fábrica cuando sea necesario
```
AT+GTRTO=queclink,4,,,,,,FFFF$
```
2. Establecer la zona horaria a UTC 0
```
AT+GTTMA=queclink,+,0,0,0,,,,,,FFFF$
```
3. Configurar el APN del operador
```
AT+GTBSI=queclink,{{apn}},{{apnu}},{{apnp}},,,,,FFFF$
```
- {{apn}} es el APN del operador móvil
- {{apnu}} es el usuario del APN si lo requiere el operador
- {{apnp}} es la contraseña del APN si lo requiere el operador

4. Establecer el servidor GPRS a Plaspy (se proveen dominio e IP, puerto incluido)
```
AT+GTSRI=queclink,4,,1,d.plaspy.com,8888,54.85.159.138,8888,,0,0,0,,,,FFFF$
```
5. Fijar intervalo de actualizaciones a 60 segundos
```
AT+GTFRI=queclink,1,1,0,0,,,60,60,60,60,7F,40,0,,,FFFF$
```
6. Activar notificación de botón SOS en la entrada 2
```
AT+GTSOS=queclink,2,2,,0,0,0,0,0,0,,,FFFF$
```

Envíe estos comandos SMS desde un número de gestión o una herramienta de aprovisionamiento según corresponda. Verifique que el rastreador responda con mensajes de confirmación y luego confirme el reporte en Plaspy.

## Notas de configuración

- Los comandos y la sintaxis pueden variar según la versión de firmware y la revisión de hardware del GV300CAN; siempre confirme con las notas de firmware de su dispositivo.
- El aprovisionamiento por SMS se muestra porque forma parte de la guía pública del fabricante; también puede usar las herramientas de configuración de QuecLink cuando estén disponibles.
- Elija UDP o TCP según la fiabilidad del operador y las opciones de transporte que soporte su firmware; Plaspy acepta cualquiera en el puerto compartido.
- Los comandos de ejemplo usan la contraseña por defecto queclink tal como aparece en los ejemplos públicos; cambie las contraseñas del dispositivo tras el aprovisionamiento cuando corresponda por seguridad.
- Use el comando de restauración de fábrica solo cuando sea necesario, por ejemplo durante el aprovisionamiento inicial o para resolver problemas.

## Por qué usar Plaspy con esta configuración

Usar el GV300CAN con Plaspy ofrece a flotas y operadores logísticos una vía práctica para recopilar posiciones GNSS, telemetría CANBus y alertas por eventos en una única plataforma. Con ajustes de servidor compartidos y detección automática de protocolo, el alta de dispositivos se simplifica para que los equipos puedan concentrarse en validar APN y transporte, ajustar los intervalos de reporte y activar las alarmas y entradas relevantes para sus procesos.

Para saber más sobre Plaspy y cómo maneja la ingestión de dispositivos y la telemática de flotas visite https://www.plaspy.com. Para obtener los comandos específicos más recientes, notas de firmware y la guía oficial verifique siempre los detalles de configuración en el sitio del fabricante https://www.queclink.com/ ya que el comportamiento del firmware y los métodos de configuración pueden cambiar con el tiempo.
