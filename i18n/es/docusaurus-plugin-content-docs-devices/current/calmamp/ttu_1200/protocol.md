---
slug: /calmamp/ttu_1200/protocol
id: ttu_1200-protocol
sidebar_label: Protocol
title: CalmAmp - TTU-1200 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del CalmAmp TTU-1200 y cómo comunica con Plaspy para rastreo confiable de remolques y activos
keywords:
  - Protocolo CalmAmp TTU 1200
  - Protocolo GPS CalmAmp TTU 1200
  - TTU 1200 Plaspy
  - Protocolo rastreador CalmAmp
  - Comunicación TTU 1200
  - Protocolo de rastreo CalmAmp
  - Compatibilidad rastreador GPS TTU 1200
  - Protocolo de dispositivo Plaspy
  - Rastreo de vehículos TTU 1200
  - Rastreador de remolques TTU 1200
---

# CalmAmp - Protocolo TTU-1200

Esta página ofrece una visión pública y no sensible del contexto del protocolo de comunicación del CalmAmp TTU-1200 cuando se utiliza con Plaspy. Está destinada a ayudar a gerentes de flota, integradores y equipos técnicos a comprender cómo el TTU-1200 reporta ubicación y telemetría a Plaspy, sin exponer detalles de implementación que sean propietarios o sensibles para la seguridad.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, de modo que la mayoría de las unidades TTU-1200 pueden reportar a Plaspy sin selección manual de protocolo. El comportamiento exacto y los mensajes disponibles pueden variar según la versión de firmware, la revisión de hardware y la configuración del fabricante; valide los detalles específicos del equipo con la documentación del fabricante cuando sea necesario.

## Resumen del protocolo

El TTU-1200 comunica la ubicación del vehículo, telemetría básica y notificaciones de eventos a plataformas back-end. En el contexto de Plaspy, el protocolo del dispositivo define cómo la unidad se identifica, transmite datos de posición y eventos, y cómo interactúa con funciones de configuración remota o gestión que provea el fabricante.

- Permite al TTU-1200 enviar posición GPS y eventos de movimiento a un servidor remoto para seguimiento e informes.
- Transporta información de eventos y estados de entradas que Plaspy utiliza para activar alertas y reglas de reporte.
- Soporta métodos de transporte celular y puede usar mensajería basada en UDP o SMS celular como parte de su operación normal.
- Trabaja con sistemas de gestión remota para recibir actualizaciones de configuración y cambios de firmware iniciados por el proveedor del dispositivo.
- Proporciona los identificadores y marcas de tiempo que Plaspy necesita para asociar los mensajes entrantes con el registro correcto del activo.

## Cómo Plaspy detecta el protocolo

Plaspy recibe mensajes entrantes en un endpoint compartido y usa esa conexión para determinar qué protocolo está usando el dispositivo, por lo que muchos equipos solo requieren una configuración de red básica para comenzar a reportar.

- Plaspy acepta conexiones en el endpoint común d.plaspy.com y en la dirección pública 54.85.159.138 usando el puerto 8888.
- La plataforma detecta automáticamente el protocolo del rastreador a partir del flujo de datos entrante, eliminando en la mayoría de los casos la necesidad de seleccionar el protocolo manualmente.
- Cuando un TTU-1200 está configurado para reportar al endpoint de Plaspy, Plaspy mapeará los identificadores del dispositivo en los informes entrantes al activo correspondiente.
- Normalmente solo será necesario configurar en la unidad el host y el puerto de reporte; Plaspy se encarga de la detección del protocolo del lado del servidor.
- Si un dispositivo envía eventos vía SMS u otros mecanismos fuera de banda, los pasos de integración pueden diferir y deben validarse con el fabricante.

## Transporte y contexto de la conexión

El tipo de conexión y el transporte son parte de la decisión global de despliegue. El TTU-1200 soporta transporte de mensajes celular y puede configurarse para usar sockets de red cuando estos estén disponibles. Los ajustes de servidor de Plaspy son intencionalmente consistentes entre dispositivos para simplificar la implementación.

- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 para reportar a Plaspy, según el soporte del equipo y los requisitos del sitio.
- Los equipos también pueden apuntar al nombre de host d.plaspy.com o directamente a 54.85.159.138 según las preferencias de configuración de red.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que ayuda a estandarizar reglas de firewall y de red para las flotas.
- El TTU-1200 puede opcionalmente utilizar SMS mejorado como transporte alterno cuando la conectividad IP no está disponible, según la capacidad del fabricante.
- Elija UDP o TCP según la confiabilidad de la red y las opciones del firmware del dispositivo; Plaspy aceptará cualquiera de los dos transportes en el puerto compartido.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar campos de mensajes, comportamiento de eventos o intervalos de reporte; siempre revise las notas de la versión del dispositivo para cambios que afecten integraciones.
- Las variantes de hardware y las variantes regionales celulares pueden exponer o limitar ciertos transportes como SMS o bandas celulares específicas.
- Los sistemas de configuración del fabricante, por ejemplo PULS, pueden alterar el comportamiento del dispositivo de forma remota; coordine la configuración OTA con el administrador de dispositivos.
- La selección de transporte (UDP versus TCP) puede afectar las características de entrega y debe probarse en su entorno de red.
- La detección automática de Plaspy reduce la configuración manual, pero los identificadores iniciales del dispositivo y los ajustes APN/red deben estar correctos en la unidad.
- Valide comportamientos críticos de alerta y el cableado de entradas en una prueba controlada antes del despliegue completo.

## Por qué es importante entender el protocolo

Comprender con claridad el protocolo de comunicación del TTU-1200 ayuda a garantizar reportes confiables, manejo preciso de eventos y un rendimiento predecible en batería y conectividad cuando se integra con Plaspy.

- Agiliza la resolución de problemas cuando los dispositivos no reportan o informan valores inesperados.
- Permite elegir mejor el tipo de transporte, los intervalos de reporte y evaluar el impacto en la batería.
- Favorece un uso más efectivo de reglas de eventos y alertas en Plaspy al alinear los umbrales del dispositivo con las reglas de la plataforma.
- Facilita la planificación informada de actualizaciones de firmware y configuración remota mediante el sistema de gestión del proveedor.
- Mejora la seguridad y la planificación de red al conocer qué endpoints y puertos contactarán los dispositivos.

## Por qué usar Plaspy con este protocolo

Usar Plaspy con dispositivos CalmAmp TTU-1200 ofrece a las organizaciones una manera simplificada de recolectar datos de ubicación y eventos de rastreadores de remolques y activos, minimizando la configuración por dispositivo. La detección automática de protocolos de Plaspy y su modelo de endpoint único simplifican los flujos de trabajo de firewall, red y aprovisionamiento para que las flotas puedan escalar sin gestionar múltiples endpoints específicos por dispositivo.

To learn more about Plaspy and how it supports device integration, visit https://www.plaspy.com. For the latest device specific protocol details, firmware behavior, and manufacturer implementation notes, please verify information on the official CalmAmp site http://www.calamp.com/.
