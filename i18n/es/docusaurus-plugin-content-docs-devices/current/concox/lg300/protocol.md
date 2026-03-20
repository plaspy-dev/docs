---
slug: /concox/lg300/protocol
id: lg300-protocol
sidebar_label: Protocol
title: Concox - LG300 Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo para integrar Concox LG300 con Plaspy en rastreo GPS y comunicación de dispositivos
keywords:
  - Protocolo Concox LG300
  - Protocolo GPS Concox LG300
  - Protocolo LG300
  - Protocolo de seguimiento LG300
  - Rastreador Concox Plaspy
  - Compatibilidad de dispositivo Plaspy
  - Protocolo de rastreador GPS
  - Protocolo de rastreo vehicular
  - Protocolo de rastreo de activos
  - Rastreo de flotas LG300
---

# Concox - Protocolo LG300

Esta página describe el contexto público del protocolo para usar el rastreador Concox LG300 con Plaspy. Explica cómo se comunica el dispositivo con Plaspy a alto nivel, los ajustes de conexión que la plataforma espera y consideraciones prácticas de compatibilidad para la integración. La intención es detallar la superficie de comunicación sin exponer implementaciones privadas.

Plaspy utiliza un enfoque de conexión compartida entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando los datos llegan a la plataforma. El comportamiento exacto en un LG300 puede variar según la versión de firmware, la revisión de hardware y la configuración del fabricante, por lo que aquí se ofrece orientación general y se remiten recursos oficiales del fabricante para detalles específicos del dispositivo.

## Resumen del protocolo

El protocolo de reporte es el mecanismo que el LG300 usa para enviar posiciones GNSS, telemetría y eventos a un endpoint en la nube como Plaspy. En la práctica esto incluye identidad del dispositivo, marcas de tiempo, coordenadas, eventos de movimiento y manipulación, estado de batería y otros datos configurados que Plaspy procesa para seguimiento en tiempo real e informes históricos.

- Permite al LG300 establecer conexión con el endpoint de ingestión de Plaspy y transmitir posiciones y eventos.
- Transporta información de identificación para que Plaspy asocie los datos entrantes con el registro correcto del dispositivo.
- Codifica telemetría como movimiento, manipulación, nivel de batería y eventos por activación de audio para su uso en alertas y paneles.
- Soporta distintos modos de transporte según la configuración del dispositivo para enrutar los datos a Plaspy.
- Sirve como base para cadencias de reporte configurables que equilibran frecuencia de telemetría y duración de la batería.

## Cómo detecta Plaspy el protocolo

Plaspy acepta tráfico de dispositivos en un único endpoint y puerto compartidos y determina automáticamente el protocolo de reporte utilizado por el rastreador. Cuando un LG300 está configurado para reportar a Plaspy, la plataforma identifica el formato entrante y encamina la telemetría al flujo correspondiente, por lo que usualmente no es necesario seleccionar manualmente el protocolo dentro de Plaspy.

- Plaspy escucha conexiones entrantes al endpoint público de ingestión en d.plaspy.com.
- La plataforma también acepta tráfico dirigido a la IP del servidor 54.85.159.138 cuando lo requieren las configuraciones de los dispositivos.
- Plaspy usa el puerto 8888 para reportes de dispositivos y el mismo puerto aplica a todos los dispositivos soportados.
- La detección de protocolo es automática una vez que tráfico válido del dispositivo alcanza el endpoint de Plaspy, por lo que la configuración correcta del reporte es el requisito clave.
- Asegúrese de configurar el LG300 para que reporte al host y puerto de Plaspy para permitir la detección e ingestión automática.

## Transporte y contexto de conexión

El transporte de la conexión forma parte de la configuración de integración. El LG300 puede configurarse para enviar datos por UDP o TCP según el firmware y las elecciones de configuración. Plaspy soporta ambos transportes en el mismo puerto, de modo que los dispositivos pueden usar el que mejor se adapte a las condiciones de red y al comportamiento del equipo.

- Los dispositivos pueden apuntar al dominio d.plaspy.com o a la dirección numérica del servidor 54.85.159.138.
- Plaspy acepta tráfico UDP y TCP en el puerto 8888 para reporte de dispositivos.
- Todos los dispositivos soportados por Plaspy utilizan el mismo puerto para ingestión, lo que simplifica la configuración.
- Los cortafuegos de red y la configuración del APN deben permitir tráfico saliente hacia el host de Plaspy en el puerto 8888 para que el reporte sea exitoso.
- Si un dispositivo soporta conmutación a SMS u otros reportes fuera de banda, esas funciones se configuran en el propio equipo y no cambian el endpoint de ingestión de Plaspy.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar cómo un equipo formatea o programa la telemetría; verifique la versión de firmware al solucionar problemas.
- Lotes de hardware diferentes o revisiones pueden mostrar menús de configuración distintos o valores por defecto de transporte en el LG300.
- Es posible que se requieran herramientas de configuración del fabricante o comandos SMS para apuntar el dispositivo a d.plaspy.com o 54.85.159.138 y seleccionar UDP o TCP en el puerto 8888.
- Algunas funciones reportadas por el dispositivo, como activadores de audio o sensores de manipulación, pueden necesitar soporte de firmware específico para aparecer en el flujo de telemetría.
- Valide siempre que el dispositivo esté enviando datos a Plaspy comprobando la actividad del equipo en la plataforma después de configurar host y puerto.
- En caso de duda, consulte la documentación oficial del fabricante para la sintaxis de comandos y notas de firmware específicas del dispositivo.

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación ayuda a garantizar una conexión fiable entre el LG300 y Plaspy y facilita la resolución de problemas cuando los dispositivos no aparecen en la plataforma. Saber cómo reporta el equipo, qué transporte utiliza y qué telemetría puede proporcionar simplifica la configuración para despliegues a largo plazo con bajo mantenimiento.

- Asegura que los dispositivos apunten a d.plaspy.com o 54.85.159.138 y usen el puerto 8888 para que los datos lleguen a Plaspy.
- Ayuda a decidir si UDP o TCP es más apropiado según el entorno de red o la estrategia de ahorro de batería.
- Aclara qué telemetría y eventos debe entregar el dispositivo para soportar alertas y flujos de trabajo en la plataforma.
- Facilita el diagnóstico de problemas de conectividad como puertos bloqueados, APN mal configurado o hosts de reporte incorrectos.
- Apoya la planificación de actualizaciones de firmware y la disponibilidad de funciones según las notas del fabricante.

## Por qué usar Plaspy con este protocolo

Usar el Concox LG300 con Plaspy brinda a las organizaciones seguimiento de activos con larga autonomía y telemetría consolidada en una sola plataforma. Plaspy procesa la secuencia de posiciones y los datos de eventos del LG300 para que flotas y administradores de activos puedan ver la ubicación en tiempo real, alertas de manipulación, notificaciones de batería baja y eventos de audio de incidentes junto con otras fuentes de telemetría en una vista operativa unificada.

Para obtener más información sobre Plaspy y cómo soporta integraciones de dispositivos como el LG300 visite https://www.plaspy.com. El soporte de protocolo, el comportamiento del firmware y los detalles de implementación del dispositivo pueden cambiar con el tiempo, por lo que verifique la documentación y las notas de firmware más recientes con el fabricante en https://www.iconcox.com/.
