---
slug: /aplicom/a11_lte_ble/protocol
id: a11_lte_ble-protocol
sidebar_label: Protocol
title: Aplicom - A11 LTE BLE Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del Aplicom A11 LTE BLE y cómo se comunica con Plaspy para seguimiento de flotas y activos
keywords:
  - Protocolo Aplicom A11 LTE BLE
  - Protocolo GPS Aplicom A11 LTE BLE
  - Aplicom A11 LTE BLE con Plaspy
  - Protocolo de seguimiento Aplicom
  - Compatibilidad A11 LTE BLE
  - Protocolo de rastreador GPS Plaspy
  - Seguimiento de flotas Aplicom
  - Protocolo de rastreo Bluetooth LE
  - Telemetría A11 LTE BLE
  - Actualizaciones OTA Aplicom
---

# Aplicom - Protocolo A11 LTE BLE

Esta página describe el contexto público del protocolo para usar el rastreador Aplicom A11 LTE BLE con Plaspy. Explica, a alto nivel, cómo el dispositivo se comunica con Plaspy para telemetría, posicionamiento y datos suplementarios de sensores, sin entrar en detalles privados de implementación. El A11 LTE BLE es un dispositivo telemático probado en campo con conectividad móvil global, emparejamiento Bluetooth LE para balizas y sensores, y capacidad de actualización Over The Air; estas capacidades determinan cómo reporta datos a un backend como Plaspy.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el dispositivo reporta a la plataforma. El comportamiento exacto del protocolo y la cadencia de mensajes pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante. Por esas razones, esta página se enfoca en el contexto de conexión, los roles del protocolo y consideraciones prácticas de compatibilidad más que en los detalles internos del dispositivo.

## Visión general del protocolo

El protocolo del A11 LTE BLE regula cómo el dispositivo se identifica, transmite datos de ubicación y sensores, y recibe configuraciones o comandos cuando está soportado. En la práctica, el protocolo traduce lecturas de sensores, soluciones GNSS y eventos de etiquetas Bluetooth en mensajes que un servidor puede procesar para seguimiento y gestión de flotas.

- Transporta identidad del dispositivo y telemetría para que Plaspy pueda correlacionar los informes con el activo correspondiente
- Comunica ubicación GNSS, marcas de tiempo y estado de movimiento para seguimiento en tiempo real y registro histórico
- Envía información de etiquetas y sensores Bluetooth LE para aportar datos contextuales junto con la ubicación
- Soporta configuración remota y activadores de actualización OTA cuando el dispositivo y el flujo de trabajo del backend lo permiten
- Permite entrega fiable sobre transporte TCP o UDP hacia el endpoint configurado de Plaspy

## Cómo Plaspy detecta el protocolo

Plaspy escucha conexiones entrantes en un endpoint público compartido y determina automáticamente el tipo de protocolo a partir del flujo de datos recibido. Cuando el A11 LTE BLE está configurado para reportar al endpoint de Plaspy, por lo general usted no necesita seleccionar el protocolo manualmente dentro de la plataforma.

- El dominio del servidor Plaspy es d.plaspy.com, que apunta al endpoint público de ingestión
- La IP del servidor Plaspy es 54.85.159.138 para casos en los que se use un endpoint por dirección IP en lugar del dominio
- El puerto usado por Plaspy para el reporte de dispositivos es 8888 y es el mismo para todos los dispositivos soportados
- Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888 según capacidades y elección de configuración
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que un dispositivo correctamente apuntado será reconocido sin selección manual
- Asegúrese de que el dispositivo reporte a d.plaspy.com o a 54.85.159.138 en el puerto 8888 para la conectividad inicial

## Transporte y contexto de conexión

El contexto de conexión es deliberadamente sencillo desde el lado del servidor para facilitar la configuración del dispositivo. El A11 LTE BLE soporta conexiones de datos IP móviles sobre redes celulares y puede enviar datos al endpoint de Plaspy usando UDP o TCP según la configuración desplegada.

