---
slug: /gosafe/gtu50/protocol
id: gtu50-protocol
sidebar_label: Protocol
title: Gosafe - GTU50 Protocol
sidebar_class_name: menu_item_tracker
description: Contexto público del protocolo para usar el Gosafe GTU50 con Plaspy, incluyendo ajustes de conexión y guía de compatibilidad
keywords:
  - Protocolo Gosafe GTU50
  - Protocolo GPS Gosafe GTU50
  - Protocolo de rastreo GTU50
  - Compatibilidad rastreador Gosafe Plaspy
  - Protocolo de comunicación GTU50
  - Protocolo rastreador GPS Plaspy
  - Rastreo vehicular GTU50
  - Compatibilidad firmware GTU50
  - Rastreo de flotas Gosafe GTU50
  - Protocolo de telemetría GTU50
---

# Gosafe - Protocolo GTU50

Esta página describe el contexto público del protocolo para utilizar el rastreador Gosafe GTU50 con Plaspy. Se centra en cómo el dispositivo se comunica con la plataforma Plaspy y qué aspectos considerar al configurar el equipo para seguimiento en tiempo real, reporte de eventos e ingestión de telemetría. El contenido está pensado para ayudar a integradores, gerentes de flota y equipos técnicos a entender el contexto de conexión sin exponer detalles internos del dispositivo ni formatos de paquete propietarios.

El GTU50 es un rastreador compacto 4G CAT 1 con retroceso a 2G, GNSS múltiple, registro de choques, detección de ignición, entrada SOS y una salida de relé para inmovilización. Plaspy utiliza ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el dispositivo reporta al endpoint de Plaspy. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante; por ello, verifique siempre los detalles específicos del dispositivo con el fabricante si necesita garantías a nivel de firmware.

## Visión general del protocolo

El protocolo de reporte del GTU50 regula cómo los datos de posición, sensores y eventos se envían desde el dispositivo a un servidor y cómo se coordinan los comandos de control o funciones remotas. Para la integración con Plaspy, este protocolo permite que el rastreador se identifique, reporte datos GNSS y del acelerómetro, y exponga entradas como ignición y SOS para su uso en paneles y alertas.

- Transporta telemetría básica como ubicación, hora, velocidad y marcadores de evento que Plaspy normaliza para visualización e informes.
- Transmite resúmenes del acelerómetro y de eventos de choque que Plaspy puede utilizar para detección y análisis de incidentes.
- Comunica estados de entradas digitales como ignición y SOS para que Plaspy active workflows de geovallas, alertas y procedimientos de inmovilización.
- Permite al dispositivo reportar registros almacenados cuando la conectividad se restablece, de modo que los datos históricos se preserven.
- Soporta interacciones de control remoto coordinadas por Plaspy cuando el dispositivo y la configuración permiten la entrega de comandos.

## Cómo Plaspy detecta el protocolo

Plaspy recibe conexiones entrantes en un endpoint compartido y utiliza esa conexión para determinar automáticamente el protocolo del dispositivo, por lo que normalmente los usuarios no necesitan seleccionar un protocolo manualmente. La configuración correcta del dispositivo para apuntar al endpoint de Plaspy es el requisito más común para la detección y autorización automática.

- Plaspy escucha el tráfico de dispositivos en d.plaspy.com y también acepta conexiones directas a 54.85.159.138.
- Todos los dispositivos reportan al mismo puerto de escucha; Plaspy utiliza el puerto 8888 para los rastreadores soportados.
- Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888, según la capacidad del equipo y los requerimientos de la red.
- Cuando un GTU50 está correctamente apuntado al endpoint de Plaspy, la plataforma identificará el formato de reporte y comenzará a normalizar la telemetría entrante.
- La detección automática elimina la necesidad de asignar manualmente un protocolo en muchos despliegues estándar, simplificando la puesta en marcha.

## Transporte y contexto de conexión

El transporte de la conexión y la configuración del endpoint son fundamentales para el reporte exitoso a Plaspy. El GTU50 soporta conectividad celular moderna con fallback y puede configurarse para reportar a través de protocolos de transporte comunes hacia el endpoint de Plaspy.

- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 al reportar a Plaspy.
- Plaspy acepta conexiones dirigidas a d.plaspy.com o a la dirección numérica 54.85.159.138 en el puerto 8888.
- Usar el APN correcto y el host de reporte adecuado en el GTU50 garantiza sesiones confiables para actualizaciones en vivo y subidas de registros en cola.
- El comportamiento de fallback celular y el uso de SMS como canal alternativo son características del fabricante; verifique si su hardware utiliza SMS para reportes de fallback en situaciones específicas.
- Los firewalls de red y las configuraciones de los operadores deben permitir salidas UDP o TCP hacia el puerto 8888 para una conectividad fiable.

## Notas de compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar la cadencia de mensajes, los campos disponibles y las funcionalidades opcionales; consulte las notas de la versión del firmware del GTU50 antes de despliegues masivos.
- Las revisiones de hardware o diferencias regionales en los SKU pueden afectar bandas disponibles, comportamiento de fallback y modos de transporte soportados.
- El comportamiento de comandos y respuestas del fabricante puede variar; las funciones de control remoto basadas en comandos requieren verificación de que la versión del dispositivo admite la entrega de comandos.
- La elección del transporte (UDP frente a TCP) puede influir en la confiabilidad y la semántica de entrega; seleccione el transporte que se ajuste a sus necesidades operativas y a las capacidades del dispositivo.
- Plaspy utiliza el mismo puerto de escucha para todos los dispositivos, por lo que la configuración del equipo debe apuntar al puerto 8888 para ser ingestada automáticamente.
- Siempre valide la compatibilidad contra la documentación más reciente del fabricante y pruebe un dispositivo representativo antes de un despliegue a gran escala.

## Por qué es importante conocer el protocolo

Comprender cómo el GTU50 se comunica con una plataforma en la nube ayuda a reducir la fricción de integración, mejora la eficiencia en la resolución de problemas y favorece un funcionamiento predecible a largo plazo en Plaspy.

- Implementación más rápida al asegurarse de que los dispositivos apunten a d.plaspy.com o 54.85.159.138 con el puerto 8888 y el transporte correcto seleccionado.
- Diagnóstico más ágil de problemas de conectividad al distinguir entre fallos de red, transporte y configuración del dispositivo.
- Mejor planificación de funcionalidades porque usted puede verificar qué elementos de telemetría e entradas están disponibles en una versión de firmware determinada.
- Manejo de incidentes más confiable al confirmar cómo se reportan los registros de choques y los datos fuera de línea después de la reconexión.
- Mejor postura de seguridad mediante la conciencia de los endpoints de conexión y los modos de transporte empleados para la telemetría.

## Por qué usar Plaspy con este protocolo

Combinar el GTU50 con Plaspy ofrece a las organizaciones una forma práctica de unir hardware de rastreo compacto y discreto con una plataforma que normaliza la telemetría, genera alertas y soporta flujos operativos como recuperación de vehículos robados, puntuación UBI e informes de flota. La detección de ignición del GTU50, el registro del acelerómetro y la salida de relé complementan las funciones de alerta y control de Plaspy para ofrecer visibilidad operativa accionable sobre vehículos y activos.

Si desea saber más sobre cómo Plaspy trabaja con dispositivos como el GTU50, visite https://www.plaspy.com. El soporte de protocolos, el comportamiento del firmware y los detalles de implementación del dispositivo pueden cambiar con el tiempo, por lo que le recomendamos verificar la información específica del dispositivo y las notas de firmware más recientes en el sitio del fabricante https://gosafesystem.com/.
