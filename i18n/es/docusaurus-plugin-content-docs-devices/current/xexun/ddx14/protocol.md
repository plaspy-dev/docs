---
slug: /xexun/ddx14/protocol
id: ddx14-protocol
sidebar_label: Protocol
title: Xexun - DDX14 Protocol
sidebar_class_name: menu_item_tracker
description: Contexto público del protocolo para usar el Xexun DDX14 con Plaspy y lograr seguimiento supervisado y entrega fiable de alertas
keywords:
  - protocolo Xexun DDX14
  - protocolo GPS Xexun DDX14
  - compatibilidad DDX14 Plaspy
  - protocolo de comunicación DDX14
  - protocolo rastreador Xexun
  - protocolo rastreador GPS Plaspy
  - protocolo seguimiento tobilleras
  - rastreador GPS a prueba de manipulación
  - integración de dispositivos Plaspy
  - telemetría dispositivo de rastreo
---

# Xexun - Protocolo DDX14

Esta página presenta el contexto público del protocolo para usar la tobillera GPS Beidou Xexun DDX14 con Plaspy. Describe, en términos generales, cómo se comunica el rastreador, qué ajustes de conexión se usan para reportar a Plaspy y cómo el entendimiento del protocolo facilita una integración y operación confiables.

Plaspy emplea ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, aunque el comportamiento exacto puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante. La información aquí es una guía pública; siempre consulte la documentación del fabricante para detalles específicos y actualizados del dispositivo.

## Resumen del protocolo

El protocolo de reporte del DDX14 permite al dispositivo enviar telemetría de ubicación, alarmas y estado desde la persona supervisada a una plataforma central como Plaspy. En la práctica, el protocolo define cómo el rastreador compone y transmite ubicaciones, alarmas por manipulación, eventos de proximidad y datos almacenados, de modo que el servidor pueda procesar y actuar sobre esos eventos para supervisión en tiempo real y reproducción histórica.

- Permite que el rastreador se identifique y reporte ubicación y telemetría de alarmas a un endpoint remoto.
- Incluye alarmas por manipulación y ruptura de correa para que Plaspy genere alertas inmediatas y mensajes de voz.
- Soporta almacenamiento durante zonas sin cobertura y retransmisión posterior para preservar y reenviar datos tras la recuperación de la red.
- Transmite posicionamiento fusionado que puede incluir GPS, Beidou, Wi‑Fi y LBS para mejorar la precisión de las ubicaciones.
- Admite eventos de proximidad opcionales desde módulos UWB cuando se empareja con estaciones base.

## Cómo Plaspy detecta el protocolo

Plaspy ofrece un endpoint y puerto únicos y compartidos para el reporte de dispositivos y utiliza ese destino para recibir datos de muchos modelos de rastreadores. Cuando un DDX14 configurado correctamente reporta a Plaspy, la plataforma detecta automáticamente su protocolo, por lo que normalmente no es necesario seleccionar el protocolo manualmente dentro de Plaspy.

- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo reporta a la plataforma.
- Todos los dispositivos en Plaspy usan el mismo puerto para reportes, lo que simplifica la configuración.
- Configurar el dispositivo para que reporte al endpoint de Plaspy suele ser suficiente para la detección automática.
- Plaspy procesa telemetría y alarmas de los rastreadores compatibles para habilitar monitorización en tiempo real y notificaciones.
- Si un dispositivo no aparece, la resolución de problemas suele centrarse en la accesibilidad de red y la configuración del servidor más que en la selección manual del protocolo.

## Transporte y contexto de conexión

El DDX14 envía telemetría a través de redes celulares para alcanzar el endpoint de ingestión de Plaspy. Plaspy expone un destino de red consistente que la mayoría de los dispositivos pueden usar; el DDX14 puede apuntarse al dominio de Plaspy o a la dirección IP del servidor según la provisión local.

- El dominio del servidor Plaspy es d.plaspy.com
- La IP del servidor Plaspy es 54.85.159.138
- El puerto es 8888
- El dispositivo puede configurarse usando UDP o TCP en el puerto 8888
- Todos los dispositivos en Plaspy usan el mismo puerto, por lo que el DDX14 utiliza el puerto 8888 como otros rastreadores soportados
- Elija UDP o TCP según las opciones de configuración del dispositivo y las condiciones de la red

## Notas de compatibilidad del protocolo

- Las versiones de firmware pueden modificar la cadencia de mensajes, campos opcionales y comportamiento de alarmas; verifique el nivel de firmware al validar compatibilidad.
- Revisiones de hardware o módulos opcionales como UWB pueden agregar eventos y telemetría que la plataforma receptora debe soportar.
- La configuración o provisión por parte del fabricante determina si el dispositivo envía a un nombre de dominio o a una dirección numérica del servidor.
- La disponibilidad de la red celular y el firmware regional de radio afectan cómo y cuándo el dispositivo transmite los datos almacenados.
- Elegir UDP frente a TCP puede influir en las características de entrega en redes marginales; siga las recomendaciones del fabricante sobre transporte.
- Confirme siempre los ajustes específicos del dispositivo y las funciones soportadas contra la documentación oficial de Xexun.

## Por qué es importante conocer el protocolo

Conocer cómo se comunica el rastreador con el servidor ayuda a garantizar una configuración exitosa, alertas confiables y un comportamiento predecible en flujos de trabajo de supervisión en producción. Incluso cuando Plaspy detecta el protocolo automáticamente, entender el contexto de comunicación a alto nivel reduce la fricción en la configuración y acelera la resolución de problemas.

- Asegura que los reportes del dispositivo apunten al endpoint y puerto correctos de Plaspy para ingestión inmediata.
- Ayuda a los administradores a interpretar los tiempos de alarma y la retransmisión de datos almacenados después de zonas sin cobertura.
- Orienta la selección de transporte y la planificación de red para una conectividad estable en el área de despliegue.
- Facilita verificar que funciones opcionales como la proximidad UWB y los circuitos de manipulación estén siendo reportadas.
- Apoya la coordinación con técnicos de campo y fabricantes al diagnosticar discrepancias.

## Por qué usar Plaspy con este protocolo

Usar el DDX14 con Plaspy ofrece una plataforma gestionada para supervisar a personas que requieren dispositivos resistentes a la manipulación y monitoreo de proximidad preciso. Plaspy recopila la telemetría del DDX14 y la presenta en paneles, alertas y reproducciones históricas para apoyar a oficiales de caso, cuidadores y supervisores en tiempo real y a lo largo del tiempo.

Plaspy acepta reportes del DDX14 cuando el dispositivo está configurado para reportar al endpoint y puerto de Plaspy. Para obtener más información sobre Plaspy y cómo soporta integraciones de dispositivos y flujos de monitoreo visite https://www.plaspy.com. Para detalles específicos del protocolo del dispositivo, comportamiento de firmware e instrucciones de implementación verifique la información con el fabricante en https://www.xexun.com/.
