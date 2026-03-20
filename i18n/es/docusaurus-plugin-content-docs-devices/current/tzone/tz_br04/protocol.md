---
slug: /tzone/tz_br04/protocol
id: tz_br04-protocol
sidebar_label: Protocol
title: TZone - TZ-BR04 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del rastreador GPS TZone TZ BR04 y cómo se comunica con Plaspy para seguimiento confiable
keywords:
  - Protocolo TZone TZ BR04
  - Protocolo GPS TZone TZ BR04
  - Compatibilidad TZone TZ BR04 Plaspy
  - Protocolo rastreador GPS TZone
  - Protocolo de seguimiento TZ BR04
  - Compatibilidad rastreadores Plaspy
  - Protocolo de comunicación de rastreadores
  - Rastreador GPS industrial
  - Protocolo de seguimiento de vehículos
  - Integración de seguimiento de flotas
---

# TZone - TZ-BR04 Protocolo

Esta página ofrece un resumen público del contexto del protocolo para usar el rastreador GPS TZone TZ-BR04 con Plaspy. Se centra en cómo se comunica el dispositivo en términos generales, qué ajustes de conexión utiliza Plaspy y qué debe considerarse al integrar este rastreador industrial en una implementación de monitoreo de flotas. El contenido está pensado para ayudar a usuarios técnicos e integradores a comprender la relación de comunicación entre el TZ-BR04 y Plaspy sin exponer detalles privados del fabricante.

Plaspy usa ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando un dispositivo reporta al endpoint de Plaspy. El comportamiento exacto del protocolo del TZ-BR04 puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante. El TZ-BR04 es un rastreador de grado industrial con soporte Bluetooth 4.0, opciones de salida RS232 y RS485, antena externa y amplia tolerancia de temperatura; esas características de hardware influyen en cómo se configura para transmitir datos a Plaspy.

## Resumen del protocolo

El protocolo del rastreador TZ-BR04 define cómo el dispositivo se identifica con un servidor, cómo reporta ubicación y telemetría, y cómo mantiene una sesión operativa. Para la integración con Plaspy esto implica que el dispositivo envía datos periódicos y por eventos al endpoint de Plaspy para que la plataforma pueda parsear y presentar información de seguimiento útil. El resumen a continuación destaca el papel del protocolo en términos generales, sin detallar internals de firmware.

- Permite que el rastreador informe ubicación, movimiento y estado a un servidor remoto para monitoreo y registro.
- Transporta información de identidad y sesión para que Plaspy asocie los mensajes entrantes con el registro de dispositivo correcto.
- Lleva telemetría como intensidad de señal, ángulo de identificación y datos de sensores ambientales cuando están disponibles.
- Soporta reportes periódicos y mensajes por eventos para equilibrar la frecuencia de actualizaciones con el consumo de energía y el ancho de banda.
- Permite flujos de trabajo de comandos remotos y configuración cuando el rastreador y el firmware del fabricante soportan comandos server-side.

## Cómo Plaspy detecta el protocolo

Plaspy ofrece un endpoint de red y un puerto comunes para el reporte de dispositivos y está diseñado para identificar automáticamente el protocolo entrante cuando un dispositivo está correctamente configurado para reportar a Plaspy. En la mayoría de los casos no es necesario seleccionar manualmente un protocolo en Plaspy si el dispositivo está enviando datos al endpoint y puerto correctos de Plaspy.

- El dominio del servidor de Plaspy para el reporte de dispositivos es d.plaspy.com para configuraciones basadas en DNS.
- La IP del servidor de Plaspy es 54.85.159.138, que puede usarse como alternativa al nombre de dominio.
- El puerto que utiliza Plaspy para todos los dispositivos es 8888 y se comparte entre los rastreadores soportados.
- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 según la capacidad del equipo y la preferencia de configuración.
- Cuando un TZ-BR04 correctamente configurado reporta al endpoint de Plaspy, la plataforma detectará automáticamente el protocolo del rastreador y enrutará los mensajes al parser y registro de dispositivo correspondientes.

## Transporte y contexto de conexión

