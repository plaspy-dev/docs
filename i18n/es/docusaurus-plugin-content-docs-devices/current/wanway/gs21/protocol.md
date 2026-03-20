---
slug: /wanway/gs21/protocol
id: gs21-protocol
sidebar_label: Protocol
title: WanWay - GS21 Protocol
sidebar_class_name: menu_item_tracker
description: Información pública del protocolo para integrar WanWay GS21 con Plaspy usando ajustes de conexión compartidos y detección automática
keywords:
  - protocolo WanWay GS21
  - protocolo GPS WanWay GS21
  - protocolo de comunicación WanWay GS21
  - protocolo de rastreo WanWay GS21
  - protocolo rastreador OBD II WanWay
  - compatibilidad GS21 Plaspy
  - protocolo rastreador Plaspy
  - protocolo de rastreo vehicular WanWay
  - integración protocolo rastreador GPS
  - rastreo de flotas WanWay GS21
---

# WanWay - Protocolo GS21

Esta página ofrece contexto público sobre el protocolo para usar el rastreador OBD II WanWay GS21 con la plataforma Plaspy. Se centra en cómo el dispositivo se comunica con Plaspy a alto nivel, qué ajustes de conexión se usan en campo y cómo el comportamiento a nivel de protocolo afecta la telemetría y la monitorización. El contenido está pensado para ayudar a gerentes de flota, integradores y usuarios técnicos a comprender la conectividad y los reportes sin exponer detalles privados de implementación.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el equipo informa a la plataforma. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que la información aquí describe patrones comunes de comunicación y consideraciones prácticas en lugar de detalles internos del dispositivo.

## Resumen del protocolo

El protocolo de comunicación del GS21 regula cómo el rastreador envía ubicación, estado y alertas a un servidor remoto y cómo se intercambian comandos o acuses de recibo con la plataforma. En la práctica, esto significa que el protocolo define la identificación, el reporte periódico y las notificaciones de eventos para que Plaspy pueda mostrar ubicación en tiempo real, historial y alarmas a los usuarios.

- Permite que el rastreador se identifique y establezca sesión con el endpoint de Plaspy
- Transporta reportes de posición GPS y telemetría básica del vehículo, como encendido o señales diagnósticas
- Entrega eventos de alerta como notificaciones de desmontaje, detecciones de manipulación o batería baja a la plataforma
- Facilita mensajes periódicos de "latido" o keepalive para que la plataforma supervise el estado en línea del dispositivo
- Da soporte a los flujos de datos usados en reproducción de trazas, eventos de geocerca y diagnóstico remoto

## Cómo Plaspy detecta el protocolo

Plaspy recibe informes de dispositivos en un único endpoint compartido y determina automáticamente el protocolo del rastreador según los patrones de tráfico entrante y la presentación del equipo. En la mayoría de los casos, un GS21 correctamente configurado para reportar a Plaspy será reconocido sin necesidad de seleccionar manualmente el protocolo dentro de la plataforma.

- Plaspy acepta conexiones de dispositivos en el dominio d.plaspy.com y en la IP 54.85.159.138
- La plataforma utiliza el puerto 8888 para todos los dispositivos y tipos compatibles
- Los dispositivos pueden configurarse para conectar mediante UDP o TCP en el puerto 8888, según el soporte del equipo
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que normalmente no se requiere selección manual cuando el dispositivo envía datos al endpoint de Plaspy
- La configuración correcta de la dirección del servidor y del transporte en el dispositivo es el paso habitual para que la detección automática funcione

## Transporte y contexto de conexión

Transporte y conexión describen cómo el GS21 alcanza los servidores de Plaspy en lugar del formato interno de los paquetes. La forma OBD II del GS21 y los ajustes en el propio dispositivo determinan si reporta por UDP o TCP y con qué frecuencia envía datos.

- Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888 para alcanzar Plaspy
- El endpoint del servidor de Plaspy es d.plaspy.com y la IP equivalente es 54.85.159.138
- Plaspy usa el puerto 8888 de forma universal para el reporte de dispositivos compatibles
- La selección del transporte puede ser configurable en el dispositivo o mediante herramientas del fabricante y puede afectar las características de entrega
- Las condiciones de red y el comportamiento del operador móvil pueden influir en si UDP o TCP resulta más confiable para un despliegue determinado

## Notas de compatibilidad del protocolo

- Las revisiones de firmware del GS21 pueden cambiar las opciones de reporte disponibles y las banderas de función que afectan el comportamiento del protocolo
- Revisiones de hardware o de ensamblaje pueden modificar cómo se exponen ciertas señales vía OBD II y, por ende, cómo las reporta el dispositivo
- Algunas herramientas de configuración proporcionadas por el fabricante permiten seleccionar UDP o TCP para el transporte al servidor en el puerto 8888
- Diferencias en firmware regional o en la provisión del operador pueden provocar ligeras variaciones en el nombre de eventos o en la frecuencia de reportes
- Siempre valide los ajustes de transporte y la dirección del servidor al provisionar dispositivos para asegurar que apunten a d.plaspy.com o 54.85.159.138 en el puerto 8888
- Confirme la disponibilidad de funciones como reporte de batería integrada, alarmas de desmontaje y salidas diagnósticas según la documentación oficial de WanWay

## Por qué es importante entender el protocolo

Tener una comprensión práctica del protocolo de comunicación del GS21 ayuda a garantizar una instalación exitosa, reportes fiables y una resolución efectiva de problemas cuando los dispositivos se usan con Plaspy. Saber cómo se conecta el equipo y qué esperar de sus reportes reduce la fricción en la integración y mejora la visibilidad operativa.

- Le ayuda a verificar que los dispositivos apunten a la dirección y transporte correctos de Plaspy
- Facilita el diagnóstico de problemas de conectividad que pueden deberse a redes de operador o a la elección del transporte
- Mejora las expectativas sobre la disponibilidad de funciones como reportes de geocercas y alertas de manipulación entre versiones de firmware
- Orienta las pruebas de estado en línea del dispositivo, intervalos de latido y cargas históricas de trazas
- Apoya un despliegue y escalado más fluidos en una flota al aclarar las variables comunes que afectan los reportes

## Por qué usar Plaspy con este protocolo

Usar el WanWay GS21 con Plaspy ofrece a las organizaciones una forma simplificada de recopilar ubicación, estado y alertas de un rastreador en factor de forma OBD II. El enfoque de endpoint único de Plaspy y la detección automática de protocolos simplifican la incorporación de dispositivos y reducen la necesidad de seleccionar protocolos manualmente, permitiendo que los equipos se concentren en la operación y el análisis en lugar del parseo a bajo nivel.

Si desea obtener más información sobre Plaspy y cómo maneja la conectividad de dispositivos, visite https://www.plaspy.com. Para los detalles más recientes del protocolo específico del dispositivo, notas de firmware y guías de instalación del WanWay GS21, confirme la información vigente en el sitio del fabricante https://www.wanwaytech.net/. El soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo, por lo que se recomienda verificar las especificaciones del dispositivo en la documentación del fabricante.
