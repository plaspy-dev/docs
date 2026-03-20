---
slug: /tk_star/tk820/protocol
id: tk820-protocol
sidebar_label: Protocol
title: TK-Star - TK820 Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo TK-Star TK820 para uso con Plaspy, configuración de conexión y notas de compatibilidad
keywords:
  - Protocolo TK-Star TK820
  - Protocolo GPS TK820
  - TK-Star TK820 Plaspy
  - Protocolo de comunicación TK820
  - Protocolo de rastreo TK820
  - Protocolo de rastreador GPS TK-Star
  - Rastreadores compatibles con Plaspy
  - Protocolo GPS 4G
  - Protocolo de rastreo de activos
  - Protocolo de rastreo vehicular
---

# TK-Star - Protocolo TK820

Esta página describe el contexto público de comunicación para usar el TK-Star TK820 con Plaspy. Se centra en cómo el dispositivo informa ubicaciones y eventos a Plaspy y en qué aspectos de la conexión son relevantes para una integración exitosa, sin revelar detalles privados de implementación.

Plaspy utiliza ajustes de conexión compartidos para los dispositivos soportados y detecta automáticamente el protocolo de cada rastreador cuando los dispositivos están correctamente apuntados al endpoint de Plaspy. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que aquí nos enfocamos en un contexto práctico y consideraciones de compatibilidad generales.

## Visión general del protocolo

El protocolo que usa un rastreador es el mecanismo por el cual se identifica ante un servidor, transmite datos GNSS y de sensores, y reporta eventos como SOS, movimiento o violaciones de geocerca. En el caso del TK820, el protocolo permite a Plaspy recibir posiciones multi-constelación GNSS así como posiciones asistidas por LBS y WiFi, alertas por vibración y movimiento, y notificaciones SOS para soporte de monitoreo en tiempo real y almacenamiento histórico de rutas.

- Permite al dispositivo transmitir posiciones, marcas de tiempo y campos básicos de estado a Plaspy para mapeo y reproducción.
- Transporta notificaciones de eventos como pulsaciones del botón SOS, alertas por vibración o movimiento, rupturas de geocerca y avisos de batería baja.
- Permite al servidor correlacionar la telemetría periódica con la identidad del dispositivo para que Plaspy pueda almacenar el historial de rutas y mostrar alertas accionables.
- Soporta tanto reportes continuos en tiempo real como reportes menos frecuentes tipo heartbeat o en modo sueño según la configuración del dispositivo y los modos de energía.
- Actúa como el contrato público entre dispositivo y servidor; el firmware del fabricante determina los campos exactos y la cadencia de reporte.

## Cómo detecta Plaspy el protocolo

Plaspy recibe conexiones entrantes en un endpoint de servidor compartido y determina el manejo apropiado para cada dispositivo sin requerir que los usuarios elijan manualmente un protocolo en la mayoría de los casos. Cuando un TK820 está configurado para reportar a Plaspy, la plataforma inspecciona la identificación del dispositivo entrante y el patrón de mensajes para emparejarlo con el parser y la canalización de procesamiento correctos.

- Plaspy escucha en el mismo endpoint de servidor para todos los dispositivos soportados y detecta automáticamente el protocolo del rastreador.
- Los dispositivos deben configurarse para reportar al dominio del servidor Plaspy d.plaspy.com o a la IP 54.85.159.138 para que la plataforma reciba la telemetría directamente.
- Si el dispositivo está correctamente apuntado al endpoint de Plaspy, por lo general no es necesaria la selección manual del protocolo en Plaspy.
- La detección automática acelera la incorporación y reduce errores de configuración cuando los dispositivos usan comportamiento de reporte estándar.
- Para solucionar problemas, confirmar que el dispositivo envía al endpoint y puerto correctos de Plaspy suele ser el primer paso práctico.

## Transporte y contexto de conexión

El transporte de la conexión y el destino son importantes porque determinan cómo el TK820 alcanza Plaspy. El TK820 puede configurarse para usar reporte por UDP o TCP dependiendo del firmware y las opciones de provisión. Plaspy acepta ambos tipos de transporte en el puerto compartido, por lo que la configuración del dispositivo debe coincidir con los requisitos de red y confiabilidad del despliegue.

- El dominio del servidor Plaspy para reporte de dispositivos es d.plaspy.com y la IP del servidor es 54.85.159.138.
- El puerto del servidor que utiliza Plaspy para el reporte de dispositivos es 8888 y todos los dispositivos en Plaspy usan el mismo puerto.
- El TK820 puede configurarse para usar UDP o TCP en el puerto 8888 según el soporte y la configuración del dispositivo.
- Usar UDP puede reducir la sobrecarga en reportes cortos y frecuentes, mientras que TCP ofrece una opción orientada a conexión cuando el dispositivo lo soporta.
- Asegúrese de que el APN y las reglas de firewall salientes permitan que el rastreador alcance d.plaspy.com o la dirección IP en el puerto 8888 desde la red del dispositivo.

## Notas de compatibilidad del protocolo

- El comportamiento del protocolo puede variar según la versión de firmware; revisiones de firmware más nuevas o regionales pueden cambiar campos de reporte o nombres de eventos.
- Revisiones de hardware o variantes regionales pueden producir diferencias sutiles en qué constelaciones GNSS o métodos de posicionamiento asistido se reportan.
- La selección de transporte (UDP versus TCP) es una elección de configuración del dispositivo y debe alinearse con cómo fue aprovisionado el rastreador en la red móvil y en campo.
- Personalizaciones del fabricante o provisiones en centros de servicio pueden habilitar o deshabilitar ciertos reportes de eventos como enrutamiento de voz SOS o alertas por vibración.
- Confirme que el dispositivo esté apuntando al endpoint de Plaspy (d.plaspy.com o 54.85.159.138) y usando el puerto 8888 para evitar problemas de conectividad.
- Siempre valide la compatibilidad contra la documentación del fabricante más actual cuando tenga dudas.

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación ayuda a instaladores y administradores a configurar correctamente el TK820, resolver problemas de conectividad y garantizar la confiabilidad a largo plazo cuando el dispositivo reporta a Plaspy.

- Verificar que el dispositivo esté configurado para reportar a d.plaspy.com o 54.85.159.138 en el puerto 8888 elimina una fuente común de problemas de incorporación.
- Saber si el dispositivo usa UDP o TCP ayuda a diagnosticar fallas relacionadas con la red y reglas de firewall.
- Estar al tanto de la variación de firmware y hardware orienta expectativas realistas sobre qué eventos y campos el rastreador enviará a Plaspy.
- Comprender la cadencia de reporte y los modos de energía ayuda a equilibrar la vida de batería con las necesidades de visibilidad en tiempo real.
- El conocimiento del protocolo facilita la comunicación con fabricantes o distribuidores cuando se solicitan actualizaciones de firmware o aclaraciones sobre comportamiento.

## Por qué usar Plaspy con este protocolo

Usar el TK-Star TK820 con Plaspy ofrece una solución práctica para organizaciones y familias que necesitan visibilidad de ubicación fiable, alertas y datos históricos de rutas. Plaspy ingiere los datos GNSS multi-constelación del TK820 junto con las posiciones asistidas por LBS y WiFi, convierte las notificaciones de eventos en alertas accionables y almacena el historial de rutas para su revisión posterior tanto en la app como en el panel web.

To learn more about Plaspy and how it integrates with devices like the TK820, visit https://www.plaspy.com. For the latest device specific protocol details, firmware notes, or hardware revisions, verify current information on the manufacturer site at https://www.tk-star.com/ since protocol support and firmware behavior can change over time.
