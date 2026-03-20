---
slug: /arknav/dx_3/protocol
id: dx_3-protocol
sidebar_label: Protocol
title: ArkNav - DX-3 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo ArkNav DX-3 para integrar el rastreador GPS con Plaspy, incluye conectividad y alarmas Contact ID
keywords:
  - Protocolo ArkNav DX-3
  - Protocolo GPS ArkNav DX-3
  - Protocolo ArkNav DX-3 para Plaspy
  - Protocolo de comunicación ArkNav DX-3
  - Protocolo de rastreo ArkNav DX-3
  - Protocolo rastreador GPS ArkNav
  - Rastreadores compatibles con Plaspy
  - Protocolo de alarmas Contact ID
  - Rastreador GPS para seguridad personal
  - Seguimiento de personas vulnerables
---

# ArkNav - Protocolo DX-3

Esta página describe el contexto público del protocolo para usar el rastreador personal ArkNav DX-3 con la plataforma Plaspy. Se centra en cómo el dispositivo intercambia alarmas, actualizaciones de ubicación y mensajes de estado con Plaspy en términos no sensibles y independientes de la implementación, para que operadores e integradores sepan qué esperar al conectar unidades DX-3 a la plataforma.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando un equipo reporta al endpoint de Plaspy. El comportamiento exacto del protocolo en el DX-3 puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página describe el contexto de comunicación común y las consideraciones de integración en lugar de los detalles internos de firmware.

## Visión general del protocolo

El protocolo de comunicación del DX-3 regula cómo el rastreador informa alarmas, ubicación y estado a un servidor y cómo acepta configuraciones remotas o reconocimientos cuando están soportados. Para casos de uso de seguridad personal, el protocolo prioriza reportes basados en eventos, mensajes de alarma concisos y controles de reporte respetuosos con la privacidad.

- Permite transmisiones impulsadas por eventos para pánico, caída (man down) y sesiones de inicio de rastreo, de modo que Plaspy reciba alertas accionables solo cuando sea necesario.
- Envía informes de ubicación discretos cuando el rastreo está activado y transmite actualizaciones de estado como batería y estado del cargador para monitoreo operativo.
- Soporta mensajes de alarma estandarizados; el DX-3 implementa un estilo de reporte de alarmas tipo Contact ID para integrarse con sistemas de recepción de alarmas y plataformas centralizadas.
- Proporciona metadatos que ayudan a Plaspy a correlacionar dispositivos con cuentas de usuario y reglas de enrutamiento sin requerir telemetría continua.
- Permite soporte de voz bidireccional y señalización de incidentes para ser coordinados por Plaspy cuando la red y el dispositivo admiten la capacidad de voz.

## Cómo Plaspy detecta el protocolo

Plaspy recibe conexiones entrantes en un endpoint compartido y determina automáticamente el protocolo del dispositivo según el patrón de datos entrantes y el origen de la conexión. En la mayoría de los casos, un DX-3 correctamente configurado comenzará a reportar a Plaspy sin necesidad de seleccionar manualmente el protocolo en la plataforma.

- Plaspy escucha en un endpoint común para que los equipos reporten al mismo servidor y puerto para todos los modelos soportados.
- El endpoint del servidor de Plaspy es d.plaspy.com y la IP del servidor es 54.85.159.138 para configuración directa cuando no se usa DNS.
- El puerto usado por Plaspy para el tráfico de dispositivos es 8888 y Plaspy utiliza el mismo puerto para todos los equipos.
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que normalmente no se requiere la selección manual del protocolo en la plataforma cuando el dispositivo está configurado correctamente para reportar a Plaspy.
- Si un DX-3 no aparece en Plaspy, confirme la configuración del servidor en el dispositivo, la selección del transporte y la compatibilidad de firmware antes de cambiar ajustes en la plataforma.

## Transporte y contexto de conexión

