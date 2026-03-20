---
slug: /falcom/fox3_2g/protocol
id: fox3_2g-protocol
sidebar_label: Protocol
title: Falcom - FOX3-2G Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo Falcom FOX3-2G y su compatibilidad con Plaspy, con detalles de conexión y transporte
keywords:
  - protocolo Falcom FOX3-2G
  - protocolo GPS Falcom FOX3-2G
  - compatibilidad FOX3-2G Plaspy
  - protocolo de rastreo vehicular
  - protocolo de rastreador GNSS 2G
  - comunicación rastreador Falcom
  - protocolo telemático FOX3-2G
  - protocolo de dispositivo Plaspy
  - integración Falcom FOX3-2G
  - protocolo de rastreador para gestión de flotas
---

# Falcom - Protocolo FOX3-2G

Esta página describe el contexto público del protocolo para usar la serie Falcom FOX3-2G con la plataforma Plaspy. Resume cómo el equipo suele comunicarse para enviar datos a Plaspy, qué papel desempeña el protocolo de reporte y qué ajustes de conexión utiliza Plaspy para recibir la información. El enfoque está en aspectos públicos y no sensibles del protocolo, para ayudar a integrar y operar el dispositivo con Plaspy.

Plaspy utiliza ajustes de conexión compartidos entre todos los equipos compatibles y detecta automáticamente el protocolo del rastreador cuando el dispositivo envía datos al endpoint de Plaspy. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante; por eso esta guía se centra en consideraciones prácticas de conexión y compatibilidad más que en detalles internos del dispositivo.

## Visión general del protocolo

El FOX3-2G emplea su firmware telemático para reportar posición GNSS, estado del dispositivo, eventos de entradas/salidas y mensajes de alerta a un servidor remoto. El protocolo del dispositivo define cómo la unidad se identifica, cómo reporta la telemetría y cómo transmite mensajes de estado y eventos para que Plaspy pueda almacenar, mostrar y actuar sobre los datos recibidos.

- Permite reportes periódicos y por evento de posición y estado desde el FOX3-2G hacia un endpoint remoto.
- Transporta identidad del dispositivo y datos contextuales para que Plaspy asocie los reportes con el vehículo o activo correcto.
- Transmite telemetría como datos GNSS, estado de E/S y mensajes de alerta utilizados en flujos de trabajo de flotas.
- Puede incluir funciones de seguridad, como cifrado de datos, si el firmware del equipo lo soporta y está activado.
- Funciona en conjunto con las opciones de transporte (TCP o UDP) y el direccionamiento de red para entregar paquetes a Plaspy.

## Cómo Plaspy detecta el protocolo

Plaspy acepta conexiones entrantes en un endpoint y puerto compartidos y determina automáticamente el protocolo del rastreador en función de los datos que el dispositivo envía al servicio. En la mayoría de los casos, cuando un FOX3-2G está configurado para reportar a Plaspy, no se requiere seleccionar manualmente el protocolo en la interfaz de Plaspy.

- Plaspy utiliza un puerto conocido único para todos los dispositivos, lo que simplifica la configuración y el alta de equipos.
- Cuando el FOX3-2G reporta al endpoint de Plaspy, la plataforma identifica el protocolo y asocia los mensajes entrantes con el dispositivo correcto.
- Usted normalmente solo necesita configurar el dispositivo para que envíe datos al endpoint de Plaspy; la identificación del protocolo la realiza Plaspy automáticamente.
- La detección de protocolo tolera variaciones comunes entre versiones de firmware, aunque el comportamiento exacto depende del firmware y de los ajustes del dispositivo.

## Transporte y contexto de conexión

Los FOX3-2G pueden configurarse para enviar reportes por UDP o TCP según las capacidades del equipo y la configuración elegida. Para Plaspy, los ajustes públicos de conexión están estandarizados para que los dispositivos apunten al mismo servidor y puerto para todos los rastreadores compatibles.

- El dominio del servidor Plaspy es d.plaspy.com y la IP del servidor Plaspy es 54.85.159.138.
- El puerto usado por Plaspy es 8888 y el dispositivo puede configurarse usando UDP o TCP en el puerto 8888.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que facilita la provisión y las reglas de firewall.
- La elección entre UDP o TCP puede depender de la fiabilidad, el comportamiento de la red o las opciones del firmware en el FOX3-2G.
- Asegúrese de que el enrutamiento de la red y la configuración del proveedor de SIM permitan conexiones salientes al endpoint de Plaspy.

## Notas sobre compatibilidad del protocolo

- Las diferencias de firmware entre unidades FOX3-2G pueden cambiar las funciones de reporte disponibles y los campos transmitidos.
- Revisiones de hardware y extensiones opcionales como IOBOX pueden añadir o modificar la telemetría que el protocolo transporta.
- Los menús de configuración del fabricante y los servidores por defecto influyen en cómo el dispositivo reporta a plataformas de terceros.
- La opción de transporte (UDP vs TCP) debe coincidir con la configuración en el dispositivo para garantizar la entrega.
- El cifrado de datos y características avanzadas dependen del soporte en el firmware y deben activarse de forma consistente en los equipos y la documentación.
- Valide el comportamiento del dispositivo con la documentación más reciente de Falcom para confirmar compatibilidad y características soportadas.

## Por qué es importante comprender el protocolo

Conocer el protocolo de comunicación del FOX3-2G y cómo interactúa con Plaspy ayuda a asegurar una configuración confiable, telemetría precisa y un funcionamiento predecible a lo largo del tiempo. Tener claro el comportamiento de los reportes reduce errores de configuración y acelera la resolución de problemas cuando los dispositivos no aparecen en Plaspy como se espera.

- Garantiza que los reportes del dispositivo lleguen al endpoint correcto de Plaspy y se asocien con el activo adecuado.
- Facilita el diagnóstico de problemas de conectividad relacionados con el transporte, el firewall o restricciones de la red SIM.
- Aclara el impacto de actualizaciones de firmware o cambios de configuración en la telemetría y las alertas.
- Ayuda a planificar ampliaciones de E/S, selección de antenas y funciones como detección de jamming o monitorización de eco driving.
- Contribuye a confirmar si modos de cifrado o históricos extendidos están activos y funcionando.

## Por qué usar Plaspy con este protocolo

Usar el Falcom FOX3-2G con Plaspy ofrece a las organizaciones una forma directa de recolectar telemetría de vehículos, monitorear estados y reaccionar ante alertas dentro de una plataforma unificada para flotas. La combinación del FOX3-2G de conectividad 2G, GNSS moderno, flexibilidad de E/S y las funciones premium de Falcom, como modos de historial y opciones de seguridad, lo hacen adecuado para casos donde el tamaño compacto y la extensibilidad son importantes.

El enfoque unificado de conexión de Plaspy y la detección automática de protocolo reducen los pasos manuales necesarios para incorporar unidades FOX3-2G y ayudan a mantener una operación consistente en flotas con dispositivos heterogéneos. Para obtener más información sobre Plaspy y cómo la plataforma funciona con dispositivos como el FOX3-2G, visite https://www.plaspy.com. Tenga en cuenta que el soporte de protocolo, el comportamiento del firmware y los detalles de implementación del dispositivo pueden cambiar con el tiempo; verifique la información de protocolo específica más reciente con el fabricante en https://www.falcom.de.
