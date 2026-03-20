---
slug: /aoya/t2d/protocol
id: t2d-protocol
sidebar_label: Protocol
title: AoYa - T2D Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo para integrar el rastreador GPS AoYa T2D con Plaspy y lograr seguimiento vehicular confiable
keywords:
  - protocolo AoYa T2D
  - protocolo GPS AoYa T2D
  - protocolo de rastreo AoYa T2D
  - compatibilidad rastreador GPS AoYa
  - protocolo de comunicación T2D
  - protocolo de rastreo vehicular Plaspy
  - gestión de flotas AoYa T2D
  - integración rastreador GPS Plaspy
  - protocolo de dispositivo T2D
  - conectividad AoYa T2D
---

# AoYa - Protocolo T2D

Esta página explica el contexto público del protocolo para usar el rastreador GPS AoYa T2D con Plaspy. Se enfoca en cómo comunica el equipo de forma general, cómo Plaspy recibe los reportes y qué tener en cuenta al configurar y al solucionar problemas. El contenido es informativo y no sensible, y refleja las capacidades del hardware T2D según lo descrito por el fabricante.

El AoYa T2D es un rastreador compacto 2G GSM/GPRS pensado para uso automotriz, con modos de localización GPS, LBS y AGPS, amplio rango de tensión de entrada y batería de emergencia. Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. El comportamiento exacto puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que conviene verificar los parámetros del equipo contra la documentación oficial de AoYa cuando sea necesario.

## Visión general del protocolo

El protocolo de reportes T2D define cómo el rastreador envía información de ubicación y estado a un servidor y cómo se pueden aplicar comandos remotos o configuraciones cuando el dispositivo lo permite. Para la integración con Plaspy esto implica que el equipo debe estar configurado para reportar al endpoint de Plaspy y usar uno de los transportes compatibles.

- Permite reportes periódicos y basados en eventos, incluyendo datos de GPS y de localización asistida
- Transmite telemetría básica y estado útil para monitoreo de flotas y flujos de seguridad
- Permite que el dispositivo se identifique para que Plaspy pueda correlacionar mensajes entrantes con la unidad correcta
- Admite configuración remota y actualizaciones si la versión de firmware del rastreador expone esas funciones
- Funciona sobre la conectividad de datos móviles estándar proporcionada por el subsistema GSM GPRS del equipo

## Cómo Plaspy detecta el protocolo

Plaspy recibe conexiones entrantes en un endpoint público compartido y utiliza el contenido de los reportes junto con metadatos de conexión para determinar automáticamente el protocolo del rastreador. En la mayoría de los casos no es necesario seleccionar manualmente un protocolo en Plaspy si el T2D está configurado para enviar datos al servidor de Plaspy.

- Plaspy usa el endpoint en d.plaspy.com para la recepción de reportes
- La IP pública del servidor Plaspy es 54.85.159.138 y Plaspy escucha en el puerto 8888
- Los dispositivos se pueden configurar para usar UDP o TCP en el puerto 8888 según lo soporte el equipo
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la configuración
- Cuando un T2D correctamente configurado reporta a Plaspy, la plataforma detectará automáticamente el protocolo del rastreador
- Normalmente usted solo debe asegurarse de que el equipo apunte al endpoint de Plaspy y de que la APN y los ajustes de la SIM sean correctos

## Transporte y contexto de conexión

El contexto de conexión cubre cómo el rastreador alcanza el servidor de Plaspy en internet público y qué opciones de transporte se usan comúnmente. El T2D soporta datos GSM GPRS y puede enviar reportes sobre IP usando el modo de transporte que implemente su firmware.

- El T2D puede configurarse para reportar a d.plaspy.com o directamente a 54.85.159.138
- Plaspy acepta tanto UDP como TCP en el puerto 8888, así que configure el T2D para el transporte que su firmware soporte
- Usar el mismo puerto en todos los dispositivos reduce errores de configuración y acelera el despliegue
- Verifique que los ajustes de APN de la red móvil sean válidos y que la SIM tenga datos habilitados para comunicaciones GPRS
- La cobertura de red y la disponibilidad de 2G pueden afectar la frecuencia y la fiabilidad de los reportes

## Notas sobre compatibilidad del protocolo

- Las diferencias de firmware entre unidades T2D pueden cambiar los tipos de mensajes disponibles y las opciones configurables
- Las revisiones de hardware o variantes regionales del T2D pueden comportarse de forma distinta en la cadencia de reportes o en los transportes soportados
- Los ajustes por parte del fabricante y los valores de APN por defecto varían; verifique la SIM y la configuración de red antes de diagnosticar problemas de protocolo
- Elegir TCP frente a UDP puede afectar las garantías de entrega y debe coincidir con lo que espera el firmware del equipo
- Plaspy detecta automáticamente el protocolo, pero la detección exitosa depende de que el dispositivo apunte correctamente al endpoint de Plaspy y use un transporte compatible
- Siempre valide la compatibilidad con la documentación oficial del fabricante y las notas de versión de firmware

## Por qué es importante conocer el protocolo

Comprender el protocolo de comunicación del T2D ayuda a asegurar una correcta configuración, acelerar la resolución de problemas y mantener una operación fiable a largo plazo cuando se usa con Plaspy. Saber qué envía el equipo y cómo Plaspy espera recibirlo reduce fricciones en el despliegue y mejora la calidad de los datos.

- Confirma que el equipo está reportando al endpoint y transporte correctos de Plaspy
- Ayuda a diagnosticar reportes de posición faltantes o telemetría inconsistente
- Mejora la configuración de intervalos de reporte y de disparadores de eventos
- Orienta la comprobación de versiones de firmware o revisiones de hardware cuando el comportamiento difiere entre unidades
- Permite planificar teniendo en cuenta limitaciones de red, como la cobertura 2G

## Por qué usar Plaspy con este protocolo

Usar el AoYa T2D con Plaspy ofrece una forma sencilla de capturar datos de ubicación y estado de vehículos dentro de una plataforma de gestión de flotas. El enfoque de endpoint compartido y la detección automática de protocolos de Plaspy simplifican la configuración inicial para muchos modelos comunes de rastreadores, permitiendo que las organizaciones se concentren en el monitoreo y las operaciones en lugar de en detalles de integración de bajo nivel.

Para conocer más sobre Plaspy y cómo funciona con dispositivos como el AoYa T2D, visite https://www.plaspy.com. Para obtener los detalles más actuales sobre protocolo específico del dispositivo, notas de firmware y documentación de hardware, verifique la información con el fabricante en http://www.aoyagps.com/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
