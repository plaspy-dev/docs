---
slug: /trackerking/j14/protocol
id: j14-protocol
sidebar_label: Protocol
title: TrackerKing - J14 Protocol
sidebar_class_name: menu_item_tracker
description: Descripción pública del protocolo del TrackerKing J14 y cómo se comunica con Plaspy para rastreo en vivo y reportes de eventos
keywords:
  - TrackerKing J14 protocolo
  - TrackerKing J14 GPS
  - TrackerKing J14 Plaspy
  - protocolo de rastreador GPS
  - protocolo de rastreo de vehículos
  - integración de rastreo de flotas
  - compatibilidad con rastreadores GNSS
  - reporte de telemetría J14
  - rastreador compatible con Plaspy
  - protocolo de rastreo en tiempo real
---

# TrackerKing - Protocolo J14

Esta página describe el contexto público del protocolo para usar el TrackerKing J14 con Plaspy. Se centra en cómo el dispositivo comunica posiciones y telemetría de eventos de manera que Plaspy las procesa para mapas en vivo, alertas y reproducción histórica. El J14 es un rastreador vehicular cableado, compacto, con posicionamiento GPS y BDS, carcasa resistente IP65 y múltiples mecanismos de alarma que generan los eventos que Plaspy consume.

Plaspy emplea ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del equipo cuando éste está correctamente configurado para reportar al endpoint de Plaspy. El comportamiento exacto del protocolo y la disponibilidad de funciones pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante; por eso esta página presenta el contexto público de comunicación y no detalles a nivel de firmware.

## Resumen del protocolo

El protocolo de comunicación del rastreador es el mecanismo por el cual el J14 envía fijaciones GNSS y eventos de alarma a un backend remoto. A alto nivel, el protocolo permite identificación, entrega de telemetría e reporte de eventos para que Plaspy convierta los mensajes crudos del dispositivo en datos de rastreo y alertas utilizables.

- Transporta la identidad del dispositivo y posicionamientos con sello de tiempo para que Plaspy asigne ubicaciones a los vehículos
- Transmite señales de alarma y eventos como geovallas, exceso de velocidad, movimiento y pérdida de alimentación para alertas basadas en reglas
- Entrega telemetría periódica o por evento para soportar el seguimiento en vivo y la reproducción histórica en Plaspy
- Permite parámetros de configuración y flujos de acuse de recibo cuando el fabricante lo soporta
- Proporciona el contexto necesario para que Plaspy correlacione datos de posición con señales del vehículo cuando estén disponibles

## Cómo detecta Plaspy el protocolo

Plaspy recibe conexiones entrantes en un único endpoint y puerto compartido y detecta automáticamente el protocolo del rastreador para los dispositivos soportados. En la mayoría de los despliegues, el dispositivo sólo necesita estar configurado para reportar al endpoint de Plaspy y la plataforma clasificará y procesará los mensajes entrantes sin que usted seleccione manualmente un protocolo.

- Plaspy escucha en un endpoint de servidor común para los reportes de dispositivos y detecta el protocolo automáticamente
- En general, los usuarios no necesitan elegir un protocolo dentro de Plaspy si el dispositivo apunta al endpoint de Plaspy
- La configuración correcta del reporte del dispositivo es el requisito clave para la detección automática y la ingestión correcta
- La detección de protocolo soporta tanto flujos continuos de posición como mensajes impulsados por eventos
- Si experimenta problemas de detección, verifique la configuración de reporte del dispositivo y el comportamiento del firmware con el fabricante

## Transporte y contexto de conexión

El J14 puede configurarse para usar transportes de red estándar para reenviar su telemetría a Plaspy. Los dispositivos pueden ajustarse para usar UDP o TCP según el soporte del equipo y la preferencia del instalador. Para despliegues con Plaspy, la información del endpoint público es consistente entre dispositivos, por lo que los instaladores pueden apuntar las unidades al mismo destino.

- Plaspy server domain for device reports is d.plaspy.com
- Plaspy server IP address for direct routing is 54.85.159.138
- The port used by Plaspy for device connections is 8888
- Devices may be configured using UDP or TCP on port 8888 depending on device capabilities
- All devices supported by Plaspy use the same port to simplify deployment and routing

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar qué mensajes o alarmas están disponibles y cómo se reportan
- Las revisiones de hardware pueden afectar las entradas disponibles y la forma en que los eventos se señalan al protocolo
- Las opciones de configuración del fabricante determinan si el dispositivo reporta por UDP o TCP
- Los ajustes de red o de la SIM en el dispositivo pueden afectar la latencia y la fiabilidad de entrega
- Siempre valide que el dispositivo esté configurado para reportar al endpoint de Plaspy para habilitar la detección automática
- Consulte al fabricante para comportamientos específicos de firmware que puedan afectar la integración con Plaspy

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación ayuda a los instaladores y operadores de flotas a configurar las unidades J14 de manera fiable, solucionar problemas de reporte e interpretar los eventos que Plaspy muestra. Conocer el contexto de reporte reduce errores de configuración y favorece un comportamiento predecible en uso operativo.

- Asegura que el reporte del dispositivo apunte a d.plaspy.com o a la IP de Plaspy para que los datos lleguen a la plataforma
- Facilita el diagnóstico de telemetría faltante verificando ajustes de transporte y versiones de firmware
- Aclara qué eventos y alarmas el dispositivo reenviará a Plaspy para alertas automatizadas
- Mejora la calidad de la instalación al alinear alimentación y montaje con el comportamiento operativo esperado
- Permite conversaciones informadas con los fabricantes cuando surgen brechas de firmware o funcionalidades

## Por qué usar Plaspy con este protocolo

Usar el TrackerKing J14 con Plaspy proporciona visibilidad continua de posiciones y telemetría de eventos accionables para la gestión de flotas, protección de activos y procesos de recuperación. El posicionamiento dual GNSS y las múltiples capacidades de alarma del J14 suministran las señales de ubicación y eventos que Plaspy necesita para soportar la monitorización en vivo, alertas de incidentes y el análisis histórico de rutas.

Para conocer más sobre el despliegue del J14 con Plaspy y las capacidades generales de la plataforma, visite https://www.plaspy.com. Por favor verifique los detalles más recientes del protocolo específico del dispositivo, notas de firmware y guías de instalación con el fabricante en https://trackerking.cn/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
