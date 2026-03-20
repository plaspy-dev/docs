---
slug: /autofon/omega_maiak/protocol
id: omega_maiak-protocol
sidebar_label: Protocol
title: AutoFon - Омега-Маяк + Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo para AutoFon Омега-Маяк + y su comunicación con Plaspy para un rastreo confiable
keywords:
  - protocolo AutoFon Омега-Маяк +
  - AutoFon Omega Maiak GPS
  - compatibilidad Омега-Маяк + con Plaspy
  - protocolo rastreador GPS AutoFon
  - integración Omega Beacon con Plaspy
  - rastreo de vehículos AutoFon
  - guía de protocolo para rastreadores de activos
  - compatibilidad rastreador GPRS GPS
  - rastreo con baliza BLE
  - documentación del protocolo del rastreador
---

# AutoFon - Омега-Маяк + Protocolo

Esta página describe el contexto público del protocolo para usar el rastreador AutoFon Омега-Маяк + con Plaspy. Resume cómo este compacto rastreador autónomo GPS/GLONASS transmite información de posición, eventos y telemetría para el monitoreo en servidor sin exponer detalles propietarios o sensibles de implementación.

Plaspy emplea ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el equipo está configurado para reportar al endpoint de Plaspy. El comportamiento exacto del protocolo, la frecuencia de los mensajes y los comandos disponibles pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta guía se centra en consideraciones públicas y no sensibles sobre conectividad y compatibilidad.

## Visión general del protocolo

El protocolo de reporte define cómo el Омега-Маяк + entrega localizaciones, notificaciones de evento y telemetría a un servidor de monitoreo remoto. En la práctica, el protocolo permite al dispositivo identificarse, enviar coordenadas GPS/GLONASS y comunicar eventos como movimiento, pulsaciones del botón SOS, estado de batería y banderas de presencia BLE para que Plaspy muestre información útil a los operadores.

- Transporta datos de posición y telemetría desde el dispositivo al endpoint de monitoreo para mapeo en tiempo real e informes históricos.
- Lleva notificaciones de eventos generados por el acelerómetro, el botón SOS y la lógica interna para que Plaspy pueda activar alertas y flujos de trabajo.
- Incluye identificación del dispositivo y contexto de sesión que permiten a Plaspy asociar los reportes entrantes con el activo y la cuenta correctos.
- Soporta comportamiento de almacenamiento y reenvío para que el dispositivo retransmita registros no enviados tras cortes temporales de red.
- Puede incluir canales opcionales por SMS o comandos desde el servidor para configuración del dispositivo y alertas al propietario según las opciones del fabricante.

## Cómo Plaspy detecta el protocolo

Plaspy recibe reportes de rastreadores en un endpoint de servidor compartido y utiliza detección automática para asociar el tráfico entrante con el tipo de dispositivo correcto. Cuando un Омега-Маяк + está configurado para reportar a Plaspy, normalmente usted no necesita seleccionar manualmente un protocolo dentro de Plaspy para que la conectividad básica funcione.

- El endpoint público de Plaspy está disponible en d.plaspy.com y en la dirección IP 54.85.159.138.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la configuración entre modelos.
- Plaspy detecta automáticamente el protocolo del rastreador para los dispositivos correctamente configurados que reportan al endpoint de Plaspy.
- Si el equipo apunta correctamente al endpoint de Plaspy, la selección de protocolo dentro de Plaspy suele ser innecesaria para el reporte estándar.
- Para solucionar problemas, verificar que el dispositivo reporte a d.plaspy.com o a 54.85.159.138 y que utilice el puerto compartido de Plaspy es un paso inicial efectivo.

## Transporte y contexto de conexión

Las decisiones de conexión y el comportamiento de la red del operador afectan cómo el Омега-Маяк + entrega reportes a Plaspy. El dispositivo utiliza GPRS celular como su método principal de uplink al servidor y también soporta notificaciones SMS al propietario; además incluye BLE para presencia local y funciones de proximidad que complementan la telemetría enviada al servidor.

