---
slug: /totemtech/at08/protocol
id: at08-protocol
sidebar_label: Protocol
title: Totemtech - AT08 Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo Totemtech AT08 para compatibilidad con Plaspy, conexión e integración
keywords:
  - protocolo Totemtech AT08
  - protocolo GPS Totemtech AT08
  - compatibilidad AT08 Plaspy
  - protocolo rastreador GPS Totemtech
  - protocolo de seguimiento AT08
  - integración rastreador Plaspy
  - seguimiento de vehículos AT08
  - protocolo rastreador de activos
  - rastreador GPS magnético AT08
  - gestión de flotas Totemtech
---

# Totemtech - Protocolo AT08

Esta página describe el contexto público del protocolo para usar el rastreador GPS magnético Totemtech AT08 con Plaspy. Se centra en cómo el dispositivo transmite telemetría general y datos GNSS a Plaspy y qué tener en cuenta al configurar el equipo para que reporte a la plataforma. Esta visión general está dirigida a gestores de flotas, integradores y usuarios técnicos que necesitan orientación clara sobre la comunicación dispositivo-servidor sin entrar en detalles privados de implementación.

Plaspy emplea ajustes de conexión compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando los equipos envían datos a la plataforma. El comportamiento exacto del protocolo y el contenido de los paquetes pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página destaca los aspectos públicos y estables del contexto de comunicación e invita a verificar contra la documentación del fabricante.

## Resumen del protocolo

El protocolo del AT08 regula cómo el rastreador envía posiciones GNSS, telemetría del dispositivo, eventos de movimiento y actualizaciones de estado al servidor de seguimiento. En la práctica, permite que el AT08 se identifique ante Plaspy, entregue datos de ubicación y estado útiles, y soporte configuración remota o gestión de firmware cuando el dispositivo lo permite.

- Transporta coordenadas GNSS y metadatos de fijado para que Plaspy ubique el dispositivo en mapas e informes.
- Envía telemetría como nivel de batería, estado de señal celular y eventos de movimiento para alertas de la plataforma y planificación de mantenimiento.
- Permite configurar o comandar el dispositivo de forma remota cuando el firmware del fabricante soporta cambios OTA.
- Proporciona actualizaciones de estado que Plaspy usa para detectar la salud del dispositivo y activar flujos como alertas de geocerca o notificaciones antirrobo.
- Opera dentro del comportamiento del firmware y de las capacidades de hardware del AT08, incluyendo gestión de energía y modos de reporte en reposo.

## Cómo detecta Plaspy el protocolo

Plaspy recibe conexiones entrantes en un endpoint y puerto compartidos y detecta automáticamente el protocolo del rastreador en función de los datos que llegan y del comportamiento conocido del dispositivo. Cuando un AT08 está configurado para reportar a Plaspy, normalmente no es necesario seleccionar un protocolo manualmente dentro de la plataforma siempre que el dispositivo apunte a los ajustes de servidor correctos.

- Plaspy usa un endpoint y puerto comunes para todos los dispositivos compatibles para simplificar la configuración.
- Los dispositivos que envían datos al endpoint de Plaspy son identificados y gestionados automáticamente por la lógica de detección de la plataforma.
- Si el AT08 está configurado correctamente para reportar al servidor de Plaspy, normalmente no se requiere seleccionar el protocolo de forma manual en la plataforma.
- Plaspy soporta una amplia variedad de comportamientos de rastreadores y depende de que el dispositivo envíe tramas de telemetría y ubicación reconocibles.
- Para variantes de firmware inusuales o modificaciones personalizadas, consulte la guía del fabricante para asegurar compatibilidad.

## Contexto de transporte y conexión

Las opciones de transporte y conexión determinan cómo el AT08 alcanza los servidores de Plaspy a través de redes celulares. El AT08 puede configurarse para usar UDP o TCP según el firmware del dispositivo y la configuración del propietario. Entender el endpoint y el puerto que usa Plaspy es esencial al ajustar el APN y la dirección de reporte del servidor en el rastreador.

- El dominio del servidor Plaspy para reporte de dispositivos es d.plaspy.com.
- La dirección IP del servidor Plaspy es 54.85.159.138.
- El servidor de Plaspy escucha en el puerto 8888 para reportes de rastreadores.
- Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888 según el soporte y requerimientos del equipo.
- Todos los dispositivos que reportan a Plaspy usan el mismo puerto para simplificar la configuración entre diferentes modelos de rastreadores.

## Notas sobre compatibilidad del protocolo

- Las versiones de firmware pueden cambiar la temporización de mensajes, el transporte soportado y los campos de telemetría disponibles; siempre verifique la versión de firmware del dispositivo al diagnosticar.
- Revisión de hardware o variantes regionales del AT08 pueden alterar bandas celulares soportadas o comportamiento de gestión de energía, lo que afecta los intervalos de reporte.
- Los métodos de configuración del fabricante, como SMS, USB o actualizaciones OTA, pueden diferir en capacidades y ajustes disponibles.
- Seleccionar UDP frente a TCP en el dispositivo puede afectar la entrega de datos y debe coincidir con la configuración que el firmware del dispositivo soporte.
- Plaspy detecta automáticamente variantes de protocolo cuando es posible, pero firmwares personalizados o dispositivos muy modificados pueden requerir validación adicional.
- Para comandos específicos del equipo, actualizaciones de firmware o detalles profundos del protocolo, consulte la documentación oficial del fabricante.

## Por qué es importante entender el protocolo

Tener un entendimiento práctico del protocolo de comunicación del AT08 ayuda a los ingenieros de sitio y administradores de flota a configurar correctamente los dispositivos, diagnosticar problemas de conectividad y mantener la confiabilidad a largo plazo al reportar a Plaspy. Saber qué se espera que envíe el dispositivo y cómo la plataforma lo recibe reduce el tiempo de configuración y favorece la supervisión predecible.

- Garantiza la dirección de servidor y ajustes de transporte correctos para que los dispositivos reporten de forma fiable a Plaspy.
- Facilita la interpretación de los campos de telemetría que aparecen en los paneles de Plaspy durante la resolución de problemas.
- Permite decisiones informadas sobre intervalos de reporte y gestión de energía para lograr la vida útil de batería requerida.
- Ayuda a validar que actualizaciones de firmware o revisiones de hardware no hayan alterado comportamientos críticos de reporte.
- Mejora la comunicación con el soporte del fabricante cuando un dispositivo no se comporta como se espera.

## Por qué usar Plaspy con este protocolo

Usar el AT08 con Plaspy ofrece una vía práctica para convertir rastreadores de activos duraderos con larga autonomía en datos útiles para flotas y logística. Plaspy ingiere la ubicación, el estado de batería y la telemetría de movimiento del AT08 y lo pone a disposición en mapas en vivo, alertas, reportes y flujos automatizados que apoyan la visibilidad de activos y operaciones antirrobo.

Si desea saber más sobre Plaspy, visite https://www.plaspy.com. Para los detalles más recientes de protocolos específicos por dispositivo, notas de firmware e información sobre revisiones de hardware, verifique la documentación del fabricante en http://www.totemtek.com/ ya que las implementaciones y el comportamiento del firmware pueden cambiar con el tiempo.
