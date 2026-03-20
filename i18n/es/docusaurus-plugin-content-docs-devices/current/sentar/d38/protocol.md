---
slug: /sentar/d38/protocol
id: d38-protocol
sidebar_label: Protocol
title: Sentar - D38 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo para integrar el smartwatch infantil Sentar D38 con Plaspy, incluyendo conexión y compatibilidad
keywords:
  - protocolo Sentar D38
  - protocolo GPS Sentar D38
  - protocolo de comunicación Sentar D38
  - rastreador D38 Plaspy
  - protocolo smartwatch infantil Sentar
  - protocolo de rastreo D38
  - compatibilidad de dispositivos Plaspy
  - protocolo rastreador GPS Sentar
  - integración Sentar D38
  - telemetría D38 Plaspy
---

# Sentar - Protocolo D38

Esta página ofrece un resumen público del protocolo para usar el smartwatch GPS Sentar D38 con la plataforma Plaspy. Describe el contexto de comunicación que debe esperarse al integrar el dispositivo y resume, en términos no sensibles, los tipos de telemetría y eventos que el dispositivo normalmente envía a un servidor de rastreo. El objetivo es ayudar a usuarios técnicos e integradores a comprender cómo interactúa el D38 con Plaspy sin exponer detalles privados de implementación.

El D38 es un smartwatch infantil basado en Android que incluye GPS, AGPS, LBS y posicionamiento por WiFi, un botón físico de SOS, cámara integrada, conectividad celular con Nano SIM y batería de 710 mAh. Plaspy utiliza ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el dispositivo está configurado para reportar a Plaspy. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que debe esperarse cierta variación en campos y reportes de eventos entre compilaciones de firmware y variantes regionales.

## Resumen del protocolo

El D38 comunica ubicaciones, estado y eventos a un servidor remoto usando su módem celular integrado y conectividad IP. El contexto público del protocolo explica cómo se identifica el rastreador, cómo envía posiciones y telemetría, y cómo se entregan notificaciones de eventos como SOS a Plaspy en un formato que la plataforma puede procesar.

- Reporta fijaciones GNSS y señales complementarias de posicionamiento como AGPS, LBS y WiFi para proporcionar actualizaciones de ubicación útiles a Plaspy.
- Envía identidad del dispositivo y telemetría de salud, incluyendo nivel de batería y señal celular, para que Plaspy pueda mostrar el estado del equipo.
- Entrega notificaciones de eventos como pulsaciones del botón SOS e indicadores relacionados con la cámara o llamadas en el dispositivo para atención inmediata.
- Transmite mensajes sobre transporte IP estándar para que Plaspy reciba actualizaciones en tiempo real, construya historiales y active alertas.
- Colabora con Plaspy en la normalización de entradas de posicionamiento mixtas para mapas, líneas de tiempo e informes de estado para monitoreo y análisis.

## Cómo Plaspy detecta el protocolo

Plaspy recibe los reportes entrantes de los dispositivos en un único endpoint y puerto compartidos y usa esa entrada para detectar automáticamente el protocolo del rastreador. Dado que la plataforma está diseñada para aceptar muchos tipos de dispositivos en el mismo puerto de escucha, normalmente no es necesario seleccionar manualmente un protocolo dentro de Plaspy cuando el rastreador está configurado correctamente para reportar a la plataforma.

- El dominio público del servidor de Plaspy es d.plaspy.com y su IP pública es 54.85.159.138 para el envío de reportes.
- Plaspy escucha en el puerto 8888, que es el mismo puerto usado por todos los dispositivos soportados por la plataforma.
- Los dispositivos pueden configurarse para usar transporte UDP o TCP en el puerto 8888 según las capacidades y ajustes del equipo.
- Cuando un D38 correctamente configurado reporta al endpoint de Plaspy, la plataforma ejecuta detección automática, por lo que la selección manual del protocolo suele ser innecesaria.
- Verifique que la dirección del servidor y los ajustes de transporte del dispositivo coincidan con el endpoint de Plaspy para que la detección y el reporte tengan éxito.

## Transporte y contexto de conexión

