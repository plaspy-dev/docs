---
slug: /cantrack/gf70l_solar/protocol
id: gf70l_solar-protocol
sidebar_label: Protocol
title: CanTrack - GF70L-Solar Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del rastreador CanTrack GF70L-Solar y su comunicación con Plaspy para seguimiento de activos
keywords:
  - protocolo CanTrack GF70L-Solar
  - GPS CanTrack GF70L-Solar
  - compatibilidad GF70L-Solar Plaspy
  - protocolo CanTrack Plaspy
  - protocolo de rastreo GF70L-Solar
  - protocolo de rastreador de activos CanTrack
  - protocolo rastreador solar de activos
  - protocolo de rastreador GPS Plaspy
  - protocolo de rastreo de flotas
  - protocolo de telemetría de activos
---

# CanTrack - Protocolo GF70L-Solar

Esta página explica el contexto público del protocolo para usar el rastreador magnético de activos GPS CanTrack GF70L-Solar con Plaspy. Se centra en cómo se comunica el dispositivo con Plaspy en términos generales, qué ajustes de conexión emplea y qué debe considerar al integrar dispositivos GF70L-Solar en una implementación de Plaspy.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo cuando el rastreador reporta al endpoint de Plaspy. El comportamiento exacto del protocolo para GF70L-Solar puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página mantiene los detalles a un nivel general y remite a los recursos oficiales del fabricante para información específica de firmware.

## Resumen del protocolo

El GF70L-Solar envía reportes de posición, alarmas y telemetría básica a un servidor remoto para que Plaspy pueda mostrar ubicaciones, activar alertas y almacenar datos históricos. El rastreador admite varios modos de reporte (en tiempo real, intervalos programados y activado por movimiento) que determinan la frecuencia de envío de datos y qué eventos generan subidas inmediatas.

- Proporciona un canal para reportes periódicos y por eventos hacia Plaspy para mapas e historial.
- Transmite eventos de alarma y estado como alertas de geocerca, vibración, batería baja y anti-retirada para notificar a tiempo.
- Permite asociar identificación del dispositivo y telemetría básica a cada posición para el procesamiento en la plataforma.
- Soporta métodos de configuración por SMS y configuración remota en el equipo, permitiendo cambios de IP/puerto y APN cuando se requiera.
- Facilita que las organizaciones equilibren la frecuencia de actualizaciones con la duración de batería mediante la selección del modo de reporte del dispositivo.

## Cómo Plaspy detecta el protocolo

Plaspy recibe datos entrantes en un endpoint compartido e inspecciona el flujo para determinar automáticamente el protocolo del rastreador. En la mayoría de los casos usted no necesita seleccionar un protocolo en Plaspy si el GF70L-Solar está correctamente configurado para reportar al endpoint de Plaspy.

- Plaspy escucha en un endpoint y puerto común para todos los rastreadores soportados y detecta automáticamente el protocolo usado por cada dispositivo.
- Si un GF70L-Solar reporta a d.plaspy.com o a la IP del servidor Plaspy se identificará sin necesidad de selección manual de protocolo.
- Plaspy soporta reportes por UDP y TCP cuando el dispositivo y la red permiten cualquiera de los dos transportes.
- La configuración adecuada del dispositivo para reportar a Plaspy asegura que la plataforma pueda asociar la identidad del equipo con las corrientes de datos entrantes.
- Por lo general, usted configura el rastreador mediante comandos SMS o ajustes remotos para apuntarlo al endpoint y puerto de reporte de Plaspy.

## Contexto de transporte y conexión

Los dispositivos GF70L-Solar pueden configurarse para usar reportes por UDP o TCP según la configuración del equipo y las condiciones de la red celular. Plaspy expone un único objetivo de conexión consistente para el tráfico entrante de rastreadores, lo que simplifica el despliegue y la provisión.

- Los dispositivos pueden apuntar al dominio de Plaspy d.plaspy.com o directamente a la IP del servidor Plaspy 54.85.159.138 para reportar.
- El puerto en escucha de Plaspy para todos los dispositivos es 8888 y el GF70L-Solar puede configurarse para usar UDP o TCP en el puerto 8888.
- Usar un único puerto entre dispositivos simplifica la configuración de firewall y APN para despliegues de flota.
- La confiabilidad de la red y el comportamiento del operador celular pueden influir en si TCP o UDP resulta más recomendable para su instalación.
- Verifique el APN y la provisión de la SIM en el rastreador para asegurar que pueda establecer conexiones salientes al endpoint de Plaspy.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar el comportamiento de reporte, los comandos disponibles y los campos de telemetría exactos que envía un GF70L-Solar.
- Las variantes de hardware o los modelos regionales celulares (por ejemplo variantes 2G versus 4G) pueden afectar qué transporte y ajustes de red están disponibles.
- Personalizaciones por parte del fabricante o firmware específico por región pueden introducir pequeñas diferencias en nombres de alarmas, disparadores de eventos o conjuntos de comandos SMS.
- La selección del transporte (UDP frente a TCP) es una opción de configuración en el rastreador y puede influir en las garantías de entrega y en el consumo de batería.
- Siempre valide un dispositivo en una cuenta de prueba o en un entorno de staging antes de un despliegue amplio para confirmar el comportamiento esperado con Plaspy.
- En caso de duda, consulte la documentación oficial del fabricante para el lote de dispositivos o la versión de firmware en uso.

## Por qué es importante entender el protocolo

Comprender de forma práctica el protocolo de reporte del dispositivo ayuda a garantizar que los equipos se provisionen correctamente, reduce la fricción de integración y acelera la resolución de problemas cuando los datos no aparecen en Plaspy como se espera.

- Asegura que se apliquen correctamente IP, dominio y puerto durante el aprovisionamiento para conectividad inmediata.
- Ayuda a elegir modos de reporte adecuados para que la vida útil de la batería y el uso de datos cumplan con las necesidades operativas.
- Facilita un diagnóstico más rápido de posiciones o alarmas faltantes al revisar el estado de transporte y reporte en el dispositivo.
- Aclara qué eventos y campos de telemetría reportará el rastreador para que las configuraciones de la plataforma y las alertas puedan alinearse.
- Reduce el tiempo de recuperación ante cambios de firmware o de red al saber dónde revisar la configuración del dispositivo y de la plataforma.

## Por qué usar Plaspy con este protocolo

Usar dispositivos GF70L-Solar con Plaspy brinda a los equipos operativos una forma directa de monitorear activos fuera de la red eléctrica, como remolques, contenedores y maquinaria pesada. La plataforma Plaspy agrega actualizaciones de posición, eventos de alarma y telemetría en paneles y notificaciones que apoyan flujos de recuperación y la toma de decisiones operativas.

El modelo de endpoint unificado de Plaspy simplifica el aprovisionamiento de dispositivos al usar el mismo puerto de escucha para todos los dispositivos compatibles y detectar automáticamente el protocolo del rastreador cuando el equipo reporta. Para obtener más información sobre Plaspy y cómo puede ayudar a gestionar despliegues GF70L-Solar visite https://www.plaspy.com. Por favor verifique los detalles más recientes del protocolo específico del dispositivo, comportamiento del firmware y la documentación del fabricante en el sitio oficial de CanTrack https://www.cantrackgps.com/ ya que las implementaciones del proveedor y el firmware pueden cambiar con el tiempo.
