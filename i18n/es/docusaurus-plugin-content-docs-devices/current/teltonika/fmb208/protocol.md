---
slug: /teltonika/fmb208/protocol
id: fmb208-protocol
sidebar_label: Protocol
title: Teltonika - FMB208 Protocol
sidebar_class_name: menu_item_tracker
description: Visión general pública del protocolo del Teltonika FMB208 y cómo reporta a los servidores de Plaspy
keywords:
  - protocolo Teltonika FMB208
  - rastreador GPS Teltonika FMB208
  - protocolo FMB208 Plaspy
  - protocolo de comunicación FMB208
  - compatibilidad protocolo Teltonika
  - integración rastreador GPS Plaspy
  - protocolo rastreador AIS140
  - telemetría FMB208
  - seguimiento Teltonika FMB208
  - rastreo de vehículos Plaspy
---

# Teltonika - FMB208 — Protocolo

Esta página ofrece una visión general pública del protocolo para usar el Teltonika FMB208 con la plataforma Plaspy. Se centra en el contexto de comunicación a alto nivel que necesitan usuarios e integradores para configurar el equipo y que reporte a Plaspy, y en cómo ese reporte permite que la plataforma reciba datos de ubicación, estado y eventos. El FMB208 es un dispositivo compatible con AIS140 con soporte IRNSS y GPS, opciones de Bluetooth y reporte a terceros servidores, capacidades relevantes al conectar con plataformas externas como Plaspy.

Plaspy emplea ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando éste reporta al endpoint de Plaspy. El comportamiento exacto en el dispositivo puede variar según la versión de firmware, la revisión de hardware y las decisiones de implementación de Teltonika, por lo que la configuración del equipo y la gestión de firmware siguen siendo pasos importantes para una integración confiable.

## Resumen del protocolo

El protocolo que utiliza el FMB208 regula cómo el rastreador se identifica, reporta datos GNSS y de sensores, y envía notificaciones de eventos a un servidor remoto como Plaspy. A alto nivel, el protocolo es el acuerdo entre el rastreador y el servidor que hace que la telemetría sea útil dentro del sistema de gestión de flotas.

- Permite que el rastreador envíe fijaciones GNSS y telemetría de sensores para que Plaspy muestre ubicación y estado.
- Transporta la identificación del equipo y la información de sesión para que Plaspy asocie los datos con el activo correcto.
- Transmite eventos de entradas digitales y analógicas, como alertas de interferencia (jamming), detección de desconexión y notificaciones de choque, para alertas e historial.
- Soporta reporte a terceros servidores, de modo que un FMB208 puede reenviar datos a Plaspy junto con otros endpoints.
- Permite flujos de trabajo de configuración remota y actualizaciones de firmware cuando se combina con las herramientas del fabricante y los métodos de conexión compatibles.

## Cómo Plaspy detecta el protocolo

Plaspy opera un único endpoint de reporte al que los dispositivos pueden apuntar. Cuando un FMB208 se configura para reportar a Plaspy, la plataforma detectará automáticamente el protocolo del rastreador y comenzará a procesar la telemetría entrante. En la mayoría de los casos, el integrador no necesita seleccionar manualmente un protocolo dentro de Plaspy si el dispositivo está correctamente direccionado al endpoint de Plaspy.

- El dominio del servidor de Plaspy es d.plaspy.com y la IP pública del servidor es 54.85.159.138.
- Plaspy acepta conexiones de dispositivos en el puerto 8888 y todos los dispositivos en Plaspy usan el mismo puerto.
- Plaspy detecta automáticamente el protocolo del rastreador una vez que los datos llegan al endpoint compartido.
- Los usuarios generalmente configuran el tercer servidor o la opción de reporte del FMB208 para apuntar a d.plaspy.com o 54.85.159.138 con puerto 8888.
- Dado que la detección es automática, la correcta dirección del dispositivo y la selección del transporte suelen ser los prerequisitos para un onboarding exitoso.

## Transporte y contexto de conexión

