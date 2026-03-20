---
slug: /concox/ll701/protocol
id: ll701-protocol
sidebar_label: Protocol
title: Concox - LL701 Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo del rastreador Concox LL701 y su comunicación con Plaspy para seguimiento de flotas y activos
keywords:
  - Protocolo Concox LL701
  - Protocolo GPS Concox LL701
  - Protocolo Concox LL701 para Plaspy
  - Protocolo de comunicación Concox LL701
  - Protocolo de rastreo Concox LL701
  - Protocolo de rastreador Concox
  - Protocolo rastreador GPS Plaspy
  - seguimiento de vehículos Concox
  - gestión de flotas LL701
  - configuración Bluetooth LL701
---

# Concox - Protocolo LL701

Esta página explica, en términos públicos y no sensibles, cómo se integra el Concox LL701 con Plaspy. El objetivo es que administradores e integradores comprendan el papel del protocolo de reporte del rastreador cuando se conectan unidades LL701 a la plataforma.

Plaspy utiliza ajustes de conexión compartidos para los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando un dispositivo reporta a la plataforma. El comportamiento exacto del protocolo para el LL701 puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante; además, la configuración por Bluetooth y los modos de bajo consumo pueden modificar los patrones de reporte y las funcionalidades disponibles.

## Resumen del protocolo

El protocolo del LL701 define cómo el dispositivo envía estado, ubicación y eventos a un servidor remoto y cómo esa información se vuelve útil en una plataforma de gestión de flotas como Plaspy. Para el LL701 esto incluye reportes periódicos de posición, mensajes por eventos como alertas de manipulación o desempaque, y estados como nivel de batería o modo de reposo.

- Permite que el LL701 envíe actualizaciones de ubicación y eventos con sello de tiempo al endpoint de Plaspy
- Transporta información de estado del activo, por ejemplo nivel de batería, alertas por manipulación y disparos de sensores
- Soporta patrones de reporte no en tiempo real adecuados para operación con larga espera y bajo consumo
- Permite que el dispositivo se identifique para que Plaspy asocie los mensajes entrantes con el activo correcto
- Funciona junto a métodos de configuración local como Bluetooth para puesta en marcha y cambios de parámetros

## Cómo detecta Plaspy el protocolo

Plaspy detecta automáticamente el protocolo del rastreador cuando un dispositivo correctamente configurado reporta al endpoint de la plataforma. En la mayoría de los casos usted no necesita seleccionar manualmente un protocolo en Plaspy si el LL701 está apuntando al servidor de Plaspy y usa un transporte y puerto admitidos.

- Plaspy escucha en un endpoint compartido al que los dispositivos pueden reportar en d.plaspy.com y 54.85.159.138
- Todos los dispositivos soportados por Plaspy usan el mismo puerto para reportes, lo que simplifica la configuración
- Plaspy acepta tanto TCP como UDP en el puerto de la plataforma, por lo que el servidor recibe los modos de transporte más comunes
- Cuando un LL701 envía sus primeros mensajes al endpoint de Plaspy, la plataforma usa esa información para asociar el dispositivo a una cuenta y comenzar el procesamiento de datos
- Si un dispositivo se configura mediante herramientas del fabricante como Bluetooth, confirme que la dirección del servidor y el transporte estén configurados hacia el endpoint de Plaspy

## Transporte y contexto de conexión

Las opciones de conexión y transporte influyen en cómo el LL701 alcanza a Plaspy y en cómo el dispositivo conserva energía mientras entrega las alertas necesarias. El LL701 puede configurarse para reportar mediante UDP o TCP según el soporte del dispositivo y los ajustes de configuración.

- Los dispositivos pueden configurarse para enviar reportes a d.plaspy.com o directamente a 54.85.159.138
- La plataforma Plaspy utiliza el puerto 8888 para el reporte de dispositivos y este puerto es compartido entre todos los dispositivos soportados
- El LL701 puede establecerse para usar UDP o TCP en el puerto 8888 según la preferencia del usuario y las condiciones de red
- La fiabilidad de la red celular, la configuración del APN y el comportamiento del operador pueden influir en la elección entre UDP y TCP
- Para modos de larga duración con batería, la frecuencia de reporte y la elección del transporte suelen ajustarse para equilibrar la puntualidad de los datos y el consumo de energía

## Notas sobre compatibilidad del protocolo

- Las versiones de firmware pueden cambiar la cadencia de los mensajes, los tipos de eventos disponibles y los parámetros de configuración; consulte siempre la versión de firmware del dispositivo
- Las revisiones de hardware o variantes regionales del LL701 pueden presentar diferencias sutiles en las funcionalidades soportadas
- Las configuraciones por defecto del fabricante pueden no apuntar al endpoint de Plaspy; verifique la dirección del servidor y el transporte antes del despliegue
- Los modos de bajo consumo que extienden la vida útil de la batería pueden reducir la frecuencia de reporte y alterar la secuencia de eventos enviados al servidor
- La configuración por Bluetooth es útil para cambios de parámetros en campo, pero no sustituye la verificación de que el dispositivo realmente reporta al endpoint de Plaspy
- Valide la compatibilidad con la documentación más reciente de Concox para comportamiento y actualizaciones específicas del modelo

## Por qué es importante entender el protocolo

Comprender cómo el LL701 se comunica con Plaspy ayuda a garantizar reportes confiables, uso eficiente de la batería y un manejo de eventos predecible durante la implementación y operación. Un conocimiento claro del comportamiento del protocolo reduce el tiempo de puesta en marcha y facilita el diagnóstico de problemas de conectividad o datos.

- Asegura que la dirección del servidor y el transporte se configuren correctamente durante la provisión del dispositivo
- Ayuda a ajustar los intervalos de reporte para alcanzar la vida útil de batería y la puntualidad de datos deseadas
- Colabora en la resolución de reportes faltantes o retrasados al verificar transporte y ajustes de red
- Aclara cómo los disparadores de eventos como manipulación o desempaque se entregan a Plaspy
- Facilita la planificación de actualizaciones de firmware y la validación del comportamiento tras cambios

## Por qué usar Plaspy con este protocolo

Usar el Concox LL701 con Plaspy ofrece a las organizaciones una combinación práctica de larga vida de batería, hardware robusto y una plataforma moderna de gestión de flotas. El LL701 es adecuado para el rastreo no en tiempo real de vehículos pesados y activos de valor, y Plaspy está diseñada para aceptar reportes de dispositivos optimizados para batería y presentar alertas e información de estado para uso operativo.

Para conocer más sobre cómo Plaspy gestiona la integración de dispositivos y revisar las capacidades de la plataforma, visite https://www.plaspy.com. Para detalles más recientes del protocolo específico del dispositivo, notas de firmware e instrucciones del fabricante del Concox LL701, verifique la información directamente en https://www.iconcox.com/ ya que el soporte del protocolo y el comportamiento del dispositivo pueden cambiar con el tiempo.
