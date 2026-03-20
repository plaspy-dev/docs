---
slug: /atrack/as500/protocol
id: as500-protocol
sidebar_label: Protocol
title: ATrack - AS500 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del ATrack AS500 y cómo se comunica con Plaspy para telemetría y localización confiables
keywords:
  - Protocolo ATrack AS500
  - Protocolo GPS ATrack AS500
  - Protocolo de comunicación ATrack AS500
  - Protocolo de rastreo ATrack AS500
  - Compatibilidad ATrack GPS con Plaspy
  - Integración de telemetría AS500
  - Compatibilidad rastreador de activos con Plaspy
  - Protocolo LTE Cat M1
  - Reportes AS500 Wi Fi BLE
  - Protocolo rastreador resistente de activos
---

# ATrack - AS500 Protocolo

Esta página documenta el contexto público del protocolo para usar el rastreador GPS ATrack AS500 con Plaspy. Se centra en cómo el AS500 informa ubicación, movimiento y telemetría de sensores de manera que Plaspy pueda procesarlos, sin entrar en detalles privados de implementación del fabricante. El objetivo es facilitar el despliegue y la resolución de problemas de dispositivos AS500 en escenarios reales de seguimiento y gestión de flotas, manteniéndose alineado con la información pública disponible.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando un equipo se configura para reportar al endpoint de Plaspy. El comportamiento exacto del dispositivo y las particularidades de los reportes pueden variar según la versión de firmware, la revisión de hardware, la variante regional o la configuración del fabricante, por lo que es importante verificar el firmware del equipo y la documentación del fabricante para detalles específicos.

## Visión general del protocolo

El protocolo de comunicación que utiliza el AS500 define cómo el dispositivo envía identidad, ubicación, datos de sensores y eventos a un servidor remoto para que Plaspy pueda ofrecer seguimiento en tiempo real, alertas y telemetría histórica. Desde la perspectiva de la integración con Plaspy, la función del protocolo es garantizar que los campos esenciales y las señales de evento lleguen de forma fiable y sean comprensibles por los sistemas de ingestión de Plaspy.

- Permite que el AS500 se identifique ante el servidor para que Plaspy pueda asociar los datos con el activo o la cuenta correcta.
- Transporta ubicación GNSS, estado de movimiento, alertas de manipulación y lecturas de sensores a Plaspy para monitoreo en tiempo real y registros históricos.
- Admite entrega en cola, de modo que el AS500 puede almacenar eventos localmente y reanudar el envío cuando se restablece la conectividad.
- Habilita opciones de transporte seleccionables para que los dispositivos usen el modo de red más adecuado según consumo de energía y cobertura.
- Lleva telemetría que Plaspy mapea en paneles, alertas y reglas de gestión de flotas.

## Cómo detecta Plaspy el protocolo

Plaspy acepta conexiones de dispositivos en un endpoint de red compartido y determina automáticamente el protocolo del rastreador según la conexión entrante y los datos reportados. Cuando un AS500 se apunta al endpoint de Plaspy con la configuración correcta, normalmente no se requiere seleccionar manualmente un protocolo dentro de Plaspy para una ingestión básica.

- El endpoint del servidor de Plaspy es accesible en d.plaspy.com y la IP del servidor es 54.85.159.138.
- Todos los dispositivos en Plaspy usan el mismo puerto y Plaspy detecta automáticamente el protocolo del rastreador.
- Los dispositivos configurados para reportar al endpoint de Plaspy serán identificados y asociados a cuentas cuando presenten información de identidad válida.
- El AS500 soporta transportes comunes, por lo que la configuración estándar hacia el endpoint de Plaspy suele ser suficiente para la detección automática.
- Si un dispositivo no aparece, confirme los ajustes de red, la selección del transporte y que el equipo esté reportando a d.plaspy.com o a la IP del servidor de Plaspy.

## Contexto de transporte y conexión

