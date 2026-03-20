---
slug: /carscop/cc_318/protocol
id: cc_318-protocol
sidebar_label: Protocol
title: Carscop - CC-318 Protocol
sidebar_class_name: menu_item_tracker
description: Información pública del protocolo del Carscop CC-318 y su comunicación con Plaspy para rastreo de flotas
keywords:
  - Carscop CC-318
  - Protocolo CC-318
  - Protocolo GPS Carscop
  - Compatibilidad CC-318 Plaspy
  - Protocolo de rastreo Carscop
  - Guía de protocolo de rastreadores GPS
  - Rastreo de vehículos CC-318
  - Compatibilidad de dispositivos Plaspy
  - Inmovilizador remoto CC-318
  - Integración GPS para flotas
---

# Carscop - Protocolo CC-318

Esta página describe el contexto público del protocolo para usar el rastreador Carscop CC-318 con Plaspy. Explica, a alto nivel, cómo el dispositivo comunica telemetría, alertas y eventos de control al servicio Plaspy, y qué aspectos de la comunicación son relevantes al integrar la unidad en flotas o en un flujo de trabajo de alquileres.

Plaspy usa configuraciones de conexión compartidas para todos los rastreadores admitidos y detecta automáticamente el protocolo cuando los dispositivos reportan al endpoint de Plaspy. El comportamiento exacto del protocolo en el CC-318 puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página se enfoca en el contexto público seguro del protocolo en lugar de los detalles internos del firmware.

## Resumen del protocolo

El protocolo de reporte del rastreador define cómo el CC-318 transmite posición, estado, alarmas y respuestas de control a un servidor remoto. Para la compatibilidad con Plaspy, el protocolo debe permitir que el dispositivo se identifique, envíe telemetría periódica o basada en eventos, y exponga eventos de alarma e entrada/salida de forma que Plaspy pueda interpretarlos y mostrarlos.

- Permite que el CC-318 reporte posición basada en GNSS, información de respaldo LBS y telemetría a un servidor remoto
- Transporta eventos de alarma y entradas como corte de energía, apertura de puertas, impacto y estado de ACC para alertas oportunas
- Soporta acuses de recibo de control remoto cuando se usan canales de comando por internet o SMS para inmovilizador y salidas
- Permite registro a bordo y carga posterior para que Plaspy pueda reconciliar trayectos sin conexión con la telemetría en vivo
- Transporta datos de sensores incluyendo eventos del sensor G y telemetría opcional CANbus o Bluetooth cuando el equipo está equipado

## Cómo Plaspy detecta el protocolo

Plaspy ofrece un endpoint unificado para el reporte de dispositivos y detecta automáticamente el protocolo del rastreador según las conexiones entrantes y los datos que envía el dispositivo. Esto significa que la mayoría de los CC-318 solo necesitan apuntar al endpoint de Plaspy y usar los ajustes de transporte correctos para integrarse sin seleccionar manualmente el protocolo dentro de la plataforma.

- Plaspy escucha en un único endpoint público, por lo que los dispositivos reportan a d.plaspy.com o 54.85.159.138
- Plaspy utiliza un solo puerto para todos los dispositivos, lo que simplifica la configuración y el despliegue
- El puerto del endpoint de Plaspy es 8888 y Plaspy detecta automáticamente el protocolo del rastreador cuando llegan datos
- Normalmente usted no necesita elegir un protocolo en Plaspy si el CC-318 está configurado para reportar al endpoint de Plaspy
- La detección automática facilita un proceso de incorporación más fluido entre variantes de firmware y dispositivos

## Transporte y contexto de conexión

El CC-318 puede configurarse para usar UDP o TCP en las comunicaciones, dependiendo del firmware del módulo y las decisiones de instalación. Al integrar con Plaspy, usted debe confirmar la selección de transporte y la dirección del servidor en el dispositivo para que la telemetría llegue de forma fiable al servicio Plaspy.

- Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888 para el reporte al servidor
- El endpoint del servidor Plaspy puede configurarse como d.plaspy.com o la IP 54.85.159.138
- Todos los dispositivos Plaspy usan el mismo puerto, lo que ayuda a estandarizar las instalaciones en una flota mixta
- Según las condiciones de la red GSM y el firmware, el uso de TCP frente a UDP puede afectar la fiabilidad de entrega y el comportamiento de retransmisión
- Asegúrese de que el APN y los ajustes de datos GSM del CC-318 sean correctos para que el dispositivo pueda abrir el transporte elegido hacia el endpoint de Plaspy

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar el timing de los mensajes, campos opcionales o eventos soportados; confirme siempre el comportamiento a nivel de firmware
- Las variantes de hardware o módulos opcionales como CANbus o Bluetooth pueden añadir campos de telemetría no presentes en las unidades base
- La preferencia de transporte entre UDP y TCP puede variar según la implementación; valide que el dispositivo use el transporte previsto al apuntar al endpoint de Plaspy
- Puede ser necesario configurar el fabricante vía SMS o herramienta de configuración para apuntar el dispositivo a d.plaspy.com o 54.85.159.138
- El registro sin conexión y la carga posterior son comunes; verifique cómo su firmware CC-318 maneja pistas en caché y la reanudación de cargas
- Las diferencias del fabricante en el mapeo predeterminado de alarmas pueden requerir un paso de configuración para que las alertas aparezcan como espera en Plaspy
- Siempre contraste el comportamiento del dispositivo con el manual oficial para la revisión específica de hardware y firmware

## Por qué es importante comprender el protocolo

Comprender claramente el protocolo de comunicación y el contexto de conexión del CC-318 ayuda a garantizar telemetría fiable, manejo correcto de alarmas y comportamiento predecible de control remoto cuando se usa con Plaspy. Saber qué partes del protocolo son fijas y cuáles dependen del firmware facilita la incorporación, la resolución de problemas y el mantenimiento a largo plazo.

- Ayuda a diagnosticar problemas de conectividad confirmando transporte, endpoint y ajustes APN
- Aclara por qué ciertos eventos o campos pueden faltar tras actualizaciones de firmware o cambios de configuración
- Permite configurar correctamente entradas de alarma y salidas remotas para que Plaspy reciba eventos accionables
- Facilita la planificación de integraciones opcionales como mejoras de telemetría CANbus o Bluetooth
- Mejora el tiempo de actividad al alinear el comportamiento de reintentos y registro del dispositivo con las expectativas de Plaspy

## Por qué usar Plaspy con este protocolo

Usar el CC-318 con Plaspy ofrece a operadores de flotas, servicios de alquiler y plataformas de movilidad compartida una vista consolidada de ubicación, eventos de seguridad y capacidades de control remoto. La detección automática de protocolos y el modelo de conexión unificado de Plaspy reducen la carga de configuración en despliegues masivos, manteniendo los dispositivos visibles para supervisión en tiempo real e informes históricos.

Si desea saber más sobre cómo Plaspy trabaja con dispositivos como el CC-318, visite https://www.plaspy.com. El soporte de protocolo y el comportamiento de los dispositivos pueden cambiar con actualizaciones de firmware y del fabricante, por lo que por favor verifique los detalles más recientes del protocolo y firmware del CC-318 con el fabricante en http://www.carscop.com/ para obtener la información más actual.
