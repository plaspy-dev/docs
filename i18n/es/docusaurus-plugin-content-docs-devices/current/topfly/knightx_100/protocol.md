---
slug: /topfly/knightx_100/protocol
id: knightx_100-protocol
sidebar_label: Protocol
title: TopFly - KnightX 100 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo TopFly KnightX 100 y cómo se comunica con Plaspy para seguimiento y telemetría
keywords:
  - protocolo TopFly KnightX 100
  - protocolo GPS TopFly KnightX 100
  - protocolo de comunicación KnightX 100
  - compatibilidad KnightX 100 con Plaspy
  - protocolo rastreador GPS TopFly
  - protocolo de rastreo KnightX 100
  - protocolo de rastreadores Plaspy
  - rastreo de vehículos KnightX 100
  - rastreo de activos KnightX 100
  - sensor BLE KnightX 100
---

# TopFly - Protocolo KnightX 100

Esta página presenta una visión pública del protocolo para usar el rastreador TopFly KnightX 100 con Plaspy. Explica, en términos generales, cómo el dispositivo se comunica con Plaspy y qué esperar durante la configuración y la operación. El enfoque está en el contexto de conexión, el papel del protocolo y consideraciones prácticas de compatibilidad, no en detalles privados del proveedor ni en internas de firmware.

El KnightX 100 es compatible con Plaspy de fábrica y combina larga duración de batería, posicionamiento híbrido, soporte para sensores BLE y almacenamiento en búfer para ofrecer seguimiento y telemetría confiables. Plaspy emplea ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, aunque el comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante. Para comandos específicos del dispositivo y notas de firmware, consulte la documentación oficial del fabricante.

## Visión general del protocolo

El protocolo del dispositivo define cómo el KnightX 100 informa posición, telemetría de sensores y eventos a un servidor para que Plaspy pueda procesar y mostrar información útil. Cubre identificación, reportes periódicos, eventos de emergencia y cómo se suben los datos almacenados en búfer cuando vuelve la conectividad.

- Permite que el rastreador se identifique y asocie los reportes con un registro de dispositivo en Plaspy.
- Envía posiciones, lecturas de sensores BLE y banderas de eventos que Plaspy usa para alertas e informes.
- Soporta almacenamiento en búfer y reanudación de carga para preservar posiciones históricas cuando hay falta de cobertura.
- Transporta telemetría que ayuda a Plaspy a aplicar reglas de geocercas, enrutamiento de alarmas e informes.
- Funciona sobre los métodos de transporte comunes soportados por el KnightX 100 para que el dispositivo sea flexible en distintos escenarios de despliegue.

## Cómo Plaspy detecta el protocolo

Plaspy recibe tráfico entrante de los dispositivos en un endpoint y puerto compartidos y detecta automáticamente el protocolo del rastreador. Cuando el KnightX 100 se configura para reportar a Plaspy, la plataforma normalmente identifica el protocolo sin que el usuario tenga que seleccionarlo manualmente.

- Plaspy usa un único endpoint y puerto compartidos para todos los rastreadores soportados para simplificar la configuración.
- El dominio común del servidor Plaspy es d.plaspy.com, al que los dispositivos pueden apuntar para reportes.
- Plaspy también es accesible en la IP pública 54.85.159.138 para casos donde no se utilice resolución DNS.
- La plataforma detecta automáticamente el protocolo del rastreador una vez que el dispositivo comienza a enviar datos al endpoint de Plaspy.
- En la mayoría de los casos, los usuarios no necesitan seleccionar un protocolo dentro de Plaspy si el dispositivo está correctamente configurado para reportar al endpoint de Plaspy.

## Transporte y contexto de conexión

El KnightX 100 soporta múltiples opciones de transporte y puede configurarse para usar UDP o TCP al reportar a Plaspy, según la configuración del dispositivo y las condiciones de la red. Plaspy recibe datos de rastreadores en un único puerto compartido entre todos los dispositivos para facilitar los despliegues.

- Los dispositivos pueden configurarse para enviar datos a d.plaspy.com o directamente a 54.85.159.138.
- El puerto de escucha de Plaspy para todos los dispositivos es 8888, y el KnightX 100 puede usar UDP o TCP en ese mismo puerto.
- El modelo de puerto compartido hace que todos los dispositivos compatibles utilicen el mismo puerto de Plaspy, reduciendo la complejidad de configuración.
- La elección entre UDP y TCP puede depender de la fiabilidad de la red y de las opciones del firmware del dispositivo.
- Verifique que la configuración del dispositivo cumpla con las políticas del operador y la red para el transporte elegido.

## Notas de compatibilidad del protocolo

- Las versiones de firmware pueden cambiar los formatos de telemetría, los intervalos de reporte y campos opcionales; verifique el comportamiento tras actualizaciones de firmware.
- Las revisiones de hardware o variantes celulares regionales pueden exponer distintos valores por defecto de transporte o reporte.
- Las herramientas de configuración del fabricante y los ajustes a nivel de SIM pueden afectar si el dispositivo usa TCP, UDP, MQTT o SMS para la entrega.
- El comportamiento de subida en búfer puede variar según el firmware y afectar cómo aparecen las posiciones históricas en Plaspy tras brechas de cobertura.
- La selección de transporte y los ajustes de APN deben validarse durante el despliegue inicial para asegurar que los datos lleguen al endpoint de Plaspy.
- Siempre compare la configuración del equipo con la documentación del fabricante para confirmar los tipos de paquetes esperados y las funciones disponibles.

## Por qué es importante entender el protocolo

Conocer cómo se comunica el KnightX 100 agiliza la configuración y la resolución de problemas, y ayuda a mantener un seguimiento confiable a lo largo del tiempo. Entender de forma práctica las opciones de protocolo y transporte reduce la fricción en los despliegues y respalda la calidad consistente de los datos en Plaspy.

- Facilita confirmar que el dispositivo está reportando al endpoint y puerto correctos de Plaspy.
- Ayuda a interpretar la telemetría y la sincronización de eventos al revisar registros en Plaspy.
- Reduce errores de configuración relacionados con APN, selección de transporte y direccionamiento de servidor.
- Contribuye a diagnosticar faltas de datos revisando el comportamiento de subida en búfer y cobertura.
- Apoya la planificación de actualizaciones de firmware y las pruebas después de cambios en la configuración.

## Por qué usar Plaspy con este protocolo

Usar el KnightX 100 con Plaspy ofrece a las organizaciones una forma directa de convertir la telemetría del dispositivo en información operativa. El posicionamiento híbrido del KnightX 100, el soporte para sensores BLE, la larga duración de batería y el almacenamiento en búfer se complementan con la detección automática de protocolos y la ingestión centralizada de Plaspy para brindar monitoreo en tiempo real confiable, alarmas y reportes históricos.

Si desea saber más sobre cómo Plaspy gestiona la conectividad de dispositivos y explorar las funciones de la plataforma, visite https://www.plaspy.com. Para detalles específicos de protocolo por dispositivo, notas de firmware y variantes regionales, verifique la información con el fabricante en https://www.topflytech.com/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
