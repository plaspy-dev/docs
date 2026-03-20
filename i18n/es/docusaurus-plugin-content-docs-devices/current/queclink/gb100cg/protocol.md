---
slug: /queclink/gb100cg/protocol
id: gb100cg-protocol
sidebar_label: Protocol
title: QuecLink - GB100CG Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo para la compatibilidad del GB100CG de QuecLink con los servidores de Plaspy
keywords:
  - Protocolo QuecLink GB100CG
  - Protocolo GPS QuecLink GB100CG
  - Compatibilidad GB100CG Plaspy
  - Protocolo de rastreo QuecLink
  - Protocolo de comunicación GB100CG
  - Rastreo vehicular GB100CG
  - Protocolo de rastreadores Plaspy
  - Protocolo de rastreador GPS QuecLink
  - Protocolo telemático GB100CG
  - Telemetría QuecLink Plaspy
---

# QuecLink - Protocolo GB100CG

Esta página describe el contexto público del protocolo para usar el rastreador QuecLink GB100CG con Plaspy. Está orientada a cómo el dispositivo comunica datos con los servidores de Plaspy para facilitar la integración, configuración y resolución de problemas, evitando detalles sensibles de implementación. El GB100CG es un rastreador compacto montado en batería diseñado para telemática automotriz y casos de uso UBI (uso basado en seguro), que ofrece LTE Cat 1 con conmutación a 2G, protección IP67, emparejamiento BLE y un sensor de movimiento de 6 ejes de alta frecuencia.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el equipo reporta a la plataforma. El GB100CG puede transmitir ubicación y telemetría mediante TCP, UDP o SMS según la configuración, y Plaspy acepta reportes en el endpoint público d.plaspy.com o en la dirección IP 54.85.159.138 en el puerto 8888. El comportamiento exacto del protocolo y las funciones disponibles pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que el comportamiento específico del dispositivo debe validarse con la documentación del fabricante.

## Resumen del protocolo

A alto nivel, el protocolo de reporte del rastreador define cómo el GB100CG envía datos GNSS, sensores y eventos a un servidor remoto para que Plaspy los ingiera y presente telemetría útil. El protocolo cubre identificación, reportes programados y basados en eventos, así como la señalización necesaria para ubicación, alarmas y registros de movimiento sin exponer internos del fabricante.

- Permite la identificación del dispositivo y la gestión de sesiones para que Plaspy asocie los datos entrantes con el activo correcto.
- Transporta posición GNSS, marcas de tiempo y muestras del sensor de movimiento que Plaspy convierte en eventos de localización y comportamiento de conducción.
- Envía mensajes de alarma y eventos, como activaciones de geocerca, alertas por remolque o manipulación y registros de impacto para notificación inmediata y registro histórico.
- Soporta modos de reporte configurables para que el rastreador envíe actualizaciones periódicas y ráfagas de alta frecuencia ante choques o conducción agresiva.
- Funciona sobre transportes estándar para que el dispositivo pueda alcanzar los servidores de Plaspy desde distintos entornos celulares.

## Cómo Plaspy detecta el protocolo

Plaspy recibe el tráfico de los dispositivos en un endpoint público compartido y aplica detección de protocolo para enrutar los mensajes entrantes al manejador correcto. En la mayoría de los casos, un GB100CG configurado correctamente que reporte a Plaspy será detectado de forma automática y no requerirá selección manual de protocolo dentro de la plataforma.

- Plaspy expone un único endpoint que los dispositivos pueden apuntar usando el dominio d.plaspy.com o la IP 54.85.159.138.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la configuración y el acceso al servidor.
- La plataforma analiza los reportes entrantes y los compara con patrones conocidos para reconocer automáticamente los rastreadores soportados.
- Cuando un GB100CG apunta al endpoint de Plaspy y usa un transporte permitido, por lo general no es necesario seleccionar el protocolo en Plaspy.
- Si un dispositivo no se registra automáticamente, las causas comunes incluyen configuraciones de servidor incorrectas, desajuste de transporte o diferencias de firmware en el rastreador.

