---
slug: /neomatica/adm700/protocol
id: adm700-protocol
sidebar_label: Protocol
title: Neomatica - ADM700 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del Neomatica ADM700 y cómo se comunica con Plaspy para seguimiento de flotas
keywords:
  - Protocolo Neomatica ADM700
  - Rastreador GPS ADM700
  - Compatibilidad ADM700 Plaspy
  - Protocolo GPS Neomatica
  - Telemetría ADM700
  - Protocolo de rastreo vehicular
  - Integración ADM700 CAN bus
  - Comunicación ADM700 GPRS
  - Compatibilidad de dispositivos Plaspy
  - Rastreo de flotas ADM700
---

# Neomatica - Protocolo ADM700

Esta página ofrece un panorama público sobre el uso del Neomatica ADM700 con Plaspy. Describe, en términos generales, cómo el rastreador se comunica con Plaspy, qué tipos de telemetría e interfaces de vehículo envía a la plataforma y qué ajustes compartidos de conexión se emplean en las integraciones con Plaspy. La información aquí se centra en hechos públicos y no sensibles para facilitar la instalación, la resolución de problemas y la verificación.

El ADM700 es una terminal vehicular GPS/GLONASS que reporta posición, velocidad, rumbo y una amplia gama de telemetría de vehículo a través de GSM GPRS. Plaspy utiliza ajustes de conexión compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando recibe datos. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que confirme detalles específicos del equipo en la documentación oficial de Neomatica cuando sea necesario.

## Resumen del protocolo

A un alto nivel, el protocolo de reporte del ADM700 define cómo la unidad empaqueta y envía correcciones GNSS, telemetría desde CAN y otras interfaces, y registros de eventos mediante transporte celular a un endpoint de backend. Para Plaspy, el protocolo es el mecanismo por el cual el dispositivo se identifica, comunica su estado y entrega datos de ubicación y sensores utilizables para mapeo, alertas e informes.

- Transporta correcciones de ubicación y datos de movimiento a Plaspy para que los vehículos se visualicen en tiempo real.
- Transmite telemetría de vehículo, como mensajes del bus CAN sobre motor y combustible, lecturas de sensores analógicos y estados de entradas discretas.
- Envía registros de eventos y datos almacenados tras periodos sin conexión, permitiendo a Plaspy reconstruir la historia de rutas y eventos omitidos.
- Permite aplicar configuraciones remotas y comandos de gestión de dispositivos a través de los transportes soportados cuando estén disponibles.
- Proporciona campos de identificación y estado que Plaspy utiliza para asociar paquetes con dispositivos y flotas concretas.

## Cómo Plaspy detecta el protocolo

Plaspy acepta tráfico entrante de dispositivos en un endpoint y puerto compartidos y aplica detección automática de protocolo para asociar los mensajes con el tipo de dispositivo correcto. En la mayoría de las implementaciones usted no necesita elegir un protocolo dentro de Plaspy si el dispositivo está correctamente configurado para reportar al endpoint de Plaspy.

- El dominio del servidor de Plaspy para reportes de dispositivos es d.plaspy.com.
- La IP del servidor de Plaspy para reportes de dispositivos es 54.85.159.138 y el puerto estándar es 8888.
- Todos los dispositivos en Plaspy usan el mismo puerto y Plaspy detecta automáticamente el protocolo del rastreador.
- El ADM700 debe configurarse para apuntar al endpoint de Plaspy para una ingestión automática.
- Cuando el reporte está correcto, Plaspy vincula la telemetría entrante al perfil de dispositivo y flota correspondiente.

## Transporte y contexto de conexión

Las unidades ADM700 envían datos mediante GSM GPRS y pueden configurarse para usar diferentes protocolos de transporte según el firmware y las preferencias de despliegue. Plaspy soporta los transportes celulares más comunes y espera que los dispositivos dirigidos a Plaspy usen el endpoint y puerto compartidos.

- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 según el soporte y la configuración del equipo.
- Los dispositivos pueden apuntar a d.plaspy.com o directamente a la dirección IP 54.85.159.138 para reportar.
- Plaspy recibe telemetría en el puerto 8888 para todos los dispositivos soportados para simplificar la configuración.
- Use el modo de transporte que soporte la unidad y el operador de la SIM para una entrega confiable.
- Asegúrese de que el APN y los ajustes de la SIM en el ADM700 sean válidos para que la unidad establezca conectividad GPRS.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar el comportamiento, incluidos los campos de mensaje soportados, modos de transporte y funciones opcionales.
- Las revisiones de hardware y los módulos opcionales pueden afectar qué canales de telemetría están disponibles desde CAN, entradas analógicas o sensores de pulso.
- Opciones de configuración del lado del fabricante o variantes regionales de firmware pueden alterar los ajustes de servidor predeterminados o los comandos disponibles.
- La selección de transporte entre UDP y TCP puede afectar las garantías de entrega y debe coincidir con la configuración elegida para su despliegue.
- Valide la compatibilidad y los conjuntos de parámetros recomendados contra la documentación de Neomatica cuando despliegue a gran escala.
- Plaspy normalmente aceptará los reportes del ADM700 cuando el dispositivo esté configurado para reportar al endpoint de Plaspy y utilice campos de telemetría estándar.

## Por qué es importante comprender el protocolo

Entender cómo el ADM700 se comunica con Plaspy ayuda a garantizar una instalación exitosa, reportes confiables y una resolución de problemas más rápida cuando ocurren eventos. Tener claro el alcance del protocolo y las opciones de transporte reduce el tiempo de integración y mejora la confianza operativa.

- Confirma que el reporte del dispositivo apunta al endpoint y puerto de Plaspy correctos para que los datos lleguen a la plataforma.
- Ayuda a interpretar qué campos de telemetría están disponibles para mapear en los paneles y alertas de Plaspy.
- Acelera el diagnóstico de problemas de conectividad revisando el modo de transporte, el APN y el estado del enlace celular en la unidad.
- Orienta las decisiones de firmware y configuración que afectan el registro, el almacenamiento en búfer y la subida posterior a periodos sin conexión.
- Apoya la planificación del mantenimiento a largo plazo cuando cambios de hardware o firmware alteren la disponibilidad de telemetría.

## Ventajas de usar Plaspy con este protocolo

Usar el ADM700 con Plaspy ofrece una solución práctica para organizaciones que necesitan visibilidad continua de vehículos, telemetría avanzada desde CAN y entradas de sensores, y registro resiliente para flotas exigentes. La combinación del hardware ADM700 y el backend de Plaspy habilita seguimiento en vivo, alertas basadas en eventos y reproducción completa de rutas para supervisión operacional y flujos de trabajo de seguridad.

Si desea conocer más sobre cómo Plaspy maneja integraciones de dispositivos y la administración de flotas, visite https://www.plaspy.com. Para detalles de protocolo más actuales, notas de firmware y comportamiento específico por dispositivo, verifique la información con Neomatica en https://neomatica.com/ ya que el soporte del fabricante y el firmware pueden cambiar con el tiempo.
