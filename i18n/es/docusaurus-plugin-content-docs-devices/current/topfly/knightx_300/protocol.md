---
slug: /topfly/knightx_300/protocol
id: knightx_300-protocol
sidebar_label: Protocol
title: TopFly - KnightX 300 Protocol
sidebar_class_name: menu_item_tracker
description: Notas públicas sobre el protocolo para integrar el TopFly KnightX 300 con Plaspy, incluyendo conexión y compatibilidad
keywords:
  - protocolo TopFly KnightX 300
  - protocolo GPS TopFly KnightX 300
  - protocolo TopFly KnightX 300 Plaspy
  - protocolo de seguimiento KnightX 300
  - protocolo rastreador de activos TopFly
  - compatibilidad de dispositivos Plaspy
  - protocolo de comunicación KnightX 300
  - compatibilidad rastreador GPS TopFly
  - integración de rastreadores Plaspy
  - protocolo seguimiento cadena de frío
---

# TopFly - KnightX 300 Protocolo

Esta página describe el contexto público del protocolo para usar el TopFly KnightX 300 con Plaspy. Resume cómo el dispositivo suele comunicarse con Plaspy, los puntos de conexión que utiliza Plaspy y consideraciones prácticas de compatibilidad, manteniéndose a un nivel general y seguro para el público.

El KnightX 300 es un rastreador de activos compacto y recargable con LTE Cat M1 y fallback a NB‑IoT, GNSS múltiple, soporte BLE para sensores y registro en búfer. Plaspy usa ajustes de conexión compartidos entre dispositivos compatibles y detecta automáticamente el protocolo del rastreador, pero el comportamiento exacto puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante. Revise la documentación del fabricante para conocer el comportamiento específico del dispositivo y del firmware antes del despliegue.

## Resumen del protocolo

A grandes rasgos, el protocolo de comunicación del KnightX 300 regula cómo el rastreador se identifica, reporta ubicación y telemetría, y transmite eventos de sensores y alarmas a un backend como Plaspy. El protocolo permite entrega fiable, almacenamiento en búfer fuera de línea y subida posterior, además de integrar datos de sensores BLE junto con posiciones GNSS.

- Permite informes periódicos y por eventos de ubicación y entrega de telemetría a Plaspy.
- Transporta telemetría ambiental como temperatura interna, lecturas opcionales de sondas externas y valores de sensores BLE.
- Soporta almacenamiento en búfer cuando está fuera de línea y subida de registros históricos al volver la conectividad para preservar la continuidad de eventos.
- Permite la transmisión de eventos de pánico y alarmas para flujos de trabajo de antirrobo y emergencias.
- Se integra con la ingestión de Plaspy para que los flujos de posición y sensores se muestren en paneles y reglas de alerta.

## Cómo detecta Plaspy el protocolo

Plaspy recibe conexiones de dispositivos en un endpoint y puerto compartidos y aplica detección automática de protocolo para emparejar los reportes entrantes con un parser compatible. En la mayoría de los casos, los usuarios no necesitan seleccionar un protocolo dentro de Plaspy siempre que el KnightX 300 esté configurado para reportar al endpoint de Plaspy.

- El dominio del servidor Plaspy para el reporte de dispositivos es d.plaspy.com.
- La IP del servidor Plaspy para el reporte de dispositivos es 54.85.159.138.
- El puerto usado por Plaspy para conexiones de dispositivos es 8888 y todos los dispositivos en Plaspy usan el mismo puerto.
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que normalmente no se requiere selección manual si el dispositivo apunta al endpoint de Plaspy.
- Asegúrese de que el dispositivo esté configurado para reportar a d.plaspy.com o a 54.85.159.138 usando el transporte y puerto correctos para permitir la detección automática.

## Transporte y contexto de conexión

El KnightX 300 soporta múltiples opciones de transporte y puede configurarse para usar la que mejor se adapte al despliegue. Plaspy acepta la conexión del dispositivo en el puerto compartido, por lo que la tarea principal de configuración es garantizar que el rastreador reporte al endpoint de Plaspy y utilice un transporte compatible.

- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 según el soporte del equipo y las preferencias de red.
- Los dispositivos pueden apuntar al endpoint de reporte de Plaspy mediante el dominio d.plaspy.com o directamente a la IP 54.85.159.138.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la configuración en el lado del dispositivo.
- El rastreador también soporta otras opciones de transporte documentadas por el fabricante, como MQTT o SMS cuando corresponda, pero TCP o UDP hacia el endpoint de Plaspy son los transportes típicos para la ingestión directa.
- Verifique la selección de transporte y la compatibilidad con la red del operador para LTE Cat M1, NB‑IoT o caídas GSM según su región.

## Notas de compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar el ritmo de envío de mensajes, campos opcionales y transportes soportados; confirme el comportamiento del firmware para sus unidades.
- Diferentes revisiones de hardware o SKUs regionales pueden habilitar o deshabilitar bandas de radio, transportes o sensores específicos.
- Los valores de configuración por defecto del fabricante pueden no apuntar a Plaspy desde el primer momento; establezca el host de reporte en d.plaspy.com o 54.85.159.138 y el puerto 8888.
- El comportamiento y los modos de emparejamiento de sensores BLE pueden variar según el firmware; valide el reporte de sensores BLE en un despliegue de prueba.
- La elección entre UDP y TCP afecta las características de entrega y debe alinearse con sus objetivos de confiabilidad y vida de batería.
- Consulte la documentación oficial de TopFly para matrices de firmware y funciones antes de realizar despliegues a gran escala.

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación del KnightX 300 y el contexto de conexión ayuda a asegurar la configuración correcta del dispositivo, flujos de datos fiables hacia Plaspy y una resolución más rápida de problemas cuando faltan reportes o la telemetría parece inconsistente. Saber cómo se espera que el dispositivo se conecte y qué reporta reduce fricciones en el despliegue y favorece la confiabilidad a largo plazo.

- Confirma que el dispositivo está apuntando a d.plaspy.com o 54.85.159.138 y usando el puerto 8888 para que Plaspy pueda ingerir los datos.
- Facilita la resolución de problemas por reportes perdidos al revisar la elección de transporte y el comportamiento del firmware.
- Ayuda a optimizar los intervalos de reporte y la selección de transporte para balancear vida de batería y cobertura.
- Aclara cómo aparecen los registros almacenados en búfer y las subidas fuera de línea en Plaspy cuando la conectividad es intermitente.
- Garantiza que los sensores BLE y las sondas externas opcionales estén habilitados y emparejados al dispositivo para obtener telemetría completa.

## Por qué usar Plaspy con este protocolo

Usar el KnightX 300 con Plaspy ofrece una forma directa de centralizar posiciones GNSS, telemetría ambiental, eventos de pánico y lecturas de sensores BLE en una vista única para gestión de flotas y activos. Plaspy consolida los flujos del rastreador, aplica detección automática de protocolo y presenta datos de ubicación y sensores en paneles y flujos de alertas que apoyan la visibilidad operativa y la respuesta a incidentes.

Plaspy usa el mismo puerto para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el dispositivo reporta al endpoint de Plaspy, lo que simplifica la configuración y el onboarding de dispositivos. Para saber más sobre Plaspy y cómo gestiona la ingestión de dispositivos y los flujos de trabajo de flota visite https://www.plaspy.com. Para detalles específicos de dispositivos y firmware verifique la información con el fabricante en https://www.topflytech.com/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
