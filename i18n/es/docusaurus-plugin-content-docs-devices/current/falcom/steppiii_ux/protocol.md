---
slug: /falcom/steppiii_ux/protocol
id: steppiii_ux-protocol
sidebar_label: Protocol
title: Falcom - STEPPIII-UX Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo Falcom STEPPIII-UX para integrarlo con Plaspy y guías de conexión
keywords:
  - protocolo Falcom STEPPIII-UX
  - GPS Falcom STEPPIII-UX
  - protocolo de rastreo STEPPIII-UX
  - compatibilidad rastreador Falcom con Plaspy
  - gestión de flota STEPPIII-UX
  - comunicación GPS con Plaspy
  - rastreo de vehículos Falcom STEPPIII-UX
  - guía de integración STEPPIII-UX
  - geocercas Falcom
  - protocolo rastreador Plaspy
---

# Falcom - Protocolo STEPPIII-UX

Esta página describe el contexto público del protocolo para usar el rastreador Falcom STEPPIII-UX con la plataforma Plaspy. Se enfoca en el papel de comunicación del protocolo del dispositivo y en cómo esos datos se entregan a Plaspy para casos de uso de gestión de flota, AVL, seguridad y recuperación. El contenido pretende explicar el contexto de conexión y las consideraciones de compatibilidad sin exponer detalles privados de parseo o internos de firmware.

El STEPPIII-UX es una unidad versátil pensada para uso móvil con sensores, actuadores, funciones de voz, geocercas, registro y alertas. Plaspy utiliza ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo cuando un equipo reporta al endpoint de Plaspy. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que los detalles y las funciones disponibles pueden diferir entre unidades y versiones de firmware.

## Resumen del protocolo

El protocolo de reporte del rastreador es el mecanismo por el cual el STEPPIII-UX transmite telemetría, alertas e información de estado a un servidor remoto como Plaspy. A grandes rasgos, el protocolo permite la entrega fiable de posición, eventos y datos de sensores para que Plaspy presente información útil a usuarios y sistemas downstream.

- Permite que el dispositivo se identifique y asocie los mensajes reportados con un vehículo o instalación
- Transporta telemetría como posición GPS, eventos con sello de tiempo y estados básicos de sensores para el procesamiento en Plaspy
- Lleva alertas y notificaciones de geocerca para que Plaspy pueda activar reglas o notificar a usuarios
- Soporta modos de transporte orientados a sesión y sin conexión según la configuración del dispositivo
- Proporciona un flujo consistente de posiciones y actualizaciones de estado que Plaspy asigna a activos y registros históricos

## Cómo Plaspy detecta el protocolo

Plaspy recibe conexiones y paquetes entrantes en un endpoint compartido y determina automáticamente el protocolo del dispositivo para manejar los mensajes de forma adecuada. Para la mayoría de los usuarios esto significa que, cuando un STEPPIII-UX está configurado para reportar a Plaspy, la plataforma detectará y aceptará sus mensajes sin requerir selección manual del protocolo.

- Plaspy escucha en el endpoint compartido d.plaspy.com para los reportes de rastreadores
- La IP pública del servidor de Plaspy para este endpoint es 54.85.159.138 y la plataforma usa un único puerto de escucha para todos los dispositivos
- El puerto de red requerido para el reporte de dispositivos es 8888, que Plaspy utiliza para datos entrantes de rastreadores
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que normalmente no es necesaria la selección manual dentro de la plataforma
- Asegúrese de que el rastreador esté configurado para reportar al endpoint de Plaspy para permitir que la detección automática ocurra

## Transporte y contexto de conexión

El transporte de conexión es la capa que lleva los mensajes del protocolo desde el STEPPIII-UX hasta Plaspy. Dependiendo de las opciones del dispositivo y su configuración, el rastreador puede usar cualquiera de los transportes comunes que Plaspy soporta para entregar datos al endpoint compartido.

- El equipo puede configurarse para usar UDP o TCP en el puerto 8888 para reportar a Plaspy
- Los dispositivos pueden apuntar al hostname d.plaspy.com o a la IP del servidor 54.85.159.138 según la configuración de red
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la configuración de firewall y red
- La elección entre TCP y UDP puede afectar el comportamiento de entrega y debería coincidir con las opciones de configuración del dispositivo y la guía del fabricante
- Elementos a nivel de red como NAT, reglas de firewall y filtrado por el operador móvil pueden influir en la conectividad hacia el endpoint de Plaspy

## Notas sobre compatibilidad del protocolo

- El comportamiento del protocolo y los mensajes disponibles pueden variar según la versión de firmware y la revisión de hardware del STEPPIII-UX
- Las opciones de configuración en el lado del fabricante pueden incluir intervalos de reporte, selección de transporte y canales alternativos de alerta como SMS
- Al integrar con Plaspy, prefiera reportes por TCP o UDP en el puerto compartido 8888 y apunte a d.plaspy.com o 54.85.159.138
- Los dispositivos que también soportan SMS o funciones de voz pueden ser útiles para alertas locales, pero la integración con Plaspy depende del transporte de red hacia el endpoint de Plaspy
- Valide la disponibilidad de funciones como disparadores de geocerca, entradas de sensores y comportamiento de registro contra las notas de la versión del firmware del dispositivo
- Para despliegues grandes considere probar combinaciones representativas de firmware y hardware para confirmar el comportamiento esperado

## Por qué es importante entender el protocolo

Comprender cómo se comunica el STEPPIII-UX ayuda en la configuración, solución de problemas y en garantizar un funcionamiento fiable a largo plazo en Plaspy. Conocer las expectativas de protocolo y transporte reduce el tiempo de integración y aumenta la confianza de que los eventos y la telemetría llegarán a la plataforma como se espera.

- Ayuda a verificar que el nombre de servidor, IP y puerto estén configurados correctamente en el dispositivo para reportar a Plaspy
- Facilita la resolución de problemas de conectividad relacionados con TCP versus UDP y problemas en la ruta de red
- Sirve para mapear eventos del dispositivo y datos de sensores en la configuración de activos y reglas en Plaspy
- Promueve un comportamiento consistente en una flota mixta al tener en cuenta las diferencias de firmware y hardware
- Mejora la planificación de actualizaciones de firmware y las pruebas operativas para evitar cambios inesperados en los conjuntos de mensajes

## Por qué usar Plaspy con este protocolo

Usar el Falcom STEPPIII-UX con Plaspy ofrece a las organizaciones una forma práctica de centralizar datos de posición, alertas y eventos de sensores para visibilidad de flota, monitoreo de seguridad y supervisión operativa. Las capacidades del dispositivo como geocercas, registro y alertas complementan las funciones de Plaspy para ofrecer una solución de rastreo completa sin que los usuarios tengan que gestionar la selección de protocolo dentro de la plataforma.

Si desea conocer más sobre cómo funciona Plaspy con dispositivos como el Falcom STEPPIII-UX visite https://www.plaspy.com. Para los detalles más actuales del protocolo del dispositivo, notas de firmware e instrucciones de configuración específicas del fabricante, verifique la información en el sitio oficial de Falcom https://www.falcom.de ya que el soporte del protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
