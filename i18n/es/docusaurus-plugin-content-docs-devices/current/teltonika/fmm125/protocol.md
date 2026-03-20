---
slug: /teltonika/fmm125/protocol
id: fmm125-protocol
sidebar_label: Protocol
title: Teltonika - FMM125 Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo para el rastreador Teltonika FMM125 y su compatibilidad con Plaspy, con ajustes de conexión e integración
keywords:
  - Teltonika FMM125 protocolo
  - Teltonika FMM125 protocolo GPS
  - Teltonika FMM125 protocolo de comunicación
  - Teltonika FMM125 protocolo de rastreo
  - FMM125 Plaspy
  - Teltonika FMM125 compatibilidad
  - protocolo rastreador GPS Plaspy
  - rastreo de vehículos FMM125
  - gestión de flotas Teltonika FMM125
  - integración telemetría FMM125
---

# Teltonika - Protocolo FMM125

Esta página describe el contexto público del protocolo para usar el rastreador Teltonika FMM125 con Plaspy. Resume cómo se comunica el dispositivo a alto nivel, qué ajustes de conexión espera Plaspy y cómo el comportamiento del protocolo se relaciona con tareas comunes de integración para flotas y telemetría. La información aquí se centra en detalles públicos y no sensibles de integración, no en internals de firmware ni en reglas binarias del protocolo.

El FMM125 es compatible con Plaspy desde el primer momento y ofrece opciones celulares LTE Cat M1 y NB‑IoT, con doble SIM y con posibilidad de retroceso a 2G. Plaspy utiliza ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador. Los dispositivos pueden configurarse para reportar al endpoint de Plaspy en d.plaspy.com o a la IP 54.85.159.138 en el puerto 8888 usando UDP o TCP. Los tiempos exactos de envío, los campos de telemetría y el comportamiento pueden variar según la versión de firmware, la revisión de hardware y la configuración del fabricante, por lo que debe validar los detalles específicos del dispositivo al desplegar a escala.

## Resumen del protocolo

El protocolo de comunicación del dispositivo regula cómo el FMM125 reporta ubicación, telemetría externa y estado a un servidor como Plaspy. El protocolo permite que el rastreador se identifique ante el servidor, entregue datos de GPS y sensores, y proporcione la información de estado necesaria para monitoreo y flujos de trabajo de flota.

- Permite que el FMM125 envíe actualizaciones periódicas de posición y campos de telemetría externa a Plaspy para mapeo e informes.
- Transporta identificadores del dispositivo e información de estado que permiten a Plaspy asociar los mensajes entrantes con el registro de vehículo correcto.
- Transmite telemetría desde RS232, RS485, entradas por impulso y adaptadores CAN para que Plaspy pueda procesar datos de combustible y otros datos vehiculares.
- Soporta transporte en red hacia el endpoint centralizado de Plaspy, de modo que los datos estén disponibles para alertas en tiempo real e informes históricos.
- Habilita opciones de continuidad como alternancia entre redes celulares y conexiones por módem satelital, para que Plaspy reciba datos en escenarios de cobertura mixta.

## Cómo detecta Plaspy el protocolo

Plaspy escucha las conexiones entrantes de dispositivos en un único endpoint y puerto compartidos y detecta automáticamente el protocolo del rastreador a partir del flujo de datos recibido. En la mayoría de despliegues, solo es necesario configurar el dispositivo para que reporte al endpoint de Plaspy y no se requiere seleccionar manualmente el protocolo dentro de Plaspy.

- Plaspy acepta tráfico de dispositivos en d.plaspy.com y en la IP 54.85.159.138 en el puerto 8888.
- Todos los dispositivos soportados por Plaspy usan el mismo puerto, lo que simplifica la provisión de equipos y el despliegue a escala de flota.
- Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888 según el soporte del equipo y las condiciones de red.
- Cuando el FMM125 apunta al endpoint de Plaspy y se incluye un identificador de dispositivo, Plaspy asigna automáticamente los mensajes entrantes al registro de rastreador correspondiente.
- Los pasos típicos de configuración son: ajustar APN y conectividad en el FMM125 y establecer la dirección del servidor en d.plaspy.com o 54.85.159.138 con puerto 8888.

