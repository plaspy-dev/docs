---
slug: /concox/tr02/protocol
id: tr02-protocol
sidebar_label: Protocol
title: Concox - TR02 Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo Concox TR02 y su integración con Plaspy, configuración de conexión y notas de compatibilidad
keywords:
  - Concox TR02 protocolo
  - Concox TR02 GPS
  - TR02 compatibilidad Plaspy
  - protocolo rastreo Concox
  - comunicación rastreador GPS
  - seguimiento vehicular Plaspy
  - integración Concox TR02
  - rastreo flotas Concox
  - guía configuración TR02
  - compatibilidad protocolo Concox
---

# Concox - Protocolo TR02

Esta página describe el contexto del protocolo público para usar el rastreador GPS Concox TR02 con Plaspy. Se enfoca en cómo el dispositivo suele comunicarse con una plataforma de seguimiento, los ajustes de conexión compartidos que usa Plaspy y consideraciones prácticas de compatibilidad que ayudan a garantizar reportes y monitoreo confiables.

Plaspy emplea ajustes de conexión compartidos para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el equipo reporta a la plataforma. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware o la implementación del fabricante, por lo que esta guía explica el contexto general de comunicación y recomienda verificar la documentación del fabricante cuando sea necesario. El TR02 es un rastreador vehicular compacto con antena integrada, gestión de grupos y notificaciones por geocerca, soporte para múltiples cuentas y características GSM/GPS que lo hacen adecuado para seguimiento de flotas y vehículos personales con control de costos.

## Resumen del protocolo

El protocolo de reporte del TR02 define cómo el dispositivo se identifica, envía actualizaciones de ubicación y estado, y transmite notificaciones de eventos como activaciones de geocerca o alertas de manipulación a un servidor. Para la integración con Plaspy, los aspectos públicos relevantes son la existencia de un endpoint de red, el método de transporte y una cadencia de reporte consistente que la plataforma pueda recibir e interpretar.

- Permite que el TR02 envíe datos de posición, hora y estado a un servidor remoto para su procesamiento y visualización.
- Transporta notificaciones de eventos utilizadas en alertas de geocerca, estado de encendido o alimentación y señales de gestión de grupos.
- Proporciona un identificador que vincula los reportes del dispositivo con un registro específico dentro de Plaspy para el mapeo de cuentas y grupos.
- Opera sobre transporte IP estándar, por lo que el dispositivo puede apuntarse a los endpoints de Plaspy para recolección centralizada.
- Permite que Plaspy presente ubicación del vehículo, recorridos históricos y alertas a los usuarios sin necesidad de cambios en el equipo más allá de la configuración del endpoint.

## Cómo detecta Plaspy el protocolo

Plaspy escucha en un único endpoint y puerto compartidos para los reportes entrantes de los rastreadores y aplica detección automática de protocolo para determinar cómo se comunica un dispositivo. En la mayoría de los casos, un TR02 configurado para reportar al endpoint de Plaspy será identificado sin necesidad de seleccionar el protocolo manualmente en la plataforma.

- Plaspy recibe reportes de dispositivos en el dominio d.plaspy.com y en la IP pública 54.85.159.138.
- Todos los dispositivos en Plaspy usan el mismo puerto, por lo que no se requiere seleccionar puertos por dispositivo en la plataforma.
- El dispositivo puede estar configurado para usar UDP o TCP en el puerto 8888 según el firmware y la configuración local.
- Cuando un TR02 reporta al endpoint de Plaspy, la plataforma detecta automáticamente el protocolo del rastreador, por lo que normalmente no es necesario seleccionar el protocolo manualmente.
- Asegúrese de que el IMEI del dispositivo o el identificador único estén correctamente configurados para que Plaspy pueda mapear los reportes entrantes a la cuenta y vehículo correctos.

## Contexto de transporte y conexión

El contexto de conexión abarca cómo el TR02 alcanza a Plaspy a través de la red y qué ajustes verificar en el dispositivo al configurar los reportes. Plaspy admite ambos transportes comunes en rastreadores vehiculares, por lo que los equipos pueden configurarse para comunicarse mediante el método soportado por el dispositivo y la red.

- Los dispositivos pueden usar UDP o TCP en el puerto 8888 para reportar a Plaspy.
- El dispositivo puede apuntarse al dominio del servidor d.plaspy.com o a la IP 54.85.159.138.
- Plaspy utiliza el mismo puerto para todos los dispositivos compatibles, lo que simplifica la configuración en flotas mixtas.
- Elija UDP o TCP en el TR02 según el firmware de la unidad y las necesidades de confiabilidad de su despliegue.
- Verifique la APN y los ajustes celulares en el TR02 para que pueda establecer conectividad en las bandas GSM que soporta la unidad.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden modificar el comportamiento de reporte y las funciones disponibles, por lo que pruebe un dispositivo tras cualquier actualización de firmware.
- Las revisiones de hardware y las variantes regionales pueden cambiar los ajustes de transporte por defecto o los tipos de mensajes habilitados.
- Las herramientas de configuración del fabricante o la gestión de la SIM pueden afectar la conectividad y la frecuencia de los reportes.
- La selección de transporte entre UDP y TCP debe coincidir con lo que soporte el firmware del dispositivo y con los requisitos de confiabilidad del despliegue.
- La detección automática de Plaspy reduce los pasos de configuración, pero aún son necesarios identificadores correctos del dispositivo y ajustes del endpoint.
- Siempre verifique los ajustes del dispositivo y las asignaciones de cuentas en Plaspy al añadir múltiples equipos o migrar grupos.

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación del TR02 ayuda a asegurar una configuración fluida, acelerar la resolución de problemas y garantizar la fiabilidad a largo plazo cuando los dispositivos se usan con Plaspy. Conocer el comportamiento y las expectativas de conexión a alto nivel reduce la posibilidad de errores de configuración y facilita que los equipos respondan a problemas de conectividad o alertas de forma más eficiente.

- Acelera la provisión inicial al enfocarse en el endpoint y los ajustes de transporte correctos.
- Ayuda a diagnosticar por qué un dispositivo puede no aparecer en Plaspy revisando la APN, el transporte y los valores de endpoint.
- Permite decidir entre UDP y TCP en función del comportamiento de la red y la criticidad de los mensajes.
- Aclara cómo funciones como notificaciones de geocerca y gestión de grupos se entregan a la plataforma.
- Reduce el tiempo de pruebas al confirmar que los identificadores del dispositivo y los intervalos de reporte coinciden con las expectativas de la plataforma.

## Por qué usar Plaspy con este protocolo

Usar el Concox TR02 con Plaspy ofrece a las organizaciones visibilidad centralizada de la ubicación de los vehículos, el historial de movimientos y las notificaciones de eventos, aprovechando la detección automática de protocolo de Plaspy y los ajustes de conexión compartidos. Para flotas que gestionan múltiples vehículos, las funciones de gestión de grupos y geocercas del TR02, combinadas con un único endpoint de Plaspy, facilitan consolidar los datos de rastreo para la supervisión operativa.

Si desea saber más sobre cómo Plaspy funciona con dispositivos como el Concox TR02 visite https://www.plaspy.com. Verifique los detalles específicos del protocolo del dispositivo, el comportamiento del firmware y la implementación más reciente del fabricante consultando la documentación oficial de Concox en https://www.iconcox.com/ ya que estos detalles pueden cambiar con el tiempo.
