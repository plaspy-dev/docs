---
slug: /suntech/st4410g/protocol
id: st4410g-protocol
sidebar_label: Protocol
title: Suntech - ST4410G Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo para conectar Suntech ST4410G a Plaspy con contexto práctico de configuración
keywords:
  - protocolo Suntech ST4410G
  - protocolo del rastreador GPS ST4410G
  - protocolo Suntech Plaspy
  - protocolo de comunicación ST4410G
  - protocolo de rastreo ST4410G
  - compatibilidad rastreador GPS Suntech
  - ST4410G LTE NB IoT
  - configuración ST4410G TCP UDP
  - compatibilidad dispositivos Plaspy
  - protocolo rastreo cartones y activos
---

# Suntech - Protocolo ST4410G

Esta página explica el contexto público del protocolo para usar el Suntech ST4410G con Plaspy. Está enfocada en cómo el equipo se comunica con Plaspy a un nivel práctico para que integradores y técnicos comprendan las expectativas de conexión, las opciones de configuración más comunes y cómo se entregan el rastreo, los eventos RF y la telemetría a una plataforma backend.

El ST4410G es un rastreador compacto para activos y cartones con conectividad celular multimodal (LTE Cat M1 y NB‑IoT con fallback a 2G), receptor GNSS multiconstelación, receptor RF integrado en 433–435 MHz, detección de movimiento y batería recargable en una carcasa IP67. Plaspy utiliza ajustes de conexión compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, pero el comportamiento exacto de los mensajes puede variar según la versión de firmware, revisión de hardware e implementación del fabricante. Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888 para reportar a Plaspy.

## Resumen del protocolo

A grandes rasgos, el protocolo de comunicación del ST4410G define cómo el rastreador informa posición, eventos del receptor RF, telemetría de movimiento, estado de batería y otros eventos a un servidor como Plaspy. El protocolo es el puente entre los sensores del dispositivo y la capa de ingestión de Plaspy; comprenderlo ayuda a garantizar la entrega fiable y la correcta interpretación de los datos.

- Permite enviar posiciones GNSS, eventos del receptor RF, disparos por movimiento y telemetría de batería desde el dispositivo hasta la nube.
- Incluye identidad y estado del dispositivo para que Plaspy vincule los reportes con el activo correcto y aplique ajustes específicos por dispositivo.
- Admite modos de reporte configurables para equilibrar frecuencia de actualizaciones y vida útil de la batería en flujos de trabajo de cartón y activo.
- Transporta mensajes basados en eventos (movimiento, lecturas de tag, batería baja) junto con actualizaciones periódicas de ubicación para que Plaspy genere alertas y registros históricos.
- Funciona sobre transporte estándar TCP o UDP, de modo que el mismo dispositivo puede reportar a través de distintos canales celulares según la red y la configuración.

## Cómo detecta Plaspy el protocolo

Plaspy acepta conexiones entrantes en un endpoint y puerto compartidos para los dispositivos soportados y detecta el protocolo del rastreador automáticamente cuando un dispositivo reporta a ese endpoint. En la mayoría de las implementaciones no es necesario seleccionar manualmente un protocolo dentro de Plaspy si el ST4410G está configurado para reportar al endpoint de Plaspy.

- Plaspy utiliza el dominio d.plaspy.com y la IP de servidor 54.85.159.138 como endpoints públicos para el reporte de dispositivos.
- El puerto acordado para el reporte de todos los dispositivos gestionados por Plaspy es 8888, por lo que los dispositivos deben configurarse en consecuencia.
- El ST4410G puede configurarse para usar UDP o TCP en el puerto 8888 según el firmware del dispositivo y las preferencias del operador.
- Cuando el dispositivo envía datos al endpoint de Plaspy, Plaspy identifica y mapea los mensajes entrantes al registro de dispositivo correspondiente de forma automática.
- Los pasos típicos de configuración son confirmar conectividad de red del dispositivo, verificar APN y modo de radio, y apuntar el rastreador a d.plaspy.com usando el transporte elegido.

## Contexto de transporte y conexión

