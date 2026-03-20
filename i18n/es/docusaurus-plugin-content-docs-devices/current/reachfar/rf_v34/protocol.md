---
slug: /reachfar/rf_v34/protocol
id: rf_v34-protocol
sidebar_label: Protocol
title: Reachfar - RF-V34 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del rastreador Reachfar RF V34 y su comunicación con Plaspy para monitoreo de ganado
keywords:
  - protocolo Reachfar RF V34
  - protocolo GPS RF V34
  - protocolo rastreador GPS Reachfar
  - rastreadores compatibles con Plaspy
  - Reachfar RF V34 Plaspy
  - protocolo de comunicación RF V34
  - protocolo de rastreo RF V34
  - protocolo rastreador GPS para ganado
  - protocolo 2G GPRS para rastreadores
  - compatibilidad de rastreadores GPS con Plaspy
---

# Reachfar - Protocolo RF-V34

Esta página describe el contexto público del protocolo para usar el rastreador Reachfar RF-V34 con la plataforma Plaspy. Se enfoca en cómo el dispositivo se comunica en términos generales, cómo Plaspy recibe y reconoce los reportes, y qué elementos de configuración suelen ser necesarios para integrar exitosamente el dispositivo en Plaspy para seguimiento de ganado y activos remotos.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando un dispositivo envía reportes al endpoint de Plaspy. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que este documento se mantiene en un nivel de contexto de protocolo y recomienda verificar los detalles específicos con la documentación de Reachfar.

## Visión general del protocolo

El RF-V34 utiliza datos celulares para transmitir información de ubicación y telemetría a un servidor remoto. El protocolo de reporte del dispositivo cubre identificación, cargas útiles de ubicación obtenidas por GPS, WiFi y LBS, estado de batería y solar, y telemetría operativa básica que Plaspy ingiere para mostrar ubicación en tiempo real, alertas y registros históricos.

- Permite que el rastreador se identifique y entregue ubicación y telemetría a la plataforma en la nube.
- Transporta datos de ubicación por GPS, WiFi y LBS para que Plaspy pueda evaluar la calidad de la posición y ofrecer mapas e informes.
- Transmite señales de salud del dispositivo como nivel de batería y estado de carga solar para planificación de autonomía.
- Soporta reportes de eventos como movimiento, disparos de geocercas y actualizaciones periódicas de latido.
- Actúa como el vínculo entre la detección en el dispositivo y los paneles y notificaciones de Plaspy.

## Cómo Plaspy detecta el protocolo

Plaspy recibe reportes entrantes en un endpoint y puerto compartidos y usa el contenido de esas conexiones para determinar automáticamente el protocolo del rastreador. En la mayoría de las implementaciones, un RF-V34 correctamente configurado comenzará a reportar sin que usted deba seleccionar manualmente un protocolo dentro de Plaspy.

- Plaspy detecta automáticamente el protocolo del rastreador cuando un dispositivo informa al endpoint de Plaspy.
- Generalmente no es necesario seleccionar un protocolo en Plaspy si el dispositivo está configurado para enviar datos al servidor de Plaspy.
- Una identificación correcta del dispositivo y intervalos de reporte adecuados ayudan a Plaspy a clasificar los mensajes para su procesamiento correcto.
- Plaspy trata las conexiones entrantes de forma consistente entre los dispositivos soportados, lo que simplifica el proceso de incorporación.
- Al solucionar problemas, confirmar el destino de reporte y el transporte del dispositivo es el primer paso.

## Transporte y contexto de conexión

El RF-V34 transmite datos sobre GPRS celular usando TCP/IP. El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 según el soporte del equipo y la configuración. Para compatibilidad con Plaspy, configure el dispositivo para apuntar al dominio o IP del servidor de Plaspy y use el puerto compartido de Plaspy.

- El dominio del servidor Plaspy para el reporte de dispositivos es d.plaspy.com.
- La IP del servidor Plaspy disponible para configuración directa es 54.85.159.138.
- El puerto utilizado por Plaspy para todos los dispositivos soportados es 8888.
- Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888 según la red local y ajustes del equipo.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la configuración y el enrutamiento hacia el servidor.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar la frecuencia de los mensajes, los campos de telemetría disponibles o la semántica exacta de ciertos reportes.
- Las revisiones de hardware o variantes regionales pueden alterar los tipos de transporte soportados o los modos de posicionamiento disponibles.
- Las herramientas de configuración del fabricante o los ajustes por defecto pueden requerir que se ajuste el APN, el destino de reporte y el tipo de transporte.
- El entorno de red y la cobertura 2G pueden afectar la frecuencia con la que el dispositivo sube datos con éxito a Plaspy.
- Valide siempre los ajustes de reporte y los identificadores del dispositivo después de una actualización de firmware o al cambiar de región.
- Confirme el registro del dispositivo y la visibilidad del IMEI en Plaspy tras los primeros reportes para asegurar un mapeo correcto del dispositivo.

## Por qué es importante entender el protocolo

Conocer cómo funciona el protocolo del rastreador ayuda a administradores e integradores a configurar los dispositivos correctamente, resolver problemas de conexión e interpretar la calidad de los datos de ubicación y telemetría que se muestran en Plaspy. Entender el protocolo reduce el tiempo de incorporación y mejora la confiabilidad a largo plazo de los activos monitoreados.

- Asegura ajustes correctos de destino y transporte para que los reportes lleguen a Plaspy de forma fiable.
- Ayuda a interpretar los campos de telemetría en los paneles de Plaspy y a definir intervalos de reporte adecuados.
- Facilita la resolución de problemas cuando los dispositivos no aparecen en Plaspy al acotar las causas a red, transporte o firmware.
- Apoya decisiones informadas sobre ciclos de batería y carga solar según la frecuencia de envío de datos.
- Orienta los pasos de verificación tras actualizaciones de firmware o cambios de configuración.

## Por qué usar Plaspy con este protocolo

Usar el RF-V34 con Plaspy ofrece una forma directa de centralizar la telemetría de ganado y activos remotos en una sola plataforma para monitoreo, alertas y análisis histórico. La larga autonomía del RF-V34 y su carga solar lo hacen adecuado para despliegues en pasturas distribuidas donde las visitas de servicio frecuentes no son deseables, mientras que Plaspy se encarga de la ingesta y presentación de posición y telemetría del dispositivo.

Para saber más sobre cómo Plaspy funciona con rastreadores compatibles y explorar las funciones de la plataforma, visite https://www.plaspy.com. Para información actualizada sobre el protocolo específico del dispositivo y el comportamiento del firmware, verifique los detalles con el fabricante en https://www.reachfargps.com/ ya que el soporte e implementación del protocolo pueden cambiar con el tiempo.
