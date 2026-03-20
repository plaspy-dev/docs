---
slug: /gosafe/gtu5000/protocol
id: gtu5000-protocol
sidebar_label: Protocol
title: Gosafe - GTU5000 Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo Gosafe GTU5000 y cómo el dispositivo comunica telemetría y posición a Plaspy para gestión de flotas
keywords:
  - Protocolo Gosafe GTU5000
  - Protocolo GPS Gosafe GTU5000
  - Protocolo de rastreo Gosafe GTU5000
  - Comunicación Gosafe GTU5000
  - Integración GTU5000 con Plaspy
  - Protocolo de dispositivo Plaspy
  - Protocolo de rastreador GPS para flotas
  - Compatibilidad de rastreador GPS
  - Protocolo de telemática vehicular
  - Telemetría GTU5000
---

# Gosafe - Protocolo GTU5000

Esta página presenta el contexto público del protocolo para usar el Gosafe GTU5000 con Plaspy. Resume cómo el dispositivo suele transmitir telemetría, cómo se identifica ante los servidores y cómo entrega datos de posición y sensores a Plaspy para gestión de flotas, antirrobo e informes operativos. El contenido está pensado como una visión general del protocolo y del contexto de integración, no como una guía paso a paso de configuración del dispositivo.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el equipo reporta al endpoint de Plaspy. El comportamiento exacto puede variar según la versión de firmware del GTU5000, la revisión de hardware y la implementación del fabricante, por lo que la configuración del dispositivo y la cadencia de los mensajes pueden diferir entre unidades o versiones de firmware.

## Resumen del protocolo

El protocolo de comunicación del GTU5000 define cómo el rastreador empaqueta la información de ubicación, sensores y estado y la envía a un servidor remoto. Para la integración con Plaspy, este protocolo permite la entrega fiable de telemetría, la identificación del dispositivo y el transporte de datos digitales y analógicos para que Plaspy los presente en paneles, mapas, alertas e informes.

- Los transportes compatibles incluyen COAP, TCP, UDP y SMS como vías de respaldo según la red y la configuración.
- El protocolo transmite posiciones, estado GNSS y marcas de tiempo para que Plaspy muestre la ubicación en tiempo real y el historial de rutas.
- Telemetrías de sensores y E/S como estado de ignición, lecturas analógicas ADC y datos de sensores Bluetooth se envían junto con la posición para permitir reportes del estado del vehículo.
- Los identificadores de dispositivo y los campos de estado en los mensajes permiten a Plaspy asociar el tráfico entrante con el activo correcto de la flota.
- El ecosistema del dispositivo soporta señales de OTA y gestión remota para mantener el firmware actualizado y permitir ajustes de configuración que afectan el comportamiento del protocolo.

## Cómo Plaspy detecta el protocolo

Plaspy recibe la telemetría entrante en un endpoint centralizado y determina automáticamente el manejo adecuado para los dispositivos compatibles. Cuando un GTU5000 está configurado para reportar a Plaspy, la plataforma empata el tráfico del dispositivo con un manejador de protocolo compatible, por lo que usted generalmente no necesita seleccionar un protocolo manualmente dentro de Plaspy.

- Plaspy escucha en el endpoint compartido d.plaspy.com que resuelve a la IP pública 54.85.159.138 para el tráfico de dispositivos.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la configuración y el onboarding de equipos.
- Los dispositivos pueden configurarse para usar transporte TCP o UDP en el puerto 8888 para enviar datos a Plaspy.
- Cuando el rastreador reporta correctamente al endpoint de Plaspy, la detección automática de la plataforma enruta los mensajes entrantes a la cadena de procesamiento adecuada.
- Si un dispositivo utiliza SMS u otros transportes de respaldo, esos caminos son gestionados por Plaspy según la telemetría disponible y la configuración.

## Transporte y contexto de conexión

Los detalles de conexión determinan cómo el GTU5000 alcanza Plaspy y qué transporte usa en un momento dado. El GTU5000 soporta múltiples modos de red para que los operadores prioricen fiabilidad, latencia o consumo de energía según las necesidades del despliegue.

- El GTU5000 puede configurarse para usar UDP o TCP en el puerto 8888 cuando reporta al endpoint de Plaspy.
- Los dispositivos pueden apuntar al dominio d.plaspy.com o directamente a la IP del servidor 54.85.159.138 para la entrega de telemetría.
- COAP o SMS se pueden usar como respaldo cuando las condiciones celulares o las políticas del operador requieren transportes alternativos.
- Como Plaspy usa un único puerto compartido para todos los dispositivos compatibles, la configuración del lado del dispositivo se simplifica a un endpoint y puerto comunes.
- La elección del transporte puede afectar la fiabilidad y el orden de los mensajes, pero no cambia que Plaspy intentará la detección automática del protocolo para los mensajes de rastreadores compatibles.

## Notas sobre compatibilidad del protocolo

- Las versiones de firmware pueden cambiar la cadencia de mensajes, los campos disponibles y las preferencias de transporte; verifique la compatibilidad con las notas de la versión del firmware.
- Las revisiones de hardware u opcionales paquetes de funciones en el GTU5000 pueden modificar las E/S y la telemetría de sensores que se reporta a Plaspy.
- Los servicios de configuración o aprovisionamiento del fabricante pueden añadir extensiones propietarias que afectan cómo aparecen los mensajes en Plaspy.
- Elija el transporte con cuidado entre UDP y TCP según la fiabilidad de la red y el volumen esperado de mensajes para su flota.
- Configuraciones de SIM dual y conmutación celular en el rastreador pueden afectar el enrutamiento y cuándo se usan SMS o COAP como transportes alternos.
- Valide siempre un número reducido de dispositivos en su flota antes de un despliegue a gran escala para confirmar la telemetría y el comportamiento esperados.

## Por qué es importante entender el protocolo

Tener una comprensión básica del protocolo de comunicación del rastreador ayuda a acelerar la configuración, facilita la resolución de problemas y hace que la operación a largo plazo dentro de Plaspy sea más predecible. Conocer el contexto de conexión y qué datos proporciona el rastreador reduce la fricción en la integración y mejora la visibilidad operativa.

- Ayuda a confirmar que el dispositivo apunta al endpoint y puerto correctos de Plaspy durante la provisión inicial.
- Acelera la resolución de problemas cuando las actualizaciones de ubicación se detienen, al acotar si el problema es transporte, configuración o firmware del dispositivo.
- Permite a los planificadores elegir compensaciones apropiadas entre transporte y modos de energía según la frecuencia de telemetría esperada.
- Mejora la precisión de alertas e informes al clarificar qué campos de sensores y estado puede proporcionar el dispositivo.
- Respalda decisiones operativas sobre actualizaciones de firmware y despliegues de revisiones de hardware en una flota mixta.

## Por qué usar Plaspy con este protocolo

Usar un rastreador robusto como el GTU5000 junto con Plaspy brinda a las organizaciones visibilidad continua de la ubicación del vehículo, la telemetría de sensores y el estado operativo. La combinación del GTU5000 de posicionamiento multi GNSS, conectividad LTE con respaldo, soporte completo de E/S y sensores Bluetooth lo hace idóneo para rastreo de flotas, flujos de trabajo antirrobo, monitoreo de combustible y detección ambiental cuando se integra con Plaspy.

Para conocer más sobre cómo Plaspy maneja la telemetría de dispositivos y explorar opciones de despliegue, visite https://www.plaspy.com. Para los detalles más recientes del protocolo GTU5000, notas de firmware y guía específica de configuración del dispositivo, consulte al fabricante en https://gosafesystem.com/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
