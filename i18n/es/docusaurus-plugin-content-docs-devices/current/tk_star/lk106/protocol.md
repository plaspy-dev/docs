---
slug: /tk_star/lk106/protocol
id: lk106-protocol
sidebar_label: Protocol
title: TK-Star - LK106 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del TK Star LK106 y cómo se comunica con Plaspy para seguimiento y monitoreo
keywords:
  - protocolo TK Star LK106
  - protocolo GPS TK Star LK106
  - protocolo de comunicación TK Star LK106
  - protocolo rastreador LK106
  - protocolo rastreador GPS TK Star
  - rastreadores compatibles con Plaspy
  - protocolo de seguimiento LK106
  - seguimiento vehicular LK106
  - rastreador de activos LK106
  - TK Star LK106 Plaspy
---

# TK-Star - Protocolo LK106

Esta página describe el contexto público del protocolo para usar el rastreador TK-Star LK106 con Plaspy. Se centra en los detalles de comunicación y conexión de alto nivel relevantes para integrar el LK106 con Plaspy, evitando entrar en especificaciones internas del firmware. El LK106 es un rastreador GPS portátil diseñado para seguimiento en tiempo real, geocercas, alertas de movimiento, SOS y otras funciones habituales que lo hacen adecuado para vehículos, activos y aplicaciones de seguridad personal.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el equipo se comunica con el endpoint de Plaspy. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página explica el papel general del protocolo y cómo se relaciona con el uso correcto en Plaspy.

## Resumen del protocolo

El protocolo utilizado por el LK106 (el formato de reporte del dispositivo y el comportamiento de los mensajes) establece las reglas sobre cómo el rastreador se identifica, cómo reporta ubicación y estado, y cómo se comunican alertas y telemetría a un servidor como Plaspy. Comprender este contexto ayuda a garantizar que el dispositivo esté configurado para enviar datos útiles a la plataforma Plaspy.

- Permite al rastreador reportar posición GPS, marcas de tiempo y estado básico a un servidor remoto.
- Transporta mensajes de eventos y alertas como SOS, movimiento, batería baja y transiciones de geocerca.
- Identifica el dispositivo para que el servidor asocie los mensajes entrantes con el activo o cuenta correcta.
- Determina opciones de frecuencia de actualización, como reportes periódicos o reportes activados por movimiento.
- Influye en el manejo de batería mediante modos de reposo o reportes de baja potencia.

## Cómo detecta Plaspy el protocolo

Plaspy recibe conexiones en un endpoint y puerto compartidos y compara los mensajes entrantes de los dispositivos con comportamientos conocidos para interpretar la telemetría. Para el LK106 esto significa que por lo general se requiere configuración mínima en el lado de Plaspy siempre que el dispositivo envíe datos al endpoint de Plaspy.

- El dominio del servidor Plaspy es d.plaspy.com y la IP pública es 54.85.159.138 usando el puerto 8888.
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo envía datos al endpoint de Plaspy.
- En la mayoría de los casos no necesita seleccionar manualmente un protocolo dentro de Plaspy si el LK106 está configurado para reportar a los ajustes de Plaspy.
- Una identificación de dispositivo consistente en los reportes ayuda a Plaspy a asociar los mensajes con el registro correcto del rastreador.
- Si un dispositivo usa un comportamiento de firmware no estándar, se recomienda verificar la configuración de reporte y las indicaciones del fabricante.

## Transporte y contexto de conexión

El LK106 puede configurarse para enviar telemetría mediante protocolos de transporte comunes. Plaspy soporta esos transportes en un único puerto unificado, por lo que la configuración de conexión es sencilla para muchos modelos de rastreadores.

- El dispositivo puede configurarse usando UDP o TCP en el puerto 8888 según el soporte y la configuración del equipo.
- Los dispositivos pueden apuntar a d.plaspy.com o directamente a 54.85.159.138 para alcanzar Plaspy.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica las reglas de servidor y firewall.
- La elección entre UDP y TCP puede afectar el comportamiento de entrega y debe coincidir con la opción de transporte disponible en el firmware del rastreador.
- Asegúrese de que el APN y la configuración GSM del dispositivo permitan conexiones salientes al endpoint de Plaspy.

## Notas de compatibilidad del protocolo

- Las versiones de firmware pueden cambiar el comportamiento de los mensajes y las funciones disponibles incluso dentro del mismo hardware LK106.
- Revisiones de hardware o lotes de fabricación diferentes pueden introducir pequeñas diferencias de protocolo.
- Configuraciones del fabricante o compilaciones regionales de firmware pueden alterar el transporte por defecto o los intervalos de reporte.
- Algunas unidades LK106 pueden usar por defecto UDP mientras que otras usan TCP; confirme la opción de transporte del dispositivo antes de configurar la red.
- Valide la compatibilidad consultando el manual del usuario y la documentación del fabricante en lugar de depender únicamente de suposiciones genéricas.
- Cuando sea posible, pruebe un solo dispositivo para confirmar que los reportes y las alertas llegan correctamente a Plaspy antes de una implementación masiva.

## Por qué es importante entender el protocolo

Saber cómo se comunica el LK106 le ayuda a configurar el dispositivo, resolver problemas y garantizar que datos confiables lleguen a Plaspy para monitoreo y operación.

- Simplifica la configuración inicial y asegura que el rastreador apunte al endpoint correcto de Plaspy.
- Ayuda a diagnosticar problemas de conectividad como falta de reportes, actualizaciones intermitentes o alertas perdidas.
- Orienta la elección de la frecuencia de actualización para equilibrar necesidades de datos y duración de la batería.
- Facilita la resolución cuando actualizaciones de firmware cambian el comportamiento de reporte o el contenido de los mensajes.
- Permite validar características importantes como alertas de geocerca, SOS y detección de movimiento en la plataforma.

## Por qué usar Plaspy con este protocolo

Usar el TK-Star LK106 con Plaspy ofrece a organizaciones y particulares un camino claro para ingerir la telemetría del LK106 en un flujo de trabajo de gestión de flotas y activos. El endpoint unificado de Plaspy y la detección automática de protocolo reducen los pasos manuales necesarios para recibir ubicación, alertas y estados desde rastreadores portátiles como el LK106, permitiendo un despliegue más rápido y monitoreo consistente entre distintos dispositivos.

Learn more about how Plaspy works and the features available for tracking at https://www.plaspy.com. Please verify the latest device specific protocol details, firmware behavior, and implementation notes on the manufacturer website https://www.tk-star.com/ because protocol support and firmware behavior can change over time.
