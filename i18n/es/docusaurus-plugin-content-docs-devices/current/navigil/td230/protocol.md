---
slug: /navigil/td230/protocol
id: td230-protocol
sidebar_label: Protocol
title: Navigil - TD230 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del rastreador GPS Navigil TD230 y su comunicación con Plaspy mediante ajustes de conexión compartida
keywords:
  - Protocolo Navigil TD230
  - Protocolo GPS Navigil TD230
  - Protocolo Navigil TD230 Plaspy
  - Protocolo de comunicación Navigil TD230
  - Protocolo de rastreo TD230
  - Protocolo rastreador GPS Navigil
  - TD230 firmware TG2
  - Rastreo de vehículos Navigil
  - Rastreo de flotas TD230
  - Compatibilidad rastreador GPS Plaspy
---

# Navigil - Protocolo TD230

Esta página describe el contexto público del protocolo utilizado por el rastreador Navigil TD230 con Plaspy. Explica de forma general cómo se comunica el dispositivo con Plaspy, qué papel juega el protocolo de reporte del rastreador y qué aspectos debe considerar al configurar dispositivos TD230 para enviar posiciones y eventos al backend de Plaspy.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el dispositivo reporta a su endpoint. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante. El TD230 suele entregarse con firmware TG2 listo para producción, que incluye soporte para geocercas, monitoreo del estado del vehículo, reporte a servidor, ahorro de energía, actualizaciones OTA y un SDK para personalizaciones, todos los cuales pueden influir en la forma en que se reportan los datos.

## Resumen del protocolo

El protocolo de comunicación del TD230 define cómo el dispositivo empaqueta la información de ubicación, estado y eventos y la envía a un servidor remoto. Para la integración con Plaspy, los aspectos públicos del protocolo determinan cómo se identifica el rastreador, con qué frecuencia reporta y qué tipos de eventos puede procesar la plataforma.

- Permite que el rastreador entregue posiciones GPS y estado del dispositivo a un endpoint de Plaspy para que la ubicación y los eventos sean utilizables.
- Transporta eventos de geocerca, información del estado del vehículo y reportes periódicos que el sistema Plaspy mapea a la telemetría del dispositivo.
- Soporta funciones impulsadas por firmware, como intervalos de reporte para ahorro de energía y eventos programados de activación que afectan el momento de envío de los mensajes.
- Permite que el fabricante o integrador gestione actualizaciones y cambios de configuración por aire, lo que puede modificar el comportamiento en tiempo de ejecución.
- Funciona con personalizaciones del SDK del dispositivo que pueden añadir o alterar los tipos de mensajes que el TD230 envía a un servidor.

## Cómo detecta Plaspy el protocolo

Plaspy recibe el tráfico de dispositivos en un único endpoint y puerto compartidos y determina automáticamente cómo interpretar los mensajes entrantes. Cuando un TD230 se configura para reportar a Plaspy, la plataforma usa el tráfico inicial del dispositivo y patrones de compatibilidad conocidos para seleccionar la lógica de manejo adecuada sin que el usuario tenga que elegir manualmente un protocolo.

- Los dispositivos deben configurarse para reportar al dominio de servidor de Plaspy d.plaspy.com o a la IP del servidor de Plaspy 54.85.159.138.
- Plaspy escucha tráfico en el puerto 8888 y utiliza ese mismo puerto para todos los dispositivos compatibles.
- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 según el soporte del dispositivo y la preferencia del integrador.
- En la mayoría de los casos no es necesario seleccionar un protocolo dentro de Plaspy si el TD230 está correctamente apuntado al endpoint de Plaspy.
- Plaspy detecta automáticamente el protocolo del rastreador cuando llega tráfico válido del dispositivo al endpoint compartido.

## Transporte y contexto de conexión

Conectar un TD230 a Plaspy es principalmente cuestión de apuntar el dispositivo al servidor correcto y usar un protocolo de transporte apropiado. El dispositivo soporta modos de red estándar que permiten a los integradores elegir entre UDP o TCP según criterios de confiabilidad y consumo de energía.

- Los TD230 pueden configurarse para usar UDP o TCP en el puerto 8888 para el reporte.
- Plaspy acepta tráfico dirigido a d.plaspy.com o directamente a 54.85.159.138 en el puerto 8888.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la configuración de una flota.
- La elección del transporte puede influir en el consumo de batería y en la fiabilidad de entrega según el firmware del dispositivo y las condiciones de la red.
- Asegúrese de que las reglas de firewall y de red permitan tráfico saliente desde los dispositivos hacia d.plaspy.com o 54.85.159.138 en el puerto 8888.

## Notas sobre compatibilidad del protocolo

- Variantes de firmware como la versión TG2 del TD230 y las actualizaciones del fabricante pueden cambiar el tiempo de los mensajes, los tipos de eventos o los campos opcionales.
- Las revisiones de hardware y configuraciones específicas no suelen cambiar el protocolo de red, pero pueden acompañar cambios de firmware que sí lo hagan.
- Las personalizaciones del SDK del fabricante o firmware rebrandeado pueden añadir características específicas del dispositivo que afectan lo que el rastreador reporta a Plaspy.
- Elegir UDP o TCP modifica las características de entrega; valide qué transporte soporta y prefiere su compilación de firmware.
- Las actualizaciones OTA pueden alterar el comportamiento del protocolo con el tiempo, por lo que confirme el comportamiento tras las actualizaciones de firmware.
- Valide siempre el comportamiento real del dispositivo con la documentación del fabricante al planear despliegues o resolver problemas.

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación del TD230 ayuda a asegurar una integración fluida con Plaspy, facilita la resolución de problemas y permite un comportamiento operativo predecible en toda la flota. Aunque Plaspy detecta protocolos automáticamente, conocer lo que el rastreador debe enviar ayuda a diagnosticar problemas y optimizar la configuración del dispositivo.

- Configuración más rápida al confirmar que el dispositivo apunta a d.plaspy.com o 54.85.159.138 en el puerto 8888 y utiliza el transporte previsto.
- Resolución de problemas más efectiva al poder correlacionar eventos del dispositivo, como disparos de geocerca y ciclos de suspensión/activación, con los mensajes recibidos por el servidor.
- Mejor gestión de batería al alinear los intervalos de reporte y las funciones de ahorro de energía con las necesidades operativas.
- Planificación más clara de actualizaciones OTA y despliegues de firmware que pueden cambiar la forma en que se reportan los datos a Plaspy.
- Comunicación más sencilla con el fabricante o integrador cuando pueda describir qué tipos de mensajes o comportamientos están involucrados.

## Por qué usar Plaspy con este protocolo

Usar un Navigil TD230 con Plaspy ofrece una combinación práctica para organizaciones que necesitan reporte de ubicación confiable, detección de geocercas y larga duración de batería en aplicaciones de rastreo embebido. El modelo de endpoint compartido de Plaspy simplifica la incorporación de dispositivos y permite a los integradores centrarse en la colocación del dispositivo, la elección de firmware y las políticas de reporte en lugar de configurar puertos por dispositivo.

Si desea saber más sobre cómo Plaspy maneja conexiones de dispositivos y gestión de flotas puede visitar https://www.plaspy.com. Para detalles específicos del protocolo del dispositivo, notas de firmware y documentación de producto, verifique siempre la información en el sitio del fabricante http://www.navigil.com/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
