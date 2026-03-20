---
slug: /cantrack/g01/protocol
id: g01-protocol
sidebar_label: Protocol
title: CanTrack - G01 Protocol
sidebar_class_name: menu_item_tracker
description: Referencia pública del protocolo para conectar el rastreador CanTrack G01 a Plaspy con ajustes de servidor compartido y opciones de transporte
keywords:
  - Protocolo CanTrack G01
  - Protocolo GPS CanTrack G01
  - Protocolo de rastreo CanTrack G01
  - Compatibilidad G01 Plaspy
  - Detalles del protocolo CanTrack
  - Protocolo tracker GPRS
  - Comunicación tracker GPS
  - Integración CanTrack G01
  - Protocolo de rastreo vehicular
  - Protocolo de rastreo personal
---

# CanTrack - Protocolo G01

Esta página describe el contexto público del protocolo para usar el rastreador CanTrack G01 con Plaspy. Se centra en cómo el dispositivo se comunica con Plaspy en términos generales y no sensibles, y explica los ajustes de conexión que normalmente se usan al integrar el G01 para seguimiento en tiempo real, notificaciones e historial.

Plaspy emplea ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el dispositivo está configurado correctamente para reportar al endpoint de Plaspy. El comportamiento exacto de los mensajes puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante; por eso esta página enfatiza la guía de conexión e integración más que los detalles internos del firmware.

## Resumen del protocolo

El G01 envía su posición y datos de eventos a un servidor backend usando datos celulares o SMS como respaldo. En el modelo de integración con Plaspy, el rastreador empuja actualizaciones de ubicación, alertas y telemetría básica para que la plataforma las pueda mapear, almacenar y actuar sobre esos eventos.

- El protocolo permite al G01 entregar latitud, longitud, marcas de tiempo y telemetría básica a Plaspy para mapeo e historial.
- Proporciona un mecanismo para que el rastreador se identifique ante el servidor y la plataforma asocie los datos entrantes con el registro de dispositivo correcto.
- Se transmiten banderas de eventos como exceso de velocidad o batería baja para que Plaspy genere alertas y active reglas.
- El reporte por SMS con enlaces de Google Maps es compatible en el dispositivo como respaldo para obtener la ubicación de forma manual e inmediata.
- El dispositivo combina GPS e LBS de forma híbrida para mejorar la disponibilidad; Plaspy consume la fuente de posición que el rastreador proporcione.

## Detección del protocolo por parte de Plaspy

Plaspy escucha en un único endpoint y puerto compartido para los reportes de dispositivos y determina automáticamente el protocolo de rastreador adecuado para las conexiones entrantes. En la mayoría de los casos, un G01 configurado correctamente comenzará a reportar a Plaspy sin necesidad de seleccionar el protocolo manualmente en la plataforma.

- El endpoint público de reportes de Plaspy es d.plaspy.com y la plataforma también es accesible en la dirección IP 54.85.159.138 para entornos que requieren un endpoint IP.
- Plaspy utiliza el mismo puerto de escucha para todos los dispositivos compatibles, lo que simplifica la configuración de los dispositivos y las reglas de firewall.
- Cuando un G01 apunta al endpoint de Plaspy y envía reportes, Plaspy detectará automáticamente el protocolo a partir del patrón de tráfico entrante.
- Normalmente no es necesario elegir una opción de protocolo dentro de Plaspy si el dispositivo está configurado para reportar a d.plaspy.com en el puerto correcto.
- Debido a la detección automática, asegúrese de que el G01 esté configurado para enviar sus paquetes estándar de reporte y que el IMEI del dispositivo coincida con el registro en Plaspy.

## Transporte y contexto de conexión

El G01 puede usar datos celulares para enviar reportes a Plaspy mediante opciones de transporte comunes. Para la configuración de red y firewall, los hechos clave de conexión son consistentes a través de los dispositivos soportados por Plaspy.

- Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888 según el soporte del dispositivo y las preferencias locales de configuración.
- El nombre de servidor principal de Plaspy para reportes de dispositivos es d.plaspy.com y el mismo servicio es accesible en 54.85.159.138.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que facilita la configuración de firewall y NAT para clientes que despliegan muchos rastreadores.
- Elija UDP si el dispositivo y la red móvil favorecen reportes con menor overhead, o TCP si prefiere conexiones persistentes y retransmisión según su despliegue.
- Confirme que el G01 esté configurado para reportar al endpoint de Plaspy y al puerto 8888 para una ingesta fiable en la plataforma.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware en el G01 pueden cambiar el contenido de los mensajes, los intervalos de reporte y las opciones de transporte soportadas; siempre confirme los detalles del firmware antes de despliegues a gran escala.
- Las variantes de hardware y las configuraciones regionales del módem (por ejemplo, quad band vs bandas regionales) pueden afectar el comportamiento de la red pero no el concepto básico de reporte.
- La selección de transporte (UDP vs TCP) es una decisión de configuración; verifique qué transportes admite el firmware de su G01 y realice pruebas en consecuencia.
- El modo de reporte por SMS es un respaldo práctico, pero difiere del reporte por GPRS y no sustituye la telemetría continua en todos los escenarios.
- La detección automática de protocolo de Plaspy reduce la necesidad de asignación manual, pero sigue siendo imprescindible contar con IMEI y registros de dispositivo precisos en Plaspy.
- Valide las funciones avanzadas que necesite, como monitoreo de voz o E/S personalizadas, consultando la documentación del fabricante y probando con su instancia de Plaspy.

## Por qué es importante entender el protocolo

Conocer cómo el G01 se comunica con Plaspy ayuda a garantizar una configuración confiable, agilizar la resolución de problemas y lograr un funcionamiento predecible en despliegues de producción. Tener claro el transporte, el endpoint y el comportamiento típico de reporte facilita diagnosticar problemas de conectividad y datos.

- Le ayuda a configurar el dispositivo para que apunte a d.plaspy.com o a 54.85.159.138 y use el puerto 8888, de modo que los paquetes lleguen a Plaspy de forma fiable.
- Aclara si debe usar UDP o TCP según el comportamiento de la red y el soporte del firmware del dispositivo.
- Permite una resolución de problemas más eficiente cuando faltan actualizaciones de posición o no aparecen alertas en Plaspy.
- Reduce el tiempo de despliegue al alinear los registros de IMEI del dispositivo con los reportes entrantes para una detección automática correcta.
- Informa decisiones sobre flujos de respaldo, como respuestas por SMS frente a reporte continuo por GPRS.

## Por qué usar Plaspy con este protocolo

Usar el CanTrack G01 con Plaspy ofrece a las organizaciones visibilidad en tiempo real y telemetría básica sin complejidad innecesaria. El factor de forma compacto del G01, su batería de respaldo, la combinación híbrida de GPS y LBS y el respaldo por SMS lo hacen adecuado para seguridad personal, protección de activos ligeros y pequeñas flotas donde la ubicación fiable y las alertas son los requisitos principales.

Para conocer más sobre Plaspy y cómo gestiona las conexiones de dispositivos, visite https://www.plaspy.com. Para los detalles de protocolo específicos del dispositivo, notas de firmware y orientación de implementación del fabricante, verifique la información en https://www.cantrackgps.com/. El soporte de protocolo, el comportamiento del firmware y los detalles de implementación del dispositivo pueden cambiar con el tiempo, por lo que es recomendable consultar la documentación del fabricante al planear despliegues.
