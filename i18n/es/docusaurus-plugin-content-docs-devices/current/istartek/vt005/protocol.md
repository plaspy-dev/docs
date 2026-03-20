---
slug: /istartek/vt005/protocol
id: vt005-protocol
sidebar_label: Protocol
title: iStartek - VT005 Protocol
sidebar_class_name: menu_item_tracker
description: Visión general pública del protocolo iStartek VT005 y su compatibilidad con Plaspy para comunicación y reporte de datos
keywords:
  - protocolo iStartek VT005
  - protocolo GPS iStartek VT005
  - protocolo de comunicación iStartek VT005
  - protocolo de rastreo iStartek VT005
  - compatibilidad iStartek VT005 Plaspy
  - rastreador OBD II VT005
  - rastreador GPS OBD II
  - protocolo seguimiento vehicular
  - protocolo GPS gestión de flotillas
  - informes GPS TCP UDP
---

# iStartek - Protocolo VT005

Esta página ofrece un contexto público sobre el protocolo para usar el rastreador iStartek VT005 con Plaspy. Resume cómo el VT005, un rastreador OBD II 4G plug and play, envía telemetría a un servidor Plaspy para monitoreo en tiempo real, historial de rutas y diagnóstico vehicular, sin exponer detalles internos del firmware ni lógica privada de parseo.

Plaspy emplea configuraciones de conexión compartidas para dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el equipo reporta al endpoint de Plaspy. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware, la región y la implementación del fabricante, por lo que esta página se enfoca en el contexto de comunicación a alto nivel y en consideraciones prácticas de compatibilidad para integrar dispositivos VT005 con Plaspy.

## Resumen del protocolo

El protocolo utilizado por el VT005 permite al dispositivo enviar posiciones GPS, telemetría derivada del OBD II y flags de eventos a una plataforma remota de gestión de flotas. En términos generales, su función es transmitir telemetría útil de forma fiable, identificar el dispositivo que reporta y soportar flujos de trabajo basados en eventos en Plaspy, al tiempo que permite el almacenamiento local de registros durante cortes de red.

- Transportar datos de ubicación y fixes de posición a un servidor remoto para que Plaspy muestre mapas en vivo e historial de rutas.
- Reportar telemetría OBD II y diagnósticos como el estado de encendido y códigos de fallo del motor, que Plaspy presenta en paneles.
- Entregar flags de eventos para alarmas y comportamiento del conductor como colisiones, manipulación y conducción brusca que generan alertas en Plaspy.
- Soportar comportamiento de almacenamiento y reenvío para que el VT005 registre localmente eventos GPS y los suba cuando se restablezca la conectividad.
- Proveer canales de reporte flexibles para que el dispositivo use IP primaria y SMS como respaldo cuando sea necesario.

## Cómo detecta Plaspy el protocolo

Plaspy escucha en un endpoint y puerto compartidos y está diseñado para detectar automáticamente el protocolo que usa un rastreador una vez que comienza a enviar datos al servidor Plaspy. En la mayoría de despliegues, el VT005 solo necesita configurarse para reportar al endpoint de Plaspy y no se requiere seleccionar manualmente el protocolo dentro de Plaspy.

- El dominio del servidor Plaspy es d.plaspy.com y la IP del servidor es 54.85.159.138, a la que los dispositivos pueden apuntar para reportes.
- El puerto utilizado para el reporte de dispositivos en Plaspy es 8888 y todos los dispositivos usan el mismo puerto.
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que normalmente no es necesario que usted seleccione un protocolo dentro de Plaspy si el dispositivo está configurado correctamente.
- La configuración correcta del dispositivo y la conectividad de red son los factores principales para una detección automática exitosa.
- Si un dispositivo soporta múltiples transportes o variantes de firmware, verifique que esté configurado para reportar al endpoint de Plaspy para habilitar la detección.

## Contexto de transporte y conexión