Los ajustes de transporte y conexión determinan cómo el TZ-BR04 llega a Plaspy en la red. El dispositivo soporta múltiples interfaces físicas y modos de salida que pueden mapearse a reportes en red a través de una pasarela o mediante una interfaz de red en el propio dispositivo según la instalación. Esta sección aclara el contexto de conexión sin afirmar formatos de mensaje a nivel de firmware.

- El TZ-BR04 puede configurarse para reportar a Plaspy usando UDP o TCP en el puerto 8888 según el soporte del dispositivo y los requisitos del sitio.
- Para configuraciones basadas en DNS apunte el host de reporte del dispositivo a d.plaspy.com para que Plaspy pueda resolverse dinámicamente.
- Como alternativa a DNS, el dispositivo puede configurarse para reportar directamente a 54.85.159.138 si la implementación prefiere un endpoint IP estático.
- Plaspy utiliza el mismo puerto 8888 para todos los dispositivos soportados, lo que simplifica la configuración y las reglas de firewall.
- La selección entre UDP y TCP puede afectar el comportamiento de entrega y debe elegirse en función de los requisitos de confiabilidad y de la capacidad del dispositivo.

## Notas sobre compatibilidad del protocolo

- Las versiones de firmware del fabricante pueden cambiar la temporización de mensajes y los campos disponibles; siempre verifique la versión del firmware al validar la compatibilidad.
- Las revisiones de hardware del TZ-BR04 que modifican las interfaces soportadas o las características radio pueden afectar cómo se configura el dispositivo para reenviar datos a Plaspy.
- Cuando se usan modos de salida RS232 o RS485, la ruta de datos que entrega los mensajes a Plaspy (por ejemplo, una pasarela local o un módem) debe configurarse para reenviar a d.plaspy.com o 54.85.159.138 en el puerto 8888.
- El Bluetooth 4.0 del dispositivo puede emplearse para configuración local o conectividad de accesorios, pero es independiente del canal de reporte en red hacia Plaspy.
- Diferencias de transporte, como elegir UDP frente a TCP, pueden cambiar la semántica de entrega de paquetes y deben probarse en el entorno objetivo.
- Valide el comportamiento del dispositivo contra la documentación del fabricante para el build y firmware exactos en lugar de confiar en suposiciones genéricas.

## Por qué es importante entender el protocolo

Tener un entendimiento práctico del protocolo de comunicación del TZ-BR04 mejora el éxito de la configuración, reduce el tiempo de integración y ayuda a diagnosticar problemas cuando los dispositivos no aparecen en Plaspy o cuando la telemetría está incompleta. Saber qué ajustes de conexión usar y qué variables pueden diferir entre firmware o revisiones de hardware empodera a administradores e integradores durante la implementación y el mantenimiento.

- Asegura la correcta configuración del host de reporte y del transporte para que los mensajes lleguen a Plaspy de forma fiable.
- Ayuda a diagnosticar problemas de conectividad al acotar el alcance a transporte, resolución DNS o reglas de firewall.
- Apoya decisiones sobre la frecuencia de reporte y los disparadores por evento para equilibrar uso de red y resolución de rastreo.
- Facilita la verificación de que las rutas de datos RS232 o RS485 y cualquier dispositivo gateway estén reenviando correctamente al endpoint de Plaspy.
- Reduce el tiempo dedicado a la resolución de problemas al entender qué características del dispositivo son relevantes para la integración con el servidor.

## Por qué usar Plaspy con este protocolo

Usar el TZone TZ-BR04 con Plaspy ofrece una forma práctica de convertir la telemetría del dispositivo en visibilidad accionable para el monitoreo de activos y vehículos. El modelo de endpoint compartido y la detección automática de protocolos de Plaspy simplifican el proceso de incorporación de dispositivos para que los equipos técnicos puedan enfocarse en la ubicación, configuración y políticas operativas en vez de endpoints personalizados para cada rastreador.

Para saber más sobre cómo Plaspy soporta integraciones de dispositivos y seguimiento de flotas visite https://www.plaspy.com. El soporte de protocolo, el comportamiento del firmware y los detalles de implementación del fabricante pueden cambiar con el tiempo, por lo que le recomendamos verificar la documentación específica del dispositivo y las notas de firmware más recientes con el fabricante en http://www.tzonedigital.com/ para obtener la información más actual y autorizada.
