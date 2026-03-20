---
slug: /queclink/gv600mg/protocol
id: gv600mg-protocol
sidebar_label: Protocol
title: QuecLink - GV600MG Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo para usar el rastreador QuecLink GV600MG con Plaspy para seguimiento fiable de vehículos y remolques
keywords:
  - protocolo QuecLink GV600MG
  - protocolo GPS GV600MG
  - rastreador QuecLink Plaspy
  - rastreador LTE GV600MG
  - protocolo de comunicación GV600MG
  - protocolo de rastreo de remolques
  - rastreo de flotas GV600MG
  - compatibilidad de dispositivos Plaspy
  - informes GNSS GV600MG
  - protocolo de rastreo de activos
---

# QuecLink - Protocolo GV600MG

Esta página explica el contexto público del protocolo para usar el rastreador QuecLink GV600MG con Plaspy. Se centra en cómo se comunica el dispositivo en términos generales, qué ajustes de conexión espera Plaspy y consideraciones prácticas para lograr que el equipo informe ubicación, estado y datos de sensores a la plataforma. El GV600MG es un rastreador LTE robusto diseñado para vehículos pesados y remolques, con larga autonomía de batería, posicionamiento GNSS, soporte para sensores BLE, sensor G y opciones de integración con interfaces de unidades de refrigeración.

Plaspy utiliza ajustes de conexión compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el dispositivo comienza a reportar al endpoint de Plaspy. El comportamiento exacto del protocolo y los comandos disponibles pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante; por ello esta página ofrece orientación pública y no sensible, y recomienda validar contra la documentación del fabricante cuando sea necesario.

## Resumen del protocolo

El protocolo de comunicación del rastreador define cómo el GV600MG envía telemetría, identidad e información de eventos a un servidor remoto como Plaspy. En la práctica, el protocolo garantiza que las posiciones GNSS, mensajes de latido, lecturas de sensores y eventos de alerta se codifiquen y transmitan para que Plaspy pueda interpretarlos en seguimiento, alertas e informes de flota.

- Transporta datos de posición GNSS, marcas de tiempo y campos básicos de estado necesarios para el seguimiento y la reproducción histórica
- Transmite la identidad del dispositivo y señales de configuración para que Plaspy asocie los mensajes con el activo correcto
- Envía datos de sensores y eventos procedentes de periféricos BLE, eventos del sensor G e integraciones con unidades de refrigeración cuando estén disponibles
- Proporciona mensajes de latido o keepalive periódicos para que el servidor pueda vigilar la disponibilidad del dispositivo
- Soporta operación sobre capas de transporte estándar para que los dispositivos alcancen el endpoint de Plaspy en condiciones de red variadas

## Cómo detecta Plaspy el protocolo

Plaspy está diseñado para aceptar reportes de muchos modelos de rastreadores y determinar automáticamente el protocolo del dispositivo según las características de la conexión entrante y la carga útil. Cuando un equipo se configura para enviar datos al endpoint de Plaspy, la detección del protocolo se realiza del lado del servidor, por lo que la mayoría de los usuarios no necesitan seleccionar un protocolo manualmente.

- Apunte los dispositivos al endpoint del servidor Plaspy para que las sesiones entrantes puedan ser reconocidas
- Plaspy utiliza el mismo puerto de escucha para todos los dispositivos compatibles para simplificar la configuración y el onboarding
- Una vez que el dispositivo reporte al endpoint de Plaspy, Plaspy detectará automáticamente el protocolo del rastreador y asociará los datos entrantes al registro del dispositivo
- Por lo general, los usuarios solo configuran el host de destino y el transporte en el dispositivo, no un protocolo específico dentro de Plaspy
- Ajustes correctos de identidad del dispositivo en el rastreador (IMEI o ID de equipo) ayudan a Plaspy a emparejar los mensajes con el activo correspondiente

## Transporte y contexto de conexión

El GV600MG puede configurarse para enviar datos a través de la red usando mecanismos de transporte comunes. Para la integración con Plaspy, apunte el dispositivo al endpoint de Plaspy y use la combinación de transporte y puerto que corresponda con su firmware y entorno de red.

- El dominio del servidor Plaspy para reportes de dispositivos es d.plaspy.com
- La dirección IP del servidor Plaspy es 54.85.159.138
- El puerto de escucha de Plaspy es 8888 y es el mismo puerto utilizado para todos los dispositivos en la plataforma
- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888, según el soporte del equipo y las preferencias operativas
- Configure el rastreador para reportar a d.plaspy.com o a la IP numérica 54.85.159.138 según permita su equipo y la política de red

## Notas sobre compatibilidad del protocolo

- La compatibilidad del GV600MG con Plaspy depende de una configuración correcta del endpoint de red y del transporte en el dispositivo
- Diferencias en el nivel de firmware o en la revisión de hardware pueden cambiar las funciones disponibles o el comportamiento exacto de los mensajes
- Las opciones del fabricante para habilitar sensores BLE, integraciones con unidades de refrigeración o alarmas específicas pueden requerir configuración en el dispositivo
- La elección entre UDP y TCP puede afectar la fiabilidad y la semántica de entrega según las condiciones de la red móvil
- Verifique siempre los ajustes de identidad del dispositivo, como IMEI o ID de equipo, para que Plaspy pueda asociar los mensajes con el activo deseado
- Consulte la documentación oficial de QuecLink para detalles específicos del firmware y conjuntos de mensajes soportados

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación ayuda a asegurar una configuración fluida, un reporte fiable y una resolución de problemas efectiva cuando el GV600MG se utiliza con Plaspy. Aunque Plaspy detecta el protocolo automáticamente, el conocimiento sobre el transporte, la identidad del dispositivo y las diferencias de firmware facilita la solución cuando los mensajes no llegan como se espera.

- Garantiza el direccionamiento correcto del dispositivo al endpoint de Plaspy para que los datos se atribuyan correctamente
- Ayuda a elegir el modo de transporte y el servidor de destino adecuados para una entrega fiable
- Facilita el diagnóstico de telemetría faltante, brechas en datos de sensores o desajustes de eventos
- Orienta en decisiones sobre actualizaciones de firmware y habilitación de funciones en el rastreador
- Reduce el tiempo de incorporación de flotas al aclarar qué debe enviar el dispositivo para ser reconocido

## Por qué usar Plaspy con este protocolo

Usar el QuecLink GV600MG con Plaspy ofrece una solución práctica para organizaciones que requieren rastreadores duraderos y de larga autonomía para remolques, cisternas y activos de uso rudo. Plaspy ingiere datos de posición y de sensores para entregar visibilidad, alertas e informes históricos, de modo que los equipos de operaciones puedan monitorear ubicación, estado y patrones de movimiento sin gestionar múltiples puertos o endpoints por dispositivo.

Si desea saber más sobre la implementación del GV600MG con Plaspy, visite https://www.plaspy.com para explorar las funciones de la plataforma y la guía de incorporación. Para obtener los detalles más recientes del protocolo del dispositivo, notas de firmware y orientación del fabricante, verifique la información actual en el sitio oficial de QuecLink https://www.queclink.com/ ya que el soporte del protocolo y los detalles de implementación pueden cambiar con el tiempo.
