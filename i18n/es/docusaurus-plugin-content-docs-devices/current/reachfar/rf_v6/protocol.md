---
slug: /reachfar/rf_v6/protocol
id: rf_v6-protocol
sidebar_label: Protocol
title: Reachfar - RF-V6+ Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo para integrar el tracker Reachfar RF-V6+ con servidores y ajustes de conexión de Plaspy
keywords:
  - Protocolo Reachfar RF-V6+
  - Protocolo GPS Reachfar RF-V6+
  - Compatibilidad Reachfar RF-V6+ Plaspy
  - Protocolo de rastreo RF-V6+
  - Protocolo tracker GPS Reachfar
  - Protocolo de dispositivo Plaspy
  - Rastreo vehicular RF-V6+
  - Rastreador de activos RF-V6+
  - GPRS TCP IP seguimiento
  - Integración GPS tracker Plaspy
---

# Reachfar - Protocolo RF-V6+

Esta página describe el contexto público del protocolo para usar el tracker Reachfar RF-V6+ con Plaspy. Se centra en cómo el dispositivo se comunica con Plaspy a alto nivel, qué puntos de conexión suele reportar y qué partes de la comunicación son relevantes para una integración exitosa, sin exponer lógica privada de parseo ni detalles internos de firmware.

El RF-V6+ combina posicionamiento GPS, AGPS y LBS con reportes por GPRS TCP/IP y control por SMS, y soporta alarmas como SOS, detección por vibración y eventos de geocerca. Plaspy utiliza ajustes de conexión compartidos entre dispositivos compatibles y detecta el protocolo del tracker de forma automática, pero el comportamiento exacto puede variar según el firmware, la revisión del hardware y la implementación del fabricante, por lo que se recomienda validar el dispositivo frente a la documentación actual de Reachfar.

## Resumen del protocolo

A nivel general, el protocolo de reporte del tracker define cómo el RF-V6+ se identifica, transmite datos de ubicación y alarmas, y acepta controles remotos básicos cuando aplica. Para la integración con Plaspy, los aspectos públicos de este protocolo permiten que la plataforma reciba telemetría utilizable y muestre alertas e historial a los usuarios.

- Permite enviar reportes de posición y telemetría desde el RF-V6+ a un servidor remoto para rastreo en tiempo real.
- Transporta notificaciones de alarmas y eventos como alertas SOS, disparos por vibración y violaciones de geocerca.
- Incluye metadatos de identificación para que Plaspy pueda asociar los mensajes entrantes con el activo correcto.
- Soporta un reporte alternativo y consultas remotas por SMS cuando GPRS no está disponible.
- Proporciona los tipos de datos necesarios para que Plaspy muestre ubicación en vivo, historial de rutas y eventos discretos de alerta.

## Cómo detecta Plaspy el protocolo

Plaspy recibe reportes de dispositivos en un endpoint y puerto compartidos, y usa esa información para reconocer automáticamente el protocolo del tracker. Para la mayoría de usuarios esto significa que cuando el RF-V6+ está configurado para reportar al endpoint de Plaspy, no se requiere seleccionar el protocolo manualmente dentro de Plaspy.

- El dominio del servidor Plaspy para reportes de dispositivos es d.plaspy.com.
- La dirección IP del servidor Plaspy es 54.85.159.138 y la plataforma escucha en el puerto 8888.
- Todos los dispositivos en Plaspy usan el mismo puerto, por lo que un único destino saliente es suficiente para muchos modelos de trackers.
- Cuando un RF-V6+ apunta al endpoint de Plaspy y envía reportes, Plaspy detectará y manejará el protocolo del dispositivo de forma automática.
- Normalmente los usuarios solo configuran el APN y el destino de reporte en el tracker y verifican que llegue al endpoint de Plaspy.

## Transporte y contexto de conexión

El contexto de conexión es clave para la integración porque determina si el RF-V6+ puede alcanzar Plaspy en campo. El RF-V6+ soporta reportes TCP/IP sobre GPRS y también puede usar controles y consultas por SMS como canal complementario.

- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 según el firmware y las opciones de configuración.
- Los dispositivos pueden apuntar al dominio d.plaspy.com o directamente a la IP 54.85.159.138 como destino de reporte.
- Plaspy usa el mismo puerto 8888 para todos los dispositivos soportados para simplificar la configuración de salida en los trackers.
- Si se emplea TCP, el dispositivo establece una sesión hacia el endpoint de Plaspy para enviar reportes periódicos y alarmas.
- Si se prefiere UDP o lo requiere una versión específica de firmware, los reportes pueden enviarse por UDP al mismo destino y puerto de Plaspy.

## Notas sobre compatibilidad del protocolo

- Las versiones de firmware y los menús de configuración varían entre lotes de producción del RF-V6+ y pueden cambiar cómo se seleccionan campos de transporte o reporte.
- Revisiones de hardware o variantes regionales pueden alterar los modos de reporte soportados o las funciones de alarma disponibles.
- La configuración en el lado del fabricante, como APN por defecto o conjuntos de comandos SMS, puede afectar cómo se apunta el dispositivo a Plaspy.
- Elegir TCP versus UDP en el dispositivo puede depender de la confiabilidad del operador y del soporte del firmware del dispositivo.
- El reporte por SMS y los SMS SOS siguen siendo alternativas útiles cuando la cobertura GPRS es deficiente, pero pueden requerir manejo separado.
- Siempre valide cualquier cambio contra la documentación más reciente de Reachfar y pruebe un dispositivo de muestra antes de desplegar a gran escala.

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación del RF-V6+ en términos prácticos ayuda a asegurar una configuración confiable, agilizar la resolución de problemas y obtener un comportamiento predecible en campo. Saber qué revisar en el dispositivo y en el servidor reduce la fricción de integración y garantiza la captura consistente de alertas e historial en Plaspy.

- Asegura la correcta configuración del APN y del destino de reporte para que el dispositivo pueda comunicarse con Plaspy.
- Ayuda a interpretar por qué un dispositivo podría no aparecer en línea si el tipo de transporte o el puerto están desajustados.
- Aclara cuándo se espera usar el fallback por SMS y cómo se entregarán las alertas en ese modo.
- Facilita el diagnóstico de disparos de alarma como vibración o eventos de geocerca al entender qué eventos reporta el dispositivo.
- Apoya la planificación frente a variaciones de firmware al resaltar comportamientos a validar durante las pruebas.

## Por qué usar Plaspy con este protocolo

Usar el Reachfar RF-V6+ con Plaspy ofrece una solución compacta y práctica para organizaciones que necesitan rastreo vehicular portátil y discreto o protección antirrobo, manteniendo baja la complejidad de integración. El RF-V6+ aporta fuentes de ubicación GPS, AGPS y LBS, además de alarmas por vibración, SOS y geocerca que Plaspy puede presentar como eventos en vivo y rutas históricas para monitoreo operativo.

Si desea saber más sobre Plaspy y cómo maneja dispositivos como el RF-V6+ visite https://www.plaspy.com. El soporte de protocolos, el comportamiento del firmware y los detalles de implementación del fabricante pueden cambiar con el tiempo, por lo que le pedimos verificar la información más reciente del protocolo específico y las notas de firmware con Reachfar en https://www.reachfargps.com/ antes de un despliegue a gran escala.
