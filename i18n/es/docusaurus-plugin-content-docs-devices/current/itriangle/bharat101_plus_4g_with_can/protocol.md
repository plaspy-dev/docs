---
slug: /itriangle/bharat101_plus_4g_with_can/protocol
id: bharat101_plus_4g_with_can-protocol
sidebar_label: Protocol
title: iTriangle - Bharat101 Plus 4G with CAN Protocol
sidebar_class_name: menu_item_tracker
description: Visión general pública del protocolo del iTriangle Bharat101 Plus 4G con CAN y su comunicación con Plaspy para rastreo de flotas
keywords:
  - protocolo iTriangle Bharat101 Plus 4G con CAN
  - protocolo Bharat101 Plus 4G
  - protocolo rastreador GPS iTriangle
  - telemetría CAN bus Bharat101
  - rastreador compatible con Plaspy
  - protocolo de rastreo de vehículos
  - telemetría para gestión de flotas
  - protocolo de rastreador AIS 140
  - integración Bharat101 con Plaspy
  - protocolo rastreador GPS 4G
---

# iTriangle - Bharat101 Plus 4G with CAN Protocolo

Esta página describe el contexto público del protocolo para usar el tracker iTriangle Bharat101 Plus 4G with CAN con Plaspy. Se centra en cómo el dispositivo se comunica con Plaspy en términos generales, qué papel juega el protocolo de comunicación en la entrega de posición y telemetría del vehículo, y qué debe revisar al integrar este tracker certificado AIS-140 en una implementación de Plaspy.

Plaspy utiliza ajustes de conexión compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del tracker cuando el dispositivo reporta al endpoint de Plaspy. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página evita detalles específicos de firmware e invita a verificar la documentación del fabricante cuando sea necesario.

## Resumen del protocolo

El protocolo de reporte define cómo el Bharat101 Plus 4G with CAN transmite posición GNSS, telemetría de sensores y datos del bus CAN a un servidor remoto para que Plaspy pueda ingerir y mostrar esa información. En la práctica, este protocolo regula la señalización usada para identificar el dispositivo, los reportes periódicos o por evento de posición y la transferencia de parámetros derivados del CAN y estados de entradas/salidas para flujos de trabajo de flotas.

- Permite el envío de posición GNSS, velocidad y hora a Plaspy para seguimiento en tiempo real e historial.
- Transporta telemetría derivada del bus CAN, como parámetros del motor y valores de sensores del vehículo cuando está habilitado.
- Informa estados de entradas y salidas digitales, eventos del acelerómetro, alertas por manipulación y estado de ignición para soportar alarmas y automatizaciones.
- Proporciona un canal para reportes de salud del dispositivo, como estado de batería de respaldo y conectividad, sin exponer detalles internos del firmware.
- Admite disparadores de gestión remota tales como notificaciones relacionadas con OTA, según las funciones y la configuración que provea el fabricante.

## Cómo Plaspy detecta el protocolo

Plaspy acepta reportes de una amplia variedad de modelos de tracker usando un endpoint y puerto compartidos, y utiliza ese endpoint para determinar automáticamente el protocolo en la mayoría de los casos. Cuando el Bharat101 Plus 4G with CAN está configurado para reportar a Plaspy, la plataforma ingiere el tráfico entrante y aplica el manejo apropiado para ese tipo de dispositivo sin necesidad de seleccionar el protocolo manualmente en el flujo de configuración típico.

- Plaspy escucha en un puerto común para los reportes de dispositivos y aplica detección automática para los trackers soportados.
- Normalmente solo necesita apuntar el dispositivo al endpoint de Plaspy y usar el transporte correcto; Plaspy se encarga del reconocimiento del protocolo.
- Si el tracker está bien configurado y es alcanzable en el endpoint de Plaspy, la selección manual del protocolo dentro de Plaspy suele ser innecesaria.
- La detección automática reduce la complejidad de configuración en flotas con modelos mixtos de dispositivos, manteniendo el mapeo de datos por dispositivo.
- Para casos límite o firmware personalizado, el soporte de Plaspy puede ayudar a confirmar que el dispositivo está reportando en el formato esperado.

