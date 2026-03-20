---
slug: /skypatrol/sp4824/configuration
id: sp4824-configuration
sidebar_label: Configuration
title: SkyPatrol - SP4824 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración para conectar el rastreador SkyPatrol SP4824 a Plaspy usando ajustes de servidor compartido
keywords:
  - configuración SkyPatrol SP4824
  - configuración SP4824 para Plaspy
  - configuración del servidor SkyPatrol
  - configuración de rastreadores Plaspy
  - guía de configuración de rastreador GPS
  - configuración de plataforma de rastreo vehicular
  - integración de telemetría SP4824
  - configuración GPS para flotas
  - configuración de plataforma GPS SkyPatrol
  - configuración de software de rastreo SP4824
---

# SkyPatrol - Configuración del SP4824

Esta página describe el contexto público de configuración para usar el rastreador SkyPatrol SP4824 con Plaspy. Resume los ajustes de servidor prácticos y los pasos comunes que instaladores o integradores siguen para apuntar el dispositivo a Plaspy y permitir la ingestión en tiempo real de posiciones y telemetría. Úselo como referencia de despliegue junto con la documentación oficial del fabricante.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador en la ingestión, mientras que los pasos en el lado del fabricante pueden variar según firmware, revisión de hardware, tipo de instalación y herramientas del proveedor. El SP4824 es un rastreador vehicular moderno con LTE 4G Cat1 y fallback 2G, GNSS de alta sensibilidad, audio bidireccional, batería interna de respaldo, interfaces serial y 1-wire; estas capacidades alimentan datos a Plaspy una vez que el dispositivo está configurado para reportar al endpoint de Plaspy.

## Panorama de la configuración

Configurar el SP4824 para Plaspy consiste principalmente en apuntar el equipo al endpoint compartido de Plaspy y asegurarse de que tenga conectividad de red y los ajustes de transporte adecuados. Una vez conectado, el dispositivo transmite ubicación, eventos de E/S y datos seriales a Plaspy para mapas en vivo, alertas e informes.

- Configure el dispositivo para que reporte al endpoint y puerto del servidor de Plaspy para que Plaspy pueda ingerir GNSS y telemetría.
- Confirme que el dispositivo tenga conexión celular funcional y una SIM válida para que LTE 4G Cat1 o el fallback 2G puedan transmitir datos.
- Seleccione el protocolo de transporte que el dispositivo requiera y asegúrese de que use el puerto 8888 para alcanzar Plaspy.
- Guarde y aplique la configuración, luego valide que el SP4824 aparezca en la plataforma Plaspy y envíe actualizaciones de posición regulares.
- Use el puerto serial y la interfaz 1-wire únicamente después de confirmar que el reporte básico a Plaspy funciona correctamente.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP
- Detección automática de protocolo en Plaspy

Estos valores son los endpoints públicos y el puerto de Plaspy que debe usar al configurar el SP4824. Plaspy utiliza el mismo puerto para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, por lo que indicar correctamente el endpoint y el puerto es la tarea clave de configuración.

## Requisitos típicos antes de la configuración

- Verifique que la alimentación del dispositivo y la instalación estén completas, incluyendo cualquier cableado de ignición o alimentación según las directrices de instalación.
- Servicio de red móvil válido y una tarjeta SIM activada compatible con LTE 4G Cat1 y 2G para fallback.
- Acceso a la herramienta de configuración oficial de SkyPatrol o a la interfaz que proporcione el proveedor para el SP4824.
- Tener a mano el IMEI o el identificador del dispositivo para registrar el equipo en Plaspy si su flujo de trabajo de cuenta lo requiere.
- Revisar el estado de firmware y anotarlo para que los instaladores consulten las instrucciones del fabricante en caso de pasos específicos por versión de firmware.
- Cuenta de Plaspy o acceso para verificar la visibilidad del dispositivo una vez que el rastreador reporte al servidor de Plaspy.

## Cómo se conecta este rastreador a Plaspy

El SP4824 se configura para enviar posiciones GNSS y telemetría periférica al endpoint y puerto compartidos de Plaspy, donde la plataforma ingiere los mensajes y los asocia con los registros de dispositivo. Plaspy detecta automáticamente el protocolo y procesa las actualizaciones de ubicación, eventos y datos seriales para monitoreo en tiempo real.

