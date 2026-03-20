---
slug: /queclink/gv75mg/protocol
id: gv75mg-protocol
sidebar_label: Protocol
title: QuecLink - GV75MG Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo para integrar el rastreador QuecLink GV75MG con Plaspy usando ajustes compartidos y detección automática
keywords:
  - Protocolo QuecLink GV75MG
  - Protocolo GPS QuecLink GV75MG
  - Compatibilidad GV75MG Plaspy
  - Protocolo de comunicación GV75MG
  - Protocolo de rastreo GV75MG
  - Protocolo rastreador GPS QuecLink
  - Protocolo de dispositivo Plaspy
  - Protocolo rastreador vehicular
  - Protocolo GPS gestión de flotas
  - GV75MG rastreador LTE
---

# QuecLink - Protocolo GV75MG

Esta página describe el contexto público del protocolo para usar el QuecLink GV75MG con Plaspy. Explica a un nivel alto cómo el dispositivo se comunica con Plaspy, cómo la plataforma acepta el tráfico del equipo y cuáles son los ajustes de conexión que se usan habitualmente. El contenido está enfocado en el protocolo y no expone análisis privados ni detalles internos del firmware.

El GV75MG es un rastreador vehicular robusto con clasificación IP67, diseñado para motocicletas, embarcaciones, quads y otros vehículos de exterior. Plaspy emplea los mismos ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, pero el comportamiento en el equipo puede variar según la versión de firmware, la revisión de hardware y la configuración del fabricante. Consulte la documentación del fabricante para detalles específicos del firmware cuando sea necesario.

## Resumen del protocolo

El protocolo del GV75MG define las reglas y los formatos que el dispositivo utiliza para enviar posiciones GNSS, telemetría y eventos de alarma a un servidor remoto como Plaspy. A alto nivel, el protocolo permite la identificación del equipo, la entrega en búfer, el reporte de eventos y señales de control remoto para que Plaspy presente datos de ubicación confiables y active alertas.

- Transporta posiciones GNSS, estados de entradas y salidas digitales y eventos de alarma para que Plaspy pueda procesar telemetría útil.
- Soporta almacenamiento en búfer de mensajes en el dispositivo para preservar paquetes durante cortes de conectividad y entregarlos cuando se restablece el enlace.
- Permite que el dispositivo se identifique para que Plaspy asocie los mensajes entrantes con el registro de activo correcto.
- Habilita acciones de control remoto iniciadas desde la plataforma, como conmutación de salidas cuando existen capacidades coordinadas en el equipo.
- Funciona sobre capas de transporte estándar soportadas por el dispositivo para que los mensajes puedan entregarse de forma fiable a Plaspy.

## Cómo Plaspy detecta el protocolo

Plaspy acepta el tráfico de los dispositivos en un endpoint compartido y determina automáticamente el protocolo del rastreador, por lo que la mayoría de los usuarios no necesita seleccionar un protocolo manualmente. Cuando un GV75MG correctamente configurado reporta a Plaspy, la plataforma asigna los mensajes entrantes al registro de dispositivo adecuado y al flujo de procesamiento correspondiente.

- Plaspy escucha en un endpoint compartido conexiones de dispositivos y usa el tráfico entrante para detectar automáticamente el protocolo del rastreador.
- El endpoint de servidor de Plaspy para reporte de dispositivos es d.plaspy.com y la IP pública para configuración directa es 54.85.159.138 usando el puerto 8888.
- Todos los dispositivos configurados para reportar a Plaspy usan el mismo puerto, lo que simplifica la configuración en el equipo.
- En muchos casos, si un GV75MG está correctamente apuntado al endpoint de Plaspy y el equipo tiene alimentación y está registrado en la red, Plaspy detectará e ingresará sus mensajes sin selección de protocolo por dispositivo.
- Si necesita asistencia, validar que el dispositivo reporte a d.plaspy.com o a 54.85.159.138 en el puerto 8888 es un paso inicial común durante la configuración.

## Transporte y contexto de la conexión

