---
slug: /riti/690_idu_400/protocol
id: 690_idu_400-protocol
sidebar_label: Protocol
title: Riti - 690 (IDU-400) Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del Riti 690 IDU 400 y cómo se comunica con Plaspy para rastreo y telemetría
keywords:
  - protocolo Riti 690
  - protocolo Riti 690 IDU 400
  - protocolo GPS Riti 690
  - Riti IDU 400 Plaspy
  - protocolo rastreador GPS Riti
  - protocolo Locator 690
  - comunicación IDU 400
  - protocolo de rastreo vehicular Riti
  - compatibilidad Riti Plaspy
  - protocolo de rastreo Riti 690
---

# Riti - 690 (IDU-400) Protocolo

Esta página ofrece un resumen público sobre el contexto del protocolo de comunicación del Riti Locator 690 IDU 400 cuando se utiliza con Plaspy. Se centra en el papel del protocolo de reporte del rastreador para enviar posiciones GNSS, telemetría, eventos y datos de periféricos a Plaspy sin exponer formatos de trama propietarios ni detalles internos de firmware. El contenido está pensado para ayudar a equipos técnicos e integradores a comprender a alto nivel cómo se comunica el dispositivo y cómo Plaspy consume esa información.

El Locator 690 es una unidad de datos inteligente con GNSS diseñada para entornos exigentes de flotas y vehículos comerciales. Plaspy emplea configuraciones de conexión compartidas entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, aunque el comportamiento exacto puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante. Para conectarse a Plaspy, los dispositivos pueden apuntar al dominio del servidor d.plaspy.com o a la IP 54.85.159.138 y usar el puerto 8888 para el reporte.

## Visión general del protocolo

A alto nivel, el protocolo de reporte del rastreador define cómo el Locator 690 se identifica, entrega posiciones GNSS, reporta entradas digitales y analógicas, y envía alertas de eventos a Plaspy. Esta página no detalla formatos propietarios de tramas ni lógica de parsing, pero sí describe el papel práctico del protocolo en una integración con Plaspy.

- Permite la transmisión periódica y por eventos de ubicación y telemetría de sensores a Plaspy para seguimiento en tiempo real y registros históricos
- Transporta información de identidad y sesión para que Plaspy asocie los datos entrantes con el dispositivo y la flota correctos
- Envía cambios en entradas digitales, lecturas de sensores analógicos, eventos SOS y del sensor G que Plaspy usa para alertas y automatizaciones
- Soporta almacenamiento local temporal y reenvío para que Plaspy reciba registros pendientes una vez que se restablece la conectividad
- Opera sobre métodos de transporte estándar que soporta el dispositivo, permitiendo funcionamiento en distintas redes móviles y condiciones de red

## Cómo Plaspy detecta el protocolo

Plaspy escucha en un punto final y puerto compartidos para los reportes entrantes y detecta automáticamente el protocolo de reporte de los dispositivos compatibles. Cuando el Locator 690 está configurado para reportar al endpoint de Plaspy, por lo general usted no necesita seleccionar un protocolo manualmente dentro de Plaspy.

- Plaspy acepta reportes de dispositivos en el endpoint común d.plaspy.com y en la IP del servidor 54.85.159.138
- Todos los dispositivos soportados por Plaspy usan el mismo puerto para telemetría, lo que simplifica la configuración
- Plaspy detecta automáticamente el protocolo del rastreador a partir de las conexiones entrantes, por lo que la configuración correcta en el dispositivo es el requisito principal
- Es necesario que el dispositivo reporte una identidad válida y tenga alcance de red hacia el endpoint de Plaspy para la detección automática y la ingestión de datos
- Si el dispositivo está correctamente configurado para reportar a Plaspy, normalmente no se requiere seleccionar el protocolo por dispositivo en la plataforma

## Transporte y contexto de conexión

La selección del transporte y la configuración del endpoint forman parte del contexto de conexión que determina cómo la telemetría llega a Plaspy. El Locator 690 soporta métodos de transporte comunes y puede configurarse para usar UDP o TCP según la configuración del dispositivo y las condiciones de la red.

- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 al reportar a Plaspy
- Los dispositivos pueden apuntar al dominio del servidor d.plaspy.com o a la IP 54.85.159.138
- El puerto 8888 es el puerto de telemetría común utilizado por Plaspy para todos los dispositivos soportados, lo que reduce la complejidad de configuración
- La elección entre UDP y TCP puede depender de opciones de firmware, necesidades de confiabilidad y comportamiento de la red del operador
- Consideraciones a nivel de red, como restricciones del operador y reglas de firewall, deben permitir conexiones salientes hacia el endpoint de Plaspy

## Notas sobre compatibilidad del protocolo

- La compatibilidad puede variar según la versión de firmware y la revisión de hardware del dispositivo, así que verifique el comportamiento para la unidad específica en uso
- La selección del protocolo de transporte puede afectar la latencia y la confiabilidad para ciertos tipos de eventos o lotes grandes de registros reenviados
- Los menús de configuración del fabricante y las opciones de aprovisionamiento remoto determinan cómo se apunta el dispositivo a Plaspy
- El almacenamiento a bordo y el comportamiento de reenvío son útiles pero pueden estar limitados por la memoria y las opciones de firmware
- El soporte de periféricos como entradas digitales, sensores analógicos e integraciones RS232 debe mapearse a la plataforma usando el mapeo de dispositivo que Plaspy espera
- Valide siempre el reporte de identidad del dispositivo para que Plaspy pueda asociar correctamente la telemetría entrante con el activo correspondiente

## Por qué es importante entender el protocolo

Comprender cómo el Locator 690 se comunica con Plaspy ayuda a instaladores, integradores y operadores de flota a lograr una configuración confiable y una resolución de problemas más rápida, preservando la continuidad operativa.

- Garantiza la selección correcta del endpoint y del transporte para que la telemetría llegue a Plaspy sin necesidad de seleccionar el protocolo manualmente
- Ayuda a diagnosticar problemas de conectividad verificando la dirección del servidor, el alcance de red y la configuración de puertos
- Orienta las decisiones sobre actualización de firmware y habilitación de funciones para mantener la compatibilidad con las expectativas de ingestión de Plaspy
- Facilita el mapeo correcto de entradas y canales de sensores para que la plataforma reciba telemetría y eventos significativos
- Reduce el tiempo de integración en despliegues grandes al alinear las prácticas de configuración del dispositivo con los requisitos de Plaspy

## Por qué usar Plaspy con este protocolo

Usar el Riti Locator 690 con Plaspy ofrece una combinación práctica para organizaciones que requieren localización continua, telemetría vehicular avanzada y visibilidad operativa en flotas mixtas. El Locator 690 entrega posiciones GNSS, telemetría multi I/O y almacenamiento a bordo, mientras que Plaspy ingiere esos datos en mapas en vivo, alertas e informes históricos para despacho, cumplimiento y análisis.

Para obtener más información sobre Plaspy y cómo se integra con rastreadores de flotas como el Riti Locator 690 visite https://www.plaspy.com. Para notas específicas de protocolo, comportamiento de firmware y detalles de implementación del fabricante, verifique la información en el sitio oficial de Riti en https://www.riti.com.tw/ ya que el soporte del fabricante y el firmware pueden cambiar con el tiempo.