Las elecciones de conexión influyen en la vida útil de la batería, la puntualidad y la resiliencia. El AS500 soporta transportes IP comunes y puede dirigirse a Plaspy usando el mismo puerto que Plaspy emplea para todos los dispositivos. Mantenga el enfoque de la configuración en la alcanzabilidad y la selección del transporte en lugar de los marcos internos del protocolo.

- El dispositivo puede configurarse usando UDP o TCP en el puerto 8888 según soporte y configuración del equipo.
- Los dispositivos pueden apuntarse a d.plaspy.com o a la IP del servidor de Plaspy 54.85.159.138 para la entrega de telemetría.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica el despliegue y las reglas de firewall.
- La selección del transporte (UDP versus TCP) influye en el comportamiento de retransmisión y en los compromisos de energía en unidades AS500 alimentadas por batería.
- El soporte MQTT en el dispositivo puede utilizarse cuando sea apropiado, pero el envío estándar por UDP/TCP a Plaspy es la vía de integración más común.

## Notas sobre compatibilidad del protocolo

- Las actualizaciones de firmware pueden cambiar intervalos de reporte, campos disponibles o el comportamiento del transporte; confirme siempre la versión de firmware al validar compatibilidad.
- Las variantes regionales y las revisiones de hardware pueden activar o desactivar radios o funciones específicas que afectan qué datos envía el dispositivo.
- La selección de transporte (UDP, TCP, MQTT) debe coincidir con la configuración del AS500 y con las políticas de red del despliegue.
- El comportamiento de cola local varía según el firmware y afecta cómo se entregan los eventos históricos después de restaurar la conectividad.
- Puede ser necesario usar herramientas de configuración del fabricante o ADM para ajustar el servidor de reporte y los parámetros de transporte para Plaspy.
- Valide el comportamiento del dispositivo consultando la documentación del fabricante y probando equipos en una cuenta de Plaspy de staging antes de despliegues a gran escala.

## Por qué es importante entender el protocolo

Comprender cómo se comunica el AS500 con Plaspy ayuda a asegurar una configuración correcta, un uso eficiente de la batería y un comportamiento predecible en producción. Tener claridad sobre el protocolo y las opciones de transporte reduce el tiempo de resolución de problemas y mejora la confianza en la integridad de la telemetría.

- Ayuda a determinar intervalos de reporte y perfiles de energía apropiados para maximizar la vida útil de la batería.
- Facilita el diagnóstico de reportes perdidos verificando transporte, endpoint y comportamiento de entrega en cola.
- Apoya la planificación de red, incluidas reglas de firewall y la resolución DNS para d.plaspy.com.
- Aclara expectativas para posicionamiento en interiores mediante escaneo Wi Fi y telemetría BLE junto con GNSS.
- Sirve para coordinar actualizaciones de firmware y cambios de configuración con las expectativas de ingestión de Plaspy.

## Por qué usar Plaspy con este protocolo

Emparejar el AS500 con Plaspy permite a las organizaciones convertir telemetría robusta y de bajo consumo en datos de ubicación y eventos accionables para operaciones, seguridad y logística. El modelo de endpoint compartido de Plaspy y la detección automática de protocolos reducen la complejidad de configuración para flotas que despliegan muchos dispositivos y variantes.

Plaspy ofrece ingestión centralizada y mapeo de la telemetría del AS500 para que los equipos puedan crear alertas, geocercas y reglas de reporte, aprovechando la larga autonomía en espera del AS500, la combinación GNSS más Wi Fi y BLE, y la cola local. Conozca más sobre Plaspy y cómo maneja las integraciones de dispositivos en https://www.plaspy.com. Para los detalles más recientes sobre protocolos específicos de dispositivos, comportamiento de firmware y orientación del fabricante, verifique la documentación en el sitio oficial de ATrack https://www.atrack.com.tw/ . El soporte de protocolo y el comportamiento del dispositivo pueden cambiar con el tiempo, por lo que siempre confirme los detalles antes de despliegues masivos.
