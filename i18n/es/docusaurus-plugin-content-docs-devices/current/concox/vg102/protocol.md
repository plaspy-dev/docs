---
slug: /concox/vg102/protocol
id: vg102-protocol
sidebar_label: Protocol
title: Concox - VG102 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo Concox VG102 para integrar rastreadores GPS con Plaspy y guía de conexión y compatibilidad
keywords:
  - protocolo Concox VG102
  - protocolo GPS VG102
  - Concox VG102 Plaspy
  - protocolo de comunicación VG102
  - protocolo de rastreo VG102
  - protocolo rastreador para motocicletas Concox
  - integración de dispositivos Plaspy
  - compatibilidad de rastreadores Plaspy
  - protocolo rastreador GPS para motocicleta
  - seguimiento de activos Concox VG102
---

# Concox - VG102 Protocolo

Esta página describe el contexto público del protocolo para usar el rastreador Concox VG102 con Plaspy. Se enfoca en cómo el equipo se comunica con Plaspy a un nivel general, qué ajustes de conexión son necesarios para enviar los datos al endpoint de Plaspy y qué aspectos del comportamiento de reporte del dispositivo son relevantes para una integración confiable. El VG102 es un rastreador GNSS 2G compacto diseñado para motocicletas y flotas de dos ruedas; este documento toma esa descripción del dispositivo como base para la discusión.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando un equipo reporta al endpoint de Plaspy. El comportamiento exacto del protocolo y las funciones disponibles pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que la configuración y el comportamiento pueden diferir entre unidades, incluso dentro del mismo modelo VG102.

## Visión general del protocolo

El protocolo del rastreador define cómo el VG102 envía telemetría, posición y alertas de eventos a un servidor remoto, y cómo se solicitan y confirman acciones remotas como el control de relé. Para la integración con Plaspy, el propósito del protocolo es entregar datos GNSS de posición, estado y eventos que Plaspy pueda normalizar y presentar.

- Transporta posición GNSS, telemetría de movimiento y estado desde el dispositivo hasta el servidor.
- Envía alertas de eventos como vuelco, manipulación, SOS, disparo de geocercas y batería baja.
- Proporciona un canal para señales de control remoto como comandos de relé cuando el dispositivo y la plataforma lo soportan.
- Identifica el equipo para que Plaspy pueda correlacionar los mensajes entrantes con un registro de rastreador registrado.
- Habilita mensajes de salud y latidos (heartbeat) para que Plaspy pueda monitorizar la conectividad y el tiempo de actividad del dispositivo.

## Cómo detecta Plaspy el protocolo

Plaspy recibe los datos de los dispositivos en un único endpoint compartido y detecta automáticamente el protocolo del rastreador cuando un VG102 correctamente configurado reporta. En la mayoría de los casos, usted no necesita seleccionar manualmente un protocolo dentro de Plaspy si el dispositivo está apuntando al endpoint de Plaspy con los ajustes de conexión correctos.

- El dominio del servidor Plaspy para el reporte de dispositivos es d.plaspy.com que resuelve a la IP del servidor Plaspy 54.85.159.138.
- Todos los dispositivos en Plaspy usan el mismo puerto para centralizar las conexiones entrantes y la detección.
- Plaspy detecta automáticamente el protocolo del rastreador y mapea los mensajes entrantes al registro del dispositivo correspondiente.
- Si el dispositivo está configurado correctamente para reportar al endpoint de Plaspy, la selección manual del protocolo dentro de Plaspy normalmente no es necesaria.
- La detección cubre tanto el reporte de ubicación como la telemetría de eventos, de modo que las alertas se asocien con los flujos de trabajo del dispositivo adecuados.

## Transporte y configuración de conexión

Los ajustes de transporte y conexión determinan cómo el VG102 alcanza el endpoint de Plaspy. El VG102 puede configurarse para usar UDP o TCP en el puerto compartido de Plaspy dependiendo del soporte del equipo y la configuración de instalación elegida.

- Los dispositivos pueden configurarse para apuntar a d.plaspy.com o directamente a 54.85.159.138.
- El endpoint de Plaspy escucha en el puerto 8888 y ese mismo puerto se usa para todos los dispositivos compatibles.
- El equipo puede usar UDP o TCP en el puerto 8888 según la versión de firmware y las decisiones del instalador.
- Usar el dominio o la IP correcta y el puerto de Plaspy es esencial para la entrega exitosa de telemetría y eventos.
- Opciones de conexión como el tipo de transporte pueden afectar el comportamiento de entrega en redes móviles y deben seleccionarse de acuerdo con las necesidades de la instalación.

## Notas sobre compatibilidad del protocolo

- El VG102 es compatible con Plaspy cuando está configurado para reportar al endpoint y puerto de Plaspy.
- Las revisiones de firmware pueden cambiar detalles de los mensajes y las funciones disponibles; verifique las notas de firmware para conocer el comportamiento del dispositivo.
- Las revisiones de hardware y el uso de accesorios opcionales pueden afectar las entradas disponibles, las alertas o el cableado del relé.
- La selección del transporte entre UDP y TCP puede influir en la entrega de mensajes y debe coincidir con la configuración del dispositivo.
- Es posible que sea necesario actualizar configuraciones por parte del fabricante, como el servidor de reporte predeterminado, durante la instalación para apuntar a Plaspy.
- Siempre valide la compatibilidad con la documentación actual del fabricante para la unidad específica que se va a desplegar.

## Por qué es importante entender el protocolo

Comprender cómo el VG102 se comunica con Plaspy ayuda a garantizar una configuración sin contratiempos, una solución de problemas más rápida y una operación predecible a largo plazo. Incluso cuando Plaspy detecta el protocolo automáticamente, los instaladores y administradores se benefician de conocer el contexto de conexión y el comportamiento de reporte del dispositivo.

- Acelera la puesta en marcha al confirmar que el dominio, la IP y el puerto están correctos.
- Facilita la resolución de problemas de conectividad comprobando el transporte y la configuración del endpoint.
- Aclara qué eventos y telemetría del dispositivo estarán disponibles en los paneles de Plaspy.
- Orienta las decisiones sobre selección de transporte y gestión de energía para un reporte confiable.
- Ayuda en la planificación de mantenimiento al relacionar revisiones de firmware y hardware con el comportamiento esperado.

## Por qué usar Plaspy con este protocolo

Usar el Concox VG102 con Plaspy ofrece a las organizaciones visibilidad centralizada de flotas de motocicletas y vehículos de dos ruedas, consolidando posiciones GNSS, alertas y control de relés en una sola plataforma operativa. El diseño compacto del VG102 y sus funciones de evento complementan los paneles y flujos de trabajo de Plaspy para soportar la monitorización en tiempo real, la recuperación y la supervisión operativa sin requerir configuración de puerto por dispositivo.

Para saber más sobre Plaspy y cómo la plataforma maneja la integración de dispositivos visite https://www.plaspy.com. Por favor verifique los detalles más recientes del protocolo específico del dispositivo, notas de firmware y orientación de implementación con el fabricante en https://www.iconcox.com/ ya que el soporte del protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
