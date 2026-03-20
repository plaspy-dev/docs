---
slug: /winrich/tk168/protocol
id: tk168-protocol
sidebar_label: Protocol
title: Winrich - TK168 Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo del Winrich TK168 y su comunicación con Plaspy para rastreo GPS y gestión de flotas
keywords:
  - Protocolo Winrich TK168
  - Protocolo GPS Winrich TK168
  - Protocolo de comunicación Winrich TK168
  - Protocolo de rastreo Winrich TK168
  - Protocolo rastreador GPS Winrich
  - Compatibilidad TK168 Plaspy
  - Winrich TK168 GPRS SMS
  - Protocolo rastreo de vehículos Winrich
  - Gestión de flotas TK168
  - Protocolo rastreador Plaspy
---

# Winrich - Protocolo TK168

Esta página ofrece contexto público sobre el protocolo utilizado por el rastreador GPS Winrich TK168 cuando se integra con Plaspy. Explica cómo el dispositivo suele comunicarse con la plataforma para enviar posiciones, ofrecer funciones de monitoreo remoto y ejecutar controles básicos, sin entrar en detalles sensibles de implementación. La información está pensada para ayudar a administradores, integradores y usuarios técnicos a comprender el comportamiento de conexión y el papel del protocolo de reporte del rastreador.

Plaspy acepta conexiones en un endpoint compartido y detecta automáticamente el protocolo del rastreador cuando los dispositivos envían datos a la plataforma. El comportamiento exacto del protocolo en un TK168 puede variar según la versión de firmware, la revisión de hardware y la configuración del fabricante. Considere esta página como una guía general y consulte al fabricante para detalles específicos del firmware.

## Resumen del protocolo

El protocolo de comunicación del TK168 define cómo el rastreador transmite la ubicación, el estado y los eventos a un servidor remoto, y cómo se entregan los controles y alertas desde la plataforma. Para la integración con Plaspy, el protocolo permite identificar de forma fiable el dispositivo, enviar actualizaciones periódicas de posición y notificaciones de eventos que la plataforma puede interpretar y mostrar.

- Permite que el rastreador se identifique ante el servidor para que Plaspy pueda asociar los datos con el registro de dispositivo correcto.
- Entrega datos de posición GPS y telemetría relacionada, como estado de movimiento, estado de alimentación y alarmas.
- Facilita comandos y controles remotos opcionales desde la plataforma cuando el dispositivo y el firmware lo soportan.
- Admite múltiples modos de transporte, como reporte por internet vía GPRS y modos de respaldo como SMS para funciones específicas.
- Permite enviar actualizaciones periódicas o basadas en eventos que Plaspy utiliza para seguimiento en vivo e historial.

## Cómo Plaspy detecta el protocolo

Plaspy utiliza un endpoint y una disposición de puertos unificados para los datos entrantes de rastreadores, y la plataforma está diseñada para detectar automáticamente el protocolo cuando un dispositivo correctamente configurado reporta. En la mayoría de los casos no es necesario seleccionar manualmente el protocolo dentro de Plaspy si el TK168 está configurado para reportar al endpoint de Plaspy.

- El dominio del servidor de Plaspy es d.plaspy.com, que los dispositivos pueden usar como host de reporte.
- La IP del servidor de Plaspy es 54.85.159.138 y puede usarse si prefiere configurar la dirección directa.
- El puerto es 8888 y el dispositivo puede configurarse usando UDP o TCP en el puerto 8888.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la configuración para despliegues.
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que los dispositivos que reportan correctamente normalmente aparecerán sin necesidad de selección manual.

## Transporte y contexto de conexión

Las opciones de conexión y transporte afectan la forma en que el TK168 reporta a Plaspy. El dispositivo soporta reporte por internet y puede configurarse para usar UDP o TCP según el firmware y las condiciones de red locales. Comprender estas opciones ayuda a asegurar que el rastreador llegue de forma confiable a la plataforma Plaspy.

- Los dispositivos pueden apuntar a d.plaspy.com como host DNS o a 54.85.159.138 como IP del servidor.
- El dispositivo puede configurarse usando UDP o TCP en el puerto 8888 según su soporte y configuración.
- El uso de un mismo puerto para todos los dispositivos simplifica la configuración en flotas mixtas.
- La conectividad por datos GPRS se usa comúnmente para reportes continuos, mientras que SMS puede servir de alternativa para comandos y alertas básicas en algunas configuraciones TK168.
- Las condiciones de red, la configuración APN del operador y el firmware del dispositivo pueden influir en si TCP o UDP resulta más adecuado.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden introducir cambios en intervalos de reporte, eventos disponibles o soporte de comandos; verifique la versión de firmware al solucionar problemas.
- Revisión de hardware y módulos opcionales pueden añadir o quitar funciones como corte remoto, SOS o monitoreo de micrófono.
- Algunas unidades TK168 dependen principalmente de GPRS para reporte por internet, mientras que otras pueden estar optimizadas para respaldo por SMS; confirme el modo que usa su unidad.
- La selección del transporte entre UDP y TCP es configurable en el dispositivo y puede afectar la fiabilidad según el entorno de red.
- Las cadenas de configuración del fabricante y los ajustes de dirección del servidor deben ser correctos para que el dispositivo alcance d.plaspy.com o 54.85.159.138 en el puerto 8888.
- Siempre valide la compatibilidad y la disponibilidad de funciones contra la documentación Winrich más reciente para la versión específica del TK168.

## Por qué es importante entender el protocolo

Comprender cómo se comunica el TK168 facilita una integración fluida con Plaspy, reduce el tiempo de configuración y mejora la fiabilidad a largo plazo. Tener claridad sobre el rol del protocolo ayuda a configurar correctamente los dispositivos, interpretar su comportamiento y resolver problemas de conectividad.

- Asegura que el reporte del dispositivo se dirija a Plaspy con el host y el transporte correctos.
- Ayuda a identificar si la falta de datos se debe a la red, al firmware o a la configuración.
- Facilita la decisión de usar UDP o TCP según la conectividad y los requisitos del servidor.
- Permite planificar capacidades de comandos remotos, como corte remoto, cuando el firmware del dispositivo lo habilite.
- Reduce el tiempo de diagnóstico alineando expectativas sobre la frecuencia y condiciones en las que el rastreador informa.

## Por qué usar Plaspy con este protocolo

Usar el Winrich TK168 con Plaspy ofrece a las organizaciones una vía sencilla para recopilar datos de ubicación y eventos, monitorear flotas de vehículos y aprovechar funciones de control remoto opcionales cuando el modelo y firmware del rastreador las soporten. Plaspy proporciona un endpoint consistente y un proceso de detección que simplifica la incorporación de flotas mixtas y reduce la configuración manual en la plataforma.

Si desea evaluar la compatibilidad con Plaspy o configurar dispositivos Winrich TK168, conozca más sobre la plataforma en https://www.plaspy.com. El soporte de protocolo, el comportamiento del firmware y los detalles de implementación del dispositivo pueden cambiar con el tiempo, así que verifique la información más reciente del fabricante en http://www.winrichgroup.com/en/ antes de tomar decisiones operativas.
