---
slug: /thinkrace/traxbean_mt2/protocol
id: traxbean_mt2-protocol
sidebar_label: Protocol
title: ThinkRace - Traxbean MT2 Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública de protocolo para integrar el ThinkRace Traxbean MT2 con Plaspy para conectividad y reportes
keywords:
  - Protocolo ThinkRace Traxbean MT2
  - Protocolo GPS ThinkRace Traxbean MT2
  - Compatibilidad Traxbean MT2 Plaspy
  - Protocolo de comunicación Traxbean MT2
  - Protocolo de rastreo Traxbean MT2
  - Protocolo de rastreador wearable ThinkRace
  - Protocolo GPS reloj inteligente
  - Protocolo de rastreo Plaspy
  - Rastreo wearable Plaspy
  - Rastreo de flotas y personal ThinkRace
---

# ThinkRace - Protocolo Traxbean MT2

Esta página resume el contexto público del protocolo para usar el ThinkRace Traxbean MT2 con Plaspy. Describe cómo se comunica el dispositivo en términos generales, qué ajustes de conexión expone Plaspy públicamente y qué comportamientos del equipo suelen influir en una integración exitosa. El objetivo es informar a administradores, integradores y usuarios técnicos sin revelar detalles sensibles de implementación.

El Traxbean MT2 es un reloj inteligente GPS de grado militar, resistente, que ofrece posicionamiento por GPS, Wi Fi asistido y triangulación celular, posicionamiento interior por RF, botón SOS, transmisión de cámara y voz bidireccional. Plaspy usa ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, pero el comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante. Valide siempre el firmware y la configuración del dispositivo cuando despliegue a gran escala.

## Visión general del protocolo

El protocolo del Traxbean MT2 define cómo se entregan a un servidor central la telemetría, la ubicación, los eventos SOS y la señalización de medios, y cómo se manejan a alto nivel los comandos remotos y los acuses de recibo. Para Plaspy, el énfasis está en la entrega fiable de datos de posición y eventos para que la plataforma pueda ofrecer monitoreo en tiempo real y flujos de trabajo de incidentes.

- Permite que el MT2 informe actualizaciones de ubicación, activaciones SOS, telemetría de estado y marcadores de eventos a un endpoint remoto.
- Proporciona identidad y metadatos del dispositivo para que Plaspy pueda asociar los flujos entrantes con el wearable y el perfil de usuario correctos.
- Soporta transporte sobre sockets de red estándar para que el dispositivo envíe datos mediante conectividad celular o Wi Fi a Plaspy.
- Transporta señales operativas que permiten a Plaspy disparar alertas, reglas de geocerca y registro histórico.
- Permite variaciones en la frecuencia y el contenido de los mensajes según el firmware y la configuración para equilibrar la vida útil de la batería y las necesidades de reporte.

## Cómo detecta Plaspy el protocolo

Plaspy está diseñado para aceptar reportes de una amplia gama de dispositivos rastreadores y para identificar automáticamente el protocolo cuando un equipo está configurado para reportar al endpoint de Plaspy. Eso elimina en la mayoría de los casos la necesidad de seleccionar el protocolo manualmente dentro de la plataforma cuando el rastreador apunta correctamente a Plaspy.

- Plaspy acepta conexiones entrantes de dispositivos en un único endpoint y puerto compartido para todos los dispositivos compatibles.
- El dominio del servidor Plaspy es d.plaspy.com y la IP del servidor Plaspy es 54.85.159.138 para la configuración pública de conexión.
- El puerto es 8888 y todos los dispositivos en Plaspy usan el mismo puerto para reportes.
- Plaspy detecta automáticamente el protocolo del rastreador una vez que el dispositivo informa a la plataforma.
- Generalmente no es necesario seleccionar un protocolo manualmente dentro de Plaspy si el dispositivo está configurado correctamente para reportar al endpoint de Plaspy.

## Transporte y contexto de conexión

El Traxbean MT2 puede transmitir datos a través de los transportes de red disponibles y se utiliza comúnmente por datos celulares o Wi Fi. Para la integración con Plaspy, enfoque en el endpoint y el tipo de transporte que soporta el dispositivo y asegúrese de que el equipo apunte al endpoint público de Plaspy.

- Los dispositivos pueden configurarse para apuntar a d.plaspy.com o a la dirección numérica del servidor 54.85.159.138.
- El dispositivo puede configurarse usando UDP o TCP en el puerto 8888, según el soporte del equipo y la configuración elegida.
- Plaspy utiliza el mismo puerto para cada dispositivo compatible, lo que simplifica la configuración y las reglas de firewall.
- Elija UDP cuando el dispositivo o la red favorezcan menor sobrecarga y menor latencia, y TCP cuando se prefiera entrega fiable y flujos ordenados, sujeto a la capacidad del equipo.
- Asegúrese de que los firewalls del operador o de la red permitan tráfico saliente hacia el endpoint y puerto de Plaspy.

## Notas sobre compatibilidad del protocolo

- Las diferencias de firmware entre unidades MT2 pueden cambiar qué mensajes o campos envía el dispositivo; verifique la versión de firmware al solucionar problemas.
- Revisiones de hardware u opcionales (por ejemplo, variantes RF o de sensores) pueden modificar la telemetría y los tipos de eventos disponibles.
- Configuraciones del fabricante y builds de firmware específicos por región pueden cambiar el transporte predeterminado o el comportamiento del nombre de servidor.
- La selección de UDP frente a TCP en el dispositivo afecta las características de entrega y debe coincidir con la capacidad del equipo y el caso de uso previsto.
- La detección automática de Plaspy reduce la configuración manual, pero los ajustes de servidor mal configurados siguen siendo el problema de integración más común.
- Valide siempre la compatibilidad contra la documentación del fabricante vigente y el firmware desplegado en los dispositivos.

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación del Traxbean MT2 ayuda a los equipos a configurar los dispositivos correctamente, diagnosticar problemas de conectividad y tomar decisiones informadas sobre la frecuencia de reporte y el consumo de energía según los requisitos de la misión.

- Contribuye a asegurar la dirección de servidor y la selección de transporte correctas para que los dispositivos lleguen a Plaspy de forma fiable.
- Permite una resolución más rápida de ausencia de telemetría, eventos SOS o transmisión de medios al centrarse en los ajustes conocidos de transporte y endpoint.
- Orienta las decisiones sobre intervalos de reporte, compensaciones de batería y cuándo usar posicionamiento asistido o modos RF.
- Reduce la fricción en el despliegue al aclarar cómo Plaspy recibe la identidad y los metadatos del dispositivo.
- Ayuda a planificar reglas de red y firewall para permitir tráfico saliente hacia el endpoint de Plaspy.

## Por qué usar Plaspy con este protocolo

Combinar el Traxbean MT2 con Plaspy ofrece visibilidad centralizada para equipos que requieren rastreo de wearables, comunicaciones de voz y gestión de incidentes. Las capacidades multimodo de posicionamiento y los medios situacionales del MT2 se complementan con la ingestión, alertas e informes de Plaspy para entregar una solución práctica para operaciones de campo, seguridad de trabajadores solitarios y despliegues de seguridad.

To learn more about Plaspy and how it handles device integrations, visit https://www.plaspy.com. For the most current device specific protocol details, firmware notes, and implementation guidance always consult the manufacturer documentation at https://www.thinkrace.com/ .
