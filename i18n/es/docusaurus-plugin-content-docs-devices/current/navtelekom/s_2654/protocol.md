---
slug: /navtelekom/s_2654/protocol
id: s_2654-protocol
sidebar_label: Protocol
title: Navtelekom - СИГНАЛ S-2654 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo Navtelekom СИГНАЛ S-2654 y su comunicación con Plaspy para rastreo y telemetría en tiempo real
keywords:
  - protocolo Navtelekom СИГНАЛ S-2654
  - protocolo GPS Navtelekom S 2654
  - compatibilidad S 2654 Plaspy
  - rastreador vehicular GLONASS
  - protocolo de dispositivo Plaspy
  - comunicación seguimiento de flotas
  - dispositivo telemático industrial
  - integración telemetría MODBUS
  - rastreador 3G doble SIM
  - protocolo telemetría vehicular
---

# Protocolo — Navtelekom - СИГНАЛ S-2654

Esta página ofrece una visión pública y no sensible del contexto del protocolo de comunicación del Navtelekom СИГНАЛ S-2654 cuando se utiliza con Plaspy. Resume cómo el dispositivo reporta en términos generales la localización y la telemetría, y qué esperar al integrar el S-2654 en Plaspy para obtener visibilidad de la flota y recopilación de telemetría.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el equipo reporta al endpoint de Plaspy. El comportamiento exacto de funciones individuales y los formatos de mensaje pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página se centra en el contexto público del protocolo y no en los detalles internos del firmware.

## Resumen del protocolo

El S-2654 emplea un protocolo de reporte a nivel de dispositivo para transmitir posiciones GNSS, estados de entradas y salidas, y telemetría por serial/CAN hacia una plataforma backend. La función de este protocolo es entregar registros identificables y oportunos desde el rastreador hasta Plaspy para que la plataforma pueda mostrar mapas, alertas y datos históricos.

- Permite que el rastreador se identifique y envíe posiciones a un servidor remoto para mapear y almacenar historial.
- Transporta estados de entradas y salidas digitales y telemetría serial/CAN que Plaspy puede presentar como eventos y valores de sensores.
- Soporta almacenamiento local y reconciliación posterior para que las interrupciones de red no provoquen pérdida permanente de datos recientes.
- Actúa como puente entre el hardware del equipo (GNSS, E/S, buses seriales) y los servicios de Plaspy para rastreo y alertas.
- Está implementado en el rastreador y puede comportarse de forma distinta según variantes de firmware o hardware.

## Detección del protocolo por Plaspy

Plaspy recibe el tráfico de reportes en un único endpoint y puerto compartidos y realiza detección automática de protocolo para que la mayoría de usuarios no necesiten seleccionar manualmente uno. Cuando el S-2654 está configurado para reportar al endpoint de Plaspy, la plataforma asocia los mensajes entrantes con el dispositivo correcto y la lógica de parseo adecuada.

- Plaspy escucha en la dirección de servidor compartida d.plaspy.com así como en la IP 54.85.159.138.
- La plataforma acepta reportes de dispositivos en el puerto 8888 y usa el mismo puerto para todos los dispositivos soportados.
- Plaspy detecta automáticamente el protocolo del rastreador a partir de las conexiones entrantes, por lo que generalmente no es necesario seleccionar el protocolo manualmente en la plataforma.
- La configuración correcta del dispositivo para apuntar al endpoint de Plaspy es el paso habitual para integrar el equipo.
- Usted debe verificar que el dispositivo pueda enviar datos (SIM, APN y disponibilidad de red) y que el firmware esté configurado para reportar al endpoint de Plaspy.

## Transporte y contexto de conexión

El S-2654 puede configurarse para usar transporte UDP o TCP según las capacidades del equipo y la configuración elegida. Para la integración con Plaspy basta con apuntar el dispositivo al servidor de Plaspy y usar el puerto estándar que Plaspy soporta para todos los rastreadores.

- Los dispositivos pueden configurarse para reportar al dominio d.plaspy.com o directamente a la dirección 54.85.159.138.
- Plaspy acepta conexiones en el puerto 8888 y este mismo puerto se usa para todos los dispositivos que soporta Plaspy.
- El rastreador puede usar UDP o TCP en el puerto 8888 según la configuración del equipo y las condiciones de la red.
- Asegúrese de que la configuración de APN y SIM permita conexiones salientes hacia el endpoint de Plaspy y que cualquier restricción de la red a bordo del vehículo permita el transporte elegido.
- El almacenamiento local en microSD y la batería de respaldo permiten capturar datos cuando la conectividad celular se pierde temporalmente.

## Notas sobre compatibilidad del protocolo

- Las variaciones de firmware pueden cambiar el contenido de los mensajes, los campos soportados y las funciones opcionales; siempre revise las notas de firmware del dispositivo al solucionar problemas.
- Las revisiones de hardware y las opciones de accesorios (por ejemplo, diferentes cableados de E/S o distribuciones CAN) pueden afectar qué elementos de telemetría están presentes.
- La elección de transporte entre UDP y TCP puede afectar características de entrega como retransmisión y orden de los mensajes.
- Las herramientas de configuración del fabricante, como NTC Configurator y DRC, pueden ayudar a alinear las opciones de reporte del dispositivo con Plaspy.
- El S-2654 figura como archivado por el fabricante, por lo que verifique el firmware y la documentación disponibles antes de un despliegue masivo.
- Se recomienda validar contra la documentación oficial del fabricante para cualquier integración que requiera campos de telemetría específicos o comandos de control.

## Por qué es importante entender el protocolo

Conocer el protocolo del rastreador ayuda a asegurar una incorporación confiable, una interpretación precisa de la telemetría y una resolución de problemas eficaz cuando el S-2654 se utiliza con Plaspy. Tener claridad sobre cómo el dispositivo reporta y qué campos proporciona reduce el tiempo de integración y mejora la fiabilidad operativa.

- Permite confirmar que el dispositivo está enviando a Plaspy los campos GPS y de telemetría esperados.
- Facilita la resolución de problemas cuando los mensajes se retrasan o faltan, revisando transporte y configuración.
- Orienta las decisiones de configuración como UDP versus TCP, intervalos de reporte y comportamiento de almacenamiento en búfer.
- Aclara qué entradas, salidas y telemetría serial/CAN pueden esperarse en los paneles y reportes de Plaspy.
- Apoya la planificación de actualizaciones de firmware, pruebas de versiones y validación de compatibilidad antes del despliegue en la flota.

## Por qué usar Plaspy con este protocolo

El СИГНАЛ S-2654 aporta posicionamiento GLONASS, E/S industriales y telemetría serial/CAN a flujos de trabajo de gestión de flotas y activos. Cuando el dispositivo apunta a Plaspy y está configurado para reportar, los operadores obtienen visibilidad centralizada de la ubicación de los vehículos, datos de sensores y alertas basadas en eventos que respaldan operaciones, mantenimiento y seguridad.

El modelo de endpoint compartido y la detección automática de protocolos de Plaspy simplifican la integración en la mayoría de despliegues. Para obtener más información sobre Plaspy y cómo funciona con dispositivos como el S-2654 visite https://www.plaspy.com. Para detalles específicos del protocolo del equipo, notas de firmware y utilidades de configuración consulte al fabricante en https://www.navtelecom.ru/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
