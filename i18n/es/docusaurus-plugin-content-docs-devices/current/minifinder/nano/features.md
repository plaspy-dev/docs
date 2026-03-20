---
slug: /minifinder/nano/features
id: nano-features
sidebar_label: Features
title: MiniFinder - Nano Features
sidebar_class_name: menu_item_tracker
description: Resumen público de funciones del rastreador MiniFinder Nano y su integración con Plaspy para monitoreo de ubicación y gestión de alarmas
keywords:
  - funciones MiniFinder Nano
  - rastreador GPS MiniFinder Nano
  - MiniFinder Nano Plaspy
  - rastreador GPS portátil
  - rastreador para seguridad personal
  - rastreador GPS con detección de caídas
  - rastreador con botón SOS
  - posicionamiento interior BLE
  - rastreador GPS con eSIM
  - rastreador con voz bidireccional
---

# MiniFinder - Funciones del Nano

Esta página describe el contexto público de capacidades para el uso del MiniFinder Nano con Plaspy. Resume las funciones prácticas del Nano en cuanto a ubicación, alarmas y telemetría, y explica cómo se reflejan esas capacidades cuando el dispositivo está conectado a Plaspy para monitorización centralizada y gestión de eventos.

La disponibilidad exacta de funciones y su comportamiento dependen del firmware del dispositivo, la revisión de hardware, el tipo de instalación y las decisiones de implementación del fabricante. Cuando sea relevante, esta página señala variaciones y recomienda verificar la documentación del fabricante vigente.

## Resumen de funciones

El MiniFinder Nano es un wearable compacto diseñado para la seguridad personal y la localización continua. Al integrarse con Plaspy, el Nano envía actualizaciones de ubicación en tiempo real y eventos de seguridad a una plataforma centralizada para que los equipos puedan monitorear usuarios, enrutar alarmas y revisar telemetría histórica.

- Formato wearable que permite uso en pulsera o colgante para un seguimiento personal discreto.
- Posicionamiento híbrido que combina GNSS en exteriores con Wi Fi y BLE para mejorar la precisión en interiores y cerca de edificaciones.
- Botón SOS dedicado y detección automática de caídas para generar alertas inmediatas a cuidadores o equipos de respuesta.
- Soporte de voz bidireccional para que los respondedores obtengan contexto en directo cuando ocurre una alarma.
- Compatibilidad con beacons y sensores BLE para ampliar el posicionamiento interior y conectar sensores compatibles en escenarios de monitoreo.

## Características principales del MiniFinder Nano

- Reporte de ubicación GPS en formato wearable, adecuado para seguimiento personal continuo y monitoreo de activos de corto alcance.
- Posicionamiento híbrido que usa GNSS junto con Wi Fi y Bluetooth para mejorar la fiabilidad de la localización en entornos mixtos.
- Botón de pánico SOS para activación manual de alarmas y enrutamiento de notificaciones urgentes.
- Detección automática de caídas basada en sensores de movimiento a bordo para activar alertas sin intervención del usuario.
- Capacidad de llamadas bidireccionales para habilitar comunicación directa entre la persona que porta el dispositivo y los respondedores.
- Soporte Bluetooth Low Energy, incluida compatibilidad con beacons, para mejorar el posicionamiento en interiores y conectar sensores periféricos.
- Conectividad celular embebida mediante eSIM para cobertura geográfica amplia y envío de reportes a la nube.
- Modos de bajo consumo y intervalos de reporte configurables para equilibrar la duración de batería y la frecuencia de actualizaciones.

## Cómo se integran estas funciones en Plaspy

Cuando un MiniFinder Nano está configurado para reportar en Plaspy, la telemetría y las alarmas se entregan a la plataforma para visibilidad, procesamiento de reglas y registro histórico. Plaspy detecta automáticamente los protocolos del tracker y acepta conexiones de dispositivos según los métodos estándar de configuración.

- La ubicación en vivo y el estado se muestran en los paneles de Plaspy para que los equipos operativos vean posiciones actuales y movimiento reciente.
- Las alarmas SOS y por caída aparecen como eventos en Plaspy y pueden activar reglas de notificación, rutas de escalamiento y flujos de trabajo para respondedores asignados.
- Los eventos de llamadas de voz se presentan como metadatos contextuales para que las líneas de tiempo de incidentes muestren cuándo ocurrieron las comunicaciones en relación con las alarmas.
- Las correcciones asistidas por BLE y Wi Fi pueden mejorar la precisión en interiores en los mapas de Plaspy cuando el dispositivo proporciona esos datos.
- La telemetría histórica y los registros de eventos se almacenan en Plaspy para revisión posterior y generación de informes sobre el desempeño de la respuesta.
- Las herramientas de indexado y búsqueda de Plaspy permiten filtrar el historial de dispositivos Nano por usuario, tipo de evento o ventana temporal para auditorías y cumplimiento.

## Casos de uso típicos

- Monitoreo de personas mayores donde los cuidadores requieren conciencia de ubicación, alertas por caída y un canal SOS.
- Protección de personal sanitario y de instalaciones mediante alarmas compactas y voz bidireccional para asistencia rápida.
- Seguridad de trabajadores en solitario para personal remoto que necesita un wearable ligero con pánico y alertas automáticas.
- Seguridad familiar, por ejemplo monitoreo de niños durante viajes o actividades usando el formato wearable y las funciones de llamada SOS.
- Protección de activos portátiles cuando un pequeño tracker wearable se coloca en equipos de alto valor y se supervisa junto al personal.
- Integración en despliegues telemáticos mixtos para añadir telemetría de seguridad personal a una supervisión operativa más amplia.

## Notas sobre disponibilidad de funciones

- Conjuntos de funciones como la sensibilidad de detección de caídas, el enrutamiento de alarmas y los intervalos de reporte pueden variar según la versión de firmware y la configuración del dispositivo.
- Las revisiones de hardware y variantes regionales del producto pueden afectar las bandas celulares compatibles, perfiles de potencia y el comportamiento de los sensores.
- El contexto de instalación, incluida la colocación, la disponibilidad de Wi Fi y la infraestructura BLE, influirá en el desempeño del posicionamiento en interiores.
- Algunas capacidades avanzadas requieren la configuración correspondiente tanto en el portal de gestión del dispositivo como en Plaspy para que aparezcan según lo esperado.
- Siempre consulte las notas de versión y las guías de configuración del fabricante para conocer el comportamiento preciso de un dispositivo y su versión de firmware.

## Por qué usar Plaspy con estas funciones

Usar el MiniFinder Nano con Plaspy ofrece a las organizaciones un tracker personal compacto que alimenta la monitorización centralizada, el enrutamiento de alertas basado en reglas y los reportes históricos. Plaspy transforma la ubicación, las señales SOS y los eventos de sensores del Nano en visibilidad operativa para que equipos de cuidado, operaciones de seguridad y respondedores de incidentes puedan actuar con rapidez y mantener un registro auditado de los eventos.

Para obtener más información sobre la integración de dispositivos MiniFinder y cómo Plaspy puede apoyar flujos de trabajo de seguridad personal y monitoreo, visite https://www.plaspy.com. Para las especificaciones más actuales del dispositivo, detalles de firmware y orientación del fabricante, verifique la información más reciente en MiniFinder en https://minifinder.se/
