---
slug: /megastek/mt100/protocol
id: mt100-protocol
sidebar_label: Protocol
title: Megastek - MT100 Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo para integrar el rastreador Megastek MT100 4G con Plaspy, ajustes de transporte y notas de compatibilidad
keywords:
  - protocolo Megastek MT100
  - protocolo GPS Megastek MT100
  - Megastek MT100 Plaspy
  - protocolo de rastreo MT100
  - compatibilidad rastreador Megastek
  - protocolo de comunicación MT100
  - protocolo rastreador GPS personal
  - integración de dispositivos Plaspy
  - compatibilidad telemetría MT100
  - integración Megastek MT100
---

# Megastek - Protocolo MT100

Esta página explica el contexto público del protocolo para usar el rastreador personal 4G Megastek MT100 con Plaspy. Resume cómo el dispositivo comunica ubicaciones y eventos, qué ajustes de conexión espera Plaspy y consideraciones prácticas para la integración sin exponer detalles internos del firmware. El MT100 es un rastreador compacto con clasificación IP67, posicionamiento multimodal, comunicación de voz bidireccional, alarma SOS y soporte de protocolo abierto, características que lo hacen adecuado para despliegues con Plaspy.

Plaspy utiliza ajustes de conexión compartidos para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando éste está configurado para reportar al endpoint de Plaspy. El comportamiento exacto del protocolo y las funciones disponibles pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante; por eso esta guía se centra en el contexto público y las mejores prácticas de integración, en lugar de los detalles internos del firmware.

## Resumen del protocolo

El protocolo de comunicación del MT100 es el mecanismo que permite al rastreador identificarse ante Plaspy, transmitir posiciones y reportar eventos como alarmas SOS, disparos del sensor G y estado de batería. El soporte de protocolo abierto y la capacidad FOTA ayudan a mantener la interoperabilidad del MT100 con Plaspy a lo largo de las actualizaciones de firmware, mientras que el posicionamiento multimodal mejora la calidad de los datos de ubicación enviados al servidor.

- El protocolo transmite fijaciones GNSS, localizaciones asistidas por Wi Fi y datos LBS para que Plaspy muestre posiciones precisas y reproduzca el historial.
- Eventos del dispositivo como SOS, vibración, violaciones de geocerca y metadatos de llamadas de voz se envían por el mismo canal de reporte y se asocian a la identidad del dispositivo.
- Los intervalos de reporte y los tipos de telemetría se pueden ajustar en el dispositivo o mediante configuración remota para gestionar consumo de energía y uso de red sin perder la visibilidad requerida.
- La documentación de protocolo abierto del fabricante permite a Plaspy mapear la telemetría entrante a campos del panel y reglas de alerta sin depender de componentes propietarios.
- El soporte FOTA en el MT100 permite a los administradores actualizar el firmware del dispositivo para alinearlo con mejoras o cambios de protocolo en Plaspy.

## Cómo detecta Plaspy el protocolo

Plaspy escucha en un único endpoint y puerto compartido para conexiones entrantes de dispositivos y detecta automáticamente el protocolo del rastreador usado en cada sesión. Cuando un MT100 está configurado para reportar al endpoint de Plaspy, normalmente no es necesario seleccionar manualmente un protocolo en Plaspy siempre que el dispositivo envíe datos al servidor y puerto correctos.

- El endpoint público de Plaspy es d.plaspy.com y también es accesible en la IP pública 54.85.159.138 en el puerto configurado.
- Plaspy utiliza el mismo puerto para todos los dispositivos compatibles, lo que simplifica la configuración en flotas mixtas.
- Cuando el MT100 reporta al endpoint de Plaspy en el puerto configurado, Plaspy detectará automáticamente la telemetría entrante y la asociará al dispositivo.
- Es imprescindible una identidad de dispositivo correcta (IMEI o ID configurado) y reportes consistentes para que Plaspy vincule los datos entrantes con el activo correcto.
- Si un rastreador no parece ser detectado, verifique primero la configuración de reporte del dispositivo y la accesibilidad de red hacia el endpoint de Plaspy.

## Transporte y contexto de conexión

