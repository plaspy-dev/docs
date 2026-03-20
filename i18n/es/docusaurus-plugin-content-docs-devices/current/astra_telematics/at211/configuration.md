---
slug: /astra_telematics/at211/configuration
id: at211-configuration
sidebar_label: Configuration
title: Astra Telematics - AT211 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el Astra Telematics AT211 con Plaspy, incluye ajustes de servidor, comandos SMS y flujo de instalación
keywords:
  - Astra Telematics AT211 configuración
  - AT211 configuración para Plaspy
  - Astra AT211 configuración de servidor
  - AT211 configuración rastreador GPS
  - AT211 configuración SMS
  - Astra Telematics configuración GPS
  - AT211 configuración GPRS
  - AT211 configuración plataforma de rastreo
  - AT211 configuración telemetría
  - AT211 configuración de seguimiento de flota
---

# Astra Telematics - Configuración del AT211

Esta página documenta el contexto público de configuración para usar el Astra Telematics AT211 con Plaspy. Se concentra en los ajustes de servidor compartidos y los pasos prácticos de instalación que permiten al AT211 reportar ubicación y telemetría a la plataforma Plaspy. Cuando los comandos del fabricante o la configuración por SMS son públicos, se incluyen ejemplos para ayudarle a dejar el dispositivo listo para ser detectado y gestionado en Plaspy.

Plaspy emplea endpoints de servidor compartidos y un único puerto para los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta. Los pasos de configuración del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación o las herramientas del proveedor; el AT211 puede configurarse por comandos SMS o mediante software del vendedor, por lo que siempre verifique los pasos finales con la documentación de Astra Telematics para su variante de firmware y hardware.

## Resumen de configuración

La configuración prepara el AT211 para comunicarse de forma fiable con Plaspy definiendo el APN correcto y el endpoint del servidor, y confirmando el transporte y la conectividad. Las acciones públicas de configuración suelen incluir establecer el APN del operador, proporcionar credenciales APN opcionales y apuntar el dispositivo al servidor y puerto de Plaspy para que la plataforma reciba actualizaciones de ubicación y eventos.

- Definir el APN del operador móvil y, si corresponde, el usuario y la contraseña del APN para que el rastreador establezca datos GPRS.
- Apuntar el rastreador al endpoint de servidor de Plaspy para que las correcciones GNSS y la telemetría fluyan hacia la plataforma.
- Configurar el transporte (UDP o TCP) y el puerto común de Plaspy para que el dispositivo entregue paquetes correctamente.
- Validar la conectividad y que el dispositivo aparezca en Plaspy, luego confirmar el envío de eventos y ubicaciones.
- Utilizar los métodos disponibles del fabricante, como comandos SMS o herramientas oficiales, según la guía de firmware.

## Ajustes del servidor de Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte: el dispositivo puede configurarse usando UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta

Nota: Plaspy usa el mismo puerto para todos los dispositivos soportados y confía en la detección automática de protocolo para identificar el protocolo del rastreador.

## Requisitos previos antes de la configuración

- Un AT211 alimentado e instalado o conectado a una fuente de bancada y accesible para la configuración.
- Una tarjeta SIM activa con plan de datos y el APN correcto del operador para datos GPRS o LTE.
- Acceso a los métodos de configuración de Astra Telematics para el AT211, como soporte de comandos SMS, software del proveedor o herramienta de instalador.
- Conocimientos básicos de la interfaz de configuración del dispositivo (sintaxis SMS o app) y las credenciales APN que se requieran.
- Un método para recibir las respuestas del dispositivo durante la configuración, por ejemplo un teléfono para recibir SMS o registros del software del proveedor.
- Confirmación de la versión de firmware del dispositivo cuando sea posible, ya que los comandos y el comportamiento pueden variar entre versiones.

## Cómo se conecta este rastreador a Plaspy

Una vez configurado, el AT211 envía correcciones GNSS y telemetría del dispositivo al endpoint y puerto compartidos de Plaspy para que los responsables de flota puedan monitorear los activos en tiempo real. El dispositivo usa el APN configurado para establecer una sesión de datos y luego abre una conexión TCP o UDP al endpoint de Plaspy para transmitir posición, entradas y mensajes de eventos.

- El rastreador se configura para reportar al endpoint compartido de Plaspy d.plaspy.com (o a la IP 54.85.159.138) en el puerto 8888.
- La ubicación GNSS y la telemetría del dispositivo se envían vía GSM/GPRS o tecnologías celulares compatibles hacia Plaspy.
- Eventos como movimiento, cambios en entradas o condiciones de respaldo de batería se transmiten a la plataforma para alertas e informes.
- Plaspy detecta automáticamente el protocolo del dispositivo cuando el AT211 se conecta al puerto compartido, por lo que no es necesario seleccionar el protocolo manualmente en la plataforma.
- Una vez validado el reporte, el dispositivo aparecerá en Plaspy y los flujos de telemetría estarán disponibles para el monitoreo operativo.

