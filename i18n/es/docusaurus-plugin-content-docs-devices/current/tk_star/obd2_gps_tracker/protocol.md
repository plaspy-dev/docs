---
slug: /tk_star/obd2_gps_tracker/protocol
id: obd2_gps_tracker-protocol
sidebar_label: Protocol
title: TK-Star - OBD2 GPS Tracker Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo para la conectividad del rastreador OBD2 TK-Star e integración con Plaspy para seguimiento y telemetría
keywords:
  - protocolo rastreador OBD2 TK-Star
  - comunicación rastreador OBD2 TK-Star
  - TK-Star OBD2 Plaspy
  - guía protocolo rastreador OBD2
  - protocolo rastreador vehicular Plaspy
  - integración telemetría OBD2
  - protocolo seguimiento de flotas
  - conectividad rastreador GPS Plaspy
  - seguimiento datos diagnóstico OBD2
  - rastreador GPS multiconstelación
---

# TK-Star - Protocolo del rastreador GPS OBD2

Esta página describe el contexto público del protocolo para usar el rastreador OBD2 TK-Star con Plaspy. Explica, de manera general, cómo se comunica el equipo, qué puntos de conexión expone Plaspy para la ingestión y qué esperar al integrar la unidad OBD2 plug and play para ubicación en tiempo real, posicionamiento multiconstelación y envío de datos de diagnóstico del vehículo. El foco está en el comportamiento del protocolo y el contexto de conexión a alto nivel, no en detalles internos del firmware del fabricante.

Plaspy emplea ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo cuando los equipos envían datos al endpoint de Plaspy. El comportamiento exacto del protocolo del TK-Star OBD2 GPS Tracker puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que este documento se concentra en los hechos públicos de comunicación necesarios para configurar y conectar los dispositivos a Plaspy de forma confiable.

## Visión general del protocolo

A alto nivel, el protocolo de reporte del rastreador es el conjunto de reglas y tipos de mensajes que el OBD2 GPS Tracker utiliza para transmitir posiciones GNSS, datos de posicionamiento complementarios, diagnósticos OBD2 y estados del dispositivo a un servidor remoto. Para la integración con Plaspy, el propósito del protocolo es proporcionar identificadores y telemetría consistentes para que la plataforma pueda asociar los registros entrantes con vehículos y cuentas de flota.

- Permite informes continuos de GNSS y posicionamiento asistido para que Plaspy muestre la ubicación en vivo y el historial de rutas.
- Transporta campos de diagnóstico OBD2 y el estado de ignición cuando el vehículo expone esos PIDs para telemetría y flujos de mantenimiento.
- Envía estados del dispositivo y señales de alarma como alertas por manipulación por vibración y notificaciones de batería de respaldo baja para el manejo de eventos.
- Proporciona información identificadora que permite a Plaspy vincular mensajes entrantes a un dispositivo o vehículo específico sin selección manual de protocolo.
- Suministra las cargas útiles de telemetría que Plaspy ingiere para el mapeo, las alertas y las consultas históricas.

## Cómo Plaspy detecta el protocolo

Plaspy centraliza la conectividad de dispositivos en un endpoint y puerto comunes para aceptar mensajes de muchos modelos de rastreadores y detectar automáticamente el formato de reporte. En la mayoría de los casos no es necesario seleccionar un protocolo dentro de Plaspy si el dispositivo está configurado para reportar correctamente al endpoint de Plaspy.

- Plaspy recibe datos de rastreadores en el dominio compartido d.plaspy.com y en la IP pública 54.85.159.138.
- Todos los dispositivos usan el mismo puerto de Plaspy, lo que simplifica la configuración y el onboarding en flotas heterogéneas.
- Plaspy detecta automáticamente el protocolo del rastreador una vez que el dispositivo comienza a reportar a la plataforma, reduciendo pasos de configuración manual.
- La configuración correcta del equipo para apuntar al endpoint de Plaspy es el requisito principal; la detección automática maneja las variaciones compatibles.
- Si es necesario, los identificadores de dispositivo incluidos en los reportes ayudan a Plaspy a asignar el flujo entrante a la cuenta y al registro de vehículo correctos.

## Transporte y contexto de conexión

