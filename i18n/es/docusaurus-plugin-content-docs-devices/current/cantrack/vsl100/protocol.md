---
slug: /cantrack/vsl100/protocol
id: vsl100-protocol
sidebar_label: Protocol
title: CanTrack - VSL100 Protocol
sidebar_class_name: menu_item_tracker
description: Protocolo público del CanTrack VSL100 y su comunicación con Plaspy para rastreo de flotas y control de velocidad
keywords:
  - protocolo CanTrack VSL100
  - protocolo GPS CanTrack VSL100
  - protocolo CanTrack VSL100 Plaspy
  - protocolo de comunicación VSL100
  - protocolo de rastreo VSL100
  - compatibilidad CanTrack Plaspy
  - protocolo limitador de velocidad VSL100
  - protocolo de rastreo de flotas VSL100
  - protocolo del rastreador VSL100
  - compatibilidad de rastreadores Plaspy
---

# CanTrack - VSL100 Protocolo

Esta página resume el contexto público del protocolo para integrar el CanTrack VSL100 con la plataforma Plaspy. Se centra en cómo el dispositivo informa ubicación, estado y eventos de cumplimiento a Plaspy, sin exponer detalles privados del fabricante. El VSL100 es un equipo combinado de rastreo GPS y limitador de velocidad diseñado para vehículos pesados y flujos de trabajo de cumplimiento; esta guía explica el contexto de comunicación relevante para una integración exitosa.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el equipo está configurado correctamente para reportar al endpoint de Plaspy. El comportamiento exacto del protocolo y los mensajes disponibles pueden variar según la versión de firmware del VSL100, la revisión de hardware y la implementación del fabricante, por lo que considere esta página como contexto de protocolo y no como un manual de referencia completo.

## Resumen del protocolo

El protocolo que usa el VSL100 para reportar a un backend como Plaspy es el canal de reporte y comandos del dispositivo que transporta posición GNSS, banderas de estado y registros de eventos como infracciones de velocidad y alertas de manipulación. Permite que el rastreador se identifique ante Plaspy y transmita la telemetría necesaria para monitoreo, alertas y auditorías.

- Permite que el VSL100 envíe actualizaciones periódicas de ubicación y telemetría en tiempo real a Plaspy para visualización y registro.
- Transmite notificaciones de eventos como exceso de velocidad, detección de manipulación, alertas anti-jammer y activaciones de geocerca, que Plaspy muestra como alertas.
- Transporta estado y diagnósticos del equipo para que Plaspy muestre batería, señal e indicadores de salud junto a la ubicación.
- Soporta configuración remota y direccionamiento de servidor para que el VSL100 apunte al endpoint de Plaspy y permita la ingestión automatizada.
- Habilita la recolección centralizada de telemetría histórica y en vivo para informes y auditorías de cumplimiento.

## Cómo Plaspy detecta el protocolo

Plaspy está diseñado para aceptar conexiones de dispositivos en un endpoint compartido y detectar automáticamente el protocolo del rastreador cuando un equipo reporta a la plataforma. En la mayoría de los casos no es necesario seleccionar manualmente un protocolo en Plaspy si el VSL100 está configurado para reportar al endpoint correcto de Plaspy.

- El dominio del servidor Plaspy es d.plaspy.com.
- La IP del servidor Plaspy es 54.85.159.138.
- El puerto es 8888 y este mismo puerto se utiliza para todos los dispositivos soportados por Plaspy.
- El dispositivo puede configurarse usando UDP o TCP en el puerto 8888 según el soporte del equipo y la configuración de la red.
- Si el VSL100 está correctamente apuntado al endpoint de Plaspy, Plaspy detecta automáticamente el protocolo del rastreador y procesa la telemetría entrante.
- Los flujos típicos de configuración implican apuntar el VSL100 al dominio o IP de Plaspy y verificar que los datos lleguen a los paneles de Plaspy.

## Transporte y contexto de conexión

