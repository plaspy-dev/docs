---
slug: /teltonika/ftm880/protocol
id: ftm880-protocol
sidebar_label: Protocol
title: Teltonika - FTM880 Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo Teltonika FTM880 y su comunicación con Plaspy para rastreo GPS y telemetría confiables
keywords:
  - Protocolo Teltonika FTM880
  - Protocolo GPS FTM880
  - Teltonika FTM880 con Plaspy
  - Protocolo de comunicación FTM880
  - Protocolo de rastreo FTM880
  - Compatibilidad protocolo GPS Teltonika
  - Protocolo rastreador GPS con batería
  - Rastreo de flota Teltonika FTM880
  - Protocolo de dispositivo Plaspy
  - Rastreo de activos FTM880
---

# Teltonika - Protocolo FTM880

Esta página explica el contexto del protocolo público para utilizar el Teltonika FTM880 con Plaspy. Se centra en cómo el dispositivo se comunica con la plataforma Plaspy en términos generales, de modo que gerentes de flota y equipos técnicos comprendan el comportamiento de la conexión, qué esperar de los reportes de datos y qué revisar en la configuración del equipo antes del despliegue. El FTM880 es un rastreador robusto montado con batería, diseñado para larga duración y para su instalación en remolques, maquinaria pesada y activos remotos; esta descripción técnica sirve de base para la orientación a nivel de protocolo.

Plaspy utiliza ajustes de conexión compartidos para los dispositivos soportados y detecta automáticamente los protocolos de los rastreadores cuando un equipo reporta al endpoint de Plaspy. Para Plaspy, el servidor público es accesible en d.plaspy.com y 54.85.159.138 en el puerto 8888. Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888, y Plaspy emplea el mismo puerto para todos los dispositivos soportados mientras detecta automáticamente el protocolo del rastreador correspondiente. El comportamiento exacto del protocolo y la telemetría disponible pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que debe confirmar los detalles específicos del dispositivo en la documentación oficial.

## Resumen del protocolo

A alto nivel, el protocolo de reporte del FTM880 proporciona el mecanismo por el cual el dispositivo se identifica, entrega posición GNSS y telemetría, y envía mensajes de evento o estado a un servidor backend como Plaspy. El comportamiento del protocolo determina cómo el rastreador codifica identificadores, marcas de tiempo y telemetría para que Plaspy pueda procesar posiciones en vivo, eventos de geocerca y diagnósticos para flujos de trabajo de la flota.

- Permite la identificación del dispositivo y el establecimiento de sesión para que Plaspy asigne los mensajes entrantes al activo correcto.
- Transporta posición GNSS, marca de tiempo y telemetría disponible, como estados de entradas digitales y estado de batería, para uso en los informes de Plaspy.
- Lleva mensajes de evento como movimiento, transiciones de geocerca o alarmas que activan notificaciones y reglas en la plataforma.
- Soporta tanto reportes continuos como actualizaciones periódicas de bajo consumo apropiadas para despliegues montados con batería.
- Funciona con sistemas de gestión remota de dispositivos para coordinar actualizaciones de firmware y aprovisionamiento mientras el dispositivo permanece registrado en Plaspy.

## Cómo detecta Plaspy el protocolo

Plaspy acepta conexiones entrantes en un único endpoint y puerto compartido y determina automáticamente el protocolo del rastreador según los datos que el dispositivo envía durante el reporte inicial. En la mayoría de los casos no necesita seleccionar un protocolo en Plaspy si el FTM880 está configurado para reportar a la dirección y puerto de Plaspy.

- El endpoint público de Plaspy es d.plaspy.com y la dirección de servidor relacionada es 54.85.159.138.
- Plaspy escucha en el puerto 8888 para reportes de dispositivos y usa el mismo puerto para todos los rastreadores soportados.
- Los dispositivos pueden reportar por UDP o TCP en el puerto 8888 según la configuración del rastreador y las condiciones de la red.
- Cuando el FTM880 apunta a d.plaspy.com o 54.85.159.138 en el puerto 8888, Plaspy aceptará la conexión e inferirá el protocolo a partir del comportamiento de reporte del dispositivo.
- La configuración correcta del dispositivo para señalar el endpoint de Plaspy suele ser todo lo necesario para la detección automática del protocolo.

## Transporte y contexto de conexión

