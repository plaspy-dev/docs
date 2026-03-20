---
slug: /careu/u1_lite_lte/protocol
id: u1_lite_lte-protocol
sidebar_label: Protocol
title: CAREU - U1 Lite+ LTE Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del rastreador CAREU U1 Lite+ LTE y compatibilidad con Plaspy, incluyendo guía de conexión
keywords:
  - protocolo CAREU U1 Lite+ LTE
  - protocolo GPS CAREU U1 Lite+ LTE
  - protocolo CAREU U1 Lite+ LTE Plaspy
  - protocolo del rastreador U1 Lite+ LTE
  - protocolo de seguimiento de vehículos CAREU
  - protocolo de rastreador GPS Plaspy
  - compatibilidad U1 Lite+ LTE
  - protocolo de seguimiento de flotas
  - protocolo de telemetría U1 Lite+ LTE
  - protocolo de telemática de video
---

# CAREU - Protocolo U1 Lite+ LTE

Esta página describe el contexto público del protocolo para usar el rastreador CAREU U1 Lite+ LTE con la plataforma Plaspy. Se centra en cómo el dispositivo se comunica con Plaspy a alto nivel, cuáles son los parámetros de conexión públicos y qué deben considerar los operadores al integrar el equipo en flotas. El contenido está pensado para usuarios técnicos e integradores que requieren una visión clara, no sensible, del comportamiento de comunicación y de la compatibilidad.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo cuando un equipo reporta a la plataforma. El comportamiento exacto del protocolo y los detalles de los mensajes pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante. El U1 Lite+ LTE es compatible con Plaspy desde fábrica y soporta posicionamiento GNSS, telemetría OBD II/CAN, entradas de sensor de combustible, configuración remota y FOTA, todas las cuales influyen en el intercambio de telemetría útil con Plaspy.

## Resumen del protocolo

A grandes rasgos, el protocolo de comunicación del U1 Lite+ LTE permite que el rastreador se identifique ante un servidor remoto, transmita posición y telemetría, y reciba configuración remota o actualizaciones de firmware cuando están soportadas. El protocolo es el puente entre el hardware del dispositivo y los sistemas de ingestión de Plaspy, permitiendo convertir los datos de la flota en información accionable sin requerir integraciones personalizadas por unidad.

- El protocolo transmite fixes GNSS y telemetría con sello de tiempo para que Plaspy pueda mapear ubicación, eventos de movimiento y lecturas de sensores.
- Datos del motor y del vehículo provenientes de OBD II y CAN se informan para que Plaspy muestre diagnósticos, consumo de combustible y señales de mantenimiento.
- La configuración remota y las actualizaciones FOTA se gestionan sobre el mismo modelo de conectividad para permitir cambios de política y actualizaciones.
- Los modelos preparados para telemática de video pueden coordinar flujos de transmisión de video a través de las interfaces de red del dispositivo, mientras Plaspy se encarga de la ingestión o la integración.
- El protocolo soporta el reporte de eventos como geocercas, conducción brusca y alertas anti robo para que reglas y notificaciones puedan dispararse en Plaspy.

## Detección del protocolo por parte de Plaspy

Plaspy recibe conexiones entrantes en un endpoint y puerto comunes y determina automáticamente el protocolo del rastreador en función de los datos que presenta el dispositivo. En la mayoría de los despliegues, cuando el U1 Lite+ está configurado para reportar al endpoint de Plaspy, no se requiere seleccionar manualmente el protocolo dentro de Plaspy.

- El dominio del servidor de Plaspy es d.plaspy.com y la plataforma es accesible en 54.85.159.138.
- Plaspy escucha en el puerto 8888 y utiliza el mismo puerto para todos los dispositivos compatibles.
- Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888 según las opciones del rastreador y las condiciones de red.
- Cuando un U1 Lite+ correctamente configurado reporta al endpoint de Plaspy, Plaspy detecta automáticamente el protocolo del rastreador y comienza a ingerir telemetría.
- Los pasos típicos de configuración implican apuntar el rastreador al endpoint de Plaspy y verificar que el equipo esté enviando mensajes regulares de posición y estado.

