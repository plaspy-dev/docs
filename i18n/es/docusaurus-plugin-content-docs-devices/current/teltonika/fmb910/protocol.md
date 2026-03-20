---
slug: /teltonika/fmb910/protocol
id: fmb910-protocol
sidebar_label: Protocol
title: Teltonika - FMB910 Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo para usar el rastreador Teltonika FMB910 con Plaspy, con ajustes de conexión y notas de compatibilidad
keywords:
  - Protocolo Teltonika FMB910
  - Teltonika FMB910 GPS
  - Compatibilidad FMB910 Plaspy
  - Protocolo GPS Teltonika
  - Protocolo de comunicación FMB910
  - Rastreo vehicular Teltonika
  - Rastreo de flotas FMB910
  - Integración GPS Plaspy
  - Rastreo sensores BLE FMB910
  - Detección acelerómetro FMB910
---

# Teltonika - FMB910 Protocolo

Esta página documenta el contexto del protocolo público para usar el rastreador Teltonika FMB910 con Plaspy. Se concentra en cómo el dispositivo informa posición, eventos y flujos de sensores al endpoint de Plaspy y qué verificar al preparar un FMB910 para su integración. El contenido aquí está pensado como referencia para integración y resolución de problemas, no como un manual técnico detallado del fabricante.

Plaspy utiliza configuraciones de conexión compartidas entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando un equipo correctamente configurado reporta a la plataforma. El comportamiento exacto en el dispositivo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante; valide los detalles específicos del equipo con la documentación oficial de Teltonika según sea necesario.

## Resumen del protocolo

El FMB910 comunica telemetría y datos de eventos desde el vehículo hacia un servidor remoto para que Plaspy pueda ingerir ubicación, cambios de estado de E/S, eventos del acelerómetro y entradas de sensores BLE. El protocolo del rastreador define cómo el dispositivo establece una sesión, se identifica y envía mensajes periódicos o por eventos que las plataformas de gestión de flotas como Plaspy pueden procesar.

- Permite que el FMB910 reporte posición GPS, eventos del acelerómetro y el estado de entradas/salidas (I/O) a Plaspy para monitoreo en tiempo real.
- Transporta datos de sensores BLE y beacons cuando el dispositivo está configurado para reenviar lecturas externas.
- Provee los medios para que el rastreador identifique el dispositivo e incluya metadatos clave que Plaspy usa para asociar los mensajes con el activo correcto.
- Admite tanto reportes periódicos de posición como mensajes impulsados por eventos, como detección de choque, cambios de ignición y alertas por manipulación.
- Permite flujos de configuración remota (por ejemplo, mediante Teltonika FOTA WEB) para actualizar comportamientos que afectan la comunicación con Plaspy.

## Cómo Plaspy detecta el protocolo

Plaspy recibe conexiones de rastreadores en un único endpoint de red compartido y determina automáticamente el protocolo del dispositivo entrante, por lo que usted rara vez necesita seleccionar un protocolo manualmente. Cuando un FMB910 está configurado para reportar a Plaspy, la plataforma reconoce los mensajes del equipo y los asocia con el registro de activo correspondiente.

- Plaspy escucha en el dominio d.plaspy.com y en la IP pública 54.85.159.138 para conexiones entrantes de dispositivos.
- La plataforma usa un único puerto para todos los dispositivos compatibles, lo que simplifica la configuración y el reporte.
- Plaspy detecta automáticamente el protocolo del rastreador a partir de los mensajes entrantes, por lo que la selección manual de protocolo dentro de Plaspy suele ser innecesaria.
- Asegúrese de que el FMB910 esté configurado para reportar al endpoint de Plaspy y que use el transporte soportado (UDP o TCP) para que la detección sea fiable.
- Si un dispositivo no parece registrarse, verifique la configuración de reporte del dispositivo, la accesibilidad de red hacia d.plaspy.com y que el rastreador tenga conectividad celular.

## Transporte y contexto de conexión

