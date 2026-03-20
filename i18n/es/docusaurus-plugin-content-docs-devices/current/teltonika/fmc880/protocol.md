---
slug: /teltonika/fmc880/protocol
id: fmc880-protocol
sidebar_label: Protocol
title: Teltonika - FMC880 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo para integrar Teltonika FMC880 con Plaspy; incluye ajustes de conexión y notas de compatibilidad
keywords:
  - protocolo Teltonika FMC880
  - protocolo GPS FMC880
  - Teltonika FMC880 Plaspy
  - protocolo de comunicación FMC880
  - protocolo rastreador GPS Teltonika
  - seguimiento de flotas FMC880
  - compatibilidad Teltonika FMC880
  - sensores BLE FMC880
  - GNSS de doble banda FMC880
  - gestión de flotas FMC880
---

# Teltonika - Protocolo FMC880

Esta página describe el contexto público del protocolo para usar el rastreador Teltonika FMC880 con Plaspy. Explica de forma general y no sensible cómo se comunica el dispositivo, y destaca los ajustes de conexión y las consideraciones de compatibilidad relevantes al integrar el FMC880 con Plaspy.

El FMC880 es un rastreador resistente de montaje con batería que ofrece 4G LTE Cat 1 con fallback 2G, GNSS de doble banda para mayor precisión en la posición y soporte Bluetooth Low Energy para sensores externos. Plaspy usa ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, aunque el comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante.

## Resumen del protocolo

El protocolo del dispositivo es el conjunto de mensajes e informes que el FMC880 envía y recibe para proporcionar ubicación, telemetría y datos de sensores a un servidor. En la práctica, Plaspy recibe fijaciones GNSS, telemetría de los sensores internos y datos opcionales de sensores BLE reportados por el FMC880, y luego mapea esos informes a eventos de la plataforma y al historial.

- Permite que el FMC880 establezca una sesión de datos y transmita GNSS y telemetría a Plaspy
- Transporta datos de identificación del dispositivo para que Plaspy asocie los informes con el activo correcto
- Transmite lecturas de sensores como temperatura vía BLE o eventos de movimiento para monitoreo y alertas
- Soporta actualizaciones periódicas de ubicación y mensajes basados en eventos como geocercas, cambios de ignición y movimiento
- Permite flujos de downlink y configuración remota cuando el dispositivo y la red soportan comandos iniciados por el servidor
- Proporciona los metadatos necesarios para que Plaspy presente historial, alertas e informes

## Cómo detecta Plaspy el protocolo

Plaspy opera un endpoint compartido y un puerto para los datos entrantes de los rastreadores y realiza la detección automática del protocolo cuando llegan los datos. En la mayoría de los casos, los usuarios no necesitan seleccionar un protocolo dentro de Plaspy si el FMC880 está configurado para reportar al endpoint de la plataforma.

- El dominio del servidor Plaspy para el reporte de dispositivos es d.plaspy.com
- La dirección IP del servidor Plaspy para reportes es 54.85.159.138
- Los dispositivos deben apuntar al endpoint y puerto de Plaspy para habilitar la detección automática del protocolo
- Plaspy detecta automáticamente el protocolo del rastreador una vez que el dispositivo envía datos al endpoint compartido
- Normalmente no es necesaria la selección manual de protocolo en la plataforma cuando el rastreador está correctamente configurado para reportar
- La detección cubre tipos de telemetría comunes como posición GNSS, estado de movimiento e informes de sensores BLE

## Transporte y contexto de conexión

El FMC880 puede configurarse para usar métodos de transporte estándar para enviar telemetría a un servidor remoto. Plaspy acepta informes a través del puerto compartido utilizado por todos los dispositivos compatibles, y el FMC880 puede configurarse para usar UDP o TCP según la configuración del dispositivo y las condiciones de la red.

- El dispositivo puede configurarse usando UDP o TCP en el puerto 8888
- Plaspy escucha en el puerto 8888 para conexiones de dispositivos y todos los dispositivos soportados por Plaspy usan el mismo puerto
- Los dispositivos pueden apuntar al dominio d.plaspy.com o directamente a la IP del servidor 54.85.159.138
- La elección entre TCP y UDP puede afectar las garantías de entrega y depende de la configuración del FMC880 y del comportamiento de la red celular
- Asegúrese de que el APN y la conectividad a Internet estén correctamente configurados en el dispositivo para que pueda alcanzar el endpoint de Plaspy
- Las reglas de firewall deben permitir conexiones salientes al endpoint de Plaspy y las respuestas entrantes según lo requiera el transporte

## Notas de compatibilidad del protocolo

- Las diferencias de firmware entre unidades FMC880 pueden cambiar las funciones disponibles o los campos de mensaje; verifique las notas de la versión del firmware para el comportamiento específico del dispositivo
- Las revisiones de hardware y variantes opcionales, como unidades con giroscopio o variantes regionales celulares, pueden afectar el conjunto de telemetría reportado
- La disponibilidad de sensores BLE depende de la imagen de firmware configurada y del soporte de los periféricos conectados
- La selección de transporte entre UDP y TCP puede verse limitada por políticas de red y el comportamiento de los operadores regionales
- Plaspy usa el mismo puerto para todos los dispositivos soportados, lo que simplifica la configuración, pero confirme que el dispositivo apunte al endpoint correcto
- Siempre valide los detalles de integración contra la documentación oficial del dispositivo y la configuración del operador móvil utilizada en la implementación
- Las variantes regionales implican que el soporte de bandas celulares difiere por mercado; confirme que la unidad soporta las bandas requeridas para una conectividad confiable

## Por qué es importante entender el protocolo

Comprender cómo se comunica el FMC880 a nivel de protocolo ayuda al configurar los dispositivos, diagnosticar problemas de entrega y planificar la operación a escala. Tener claro los intervalos de reporte, la elección del transporte y la telemetría disponible garantiza un mapeo preciso de los datos del dispositivo en los flujos de trabajo y alertas de Plaspy.

- Acelera la resolución de problemas cuando un dispositivo no aparece en Plaspy o falta telemetría esperada
- Ayuda a elegir la configuración de transporte adecuada para un reporte confiable en su región de operación
- Sirve para planificar actualizaciones de firmware y habilitación de funciones como reenvío de sensores BLE o eventos de giroscopio
- Facilita el mapeo correcto de campos de sensores a alarmas y umbrales de reporte en la plataforma
- Reduce el tiempo de despliegue asegurando que los ajustes del dispositivo coincidan con el endpoint y puerto de Plaspy
- Mejora la confiabilidad a largo plazo al clarificar cómo interactúan energía, frecuencia de reporte y muestreo de sensores con las expectativas de la plataforma

## Por qué usar Plaspy con este protocolo

Usar el FMC880 con Plaspy ofrece una solución práctica para flotas y propietarios de activos que necesitan precisión de posición robusta, conectividad celular resistente y monitoreo flexible de sensores. Plaspy recibe los informes del dispositivo, los convierte en eventos de la plataforma y proporciona visibilidad y herramientas operativas como rastreo en vivo, reproducción de historial, alertas de geocerca y reglas basadas en sensores sin requerir una configuración de puerto por dispositivo.

Para conocer más sobre cómo Plaspy funciona con rastreadores resistentes como el FMC880 visite https://www.plaspy.com. Para detalles específicos y actualizados sobre el protocolo del dispositivo, comportamiento de firmware y notas de implementación consulte la documentación del fabricante en https://www.teltonika-gps.com/ ya que el soporte de dispositivos y las características de firmware pueden cambiar con el tiempo.
