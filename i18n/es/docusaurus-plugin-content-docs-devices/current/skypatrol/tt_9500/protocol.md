---
slug: /skypatrol/tt_9500/protocol
id: tt_9500-protocol
sidebar_label: Protocol
title: SkyPatrol - TT 9500 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo SkyPatrol TT 9500 y cómo el dispositivo se comunica con Plaspy para seguimiento GPS confiable
keywords:
  - protocolo SkyPatrol TT 9500
  - protocolo GPS SkyPatrol TT 9500
  - comunicación SkyPatrol TT 9500
  - protocolo de seguimiento TT 9500
  - protocolo personalizado EDDIE+
  - rastreador compatible con Plaspy
  - protocolo rastreador GPS Plaspy
  - seguimiento de vehículos TT 9500
  - geovalla TT 9500
  - rastreador GPS para gestión de flotas
---

# SkyPatrol - Protocolo TT 9500

Esta página ofrece un resumen del contexto público del protocolo para usar el rastreador SkyPatrol TT 9500 con Plaspy. Describe el papel del protocolo de comunicación del dispositivo, cómo el rastreador informa a Plaspy y qué puede esperar al integrar un TT 9500 en una implementación de Plaspy. El objetivo es brindar información práctica y no sensible que ayude en la planificación y configuración.

Plaspy usa un endpoint y puerto compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el dispositivo informa a ese endpoint. El TT 9500 puede usar el protocolo personalizado EDDIE+ de SkyPatrol para reportes con más funciones, incluyendo geovallas y contadores de eventos. El comportamiento exacto puede variar según la versión de firmware, la revisión de hardware y la configuración del fabricante, por lo que siempre confirme los detalles a nivel de dispositivo cuando tenga dudas.

## Visión general del protocolo

El protocolo que emplea el TT 9500 define cómo el rastreador se identifica, reporta posición y estado, y entrega datos de eventos a un servidor remoto. Para la integración con Plaspy, este protocolo es el puente entre funciones del dispositivo —como geovallas, contadores y control remoto de relés— y los servicios en la nube que presentan esa información.

- Permite que el TT 9500 informe posición, estado e información de eventos a un endpoint remoto
- Transporta eventos de geovalla y de ruta que soportan monitoreo circular, poligonal y basado en recorridos
- Transmite identificadores del dispositivo y contexto de eventos para que Plaspy pueda asociar los mensajes con el activo correcto
- Soporta funciones del dispositivo como control remoto de relés y varios tipos de contadores que reporta el rastreador
- Funciona con las implementaciones específicas de firmware del TT 9500, incluyendo EDDIE+ cuando está disponible

## Cómo Plaspy detecta el protocolo

Plaspy acepta reportes entrantes en un único endpoint compartido e identifica automáticamente el protocolo del rastreador basándose en los datos recibidos y la identificación del dispositivo. En la mayoría de las implementaciones no es necesario seleccionar manualmente un protocolo dentro de Plaspy una vez que el dispositivo está configurado para reportar al endpoint de Plaspy.

- Plaspy escucha en el dominio compartido d.plaspy.com y en la IP pública 54.85.159.138
- Todos los dispositivos en Plaspy usan el mismo puerto de red, lo que simplifica la configuración del equipo
- El TT 9500 puede configurarse para enviar datos mediante UDP o TCP al endpoint de Plaspy
- Cuando un dispositivo correctamente configurado se conecta y reporta, Plaspy detecta automáticamente el protocolo del dispositivo
- La selección manual de protocolo dentro de Plaspy rara vez es necesaria si los reportes del dispositivo llegan correctamente

## Transporte y contexto de conexión

Los ajustes de conexión determinan cómo el dispositivo alcanza Plaspy, pero no cambian el rol del protocolo del dispositivo. El TT 9500 puede configurarse para enviar datos por UDP o TCP según el firmware y la configuración del usuario. Es común apuntar el dispositivo al dominio de Plaspy o directamente a la IP del servidor.

- Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888 según las opciones del dispositivo y el firmware
- Plaspy acepta tráfico en el puerto 8888 para todos los rastreadores soportados, lo que facilita la configuración
- Los dispositivos pueden apuntar a d.plaspy.com o directamente a 54.85.159.138 como endpoint de reporte
- Usar el puerto y endpoint compartidos permite que Plaspy gestione múltiples modelos con ajustes de red consistentes
- Asegúrese de que el transporte elegido esté permitido por la operadora y las políticas de red para garantizar reportes fiables

## Notas sobre compatibilidad del protocolo

- Las variaciones de firmware pueden cambiar cómo se reportan funciones como geovallas o contadores
- Las revisiones de hardware a veces modifican las entradas disponibles o el comportamiento de sensores aunque el nombre del protocolo sea el mismo
- La configuración por parte del fabricante y los campos personalizados pueden variar entre despliegues y regiones
- La elección del modo de transporte TCP frente a UDP puede afectar la latencia y la entrega para algunos tipos de eventos
- Confirme qué funciones del protocolo EDDIE+ están implementadas en la versión de firmware específica de su TT 9500
- Valide los identificadores del dispositivo y el formato de reporte contra la documentación actual del fabricante antes de un despliegue masivo

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación que usa el TT 9500 ayuda a asegurar una configuración precisa, agilizar la resolución de problemas y lograr una operación predecible a largo plazo cuando el dispositivo reporta en Plaspy. Saber cómo el rastreador reporta eventos y estado facilita mapear las capacidades del dispositivo a las funciones de Plaspy e interpretar la telemetría entrante.

- Ayuda a verificar que los eventos de geovalla y las alertas de ruta se reporten como se espera
- Facilita confirmar que los contadores y los comandos de relé sean compatibles y visibles en Plaspy
- Agiliza la resolución de problemas al acotar si los problemas son de red/transporte o de protocolo
- Apoya la planificación de actualizaciones de firmware y cómo podrían cambiar el comportamiento de reporte
- Ayuda a documentar la configuración del dispositivo para implementaciones a nivel de flota

## Por qué usar Plaspy con este protocolo

El SkyPatrol TT 9500 ofrece capacidades robustas de ubicación y eventos que se integran bien con una plataforma capaz de detectar y aceptar reportes automáticamente desde una variedad de rastreadores. Usar Plaspy con el TT 9500 permite a las organizaciones capturar alertas de geovallas, contadores y eventos de relé remoto en un entorno de monitoreo unificado mientras se minimiza la configuración por dispositivo.

Si desea obtener más información sobre Plaspy y cómo maneja los protocolos de dispositivos visite https://www.plaspy.com. Para descripciones más recientes y específicas del protocolo, notas de firmware y detalles de implementación consulte siempre la documentación del fabricante en https://www.skypatrol.com/ para confirmar comportamientos específicos de firmware que puedan afectar la integración.