Las opciones de conexión en el FMB910 determinan si los mensajes usan transporte UDP o TCP para llegar a Plaspy, y usted puede configurar el dispositivo para apuntar al dominio de Plaspy o a su dirección IP directa. Plaspy acepta ambos transportes en el mismo puerto bien conocido, lo que facilita la configuración en entornos de flotas diversos.

- El FMB910 puede configurarse para usar UDP o TCP en el puerto 8888 según la configuración y las necesidades operativas.
- Los dispositivos pueden apuntar al servidor de Plaspy mediante el dominio d.plaspy.com o la IP del servidor 54.85.159.138.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que reduce la complejidad al desplegar múltiples modelos de rastreadores.
- La selección del transporte (UDP frente a TCP) puede afectar las características de entrega de mensajes y debe elegirse en función de la cobertura y el comportamiento de la red.
- Verifique que el APN y la conectividad celular del rastreador permitan conexiones salientes al endpoint de Plaspy y al puerto 8888.

## Notas sobre compatibilidad del protocolo

- La revisión de firmware puede cambiar el contenido de los mensajes, los eventos disponibles y el comportamiento del dispositivo; siempre compruebe la versión de firmware del FMB910 al diagnosticar problemas de compatibilidad.
- Las revisiones de hardware y las variantes regionales del producto pueden afectar la disponibilidad de funciones, como el rendimiento BLE o las señales de E/S compatibles.
- Las herramientas de configuración del fabricante y los servicios de actualización remota (por ejemplo Teltonika FOTA WEB) pueden alterar el comportamiento de reporte del dispositivo y deben coordinarse con los planes de integración de Plaspy.
- Las diferencias de transporte importan; confirme si un dispositivo está configurado en UDP o TCP y pruebe la conectividad con el endpoint de Plaspy en el puerto 8888.
- Las condiciones de red y la cobertura celular regional para 2G pueden limitar la entrega de datos en algunas ubicaciones; valide que el servicio 2G esté disponible donde operará el dispositivo.
- Siempre valide los puntos críticos de integración contra la documentación oficial de Teltonika para notas específicas del modelo y el estado de ciclo de vida.

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación del FMB910 y su contexto de conexión ayuda a garantizar una incorporación fiable del dispositivo, una ingestión precisa de telemetría y una resolución de problemas eficiente cuando los equipos se comportan de forma inesperada en Plaspy. Tener expectativas claras sobre lo que el dispositivo reporta y cómo se conecta reduce la fricción en el despliegue y mantiene la telemetría operacional confiable.

- Ayuda a confirmar ajustes correctos de servidor y transporte para que los dispositivos reporten a Plaspy sin necesidad de seleccionar manualmente el protocolo.
- Acelera la resolución de problemas al centrar la investigación en el transporte, la versión de firmware o desajustes de configuración.
- Garantiza que tipos de evento como alertas del acelerómetro y cambios de E/S se mapeen correctamente a las reglas y flujos de Plaspy.
- Informa decisiones sobre configuración remota, actualizaciones de firmware y planificación del ciclo de vida del hardware desplegado.
- Reduce el tiempo de inactividad al facilitar la verificación de accesibilidad a d.plaspy.com y al puerto 8888 durante las comprobaciones de soporte.

## Por qué usar Plaspy con este protocolo

Usar el Teltonika FMB910 con Plaspy ofrece una vía práctica y rentable para el seguimiento de posición en tiempo real, monitoreo de eventos y flujos básicos de control remoto para flotas pequeñas y medianas que operan donde hay cobertura 2G. Plaspy ingiere la ubicación, datos del acelerómetro, E/S y sensores BLE del FMB910 y expone esos flujos como vistas de mapa en vivo, alertas, informes históricos y desencadenadores de automatización para apoyar la prevención de robo, recuperación y supervisión operativa.

Para conocer más sobre cómo trabaja Plaspy con dispositivos como el FMB910 y revisar las capacidades de la plataforma, visite https://www.plaspy.com. Para los detalles más actuales del protocolo del dispositivo, notas de firmware y estado de ciclo de vida, verifique la información en el sitio del fabricante https://www.teltonika-gps.com/ ya que el comportamiento del equipo y las implementaciones del protocolo pueden cambiar con el tiempo.
