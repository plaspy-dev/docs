---
slug: /hunterpro/cp60_counter/protocol
id: cp60_counter-protocol
sidebar_label: Protocol
title: HunterPro - CP60-COUNTER Protocol
sidebar_class_name: menu_item_tracker
description: Referencia pública del protocolo HunterPro CP60-COUNTER para Plaspy con ajustes de conexión y notas de compatibilidad
keywords:
  - Protocolo HunterPro CP60-COUNTER
  - Rastreador GPS HunterPro CP60-COUNTER
  - Protocolo HunterPro Plaspy
  - Protocolo de rastreo CP60-COUNTER
  - Comunicación GPS Plaspy
  - Protocolo contador de pasajeros
  - Gestión de flotas HunterPro
  - Compatibilidad rastreador GPRS
  - Compatibilidad rastreador Plaspy
  - Integración CP60-COUNTER
---

# HunterPro - Protocolo CP60-COUNTER

Esta página ofrece información pública sobre el protocolo para usar el rastreador GPS HunterPro CP60-COUNTER con la plataforma Plaspy. Resume cómo se comunica el dispositivo en términos generales, qué ajustes de conexión acepta Plaspy y consideraciones prácticas de compatibilidad para despliegues en transporte de pasajeros y gestión de flotas.

El CP60-COUNTER está diseñado para el conteo de pasajeros y el reporte de ubicación en tiempo real mediante GPRS. Plaspy utiliza ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el equipo reporta al endpoint de Plaspy. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página se enfoca en información pública y no sensible para ayudarle a planear la integración y la resolución de problemas.

## Resumen del protocolo

El protocolo CP60-COUNTER permite que el rastreador envíe datos de ubicación, movimiento y conteo de pasajeros a un servidor remoto para que sistemas de flota como Plaspy puedan mostrar y procesar esa información. La visión pública del protocolo trata el propósito y la función de los mensajes más que las estructuras de paquetes propietarias o específicas de firmware.

- Transmite identificadores del dispositivo y datos de reporte para que el servidor asocie los mensajes con un vehículo y el estado del contador
- Envía información de posición y marca de tiempo para permitir mapeo y geocercas en Plaspy
- Entrega conteos de ingreso y salida de pasajeros o eventos agregados del contador para reportes operativos
- Usa transporte celular GPRS para enviar los datos del dispositivo al endpoint del servidor
- Soporta configuración remota del dispositivo cuando el hardware y firmware lo permiten

## Cómo detecta Plaspy el protocolo

Plaspy acepta conexiones entrantes en un endpoint y puerto compartidos y está diseñado para detectar automáticamente el protocolo del rastreador en dispositivos que reportan correctamente. En la mayoría de los casos no necesita seleccionar un protocolo dentro de Plaspy si el CP60-COUNTER está configurado para reportar al endpoint de Plaspy.

- Plaspy recibe datos de rastreadores en el dominio d.plaspy.com que resuelve a 54.85.159.138
- El servicio Plaspy escucha en el puerto 8888 para todos los dispositivos soportados
- Plaspy detecta automáticamente el protocolo del rastreador cuando el equipo se conecta y reporta al endpoint
- Normalmente se configura el rastreador para apuntar a d.plaspy.com o a la dirección IP 54.85.159.138 y usar el puerto compartido de Plaspy
- No se requiere selección de puerto por dispositivo porque todos los equipos en Plaspy usan el mismo puerto

## Transporte y contexto de conexión

La configuración de conexión para el CP60-COUNTER se maneja en la capa de transporte y depende de la capacidad del equipo y las opciones de configuración. Plaspy soporta las opciones de transporte más comunes para que pueda ajustar la configuración del rastreador al entorno de red.

- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 según el firmware y las opciones disponibles en la unidad
- Plaspy acepta tráfico dirigido a d.plaspy.com o directamente a 54.85.159.138 en el puerto 8888
- El puerto 8888 es el único puerto utilizado en Plaspy para simplificar la configuración
- Elija UDP cuando se requiera un reporte liviano y el firmware del equipo espere ese transporte
- Elija TCP cuando se necesite un transporte confiable y el rastreador soporte conexiones persistentes

## Notas de compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar la cadencia de mensajes, los campos disponibles o los comandos de configuración; verifique la versión de firmware en las unidades instaladas
- Las revisiones de hardware u módulos opcionales pueden afectar los transportes soportados o las entradas de sensores como los contadores de pasajeros
- La sintaxis de comandos y los ajustes del fabricante pueden variar entre versiones de firmware y modelos regionales
- Si un dispositivo no alcanza Plaspy, confirme que esté apuntando a d.plaspy.com o 54.85.159.138 y usando el puerto 8888 con el transporte esperado
- Algunas funciones, como la configuración remota o contadores avanzados, pueden requerir firmware específico u opciones habilitadas
- Siempre valide cualquier cambio en un entorno controlado antes de un despliegue masivo

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación ayuda a configurar correctamente, diagnosticar problemas de conectividad y mantener una operación confiable en flotas en producción. Saber cómo el CP60-COUNTER reporta datos y cómo Plaspy los recibe reduce el tiempo dedicado a resolver fallos y aumenta la confianza operativa.

- Asegura que el reporte del dispositivo esté dirigido correctamente al endpoint y puerto de Plaspy
- Permite identificar si la selección de transporte entre UDP y TCP es la adecuada para su red
- Ayuda a interpretar comportamientos del dispositivo que pueden deberse a diferencias de firmware o ajustes
- Facilita la planificación de disponibilidad de funciones como eventos de conteo de pasajeros y los intervalos de reporte
- Reduce el tiempo de despliegue al aclarar qué ajustes del dispositivo deben coincidir con las expectativas de conexión de Plaspy

## Por qué usar Plaspy con este protocolo

Usar el HunterPro CP60-COUNTER con Plaspy ofrece una solución práctica para que los operadores de transporte de pasajeros combinen el rastreo de ubicación con datos de conteo de pasajeros en una sola plataforma de gestión de flotas. La detección automática de protocolos de Plaspy y su enfoque de puerto único simplifican la incorporación de dispositivos, de modo que los equipos operativos puedan concentrarse en análisis y calidad de servicio en lugar de la conectividad de bajo nivel.

Si desea saber más sobre cómo funciona Plaspy con dispositivos como el CP60-COUNTER y las capacidades generales de la plataforma, visite https://www.plaspy.com. Para obtener los detalles específicos más recientes del protocolo del dispositivo, notas de firmware y orientación de implementación, verifique la información con HunterPro en http://hunterpro.com.tw/ ya que el soporte de protocolo y el comportamiento del fabricante pueden cambiar con el tiempo.
