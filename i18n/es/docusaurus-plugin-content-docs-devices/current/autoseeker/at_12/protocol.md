---
slug: /autoseeker/at_12/protocol
id: at_12-protocol
sidebar_label: Protocol
title: Autoseeker - AT-12 Protocol
sidebar_class_name: menu_item_tracker
description: Referencia pública del protocolo para el rastreador Autoseeker AT-12 y su compatibilidad con Plaspy, con ajustes de conexión e integración
keywords:
  - protocolo Autoseeker AT-12
  - protocolo GPS Autoseeker AT-12
  - compatibilidad AT-12 con Plaspy
  - protocolo de rastreo Autoseeker
  - rastreo de vehículos AT-12
  - protocolo rastreador GPS AT-12
  - compatibilidad de dispositivo Plaspy
  - integración GPS Autoseeker
  - protocolo de comunicación AT-12
  - rastreo de flotas Autoseeker
---

# Autoseeker - Protocolo AT-12

Esta página describe el contexto público del protocolo para usar el rastreador Autoseeker AT-12 con Plaspy. Se centra en cómo el dispositivo se comunica con los servidores de Plaspy en términos no sensibles y en lo que integradores y administradores deben comprender sobre el reporte desde el dispositivo y el comportamiento de la conexión.

El AT-12 es un rastreador vehicular compacto con capacidad quad band GSM/GPRS y soporte para reporte vía SMS y GPRS (TCP). Plaspy utiliza ajustes de conexión compartidos entre dispositivos compatibles y detecta automáticamente el protocolo del rastreador, pero el comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante. Revise la documentación del fabricante para detalles específicos del dispositivo cuando sea necesario.

## Resumen del protocolo

El protocolo de comunicación del AT-12 define cómo el rastreador informa posición, estado y alarmas a un servidor remoto y cómo puede recibir comandos o actualizaciones de configuración. Para la integración con Plaspy, los aspectos importantes son la capacidad del dispositivo para establecer una sesión de datos y enviar eventos de rastreo estándar que Plaspy pueda mapear en la plataforma.

- Permite que el rastreador reporte posición GPS, estado de movimiento y estado básico a un endpoint remoto.
- Soporta reporte por redes celulares usando modos SMS y GPRS TCP según lo provea el dispositivo.
- Permite que el rastreador se identifique ante el servidor para que los mensajes entrantes se asocien al registro de dispositivo correcto.
- Transmite mensajes periódicos y eventos usados para seguimiento en vivo e historial.
- Interactúa con funciones del dispositivo como detección de movimiento y gestión de energía para controlar la frecuencia de reporte.

## Detección del protocolo por parte de Plaspy

Plaspy recibe los reportes de los dispositivos en un único endpoint compartido e identifica automáticamente el protocolo del rastreador, por lo que usualmente no es necesario que usted seleccione manualmente un protocolo dentro de Plaspy cuando el dispositivo está correctamente configurado para reportar. La configuración adecuada del dispositivo para apuntar al endpoint de Plaspy suele ser el paso principal requerido.

- El dominio del servidor Plaspy para reportes es d.plaspy.com.
- La IP del servidor Plaspy es 54.85.159.138.
- Plaspy utiliza el puerto 8888 para las conexiones de los dispositivos.
- Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888 al reportar a Plaspy.
- Plaspy utiliza el mismo puerto para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador.
- Si un rastreador está configurado para apuntar al endpoint de Plaspy y puede alcanzar el servidor, Plaspy intentará decodificar los mensajes entrantes y asociarlos con el dispositivo correcto.

## Transporte y contexto de conexión

El AT-12 puede reportar datos por el canal de datos celular y también puede soportar SMS para alertas o como respaldo. Al integrar con Plaspy, la elección del transporte y la dirección de servidor configurada determinan cómo el dispositivo alcanza Plaspy para el seguimiento regular.

- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 según lo que soporte el equipo y la configuración del usuario.
- Los dispositivos pueden apuntar al dominio de Plaspy d.plaspy.com o a la IP del servidor 54.85.159.138; cualquiera de las dos direcciones enruta los reportes a Plaspy.
- Plaspy acepta conexiones de dispositivos en el puerto 8888 para todos los rastreadores soportados.
- Usar TCP puede ser preferible para sesiones persistentes, mientras que UDP se utiliza donde el firmware favorece reportes sin estado.
- Asegúrese de que el APN y la configuración GPRS del dispositivo estén correctos para que el rastreador pueda establecer una sesión de datos y alcanzar el endpoint de Plaspy.
- El reporte por SMS suele usarse para alertas o como respaldo, pero requiere manejo separado fuera del reporte estándar por TCP/GPRS.

## Notas sobre compatibilidad del protocolo

- Las versiones de firmware pueden cambiar la frecuencia de los reportes, los tipos de eventos enviados o los modos de transporte disponibles.
- Las revisiones de hardware pueden introducir pequeñas diferencias en el comportamiento; verifique modelo y revisión del dispositivo al solucionar problemas.
- Algunos comportamientos del dispositivo, como el ajuste automático de zona horaria y la gestión de energía, se controlan en el equipo y afectan la marcación temporal y la cadencia de reportes.
- La selección de transporte (TCP vs UDP) debe coincidir con lo que soporte el firmware del dispositivo y con la configuración aplicada.
- Los ajustes del fabricante y las funciones opcionales (por ejemplo, la sensibilidad de detección de movimiento) pueden afectar el volumen y el tipo de reportes enviados a Plaspy.
- Siempre valide la compatibilidad con la documentación oficial de Autoseeker para la versión de firmware AT-12 que vaya a desplegar.

## Por qué es importante comprender el protocolo

Entender cómo se comunica el AT-12 ayuda a garantizar una configuración fiable, un uso eficiente de datos móviles y una resolución más rápida de problemas cuando los dispositivos no aparecen en Plaspy. Tener expectativas claras sobre el comportamiento de reporte facilita alinear la configuración del dispositivo con las necesidades operativas.

- Ayuda a confirmar que el dispositivo apunta al endpoint correcto de Plaspy y usa el transporte soportado.
- Mejora la velocidad de resolución cuando los mensajes se retrasan o faltan, al acotar el alcance a red, configuración del dispositivo o firmware.
- Sirve de guía para decisiones sobre intervalos de reporte y gestión de energía para equilibrar la vida de la batería y la frescura de la ubicación.
- Permite integraciones más predecibles al usar funciones avanzadas como reportes activados por movimiento o reportes programados diarios.
- Facilita la validación de la identidad del dispositivo y el mapeo de los mensajes entrantes al activo correcto en Plaspy.

## Por qué usar Plaspy con este protocolo

Usar el Autoseeker AT-12 con Plaspy ofrece una forma directa de recolectar datos de ubicación y estado de vehículos y centralizarlos en una sola plataforma para monitoreo, generación de informes y supervisión operativa. La detección automática de protocolos de Plaspy y los ajustes de conexión compartidos reducen la necesidad de seleccionar manualmente un protocolo cuando un dispositivo está correctamente configurado para reportar al endpoint de Plaspy.

To learn more about Plaspy and its device support, visit https://www.plaspy.com. Please verify the latest device specific protocol details, firmware behavior, and manufacturer guidance at the Autoseeker website https://autoseekergps.com/ since protocol support and device implementation details can change over time.
