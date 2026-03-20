---
slug: /aoya/a206b/protocol
id: a206b-protocol
sidebar_label: Protocol
title: AoYa - A206b Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo para usar el rastreador AoYa A206b con Plaspy, incluyendo conexión y notas de compatibilidad
keywords:
  - Protocolo AoYa A206b
  - Protocolo GPS AoYa A206b
  - Compatibilidad AoYa A206b Plaspy
  - Protocolo de comunicación AoYa A206b
  - Protocolo de rastreo AoYa A206b
  - Protocolo rastreador GPS AoYa
  - Rastreador GPRS A206b
  - Rastreador GPS para vehículo A206b
  - Rastreador magnético A206b
  - Rastreo de flotas A206b
---

# AoYa - Protocolo A206b

Esta página ofrece un contexto público del protocolo para integrar el rastreador GPS AoYa A206b con Plaspy. Resume cómo suele comunicarse el dispositivo, qué esperar al integrarlo con Plaspy y cuáles son los ajustes de conexión que utiliza la plataforma. La descripción del dispositivo aquí reflejada corresponde al A206b como un rastreador magnético compacto para uso automotriz con conectividad GSM GPRS, módulo GPS UBLOX y una batería de alta capacidad adecuada para largos periodos de funcionamiento.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, aunque el comportamiento exacto puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante. Use esta página como referencia orientada a la integración; para detalles de paquetes específicos de firmware y el comportamiento más reciente, consulte siempre la documentación del fabricante.

## Resumen del protocolo

El protocolo de reporte del rastreador define cómo el A206b intercambia telemetría e información de estado con un servidor remoto para que la ubicación, el movimiento y el estado básico del dispositivo puedan mostrarse en una plataforma de seguimiento. El objetivo público del protocolo es garantizar la entrega fiable de datos GPS y del dispositivo a Plaspy, y permitir que el dispositivo reciba configuraciones o comandos permitidos cuando proceda.

- Transmite telemetría de ubicación y con sello de tiempo para que Plaspy muestre posiciones actuales e históricas.
- Incluye identidad del dispositivo y metadatos básicos de estado para que la plataforma asocie los mensajes con el activo correcto.
- Entrega información de eventos y estados como movimiento, estado de ignición, nivel de batería y alertas de manipulación en términos generales.
- Permite configuración remota o envío de comandos cuando el dispositivo y el firmware soportan ajustes dirigidos por servidor.
- Soporta mensajes periódicos de latido o keepalive para indicar que el rastreador está en línea.

## Cómo detecta Plaspy el protocolo

Plaspy opera un único endpoint compartido para conexiones de dispositivos y utiliza ese endpoint y puerto para recibir mensajes de muchos modelos distintos. Cuando el AoYa A206b se configura para reportar a Plaspy, la plataforma inspecciona el tráfico entrante en ese endpoint compartido y detecta automáticamente el protocolo del rastreador, por lo que típicamente no se requiere selección manual del protocolo dentro de Plaspy.

- El dominio del servidor Plaspy es d.plaspy.com y la IP del servidor es 54.85.159.138 como referencia pública.
- Plaspy usa un solo puerto para todos los dispositivos soportados y detecta automáticamente el protocolo en ese puerto.
- Si el A206b apunta al endpoint de Plaspy y está enviando datos, por lo general no es necesario seleccionar un protocolo manualmente en la plataforma.
- La detección automática facilita la incorporación de flotas mixtas y reduce pasos de configuración manual.
- Para variantes inusuales de firmware o del fabricante, la detección puede requerir que el dispositivo esté configurado para enviar mensajes de reporte estándar al endpoint de Plaspy.

## Transporte y contexto de conexión

El transporte físico y el destino básico de conexión son importantes para asegurar que los dispositivos puedan alcanzar el punto de ingestión de Plaspy. El A206b puede configurarse para usar distintos modos de transporte según el firmware y la configuración del usuario. Los dispositivos deben apuntar al endpoint de Plaspy y estar autorizados a través de cortafuegos de red para un reporte fiable.

- Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888 según el soporte y las opciones de configuración del equipo.
- El endpoint de Plaspy puede referenciarse como d.plaspy.com o la IP pública 54.85.159.138 al configurar el rastreador.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que centraliza el manejo de conexiones para la plataforma.
- Elija UDP cuando se prefiera menor sobrecarga y un reporte tipo fire-and-forget; elija TCP cuando el firmware del dispositivo requiera una sesión con confirmación.
- Verifique el APN y la conectividad de la red móvil para que el A206b pueda alcanzar el endpoint de Plaspy desde la ubicación instalada.

## Notas sobre compatibilidad del protocolo

- Las diferencias de firmware entre lotes de producción pueden cambiar qué mensajes envía un rastreador y con qué frecuencia se reporta.
- Las revisiones de hardware pueden incluir distinto firmware del chip GPS o cambios en la gestión de energía que afecten los valores reportados.
- Las herramientas de configuración del fabricante o los servidores por defecto pueden necesitar actualización para apuntar el A206b a d.plaspy.com o a la IP de Plaspy.
- La selección de transporte (UDP frente a TCP) debe coincidir con la capacidad del dispositivo y la configuración elegida; Plaspy acepta ambos en el puerto compartido.
- Siempre valide el comportamiento del dispositivo después de cambiar el firmware o aplicar perfiles de configuración del fabricante.
- Plaspy detecta automáticamente los protocolos que llegan a su puerto compartido, pero la detección depende de que el dispositivo presente mensajes de reporte reconocibles.

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación usado por el A206b ayuda a asegurar una configuración exitosa, reportes consistentes y una resolución de problemas efectiva cuando el dispositivo se utiliza con Plaspy. Tener claridad sobre lo que el rastreador envía y cómo se conecta reduce fricciones en la integración y favorece un monitoreo de flota confiable.

- Acelera la incorporación al confirmar que el dispositivo está configurado para reportar a d.plaspy.com o a la IP de Plaspy.
- Ayuda a diagnosticar fallas de conectividad o lapsos de reporte revisando el tipo de transporte y el servidor de destino.
- Permite configurar intervalos de reporte y gestión de energía informados para equilibrar vida de batería y necesidades de datos.
- Facilita la identificación consistente del dispositivo para que los activos se asocien correctamente en Plaspy.
- Reduce la ambigüedad cuando actualizaciones de firmware o cambios del fabricante modifican la temporización o el contenido de los mensajes.

## Por qué usar Plaspy con este protocolo

Usar el AoYa A206b con Plaspy ofrece una forma práctica de centralizar la ubicación de vehículos, tiempos de operación y estados en una única plataforma. Para flotas y propietarios individuales, Plaspy consolida telemetría, ofrece reproducción histórica y normaliza los mensajes entrantes para que distintos rastreadores como el A206b puedan gestionarse conjuntamente.

Plaspy acepta conexiones del A206b en d.plaspy.com o 54.85.159.138 en el puerto 8888 y detecta automáticamente el protocolo del rastreador para que usted pueda concentrarse en el despliegue en lugar de en la selección de protocolos por dispositivo. Para saber más sobre Plaspy visite https://www.plaspy.com. Verifique el soporte específico del protocolo y el comportamiento del firmware con el fabricante en http://www.aoyagps.com/ ya que el soporte de protocolo y los detalles de implementación del dispositivo pueden cambiar con el tiempo.
