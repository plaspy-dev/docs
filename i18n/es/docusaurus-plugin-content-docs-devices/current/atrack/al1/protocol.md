---
slug: /atrack/al1/protocol
id: al1-protocol
sidebar_label: Protocol
title: ATrack - AL1 Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo del rastreador ATrack AL1 y su integración con Plaspy mediante ajustes de conexión compartidos y detección automática
keywords:
  - protocolo ATrack AL1
  - protocolo GPS ATrack AL1
  - protocolo de rastreo ATrack AL1
  - protocolo ATrack Plaspy
  - rastreador GPS AL1
  - protocolo de comunicación AL1
  - rastreador GPS vehicular AL1
  - gestión de flotas ATrack AL1
  - compatibilidad de dispositivos Plaspy
  - integración protocolo rastreador GPS
---

# ATrack - Protocolo AL1

Esta página resume el contexto público del protocolo para usar el rastreador ATrack AL1 con Plaspy. Su objetivo es explicar, a alto nivel, cómo se comunica el dispositivo, cómo Plaspy recibe los reportes y qué debe considerar al configurar un AL1 para seguimiento en la nube. El ATrack AL1 es un rastreador vehicular compacto con posicionamiento GPS, comunicación GSM GPRS, sensor G de 3 ejes integrado, lógica de eventos configurable y opciones estándar de reporte por SMS, USSD, TCP y UDP.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo cuando un AL1 se configura para reportar al endpoint de Plaspy. El comportamiento exacto del protocolo y los comandos disponibles pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante; por eso esta página se centra en el contexto público de conexión y compatibilidad más que en detalles privados del proveedor.

## Visión general del protocolo

El protocolo de comunicación del AL1 regula cómo se envían desde el rastreador al servidor en la nube los mensajes de ubicación, estado y eventos, y cómo se gestionan los comandos remotos o actualizaciones cuando están soportados. Para la integración con Plaspy, el papel del protocolo se limita a reportar de forma fiable telemetría y estado útiles para que la plataforma procese actualizaciones de ubicación, alertas y datos de sensores.

- Permite que el AL1 envíe telemetría periódica y orientada por eventos, como posición GPS, movimiento y eventos del sensor G, a un servidor remoto.
- Transporta la identidad del dispositivo y la información de sesión para que el servidor pueda asociar los mensajes entrantes con el vehículo o activo correcto.
- Soporta múltiples opciones de transporte para que el rastreador use el método de conectividad más adecuado según el despliegue.
- Permite configurar el comportamiento de reporte para equilibrar la visibilidad en tiempo real y el consumo de energía.
- Proporciona la base para flujos de gestión remota como FOTA y configuración cuando el fabricante habilita esas funciones.

## Cómo detecta Plaspy el protocolo

Plaspy recibe las conexiones entrantes de los rastreadores en un único endpoint y puerto compartidos y determina automáticamente el manejo apropiado. Cuando un AL1 se configura para reportar a Plaspy, normalmente no es necesario seleccionar el protocolo manualmente dentro de la plataforma, siempre que el dispositivo apunte a la dirección de Plaspy y el transporte coincida con lo que soporta el equipo.

- El dominio público del servidor de Plaspy es d.plaspy.com y la IP pública es 54.85.159.138 usando el puerto 8888.
- Plaspy usa el mismo puerto para todos los dispositivos compatibles, lo que simplifica la configuración y la incorporación de equipos.
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que los dispositivos correctamente configurados generalmente comienzan a reportar sin seleccionar el protocolo desde la plataforma.
- Si un dispositivo envía datos al endpoint de Plaspy pero no es reconocido, revisar la configuración del equipo y asegurar el transporte y la dirección de destino correctos es el primer paso de solución de problemas.
- Confirme que el AL1 esté configurado para reportar vía TCP o UDP según lo que soporte la unidad y la red.

## Transporte y contexto de conexión