El GV75MG soporta múltiples opciones de transporte y puede configurarse para usar distintos canales según el despliegue y la disponibilidad de red local. Comprender el contexto de transporte ayuda a asegurar la entrega confiable de telemetría a Plaspy.

- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 según los ajustes del equipo y las condiciones de red.
- Los dispositivos pueden apuntar al dominio d.plaspy.com o directamente a la IP del servidor Plaspy 54.85.159.138 al configurar el endpoint de reporte.
- Plaspy utiliza el mismo puerto 8888 para todos los dispositivos soportados, lo que simplifica el aprovisionamiento y las reglas de firewall.
- La elección del transporte puede afectar el comportamiento de entrega durante coberturas intermitentes; algunas implementaciones prefieren TCP por las garantías de entrega, mientras que otras usan UDP por menor sobrecarga.
- El GV75MG también soporta SMS como transporte de respaldo en escenarios donde no hay datos por paquete, aunque el uso y enrutamiento de SMS suelen configurarse por separado de los ajustes principales de reporte TCP o UDP.

## Notas sobre compatibilidad del protocolo

- El GV75MG figura como compatible con Plaspy, pero el comportamiento exacto depende del firmware del dispositivo y de las opciones de configuración aplicadas por el instalador.
- Las revisiones de firmware y las variantes de hardware pueden cambiar los campos de telemetría disponibles, el comportamiento de las alarmas y los intervalos de reporte; valide según la versión de firmware del equipo.
- Las configuraciones del fabricante controlan si el dispositivo reporta por TCP, UDP o SMS y cómo se transmiten los mensajes en búfer cuando se restablece la conectividad.
- El comportamiento del operador de red y las bandas celulares regionales pueden afectar qué modos de transporte son prácticos en un despliegue determinado.
- Las funciones de almacenamiento en búfer y retransmisión ayudan a prevenir pérdida de datos; el GV75MG soporta almacenamiento en búfer en el equipo para cortes temporales.
- Compare siempre el comportamiento observado en campo con la documentación del fabricante para la unidad y la versión de firmware específicas.

## Por qué es importante entender el protocolo

Comprender cómo el GV75MG se comunica con Plaspy facilita una configuración fluida, agiliza la resolución de problemas y contribuye a operaciones más fiables a lo largo del tiempo. Tener claro el flujo de comunicación reduce errores de configuración y permite a los operadores tomar decisiones informadas sobre transporte, intervalos de reporte y manejo de alarmas.

- Le ayuda a verificar que el dispositivo esté correctamente apuntado al endpoint de Plaspy y use el transporte previsto en el puerto 8888.
- Facilita la configuración de firewall y de la red al saber si la unidad usa TCP o UDP para comunicarse con d.plaspy.com o 54.85.159.138.
- Apoya la resolución de problemas cuando los mensajes se retrasan o faltan, enfocándose en transporte y diferencias de firmware más que en ajustes de la plataforma.
- Permite planificar mejor perfiles de batería y energía al configurar intervalos de reporte y modos de reposo para operaciones de larga espera.
- Soporta el mapeo correcto de entradas digitales y alarmas dentro de los flujos de trabajo de Plaspy para que las alertas y automatizaciones sean confiables.

## Por qué usar Plaspy con este protocolo

Usar el GV75MG con Plaspy ofrece a las organizaciones una solución práctica para rastreo resistente y de larga autonomía en entornos exigentes. La combinación de diseño impermeable, alta sensibilidad GNSS, mensajería en búfer y conectividad celular de bajo consumo hace que el GV75MG sea adecuado para motocicletas, embarcaciones y otros activos al aire libre donde la fiabilidad y la operación prolongada sin supervisión son prioritarias. Plaspy ingiere la telemetría del dispositivo y proporciona ubicación en tiempo real, reproducción histórica, alertas y flujos de trabajo que convierten eventos crudos del equipo en información operativa.

Para más información sobre Plaspy visite https://www.plaspy.com. Para los detalles más actuales del protocolo del dispositivo, notas de firmware y documentación específica de modelo, verifique la información con el fabricante en https://www.queclink.com/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
