---
slug: /queclink/gl501mg/protocol
id: gl501mg-protocol
sidebar_label: Protocol
title: QuecLink - GL501MG Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo para QuecLink GL501MG y su comunicación con Plaspy mediante ajustes compartidos y detección automática
keywords:
  - QuecLink GL501MG
  - protocolo QuecLink GL501MG
  - rastreador GPS GL501MG
  - compatibilidad GL501MG Plaspy
  - protocolo de comunicación GL501MG
  - protocolo rastreador Queclink
  - rastreo de activos GL501MG
  - GL501MG LTE Cat M1
  - protocolo de seguimiento GL501MG
  - compatibilidad de dispositivos Plaspy
---

# QuecLink - Protocolo GL501MG

Esta página describe el contexto público del protocolo para usar el rastreador QuecLink GL501MG con Plaspy. Se centra en cómo el dispositivo comunica en términos generales, cómo Plaspy recibe e identifica los reportes y qué verificar al configurar el equipo para obtener actualizaciones fiables de localización y telemetría. El objetivo es ofrecer orientación clara y no sensible que facilite la integración del GL501MG con Plaspy sin exponer lógica interna del parser ni formatos de paquete propietarios.

El GL501MG es un rastreador compacto a batería con LTE Cat M1 y NB1, con fallback a 2G, BLE, carga inalámbrica Qi, GNSS u‑blox y sensores a bordo pensados para despliegues de baja potencia y sin supervisión. Plaspy utiliza ajustes de conexión compartidos entre dispositivos compatibles y detecta automáticamente el protocolo del rastreador; sin embargo, el comportamiento exacto puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que siempre valide los detalles de dispositivo y firmware con la documentación oficial del fabricante cuando sea necesario.

## Resumen del protocolo

A grandes rasgos, el GL501MG usa un protocolo de reporte de dispositivo para enviar posiciones GNSS y telemetría a un servidor remoto. El rastreador puede enviar reportes programados, eventos por movimiento o manipulación y lecturas de sensores, permitiendo a Plaspy mostrar historial de ubicación, alertas y estados para flujos de trabajo de monitoreo de activos.

- El protocolo transporta localizaciones y telemetría como nivel de batería, acelerómetro (movimiento), temperatura y estado del sensor de luz.
- La identificación del dispositivo y la información de sesión en cada reporte permiten a Plaspy asociar los mensajes con el activo y la cuenta correctos.
- Las opciones de transporte soportadas por el GL501MG incluyen TCP, UDP y SMS, lo que permite flexibilidad según la red y las restricciones del despliegue.
- El rastreador puede adaptar la frecuencia de reporte y los patrones de activación para maximizar la vida útil de la batería, manteniendo avisos oportunos por manipulación o movimiento.
- Cuando se usa con Plaspy, el protocolo habilita disparadores de geocerca, reportes programados y alertas de eventos que la plataforma consume para monitoreo y operaciones.

## Cómo Plaspy detecta el protocolo

Plaspy recibe conexiones entrantes en un único endpoint y puerto compartidos para todos los dispositivos. Cuando un GL501MG correctamente configurado reporta al endpoint de Plaspy, la plataforma detecta automáticamente el protocolo entrante, por lo que por lo general no es necesario seleccionar manualmente un protocolo dentro de Plaspy.

- Plaspy escucha reportes de dispositivo en el endpoint compartido d.plaspy.com y en la IP del servidor 54.85.159.138.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la configuración y el onboarding entre distintos modelos.
- El GL501MG puede configurarse para enviar datos a Plaspy por TCP o UDP en el puerto 8888, o mediante SMS si la implementación lo soporta.
- Si el dispositivo está apuntando al endpoint de Plaspy y hay conectividad de red, Plaspy emparejará automáticamente los datos entrantes con el protocolo y el registro de activo correctos.
- Dado que la detección es automática, la tarea principal del usuario es asegurarse de que el dispositivo reporte a d.plaspy.com (o a la IP) y que el transporte elegido (TCP o UDP) esté permitido por la red.

## Transporte y contexto de conexión