El contexto de conexión cubre cómo el ST4410G llega a Plaspy a través de redes móviles y qué endpoints de red configurar en el dispositivo. El ST4410G soporta LTE Cat M1 y NB‑IoT con fallback a 2G y puede transmitir vía TCP o UDP; elegir el transporte y la dirección de servidor adecuados es parte de la configuración inicial.

- Los dispositivos pueden configurarse para reportar por UDP o TCP en el puerto 8888 al endpoint de ingestión de Plaspy.
- El dominio del servidor Plaspy es d.plaspy.com y la dirección IP pública es 54.85.159.138; se puede usar cualquiera según las opciones de configuración del equipo.
- Todos los dispositivos en Plaspy usan el mismo puerto (8888), lo que simplifica despliegues múltiples y reglas de firewall.
- La selección del transporte (UDP vs TCP) puede afectar las características de entrega y debe corresponder con las capacidades del firmware y el comportamiento del operador móvil.
- Verifique que el APN y el modo de radio del dispositivo permitan conectividad LTE Cat M1, NB‑IoT o 2G según lo requiera su región de despliegue.

## Notas sobre compatibilidad del protocolo

- Las versiones de firmware pueden cambiar el contenido de los mensajes, los campos disponibles y los modos de reporte; documente siempre la versión de firmware utilizada durante las pruebas.
- Revisiones de hardware u opciones configurables (por ejemplo, comportamiento del receptor RF) pueden alterar qué eventos reporta el dispositivo o la frecuencia de envío.
- Algunas redes celulares pueden manejar UDP y TCP de manera distinta; pruebe el transporte elegido en el área objetivo de cobertura.
- El comportamiento y la sensibilidad de lectura de tags RF pueden variar según firmware y colocación de la antena; correlacione los eventos RF con el comportamiento esperado de las etiquetas durante la puesta en marcha.
- Plaspy detecta automáticamente el protocolo del rastreador en el endpoint compartido, pero se requiere una configuración correcta del dispositivo (dirección del servidor, puerto, transporte) para que la detección ocurra.
- Valide la compatibilidad contra la documentación del fabricante y las notas de la versión para su lote de dispositivos y compilación de firmware específicos.

## Por qué importa entender el protocolo

Conocer cómo el ST4410G se comunica con Plaspy facilita una configuración confiable, una resolución de problemas más eficiente y una estabilidad operativa a largo plazo. Saber qué configurar en el dispositivo y qué esperar en el servidor reduce el tiempo de integración y ayuda a mantener un rastreo consistente en los despliegues.

- Acelera la puesta en marcha inicial al aclarar qué servidor, puerto y transporte configurar en el equipo.
- Facilita la resolución de problemas cuando los mensajes no llegan o faltan campos esperados, al centrar la investigación en transporte, firmware o configuración.
- Ayuda a planificar perfiles de energía y reporte que equilibren la vida útil de la batería con el nivel de telemetría requerido por la operación.
- Garantiza que el manejo de eventos RF y los disparadores por movimiento estén comprendidos para que las alertas y la correlación de inventario en Plaspy funcionen como se espera.
- Facilita la migración y el escalado de flota porque los ajustes de conexión comunes (un solo puerto Plaspy) simplifican las plantillas de despliegue.

## Por qué usar Plaspy con este protocolo

Usar el ST4410G con Plaspy ofrece una forma práctica de añadir visibilidad a nivel de cartón y activo en logística, almacén y casos de alquiler. Plaspy ingiere ubicación, eventos RF, alertas de movimiento y telemetría de batería de dispositivos como el ST4410G y los presenta en paneles, mapas, alertas e integraciones que ayudan a los equipos operativos a monitorear envíos y activos en tiempo real.

Si está evaluando o desplegando dispositivos ST4410G, configure cada rastreador para apuntar a d.plaspy.com (o 54.85.159.138) en el puerto 8888 y seleccione UDP o TCP según lo soporte su dispositivo y su operador. Conozca más sobre Plaspy y su compatibilidad con una amplia gama de dispositivos en https://www.plaspy.com. Tenga en cuenta que el soporte de protocolo, el comportamiento del firmware y los detalles de implementación del dispositivo pueden cambiar con el tiempo; verifique la información específica más reciente del protocolo y del firmware con el fabricante en http://www.suntechint.com/ antes de un despliegue a gran escala.
