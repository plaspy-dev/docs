---
slug: /tzone/tz_bc02/protocol
id: tz_bc02-protocol
sidebar_label: Protocol
title: TZone - TZ-BC02 Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo para integrar el rastreador TZone TZ-BC02 con Plaspy y notas de compatibilidad
keywords:
  - protocolo tzone tz bc02
  - protocolo gps tzone tz bc02
  - protocolo de comunicacion tz bc02
  - protocolo de rastreo tz bc02
  - protocolo del rastreador tzone
  - compatibilidad tz bc02 plaspy
  - protocolo de dispositivo plaspy
  - rastreo vehicular tz bc02
  - tz bc02 ibeacon bluetooth
  - duracion de bateria tz bc02
---

# TZone - Protocolo TZ-BC02

Esta página describe, en términos públicos y no sensibles, el contexto del protocolo para usar el rastreador TZone TZ-BC02 con la plataforma Plaspy. Se concentra en cómo el dispositivo se comunica con Plaspy y qué debe conocer para integrarlo y operarlo de forma confiable. El contenido refleja el comportamiento general del equipo y no entra en detalles internos específicos del firmware.

El TZ-BC02 es una unidad compacta con soporte BLE iBeacon y amplia duración de batería; puede operar en distintos modos de reporte según su configuración. Plaspy emplea parámetros de conexión compartidos entre dispositivos compatibles y detecta automáticamente el protocolo del rastreador. El comportamiento exacto del protocolo y los detalles de los reportes pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que siempre conviene validar las especificaciones con la documentación oficial.

## Resumen del protocolo

A alto nivel, el protocolo de comunicación define cómo el dispositivo se identifica ante un servidor, cómo envía ubicación y estado, y cómo se aplican configuraciones remotas. Para el TZ-BC02, esta visión general pública ayuda a los operadores a saber qué esperar al conectar el dispositivo a Plaspy sin exponer detalles internos del firmware.

- Permite que el dispositivo establezca una conexión de red y reporte telemetría y estado a un servicio de backend
- Incluye información de identificación para que el servidor asocie mensajes con un rastreador específico
- Transporta actualizaciones periódicas de ubicación o presencia y campos opcionales de estado que afectan la monitorización y alertas
- Soporta cambios de configuración e intervalos de reporte enviados desde un sistema de gestión o aplicados localmente
- Facilita que el servidor interprete los mensajes entrantes como datos de rastreo útiles para mapeo y análisis

## Cómo Plaspy detecta el protocolo

Plaspy acepta conexiones de rastreadores en un endpoint y puerto comunes y detecta automáticamente el protocolo usado por un dispositivo correctamente configurado. En la mayoría de los casos, el propietario o integrador no necesita seleccionar un controlador manualmente dentro de Plaspy cuando el rastreador apunta al endpoint de Plaspy.

- El endpoint del servidor Plaspy para reportes de dispositivos es d.plaspy.com y la dirección IPv4 pública es 54.85.159.138
- Plaspy escucha en el puerto 8888 para tráfico de dispositivos y todos los dispositivos soportados por Plaspy usan este mismo puerto
- Los dispositivos pueden configurarse para usar UDP o TCP para enviar datos a Plaspy, según lo que soporte el equipo
- Cuando el rastreador envía telemetría reconocible al endpoint de Plaspy, la plataforma detecta y asocia el manejo correcto de forma automática
- Si un dispositivo no aparece, confirme la configuración de red y que el rastreador esté apuntando al endpoint de Plaspy

## Transporte y contexto de conexión

Las opciones de conexión y transporte afectan la confiabilidad, la latencia y los requisitos de firewall. El TZ-BC02 soporta publicidad local por Bluetooth iBeacon para detección en proximidad; para reportes en la nube el dispositivo puede configurarse para enviar datos a través de redes móviles usando UDP o TCP.

- Los dispositivos pueden configurarse para conectarse a d.plaspy.com o a la dirección numérica 54.85.159.138
- Plaspy acepta tráfico de dispositivos en el puerto 8888 y ese puerto se comparte entre todos los dispositivos compatibles
- El rastreador puede ajustarse para usar UDP o TCP según las capacidades del dispositivo y las necesidades de integración
- Asegúrese de que cualquier APN del operador o ajustes de red permitan conexiones salientes al endpoint de Plaspy en el puerto 8888
- El comportamiento local de Bluetooth iBeacon es independiente del reporte al servidor y está pensado principalmente para casos de uso de proximidad con smartphones

## Notas sobre compatibilidad del protocolo

- Las variaciones de firmware pueden cambiar qué campos se reportan y con qué frecuencia se envían los reportes; verifique la versión de firmware al validar el comportamiento
- Revisiónes de hardware pueden añadir o quitar funciones como modos de difusión BLE locales u opciones de gestión de energía
- Las herramientas de configuración del fabricante o ajustes a nivel de SIM pueden influir en si el equipo usa UDP o TCP para llegar al servidor
- La publicidad Bluetooth iBeacon sirve para presencia local y no sustituye el reporte al servidor Plaspy para rastreo remoto
- Confirme las notas del fabricante sobre intervalos de reporte por defecto y parámetros ajustables antes de desplegar a gran escala
- Siempre valide la compatibilidad contra la documentación oficial más reciente del fabricante para el TZ-BC02

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación del dispositivo ayuda a asegurar una transición confiable entre el rastreador y Plaspy durante la configuración y a lo largo del ciclo de vida del despliegue. Saber qué reporta el equipo y cómo se conecta reduce el tiempo de resolución de problemas y mejora la disponibilidad operativa.

- Ayuda a confirmar que el dispositivo apunta al endpoint correcto de Plaspy y usa el transporte soportado
- Facilita interpretar reportes faltantes o irregulares al correlacionar el comportamiento del dispositivo con patrones esperados del protocolo
- Permite tomar decisiones informadas sobre intervalos de reporte y compensaciones de energía para cumplir necesidades operativas
- Reduce el tiempo dedicado a verificar la configuración de red y del operador al incorporar múltiples unidades
- Apoya actividades de ciclo de vida como actualizaciones de firmware y planificación de reemplazo de hardware

## Por qué usar Plaspy con este protocolo

Usar el TZ-BC02 con Plaspy ofrece una forma directa de centralizar datos de ubicación y estado de rastreadores compactos con BLE junto con otros dispositivos de flota y activos. El diseño de endpoint compartido de Plaspy y la detección automática del protocolo simplifican la integración y reducen el esfuerzo de configuración por dispositivo.

Plaspy escucha el tráfico de dispositivos en d.plaspy.com y 54.85.159.138 en el puerto 8888 y detecta automáticamente el protocolo del rastreador, por lo que normalmente no es necesario definir el protocolo manualmente. Para detalles completos sobre campos específicos del protocolo, comportamiento de firmware y cambios recientes en la implementación del TZ-BC02, consulte la documentación del fabricante en http://www.tzonedigital.com/. Para saber más sobre Plaspy y cómo puede administrar rastreadores como el TZ-BC02, visite https://www.plaspy.com. Tenga en cuenta que el soporte de protocolo, el comportamiento del firmware y los detalles de implementación del dispositivo pueden cambiar con el tiempo y deben verificarse con los recursos oficiales del fabricante.
