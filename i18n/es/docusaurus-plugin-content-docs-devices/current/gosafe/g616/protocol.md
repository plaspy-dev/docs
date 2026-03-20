---
slug: /gosafe/g616/protocol
id: g616-protocol
sidebar_label: Protocol
title: Gosafe - G616 Protocol
sidebar_class_name: menu_item_tracker
description: Contexto público del protocolo para usar el rastreador Gosafe G616 con Plaspy y gestión de flotas
keywords:
  - Protocolo Gosafe G616
  - Protocolo GPS Gosafe G616
  - Gosafe G616 Plaspy
  - Protocolo rastreador G616
  - Comunicación rastreador GPS
  - Telemetría vehículo G616
  - Rastreador compatible con Plaspy
  - G616 LTE Cat-1 rastreo
  - Telemetría choque G616
  - Rastreo de flotas G616
---

# Gosafe - Protocolo G616

Esta página describe el contexto público del protocolo para usar el rastreador Gosafe G616 con Plaspy. Resume cómo el dispositivo reporta telemetría y eventos a Plaspy, y destaca el contexto de conexión y las consideraciones prácticas de compatibilidad relevantes para integradores y operadores de flota. El G616 es un dispositivo telemático robusto diseñado para gestión de flotas empresariales, que ofrece posicionamiento multi GNSS, conectividad LTE Cat‑1 con fallback a GSM, detección de choques a alta frecuencia y un conjunto amplio de entradas/salidas de vehículo que Plaspy puede procesar para seguimiento, análisis y alertas.

Plaspy usa ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador, aunque el comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante. En la práctica esto significa que el mismo endpoint y puerto de Plaspy aceptan reportes de muchos tipos de dispositivos y Plaspy detectará e interpretará los datos entrantes, pero los integradores deben validar el comportamiento frente al firmware del dispositivo y la documentación del fabricante antes de un despliegue a gran escala.

## Resumen del protocolo

El protocolo de reporte del G616 define cómo el rastreador se identifica frente a un servidor, transmite ubicación y datos de sensores, y señala eventos discretos como cambios de ignición o detecciones de choque. A alto nivel, el propósito del protocolo es entregar registros de telemetría y eventos en un formato que Plaspy pueda ingerir para seguimiento en vivo, reproducción histórica, alertas y análisis.

- Permite transmisión periódica y por eventos de posición GPS, hora y metadatos de fijación de satélites a un servidor remoto.
- Transporta estados de entradas y salidas del vehículo, como sentido de ignición, lecturas analógicas y entradas digitales para que Plaspy las interprete.
- Transmite resúmenes de choque y acelerómetro de alta frecuencia para que Plaspy registre líneas de tiempo de eventos y soporte análisis de incidentes.
- Soporta identificación de dispositivo e informes de sesión para que Plaspy pueda asociar mensajes entrantes con el registro de activo correcto.
- Puede incluir canales suplementarios de telemetría, como datos de sensores BLE, lecturas de sensor de combustible y contadores diagnósticos según la configuración.

## Cómo detecta Plaspy el protocolo

Plaspy acepta conexiones entrantes en un endpoint y puerto compartido para todos los dispositivos soportados y realiza detección automática de protocolo sobre los mensajes recibidos. Cuando un G616 está configurado para reportar a Plaspy, la plataforma asociará la telemetría entrante con el dispositivo e interpretará los campos apropiados a las capacidades del rastreador, sin que el usuario tenga que seleccionar manualmente un protocolo dentro de Plaspy.

- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo reporta al endpoint de Plaspy.
- Si el G616 apunta al endpoint y puerto correctos de Plaspy, normalmente no se requiere seleccionar el protocolo manualmente en la plataforma.
- Plaspy utiliza el mismo puerto de escucha para todos los rastreadores soportados, lo que simplifica la configuración del dispositivo.
- Es importante configurar correctamente el identificador del dispositivo en el G616 para que Plaspy pueda emparejar los mensajes con el activo correcto.
- El firmware del dispositivo y el contenido de los mensajes determinan qué campos de telemetría Plaspy podrá poblar en la plataforma.

