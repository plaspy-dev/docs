---
slug: /tzone/tz_tag04/protocol
id: tz_tag04-protocol
sidebar_label: Protocol
title: TZone - TZ-Tag04 Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública para integrar el rastreador TZone TZ-Tag04 con Plaspy, con detalles de conexión y compatibilidad
keywords:
  - TZone TZ-Tag04
  - protocolo TZ-Tag04
  - protocolo rastreador TZone
  - compatibilidad TZ-Tag04 con Plaspy
  - protocolo de seguimiento TZone
  - protocolo de comunicación TZ-Tag04
  - rastreador de activos TZone
  - monitorización ambiental TZ-Tag04
  - conectividad rastreador TZone
  - integración dispositivo TZ-Tag04
---

# TZone - TZ-Tag04 Protocolo

Esta página describe el contexto público del protocolo para usar el rastreador TZone TZ-Tag04 con Plaspy. Explica cómo los reportes y la telemetría del dispositivo se relacionan con los ajustes compartidos de conexión de Plaspy y qué aspectos son relevantes al configurar los dispositivos para enviar ubicación y datos de sensores a la plataforma Plaspy.

El TZ-Tag04 es un rastreador compacto con clasificación IP65, sensores integrados de temperatura y humedad, soporte inalámbrico RFID 2.4 G, un sensor de precisión y batería de larga duración. Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador; sin embargo, el comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante.

## Resumen del protocolo

El protocolo de comunicación del TZ-Tag04 regula cómo el dispositivo envía posición, telemetría ambiental y estado a un servidor backend como Plaspy. Esta visión pública se centra en el papel del protocolo más que en detalles de implementación, para ayudarle a entender qué esperar al integrar el dispositivo.

- Permite que el rastreador envíe datos de ubicación y sensores que Plaspy puede procesar y mostrar.
- Incluye información identificativa que permite a Plaspy asociar un reporte con un activo o rastreador específico.
- Transporta telemetría como temperatura, humedad, estado de batería y, opcionalmente, datos de etiquetas RF junto con las actualizaciones de posición.
- Soporta intervalos de reporte configurables y ajustes de potencia de transmisión en el dispositivo que afectan la frecuencia de las actualizaciones recibidas por Plaspy.
- Funciona sobre canales de transporte estándar para que el rastreador pueda dirigirse a reportar al endpoint de Plaspy para una integración automática.

## Cómo detecta Plaspy el protocolo

La plataforma de Plaspy está diseñada para recibir reportes de dispositivos en un endpoint unificado y detectar automáticamente el formato de reporte del dispositivo. En la mayoría de los casos, un TZ-Tag04 correctamente configurado comenzará a entregar datos a Plaspy sin necesidad de seleccionar manualmente el protocolo dentro de la plataforma.

- El dominio del servidor Plaspy es d.plaspy.com y la IP del servidor es 54.85.159.138 para el reporte de dispositivos.
- Todos los dispositivos en Plaspy usan el mismo puerto y Plaspy detecta automáticamente el protocolo del rastreador.
- Cuando el TZ-Tag04 se configura para reportar a Plaspy, la plataforma examina los reportes entrantes y los asocia automáticamente con un registro de dispositivo.
- Generalmente, usted no necesita escoger un protocolo dentro de Plaspy siempre que el dispositivo apunte al endpoint de Plaspy y use un transporte compatible.
- Si un dispositivo no aparece, revisar la dirección de reporte y los ajustes de transporte del dispositivo es el primer paso de diagnóstico.

## Transporte y contexto de conexión

El TZ-Tag04 puede configurarse para reportar a través de transportes de red estándar. Comprender las opciones de transporte disponibles y los ajustes de destino ayuda a asegurar una conectividad confiable con Plaspy.

- El dispositivo puede configurarse usando UDP o TCP en el puerto 8888 según el soporte del dispositivo y su configuración.
- Plaspy acepta reportes en el puerto 8888 y ese mismo puerto se usa para todos los dispositivos soportados por la plataforma.
- Los dispositivos pueden apuntar al dominio de Plaspy d.plaspy.com o directamente a la IP del servidor 54.85.159.138 al configurar el destino de reporte.
- Elija UDP cuando prefiera menor sobrecarga y transmisiones más simples; elija TCP cuando el firmware del dispositivo requiera entrega fiable y comportamiento de sesión.
- Confirme en el dispositivo los ajustes de intervalo de reporte, potencia de transmisión (TX) y transporte para que coincidan con sus requisitos de cobertura y duración de batería.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar la forma en que un TZ-Tag04 formatea o envía la telemetría; verifique la versión de firmware al diagnosticar diferencias.
- Revisiones de hardware y variantes de fabricación a veces provocan pequeñas diferencias en el protocolo o en el comportamiento de transporte entre unidades.
- Es posible que se requieran herramientas de configuración del fabricante o pasos de aprovisionamiento para establecer el objetivo de reporte del dispositivo a Plaspy.
- La selección de transporte (UDP vs TCP) puede afectar la fiabilidad de la entrega y estar condicionada por el entorno de red local.
- La detección automática de Plaspy cubre los formatos de reporte comunes, pero firmwares inusuales o modificados pueden requerir validación adicional.
- Siempre valide que los intervalos de reporte y los ajustes de potencia sean compatibles con sus necesidades operativas y la vida útil de la batería esperada.

## Por qué es importante entender el protocolo

Conocer el protocolo de comunicación del dispositivo y el contexto de conexión ayuda a asegurar un despliegue exitoso, telemetría predecible y una resolución de problemas más sencilla cuando se usa el TZ-Tag04 con Plaspy.

- Configuración más rápida al saber dónde y cómo apuntar los ajustes de reporte del dispositivo.
- Pasos de diagnóstico más claros cuando los datos no llegan a Plaspy como se espera.
- Mejor planificación de batería y red al ajustar intervalos de reporte y potencia de transmisión a los casos de uso.
- Decisiones informadas sobre la elección de transporte para equilibrar fiabilidad y consumo de energía.
- Capacidad para validar que sensores ambientales como temperatura y humedad se estén reportando e interpretando correctamente en Plaspy.

## Por qué usar Plaspy con este protocolo

Usar el TZ-Tag04 con Plaspy ofrece una forma práctica de recopilar telemetría de ubicación y ambiental desde rastreadores compactos y resistentes, y visualizar esos datos en una plataforma centralizada de gestión de flotas y activos. Para organizaciones que rastrean activos, monitorean productos sensibles a la temperatura o necesitan rastreadores de larga duración para casos de bajo mantenimiento, combinar este hardware con Plaspy simplifica la visibilidad operativa.

Para obtener más información sobre Plaspy y cómo puede trabajar con el TZ-Tag04, visite https://www.plaspy.com. El soporte de protocolo, el comportamiento del firmware y los detalles del fabricante pueden cambiar con el tiempo, por lo que le recomendamos verificar la información específica más reciente del protocolo en el sitio del fabricante http://www.tzonedigital.com/ antes de desplegar a gran escala.
