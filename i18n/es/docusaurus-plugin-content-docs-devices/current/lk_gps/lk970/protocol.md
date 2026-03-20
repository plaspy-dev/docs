---
slug: /lk_gps/lk970/protocol
id: lk970-protocol
sidebar_label: Protocol
title: LK-GPS - LK970 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del rastreador LK-GPS LK970 y su comunicación con Plaspy para rastreo fiable de vehículos y activos
keywords:
  - protocolo LK GPS LK970
  - protocolo rastreador GPS LK970
  - compatibilidad LK970 Plaspy
  - comunicación Plaspy LK970
  - integración rastreador GPS LK970
  - resumen protocolo LK970
  - rastreo vehicular LK970 Plaspy
  - consulta plataforma SMS LK970
  - protocolo rastreador 4G LK970
  - notas protocolo firmware LK970
---

# LK-GPS - Protocolo LK970

Esta página presenta el contexto público del protocolo para usar el rastreador LK-GPS LK970 con la plataforma Plaspy. Se centra en el comportamiento de comunicación a alto nivel, las configuraciones de conexión que Plaspy espera y consideraciones prácticas para integrar el LK970 en una implementación de Plaspy sin exponer detalles internos de firmware o implementaciones privadas.

Plaspy emplea configuraciones de conexión compartidas entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando un equipo reporta a la plataforma. El comportamiento exacto del dispositivo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página ofrece orientación general y no sustituye la documentación oficial del fabricante.

## Visión general del protocolo

El protocolo de reporte del rastreador define cómo el LK970 envía actualizaciones de posición, estado y alarmas a un servidor remoto, y cómo se gestionan a alto nivel las respuestas o confirmaciones del servidor. Para la integración con Plaspy, el protocolo permite que el dispositivo se identifique, transmita datos GPS y telemáticos útiles, y entregue notificaciones de eventos que Plaspy puede presentar a los usuarios.

- Establece un destino de servidor y transporte para el reporte periódico de ubicación y mensajes de eventos
- Proporciona identificación del dispositivo para que la plataforma asocie los datos entrantes a una unidad LK970 concreta
- Entrega información de posición, movimiento y alarmas que Plaspy convierte en registros de ubicación y estado
- Admite métodos complementarios como consultas por SMS cuando están disponibles, además del reporte por IP
- Puede incluir intervalos de reporte configurables y disparadores de eventos controlados por ajustes del equipo o comandos SMS

## Cómo Plaspy detecta el protocolo

Plaspy escucha en un único endpoint y puerto compartido para todos los rastreadores soportados, por lo que cuando un LK970 se configura para reportar correctamente a Plaspy, la plataforma detectará automáticamente el protocolo del dispositivo. En la mayoría de los casos, usted no necesita seleccionar un protocolo específico dentro de Plaspy si el rastreador apunta al endpoint de Plaspy y utiliza un transporte esperado.

- Plaspy usa el dominio de servidor d.plaspy.com para el reporte de dispositivos
- La IP del servidor Plaspy es 54.85.159.138 y el puerto de servicio es 8888
- Plaspy detecta automáticamente el protocolo del rastreador a partir de los reportes entrantes sin selección manual
- Normalmente usted solo necesita configurar el LK970 para que reporte al endpoint de Plaspy para habilitar la detección
- Porque Plaspy utiliza un puerto compartido entre dispositivos, mantener transporte y destino consistentes es importante para el descubrimiento

## Transporte y contexto de conexión

El transporte y la direccionamiento determinan cómo el LK970 alcanza Plaspy y con qué fiabilidad se entregan los mensajes. El LK970 puede configurarse para usar transportes por paquetes compatibles con el dispositivo y la red, y estas opciones afectan directamente características de entrega como latencia y fiabilidad.

- El LK970 puede configurarse para usar UDP o TCP en el puerto 8888 según el soporte del equipo y el comportamiento de la red del operador
- Los dispositivos pueden apuntar al dominio d.plaspy.com o a la dirección IP 54.85.159.138
- Plaspy usa el mismo puerto, 8888, para todos los dispositivos soportados para simplificar la configuración del endpoint
- La elección entre UDP o TCP puede afectar la retransmisión y el comportamiento de sesión, pero Plaspy acepta ambos en el puerto compartido
- Asegúrese de que el APN y la configuración de red en el LK970 permitan conexiones de datos 4G al endpoint de Plaspy configurado

## Notas sobre compatibilidad del protocolo

- El LK970 es compatible con Plaspy cuando se configura para reportar al endpoint de Plaspy y las opciones de transporte son correctas
- Las revisiones de firmware pueden cambiar el comportamiento de reporte o los comandos disponibles; confirme los detalles de firmware al solucionar problemas
- Las variantes de hardware y las revisiones de modelo etiquetadas A, B o C pueden tener pequeñas diferencias en bandas soportadas o gestión de energía que afectan el reporte
- Puede ser necesario seleccionar UDP o TCP en el equipo según el rendimiento del operador y las condiciones de la red
- Las consultas a la plataforma vía SMS son comúnmente soportadas por el LK970 y pueden usarse como método de respaldo o de configuración donde estén disponibles
- Siempre valide la configuración y capacidades del equipo con la documentación oficial del fabricante para su unidad específica

## Por qué es importante conocer el protocolo

Comprender el protocolo de comunicación ayuda a garantizar que el LK970 reporte de forma fiable posición y eventos a Plaspy, facilita la resolución de problemas y respalda la fiabilidad a largo plazo en despliegues de rastreo de flotas y activos.

- La direccionamiento y la selección adecuada del transporte evitan reportes perdidos o mal enroutados
- Saber cómo se identifica el rastreador ayuda a Plaspy a mapear los paquetes entrantes al registro de activo correcto
- Conocer las variaciones de firmware y hardware reduce el tiempo dedicado a rastrear problemas intermitentes
- Entender los modos de reporte disponibles, como actualizaciones en tiempo real o consultas por SMS, facilita diseñar flujos operativos
- Tener expectativas claras sobre el comportamiento de reporte acelera la configuración y reduce la carga de soporte

## Por qué usar Plaspy con este protocolo

Usar el LK-GPS LK970 con Plaspy ofrece a organizaciones y usuarios una forma directa de centralizar ubicación en tiempo real, alarmas y datos históricos de rastreo para vehículos, motocicletas o activos portátiles. La detección automática de protocolo de Plaspy y su endpoint compartido simplifican la incorporación de dispositivos: las unidades correctamente apuntadas al endpoint de Plaspy pueden comenzar a reportar sin configuraciones complejas por dispositivo dentro de la plataforma.

Para saber más sobre Plaspy y cómo maneja conexiones de dispositivos y datos telemáticos, visite https://www.plaspy.com. Para detalles de protocolo específicos del dispositivo, notas de firmware e instrucciones de configuración del LK970 consulte la documentación del fabricante en https://www.lk-gps.com. El soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo, por lo que se recomienda verificar los recursos más recientes del fabricante.