El MT100 puede transmitir telemetría por datos celulares usando UDP o TCP según la configuración del dispositivo y las capacidades del firmware. Para la integración con Plaspy, asegúrese de que el MT100 esté configurado para usar el endpoint de Plaspy y el puerto compartido de la plataforma para garantizar la entrega confiable de ubicaciones y eventos.

- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 según el soporte del equipo y la configuración local.
- Los dispositivos que apuntan a Plaspy pueden usar el dominio d.plaspy.com o la IP del servidor 54.85.159.138 cuando la resolución DNS no esté disponible.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que reduce la complejidad de configuración en despliegues con múltiples modelos.
- Las condiciones de la red, restricciones del operador y la configuración del APN pueden influir en si TCP o UDP es la mejor opción para una implementación concreta.
- Confirme que la configuración del APN y el plan de datos permiten conexiones salientes al endpoint de Plaspy y que cualquier firewall intermedio admite el transporte seleccionado.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar comandos disponibles, campos de reporte y la semántica de eventos; valide la versión de firmware del dispositivo con las notas actuales del fabricante.
- Revisiones de hardware o SKUs específicos por región pueden presentar ligeras diferencias de protocolo que afecten funciones opcionales como metadatos de voz o fijaciones asistidas por Wi Fi.
- La selección del transporte (TCP vs UDP) puede influir en la confiabilidad de los mensajes y el comportamiento de reintentos, por lo que debe elegir el transporte que mejor se ajuste a sus restricciones de confiabilidad y energía.
- El soporte de protocolo abierto facilita la integración, pero los nombres exactos de campos y las unidades reportadas pueden variar entre versiones de firmware.
- Los cambios por FOTA pueden añadir o eliminar campos de telemetría; programe y pruebe actualizaciones de firmware en un entorno controlado antes de desplegarlas a gran escala.
- Siempre contraste la telemetría observada con la documentación del protocolo del fabricante al solucionar valores inusuales o eventos faltantes.

## Por qué es importante entender el protocolo

Tener una comprensión básica del protocolo de reporte del MT100 ayuda a administradores e integradores a configurar correctamente los dispositivos, diagnosticar problemas de conectividad o datos y ajustar los reportes según las necesidades operativas. Saber qué esperar del rastreador y cómo Plaspy recibe esos datos hace que los despliegues sean más previsibles y fáciles de mantener.

- Garantiza que la identidad del dispositivo y el mapeo de telemetría sean correctos, de modo que los eventos se correlacionen con los usuarios o activos adecuados en Plaspy.
- Ayuda a identificar si la falta de datos se debe a la red, al transporte, a la configuración del dispositivo o al comportamiento del firmware.
- Permite tomar decisiones informadas sobre intervalos de reporte y gestión de energía para equilibrar la autonomía de la batería con la resolución del rastreo.
- Facilita la planificación de actualizaciones de firmware y las pruebas de FOTA para evitar cambios inesperados en los campos de telemetría.
- Mejora la respuesta a incidentes al asegurar que los eventos SOS y de voz se entreguen de forma fiable y sean procesables dentro de Plaspy.

## Por qué usar Plaspy con este protocolo

Usar el MT100 con Plaspy ofrece a las organizaciones una vía directa para combinar hardware de rastreo personal confiable con una plataforma centralizada de telemetría y alertas. El posicionamiento multimodal del MT100, sus funciones SOS y el soporte de protocolo abierto transmiten telemetría a Plaspy, donde los equipos pueden monitorear ubicaciones en tiempo real, configurar geocercas y responder alarmas desde una única interfaz.

Los ajustes de conexión compartidos de Plaspy y la detección automática de protocolo reducen la carga de configuración en flotas que mezclan distintos modelos de rastreadores. Para saber más sobre el uso de Plaspy con dispositivos compatibles y revisar las capacidades de la plataforma, visite https://www.plaspy.com. Tenga en cuenta que el soporte de protocolo, el comportamiento del firmware y los detalles de implementación del dispositivo pueden cambiar con el tiempo; verifique la información más reciente sobre el protocolo y firmware específico del fabricante en https://www.megastek.com/ antes de realizar despliegues a gran escala.
