---
slug: /arknav/at_04/protocol
id: at_04-protocol
sidebar_label: Protocol
title: ArkNav - AT-04 Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo para el rastreador GPS ArkNav AT-04 y su comunicación con Plaspy
keywords:
  - protocolo ArkNav AT-04
  - protocolo GPS ArkNav AT-04
  - comunicación ArkNav AT-04
  - protocolo de rastreo AT-04
  - rastreador GPS ArkNav Plaspy
  - compatibilidad AT-04 Plaspy
  - protocolo rastreador GPS compacto
  - rastreo de activos AT-04
  - protocolo GPS protección infantil
  - detección de protocolo de dispositivo Plaspy
---

# ArkNav - Protocolo AT-04

Esta página describe el contexto público del protocolo para utilizar el rastreador GPS compacto ArkNav AT-04 con Plaspy. Explica, a un nivel general, cómo el dispositivo reporta ubicación y datos de movimiento a la plataforma Plaspy y qué esperar durante la configuración y la supervisión. El contenido se centra en consideraciones de comunicación e integración, no en formatos de paquete propietarios ni en detalles de implementación específicos.

El AT-04 es compatible con Plaspy y está diseñado para proteger activos y personas de forma discreta, ofreciendo AGPS y asistencia basada en la red celular, modos de reporte flexibles y larga autonomía de batería. Plaspy usa ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador, aunque el comportamiento exacto puede variar según la versión de firmware, la revisión de hardware y la configuración del fabricante. Para parámetros específicos del dispositivo consulte la documentación oficial del fabricante.

## Resumen del protocolo

El protocolo de reporte del AT-04 define cómo el rastreador se identifica ante un servidor, envía datos de ubicación y movimiento, y admite funciones operativas como reportes por temporizador o por detección de movimiento. Esta visión pública describe el papel del protocolo en permitir la ingesta y presentación fiables de la telemetría del rastreador en Plaspy sin revelar formatos de paquete propietarios.

- Permite al dispositivo reportar fijaciones GNSS y ubicaciones asistidas, además de eventos básicos de movimiento o manipulación que Plaspy puede procesar.
- Transmite identificadores del dispositivo y campos de estado que permiten a Plaspy asociar los datos entrantes con el activo o la cuenta de usuario correctos.
- Soporta modos de reporte configurables, como reportes periódicos por temporizador y cargas activadas por movimiento, para balancear frecuencia de actualizaciones y duración de batería.
- Proporciona alternativas como solicitudes de ubicación por SMS y llamadas, que complementan las subidas al servidor en escenarios con baja conectividad de datos.
- Permite almacenamiento local de respaldo para preservar las últimas fijaciones cuando la subida en tiempo real no está disponible temporalmente.

## Cómo detecta Plaspy el protocolo

Plaspy recibe conexiones entrantes en un endpoint y puerto compartido y determina automáticamente el protocolo del rastreador usado por cada dispositivo. Cuando un AT-04 se configura para reportar al endpoint de Plaspy, la plataforma normalmente detecta el protocolo del rastreador sin necesidad de seleccionar el protocolo manualmente dentro de Plaspy.

- Plaspy acepta reportes de dispositivos en d.plaspy.com y en la IP pública 54.85.159.138 en el puerto 8888.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la configuración y reduce errores de instalación.
- El dispositivo puede estar configurado para usar UDP o TCP en el puerto 8888 según su firmware y los ajustes del instalador.
- Los dispositivos correctamente configurados que apunten al endpoint de Plaspy suelen ser reconocidos automáticamente por la plataforma.
- Usted normalmente sólo necesita asegurarse de que la dirección del servidor del rastreador y la configuración de transporte coincidan con el contexto de conexión de Plaspy.

## Transporte y contexto de conexión

Los ajustes de transporte y conexión determinan cómo el AT-04 abre y mantiene la comunicación con Plaspy, pero en la mayoría de instalaciones no es necesario conocer los detalles internos de los paquetes. Los puntos siguientes resumen las opciones de conexión y las consideraciones prácticas para apuntar el rastreador a Plaspy.

- El AT-04 puede configurarse para usar UDP o TCP en el puerto 8888 según el soporte del dispositivo y los ajustes elegidos.
- Los dispositivos pueden configurarse para reportar al hostname d.plaspy.com o directamente a la IP 54.85.159.138.
- Plaspy utiliza uniformemente el puerto 8888 para todos los dispositivos soportados para simplificar el aprovisionamiento y la configuración de firewalls.
- Elija UDP para menor sobrecarga y posible ahorro de energía cuando esté soportado; elija TCP si el dispositivo o la red requieren un transporte orientado a conexión.
- Confirme que cualquier firewall de red o configuración APN permita tráfico saliente al puerto 8888 para asegurar subidas fiables.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar la temporización de mensajes, campos opcionales y valores por defecto de transporte; verifique la versión de firmware al validar compatibilidad.
- Las revisiones de hardware o variantes regionales pueden afectar las bandas GSM soportadas y, por tanto, la fiabilidad del reporte en distintas regiones.
- Las opciones de configuración del fabricante a veces permiten cambiar entre UDP y TCP o modificar intervalos de latido/reportes; confirme el comportamiento deseado durante el aprovisionamiento.
- Las funciones de localización por SMS y llamada son alternativas útiles, pero operan fuera del protocolo de servidor y pueden variar según el firmware y el operador móvil.
- La detección automática de Plaspy reduce la necesidad de selección manual de protocolo, pero confirme que los ajustes del servidor del dispositivo coincidan con el endpoint de Plaspy.
- Siempre valide la integración durante una prueba de campo inicial para confirmar que la frecuencia de reporte, la precisión geográfica y el comportamiento de eventos satisfacen las necesidades operativas.

## Por qué es importante conocer el protocolo

Comprender el protocolo de comunicación ayuda a asegurar un despliegue confiable y fácil de mantener de dispositivos AT-04 con Plaspy. Tener nociones básicas del protocolo agiliza la resolución de problemas, aclara las compensaciones de duración de batería y orienta la configuración adecuada en entornos diversos.

- Ayuda a identificar por qué un dispositivo puede no aparecer en Plaspy si la dirección del servidor o el transporte están mal configurados.
- Aclara el impacto de los intervalos de reporte y los umbrales de movimiento en la duración de la batería y en el volumen de datos.
- Orienta la configuración de red y firewalls confirmando los endpoints y el uso de puertos necesarios.
- Facilita interpretar diferencias de comportamiento del dispositivo tras actualizaciones de firmware o revisiones de hardware.
- Apoya la planificación de opciones de respaldo como solicitudes por SMS o llamada cuando no hay datos celulares disponibles.

## Por qué usar Plaspy con este protocolo

Usar el AT-04 con Plaspy ofrece a las organizaciones una opción compacta y de bajo mantenimiento para el rastreo discreto: Plaspy convierte las señales de ubicación y movimiento del dispositivo en visibilidad en tiempo real, alertas e informes históricos. La combinación es especialmente adecuada para protección de activos, seguridad infantil y monitoreo ligero de rutas, donde el tamaño, la autonomía de la batería y la simplicidad de uso son prioridades.

Para saber más sobre Plaspy y cómo gestiona la comunicación de dispositivos, visite https://www.plaspy.com. Tenga en cuenta que el soporte de protocolo, el comportamiento del firmware y los detalles de implementación del dispositivo pueden cambiar con el tiempo; verifique la información más reciente sobre el protocolo y el firmware específico del fabricante en https://www.arknavgps.com.tw/.
