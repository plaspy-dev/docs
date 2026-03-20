---
slug: /reachfar/rf_v45/protocol
id: rf_v45-protocol
sidebar_label: Protocol
title: Reachfar - RF-V45 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo para usar el Reachfar RF-V45 con Plaspy para seguimiento y monitoreo en tiempo real
keywords:
  - Protocolo Reachfar RF-V45
  - Protocolo GPS Reachfar RF-V45
  - Compatibilidad Reachfar RF-V45 Plaspy
  - Protocolo de rastreo RF V45
  - Protocolo de rastreador Reachfar
  - Comunicación RF V45
  - Protocolo de rastreador GPS Reachfar
  - Compatibilidad de dispositivos Plaspy
  - Protocolo de rastreador GPS personal
  - Compatibilidad de rastreo RF V45
---

# Reachfar - Protocolo RF-V45

Esta página describe el contexto público del protocolo para usar el rastreador personal Reachfar RF-V45 con la plataforma Plaspy. Explica, en términos generales, cómo se comunica el dispositivo, qué ajustes de conexión se usan públicamente para reportar a Plaspy y qué papel práctico cumple el protocolo del dispositivo al integrarlo para monitoreo y alertas en tiempo real.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo cuando el equipo reporta al endpoint de Plaspy. El comportamiento exacto del protocolo y las funciones disponibles pueden variar según la versión del firmware, la revisión del hardware y la implementación del fabricante; por eso esta página se centra en detalles de comunicación de alto nivel y no sensibles, útiles para la configuración y la resolución de problemas.

## Visión general del protocolo

El protocolo de comunicación del RF-V45 define cómo el dispositivo envía telemetría, ubicación, alertas de eventos y estado a un servidor remoto para que Plaspy pueda mostrar la ubicación y la información situacional en tiempo real a cuidadores y administradores. Aunque los detalles de implementación dependen del fabricante, el contexto público del protocolo cubre cómo el rastreador se identifica, mantiene la conexión de reporte y transmite los tipos de datos que Plaspy utiliza para monitoreo y alertas.

- Permite la transmisión periódica y por eventos de ubicación y telemetría a un servidor remoto para su procesamiento y visualización.
- Incluye eventos de emergencia como SOS de un solo botón, estado de llamadas bidireccionales y desencadenantes de subida de imágenes para notificar rápidamente a los cuidadores.
- Reporta identificación del dispositivo y estado de salud para que Plaspy pueda asociar los datos con la cuenta de usuario y el equipo correctos.
- Soporta múltiples modos de posicionamiento (GPS, A‑GPS, LBS, Wi‑Fi) para que Plaspy utilice la mejor información de ubicación disponible en mapas e historial.
- Opera sobre canales de transporte estándar para que el dispositivo pueda encaminarse al endpoint de Plaspy sin requisitos de red especiales.

## Cómo Plaspy detecta el protocolo

Plaspy recibe conexiones y telemetría entrante en un único endpoint y puerto compartidos, y utiliza esa conexión para identificar qué protocolo compatible está usando el dispositivo que reporta. En la mayoría de los casos, un RF-V45 correctamente configurado será detectado automáticamente y comenzará a enviar datos útiles a la plataforma Plaspy sin necesidad de seleccionar el protocolo manualmente dentro de la plataforma.

- Plaspy escucha en un puerto compartido para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando llega la telemetría.
- Normalmente usted no necesita seleccionar un protocolo en Plaspy si el dispositivo está configurado para reportar al endpoint de Plaspy.
- La detección automática facilita la incorporación de dispositivos como el RF-V45 que vienen preconfigurados para reportar a un servidor central.
- La detección se basa en el comportamiento de reporte y el contexto de conexión públicamente observables, sin requerir cambios en el firmware del dispositivo.
- Si la detección automática no ocurre, el siguiente paso recomendado es verificar los ajustes de reporte del dispositivo y la documentación del fabricante.

## Transporte y contexto de conexión

El RF-V45 puede configurarse para reportar a Plaspy usando transporte TCP o UDP estándar, según la configuración del dispositivo y las condiciones de la red. Plaspy publica un único endpoint público que los dispositivos pueden apuntar; el uso del dominio o la IP pública está soportado y todos los dispositivos usan el mismo puerto para alcanzar Plaspy.

- Dominio público del servidor Plaspy: d.plaspy.com
- IP pública del servidor Plaspy: 54.85.159.138
- Puerto que usa Plaspy para el reporte de dispositivos: 8888
- Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888 según el soporte del dispositivo y el comportamiento de la red del operador
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la configuración y las reglas de firewall
- Apuntar un dispositivo a d.plaspy.com o a la IP pública alcanzará el endpoint de Plaspy

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar la cadencia de mensajes, los campos soportados y el comportamiento de eventos; verifique el nivel de firmware al validar compatibilidad.
- Revisión de hardware y configuraciones de fábrica a veces alteran la selección de transporte predeterminada (UDP vs TCP) o los intervalos de reporte.
- Las decisiones de implementación del fabricante pueden afectar funciones opcionales como activadores de subida de imágenes, metadatos de llamada bidireccional o el reporte de ubicación asistido por Wi‑Fi.
- Las condiciones de la red y las diferencias entre operadores móviles pueden influir en qué transporte es más fiable en su región de despliegue.
- La detección automática de Plaspy cubre patrones comunes de reporte, pero firmwares inusuales o altamente personalizados pueden requerir validación adicional.
- Siempre confirme los ajustes del dispositivo con la documentación oficial del fabricante cuando el comportamiento preciso sea crítico para un despliegue operativo.

## Por qué es importante conocer el protocolo

Comprender cómo el RF-V45 reporta datos ayuda a asegurar una incorporación confiable, un comportamiento correcto de geovallas y alertas, y una resolución de problemas más rápida cuando no llega telemetría. Saber el transporte, el endpoint y el papel del firmware permite a los integradores y a los cuidadores tomar decisiones informadas sobre la colocación, configuración y capacidades esperadas del dispositivo.

- Facilita el diagnóstico de problemas de conectividad al verificar si el dispositivo está alcanzando el endpoint configurado de Plaspy
- Aclara por qué distintas ubicaciones o redes pueden influir en la precisión reportada o la frecuencia de actualizaciones
- Permite confirmar con mayor facilidad que eventos como SOS, subida de imágenes y audio bidireccional se están enviando y procesando
- Ayuda en la planificación de reglas de firewall y red usando la información compartida del puerto y el endpoint de Plaspy
- Reduce el tiempo de incorporación porque Plaspy detecta automáticamente los protocolos compatibles cuando los dispositivos reportan correctamente

## Por qué usar Plaspy con este protocolo

El RF-V45 está diseñado para escenarios de seguridad personal y cuidado donde la ubicación oportuna, las alertas SOS, el audio bidireccional y el contexto visual son relevantes. Cuando el dispositivo reporta a Plaspy, ofrece a cuidadores y coordinadores visibilidad centralizada en tiempo real, reproducción histórica, alertas por geovalla y acceso desde múltiples terminales, herramientas útiles para una respuesta rápida y supervisión continua.

Para conocer más sobre cómo Plaspy puede presentar la telemetría y las alertas del RF-V45 en interfaces móviles y de escritorio, visite https://www.plaspy.com. Para los detalles más actuales sobre el protocolo específico del dispositivo, el comportamiento del firmware y las instrucciones del fabricante, confirme la información en el sitio del fabricante Reachfar en https://www.reachfargps.com/
