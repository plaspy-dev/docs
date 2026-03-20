---
slug: /aplicom/a1_max/protocol
id: a1_max-protocol
sidebar_label: Protocol
title: Aplicom - A1 MAX Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo para configurar Aplicom A1 MAX con Plaspy, con contexto de conexión y guía de compatibilidad
keywords:
  - Protocolo Aplicom A1 MAX
  - Protocolo GPS Aplicom A1 MAX
  - Protocolo de comunicación Aplicom A1 MAX
  - Protocolo de rastreo Aplicom A1 MAX
  - Protocolo de rastreador GPS Aplicom
  - Compatibilidad A1 MAX Plaspy
  - protocolo telemático de flotas
  - protocolo de seguimiento vehicular
  - integración CAN FMS
  - integración de rastreador GPS
---

# Aplicom - A1 MAX Protocolo

Esta página ofrece una visión pública y de alto nivel del contexto del protocolo de comunicación para usar el rastreador Aplicom A1 MAX con Plaspy. Explica cómo el dispositivo normalmente envía información de telemetría y posicionamiento a Plaspy y qué ajustes de conexión se esperan para una integración exitosa, evitando detalles internos específicos de firmware.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el equipo reporta al endpoint de Plaspy. El comportamiento exacto del protocolo y la telemetría disponible pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que considere esta página como contexto del protocolo y no como una referencia de implementación completa.

## Resumen del protocolo

El Aplicom A1 MAX transmite datos del vehículo y de sensores a una plataforma backend aprovechando sus funciones integradas de telemetría y conectividad. En este contexto, el protocolo es el conjunto de mensajes y el comportamiento de transporte que el rastreador emplea para entregar información de posición, sensores y diagnóstico a Plaspy, de modo que esos datos puedan ser analizados, almacenados y presentados para la gestión de flotas.

- Permite el envío de posición GNSS, localización basada en celda y eventos de movimiento a Plaspy
- Transporta datos del vehículo y del motor recopilados vía CAN FMS o interfaces seriales para uso telemático
- Reporta estados de entradas digitales y analógicas, contadores de pulsos y eventos de identificación del conductor para monitoreo operativo
- Proporciona notificaciones de eventos y alarmas como entrada/salida de geocercas, activaciones del acelerómetro y eventos de alimentación eléctrica
- Soporta actualizaciones por aire y intervalos de reporte configurables sujetos al firmware del dispositivo y a las opciones del fabricante

## Cómo Plaspy detecta el protocolo

Plaspy recibe conexiones entrantes de dispositivos en un endpoint y puerto compartidos y determina automáticamente qué protocolo de rastreador se está usando. Esto significa que cuando un Aplicom A1 MAX está configurado para reportar a Plaspy, la plataforma intentará identificar y procesar sus mensajes sin necesidad de seleccionar manualmente el protocolo en la mayoría de los casos.

- Plaspy espera que los dispositivos reporten al endpoint d.plaspy.com
- Plaspy es accesible en la dirección pública 54.85.159.138 para configuraciones por IP directa
- Plaspy utiliza un único puerto para todos los dispositivos compatibles, lo cual simplifica la configuración
- Cuando un rastreador apunta al endpoint de Plaspy, la detección de protocolo se ejecuta automáticamente y se aplican los manejadores apropiados
- Por lo general, usted solo necesita asegurarse de que los ajustes de reporte del dispositivo coincidan con el endpoint y el modo de transporte de Plaspy

## Contexto de transporte y conexión

Las opciones de conexión y transporte son un detalle de implementación del rastreador y pueden ser configurables en el equipo. Para el Aplicom A1 MAX, tenga en cuenta las opciones de transporte y los destinos de dirección comúnmente usados para entregar datos a Plaspy.

- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 según el soporte del equipo y el modo elegido
- Los dispositivos pueden apuntar al dominio d.plaspy.com o directamente a la IP 54.85.159.138
- Plaspy usa el puerto 8888 para todos los dispositivos soportados por la plataforma, lo que reduce la complejidad de configuración
- Utilice el modo de transporte (UDP o TCP) que coincida con el firmware del dispositivo y las condiciones de red para obtener la mejor fiabilidad
- Asegúrese de que firewalls intermedios o APN permitan salidas hacia el endpoint de Plaspy y el transporte elegido

## Notas de compatibilidad del protocolo

- Las revisiones de firmware en el A1 MAX pueden cambiar qué campos o reportes están disponibles y la frecuencia con que se envían
- Las variantes de hardware u módulos opcionales como CAN, adaptadores seriales y hardware de identificación de conductor pueden afectar la telemetría disponible
- Las configuraciones del fabricante determinan si el dispositivo usa UDP o TCP para reportar y qué dirección se emplea
- Plaspy detecta automáticamente el comportamiento del protocolo, pero validar el reporte del dispositivo en un entorno de prueba ayuda a confirmar la compatibilidad
- Confirme siempre el APN y los ajustes de red necesarios para la conectividad celular con el dispositivo instalado en campo
- Cuando existan opciones del fabricante, prefiera las guías oficiales de configuración de Aplicom para asegurar formatos de reporte correctos

## Por qué es importante entender el protocolo

Comprender cómo el A1 MAX se comunica con Plaspy mejora la eficiencia de la configuración, la rapidez en la resolución de problemas y la confiabilidad a largo plazo de su implementación de telemática de flotas. Conocer el comportamiento general del protocolo le permite validar que los tipos de datos correctos están llegando y siendo interpretados por Plaspy.

- Acelera la configuración inicial asegurando que el dispositivo apunte al endpoint y transporte correctos de Plaspy
- Facilita el diagnóstico de telemetría faltante o malformada al solucionar problemas de conectividad o brechas de datos
- Ayuda a determinar si se requieren actualizaciones de firmware o módulos opcionales para entregar los tipos de datos necesarios
- Mejora la planificación de reglas de red y firewall al clarificar expectativas de endpoint y transporte
- Apoya decisiones operativas más acertadas al alinear las capacidades del dispositivo con necesidades de reporte y análisis

## Por qué usar Plaspy con este protocolo

Combinar el Aplicom A1 MAX con Plaspy ofrece a las organizaciones visibilidad unificada de la ubicación, la identificación del conductor, así como de datos del motor y sensores recopilados por el rastreador. La detección automática de protocolos de Plaspy y su enfoque de puerto único simplifican despliegues a gran escala donde dispositivos de distintos proveedores deben reportar a la misma plataforma.

Si desea conocer más sobre cómo Plaspy puede trabajar con dispositivos Aplicom y otro hardware telemático de flotas, visite https://www.plaspy.com. Para los detalles específicos más recientes sobre el protocolo por dispositivo, comportamiento de firmware y opciones de configuración, consulte la documentación del fabricante en https://www.aplicom.com/ para verificar los pormenores de implementación.
