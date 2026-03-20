---
slug: /autofon/45/protocol
id: 45-protocol
sidebar_label: Protocol
title: AutoFon - Маяк 4.5 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo de comunicación del AutoFon Маяк 4.5 con Plaspy para reportes GPS y alertas
keywords:
  - AutoFon Маяк 4.5 protocolo
  - AutoFon Маяк 4.5 GPS
  - AutoFon Mayak 4.5 Plaspy
  - protocolo de rastreador GPS
  - rastreador GPS GPRS
  - reportes GPS por SMS
  - protocolo de rastreo vehicular
  - protocolo de rastreo de activos
  - compatibilidad del rastreador con Plaspy
  - rastreador GPS encubierto
---

# AutoFon - Protocolo Маяк 4.5

Esta página ofrece una visión pública y no sensible del contexto del protocolo de comunicación del AutoFon Маяк 4.5 cuando se integra con Plaspy. Explica cómo el rastreador envía posición y telemetría a un servidor de monitoreo y qué papel tiene el modo de reporte del dispositivo para una integración correcta con una implementación de Plaspy.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador una vez que el equipo empieza a reportar al endpoint de Plaspy. El Mayak 4.5 puede entregar reportes por SMS o enviar paquetes GPRS por intervalos a través de la red celular; el comportamiento exacto del protocolo y las funciones disponibles pueden variar según la versión del firmware, la revisión de hardware y la implementación del fabricante. Tenga en cuenta que Plaspy acepta tráfico de dispositivos en la dirección de servidor común d.plaspy.com y en la IP 54.85.159.138 usando el puerto 8888, y el equipo puede configurarse para usar UDP o TCP en el puerto 8888.

## Resumen del protocolo

El protocolo de rastreo del Mayak 4.5 define cómo el dispositivo transmite información de ubicación, estado y eventos a un servidor de monitoreo remoto como Plaspy. En la práctica, el protocolo determina qué campos se reportan, con qué frecuencia se envían los reportes en modo intervalo y cómo se incluyen las alertas (movimiento, pérdida de alimentación, entradas de alarma) junto con los datos de posición.

- Permite reportes periódicos por GPRS en modo intervalo y reportes bajo demanda por SMS para que la posición y la telemetría lleguen a Plaspy para mapeo y alertas.
- Incluye identificadores del equipo y campos de estado que permiten a Plaspy asociar los mensajes entrantes con la instancia correcta del rastreador.
- Transporta indicadores de eventos como movimiento, desconexión de alimentación externa y estado de entradas de alarma que Plaspy presenta como notificaciones inmediatas.
- Soporta modos de reporte de bajo consumo para extender la vida de batería en usos de larga autonomía típicos de este rastreador.
- Coexiste con comandos y control por SMS para consultas remotas y configuraciones sencillas cuando GPRS no está disponible.

## Detección del protocolo por parte de Plaspy

Plaspy escucha en un endpoint y puerto compartidos para los reportes entrantes y aplica detección automática de protocolo, de modo que la mayoría de los usuarios no necesitan seleccionar un protocolo manualmente. Cuando el Mayak 4.5 está configurado para enviar datos a Plaspy, la plataforma empata los mensajes entrantes con un perfil de dispositivo soportado y los convierte en posiciones, eventos y telemetría.

- Configure el dispositivo para reportar a d.plaspy.com o a la dirección IP 54.85.159.138 para que Plaspy reciba el tráfico directamente.
- Use el puerto 8888 para el reporte del equipo; Plaspy usa el mismo puerto para todos los dispositivos soportados, lo que simplifica la configuración.
- Los equipos pueden configurarse para usar UDP o TCP en el puerto 8888 según la configuración de la unidad y las condiciones de la red.
- Una vez que los mensajes llegan a Plaspy, el sistema reconoce automáticamente el protocolo del rastreador y mapea los campos entrantes al panel de Plaspy.
- Con los ajustes correctos de servidor y transporte, la selección manual del protocolo dentro de Plaspy suele ser innecesaria.

