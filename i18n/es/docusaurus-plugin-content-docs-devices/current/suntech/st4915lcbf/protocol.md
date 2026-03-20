---
slug: /suntech/st4915lcbf/protocol
id: st4915lcbf-protocol
sidebar_label: Protocol
title: Suntech - ST4915LCBF Protocol
sidebar_class_name: menu_item_tracker
description: Descripción pública del protocolo del Suntech ST4915LCBF para compatibilidad con Plaspy y guía de conexión
keywords:
  - Protocolo Suntech ST4915LCBF
  - Protocolo GPS Suntech
  - ST4915LCBF Plaspy
  - Comunicación de rastreador GPS
  - Protocolo de seguimiento de activos
  - Protocolo de gestión de flotas
  - Rastreador LTE Cat M1
  - Rastreador NB IoT
  - Rastreador puerta de enlace BLE
  - Rastreador de geolocalización Wi Fi
---

# Suntech - Protocolo ST4915LCBF

Esta página describe el contexto público del protocolo para usar el rastreador Suntech ST4915LCBF con Plaspy. Se enfoca en cómo el dispositivo se comunica con Plaspy a alto nivel, qué ajustes de conexión se emplean y qué partes del flujo de reporte del equipo son relevantes para la integración y la operación diaria. La intención es ofrecer orientación clara y no sensible que ayude a operadores e integradores a planear despliegues y resolver problemas.

Plaspy utiliza ajustes de conexión compartidos para los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el equipo reporta correctamente al endpoint de Plaspy. El comportamiento exacto puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página enfatiza conceptos generales de comunicación y los hechos públicos de conexión con Plaspy, recomendando siempre validar contra la documentación oficial del fabricante.

## Visión general del protocolo

El protocolo del ST4915LCBF es el método del dispositivo para identificarse con un servidor, reportar datos GNSS y de sensores, y recibir configuraciones remotas limitadas o acuses de recibo. Al integrarse con Plaspy, el protocolo garantiza que las posiciones, la telemetría, las señales BLE y Wi Fi, y el estado de energía se entreguen en un formato que la plataforma pueda procesar para mapas, alertas e informes históricos.

- Permite al rastreador enviar telemetría periódica y por eventos desde GNSS, el acelerómetro, BLE y subsistemas de Wi Fi hacia Plaspy.
- Permite que el dispositivo se identifique y presente metadatos necesarios para agrupar activos y procesarlos en Plaspy.
- Transporta información de estado y salud como nivel de batería, estado de radio y eventos de movimiento que Plaspy utiliza para alertas e información de mantenimiento.
- Soporta tanto reportes regulares como mensajes desencadenados por eventos, lo que ayuda a equilibrar la vida útil de la batería y la visibilidad en tiempo real.
- Actúa como puente entre las radios de campo del dispositivo y las canalizaciones de ingestión de Plaspy sin que el usuario tenga que gestionar la selección de un parser por dispositivo.

## Cómo Plaspy detecta el protocolo

Plaspy recibe el tráfico de los dispositivos en un endpoint de red compartido y determina automáticamente el protocolo de rastreador adecuado para los modelos soportados cuando el dispositivo está configurado para reportar allí. En la mayoría de los despliegues no es necesario seleccionar manualmente un protocolo dentro de Plaspy si el rastreador apunta correctamente al endpoint de Plaspy y usa el transporte soportado.

- Plaspy escucha en un único puerto compartido para todos los dispositivos, por lo que el tráfico se consolida para su detección e ingestión.
- El dominio del servidor Plaspy es d.plaspy.com y la IP del servidor Plaspy es 54.85.159.138 para direccionamiento directo.
- El puerto que usa Plaspy para el reporte de dispositivos es 8888 y este mismo puerto se utiliza en todos los rastreadores soportados.
- Los rastreadores pueden configurarse para usar UDP o TCP para reportar a Plaspy dependiendo de la capacidad del equipo y las condiciones de la red.
- Cuando un rastreador soportado reporta al endpoint de Plaspy, la plataforma realiza identificación automática del protocolo, por lo que normalmente no se requiere configuración manual dentro de la plataforma.

## Transporte y contexto de conexión