## Transporte y contexto de conexión

El U1 Lite+ LTE soporta múltiples tecnologías celulares y puede usar UDP o TCP para enviar datos a un servidor remoto. Para la integración con Plaspy, los detalles clave de transporte son consistentes entre los dispositivos soportados, lo que facilita el despliegue y la resolución de problemas.

- El dispositivo puede usar UDP o TCP en el puerto 8888 para enviar telemetría a Plaspy.
- Los rastreadores pueden configurarse para reportar al dominio d.plaspy.com o directamente a la IP 54.85.159.138.
- Plaspy usa el mismo puerto, 8888, para todos los dispositivos, de modo que las reglas de firewall de red y la configuración APN del operador pueden estandarizarse.
- La elección del transporte puede afectar la latencia y el comportamiento de entrega, pero tanto UDP como TCP son soportados por Plaspy en el puerto compartido.
- Para modelos con video, los flujos de datos separados para video pueden coordinarse junto al canal de telemetría aprovechando la conectividad configurada en el dispositivo.

## Notas de compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar el contenido de los mensajes y los comandos disponibles; siempre verifique la versión de firmware del equipo al validar el comportamiento.
- Las variantes de hardware y los modelos celulares regionales pueden influir en los modos de transporte soportados y en el comportamiento GNSS.
- Las opciones de configuración del fabricante, como la selección de transporte, los intervalos de reporte y las opciones de gestión remota determinan cómo se comporta el dispositivo con Plaspy.
- Las capacidades de FOTA y configuración remota dependen del firmware del dispositivo y pueden requerir procedimientos específicos del fabricante para habilitarlas.
- Confirme que los ajustes de reporte del equipo apunten a d.plaspy.com o a 54.85.159.138 en el puerto 8888 y si se prefiere UDP o TCP para su despliegue.
- Al integrar telemática de video, revise los requisitos adicionales de ancho de banda y red que son independientes del canal de telemetría.

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación ayuda a garantizar que el U1 Lite+ LTE reporte de forma fiable, que Plaspy ingiera la telemetría correcta y que las políticas operacionales funcionen según lo esperado. Tener un conocimiento práctico del protocolo y del contexto de transporte reduce la fricción en el despliegue y mejora la confiabilidad a largo plazo de los activos rastreados.

- Asegura la configuración correcta del dispositivo para apuntar a Plaspy y usar UDP o TCP en el puerto 8888.
- Ayuda a diagnosticar problemas de conectividad comprobando la resolución del dominio d.plaspy.com o la accesibilidad directa a 54.85.159.138.
- Clarifica qué telemetría estará disponible en Plaspy desde OBD II, CAN, sensores de combustible y GNSS.
- Orienta en la toma de decisiones sobre actualizaciones de firmware y la habilitación de FOTA o configuración remota para la gestión a escala de flota.
- Apoya la planificación de telemática de video y flujos de mayor ancho de banda junto con la telemetría GPS estándar.

## Por qué usar Plaspy con este protocolo

Usar el rastreador CAREU U1 Lite+ LTE con Plaspy entrega a los operadores visibilidad unificada de la ubicación del vehículo, telemetría del motor, consumo de combustible y alertas de eventos sin integraciones personalizadas por dispositivo. La detección automática de protocolos y los ajustes de conexión compartidos de Plaspy reducen la complejidad de configuración, permitiendo a las flotas escalar despliegues en hardware y firmwares variados mientras centralizan la supervisión y las reglas.

Si desea saber más sobre Plaspy y cómo funciona con rastreadores como el CAREU U1 Lite+ LTE, visite https://www.plaspy.com. Para obtener los detalles de protocolo más actuales, notas de firmware y variantes regionales, verifique la información en el sitio del fabricante https://www.systech-iot.com/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
