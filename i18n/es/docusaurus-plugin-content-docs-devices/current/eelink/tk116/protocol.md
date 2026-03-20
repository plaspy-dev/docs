---
slug: /eelink/tk116/protocol
id: tk116-protocol
sidebar_label: Protocol
title: EElink - TK116 Protocol
sidebar_class_name: menu_item_tracker
description: Contexto público del protocolo para la compatibilidad del rastreador EElink TK116 con Plaspy en seguimiento en tiempo real
keywords:
  - protocolo EElink TK116
  - protocolo GPS EElink TK116
  - compatibilidad EElink TK116 Plaspy
  - protocolo de rastreo TK116
  - comunicación rastreador EElink
  - protocolo rastreador GPS Plaspy
  - rastreo de flotas TK116
  - seguimiento vehicular EElink TK116
  - protocolo de dispositivo Plaspy
  - protocolo de telemetría TK116
---

# EElink - Protocolo TK116

Esta página describe el contexto público del protocolo para usar el rastreador GPS EElink TK116 con Plaspy. Se centra en cómo el dispositivo informa posición, telemetría y eventos a la plataforma Plaspy en términos generales, de modo que integradores y operadores de flota comprendan cómo se comunica el equipo sin exponer detalles privados de implementación.

El TK116 es un rastreador 2G compacto que combina posicionamiento GPS y LBS con asistencia AGPS, además de entradas de telemetría comunes como detección de ACC, alarmas por choque y vibración, relé opcional, botón SOS y micrófono opcional. Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador; sin embargo, el comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante.

## Resumen del protocolo

El protocolo del rastreador define cómo el TK116 envía actualizaciones de ubicación, mensajes de estado y alarmas de eventos a un servidor remoto para que Plaspy pueda recibir y mostrar los datos. Esta sección explica el papel del protocolo de forma general, enfocándose en la conectividad y en los tipos de datos que Plaspy consume, en lugar de formatos de paquete de bajo nivel o detalles propietarios.

- Transporta telemetría y mensajes de evento desde el TK116 hasta el endpoint remoto de Plaspy para ingestión en tiempo real.
- Identifica el dispositivo y proporciona los campos necesarios para que Plaspy asocie los datos entrantes con un activo registrado.
- Envía reportes periódicos de posición y mensajes impulsados por eventos como cambios de estado de ACC, alarmas por choque o vibración, pulsaciones de SOS y alertas por corte de energía.
- Permite comandos remotos y configuración cuando el dispositivo y la provisión del fabricante lo soportan.
- Suministra los elementos de telemetría que Plaspy necesita para generar alertas, eventos de geocerca, trazas históricas e informes operativos.

## Cómo Plaspy detecta el protocolo

Plaspy recibe conexiones entrantes en un único endpoint compartido y determina automáticamente el protocolo del rastreador, por lo que normalmente usted no necesita seleccionar el protocolo manualmente si el dispositivo está configurado correctamente. La detección y mapeo se realizan en el lado de ingestión de Plaspy y están diseñados para simplificar la incorporación de muchos modelos comunes de rastreadores.

- Plaspy escucha en un endpoint compartido el tráfico de los dispositivos y detecta automáticamente el protocolo del rastreador.
- Los dispositivos que reportan a Plaspy deben estar configurados para usar el endpoint d.plaspy.com o la IP del servidor 54.85.159.138.
- Plaspy emplea un único puerto común para todos los dispositivos soportados para reducir la complejidad de configuración.
- Cuando el TK116 apunta al endpoint de Plaspy y utiliza un transporte aceptado, Plaspy identificará los mensajes del dispositivo y los enruta al registro de dispositivo correcto.
- En la mayoría de los casos, usted solo necesita verificar que el objetivo y la configuración de transporte del dispositivo sean correctos; Plaspy se encarga de la identificación del protocolo automáticamente.

## Transporte y contexto de conexión

El TK116 soporta conectividad móvil 2G para enviar su telemetría a un servidor remoto. Dependiendo del firmware del equipo y la configuración del instalador, el TK116 puede estar configurado para usar transporte UDP o TCP para llegar a Plaspy en el puerto compartido. Los siguientes puntos aclaran las opciones de conexión prácticas relevantes para la integración.

