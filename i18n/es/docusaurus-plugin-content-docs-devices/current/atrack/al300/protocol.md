---
slug: /atrack/al300/protocol
id: al300-protocol
sidebar_label: Protocol
title: ATrack - AL300 Protocol
sidebar_class_name: menu_item_tracker
description: Referencia pública del protocolo para integrar el rastreador GPS ATrack AL300 con Plaspy usando ajustes de conexión y opciones de transporte
keywords:
  - Protocolo ATrack AL300
  - Protocolo GPS AL300
  - Compatibilidad AL300 Plaspy
  - Protocolo rastreador GPS ATrack
  - Protocolo de comunicación AL300
  - Protocolo de rastreo AL300
  - Integración telemetría AL300
  - AL300 UDP TCP MQTT
  - Rastreo de flotas AL300
  - Integración ATrack AL300
---

# ATrack - Protocolo AL300

Esta página documenta el contexto público del protocolo para usar el rastreador GPS ATrack AL300 con Plaspy. Se centra en cómo el AL300 puede reportar posición, telemetría y eventos hacia Plaspy sin exponerse a detalles privados de implementación. El objetivo es ayudar a usuarios técnicos e integradores a comprender el papel de comunicación que desempeña el AL300 cuando se conecta a Plaspy.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando un equipo está configurado correctamente para reportar al endpoint de Plaspy. El comportamiento exacto puede variar según la versión de firmware, la revisión de hardware, la variante regional y la implementación del fabricante, por lo que esta página ofrece orientación general y no sensible, y recomienda verificar con el fabricante detalles específicos del firmware.

## Resumen del protocolo

El AL300 puede transmitir posición GNSS, telemetría del vehículo y datos de eventos a servidores backend usando opciones de transporte estándar. En términos prácticos, el protocolo del rastreador define cómo el dispositivo establece una sesión con Plaspy, se identifica y entrega datos de ubicación y sensores que Plaspy ingiere para mapas, alertas y reportes.

- Permite que el AL300 reporte coordenadas GNSS, marcas de tiempo y eventos de movimiento o ignición hacia Plaspy.
- Transmite telemetría opcional del vehículo, como parámetros de CAN Bus y lecturas de sensores BLE cuando esas interfaces están presentes.
- Proporciona una capa agnóstica al transporte para que los datos puedan enviarse vía UDP, TCP, MQTT o SMS sobre IMS según la configuración del dispositivo.
- Asegura que Plaspy pueda mapear los mensajes entrantes a una identidad de dispositivo para que la ubicación y los eventos se asocien al activo correcto.
- Soporta registro en cola y subidas diferidas para que los datos almacenados durante cortes de cobertura se entreguen a Plaspy cuando la conectividad se recupere.

## Cómo Plaspy detecta el protocolo

Plaspy recibe el tráfico de los dispositivos en un endpoint y puerto compartidos y aplica detección automática de protocolo, de modo que la mayoría de los dispositivos configurados correctamente no requieren selección manual del protocolo dentro de la plataforma. Esta detección simplifica el onboarding a través de muchos modelos de rastreadores y variantes regionales.

- Plaspy expone un único endpoint público para tráfico de dispositivos en d.plaspy.com y acepta conexiones directas a 54.85.159.138.
- Plaspy escucha en el puerto 8888 para los reportes de dispositivos y usa ese mismo puerto para todos los dispositivos compatibles.
- Los dispositivos pueden configurarse para usar UDP o TCP para reportar al endpoint de Plaspy según la capacidad del equipo y las condiciones de la red.
- Cuando un dispositivo apunta al endpoint de Plaspy, la plataforma intentará identificar automáticamente el protocolo del dispositivo, por lo que la selección manual suele ser innecesaria.
- Una configuración correcta del equipo y una conectividad de red estable facilitan el proceso de detección automática y reducen la fricción en el onboarding.

## Transporte y contexto de conexión