Las opciones de transporte influyen en cómo el rastreador entrega los mensajes a Plaspy, pero no cambian el propósito a alto nivel del protocolo. El TK-Star OBD2 GPS Tracker puede configurarse para usar cualquiera de los transportes comunes soportados por Plaspy, según el firmware del dispositivo y las opciones del operador.

- El equipo puede configurarse para enviar datos por UDP o TCP en el puerto 8888, según el soporte del dispositivo y la configuración del usuario.
- Los dispositivos pueden apuntar al dominio del servidor Plaspy d.plaspy.com o directamente a la IP del servidor 54.85.159.138 para el reporte.
- Plaspy acepta conexiones en el mismo puerto para todos los dispositivos soportados, lo que simplifica la planificación de firewall y red.
- La selección del transporte puede influir en características de entrega como la fiabilidad y la latencia, pero no modifica los campos de telemetría que proporciona el rastreador.
- Asegúrese de que las políticas de la red móvil o del vehículo permitan tráfico saliente UDP o TCP hacia el endpoint de Plaspy en el puerto 8888.

## Notas de compatibilidad del protocolo

- Las diferencias de firmware pueden cambiar el timing de los mensajes, los campos disponibles y las funciones opcionales; siempre valide el comportamiento tras una actualización de firmware.
- Las revisiones de hardware pueden exponer distintos PIDs OBD2 o conjuntos de sensores, lo que afecta la telemetría que el rastreador puede enviar a Plaspy.
- Las opciones de configuración del fabricante, como la selección de transporte o el posicionamiento asistido, pueden alterar cómo y cuándo se reportan los datos.
- Las limitaciones del operador de red y la configuración del APN pueden afectar la conectividad del dispositivo a Plaspy incluso cuando la compatibilidad del protocolo es correcta.
- Al integrar a escala, pruebe una muestra pequeña de unidades para confirmar que la telemetría y los eventos de alarma esperados llegan a Plaspy según lo previsto.
- Verifique el intervalo de reporte por defecto del dispositivo y los disparadores de alarma para asegurarse de que cumplen las necesidades operativas de monitoreo en tiempo real o de registro histórico.

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación del rastreador ayuda a los operadores a configurar los equipos, diagnosticar problemas de conectividad y ajustar la telemetría según las necesidades operativas. Tener claro qué reporta el dispositivo y cómo se conecta a Plaspy reduce el tiempo de integración y mejora la fiabilidad a largo plazo.

- Acelera la configuración inicial al garantizar que los dispositivos apunten al endpoint y transporte correctos de Plaspy.
- Facilita la resolución de problemas de telemetría faltante aclarando si la causa es la red, la selección de transporte o el comportamiento del firmware.
- Permite a los gestores de flota alinear intervalos de reporte y disparadores de eventos con las políticas de monitoreo y alertas en Plaspy.
- Mejora la planificación de mantenimiento cuando los diagnósticos y códigos de falla OBD2 se integran en los flujos de trabajo de Plaspy.
- Reduce falsas alertas y mejora la respuesta cuando las notificaciones de manipulación y movimiento se interpretan en el contexto del protocolo del rastreador.

## Por qué usar Plaspy con este protocolo

Usar el TK-Star OBD2 GPS Tracker con Plaspy ofrece a las organizaciones visibilidad vehicular y telemetría de flota sin cableado complejo. La forma OBD2 plug and play, junto con posicionamiento GNSS multiconstelación y la asistencia por LBS WiFi, ayuda a mantener actualizaciones de ubicación confiables; Plaspy recopila diagnósticos OBD2, alertas por manipulación y eventos de movimiento en una vista operativa única.

Plaspy simplifica la conectividad al ofrecer un endpoint de ingestión compartido en d.plaspy.com y 54.85.159.138 en el puerto 8888, usando el mismo puerto para todos los dispositivos soportados y detectando automáticamente el protocolo del rastreador cuando los equipos reportan. Para conocer más sobre Plaspy y las capacidades de la plataforma visite https://www.plaspy.com. Para los detalles de protocolo a nivel de dispositivo, notas de firmware y guía del fabricante, consulte la documentación oficial de TK Star en https://www.tk-star.com/ .
