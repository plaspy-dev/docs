---
slug: /calmamp/ttu_700/protocol
id: ttu_700-protocol
sidebar_label: Protocol
title: CalmAmp - TTU-700 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del CalmAmp TTU-700 y su comunicación con Plaspy para rastreo de remolques y activos
keywords:
  - CalmAmp TTU-700
  - protocolo CalmAmp TTU-700
  - protocolo GPS CalmAmp TTU-700
  - protocolo de rastreo CalmAmp
  - rastreador de remolque TTU-700
  - rastreador GPS CalmAmp Plaspy
  - protocolo de comunicación TTU-700
  - protocolo rastreo activos remolques
  - compatibilidad dispositivos Plaspy
  - CalAmp PULS PEG
---

# CalmAmp - Protocolo TTU-700

Esta página describe, en términos técnicos claros y accesibles, el contexto público del protocolo para usar el tracker CalmAmp TTU-700 con Plaspy. Explica cómo el TTU-700 reporta posición y estados a un servidor de flota y qué considerar al apuntar dispositivos a Plaspy para recepción en la nube y monitoreo.

Plaspy usa ajustes de conexión compartidos entre dispositivos compatibles y detecta automáticamente el protocolo del tracker cuando el dispositivo reporta al endpoint de Plaspy. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página se centra en aspectos generales no sensibles e invita a verificar contra la documentación del fabricante.

## Resumen del protocolo

El TTU-700 envía telemetría, estados y eventos a servidores backend usando datos celulares y, opcionalmente, SMS. El dispositivo está diseñado para despliegues de largo plazo y aprovecha funciones de CalAmp como un motor de eventos y gestión OTA para controlar qué y cuándo reporta. El propósito del protocolo es permitir que el equipo se identifique, transmita información de ubicación y eventos útil, y permita que plataformas servidoras como Plaspy ingieran esos datos de forma confiable.

- Transporta mensajes desde el dispositivo al servidor para que la posición, el nivel de batería y eventos estén disponibles para las aplicaciones.
- Permite asociar la identidad del dispositivo y telemetría básica con una cuenta de cliente en Plaspy.
- Lleva mensajes generados por el motor de eventos a bordo del dispositivo para reportar excepciones y cambios de estado.
- Soporta transporte por paquetes y SMS mejorado como fallback según la red y la configuración.
- Funciona con sistemas de gestión OTA para ajustar reglas de reporte y firmware cuando sea necesario.

## Cómo detecta Plaspy el protocolo

Plaspy recibe los reportes de trackers en un endpoint común e identifica automáticamente el protocolo cuando llegan los datos. En la mayoría de los casos no es necesario seleccionar manualmente un protocolo dentro de Plaspy si el TTU-700 está configurado para reportar al endpoint de Plaspy y usa ajustes de transporte compatibles.

- El dominio del servidor Plaspy es d.plaspy.com y la IP del servidor Plaspy es 54.85.159.138 como referencia de endpoint directo.
- Plaspy escucha en un único puerto para todos los dispositivos, lo que simplifica la configuración y el onboarding.
- Cuando un dispositivo correctamente configurado envía telemetría al endpoint de Plaspy, Plaspy identificará el protocolo entrante y procesará los mensajes automáticamente.
- Los usuarios normalmente configuran el dispositivo para reportar al endpoint de Plaspy y confirman transporte y credenciales a nivel de dispositivo o operador.
- Si los reportes no llegan como se espera, lo primero es revisar la configuración de envío del dispositivo y la conectividad de la red.

## Transporte y conexión

El TTU-700 soporta múltiples transportes de red y puede configurarse para usar datos por paquete o SMS para la entrega de mensajes. Para la conectividad con Plaspy es importante apuntar el equipo al endpoint correcto de Plaspy y seleccionar un transporte que coincida con el firmware del dispositivo y la suscripción.

- El equipo puede configurarse usando UDP o TCP en el puerto 8888 según el soporte del dispositivo y la configuración.
- Plaspy utiliza el puerto 8888 para todos los dispositivos compatibles, lo que ofrece un punto de entrada consistente entre modelos.
- Los dispositivos pueden apuntar a d.plaspy.com o a 54.85.159.138 como endpoint de reporte.
- Algunas implementaciones usan UDP por menor consumo y simplicidad, mientras que otras usan TCP cuando el firmware prefiere una conexión persistente.
- El mensajería SMS mejorada también está disponible en el TTU-700 como opción de transporte para redes o casos de uso que requieran reportes basados en texto.

## Notas sobre compatibilidad del protocolo

- Las versiones de firmware pueden cambiar el intervalo de mensajes, los campos disponibles o los transportes soportados, por lo que siempre confirme la versión de firmware al validar compatibilidad.
- Las revisiones de hardware y las SKU regionales pueden introducir diferencias sutiles en el comportamiento entre unidades del mismo modelo.
- El TTU-700 soporta transporte por paquetes y SMS mejorado, lo que afecta cómo y cuándo llegan los mensajes a Plaspy.
- La selección de transporte (UDP versus TCP) debe coincidir con la configuración del dispositivo y el entorno del operador en la zona de despliegue.
- Las funciones de gestión OTA pueden alterar reglas de reporte de forma remota, lo que impacta el volumen y el formato de mensajes que Plaspy recibe.
- Valide cualquier regla PEG personalizada o cambios impulsados por PULS frente al comportamiento esperado en Plaspy para evitar perder eventos importantes.
- Consulte siempre las notas de la versión del fabricante y la documentación del dispositivo para detalles de protocolo específicos de cada firmware.

## Por qué es importante entender el protocolo

Comprender cómo el TTU-700 se comunica con una plataforma backend ayuda a configurar correctamente, facilitar el diagnóstico y asegurar una operación predecible a largo plazo. Este conocimiento garantiza que los mensajes lleguen como se espera, que la vida útil de la batería esté optimizada y que las reglas de eventos se comporten de forma consistente para el monitoreo de activos.

- Asegura que los dispositivos apunten al endpoint Plaspy correcto y al transporte adecuado para comenzar a reportar de inmediato.
- Agiliza la resolución de problemas por reportes faltantes o mal formados al enfocar la revisión en transporte, firmware o configuración.
- Permite tomar decisiones informadas sobre intervalos de reporte y reglas de eventos que afectan la autonomía en despliegues a largo plazo.
- Favorece la coordinación entre la gestión OTA del dispositivo y el procesamiento en servidor para anticipar cambios en reglas o firmware.
- Ayuda a los operadores de flota a validar que los disparadores de eventos y el comportamiento de geocercas se traduzcan en las notificaciones esperadas en Plaspy.

## Por qué usar Plaspy con este protocolo

Usar el CalmAmp TTU-700 con Plaspy ofrece una forma directa de recolectar telemetría de remolques y activos desde un equipo diseñado para despliegues duraderos y de bajo mantenimiento. El enfoque del TTU-700 en larga vida de batería, antenas internas y generación configurable de eventos complementa la capacidad de Plaspy para ingerir datos de múltiples tipos de dispositivos en una sola plataforma que detecta automáticamente protocolos compatibles.

Si desea saber más sobre cómo Plaspy gestiona la conectividad y el monitoreo de dispositivos para seguimiento de flotas y activos, visite https://www.plaspy.com. Para la información más reciente sobre protocolos y firmware específicos de dispositivos, verifique los detalles con el fabricante en http://www.calamp.com/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
