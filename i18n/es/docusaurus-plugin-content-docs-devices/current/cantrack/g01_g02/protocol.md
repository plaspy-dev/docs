---
slug: /cantrack/g01_g02/protocol
id: g01_g02-protocol
sidebar_label: Protocol
title: CanTrack - G01 / G02 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo CanTrack G01 y G02 y su compatibilidad con Plaspy, con ajustes de conexión y notas de integración
keywords:
  - Protocolo CanTrack G01
  - Protocolo CanTrack G02
  - Protocolo GPS CanTrack G01 G02
  - Protocolo rastreador GPS CanTrack
  - Protocolo de rastreo CanTrack
  - Compatibilidad G01 G02 con Plaspy
  - Protocolo rastreador Plaspy
  - Rastreo de vehículos CanTrack
  - Rastreador GPS GPRS CanTrack
  - Integración rastreador GPS Plaspy
---

# CanTrack - Protocolo G01 / G02

Esta página ofrece una visión pública y no sensible del contexto de comunicación para usar los rastreadores GPS CanTrack G01 y G02 con Plaspy. Explica cómo el dispositivo envía posición y estado a través de redes móviles al endpoint de Plaspy, qué papel juega el protocolo del rastreador en esa comunicación y consideraciones prácticas de compatibilidad para una integración exitosa.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo cuando el equipo informa al endpoint de Plaspy. El comportamiento exacto del protocolo y los detalles de los mensajes pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página se mantiene en el nivel de protocolo y conexión y recomienda verificar con la documentación del fabricante.

## Resumen del protocolo

El protocolo del rastreador describe cómo los CanTrack G01 y G02 envían ubicación, alarmas y estado a un servidor remoto. Para la integración con Plaspy, el propósito del protocolo es permitir que el dispositivo se identifique ante el servidor y entregue datos de GPS y telemetría en un formato que el backend pueda utilizar para mapas, alertas e historial.

- Permite la transmisión en tiempo real y periódica de coordenadas GPS y telemetría básica desde el rastreador hasta el servidor
- Transporta mensajes de estado como alertas SOS, eventos de geocerca y notificaciones de batería baja
- Proporciona un identificador que permite a Plaspy asociar los datos entrantes con un dispositivo registrado
- Soporta tanto reporte por SMS a un número autorizado como reporte por GPRS a un servidor de internet para seguimiento en vivo
- Actúa como el contrato entre el firmware del dispositivo y el software del servidor para que los datos se analicen en campos útiles de ubicación, tiempo y eventos

## Cómo detecta Plaspy el protocolo

Plaspy recibe conexiones entrantes de dispositivos en un único endpoint y puerto compartidos y puede reconocer automáticamente el protocolo del rastreador cuando llegan los mensajes. En la mayoría de los casos, un rastreador correctamente configurado que informe al endpoint de Plaspy será detectado sin que el usuario seleccione manualmente el protocolo.

- El dominio del servidor Plaspy es d.plaspy.com y la IP del servidor Plaspy es 54.85.159.138
- Plaspy escucha en el puerto 8888 y todos los dispositivos en Plaspy usan el mismo puerto
- La plataforma detecta automáticamente el protocolo del rastreador cuando se reciben datos en el endpoint compartido
- Normalmente usted solo necesita asegurarse de que el dispositivo apunte al endpoint de Plaspy y use el modo de transporte correcto
- Si un dispositivo está configurado para reportar correctamente a d.plaspy.com en el transporte soportado, Plaspy se encargará de la detección del protocolo en el servidor

## Transporte y contexto de conexión

El modo de conexión y el transporte afectan la forma en que el G01 y G02 se comunican con Plaspy, pero no cambian el papel general del protocolo. Los dispositivos CanTrack pueden usar GPRS para enviar datos a un servidor de internet y muchas implementaciones admiten UDP o TCP según el firmware y la configuración.

- Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888 según el soporte y los ajustes del equipo
- Apuntar el dispositivo a d.plaspy.com o directamente a 54.85.159.138 dirigirá las comunicaciones al endpoint de ingestión de Plaspy
- Todos los dispositivos Plaspy comparten el mismo puerto, por lo que la configuración del puerto es consistente entre modelos
- Se requiere conectividad de red GPRS para el reporte en tiempo real basado en internet hacia Plaspy
- Cuando se utiliza reporte por SMS para alertas o como respaldo, esos mensajes se envían a números de teléfono autorizados en lugar del servidor de Plaspy

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar el contenido de los mensajes, la frecuencia y los eventos disponibles; siempre verifique el comportamiento para su versión de firmware
- Las variantes de hardware o revisiones regionales del mismo modelo a veces incluyen diferencias en el transporte soportado o en los sensores disponibles
- La selección de transporte entre UDP y TCP debe coincidir con la configuración que su firmware soporta
- Los comandos de configuración del fabricante y el control por SMS siguen siendo la fuente autorizada para ajustes en el dispositivo
- Plaspy maneja la detección y el análisis de muchos comportamientos comunes de rastreadores, pero firmware inusual o personalizado puede requerir validación
- Valide la compatibilidad y los pasos de configuración contra la documentación oficial de CanTrack al configurar dispositivos para reportar a Plaspy

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación ayuda a los operadores a configurar los dispositivos correctamente, diagnosticar problemas de reporte y tomar decisiones informadas sobre actualizaciones de firmware y ajustes de transporte. Tener conocimiento práctico del comportamiento del protocolo reduce el tiempo de inactividad y mejora la calidad de los datos de rastreo en Plaspy.

- Asegura que los dispositivos estén configurados para enviar los identificadores esperados y que Plaspy pueda asociar los mensajes con el activo correcto
- Ayuda a acotar problemas de conectividad entre el dispositivo, la red celular y el endpoint de ingestión de Plaspy
- Soporta la selección correcta del transporte cuando los dispositivos ofrecen modos de reporte tanto por UDP como por TCP
- Mejora la resolución de problemas cuando alertas como geocerca, SOS o batería baja no aparecen como se espera
- Informa decisiones sobre actualizaciones de firmware y si cambios en nuevas versiones afectan los datos que se reportan a Plaspy

## Por qué usar Plaspy con este protocolo

Usar el CanTrack G01 o G02 con Plaspy brinda a las organizaciones visibilidad consolidada de ubicaciones, rutas históricas y alertas de eventos en una sola plataforma. Plaspy acepta los reportes del rastreador cuando el dispositivo está configurado para enviar datos al endpoint de Plaspy, lo que permite a los equipos monitorear vehículos y activos con menos diferencias de configuración por dispositivo que gestionar.

Para conocer más sobre cómo Plaspy maneja la conectividad de dispositivos y las funciones a nivel de flota, visite https://www.plaspy.com. Para obtener los detalles más recientes sobre protocolos específicos por dispositivo, notas de firmware e instrucciones del fabricante, verifique la información en el sitio oficial de CanTrack en https://www.cantrackgps.com/ ya que el soporte del protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
