---
slug: /wp/m7_d2/protocol
id: m7_d2-protocol
sidebar_label: Protocol
title: WP - M7 D2 Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo del rastreador WP M7 D2 y cómo se comunica con Plaspy para integrar el seguimiento de vehículos
keywords:
  - WP M7 D2 protocolo
  - WP M7 D2 protocolo GPS
  - WP M7 D2 compatibilidad Plaspy
  - WP M7 D2 protocolo de comunicación
  - WP M7 D2 protocolo de rastreo
  - Integración de dispositivos Plaspy
  - protocolo rastreador de vehículos
  - comunicación rastreador GPS
  - transporte rastreador UDP TCP
  - protocolo de rastreo de flotas
---

# WP - M7 D2 Protocolo

Esta página ofrece una explicación pública y de alto nivel sobre el contexto de comunicación del rastreador WP M7 D2 cuando se utiliza con la plataforma Plaspy. Se enfoca en cómo el dispositivo reporta ubicación y estado a Plaspy y en qué ajustes de conexión se usan para una integración exitosa, sin entrar en detalles privados de análisis de mensajes.

Plaspy emplea ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el equipo está correctamente configurado para reportar al endpoint de Plaspy. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página describe el contexto general de comunicación y consideraciones prácticas de compatibilidad basadas en las capacidades del M7 D2.

## Visión general del protocolo

El protocolo usado por el M7 D2 define cómo el rastreador transmite posición, movimiento, alertas y estado del dispositivo a un servidor remoto. Para la integración con Plaspy, el papel público del protocolo es establecer la conexión de transporte, identificar el dispositivo y entregar la telemetría en un formato que la plataforma pueda interpretar y mapear a eventos de vehículo e historial de ubicaciones.

- Permite que el rastreador envíe informes de ubicación, movimiento y alertas a un servidor remoto para su procesamiento.
- Transporta información de identificación y estado para que Plaspy pueda asociar los informes entrantes con el registro de dispositivo correcto.
- Admite múltiples métodos de transporte disponibles en el M7 D2, como SMS, GPRS, UDP y TCP, para una conectividad flexible.
- Sirve como base para reportes de movimiento, alertas por manipulación o desconexión, notificaciones de batería baja y mensajes relacionados con roaming.
- Permite que Plaspy convierta los informes crudos del dispositivo en telemetría usable para mapeo, alertas y reproducción histórica sin exponer detalles internos del equipo.

## Cómo Plaspy detecta el protocolo

Plaspy recibe los informes de los dispositivos en un endpoint público compartido y determina automáticamente el protocolo del rastreador entrante, por lo que los usuarios normalmente no necesitan seleccionar manualmente el protocolo en la plataforma. Cuando el M7 D2 está configurado para reportar a Plaspy, la plataforma empata las conexiones entrantes y las características de los mensajes con el manejador correcto para ese dispositivo.

- Plaspy escucha en un único endpoint público para conexiones de dispositivos en d.plaspy.com y la dirección IP de servidor correspondiente 54.85.159.138.
- Todos los dispositivos soportados por Plaspy usan el mismo puerto de escucha, lo que hace consistente la configuración del equipo.
- Plaspy detecta automáticamente el protocolo del rastreador a partir del tráfico entrante cuando un dispositivo envía informes al endpoint de Plaspy.
- En la mayoría de los casos solo necesita apuntar el M7 D2 a la dirección y puerto de Plaspy; la plataforma se encargará de la identificación del protocolo.
- Si un dispositivo utiliza SMS como respaldo, Plaspy puede ingerir mensajes de posición reenviados a través de las rutas de enrutamiento de la plataforma o gateways de transcripción cuando estén disponibles.

## Transporte y contexto de conexión

El M7 D2 soporta múltiples opciones de transporte para el reporte, lo que ofrece flexibilidad según las condiciones de red y los escenarios de despliegue. Para la integración con Plaspy, es importante configurar el equipo para usar uno de los transportes IP soportados y apuntarlo al endpoint de Plaspy para que los informes lleguen a la plataforma de forma confiable.

- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 según el soporte del equipo y las preferencias de configuración.
- Los equipos configurados para reporte por IP pueden apuntar a d.plaspy.com o directamente a la IP del servidor Plaspy 54.85.159.138.
- Plaspy utiliza el mismo puerto 8888 para todos los dispositivos soportados con el objetivo de simplificar la configuración entre modelos.
- UDP suele emplearse para reportes de bajo overhead, mientras que TCP puede elegirse para una entrega más fiable cuando el dispositivo lo soporta.
- Verifique que la transmisión de datos móviles o la configuración GPRS en el rastreador permita conexiones salientes al endpoint de Plaspy y al transporte elegido.

## Notas de compatibilidad del protocolo

- Las revisiones de firmware en el M7 D2 pueden cambiar comportamientos como campos de mensaje, intervalos de reporte y funciones de transporte soportadas.
- Las variantes de hardware o por región pueden implementar pequeñas diferencias en los reportes o comandos soportados; valide los detalles del equipo específico.
- La selección de transporte (UDP vs TCP) puede afectar las características de entrega; elija el transporte que mejor se adapte a la confiabilidad de la red y a la capacidad del dispositivo.
- Los valores predeterminados configurados por el fabricante (APN, formato de dirección del servidor, preferencias de roaming) influyen en si el dispositivo puede alcanzar el endpoint de Plaspy.
- Siempre verifique el formato del ID de dispositivo y el modo de reporte para que Plaspy pueda asociar los mensajes entrantes con el registro correcto.
- Consulte la documentación oficial del fabricante para notas de firmware específicas que afecten el comportamiento del protocolo antes de un despliegue a gran escala.

## Por qué es importante comprender el protocolo

Comprender el protocolo de comunicación ayuda a asegurar que el M7 D2 esté configurado para llegar a Plaspy de forma fiable y que la plataforma pueda interpretar correctamente los informes del dispositivo. Tener claridad sobre las opciones de transporte, modos de reporte y comportamientos comunes del equipo reduce el tiempo de configuración y mejora la fiabilidad a largo plazo.

- Acelera la configuración inicial al confirmar que se emplean la dirección del servidor y el transporte correctos.
- Facilita el diagnóstico cuando un dispositivo no aparece en Plaspy si los informes no están llegando al endpoint.
- Orienta la elección entre transportes (UDP vs TCP) y la configuración de datos móviles para distintos entornos de red.
- Permite planificar actualizaciones de firmware y revisiones de hardware que puedan alterar el comportamiento.
- Mejora la respuesta ante alertas como manipulación o batería baja al asegurar que esos reportes estén habilitados y correctamente enrutados.

## Por qué usar Plaspy con este protocolo

Usar el WP M7 D2 con Plaspy ofrece a las organizaciones una vía sencilla para obtener datos de ubicación, movimiento y alertas desde un rastreador resistente y de larga duración en standby. El enfoque de endpoint compartido de Plaspy y la detección automática de protocolo simplifican el aprovisionamiento del dispositivo, de modo que los equipos puedan concentrarse en la monitorización operativa en lugar del análisis de bajo nivel.

Si usted evalúa el M7 D2 para rastreo de flotas o activos, configure el rastreador para reportar por IP a d.plaspy.com o a 54.85.159.138 en el puerto 8888 usando el transporte que mejor se ajuste a sus condiciones de red. Plaspy detectará automáticamente el protocolo del rastreador y asociará los informes entrantes con su cuenta cuando el dispositivo esté correctamente configurado.

Learn more about Plaspy and how it supports device integrations at https://www.plaspy.com. For the most current firmware behavior and device specific protocol details verify information on the manufacturer website http://www.wondeproud.com/ since protocol support and device implementation can change over time.
