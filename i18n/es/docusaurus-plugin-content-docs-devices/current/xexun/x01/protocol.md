---
slug: /xexun/x01/protocol
id: x01-protocol
sidebar_label: Protocol
title: Xexun - X01 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo Xexun X01 para integración con el servidor Plaspy y guía de conexión
keywords:
  - Protocolo Xexun X01
  - Protocolo GPS Xexun X01
  - Compatibilidad Xexun X01 con Plaspy
  - Protocolo de comunicación Xexun X01
  - Protocolo de rastreo Xexun
  - Compatibilidad de dispositivos Plaspy
  - Rastreo de vehículos Xexun X01
  - GPS BeiDou X01
  - Gestión de flotas X01
  - Integración de telemetría X01
---

# Xexun - Protocolo X01

Esta página describe el contexto del protocolo público para usar el rastreador Xexun X01 con Plaspy. Se centra en cómo el dispositivo informa posición y estado a Plaspy y en el papel que juega el protocolo de comunicación del rastreador para habilitar el rastreo en tiempo real, la telemetría y el reporte de eventos para la gestión de flotas y activos.

El X01 es compatible con Plaspy desde su configuración de fábrica y emplea posicionamiento híbrido GPS y BeiDou, entrada de alimentación amplia DC 9–90 V y una batería de respaldo integrada para mantener los reportes durante cortes de energía. Plaspy utiliza ajustes de conexión compartidos entre dispositivos soportados y detecta automáticamente el protocolo del rastreador, pero el comportamiento exacto de los paquetes y la disponibilidad de funciones pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante.

## Resumen del protocolo

El protocolo de comunicación del X01 es el mecanismo que utiliza el dispositivo para enviar datos de ubicación, telemetría y alarmas a través de la red celular hacia un servidor central. En la práctica, el protocolo determina qué datos reporta el rastreador, cómo se identifica y cómo el servidor convierte esos reportes en elementos accionables como posiciones en vivo, alertas y rutas históricas.

- Permite el reporte periódico y por eventos de fijaciones GNSS, marcas de tiempo y estado del vehículo hacia Plaspy.
- Transporta campos de telemetría que Plaspy utiliza, como estado de ignición, nivel de batería, alertas de manipulación y detectores de movimiento.
- Permite que el dispositivo almacene datos en zonas sin cobertura y retransmita los registros en búfer cuando se restablece la conectividad.
- Proporciona la identidad e información de estado que Plaspy necesita para correlacionar mensajes con un dispositivo registrado para paneles e alertas.
- Funciona junto con la configuración de la capa de transporte para que el rastreador entregue reportes de forma fiable sobre la conexión celular.

## Cómo detecta Plaspy el protocolo

Plaspy recibe conexiones entrantes en un endpoint compartido y determina automáticamente el protocolo del rastreador a partir del flujo de datos y el comportamiento del dispositivo. Esto significa que normalmente usted no necesita seleccionar un protocolo manualmente dentro de Plaspy si el X01 está configurado para reportar al endpoint de Plaspy.

- Plaspy usa el dominio d.plaspy.com como endpoint soportado para el reporte de dispositivos.
- La IP del servidor Plaspy 54.85.159.138 también está disponible para configuración de endpoint directa.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la configuración entre modelos.
- Plaspy escucha en el puerto 8888 y detecta automáticamente el protocolo del rastreador usado por el dispositivo entrante.
- En la mayoría de las implementaciones, el X01 puede configurarse para reportar directamente al endpoint de Plaspy y la detección procede sin selección manual.

## Transporte y contexto de conexión

La selección de transporte describe cómo el rastreador abre y mantiene una conexión de red con Plaspy. El X01 puede configurarse para usar UDP o TCP según el firmware del dispositivo y la preferencia del instalador, y Plaspy soporta ambos modos de transporte en el mismo puerto de escucha.

- Los dispositivos pueden configurarse para enviar reportes a d.plaspy.com o directamente a 54.85.159.138.
- Plaspy escucha en el puerto 8888 para conexiones y reportes entrantes de rastreadores.
- Normalmente el X01 puede ajustarse para usar UDP o TCP en el puerto 8888 según las capacidades del dispositivo y del firmware.
- Usar un único puerto entre dispositivos reduce la complejidad de configuración por unidad en despliegues de flota.
- La fiabilidad del transporte y el comportamiento como retransmisión quedan gobernados por el firmware del dispositivo y el protocolo de transporte elegido.

## Notas sobre compatibilidad del protocolo

- Las versiones de firmware pueden cambiar campos disponibles, intervalos de reporte y el comportamiento ante eventos; confirme los detalles de firmware con el fabricante.
- Las revisiones de hardware y las variantes regionales celulares pueden afectar las bandas de red soportadas y las preferencias de transporte.
- Algunos dispositivos exponen interruptores de configuración para elegir UDP o TCP; asegúrese de que el transporte configurado coincida con la arquitectura que desea.
- El almacenamiento a bordo y la retransmisión son útiles en cobertura intermitente, pero dependen del firmware del dispositivo y del estado de la batería.
- La capacidad de actualizar firmware de forma remota puede modificar el comportamiento del protocolo con el tiempo; valide los cambios tras una actualización.
- Verifique siempre la configuración del dispositivo y el cableado de ignición, manipulación y entradas de alimentación para garantizar que el rastreador informe la telemetría esperada.

## Por qué es importante comprender el protocolo

Tener una comprensión básica del protocolo de comunicación del X01 ayuda a instaladores y administradores de flota a configurar los dispositivos correctamente, interpretar comportamientos durante la resolución de problemas y asegurar reportes fiables a largo plazo hacia Plaspy.

- Confirma que el dispositivo apunta al endpoint de Plaspy d.plaspy.com o a 54.85.159.138 y que usa el puerto 8888.
- Orienta la elección del transporte entre UDP y TCP para el equilibrio deseado entre latencia y fiabilidad.
- Ayuda a diagnosticar datos faltantes, retransmisiones en búfer y reportes de eventos como manipulación o estado de ignición.
- Permite ajustar expectativas cuando actualizaciones de firmware cambian cargas útiles de telemetría o incorporan nuevas funciones.
- Facilita la integración correcta de telemetría adicional o sensores de terceros mediante un reporte consistente del estado del dispositivo.

## Por qué usar Plaspy con este protocolo

Integrar el Xexun X01 con Plaspy proporciona reportes de ubicación y eventos fiables para operaciones de flota, flujos de trabajo anti robo y telemetría vehicular. El posicionamiento GNSS híbrido del X01, su amplio rango de entrada de voltaje y la batería de respaldo lo hacen apto para diversos tipos de vehículos, mientras que Plaspy convierte los reportes del dispositivo en mapas en vivo, alertas, reproducción histórica y herramientas de gestión de dispositivos para respaldar las operaciones diarias.

Para conocer más sobre Plaspy y cómo maneja la conectividad de dispositivos, visite https://www.plaspy.com. Tenga en cuenta que el soporte de protocolos, el comportamiento del firmware y los detalles de implementación del fabricante pueden cambiar con el tiempo; verifique la información más reciente y las notas de firmware específicas del dispositivo en el sitio oficial de Xexun en https://www.xexun.com/
