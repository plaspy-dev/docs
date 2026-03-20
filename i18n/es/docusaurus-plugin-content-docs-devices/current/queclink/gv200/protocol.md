---
slug: /queclink/gv200/protocol
id: gv200-protocol
sidebar_label: Protocol
title: QuecLink - GV200 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del QuecLink GV200 y su comunicación con los servidores de Plaspy
keywords:
  - Protocolo QuecLink GV200
  - Protocolo GPS QuecLink GV200
  - Comunicación QuecLink GV200
  - Protocolo de rastreo QuecLink GV200
  - Compatibilidad GV200 Plaspy
  - Protocolo rastreador de vehículo GV200
  - Protocolo GV200 @Track
  - Soporte protocolos rastreador Plaspy
  - Integración rastreador GPS Plaspy
  - Protocolo de rastreo de vehículos
---

# QuecLink - Protocolo GV200

Esta página describe el contexto público del protocolo para usar el rastreador QuecLink GV200 con Plaspy. Aquí se explica cómo las funciones de reporte del GV200 y sus capacidades de entradas/salidas se exponen a un servicio backend, y cómo esos comportamientos públicos se relacionan con la integración en Plaspy sin entrar en detalles privados de implementación. El GV200 es un rastreador vehicular versátil con posicionamiento GPS, múltiples interfaces I/O, un acelerómetro de 3 ejes para detección de remolque y conectividad cuatribanda GPRS/GSM que permite reportes en tiempo real o periódicos hacia un servidor.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el equipo reporta a la plataforma. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la configuración del fabricante; el GV200 suele utilizar el protocolo @Track incorporado. Debido a que las opciones de firmware y dispositivo cambian con el tiempo, considere esta página como una guía de compatibilidad y configuración más que como una especificación completa del protocolo.

## Resumen del protocolo

El protocolo de comunicación del GV200 define cómo el rastreador se identifica, reporta posición y estado, y envía alarmas o lecturas de sensores a un backend. En términos generales, el protocolo regula el registro, los reportes periódicos y por evento, y la entrega de datos de entradas y del acelerómetro que consumen los sistemas de gestión de flotas.

- Permite al GV200 enviar posición GPS, hora y actualizaciones de estado a un servidor remoto para seguimiento y reproducción.
- Transmite información de entradas/salidas y entradas analógicas para que sensores y contactos externos sean visibles en el backend.
- Envía eventos del acelerómetro, como detección de remolque y alertas por movimiento, útiles para la supervisión de flotas.
- Soporta reportes de alarmas y notificaciones para condiciones como batería baja, eventos de geocerca y alertas de emergencia.
- Funciona sobre redes móviles estándar para entregar reportes en tiempo real o en intervalos programados según la configuración.

## Cómo Plaspy detecta el protocolo

Plaspy está diseñado para aceptar conexiones de muchos modelos de dispositivos en un punto de entrada compartido y detecta automáticamente el protocolo del rastreador una vez que el dispositivo empieza a reportar. En la mayoría de los casos no es necesario seleccionar manualmente un protocolo dentro de Plaspy si el GV200 está configurado para reportar al endpoint de la plataforma.

- El dominio del servidor Plaspy para reportes de dispositivos es d.plaspy.com y la IP pública del servidor es 54.85.159.138.
- El puerto de escucha que usa Plaspy para el tráfico de dispositivos es 8888 y todos los dispositivos en Plaspy usan el mismo puerto.
- Plaspy detecta automáticamente el protocolo del rastreador después de que el dispositivo se autentique o comience a enviar tramas de registro.
- Si el GV200 está configurado correctamente para apuntar al endpoint de Plaspy, por lo general no se requiere ninguna selección adicional de protocolo en la plataforma.
- Monitorear el registro inicial del dispositivo y los primeros mensajes entrantes suele ser suficiente para confirmar que el GV200 y Plaspy están comunicándose.

## Transporte y contexto de conexión

El transporte y direccionamiento de la conexión forman parte del contexto público de integración y determinan cómo el dispositivo alcanza Plaspy. El GV200 puede configurarse para usar distintos modos de transporte según el firmware y las decisiones del instalador.

- El dispositivo puede configurarse usando UDP o TCP en el puerto 8888 según el soporte y la configuración del equipo.
- Los dispositivos pueden apuntar al dominio d.plaspy.com o a la dirección IP numérica 54.85.159.138 para alcanzar Plaspy.
- Plaspy utiliza un único puerto común 8888 para todos los rastreadores soportados, lo que simplifica la planificación de cortafuegos y redes.
- Elija UDP o TCP para el GV200 según el comportamiento de entrega deseado y las limitaciones impuestas por la red móvil o la configuración del servidor.
- Elementos de red como NAT, cortafuegos del operador y configuraciones de APN pueden afectar la conectividad y deben validarse durante la puesta en marcha.

## Notas de compatibilidad del protocolo

- La disponibilidad de funciones del GV200 puede variar según la versión de firmware; algunas opciones de reporte pueden añadirse o modificarse en versiones más nuevas.
- Revisiones de hardware o la configuración de fábrica pueden cambiar los mapeos de entradas/salidas o los ajustes de transporte por defecto.
- El GV200 soporta el protocolo incorporado @Track, pero la documentación del fabricante debe consultarse para comportamientos específicos de firmware.
- Seleccionar UDP o TCP afecta la semántica de entrega; confirme qué transporte está configurado en el equipo y realice pruebas en consecuencia.
- Siempre valide el ID del dispositivo y el comportamiento de registro al conectar por primera vez con Plaspy para asegurarse de que la plataforma reconoce la unidad.
- Para funciones avanzadas o comandos personalizados, consulte la documentación y las notas de versión de QuecLink para confirmar soporte.

## Por qué es importante entender el protocolo

Comprender cómo se comunica el GV200 ayuda a asegurar un despliegue fiable, agilizar la resolución de problemas y obtener un comportamiento de sistema predecible. Saber qué mensajes envía el dispositivo y cómo Plaspy los acepta reduce el tiempo de configuración y contribuye a la confiabilidad a largo plazo.

- Confirma que el dispositivo apunta al endpoint correcto de Plaspy y usa el modo de transporte esperado.
- Ayuda a resolver problemas de conectividad causados por ajustes de red, APN o reglas de cortafuegos.
- Aclara si alarmas específicas o eventos de I/O están soportados por el firmware del dispositivo y se entregan a Plaspy.
- Orienta decisiones sobre intervalos de sondeo, gestión de energía y frecuencia de reporte en despliegues con batería.
- Aumenta la confianza al desplegar actualizaciones de firmware o al cambiar la dirección del servidor en flotas grandes.

## Por qué usar Plaspy con este protocolo

Usar el QuecLink GV200 con Plaspy ofrece a las organizaciones una forma sencilla de recopilar datos de ubicación, sensores y alarmas desde un rastreador vehicular compacto. La sensibilidad GPS del GV200, su flexibilidad de I/O y las funciones basadas en acelerómetro, en conjunto con el manejo de dispositivos de Plaspy, proporcionan visibilidad e información operativa sobre flotas, activos y recursos móviles.

Si desea profundizar en la compatibilidad con Plaspy o confirmar detalles de despliegue, conozca más sobre Plaspy en https://www.plaspy.com. Verifique siempre los detalles específicos del protocolo del dispositivo, el comportamiento del firmware y las notas de implementación del fabricante en el sitio oficial de QuecLink en https://www.queclink.com/ ya que el soporte del protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
