---
slug: /cantrack/tk100n/protocol
id: tk100n-protocol
sidebar_label: Protocol
title: CanTrack - TK100N Protocol
sidebar_class_name: menu_item_tracker
description: Contexto público del protocolo para integrar el rastreador CanTrack TK100N con Plaspy y telemetría vehicular fiable
keywords:
  - Protocolo CanTrack TK100N
  - Protocolo GPS CanTrack TK100N
  - Compatibilidad TK100N GT06N
  - Integración TK100N Plaspy
  - Protocolo rastreador CanTrack
  - Protocolo rastreador GPS vehicular
  - Rastreo de flotas TK100N
  - Integración rastreador GPS Plaspy
  - Protocolo telemetría vehicular
  - Protocolo GT06N rastreador
---

# CanTrack - Protocolo TK100N

Esta página resume el contexto público del protocolo para usar el rastreador CanTrack TK100N con Plaspy. Explica, en términos prácticos, cómo el dispositivo envía posiciones y eventos, resalta el papel del protocolo del rastreador en la ingestión de datos y aclara las configuraciones de conexión que Plaspy espera para este modelo.

Plaspy emplea ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo cuando un equipo reporta a la plataforma. En la documentación del fabricante sobre el TK100N suele mencionarse compatibilidad con GT06N. El comportamiento exacto del protocolo y los campos disponibles pueden variar según la versión de firmware, la revisión de hardware o la implementación del proveedor, por lo que esta página se enfoca en contexto práctico y no en detalles internos sensibles del dispositivo.

## Resumen del protocolo

El protocolo de comunicación define cómo el TK100N se identifica, reporta datos de ubicación y eventos, y acepta comandos remotos. La compatibilidad con GT06N significa que el equipo sigue un enfoque de reporte ampliamente usado para telemetría y alarmas, que Plaspy reconoce y convierte en registros de ubicación y estado utilizables.

- Permite que el rastreador envíe posición, velocidad, marca de tiempo y estados básicos de alarmas o entradas a Plaspy
- Habilita el reporte de eventos vehiculares como detección de ACC, SOS, vibración y corte de alimentación como alertas discretas
- Proporciona una vía para comandos remotos, por ejemplo activación de relé inmovilizante, cuando el equipo y la normativa local lo permiten
- Soporta mecanismos de reserva como SMS cuando la conectividad por IP no está disponible, mejorando la resiliencia
- Sirve de base para que Plaspy normalice la telemetría entrante y muestre seguimiento en vivo y trazas históricas en la plataforma

## Cómo detecta Plaspy el protocolo

Plaspy recibe conexiones entrantes en un endpoint y puerto compartidos y determina automáticamente el protocolo del rastreador. Cuando un TK100N está correctamente configurado para reportar al endpoint de Plaspy, normalmente no hace falta seleccionar el protocolo manualmente en la plataforma.

- El dominio público del servidor de Plaspy para reporte de dispositivos es d.plaspy.com
- La plataforma también acepta conexiones hacia la IP del servidor 54.85.159.138
- Todos los dispositivos en Plaspy usan el mismo puerto y Plaspy detecta automáticamente el protocolo del rastreador
- Si el dispositivo está configurado para reportar a d.plaspy.com o a 54.85.159.138, Plaspy recibirá y clasificará los mensajes para su procesamiento
- Normalmente solo necesita configurar el APN y la dirección del servidor en el rastreador; Plaspy se encarga de la identificación del protocolo

## Contexto de transporte y conexión

El transporte es la capa de red que lleva los mensajes del protocolo desde el TK100N hasta Plaspy. El TK100N puede configurarse para reportar por UDP o TCP según lo permita el equipo y las condiciones de la red. Plaspy escucha en un solo puerto compartido para simplificar la configuración.

- Los dispositivos pueden usar UDP o TCP en el puerto 8888 según la configuración del rastreador y el comportamiento de la red
- Direccione la dirección del servidor del equipo a d.plaspy.com o directamente a 54.85.159.138 para reportar a Plaspy
- El uso de un puerto común por parte de Plaspy reduce la necesidad de configurar puertos por dispositivo
- Cuando los datos GPRS no están disponibles, el TK100N típicamente soporta comandos por SMS y reporte de reserva para mantener funcionalidad básica
- Asegúrese de que APN, dirección del servidor y transporte (UDP o TCP) estén configurados en el TK100N conforme a sus requisitos de red y operación

## Notas sobre compatibilidad del protocolo

- La compatibilidad con GT06N se cita con frecuencia para el TK100N, pero variaciones de firmware pueden cambiar campos de mensaje soportados o funciones opcionales
- Revisiones de hardware y variantes regionales pueden diferir en bandas celulares soportadas y en alarmas o entradas disponibles
- La elección del transporte (TCP vs UDP) puede afectar las garantías de entrega y cómo se manejan las retransmisiones a nivel de red
- El comportamiento de reserva por SMS y los conjuntos de comandos son provistos por el fabricante y pueden variar entre versiones de firmware
- Confirme siempre que la dirección de reporte del dispositivo esté establecida en d.plaspy.com o 54.85.159.138 en el puerto 8888 para la ingestión en Plaspy
- Valide características avanzadas de control remoto, como comandos de relé, según la documentación del dispositivo y las restricciones regulatorias locales

## Por qué es importante entender el protocolo

Tener un entendimiento práctico del protocolo de comunicación del TK100N ayuda a garantizar una configuración confiable, agilizar la resolución de problemas y obtener un comportamiento predecible de la plataforma cuando el equipo se usa con Plaspy.

- Acelera la incorporación inicial del dispositivo asegurando que APN, servidor y transporte coincidan con los requisitos de Plaspy
- Ayuda a diagnosticar problemas de conectividad al clarificar si la causa es de red, transporte o firmware
- Asegura que señales de alarma y entradas como ACC o SOS se mapeen correctamente en las alertas y flujos de trabajo de Plaspy
- Facilita la planificación de redundancia al comprender el respaldo por SMS y cómo complementa el reporte por GPRS
- Apoya la gestión del ciclo de vida al señalar cuándo actualizaciones de firmware o cambios de hardware pueden requerir revalidación

## Por qué usar Plaspy con este protocolo

Usar el CanTrack TK100N con Plaspy proporciona a las organizaciones una ruta directa para obtener ubicación en tiempo real, alertas de eventos y capacidades de control remoto útiles para la gestión de flotas y la protección de activos. La compatibilidad GT06N del TK100N y la reserva por SMS, combinadas con la detección automática de protocolos de Plaspy, simplifican el despliegue y reducen pasos de configuración manual.

Learn more about Plaspy and how the platform handles device reporting and fleet telemetry at https://www.plaspy.com. For the most current device specific protocol details, firmware notes, and implementation guidance, please verify information on the manufacturer site https://www.cantrackgps.com/ as protocol support and firmware behavior can change over time.
