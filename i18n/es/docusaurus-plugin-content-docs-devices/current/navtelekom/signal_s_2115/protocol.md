---
slug: /navtelekom/signal_s_2115/protocol
id: signal_s_2115-protocol
sidebar_label: Protocol
title: Navtelekom - СИГНАЛ S-2115 Protocol
sidebar_class_name: menu_item_tracker
description: Referencia pública del protocolo para integrar el rastreador Navtelekom СИГНАЛ S-2115 con Plaspy y ajustes compartidos de reporte
keywords:
  - Protocolo Navtelekom S-2115
  - Navtelekom СИГНАЛ S-2115
  - Protocolo GPS SIGNAL S-2115
  - Integración S-2115 Plaspy
  - Protocolo de rastreador Navtelekom
  - Protocolo de rastreador GPS Plaspy
  - Rastreo de vehículos S-2115
  - Compatibilidad S-2115
  - GLONASS GPS Plaspy
  - Integración de rastreadores heredados
---

# Navtelekom - СИГНАЛ S-2115: Protocolo

Esta página presenta el contexto público del protocolo para integrar el rastreador vehicular Navtelekom СИГНАЛ S-2115 con Plaspy. Resume cómo el dispositivo comunica con una plataforma centralizada como Plaspy en términos no sensibles y agnósticos a la implementación, de modo que integradores y administradores puedan planear la incorporación y las tareas de resolución de problemas.

Plaspy emplea ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el equipo está correctamente apuntado al punto de ingestión de Plaspy. El comportamiento exacto del protocolo y los mensajes disponibles pueden variar según la versión de firmware, la variante de hardware y la configuración del fabricante; por eso este documento se concentra en el papel del protocolo de reporte más que en detalles internos del dispositivo.

## Resumen del protocolo

El protocolo de comunicación S-2115 define cómo el rastreador envía posiciones GNSS, eventos y alarmas, además de telemetría básica a un servidor remoto. Para los usuarios de Plaspy, los aspectos clave son la identificación del dispositivo, el reporte de eventos y la entrega confiable de posiciones y alarmas para que Plaspy pueda poblar tableros y activar flujos de trabajo.

- Permite la transmisión de fijaciones de posición GLONASS y GPS con marca de tiempo a un servidor central.
- Incluye eventos basados en acelerómetro como impacto, inclinación y movimiento no autorizado para manejo de alarmas.
- Transmite telemetría básica útil para monitorizar estado, presencia de señal y conectividad de red.
- Soporta canales de control remoto y configuración expuestos por el rastreador, como SMS y menús por voz, que complementan la gestión desde el servidor.
- Permite la identificación del equipo para que la plataforma Plaspy asocie los reportes entrantes con el activo correcto.

## Cómo detecta Plaspy el protocolo

Plaspy escucha en un punto de ingestión compartido y utiliza detección incorporada para reconocer los reportes entrantes del rastreador. En la mayoría de los casos, cuando el S-2115 está configurado para reportar a Plaspy, no es necesario seleccionar manualmente el protocolo dentro del flujo de incorporación de dispositivos de Plaspy.

- El punto de ingestión público de Plaspy es accesible en d.plaspy.com y en la IP 54.85.159.138 usando el puerto estándar de Plaspy.
- Plaspy usa el mismo puerto para todos los dispositivos soportados para simplificar la configuración y la incorporación.
- Cuando un S-2115 correctamente configurado reporta al endpoint de Plaspy, la plataforma detecta automáticamente el protocolo del rastreador y asocia los mensajes con el dispositivo correcto.
- Normalmente, los usuarios configuran el dispositivo para reportar al endpoint de Plaspy en lugar de escoger un protocolo dentro de la plataforma.
- Si un dispositivo esperado no aparece en línea, revise la configuración de reporte del equipo, la versión de firmware y la conectividad GSM antes de ajustar parámetros en la plataforma.