El contexto de transporte rige cómo el FTM880 se conecta a Plaspy y cuán fiables son las entregas de mensajes. La familia FTM880 soporta modos de telemetría celular eficientes, adecuados para operación con batería, y el rastreador puede configurarse para comunicarse mediante UDP o TCP según las decisiones de red y configuración.

- Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888 para reportar a Plaspy.
- Plaspy acepta conexiones en el dominio d.plaspy.com y en la dirección numérica 54.85.159.138.
- El puerto 8888 se usa de forma consistente para todos los dispositivos soportados por Plaspy, lo que simplifica el aprovisionamiento.
- UDP puede elegirse para actualizaciones periódicas con menor sobrecarga, mientras que TCP es preferible cuando se requiere entrega fiable o persistencia de sesión.
- Asegúrese de que el APN y la configuración de la SIM del dispositivo permitan conexiones salientes al endpoint de Plaspy y que cualquier firewall de red permita tráfico al puerto 8888.

## Notas sobre compatibilidad del protocolo

- Las variaciones de firmware entre SKUs del FTM880 pueden afectar qué campos de telemetría están disponibles y cómo se reportan; revise las notas de la versión de firmware para conocer las diferencias.
- Las revisiones de hardware y variantes regionales pueden exponer distintas opciones de E/S o soporte de bandas celulares que influyan en la telemetría y las funciones de control remoto.
- La selección de transporte entre UDP y TCP puede cambiar el comportamiento de reintentos, manejo de sesión y la sincronización de entrega de datos; elija el transporte que mejor se adapte a su despliegue.
- Las herramientas del fabricante para gestión remota y aprovisionamiento pueden interactuar con el reporte del dispositivo; coordine FOTA y aprovisionamiento de plataforma para evitar conflictos.
- Los dispositivos en estado de fin de vida o próximos a su reemplazo deben validarse para compatibilidad continua antes de una compra a gran escala.
- Siempre valide integraciones críticas con la documentación oficial del fabricante y pruebe los dispositivos en un entorno controlado antes del despliegue en producción.

## Por qué es importante comprender el protocolo

Comprender cómo se comunica el FTM880 con Plaspy mejora el éxito en la instalación, la rapidez en la resolución de problemas y la confiabilidad de la telemetría entregada a sus flujos de trabajo de flota. Conocer el contexto de reporte y transporte ayuda a los equipos a ajustar la configuración del dispositivo para maximizar la vida de la batería, la capacidad de respuesta ante eventos y la eficiencia de la red.

- Garantiza la correcta dirección del dispositivo para que reporte a d.plaspy.com o 54.85.159.138 en el puerto 8888 y sea detectado por Plaspy.
- Ayuda a elegir entre UDP y TCP para equilibrar la fiabilidad y el consumo de energía en casos de uso montados con batería.
- Facilita la resolución efectiva de problemas cuando faltan actualizaciones de posición o eventos, al acotar las incidencias a la red, transporte o firmware.
- Permite planificar adecuadamente el aprovisionamiento de dispositivos, las actualizaciones de firmware y la gestión del ciclo de vida con las herramientas de Teltonika y los flujos de trabajo de Plaspy.
- Ayuda a mapear los campos de telemetría requeridos del rastreador a los informes y reglas de la plataforma utilizados por los equipos operativos.

## Por qué usar Plaspy con este protocolo

Usar el Teltonika FTM880 con Plaspy ofrece a las organizaciones una vía simple para recopilar posición, eventos y telemetría de activos robustos montados con batería. La combinación es adecuada para despliegues a largo plazo donde el mantenimiento reducido, modos de sueño optimizados y un buen desempeño GNSS son importantes para un rastreo confiable y supervisión operativa. La detección automática de protocolos de Plaspy y su modelo de endpoint de un solo puerto simplifican el aprovisionamiento de flotas, de modo que los dispositivos que apunten al endpoint de Plaspy pueden empezar a reportar con una configuración mínima en la plataforma.

Para obtener más información sobre Plaspy y su funcionamiento con dispositivos como el Teltonika FTM880 visite https://www.plaspy.com. Tenga en cuenta que el soporte de protocolos, el comportamiento del firmware y los detalles de implementación del dispositivo pueden cambiar con el tiempo; verifique la información más reciente sobre el protocolo y las recomendaciones de firmware con el fabricante en https://www.teltonika-gps.com/ antes de finalizar los despliegues.
