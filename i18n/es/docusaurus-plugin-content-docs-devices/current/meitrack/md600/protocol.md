---
slug: /meitrack/md600/protocol
id: md600-protocol
sidebar_label: Protocol
title: Meitrack - MD600 Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo para Meitrack MD600 y Plaspy con ajustes de conexión, contexto de transporte y notas de compatibilidad
keywords:
  - Protocolo Meitrack MD600
  - Protocolo GPS MD600
  - Meitrack MD600 Plaspy
  - Protocolo de comunicación MD600
  - Protocolo de rastreo MD600
  - Protocolo de rastreador GPS Meitrack
  - Protocolo DVR vehicular
  - Rastreo de flotas MD600
  - Compatibilidad de dispositivos Plaspy
  - Integración telemetría y video
---

# Meitrack - MD600 Protocolo

Esta página documenta el contexto del protocolo público para usar el DVR móvil Meitrack MD600 con Plaspy. Se centra en cómo el equipo comunica telemetría, eventos y metadatos relacionados con video hacia Plaspy empleando los ajustes de conexión compartidos que expone la plataforma. El contenido es de alto nivel y está pensado para ingenieros de red, integradores y administradores de flota que preparan un despliegue MD600 con Plaspy.

Plaspy utiliza un endpoint y ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el equipo reporta a la plataforma. El comportamiento exacto del protocolo puede variar según la versión de firmware, variantes regionales del hardware y la configuración del fabricante; por eso esta página enfatiza el papel de la comunicación y las consideraciones prácticas de integración más que los detalles internos del firmware o el formato propietario de los paquetes.

## Resumen del protocolo

El MD600 admite flujos combinados de telemetría y medios para que la telemetría del vehículo, las entradas y salidas digitales y los metadatos de video multicanal puedan correlacionarse en Plaspy. El protocolo del rastreador define cómo la unidad se identifica, reporta posiciones GNSS y eventos de sensores, y señala metadatos que enlazan video almacenado o transmitido con las líneas de tiempo de telemetría.

- Permite actualizar posiciones GNSS, velocidad y rumbo desde el MD600 hacia Plaspy para seguimiento en vivo y reproducción histórica.
- Transporta eventos de entradas y salidas digitales, telemetría CAN y reportes de sensores periféricos para que Plaspy active alertas y flujos de trabajo.
- Asocia marcas temporales de telemetría y marcadores de eventos con las transmisiones de video o archivos grabados del MD600 para revisión sincronizada de evidencia.
- Soporta reportes telemáticos estándar junto con transmisión de medios, de modo que la telemetría llegue de forma fiable incluso cuando el video utilice un transporte separado.
- Emplea identificadores telemáticos soportados por el fabricante para que Plaspy reconozca modelos de dispositivo y correlacione los campos reportados con las estructuras de datos de la plataforma.

## Cómo detecta Plaspy el protocolo

Plaspy escucha en un único endpoint compartido y puerto para conexiones entrantes de dispositivos y detecta automáticamente el protocolo de rastreador que usa cada equipo. Cuando el MD600 se configura para reportar a Plaspy, por lo general la plataforma no requiere selección manual del protocolo siempre que el dispositivo esté apuntando al endpoint de Plaspy y con el transporte correcto.

- El dominio del servidor Plaspy es d.plaspy.com y la plataforma es accesible en la IP pública 54.85.159.138 en el puerto 8888.
- Los dispositivos pueden configurarse para usar UDP o TCP al reportar a Plaspy en el puerto 8888, según el soporte del equipo y las condiciones de red.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la configuración de cortafuegos y la red para flotas.
- Plaspy detecta el protocolo del rastreador automáticamente, por lo que un dispositivo correctamente configurado será reconocido y parseado sin asignación manual de protocolo en la mayoría de los casos.
- Si un equipo no aparece, las comprobaciones habituales incluyen verificar el APN y los ajustes del servidor de reporte en el dispositivo y confirmar la alineación del protocolo de transporte con la red.

## Transporte y contexto de conexión

