---
slug: /tzone/tz_bt07/protocol
id: tz_bt07-protocol
sidebar_label: Protocol
title: TZone - TZ-BT07 Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo del TZone TZ BT07 y cómo comunica con Plaspy usando ajustes compartidos y detección automática
keywords:
  - Protocolo TZone TZ BT07
  - Rastreador GPS TZone TZ BT07
  - Compatibilidad iBeacon TZ BT07
  - Protocolo de comunicación TZ BT07
  - Integración TZ BT07 Plaspy
  - Rastreo con balizas Bluetooth
  - Compatibilidad de dispositivos Plaspy
  - Guía de protocolo de rastreador
  - Protocolo de GPS y BLE
  - Resumen del protocolo del dispositivo
---

# TZone - Protocolo TZ-BT07

Esta página resume el contexto público del protocolo para integrar el rastreador TZone TZ-BT07 con Plaspy. Se centra en cómo las comunicaciones públicas del dispositivo se utilizan en integraciones reales y qué esperar al conectar el rastreador al ecosistema de Plaspy. El TZ-BT07 es un rastreador compacto basado en Bluetooth que transmite tramas iBeacon; esta documentación trata esos comportamientos públicos en un contexto práctico de integración.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo cuando llegan datos al endpoint de Plaspy. Los dispositivos y gateways que reenvían datos de rastreadores a Plaspy deben apuntar a d.plaspy.com o a la IP de servidor 54.85.159.138 en el puerto 8888. El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 y Plaspy usa el mismo puerto para todos los dispositivos mientras detecta el protocolo automáticamente. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que siempre confirme los detalles específicos del dispositivo con el fabricante.

## Resumen del protocolo

El TZ-BT07 comunica principalmente como una baliza Bluetooth Low Energy usando la técnica de transmisión iBeacon. En escenarios prácticos de integración, las tramas iBeacon proporcionan información de proximidad e identificación que un gateway o un dispositivo móvil puede capturar y luego reenviar a un servidor como Plaspy. Comprender este comportamiento de transmisión pública le ayuda a planificar cómo fluirán los datos desde el rastreador hacia Plaspy para supervisión y visibilidad.

- El rastreador transmite tramas iBeacon BLE que incluyen identificadores del dispositivo y datos de proximidad para detección local.
- El intervalo de transmisión y la potencia emitida son configurables en el dispositivo y afectan la frecuencia de actualizaciones y el alcance efectivo.
- Un gateway o un smartphone normalmente recoge las transmisiones BLE y reenvía los datos relevantes a un servidor para visibilidad remota.
- Cuando se reenvían a Plaspy, el servidor recibe los reportes entrantes en el endpoint compartido y los asocia a un perfil de dispositivo.
- Conocer el comportamiento de la baliza ayuda a determinar la mejor ubicación, la selección de gateway y la cadencia de reporte esperada.

## Cómo Plaspy detecta el protocolo

Plaspy detecta automáticamente el protocolo del rastreador cuando recibe datos en el endpoint y puerto compartidos. Para dispositivos como el TZ-BT07 que usan BLE para transmisiones locales, la detección e integración suelen ocurrir una vez que un gateway o una app reenvían los datos de la baliza a Plaspy. En la mayoría de configuraciones estándar, usted no necesita seleccionar manualmente un protocolo dentro de Plaspy si el dispositivo está configurado para reportar al endpoint de Plaspy.

- Plaspy acepta reportes entrantes de dispositivos en d.plaspy.com y en la IP de servidor 54.85.159.138 en el puerto 8888.
- Los dispositivos o gateways pueden usar TCP o UDP en el puerto 8888 para reenviar la telemetría a Plaspy.
- Plaspy emplea el mismo puerto para todos los dispositivos compatibles y aplica detección automática en lugar de exigir la selección manual del protocolo.
- Reportes correctamente formateados y una ruta de reenvío estable desde el gateway hacia Plaspy permiten a la plataforma identificar el tipo de dispositivo y parsear los datos entrantes.
- Si se utiliza un gateway o una aplicación de reenvío, asegúrese de que preserve los campos identificadores que Plaspy necesita para la detección automática.

