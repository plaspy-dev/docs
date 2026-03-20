---
slug: /skypatrol/tt_9200/protocol
id: tt_9200-protocol
sidebar_label: Protocol
title: SkyPatrol - TT 9200 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del rastreador SkyPatrol TT 9200 y su comunicación con Plaspy para seguimiento de flotas y activos
keywords:
  - Protocolo SkyPatrol TT 9200
  - Protocolo GPS SkyPatrol TT 9200
  - Protocolo de rastreo SkyPatrol TT 9200
  - Protocolo SkyPatrol EDDIE+
  - Compatibilidad TT 9200 Plaspy
  - Protocolo de rastreador GPS Plaspy
  - Rastreo de vehículos Plaspy
  - Protocolo de comunicación TT 9200
  - Rastreador GPS SkyPatrol
  - Protocolo de geocercas TT 9200
---

# SkyPatrol - Protocolo TT 9200

Esta página describe el contexto público del protocolo para usar el rastreador SkyPatrol TT 9200 con Plaspy. Resume cómo el dispositivo se comunica con Plaspy, el papel del protocolo de reporte del equipo y consideraciones prácticas para configurar el TT 9200 y que reporte posiciones, eventos de geocerca, contadores y telemetría a un servidor Plaspy. El TT 9200 combina chipsets GPS modernos con el protocolo personalizado SkyPatrol EDDIE+ y soporta funciones como geocercas circulares y poligonales, geocercas de ruta, múltiples contadores y recepción GPS de alta sensibilidad.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador, aunque el comportamiento exacto puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante. Los dispositivos configurados para reportar al endpoint de Plaspy serán aceptados en el mismo puerto de servidor usado para todos los equipos. Datos públicos de conexión de Plaspy: el dominio del endpoint es d.plaspy.com, la IP conocida es 54.85.159.138 y Plaspy escucha en el puerto 8888. El TT 9200 puede configurarse para usar UDP o TCP en el puerto 8888, y Plaspy detecta automáticamente el protocolo cuando el dispositivo reporta a la plataforma.

## Visión general del protocolo

El TT 9200 utiliza el protocolo personalizado EDDIE+ de SkyPatrol junto con reportes estándar por celular para enviar datos de ubicación y eventos a una plataforma backend. El protocolo define cómo el rastreador empaqueta identificadores, posiciones, eventos de geocerca y contadores, y reportes de estado para que un servidor como Plaspy pueda interpretarlos y presentarlos a los usuarios.

- Transporta la identidad del dispositivo y actualizaciones periódicas de ubicación para que Plaspy asocie cada reporte con el activo correcto.
- Transmite eventos de geocerca y de ruta que permiten a Plaspy activar alertas de límites y reproducir historial.
- Envía información de contadores y estado que puede visualizarse y analizarse en los paneles de Plaspy.
- Soporta patrones de reporte de bajo consumo que ayudan al TT 9200 a alcanzar una larga autonomía de batería.
- Funciona sobre transporte celular estándar, por lo que el dispositivo puede reportar globalmente usando el módem cuatribanda integrado.

## Cómo detecta Plaspy el protocolo

Plaspy acepta reportes entrantes en un único endpoint y puerto compartidos y utiliza detección automática para reconocer el protocolo del rastreador utilizado. Cuando un TT 9200 está correctamente configurado para reportar a Plaspy, por lo general no es necesario seleccionar el protocolo manualmente dentro de la plataforma.

- Configure el servidor del dispositivo a d.plaspy.com o a la IP de Plaspy 54.85.159.138 y el puerto 8888.
- Seleccione UDP o TCP en el puerto 8888 según el firmware del dispositivo y las condiciones de red.
- Asegúrese de que el dispositivo envíe su identificador único para que Plaspy pueda asociar los reportes con la cuenta correcta.
- Plaspy detecta automáticamente el protocolo del rastreador cuando llegan reportes válidos al puerto compartido utilizado por todos los dispositivos.
- Si la detección automática falla, verifique la configuración del dispositivo, el firmware y que el módem tenga conectividad de red.

## Transporte y contexto de conexión

Los ajustes de conexión determinan cómo el TT 9200 alcanza a Plaspy, pero no cambian la semántica de alto nivel del protocolo EDDIE+. El dispositivo puede usar UDP o TCP en el puerto 8888 según el soporte y la configuración elegida. Apuntar el equipo al dominio o IP de Plaspy con el puerto correcto es el paso esencial para que el servidor lo descubra.

- El dominio del servidor Plaspy para reportes es d.plaspy.com.
- La IP del servidor Plaspy conocida en la documentación pública es 54.85.159.138.
- Plaspy escucha en el puerto 8888 y todos los dispositivos soportados por Plaspy usan este mismo puerto.
- El TT 9200 puede configurarse para transporte UDP o TCP en el puerto 8888.
- El APN del operador y la provisión de la SIM afectan si el rastreador puede alcanzar Plaspy a través de la red móvil.

## Notas de compatibilidad del protocolo

- Las revisiones de firmware del fabricante pueden cambiar la cadencia de mensajes, los campos disponibles y el comportamiento de las funciones.
- Revisiones de hardware o variantes regionales del TT 9200 pueden implementar funciones de manera distinta.
- Algunas funciones avanzadas, como un gran número de geocercas almacenadas en el dispositivo o tipos especiales de contadores, pueden requerir soporte de firmware específico.
- La elección entre UDP y TCP puede influir en el comportamiento de entrega de mensajes y debe ajustarse a las capacidades del dispositivo.
- Restricciones del operador de red y configuraciones del APN pueden afectar la conectividad a d.plaspy.com o a la IP indicada.
- Siempre valide el comportamiento del dispositivo con la documentación y las notas de versión actuales de SkyPatrol.

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación del TT 9200 ayuda a administradores e integradores a configurar correctamente los equipos, solucionar problemas de conectividad o faltantes de reporte, y asegurar que las funciones de geocercas y contadores se comporten como se espera en Plaspy.

- Garantiza que la configuración inicial apunte los dispositivos a d.plaspy.com o a la IP y puerto 8888.
- Ayuda a diagnosticar si los problemas están relacionados con la selección de transporte UDP versus TCP o con la SIM y la configuración del APN.
- Aclara cómo características del equipo como geocercas y contadores se mapean a eventos y alertas en Plaspy.
- Facilita la planificación de actualizaciones de firmware y cambios de funciones que afectan el comportamiento de reporte.
- Mejora la confiabilidad a largo plazo al alinear los ajustes del dispositivo con las expectativas de detección de la plataforma.

## Por qué usar Plaspy con este protocolo

Usar Plaspy con el SkyPatrol TT 9200 ofrece una forma directa de centralizar el rastreo, la supervisión de geocercas y la telemetría basada en contadores desde dispositivos desplegados en distintas regiones. El soporte global GSM del TT 9200, su diseño resistente y las capacidades de reporte EDDIE+ lo hacen adecuado para seguimiento de flotas, activos y personal, beneficiándose de una plataforma que reconoce y procesa automáticamente los reportes del dispositivo.

Si desea saber más sobre cómo Plaspy trabaja con dispositivos como el SkyPatrol TT 9200 visite https://www.plaspy.com. Para obtener los detalles más precisos y actuales sobre protocolos del dispositivo, comportamiento del firmware y características específicas de implementación, verifique la información en el sitio del fabricante https://www.skypatrol.com/.
