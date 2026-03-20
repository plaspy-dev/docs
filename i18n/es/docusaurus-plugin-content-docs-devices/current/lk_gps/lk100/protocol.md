---
slug: /lk_gps/lk100/protocol
id: lk100-protocol
sidebar_label: Protocol
title: LK-GPS - LK100 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del rastreador de mascotas LK100 y su compatibilidad con Plaspy, con pautas de conexión
keywords:
  - protocolo LK-GPS LK100
  - protocolo rastreador GPS LK100
  - protocolo de comunicación LK100
  - protocolo de rastreo LK100
  - compatibilidad Plaspy LK100
  - rastreador LK-GPS Plaspy
  - protocolo rastreador de mascotas LK100
  - rastreo en tiempo real LK100
  - LK100 A-GPS LBS
  - alertas de geocerca LK100
---

# LK-GPS - Protocolo LK100

Esta página ofrece una visión pública del protocolo del rastreador de mascotas LK-GPS LK100 Mini y explica cómo se comunica con la plataforma Plaspy. Se enfoca en el contexto de comunicación relevante para la integración y el envío de informes, sin exponer detalles sensibles de implementación. El objetivo es ayudar a operadores, integradores y usuarios técnicos a identificar qué revisar al configurar dispositivos LK100 para que reporten a Plaspy.

Plaspy comparte ajustes de conexión entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el dispositivo envía datos a la plataforma. El comportamiento exacto del intervalo de mensajes y las funciones opcionales puede variar según la versión de firmware, la revisión de hardware y la configuración del fabricante; por eso esta página destaca el contexto común y no sensible del protocolo y ofrece consejos prácticos de conexión.

## Resumen del protocolo

El protocolo de reporte LK100 es el método que usa el rastreador para identificarse y enviar datos de ubicación y estado a un servidor remoto. Para Plaspy, ese protocolo proporciona la telemetría y las alertas necesarias para el rastreo en tiempo real y funciones de la plataforma como reproducción de historial, notificaciones SOS y alertas de geocerca.

- El protocolo transmite actualizaciones periódicas de ubicación y señales de estado que Plaspy utiliza para mapeo y alertas.
- Los datos de identificación en los informes permiten a Plaspy asociar cada mensaje entrante con un equipo LK100 específico.
- La telemetría puede incluir posiciones derivadas por GPS, ubicaciones asistidas por LBS, estado de batería y movimiento, y banderas de evento como SOS o violaciones de geocerca.
- El reporte independiente del transporte permite que el rastreador use UDP o TCP según lo configure el dispositivo o el operador.
- Plaspy consume los reportes entrantes para ofrecer rastreo en tiempo real, rutas históricas y flujos de notificaciones sin requerir que los usuarios expongan detalles internos del dispositivo.

## Cómo detecta Plaspy el protocolo

Plaspy recibe mensajes de rastreadores en un único punto final y usa detección automática para identificar el protocolo de los equipos en las conexiones entrantes. En la mayoría de los casos, el usuario no necesita seleccionar un protocolo dentro de Plaspy siempre que el dispositivo esté configurado para reportar al punto final de Plaspy.

- Plaspy escucha en un único punto final público para que los dispositivos puedan apuntar su dirección de servidor a d.plaspy.com.
- La IP del servidor Plaspy es 54.85.159.138 y el puerto compartido usado por todos los dispositivos es 8888.
- Los dispositivos pueden configurarse para enviar datos por UDP o TCP según sus capacidades y ajustes.
- Cuando un dispositivo correctamente configurado reporta al punto final de Plaspy, la plataforma detectará automáticamente el protocolo del rastreador y dirigirá los mensajes al canal de procesamiento adecuado.
- La selección manual de protocolo en Plaspy suele ser innecesaria cuando el rastreador está apuntando al punto final de Plaspy y está bien configurado.

## Transporte y contexto de conexión

Los detalles de conexión determinan cómo el LK100 entrega sus reportes a Plaspy. El LK100 puede configurarse para usar UDP o TCP y debe apuntar al punto final y puerto que utiliza la plataforma.

- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 según el soporte del equipo y la preferencia del operador.
- El dominio público del servidor de Plaspy para reportes de rastreadores es d.plaspy.com.
- La dirección IP del servidor Plaspy es 54.85.159.138 y la plataforma acepta conexiones en el puerto 8888.
- Todos los dispositivos soportados por Plaspy usan el mismo puerto para reportes, lo que simplifica la configuración del equipo y las reglas de firewall.
- Confirme ajustes del dispositivo como dirección del servidor, tipo de transporte e intervalo de reporte para garantizar que los mensajes lleguen a Plaspy de forma confiable.

## Notas sobre compatibilidad del protocolo

- La compatibilidad puede variar según la versión de firmware; versiones más nuevas o antiguas pueden cambiar el tiempo de los mensajes o los campos opcionales.
- Revisiones de hardware o variantes regionales del fabricante pueden alterar funciones disponibles, como audio bidireccional o comportamiento de fallback a LBS.
- La selección del transporte entre UDP y TCP puede afectar las características de entrega y debe elegirse según la fiabilidad de la red y las capacidades del dispositivo.
- Asegúrese de que el dispositivo esté configurado para enviar reportes al punto final de Plaspy d.plaspy.com o directamente a la IP 54.85.159.138 en el puerto 8888.
- Valide el comportamiento de SOS, geocerca y alertas de batería baja después de la configuración, ya que el reporte de eventos puede implementarse de manera distinta entre versiones de firmware.
- En caso de duda, consulte la documentación del fabricante para la build de firmware exacta instalada en sus dispositivos y confirmar las características de los mensajes.

## Por qué es importante entender el protocolo

Conocer cómo se comunica el LK100 con Plaspy ayuda a lograr una configuración más fluida, un rastreo preciso y alertas confiables a lo largo del tiempo. Tener claridad sobre el protocolo reduce el tiempo de resolución de problemas y favorece un monitoreo operativo consistente.

- Ajustes correctos de servidor, transporte y puerto evitan fallas comunes de reporte y ayudan a que los dispositivos lleguen a Plaspy de forma fiable.
- Conocer las diferencias de firmware y hardware resulta útil al probar funciones como SOS, comunicación bidireccional y geocercas.
- Saber que Plaspy usa un puerto unificado y detección automática de protocolos simplifica la configuración y el onboarding.
- Entender los tipos de telemetría que envía el rastreador permite a los administradores configurar alertas útiles y intervalos de reporte en Plaspy.
- Estar informado sobre el fallback a LBS y el comportamiento A-GPS ayuda a gestionar expectativas sobre la precisión de la posición en entornos difíciles como interiores o túneles.

## Por qué usar Plaspy con este protocolo

Usar el LK100 con Plaspy ofrece una forma directa de recopilar datos de ubicación y eventos en tiempo real para la seguridad de mascotas y visibilidad operativa. Plaspy acepta los reportes LK100 en un único punto final de la plataforma, normaliza los datos entrantes y los presenta en herramientas para rastreo en vivo, revisión de historial y alertas.

Si desea saber más sobre cómo Plaspy puede integrarse con el LK100 y otros dispositivos, visite https://www.plaspy.com. Para comportamientos específicos según firmware, detalles de protocolo y guía de configuración del fabricante, verifique la información en el sitio oficial de LK GPS https://www.lk-gps.com.
