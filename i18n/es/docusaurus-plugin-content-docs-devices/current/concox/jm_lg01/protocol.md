---
slug: /concox/jm_lg01/protocol
id: jm_lg01-protocol
sidebar_label: Protocol
title: Concox - JM-LG01 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del Concox JM-LG01 y cómo se comunica con Plaspy para rastreo GNSS confiable y telemetría
keywords:
  - Protocolo Concox JM-LG01
  - Protocolo GPS JM-LG01
  - Compatibilidad tracker Concox Plaspy
  - Protocolo de comunicación JM-LG01
  - Protocolo de rastreo JM-LG01
  - Protocolo rastreador GPS Concox
  - Protocolo de dispositivo Plaspy
  - Protocolo rastreador de activos
  - Rastreador de flota JM-LG01
  - Protocolo de telemetría JM-LG01
---

# Concox - Protocolo JM-LG01

Esta página describe el contexto público del protocolo para usar el rastreador Concox JM-LG01 con Plaspy. Se centra en cómo el dispositivo comunica con la plataforma Plaspy en términos no sensibles y agnósticos a la implementación, para que usted entienda las expectativas de conectividad e integración para el seguimiento a largo plazo de activos.

El JM-LG01 es un rastreador GNSS portátil compatible con Plaspy, diseñado para larga duración de batería, telemetría con detección de manipulación y mínima necesidad de instalación. Plaspy utiliza ajustes de conexión compartidos para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador; el comportamiento exacto puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página explica el papel general de la comunicación más que los detalles internos específicos del firmware.

## Visión general del protocolo

A alto nivel, el protocolo del dispositivo es el conjunto de mensajes y convenciones que el JM-LG01 emplea para reportar ubicación, estado y alarmas a un endpoint en la nube. El protocolo garantiza que Plaspy reciba posiciones válidas, telemetría como carga de batería y estado de manipulación, y notificaciones de eventos para que la plataforma pueda mostrar ubicación en tiempo real y reproducción histórica.

- Permite que el rastreador informe posiciones GNSS y datos de posicionamiento suplementarios a Plaspy para monitoreo en tiempo real.
- Transporta telemetría como nivel de batería, detección de movimiento y alertas de manipulación para que los equipos operativos actúen según el estado del dispositivo.
- Provee señalización de eventos para alarmas y violaciones de geocercas, de modo que Plaspy pueda disparar notificaciones y flujos de trabajo.
- Soporta conectividad intermitente permitiendo el registro local en el dispositivo hasta que se restablezca la conexión de red.
- Identifica el dispositivo hacia la nube para que Plaspy asocie los mensajes entrantes con el registro de activo correcto.

## Cómo detecta Plaspy el protocolo

Plaspy recibe tráfico entrante en un endpoint compartido e identifica automáticamente el protocolo del dispositivo, por lo que normalmente los usuarios no necesitan seleccionar un protocolo manualmente. La configuración correcta del dispositivo para apuntar al endpoint de Plaspy es el requisito principal para la detección automática y la incorporación exitosa.

- Plaspy escucha en un único endpoint compartido para dispositivos: d.plaspy.com y la dirección pública 54.85.159.138.
- Todos los dispositivos en Plaspy usan el mismo puerto y Plaspy detecta automáticamente el protocolo del rastreador para los dispositivos soportados.
- Cuando un JM-LG01 está configurado para reportar al endpoint de Plaspy, la plataforma utiliza la telemetría entrante y los campos de identificación del dispositivo para asociarlo con el registro de cuenta correspondiente.
- Normalmente, usted configura el rastreador para que informe al endpoint de Plaspy y no necesita elegir un protocolo dentro de Plaspy.
- Si un dispositivo no aparece, verifique la configuración de red, el APN y que el rastreador esté apuntando al host y puerto correctos de Plaspy.

## Transporte y contexto de conexión

El JM-LG01 soporta opciones estándar de transporte celular y puede configurarse para usar UDP o TCP para alcanzar el endpoint de Plaspy. El tipo de conexión suele ser seleccionable en el dispositivo o determinado por el comportamiento del firmware y las condiciones de la red celular.

- Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888 según el firmware y la configuración del dispositivo.
- La información del endpoint del servidor de Plaspy para el reporte de dispositivos es d.plaspy.com y la IP 54.85.159.138 en el puerto 8888.
- Todos los dispositivos soportados por Plaspy utilizan el mismo puerto, lo que simplifica el aprovisionamiento y el despliegue a escala de flota.
- Confirme el APN del dispositivo y la configuración de la SIM para que el rastreador pueda establecer conectividad celular y reenviar mensajes al endpoint de Plaspy.
- Para dispositivos que soportan ambos transportes, elija el que mejor se ajuste a la fiabilidad de su red y al perfil de consumo de batería.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar el tiempo entre mensajes, campos opcionales y comportamientos; siempre valide la compatibilidad con la versión de firmware instalada.
- Las revisiones de hardware pueden introducir sensores o campos de telemetría distintos que afectan la forma en que se reportan los eventos.
- Ajustes del fabricante y variantes por región pueden modificar el transporte predeterminado o los intervalos de reporte.
- La selección de transporte (UDP vs TCP) puede afectar las características de entrega y debe coincidir con la configuración del dispositivo.
- El registro local y el comportamiento de retransmisión pueden variar entre compilaciones de firmware e influir en cómo se recuperan los datos históricos.
- En caso de duda, revise la documentación oficial de Concox para las opciones de configuración específicas del dispositivo antes de un despliegue a gran escala.

## Por qué es importante comprender el protocolo

Comprender el protocolo de comunicación ayuda a asegurar una configuración confiable, una autonomía de batería predecible y un manejo adecuado de eventos cuando integra dispositivos JM-LG01 con Plaspy. Tener nociones básicas sobre el rol del protocolo y las opciones de transporte reduce el tiempo de resolución de problemas y mejora los resultados operativos.

- Ayuda a diagnosticar problemas de conectividad confirmando que el rastreador está apuntando al endpoint y puerto correctos de Plaspy.
- Asegura que las alarmas y los eventos de manipulación lleguen como se espera para que los flujos de seguridad sean efectivos.
- Orienta la elección del perfil de energía y los intervalos de reporte para balancear la duración de la batería y la frescura de la ubicación.
- Facilita una gestión de firmware más efectiva al comprender cómo los cambios pueden afectar la telemetría reportada.
- Mejora la planificación de integración al combinar los datos del JM-LG01 con otras fuentes de telemetría en Plaspy.

## Por qué usar Plaspy con este protocolo

Usar el JM-LG01 con Plaspy brinda a los equipos un seguimiento GNSS a largo plazo y de bajo mantenimiento que combina ubicación precisa, detección de manipulación y larga duración de batería para activos sin alimentación. Plaspy procesa la ubicación y la telemetría del dispositivo para que los equipos operativos y de seguridad puedan utilizar monitoreo en tiempo real, reproducción de rutas históricas y alertas configurables que mejoran la visibilidad y los procesos de recuperación de activos.

Para obtener más información sobre Plaspy y cómo la plataforma gestiona la conectividad de dispositivos y despliegues a escala de flota visite https://www.plaspy.com. Tenga en cuenta que el soporte de protocolos, el comportamiento del firmware y los detalles de implementación del dispositivo pueden cambiar con el tiempo; verifique la información más reciente del protocolo y del firmware específico del dispositivo en el sitio del fabricante https://www.iconcox.com/.