- El rastreador puede configurarse para usar UDP o TCP en el puerto 8888 según el soporte del dispositivo y las opciones de configuración.
- Los dispositivos pueden apuntar al dominio del servidor Plaspy d.plaspy.com o a la IP directa 54.85.159.138 cuando restricciones de DNS o de red lo requieran.
- Plaspy utiliza el puerto 8888 para todos los dispositivos soportados, por lo que la misma configuración de puerto de salida aplica entre modelos.
- La calidad de la red GPRS y los ajustes de APN en el dispositivo influyen en la frecuencia de reporte y la fiabilidad de entrega.
- BLE, SMS y sensores locales operan en paralelo con los reportes por GPRS y pueden usarse para alertas de proximidad, notificaciones al propietario o señalización de respaldo.

## Notas sobre compatibilidad del protocolo

- Las diferencias de firmware entre lotes de unidades pueden cambiar comandos disponibles, intervalos de reporte y formatos de eventos; verifique la revisión de firmware del equipo al validar el comportamiento.
- Revisión de hardware o conjuntos de características opcionales (por ejemplo, variaciones en BLE o funcionalidad de micrófono) pueden alterar qué campos de telemetría están presentes.
- La elección de transporte (TCP frente a UDP) puede afectar el comportamiento de acuse de recibo a nivel de red aun cuando los datos de aplicación sean los mismos.
- Las variantes del módulo QUECTEL utilizadas en el dispositivo según operador o región pueden influir en el registro en la red y el rendimiento de GPRS.
- Las alertas por SMS al propietario y los canales de comandos por servidor a veces se implementan de forma distinta entre compilaciones de firmware; revise las opciones de configuración del dispositivo.
- Siempre valide los ajustes y la compatibilidad del equipo contra la documentación del fabricante y las notas de la versión para la unidad específica que va a desplegar.

## Por qué es importante entender el protocolo

Tener claro cómo se comunica el rastreador ayuda a asegurar una configuración predecible, una resolución de problemas más rápida y una operación confiable a largo plazo dentro de Plaspy. Conocer el contexto de conexión y la variabilidad común entre firmware y revisiones reduce tiempos de inactividad y mejora la precisión de las alertas.

- Ayuda a confirmar que el dispositivo apunta al endpoint correcto de Plaspy y usa el puerto compartido requerido para la detección automática.
- Facilita el diagnóstico de reportes faltantes revisando el tipo de transporte, ajustes APN y la accesibilidad a d.plaspy.com o 54.85.159.138.
- Orienta sobre qué eventos y campos de telemetría serán visibles en Plaspy según las capacidades del firmware y hardware.
- Apoya la planificación de la vida útil de la batería y los intervalos de reporte para que el alertado y los informes históricos satisfagan las necesidades operativas.
- Mejora la coordinación de configuración remota y actualizaciones de firmware que dependen de una conectividad GPRS estable.

## Por qué usar Plaspy con este protocolo

Usar el rastreador Омега-Маяк + con Plaspy brinda a las organizaciones visibilidad discreta y sostenida de activos móviles, aprovechando la detección automática de protocolo de Plaspy y la configuración de puerto unificada. El posicionamiento GPS/GLONASS del equipo, los eventos del acelerómetro, la presencia BLE y la opción de respaldo por SMS se combinan con el procesamiento del servidor de Plaspy para entregar ubicación, alertas e informes históricos adecuados para antirrobo, protección de activos y monitoreo liviano de flotas.

Para saber más sobre Plaspy y cómo gestiona la conectividad y el monitoreo de dispositivos visite https://www.plaspy.com. Para detalles específicos del protocolo del dispositivo, notas de firmware y guía de instalación consulte al fabricante en https://www.autofon.ru/ ya que la implementación y el comportamiento del firmware pueden cambiar con el tiempo.
