---
slug: /globalsat/lt_501/protocol
id: lt_501-protocol
sidebar_label: Protocol
title: GlobalSat - LT-501 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo para usar el rastreador GlobalSat LT-501 con Plaspy y garantizar reportes e integración confiables
keywords:
  - Protocolo GlobalSat LT-501
  - Protocolo GPS GlobalSat LT-501
  - Protocolo de seguimiento LT-501
  - Compatibilidad GlobalSat LT-501 con Plaspy
  - Protocolo de comunicación LT-501
  - Rastreador LT-501 LoRaWAN
  - Protocolo de rastreador de activos GlobalSat
  - Integración rastreador GPS LT-501
  - Integración LT-501 Helium
  - Protocolo de dispositivo Plaspy
---

# GlobalSat - Protocolo LT-501

Esta página explica el contexto público del protocolo para usar el rastreador GlobalSat LT-501 con Plaspy. Describe a alto nivel cómo el dispositivo se comunica, los puntos de conexión que Plaspy expone y el papel que juega el protocolo de reporte del rastreador en una integración exitosa. La serie LT-501R es un rastreador de activos GPS con LoRa optimizado para monitoreo interior y exterior, con características como larga duración de batería, BLE para posicionamiento en interiores, acelerómetro de 3 ejes y soporte para LoRaWAN Clase A y Clase C.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el dispositivo reporta al endpoint de Plaspy. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, y la forma en que los uplinks de LoRaWAN llegan a un servidor de aplicaciones depende de su configuración de red LoRa. Use esta página para entender el contexto público de comunicación y para guiar los pasos de configuración y validación del LT-501 con Plaspy.

## Resumen del protocolo

El protocolo de reporte del rastreador es el mecanismo por el cual el LT-501 transmite identidad, ubicación, movimiento y estado a una plataforma backend. En Plaspy este protocolo permite que la plataforma reciba telemetría utilizable, asocie la identidad del dispositivo a una cuenta y muestre ubicación y eventos de sensores a usuarios e integraciones.

- El protocolo transporta datos de posicionamiento y sensores que Plaspy utiliza para actualizar el estado y el historial del dispositivo.
- Proporciona una identidad de dispositivo consistente para que Plaspy pueda asociar los reportes con el registro correcto del rastreador.
- Permite reportes periódicos y basados en eventos, como detección de movimiento o transiciones de geocerca.
- Los detalles de transporte determinan cómo se entregan los reportes a Plaspy, pero no cambian los datos de alto nivel que el rastreador envía.
- Las opciones de firmware y configuración en el rastreador influyen en qué campos de datos se reportan y con qué frecuencia.

## Cómo Plaspy detecta el protocolo

Plaspy recibe reportes de dispositivos en un endpoint y puerto compartidos y aplica detección automática para determinar el protocolo del rastreador. Cuando un dispositivo está correctamente configurado para reportar a Plaspy, normalmente no es necesario seleccionar el protocolo manualmente dentro de la plataforma.

- Plaspy acepta conexiones dirigidas a d.plaspy.com o a la IP del servidor 54.85.159.138.
- Todos los dispositivos usan el mismo puerto de Plaspy, que es 8888, lo que simplifica la configuración del equipo.
- Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888 según sus capacidades y la configuración de red.
- Plaspy detecta automáticamente el protocolo del rastreador cuando los datos llegan al endpoint compartido.
- Una identidad de dispositivo correcta y intervalos de reporte adecuados ayudan a Plaspy a asociar de forma fiable los reportes entrantes con el registro de dispositivo correcto.

## Transporte y contexto de conexión

La capa de transporte y el endpoint de conexión determinan cómo el LT-501 llega a Plaspy, pero no describen la estructura interna de los paquetes ni los detalles del parser. Debe confirmar el modo de transporte compatible con el firmware de su dispositivo y con su servidor de red cuando conecte dispositivos LoRaWAN a endpoints de aplicación.

- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 según el soporte del equipo y la configuración elegida.
- Los dispositivos pueden señalar el endpoint de Plaspy usando d.plaspy.com o la IP del servidor 54.85.159.138.
- Plaspy usa el mismo puerto 8888 para todos los dispositivos compatibles, lo que simplifica los ajustes salientes en un rastreador o en una integración de red.
- En despliegues LoRaWAN, los uplinks típicamente transitan por un servidor de red antes de llegar a un endpoint de aplicación; asegúrese de que el enrutamiento de su red reenvíe las cargas útiles relevantes a Plaspy.
- La fiabilidad de la conexión, NAT y las reglas de firewall en su entorno pueden afectar la entrega y deben validarse durante la puesta en marcha.

## Notas de compatibilidad del protocolo

- La compatibilidad puede variar entre versiones de firmware; firmware más nuevo o más antiguo puede habilitar u omitir ciertos campos de telemetría.
- Las revisiones de hardware o diferentes SKUs de la serie LT-501R pueden cambiar los sensores disponibles o el comportamiento de gestión de energía.
- El enrutamiento LoRaWAN y la red elegida (por ejemplo Helium) influyen en cómo los uplinks alcanzan el endpoint de aplicación y qué metadatos están disponibles.
- La selección del transporte (UDP frente a TCP) puede afectar las características de entrega y debe coincidir con lo que el dispositivo y la red soportan.
- Configuraciones del fabricante como intervalo de reporte, GPS activado/desactivado y escaneo de balizas BLE influyen en los datos enviados a Plaspy.
- Valide el comportamiento del dispositivo con la documentación oficial de GlobalSat y con la configuración de su servidor de red antes de desplegar a gran escala.

## Por qué es importante comprender el protocolo

Comprender el protocolo de comunicación ayuda en la configuración inicial, la solución de problemas y a asegurar la operación confiable a largo plazo de los dispositivos LT-501 dentro de Plaspy. Tener claro cómo el rastreador reporta le permite ajustar intervalos, gestionar la vida útil de la batería e interpretar correctamente los eventos en la plataforma.

- Ayuda a diagnosticar por qué un dispositivo no aparece o por qué la telemetría está incompleta en Plaspy.
- Permite optimizar la frecuencia de reporte para equilibrar la duración de batería y la frescura de la ubicación.
- Facilita la verificación de que alertas de geocerca, eventos de movimiento y posicionamiento basado en BLE se estén transmitiendo.
- Apoya decisiones informadas al actualizar firmware o desplegar nuevas revisiones de hardware.
- Ayuda a coordinar el enrutamiento del servidor de red para LoRaWAN para que los mensajes de aplicación lleguen a Plaspy como se espera.

## Por qué usar Plaspy con este protocolo

Usar el GlobalSat LT-501 con Plaspy ofrece una forma práctica de centralizar la telemetría de activos, monitorear batería y eventos de movimiento, y combinar GPS en exteriores con posicionamiento asistido por BLE en interiores para obtener información de ubicación más completa. El endpoint compartido de Plaspy y la detección automática de protocolo reducen la fricción en la configuración de la plataforma, de modo que los dispositivos correctamente apuntados al endpoint de Plaspy pueden comenzar a reportar sin seleccionar el protocolo manualmente.

Si desea saber más sobre cómo Plaspy gestiona las conexiones de dispositivos y revisar las capacidades de la plataforma, visite https://www.plaspy.com. Para los detalles específicos más recientes del protocolo, notas de firmware y revisiones de hardware de la serie LT-501, verifique la información con el fabricante en https://www.globalsat.com.tw/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