## Transporte y contexto de conexión

El transporte de conexión y el direccionamiento son detalles prácticos importantes al configurar el GB100CG para reportar a Plaspy. El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 según la capacidad y preferencia del usuario, y puede apuntar al dominio de Plaspy o directamente a la IP pública.

- Plaspy acepta reportes de dispositivos en el puerto 8888 para todos los rastreadores y servicios soportados.
- Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888 dependiendo del firmware y las opciones de configuración del rastreador.
- El servidor de Plaspy es accesible en el dominio d.plaspy.com o en la IP pública 54.85.159.138.
- Algunas implementaciones de rastreadores también soportan SMS como transporte alternativo para mensajes específicos o como informe de reserva.
- Usar el puerto y el endpoint compartidos simplifica el aprovisionamiento y reduce errores de configuración al desplegar muchos dispositivos.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar la cadencia de reporte, los campos disponibles y los formatos de evento; siempre verifique las notas de la versión del firmware para detectar cambios de comportamiento.
- Revisiones de hardware o variantes del GB100CG pueden activar o desactivar transportes o funciones de sensores específicas, lo que afecta los datos que recibirá.
- La selección de transporte (TCP versus UDP) influye en la fiabilidad y el comportamiento de retransmisión; elija el modo soportado por el dispositivo y adecuado a su entorno de conectividad.
- El emparejamiento BLE y la telemetría de accesorios suelen estar separados del protocolo principal del rastreador y pueden requerir configuración adicional para correlacionar datos de accesorios con eventos GPS.
- Los ajustes de servidor por defecto del fabricante o los comandos de aprovisionamiento pueden variar entre lotes; confirme que el dispositivo esté configurado para reportar a d.plaspy.com o 54.85.159.138 en el puerto 8888.
- Valide la compatibilidad y los comandos soportados con la documentación oficial de QuecLink para su revisión de firmware y hardware específica.

## Por qué es importante entender el protocolo

Tener un entendimiento práctico del protocolo del rastreador ayuda a garantizar despliegues exitosos, telemetría precisa y una resolución de problemas más eficiente al usar Plaspy. Saber cómo reporta datos el GB100CG y qué transportes puede usar reduce la fricción de integración y mejora la fiabilidad operativa.

- Asegura que el dispositivo apunte al endpoint y al puerto correctos de Plaspy para recibir reportes con fiabilidad.
- Facilita la asignación de eventos y campos de sensores a los paneles y alertas de Plaspy para una detección precisa de incidentes.
- Reduce el tiempo dedicado a diagnosticar problemas de conectividad al confirmar TCP versus UDP y verificar la configuración de DNS o IP.
- Permite decisiones informadas sobre intervalos de reporte y muestreo de sensores para balancear la vida útil de la batería y la fidelidad de los datos.
- Ayuda a planificar actualizaciones de firmware y variaciones de hardware que afecten los datos enviados a Plaspy.

## Por qué usar Plaspy con este protocolo

Usar el GB100CG con Plaspy proporciona a las organizaciones visibilidad centralizada de ubicación, comportamiento de conducción e historial de eventos, aprovechando un rastreador diseñado para casos UBI y gestión de flotas. La combinación de conectividad LTE Cat 1 con fallback 2G, un sensor de movimiento de 6 ejes de alta frecuencia y soporte para accesorios BLE permite a Plaspy recibir telemetría de alta fidelidad para enrutamiento, análisis de seguridad, reconstrucción de choques y flujos de trabajo anti robo.

Si desea saber más sobre cómo Plaspy ingiere y utiliza la telemetría de dispositivos como el GB100CG, visite https://www.plaspy.com. Para los detalles de protocolo específicos del dispositivo, comportamiento de firmware y notas de implementación más recientes, consulte la documentación del fabricante en https://www.queclink.com/.
