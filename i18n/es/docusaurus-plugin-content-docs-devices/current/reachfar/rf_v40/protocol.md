---
slug: /reachfar/rf_v40/protocol
id: rf_v40-protocol
sidebar_label: Protocol
title: Reachfar - RF-V40 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del tracker Reachfar RF-V40 y su compatibilidad con Plaspy, modos de transporte y notas de configuración
keywords:
  - protocolo Reachfar RF V40
  - protocolo GPS Reachfar RF V40
  - protocolo de rastreo Reachfar RF V40
  - compatibilidad RF V40 Plaspy
  - protocolo localizador GPS Reachfar
  - protocolo localizador GPS para mascotas
  - protocolo de dispositivo Plaspy
  - protocolo de comunicación RF V40
  - integración Reachfar RF V40
  - configuración Reachfar RF V40
---

# Reachfar - Protocolo RF-V40

Esta página ofrece un resumen público del protocolo para usar el rastreador Reachfar RF-V40 con la plataforma Plaspy. Explica, en términos generales, cómo se comunica el RF-V40 con Plaspy, qué ajustes de conexión se emplean y qué verificar al configurar el equipo para garantizar reportes y monitoreo fiables. El contenido se centra en las funciones de comunicación y consideraciones de compatibilidad, no en detalles internos privados del fabricante.

El RF-V40 es un rastreador compacto 3G para mascotas con GPS, AGPS, LBS y asistencia por WiFi, con protección IP66. Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del dispositivo, pero el comportamiento exacto puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante. Use este resumen para comprender cómo interactúan el rastreador y Plaspy, orientar la configuración o la resolución de problemas, y consulte la documentación oficial del fabricante para detalles específicos del dispositivo.

## Resumen del protocolo

El protocolo de comunicación del RF-V40 regula cómo el rastreador envía posición, estado y eventos a un servidor remoto como Plaspy. A alto nivel, el protocolo permite que el dispositivo se identifique, entregue localizaciones y telemetría, y transporte comandos sencillos o solicitudes de estado entre el rastreador y la plataforma.

- Permite reportes periódicos y bajo demanda de ubicación mediante GPS, AGPS, LBS y WiFi hacia Plaspy.
- Proporciona telemetría como nivel de batería, estado de conectividad y avisos de cambio de SIM para el manejo de eventos.
- Incluye identificadores que la plataforma emplea para asociar los mensajes entrantes con una cuenta y un dispositivo específico.
- Soporta mensajes de estado y keepalive que ayudan a Plaspy a mantener una visión precisa de la disponibilidad del rastreador.
- Permite que el dispositivo sea consultado o que envíe alertas que disparen notificaciones y el registro de trazas en Plaspy.

## Cómo detecta Plaspy el protocolo

Plaspy recibe los reportes de los dispositivos en un único endpoint compartido y detecta automáticamente el protocolo del rastreador, por lo que normalmente usted no necesita elegir manualmente un protocolo dentro de la plataforma. La configuración correcta del dispositivo para que reporte a Plaspy suele ser el único paso necesario para que el RF-V40 sea reconocido y empiece a enviar ubicaciones y actualizaciones de estado.

- El dominio del servidor Plaspy es d.plaspy.com y la IP del servidor para reportes es 54.85.159.138.
- El puerto es 8888 y Plaspy utiliza el mismo puerto para todos los dispositivos soportados.
- El equipo puede configurarse para usar UDP o TCP en el puerto 8888 según el soporte del dispositivo y la configuración.
- Plaspy detecta automáticamente el protocolo del rastreador cuando el RF-V40 está correctamente apuntado al endpoint de Plaspy.
- Cuando se configura para reportar a Plaspy, la posición y la telemetría del RF-V40 ingresan a los paneles, alertas y vistas de historial de Plaspy sin necesidad de seleccionar el protocolo manualmente.

## Contexto de transporte y conexión

