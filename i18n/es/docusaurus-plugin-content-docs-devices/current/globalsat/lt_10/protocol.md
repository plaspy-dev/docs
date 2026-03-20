---
slug: /globalsat/lt_10/protocol
id: lt_10-protocol
sidebar_label: Protocol
title: GlobalSat - LT-10 Protocol
sidebar_class_name: menu_item_tracker
description: Contexto público del protocolo del rastreador de ganado GlobalSat LT-10 y su comunicación con Plaspy
keywords:
  - protocolo GlobalSat LT-10
  - rastreador GPS LT-10
  - rastreador LT-10 LoRaWAN
  - protocolo rastreador de ganado GlobalSat
  - protocolo de comunicación LT-10
  - compatibilidad LT-10 Plaspy
  - protocolo de rastreador GPS para Plaspy
  - protocolo de seguimiento de ganado
  - rastreador animal LoRaWAN
  - integración de dispositivos Plaspy
---

# GlobalSat - Protocolo LT-10

Esta página resume el contexto público del protocolo para usar el rastreador de oreja GlobalSat LT-10 con Plaspy. Se centra en cómo el dispositivo comunica información con la plataforma Plaspy a un nivel general, qué papel tiene el protocolo de reporte del dispositivo y consideraciones prácticas para conectar LT-10 usados en seguimiento de ganado y animales de campo. La descripción se limita a hechos públicos y no intenta reproducir detalles internos del fabricante.

El LT-10 es un rastreador de oreja con panel solar que utiliza LoRaWAN para reportar posición GNSS, movimiento y telemetría relacionada con la batería. Plaspy comparte ajustes de conexión entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el dispositivo está configurado para reportar al endpoint de Plaspy. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que la información aquí sirve como guía general y no reemplaza la documentación del fabricante.

## Resumen del protocolo

El protocolo del LT-10 regula cómo el dispositivo envía posición, movimiento y estado desde el campo hacia un servicio backend como Plaspy. En un rastreador de ganado basado en LoRaWAN, el protocolo define qué telemetría se transmite, con qué frecuencia se reporta y cómo la plataforma interpreta esos mensajes en datos de ubicación y sensores utilizables.

- Permite que el LT-10 entregue fijaciones de posición GNSS y eventos de movimiento basados en acelerómetro a Plaspy para monitoreo y alertas.
- Transmite el estado del dispositivo, como nivel de batería e intervalos periódicos de reporte, lo que ayuda a mantener operación a largo plazo en condiciones de campo.
- Proporciona identificadores y telemetría que permiten a Plaspy asociar mensajes con dispositivos específicos y convertir reportes crudos en activos rastreados.
- Funciona junto con el comportamiento de la red LoRaWAN y la configuración del dispositivo para determinar la frecuencia de reporte y la disponibilidad de datos según la radiación solar y condiciones de cobertura.
- Ayuda a la plataforma a aplicar indicadores de estado significativos, como alertas por batería baja y detección de movimiento para la gestión del ganado.

## Cómo Plaspy detecta el protocolo

Plaspy examina automáticamente el tráfico entrante enviado al endpoint compartido del servidor e identifica el protocolo del rastreador, por lo que por lo general usted no necesita seleccionar el protocolo manualmente si el dispositivo está configurado correctamente. La detección automática simplifica la incorporación de una variedad de modelos soportados.

- Plaspy recibe reportes de dispositivos en un único dominio de endpoint compartido d.plaspy.com y en la IP pública 54.85.159.138.
- Todos los dispositivos configurados para Plaspy reportan al mismo puerto, y Plaspy usa ese puerto compartido para aceptar reportes entrantes.
- Plaspy detecta automáticamente el protocolo del rastreador a partir del patrón de conexión y carga útil entrantes, por lo que la selección manual dentro de la plataforma normalmente no es necesaria.
- Una configuración adecuada del dispositivo que apunte al endpoint de Plaspy acelera la detección y asegura que los reportes se procesen correctamente.
- Dado que el firmware y la configuración del equipo afectan los datos reportados, la detección funciona mejor cuando el rastreador está configurado para enviar la telemetría e identificadores esperados.

## Contexto de transporte y conexión

El contexto de conexión abarca el transporte de red y el direccionamiento que el LT-10 debe usar para entregar telemetría a Plaspy. Aunque el LT-10 usa LoRaWAN para la capa de radio y transporte a gateways, la ingestión en el backend de Plaspy acepta reportes de dispositivos en un endpoint de servicio común.