Las decisiones de conexión afectan la fiabilidad y el consumo de energía. El GL501MG soporta múltiples transportes para ajustar el comportamiento según cobertura y duración de la batería. Al configurar el equipo, planifique el transporte en función de la disponibilidad de red y el tipo de reportes requeridos.

- El GL501MG puede usar UDP o TCP en el puerto 8888 según el soporte del dispositivo y las opciones de configuración.
- Los equipos pueden apuntar al dominio d.plaspy.com o directamente a la IP 54.85.159.138 cuando las restricciones de DNS o encaminamiento lo hagan preferible.
- El puerto 8888 es el puerto común y compartido que Plaspy utiliza para todos los modelos de rastreadores, por lo que no necesita un puerto específico por modelo.
- UDP suele emplearse para reportes de bajo overhead, mientras que TCP puede elegirse cuando se requieren fiabilidad de sesión o confirmaciones; la selección final depende del firmware del dispositivo y de la política de la red.
- El transporte por SMS puede estar disponible como respaldo para notificaciones críticas o cuando no hay conectividad IP; verifique la configuración del dispositivo y las capacidades de la SIM/red.

## Notas sobre compatibilidad del protocolo

- Las versiones de firmware pueden cambiar el comportamiento exacto del protocolo o las funciones disponibles; verifique la revisión de firmware si un dispositivo no opera como se espera.
- Revisión de hardware u accesorios opcionales (carcasa magnética, sensores BLE) pueden afectar los reportes y los campos de telemetría disponibles.
- La selección de transporte (TCP vs UDP vs SMS) influye en las características de entrega y debe validarse según su red y la configuración de la cuenta Plaspy.
- Es posible que se requieran herramientas de configuración del fabricante o pasos de aprovisionamiento para establecer la dirección del servidor a d.plaspy.com o 54.85.159.138 y el puerto 8888.
- Algunos despliegues pueden necesitar ajustes en firewalls o NAT para permitir salidas UDP o TCP al puerto 8888 desde las SIM del dispositivo o pasarelas de red locales.
- Siempre contraste la compatibilidad y las recomendaciones con la documentación oficial y las notas de la versión de Queclink para el GL501MG.

## Por qué es importante entender el protocolo

Comprender cómo se comunica el GL501MG ayuda a garantizar reportes confiables, uso eficiente de la batería y un comportamiento predecible en Plaspy. Conocer los fundamentos del transporte, los endpoints del servidor y los tipos de telemetría que produce el dispositivo facilita la resolución de problemas y acelera los despliegues.

- La configuración correcta del servidor y el puerto asegura que el dispositivo alcance el endpoint de ingesta de Plaspy sin necesidad de seleccionar manualmente el protocolo.
- Elegir el transporte adecuado equilibra la fiabilidad y el consumo de energía según su caso de uso.
- Estar al tanto de diferencias de firmware y hardware reduce sorpresas cuando funciones están habilitadas o deshabilitadas entre unidades.
- Reconocer qué campos de telemetría ofrece el dispositivo ayuda a mapear datos a alertas y flujos de trabajo en Plaspy.
- Una configuración de red adecuada, incluyendo APN y ajustes de SIM, mejora la conectividad inicial y la fiabilidad a largo plazo.

## Por qué usar Plaspy con este protocolo

Usar el GL501MG con Plaspy ofrece una forma sencilla de recopilar ubicación y telemetría de larga duración en una sola plataforma. La conectividad LTE Cat M1 / NB1 con fallback a 2G, las capacidades BLE y los sensores integrados del dispositivo se complementan bien con la detección automática de protocolos y el endpoint unificado de ingesta de Plaspy, entregando monitoreo, alertas y seguimiento histórico sin necesidad de seleccionar manualmente el protocolo dentro de la plataforma.

Los ajustes de conexión compartidos de Plaspy reducen la carga de configuración: apunte el GL501MG a d.plaspy.com o a 54.85.159.138 en el puerto 8888 (usando TCP o UDP según lo soporte), y Plaspy detectará el protocolo del rastreador de forma automática. Para saber más sobre Plaspy y cómo gestiona los datos de dispositivo, visite https://www.plaspy.com. Para detalles específicos del protocolo según dispositivo, comportamiento de firmware y recomendaciones del fabricante, verifique la información en el sitio de Queclink en https://www.queclink.com/.