Las unidades DX-3 pueden configurarse para usar distintos tipos de transporte según las necesidades de despliegue y la disponibilidad de la red. Entender el contexto de conexión ayuda a asegurar que el dispositivo alcance a Plaspy de forma fiable y que los mensajes de alarma y ubicación lleguen con prontitud.

- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 según el soporte del equipo y las decisiones de configuración.
- Los dispositivos pueden apuntar al dominio de Plaspy d.plaspy.com o directamente a la IP del servidor 54.85.159.138 cuando el uso de DNS no sea adecuado.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la configuración y las reglas de firewall para implementaciones que mezclan modelos de rastreadores.
- Elija UDP para reportes sencillos y de baja latencia cuando esté disponible, o TCP cuando se prefiera un transporte orientado a conexión por política de red o firmware del dispositivo.
- Valide las políticas de la red móvil y del firewall para asegurar que el tráfico hacia el endpoint y el puerto de Plaspy esté permitido desde la red del dispositivo.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware en el DX-3 pueden introducir variaciones menores en el protocolo o tipos de mensajes adicionales; verifique las notas de la versión del firmware al solucionar problemas.
- Las revisiones de hardware u opcionales accesorios pueden cambiar los transportes soportados o características como voz o reporte de accesorios.
- El DX-3 soporta mensajería de alarma tipo Contact ID, lo cual es útil para el enrutamiento estandarizado de alarmas, pero los detalles de implementación pueden variar según el firmware.
- La selección de transporte entre UDP y TCP puede afectar las características de entrega y debe elegirse según el comportamiento de la red y la configuración del dispositivo.
- Siempre valide el reporte del dispositivo comprobando que el rastreador esté configurado para apuntar a d.plaspy.com o 54.85.159.138 en el puerto 8888 y que se ejerciten condiciones de reporte como Inicio de Rastreo o pánico.
- Para integración con sistemas receptores de alarmas de terceros, confirme cómo se mapean y enrutan las cargas útiles de Contact ID tanto por parte del dispositivo como de Plaspy.

## Por qué es importante entender el protocolo

Tener un entendimiento práctico del protocolo de comunicación del DX-3 ayuda a los administradores a desplegar, solucionar y mantener un monitoreo confiable para usuarios vulnerables sin exponer detalles internos del firmware. Conocer el comportamiento de alto nivel reduce el tiempo de integración y facilita una respuesta a incidentes predecible.

- Asegura la correcta configuración del servidor y el puerto para que las alarmas y actualizaciones de ubicación lleguen a Plaspy con rapidez.
- Ayuda a elegir el transporte y los ajustes de red adecuados para el entorno de despliegue.
- Facilita el diagnóstico de por qué no se recibió una alarma o informe de ubicación comprobando el estado del dispositivo, el firmware y los disparadores de reporte.
- Apoya políticas operativas que equilibran privacidad y visibilidad al entender cuándo el dispositivo reportará ubicación.
- Reduce la fricción en la integración al combinar unidades DX-3 con otros rastreadores y fuentes de alarma en una sola implementación de Plaspy.

## Por qué usar Plaspy con este protocolo

Usar el ArkNav DX-3 con Plaspy ofrece una forma directa de gestionar dispositivos de seguridad personal junto con otros activos en un único entorno de monitoreo. Plaspy ingiere eventos de alarma, actualizaciones de ubicación durante sesiones de rastreo activas y el estado del dispositivo para que cuidadores y operadores puedan priorizar respuestas y mantener supervisión operativa sin necesidad de monitoreo continuo innecesario.

Plaspy está diseñado para simplificar la configuración mediante el uso de un endpoint y puerto compartidos y detectando automáticamente los protocolos de los rastreadores cuando los dispositivos reportan a la plataforma. Para obtener más información sobre Plaspy y sus capacidades visite https://www.plaspy.com. Para detalles específicos más recientes del protocolo del dispositivo, comportamiento del firmware y orientación del fabricante, verifique la información en el sitio de producto de ArkNav https://www.arknavgps.com.tw/.
