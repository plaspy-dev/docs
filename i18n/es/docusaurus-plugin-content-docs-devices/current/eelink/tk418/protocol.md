---
slug: /eelink/tk418/protocol
id: tk418-protocol
sidebar_label: Protocol
title: EElink - TK418 Protocol
sidebar_class_name: menu_item_tracker
description: Contexto público del protocolo para integrar el rastreador EElink TK418 con Plaspy mediante ajustes compartidos y detección automática
keywords:
  - protocolo EElink TK418
  - protocolo GPS EElink TK418
  - protocolo de comunicación EElink TK418
  - protocolo de rastreo TK418
  - protocolo EELINK
  - compatibilidad TK418 Plaspy
  - protocolo rastreador GPS EElink
  - rastreo vehicular TK418
  - NB IoT TK418
  - LTE Cat M1 tracker
---

# EElink - Protocolo TK418

Esta página describe el contexto público del protocolo para usar el rastreador EElink TK418 con Plaspy. Se centra en cómo el dispositivo se comunica con Plaspy, qué endpoints debe apuntar y qué papel tiene el protocolo EELINK al enviar posiciones, eventos y telemetría a la plataforma.

Plaspy emplea ajustes de conexión compartidos entre los dispositivos compatibles y detecta el protocolo del rastreador de forma automática. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante; por ello esta página ofrece un panorama general y no detalles internos sensibles del dispositivo.

## Resumen del protocolo

El protocolo del TK418 define cómo el rastreador reporta posiciones GNSS, señales de eventos como encendido ACC y alertas de choque, así como telemetría adicional hacia un servidor remoto. Para la integración con Plaspy, el equipo envía sus mensajes a un endpoint de Plaspy donde la plataforma procesa esos mensajes y los convierte en ubicaciones, eventos y datos de sensores para paneles y alertas.

- El protocolo permite identificar el dispositivo y entregar mensajes de posición y telemetría a Plaspy.
- Transporta información de eventos como estado ACC, alertas de choque o vibración y señales SOS opcionales para atención inmediata.
- La telemetría y las entradas de sensores desde RS232 o GPIO se transmiten a la plataforma para que Plaspy pueda correlacionarlas con ubicación y tiempo.
- Los mensajes en formato EELINK son el formato estándar de integración empleando las unidades TK418 para plataformas telemáticas.
- El protocolo permite que el rastreador opere sobre redes LTE Cat M1, NB IoT y con fallback GSM, manteniendo la capacidad de reporte de eventos esenciales.

## Cómo detecta Plaspy el protocolo

Plaspy recibe el tráfico entrante de dispositivos en un endpoint compartido y detecta automáticamente el protocolo del rastreador para dispositivos configurados correctamente. Cuando un TK418 apunta al endpoint de Plaspy, la plataforma ingerirá sus mensajes EELINK y mapeará los valores a los registros de seguimiento de Plaspy sin que normalmente sea necesario seleccionar el protocolo manualmente.

- El dominio del servidor Plaspy para reportes de dispositivos es d.plaspy.com y la IP pública del servidor es 54.85.159.138.
- Todos los dispositivos en Plaspy usan el mismo puerto y Plaspy detecta automáticamente el protocolo del rastreador.
- En general, usted no necesita elegir un protocolo dentro de Plaspy si el dispositivo está configurado para reportar al endpoint de Plaspy.
- Una identificación y provisión correctas del dispositivo en el lado del tracker ayudan a que Plaspy reconozca el flujo entrante como un feed EELINK de un TK418.
- Si encuentra lagunas en la ingesta o en el mapeo, validar la configuración del dispositivo y la versión de firmware es un primer paso práctico.

## Transporte y contexto de conexión

El contexto de conexión se enfoca en cómo el TK418 alcanza Plaspy más que en las estructuras internas de los paquetes. El TK418 soporta transportes celulares adecuados para despliegues IoT y puede configurarse para reportar al endpoint de Plaspy usando opciones de transporte comunes.

- El dispositivo puede configurarse usando UDP o TCP en el puerto 8888 según el soporte del dispositivo y la configuración escogida.
- Plaspy escucha los reportes de los rastreadores en el puerto 8888 y todos los dispositivos en Plaspy usan el mismo puerto.
- Los dispositivos pueden apuntar al dominio del servidor d.plaspy.com o a la IP del servidor 54.85.159.138 como destino de reporte.
- LTE Cat M1 y NB IoT son las redes principales para el TK418 con fallback GSM; la red celular elegida afecta la conectividad pero no el endpoint de Plaspy.
- La selección de transporte puede cambiarse en el lado del dispositivo; asegúrese de que el transporte configurado en el dispositivo coincida con sus capacidades de red y firmware.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar campos de mensaje, sensores opcionales y el comportamiento de reporte. Revise las notas de la versión de firmware para detalles específicos del dispositivo.
- Las revisiones de hardware u opcionales como módulos de relé o puertos SOS pueden añadir o modificar la telemetría que aparece en Plaspy.
- El TK418 utiliza el protocolo EELINK para la integración con plataformas; pueden existir variantes del protocolo o personalizaciones del fabricante.
- Las diferencias de transporte entre UDP y TCP afectan la semántica de entrega pero no el endpoint de ingesta de Plaspy.
- Confirme que el dispositivo esté configurado para reportar a d.plaspy.com o a 54.85.159.138 en el puerto 8888 para garantizar que Plaspy reciba los mensajes.
- Siempre verifique la configuración del dispositivo y la documentación del fabricante cuando integre un nuevo lote o una variante de firmware.

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación usado por el TK418 ayuda a asegurar una configuración fluida, telemetría confiable y una resolución de problemas más rápida al integrarlo con Plaspy. Saber qué eventos y valores de sensores puede enviar el dispositivo mejorará la precisión de los paneles y las alertas.

- Asegura que se apliquen en el dispositivo los ajustes correctos de servidor y transporte para una entrega fiable a Plaspy.
- Ayuda a correlacionar eventos del dispositivo como ACC o alertas de choque con marcas de tiempo GNSS dentro de Plaspy.
- Facilita el diagnóstico de datos faltantes o valores inesperados de sensores alineando expectativas con las notas del protocolo del fabricante.
- Orienta sobre si se requieren actualizaciones de firmware, cambios de transporte o opciones de hardware para un despliegue dado.
- Mejora la fiabilidad operativa a largo plazo al casar las capacidades del dispositivo con los requisitos de monitoreo y reporte de la flota.

## Por qué usar Plaspy con este protocolo

Usar el TK418 con Plaspy ofrece a gerentes de flota e integradores una vía práctica para capturar ubicación, eventos y telemetría de sensores desde un rastreador IoT compacto. Plaspy ingiere mensajes en protocolo EELINK del TK418 y presenta esos datos en tiempo real para mapeo, alertas e informes históricos, facilitando la supervisión operativa y una respuesta más rápida a incidentes.

Si desea saber más sobre cómo Plaspy maneja la integración de dispositivos y los beneficios para la visibilidad de la flota, visite https://www.plaspy.com. Para obtener los detalles de protocolo más actuales, notas de firmware y orientación de implementación específica del dispositivo, consulte al fabricante en https://www.eelink.com.cn/ ya que el soporte del protocolo y el comportamiento del firmware pueden evolucionar con el tiempo.
