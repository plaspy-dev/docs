---
slug: /wanway/g18/protocol
id: g18-protocol
sidebar_label: Protocol
title: WanWay - G18 Protocol
sidebar_class_name: menu_item_tracker
description: Visión general pública del protocolo del rastreador WanWay G18 y cómo se comunica con Plaspy para seguimiento de flotas y telemetría
keywords:
  - WanWay G18 protocolo
  - WanWay G18 protocolo GPS
  - WanWay G18 protocolo de comunicación
  - WanWay G18 protocolo de rastreo
  - WanWay G18 compatibilidad con Plaspy
  - WanWay G18 rastreador de flotas
  - WanWay G18 telemática
  - WanWay G18 inmovilizador remoto
  - WanWay G18 comportamiento del conductor
  - WanWay G18 integración
---

# WanWay - Protocolo G18

Esta página explica el contexto público del protocolo para usar el rastreador WanWay G18 con Plaspy. Describe, a alto nivel, cómo se comunica el dispositivo, qué ajustes de conexión son necesarios para reportar a Plaspy y cómo los informes de eventos y telemetría encajan en un flujo de trabajo de gestión de flotas. El objetivo es ayudar a usuarios técnicos y a operadores de flota a entender el papel de la comunicación sin exponer detalles privados de implementación.

Plaspy usa ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, mientras que el comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante. El G18 es un rastreador GPS 2G compacto con alarmas por manipulación y vibración, reporte de colisiones y capacidad de corte remoto de combustible o electricidad; envía actualizaciones periódicas de posición y mensajes de evento a Plaspy para mapeo y alertas.

## Visión general del protocolo

A nivel general, el protocolo del G18 define cómo el equipo se identifica, transmite datos de posición y sensores, y reporta condiciones de evento a un servidor remoto. Plaspy ingiere esos reportes, normaliza la telemetría y presenta ubicaciones y eventos en paneles y reglas de alerta. La documentación pública aquí se centra en el rol del protocolo para una integración fiable del dispositivo más que en formatos de paquete de bajo nivel.

- Permite envíos periódicos de posiciones GPS y actualizaciones temporizadas hacia Plaspy.
- Transmite mensajes por eventos como alarmas por manipulación, reportes de vibración o colisión y avisos de pérdida de alimentación.
- Incluye telemetría útil para el análisis del comportamiento del conductor, como marcadores de aceleración y frenado.
- Permite comandos iniciados por el servidor cuando el cableado del equipo y la política lo soportan, por ejemplo control remoto del inmovilizador.
- Proporciona un mecanismo de identidad para que Plaspy asocie los reportes entrantes con el registro de dispositivo correcto.

## Cómo Plaspy detecta el protocolo

Plaspy acepta conexiones de dispositivos en un endpoint compartido y determina automáticamente el protocolo del rastreador cuando el equipo reporta a la plataforma. En la mayoría de los casos usted no necesita seleccionar manualmente un protocolo dentro de Plaspy si el G18 está configurado para reportar al endpoint correcto de Plaspy con los ajustes de transporte coincidentes.

- El dominio del servidor Plaspy es d.plaspy.com y la IP del servidor Plaspy es 54.85.159.138 para conexiones directas.
- El puerto es 8888, que Plaspy usa como puerto único de escucha para el tráfico de dispositivos.
- Plaspy detecta automáticamente el protocolo del rastreador para los dispositivos que envían datos a la plataforma.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica el enrutamiento de dispositivos.
- La configuración típica solo requiere apuntar el dispositivo a d.plaspy.com o a 54.85.159.138 y al puerto correcto.

## Transporte y contexto de conexión

Las opciones de conexión para el G18 dependen del firmware y de la configuración del equipo. El rastreador puede enviar datos por UDP o TCP según la versión y los ajustes seleccionados en el dispositivo. Use los datos públicos de conexión para asegurar que la unidad informe correctamente a Plaspy.

- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 según el soporte del equipo.
- Los dispositivos pueden apuntar al dominio del servidor Plaspy d.plaspy.com o a la dirección numérica 54.85.159.138.
- El puerto para todos los dispositivos soportados en Plaspy es 8888, lo que simplifica el aprovisionamiento.
- Elija UDP cuando se requiera menor peso y latencia y TCP cuando se necesite confiabilidad de sesión.
- Confirme que la configuración de transporte del equipo coincida con lo permitido en cualquier red intermedia o en el plan de SIM.

## Notas sobre compatibilidad del protocolo

- Las diferencias de firmware entre builds de fábrica pueden cambiar qué modos de transporte y tipos de mensaje están soportados.
- Las revisiones de hardware y las configuraciones opcionales de sensores pueden añadir o quitar tipos de evento como detección de vibración o manipulación.
- Variaciones por parte del fabricante pueden afectar los comandos remotos disponibles y las condiciones exactas que generan un reporte de colisión.
- La selección de transporte entre UDP y TCP depende del equipo y la configuración y debe validarse durante la puesta en marcha.
- El comportamiento de integración, como el acuse de recibo de comandos o los tiempos de reintento, puede variar según el firmware y debe probarse.
- Valide la compatibilidad con la documentación oficial de WanWay para comportamiento específico de firmware y orientación de instalación.

## Por qué es importante entender el protocolo

Tener una comprensión práctica del protocolo de comunicación del G18 ayuda a realizar un aprovisionamiento correcto del dispositivo, acelerar la resolución de problemas y garantizar una operación predecible a largo plazo en Plaspy. Saber qué esperar de los reportes del equipo y cómo el rastreador alcanza la plataforma reduce el tiempo de integración y mejora la fiabilidad.

- Asegura que los dispositivos apunten al endpoint y transporte correctos de Plaspy para que los datos lleguen de forma fiable.
- Ayuda a diagnosticar brechas de conectividad o de reporte aclarando si los problemas son de red, transporte o firmware.
- Guía los pasos de aprovisionamiento para comportamiento del conductor, alertas de eventos y flujos de trabajo del inmovilizador.
- Apoya la toma de decisiones sobre actualizaciones de firmware, reemplazo de hardware o cambios en la configuración de sensores.
- Mejora la gestión de incidentes al dejar claro qué eventos reportará el dispositivo y cómo esos eventos se traducen en alertas en Plaspy.

## Por qué usar Plaspy con este protocolo

Usar el WanWay G18 con Plaspy ofrece visibilidad de flota sencilla para organizaciones que necesitan hardware compacto con funciones telemáticas esenciales. Plaspy recoge las actualizaciones de ubicación del G18, las alarmas por eventos y los marcadores de comportamiento del conductor en una sola plataforma para mapeo, alertas basadas en reglas y reproducción histórica. Esta combinación es útil para prevención de robos, programas UBI y operaciones diarias de flota donde la instalación discreta y el reporte de eventos son importantes.

Si desea conocer más sobre Plaspy y cómo maneja la integración de dispositivos y los flujos de trabajo de flota visite https://www.plaspy.com. Para detalles específicos del protocolo del dispositivo, notas de firmware y guía de instalación más actualizados, verifique la documentación oficial de WanWay en https://www.wanwaytech.net/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