## Contexto de transporte y conexión

Las opciones de transporte y conexión determinan cómo el FMM125 entrega datos a Plaspy, pero no cambian el propósito público del protocolo. Plaspy ofrece un endpoint de red único y consistente para que los dispositivos e integradores utilicen los mismos ajustes en una flota mixta.

- El FMM125 puede configurarse para usar UDP o TCP en el puerto 8888 para enviar datos a Plaspy.
- Los dispositivos deben apuntar a d.plaspy.com o a la IP 54.85.159.138 y usar el puerto 8888 para reportes.
- Doble SIM, LTE Cat M1, NB‑IoT y el posible retroceso a 2G afectan la disponibilidad celular y por ende los tiempos de entrega, pero no cambian que los datos se envíen al endpoint de Plaspy.
- Adjuntos de módem satelital vía RS232 pueden usarse para reenviar telemetría cuando la celular no está disponible; la selección de transporte para enlaces satelitales depende del módem y del método de integración.
- Asegúrese de configurar APN, la provisión de SIM y cualquier ajuste de red requerido para que el rastreador pueda alcanzar el endpoint de Plaspy.

## Notas de compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar qué campos de telemetría se reportan, las opciones de frecuencia de mensajes y los transportes soportados. Verifique las notas de la versión de firmware cuando dependa de un campo específico.
- Las revisiones de hardware o SKUs regionales pueden alterar las bandas radio y el comportamiento de retroceso, lo que afecta la conectividad más que el propósito del protocolo a alto nivel.
- La integración de RS232, RS485, entradas por impulso y adaptadores CAN puede modificar los conjuntos de telemetría disponibles; revise cómo se asignan los periféricos externos en la configuración del dispositivo.
- Seleccionar UDP frente a TCP afectará la semántica de entrega y puede requerir ajustes distintos en el dispositivo y permisos de red.
- Las integraciones de módem satelital pueden cambiar la forma en que los mensajes se reenvían al endpoint de Plaspy; confirme el cableado entre módem y rastreador y el método de reenvío utilizado.
- Siempre valide el comportamiento del dispositivo en un entorno de pruebas antes de un despliegue amplio para asegurar que los campos reportados coincidan con sus paneles y alertas en Plaspy.

## Por qué es importante entender el protocolo

Tener un entendimiento práctico del protocolo de comunicación del rastreador ayuda a asegurar la entrega confiable, el mapeo correcto de la telemetría y agiliza la resolución de problemas durante la implementación y operación. Conocer el contexto de conexión y qué esperar de un dispositivo reduce la fricción de integración y mejora la confiabilidad a largo plazo.

- Acelera la configuración al saber qué endpoint y puerto configurar en el dispositivo y qué opciones de transporte están disponibles.
- Facilita el diagnóstico de problemas de conectividad al distinguir entre fallas de red y comportamientos de configuración o firmware.
- Garantiza que la telemetría desde puertos seriales, entradas por impulso y adaptadores CAN sea interpretada correctamente por Plaspy para análisis de combustible y datos vehiculares.
- Informa decisiones sobre conmutación por fallo y redundancia, como doble SIM y retroceso satelital, para mantener la continuidad de datos.
- Reduce el tiempo de inactividad al aclarar cuándo cambios de firmware del fabricante podrían requerir revalidación de campos o ajustes.

## Por qué usar Plaspy con este protocolo

Usar el Teltonika FMM125 con Plaspy ofrece a los operadores de flotas una solución integrada y práctica para el rastreo vehicular en tiempo real, supervisión de combustible y recolección amplia de telemetría. El hardware FMM125 está diseñado para telemática profesional con interfaces seriales y CAN, y Plaspy ingiere la ubicación y los datos de sensores resultantes en paneles, reportes y flujos de alertas que apoyan la toma de decisiones operativas.

Si desea obtener más información sobre cómo Plaspy trabaja con dispositivos como el FMM125, visite https://www.plaspy.com. Para notas de protocolo específicas del dispositivo, información de firmware y orientación del fabricante, verifique los detalles en el sitio oficial de Teltonika en https://www.teltonika-gps.com/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
