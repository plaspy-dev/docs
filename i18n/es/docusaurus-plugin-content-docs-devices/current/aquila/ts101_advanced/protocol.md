---
slug: /aquila/ts101_advanced/protocol
id: ts101_advanced-protocol
sidebar_label: Protocol
title: Aquila - TS101 Advanced Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo para integrar el tracker Aquila TS101 Advanced con Plaspy usando ajustes compartidos y detección automática
keywords:
  - protocolo Aquila TS101 Advanced
  - protocolo GPS Aquila TS101 Advanced
  - protocolo de rastreo Aquila TS101 Advanced
  - protocolo de dispositivo Plaspy
  - compatibilidad de rastreadores Plaspy
  - rastreo de vehículos Aquila
  - gestión de flotas Plaspy
  - comunicación TS101 Advanced
  - compatibilidad TS101 Advanced
  - protocolo de seguimiento de activos Aquila
---

# Aquila - Protocolo TS101 Advanced

Esta página describe el contexto público del protocolo para usar el tracker Aquila TS101 Advanced con la plataforma Plaspy. El enfoque está en el comportamiento de comunicación a alto nivel que afecta la integración, la configuración y la operación con Plaspy, en lugar de exponer detalles privados de implementación. El TS101 Advanced es un tracker compacto y robusto diseñado para el rastreo de vehículos y activos, que ofrece reportes de ubicación en tiempo real, almacenamiento sólido para registros históricos, interfaces de E/S para inmovilizador y sensores de combustible, y detección de movimiento mediante un acelerómetro de 3 ejes.

Plaspy emplea ajustes de conexión compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del tracker cuando el dispositivo envía datos a la plataforma. El comportamiento exacto del protocolo y las funciones disponibles pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que una integración exitosa combina la configuración correcta del dispositivo con los ajustes compartidos de Plaspy y las opciones estándar de transporte.

## Resumen del protocolo

El protocolo de comunicación del TS101 Advanced regula cómo el dispositivo se identifica ante un servidor, entrega telemetría y reporta eventos para que Plaspy pueda mostrar la ubicación y el estado a los usuarios. Permite que el equipo transmita los datos necesarios para el rastreo en tiempo real y que entregue los registros almacenados cuando se restablece la conectividad.

- Proporciona información de identidad y sesión para que Plaspy asocie los datos entrantes con el dispositivo correcto
- Transporta posición GPS, marca de tiempo y telemetría básica como estado de alimentación y sensores
- Incluye reportes de eventos para entradas como acciones del inmovilizador, alertas del acelerómetro y lecturas del sensor de combustible
- Permite la transmisión de registros almacenados desde la memoria interna del dispositivo para recuperar datos históricos
- Soporta entrega confiable sobre transportes comunes para que Plaspy pueda procesar los datos para monitoreo de flotas y notificaciones

## Cómo detecta Plaspy el protocolo

Plaspy acepta datos de muchos modelos de trackers en un único endpoint compartido y detecta el protocolo automáticamente cuando un dispositivo se conecta y reporta. Esta detección automática significa que la mayoría de los usuarios no necesitan seleccionar manualmente un protocolo dentro de Plaspy siempre que el dispositivo esté configurado para enviar datos al endpoint de Plaspy.

- Plaspy escucha en un endpoint compartido accesible como d.plaspy.com y directamente en 54.85.159.138
- Todos los dispositivos soportados por Plaspy usan el mismo puerto de escucha 8888
- El dispositivo puede configurarse para usar UDP o TCP según sus ajustes y firmware
- Cuando el tracker reporta al endpoint de Plaspy, la plataforma asocia los datos entrantes con el dispositivo correspondiente
- La selección manual del protocolo dentro de Plaspy normalmente no es necesaria si el dispositivo está correctamente apuntado al servidor de Plaspy

## Contexto de transporte y conexión

Comprender el contexto de transporte y conexión ayuda a garantizar que el TS101 Advanced envíe reportes correctamente a Plaspy. El TS101 Advanced puede configurarse para reportar sobre transportes de red estándar; el transporte disponible depende del firmware del dispositivo y las opciones de configuración.

- Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888
- Los trackers pueden apuntar al dominio de Plaspy d.plaspy.com o directamente a 54.85.159.138
- Plaspy utiliza el puerto 8888 para todos los dispositivos soportados, por lo que una única configuración de salida funciona para varios modelos
- Elija UDP o TCP según la capacidad del dispositivo y los requisitos de fiabilidad de la red
- Confirme que el APN del dispositivo y los ajustes de host de salida coincidan con el endpoint de Plaspy para permitir el envío exitoso de reportes

## Notas sobre compatibilidad del protocolo

- Los conjuntos de funciones del protocolo pueden variar según la versión de firmware; un firmware más reciente puede agregar o cambiar campos y reportes de eventos
- Las revisiones de hardware y los conectores o sensores opcionales pueden afectar qué telemetría y funciones de E/S están disponibles
- Los ajustes predeterminados del fabricante pueden apuntar a un host o puerto distinto, por lo que confirme la configuración del dispositivo antes del despliegue
- La selección de transporte entre UDP y TCP puede influir en las características de entrega y debe elegirse según las condiciones de la red
- La detección automática de Plaspy reduce el esfuerzo de configuración, pero usted debe validar que los reportes del dispositivo sean visibles en Plaspy tras la configuración inicial
- Para funciones avanzadas como control remoto o manejo personalizado de sensores, verifique que el dispositivo soporte los comandos requeridos en el firmware actual

## Por qué es importante comprender el protocolo

Tener una comprensión clara y práctica del protocolo de comunicación del tracker ayuda a asegurar una configuración confiable, una ingestión de datos precisa y una resolución de problemas más eficiente al usar Plaspy. Conocer las expectativas de comunicación reduce el tiempo de integración y mejora la confiabilidad operativa.

- Asegura la configuración correcta del dispositivo para que los reportes lleguen al endpoint de Plaspy sin interrupciones
- Ayuda a diagnosticar problemas de conectividad confirmando transporte y ajustes de host
- Facilita la planificación de la telemetría requerida, como eventos de inmovilizador o lecturas de sensores de combustible
- Reduce el tiempo para recuperar datos históricos al entender cómo se transmiten los registros almacenados
- Mejora la confiabilidad a largo plazo al alinear el comportamiento del firmware del dispositivo con las capacidades de ingestión de Plaspy

## Por qué usar Plaspy con este protocolo

Usar el Aquila TS101 Advanced con Plaspy ofrece a las organizaciones una vía sencilla hacia la visibilidad de flotas y activos. El modelo de endpoint multi dispositivo de Plaspy y la detección automática de protocolos simplifican la incorporación, al tiempo que ofrecen los reportes, la recuperación de datos históricos y el manejo de eventos necesarios para logística, operaciones de taxi, flotas de alquiler, seguimiento de seguridad y casos de uso similares.

Para obtener más información sobre Plaspy y cómo funciona con dispositivos como el TS101 Advanced visite https://www.plaspy.com. Para detalles específicos del protocolo según firmware y la documentación del dispositivo verifique los recursos del fabricante en https://www.itriangle.in/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
