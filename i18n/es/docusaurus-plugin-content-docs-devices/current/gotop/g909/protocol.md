---
slug: /gotop/g909/protocol
id: g909-protocol
sidebar_label: Protocol
title: GOTOP - G909 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del rastreador GOTOP G909 y cómo se conecta a Plaspy para seguimiento confiable de flotas y activos
keywords:
  - protocolo GOTOP G909
  - rastreador GPS GOTOP G909
  - comunicación GOTOP G909
  - compatibilidad GOTOP G909 Plaspy
  - protocolo GOTOP seguimiento
  - integración GOTOP G909
  - telemetría GOTOP G909
  - protocolo rastreador de activos GOTOP
  - protocolo de dispositivo Plaspy
  - ajustes de red GOTOP G909
---

# GOTOP - Protocolo G909

Esta página describe el contexto público del protocolo para utilizar el rastreador GOTOP G909 con la plataforma Plaspy. Resume cómo se comunica el equipo en términos generales, qué ajustes de conexión usar para reportar a Plaspy y qué papel tiene el protocolo de reporte del rastreador en la entrega de datos GPS, sensores y alarmas a un sistema de gestión de flotas. El G909 es un rastreador compacto para activos que soporta conectividad celular 4G LTE FDD, posicionamiento GPS y BDS, antena integrada y un conjunto de funciones de eventos como monitoreo de voz remoto, alarmas por vibración y exceso de velocidad, y alertas de geocerca.

Plaspy acepta conexiones de rastreadores compatibles a través de un endpoint y puerto compartidos, y detecta automáticamente el protocolo del dispositivo cuando este comienza a reportar a la plataforma. Para el G909 esto suele implicar configurar el dispositivo para usar TCP o UDP y apuntar al servidor de Plaspy. El comportamiento exacto del protocolo y la disponibilidad de funciones pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que es recomendable verificar la documentación del fabricante cuando sea necesario.

## Resumen del protocolo

El protocolo de comunicación de un rastreador como el G909 define cómo el dispositivo envía posición, estado, alarmas y telemetría de sensores a un servidor remoto como Plaspy. A alto nivel, el protocolo permite la entrega fiable y ordenada en el tiempo de eventos y mediciones relevantes para que la plataforma pueda mostrar ubicación, movimiento y estado de alarmas a usuarios y sistemas integrados.

- Transmite posiciones y el estado de los satélites para que Plaspy muestre la ubicación y la precisión.
- Entrega notificaciones de eventos como alarma por vibración, exceso de velocidad y entrada o salida de geocercas.
- Transporta telemetría de sensores a bordo, por ejemplo el acelerómetro de 3 ejes para detección de movimiento e impacto.
- Soporta almacenamiento en búfer y carga posterior para reportar datos almacenados durante períodos sin conexión.
- Usa redes TCP/IP estándar para que el dispositivo se conecte a un endpoint remoto para reporte y configuración.

## Cómo detecta Plaspy el protocolo

Plaspy utiliza un endpoint de red y puerto unificados para recibir comunicaciones de una amplia variedad de modelos y determina automáticamente el manejo de protocolo adecuado para cada dispositivo. Esto elimina la necesidad de que el usuario seleccione manualmente un protocolo en muchos escenarios de instalación, siempre que el rastreador esté configurado para reportar a Plaspy.

- Apunte el dispositivo al dominio del servidor Plaspy d.plaspy.com o a la IP 54.85.159.138.
- Configure el rastreador para usar TCP o UDP en el puerto 8888 según el soporte y preferencia del equipo.
- Plaspy recibe la conexión entrante en el puerto 8888 y asocia los mensajes del dispositivo con la lógica de manejo correspondiente de forma automática.
- En la mayoría de los casos usted no necesita especificar un protocolo en Plaspy cuando el dispositivo reporta correctamente al endpoint de Plaspy.
- Asegúrese de que los ajustes de red del dispositivo, como el APN y el modo de conexión, estén correctamente configurados para que el equipo pueda alcanzar el servidor de Plaspy.

## Transporte y contexto de conexión

El transporte de conexión y los ajustes básicos de red determinan si la unidad puede comunicarse con Plaspy y con qué fiabilidad se entregan los datos. El G909 soporta transmisión de datos TCP/IP y puede configurarse para usar UDP o TCP según la configuración; Plaspy acepta ambos transportes en un mismo puerto compartido.

- Los dispositivos pueden configurarse para reportar a d.plaspy.com o a la dirección numérica 54.85.159.138.
- El servidor de Plaspy escucha en el puerto 8888 y los dispositivos pueden usar UDP o TCP para conectarse a ese puerto.
- Plaspy utiliza el mismo puerto 8888 para todos los dispositivos soportados, por lo que un único puerto de destino saliente suele ser suficiente en la mayoría de las configuraciones de firewall.
- El G909 soporta modos estándar de reporte TCP/IP y puede subir datos almacenados en búfer una vez que se restablece la conectividad.
- Verifique conectividad saliente desde la red del dispositivo para que el tráfico TCP o UDP hacia el endpoint de Plaspy esté permitido.

## Notas sobre compatibilidad del protocolo

- El G909 es compatible con Plaspy cuando el dispositivo está configurado para reportar al endpoint de Plaspy usando los ajustes de transporte soportados.
- Las revisiones de firmware pueden cambiar las funciones disponibles y el comportamiento o la sincronización exacta de los mensajes del rastreador.
- Revisión de hardware o variantes regionales pueden afectar las bandas celulares soportadas o los ajustes de red por defecto.
- El transporte por defecto del dispositivo puede ser TCP o UDP según la configuración de fábrica o los comandos de configuración.
- Es necesario configurar correctamente el APN y contar con una SIM activa con datos para el reporte en tiempo real a Plaspy.
- Siempre valide la compatibilidad y los ajustes recomendados con la documentación oficial de GOTOP para su versión de firmware.

## Por qué es importante entender el protocolo

Conocer cómo se comunica el G909 ayuda a garantizar reportes fiables, correcta interpretación de las alarmas y un comportamiento predecible cuando los dispositivos cambian entre estados en línea y fuera de línea. Comprender el contexto del protocolo acelera la puesta en marcha y reduce el tiempo dedicado a resolver problemas de conectividad o entrega de eventos.

- Confirma que la dirección del servidor y el transporte correctos están configurados para que los datos del dispositivo lleguen a Plaspy.
- Ayuda a verificar que los eventos de geocerca y las alarmas se transmiten y se parsean correctamente en la plataforma.
- Facilita la interpretación del comportamiento fuera de línea del dispositivo y la verificación de cargas de datos almacenados tras la reconexión.
- Orienta la configuración del APN y la SIM para evitar fallos de conectividad inesperados.
- Favorece actualizaciones de firmware y activación de funciones más fluidas al alinear expectativas sobre el comportamiento del dispositivo.

## Por qué usar Plaspy con este protocolo

Usar el GOTOP G909 con Plaspy ofrece un camino sencillo hacia el rastreo centralizado, la gestión de alarmas y la telemetría histórica para activos y vehículos. El diseño compacto del G909, sus capacidades de posicionamiento por satélite, los sensores a bordo y el soporte para reporte TCP/IP lo hacen adecuado para escenarios donde la instalación de bajo perfil y el reporte fiable de eventos son importantes.

Para saber más sobre cómo Plaspy trabaja con rastreadores como el GOTOP G909 visite https://www.plaspy.com. Para obtener los detalles de protocolo más recientes y específicos del dispositivo, notas de firmware e instrucciones de configuración, consulte la documentación del fabricante en https://www.gotop.cc/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
