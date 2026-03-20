---
slug: /flextrack/lommy_power_9b23/protocol
id: lommy_power_9b23-protocol
sidebar_label: Protocol
title: Flextrack - Lommy Power 9B23 Protocol
sidebar_class_name: menu_item_tracker
description: Referencia pública del protocolo para Flextrack Lommy Power 9B23, comunicación con servidores Plaspy y contexto de conexión
keywords:
  - Flextrack Lommy Power 9B23
  - Protocolo Lommy Power 9B23
  - Protocolo GPS Flextrack
  - Rastreador GPS Lommy Power
  - Compatibilidad de dispositivos Plaspy
  - Protocolo de seguimiento de maquinaria
  - Protocolo GPS para flotas
  - Protocolo telemático de equipos
  - Integración Lommy Power Plaspy
  - Rastreador GPS industrial
---

# Flextrack - Protocolo Lommy Power 9B23

Esta página describe el contexto público del protocolo para usar el Flextrack Lommy Power 9B23 con Plaspy. Resume cómo el dispositivo se comunica con los servidores de Plaspy, qué ajustes de conexión se emplean y las consideraciones generales que influyen en la integración, sin exponer detalles internos del firmware ni información sensible de implementación.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el dispositivo comienza a reportar al endpoint de Plaspy. El comportamiento exacto puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que las notas que siguen son una guía pública y no una especificación a nivel de firmware.

## Resumen del protocolo

El protocolo de comunicación define cómo el Lommy Power 9B23 informa posición, telemetría y eventos a un servidor remoto como Plaspy. A grandes rasgos, el protocolo entrega identidad, posición, movimiento y datos telemétricos de manera que Plaspy pueda procesarlos y convertirlos en alertas, paneles y APIs.

- Permite envíos periódicos y basados en eventos de la posición GNSS y la telemetría del dispositivo hacia Plaspy.
- Transporta información de identidad y estado del dispositivo para que Plaspy asocie los reportes con el activo y la configuración correctos.
- Comunica eventos de movimiento e ignición que Plaspy usa para generar alertas de geocerca, acumulación de horas de operación y notificaciones de robo.
- Soporta comportamientos resilientes como almacenamiento local en el dispositivo para que los datos estén disponibles para Plaspy una vez que se restablece la conectividad.
- Funciona sobre transportes IP estándar para que Plaspy reciba y normalice los datos para visualización, reportes e integraciones.

## Cómo detecta Plaspy el protocolo

Plaspy escucha en un único endpoint y puerto compartido para los reportes de dispositivos y detecta automáticamente el protocolo de cada unidad cuando empieza a enviar datos. En la mayoría de los casos no es necesario seleccionar un protocolo dentro de Plaspy si el dispositivo está configurado para enviar datos al endpoint de Plaspy.

- El dominio de servidor de Plaspy usado para reportes es d.plaspy.com.
- La dirección IP publicada para configuración de dispositivos es 54.85.159.138.
- Plaspy escucha en el puerto 8888 para conexiones e ingestión de dispositivos.
- Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888 al reportar a Plaspy.
- Todos los dispositivos en Plaspy usan el mismo puerto y la plataforma detecta automáticamente el protocolo del rastreador cuando llegan los datos.

## Transporte y contexto de conexión

El contexto de conexión abarca los detalles de transporte y direccionamiento necesarios para que el dispositivo alcance Plaspy. El Lommy Power 9B23 soporta transportes celulares estándar y puede configurarse para apuntar a Plaspy por dominio o IP según la preferencia del instalador y las necesidades de la red.

- Los dispositivos pueden configurarse para reportar a d.plaspy.com o a la dirección IP 54.85.159.138.
- Las opciones de transporte soportadas incluyen UDP y TCP en el puerto 8888, seleccionables desde la configuración del dispositivo cuando está disponible.
- Plaspy usa el mismo puerto 8888 para todos los dispositivos, lo que simplifica la configuración y el ruteo en el servidor.
- Donde esté disponible, los dispositivos pueden ofrecer también SMS u otras alternativas como respaldo para condiciones de muy baja capacidad; revise las opciones del instalador para su unidad.
- La conectividad de red y las diferencias entre operadores pueden afectar los tiempos de entrega y deben considerarse al validar los reportes.

## Notas sobre compatibilidad del protocolo

- El Lommy Power 9B23 se describe como compatible con Plaspy, pero la compatibilidad puede depender de la versión de firmware y de la configuración del operador.
- Revisiones de hardware o actualizaciones de firmware del fabricante pueden cambiar los intervalos de reporte, la telemetría disponible o los valores predeterminados de transporte.
- Algunas funciones, como el reporte de entradas auxiliares, telemetría de horas de operación o respaldos por SMS, pueden requerir firmware específico o pasos adicionales de configuración.
- Elegir UDP frente a TCP puede afectar la semántica de entrega y debe alinearse con la configuración del dispositivo y el comportamiento del operador móvil.
- El tamaño y el comportamiento del almacenamiento local dependen del firmware del dispositivo y pueden influir en la cantidad de datos históricos reenviados tras una interrupción.
- Valide siempre los ajustes del dispositivo según la documentación del fabricante y confirme que la unidad esté apuntando al endpoint de Plaspy.

## Por qué es importante entender el protocolo

Tener un entendimiento práctico del protocolo de comunicación ayuda a instaladores y gerentes de flota a asegurar un flujo de datos confiable, solucionar problemas de conectividad y mapear eventos del dispositivo a los flujos y alertas de Plaspy.

- Confirma que el dispositivo está configurado para reportar a d.plaspy.com o a 54.85.159.138 en el puerto 8888 para que Plaspy pueda ingerir los datos.
- Ayuda a diagnosticar problemas relacionados con el transporte, como pérdida de paquetes UDP o fallos en sesiones TCP que afectan la frecuencia de reportes.
- Aclara qué tipos de telemetría y eventos puede generar el dispositivo para que las reglas y paneles de Plaspy se configuren correctamente.
- Facilita la planificación de actualizaciones de firmware, aprovisionamiento de operador e prácticas de instalación en campo que influyen en la calidad de la señal y el tiempo de actividad.
- Permite una mejor coordinación entre instaladores, equipos de operaciones y el soporte de Plaspy al validar reportes de seguimiento y uso de activos.

## Por qué usar Plaspy con este protocolo

Usar el Lommy Power 9B23 con Plaspy ofrece a los equipos visibilidad continua a nivel de máquina mediante una canalización de telemetría consolidada y ajustes de conexión sencillos. El diseño robusto de la unidad, su GNSS multi-constelación y conectividad LTE brindan datos de posición y horas de operación fiables que Plaspy puede transformar en alertas, reportes de utilización y disparadores de mantenimiento para flotas de construcción, agricultura y silvicultura.

Si desea conocer más sobre Plaspy y cómo se integra este rastreador con los flujos de trabajo de Plaspy visite https://www.plaspy.com. Tenga en cuenta que el soporte de protocolo, el comportamiento del firmware y los detalles del fabricante pueden cambiar con el tiempo; verifique la información específica más reciente en el sitio del fabricante https://flextrack.dk.
