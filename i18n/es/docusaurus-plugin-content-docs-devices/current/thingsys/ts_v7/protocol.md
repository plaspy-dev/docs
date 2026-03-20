---
slug: /thingsys/ts_v7/protocol
id: ts_v7-protocol
sidebar_label: Protocol
title: ThingSys - TS-V7 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del rastreador ThingSys TS-V7 para integración y configuración en Plaspy
keywords:
  - Protocolo ThingSys TS-V7
  - Protocolo GPS ThingSys TS-V7
  - Comunicación ThingSys TS-V7
  - Protocolo de rastreo TS-V7
  - Compatibilidad TS-V7 Plaspy
  - Protocolo de dispositivo Plaspy
  - Protocolo rastreador GPS vehicular
  - Rastreo de flotas ThingSys
  - Monitoreo remoto TS-V7
  - Compatibilidad firmware TS-V7
---

# ThingSys - Protocolo TS-V7

Esta página describe el contexto del protocolo público para usar el rastreador vehicular ThingSys TS-V7 con la plataforma Plaspy. Se centra en cómo el equipo se comunica con Plaspy en términos generales y qué esperar durante la configuración e integración, sin exponer detalles de implementación privados.

El TS-V7 es un rastreador profesional para vehículos que ofrece conectividad 2G, 3G y 4G; posicionamiento GPS; alarma de emergencia; control remoto de combustible y circuitos; monitoreo remoto vía llamada; geocercas; alertas por exceso de velocidad; conteo de kilometraje; detección de encendido; e integración con sensores y accesorios externos. Plaspy utiliza ajustes de conexión compartidos entre dispositivos soportados y detecta automáticamente el protocolo del rastreador. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware o la implementación del fabricante, por lo que verifique los detalles del equipo con ThingSys cuando sea necesario.

## Panorama del protocolo

El protocolo de comunicación del TS-V7 define cómo se transmiten al servidor remoto los datos de ubicación, alertas, telemetría y respuestas a comandos, así como cómo se entregan comandos o acuses de recibo de vuelta al dispositivo. En el contexto de Plaspy, el protocolo permite una entrega confiable de actualizaciones de posición y notificaciones de eventos para que la plataforma presente información de rastreo y alertas útil.

- Envía información periódica o por evento de ubicación GPS y su marca temporal al servidor.
- Reporta eventos de alarma y alertas como pulsaciones del botón de emergencia, exceso de velocidad o violaciones de geocerca.
- Transmite estado y telemetría, incluyendo estado de encendido, kilometraje y lecturas opcionales de sensores.
- Permite emitir comandos de control remoto y configuración cuando el dispositivo lo soporta.
- Facilita la identificación del equipo para que Plaspy asocie los mensajes entrantes con el activo correcto.

## Cómo detecta Plaspy el protocolo

Plaspy recibe datos de los dispositivos en un endpoint público compartido y determina automáticamente el protocolo del rastreador cuando llegan los mensajes. Esto reduce la necesidad de seleccionar manualmente el protocolo dentro de Plaspy, siempre que el TS-V7 esté configurado para reportar al endpoint de Plaspy usando el transporte soportado.

- El dominio del servidor de Plaspy para reportes de dispositivos es d.plaspy.com.
- La IP del servidor Plaspy es 54.85.159.138 y la plataforma escucha en un único puerto para mensajes de dispositivos.
- El puerto usado por Plaspy para todos los dispositivos soportados es 8888 y Plaspy aplica el mismo puerto en todos los equipos.
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que normalmente no es necesario elegirlo manualmente en la plataforma.
- Si el dispositivo está correctamente configurado para reportar al endpoint de Plaspy, será reconocido y procesado por la plataforma.

## Transporte y contexto de conexión

El contexto de conexión abarca las opciones de transporte de red que usan los dispositivos para alcanzar Plaspy y cómo apuntar el rastreador al endpoint de Plaspy. Para el TS-V7 esto normalmente implica configurar el equipo para enviar sus reportes a Plaspy utilizando uno de los modos de transporte soportados.

- El TS-V7 puede configurarse para usar UDP o TCP en el puerto 8888, según lo permita el dispositivo y las elecciones de configuración local.
- Los dispositivos pueden apuntar al dominio d.plaspy.com o directamente a la IP 54.85.159.138.
- Plaspy emplea el mismo puerto 8888 para todos los equipos para simplificar la configuración y las reglas de firewall.
- Elija el transporte (UDP o TCP) en función de la fiabilidad de su red y las opciones del firmware del dispositivo.
- Confirme la APN y el acceso de red del equipo para que el rastreador pueda alcanzar el endpoint de Plaspy mediante datos móviles.

## Notas sobre compatibilidad del protocolo

- Las versiones de firmware del TS-V7 pueden modificar el conjunto de funciones y el comportamiento exacto de los mensajes. Revise siempre las notas de la versión del firmware.
- Las revisiones de hardware o módulos accesorios opcionales pueden introducir diferencias en la telemetría y los tipos de alertas disponibles.
- Las cadenas de configuración del fabricante o los formatos de la dirección del servidor pueden variar entre compilaciones de firmware; use la guía oficial de ThingSys al configurar el reporte.
- La selección del transporte entre UDP y TCP afecta las características de entrega; verifique cuál recomienda su firmware.
- La detección automática de Plaspy cubre una amplia gama de protocolos comunes de rastreadores, pero se requiere una configuración correcta del dispositivo para la asociación exitosa.
- Valide la compatibilidad y el soporte de comandos específicos según la documentación de producto de ThingSys para el TS-V7.

## Por qué es importante entender el protocolo

Conocer cómo se comunica el TS-V7 facilita la resolución de problemas en la configuración inicial y mejora la confiabilidad a largo plazo cuando el equipo opera con Plaspy. Estar al tanto de los roles del protocolo y de las opciones de transporte reduce el tiempo de integración y mejora la precisión de alertas e informes.

- Acelera la configuración al asegurar que el equipo reporte a d.plaspy.com o a la IP 54.85.159.138 en el puerto 8888.
- Ayuda a diagnosticar problemas de conectividad al aclarar si el dispositivo usa UDP o TCP y si los mensajes llegan a Plaspy.
- Permite mapear mejor la telemetría del dispositivo a funcionalidades de la plataforma, como rastreo por estado de encendido o reporte de kilometraje.
- Mejora la confianza al validar la entrega de alarmas y eventos para flujos de trabajo de seguridad como alertas del botón de emergencia.
- Apoya la planificación de mantenimiento cuando actualizaciones de firmware puedan alterar el comportamiento del protocolo o la disponibilidad de comandos.

## Por qué usar Plaspy con este protocolo

Usar el ThingSys TS-V7 con Plaspy proporciona visibilidad centralizada del estado, ubicación y eventos de los vehículos, aprovechando la detección automática de protocolos de Plaspy y ajustes de conexión unificados. El conjunto de funciones del TS-V7, que incluye monitoreo remoto, alarma de emergencia, control remoto de combustible e integración con múltiples sensores, funciona bien con una plataforma capaz de ingerir actualizaciones de posición, alertas y telemetría para la supervisión de flotas.

Para conocer más sobre Plaspy y las capacidades de la plataforma visite https://www.plaspy.com. Para detalles más actuales específicos del protocolo del dispositivo, comportamiento de firmware y opciones de configuración, verifique la información en el sitio del fabricante https://www.thingsys.com/ y consulte la documentación de ThingSys.