El VT005 puede configurarse para usar distintos métodos de transporte según las capacidades del dispositivo y las necesidades del despliegue. Plaspy acepta tráfico en un puerto común, por lo que el dispositivo debe apuntar al endpoint de Plaspy usando el transporte soportado.

- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 dependiendo del firmware y las opciones de configuración del VT005.
- El dominio del servidor Plaspy es d.plaspy.com y la IP del servidor es 54.85.159.138 para reporte por IP directa si no se utiliza resolución DNS.
- El mismo puerto se usa en todos los dispositivos de Plaspy, lo que simplifica el aprovisionamiento y la configuración de firewalls.
- Los dispositivos que soportan reporte por SMS pueden usar SMS como canal secundario cuando la conectividad IP celular no esté disponible.
- Confirme que el transporte elegido coincida con el comportamiento del firmware del VT005 y con las características de la red celular en su región.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar qué modos de transporte y detalles de mensajes soporta el VT005; confirme la versión de firmware al validar compatibilidad.
- Variantes de hardware o regionales pueden afectar las bandas celulares disponibles y el comportamiento de reporte; los modelos para distintas regiones pueden comportarse de forma diferente en cambios de red.
- Algunas unidades VT005 ofrecen fallback por SMS además del reporte TCP; verifique el comportamiento de respaldo para despliegues que requieran alta resiliencia.
- La detección automática de Plaspy requiere que el dispositivo envíe datos al endpoint y puerto de Plaspy; una configuración de servidor incorrecta impedirá la identificación automática.
- Las capacidades de registro local y de almacenamiento y reenvío varían según el firmware y la configuración y deben validarse para casos de uso que exijan captura histórica garantizada.
- Pruebe un conjunto reducido de dispositivos antes de un despliegue masivo para confirmar que la configuración de transporte, el reporte de eventos y la telemetría OBD II se entregan como se espera.

## Por qué es importante entender el protocolo

Comprender cómo se comunica el VT005 ayuda a configurar correctamente los equipos, acelerar la resolución de problemas y lograr un comportamiento predecible en flotas en producción. Conocer las opciones de transporte, los endpoints del servidor y el comportamiento de registro del dispositivo reduce el tiempo de integración y mejora la confiabilidad a largo plazo.

- Asegura que los dispositivos apunten al endpoint y puerto correctos de Plaspy para la detección automática del protocolo.
- Ayuda a los técnicos a elegir TCP o UDP adecuadamente según el comportamiento de la red y el soporte del firmware.
- Permite un diagnóstico más rápido cuando faltan actualizaciones de posición, telemetría OBD II o flags de eventos.
- Informa decisiones sobre fallback por SMS, retención de registros locales e impactos de actualizaciones de firmware.
- Facilita la planificación ante variantes celulares regionales y requisitos de firewall a nivel de red.
- Hace más sencillo alinear el comportamiento del dispositivo con los flujos de trabajo de Plaspy, como alertas, diagnósticos e informes históricos.

## Por qué usar Plaspy con este protocolo

Usar el VT005 con Plaspy brinda a las organizaciones una vía sencilla para obtener visibilidad vehicular en tiempo real, alertas basadas en eventos y diagnósticos basados en OBD II sin cableado complejo. La forma OBD II plug and play, el registro a bordo y el soporte para múltiples redes celulares hacen del VT005 una opción práctica para gestores de flotas que necesitan despliegues rápidos y telemetría confiable integrada en los flujos de Plaspy.

Plaspy consolida datos de ubicación, eventos y diagnósticos del VT005 en paneles y reportes centralizados para que los equipos puedan monitorear rutas, responder a incidentes y seguir la salud del vehículo. Para saber más sobre Plaspy y cómo se integra con dispositivos como el VT005 visite https://www.plaspy.com. Tenga en cuenta que el soporte de protocolo, el comportamiento del firmware y los detalles de implementación del fabricante pueden cambiar con el tiempo; verifique la información más reciente del protocolo y firmware del dispositivo con el fabricante en https://istartek.com/.