## Transporte y contexto de conexión

El G616 soporta transportes celulares estándar y puede configurarse para entregar telemetría sobre sockets de red u otros modos de datos. Una configuración de transporte precisa es un requisito práctico para la entrega exitosa de mensajes a Plaspy y para que la plataforma detecte y decodifique el protocolo del dispositivo.

- Plaspy server domain is d.plaspy.com
- Plaspy server IP is 54.85.159.138
- The port is 8888
- El dispositivo puede configurarse usando UDP o TCP en el puerto 8888 según el soporte del equipo y la preferencia del operador
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica el aprovisionamiento y la expansión de flota
- Algunos escenarios de despliegue usan SMS o modos de respaldo para telemetría cuando los datos celulares no están disponibles; verifique las opciones de configuración del dispositivo si se requiere SMS

## Notas de compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar el contenido de los mensajes, los campos disponibles y los transportes soportados; verifique el nivel de firmware del G616 antes de confiar en campos de telemetría específicos.
- Las revisiones de hardware u accesorios opcionales (sensores BLE, antenas externas, opciones de batería) pueden añadir o modificar canales de datos disponibles.
- La selección de transporte (TCP vs UDP) afecta las garantías de entrega pero no cambia el hecho de que Plaspy usa el mismo puerto; elija el transporte que coincida con la configuración del dispositivo y las necesidades de confiabilidad de la red.
- Las cadenas de configuración del fabricante y los identificadores del dispositivo deben estar correctamente establecidos para que Plaspy detecte y asocie los mensajes con el vehículo correcto.
- Algunas funciones, como FOTA, registros de choque de alta frecuencia o telemetría extendida de sensores, pueden requerir configuración adicional o ajustes del servidor para transmitir datos a Plaspy.
- Siempre coteje el comportamiento observado en campo con la documentación oficial de Gosafe al validar la compatibilidad.

## Por qué es importante entender el protocolo

Comprender cómo se comunica el G616 ayuda a asegurar una configuración confiable, la interpretación correcta de la telemetría dentro de Plaspy y un comportamiento predecible ante condiciones límite como pérdida de conectividad o actualizaciones de firmware. Tener claridad sobre el protocolo reduce el tiempo necesario para el comisionamiento de dispositivos y aumenta la estabilidad operativa a largo plazo.

- Acelera el aprovisionamiento inicial al clarificar transporte, servidor y requisitos de identificador.
- Ayuda a resolver problemas de telemetría faltante o malformada al acotar si el problema está en el dispositivo, el transporte o el mapeo en la plataforma.
- Orienta la decisión entre TCP y UDP según la confiabilidad de la red y la tolerancia a pérdida de mensajes.
- Garantiza que el reporte de eventos, como registros de choque o transiciones de ignición, se entregue y mapee correctamente en los paneles de Plaspy.
- Apoya la planificación de actualizaciones de firmware y la habilitación de canales de telemetría opcionales como BLE o sensores de combustible.

## Por qué usar Plaspy con este protocolo

Usar el G616 con Plaspy ofrece una vía práctica para combinar hardware telemático robusto y de alta precisión con una plataforma de gestión de flotas que acepta la telemetría, eventos y datos de sensores del dispositivo. El posicionamiento multi GNSS del G616, la conectividad LTE Cat‑1 con fallback a GSM, la detección de choques y la E/S flexible lo hacen adecuado para flujos de trabajo de despacho, seguridad y telemática para seguros que Plaspy soporta.

Si planea desplegar el G616 a escala con Plaspy, siga las prácticas estándar de aprovisionamiento: configure el dispositivo para reportar a d.plaspy.com o 54.85.159.138, ponga el transporte del dispositivo en TCP o UDP en el puerto 8888, y verifique que el identificador del dispositivo y la configuración de firmware coincidan con el perfil de telemetría deseado. Conozca más sobre Plaspy en el sitio principal https://www.plaspy.com y verifique los detalles más recientes del protocolo específico del dispositivo y el comportamiento de firmware con Gosafe en https://gosafesystem.com/ dado que el soporte y la implementación del protocolo pueden cambiar con el tiempo.