## Transporte y contexto de conexión

Los detalles de conexión determinan cómo el rastreador alcanza Plaspy, pero no cambian el papel general del protocolo. La familia S-2115 soporta reporte sobre GSM y opciones de transporte comunes para comunicación con servidores; los integradores deben seleccionar el modo de transporte que coincida con las capacidades del equipo y las condiciones de la red.

- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888, según el soporte del equipo y los requisitos del sitio.
- Los equipos pueden apuntarse al dominio d.plaspy.com o a la IP del servidor Plaspy 54.85.159.138 para enrutamiento directo.
- La ingestión de Plaspy utiliza el puerto 8888 para todos los dispositivos soportados, manteniendo coherente la configuración saliente en una flota mixta.
- La elección entre UDP o TCP puede afectar la semántica de entrega y el atravesamiento de red; use la opción de transporte que soporte el dispositivo y su operador móvil.
- Asegúrese de que el APN y los ajustes celulares de voz/datos estén configurados correctamente para que el rastreador pueda alcanzar el endpoint de Plaspy.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar los mensajes disponibles, los nombres de parámetros y el comportamiento de transporte por defecto; siempre verifique la versión de firmware del equipo al validar compatibilidad.
- Las revisiones de hardware o variantes del modelo en la familia СИГНАЛ pueden presentar diferencias en funciones soportadas como tipos de alarma u opciones de control remoto.
- Las herramientas de configuración del fabricante, como el NTC Configurator y las guías específicas del dispositivo, siguen siendo la referencia autorizada para ajustes en el lado del equipo.
- La selección de transporte entre UDP y TCP puede estar limitada por las redes de los operadores o por el firmware del dispositivo; pruebe el transporte elegido en su entorno de despliegue.
- Modelos descontinuados o archivados como el S-2115 todavía pueden integrarse, pero pueden requerir el uso de firmware y herramientas archivadas mantenidas por el fabricante.
- Valide cualquier comportamiento que afecte a la seguridad, autenticación o enrutamiento de mensajes contra la documentación oficial del fabricante antes de su uso en producción.

## Por qué es importante comprender el protocolo

Entender cómo se comunica el S-2115 ayuda a asegurar una incorporación confiable, alarmas correctas y datos de ubicación utilizables en Plaspy. Conocer claramente el contexto de comunicación reduce el tiempo de resolución de problemas y mejora la confiabilidad operacional.

- Confirma que el equipo está apuntado correctamente al endpoint de Plaspy para que los datos lleguen a la plataforma.
- Ayuda a diagnosticar posiciones o alarmas faltantes comprobando transporte, APN y ajustes de firmware.
- Orienta la decisión entre UDP y TCP según el comportamiento de la red y las necesidades de entrega.
- Informa la planificación de mantenimiento cuando actualizaciones de firmware cambian el comportamiento de reporte o los campos.
- Facilita la integración de unidades heredadas en flujos de trabajo modernos alineando las capacidades del dispositivo con las funciones de Plaspy.

## Ventajas de usar Plaspy con este protocolo

Usar el СИГНАЛ S-2115 con Plaspy ofrece a las organizaciones una vía simple para consolidar reportes de posición GNSS, alarmas por acelerómetro y telemetría básica en una única plataforma de monitoreo e informes. Para flotas y despliegues con requerimientos de seguridad que dependen de las fijaciones de posición y notificaciones de evento del S-2115, Plaspy proporciona visualización centralizada, alertas y registro histórico que maximizan el valor del equipo.

Para saber más sobre Plaspy y cómo ingiere datos de rastreadores visite https://www.plaspy.com. Para detalles específicos del protocolo del dispositivo, comportamiento de firmware y las últimas herramientas de configuración confirme siempre con la documentación del fabricante en https://www.navtelecom.ru/ ya que el soporte del protocolo y la implementación del dispositivo pueden cambiar con el tiempo.
