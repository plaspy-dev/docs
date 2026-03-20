---
slug: /queclink/gv55/protocol
id: gv55-protocol
sidebar_label: Protocol
title: QuecLink - GV55 Protocol
sidebar_class_name: menu_item_tracker
description: Protocolo público para integrar el rastreador QuecLink GV55 con Plaspy, telemetría y reportes de eventos confiables
keywords:
  - queclink gv55
  - protocolo queclink gv55
  - rastreador gps gv55
  - protocolo de comunicación gv55
  - protocolo de rastreo gv55
  - protocolo de rastreador queclink
  - compatibilidad gv55 plaspy
  - rastreo de flotas gv55
  - telemática queclink
  - telemetría de eventos gv55
---

# QuecLink - GV55 Protocolo

Esta página describe el contexto público del protocolo para usar el rastreador GPS vehicular compacto QuecLink GV55 con Plaspy. Resume cómo el GV55 informa posición y telemetría de eventos a Plaspy y qué aspectos de la comunicación del dispositivo son relevantes para la integración, sin exponer detalles privados de implementación. El GV55 incorpora un receptor GNSS u-blox interno, conectividad GSM GPRS integrada, entradas de ignición y alarma, almacenamiento en búfer de mensajes y múltiples opciones de transporte que lo hacen adecuado para despliegues con Plaspy.

Plaspy acepta datos del GV55 mediante ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los dispositivos configurados para reportar al endpoint de Plaspy pueden usar d.plaspy.com o 54.85.159.138 y comunicarse por el puerto 8888. El GV55 puede configurarse para usar UDP o TCP en el puerto 8888 para el reporte por IP, y Plaspy emplea ese mismo puerto para todos los dispositivos compatibles mientras reconoce automáticamente el protocolo del equipo. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esos factores pueden afectar cómo se entregan y se interpretan los mensajes.

## Resumen del protocolo

El protocolo del GV55 es el conjunto de comportamientos de comunicación que el dispositivo utiliza para identificarse y enviar datos GNSS, eventos y alarmas a un servidor como Plaspy. En términos prácticos, el protocolo determina qué telemetría reporta el rastreador, con qué frecuencia lo hace y qué eventos se incluyen en esos mensajes. Para la integración con Plaspy, el objetivo principal del protocolo es aportar datos de posición y estado útiles para que Plaspy pueda mostrar la ubicación en vivo, activar alertas y almacenar registros históricos.

- Transmite coordenadas GNSS, marcas de tiempo y datos de movimiento desde el receptor u-blox para vistas de ubicación en tiempo real e históricas.
- Reporta entradas y salidas digitales como estado de ignición, eventos del botón de pánico y controles de inmovilizador para flujos de trabajo basados en eventos.
- Envía estados de alarma y eventos que incluyen detección de choque o conducción brusca, disparos de geocerca, remolque y alarmas de velocidad para notificaciones inmediatas.
- Soporta almacenamiento en búfer dentro del dispositivo para preservar la telemetría durante pérdidas temporales de red y luego reenviar los mensajes almacenados a Plaspy.
- Ofrece opciones de transporte flexibles que determinan cómo esos mensajes llegan al endpoint de Plaspy para su análisis y visualización.

## Detección del protocolo por Plaspy

Plaspy acepta conexiones entrantes en un endpoint y puerto compartidos y aplica detección automática para identificar el protocolo del rastreador que se está usando. Cuando un GV55 está configurado para reportar a Plaspy, la plataforma escucha en el mismo puerto de red para todos los dispositivos y reconoce el formato de reporte, por lo que por lo general no se requiere seleccionar manualmente el protocolo dentro de la plataforma.

- Plaspy utiliza el endpoint público d.plaspy.com y la IP de servidor 54.85.159.138 para el reporte de dispositivos.
- Todos los equipos usan el mismo puerto de red para las integraciones con Plaspy, que es el puerto 8888.
- El GV55 puede configurarse para usar UDP o TCP en el puerto 8888 para comunicarse con Plaspy según la configuración del dispositivo y las condiciones de la red.
- Cuando un GV55 configurado correctamente se conecta a Plaspy, la plataforma detecta automáticamente el protocolo del rastreador y asocia la telemetría entrante con el dispositivo correspondiente.
- Usted generalmente solo necesita configurar el dispositivo para que reporte al endpoint de Plaspy de la forma adecuada para su modelo y firmware para que empiece a enviar datos.

