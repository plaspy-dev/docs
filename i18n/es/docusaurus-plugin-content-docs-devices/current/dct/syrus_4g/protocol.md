---
slug: /dct/syrus_4g/protocol
id: syrus_4g-protocol
sidebar_label: Protocol
title: DCT - Syrus 4G Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo para integrar DCT Syrus 4G con Plaspy, con guía de conexión y detección
keywords:
  - protocolo DCT Syrus 4G
  - protocolo GPS DCT Syrus 4G
  - compatibilidad Syrus 4G Plaspy
  - protocolo de comunicación Syrus 4G
  - protocolo de rastreo Syrus 4G
  - protocolo rastreador GPS DCT
  - protocolo de dispositivo Plaspy
  - gestión de flotas Syrus 4G
  - telemetría vehicular Syrus 4G
  - telemetría GNSS Syrus 4G
---

# DCT - Protocolo Syrus 4G

Esta página describe el contexto público del protocolo para usar la pasarela telemática DCT Syrus 4G con Plaspy. Explica cómo el dispositivo se comunica con la plataforma Plaspy en términos generales, qué ajustes de conexión utiliza Plaspy públicamente y qué debe considerar al configurar un Syrus 4G para despliegues de flota o IoT. El contenido se centra en hechos de protocolo y conexión verificables públicamente, no en detalles internos de firmware.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando un dispositivo reporta al endpoint de Plaspy. El comportamiento exacto del protocolo y las funciones disponibles pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que debe validar las capacidades específicas del equipo con la documentación de DCT durante la integración y las pruebas.

## Resumen del protocolo

El Syrus 4G envía telemetría, posiciones GNSS y datos de sensores del vehículo a plataformas en la nube como Plaspy usando el protocolo de reporte implementado por DCT. El protocolo define cómo la pasarela se identifica, cómo empaqueta ubicación y telemetría, y cómo reenvía eventos o diagnósticos a un servidor remoto.

- Permite que la pasarela reporte posición, telemetría CAN y datos de sensores a Plaspy para seguimiento en tiempo real y reproducción histórica.
- Transporta información de identidad del dispositivo para que Plaspy pueda asociar la telemetría entrante con el activo y la cuenta correctos.
- Admite reportes periódicos y mensajes basados en eventos para alertas como encendido/apagado, códigos de falla o eventos de geocerca.
- Permite agregación o preprocesamiento de telemetría en el dispositivo antes de enviarla para reducir uso de ancho de banda y mejorar la puntualidad.
- Funciona junto con las funciones de gestión remota del Syrus para actualizaciones OTA y configuración cuando el fabricante lo soporta.

## Cómo Plaspy detecta el protocolo

Plaspy recibe conexiones de dispositivos en un endpoint y puerto compartidos y está diseñado para reconocer automáticamente los protocolos comunes de rastreadores cuando los equipos apuntan correctamente al servidor de Plaspy. Esto reduce la configuración manual dentro de Plaspy en muchos despliegues.

- El dominio del servidor Plaspy para reporte de dispositivos es d.plaspy.com y la IP pública del servidor es 54.85.159.138.
- Plaspy acepta conexiones en el puerto 8888 y todos los dispositivos soportados por Plaspy usan el mismo puerto.
- El Syrus 4G puede configurarse para usar transporte UDP o TCP hacia Plaspy en el puerto 8888 según las opciones del dispositivo y el comportamiento del operador móvil.
- Cuando una instancia Syrus 4G está configurada para reenviar telemetría al endpoint de Plaspy, Plaspy detectará automáticamente el protocolo del rastreador sin que el usuario normalmente tenga que seleccionarlo manualmente.
- Asegúrese de que el dispositivo esté configurado para reportar al endpoint correcto de Plaspy para que la detección automática pueda ocurrir durante el registro y las pruebas iniciales.

## Transporte y contexto de conexión

El contexto de conexión abarca cómo el dispositivo alcanza el endpoint de Plaspy más que el framing de protocolo de bajo nivel. Syrus 4G soporta conectividad celular resiliente y múltiples opciones de transporte, lo que influye en cómo mantiene la sesión con Plaspy.

- El dispositivo puede usar UDP o TCP en el puerto 8888 según la configuración del equipo y las condiciones de la red.
- Los dispositivos pueden apuntarse al servidor Plaspy usando el dominio d.plaspy.com o la dirección IP 54.85.159.138.
- Plaspy utiliza el mismo puerto para todos los dispositivos soportados, lo que simplifica reglas de firewall y NAT para despliegues de flota.
- Las redes celulares, perfiles de SIM y el comportamiento de NAT del operador pueden influir en si TCP o UDP resulta más fiable en una instalación concreta.
- Valide la conectividad permitiendo tráfico saliente hacia el endpoint de Plaspy y confirmando que el dispositivo reporta después de cambios de configuración.

## Notas de compatibilidad del protocolo

- Las revisiones de firmware en Syrus 4G pueden cambiar los campos de telemetría disponibles, el comportamiento de eventos y las funciones opcionales que afectan lo que se informa a Plaspy.
- Las variantes de hardware y opciones accesorias, como respaldo satelital o módulos celulares distintos, pueden modificar los transportes o el conjunto de funciones soportadas.
- La selección de transporte entre UDP y TCP puede ser necesaria para ajustarse a restricciones del operador o para sortear condiciones de red en regiones específicas.
- Configuraciones o pasos de aprovisionamiento por parte del fabricante pueden ser requeridos para habilitar el reenvío a la nube o la integración por API en algunas implementaciones Syrus.
- Siempre pruebe un equipo en un entorno controlado para verificar que la telemetría y los eventos esperados llegan a Plaspy antes de desplegar de forma masiva.
- Consulte los diagnósticos y registros del dispositivo durante la configuración para confirmar que la pasarela está apuntando al endpoint de Plaspy y transmitiendo los mensajes esperados.

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación y el contexto de conexión ayuda a asegurar despliegues confiables, agilizar la resolución de problemas y mapear correctamente la telemetría entre la pasarela Syrus 4G y Plaspy.

- Acelera la configuración inicial asegurando que los dispositivos apunten al endpoint correcto de Plaspy y usen un transporte adecuado.
- Facilita el diagnóstico de problemas de conectividad relacionados con NAT del operador, reglas de firewall o destinos incorrectos.
- Permite confirmar que señales CAN del vehículo, datos de sensores BLE y códigos de diagnóstico se mapean correctamente en la telemetría de Plaspy.
- Apoya la planificación de escalabilidad y resiliencia al clarificar cómo los dispositivos mantienen conexiones y cómo Plaspy recibe y asocia los mensajes.
- Permite tomar decisiones informadas sobre actualizaciones de firmware, configuración remota y accesorios opcionales que puedan afectar los reportes.

## Por qué usar Plaspy con este protocolo

Usar Syrus 4G con Plaspy ofrece a los operadores de flota una plataforma consolidada para rastreo en tiempo real, telemetría vehicular y alertas operativas. Las funciones empresariales de la pasarela, como módems celulares duales, rendimiento GNSS y E/S vehicular avanzada, la hacen adecuada para escenarios exigentes de flota e industria, mientras que Plaspy proporciona un único endpoint y detección automática de protocolo para simplificar la integración.

Si desea saber más sobre cómo Plaspy puede trabajar con dispositivos como el DCT Syrus 4G, visite https://www.plaspy.com. Para el comportamiento de protocolo específico del dispositivo, notas de firmware y detalles de revisión de hardware más recientes, confirme la información actual en el sitio del fabricante https://www.digitalcomtech.com/