El transporte de conexión y el direccionamiento forman parte de cómo el FMB208 alcanza a Plaspy. El equipo puede configurarse para usar UDP o TCP para reportar, dependiendo de la configuración del equipo y del comportamiento deseado en cuanto a entrega y confirmaciones.

- El dispositivo puede configurarse usando UDP o TCP en el puerto 8888.
- Los dispositivos pueden apuntar a d.plaspy.com o a la IP 54.85.159.138 según preferencias de red o disponibilidad de DNS.
- Plaspy utiliza el mismo puerto 8888 para todos los dispositivos compatibles, lo que simplifica los ajustes de servidor en despliegues con múltiples modelos.
- Al configurar el FMB208, ponga el tercer servidor o servidor de reporte en d.plaspy.com con puerto 8888, o use 54.85.159.138 y puerto 8888 como alternativa.
- Los firewalls de red y la configuración del APN deben permitir tráfico saliente hacia el endpoint y el transporte de Plaspy seleccionados.

## Notas sobre compatibilidad del protocolo

- Las versiones de firmware pueden cambiar el contenido de los mensajes y los campos disponibles; verifique qué funciones están presentes en el firmware del equipo en uso.
- Las revisiones de hardware y las características opcionales como BLE u OBD no siempre afectan el protocolo base de reporte, pero pueden influir en qué telemetría está disponible para enviar.
- El soporte de terceros servidores en el FMB208 permite enviar datos a Plaspy junto a otras plataformas; asegúrese de que la configuración del tercer servidor esté correctamente poblada.
- Elegir UDP frente a TCP afecta la semántica de entrega; seleccione el transporte que coincida con sus necesidades de fiabilidad y latencia.
- Las herramientas de configuración del fabricante como Teltonika Configurator o FOTA pueden usarse para definir parámetros de reporte que afecten la compatibilidad.
- Confirme siempre el comportamiento del dispositivo después de los cambios observando reportes en vivo en Plaspy y revisando registros del dispositivo si están disponibles.

## Por qué es importante entender el protocolo

Comprender cómo se comunica el FMB208 ayuda a lograr una configuración confiable, un comportamiento predecible en campo y a acelerar la resolución de problemas cuando surgen incidencias. Tener un entendimiento práctico del contexto de comunicación reduce el tiempo de incorporación y respalda las operaciones continuas de la flota.

- Garantiza la configuración correcta del servidor y puerto para que el rastreador alcance Plaspy sin necesidad de intervención manual en la plataforma.
- Ayuda a identificar si la elección del transporte UDP o TCP está contribuyendo a reportes faltantes o retrasados.
- Facilita la interpretación de eventos como detección de interferencia, alertas de desconexión o reportes de choque dentro de la plataforma.
- Apoya la planificación de actualizaciones de firmware y la comprensión de cómo un firmware nuevo podría cambiar los campos o el comportamiento reportado.
- Ayuda a validar que el reporte a terceros servidores está activo y que el FMB208 está entregando datos a Plaspy según lo esperado.

## Por qué usar Plaspy con este protocolo

Usar el Teltonika FMB208 con Plaspy ofrece una vía práctica para ingerir telemetría compatible con AIS140, fijaciones aumentadas por IRNSS y una variedad de eventos de seguridad y sensores en una única plataforma de flotas. El modelo de endpoint compartido de Plaspy reduce la complejidad en despliegues que incluyen muchos modelos de rastreadores y simplifica la configuración de terceros servidores para dispositivos como el FMB208.

Si desea conocer más sobre Plaspy y cómo la plataforma puede gestionar el reporte de dispositivos y la visibilidad de la flota, visite https://www.plaspy.com. Para detalles más actuales y específicos del dispositivo sobre el protocolo, notas de firmware y orientación de implementación, verifique la información más reciente en el sitio del fabricante https://www.teltonika-gps.com/. El soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo, por lo que se recomienda consultar la documentación oficial de Teltonika al planear o resolver una integración.
