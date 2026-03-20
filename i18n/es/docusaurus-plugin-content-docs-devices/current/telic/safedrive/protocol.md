---
slug: /telic/safedrive/protocol
id: safedrive-protocol
sidebar_label: Protocol
title: Telic - SafeDrive Protocol
sidebar_class_name: menu_item_tracker
description: Visión general pública del protocolo Telic SafeDrive y su comunicación con el servidor Plaspy d.plaspy.com
keywords:
  - protocolo Telic SafeDrive
  - rastreador GPS Telic SafeDrive
  - compatibilidad SafeDrive Plaspy
  - protocolo rastreador Telic
  - seguimiento de vehículos Plaspy
  - comunicación rastreador GPS
  - telemetría SafeDrive
  - gestión de flotas Telic
  - guía protocolo de seguimiento
  - integración Telic SafeDrive
---

# Telic - Protocolo SafeDrive

Esta página ofrece una visión general pública del protocolo para usar el rastreador Telic SafeDrive con la plataforma Plaspy. Se enfoca en el contexto de comunicación relevante al configurar un SafeDrive para que informe ubicación y estado a Plaspy, evitando deliberadamente detalles internos propietarios del fabricante y aspectos de implementación sensibles.

Plaspy emplea ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo cuando un equipo reporta al endpoint de Plaspy. El comportamiento exacto del protocolo en un SafeDrive puede variar según la versión de firmware, la revisión de hardware y la configuración del fabricante, por lo que aquí se describen el contexto de comunicación común y las consideraciones prácticas de compatibilidad en lugar de los detalles internos del firmware.

## Descripción general del protocolo

El protocolo de comunicación que usa un dispositivo SafeDrive determina cómo el rastreador se identifica, transmite la ubicación y la telemetría, y opcionalmente acepta comandos de configuración. Para integrarse con Plaspy, el protocolo debe permitir que el dispositivo envíe informes periódicos o basados en eventos a un servidor Plaspy para que la plataforma pueda analizar y presentar datos de ubicación útiles.

- Permite que el SafeDrive envíe posición GPS, marca de tiempo y estado básico a Plaspy
- Transporta la identidad o información de registro del dispositivo para que Plaspy asigne los informes al activo correcto
- Soporta informes periódicos y notificaciones por eventos usados en telemática y flujos de seguimiento
- Proporciona una capa de transporte que Plaspy recibe y traduce dentro de la plataforma para monitoreo y alertas
- Puede incluir campos opcionales para batería, manipulación o estados de entradas/salidas según la configuración del equipo

## Cómo Plaspy detecta el protocolo

Plaspy recibe datos de rastreadores usando un endpoint y puerto compartidos y detecta automáticamente el protocolo en uso cuando un dispositivo correctamente configurado reporta. En la mayoría de los casos usted no necesita elegir manualmente el protocolo dentro de Plaspy siempre que el SafeDrive apunte al endpoint de Plaspy y use ajustes de transporte compatibles.

- Plaspy escucha en un endpoint y puerto comunes para todos los dispositivos soportados
- Si el SafeDrive reporta a d.plaspy.com o a la IP del servidor Plaspy la plataforma intentará identificar automáticamente el protocolo
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo está reportando correctamente
- Normalmente usted solo necesita configurar el SafeDrive para que reporte al endpoint de Plaspy; la selección manual dentro de Plaspy suele ser innecesaria
- La identidad adecuada del dispositivo y la configuración correcta en el rastreador facilitan el éxito de la detección automática

## Transporte y contexto de conexión

Los dispositivos SafeDrive pueden usar UDP o TCP como transporte según la configuración del equipo y las capacidades del firmware. Para la integración con Plaspy, los dispositivos deben estar configurados para enviar datos a la dirección y puerto del servidor Plaspy para que los informes lleguen de forma confiable y puedan detectarse y procesarse automáticamente.

- Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888
- Plaspy acepta informes de dispositivos en el dominio d.plaspy.com
- La IP del servidor Plaspy para configuración directa es 54.85.159.138
- Todos los dispositivos en Plaspy usan el mismo puerto para simplificar la configuración y la conectividad
- Elija UDP o TCP según las opciones del SafeDrive y las características de fiabilidad que necesite

## Notas sobre compatibilidad del protocolo

- Las variaciones de firmware pueden cambiar qué modos de transporte y qué campos de datos están disponibles en un SafeDrive
- Las revisiones de hardware o subvariantes del modelo pueden presentar ajustes predeterminados distintos para intervalos de reporte y notificaciones de eventos
- Puede ser necesario usar comandos de configuración del fabricante o ajustes por SMS para apuntar un SafeDrive al endpoint de Plaspy
- La selección de UDP o TCP debe coincidir con lo que soporta el firmware del dispositivo y lo que usted configure en el equipo
- Confirme que el reporte de identidad del dispositivo coincida con el formato que Plaspy espera para que la detección automática funcione de forma confiable
- Siempre valide la compatibilidad con la documentación del fabricante vigente antes de desplegar a gran escala

## Por qué es importante entender el protocolo

Conocer el protocolo de comunicación del SafeDrive ayuda a garantizar una configuración correcta, reportes fiables y una resolución de problemas más rápida al integrarlo con Plaspy. Saber las opciones de transporte y a dónde debe apuntar el dispositivo reduce errores de configuración y mantiene la visibilidad operativa a largo plazo.

- Acelera la configuración inicial asegurando que el dispositivo apunte a d.plaspy.com o 54.85.159.138 en el puerto 8888
- Reduce el tiempo de inactividad al facilitar el diagnóstico entre problemas de conectividad y problemas de configuración del equipo
- Ayuda a planificar diferencias de firmware que afectan la frecuencia de reporte y la telemetría disponible
- Permite decisiones informadas sobre elegir UDP o TCP según el comportamiento del dispositivo y la red
- Aumenta la confianza de que la identidad del activo y los eventos se mapearán correctamente en Plaspy

## Por qué usar Plaspy con este protocolo

Usar el Telic SafeDrive con Plaspy ofrece una forma práctica de capturar ubicación de vehículos, eventos y telemetría básica para logística, protección contra robos y monitoreo de viajes de negocio. El diseño plug and play del SafeDrive, su instalación en toma de 12V y su factor de forma compacto lo hacen una opción flexible para necesidades de rastreo temporales o permanentes, mientras que Plaspy se encarga de la recepción, detección y presentación de los datos reportados.

To learn more about Plaspy and how it works with trackers like the Telic SafeDrive, visit https://www.plaspy.com. For the most current device specific protocol details, firmware notes, and configuration instructions, please verify the latest documentation on the manufacturer website https://www.telic.de.