El contexto de conexión abarca cómo el RF-V40 llega a Plaspy a través de la red celular y qué ajustes de red debe usar el dispositivo. El RF-V40 envía datos por canales de datos móviles y puede utilizar múltiples opciones de transporte según el firmware y las elecciones de configuración.

- El dispositivo puede usar transporte UDP o TCP para comunicarse con Plaspy.
- Configure el rastreador para reportar a d.plaspy.com o a 54.85.159.138 como host destino.
- El dispositivo debe estar configurado para usar el puerto 8888, que es el puerto compartido que Plaspy emplea para todos los dispositivos.
- Seleccione UDP o TCP en el dispositivo según lo que admita la edición de firmware del RF-V40 y las consideraciones de la red del operador.
- Verifique la configuración de APN y la SIM en el RF-V40 para que el rastreador pueda establecer una sesión de datos antes de intentar conectarse a Plaspy.

## Notas sobre compatibilidad del protocolo

- Las diferencias de firmware pueden cambiar el comportamiento en tiempos de envío, transportes soportados y campos de telemetría disponibles.
- Las revisiones de hardware del RF-V40 pueden introducir variaciones en bandas de radio o en el rendimiento GNSS que afecten la fiabilidad de los reportes.
- Las opciones de configuración del lado del fabricante, como intervalos de reporte, comandos bajo demanda y fallback por SMS, pueden modificar la frecuencia con la que el dispositivo contacta a Plaspy.
- La selección de transporte (UDP vs TCP) depende del dispositivo; confirme qué modos de transporte soporta la edición de firmware del RF-V40 que posee.
- La configuración de la SIM y del APN debe ser correcta para que el dispositivo abra una sesión de datos hacia Plaspy.
- Siempre valide la compatibilidad y los pasos de configuración con el manual de usuario y las notas de versión más recientes de Reachfar.

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación y el contexto de conexión del RF-V40 ayuda a asegurar una configuración inicial correcta, agilizar la resolución de problemas y mantener la fiabilidad a largo plazo cuando el rastreador se utiliza con Plaspy. Saber qué se espera que envíe el dispositivo y cómo llega a la plataforma reduce errores de configuración y acorta el tiempo hasta obtener un monitoreo estable.

- Garantiza que el dispositivo esté apuntando a los endpoints correctos de Plaspy y use el modo de transporte adecuado para reportes exitosos.
- Ayuda a diagnosticar problemas comunes como telemetría faltante, actualizaciones demoradas o identificación incorrecta del dispositivo en Plaspy.
- Orienta la elección de intervalos de reporte y ajustes de energía para balancear la duración de batería con la frescura de las ubicaciones.
- Aclara cuándo las diferencias de comportamiento provienen del firmware o hardware y no de la configuración de Plaspy.
- Facilita pruebas coordinadas durante el despliegue de múltiples dispositivos en una sola cuenta de Plaspy.

## Por qué usar Plaspy con este protocolo

Usar el Reachfar RF-V40 con Plaspy ofrece una forma centralizada de gestionar la telemetría de rastreo para mascotas, alertas e historial junto con otros equipos. La capacidad de Plaspy para recibir las actualizaciones de ubicación por GPS, AGPS, LBS y WiFi del RF-V40 y presentarlas en paneles e interfaces móviles resulta útil para que los propietarios y pequeñas operaciones mantengan conciencia situacional y reaccionen ante eventos como batería baja o cambios de SIM.

Plaspy acepta reportes en d.plaspy.com o 54.85.159.138 en el puerto 8888, y la plataforma usa el mismo puerto para todos los dispositivos compatibles mientras detecta automáticamente el protocolo del rastreador. Para saber más sobre Plaspy y cómo funciona con rastreadores compatibles visite https://www.plaspy.com. Para obtener los detalles más actuales sobre protocolos específicos del dispositivo, notas de firmware y revisiones de hardware consulte la documentación oficial de Reachfar en https://www.reachfargps.com/ que contiene la información más reciente del fabricante.