## Transporte y contexto de conexión

Las opciones de transporte y conexión dependen de cómo se reenvían los datos del TZ-BT07 a internet. Dado que el TZ-BT07 transmite localmente por BLE, normalmente se requiere un intermediario (gateway, puente o smartphone) para enviar los datos del rastreador a Plaspy. Plaspy escucha datos entrantes en un único puerto compartido para que la configuración de dispositivos y las reglas de firewall sean sencillas.

- El dominio del servidor de Plaspy para reportes de dispositivos es d.plaspy.com y la IP conocida es 54.85.159.138.
- El puerto designado para todos los dispositivos es 8888 y Plaspy usa este mismo puerto para los reportes entrantes.
- Los datos del dispositivo reenviados a Plaspy pueden usar UDP o TCP en el puerto 8888 según la configuración del gateway o la app de reenvío.
- Al usar un gateway, asegúrese de que pueda reenviar los datos derivados del BLE a d.plaspy.com o a 54.85.159.138 en el puerto 8888.
- Tenga en cuenta las políticas de firewall y NAT de la red al configurar gateways para garantizar la entrega fiable a Plaspy.

## Notas sobre compatibilidad del protocolo

- El TZ-BT07 se basa en transmisiones BLE iBeacon; el reporte a la red normalmente requiere un gateway o un dispositivo móvil que retransmita los datos a un servidor remoto.
- Las versiones de firmware y las opciones de configuración del dispositivo, como el intervalo de transmisión y la potencia emitida, pueden cambiar el comportamiento y la compatibilidad.
- Revisiones de hardware o cambios en el firmware del fabricante podrían alterar los campos identificables usados por los sistemas de detección automática.
- La elección entre UDP y TCP para el reenvío es una decisión a nivel de gateway y puede afectar la fiabilidad y la latencia.
- Confirme que cualquier gateway o software de reenvío que utilice preserve los identificadores de baliza que Plaspy necesita para el emparejamiento de dispositivos.
- Siempre valide la compatibilidad con la documentación del fabricante cuando planifique despliegues o actualizaciones.

## Por qué es importante entender el protocolo

Comprender claramente el protocolo de comunicación del TZ-BT07 y cómo sus transmisiones BLE se reenvían a Plaspy facilita la configuración correcta, el reporte fiable y el mantenimiento a largo plazo. Saber de dónde provienen los datos de la baliza y cómo llegan a Plaspy reduce el tiempo de puesta en marcha y simplifica la resolución de problemas cuando los datos esperados no llegan.

- Le asegura elegir el gateway o puente móvil correcto para capturar y reenviar las transmisiones BLE.
- Ayuda a determinar el intervalo de transmisión y la potencia óptimos para equilibrar cobertura y duración de batería.
- Facilita la configuración de reglas de red para que los reportes puedan alcanzar d.plaspy.com o 54.85.159.138 en el puerto 8888.
- Ayuda a diagnosticar problemas al clarificar si la falla está en la recepción local BLE o en el reenvío aguas arriba hacia Plaspy.
- Apoya la planificación de actualizaciones de firmware y la gestión del ciclo de vida del dispositivo para preservar la compatibilidad.

## Por qué usar Plaspy con este protocolo

Usar Plaspy para recibir datos reenviados desde dispositivos TZ-BT07 ofrece a las organizaciones visibilidad centralizada y registros históricos de eventos de ubicación o proximidad derivados de balizas. La detección automática de protocolos de Plaspy y el enfoque de puerto compartido reducen la fricción de configuración en despliegues que usan flotas mixtas de rastreadores y gateways.

Para más detalles sobre cómo Plaspy maneja los reportes de dispositivos y para conocer las opciones de integración, visite https://www.plaspy.com. Verifique siempre los detalles más recientes del protocolo específico del dispositivo, notas de firmware y revisiones de hardware con el fabricante en http://www.tzonedigital.com/ ya que el soporte del protocolo y los detalles de implementación pueden cambiar con el tiempo.
