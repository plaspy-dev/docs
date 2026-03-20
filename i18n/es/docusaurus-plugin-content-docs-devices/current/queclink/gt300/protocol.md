---
slug: /queclink/gt300/protocol
id: gt300-protocol
sidebar_label: Protocol
title: QuecLink - GT300 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del QuecLink GT300 y cómo se comunica con Plaspy para informes de ubicación confiables
keywords:
  - Protocolo QuecLink GT300
  - Protocolo GPS QuecLink GT300
  - Compatibilidad GT300 Plaspy
  - Protocolo de rastreo GT300
  - Protocolo de comunicación GT300
  - Protocolo rastreador GPS QuecLink
  - Integración dispositivo GT300
  - Protocolo atTrack GT300
  - Protocolo dispositivo Plaspy
  - Rastreo vehicular GT300
---

# QuecLink - Protocolo GT300

Esta página ofrece una visión pública del protocolo para integrar el QuecLink GT300 con Plaspy. Se centra en el contexto de comunicación que permite al GT300 reportar ubicación, eventos y estado a la plataforma Plaspy sin exponer detalles sensibles de implementación. El GT300 es un teléfono de seguridad compacto con GSM y GPS pensado para personas mayores y trabajadores solitarios; incluye un chipset GPS u‑blox interno, un acelerómetro de 3 ejes para detección de movimiento y caída, y opciones de reporte basadas en el esquema @Track.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el equipo apunta al endpoint de Plaspy. El comportamiento exacto del protocolo y los mensajes admitidos pueden variar según la versión de firmware del GT300, la revisión de hardware y la implementación del fabricante, por lo que el funcionamiento en campo puede diferir entre unidades. Para la compatibilidad con Plaspy, la plataforma se apoya en endpoints de conexión consistentes y en la identificación automática del protocolo para simplificar la puesta en marcha.

## Visión general del protocolo

El protocolo de comunicación del GT300 define cómo el dispositivo intercambia telemetría y mensajes de evento con un servidor backend. A grandes rasgos, su función es identificar el dispositivo, transmitir datos de ubicación y estado, y soportar reportes de eventos como alertas SOS, transiciones de geocerca, batería baja y notificaciones de caída. El GT300 suele emplear los patrones de reporte provistos por el fabricante y puede utilizar las opciones de reporte @Track.

- Permite la identificación del dispositivo y el envío de posiciones GPS y contexto celular a Plaspy.
- Transporta notificaciones de eventos como SOS de emergencia, cruces de geocerca, batería baja y alertas por caída.
- Admite reporte periódico o programado de posición y alertas puntuales según la configuración.
- Soporta intercambio de comandos y configuración por SMS o a través de la conexión de datos cuando está disponible.
- Proporciona telemetría suficiente para que Plaspy relacione eventos del dispositivo con alertas a usuarios e historiales de recorridos.

## Cómo detecta Plaspy el protocolo

Plaspy acepta conexiones entrantes de dispositivos en un único endpoint y puerto compartidos y determina automáticamente el protocolo del rastreador utilizado por el equipo que reporta. Cuando un GT300 está configurado para enviar datos al endpoint de Plaspy, la plataforma utiliza esa conexión para identificar el formato de reporte y enrutar los mensajes al pipeline de procesamiento correcto. En la mayoría de los casos no es necesario que el usuario seleccione manualmente un protocolo dentro de Plaspy si el dispositivo está correctamente apuntado al servidor de Plaspy.

- Plaspy escucha en una dirección y puerto de servidor compartidos para los reportes de dispositivos y mapea las conexiones entrantes al protocolo adecuado.
- El endpoint del servidor de Plaspy es d.plaspy.com y la IP pública del servidor es 54.85.159.138 para opciones de configuración directa.
- Plaspy utiliza el mismo puerto para todos los dispositivos soportados, lo que simplifica la configuración y el onboarding.
- Plaspy detecta automáticamente el protocolo del rastreador a partir del tráfico entrante, por lo que normalmente no hace falta seleccionar el protocolo manualmente.
- La condición habitual para que la detección automática funcione es que el dispositivo esté correctamente configurado para apuntar al endpoint de Plaspy.

