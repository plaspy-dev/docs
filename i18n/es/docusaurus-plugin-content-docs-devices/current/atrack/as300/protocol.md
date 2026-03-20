---
slug: /atrack/as300/protocol
id: as300-protocol
sidebar_label: Protocol
title: ATrack - AS300 Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo del rastreador ATrack AS300 y su comunicación con Plaspy para telemetría GPS y datos de sensores
keywords:
  - Protocolo ATrack AS300
  - Protocolo GPS AS300
  - Comunicación ATrack AS300
  - Protocolo de rastreo AS300
  - Rastreador GPS ATrack Plaspy
  - Compatibilidad AS300 Plaspy
  - Protocolo de rastreador de activos
  - Protocolo LTE Cat M para rastreadores
  - Telemetría de sensores BLE
  - Protocolo de rastreo de flotas
---

# ATrack - Protocolo AS300

Esta página describe el contexto público del protocolo para usar el rastreador de activos ATrack AS300 con Plaspy. Se centra en la relación de comunicación entre el dispositivo y la plataforma Plaspy, explicando puntos de conexión, opciones de transporte y el papel del protocolo de reporte del rastreador para entregar a Plaspy datos útiles de posición, sensores y eventos.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando un equipo reporta al endpoint de Plaspy. El comportamiento exacto del protocolo y las funciones disponibles pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante; por ello esta guía ofrece contexto público más que detalles específicos de firmware.

## Resumen del protocolo

El protocolo de reporte del AS300 permite al dispositivo identificarse, enviar soluciones GNSS, lecturas de sensores BLE, eventos de movimiento y manipulación, y telemetría periódica hacia un servidor backend como Plaspy. El protocolo regula cómo el dispositivo inicia y mantiene un canal de datos con Plaspy y cómo se empaqueta la telemetría para su ingestión, dejando el framing específico de firmware al fabricante.

- Transmite soluciones de ubicación y metadatos de posicionamiento del subsistema GNSS del AS300 para mapas y geocercas en Plaspy
- Transporta lecturas de sensores BLE y eventos del acelerómetro a bordo para que Plaspy pueda correlacionar telemetría ambiental y alertas de movimiento
- Soporta reporte en búfer para que las posiciones almacenadas se envíen a Plaspy tras interrupciones temporales de conectividad
- Entrega campos de identificación y estado del dispositivo que permiten a Plaspy asociar los mensajes entrantes con el registro correcto en la flota
- Habilita alertas basadas en eventos como manipulación, vibración o apertura de puertas para integrarlas en los flujos de trabajo de Plaspy

## Cómo detecta Plaspy el protocolo

Plaspy acepta tráfico entrante de dispositivos en un único endpoint compartido y detecta automáticamente el protocolo del rastreador que emplea el equipo. Cuando un AS300 está configurado para reportar a Plaspy, la plataforma identifica el formato del mensaje entrante y asocia la telemetría con el registro de dispositivo correspondiente, por lo que normalmente no es necesario seleccionar manualmente el protocolo dentro de la plataforma.

- El dominio del servidor Plaspy para reporte de dispositivos es d.plaspy.com
- La dirección IP del servidor Plaspy para reporte de dispositivos es 54.85.159.138
- Plaspy escucha en el puerto 8888 para conexiones de dispositivos y usa el mismo puerto para todos los dispositivos soportados
- Los dispositivos configurados para reportar al endpoint de Plaspy normalmente no requerirán selección manual de protocolo dentro de Plaspy
- La detección de Plaspy cubre una variedad de comportamientos soportados por los rastreadores, pero no sustituye verificar el firmware y la configuración del dispositivo

## Transporte y conexión

El AS300 puede usar transporte UDP o TCP según la configuración del equipo y las capacidades del firmware. Para integrarlo con Plaspy, apunte el dispositivo al endpoint de Plaspy y use el modo de transporte compatible que se ajuste a sus necesidades de despliegue y a la configuración del AS300.

- El dispositivo puede configurarse para usar UDP en el puerto 8888 o TCP en el puerto 8888 según el soporte del equipo
- Los equipos pueden enviarse al dominio d.plaspy.com o directamente a la IP del servidor 54.85.159.138
- Todos los dispositivos que reportan a Plaspy usan el mismo puerto 8888, lo que simplifica la configuración
- Elija UDP para reportes intermitentes con menor sobrecarga, o TCP cuando se prefiera un transporte orientado a sesión y el dispositivo lo soporte
- Asegúrese de que el APN celular y la configuración de la SIM en el AS300 estén correctos para que el dispositivo alcance el endpoint de Plaspy sobre LTE Cat M

## Notas sobre compatibilidad del protocolo

- El comportamiento del AS300 puede variar entre versiones de firmware y variantes de hardware, por lo que confirme las funciones con las notas de firmware del dispositivo
- La selección de transporte UDP versus TCP puede cambiar el comportamiento del dispositivo respecto a retransmisiones y buffering; escoja el transporte que se alinee con sus necesidades de confiabilidad
- La integración de sensores BLE y la gestión remota ADM dependen del firmware y pueden requerir pasos de configuración específicos en el dispositivo
- Revisiones de hardware o variantes regionales del AS300 pueden introducir diferencias menores en el protocolo o en el transporte
- Plaspy detecta automáticamente el protocolo entrante, pero validar que el dispositivo está reportando a d.plaspy.com o a 54.85.159.138 en el puerto 8888 es una verificación práctica inicial
- Siempre compare cualquier paso de integración con la documentación del fabricante antes de un despliegue a gran escala

## Por qué es importante entender el protocolo

Comprender cómo el AS300 se comunica con Plaspy ayuda a garantizar reportes confiables, una interpretación precisa de la telemetría y una resolución de problemas efectiva. Conocer el alcance del protocolo reduce el tiempo de diagnóstico cuando los dispositivos no aparecen en la plataforma o cuando faltan campos de sensores específicos.

- Ayuda a confirmar la configuración del dispositivo, como APN, SIM y ajustes de endpoint, para que los mensajes lleguen a Plaspy
- Facilita el diagnóstico de problemas de conectividad al verificar el modo de transporte y la accesibilidad del endpoint
- Aclara cómo se manejarán los datos en búfer y las retransmisiones por parte del dispositivo y cómo los recibirá Plaspy
- Asegura que los emparejamientos BLE y los eventos del acelerómetro se transmitan de forma que Plaspy pueda procesarlos
- Permite planificar la duración de batería al entender cómo los intervalos de reporte y la elección de transporte afectan el consumo energético

## Por qué usar Plaspy con este protocolo

Usar el AS300 con Plaspy ofrece a las organizaciones una vía práctica para obtener visibilidad en tiempo real en envíos de corto plazo y monitoreo de activos móviles. Plaspy ingiere soluciones GNSS, telemetría de sensores BLE y eventos de movimiento del AS300 y los presenta en mapas, geocercas, alertas e informes que son útiles para logística, monitoreo de cadena de frío y flujos de trabajo anti robo.

Si desea saber más sobre Plaspy y cómo funciona con dispositivos como el AS300 visite https://www.plaspy.com. Para detalles específicos del protocolo por dispositivo, notas de cambios de firmware y variantes de hardware consulte la documentación del fabricante en https://www.atrack.com.tw/ para verificar el comportamiento actual y las funciones soportadas.
