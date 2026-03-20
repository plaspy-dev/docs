---
slug: /gotop/vt_390/protocol
id: vt_390-protocol
sidebar_label: Protocol
title: GOTOP - VT-390 Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo del GOTOP VT-390 y su comunicación con Plaspy para rastreo de vehículos y flotas
keywords:
  - protocolo GOTOP VT-390
  - protocolo GPS GOTOP VT-390
  - protocolo de rastreo GOTOP VT-390
  - comunicación GOTOP VT-390
  - protocolo rastreador GPS GOTOP
  - compatibilidad GOTOP VT-390 Plaspy
  - protocolo rastreador VT-390
  - rastreo vehicular VT-390
  - gestión de flotas VT-390
  - protocolo de dispositivo Plaspy
---

# GOTOP - Protocolo VT-390

Esta página presenta el contexto público del protocolo para usar el rastreador GOTOP VT-390 con Plaspy. Describe cómo el dispositivo se comunica con Plaspy en términos generales, el papel del protocolo de comunicación en la integración y qué ajustes de conexión utiliza la plataforma. El contenido se enfoca en detalles públicos y no sensibles para ayudar en la planificación y la configuración básica.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el equipo reporta a la plataforma. El comportamiento exacto del protocolo y las funciones disponibles pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página enfatiza el contexto de comunicación más que los detalles internos del dispositivo.

## Visión general del protocolo

El protocolo de comunicación que usa el VT-390 es el mecanismo mediante el cual el equipo informa ubicación, estado y alarmas a un servidor remoto y recibe mensajes de configuración y control. Para la integración con Plaspy, el protocolo permite la identificación del dispositivo, actualizaciones de posición, reporte telemático y notificaciones de eventos que la plataforma puede procesar y mostrar.

- Transporta datos de ubicación GPS y de tiempo al servidor para seguimiento en tiempo real e historial
- Entrega alertas y eventos de sensores como SOS, movimiento, exceso de velocidad y condiciones relacionadas con el combustible
- Permite la transmisión de medios o datos auxiliares cuando el dispositivo lo soporta, además de la telemetría básica
- Soporta funciones de comunicación bidireccional usadas para voz o control remoto cuando el firmware del rastreador lo permite
- Proporciona identificación del dispositivo y metadatos de estado para que Plaspy asocie los reportes con el activo correspondiente

## Cómo Plaspy detecta el protocolo

Plaspy está diseñado para funcionar con muchos modelos de rastreadores y utiliza un único endpoint y puerto compartido para los reportes de los dispositivos. Cuando un VT-390 se configura para reportar a Plaspy, la plataforma detecta automáticamente el protocolo del rastreador, por lo que normalmente no se requiere seleccionar el protocolo manualmente dentro de Plaspy.

- Los servidores de Plaspy aceptan reportes en d.plaspy.com y en la IP pública 54.85.159.138
- Todos los dispositivos soportados por Plaspy usan el mismo puerto en el servidor
- Plaspy detecta automáticamente el protocolo del rastreador una vez que el equipo reporta al endpoint
- Los usuarios generalmente solo necesitan configurar el VT-390 para apuntar al endpoint de Plaspy y al puerto correcto
- Si un dispositivo no aparece, verifique la dirección de reporte del equipo, los datos de la SIM y la conectividad de red antes de cambiar configuraciones en la plataforma

## Transporte y contexto de conexión

El VT-390 puede configurarse para usar métodos de transporte celular estándar para enviar datos a un servidor. Para la integración con Plaspy, lo importante es el destino y el protocolo de transporte, no los formatos de paquete de bajo nivel.

- El dispositivo puede estar configurado para usar UDP o TCP en el puerto 8888 según la configuración del equipo y el soporte del firmware
- Plaspy acepta reportes de dispositivos en el puerto 8888 para todos los equipos soportados
- Los dispositivos pueden apuntar al hostname d.plaspy.com o a la dirección IP 54.85.159.138 como servidor de reporte
- Elija el método de transporte que coincida con la capacidad del firmware del VT-390 y las necesidades de confiabilidad de su despliegue
- Asegúrese de que el APN y los ajustes de la SIM en el VT-390 sean correctos para que el dispositivo pueda alcanzar el endpoint de Plaspy

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar qué funciones están disponibles y cómo el dispositivo reporta eventos específicos
- Las variantes de hardware o modelos específicos por región pueden tener diferentes asignaciones de E/S o soporte para accesorios
- Algunas funciones mencionadas en materiales de marketing, como captura de cámara o identificación por RFID para conductor, dependen de la integración del firmware y del soporte del servidor
- La selección de transporte entre UDP y TCP está determinada por el firmware del dispositivo y la configuración que usted aplique
- Valide la compatibilidad y los ajustes recomendados contra la documentación oficial del VT-390 para su versión de firmware
- Se recomienda realizar pruebas en un entorno controlado antes de un despliegue a gran escala

## Por qué es importante entender el protocolo

Comprender cómo se comunica el VT-390 ayuda a garantizar reportes fiables, la correcta interpretación de eventos y un funcionamiento estable a largo plazo con Plaspy. Estar al tanto del transporte, la dirección del servidor y la disponibilidad de funciones acelera la resolución de problemas y la optimización.

- Ayuda a diagnosticar problemas de conectividad, como dirección de servidor incorrecta o incompatibilidad de transporte
- Asegura que alertas y telemetría estén configuradas para que Plaspy reciba información útil para el monitoreo
- Apoya la planificación del consumo de datos y la provisión de SIM cuando se habilitan medios o reportes frecuentes
- Permite a los administradores confirmar qué funciones del dispositivo estarán disponibles en la práctica con el firmware actual
- Reduce el tiempo de resolución cuando los eventos no aparecen como se espera en Plaspy

## Por qué usar Plaspy con este protocolo

Usar el GOTOP VT-390 con Plaspy ofrece a las organizaciones una forma estandarizada de recopilar datos de ubicación, eventos y telemetría en una flota. La detección automática de protocolo de Plaspy y el manejo unificado de puertos simplifican la incorporación, por lo que los dispositivos que apunten correctamente al endpoint de Plaspy pueden empezar a reportar con una configuración mínima en la plataforma.

Plaspy es adecuado para flotas mixtas que requieren visibilidad, alertas configurables y retención centralizada de datos. Si sus dispositivos VT-390 están configurados para reportar a d.plaspy.com o 54.85.159.138 en el puerto 8888, Plaspy aceptará los reportes y manejará la detección de protocolo automáticamente. Para saber más sobre Plaspy y las capacidades de la plataforma visite https://www.plaspy.com. Para detalles específicos y actualizados del protocolo por dispositivo, notas de firmware y guía de implementación, consulte la documentación del fabricante en https://www.gotop.cc/ ya que el soporte del protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
