---
slug: /tzone/tz_tt01/protocol
id: tz_tt01-protocol
sidebar_label: Protocol
title: TZone - TZ-TT01 Protocol
sidebar_class_name: menu_item_tracker
description: Visión general pública del protocolo del transmisor de temperatura TZone TZ TT01 y su comunicación con Plaspy para integración de dispositivos
keywords:
  - Protocolo TZone TZ TT01
  - Protocolo GPS TZone TZ TT01
  - Protocolo de comunicación TZone TZ TT01
  - Compatibilidad TZ TT01 con Plaspy
  - Transmisor de temperatura TZone
  - Protocolo de monitoreo de temperatura
  - Integración de dispositivos Plaspy
  - Interfaz 1-wire para temperatura
  - Transmisor de temperatura IoT
  - Detección de protocolo de dispositivo
---

# TZone - Protocolo TZ-TT01

Esta página ofrece contexto público sobre el protocolo para usar el transmisor de temperatura TZone TZ-TT01 con Plaspy. Describe de forma general cómo se comunica el dispositivo, qué esperar al conectarlo y cómo Plaspy interpreta los informes para su monitoreo y supervisión operativa. El TZ-TT01 es un transmisor compacto diseñado para conectar hasta tres termómetros digitales mediante una interfaz 1-wire y transmitir las lecturas de forma inalámbrica.

Plaspy emplea ajustes de conexión compartidos para los dispositivos compatibles y detectará automáticamente el protocolo del tracker cuando el dispositivo reporte al endpoint de Plaspy. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página se centra en el contexto público de integración y conexión más que en los detalles internos o formatos de paquete propietarios.

## Resumen del protocolo

El protocolo del TZ-TT01 define cómo el transmisor formatea y envía temperaturas, estado y la información básica del equipo para que una plataforma remota como Plaspy pueda registrar y mostrar los datos del sensor. Permite la entrega confiable de muestras de sensor y la telemetría básica necesaria para monitoreo, alertas e informes históricos.

- Transporta valores de temperatura muestreados de hasta tres termómetros 1-wire además del estado básico del transmisor para uso remoto.
- Identifica el dispositivo ante el host receptor para que Plaspy pueda asociar los datos entrantes con el activo correcto.
- Transmite telemetría mediante el enlace RF del transmisor para que un host o gateway pueda reenviar los datos a endpoints en la nube.
- Permite la notificación del estado de batería y de alimentación, lo que ayuda a Plaspy y a los usuarios a vigilar la salud del dispositivo.
- Soporta configuraciones y comportamientos de informe que pueden ajustarse por firmware o por herramientas del fabricante.

## Cómo Plaspy detecta el protocolo

Plaspy recibe los informes de dispositivos en un único endpoint y puerto compartidos e incluye detección automática de protocolo, por lo que la mayoría de los dispositivos correctamente configurados serán reconocidos sin selección manual. Cuando el TZ-TT01 o un gateway compatible reenvía los datos del transmisor a Plaspy, la plataforma determina el mapeo adecuado hacia los campos de dispositivo y sensor.

- El dominio del servidor de Plaspy es d.plaspy.com al que los dispositivos o gateways pueden apuntar para reportar.
- La IP del servidor Plaspy es 54.85.159.138, alternativa para endpoints que requieren direccionamiento numérico.
- El puerto es 8888 y los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888.
- El dispositivo puede configurarse usando UDP o TCP en el puerto 8888 dependiendo de la capacidad del equipo y de la configuración del gateway.
- Todos los dispositivos en Plaspy usan el mismo puerto y Plaspy detecta automáticamente el protocolo del tracker, por lo que la selección manual raramente es necesaria.
- Si un dispositivo no aparece, verifique el destino de reporte y que el transmisor o su gateway tengan permiso para conectarse a d.plaspy.com usando el transporte correcto.

## Transporte y contexto de conexión

El transporte y el direccionamiento determinan cómo los datos del transmisor llegan a Plaspy, pero no cambian el rol público del protocolo en sí. El TZ-TT01 utiliza RF de 2.4 GHz para enviar los datos de los sensores a un host o gateway ascendente; ese host luego reenvía los informes a Plaspy empleando la configuración de red de la plataforma que se describe a continuación.

- Los dispositivos o gateways pueden apuntar a d.plaspy.com como dominio de reporte para la entrega en la nube.
- Alternativamente, los dispositivos pueden configurarse para enviar informes a 54.85.159.138 si se requiere direccionamiento numérico.
- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888; la elección del transporte depende del soporte del dispositivo y de las condiciones de la red.
- Plaspy utiliza el mismo puerto para todos los dispositivos soportados, lo que simplifica la configuración de firewalls y redes para los integradores.
- Asegúrese de que las rutas de red desde el gateway que reenvía hacia d.plaspy.com en el puerto 8888 estén abiertas y sean estables para garantizar un reporte confiable.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar tiempos, nombres de campo o comportamiento de reporte, por lo que es importante verificar la versión de firmware al diagnosticar compatibilidad.
- Las revisiones de hardware u opciones de gateway pueden modificar cómo se recolectan y reenvían los datos RF a Plaspy.
- La selección de transporte entre UDP y TCP puede afectar las características de entrega; elija el transporte que coincida con la capacidad del dispositivo o gateway.
- Las configuraciones y comandos del fabricante son la referencia principal para el comportamiento del dispositivo; consulte al fabricante para opciones específicas del equipo.
- Plaspy detecta automáticamente el protocolo cuando un dispositivo reporta correctamente a d.plaspy.com en el puerto compartido, pero es necesaria una configuración correcta del dispositivo.
- Valide la compatibilidad del dispositivo con la documentación más reciente del fabricante antes de desplegar grandes instalaciones.

## Por qué es importante conocer el protocolo

Comprender el protocolo de comunicación ayuda a asegurar que el TZ-TT01 reporte de forma fiable a Plaspy y que las temperaturas y los datos de estado transmitidos se mapeen correctamente en los paneles de control y las alertas. Incluso cuando Plaspy detecta automáticamente un protocolo, conocer el comportamiento de reporte del dispositivo facilita la puesta en marcha y la operación continua.

- Facilita la configuración correcta del destino de reporte y del transporte para que el dispositivo llegue a Plaspy.
- Ayuda a interpretar la información de salud del dispositivo, como el estado de batería y los intervalos de muestreo, para la planificación operativa.
- Acelera la resolución de problemas al delimitar si el problema es de transporte, configuración, firmware o de la plataforma.
- Apoya la validación de la frecuencia de muestreo de los sensores y la puntualidad de los datos para SLAs y necesidades de monitoreo.
- Facilita la migración y la planificación de actualizaciones de firmware al indicar dónde pueden producirse cambios que afecten el formato o la entrega de datos.

## Por qué usar Plaspy con este protocolo

Usar el TZone TZ-TT01 con Plaspy ofrece a las organizaciones una vía sencilla para recolectar, visualizar y generar alertas sobre la telemetría de temperatura desde transmisores distribuidos. La detección automática de protocolos de Plaspy y el uso consistente del puerto reducen la carga de configuración para los equipos de operaciones y simplifican la puesta en marcha de gateways y hosts que reenvían datos.

Si desea saber más sobre Plaspy y su integración con dispositivos como el TZ-TT01, visite https://www.plaspy.com. Para los detalles más actuales y específicos de protocolo y firmware del dispositivo, confirme la información con el fabricante en http://www.tzonedigital.com/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
