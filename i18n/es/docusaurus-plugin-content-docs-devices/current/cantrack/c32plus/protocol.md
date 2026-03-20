---
slug: /cantrack/c32plus/protocol
id: c32plus-protocol
sidebar_label: Protocol
title: CanTrack - C32Plus Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo para configurar el CanTrack C32Plus con Plaspy y asegurar reportes fiables y compatibilidad
keywords:
  - protocolo CanTrack C32Plus
  - protocolo GPS CanTrack C32Plus
  - comunicación CanTrack C32Plus
  - rastreo CanTrack C32Plus
  - compatibilidad rastreador Plaspy
  - compatibilidad GT06
  - configuración C32Plus Plaspy
  - rastreador GPS para vehículos
  - rastreador para gestión de flotas
  - guía de protocolo de rastreador GPS
---

# CanTrack - Protocolo C32Plus

Esta página describe el contexto público del protocolo para usar el rastreador CanTrack C32Plus con Plaspy. Resume cómo el dispositivo se comunica con Plaspy, el papel del protocolo de reporte del rastreador y los detalles prácticos que instaladores y administradores deben conocer al integrar el C32Plus con Plaspy para rastreo y telemetría en tiempo real.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el dispositivo reporta al endpoint de Plaspy. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página se enfoca en detalles públicos y no sensibles de integración más que en internos específicos de firmware.

## Resumen del protocolo

El C32Plus reporta ubicación, alarmas y telemetría por GPRS celular y se documenta como compatible con el estilo de reporte GT06 cuando se configura para transporte TCP/IP. En términos generales, el protocolo de reporte del rastreador define cómo el dispositivo se identifica ante el servidor, cómo se empaquetan los datos de ubicación y eventos, y qué campos puede utilizar Plaspy para mostrar estado en tiempo real y trazas históricas.

- Permite que el rastreador anuncie su identidad y el contexto de sesión al servidor para que Plaspy atribuya los datos al dispositivo correcto.
- Transporta posiciones GPS, alarmas como encendido o desconexión de alimentación, y telemetría auxiliar que Plaspy mapea a paneles y alertas.
- Permite el almacenamiento temporal en el dispositivo para subir registros en cola cuando se restablece la conectividad GPRS.
- Soporta comandos remotos cuando están habilitados por el fabricante, los cuales Plaspy puede reenviar tras la configuración del dispositivo.
- Regula los intervalos de latido (heartbeat) y reporte que afectan la frecuencia de actualizaciones y la entrega de eventos a Plaspy.

## Cómo detecta Plaspy el protocolo

Plaspy recibe conexiones entrantes y telemetría en un endpoint y puerto compartidos, y utiliza esos datos para identificar automáticamente el protocolo del rastreador. En la mayoría de instalaciones, si el rastreador apunta al endpoint de Plaspy y usa un transporte soportado, no es necesario seleccionar el protocolo manualmente dentro de Plaspy.

- Plaspy ofrece un único endpoint de reporte hacia el que deben apuntar los dispositivos, lo que simplifica la configuración para instaladores.
- Todos los dispositivos usan el mismo puerto en Plaspy, por lo que las unidades de seguimiento no requieren asignaciones de puerto únicas.
- Plaspy detecta automáticamente el protocolo del rastreador a partir de la conexión entrante y los datos que envía el dispositivo.
- Si un dispositivo está mal configurado a nivel de unidad, la detección de protocolo puede no funcionar hasta que la dirección de reporte y el transporte coincidan con la configuración de Plaspy.
- Una identidad correcta del dispositivo y una conectividad GPRS estable ayudan a que Plaspy asocie los mensajes entrantes con el vehículo o activo adecuado.

## Transporte y contexto de conexión

El C32Plus puede configurarse para usar transporte UDP o TCP según el soporte del equipo y las opciones de configuración. Para la integración con Plaspy, apunte el rastreador a la dirección del servidor Plaspy usando el puerto compartido de reporte para que los datos lleguen de forma confiable.

- El dominio del servidor Plaspy es d.plaspy.com y puede usarse como host de reporte del dispositivo.
- La IP del servidor Plaspy es 54.85.159.138, alternativa de reporte si no está disponible DNS.
- El puerto usado para reporte de dispositivos a Plaspy es 8888 y el dispositivo puede configurarse usando UDP o TCP en el puerto 8888.
- Todos los dispositivos soportados por Plaspy utilizan el mismo puerto, lo que simplifica la configuración a nivel de flota.
- La elección entre UDP o TCP afecta las características de entrega, pero no cambia que los datos deben apuntar a Plaspy para la detección automática del protocolo.

## Notas sobre compatibilidad del protocolo

- Las versiones de firmware del fabricante pueden modificar la temporización de mensajes, los campos de telemetría disponibles o los comandos remotos opcionales; confirme siempre el comportamiento del firmware de su unidad.
- Revisiones de hardware o SKUs regionales pueden mostrar diferencias sutiles en mensajes soportados o en el comportamiento del transporte.
- Algunas unidades C32Plus se documentan como compatibles con GT06; use la documentación del fabricante para verificar las variantes exactas del protocolo que implementa su equipo.
- La selección de transporte entre UDP y TCP debe coincidir con la configuración del dispositivo y el perfil de fiabilidad y latencia esperado.
- Confirme que el dispositivo esté configurado para reportar a d.plaspy.com o 54.85.159.138 en el puerto 8888 para asegurar que Plaspy pueda recibir y detectar el protocolo.
- Valide características opcionales como inmovilizador remoto u OTA contra el nivel de firmware del dispositivo y la guía del fabricante.

## Por qué es importante entender el protocolo

Comprender cómo el C32Plus se comunica con Plaspy reduce la fricción en la integración, ayuda a diagnosticar problemas de entrega y soporta un comportamiento predecible durante actualizaciones de firmware o cambios de hardware. Tener expectativas claras sobre transporte, identidad y cadencia de reporte hace que las implementaciones sean más confiables y fáciles de apoyar.

- Agiliza la configuración inicial asegurando que los dispositivos apunten al endpoint correcto de Plaspy y usen el transporte soportado en el puerto 8888.
- Ayuda a solucionar actualizaciones faltantes o demoradas verificando tipo de transporte, objetivo del servidor y versión de firmware.
- Aclara cómo las alarmas y la telemetría se mapean a eventos y paneles de Plaspy para uso operativo.
- Orienta la decisión sobre habilitar comandos remotos opcionales y cómo esas acciones son manejadas por el firmware del dispositivo.
- Apoya la planificación ante conectividad intermitente alineando el comportamiento de almacenamiento del dispositivo con las expectativas de ingestión de Plaspy.

## Por qué usar Plaspy con este protocolo

Combinar el CanTrack C32Plus con Plaspy ofrece una vía práctica para obtener visibilidad en tiempo real del vehículo, alarmas y telemetría para flotas y operaciones de vehículos ligeros. El factor de forma del C32Plus y su amplio rango de voltaje lo hacen adecuado para scooters, motocicletas y vehículos pequeños, mientras que su reporte compatible con GT06 y el almacenamiento offline ayudan a mantener la continuidad de datos hacia Plaspy en cobertura celular variable.

Para obtener más información sobre Plaspy y cómo maneja la conectividad de dispositivos y la detección de protocolos, visite https://www.plaspy.com. El soporte de protocolos, el comportamiento del firmware y los detalles de implementación del fabricante pueden cambiar con el tiempo, por lo que confirme la información más reciente específica del dispositivo con el fabricante en https://www.cantrackgps.com/ antes de finalizar los planes de despliegue.
