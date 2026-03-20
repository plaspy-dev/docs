---
slug: /suntech/st4315/protocol
id: st4315-protocol
sidebar_label: Protocol
title: Suntech - ST4315 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo Suntech ST4315 para compatibilidad con Plaspy en rastreo GPS y telemetría
keywords:
  - Protocolo Suntech ST4315
  - Protocolo GPS Suntech ST4315
  - Protocolo de comunicación Suntech ST4315
  - Protocolo de rastreo Suntech ST4315
  - Compatibilidad ST4315 Plaspy
  - Protocolo rastreador GPS Suntech
  - Rastreo vehicular ST4315
  - Gestión de flotas ST4315
  - Telemetría ST4315
  - Integración Suntech ST4315
---

# Suntech - Protocolo ST4315

Esta página describe, a nivel público, el contexto del protocolo para usar la serie de rastreadores Suntech ST4315 con Plaspy. Se enfoca en cómo el dispositivo se comunica con Plaspy de forma general, qué ajustes de conexión son comunes y qué aspectos conviene revisar al integrar el ST4315 en una flota o sistema de activos. El objetivo es entregar orientación útil de integración sin exponer detalles privados o sensibles de implementación.

Plaspy emplea ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el equipo reporta al endpoint de Plaspy. El tiempo exacto de mensajes y el comportamiento pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante. La familia ST4315 ofrece opciones celulares multi red, registro con buffer y múltiples interfaces de E/S, lo que influye en la configuración de reporte hacia Plaspy.

## Descripción general del protocolo

El protocolo de comunicación del ST4315 permite que el rastreador envíe posiciones GNSS, telemetría y eventos a un servidor remoto como Plaspy. A nivel público, el protocolo facilita la identificación del dispositivo, el reporte periódico y por eventos de posiciones, y la entrega de telemetría que Plaspy puede procesar para mapeo, alertas e informes históricos.

- Proporciona identificación del dispositivo para que Plaspy asocie los mensajes entrantes con el vehículo o activo correcto.
- Entrega datos de posición GNSS y marca temporal usados para seguimiento en tiempo real y reproducción histórica.
- Transmite eventos e información del estado de entradas para alertas de geocerca, estado de encendido y eventos digitales de E/S.
- Soporta almacenamiento con buffer en el equipo para preservar registros durante la pérdida de conectividad y subirlos cuando la conexión se restablece.
- Permite campos de telemetría opcionales para sensores conectados vía RS232, 1-Wire o BLE en las variantes que lo soporten.

## Cómo Plaspy detecta el protocolo

Plaspy escucha en un único endpoint y puerto compartido para conexiones entrantes de rastreadores y selecciona automáticamente la interpretación adecuada. Cuando un ST4315 se configura para reportar a Plaspy, la plataforma asociará el flujo entrante con el dispositivo correcto y extraerá datos de posición y telemetría para su uso en el servicio Plaspy.

- El dominio del servidor Plaspy para reporte es d.plaspy.com como endpoint público para los dispositivos.
- Plaspy también acepta conexiones al IP del servidor 54.85.159.138 para entornos que requieren direccionamiento numérico.
- El puerto de escucha usado por Plaspy para conexiones de rastreadores es 8888 y es el mismo para todos los dispositivos soportados.
- Los dispositivos pueden configurarse para usar transporte UDP o TCP para alcanzar Plaspy en el puerto 8888.
- Plaspy detecta automáticamente el protocolo del rastreador una vez que el dispositivo comienza a reportar, por lo que los usuarios normalmente no necesitan seleccionar un protocolo manualmente en la plataforma.

## Transporte y contexto de conexión

El contexto de conexión describe cómo el ST4315 alcanza Plaspy más que el formato exacto de los mensajes. El rastreador soporta múltiples transportes celulares y puede configurarse para enviar sus datos al endpoint de Plaspy usando el transporte de red y puerto acordados.

- Las variantes ST4315 soportan LTE Cat M1, NB‑IoT y EGPRS para conectividad de red; el transporte hacia Plaspy es TCP o UDP según la configuración.
- Los dispositivos pueden apuntar a d.plaspy.com o directamente a 54.85.159.138 cuando no se desea resolución DNS.
- Todos los equipos que reportan a Plaspy usan el puerto 8888 para sus transmisiones TCP o UDP.
- El registro en buffer del ST4315 retiene registros localmente (dependiendo del dispositivo) para subirlos cuando la conexión esté disponible.
- Asegúrese de que el APN y los ajustes de red del rastreador sean correctos para la tecnología celular elegida y permitan conexiones salientes hacia Plaspy.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar el temporizado, los campos de telemetría disponibles y el comportamiento del reporte de eventos; verifique las notas de firmware al diagnosticar diferencias.
- Las variantes de hardware en la familia ST4315 (por ejemplo, pines y interfaces opcionales) pueden exponer diferentes capacidades de sensores o E/S que afectan la integración.
- La selección de transporte entre UDP y TCP es configurable en el dispositivo; elija el transporte que se ajuste a los requisitos operativos y la fiabilidad de la red.
- Los valores por defecto del fabricante o las herramientas de aprovisionamiento pueden apuntar los dispositivos a otro servidor por defecto; actualice el endpoint de reporte a d.plaspy.com o 54.85.159.138 y al puerto 8888 para Plaspy.
- El comportamiento de buffering y la cantidad máxima de registros almacenados dependen del modelo; confirme los límites al planificar intervalos prolongados sin conexión.
- Siempre valide el comportamiento del dispositivo contra la documentación más reciente del fabricante antes de despliegues a gran escala.

## Por qué es importante entender el protocolo

Conocer cómo se comunica el ST4315 ayuda a asegurar un flujo de datos confiable hacia Plaspy, simplifica la resolución de problemas y reduce el tiempo de despliegue. Aunque Plaspy detecta los protocolos automáticamente, entender el contexto de conexión, las opciones de transporte y las capacidades del equipo ayuda a instaladores y operadores a evitar problemas de configuración comunes.

- Confirma que el rastreador está apuntando al endpoint de Plaspy y usando el puerto 8888 para que los datos lleguen a la plataforma.
- Ayuda a determinar si TCP o UDP es más apropiado para un entorno de red particular.
- Aclara las expectativas sobre la subida de registros en buffer durante y después de cortes de conectividad.
- Facilita mapear las entradas del dispositivo y la telemetría de periféricos a campos significativos en Plaspy.
- Agiliza la resolución de problemas cuando faltan o se retrasan actualizaciones de posición o telemetría.

## Por qué usar Plaspy con este protocolo

Usar el ST4315 con Plaspy combina hardware robusto con una plataforma que se adapta automáticamente a los protocolos de rastreadores entrantes. Para administradores de flotas y activos, la integración soporta seguimiento en tiempo real, monitoreo de eventos y recuperación histórica de datos tras interrupciones, todo utilizando el mismo endpoint y puerto de Plaspy para simplicidad.

Si desea conocer más sobre Plaspy y cómo maneja la comunicación de dispositivos, visite https://www.plaspy.com para explorar la plataforma y las guías de integración. Para los detalles específicos más recientes del protocolo por dispositivo, notas de firmware y especificaciones de variantes de la serie ST4315 consulte al fabricante en http://www.suntechint.com/ para verificar la información vigente.