- Los dispositivos pueden configurarse para enviar datos al host de Plaspy en d.plaspy.com o directamente a la IP 54.85.159.138 según la configuración de red.
- Plaspy acepta tráfico de dispositivos en el puerto 8888 y ese mismo puerto se usa en todos los dispositivos soportados en la plataforma Plaspy.
- El rastreador puede configurarse para usar transporte UDP o TCP en el puerto 8888 cuando el dispositivo y la red lo permiten.
- Usar el endpoint y puerto compartidos de Plaspy simplifica el aprovisionamiento de dispositivos y centraliza la comunicación para muchos modelos de rastreadores.
- La configuración de red o de gateway que reenvía uplinks LoRaWAN al endpoint de ingestión de Plaspy debe preservar los identificadores de dispositivo utilizados por el fabricante.

## Notas sobre compatibilidad del protocolo

- Las versiones de firmware pueden cambiar el comportamiento de reporte, como intervalos, campos incluidos o la lógica de reporte de batería; siempre verifique la versión de firmware al evaluar compatibilidad.
- Las revisiones de hardware o las variantes regionales RF del LT-10 pueden afectar la disponibilidad de funciones y el soporte de frecuencias; confirme los detalles de la variante con el fabricante.
- La selección de transporte entre UDP y TCP puede estar limitada por el dispositivo o por middleware en la ruta de datos; elija el transporte que coincida con las capacidades del dispositivo y del gateway.
- La configuración de la red LoRaWAN y la integración de gateways pueden influir en cómo y cuándo los datos llegan a Plaspy; asegúrese de que la red reenvíe los uplinks como se espera.
- En caso de duda, compare los reportes de campo recibidos por Plaspy con la documentación del fabricante y ajuste la configuración del dispositivo en consecuencia.
- Valide que cualquier gateway o servidor de red de terceros en la ruta preserve los identificadores y la telemetría necesarios para que Plaspy procese correctamente los reportes.

## Por qué es importante conocer el protocolo

Comprender el protocolo de comunicación del LT-10 ayuda a asegurar una configuración confiable, reportes de ubicación precisos y un diagnóstico eficaz cuando el dispositivo está en el campo. Conocer cómo el dispositivo reporta y cómo Plaspy ingiere esos datos reduce el tiempo de incorporación y favorece la confiabilidad operativa a largo plazo.

- Ayuda a confirmar que el dispositivo está configurado para reportar al endpoint correcto de Plaspy en d.plaspy.com o 54.85.159.138.
- Facilita el diagnóstico de reportes faltantes o mal formados verificando ajustes de transporte como UDP o TCP en el puerto 8888.
- Apoya decisiones eficientes sobre batería e intervalos de reporte relacionando campos de telemetría con el comportamiento esperado según la radiación solar y condiciones estacionales.
- Aclara cómo se señalan las alertas de movimiento y batería baja para que las reglas de monitoreo en Plaspy reflejen eventos reales del dispositivo.
- Reduce la ambigüedad al coordinar con operadores de red o soporte del fabricante sobre qué datos deberían llegar a Plaspy.

## Por qué usar Plaspy con este protocolo

Usar el GlobalSat LT-10 con Plaspy permite a los administradores de ganado combinar la resistencia de campo del LT-10 y el alcance de LoRaWAN con una plataforma centralizada para visibilidad y supervisión operativa. El LT-10 proporciona posición GNSS periódica y telemetría de movimiento, mientras que Plaspy ingiere esos datos para presentar historial de ubicaciones, alertas de estado y vistas a nivel de flota útiles para la gestión de potreros y el bienestar animal.

Plaspy acepta reportes en el dominio compartido d.plaspy.com y en la IP 54.85.159.138 usando el puerto 8888 y detecta automáticamente el protocolo del rastreador, lo que agiliza la incorporación cuando los dispositivos están configurados para enviar al endpoint de Plaspy. Para saber más sobre Plaspy visite https://www.plaspy.com. Para detalles específicos más recientes sobre el protocolo del dispositivo, notas de firmware e información de variantes, verifique la documentación más reciente del fabricante en https://www.globalsat.com.tw/. El soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo, por lo que consultar la información del fabricante ayuda a asegurar una integración precisa.
