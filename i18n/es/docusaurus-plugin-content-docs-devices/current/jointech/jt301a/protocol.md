---
slug: /jointech/jt301a/protocol
id: jt301a-protocol
sidebar_label: Protocol
title: Jointech - JT301A Protocol
sidebar_class_name: menu_item_tracker
description: Referencia pública del protocolo para integrar el Jointech JT301A con Plaspy en reportes LBS programados y eventos de sensores
keywords:
  - Protocolo Jointech JT301A
  - Protocolo GPS Jointech JT301A
  - Protocolo de comunicación Jointech JT301A
  - Protocolo de rastreo Jointech JT301A
  - Integración JT301A Plaspy
  - Rastreador LBS JT301A
  - protocolo de rastreo de activos
  - protocolo de seguimiento de contenedores
  - compatibilidad de dispositivos Plaspy
  - monitoreo de activos de flota
---

# Jointech - JT301A Protocolo

Esta página explica el contexto público del protocolo para usar el rastreador de activos Jointech JT301A con Plaspy. Se centra en cómo el JT301A informa ubicaciones LBS programadas y el estado de sensores a Plaspy, el papel del protocolo de comunicación en esa integración y notas prácticas para ayudar a planear el despliegue y la resolución de problemas. La información aquí es no sensible y adecuada para documentación pública.

Plaspy utiliza configuraciones de conexión compartidas entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando un dispositivo reporta a la plataforma. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página enfatiza el contexto de conexión y la orientación práctica más que detalles internos del dispositivo.

## Visión general del protocolo

El protocolo del dispositivo define cómo el JT301A empaqueta y transmite actualizaciones de posición LBS programadas, eventos de apertura de puertas y de iluminación, y telemetría básica de salud del equipo para la ingestión en Plaspy. En la práctica, el protocolo permite que el rastreador se identifique ante la plataforma, reporte estado periódico y genere alertas cuando los sensores detectan eventos relevantes para logística y seguridad de activos.

- Permite actualizaciones periódicas de ubicación LBS y reportes de telemetría programados para maximizar la duración de la batería.
- Transmite eventos de apertura de puertas y cambios en la iluminación para que Plaspy pueda generar alertas y registros históricos.
- Comunica estado de batería e indicadores básicos de salud del dispositivo para apoyar mantenimiento y programación.
- Provee una capa de identificación para que Plaspy asocie los mensajes entrantes con el registro de activo correcto.
- Soporta operación sobre transportes comunes para que el JT301A pueda alcanzar Plaspy desde distintas redes celulares.

## Cómo Plaspy detecta el protocolo

Plaspy recibe los reportes de los dispositivos en un único endpoint y puerto compartidos e inspecciona las conexiones entrantes para determinar automáticamente el protocolo del rastreador. En la mayoría de las implementaciones JT301A, usted no necesita seleccionar manualmente un protocolo dentro de Plaspy siempre que el dispositivo esté configurado para reportar al endpoint de Plaspy.

- Plaspy usa un endpoint de servidor compartido para aceptar reportes de rastreadores y detecta automáticamente el protocolo.
- El dominio del servidor de Plaspy es d.plaspy.com y la IP del servidor es 54.85.159.138, usando el puerto 8888 para el tráfico de dispositivos.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la configuración en flotas mixtas.
- Si el JT301A apunta correctamente al endpoint de Plaspy, normalmente no se requiere selección de protocolo dentro de la plataforma.
- La detección automática permite que Plaspy ingiera la telemetría del JT301A junto con otros tipos de dispositivos en una sola plataforma.

## Transporte y contexto de conexión

El contexto de conexión importa al configurar dispositivos JT301A para reportar a Plaspy. El rastreador puede usar UDP o TCP en el puerto estándar de Plaspy según su configuración y capacidades de firmware. Apuntar el rastreador al endpoint y puerto de Plaspy asegura que los mensajes lleguen a la plataforma para detección y procesamiento del protocolo.

- Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888 dependiendo del soporte del equipo y del comportamiento del operador.
- El dominio d.plaspy.com o la IP 54.85.159.138 son endpoints válidos para configurar en el rastreador.
- El puerto 8888 lo usa Plaspy para todos los dispositivos soportados, lo cual facilita la configuración masiva.
- Elija UDP para menor sobrecarga cuando la red y el rastreador lo soporten, o TCP cuando se prefiera entrega confiable y el dispositivo lo permita.
- Verifique que el APN del operador y las reglas de firewall permitan conexiones salientes al endpoint de Plaspy en el puerto 8888.

## Notas de compatibilidad del protocolo

- La compatibilidad puede depender de la versión de firmware y la revisión de hardware; confirme que el firmware del JT301A soporte los modos de reporte que planea usar.
- Las opciones de configuración del fabricante pueden cambiar con el tiempo, así que corrobore los ajustes de transporte y endpoints antes del despliegue.
- Algunos operadores o modelos regionales pueden imponer restricciones sobre transporte o puertos; valide la conectividad en la región objetivo.
- Aunque Plaspy detecta automáticamente el protocolo, es necesario apuntar el dispositivo a d.plaspy.com o 54.85.159.138 en el puerto 8888.
- Combinar feeds LBS del JT301A con dispositivos GPS en Plaspy es una arquitectura común para necesidades mixtas de rastreo, pero pruebe el enrutamiento de mensajes y el mapeo de eventos durante la puesta en marcha.
- Siempre contraste las capacidades del dispositivo con la documentación del fabricante para la revisión de hardware específica que usted tenga.

## Por qué es importante entender el protocolo

Tener un entendimiento claro y práctico del protocolo de comunicación del JT301A y del contexto de conexión facilita la configuración exitosa, el reporte confiable y la resolución eficiente de problemas al integrar dispositivos con Plaspy. Saber cómo el rastreador alcanza la plataforma y qué datos debe entregar ayuda a reducir el tiempo hasta obtener valor y a evitar fallos comunes de conectividad.

- Asegura que los dispositivos estén configurados para enviar al endpoint y transporte correctos de Plaspy, de modo que los reportes lleguen con fiabilidad.
- Ayuda a interpretar eventos del dispositivo y reportes de sensores en los paneles y alertas de Plaspy.
- Reduce el tiempo de resolución de problemas al clarificar si los fallos son de red, configuración o firmware.
- Apoya la planificación para flotas mixtas donde coexisten dispositivos LBS programados y rastreadores GPS continuos.
- Mejora la programación de mantenimiento al entender cómo la telemetría de salud del equipo se relaciona con el comportamiento esperado.

## Por qué usar Plaspy con este protocolo

Usar el JT301A con Plaspy ofrece una opción rentable para visibilidad de activos a largo plazo cuando los reportes LBS programados y los eventos básicos de sensores son suficientes. Plaspy ingiere actualizaciones de ubicación programadas, eventos de apertura de puertas y de iluminación, y telemetría de batería, de modo que los equipos de logística pueden mantener conciencia del estado de los activos y recibir alertas accionables sin el costo de datos y energía que implica GPS continuo en cada activo.

Plaspy está diseñado para aceptar reportes de rastreadores en un único endpoint común, lo que simplifica el despliegue en flotas con dispositivos mixtos. Para saber más sobre cómo Plaspy soporta integraciones de dispositivos y visibilidad de flotas visite https://www.plaspy.com. El soporte de protocolo y el comportamiento del dispositivo pueden cambiar con revisiones de firmware y hardware, por lo que verifique los últimos detalles del protocolo y la configuración del JT301A con el fabricante en https://www.jointcontrols.com/ antes de desplegar a gran escala.
