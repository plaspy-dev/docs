---
slug: /aoya/t19/protocol
id: t19-protocol
sidebar_label: Protocol
title: AoYa - T19 Protocol
sidebar_class_name: menu_item_tracker
description: Visión general pública del protocolo del rastreador AoYa T19 y su comunicación con Plaspy
keywords:
  - Protocolo AoYa T19
  - Protocolo GPS AoYa T19
  - Compatibilidad AoYa T19 con Plaspy
  - Protocolo de comunicación AoYa T19
  - Protocolo de rastreo AoYa T19
  - Protocolo de rastreador GPS AoYa
  - Protocolo GPS mini magnético
  - Protocolo del dispositivo T19 Plaspy
  - Rastreo de vehículos AoYa T19
  - Rastreo de activos AoYa T19
---

# AoYa - T19 Protocolo

Esta página ofrece una descripción pública y no sensible del contexto de comunicación del AoYa T19 cuando se utiliza con la plataforma Plaspy. Explica el papel del protocolo de reporte del rastreador y cómo el dispositivo puede enviar información de ubicación y estado a Plaspy para visibilidad en tiempo real, sin exponer detalles privados de implementación.

Plaspy emplea ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador una vez que el dispositivo apunta correctamente al endpoint de Plaspy. El comportamiento exacto del protocolo para el T19 puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página se centra en orientación práctica y de alto nivel en lugar de detalles internos específicos de firmware.

## Resumen del protocolo

El protocolo de reporte del T19 define cómo el dispositivo se identifica y transmite datos útiles de ubicación y eventos a un servidor. A un alto nivel, el protocolo asegura que Plaspy pueda recibir actualizaciones periódicas de posición, eventos de movimiento o estado, y telemetría básica necesaria para el rastreo y las alertas.

- Permite que el T19 envíe actualizaciones de ubicación y estado que Plaspy puede mostrar y analizar
- Proporciona identificadores e información de tiempo para que Plaspy asocie los reportes con un dispositivo específico
- Transporta datos operativos usados para alertas de geocercas, detección de movimiento y monitoreo de batería
- Permite que el dispositivo reciba o confirme comandos simples desencadenados por el servidor cuando aplique
- Soporta tanto reportes periódicos como mensajes por eventos, por ejemplo alertas por movimiento o manipulación

## Cómo detecta Plaspy el protocolo

Plaspy acepta conexiones entrantes en un único endpoint y puerto compartidos y detecta automáticamente el protocolo del rastreador para los dispositivos soportados. Cuando un T19 está configurado para reportar al endpoint de Plaspy, normalmente no es necesario seleccionar el protocolo manualmente dentro de Plaspy.

- Plaspy escucha en el endpoint del servidor compartido y determina la compatibilidad de protocolo automáticamente
- Los dispositivos que apuntan correctamente al endpoint de Plaspy suelen ser reconocidos sin configuración adicional
- La detección se basa en emparejar el tráfico entrante del dispositivo con comportamientos conocidos y soportados
- Por lo general, usted solo debe asegurarse de que el dispositivo reporte al host y puerto correctos de Plaspy
- Si la detección automática no ocurre, verificar la configuración de reporte del dispositivo y la versión de firmware es el primer paso

## Contexto de transporte y conexión

El contexto de conexión describe cómo se puede apuntar el T19 a Plaspy y qué opciones de transporte se usan comúnmente. El T19 puede configurarse para usar UDP o TCP en el puerto 8888 según el soporte del dispositivo y las opciones de configuración. Plaspy acepta ambos tipos de transporte en el mismo puerto y ofrece un endpoint estable para el reporte de dispositivos.

- El dominio del servidor de Plaspy es d.plaspy.com y la IP del servidor es 54.85.159.138
- Plaspy utiliza el puerto 8888 para las conexiones de dispositivos y todos los dispositivos en Plaspy usan el mismo puerto
- El T19 puede configurarse para usar UDP o TCP en el puerto 8888 según las opciones del firmware disponibles
- Usar el nombre de dominio d.plaspy.com permite que el dispositivo siga cambios de DNS si fuera necesario
- Apuntar un dispositivo directamente a la IP 54.85.159.138 es una alternativa para entornos donde DNS está restringido

## Notas sobre compatibilidad del protocolo

- Las versiones de firmware pueden cambiar cómo el T19 formatea o programa los reportes, por lo que se debe verificar el comportamiento según el firmware
- Revisiones de hardware o diferencias entre SKU pueden introducir pequeñas variaciones de protocolo entre unidades
- Las interfaces de configuración del fabricante pueden usar ajustes de transporte predeterminados distintos, como UDP o TCP
- Asegúrese de que el host de reporte del dispositivo esté configurado en d.plaspy.com o 54.85.159.138 y que el puerto sea 8888 para compatibilidad con Plaspy
- Condiciones de red como NAT y filtrado del operador pueden afectar la alcanzabilidad del dispositivo al endpoint de Plaspy
- Siempre contraste la compatibilidad con la documentación del fabricante al planear despliegues

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación del T19 ayuda a asegurar una configuración confiable, facilitar la resolución de problemas y lograr un comportamiento predecible a largo plazo cuando los dispositivos reportan en Plaspy. Tener claro cómo se conecta el dispositivo y qué reporta reduce el tiempo dedicado a diagnosticar problemas de conectividad o datos.

- Acelera la configuración inicial al confirmar que el transporte y los ajustes de endpoint son correctos
- Ayuda a determinar si un problema es de red, de configuración o de firmware
- Informa decisiones sobre la selección de transporte en función de confiabilidad o consumo de batería
- Facilita una mejor planificación en despliegues a escala de flota y la definición de expectativas de monitoreo
- Reduce alertas falsas al alinear el reporte de eventos del dispositivo con la configuración de Plaspy

## Por qué usar Plaspy con este protocolo

Usar el AoYa T19 con Plaspy ofrece a las organizaciones un rastreo compacto y de larga autonomía combinado con una plataforma que acepta automáticamente reportes de dispositivos e identifica el protocolo apropiado. Esta combinación es ideal para escenarios de rastreo de activos donde el montaje discreto, la batería de larga duración y la ingesta fiable al servidor son importantes.

Si desea saber más sobre cómo trabaja Plaspy con dispositivos como el AoYa T19, visite https://www.plaspy.com. Tenga en cuenta que el soporte de protocolo, el comportamiento del firmware y los detalles de implementación del fabricante pueden cambiar con el tiempo, por lo que debe verificar la información más reciente específica del dispositivo en el sitio del fabricante http://www.aoyagps.com/ antes de realizar despliegues a gran escala.
