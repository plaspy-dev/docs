---
slug: /teltonika/fmb125/protocol
id: fmb125-protocol
sidebar_label: Protocol
title: Teltonika - FMB125 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del Teltonika FMB125 y su comunicación con Plaspy
keywords:
  - Teltonika FMB125
  - protocolo Teltonika FMB125
  - rastreador GPS FMB125
  - comunicación FMB125
  - compatibilidad FMB125 Plaspy
  - protocolo GPS Teltonika
  - rastreo vehicular FMB125
  - telemetría FMB125
  - integración serial FMB125
  - tracker Teltonika Plaspy
---

# Teltonika - Protocolo FMB125

Esta página describe el contexto público del protocolo para usar el rastreador Teltonika FMB125 con la plataforma Plaspy. Se enfoca en cómo se comunica el dispositivo en términos generales, qué ajustes de conexión se usan para apuntarlo a Plaspy y qué tipos de telemetría e interfaces suele reportar. El FMB125 es un rastreador profesional compacto con doble SIM 2G, interfaces seriales RS232 y RS485, entrada por impulso, RFID integrado y soporte 1-Wire, además de la opción de conectar un módem satelital Iridium Edge vía RS232. El dispositivo figura como End of Life y hay reemplazos más recientes 4G y LTE disponibles para despliegues a largo plazo.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el dispositivo apunta correctamente al endpoint de Plaspy. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware, la variante regional del producto y la implementación del fabricante, por lo que las características de configuración y reporte pueden diferir entre unidades y a lo largo del tiempo.

## Descripción general del protocolo

El protocolo del dispositivo es el conjunto de reglas que el FMB125 utiliza para enviar GNSS, telemetría y eventos de entradas a un servidor remoto como Plaspy. En la práctica, el protocolo permite al rastreador identificarse ante la plataforma, transmitir posición y datos de sensores, y transportar información de eventos que los administradores de flota pueden usar para monitoreo e informes.

- Transporta actualizaciones de posición GNSS y telemetría del vehículo para seguimiento en tiempo real e informes históricos en Plaspy.
- Envía eventos de entradas por impulso y telemetría de sensores seriales para asociar consumos de combustible, temperatura y otras métricas a ubicaciones.
- Lleva eventos de identificación de conductor y activo desde RFID integrado y la interfaz 1-Wire hacia los flujos de trabajo de Plaspy.
- Comunica la salud del dispositivo e información básica de estado que Plaspy puede mapear a alertas y diagnósticos.
- Permite coordinar flujos de trabajo de configuración remota y gestión de firmware junto con el reporte de telemetría.

## Cómo Plaspy detecta el protocolo

Plaspy recibe las conexiones de los rastreadores en un endpoint de servidor compartido y determina automáticamente el protocolo del dispositivo cuando éste se conecta correctamente. Esto significa que usted habitualmente no necesita seleccionar manualmente un protocolo dentro de Plaspy siempre que el dispositivo esté apuntando al endpoint y transporte correctos.

- El dominio del servidor Plaspy para el reporte de rastreadores es d.plaspy.com.
- La IP del servidor Plaspy es 54.85.159.138 y la plataforma escucha en el puerto 8888.
- Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888 para enviar datos a Plaspy.
- Todos los dispositivos que reportan a Plaspy usan el mismo puerto, por lo que un único endpoint simplifica la configuración de equipos.
- Cuando un dispositivo abre una sesión con el endpoint de Plaspy, la plataforma detecta automáticamente el protocolo del rastreador y mapea la telemetría entrante para su procesamiento.

## Transporte y contexto de conexión

El contexto de conexión cubre cómo se indica al FMB125 que alcance Plaspy y qué opciones de transporte están disponibles. El rastreador soporta reporte celular y puede aceptar módems satelitales conectados por serial para operaciones fuera de la cobertura terrestre. La elección de transporte y las condiciones de la red influyen en la frecuencia de entrega de datos y en cómo el dispositivo mantiene la conectividad con Plaspy.

- El FMB125 puede apuntarse al endpoint de Plaspy usando UDP o TCP en el puerto 8888, según la configuración del dispositivo y el comportamiento del operador.
- Los dispositivos pueden configurarse para usar el nombre de dominio d.plaspy.com o la IP del servidor 54.85.159.138 al reportar.
- Todos los dispositivos soportados por Plaspy comparten el mismo puerto de escucha 8888, lo que facilita el aprovisionamiento y despliegues a escala.
- En despliegues que usan el módem satelital Iridium Edge vía RS232, se espera que la telemetría enrutada a través del rastreador llegue al endpoint de Plaspy cuando el dispositivo reenvía los reportes en red.
- Características de la red como cobertura 2G, conmutación automática entre SIMs y comportamiento del enlace satelital influyen en cómo el rastreador mantiene sesiones con Plaspy.

## Notas de compatibilidad del protocolo

- Las variaciones de firmware entre las versiones de Teltonika pueden cambiar las funciones disponibles, los campos de telemetría y los formatos de eventos; revise las notas de firmware para comportamientos específicos del dispositivo.
- Las revisiones de hardware y las variantes regionales pueden afectar las bandas celulares soportadas y las interfaces de accesorios.
- El FMB125 figura como End of Life; considere Teltonika FMC125 o FMM125 para proyectos nuevos donde se prefiera 4G o LTE M NB IoT.
- La selección de transporte entre UDP y TCP puede impactar las características de entrega y debería probarse en su red operacional.
- Las integraciones seriales vía RS232 o RS485, y el uso de entradas por impulso o RFID, requieren validación del mapeo de sensores y la interpretación de eventos con Plaspy durante la puesta en marcha.
- Valide siempre la compatibilidad y el mapeo de telemetría personalizada contra la documentación más reciente de Teltonika y la configuración de su cuenta Plaspy.

## Por qué es importante entender el protocolo

Comprender el protocolo del rastreador ayuda a asegurar una configuración confiable, un mapeo de telemetría preciso y una resolución de problemas eficiente cuando los dispositivos reportan a Plaspy. Conocer los límites y la variabilidad del comportamiento del protocolo facilita interpretar los datos, planear actualizaciones de firmware e integrar sensores auxiliares.

- Resolución de problemas más rápida cuando la posición o los campos de telemetría no aparecen como se espera en Plaspy.
- Una configuración de transporte correcta reduce fallas de conexión y mejora la puntualidad de los datos.
- Expectativas claras sobre cómo las entradas por impulso, la telemetría serial y los eventos RFID se traducen al modelo de datos de Plaspy.
- Mejor planificación de actualizaciones de firmware y ciclos de reemplazo de hardware, especialmente para dispositivos EOL.
- Decisiones informadas sobre dispositivos de reemplazo y estrategias de red cuando se requiere mayor cobertura o estándares celulares más modernos.

## Por qué usar Plaspy con este protocolo

Usar el FMB125 con Plaspy ofrece a las flotas una vía integrada para recopilar ubicaciones GNSS, telemetría de sensores seriales, eventos por impulso e identificación RFID en una sola plataforma de monitoreo. El enfoque de endpoint compartido de Plaspy y la detección automática de protocolo reducen la carga de configuración y permiten que los equipos se concentren en casos de uso operativos como geocercas, monitoreo de combustible y correlación de eventos de conductor.

Si desea obtener más información sobre cómo Plaspy maneja la integración de rastreadores y los flujos de telemetría, visite https://www.plaspy.com. Para los detalles de protocolo específicos del dispositivo más recientes, notas de firmware y recursos técnicos oficiales de Teltonika, consulte el sitio del fabricante en https://www.teltonika-gps.com/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
