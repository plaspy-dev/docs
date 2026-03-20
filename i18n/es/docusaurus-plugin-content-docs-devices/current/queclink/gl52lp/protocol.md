---
slug: /queclink/gl52lp/protocol
id: gl52lp-protocol
sidebar_label: Protocol
title: QuecLink - GL52LP Protocol
sidebar_class_name: menu_item_tracker
description: Información pública del protocolo del rastreador QuecLink GL52LP y cómo se comunica con Plaspy para integrarlo
keywords:
  - Protocolo QuecLink GL52LP
  - Protocolo GPS QuecLink GL52LP
  - Comunicación GL52LP
  - Protocolo seguimiento GL52LP
  - Protocolo rastreador QuecLink
  - Protocolo LoRa rastreador
  - Compatibilidad GL52LP Plaspy
  - Documentación protocolo QuecLink
  - Integración rastreador GL52LP
  - Protocolo rastreador GPS Plaspy
---

# QuecLink - Protocolo GL52LP

Esta página ofrece el contexto público del protocolo para usar el rastreador de activos QuecLink GL52LP con Plaspy. Explica, en términos generales y no sensibles, cómo se comunica el dispositivo y qué puntos de integración debe verificar cuando se apunten dispositivos GL52LP o backends LoRa a Plaspy para el monitoreo de activos.

El GL52LP es un rastreador LoRa clase A con micro modo de espera, GNSS y sensor de movimiento diseñado para larga duración de batería e instalación discreta. Plaspy utiliza configuraciones de conexión compartidas entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador. El comportamiento exacto del protocolo y la disponibilidad de funciones pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que siempre debe validar los detalles específicos del dispositivo antes de desplegar a gran escala.

## Resumen del protocolo

A grandes rasgos, el protocolo del dispositivo define cómo el GL52LP informa ubicación, movimiento y estado a un servidor y cómo el servidor puede, si está soportado, enviar configuraciones o respuestas de comando. Para rastreadores de activos como el GL52LP, el objetivo principal del protocolo es hacer que las posiciones GNSS y los eventos de movimiento sean aprovechables por sistemas de backend como Plaspy.

- Transmitir ubicación GNSS y marca de tiempo en un formato que el backend pueda interpretar para mapas y alertas
- Reportar eventos de movimiento y estado para conservar batería reduciendo transmisiones innecesarias
- Identificar el dispositivo ante el backend para que Plaspy asocie los datos entrantes con el registro de activo correcto
- Proveer telemetría periódica como nivel de batería e indicadores de salud para planificación de mantenimiento
- Soportar comportamiento regional de radio y estrategias de gestión de energía que extiendan la vida en espera

## Cómo detecta Plaspy el protocolo

Plaspy recibe los reportes entrantes de dispositivos en un único endpoint y puerto compartidos, y está diseñado para detectar automáticamente el protocolo del rastreador usado por una conexión entrante. Cuando un dispositivo o servicio de reenvío correctamente configurado reporta a Plaspy, por lo general no es necesario seleccionar manualmente el protocolo dentro de Plaspy.

- Plaspy escucha el tráfico de dispositivos en el dominio d.plaspy.com y en la dirección IP pública 54.85.159.138
- La plataforma usa el puerto 8888 para todos los dispositivos soportados, lo que simplifica las implementaciones con un único puerto
- Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888 según las capacidades del dispositivo o gateway
- Plaspy detecta automáticamente el protocolo del rastreador una vez que llegan los datos al endpoint compartido
- Asegúrese de que el dispositivo o el reenviador de red esté configurado para apuntar al endpoint de Plaspy para que la detección automática pueda ocurrir

## Transporte y contexto de conexión

La selección de transporte y la forma en que los datos llegan a Plaspy dependen de la arquitectura de despliegue. El GL52LP es un dispositivo LoRa, por lo que en muchas redes el uplink se entrega a un servidor de red o a un reenviador de gateway que luego reenvía las cargas de aplicación a Plaspy. Plaspy soporta recibir esas conexiones reenviadas en el endpoint compartido.

- Los dispositivos o reenviadores pueden dirigir el tráfico a d.plaspy.com o a la IP 54.85.159.138 para su entrega a Plaspy
- El puerto 8888 se utiliza tanto para conexiones UDP como TCP y es el puerto común para todos los dispositivos en Plaspy
- En despliegues LoRa, configure su servidor de red o reenviador de aplicación para enviar uplinks al endpoint de Plaspy
- Verifique que firewalls y configuraciones de NAT permitan tráfico saliente hacia el endpoint de Plaspy en el puerto 8888
- La elección entre UDP y TCP depende del soporte del gateway y reenviador y de los requisitos de confiabilidad de su aplicación

## Notas sobre compatibilidad del protocolo

- El GL52LP es compatible con Plaspy, pero los formatos exactos de mensaje y los comandos disponibles pueden variar según la versión de firmware
- Las revisiones de hardware y las cajas opcionales como la carcasa IP67 generalmente no cambian el protocolo de reporte, aunque sí pueden afectar prácticas de instalación
- La configuración regional de frecuencias LoRa y los ajustes de red deben corresponder con la normativa local y con la configuración de su servidor de red LoRa
- La elección de transporte (UDP o TCP) la determina el dispositivo o el gateway y debe coincidir con la configuración del reenviador para alcanzar Plaspy
- Al integrar, verifique que su gateway o servidor de red reenvíe datos a d.plaspy.com o 54.85.159.138 en el puerto 8888
- Consulte siempre las notas de versión del firmware de QuecLink para posibles cambios que puedan afectar los payloads o los nombres de telemetría

## Por qué es importante entender el protocolo

Comprender el comportamiento de comunicación del GL52LP ayuda a asegurar una integración fiable con Plaspy, especialmente en dispositivos LoRa sensibles a batería donde las estrategias de reporte impactan directamente la vida útil y la visibilidad operativa.

- Confirme que el dispositivo o el reenviador de red apunten al endpoint y al protocolo de transporte correctos de Plaspy
- Ajuste intervalos de reporte y sensibilidad de detección de movimiento para equilibrar visibilidad y duración de batería
- Solucione problemas de conectividad más rápido sabiendo si el dispositivo envía uplinks directamente o a través de un servidor de red LoRa
- Planifique actualizaciones de firmware y valide los cambios con Plaspy para evitar comportamientos inesperados en campo
- Asegúrese de que la configuración regional de radio y los ciclos de trabajo sean compatibles con su despliegue y las expectativas del backend

## Por qué usar Plaspy con este protocolo

Combinar el QuecLink GL52LP con Plaspy ofrece a las organizaciones una plataforma centralizada para visibilidad de activos, monitoreo a largo plazo y supervisión operativa. La larga vida en espera del GL52LP y su reporte basado en movimiento son adecuados para monitoreo de activos estacionarios y control de inventario, mientras que la detección automática de protocolo y el diseño de puerto único de Plaspy reducen la carga de configuración durante el despliegue.

Para saber más sobre Plaspy y cómo soporta integraciones de dispositivos como el GL52LP, visite https://www.plaspy.com. El soporte de protocolo, el comportamiento del firmware y los detalles de implementación del fabricante pueden cambiar con el tiempo, así que verifique la información más reciente específica del dispositivo en el sitio del fabricante https://www.queclink.com/.