## Transporte y contexto de conexión

Comprender las opciones de transporte y conexión ayuda a asegurar la entrega consistente de reportes de posición y eventos desde el rastreador hasta Plaspy. El Mayak 4.5 soporta el reporte por intervalos GPRS como su modo principal de transporte hacia servidor y SMS para alertas directas y consultas remotas.

- El dispositivo puede configurarse para enviar paquetes GPRS a d.plaspy.com o a 54.85.159.138.
- El transporte puede ser UDP o TCP en el puerto 8888 según la configuración del equipo y el comportamiento de la red.
- Todos los dispositivos en Plaspy usan el mismo puerto, 8888, lo que reduce la variación de configuración en flotas mixtas.
- El reporte por SMS es una alternativa disponible para notificaciones inmediatas o donde GPRS no está disponible; los SMS usan números autorizados en lugar del servidor de Plaspy.
- Asegúrese de que el APN y la conectividad de la SIM estén correctamente configurados en el dispositivo para que los paquetes GPRS por intervalo puedan llegar al endpoint de Plaspy.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar qué campos de mensaje están presentes y con qué frecuencia el dispositivo reporta en modo intervalo; verifique los detalles del firmware antes de un despliegue amplio.
- Las revisiones de hardware o variantes regionales pueden afectar las bandas soportadas y el comportamiento GPRS; confirme la revisión exacta del modelo al solucionar problemas de conectividad.
- La selección del transporte (UDP vs TCP) puede influir en la fiabilidad y el consumo de batería; elija el transporte que soporte la unidad y que sea adecuado para las condiciones de red.
- SMS sigue siendo un recurso útil de respaldo para alertas y consultas remotas pero emplea una ruta diferente a la del reporte GPRS hacia el servidor Plaspy.
- Los menús de configuración del fabricante y los comandos SMS para ajustes de servidor y números autorizados pueden variar entre versiones de firmware.
- Siempre valide la configuración del dispositivo —APN, dirección de servidor, puerto y números autorizados— con la documentación más reciente del fabricante.

## Por qué es importante comprender el protocolo

Tener claridad sobre cómo se comunica el Mayak 4.5 facilita la configuración inicial, mejora la fiabilidad continua y agiliza la resolución de problemas al integrar el equipo con Plaspy. Conocer las limitaciones del reporte por intervalos GPRS frente a SMS, y cómo se reportan los eventos, reduce el tiempo de integración y optimiza los resultados operativos.

- Asegura la dirección de servidor y los ajustes de transporte correctos para que los paquetes lleguen a Plaspy de forma confiable.
- Ayuda a optimizar los intervalos de reporte y la sensibilidad de movimiento para equilibrar vida de batería y frecuencia de actualizaciones.
- Facilita el diagnóstico de reportes perdidos, mensajes duplicados o indicadores de eventos inesperados al correlacionar el comportamiento del equipo con las condiciones de red.
- Permite manejar correctamente las rutas de respaldo como SMS cuando GPRS no está disponible.
- Reduce el tiempo de resolución de incidencias de campo al centrar la atención en firmware, APN y configuración de transporte como factores probables.

## Por qué usar Plaspy con este protocolo

Usar el AutoFon Маяк 4.5 con Plaspy permite a las organizaciones combinar la larga autonomía y la discreción del dispositivo con las capacidades centralizadas de rastreo, alertas e informes de Plaspy. Plaspy convierte los paquetes GPRS por intervalo y las alertas SMS entrantes en marcadores en el mapa, notificaciones de eventos y trazas de historial, lo que resulta útil para aplicaciones como recuperación de activos, monitoreo discreto de vehículos y rastreo de activos de bajo mantenimiento.

Si desea aprender más sobre Plaspy y cómo maneja los datos de los rastreadores, visite https://www.plaspy.com. Para los detalles más recientes sobre el protocolo específico del dispositivo, notas de firmware y comandos de configuración del AutoFon Маяк 4.5, por favor verifique la información en el sitio del fabricante https://www.autofon.ru/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
