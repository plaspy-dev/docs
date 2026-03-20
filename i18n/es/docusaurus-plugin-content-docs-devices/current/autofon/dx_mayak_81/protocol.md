---
slug: /autofon/dx_mayak_81/protocol
id: dx_mayak_81-protocol
sidebar_label: Protocol
title: AutoFon - DX Mayak 8.1 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del AutoFon DX Mayak 8.1 y su comunicación con Plaspy para rastreo y telemetría
keywords:
  - protocolo AutoFon DX Mayak 8.1
  - rastreador GPS AutoFon DX Mayak 8.1
  - compatibilidad DX Mayak 8.1 Plaspy
  - protocolo de rastreador AutoFon
  - protocolo de dispositivo Plaspy
  - protocolo de rastreo GPS
  - rastreo de vehículos AutoFon
  - protocolo de seguimiento DX Mayak
  - protocolo de comunicación AutoFon
  - rastreador GPS compatible con Plaspy
---

# AutoFon - Protocolo DX Mayak 8.1

Esta página ofrece una visión pública del protocolo para usar el AutoFon DX Mayak 8.1 con la plataforma Plaspy. Describe cómo el dispositivo se comunica con un servidor Plaspy, qué esperar del flujo general de mensajes y telemetría, y qué ajustes de conexión se emplean para el reporte. El contenido se centra en detalles públicos y no sensibles para ayudar a administradores e integradores a planear despliegues y tareas de resolución de problemas.

El DX Mayak 8.1 es compatible con Plaspy desde fábrica y reporta ubicación y telemetría mediante reporte GPRS estándar con SMS como vía de respaldo. Plaspy utiliza ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador, aunque el comportamiento exacto puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante. Revise la documentación del dispositivo cuando necesite detalles específicos del firmware.

## Resumen del protocolo

A alto nivel, el DX Mayak 8.1 comunica posición y telemetría a un punto de monitoreo remoto usando su canal de datos celular, y envía mensajes por eventos como movimiento, choque y SOS. El rastreador incluye en sus reportes telemetría como nivel de batería, temperatura, número de satélites y señal GSM, de modo que la plataforma receptora pueda mostrar tanto la ubicación como el estado del equipo.

- Ofrece reportes periódicos y por eventos, de modo que Plaspy recibe actualizaciones rutinarias de posición y alertas inmediatas.
- Envía telemetría junto con la ubicación para permitir el monitoreo de batería y señal en Plaspy.
- Usa GPRS como canal principal de reporte y SMS como vía secundaria y de respaldo.
- Conserva mensajes no enviados en almacenamiento no volátil y retransmite los paquetes en cola cuando se restablece la conectividad.
- Incluye presencia BLE y datos de localización de corto alcance que pueden reportarse a través del dispositivo y correlacionarse en la plataforma Plaspy.

## Detección del protocolo por parte de Plaspy

Plaspy recibe mensajes de muchos modelos de dispositivos y detecta automáticamente el protocolo del rastreador cuando el equipo está configurado para reportar al endpoint de Plaspy. En la mayoría de los despliegues el usuario no necesita seleccionar un protocolo manualmente dentro de Plaspy, siempre que el rastreador esté configurado para enviar datos a la dirección y puerto correctos del servidor.

- Plaspy detecta automáticamente el protocolo del rastreador, por lo que generalmente no hace falta seleccionarlo manualmente.
- Configure el dispositivo para reportar al endpoint de Plaspy y la plataforma identificará los mensajes entrantes.
- La identificación se basa en los mensajes que llegan al endpoint compartido de Plaspy, por lo que es esencial una direccionamiento correcto.
- Si no aparecen mensajes en Plaspy, confirme la configuración de reporte del dispositivo y la conectividad de red hacia la dirección del servidor Plaspy.

## Transporte y contexto de conexión

El DX Mayak 8.1 soporta reporte de datos celulares estándar y puede configurarse para usar UDP o TCP según los ajustes del dispositivo y el firmware. Plaspy ofrece un endpoint único y compartido para todos los dispositivos, lo que simplifica la configuración y los requisitos de hospedaje.

- Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888 según la compatibilidad y la configuración elegida.
- El dominio del servidor Plaspy es d.plaspy.com y la IP del servidor es 54.85.159.138 para direccionamiento directo si fuera necesario.
- El puerto usado por Plaspy para el reporte de dispositivos es 8888 y todos los dispositivos en Plaspy emplean el mismo puerto.
- Use el mismo endpoint y puerto de Plaspy en la configuración para permitir que la plataforma reciba y procese los mensajes.
- El control por SMS y la ruta de respaldo permanecen disponibles como canal secundario cuando GPRS no es accesible.

## Notas sobre compatibilidad del protocolo

- El comportamiento del protocolo puede diferir entre revisiones de firmware. Verifique la versión de firmware del dispositivo al comprobar compatibilidad.
- Las revisiones de hardware o variantes regionales pueden cambiar las opciones de reporte disponibles o los ajustes de transporte por defecto.
- La elección de transporte entre UDP y TCP puede afectar la entrega en redes con limitaciones; seleccione el modo que coincida con su despliegue y las capacidades del dispositivo.
- Ajustes del fabricante como APN o la configuración de la dirección del servidor deben ser correctos para que los mensajes lleguen a Plaspy.
- El respaldo por SMS requiere una SIM y provisión de red adecuada y debería probarse cuando se necesite redundancia.
- Consulte la documentación del fabricante para comandos de configuración específicos del dispositivo o notas de firmware antes de desplegar a gran escala.

## Por qué es importante conocer el protocolo

Comprender cómo se comunica el DX Mayak 8.1 ayuda a garantizar reportes confiables a Plaspy, facilita la resolución de problemas y respalda la confiabilidad a largo plazo de los activos desplegados. Conocer el canal de reporte, los campos de telemetría esperados y las opciones de transporte reduce el tiempo de integración y ayuda a los administradores a responder a casos límite como pérdida de conectividad o cambios de firmware.

- Confirma que los dispositivos apuntan al endpoint y puerto correctos de Plaspy para que los mensajes lleguen de forma fiable.
- Ayuda a diagnosticar problemas de entrega distinguiendo entre fallas de transporte y errores de configuración del dispositivo.
- Permite planear la autonomía de batería y los intervalos de reporte que se ajusten a las necesidades operativas sin consumo inesperado.
- Facilita la validación de que las alarmas críticas como movimiento y SOS se transmiten y reciben en Plaspy.
- Apoya decisiones operativas sobre si usar UDP o TCP para un escenario de despliegue específico.

## Por qué usar Plaspy con este protocolo

Usar el DX Mayak 8.1 con Plaspy ofrece a las organizaciones un camino sencillo para recibir datos de ubicación, eventos y telemetría desde un rastreador compacto y de bajo consumo. La larga autonomía en espera del dispositivo, sus alertas por eventos y el reporte de telemetría encajan bien con los paneles y flujos de notificación de Plaspy para proporcionar conciencia situacional en casos de uso de flotas, activos y antirrobo.

To learn more about Plaspy and how it handles device communication visit https://www.plaspy.com. For the most current device level protocol details, firmware notes and manufacturer specific configuration instructions verify the official AutoFon documentation at https://www.autofon.ru/. Please note that protocol support, firmware behavior, and device implementation details can change over time so always check manufacturer resources for the latest information.
