---
slug: /gotop/s7/protocol
id: s7-protocol
sidebar_label: Protocol
title: GOTOP - S7 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen del protocolo público del rastreador GOTOP S7 y su compatibilidad con Plaspy
keywords:
  - protocolo GOTOP S7
  - protocolo GPS GOTOP S7
  - protocolo de comunicación GOTOP S7
  - protocolo de rastreo GOTOP S7
  - compatibilidad GOTOP S7 Plaspy
  - integración telemetría GOTOP S7
  - rastreo de flotas GOTOP S7
  - integración RS232 GOTOP S7
  - monitoreo de combustible GOTOP S7
  - rastreador vehicular GOTOP S7
---

# GOTOP - S7 Protocolo

Esta página resume el contexto público del protocolo para usar el rastreador GOTOP S7 con Plaspy. Explica, a un nivel práctico, cómo se comunica el dispositivo con Plaspy, qué tipos de datos suelen intercambiarse y qué ajustes de conexión utiliza la plataforma. El objetivo es ofrecer información útil sobre la integración sin revelar detalles internos del dispositivo.

Plaspy utiliza ajustes de conexión compartidos entre los equipos compatibles y detecta automáticamente el protocolo del rastreador cuando el dispositivo se reporta al endpoint de Plaspy. El comportamiento exacto y las funciones disponibles en el S7 pueden variar según la versión de firmware, la revisión de hardware y la configuración del fabricante, por lo que las notas siguientes se orientan a detalles públicos, no sensibles, y expectativas operativas.

## Resumen del protocolo

El protocolo del rastreador es el conjunto de reglas y tipos de mensajes que el S7 emplea para reportar coordenadas GPS, estado y telemetría de sensores a un servidor. Para Plaspy, el protocolo permite que el dispositivo se identifique, envíe posición y telemetría, y reporte eventos provenientes de E/S y RS232 que Plaspy puede usar en mapas en vivo, alertas e informes históricos.

- Transporta actualizaciones de ubicación y telemetría como posición GNSS, estado de ignición, lecturas analógicas de combustible y datos de periféricos RS232 hacia la nube.
- Incluye la identificación del dispositivo para que Plaspy pueda asociar los reportes entrantes con el vehículo o activo correcto.
- Transmite información de eventos utilizada para alertas y flujos automatizados, por ejemplo cambios de ignición, movimiento o señales de manipulación.
- Soporta reportes periódicos y mensajes por evento para que Plaspy construya vistas en tiempo real e históricas de la actividad del dispositivo.
- Puede incluir datos opcionales de sensores y periféricos del S7, como lecturas del indicador de combustible y dispositivos conectados por RS232.

## Cómo Plaspy detecta el protocolo

Plaspy acepta telemetría en un endpoint y puerto compartidos y usa esa conexión entrante para determinar automáticamente el protocolo del rastreador. Cuando usted configure un S7 para apuntar a Plaspy, por lo general la plataforma no requiere que el usuario seleccione explícitamente el protocolo.

- Los dispositivos deben configurarse para reportar al endpoint del servidor Plaspy en d.plaspy.com o directamente a la IP del servidor Plaspy 54.85.159.138.
- Todos los dispositivos en Plaspy usan el mismo puerto, por lo que puede configurar el S7 para usar el puerto 8888 para los reportes.
- Plaspy admite tanto UDP como TCP en el puerto 8888; elija el transporte que soporte el dispositivo y la red.
- Cuando el S7 se reporte al endpoint de Plaspy, la plataforma detecta automáticamente el protocolo del rastreador y asocia el dispositivo con la cuenta si los identificadores coinciden.
- En la mayoría de los casos, usted solo debe asegurarse de que el APN y los ajustes de red estén correctos en el S7 y configurar el dominio o IP del servidor y el puerto de reporte.

## Contexto de transporte y conexión

