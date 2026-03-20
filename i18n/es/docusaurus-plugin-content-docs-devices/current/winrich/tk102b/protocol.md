---
slug: /winrich/tk102b/protocol
id: tk102b-protocol
sidebar_label: Protocol
title: Winrich - TK102B Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo del Winrich TK102B sobre cómo el dispositivo se comunica con Plaspy y la configuración de conexión compartida
keywords:
  - Protocolo Winrich TK102B
  - Protocolo GPS Winrich TK102B
  - Protocolo de comunicación Winrich TK102B
  - Protocolo de rastreo Winrich TK102B
  - Compatibilidad TK102B Plaspy
  - Integración rastreador GPS TK102B
  - Protocolo de dispositivo Plaspy
  - Rastreo vehicular TK102B
  - Rastreador personal TK102B
  - Guía de protocolo de rastreador GPS
---

# Winrich - Protocolo TK102B

Esta página describe el contexto público del protocolo para usar el rastreador Winrich TK102B con Plaspy. Se centra en cómo el dispositivo se comunica con los endpoints públicos de Plaspy y en los ajustes de conexión compartidos, y explica la importancia de esa comunicación para el reporte confiable de ubicaciones y el reenvío de alertas.

El TK102B ofrece posicionamiento por GPS y GSM, respaldo en tarjeta TF, alertas SOS y reportes push que se integran con Plaspy para la monitorización en tiempo real. Plaspy emplea ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, aunque el comportamiento exacto puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante.

## Visión general del protocolo

El protocolo que utiliza el TK102B define cómo el dispositivo informa su posición, estado y alarmas a un servidor remoto. Para la integración con Plaspy esto implica que el rastreador debe estar configurado para reportar al endpoint de Plaspy, de modo que las actualizaciones, eventos de geocerca, activaciones SOS y reportes por intervalo lleguen a la plataforma.

- Permite que el TK102B transmita fixes de ubicación, estados con marca temporal y notificaciones de eventos al servidor para su visualización en mapa y generación de alertas.
- Transporta información esencial de identidad y estado del equipo que Plaspy utiliza para asociar los mensajes con el registro de activo correcto.
- Soporta tanto reportes en tiempo real como la subida de rutas almacenadas desde la tarjeta TF cuando se restablece la conectividad.
- Permite que el dispositivo envíe eventos de alarma y telemetría como SOS, exceso de velocidad, violaciones de geocerca y notificaciones de batería baja.
- Funciona sobre el transporte de red que el dispositivo soporte, de modo que Plaspy pueda recibir datos de forma consistente para la visualización en el panel y la generación de informes.

## Cómo Plaspy detecta el protocolo

Plaspy escucha el tráfico entrante de dispositivos en un único endpoint público y puerto, e identifica automáticamente el protocolo del rastreador para los modelos compatibles cuando los dispositivos están configurados para reportar a ese endpoint. Esto reduce la configuración manual dentro de Plaspy en la mayoría de los despliegues.

- Plaspy acepta conexiones en d.plaspy.com que resuelve a 54.85.159.138 y escucha en el puerto 8888 para los reportes entrantes de los rastreadores.
- Todos los dispositivos en Plaspy usan el mismo puerto, por lo que usted no necesita un número de puerto específico por dispositivo.
- Plaspy puede procesar reportes enviados por UDP o TCP en el puerto 8888 según la configuración del dispositivo.
- En la mayoría de los casos, solo necesita configurar la dirección de reporte del TK102B a d.plaspy.com o 54.85.159.138 y usar el transporte soportado por la unidad.
- Si el rastreador está correctamente apuntado al endpoint de Plaspy, Plaspy detectará y manejará el protocolo automáticamente sin selección manual del protocolo.

## Transporte y contexto de conexión

Los detalles de conexión determinan cómo el TK102B envía los datos a Plaspy y cómo la plataforma los recibe. El TK102B soporta reportes GSM GPRS y puede configurarse para usar UDP o TCP según el firmware y las opciones del usuario. Para Plaspy, el uso consistente de dirección y puerto es el requisito principal de conexión.

- Configure el TK102B para reportar a d.plaspy.com o directamente a 54.85.159.138 como dirección de servidor.
- Plaspy escucha en el puerto 8888 y acepta conexiones tanto UDP como TCP en ese puerto.
- El dispositivo puede usar sockets GPRS sin HTTP para reportes continuos o subidas periódicas según su configuración y perfil de energía.
- Use el modo de transporte soportado por el firmware específico de su TK102B y asegúrese de que los ajustes APN sean correctos para la tarjeta SIM en uso.
- El respaldo en tarjeta TF del TK102B almacena el historial de rutas localmente y sube los registros almacenados a Plaspy cuando se restablece la conectividad GSM.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar qué mensajes emite el TK102B y cómo se codifican ciertos eventos, por lo que el comportamiento puede variar entre unidades.
- Las variantes de hardware y los lotes de producción a veces incluyen diferencias menores en el soporte de funciones o intervalos de reporte.
- La elección del modo de transporte entre UDP y TCP puede afectar características de entrega como retransmisiones y estado de conexión.
- Funciones como la subida desde tarjeta TF, manejo de SOS y corte de alimentación remoto dependen del cableado del dispositivo y de las opciones de firmware.
- Verifique siempre la configuración exacta de reporte y los requisitos APN antes del despliegue para garantizar una comunicación fiable con Plaspy.
- La documentación del fabricante y las notas de versión del firmware son la fuente autorizada para el comportamiento específico del dispositivo.

## Por qué es importante comprender el protocolo

Comprender el protocolo de comunicación del TK102B ayuda a asegurar una configuración confiable, acelerar la resolución de problemas y lograr una operación predecible cuando el dispositivo se usa con Plaspy. Un contexto claro del protocolo reduce la mala configuración y minimiza las interrupciones en la telemetría.

- Ayuda a confirmar que el dispositivo está apuntando al endpoint correcto de Plaspy y usando el modo de transporte esperado.
- Facilita la validación de que los mensajes de identidad y eventos se asignan al activo correspondiente en Plaspy.
- Asiste en la resolución de problemas de reportes faltantes comprobando conectividad, APN y selección de transporte.
- Aclara cómo se comportan los respaldos en tarjeta TF y las subidas de rutas almacenadas cuando se reanuda la conectividad GSM.
- Permite una mejor planificación de la gestión de energía, los intervalos de reporte y las expectativas de alertas.

## Por qué usar Plaspy con este protocolo

Usar el TK102B con Plaspy ofrece una solución práctica para organizaciones e individuos que necesitan visibilidad de ubicación en tiempo real, alertas y recuperación de rutas históricas. El posicionamiento por GPS y GSM del TK102B, sus capacidades SOS y el respaldo en tarjeta TF lo hacen adecuado para casos de uso de flotas, activos y seguridad personal que se integran con las herramientas centralizadas de monitorización e informes de Plaspy.

Para obtener más información sobre Plaspy y cómo funciona con rastreadores compatibles como el Winrich TK102B visite https://www.plaspy.com. Para los detalles más recientes específicos del dispositivo, comportamiento de firmware y la guía del fabricante, verifique la documentación técnica en el sitio de Winrich http://www.winrichgroup.com/en/ ya que el soporte del protocolo y la implementación del dispositivo pueden cambiar con el tiempo.
