---
slug: /wanway/gs05/protocol
id: gs05-protocol
sidebar_label: Protocol
title: WanWay - GS05 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo para compatibilidad del WanWay GS05 con la plataforma de rastreo Plaspy
keywords:
  - Protocolo WanWay GS05
  - Protocolo GPS WanWay GS05
  - Protocolo de comunicación WanWay GS05
  - Protocolo de rastreo WanWay GS05
  - WanWay GS05 en Plaspy
  - Protocolo de rastreador WanWay
  - Rastreador GPS GS05 Plaspy
  - Protocolo de rastreo vehicular Plaspy
  - Gestión de flotas GS05
  - Guía de protocolo de rastreador GPS
---

# WanWay - Protocolo GS05

Esta página ofrece un contexto público del protocolo para usar el rastreador WanWay GS05 con la plataforma Plaspy. Se enfoca en las consideraciones de comunicación y conexión que importan cuando el GS05 envía posición y telemetría a Plaspy para monitoreo en tiempo real, alertas y reportes históricos.

El GS05 es un rastreador GPS 3G compacto con antena integrada, conector de 11 pines, múltiples sensores a bordo, entrada de micrófono opcional y batería interna de respaldo. Plaspy emplea ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, pero el comportamiento preciso del protocolo y la frecuencia de los mensajes pueden variar según la versión del firmware, la revisión del hardware y la implementación del fabricante. Siempre verifique el comportamiento específico del equipo con el fabricante cuando sea necesario.

## Resumen del protocolo

El protocolo que utiliza el GS05 define cómo el dispositivo se identifica, reporta posición y datos de sensores, y notifica eventos a un servidor remoto. En el contexto de Plaspy, este protocolo es el puente entre la telemetría cruda del dispositivo y las funciones de la plataforma que usan los administradores de flota y los propietarios de vehículos.

- Permite que el GS05 transmita la posición GPS, telemetría de sensores y notificaciones de eventos a un endpoint remoto para su ingestión por Plaspy.
- Transporta la identificación y el estado del dispositivo para que Plaspy pueda asociar los informes con el vehículo o activo correcto.
- Transmite actualizaciones de ubicación con sello de tiempo y lecturas de sensores en un formato que Plaspy puede mapear a seguimiento en vivo, geocercas y alertas.
- Soporta reporte de eventos como movimiento, estado de ignición cuando está cableado, y otros disparadores de sensores a bordo que alimentan los tableros de Plaspy.
- Permite funciones opcionales como el reporte de entrada de micrófono remota cuando esté habilitado y permitido por la legislación local.

## Cómo Plaspy detecta el protocolo

Plaspy está diseñado para recibir reportes de muchos modelos de rastreadores sin requerir selección manual de protocolo en la mayoría de los casos. Cuando un GS05 está configurado para reportar a Plaspy, la plataforma detecta automáticamente el protocolo del rastreador y mapea los mensajes entrantes a los registros de Plaspy.

- Plaspy detecta automáticamente el protocolo del rastreador cuando un dispositivo correctamente configurado envía datos al endpoint de Plaspy.
- Usualmente usted no necesita elegir un protocolo dentro de Plaspy si el GS05 está apuntando al endpoint de Plaspy.
- Una identificación consistente del dispositivo en los reportes ayuda a Plaspy a emparejar actualizaciones con el activo correcto y aplicar reglas y alertas configuradas.
- Plaspy admite los ajustes de conexión compartidos usados por los dispositivos compatibles, lo que simplifica la incorporación de equipos.
- Si un dispositivo usa firmware alternativo o una configuración no estándar, la detección puede requerir revisar los ajustes de reporte del dispositivo o las notas del firmware.

## Transporte y contexto de conexión

El GS05 puede usar el transporte de datos móviles estándar para conectarse a Plaspy. Para la integración, Plaspy expone un único endpoint y puerto compartido para todos los dispositivos compatibles, lo que simplifica la configuración y el enrutamiento del equipo.

- El dominio del servidor Plaspy es d.plaspy.com y la IP del servidor Plaspy es 54.85.159.138 y el puerto es 8888.
- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 según el soporte del equipo y la preferencia del operador.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que reduce la complejidad de configuración por dispositivo.
- Apuntar el GS05 al dominio d.plaspy.com o a la IP del servidor 54.85.159.138 son ambas formas válidas para que el dispositivo alcance la plataforma.
- Consideraciones a nivel de red como APN, enrutamiento del proveedor móvil y reglas de firewall pueden afectar la conectividad con Plaspy y deben validarse durante la puesta en marcha.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar la frecuencia de reporte del GS05, qué campos se incluyen o cómo se codifican los eventos; consulte las notas de firmware del dispositivo para obtener detalles.
- Las revisiones de hardware y accesorios opcionales, como un micrófono externo, pueden modificar la telemetría disponible y el reporte de eventos.
- La elección del protocolo de transporte TCP o UDP puede afectar las garantías de entrega y debe coincidir con lo que soporta el firmware del dispositivo y lo que permite la red.
- Pueden ser necesarios comandos de configuración por parte del fabricante o la provisión del SIM para asegurar que el GS05 pueda alcanzar el endpoint de Plaspy.
- Para operación confiable, confirme los ajustes de APN, las coberturas del plan de datos del SIM y que el dispositivo tenga permiso para establecer conexiones salientes al endpoint de Plaspy.
- Valide la compatibilidad con la documentación del fabricante para el modelo y firmware exactos que tenga desplegados.

## Por qué es importante comprender el protocolo

Entender cómo se comunica el GS05 ayuda a los instaladores y administradores a configurar un rastreo confiable, diagnosticar problemas de conectividad y asegurar que los datos que Plaspy ingiere sean completos y útiles.

- Acelera la puesta en marcha inicial al garantizar que el dispositivo apunte al endpoint y método de transporte correctos de Plaspy.
- Ayuda a resolver fallas de reporte verificando si el dispositivo está alcanzando d.plaspy.com o la IP de respaldo del servidor.
- Permite a los administradores interpretar el tiempo de los eventos y la frecuencia de telemetría en relación con los ajustes de firmware y el comportamiento de energía.
- Apoya la planificación a escala de flota al clarificar con qué frecuencia reportarán los dispositivos y cómo eso impacta el consumo de datos.
- Facilita la validación de funciones opcionales como la entrada de micrófono y el cableado de sensores para que la telemetría esperada llegue a Plaspy.

## Por qué usar Plaspy con este protocolo

Usar el WanWay GS05 con Plaspy ofrece una vía práctica y directa para lograr visibilidad de vehículos en tiempo real, consolidación de telemetría y supervisión operativa. El dispositivo GS05 entrega fijaciones de posición, eventos de sensores y entrada de audio opcional a Plaspy, donde esa información se presenta en mapas en vivo, alertas y reportes históricos útiles para administradores de flota y propietarios de vehículos.

Para saber más sobre Plaspy y cómo la plataforma ingiere datos de rastreadores, visite https://www.plaspy.com. Para los detalles más recientes específicos del dispositivo, notas de firmware y orientación de implementación del fabricante, verifique la información actual en https://www.wanwaytech.net/ . El soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo, por lo que es recomendable consultar la documentación del fabricante al planear despliegues o al solucionar el comportamiento del dispositivo.
