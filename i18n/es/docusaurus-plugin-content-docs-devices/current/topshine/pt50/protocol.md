---
slug: /topshine/pt50/protocol
id: pt50-protocol
sidebar_label: Protocol
title: TopShine - PT50 Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo del TopShine PT50 y su conexión con Plaspy para telemetría y eventos
keywords:
  - Protocolo TopShine PT50
  - TopShine PT50 GPS
  - Compatibilidad PT50 Plaspy
  - Protocolo de rastreo PT50
  - Comunicación TopShine PT50
  - Rastreador de activos PT50
  - Rastreador GPS solar PT50
  - Gestión de flotas PT50
  - TopShine PT50 MQTT
  - Integración dispositivo PT50
---

# TopShine - Protocolo PT50

Esta página resume el contexto público del protocolo para usar el rastreador TopShine PT50 con Plaspy. Se enfoca en cómo el dispositivo se comunica con la plataforma Plaspy en términos generales y no sensibles, y explica los ajustes de conexión prácticos que usted necesita conocer para una integración exitosa.

El PT50 es un rastreador 4G alimentado por panel solar con posicionamiento multimodal y soporte para mensajería MQTT personalizable. Plaspy utiliza ajustes de conexión compartidos para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador; sin embargo, el comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante. Siempre confirme los detalles específicos del dispositivo con la documentación del fabricante cuando sea necesario.

## Resumen del protocolo

El protocolo de reporte del PT50 es el conjunto de comportamientos del dispositivo y los tipos de mensajes que el rastreador usa para identificarse, enviar telemetría de posición y eventos, y recibir mensajes de configuración o control. Para la integración con una plataforma como Plaspy, el protocolo determina cómo se representan y transportan la ubicación, las alarmas y el estado del dispositivo.

- Permite al PT50 reportar posiciones asistidas por GPS, AGPS, LBS y WiFi hacia la plataforma.
- Transporta notificaciones de eventos como alertas de geocerca, SOS, batería baja y detección de movimiento.
- Soporta MQTT como opción personalizable para telemetría e integraciones de sistema junto con el reporte celular directo.
- Proporciona datos de identificación y estado que Plaspy utiliza para asociar los mensajes con un registro de dispositivo.
- Define cómo se entregan las actualizaciones de ubicación periódicas y los eventos bajo demanda a un endpoint central.

## Cómo Plaspy detecta el protocolo

Plaspy acepta telemetría de muchos modelos de rastreadores en un endpoint común y detecta automáticamente el protocolo del equipo, por lo que usted por lo general no necesita seleccionar un protocolo de forma manual. La correcta configuración del dispositivo para apuntar al endpoint de Plaspy asegura que la plataforma pueda ingerir los mensajes y presentar telemetría utilizable.

- El endpoint público de Plaspy es d.plaspy.com y también es accesible en 54.85.159.138.
- Todos los dispositivos en Plaspy usan el mismo puerto de reporte, lo que simplifica la configuración entre modelos.
- La plataforma detecta automáticamente el protocolo del rastreador cuando el dispositivo reporta al endpoint de Plaspy.
- Normalmente usted sólo necesita configurar el APN del dispositivo y la información del endpoint de Plaspy en el equipo.
- Al usar MQTT, los ajustes MQTT del dispositivo deben coincidir con el endpoint de Plaspy y el método de conexión que el rastreador soporte.

## Transporte y contexto de conexión

Las opciones de conexión y transporte determinan cómo los mensajes del PT50 llegan a Plaspy. El PT50 puede usar datos celulares o MQTT sobre su conexión celular para entregar la telemetría. Dependiendo del firmware y la configuración del dispositivo, se puede usar UDP o TCP para enviar mensajes al servicio de Plaspy.

- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 según soporte y configuración del equipo.
- Los dispositivos pueden apuntar al host d.plaspy.com o a la dirección numérica 54.85.159.138 como endpoint de reporte.
- Plaspy escucha en el puerto 8888 para informes de dispositivos y todos los dispositivos soportados comparten este puerto en el lado de la plataforma.
- La mensajería MQTT es soportada por el PT50 como una opción de integración personalizable para flujos de trabajo de plataforma o IoT.
- Verifique el APN y la configuración de red del dispositivo para asegurar conectividad celular antes de probar el reporte a Plaspy.

## Notas de compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar el contenido de los mensajes, los campos disponibles o las preferencias de transporte por defecto. Verifique la versión de firmware del PT50 al solucionar problemas.
- Las revisiones de hardware y las configuraciones opcionales en el equipo pueden afectar qué modos de posicionamiento y sensores están disponibles.
- Algunas implementaciones del PT50 usan MQTT mientras otras usan reporte directo por TCP o UDP; confirme qué transporte se ajusta a su flujo de trabajo.
- Las guías de configuración del fabricante pueden incluir servidores o puertos por defecto distintos; actualice el dispositivo para que apunte al endpoint de Plaspy para la integración.
- Las condiciones de red y la configuración del APN del operador impactan la entrega de mensajes y la latencia en eventos en tiempo real.
- Siempre valide comportamientos críticos como disparos de geocerca y manejo de SOS después de configurar el dispositivo para reportar a Plaspy.

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación del PT50 ayuda a asegurar una configuración confiable, acelerar la resolución de problemas y prever el comportamiento a lo largo de la vida útil del despliegue. Conocer el papel del transporte, la cadencia de reportes y los tipos de eventos reduce el tiempo de integración y favorece la fiabilidad a largo plazo.

- Asegura que el dispositivo esté configurado para enviar la telemetría y los tipos de eventos correctos a Plaspy.
- Ayuda a identificar errores de configuración como endpoint, puerto o selección de transporte incorrectos.
- Reduce el tiempo de inactividad al clarificar qué revisar cuando eventos esperados no llegan a la plataforma.
- Apoya la planificación de la vida útil de la batería y los intervalos de reporte para equilibrar visibilidad y consumo energético.
- Facilita el mapeo de campos del dispositivo a los paneles de Plaspy y a integraciones posteriores como consumidores MQTT.

## Por qué usar Plaspy con este protocolo

Usar el PT50 con Plaspy ofrece a las organizaciones visibilidad centralizada, alertas y reproducción histórica para activos solares de larga duración. La combinación del PT50 de posicionamiento multimodal y hardware de bajo mantenimiento se complementa con la ingesta y normalización de Plaspy para ofrecer datos de ubicación y eventos accionables en gestión de flotas, monitoreo antirrobo y telemetría remota de activos.

Si desea saber más sobre cómo Plaspy funciona con dispositivos como el TopShine PT50 visite https://www.plaspy.com. Para los detalles más actuales específicos del protocolo del dispositivo, notas de firmware e instrucciones oficiales de configuración, verifique la información en el sitio del fabricante https://www.gztopshine.com/ ya que el soporte del protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