El contexto de conexión abarca cómo el MD600 alcanza Plaspy y qué opciones de transporte se usan comúnmente. El MD600 soporta interfaces celulares, Wi Fi y cableadas para telemetría y medios, y puede configurarse para reportar a Plaspy usando UDP o TCP en el puerto compartido.

- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 para reportar a Plaspy, dependiendo de la preferencia del operador y del comportamiento de la red.
- Los equipos pueden apuntar al servidor Plaspy por dominio d.plaspy.com o directamente a la IP 54.85.159.138 si el DNS está restringido.
- La conectividad celular, incluyendo 4G LTE con fallback a 3G y 2G, se usa comúnmente para reportes móviles; Wi Fi y Ethernet ofrecen alternativas para cargas en depósito o transmisión de video de alto ancho de banda.
- La transmisión de medios y la telemetría pueden usar transportes o puertos separados en la configuración del equipo, pero los reportes de telemetría hacia Plaspy usan el puerto compartido 8888.
- Asegúrese de que los cortafuegos del vehículo o de la empresa permitan conexiones salientes al endpoint de Plaspy y considere el transporte preferido al planificar la calidad de servicio de la red.

## Notas de compatibilidad del protocolo

- Las revisiones de firmware y las variantes regionales del hardware para el MD600 pueden cambiar qué campos o mensajes envía el dispositivo; confirme siempre el nivel de firmware en las unidades desplegadas.
- Los modos de protocolo suministrados por el fabricante o módulos opcionales de streaming pueden alterar cómo se transmiten metadatos de video y telemática hacia Plaspy.
- La selección de transporte entre UDP y TCP puede afectar las características de entrega en redes celulares; elija el modo que mejor se ajuste a sus necesidades de fiabilidad y latencia.
- Algunas integraciones combinan reportes telemáticos estándar con RTMP u otros flujos de medios para video; verifique cómo está configurado su MD600 para que Plaspy reciba los enlaces de telemetría que espera.
- Valide la compatibilidad contra la documentación oficial de Meitrack y las notas de versión al actualizar firmware o cambiar la configuración del equipo.
- Elementos de red como APN del operador, comportamiento NAT y planes de datos de la SIM pueden influir en la accesibilidad del dispositivo y deben probarse durante el despliegue.

## Por qué es importante comprender el protocolo

Comprender cómo el MD600 se comunica con Plaspy ayuda a garantizar un seguimiento fiable, una correlación precisa de eventos con video y una resolución más rápida de problemas cuando surjan incidencias de conectividad o calidad de datos. Los integradores que conocen el rol del protocolo pueden planificar mejor las reglas de red, la gestión de firmware y el aprovisionamiento de dispositivos.

- Simplifica la configuración de cortafuegos y operadores al conocer el endpoint de servidor requerido y las opciones de transporte.
- Ayuda a validar que los datos GNSS, CAN y de E/S están llegando como se espera en los paneles de Plaspy.
- Permite decisiones informadas sobre usar UDP frente a TCP para telemetría en entornos celulares.
- Acelera la resolución de problemas por conectividad intermitente o telemetría faltante al enfocarse en transporte, APN y versiones de firmware.
- Mejora la calidad de datos de la flota al alinear la configuración del equipo con las expectativas de Plaspy sobre marcas temporales y marcadores de eventos.

## Por qué usar Plaspy con este protocolo

Usar el Meitrack MD600 con Plaspy combina evidencia de video en vehículo de alta calidad con telemetría robusta en una única vista operativa. Esta combinación es útil para flotas que requieren video sincronizado junto con telemetría basada en ubicación para revisión de incidentes, programas de seguridad, monitoreo de consumo y flujos de trabajo de control remoto. La grabación multicanal del MD600 y su amplio soporte de periféricos ofrecen señales valiosas a Plaspy para alertas y análisis histórico.

Si desea explorar Plaspy con más detalle, visite https://www.plaspy.com para conocer las capacidades de la plataforma y la integración de dispositivos. Tenga en cuenta que el soporte de protocolos, el comportamiento del firmware y los detalles de implementación del fabricante pueden cambiar con el tiempo, por lo que debe verificar la información más reciente del protocolo específico del dispositivo en el sitio oficial del fabricante https://www.meitrack.com/ antes de realizar despliegues a gran escala.