El D38 puede enviarse para transmitir datos usando transporte IP estándar mediante la conexión celular del dispositivo. Para la integración con Plaspy, las consideraciones principales son la elección del protocolo de transporte y asegurarse de que el dispositivo esté apuntando al endpoint de Plaspy.

- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 según el soporte y la configuración disponible.
- Los dispositivos pueden apuntar al dominio d.plaspy.com o a la IP pública 54.85.159.138 como destino.
- Plaspy utiliza el mismo puerto 8888 para todos los dispositivos soportados, lo que simplifica la configuración del servidor a través de la flota.
- Asegúrese de que el dispositivo tenga un plan de datos activo en la SIM y los ajustes APN correctos para que los reportes salientes lleguen a Plaspy.
- Tenga en cuenta la NAT del operador, firewalls y el comportamiento de redes regionales al diagnosticar problemas de conectividad hacia el endpoint de Plaspy.

## Notas de compatibilidad del protocolo

- Las versiones de firmware y las actualizaciones OTA pueden introducir cambios en los campos reportados y en el comportamiento de eventos que afectan cómo aparece el D38 en Plaspy.
- Las revisiones de hardware y las variantes regionales pueden modificar las bandas radio o la disponibilidad de sensores, lo que puede cambiar el conjunto de telemetría que envía el dispositivo.
- Las páginas de configuración del fabricante o las herramientas de aprovisionamiento pueden ofrecer campos de transporte y servidor que deben establecerse al endpoint de Plaspy para un reporte exitoso.
- Algunos tipos de eventos, como capturas de cámara o indicadores de llamadas bidireccionales, pueden reportarse de forma diferente según la versión de firmware y requerir validación en Plaspy.
- Seleccionar UDP frente a TCP en el dispositivo puede cambiar las características de entrega pero no modifica el puerto utilizado por Plaspy.
- Siempre valide el comportamiento en un dispositivo de prueba antes de desplegar a gran escala y consulte las notas oficiales del fabricante para detalles específicos del firmware.

## Por qué es importante conocer el protocolo

Comprender el protocolo de comunicación del D38 y su contexto de conexión ayuda a asegurar una configuración fiable del dispositivo, agilizar la resolución de problemas y obtener una operación a largo plazo más predecible dentro de Plaspy. Tener claro qué envía el dispositivo y cómo lo acepta Plaspy reduce el tiempo de integración y evita errores comunes de configuración.

- Confirma la dirección del servidor y el transporte correctos para que el dispositivo alcance el endpoint de Plaspy d.plaspy.com o 54.85.159.138 en el puerto 8888.
- Ayuda a identificar causas de telemetría faltante, como APN incorrecto, puertos salientes bloqueados o campos incompatibles por firmware.
- Permite pruebas focalizadas de flujos de eventos como alertas SOS, actualizaciones de ubicación e informes de estado antes del uso en producción.
- Facilita la planificación ante actualizaciones de firmware y revisiones de hardware que puedan modificar campos reportados o formatos de eventos.
- Mejora el monitoreo operativo al saber qué elementos de telemetría esperar del D38, como GNSS, AGPS, LBS, WiFi y estado de batería.

## Por qué usar Plaspy con este protocolo

Usar el Sentar D38 con Plaspy ofrece una solución práctica para organizaciones y familias que requieren visibilidad consistente, alertas por eventos y reproducción histórica de un rastreador wearable para niños. El D38 aporta posicionamiento multimodal, un botón SOS dedicado y capacidades de cámara en el dispositivo que, al enviarse a Plaspy, se convierten en señales accionables para monitoreo, alertas e informes.

Para más información sobre cómo Plaspy recibe y normaliza la telemetría de dispositivos visite https://www.plaspy.com y revise la documentación y las notas de firmware más recientes de Sentar en http://www.sentarsmart.com/ para confirmar el soporte y comportamiento actual del protocolo. El soporte de protocolo, el comportamiento del firmware y los detalles de implementación del fabricante pueden cambiar con el tiempo, así que verifique la información específica del dispositivo con los recursos oficiales del fabricante.
