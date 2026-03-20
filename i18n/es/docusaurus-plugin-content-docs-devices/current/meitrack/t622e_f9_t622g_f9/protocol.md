---
slug: /meitrack/t622e_f9_t622g_f9/protocol
id: t622e_f9_t622g_f9-protocol
sidebar_label: Protocol
title: Meitrack - T622E-F9/T622G-F9 Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo para compatibilidad de Meitrack T622E F9 con Plaspy
keywords:
  - protocolo Meitrack T622E-F9
  - protocolo Meitrack T622G-F9
  - protocolo GPS Meitrack
  - protocolo de rastreo serie T622
  - compatibilidad de dispositivos Plaspy
  - protocolo de rastreo de vehículos
  - comunicación de rastreador GPS
  - protocolo de seguimiento de flotas
  - guía de protocolo Meitrack
  - integración de telemetría GPS
---

# Meitrack - Protocolo T622E‑F9/T622G‑F9

Esta página describe el contexto público del protocolo para usar los rastreadores vehiculares Meitrack T622E‑F9 y T622G‑F9 con Plaspy. Se enfoca en cómo el equipo se comunica con Plaspy a alto nivel, los ajustes de conexión compartidos que ofrece Plaspy y consideraciones prácticas para llevar la telemetría, posiciones GNSS y eventos de periféricos a la plataforma Plaspy.

Plaspy emplea ajustes de conexión compartidos para todos los equipos compatibles y detecta automáticamente el protocolo del rastreador cuando los dispositivos reportan a su endpoint. El comportamiento exacto del protocolo en T622E‑F9 y T622G‑F9 puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante; por ello esta página destaca el contexto público y no sensible de la integración, recomendando siempre verificar detalles específicos en la documentación técnica de Meitrack.

## Resumen del protocolo

El protocolo de reporte del rastreador define cómo el equipo empaqueta la ubicación, la telemetría y los eventos para enviarlos a un servidor remoto como Plaspy. Para los modelos T622E‑F9 y T622G‑F9 esto incluye actualizaciones de posición GNSS, telemetría de bus CAN y puertos seriales, eventos de periféricos como RFID o sensores de combustible, y comportamientos de envío alternativos cuando la conectividad celular no está disponible.

- Permite entregas periódicas o por evento de las ubicaciones que Plaspy convierte en puntos de mapa y registros históricos
- Transporta telemetría de bus CAN y serial para que Plaspy pueda mostrar diagnósticos de motor, lecturas de combustible y campos personalizados del vehículo
- Codifica eventos de periféricos como cambios de estado de relés, autenticaciones RFID y disparos de cámaras para auditoría y alertas
- Soporta rutas de entrega alternativas para que el equipo mantenga el reporte cuando las redes celulares principales no estén disponibles
- Incluye buffering y comportamiento de subida diferida para preservar mensajes durante cortes de cobertura y entregarlos a Plaspy cuando se restablece la conectividad

## Cómo Plaspy detecta el protocolo

Plaspy recibe conexiones entrantes en un único endpoint y puerto compartido por todos los rastreadores soportados. Cuando un T622E‑F9 o T622G‑F9 correctamente configurado reporta a Plaspy, la plataforma observa el tráfico entrante y utiliza sus mecanismos de detección para asociar los datos del dispositivo con el manejador adecuado. En la mayoría de los casos usted no necesita seleccionar manualmente el protocolo dentro de Plaspy si el dispositivo está configurado para reportar al endpoint de Plaspy.

- El dominio del servidor Plaspy es d.plaspy.com
- La IP del servidor Plaspy es 54.85.159.138
- El puerto es 8888 y Plaspy usa el mismo puerto para todos los equipos soportados
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo reporta al endpoint de Plaspy
- Normalmente solo debe configurar el dispositivo para que apunte al endpoint de Plaspy y al método de transporte para la detección automática

## Transporte y contexto de conexión

Los T622E‑F9 y T622G‑F9 pueden configurarse para utilizar métodos de transporte comunes para llegar a Plaspy. Las elecciones de conexión influyen en el comportamiento de entrega, la latencia y en lo que hará el equipo durante las brechas de cobertura. Esta sección resume el contexto público de transporte para reportar a Plaspy sin intentar describir los formatos internos de los paquetes.

- El equipo puede configurarse con UDP o TCP en el puerto 8888 según soporte y configuración del dispositivo
- Los dispositivos pueden apuntar al dominio del servidor Plaspy d.plaspy.com o directamente a la IP 54.85.159.138
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica el aprovisionamiento y la configuración de firewalls
- La selección del transporte puede influir en retransmisiones y garantías de entrega cuando el dispositivo se desplaza por áreas de cobertura mixta
- Cuando la red celular no está disponible, el equipo puede usar su ruta de respaldo por satélite para mantener el reporte a Plaspy, si el modelo y la configuración lo permiten

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar el timing de mensajes, los campos de telemetría disponibles y el comportamiento de fallback; siempre verifique la versión de firmware al validar compatibilidad
- Revisiones de hardware o accesorios opcionales pueden añadir o eliminar periféricos que aparezcan en los reportes enviados a Plaspy
- La selección de transporte entre UDP y TCP debe coincidir con la configuración del dispositivo y las políticas de la red en el sitio de despliegue
- Pueden ser necesarias órdenes de configuración del fabricante o herramientas de aprovisionamiento para apuntar los dispositivos a d.plaspy.com o 54.85.159.138 en el puerto 8888
- Los comportamientos de fallback por Iridium o satélite dependen de la variante del modelo y pueden requerir aprovisionamiento adicional o activación del servicio
- Valide los campos de telemetría CAN y serial esperados contra la documentación del equipo y los mapeos de campos de Plaspy antes de despliegues a gran escala

## Por qué es importante entender el protocolo

Comprender el protocolo de reporte del dispositivo ayuda a asegurar una integración confiable, un mapeo preciso de telemetría y una resolución de problemas más rápida. Saber qué esperar del rastreador a nivel de protocolo reduce el tiempo de integración y ayuda a los equipos de operaciones a responder ante problemas de conectividad o calidad de datos.

- Acelera la incorporación de dispositivos al alinear la configuración del equipo con los requisitos de endpoint y transporte de Plaspy
- Facilita el mapeo de campos del bus CAN y de puertos seriales en los paneles y reportes de Plaspy
- Mejora la resolución de problemas al aclarar si los problemas son por transporte, comportamiento de firmware o discrepancias en el mapeo de datos
- Ayuda a planificar para brechas de cobertura al comprender el buffering y las rutas de respaldo por satélite del dispositivo
- Orienta las pruebas y validaciones para actualizaciones de firmware y cambios de hardware

## Por qué usar Plaspy con este protocolo

Usar los Meitrack T622E‑F9 o T622G‑F9 con Plaspy ofrece a los operadores de flotas una vía práctica hacia la visibilidad centralizada, alertas basadas en eventos y análisis de telemetría a largo plazo. El hardware del equipo proporciona interfaces vehiculares ricas y opciones de conectividad global que, combinadas con Plaspy, permiten rastreo, diagnóstico y respuestas automatizadas en rutas con cobertura mixta.

Si desea conocer más sobre cómo Plaspy maneja la compatibilidad de dispositivos y qué esperar al desplegar rastreadores Meitrack, visite https://www.plaspy.com. Para los detalles de protocolo específicos del dispositivo, notas de firmware y compatibilidad de accesorios más actuales confirme la información con el fabricante en https://www.meitrack.com/