- El TK116 puede configurarse para usar UDP o TCP para comunicarse con el servidor, según el firmware y las opciones de configuración del dispositivo.
- Los dispositivos destinados a funcionar con Plaspy deben apuntar a d.plaspy.com o a la IP del servidor 54.85.159.138.
- Todos los dispositivos de Plaspy comparten el mismo puerto, por lo que el TK116 debe configurarse para usar el puerto 8888 en el lado del dispositivo.
- Usar el transporte y el endpoint correctos asegura que los mensajes lleguen a Plaspy para la detección automática del protocolo y el procesamiento.
- Consideraciones de red como NAT del operador, reglas de firewall y provisión vía SMS pueden afectar la configuración inicial, pero no cambian el enfoque de endpoint compartido de Plaspy.

## Notas sobre compatibilidad del protocolo

- El TK116 es compatible con Plaspy cuando el dispositivo está configurado para reportar al endpoint de Plaspy y se selecciona el transporte correcto.
- Las actualizaciones de firmware del fabricante pueden cambiar los formatos de mensaje, la disponibilidad de campos u opciones de transporte; verifique las notas de firmware si el comportamiento cambia tras una actualización.
- Las revisiones de hardware o funciones opcionales como relé, micrófono o SOS pueden influir en el conjunto de eventos y comandos disponibles.
- Algunos operadores prefieren TCP para entrega más fiable y UDP para menor sobrecarga; confirme que la configuración del dispositivo coincide con sus necesidades operativas.
- Valide el reporte del dispositivo comprobando que los mensajes de posición y eventos aparecen en Plaspy después de apuntar el TK116 al endpoint de Plaspy.
- Siempre consulte la documentación oficial de EElink para comandos de configuración específicos del dispositivo y diferencias relacionadas con el firmware.

## Por qué es importante entender el protocolo

Tener un entendimiento práctico del protocolo de comunicación del TK116 facilita una configuración exitosa, acelera la resolución de problemas y asegura una operación confiable a largo plazo cuando el dispositivo está conectado a Plaspy. Saber qué enviará y qué no enviará el equipo facilita confirmar el comportamiento correcto y configurar reglas y alertas en Plaspy.

- Confirma que se reciben la telemetría esperada, como posición GPS, respaldo LBS, estado de ACC y eventos de alarma.
- Ayuda a diagnosticar problemas de conectividad relacionados con tipo de transporte, ajustes del endpoint o restricciones del operador.
- Permite mapear correctamente entradas opcionales como control de relé, eventos SOS y alertas por corte de energía dentro de los flujos de trabajo de Plaspy.
- Reduce el tiempo de incorporación al alinear la configuración del dispositivo con el endpoint compartido y el enfoque de detección automática de Plaspy.
- Informa decisiones sobre actualizaciones de firmware y habilitación de funciones para mantener reportes estables.

## Por qué usar Plaspy con este protocolo

Usar el TK116 con Plaspy ofrece una vía directa para el seguimiento en tiempo real de vehículos y motocicletas, alertas de incidentes e informes operativos. La forma compacta del dispositivo, el posicionamiento asistido por AGPS, la detección de ACC y las alarmas alimentan la telemetría que Plaspy utiliza para generar trazas de ubicación, reglas de notificación y análisis de flota que apoyan las operaciones diarias.

El modelo de endpoint compartido de Plaspy simplifica la incorporación de dispositivos exigiendo que los equipos reporten a d.plaspy.com o 54.85.159.138 en el puerto estándar 8888, mientras que la plataforma detecta automáticamente el protocolo del rastreador. Para obtener más información sobre Plaspy y cómo se integra con dispositivos como el EElink TK116 visite https://www.plaspy.com. Verifique siempre los detalles más recientes del protocolo específico del dispositivo, el comportamiento del firmware y las notas de implementación en el sitio oficial de EElink https://www.eelink.com.cn/ ya que los detalles del fabricante y el comportamiento del firmware pueden cambiar con el tiempo.
