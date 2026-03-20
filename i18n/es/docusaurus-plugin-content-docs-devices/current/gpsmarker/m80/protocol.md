---
slug: /gpsmarker/m80/protocol
id: m80-protocol
sidebar_label: Protocol
title: GPSMarker - M80 Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo del GPSMarker M80 y cómo se comunica con Plaspy para rastreo fiable e integración
keywords:
  - protocolo GPSMarker M80
  - protocolo GPS del GPSMarker M80
  - protocolo GPSMarker M80 para Plaspy
  - protocolo de comunicación GPSMarker M80
  - protocolo de rastreo GPSMarker M80
  - compatibilidad GPSMarker Plaspy
  - protocolo rastreador M80 GPS
  - GPSMarker M80 seguimiento GPRS
  - integración rastreador GPS Plaspy
  - protocolo dispositivo GPSMarker
---

# GPSMarker - Protocolo M80

Esta página describe el contexto público del protocolo para usar el rastreador GPSMarker M80 con Plaspy. Explica, en términos generales, cómo se comunica el equipo, qué ajustes de conexión puede usar para enviar datos a Plaspy y qué elementos del protocolo son relevantes para una integración fiable. La información está pensada para ayudar en la configuración, resolución de problemas y planificación, manteniendo los detalles de implementación a un nivel público y no sensible.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el equipo reporta al endpoint de Plaspy. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que conviene comparar esta guía con las notas de versión del firmware y la documentación oficial de GPSMarker cuando sea necesario.

## Resumen del protocolo

El protocolo de comunicación define cómo el M80 envía posición, estado y eventos a través de redes móviles hacia un servidor de rastreo. Para Plaspy, el rastreador reporta a un endpoint compartido y la plataforma identifica automáticamente el protocolo para que los mensajes entrantes se parseen y conviertan en ubicaciones y eventos telemáticos.

- Permite que el M80 transmita posición GPS/GLONASS, estados de sensores y alertas de batería a un servidor remoto.
- Transporta actualizaciones periódicas de ubicación y mensajes por eventos como inicio de movimiento, choque, SOS y batería baja.
- Admite actualizaciones de firmware entregadas por GPRS para mantener el comportamiento del dispositivo sin acceso físico.
- Funciona sobre datos móviles estándar o flujos asistidos por SMS según la configuración del dispositivo y la disponibilidad de la red.
- Asocia cada equipo con un identificador reconocible para que Plaspy pueda registrar y mostrar la unidad en la interfaz de la flota.

## Cómo detecta Plaspy el protocolo

Plaspy opera un endpoint compartido para recibir telemetría de muchos rastreadores compatibles. Cuando un GPSMarker M80 está configurado para reportar a Plaspy, la plataforma lee el flujo entrante y selecciona automáticamente el parser y las reglas de manejo correspondientes, por lo que normalmente no necesita elegir el protocolo manualmente en la interfaz de Plaspy.

- El dominio del servidor Plaspy es d.plaspy.com y la IP del servidor es 54.85.159.138 para el envío de datos desde dispositivos.
- El endpoint de Plaspy escucha en el puerto 8888 y todos los dispositivos en Plaspy usan ese mismo puerto.
- Los equipos pueden configurarse para usar UDP o TCP en el puerto 8888 según las opciones del dispositivo y el operador de red.
- Si el M80 reporta a d.plaspy.com o a 54.85.159.138 usando el puerto compartido, Plaspy detectará automáticamente el protocolo del rastreador.
- La selección manual del protocolo dentro de Plaspy suele ser innecesaria cuando el M80 apunta correctamente al endpoint de Plaspy.

## Transporte y contexto de conexión

Las opciones de conexión afectan cómo el M80 alcanza Plaspy pero no cambian la intención general del protocolo. El M80 soporta el envío de datos por GPRS y puede configurarse para enviar mensajes por UDP o TCP al endpoint de Plaspy.

- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 según soporte y ajustes elegidos.
- Los equipos pueden apuntar al dominio de reporte de Plaspy d.plaspy.com o a la dirección IP 54.85.159.138 cuando DNS no está disponible.
- Todos los dispositivos de Plaspy usan el mismo puerto, lo que simplifica la configuración en una flota mixta.
- La elección del transporte (UDP vs TCP) influye en las garantías de entrega y el comportamiento en redes móviles, pero es una decisión de configuración del dispositivo.
- Asegúrese de que la SIM y los ajustes APN en el M80 estén configurados para acceso GPRS y que el equipo tenga conectividad de red para alcanzar el endpoint de Plaspy.

## Notas sobre compatibilidad del protocolo

- La compatibilidad puede variar según la versión de firmware; funciones como nuevos sensores o tipos de mensajes adicionales pueden añadirse en actualizaciones.
- Las revisiones de hardware pueden cambiar levemente los transportes soportados o el cableado de sensores periféricos; valide con la unidad M80 específica que tenga.
- Opciones de configuración en el lado del fabricante, ajustes tarifarios especiales o fallback por SMS pueden afectar cuándo y cómo el equipo reporta a un servidor.
- La elección del transporte importa para el comportamiento en la red; confirme si su instalación debe preferir UDP por menor overhead o TCP por mayor fiabilidad de conexión.
- Existen actualizaciones de firmware por GPRS gratuitas para el M80, que pueden modificar el comportamiento del protocolo a lo largo del tiempo.
- Siempre valide el comportamiento en una prueba controlada antes de un despliegue amplio para confirmar que Plaspy recibe los eventos y la telemetría que espera.

## Por qué es importante entender el protocolo

Comprender cómo reporta el M80 ayuda a garantizar un rastreo confiable, la interpretación correcta de sensores y alertas oportunas en Plaspy. Aunque Plaspy detecta automáticamente el protocolo, saber cómo transmite su rastreador facilita la configuración y la resolución de problemas.

- Ayuda a identificar por qué un equipo no aparece en Plaspy cuando está apuntando mal o usa el transporte equivocado.
- Permite confirmar que tipos de eventos como SOS, choque, inicio de movimiento y batería baja se transmiten y se mapean a alertas en Plaspy.
- Orienta la elección de APN y configuración de la SIM para asegurar que los datos GPRS lleguen al endpoint de Plaspy.
- Apoya la planificación de actualizaciones de firmware y entender cómo un nuevo firmware puede cambiar los campos o el comportamiento reportado.
- Facilita el diagnóstico de conectividad intermitente revisando si el equipo usa UDP o TCP y con qué frecuencia reporta.

## Por qué usar Plaspy con este protocolo

Usar el GPSMarker M80 con Plaspy ofrece a las organizaciones una manera sencilla de consolidar posición, sensores y alertas en una única plataforma de monitoreo de flotas. La larga autonomía del M80, sus múltiples sensores y la capacidad de actualización por GPRS lo hacen adecuado para rastreo de activos o vehículos cuando se requieren reportes poco frecuentes o bajo consumo de energía.

El endpoint compartido de Plaspy y la detección automática de protocolo reducen la complejidad de configuración en flotas mixtas. Apuntar un M80 al endpoint de Plaspy (d.plaspy.com o 54.85.159.138) en el puerto 8888 y elegir UDP o TCP según corresponda suele ser suficiente para que Plaspy comience a recibir e interpretar los reportes del equipo. Para conocer más sobre Plaspy y las capacidades de la plataforma, visite https://www.plaspy.com. Verifique siempre los detalles más recientes del protocolo específico del dispositivo, el comportamiento del firmware y la guía del fabricante en el sitio oficial de GPSMarker https://gpsmarker.ru/ ya que estos detalles pueden cambiar con el tiempo.
