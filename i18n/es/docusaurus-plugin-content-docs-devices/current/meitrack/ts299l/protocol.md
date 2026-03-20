---
slug: /meitrack/ts299l/protocol
id: ts299l-protocol
sidebar_label: Protocol
title: Meitrack - TS299L Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo de Meitrack TS299L y cómo se comunica con Plaspy para seguimiento en tiempo real
keywords:
  - Protocolo Meitrack TS299L
  - Protocolo GPS Meitrack TS299L
  - Meitrack TS299L Plaspy
  - Protocolo de seguimiento TS299L
  - Protocolo rastreador GPS Meitrack
  - Compatibilidad TS299L Plaspy
  - Protocolo de comunicación TS299L
  - Comunicación GPS Meitrack
  - Seguimiento de flotas TS299L
  - Protocolo de telemetría Meitrack
---

# Meitrack - Protocolo TS299L

Esta página describe el contexto público del protocolo para usar el rastreador Meitrack TS299L con Plaspy. Se enfoca en cómo el dispositivo se comunica con Plaspy en términos generales y no sensibles, de modo que gerentes de flota, integradores y personal técnico puedan comprender los puntos de conexión y el comportamiento esperado en el reporte de posición y telemetría.

Plaspy utiliza configuraciones de conexión compartidas entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el equipo reporta a la plataforma. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante. El TS299L está diseñado para instalación plug and play y puede enviar posiciones GNSS, alertas de desconexión, datos de sensores Bluetooth y el estado opcional de puntos de acceso Wi Fi a Plaspy, aunque estará sujeto a las particularidades del firmware del dispositivo.

## Resumen del protocolo

A grandes rasgos, el protocolo de comunicación del TS299L define cómo el rastreador se identifica ante la nube, reporta la posición GNSS y el estado del dispositivo, y reenvía lecturas de sensores y telemetría a un servidor. El contexto público que se presenta aquí explica el papel de esa comunicación sin exponer detalles privados de los parsers o de los paquetes.

- Permite que el TS299L reporte fijaciones GNSS periódicas y marcas de tiempo que Plaspy ingiere para seguimiento en vivo e historial.
- Transporta eventos de estado del dispositivo como alertas instantáneas de desconexión, estado de energía e información de conectividad celular para activar alertas en la plataforma.
- Reenvía lecturas de sensores Bluetooth y la presencia opcional de hotspots para que Plaspy pueda correlacionar la telemetría ambiental con la ubicación del vehículo.
- Acepta señales de gestión remota como indicadores de FOTA para ser asociadas con los registros de dispositivo en Plaspy.
- Proporciona el contexto de direccionamiento y transporte que permite a los dispositivos entregar telemetría de forma confiable a los servidores de Plaspy.

## Cómo detecta Plaspy el protocolo

Plaspy recibe conexiones entrantes en un endpoint compartido y detecta automáticamente el protocolo del rastreador cuando el dispositivo está configurado para reportar a ese endpoint. En la mayoría de despliegues el usuario no necesita seleccionar un protocolo manualmente dentro de Plaspy si el TS299L está correctamente configurado para enviar datos al servidor de Plaspy.

- Plaspy acepta reportes de dispositivos en el mismo puerto para todos los dispositivos soportados, lo que simplifica la configuración y el onboarding.
- Los dispositivos que reportan al endpoint de Plaspy son identificados y asociados a cuentas de cliente para que la detección del protocolo pueda aplicarse automáticamente.
- Cuando un TS299L apunta al endpoint de Plaspy, la plataforma empata los datos entrantes con registros de dispositivos y patrones de protocolo conocidos para su procesamiento.
- La configuración correcta del dispositivo para apuntar al servidor de Plaspy suele ser el paso principal requerido para la detección e ingestión automática.
- Si utiliza filtrado de red o firewalls, permita la conectividad saliente hacia el endpoint de Plaspy para asegurar la detección y el flujo de datos.