El AL300 soporta múltiples opciones de transporte y variantes celulares regionales. El contexto de conexión abarca cómo el dispositivo llega a Plaspy y qué transporte elegir según las necesidades del despliegue y las capacidades del firmware del equipo.

- El AL300 puede configurarse para enviar datos a Plaspy vía UDP o TCP en el puerto 8888 según la configuración específica del equipo.
- Los dispositivos pueden apuntar al nombre DNS d.plaspy.com o directamente a la IP del servidor Plaspy 54.85.159.138 cuando la topología de red requiere una dirección IP.
- Plaspy usa el mismo puerto 8888 en todos los dispositivos para simplificar la configuración de firewalls y redes para flotas.
- El rastreador también soporta MQTT o SMS sobre IMS como transportes alternativos cuando esas opciones están habilitadas y son apropiadas para el despliegue.
- La elección del transporte puede afectar garantías de entrega, comportamiento de batería y uso de la red según las limitaciones del firmware y del operador móvil.

## Notas sobre compatibilidad del protocolo

- AL300 está disponible en variantes regionales como AL300‑MG, AL300‑MX y AL300‑LE; las diferencias de firmware y bandas celulares pueden afectar los transportes disponibles y el comportamiento.
- Las revisiones de firmware pueden añadir, cambiar o desaprobar funcionalidades del protocolo; siempre confirme la versión de firmware y las notas de la versión al solucionar problemas.
- Interfaces opcionales como CAN Bus y BLE amplían la telemetría, pero requieren la configuración adecuada tanto en el dispositivo como en Plaspy para mapear los valores entrantes a los campos correctos.
- La selección de transporte (UDP, TCP, MQTT, SMS sobre IMS) debe coincidir con la capacidad del dispositivo y el soporte del operador para la variante y región elegidas.
- Ajustes a nivel de red como APN, resolución DNS y aprovisionamiento de la SIM pueden afectar la conectividad hacia d.plaspy.com o la dirección IP de Plaspy.
- Valide los ajustes del dispositivo con la documentación oficial del fabricante y pruebe algunos equipos antes de un despliegue masivo para garantizar un comportamiento consistente.

## Por qué es importante entender el protocolo

Comprender cómo el AL300 se comunica con Plaspy reduce el tiempo de incorporación y mejora la fiabilidad operativa. Tener claro el contexto de comunicación ayuda en la configuración inicial, en la resolución de problemas intermitentes y en la planificación de cambios de firmware o de red.

- Ayuda a asegurar que los dispositivos estén correctamente configurados para reportar a d.plaspy.com o a la IP de Plaspy y que la detección automática tenga éxito.
- Facilita la resolución de problemas al acotar posibles causas a la elección de transporte, APN y aprovisionamiento de la SIM, o diferencias de firmware.
- Permite planificar la capacidad de red, el consumo de batería y la frecuencia de mensajes según el transporte y los ajustes del dispositivo.
- Habilita el mapeo preciso de campos de telemetría CAN y BLE en los paneles y reportes de Plaspy cuando se usan esas interfaces.
- Reduce el riesgo del despliegue al fomentar la validación con un grupo piloto pequeño antes de escalar a toda la flota.

## Por qué usar Plaspy con este protocolo

Usar el AL300 con Plaspy ofrece a las organizaciones una vía práctica para capturar en una sola plataforma ubicación GNSS robusta, telemetría del vehículo y datos de sensores. El enfoque de endpoint compartido y la detección automática de protocolos de Plaspy simplifican el onboarding de flotas mixtas y reducen la necesidad de configurar la plataforma dispositivo por dispositivo.

Para obtener más información sobre Plaspy y cómo funciona con dispositivos como el AL300 visite https://www.plaspy.com. Para detalles específicos de protocolo, notas de firmware y revisiones de hardware más actuales, confirme con el fabricante en https://www.atrack.com.tw/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
