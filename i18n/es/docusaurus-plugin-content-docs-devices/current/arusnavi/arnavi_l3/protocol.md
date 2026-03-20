---
slug: /arusnavi/arnavi_l3/protocol
id: arnavi_l3-protocol
sidebar_label: Protocol
title: Arusnavi - Arnavi L3 Protocol
sidebar_class_name: menu_item_tracker
description: Guía del protocolo para usar el rastreador Arusnavi Arnavi L3 con Plaspy, incluye conexión, transporte y notas de compatibilidad
keywords:
  - Protocolo Arusnavi Arnavi L3
  - Protocolo GPS Arnavi L3
  - Compatibilidad Arusnavi Plaspy
  - Protocolo de comunicación Arnavi L3
  - Protocolo de rastreo Arnavi L3
  - Protocolo rastreador GPS Arusnavi
  - Telemetría Arnavi L3
  - Sensores BLE Arusnavi
  - Rastreo de flotas Arnavi L3
  - Protocolo rastreador Plaspy
---

# Arusnavi - Protocolo Arnavi L3

Esta página describe el contexto público del protocolo para integrar el rastreador Arusnavi Arnavi L3 con Plaspy. Se centra en los detalles de comunicación y transporte relevantes al incorporar el compacto Arnavi L3 en la plataforma Plaspy para seguimiento en tiempo real, telemetría y reporte de eventos.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo cuando un Arnavi L3 se configura para reportar al endpoint de Plaspy. El comportamiento exacto puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página ofrece orientación general más que instrucciones específicas de firmware.

## Visión general del protocolo

El Arnavi L3 envía telemetría, fijaciones GNSS y datos de eventos a servidores backend empleando reportes telemáticos estándar sobre datos celulares. El protocolo define cómo se identifica el equipo, cómo se empaqueta la telemetría y cómo se transmiten alertas y lecturas de sensores a plataformas de monitoreo como Plaspy.

- El protocolo permite enviar actualizaciones periódicas de posición y reportes de eventos para mapeo en vivo y reproducción histórica.
- La identidad del dispositivo y la información de sesión permiten al servidor asociar los mensajes entrantes con una unidad Arnavi L3 concreta.
- Los campos de telemetría incluyen posición GNSS, tiempo, estados de entradas discretas, lecturas ADC y datos de sensores BLE para combustible y temperatura.
- Los mensajes basados en eventos entregan alertas por cambios de ignición, geocercas y umbrales de entrada.
- El protocolo admite transmisión en tiempo real y entrega en búfer desde la memoria interna del dispositivo cuando se restablece la conectividad.

## Cómo detecta Plaspy el protocolo

Plaspy recibe conexiones entrantes en un endpoint compartido y detecta automáticamente el protocolo de los flujos entrantes. En la mayoría de los despliegues no es necesario seleccionar un protocolo en Plaspy si el Arnavi L3 está configurado para reportar al endpoint de Plaspy usando los ajustes de transporte correctos.

- Plaspy recibe tráfico de rastreadores en d.plaspy.com con la IP del servidor 54.85.159.138 en el puerto 8888.
- Plaspy detecta automáticamente el protocolo cuando llega un flujo correctamente direccionado al endpoint compartido.
- Todos los dispositivos en Plaspy usan el mismo puerto, por lo que solo debe asegurarse de que el dispositivo reporte al endpoint de Plaspy.
- Cuando el Arnavi L3 apunta al endpoint de Plaspy, Plaspy asociará los datos entrantes con la identidad enviada por el rastreador.
- Si un dispositivo no aparece, verifique la configuración de reporte del equipo y la documentación de firmware antes que intentar cambiar la selección de protocolo en Plaspy.

## Contexto de transporte y conexión

Las opciones de conexión para Arnavi L3 dependen de su configuración y del stack celular disponible. El dispositivo puede configurarse para usar UDP o TCP al reportar a Plaspy, y muchas versiones de firmware soportan reporte a servidores duales para redundancia.

- El equipo puede configurarse usando UDP o TCP en el puerto 8888 según el soporte del dispositivo y la configuración elegida.
- Direccione el Arnavi L3 a d.plaspy.com o a la IP del servidor Plaspy 54.85.159.138 si sus herramientas de provisión lo requieren.
- Todos los dispositivos en Plaspy usan el mismo puerto 8888, lo que simplifica la configuración de cortafuegos y redes.
- Elija UDP para menor sobrecarga o TCP para una entrega orientada a conexión según lo permitan el firmware y las condiciones de red.
- Asegúrese de que el APN y la configuración de datos celulares sean correctos para que el dispositivo pueda establecer el transporte elegido hacia el endpoint de Plaspy.

## Notas sobre compatibilidad del protocolo

- Arnavi L3 se describe como compatible con Plaspy mediante reporte a servidores duales y protocolos telemáticos estándar, pero los detalles de implementación pueden variar según la versión de firmware.
- Las revisiones de hardware y las variantes opcionales, como diferentes conjuntos de entradas o modelos de mayor voltaje, pueden afectar los E/S y los campos de telemetría disponibles.
- La selección de transporte entre UDP y TCP es configurable en muchos dispositivos y puede influir en las características de entrega de mensajes.
- Las familias de sensores BLE compatibles con Arnavi L3 extienden la telemetría, pero pueden generar distintos campos en la carga útil según el firmware del sensor.
- Las funciones del lado del fabricante, como la redundancia a servidores duales, pueden usarse para enviar flujos idénticos a Plaspy y a un endpoint secundario.
- Valide la compatibilidad y los pasos de configuración con la documentación del fabricante antes de un despliegue masivo.

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación y el comportamiento de transporte del Arnavi L3 ayuda a garantizar una incorporación fiable de dispositivos, la recolección precisa de telemetría y una resolución eficiente de problemas al integrarlo con Plaspy.

- Los ajustes correctos de transporte y endpoint garantizan que el dispositivo pueda alcanzar d.plaspy.com o 54.85.159.138 en el puerto 8888 y ser detectado automáticamente por Plaspy.
- Saber qué campos de telemetría reporta el dispositivo facilita mapear las entradas, ADC y datos BLE en los paneles y alertas de Plaspy.
- Conocer las variaciones de firmware y hardware previene desajustes entre el comportamiento esperado y el real durante los despliegues.
- Entender el reporte por eventos y el comportamiento de buffering ayuda a diagnosticar mensajes perdidos y a diseñar flujos de trabajo de redundancia.
- El conocimiento del protocolo acelera la resolución de problemas de red como puertos bloqueados o configuraciones APN incorrectas.

## Por qué usar Plaspy con este protocolo

Utilizar Arnavi L3 con Plaspy ofrece una vía práctica para obtener visibilidad en tiempo real, agregación de telemetría y flujos de trabajo basados en eventos para flotas y activos móviles. La combinación de hardware compacto, GNSS multiconstelación, soporte de sensores BLE e integración con Plaspy permite un monitoreo eficiente, controles anti robo y diagnóstico remoto para flotas mixtas.

Si desea conocer más sobre cómo Plaspy maneja integraciones de dispositivos y las capacidades de la plataforma, visite https://www.plaspy.com. Para obtener los detalles más actuales específicos del dispositivo, cambios de firmware y la guía del fabricante, verifique la documentación del Arnavi L3 en https://www.arusnavi.ru.