## Transporte y contexto de conexión

El contexto de conexión cubre cómo el TS299L envía sus datos a Plaspy más que la estructura interna de los paquetes. El TS299L puede configurarse para usar transporte UDP o TCP según el soporte del dispositivo y la preferencia del operador, y debe apuntar al endpoint de Plaspy para entregar la telemetría.

- Los dispositivos TS299L pueden configurarse para reportar al dominio del servidor de Plaspy d.plaspy.com o a la IP del servidor 54.85.159.138.
- Plaspy escucha en el puerto 8888 y todos los dispositivos en Plaspy usan el mismo puerto para reportes.
- El rastreador puede usar UDP o TCP en el puerto 8888 según la configuración del dispositivo y el comportamiento de la red celular.
- El uso consistente del endpoint y del puerto de Plaspy simplifica el despliegue en flotas mixtas y variantes regionales del dispositivo.
- Asegúrese de que las políticas de red permitan tráfico saliente UDP o TCP hacia el endpoint de Plaspy para evitar problemas de entrega.

## Notas sobre compatibilidad del protocolo

- Las diferencias de firmware entre unidades TS299L pueden afectar las funciones disponibles y los campos exactos de telemetría que se reportan a Plaspy.
- Las revisiones de hardware o las variantes celulares regionales pueden modificar los comportamientos de transporte soportados o funciones opcionales como reporte de hotspot o Bluetooth.
- Seleccionar UDP frente a TCP en el dispositivo afecta la semántica de la conexión, pero no cambia el hecho de que Plaspy recibe datos en el mismo puerto para todos los dispositivos.
- Las instrucciones de configuración del fabricante y los menús determinan cómo el TS299L apunta al endpoint de Plaspy y qué eventos se reportan.
- Valide la compatibilidad y la disponibilidad de funciones para compilaciones de firmware concretas al planear despliegues grandes o flujos de trabajo dependientes de características.
- Al integrar con otros sistemas del vehículo, confirme qué interfaces expone su unidad TS299L y el firmware que tiene instalado.

## Por qué es importante entender el protocolo

Comprender cómo el TS299L se comunica con Plaspy ayuda a administradores e integradores a reducir el tiempo de configuración, diagnosticar problemas de conectividad y mantener telemetría confiable para las operaciones. La claridad sobre transporte, endpoint y tipos de eventos hace que la resolución de problemas sea más eficiente y apoya la confiabilidad a largo plazo de la flota.

- Confirma que los dispositivos apuntan al endpoint correcto para que Plaspy pueda detectar e ingerir datos automáticamente.
- Ayuda a escoger los ajustes de transporte apropiados como UDP o TCP según la confiabilidad de la red y las necesidades del operador.
- Facilita el diagnóstico de eventos perdidos, como alertas de desconexión, revisando la configuración del dispositivo y el comportamiento del firmware.
- Apoya la planificación de actualizaciones de firmware y el despliegue de funciones FOTA para mantener la compatibilidad de los dispositivos con Plaspy.
- Mejora la calidad de los datos asegurando que sensores opcionales y el reporte de hotspots estén habilitados y mapeados a los campos de la plataforma.

## Por qué usar Plaspy con este protocolo

Usar el TS299L con Plaspy ofrece una solución práctica para organizaciones que requieren instalación rápida y flujos de ubicación y telemetría confiables sin cableado complejo. La forma plug and play, el soporte para sensores Bluetooth, el Wi Fi opcional en vehículo y la capacidad FOTA hacen del TS299L una opción flexible para casos de uso como ride hailing, car sharing, flotas ligeras y monitoreo antirrobo, donde es esencial recibir datos oportunos en una plataforma central.

Para más información sobre Plaspy y cómo maneja la integración de dispositivos visite https://www.plaspy.com. Para obtener detalles actualizados del protocolo del dispositivo y del firmware confirme la información con el fabricante en https://www.meitrack.com/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