- El dispositivo envía coordenadas GNSS a d.plaspy.com en el puerto 8888 usando UDP o TCP según la selección en el equipo.
- La telemetría de entradas digitales y analógicas se envía a Plaspy y aparece como eventos o atributos en la plataforma.
- Los mensajes del puerto serial y los datos del sensor 1-wire se reenvían a través del mismo canal de reporte hacia Plaspy.
- Plaspy realiza detección automática de protocolo para que la plataforma interprete los mensajes del rastreador sin necesidad de seleccionar el protocolo por dispositivo en el servidor.
- Los reportes regulares de posición y los mensajes de evento habilitan geocercas, alertas e informes históricos en Plaspy.

## Flujo de trabajo de configuración común

1. Acceda al método o software oficial de configuración del SkyPatrol SP4824 proporcionado por el fabricante o el proveedor instalador.
2. En las opciones de red o servidor del dispositivo, ingrese el dominio del servidor Plaspy d.plaspy.com o use la IP del servidor 54.85.159.138.
3. Configure el puerto del servidor en 8888, que Plaspy utiliza para todos los dispositivos compatibles.
4. Elija UDP o TCP como transporte si el dispositivo requiere selección explícita del protocolo de transporte.
5. Guarde o aplique la configuración en la herramienta del fabricante y confirme que los ajustes se escribieron en el dispositivo.
6. Reinicie el SP4824 si el dispositivo o el firmware lo requieren para que los ajustes de red surtan efecto.
7. Valide la conectividad confirmando que el dispositivo reporte con éxito a Plaspy y aparezca en su cuenta Plaspy con actualizaciones de ubicación.

## Ejemplos de comandos de configuración

Los comandos exactos y el método de configuración varían según el firmware de SkyPatrol y la herramienta oficial suministrada con el SP4824. Los fabricantes normalmente proporcionan utilitarios USB, serial o basados en web y, en ocasiones, conjuntos de comandos SMS para el aprovisionamiento inicial. Consulte la documentación de SkyPatrol o la guía del instalador del proveedor para la sintaxis precisa y el flujo recomendado para su versión de firmware.

Si dispone de una lista de comandos de SkyPatrol, aplíquelos en el orden que recomiende el fabricante. La guía típica de configuración indicará cómo establecer el dominio o la IP del servidor, el puerto del servidor y el protocolo de transporte antes de guardar y reiniciar el dispositivo.

## Notas de configuración

- Las diferencias de firmware pueden cambiar los nombres exactos de los menús o la sintaxis de comandos usados por las herramientas de SkyPatrol; siempre revise las notas del firmware del SP4824.
- La elección entre UDP y TCP depende de la preferencia del instalador y del comportamiento de la red; ambos transportes son compatibles con Plaspy en el puerto 8888.
- Las variantes del dispositivo según mercado y las revisiones de hardware pueden alterar las interfaces disponibles o los ajustes por defecto.
- Mantenga un registro del IMEI y de los identificadores del dispositivo antes del aprovisionamiento para poder emparejar los equipos en Plaspy una vez que reporten.
- La documentación del fabricante es la fuente autorizada para pasos específicos del dispositivo, comandos SMS o procedimientos de restablecimiento.

## Por qué usar Plaspy con esta configuración

Usar el SP4824 con Plaspy ofrece a las organizaciones una vía práctica para ingresar datos GNSS y de telemetría confiables en una sola plataforma para seguimiento en vivo, alertas e informes operativos. Las capacidades del SP4824, como LTE 4G con fallback 2G, batería interna de respaldo, puerto serial e interfaz 1-wire, complementan la ingestión de Plaspy para apoyar la gestión de flotas, flujos anti robo, identificación de conductores y telemetría de sensores.

Learn more about Plaspy and how it ingests device data at https://www.plaspy.com. For the latest device specific configuration methods, firmware behavior, and manufacturer details for the SP4824 consult the official SkyPatrol documentation at https://www.skypatrol.com/ to verify current setup instructions.
