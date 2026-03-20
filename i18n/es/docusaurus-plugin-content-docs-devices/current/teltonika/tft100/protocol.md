---
slug: /teltonika/tft100/protocol
id: tft100-protocol
sidebar_label: Protocol
title: Teltonika - TFT100 Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo para integrar Teltonika TFT100 con Plaspy, incluye ajustes de conexión y notas de compatibilidad
keywords:
  - protocolo Teltonika TFT100
  - compatibilidad TFT100 Plaspy
  - protocolo rastreador GPS Teltonika
  - comunicación TFT100
  - protocolo de rastreo TFT100
  - rastreo vehicular Teltonika
  - protocolo rastreador e-movilidad
  - gestión de flotas Plaspy
  - telemetría CAN TFT100
  - sensor BLE TFT100
---

# Teltonika - Protocolo TFT100

Esta página describe el contexto público del protocolo para usar el Teltonika TFT100 con Plaspy. Está orientada a arquitectos de sistemas, integradores y gestores de flota y explica cómo se comunica el dispositivo con Plaspy a nivel de conexión y protocolo. Aquí se presenta información pública y no sensible sobre reporte y conectividad, mientras que la configuración específica del equipo y detalles de firmware deben consultarse en la documentación oficial del fabricante.

Plaspy emplea ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo cuando el equipo reporta al endpoint de Plaspy. El comportamiento exacto del protocolo y la telemetría disponible pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que se recomienda validar y probar cuidadosamente durante el despliegue.

## Resumen del protocolo

El TFT100 utiliza su enlace celular integrado, interfaces cableadas del vehículo y BLE para reportar ubicación y telemetría a servicios de backend como Plaspy. En términos de integración, el dispositivo envía telemetría periódica y orientada a eventos al endpoint de Plaspy, permitiendo que la plataforma analice, almacene y presente datos de ubicación, CAN y sensores para uso operativo.

- Proporciona identificación y datos de telemetría para que Plaspy asocie los mensajes con un activo de la flota y muestre la posición en tiempo real.
- Transporta datos del bus del vehículo y campos de sensores que Plaspy mapea en paneles de telemetría y en alertas.
- Admite reportes por eventos para que alarmas y cambios de estado lleguen al servidor y se procesen de inmediato.
- Permite reenviar datos de sensores y beacons BLE junto con GNSS y telemetría del bus del vehículo para un contexto más completo.
- Opera sobre canales de transporte estándar que Plaspy acepta, de modo que el dispositivo pueda alcanzar el endpoint de Plaspy desde redes celulares.

## Cómo detecta Plaspy el protocolo

Plaspy recibe conexiones entrantes en un endpoint público compartido e identifica automáticamente el protocolo del dispositivo remitente, por lo que normalmente no es necesario seleccionar el protocolo manualmente. Una configuración correcta del equipo para apuntar al endpoint de Plaspy garantiza que el rastreador sea reconocido y que sus mensajes se enruten al pipeline de procesamiento adecuado.

- El dominio del servidor Plaspy es d.plaspy.com y la IP pública es 54.85.159.138; el servicio escucha en el puerto 8888.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la configuración y el alta de equipos.
- Plaspy detecta automáticamente el protocolo del rastreador para dispositivos bien configurados que reportan al endpoint compartido.
- En la mayoría de los casos, los usuarios no necesitan seleccionar un protocolo dentro de Plaspy cuando el dispositivo está correctamente apuntado al endpoint compartido.
- Confirme los parámetros de reporte del equipo en las herramientas de configuración de Teltonika para que los primeros mensajes lleguen y sean detectados como se espera.

## Contexto de transporte y conexión

El TFT100 puede configurarse para enviar telemetría sobre protocolos de transporte estándar soportados por los dispositivos Teltonika. Al integrar con Plaspy, debe configurar el dispositivo para apuntar al endpoint de Plaspy y elegir el transporte que mejor se adapte a su despliegue y condiciones de red.

- El equipo puede configurarse usando UDP o TCP en el puerto 8888, según soporte y ajustes del dispositivo.
- Los dispositivos pueden apuntar al servidor Plaspy mediante el dominio d.plaspy.com o directamente a 54.85.159.138.
- Use el transporte que mejor cumpla sus expectativas de latencia y entrega; Plaspy acepta tanto UDP como TCP en el puerto compartido.
- El enrutamiento de la red y las restricciones del operador pueden afectar la conectividad, por lo que valide el tráfico saliente celular hacia el endpoint de Plaspy.
- Mantenga una configuración consistente entre dispositivos, ya que Plaspy utiliza el mismo puerto y endpoint para la detección automática del protocolo.

## Notas de compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar el comportamiento de reporte, los campos de telemetría disponibles y los tiempos; confirme siempre las notas de la versión de firmware del TFT100.
- Las variantes de hardware y las opciones de interfaz, como CAN, RS232, RS485 y UART, determinan qué canales de telemetría están disponibles para la ingestión en Plaspy.
- El soporte de Bluetooth Low Energy varía según el tipo de sensor y debe emparejarse y configurarse mediante las herramientas de Teltonika antes de que Plaspy reciba datos BLE.
- La selección de transporte entre UDP y TCP puede afectar la semántica de entrega de mensajes; elija y pruebe el transporte que cumpla sus necesidades operativas.
- Teltonika lista el TFT100 como End of Life; verifique disponibilidad, opciones de reemplazo y firmware soportado con Teltonika antes de un despliegue a gran escala.
- Valide las afirmaciones de protocolo y compatibilidad contra la documentación oficial de Teltonika y cualquier guía específica del dispositivo usada durante la configuración.

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación del rastreador ayuda a integradores y operadores de flota a configurar los dispositivos correctamente, solucionar problemas comunes de conectividad y asegurar telemetría confiable durante la vida útil del despliegue. Tener claro cómo reporta el TFT100 y qué espera Plaspy reduce el tiempo de incorporación y evita vacíos de datos evitables.

- Garantiza ajustes de servidor y transporte correctos para que los dispositivos lleguen de forma fiable al endpoint de Plaspy.
- Facilita el mapeo de campos CAN y de sensores a los paneles y reportes de Plaspy para obtener información operativa útil.
- Ayuda a diagnosticar problemas de conectividad revisando resolución de dominio, accesibilidad de IP y comportamiento del transporte.
- Apoya la planificación de actualizaciones de firmware y ciclos de renovación de hardware, especialmente por el estado EOL del TFT100.
- Mejora la gestión de alertas y eventos alineando los reportes de evento del dispositivo con las expectativas de procesamiento de Plaspy.

## Por qué usar Plaspy con este protocolo

Usar el Teltonika TFT100 con Plaspy brinda a los equipos de flota visibilidad enfocada en operaciones de e-movilidad y vehículos industriales. El diseño robusto del TFT100, su amplio rango de alimentación para vehículos y sus interfaces directas lo hacen adecuado para equipos pesados, mientras que Plaspy convierte la telemetría entrante en mapas en vivo, alertas y análisis históricos que apoyan tareas de mantenimiento y operación.

Para conocer más sobre Plaspy y cómo maneja protocolos de dispositivos, visite https://www.plaspy.com. Para obtener la información más actual y específica del dispositivo sobre protocolo, comportamiento de firmware e implementación, confirme los detalles con el fabricante en https://www.teltonika-gps.com/ ya que el soporte del dispositivo y el comportamiento del firmware pueden cambiar con el tiempo.
