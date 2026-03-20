---
slug: /orion/et_100/protocol
id: et_100-protocol
sidebar_label: Protocol
title: Orion - ET-100 Protocol
sidebar_class_name: menu_item_tracker
description: Información pública del protocolo del rastreador Orion ET 100 y cómo se comunica con Plaspy para reportes y gestión de dispositivos
keywords:
  - Protocolo Orion ET-100
  - Protocolo GPS Orion ET-100
  - Comunicación Orion ET-100
  - Protocolo rastreador ET-100
  - Rastreador GPS Orion Plaspy
  - Compatibilidad dispositivos Plaspy
  - Rastreo vehicular Orion ET-100
  - Rastreo de activos ET-100
  - Gestión de flotas Orion
  - Rastreo en tiempo real ET-100
---

# Orion - Protocolo ET-100

Esta página describe el contexto público del protocolo para usar el rastreador GPS Orion ET-100 con Plaspy. Explica, en términos generales, cómo se comunica el equipo, de qué manera Plaspy recibe los datos del dispositivo y qué detalles de conexión suele configurar cuando dirige los reportes del dispositivo hacia la plataforma. El ET-100 es un dispositivo compacto de rastreo en tiempo real con funciones como geovallas, alertas SOS y alta sensibilidad GPS, características que lo hacen adecuado para gestión de activos, visibilidad de flotas y seguridad personal.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el equipo está correctamente configurado para reportar a la plataforma. Plaspy espera que los dispositivos envíen datos al mismo endpoint y puerto, aunque el comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante. Datos clave de conexión en Plaspy que debe conocer incluyen el dominio del servidor d.plaspy.com, la IP del servidor 54.85.159.138 y el puerto de la plataforma 8888. El dispositivo puede configurarse usando UDP o TCP en el puerto 8888; todos los dispositivos en Plaspy usan el mismo puerto y la detección del protocolo se realiza de forma automática.

## Resumen del protocolo

El protocolo es el conjunto de reglas que gobierna cómo el ET-100 informa posición, estado y alertas a un servidor remoto como Plaspy. Para fines de integración describimos el protocolo en términos públicos y no sensibles: cómo permite la identificación, el reporte periódico y la entrega de alertas al endpoint de Plaspy para que los operadores puedan visualizar y actuar sobre los datos.

- Permite que el rastreador se identifique y asocie mensajes con un registro de dispositivo en Plaspy
- Transporta coordenadas y hora para que Plaspy pueda mostrar ubicaciones en vivo y trayectos históricos
- Transmite informes de eventos como entradas/salidas de geovallas y alertas SOS para manejo inmediato de notificaciones
- Proporciona estado y telemetría que Plaspy puede mostrar para monitoreo y diagnóstico
- Funciona sobre canales de transporte estándar para que los dispositivos puedan reportar al endpoint y puerto compartidos de Plaspy

## Cómo Plaspy detecta el protocolo

Plaspy recibe los reportes de los dispositivos en un endpoint y puerto compartidos y usa esos datos entrantes para determinar qué protocolo de rastreador se está utilizando. Dado que Plaspy está diseñado para manejar muchos modelos, la mayoría de los usuarios no necesita seleccionar un protocolo en la plataforma cuando el dispositivo está correctamente configurado para reportar a Plaspy.

- Los dispositivos deben estar configurados para enviar reportes a d.plaspy.com o a la IP del servidor 54.85.159.138
- Todos los dispositivos en Plaspy usan el mismo puerto, por lo que no necesita un puerto único por modelo
- Plaspy detecta automáticamente el protocolo del rastreador a partir de los mensajes entrantes una vez que el reporte está activo
- En la mayoría de los casos solo debe apuntar el ET-100 al endpoint de Plaspy y elegir UDP o TCP según la capacidad del dispositivo
- Si el dispositivo no se detecta automáticamente, causas comunes incluyen endpoint incorrecto, transporte no coincidente o diferencias de firmware que alteran el comportamiento de reporte

## Transporte y contexto de conexión

El contexto de conexión abarca cómo el ET-100 establece una ruta de red hacia Plaspy para que los datos fluyan de forma confiable. El ET-100 puede configurarse para usar UDP o TCP según el soporte del dispositivo y las decisiones de configuración, y ambos transportes son aceptados en el endpoint de Plaspy en el puerto compartido.

- Los dispositivos pueden configurarse usando UDP o TCP en el puerto 8888
- Apunte el dispositivo a d.plaspy.com o a la IP del servidor 54.85.159.138 como destino de reporte
- Plaspy usa el mismo puerto para todos los dispositivos compatibles, lo que simplifica la configuración
- Seleccione UDP para menor sobrecarga o TCP para entrega orientada a conexión según las capacidades del equipo y las condiciones de red
- Asegúrese de que el APN y los ajustes de datos del dispositivo estén correctos para que los paquetes lleguen al endpoint de Plaspy de manera fiable

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar la temporización de los mensajes, campos disponibles y funciones opcionales que afectan la compatibilidad
- Las revisiones de hardware pueden influir en qué modos de transporte están disponibles o cómo se reportan ciertas entradas
- Las herramientas de configuración del fabricante a veces ofrecen múltiples formatos de reporte o modos legacy; verifique el formato que active
- La selección de transporte entre UDP y TCP debe coincidir con la configuración del dispositivo para garantizar la entrega a Plaspy
- Siempre valide el reporte del dispositivo a d.plaspy.com o 54.85.159.138 en el puerto 8888 durante la puesta en marcha
- En caso de duda, consulte la documentación de Orion y las notas de lanzamiento para comportamientos específicos de firmware

## Por qué es importante entender el protocolo

Conocer cómo se comunica el ET-100 ayuda a acelerar la configuración, facilita la resolución de problemas y garantiza la confiabilidad a largo plazo en Plaspy. Tener claridad sobre expectativas de transporte y mensajes reduce la fricción en la integración y respalda un monitoreo operativo consistente.

- Ayuda a confirmar que los reportes del dispositivo están llegando a Plaspy en d.plaspy.com y que la plataforma está detectando el protocolo
- Facilita la interpretación del comportamiento del dispositivo cuando se generan eventos como alertas de geovalla o señales SOS
- Orienta decisiones sobre selección de transporte y configuración de datos celulares para una entrega confiable
- Reduce el tiempo empleado en diagnosticar fallas de reporte al acotar posibles problemas de firmware, transporte o endpoint
- Apoya la planificación del ciclo de vida al actualizar firmware o desplegar nuevas revisiones de hardware

## Por qué usar Plaspy con este protocolo

Usar el Orion ET-100 con Plaspy ofrece a las organizaciones una vía sencilla para obtener visibilidad de activos, monitoreo de eventos y seguimiento histórico sin requerir configuración de puertos por dispositivo. Las funciones del ET-100 como actualizaciones de ubicación en vivo, geovallas y alertas SOS se alinean con necesidades operativas comunes en gestión de flotas, seguridad personal y protección de activos, y Plaspy proporciona el endpoint centralizado y las herramientas para que esas funciones sean operativas.

Para conocer más sobre Plaspy y las funciones de la plataforma visite https://www.plaspy.com. Verifique los detalles del protocolo específicos del dispositivo, el comportamiento del firmware y cualquier nota del fabricante en el sitio oficial de Orion http://www.oriontech.com.tw/ ya que el soporte de protocolo y las implementaciones del dispositivo pueden cambiar con el tiempo.