- Los dispositivos pueden apuntar al dominio d.plaspy.com o a la dirección IP 54.85.159.138
- El puerto de transporte para todos los dispositivos Plaspy es 8888 y debe usarse cuando el rastreador se conecte a Plaspy
- El rastreador puede usar UDP o TCP en el puerto 8888 según opciones de firmware y la configuración administrativa
- La conectividad celular ofrece cobertura global para reportes GNSS y telemetría
- La conectividad Bluetooth LE complementa los reportes al entregar datos de balizas y sensores que el dispositivo reenvía a Plaspy
- El soporte OTA en el dispositivo puede cambiar el comportamiento del firmware, por lo que las opciones de transporte son un punto de verificación importante después de actualizaciones

## Notas de compatibilidad del protocolo

- Las versiones de firmware pueden modificar la cadencia de mensajes, los campos disponibles y los transportes soportados; siempre anote la versión de firmware al validar compatibilidad
- Las revisiones de hardware y accesorios opcionales, como sensores externos o conjuntos de etiquetas BLE, pueden afectar las cargas útiles de datos disponibles
- Las opciones de configuración del fabricante pueden permitir seleccionar UDP o TCP, así que confirme que el transporte coincide con las expectativas de Plaspy para su despliegue
- Las actualizaciones OTA del fabricante pueden introducir cambios de comportamiento; verifique la configuración tras una actualización
- Apunte el dispositivo a d.plaspy.com o a 54.85.159.138 en el puerto 8888 para asegurar que la plataforma reciba los reportes
- Probar una muestra pequeña de dispositivos en las condiciones de red previstas ayuda a identificar matices de compatibilidad desde temprano
- Consulte la documentación oficial del fabricante para confirmar ajustes y capacidades específicas del dispositivo

## Por qué es importante comprender el protocolo

Entender cómo el A11 LTE BLE se comunica con Plaspy acelera la puesta en marcha, reduce el tiempo de resolución de problemas y ayuda a mantener datos de flota fiables a lo largo del tiempo. Saber qué partes del sistema son ajustes de transporte, cuáles son capacidades del dispositivo y qué depende del firmware ayuda a los equipos a tomar decisiones prácticas durante el despliegue y el mantenimiento.

- Garantiza que los dispositivos estén configurados para apuntar a d.plaspy.com o 54.85.159.138 en el puerto 8888 para que los reportes lleguen a Plaspy
- Ayuda a distinguir entre problemas de transporte de red y comportamientos dependientes del protocolo o del firmware
- Facilita flujos de trabajo de actualización OTA al indicar cuándo deben revisarse las configuraciones tras actualizaciones
- Mejora la integración con sistemas complementarios al aclarar qué datos puede suministrar el rastreador
- Ayuda en la resolución de problemas al centrar la investigación en transporte, versión de firmware y emparejamiento de etiquetas en lugar de especular sobre formatos de mensajes

## Por qué usar Plaspy con este protocolo

Usar el Aplicom A11 LTE BLE con Plaspy ofrece a las organizaciones una manera práctica de consolidar ubicación GNSS, contexto de sensores Bluetooth LE y estado del dispositivo en una sola plataforma de gestión de flotas. Para operaciones que requieren cobertura amplia e integraciones de sensores flexibles, el A11 LTE BLE emparejado con Plaspy puede proporcionar la visibilidad necesaria para enrutamiento, monitoreo de activos y cumplimiento de procesos.

Para saber más sobre Plaspy y cómo gestiona la conectividad y detección de protocolos visite https://www.plaspy.com. Para los detalles más recientes sobre el protocolo específico del dispositivo, notas de firmware e instrucciones de configuración, verifique la información con el fabricante en https://www.aplicom.com/ ya que el comportamiento y los detalles de implementación pueden cambiar con el tiempo.
