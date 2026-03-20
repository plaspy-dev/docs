---
slug: /suntech/st_215/protocol
id: st_215-protocol
sidebar_label: Protocol
title: Suntech - ST 215 Protocol
sidebar_class_name: menu_item_tracker
description: Visión general pública del protocolo del Suntech ST 215 para conectar con el servidor Plaspy
keywords:
  - protocolo Suntech ST 215
  - protocolo GPS Suntech ST 215
  - protocolo de rastreo Suntech ST 215
  - comunicación Suntech ST 215
  - protocolo rastreador GPS Suntech
  - compatibilidad ST 215 Plaspy
  - protocolo rastreador vehicular Suntech
  - protocolo rastreador Plaspy
  - protocolo rastreador GPS Plaspy
  - seguimiento de flotas Suntech ST 215
---

# Suntech - Protocolo ST 215

Esta página describe el contexto público del protocolo para usar el rastreador Suntech ST 215 con la plataforma Plaspy. Se centra en cómo el dispositivo informa posiciones y eventos a Plaspy mediante conexiones móviles de datos y en el papel general del protocolo de reporte del rastreador en ese proceso. El ST 215 es un rastreador vehicular versátil con módem GSM GPRS cuatribanda, antenas GPS y GSM internas, modos de reporte configurables por tiempo distancia o cambio de ángulo, batería de respaldo y memoria interna, además de distintas versiones de hardware que ofrecen entradas/salidas y opcional integración CAN Bus.

Plaspy utiliza configuraciones de conexión compartidas entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando un equipo correctamente configurado reporta al endpoint de Plaspy. Para Plaspy el endpoint público es d.plaspy.com con IP 54.85.159.138 y la plataforma escucha en el puerto 8888. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que la configuración del dispositivo y la versión de firmware afectarán la comunicación práctica del ST 215.

## Resumen del protocolo

El protocolo de reporte del rastreador es el conjunto de reglas que el ST 215 usa para empaquetar datos de ubicación, eventos y estado del dispositivo para transmitirlos por datos móviles a un servidor remoto. En términos de documentación pública, el protocolo define cómo el rastreador se identifica, cómo reporta posiciones y cómo los mensajes basados en eventos se entregan a un servidor como Plaspy.

- Permite enviar ubicaciones y eventos desde el ST 215 a un servidor remoto para que Plaspy muestre y registre la actividad vehicular
- Incluye identificadores del dispositivo y datos básicos de estado para que Plaspy asocie los mensajes entrantes con el rastreador correcto
- Soporta reportes periódicos y orientados a eventos configurados por tiempo distancia o cambio de ángulo según la configuración del equipo
- Opera sobre datos móviles usando GPRS y opciones de transporte habituales para que el ST 215 alcance un endpoint alojado
- Funciona con funciones internas de respaldo y memoria para enviar reportes después de una interrupción de energía o almacenarlos cuando la conectividad es intermitente

## Cómo Plaspy detecta el protocolo

Plaspy recibe el tráfico de los dispositivos en un endpoint y puerto consistentes y determina el protocolo del rastreador a partir del patrón de datos entrante y los identificadores que expone el dispositivo. Debido a que Plaspy detecta automáticamente el protocolo del rastreador, por lo general no es necesario seleccionar manualmente un protocolo dentro de la plataforma cuando el dispositivo está apuntando correctamente a Plaspy.

- Plaspy escucha en un solo puerto para todos los dispositivos, lo que simplifica la configuración y reduce pasos en la selección de protocolo
- El endpoint público de Plaspy para reportes de dispositivos es d.plaspy.com y la IP del servidor es 54.85.159.138
- Plaspy detecta automáticamente el protocolo del rastreador cuando un dispositivo se conecta y envía sus datos identificadores
- Un ST 215 correctamente configurado que reporte al endpoint de Plaspy normalmente será identificado sin asignación manual de protocolo
- La detección se basa en identificadores públicos y comportamiento de reporte estándar en lugar de exponer internals propietarios del parser

## Transporte y contexto de conexión

El ST 215 soporta transportes de datos móviles comunes y puede configurarse para usar UDP o TCP al enviar reportes. Para la integración con Plaspy, el dispositivo puede configurarse en UDP o TCP usando el puerto 8888. Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la configuración a nivel de flota.

- El reporte del dispositivo puede usar GPRS con transporte TCP o UDP según la configuración del equipo y las capacidades del firmware
- Apunte el ST 215 al host de Plaspy usando d.plaspy.com o la IP del servidor 54.85.159.138 y el puerto 8888
- El APN del dispositivo y las credenciales de datos móviles deben estar configuradas correctamente para que la conectividad GPRS esté activa
- Elija UDP o TCP según el soporte del dispositivo y consideraciones de confiabilidad de la red
- Al usar un único puerto para todos los dispositivos en Plaspy, es más sencillo replicar la configuración en muchas unidades

## Notas sobre compatibilidad del protocolo

- Las versiones de firmware y las personalizaciones OEM pueden cambiar el contenido de los mensajes, la temporización y los campos disponibles; por tanto, las comprobaciones de compatibilidad deben referenciar el nivel de firmware del dispositivo
- Diferentes revisiones de hardware o modelos variantes del ST 215 pueden exponer distintas entradas/salidas y características CAN Bus opcionales que afectan los datos reportados
- La selección de transporte entre TCP y UDP puede influir en el comportamiento de entrega de mensajes, especialmente en redes móviles poco fiables
- Asegúrese de que el dispositivo esté configurado para reportar a d.plaspy.com o a la IP del servidor proporcionada y que use el puerto 8888 para la integración con Plaspy
- La documentación del fabricante y las notas de versión son la fuente autorizada para detalles del protocolo específicos por firmware y comandos soportados
- Al agregar muchos dispositivos, valide un equipo de muestra de extremo a extremo antes de desplegar cambios de configuración en la flota

## Por qué es importante entender el protocolo

Tener un conocimiento práctico del protocolo de comunicación del ST 215 resulta útil al configurar dispositivos, diagnosticar conectividad y asegurar una operación confiable con Plaspy. Saber qué reporta el rastreador y cómo llega al servidor reduce el tiempo de puesta en marcha y evita problemas comunes de integración.

- Confirma que el dispositivo envía los mensajes de posición y eventos esperados a Plaspy
- Ayuda a elegir entre transporte TCP o UDP según prioridades operativas y comportamiento de la red
- Permite evaluar si el almacenamiento en búfer del dispositivo y la batería de respaldo cumplen las expectativas de reporte durante pérdida de energía
- Facilita la resolución de problemas cuando un equipo no aparece en Plaspy revisando la configuración de endpoint y puerto
- Aclara cómo las diferencias de versión del dispositivo afectan los datos enviados a Plaspy y qué campos se pueden esperar

## Por qué usar Plaspy con este protocolo

Usar Plaspy con el Suntech ST 215 ofrece a las organizaciones una forma directa de recopilar eventos de ubicación, estado vehicular y otra telemetría mediante una plataforma de gestión de flotas consolidada. Los modos de reporte flexibles y las opciones de hardware del ST 215 lo hacen adecuado para rastreo y recuperación de vehículos y vigilancia de flotas, mientras que Plaspy se encarga de la recepción, normalización y mapeo de datos a los dispositivos.

Para saber más sobre Plaspy y cómo funciona con dispositivos como el Suntech ST 215 visite https://www.plaspy.com. El soporte de protocolo, el comportamiento del firmware y los detalles de implementación del dispositivo pueden cambiar con el tiempo, por lo que le recomendamos verificar la información más reciente del protocolo específica del dispositivo en el sitio del fabricante http://www.suntechint.com/