## Flujo de configuración habitual

1. Acceda al método oficial de configuración de Astra Telematics para el AT211 (comandos SMS, app del proveedor o herramienta del fabricante) y confirme que el dispositivo responde.
2. Configure el APN del operador en el dispositivo (y el usuario/contraseña del APN si se requieren) para que el rastreador pueda establecer una conexión de datos GPRS/LTE.
3. Ingrese la dirección del servidor Plaspy usando el dominio d.plaspy.com o la IP 54.85.159.138 según lo soporte el dispositivo.
4. Establezca el puerto del servidor en 8888 y seleccione UDP o TCP si el dispositivo exige seleccionar el transporte explícitamente.
5. Aplique o guarde la configuración según el proceso del fabricante y reinicie el dispositivo si el firmware lo requiere.
6. Valide la conectividad confirmando que el dispositivo establece una sesión y que reporta a Plaspy; revise la plataforma Plaspy para la primera posición reportada y los mensajes de estado.
7. Si el reporte falla, revise la configuración APN, la conectividad de la SIM y los registros o respuestas SMS del fabricante para solucionar el problema.

## Ejemplos de comandos de configuración

El AT211 soporta configuración vía SMS. Los siguientes comandos SMS públicos figuran en la guía del fabricante. Envíe cada comando como mensaje de texto estándar al dispositivo en el orden mostrado al realizar la configuración inicial.

- Establecer el APN del operador (reemplace {{apn}} por el APN de su operador):
```text
$APAD,{{apn}}
```

- (Opcional) Establecer el usuario del APN (reemplace {{apnu}} por el usuario del APN):
```text
$APUN,{{apnu}}
```

- (Opcional) Establecer la contraseña del APN (reemplace {{apnp}} por la contraseña del APN):
```text
$APPW,{{apnp}}
```

- Configurar el servidor GPRS a la IP del servidor Plaspy:
```text
$IPAD,54.85.159.138
```

- Configurar el puerto del servidor al puerto de Plaspy:
```text
$PORT,8888
```

Notas sobre los marcadores:
- {{apn}} es la cadena del APN proporcionada por su operador móvil.
- {{apnu}} es el usuario del APN cuando la operadora lo requiera.
- {{apnp}} es la contraseña del APN cuando la operadora lo requiera.

Si su instalación requiere seleccionar UDP o TCP y el firmware del AT211 exige un comando explícito de transporte, utilice la herramienta del fabricante o la sintaxis SMS provista por Astra Telematics para seleccionar el transporte. Esos comandos de transporte no forman parte del conjunto público de SMS mostrado arriba; consulte la documentación oficial de Astra para la sintaxis específica según el transporte.

## Notas sobre la configuración

- Las revisiones de firmware y hardware pueden cambiar los comandos disponibles y el comportamiento; siempre verifique los comandos contra la versión de firmware del AT211 que se suministró con su dispositivo.
- La configuración por SMS es un método público para el AT211, pero también pueden estar disponibles herramientas del proveedor o una conexión por cable (DB9) según su kit de instalador y firmware.
- Elija UDP o TCP según las condiciones de red y la preferencia del instalador; Plaspy acepta ambos en el puerto 8888 pero la configuración del rastreador debe coincidir con esa elección.
- Las credenciales del APN son específicas del operador; si su SIM requiere usuario o contraseña, configure {{apnu}} y {{apnp}} tal como se indicó.
- Plaspy usa el mismo puerto para todos los dispositivos soportados y detecta automáticamente el protocolo cuando el dispositivo se conecta, lo que simplifica la configuración en la plataforma.

## Por qué usar Plaspy con esta configuración

Configurar el Astra Telematics AT211 para reportar a Plaspy ofrece un camino sencillo hacia el monitoreo en tiempo real de ubicación, telemetría y eventos para maquinaria y equipos. Con el endpoint y puerto compartidos de Plaspy y la detección automática de protocolo, integrar el AT211 en los flujos de trabajo de monitoreo de flota es principalmente asegurarse de que el APN y los ajustes de servidor en el dispositivo sean correctos y validar que el dispositivo aparezca en la plataforma.

Para conocer más sobre Plaspy y las capacidades de la plataforma, visite https://www.plaspy.com. Para los métodos de configuración específicos más recientes, detalles de firmware y la guía del fabricante para el AT211, verifique la información con Astra Telematics en https://astratelematics.com/.
