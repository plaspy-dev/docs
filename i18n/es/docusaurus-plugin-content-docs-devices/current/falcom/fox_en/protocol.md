---
slug: /falcom/fox_en/protocol
id: fox_en-protocol
sidebar_label: Protocol
title: Falcom - FOX-EN Protocol
sidebar_class_name: menu_item_tracker
description: Información pública del protocolo para integrar el tracker Falcom FOX-EN con Plaspy mediante ajustes de conexión compartidos
keywords:
  - protocolo Falcom FOX-EN
  - protocolo GPS FOX-EN
  - compatibilidad Falcom FOX-EN Plaspy
  - protocolo de comunicación FOX-EN
  - protocolo de rastreo FOX-EN
  - protocolo rastreador GPS Falcom
  - compatibilidad dispositivos Plaspy
  - rastreo de vehículos FOX-EN
  - geovallas FOX-EN
  - telemetría FOX-EN
---

# Falcom - FOX-EN — Protocolo

Esta página describe el contexto público del protocolo para usar el tracker Falcom FOX-EN con Plaspy. Se centra en cómo el dispositivo comunica en los modos de reporte soportados y en cómo Plaspy procesa esa comunicación. El objetivo es ofrecer información práctica y no sensible que ayude a integradores y equipos de flota a entender cómo el FOX-EN intercambia datos con un endpoint del servidor.

El Falcom FOX-EN es un rastreador GPS flexible con funciones como reporte por TCP, alertas por SMS, geovallas, integración de sensores y actuadores, capacidad de llamadas de voz y un registrador combinado de conductor y datos. Plaspy utiliza ajustes de conexión compartidos entre dispositivos compatibles y detecta automáticamente el protocolo del tracker. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que los detalles del dispositivo deben validarse con la documentación oficial de Falcom.

## Resumen del protocolo

El protocolo de reporte FOX-EN define cómo el tracker se identifica ante un endpoint de servidor, entrega datos de ubicación y estado, y transmite alertas o mensajes de eventos. Para la integración con Plaspy, los aspectos públicos relevantes son el modo de transporte empleado para llegar al endpoint de Plaspy y los tipos de eventos que el dispositivo puede reportar, como violaciones de geovalla, actualizaciones de estado y alertas activadas por sensores.

- Permite que el tracker envíe ubicación, estado y alertas a un servidor remoto para su procesamiento.
- Facilita la identificación del dispositivo para que Plaspy asocie los mensajes entrantes con una unidad específica.
- Transporta datos de eventos y telemetría que Plaspy usa para historial, alertas de geovalla y monitoreo operativo.
- Admite distintos transportes y modos de reporte que se pueden elegir en la configuración del dispositivo.
- Proporciona un mecanismo para enviar alertas urgentes e informes periódicos de estado a la plataforma.

## Cómo detecta Plaspy el protocolo

Plaspy recibe el tráfico de dispositivos en un endpoint compartido y determina automáticamente el protocolo del tracker cuando un equipo correctamente configurado reporta al servicio. Esta detección automática significa que normalmente no es necesario seleccionar manualmente un protocolo en Plaspy si el FOX-EN está configurado correctamente para reportar al servidor de Plaspy.

- Plaspy escucha el tráfico de trackers en el dominio d.plaspy.com y en la IP pública 54.85.159.138.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la configuración y el onboarding.
- La plataforma acepta reportes enviados por TCP o UDP en el puerto 8888 según la configuración del tracker.
- Cuando el FOX-EN envía mensajes de estado o alertas al endpoint de Plaspy, la plataforma asocia y parsea esos mensajes para su visualización.
- Una identificación de dispositivo correcta y intervalos de reporte consistentes mejoran la detección automática y el mapeo de unidades en Plaspy.

## Contexto de transporte y conexión

El contexto de conexión abarca cómo el FOX-EN llega al endpoint de Plaspy y qué opciones de transporte se utilizan habitualmente. El FOX-EN puede configurarse para reportar por TCP o UDP, y también soporta funciones de SMS y voz que complementan el reporte IP. Comprender las opciones de transporte ayuda a garantizar la entrega confiable de telemetría a Plaspy.

- El dispositivo puede configurarse para usar UDP o TCP y enviar reportes al puerto 8888 del endpoint de Plaspy.
- Los equipos pueden apuntar al dominio d.plaspy.com o directamente a la IP 54.85.159.138 según las necesidades de despliegue.
- Plaspy utiliza el mismo puerto para todos los dispositivos compatibles, reduciendo la complejidad de la configuración.
- TCP suele emplearse cuando se requiere entrega fiable y comportamiento de sesión, mientras que UDP puede preferirse por menor sobrecarga en algunos escenarios.
- Las funciones de reporte por SMS y las llamadas de voz son canales separados —a menudo usados para alertas o comandos remotos— y no sustituyen el reporte IP a Plaspy.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar cómo se reportan los campos o qué eventos son compatibles; confirme la versión de firmware al validar el comportamiento.
- Las revisiones de hardware y módulos opcionales pueden afectar los sensores disponibles, el control de actuadores o los campos de telemetría.
- La configuración del fabricante (por ejemplo elegir TCP frente a UDP) influye en cómo debe apuntar el dispositivo al endpoint de Plaspy.
- Algunas funcionalidades del dispositivo, como llamadas de voz o alertas por SMS, quedan fuera del protocolo de reporte IP y pueden requerir configuración aparte.
- Pruebe cualquier cambio de configuración en un entorno controlado antes de desplegar masivamente para confirmar que Plaspy recibe los mensajes esperados.
- Siempre contraste ejemplos de compatibilidad y configuración con la documentación oficial de Falcom para el comportamiento específico del modelo.

## Por qué es importante entender el protocolo

Tener un conocimiento práctico del protocolo de comunicación del FOX-EN facilita una configuración confiable, acelera la resolución de problemas y asegura una interpretación consistente de los datos en Plaspy. Saber qué transporte y modos de reporte usa el dispositivo ayuda a evitar errores de configuración y a relacionar las funciones del dispositivo con la funcionalidad de la plataforma.

- Acelera el onboarding inicial asegurando el endpoint y los ajustes de transporte correctos.
- Ayuda a diagnosticar problemas de conectividad distinguiendo entre incidencias de TCP, UDP o resolución DNS/IP.
- Garantiza que alertas como violaciones de geovalla y eventos de sensores sean entregadas e interpretadas correctamente en Plaspy.
- Facilita la planificación informada de actualizaciones de firmware y despliegues de nuevas funciones que puedan cambiar el comportamiento de reporte.
- Mejora la confiabilidad a largo plazo alineando la configuración del dispositivo con las expectativas de Plaspy sobre intervalos de reporte y formatos de eventos.

## Por qué usar Plaspy con este protocolo

Usar el Falcom FOX-EN con Plaspy ofrece una forma directa de centralizar datos de ubicación, estado y alertas para la gestión de flotas, seguridad y cumplimiento. La capacidad de reporte flexible e integración de sensores del FOX-EN encajan bien con funciones de Plaspy como monitoreo de geovallas, registro de historial y alertas de eventos, permitiendo visibilidad operativa sobre vehículos y activos.

Si desea conocer más sobre cómo Plaspy soporta dispositivos como el FOX-EN y ver las capacidades de la plataforma en contexto, visite https://www.plaspy.com. Para detalles más actuales sobre el protocolo específico del dispositivo, comportamiento de firmware y guía del fabricante, verifique la información en el sitio oficial de Falcom https://www.falcom.de.