## Transporte y contexto de conexión

Los ajustes de conexión describen cómo el dispositivo llega a Plaspy pero no exponen la lógica del parser ni los formatos internos de los mensajes. El Bharat101 Plus 4G with CAN puede apuntarse a Plaspy usando los transportes de red estándar que soporta su firmware, y Plaspy proporciona un endpoint público estable para la ingestión.

- Los dispositivos pueden configurarse para reportar al dominio de Plaspy d.plaspy.com o directamente a la IP del servidor 54.85.159.138.
- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 según el soporte y la configuración del dispositivo.
- Todos los dispositivos en Plaspy usan el mismo puerto para reportes, lo que simplifica la planificación de firewalls y redes.
- La elección entre UDP o TCP depende del firmware del tracker y de las preferencias operativas respecto a semánticas de entrega y retransmisión.
- Asegúrese de que firewalls de red y la configuración APN del operador permitan tráfico saliente hacia el endpoint de Plaspy y el puerto 8888.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar la temporización de mensajes, los campos disponibles o las funciones opcionales; siempre revise las notas de la versión de firmware.
- Las variantes de hardware o SKUs regionales pueden tener conjuntos de funciones diferentes, como disponibilidad de canales CAN u opciones de BLE.
- La elección del transporte (UDP vs TCP) puede afectar el comportamiento; valide cuál es el transporte por defecto que usa su firmware.
- La certificación AIS-140 cubre el cumplimiento normativo pero no garantiza comportamiento idéntico del protocolo entre diferentes versiones de firmware.
- Opciones de configuración del fabricante, como habilitar el reenvío de parámetros CAN o el mapeo de sensores de combustible, pueden modificar la telemetría enviada a Plaspy.
- Valide los detalles de integración contra la documentación de iTriangle y pruebe un dispositivo representativo antes de desplegar a gran escala.

## Por qué es importante entender el protocolo

Tener un entendimiento práctico del protocolo del tracker ayuda a garantizar una configuración confiable, el mapeo correcto de la telemetría del vehículo en Plaspy y una resolución más rápida cuando faltan reportes o los campos difieren de lo esperado.

- Le ayuda a configurar reglas de red y ajustes APN del operador para permitir tráfico hacia d.plaspy.com o 54.85.159.138 en el puerto 8888.
- Facilita confirmar si el dispositivo debe usar UDP o TCP y cómo esa elección impacta la entrega y los reintentos.
- Permite mapear más fácilmente los parámetros originados en el CAN dentro de los perfiles de vehículo y plantillas de reporte en Plaspy.
- Agiliza la resolución de problemas al clarificar qué elementos son configuración del dispositivo y cuáles son comportamientos de mapeo de la plataforma.
- Apoya la gestión de cambios al actualizar firmware o reemplazar hardware para preservar la consistencia de la telemetría.

## Por qué usar Plaspy con este protocolo

Usar el Bharat101 Plus 4G with CAN junto a Plaspy ofrece a los operadores de flotas la combinación de un endpoint telemático robusto y certificado AIS-140 con una plataforma que acepta automáticamente reportes de dispositivos en un endpoint compartido de Plaspy. Esta combinación es útil para organizaciones que requieren visibilidad de ubicación consistente, diagnóstico basado en CAN y alertas basadas en eventos para monitoreo operativo y cumplimiento.

Si desea más información sobre cómo Plaspy maneja integraciones de dispositivos y capacidades para flotas, visite https://www.plaspy.com. Para detalles específicos más actualizados sobre el protocolo del dispositivo, notas de firmware y revisiones de hardware del Bharat101 Plus 4G with CAN, verifique la información en el sitio del fabricante https://www.itriangle.net/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
