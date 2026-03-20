---
slug: /flextrack/lommy_capture/protocol
id: lommy_capture-protocol
sidebar_label: Protocol
title: Flextrack - Lommy Capture Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo para integrar Flextrack Lommy Capture con Plaspy en rastreo GPS y gestión de flotas
keywords:
  - protocolo Flextrack Lommy Capture
  - protocolo GPS Flextrack Lommy Capture
  - protocolo de comunicación Lommy Capture
  - protocolo de rastreo Lommy Capture
  - protocolo del rastreador Flextrack
  - compatibilidad Lommy Capture Plaspy
  - protocolo rastreador GPS Flextrack
  - seguimiento Lommy Capture UDP TCP
  - protocolo rastreador para trailer Flextrack
  - rastreador con recolección de energía Lommy Capture
---

# Flextrack - Protocolo Lommy Capture

Esta página documenta el contexto público del protocolo para usar el rastreador Flextrack Lommy Capture con Plaspy. Explica, en términos generales, cómo el dispositivo se comunica con Plaspy para que integradores, gerentes de flota y técnicos comprendan el papel del protocolo de comunicación al conectar unidades Lommy Capture con la plataforma.

Plaspy utiliza ajustes de conexión compartidos para dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando los dispositivos reportan al endpoint de Plaspy. El comportamiento exacto puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página se centra en contexto público no sensible y en orientación práctica de conectividad más que en detalles internos del dispositivo.

## Resumen del protocolo

El protocolo de reporte de Lommy Capture define cómo el rastreador envía mensajes de ubicación, movimiento, telemetría y alarmas a endpoints en la nube. En la práctica, este protocolo permite que el dispositivo se identifique ante Plaspy, entregue actualizaciones de posición oportunas y aporte datos de eventos que Plaspy puede convertir en alertas, geocercas y recorridos históricos.

- Permite el envío de posiciones y telemetría desde Lommy Capture hacia la nube para que Plaspy muestre la ubicación en tiempo real y el historial.
- Transmite mensajes de eventos como movimiento, desconexiones de alimentación y alarmas configurables que activan notificaciones y automatizaciones en Plaspy.
- Soporta modos de reporte intermitente y persistente que reflejan el estado de alimentación del dispositivo y su comportamiento de recolección de energía.
- Permite incluir metadatos identificadores para que Plaspy asocie los reportes con el registro de activo correcto.
- Ofrece un patrón de payload independiente del transporte que Plaspy consume cuando los dispositivos están configurados para reportar al endpoint compartido de Plaspy.

## Cómo detecta Plaspy el protocolo

Plaspy está diseñado para aceptar reportes entrantes de muchos modelos sin requerir la selección manual del protocolo. Cuando un Lommy Capture está configurado para reportar a Plaspy, la plataforma usa el endpoint compartido y el puerto para recibir mensajes y detecta automáticamente el protocolo del rastreador, por lo que la incorporación suele ser sencilla.

- Los dispositivos deben configurarse para reportar al endpoint d.plaspy.com o a la IP del servidor 54.85.159.138.
- Plaspy escucha en un único puerto usado por todos los rastreadores soportados, de modo que los usuarios no necesitan gestionar asignaciones de puerto por dispositivo.
- El puerto que Plaspy utiliza para ingestión es el 8888 y los dispositivos pueden usar UDP o TCP para enviar datos a ese puerto.
- Cuando los datos llegan a Plaspy, la plataforma empata campos identificadores y patrones de mensaje para seleccionar automáticamente el flujo de parseo apropiado.
- En la mayoría de los casos no es necesario seleccionar el protocolo manualmente dentro de Plaspy si el dispositivo está reportando correctamente al endpoint compartido.

## Contexto de transporte y conexión

Las elecciones de conexión afectan cómo viajan los reportes desde Lommy Capture hasta Plaspy, pero no cambian el papel público del protocolo. Lommy Capture soporta transportes celulares comunes y puede entregar mensajes por IP o SMS según configuración y condiciones de la red.

- Lommy Capture puede usar UDP o TCP en el puerto 8888 para enviar reportes basados en IP a Plaspy.
- Los dispositivos pueden apuntar al dominio d.plaspy.com o a la dirección IP 54.85.159.138 como endpoint de ingestión de Plaspy.
- Todos los dispositivos soportados por Plaspy usan el mismo puerto, lo que simplifica la configuración de firewalls y gateways para flotas.
- La selección de transporte (UDP vs TCP) suele depender de la configuración del dispositivo, el comportamiento de la red móvil y la preferencia del operador.
- Para instalaciones que usan fallback por SMS, la ingestión en Plaspy puede coordinarse a través de rutas de gateway soportadas en lugar del endpoint IP.

## Notas de compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar la frecuencia de mensajes, los nombres de campos o la telemetría disponible; verifique el comportamiento para el firmware específico de cada lote de dispositivos.
- Las revisiones de hardware o variantes de fabricación pueden ajustar sensores, comportamiento de alimentación o transportes disponibles y, por tanto, afectar los patrones de reporte.
- Los dispositivos pueden ofrecer modos de transporte configurables; confirme si las unidades Lommy Capture en su flota están establecidas en UDP o TCP para la integración con Plaspy.
- El comportamiento de recolección de energía influye en la cadencia de reporte cuando el dispositivo se alimenta con circuitos de iluminación frente a estados desconectados.
- La configuración por parte del fabricante (por ejemplo, servidor predeterminado o gateway SMS) puede afectar la conectividad inicial; actualice la configuración del equipo para apuntar a Plaspy cuando sea necesario.
- Siempre valide la compatibilidad y las configuraciones recomendadas con la documentación oficial del fabricante para la unidad Lommy Capture específica.

## Por qué es importante entender el protocolo

Comprender cómo se comunica Lommy Capture agiliza la configuración, minimiza el tiempo de inactividad y mejora la confiabilidad de los datos de seguimiento que llegan a Plaspy. Conocer las diferencias de transporte y firmware también facilita la resolución de problemas y garantiza que las alertas y los datos históricos se registren correctamente.

- Asegura que los dispositivos estén configurados para reportar a d.plaspy.com o 54.85.159.138 en el puerto 8888 para que Plaspy pueda ingerir los datos.
- Ayuda a diagnosticar por qué un dispositivo puede reportar con menor frecuencia cuando opera con energía recolectada frente a cuando está completamente alimentado.
- Orienta la decisión entre UDP y TCP y cualquier ajuste de red necesario para una entrega confiable.
- Permite verificar que los mensajes de eventos y alarmas se asignen a los registros de activo correctos en Plaspy.
- Reduce el tiempo de incorporación al aclarar qué información necesita Plaspy para vincular un dispositivo a una cuenta.

## Por qué usar Plaspy con este protocolo

Usar Lommy Capture con Plaspy ofrece a los operadores de flota una solución práctica para la visibilidad de semirremolques y activos remolcados, que equilibra una instalación discreta con bajo mantenimiento. Plaspy consume los reportes del dispositivo y los transforma en telemetría en vivo, alertas de geocercas, reproducción histórica e informes útiles para operaciones, prevención de robos y análisis de uso.

El endpoint único de ingestión de Plaspy y la detección automática de protocolos reducen la carga de configuración, mientras que las funciones de recolección de energía y detección de movimiento de Lommy Capture aportan información relevante para la gestión de flotas. Para obtener más información sobre Plaspy y los flujos de trabajo de dispositivos compatibles visite https://www.plaspy.com. Por favor verifique los detalles específicos del protocolo del dispositivo, el comportamiento del firmware y las notas de implementación con el fabricante en https://flextrack.dk.
