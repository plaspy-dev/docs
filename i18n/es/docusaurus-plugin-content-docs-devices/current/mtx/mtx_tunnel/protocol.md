---
slug: /mtx/mtx_tunnel/protocol
id: mtx_tunnel-protocol
sidebar_label: Protocol
title: Mtx - MTX Tunnel Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo para integrar Mtx MTX Tunnel con Plaspy usando ajustes compartidos y detección automática
keywords:
  - Mtx MTX Tunnel
  - protocolo MTX Tunnel
  - protocolo GPS Mtx
  - MTX Tunnel con Plaspy
  - protocolo de rastreador GPS
  - rastreo vehicular con Plaspy
  - pasarela GPRS GPS
  - pasarela Telnet RS232
  - compatibilidad MTX Tunnel
  - protocolo de seguimiento de flotas
---

# Mtx - Protocolo MTX Tunnel

Esta página documenta el contexto público del protocolo para usar el tracker Mtx MTX Tunnel con Plaspy. Se enfoca en cómo el dispositivo se comunica con Plaspy en términos generales, explica el papel del protocolo de reporte del tracker y resume las opciones de conexión que suelen emplearse para la integración. El objetivo es ofrecer información útil y no sensible que facilite la configuración y comprensión, sin entrar en detalles internos específicos del fabricante.

Plaspy utiliza ajustes de conexión compartidos entre dispositivos compatibles y detecta automáticamente el protocolo del tracker cuando el equipo reporta a la plataforma. El comportamiento exacto del protocolo para el MTX Tunnel puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página describe el comportamiento y los puntos de integración generales en lugar de internals específicos de firmware.

## Resumen del protocolo

El tracker MTX Tunnel está diseñado para enviar posiciones GPS y telemetría mediante datos móviles a un servidor remoto, con funciones adicionales para túneles RS232, acceso Telnet, control por SMS y SSL opcional. En términos de integración, el protocolo del tracker es el conjunto de mensajes y el comportamiento de reporte que permiten a Plaspy recibir ubicación, estado y telemetría, además de habilitar comandos remotos y diagnósticos cuando el dispositivo lo soporta.

- Permite reportes periódicos de posiciones GPS y telemetría para visibilidad y rastreo de flotas.
- Transporta identidad y estado del dispositivo para que la plataforma Plaspy pueda asociar los reportes entrantes con el activo correcto.
- Soporta canales de datos auxiliares como túneles RS232, acceso Telnet y control por SMS que pueden usarse para configuración remota y telemetría extendida.
- Incluye mecanismos de respaldo como posicionamiento por celdas GSM cuando la cobertura GPS es débil, manteniendo la continuidad en el reporte de ubicación.
- Puede operar sobre conexiones TCP o UDP estándar hacia un endpoint remoto y puede ofrecer seguridad de transporte opcional como SSL para enlaces cifrados.

## Cómo detecta Plaspy el protocolo

Plaspy recibe los reportes entrantes de dispositivos en un único endpoint público e identifica automáticamente el protocolo del tracker a partir de la conexión y los mensajes recibidos. En la mayoría de los casos, cuando el MTX Tunnel está configurado para reportar a Plaspy, no se requiere una selección manual del protocolo dentro de la plataforma.

- El dominio del servidor Plaspy es d.plaspy.com y la IP del servidor es 54.85.159.138 para el reporte de dispositivos.
- El puerto usado para el tráfico de dispositivos es 8888 y todos los dispositivos en Plaspy usan el mismo puerto.
- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 según el soporte del equipo y el transporte elegido.
- Plaspy detecta automáticamente el protocolo del tracker, por lo que por lo general los usuarios no necesitan seleccionar un protocolo manualmente en la plataforma.
- La configuración correcta del dispositivo para apuntar al endpoint de Plaspy es el requisito habitual para la detección automática.

## Transporte y contexto de conexión

El contexto de conexión cubre cómo el MTX Tunnel abre una sesión para enviar reportes y cómo debe apuntar el dispositivo a Plaspy. El MTX Tunnel soporta múltiples modos de transporte y destinos de servidor; elegir el transporte y endpoint adecuados es esencial para un reporte confiable.

- El dispositivo puede usar UDP o TCP en el puerto 8888 según el soporte de firmware y la configuración.
- Los equipos pueden configurarse para apuntar al dominio d.plaspy.com o directamente a la IP del servidor 54.85.159.138.
- Plaspy utiliza el mismo puerto para todos los dispositivos compatibles, lo que simplifica la configuración a nivel de flota.
- Dependiendo del firmware y de los ajustes, el MTX Tunnel puede operar en modo TCP Server, reportar mediante HTTP Get o funcionar como pasarela GPRS cuando se integra con servidores remotos.
- El soporte SSL opcional puede estar disponible en el dispositivo para conexiones cifradas; siga las indicaciones del fabricante al habilitar transporte seguro.

## Notas sobre compatibilidad del protocolo

- Las diferencias en versiones de firmware pueden modificar el tiempo entre mensajes, los campos de telemetría y las opciones de transporte; siempre revise las notas de la versión del firmware.
- Las revisiones de hardware pueden afectar interfaces disponibles como el túnel RS232 o características I2C/SPI y su comportamiento cuando se reenvían por GPRS.
- Los modos de configuración del fabricante (por ejemplo, modo TCP Server frente a HTTP Get) cambian cómo el dispositivo envía datos y lo que el servidor receptor espera.
- La elección entre TCP y UDP afecta la entrega de mensajes y puede influir en cómo Plaspy maneja repeticiones o pérdidas de reportes.
- El control por SMS y el acceso Telnet ofrecen canales alternativos de gestión, pero están separados del protocolo principal de reporte a Plaspy.
- Valide la compatibilidad y los pasos de configuración contra la documentación oficial de MTX Tunnel para confirmar la disponibilidad de funciones en su modelo y firmware exactos.

## Por qué es importante conocer el protocolo

Comprender cómo se comunica el MTX Tunnel ayuda a asegurar una configuración fluida, un comportamiento predecible y un diagnóstico eficiente al integrar con Plaspy. Incluso cuando Plaspy detecta el protocolo automáticamente, conocer las capacidades del dispositivo y las opciones de transporte reduce errores de configuración y favorece la fiabilidad a largo plazo.

- Le ayuda a elegir el modo de transporte y los ajustes de endpoint correctos para garantizar reportes fiables.
- Facilita verificar que el dispositivo se identifica correctamente y envía los campos de telemetría esperados a Plaspy.
- Permite un diagnóstico rápido de problemas de conectividad como dominio, IP o selección de transporte incorrectos.
- Informa decisiones sobre habilitar funciones opcionales como SSL, túneles RS232 o modos de bajo consumo.
- Ayuda a planificar actualizaciones de firmware y a validar que los cambios de comportamiento no interrumpirán la integración con Plaspy.

## Por qué usar Plaspy con este protocolo

Usar el MTX Tunnel con Plaspy brinda a las organizaciones una forma práctica de recopilar posiciones GPS y telemetría extendida en una sola plataforma. El endpoint unificado de Plaspy y la detección automática de protocolos reducen la carga de configuración por dispositivo en flotas mixtas, mientras que la capacidad de aceptar reportes por TCP o UDP en un único puerto compartido simplifica el despliegue.

Si desea obtener más información sobre Plaspy y cómo soporta la integración de dispositivos, visite https://www.plaspy.com. Para detalles de protocolo más actuales y específicos del dispositivo, notas de firmware e instrucciones de configuración para el MTX Tunnel, verifique la información en el sitio del fabricante http://www.mtxtunnel.com/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