## Transporte y contexto de conexión

El GT300 puede configurarse para usar transporte de datos IP para reportar posiciones y eventos a un servidor remoto. Dependiendo del firmware y la configuración del dispositivo, el GT300 puede enviar sus reportes por UDP o TCP. Para la integración con Plaspy, los detalles de conexión se mantienen intencionalmente consistentes entre dispositivos para facilitar la puesta en marcha.

- Los dispositivos pueden configurarse para usar UDP o TCP según el firmware y los ajustes del GT300.
- Plaspy acepta conexiones en el puerto 8888 y todos los dispositivos dentro de Plaspy usan ese mismo puerto para el reporte.
- El dispositivo puede apuntarse al servidor de Plaspy usando el dominio d.plaspy.com o la IP 54.85.159.138 al configurar el rastreador.
- La elección entre UDP y TCP depende de los requisitos de fiabilidad y del soporte que el firmware del rastreador ofrezca para cada transporte.
- Asegúrese de que el APN y los ajustes GPRS del dispositivo sean válidos para conexiones IP salientes, de modo que los reportes lleguen al endpoint de Plaspy.

## Notas sobre compatibilidad del protocolo

- Las variaciones de firmware pueden cambiar qué eventos y campos de reporte envía el GT300, por lo que el comportamiento puede diferir entre versiones de firmware.
- Revisiones de hardware o lotes de producción pueden introducir diferencias sutiles; valide unidades nuevas antes de un despliegue masivo.
- La configuración en el lado del fabricante y las opciones de reporte disponibles, como las funciones @Track, pueden afectar lo que Plaspy recibe.
- La selección de transporte entre UDP y TCP debe coincidir con lo que el firmware del dispositivo soporta y con lo que la red pueda transmitir de forma fiable.
- Apuntar el dispositivo a d.plaspy.com o a 54.85.159.138 en el puerto 8888 es obligatorio para comunicarse con Plaspy.
- Siempre contraste el comportamiento del dispositivo con la documentación oficial de QuecLink y las notas de la versión del GT300.

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación del rastreador facilita una configuración más rápida, una resolución de problemas más precisa y un funcionamiento confiable a largo plazo al integrar dispositivos GT300 con Plaspy. Saber qué mensajes puede enviar el dispositivo y cómo se transportan reduce la ambigüedad durante la puesta en marcha y ayuda en la toma de decisiones operativas.

- Acelera la configuración al aclarar qué dirección de servidor y transporte debe configurar en el dispositivo.
- Ayuda a diagnosticar problemas de conectividad al acotar si la falla es de red, de transporte o de firmware.
- Define expectativas sobre los reportes de eventos como SOS, geocerca y alertas por caída.
- Orienta las decisiones de actualización de firmware cuando nuevas funciones o correcciones afectan el comportamiento de reporte.
- Mejora el mapeo de datos para que Plaspy pueda mostrar alertas útiles y trayectos históricos a los usuarios.

## Por qué usar Plaspy con este protocolo

Usar el QuecLink GT300 con Plaspy ofrece un camino directo para centralizar visibilidad de ubicación, monitoreo de eventos y alertas en escenarios de seguridad y trabajadores solitarios. La detección automática de protocolo de Plaspy y el endpoint de conexión consistente reducen la carga de configuración para flotas y despliegues que utilizan dispositivos mixtos o varias versiones de firmware.

Para conocer más sobre cómo trabaja Plaspy con dispositivos como el GT300 visite https://www.plaspy.com. Verifique siempre los detalles más recientes del protocolo GT300, el comportamiento del firmware y la documentación específica del dispositivo en el sitio oficial del fabricante https://www.queclink.com/ ya que el soporte e implementación del protocolo pueden cambiar con el tiempo.
