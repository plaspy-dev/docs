---
slug: /teltonika/fmm130/protocol
id: fmm130-protocol
sidebar_label: Protocol
title: Teltonika - FMM130 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo para integrar la Teltonika FMM130 con Plaspy, incluyendo ajustes de conexión y notas de compatibilidad
keywords:
  - Protocolo Teltonika FMM130
  - GPS Teltonika FMM130
  - Compatibilidad FMM130 Plaspy
  - Comunicación rastreador GPS
  - Rastreo vehicular Teltonika
  - NB-IoT FMM130
  - Rastreador LTE Cat M1
  - Gestión de flotas FMM130
  - Seguimiento sensores BLE
  - Telemetría CAN bus
---

# Teltonika - Protocolo FMM130

Esta página ofrece una visión pública y no sensible sobre el contexto del protocolo de comunicación para usar la Teltonika FMM130 con Plaspy. Explica cómo el dispositivo reporta posiciones y telemetría a Plaspy, el papel del protocolo de reporte del rastreador y consideraciones prácticas de conexión para una integración exitosa.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el equipo está configurado para reportar al endpoint de la plataforma. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página se enfoca en el contexto general más que en detalles dependientes de firmware.

## Descripción general del protocolo

El protocolo de reporte del rastreador define cómo la FMM130 transmite posiciones GNSS, telemetría del bus CAN, lecturas de sensores BLE y estados de entradas digitales para que Plaspy pueda recibir y mostrar esos valores. El protocolo permite que el equipo se identifique, mantenga una sesión con el servidor y entregue telemetría utilizable para monitoreo en tiempo real y reportes históricos.

- Permite el envío de actualizaciones de posición GNSS y marcas de tiempo para el rastreo de ubicación
- Transporta parámetros derivados del CAN como odómetro y métricas del motor hacia Plaspy
- Envía telemetría de sensores BLE para monitoreo ambiental y de carga
- Informa estados de entradas digitales y analógicas para eventos y acciones remotas
- Proporciona la información de identificación necesaria para que Plaspy asocie los datos con una cuenta

## Cómo Plaspy detecta el protocolo

Plaspy está diseñado para aceptar reportes de muchos modelos de rastreadores usando un solo endpoint y puerto compartidos, y para determinar automáticamente el protocolo que usa un dispositivo entrante. En la mayoría de los casos, cuando el equipo está apuntado al endpoint de Plaspy y correctamente configurado, no se requiere seleccionar manualmente el protocolo dentro de la plataforma.

- Plaspy utiliza un único endpoint y puerto de servidor para conexiones entrantes de rastreadores
- Los dispositivos configurados para reportar a d.plaspy.com o a 54.85.159.138 pueden ser aceptados por la plataforma
- Todos los dispositivos en Plaspy usan el mismo puerto y la plataforma se encarga de identificar el protocolo
- Por lo general, usted solo necesita ajustar el host de reporte y el transporte en el equipo
- La detección automática simplifica la incorporación de múltiples modelos sin configuraciones de protocolo por dispositivo

## Transporte y contexto de conexión

El contexto de conexión cubre cómo el dispositivo alcanza el servidor de Plaspy y qué opciones de transporte son las más comunes. La FMM130 soporta transportes celulares y puede configurarse para usar UDP o TCP según la configuración del equipo y las condiciones de la red.

- Los dispositivos pueden configurarse para reportar usando UDP o TCP en el puerto 8888
- Plaspy acepta conexiones a su dominio d.plaspy.com así como conexiones directas a 54.85.159.138
- La plataforma utiliza el puerto 8888 para todos los dispositivos soportados para simplificar la configuración de firewalls y redes
- La elección de transporte puede afectar el comportamiento de entrega en diferentes condiciones de red, pero es una configuración del dispositivo
- Verifique el APN y los permisos de red del equipo para asegurarse de que el rastreador pueda alcanzar el endpoint de Plaspy

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar el timing de paquetes, los campos de telemetría disponibles o las funciones opcionales expuestas por el dispositivo
- Variantes de hardware o SKUs regionales pueden alterar las bandas celulares soportadas o las opciones de sensores que afectan el reporte
- Las herramientas de configuración del fabricante o las actualizaciones FOTA pueden habilitar o deshabilitar características del protocolo relevantes para la integración
- La selección de TCP frente a UDP es una configuración a nivel de dispositivo y puede influir en la retransmisión y el manejo de sesiones
- Valide siempre que el equipo esté apuntando a d.plaspy.com o 54.85.159.138 y usando el puerto 8888 para compatibilidad con Plaspy
- Confirme que las funciones BLE, CAN y de entradas/salidas que use en su despliegue estén habilitadas y sean compatibles con el firmware actual

## Por qué es importante comprender el protocolo

Conocer cómo se comunica la FMM130 ayuda a configurar correctamente el equipo, acelerar la resolución de problemas y garantizar un comportamiento predecible en despliegues de producción. Entender el contexto del protocolo reduce conjeturas cuando los dispositivos no reportan o cuando faltan campos de telemetría en Plaspy.

- Contribuye a que el equipo esté configurado para enviar la telemetría requerida al endpoint de Plaspy
- Facilita el diagnóstico de problemas de conectividad relacionados con transporte, APN o direccionamiento del servidor
- Permite planificar actualizaciones de firmware y cambios de funciones que puedan afectar el reporte
- Ayuda a validar que los datos de sensores BLE y CAN se están reenviando correctamente a Plaspy
- Mejora la preparación ante cambios de red al confirmar que los dispositivos usan el puerto y endpoint estándar de Plaspy

## Por qué usar Plaspy con este protocolo

Usar la Teltonika FMM130 con Plaspy ofrece una forma práctica de centralizar la ubicación del vehículo, la telemetría del bus CAN, señales de monitoreo de combustible y lecturas de sensores BLE en una sola plataforma de gestión de flotas. Para organizaciones que requieren visibilidad en tiempo real, la combinación proporciona un trayecto de telemetría fiable desde el dispositivo hasta el panel, permitiendo alertas, geocercas y reportes históricos.

Si está evaluando la integración o desplegando la FMM130 a gran escala, comience configurando el equipo para reportar a d.plaspy.com o a 54.85.159.138 en el puerto 8888 y confirme que la elección del transporte coincide con sus necesidades de red. Conozca más sobre cómo Plaspy puede trabajar con su flota en el sitio principal de Plaspy en https://www.plaspy.com y verifique el comportamiento específico del protocolo y los detalles de firmware más recientes con el fabricante en https://www.teltonika-gps.com/ para obtener la información más actualizada.