## Transporte y contexto de conexión

El contexto de conexión cubre cómo el GV55 alcanza los servidores de Plaspy y qué transportes se usan comúnmente. Para el reporte por IP a Plaspy, las unidades GV55 pueden apuntar a un host con nombre o a una dirección numérica y usar sockets UDP o TCP en el puerto compartido de Plaspy. SMS sigue siendo una alternativa de transporte para algunos despliegues, pero el endpoint IP de Plaspy es la vía estándar para datos de rastreo en tiempo real.

- Los dispositivos pueden configurarse para reportar al dominio d.plaspy.com o al host numérico 54.85.159.138.
- El puerto de escucha de Plaspy para todos los dispositivos es el puerto 8888 y se usa de forma consistente entre los rastreadores compatibles.
- Las unidades GV55 suelen soportar tanto UDP como TCP para el reporte por IP a Plaspy en el puerto 8888.
- SMS puede usarse como transporte secundario para ubicaciones o alarmas dependiendo de la configuración del dispositivo y del plan de servicio.
- Consideraciones de red como el comportamiento del operador móvil, ajustes de APN y reglas de firewall pueden afectar si UDP o TCP funciona mejor en una instalación determinada.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware y software del GV55 pueden cambiar qué eventos se reportan o cómo se codifican ciertas funciones en los mensajes.
- Las revisiones de hardware o SKUs regionales pueden tener mapeos de E/S diferentes o entradas de alarma disponibles que afectan la compatibilidad.
- La elección entre UDP y TCP influirá en las características de entrega y debe corresponder con la configuración del dispositivo y el entorno de red.
- Plaspy detecta automáticamente el formato del protocolo, pero la configuración de reporte en el dispositivo debe apuntar al endpoint de Plaspy para una detección sin fricciones.
- El transporte por SMS puede requerir una configuración separada y resulta útil cuando la conectividad IP no está disponible.
- Siempre valide la compatibilidad y las configuraciones recomendadas para una versión de firmware específica del GV55 con la documentación del fabricante.

## Por qué es importante comprender el protocolo

Comprender el protocolo del rastreador ayuda a garantizar un despliegue fluido y un funcionamiento confiable con Plaspy. Saber qué envía el GV55 y cómo se conecta a Plaspy facilita la configuración de intervalos de reporte, comportamiento de alarmas y búferes para que los datos lleguen cuando más se necesitan.

- Una configuración adecuada garantiza que los eventos de ignición, inmovilizador y alarmas se incluyan en los reportes enviados a Plaspy.
- Conocer el almacenamiento en búfer y el reporte programado ayuda a evitar lagunas de datos durante cortes temporales de la red.
- Elegir la opción de transporte apropiada mejora la fiabilidad de entrega en la red móvil objetivo.
- Comprender las diferencias de firmware reduce el tiempo de resolución cuando aparece un comportamiento de telemetría inesperado.
- Validar la configuración del dispositivo hacia el servidor evita problemas comunes relacionados con APN, host de reporte y puerto.

## Por qué usar Plaspy con este protocolo

Usar el GV55 con Plaspy brinda a las organizaciones acceso a ubicación en tiempo real, alertas basadas en eventos y telemetría histórica que apoyan operaciones de flota, recuperación por robo y programas basados en uso. El GV55 suministra las entradas principales que muchas flotas necesitan, mientras que Plaspy consume esos datos para ofrecer paneles, notificaciones e informes para la toma de decisiones operativas.

Si desea obtener más información sobre Plaspy y cómo funciona con una amplia gama de rastreadores, incluido el GV55, visite https://www.plaspy.com. Para detalles específicos de protocolo del dispositivo, notas de firmware y orientación del fabricante más actualizada, verifique la información en el sitio oficial de QuecLink en https://www.queclink.com/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
