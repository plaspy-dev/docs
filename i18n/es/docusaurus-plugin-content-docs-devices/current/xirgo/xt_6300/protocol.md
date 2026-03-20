---
slug: /xirgo/xt_6300/protocol
id: xt_6300-protocol
sidebar_label: Protocol
title: Xirgo - XT-6300 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo para conectar Xirgo XT-6300 e integrar con Plaspy
keywords:
  - Protocolo Xirgo XT-6300
  - Xirgo XT-6300 GPS
  - Compatibilidad XT-6300 Plaspy
  - Protocolo de rastreo Xirgo
  - Comunicación XT-6300
  - Rastreo vehicular Xirgo
  - XT-6300 OBDII JBUS
  - Protocolo de dispositivo Plaspy
  - Integración de protocolo de tracker
  - Gestión de flotas Xirgo
---

# Xirgo - Protocolo XT-6300

Esta página ofrece un panorama público del protocolo para usar el tracker Xirgo XT-6300 con Plaspy. Se enfoca en el contexto de comunicación y en la información práctica de compatibilidad necesaria para apuntar los dispositivos a Plaspy y entender cómo el tracker reporta ubicación, diagnóstico y datos de movimiento de forma que Plaspy pueda procesarlos. El contenido resume, a alto nivel, cómo se comunica el tracker sin exponer detalles privados de implementación.

El Xirgo XT-6300 es un dispositivo versátil con interfaces OBDII y JBUS, firmware con scripts habilitados, antenas celulares y GPS integradas, motor GPS de alta precisión y un acelerómetro de 3 ejes. Plaspy utiliza configuraciones de conexión compartidas entre los dispositivos soportados y detecta automáticamente el protocolo del tracker, pero el comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante. Verifique los ajustes específicos del equipo con Xirgo cuando sea necesario.

## Resumen del protocolo

A grandes rasgos, el protocolo del dispositivo regula cómo el XT-6300 se identifica ante un servidor, reporta posición y movimiento, y entrega diagnósticos del vehículo o equipo para su procesamiento posterior. Cuando está configurado para reportar a Plaspy, el tracker envía datos que Plaspy mapea a eventos de rastreo, telemetría y campos de diagnóstico para la gestión y monitoreo de flotas.

- Permite la entrega de posición GPS, marca de tiempo y eventos de movimiento desde el XT-6300 al servidor
- Transporta diagnósticos del vehículo y datos OBDII o JBUS cuando esas interfaces están habilitadas en el dispositivo
- Transmite mensajes de estado y latidos que permiten a Plaspy monitorear la salud y conectividad del dispositivo
- Admite características de firmware con scripts para personalizar el comportamiento de reporte que Plaspy puede consumir cuando el dispositivo está configurado en consecuencia
- Soporta datos opcionales de sensores y buses como Garmin FMI, GPIO y entradas 1 Wire cuando están implementados en el dispositivo

## Cómo detecta Plaspy el protocolo

Plaspy escucha en un endpoint y puerto compartidos para conexiones entrantes de trackers y identifica automáticamente el protocolo cuando el dispositivo reporta. En la mayoría de implementaciones, el usuario no necesita seleccionar manualmente un protocolo en Plaspy si el XT-6300 está correctamente configurado para enviar datos al endpoint de Plaspy.

- El dominio del servidor de Plaspy es d.plaspy.com y la IP del servidor es 54.85.159.138
- El puerto que usa Plaspy para conexiones de dispositivos es 8888
- El dispositivo puede configurarse usando UDP o TCP en el puerto 8888 según el soporte del equipo
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la configuración
- Plaspy detecta automáticamente el protocolo del tracker cuando los datos llegan al endpoint compartido

## Transporte y contexto de conexión

La selección del transporte y el endpoint de red son los detalles principales para apuntar un XT-6300 a Plaspy. Dependiendo del firmware del dispositivo y las opciones de configuración, el tracker puede usar UDP o TCP para entregar sus reportes al endpoint de Plaspy en el puerto configurado.

- Los dispositivos pueden configurarse para enviar datos a d.plaspy.com o directamente a 54.85.159.138
- El dispositivo puede configurarse usando UDP o TCP en el puerto 8888; elija el transporte soportado por el firmware vigente
- Plaspy utiliza el mismo puerto para todos los dispositivos soportados, lo que reduce el esfuerzo de configuración por equipo
- La fiabilidad de la red, las reglas de firewall y el comportamiento del operador pueden influir en si UDP o TCP es la mejor opción
- Asegúrese de que el APN del dispositivo y la conectividad saliente permitan alcanzar el endpoint de Plaspy

## Notas de compatibilidad del protocolo

- Las versiones de firmware pueden cambiar la cadencia de mensajes, los campos disponibles y las funciones de reporte opcionales; confirme el comportamiento del firmware antes de despliegues masivos
- Revisiones de hardware o módulos opcionales como OBDII, JBUS o Bluetooth pueden afectar qué datos puede enviar el dispositivo a Plaspy
- El modo de transporte seleccionado en el dispositivo (UDP o TCP) debe coincidir con el soporte del firmware y las expectativas de cualquier red intermedia
- Los ajustes del lado del fabricante o el firmware con scripts pueden alterar la frecuencia y el contenido de los mensajes; revise los scripts del dispositivo al solucionar problemas
- Valide la compatibilidad y los ajustes requeridos contra la documentación oficial de Xirgo para la unidad XT-6300 y su firmware específico
- Cuando sea posible, pruebe un solo equipo de extremo a extremo para confirmar que la telemetría y los diagnósticos llegan correctamente a Plaspy

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación ayuda a asegurar una configuración confiable, agilizar la resolución de problemas y garantizar un comportamiento predecible a largo plazo para flotas que usan el XT-6300 con Plaspy. Saber qué puede reportar el dispositivo y cómo se conecta reduce la fricción de integración y mejora la visibilidad operativa.

- Acelera la configuración inicial al confirmar el endpoint correcto, el transporte y el modo de reporte
- Ayuda a priorizar los pasos de solución cuando falta telemetría o diagnósticos
- Permite habilitar interfaces opcionales como OBDII y JBUS para obtener datos vehiculares más completos
- Aclara cómo los scripts de firmware y los ajustes del dispositivo afectan los datos que recibe Plaspy
- Apoya la planificación de requisitos de red y reglas de firewall para mantener la disponibilidad

## Por qué usar Plaspy con este protocolo

Usar el Xirgo XT-6300 con Plaspy proporciona a las organizaciones acceso centralizado a datos de ubicación, movimiento y diagnóstico vehicular en una plataforma diseñada para visibilidad de flotas y supervisión operativa. La detección automática de protocolos de Plaspy y su enfoque de puerto unificado reducen la complejidad de configuración y permiten que los equipos se concentren en usar los datos para despacho, planificación de mantenimiento y flujos de cumplimiento.

Para saber más sobre cómo Plaspy trabaja con dispositivos como el XT-6300 visite https://www.plaspy.com. El soporte de protocolo, el comportamiento del firmware y los detalles de implementación del dispositivo pueden cambiar con el tiempo, por lo que verifique la documentación más reciente del fabricante en https://xirgo.com/ antes del despliegue.