Las elecciones de conexión, como TCP frente a UDP y la dirección del servidor, son detalles de la capa de transporte que determinan cómo el VSL100 llega a Plaspy. Mantener esos ajustes consistentes en toda la flota simplifica el aprovisionamiento y reduce errores de configuración.

- El VSL100 puede configurarse para usar transporte UDP o TCP en el puerto 8888 según la configuración del equipo y las condiciones de la red.
- Los dispositivos pueden apuntar al endpoint de Plaspy usando d.plaspy.com o la IP del servidor 54.85.159.138.
- Plaspy usa el mismo puerto 8888 para todos los dispositivos soportados, por lo que la configuración de puerto es consistente entre modelos.
- Elegir TCP puede ser preferible para la entrega fiable de registros de eventos críticos, mientras que UDP puede reducir latencia en actualizaciones de alta frecuencia dependiendo de la fiabilidad de la red.
- Asegúrese de que cualquier cortafuegos o la configuración APN del operador permitan conexiones salientes a d.plaspy.com o 54.85.159.138 en el puerto 8888.

## Notas de compatibilidad del protocolo

- Las revisiones de firmware del VSL100 pueden cambiar los tipos de mensaje disponibles y su comportamiento; verifique las notas de la versión de firmware al solucionar problemas.
- Revisión de hardware u módulos opcionales pueden alterar qué eventos o interfaces están presentes en una unidad VSL100 específica.
- El modo de transporte seleccionado en el equipo importa; confirme si la unidad está configurada en TCP o UDP y que coincida con sus requisitos de red.
- Los métodos de configuración por SMS del fabricante o herramientas de PC pueden usarse para apuntar el dispositivo al endpoint de Plaspy si no hay provisioning por GPRS.
- Algunas funciones opcionales, como el evento de mini-impresora o la descarga histórica por USB, son capacidades del dispositivo que complementan la telemetría pero no cambian el endpoint de reporte.
- Siempre valide compatibilidad y pasos de configuración contra la documentación oficial de CanTrack para su número de serie y versión de firmware del VSL100.

## Por qué es importante entender el protocolo

Comprender cómo se comunica el VSL100 con Plaspy ayuda a los operadores a configurar los dispositivos correctamente, acelerar la resolución de problemas y preservar telemetría fiable para reportes de seguridad y cumplimiento.

- Acelera la puesta en marcha inicial asegurando que el equipo apunte a d.plaspy.com o 54.85.159.138 en el puerto 8888 usando el protocolo de transporte previsto.
- Reduce el tiempo dedicado a diagnosticar telemetría perdida confirmando la selección TCP o UDP y la conectividad básica de red.
- Facilita mapear eventos del dispositivo, como infracciones de velocidad, alertas de manipulación y avisos anti-jammer, con los tipos de alerta y campos de reporte de Plaspy.
- Orienta decisiones operativas sobre frecuencia de reporte, retención de datos y cómo combinar impresión a bordo con auditorías centralizadas.
- Apoya despliegues por etapas aclarando qué variantes de firmware o hardware requieren configuración especial para funcionar de forma fiable con Plaspy.

## Por qué usar Plaspy con este protocolo

Combinar el CanTrack VSL100 con Plaspy brinda a los operadores de flotas una vista unificada de datos de ubicación de alta precisión junto con gobernanza de velocidad aplicable y detección de manipulación. Esa combinación es útil para organizaciones que necesitan visibilidad en tiempo real, alertas automáticas por eventos de cumplimiento y registros con validez para auditorías e investigaciones.

La ingestión centralizada por parte de Plaspy de la telemetría del VSL100 hace práctico monitorear flotas a escala manteniendo la configuración sencilla: apunte los dispositivos a d.plaspy.com o 54.85.159.138 en el puerto 8888, y Plaspy detectará automáticamente el protocolo del rastreador para las unidades compatibles. Para saber más sobre cómo Plaspy puede trabajar con el VSL100 y otros rastreadores, visite https://www.plaspy.com. El soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo, así que verifique los detalles de protocolo y firmware específicos del dispositivo en el sitio del fabricante https://www.cantrackgps.com/ antes de despliegues a gran escala.