El contexto de conexión abarca el endpoint de red, el protocolo de transporte y las consideraciones básicas de enrutamiento que influyen en cómo el ST4915LCBF se comunica con Plaspy. Entender las opciones de transporte ayuda con reglas de firewall, configuración de APN y resolución de problemas de celular o comportamiento de conmutación sin necesidad de conocer los detalles internos del protocolo.

- El ST4915LCBF puede configurarse para usar UDP o TCP en el puerto 8888 para reportar a Plaspy.
- Los dispositivos pueden apuntar a d.plaspy.com o directamente a 54.85.159.138 si DNS o el enrutamiento requieren direccionamiento directo.
- Plaspy utiliza el puerto 8888 para todos los dispositivos, por lo que los operadores solo necesitan abrir un puerto de salida en sus redes para el tráfico de los equipos.
- TCP es útil cuando se prefiere confirmación de entrega a nivel de transporte, mientras que UDP puede usarse para optimizar el overhead según el firmware del equipo.
- Asegúrese de que el APN y el enrutamiento celular permitan conexiones salientes hacia el endpoint de Plaspy para evitar fallas de entrega.

## Notas sobre compatibilidad del protocolo

- Las versiones de firmware del ST4915LCBF pueden modificar los intervalos de reporte disponibles, los transportes soportados y los campos opcionales en los reportes del dispositivo.
- Las revisiones de hardware o radios opcionales como BLE y Wi Fi pueden estar presentes en algunas unidades y ausentes en otras, lo que afecta los datos que el equipo puede reportar.
- Algunas funciones, como la agregación de gateway BLE o la mejora de geolocalización por Wi Fi, son capacidades del dispositivo y dependen de que el firmware las habilite.
- Seleccionar UDP frente a TCP es una opción de configuración en el dispositivo y puede influir en la confiabilidad y el consumo energético; verifique qué transporte está activo en cada unidad.
- Las guías de configuración del fabricante y las notas de lanzamiento son la fuente autorizada para el comportamiento del protocolo en versiones de firmware específicas.
- Valide la compatibilidad confirmando que el dispositivo puede abrir sesión a d.plaspy.com o a 54.85.159.138 en el puerto 8888 y que Plaspy detecta el equipo cuando reporta por primera vez.

## Por qué es importante entender el protocolo

Comprender de manera práctica el protocolo de comunicación del rastreador ayuda a lograr despliegues exitosos, agilizar la resolución de problemas y mantener una operación confiable a largo plazo cuando el dispositivo está emparejado con Plaspy. Saber qué se espera que reporte el equipo y cómo se conecta reduce el tiempo de resolución cuando los dispositivos no aparecen en la plataforma o cuando la telemetría está incompleta.

- Acelera el aprovisionamiento inicial al garantizar que APN, transporte y endpoint estén correctamente aplicados antes de enviar los equipos al campo.
- Ayuda a diagnosticar problemas de conectividad acotando el alcance a transporte, DNS, firewall o configuración del dispositivo en lugar de asumir problemas con el parser.
- Orienta las decisiones sobre batería y estrategia de reporte para que los intervalos y disparadores de eventos se alineen con los objetivos de duración del despliegue.
- Asiste en la planificación de funciones opcionales como agregación BLE o mejora por Wi Fi confirmando soporte de firmware y hardware.
- Soporta flujos previsibles de alertas y mantenimiento al asegurar que la telemetría de salud llegue a Plaspy de manera confiable.

## Por qué usar Plaspy con este protocolo

Usar el ST4915LCBF con Plaspy ofrece una solución sólida para organizaciones que requieren hardware resistente y de larga duración junto con visibilidad centralizada de activos y flotas. Las radios y sensores a bordo del dispositivo entregan la posición y la telemetría que Plaspy transforma en mapas, alertas e información operativa accionable, mientras que el modelo de conexión compartida de Plaspy simplifica los despliegues a gran escala.

Para conocer más sobre Plaspy y cómo ingiere datos de rastreadores visite https://www.plaspy.com. Para obtener los detalles de protocolo más recientes y específicos del equipo, las notas de firmware y la guía de implementación consulte la documentación del fabricante en http://www.suntechint.com/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