Los detalles de conexión son importantes para una entrega confiable. El S7 puede configurarse para usar UDP o TCP para reportar, y Plaspy acepta ambas opciones de transporte en el puerto común de reporte.

- El S7 puede configurarse para usar UDP o TCP según las capacidades del dispositivo y la preferencia del instalador.
- Plaspy escucha en el puerto 8888 para los reportes de dispositivos y utiliza el mismo puerto para todos los dispositivos compatibles para simplificar la configuración.
- Los dispositivos pueden apuntar al dominio del servidor Plaspy d.plaspy.com o a la IP 54.85.159.138 si no hay DNS disponible o se prefiere usar la IP.
- Elija UDP para menor sobrecarga y semánticas de entrega más laxas, o TCP cuando el firmware del dispositivo requiera entrega fiable y ordenada.
- Asegúrese de que el perfil de la SIM y la conectividad celular permitan conexiones salientes al endpoint y al puerto 8888 de Plaspy.

## Notas sobre compatibilidad del protocolo

- Las diferencias de versión de firmware pueden cambiar los tipos de mensajes disponibles y los comandos de configuración; confirme la versión de firmware del dispositivo al validar el comportamiento.
- Revisiones de hardware o variantes regionales del S7 pueden exponer mapeos de E/S o opciones de periféricos distintas, como el cableado RS232 y rangos analógicos.
- La selección del transporte entre UDP y TCP debe coincidir con lo que soporte el firmware del dispositivo y lo que la red móvil permita de manera fiable.
- Al integrar periféricos RS232 o sensores personalizados, valide que los datos relevantes estén presentes en la telemetría enviada a Plaspy para su caso de uso.
- Algunas funciones, como la lectura del indicador de combustible desde el emisor original del vehículo, dependen del cableado y la calibración del vehículo más que de la configuración en Plaspy.
- Verifique siempre la compatibilidad y los pasos de configuración contra la documentación del fabricante para el lote de producción o la versión de firmware específica.

## Por qué es importante entender el protocolo

Comprender cómo se comunica el S7 con Plaspy ayuda a asegurar una instalación fluida, reportes confiables y una resolución de problemas más rápida cuando surjan inconvenientes. Tener expectativas claras sobre transporte, identificadores y tipos de evento reduce el tiempo de configuración y mejora la fiabilidad a largo plazo.

- Asegura la configuración correcta del servidor y puerto para que los reportes del dispositivo lleguen a Plaspy sin bloqueos de red.
- Ayuda a los instaladores a elegir el transporte y los ajustes APN adecuados para el entorno de despliegue.
- Facilita la interpretación del comportamiento del dispositivo, como intervalos de reporte, detección de ignición y telemetría de combustible en los paneles de Plaspy.
- Apoya la planificación de integraciones periféricas como cámaras RS232 o lectores RFID y confirma que sus datos se incluyan en la telemetría.
- Agiliza la resolución de problemas al acotar posibles causas a firmware, cableado, transporte o conectividad celular.

## Ventajas de usar Plaspy con este protocolo

Usar el GOTOP S7 con Plaspy ofrece visibilidad práctica en tiempo real, detección de eventos e informes históricos para vehículos y activos móviles. La carcasa robusta IP66 del S7, su amplio rango de voltaje, módulos integrados GNSS y celular, y las opciones flexibles de E/S y RS232 lo hacen adecuado para flotas, antirobo y aplicaciones de monitoreo de combustible, donde Plaspy proporciona paneles centralizados, alertas y analítica.

Para saber más sobre cómo funciona Plaspy con rastreadores como el GOTOP S7 visite https://www.plaspy.com. Para obtener el comportamiento específico más actualizado por firmware, diagramas de cableado y detalles del fabricante, verifique la información en el sitio de GOTOP https://www.gotop.cc/ ya que el soporte del protocolo y la implementación del dispositivo pueden cambiar con las revisiones de firmware y hardware.
