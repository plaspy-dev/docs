---
slug: /ulbotech/t373/protocol
id: t373-protocol
sidebar_label: Protocol
title: Ulbotech - T373 Protocol
sidebar_class_name: menu_item_tracker
description: Visión pública del protocolo del Ulbotech T373 para uso con Plaspy con guía de conexión y detección
keywords:
  - protocolo Ulbotech T373
  - protocolo GPS Ulbotech T373
  - Ulbotech T373 Plaspy
  - protocolo rastreador T373
  - protocolo GPS Ulbotech
  - protocolo de comunicación T373
  - compatibilidad de dispositivos Plaspy
  - rastreo de vehículos T373
  - rastreo de flotas Ulbotech T373
  - guía de protocolo T373
---

# Ulbotech - Protocolo T373

Esta página ofrece una visión pública y no sensible del contexto de comunicación para usar el rastreador Ulbotech T373 con la plataforma Plaspy. Describe cómo el dispositivo suele reportar datos a Plaspy, el papel del protocolo en el envío fiable de información y qué verificar al integrar un rastreador en una flota.

Plaspy utiliza ajustes de conexión compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando este envía datos a la plataforma. El comportamiento exacto del protocolo y las funciones disponibles pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página mantiene un enfoque general y recomienda validar con la documentación oficial del fabricante.

## Resumen del protocolo

El protocolo del dispositivo es el conjunto de reglas y convenciones que el rastreador emplea para enviar telemetría y recibir comandos. Para integrarse con Plaspy, el protocolo permite que el rastreador se identifique, transmita ubicación e información de estado, y entregue telemetría opcional del vehículo cuando el hardware lo soporte.

- Proporciona una estructura para que el rastreador envíe ubicación GPS y telemetría con marcas de tiempo a un servidor
- Incluye identificadores de dispositivo para que Plaspy asocie los mensajes entrantes con el activo correcto
- Transporta datos opcionales del vehículo o sensores cuando el rastreador expone entradas OBDII u otras
- Permite el envío remoto de comandos y confirmaciones cuando el dispositivo y el firmware lo soportan
- Asegura que los datos lleguen en un formato que Plaspy pueda parsear para mapeo, alertas e informes

## Cómo Plaspy detecta el protocolo

Plaspy recibe los reportes de los dispositivos en un endpoint y puerto compartidos y ejecuta la detección automática del protocolo para las conexiones entrantes. En la mayoría de los casos, un rastreador configurado correctamente que apunte al endpoint de Plaspy será reconocido y asignado sin necesidad de seleccionar el protocolo manualmente.

- Plaspy acepta reportes de rastreadores en el dominio d.plaspy.com así como en la IP pública 54.85.159.138
- La plataforma escucha en el puerto 8888 y todos los dispositivos en Plaspy usan el mismo puerto
- Los dispositivos pueden configurarse para usar UDP o TCP según la capacidad y la configuración del equipo
- Cuando un rastreador reporta al endpoint de Plaspy, la detección de protocolo se ejecuta automáticamente por lo que normalmente no se requiere selección manual
- Si un dispositivo no aparece en Plaspy, verifique que esté apuntando al endpoint correcto y que la configuración de transporte coincida con la del dispositivo

## Transporte y contexto de conexión

El contexto de conexión abarca cómo el rastreador establece su capa de transporte para alcanzar Plaspy. El T373 puede configurarse para enviar datos mediante cualquiera de los tipos de transporte soportados, y los parámetros del endpoint determinan dónde reporta el rastreador.

- Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888 según el firmware y la configuración elegida
- Los rastreadores pueden apuntar a d.plaspy.com o directamente a la IP del servidor 54.85.159.138 para alcanzar Plaspy
- Plaspy usa el mismo puerto para todos los dispositivos compatibles, lo que simplifica la configuración del endpoint
- Elija UDP o TCP según la recomendación del dispositivo y las condiciones de red; algunos operadores y enrutadores se comportan de forma diferente con cada transporte
- Asegúrese de que el APN y los ajustes de la red móvil en el dispositivo sean correctos para que el rastreador pueda alcanzar el endpoint de Plaspy

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar el conjunto exacto de mensajes y campos que envía un dispositivo; siempre verifique las notas específicas del firmware
- Revisiones de hardware o distintas referencias del mismo fabricante pueden implementar variantes del protocolo
- Los parámetros de servidor del fabricante, los intervalos de reporte por defecto y las configuraciones de transporte pueden diferir según el mercado o el firmware
- La elección entre TCP y UDP afecta la entregabilidad y el comportamiento de la sesión; confirme qué transporte soporta su dispositivo de forma fiable
- Algunas funciones avanzadas, como telemetría OBDII o puenteo de hotspot, pueden ser opcionales y requerir firmware o configuración específicos
- Valide los identificadores del dispositivo y el comportamiento de reporte del IMEI para garantizar que Plaspy pueda asociar automáticamente los datos entrantes con el activo correcto

## Por qué es importante entender el protocolo

Comprender cómo se comunica el rastreador ayuda a agilizar la configuración, mejora la resolución de problemas y favorece la fiabilidad a largo plazo cuando el dispositivo se utiliza con Plaspy. Tener claro el contexto de comunicación reduce el tiempo de integración y ayuda a mantener la calidad de los datos.

- Permite confirmar que el dispositivo apunta al endpoint correcto de Plaspy y utiliza el transporte adecuado
- Facilita la resolución de problemas cuando el dispositivo no es visible o cuando la telemetría llega incompleta
- Orienta las decisiones sobre actualizaciones de firmware y cuándo volver a probar el comportamiento del dispositivo tras cambios
- Ayuda a ajustar los intervalos de reporte y el volumen de datos por consideraciones operativas y de coste
- Aumenta la confianza al desplegar dispositivos en una flota mixta con distintas revisiones de hardware

## Por qué usar Plaspy con este protocolo

Usar Plaspy con un rastreador Ulbotech como el T373 ofrece visibilidad centralizada y la infraestructura para ingerir y normalizar la telemetría del rastreador para mapeo, alertas e informes. La detección automática de protocolos de Plaspy y su modelo de endpoint de puerto único simplifican la incorporación y reducen la carga de configuración en los equipos de campo.

Si está evaluando o desplegando rastreadores T373 a escala, Plaspy puede ayudar a centralizar los datos de la flota y proporcionar un procesamiento uniforme de la telemetría de ubicación y vehículo. Para obtener más información sobre Plaspy y las capacidades de la plataforma, visite https://www.plaspy.com. Para los detalles más actualizados sobre protocolos específicos del dispositivo, notas de firmware y orientación de implementación, verifique la información con el fabricante en http://www.ulbotech.com/.
