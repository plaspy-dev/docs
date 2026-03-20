---
slug: /navtelekom/signal_s_2551/protocol
id: signal_s_2551-protocol
sidebar_label: Protocol
title: Navtelekom - SIGNAL S-2551 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo Navtelekom SIGNAL S-2551 y su integración con Plaspy, transporte y pautas de compatibilidad
keywords:
  - Navtelekom SIGNAL S-2551
  - protocolo SIGNAL S-2551
  - protocolo rastreador GPS Navtelekom
  - compatibilidad SIGNAL S-2551 Plaspy
  - protocolo de rastreo vehicular
  - rastreador para gestión de flotas
  - protocolo de telemetría GPS
  - soporte EGTS FLEX
  - integración CAN J1939
  - rastreador dual SIM
---

# Navtelekom — Protocolo SIGNAL S-2551

Esta página explica el contexto público del protocolo para usar el rastreador Navtelekom SIGNAL S-2551 con Plaspy. Se centra en cómo el dispositivo comunica datos con los servidores de Plaspy, el papel del protocolo de reporte en la entrega de posición GNSS y telemetría, y consideraciones prácticas de compatibilidad para su despliegue. El objetivo es proporcionar a integradores técnicos y a los equipos de flota una visión clara y no sensible de cómo interactúan el rastreador y Plaspy.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando este reporta a la plataforma. El SIGNAL S-2551 soporta protocolos EGTS y FLEX 2.0 y puede transmitir vía celular por TCP o UDP. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante; valide siempre los detalles específicos del equipo con la documentación de Navtelekom.

## Resumen del protocolo

El protocolo del SIGNAL S-2551 define cómo se codifican y envían al servidor la posición GNSS, los estados de E/S, la telemetría CAN y las notificaciones de eventos. Para la integración con Plaspy, el protocolo permite la entrega confiable de ubicación y telemetría para que la plataforma pueda ingerir, indexar y presentar datos accionables a los usuarios.

- Permite la transmisión de posición GNSS y telemetría con marca de tiempo para seguimiento en tiempo real en Plaspy.
- Transporta datos de E/S y sensores como entradas analógicas, entradas discretas, parámetros CAN J1939 y eventos del acelerómetro.
- Soporta protocolos usados por el dispositivo, incluidos EGTS y FLEX 2.0, como funciones públicas del fabricante.
- Permite que el rastreador se identifique y envíe los identificadores de dispositivo requeridos para la correcta ingestión por Plaspy.
- Soporta reporte a múltiples servidores para que el dispositivo pueda enviar telemetría a endpoints redundantes cuando esté configurado.

## Cómo Plaspy detecta el protocolo

Plaspy recibe telemetría entrante en un único endpoint y puerto compartido y aplica detección automática para determinar el protocolo del rastreador. Cuando un SIGNAL S-2551 esté configurado correctamente para reportar a Plaspy, por lo general la plataforma no requiere que usted seleccione manualmente el protocolo.

- Plaspy escucha en el dominio d.plaspy.com y en la IP 54.85.159.138 para conexiones de dispositivos.
- Todos los dispositivos soportados por Plaspy usan el mismo puerto 8888, lo que simplifica la configuración del equipo.
- Plaspy admite transporte tanto TCP como UDP y aceptará reportes enviados al puerto 8888.
- Cuando el rastreador envía datos al endpoint de Plaspy, la plataforma detecta automáticamente el protocolo y enruta la telemetría para su procesamiento.
- La identificación correcta del dispositivo y la dirección del servidor en el rastreador son los requisitos principales para que la detección automática funcione.

## Transporte y contexto de conexión

Los detalles de conexión determinan cómo el SIGNAL S-2551 alcanza el endpoint de Plaspy, pero no cambian el rol público del protocolo en el reporte de telemetría. El dispositivo soporta transporte TCP y UDP sobre celular GPRS y puede apuntar a un dominio o a una dirección IP para la entrega al servidor.

- El SIGNAL S-2551 se puede configurar para usar transporte UDP o TCP en el puerto 8888 según la configuración del equipo y los requisitos de fiabilidad de la red.
- Los dispositivos pueden apuntar al servidor de Plaspy usando el dominio d.plaspy.com o directamente a la IP 54.85.159.138.
- Plaspy usa el mismo puerto 8888 para todos los dispositivos soportados, lo que simplifica la configuración en flotas mixtas.
- El equipo es capaz de reportar a múltiples servidores simultáneamente para redundancia; asegúrese de que los servidores secundarios sean accesibles y estén configurados correctamente.
- Considere características de la red como NAT del operador y reglas de firewall al elegir TCP o UDP para su despliegue.

## Notas de compatibilidad del protocolo

- Las revisiones de firmware pueden modificar campos soportados, canales de telemetría opcionales y el comportamiento de mensajes EGTS o FLEX; valide las notas de la versión de firmware.
- Las revisiones de hardware y módulos opcionales, como Bluetooth o antenas GNSS externas, pueden afectar qué canales de telemetría están disponibles.
- La elección de transporte (TCP frente a UDP) puede alterar las garantías de entrega y afectar cómo el dispositivo reintenta o almacena en búfer los mensajes.
- El reporte a múltiples servidores está soportado por el dispositivo pero requiere configuración por servidor y claridad sobre cuál es el servidor primario para la ingestión en Plaspy.
- Las configuraciones del fabricante para identificadores, APN y intervalos de reporte deben estar correctamente establecidas para que Plaspy pueda asociar los IDs de dispositivo a las cuentas.
- Verifique siempre la compatibilidad con la documentación de Navtelekom y las notas de versión del modelo SIGNAL S-2551.

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación del dispositivo ayuda a asegurar una integración fiable con Plaspy, reduce el tiempo de resolución de problemas y mejora la estabilidad operativa a largo plazo en despliegues de flota.

- Garantiza el mapeo correcto de identificadores para que Plaspy reconozca la telemetría entrante y la asocie al activo correspondiente.
- Ayuda a seleccionar los ajustes de transporte y los intervalos de reporte apropiados para equilibrar frescura de datos y consumo celular.
- Facilita la resolución de problemas por falta de telemetría al confirmar la dirección del servidor, el tipo de transporte y los tipos de eventos esperados en el rastreador.
- Mejora la configuración de mapeo de sensores y canales CAN para que los campos de telemetría en Plaspy reflejen las entradas reales.
- Orienta la planificación de actualizaciones de firmware y revisiones de hardware para que los despliegues se mantengan soportados y previsibles.

## Por qué usar Plaspy con este protocolo

Usar el SIGNAL S-2551 con Plaspy ofrece a las organizaciones una vía práctica para aprovechar el hardware robusto del rastreador, múltiples canales de telemetría y el reporte a múltiples servidores para obtener visibilidad operativa. Plaspy ingiere posiciones GNSS, parámetros CAN J1939, E/S de sensores y eventos de acelerómetro para proporcionar monitoreo en tiempo real, reproducción histórica y alertas basadas en reglas que apoyan flujos de trabajo de gestión de flotas y seguridad.

Para saber más sobre cómo Plaspy maneja integraciones de dispositivos y revisar las funcionalidades de la plataforma, visite https://www.plaspy.com. Para obtener los detalles más actuales específicos del protocolo del dispositivo, notas de firmware y guías de implementación, consulte al fabricante en https://www.navtelecom.ru/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo y deben verificarse con la documentación oficial de Navtelekom.
