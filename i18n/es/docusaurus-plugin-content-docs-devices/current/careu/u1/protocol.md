---
slug: /careu/u1/protocol
id: u1-protocol
sidebar_label: Protocol
title: CAREU - U1 Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo para integrar el rastreador GPS CAREU U1 con Plaspy usando ajustes compartidos y detección automática
keywords:
  - protocolo CAREU U1
  - protocolo GPS CAREU U1
  - protocolo de comunicación CAREU U1
  - protocolo de rastreo CAREU U1
  - compatibilidad CAREU U1 Plaspy
  - integración rastreador GPS CAREU
  - protocolo GPS LTE
  - rastreo de vehículos CAREU U1
  - gestión de flotas CAREU U1
  - protocolo OBDII CAN
---

# CAREU - Protocolo U1

Esta página describe el contexto público del protocolo para usar el rastreador GPS CAREU U1 con Plaspy. Se centra en las expectativas de comunicación y conexión necesarias para que el U1 reporte ubicación y telemetría a Plaspy, sin exponer la lógica privada de parsers ni detalles sensibles de implementación.

El CAREU U1 PLUS LTE es un rastreador GPS multired con posicionamiento GNSS, opciones de conexión LTE y múltiples interfaces (OBDII, CAN, RS232/RS485, sensores de temperatura 1-Wire y, de forma opcional, WiFi o Bluetooth). Plaspy emplea ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador; el comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante.

## Visión general del protocolo

A alto nivel, el protocolo de reporte del rastreador es el conjunto de reglas que el U1 utiliza para enviar posición, telemetría y datos de accesorios a un servidor backend como Plaspy. El protocolo define cómo se identifica el dispositivo, cómo se estructuran los intervalos de reporte y los mensajes de evento, y cómo el servidor acepta y responde a los reportes entrantes para proporcionar datos operativos útiles.

- Permite que el U1 transmita posición GNSS, datos del bus del vehículo y entradas de sensores al backend de Plaspy.
- Transporta identificadores e información de estado para que Plaspy asocie cada reporte con un dispositivo y un vehículo específicos.
- Soporta una combinación de reportes periódicos de posición y mensajes por eventos para alarmas, cambios de E/S y lecturas CAN/OBDII.
- Funciona sobre transportes de red estándar para que el dispositivo pueda usar enlaces LTE, 3G o 2G hacia Plaspy.
- Permite que los datos de accesorios (por ejemplo sondas de temperatura, cámaras de tablero o lectores RFID) se retransmitan junto con la ubicación cuando el dispositivo lo soporta.

## Cómo Plaspy detecta el protocolo

Plaspy recibe conexiones entrantes en un endpoint y puerto compartidos y está diseñado para identificar automáticamente el protocolo del rastreador cuando un dispositivo correctamente configurado reporta. En la mayoría de los casos usted no necesita seleccionar un protocolo dentro de Plaspy; configure el U1 para reportar al endpoint de Plaspy y la plataforma asociará y parseará los mensajes compatibles.

- El endpoint público de Plaspy es d.plaspy.com y la IP del servidor es 54.85.159.138 para fines de configuración de red.
- El puerto compartido que usa Plaspy para reportes de dispositivos es 8888.
- Plaspy detecta automáticamente el protocolo del rastreador cuando un dispositivo transmite a la plataforma.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la configuración en el equipo.
- Si el U1 está configurado para reportar correctamente a d.plaspy.com o a 54.85.159.138 en el puerto 8888, Plaspy intentará identificar y procesar sus reportes.

## Transporte y contexto de conexión

El U1 puede transmitir datos por enlaces celulares y puede configurarse para usar UDP o TCP para llegar a Plaspy según los ajustes del equipo y la estabilidad de la red. Asegurar que el dispositivo apunte al endpoint y puerto correctos de Plaspy es un paso clave para establecer una comunicación confiable.

- Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888 para enviar reportes a Plaspy.
- El dispositivo puede dirigirse al endpoint de Plaspy usando el dominio d.plaspy.com o directamente la IP 54.85.159.138.
- Plaspy recibe datos en el mismo puerto para todos los dispositivos compatibles, reduciendo diferencias por dispositivo en la configuración.
- La elección de UDP frente a TCP puede afectar la retransmisión y las garantías de entrega según las condiciones de red y el firmware del dispositivo.
- Confirme que el APN celular del U1 y las reglas de firewall saliente permiten tráfico hacia el endpoint y puerto de Plaspy.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar campos disponibles, disparadores de mensajes y opciones de reporte; siempre verifique la versión de firmware del dispositivo al diagnosticar diferencias.
- Las variantes de hardware o módulos opcionales (WiFi, Bluetooth, E/S adicionales) pueden introducir nuevos canales de telemetría que afecten el empaquetado de datos.
- Las configuraciones del fabricante o menús de servicio pueden modificar el tipo de transporte, los intervalos de reporte y los conjuntos de mensajes habilitados.
- La selección de transporte (UDP vs TCP) es configurable en muchos dispositivos y puede influir en cómo el servidor recibe y reconoce los reportes.
- La detección automática de Plaspy cubre los modos de reporte más comunes y extendidos, pero casos extremos pueden requerir coordinación con el fabricante.
- Valide las configuraciones del equipo y las notas de firmware con la documentación del fabricante antes de un despliegue a gran escala.

## Por qué es importante entender el protocolo

Comprender cómo se comunica el U1 ayuda a asegurar una configuración fluida, una resolución de problemas efectiva y un funcionamiento predecible a largo plazo cuando se usa con Plaspy. Familiarizarse con el contexto de comunicación reduce el tiempo de integración y aumenta la confiabilidad operativa.

- Configuración más rápida al establecer el endpoint y el transporte correctos en el dispositivo.
- Diagnóstico más ágil ante fallas de conectividad o huecos en los reportes revisando transporte, DNS y ajustes de APN.
- Mejor afinación de eventos al alinear los intervalos de reporte y los umbrales de alarma del dispositivo con las expectativas de ingestión de Plaspy.
- Decisiones informadas sobre actualizaciones de firmware y funciones opcionales que puedan cambiar cómo se reportan los datos.
- Expectativas claras para integraciones de accesorios como OBDII, CAN, sensores de temperatura y enlaces de cámaras.

## Por qué usar Plaspy con este protocolo

Usar el CAREU U1 con Plaspy ofrece una forma práctica de centralizar datos GNSS, del bus del vehículo y de sensores en una plataforma de gestión de flotas. Los ajustes de conexión compartidos de Plaspy y la detección automática del protocolo reducen la complejidad de configuración, permitiendo que las organizaciones se concentren en casos de uso operativos como rastreo de activos, monitoreo de temperatura y análisis del comportamiento del conductor.

Para saber más sobre cómo Plaspy integra dispositivos como el CAREU U1 visite https://www.plaspy.com. Tenga en cuenta que el soporte de protocolo, el comportamiento del firmware y los detalles de implementación del dispositivo pueden cambiar con el tiempo; verifique la información específica más reciente del protocolo y del firmware en el sitio del fabricante en https://www.systech-iot.com/ antes de desplegar a gran escala.