El contexto de conexión describe cómo el AL1 llega a Plaspy a través de la red. El AL1 soporta múltiples opciones de transporte de datos; elegir TCP o UDP depende de las capacidades del equipo, las condiciones de la red y el comportamiento de reporte que se desee. Para la integración con Plaspy, la plataforma espera que los dispositivos apunten al endpoint y puerto compartidos de Plaspy.

- El AL1 puede configurarse para usar UDP o TCP en el puerto 8888 según lo permita la unidad y las decisiones de configuración.
- Los dispositivos pueden apuntar al dominio d.plaspy.com o a la dirección IP 54.85.159.138 al configurar el endpoint del rastreador.
- Todos los dispositivos soportados por Plaspy usan el mismo puerto 8888, lo que reduce errores de configuración en flotas mixtas.
- Los operadores de red y las políticas de firewall deben permitir conexiones salientes desde el dispositivo hacia el endpoint de Plaspy en el transporte y puerto especificados.
- La selección entre TCP y UDP puede afectar la fiabilidad de la entrega y la sobrecarga, dependiendo del comportamiento de la red y de la configuración del rastreador.

## Notas sobre compatibilidad del protocolo

- Las diferencias de firmware entre unidades AL1 pueden cambiar los tipos de mensajes disponibles, los intervalos de reporte y funciones opcionales como el comportamiento de FOTA.
- Las revisiones de hardware y los accesorios opcionales (por ejemplo sensores de combustible externos o IO adicionales) pueden afectar qué campos de telemetría se reportan.
- Las configuraciones del fabricante y las variantes regionales de firmware pueden introducir variaciones en el protocolo; confirme siempre el comportamiento para su unidad y firmware específicos.
- La selección del transporte (TCP versus UDP) puede influir en los patrones de entrega y debe elegirse según la fiabilidad de la red y las opciones del dispositivo.
- Plaspy detecta el protocolo automáticamente, pero se requiere la configuración correcta del destino y el transporte en el rastreador para una incorporación exitosa.
- Verifique la compatibilidad de funciones avanzadas como configuración remota o FOTA según las notas de versión del fabricante y la documentación del dispositivo.

## Por qué es importante entender el protocolo

Comprender cómo se comunica el AL1 ayuda a configurar correctamente el equipo, resolver problemas de conectividad y garantizar la fiabilidad a largo plazo en despliegues de flota. Tener expectativas claras sobre transporte, comportamiento de reporte y diferencias entre fabricantes reduce el tiempo de incorporación y evita errores de configuración evitables.

- Asegura que el AL1 apunte al endpoint correcto de Plaspy y use el transporte soportado para que los datos se reciban de manera consistente.
- Ayuda a diagnosticar problemas de conectividad, distinguiendo entre fallas de red y configuraciones del dispositivo o diferencias de firmware.
- Clarifica las expectativas sobre latencia de datos y frecuencia de reporte según el transporte y las opciones del equipo.
- Facilita la planificación de la gestión remota, como actualizaciones de firmware o envíos de configuración, cuando estas funciones estén habilitadas.
- Contribuye a verificar que los sensores opcionales y la lógica de eventos se transmitan e interpreten correctamente en la plataforma en la nube.

## Por qué usar Plaspy con este protocolo

Usar el ATrack AL1 con Plaspy ofrece a las organizaciones una forma sencilla de capturar ubicación vehicular, eventos de movimiento y entradas de sensores en una plataforma de monitoreo única. La forma compacta del AL1, su GPS preciso, el motor de eventos configurable y el sensor G lo hacen apropiado para casos de uso de flotas donde la visibilidad y el monitoreo del comportamiento del conductor son valiosos.

El enfoque de Plaspy de un endpoint compartido y detección automática de protocolo agiliza la incorporación de dispositivos en flotas mixtas y reduce la carga de configuración por equipo. Para obtener más información sobre Plaspy y cómo puede integrarse con el ATrack AL1, visite https://www.plaspy.com. Para detalles actuales del protocolo AL1, notas de firmware y documentación específica del dispositivo, verifique la información con el fabricante en https://www.atrack.com.tw/ ya que las implementaciones y el comportamiento del firmware pueden cambiar con el tiempo.
