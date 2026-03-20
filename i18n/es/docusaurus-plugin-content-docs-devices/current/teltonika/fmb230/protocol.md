---
slug: /teltonika/fmb230/protocol
id: fmb230-protocol
sidebar_label: Protocol
title: Teltonika - FMB230 Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo para usar el Teltonika FMB230 con Plaspy y detalles de conexión
keywords:
  - Protocolo Teltonika FMB230
  - Rastreador GPS FMB230
  - Teltonika FMB230 Plaspy
  - Protocolo de comunicación FMB230
  - Protocolo GPS Teltonika
  - Protocolo rastreador GPS Plaspy
  - Rastreo de vehículos FMB230
  - Sensores Bluetooth LE FMB230
  - Rastreador IP67 FMB230
  - Rastreo de flotas Teltonika FMB230
---

# Teltonika - Protocolo FMB230

Esta página ofrece un panorama público del protocolo para usar el rastreador Teltonika FMB230 con Plaspy. Se centra en cómo el dispositivo se comunica con la plataforma Plaspy en términos generales, qué ajustes de conexión se usan con frecuencia y qué debe considerar al integrar el FMB230 en flotas y monitoreo de activos. El contenido está pensado para usuarios técnicos que requieren una visión clara y no sensible de la comunicación del dispositivo, más que un manual detallado del fabricante.

Plaspy emplea ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando los dispositivos reportan al endpoint de Plaspy. El comportamiento exacto del protocolo puede variar según la versión de firmware del FMB230, la revisión de hardware y la implementación de Teltonika, por lo que esta página mantiene un enfoque general y remite a la documentación del fabricante para detalles específicos del dispositivo.

## Resumen del protocolo

El protocolo de comunicación del Teltonika FMB230 define cómo el rastreador envía posición, eventos, lecturas de sensores y estado a un servidor remoto como Plaspy. Regula la identificación en el primer contacto, la estructura de los reportes periódicos y cómo se transmite telemetría complementaria (por ejemplo valores de sensores Bluetooth LE) desde el dispositivo hasta la plataforma sin exponer detalles privados de implementación.

- Permite al FMB230 enviar datos de posición, movimiento y sensores a Plaspy para seguimiento y análisis
- Transporta identificación y metadatos del dispositivo para que Plaspy asocie los reportes con el activo correcto
- Trasmite información de eventos y alarmas que Plaspy puede presentar como alertas y en reportes
- Soporta telemetría adicional como lecturas de sensores BLE y cambios de estado en entradas para monitoreo vehicular
- Funciona sobre capas de transporte estándar para que el dispositivo reporte al endpoint de Plaspy de manera confiable

## Cómo detecta Plaspy el protocolo

Plaspy escucha en un único endpoint compartido e identifica el tráfico entrante de los dispositivos para poder parsear y procesar los reportes automáticamente. Cuando un FMB230 se configura para reportar a Plaspy, la plataforma asociará las conexiones entrantes con el dispositivo y protocolo correctos sin que, en la mayoría de los casos, sea necesaria una selección manual dentro de Plaspy.

- El dominio del servidor Plaspy para reporte de dispositivos es d.plaspy.com
- La IP del servidor Plaspy para reporte de dispositivos es 54.85.159.138
- El puerto de escucha de Plaspy para todos los dispositivos es 8888 y se mantiene igual entre los dispositivos soportados
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo reporta al endpoint de la plataforma
- Normalmente los usuarios no necesitan seleccionar un protocolo en la interfaz de Plaspy si el dispositivo está configurado para reportar al endpoint de Plaspy

## Contexto de transporte y conexión

El FMB230 puede configurarse para utilizar métodos de transporte IP estándar y apuntará al endpoint de Plaspy usando los ajustes de conexión compartidos. Si el rastreador usa UDP o TCP depende de su configuración y del entorno de red, pero Plaspy acepta modos de transporte comúnmente usados en el mismo puerto de la plataforma para simplificar el despliegue.

- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 según el soporte y la configuración del dispositivo
- Los dispositivos pueden apuntar al endpoint de Plaspy usando el nombre de dominio d.plaspy.com o la IP del servidor 54.85.159.138
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la configuración a nivel de flota y las reglas de firewall
- La elección del transporte (UDP o TCP) puede afectar la semántica de entrega y el comportamiento de reintento a nivel de red
- Confirme la selección del transporte en el equipo y las políticas de la red para asegurar un reporte confiable

## Notas sobre compatibilidad de protocolo

- Las versiones de firmware pueden cambiar cómo se reportan algunos mensajes o qué funciones opcionales están disponibles en el FMB230
- Las revisiones de hardware y las opciones de accesorios, como periféricos BLE, pueden influir en el conjunto de telemetría realmente enviado
- Teltonika puede ofrecer herramientas de configuración y perfiles que modifiquen el comportamiento de reporte; valide los ajustes al desplegar dispositivos
- La elección entre UDP o TCP para el transporte puede verse limitada por condiciones de la red celular o por reglas de firewall en el endpoint
- Confirme que el firmware del dispositivo soporte la telemetría que planea utilizar, por ejemplo el reenvío de sensores BLE o entradas especializadas
- Verifique siempre los detalles de protocolo y comportamiento contra la documentación de Teltonika para notas específicas por modelo y firmware

## Por qué es importante comprender el protocolo

Comprender cómo el FMB230 se comunica con Plaspy ayuda a asegurar una configuración correcta, agilizar la resolución de problemas y mantener un rendimiento consistente a largo plazo en casos de uso de seguimiento y monitoreo. Un conocimiento claro del protocolo reduce la fricción en la integración y le ayuda a alinear la configuración del dispositivo con los requisitos operativos.

- Acelera la incorporación inicial de dispositivos al alinear los ajustes de reporte con el endpoint y puerto de Plaspy
- Ayuda a diagnosticar problemas de conectividad relacionados con la selección de transporte, DNS o el enrutamiento de red hacia d.plaspy.com
- Aclara qué campos de telemetría y datos de sensores puede esperar la plataforma según la versión de firmware
- Informa decisiones de configuración de firewall y red dado que Plaspy utiliza un único puerto compartido para dispositivos
- Apoya la planificación operativa para funciones como integración de sensores BLE, monitoreo de entradas y manejo de eventos

## Por qué usar Plaspy con este protocolo

Usar el Teltonika FMB230 con Plaspy ofrece a las organizaciones una forma práctica de recopilar posiciones GPS, telemetría de sensores y datos de eventos desde un rastreador resistente con clasificación IP67 que soporta periféricos BLE. El enfoque de endpoint compartido y la detección automática de protocolo de Plaspy reducen la carga de configuración por dispositivo y facilitan la escalabilidad del monitoreo en flotas que emplean el FMB230.

Si necesita más detalles sobre las capacidades de Plaspy o guía para configurar dispositivos para que reporten a Plaspy, conozca más sobre Plaspy en https://www.plaspy.com. Para los detalles de protocolo específicos por modelo, notas de firmware y herramientas de configuración consulte la documentación oficial de Teltonika en https://www.teltonika-gps.com/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
