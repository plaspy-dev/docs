---
slug: /tzone/tz_avl02/protocol
id: tz_avl02-protocol
sidebar_label: Protocol
title: TZone - TZ-AVL02 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del TZone TZ-AVL02 y su comunicación con Plaspy para seguimiento e integración de vehículos
keywords:
  - TZone TZ-AVL02
  - Protocolo TZ-AVL02
  - Rastreador GPS TZone
  - Compatibilidad TZ-AVL02 Plaspy
  - Protocolo de comunicación TZ-AVL02
  - Protocolo de rastreo TZ-AVL02
  - Rastreador vehicular TZone
  - Dispositivos compatibles con Plaspy
  - Rastreador GPS GPRS TZ-AVL02
  - Rastreo de flotas TZ-AVL02
---

# TZone - Protocolo TZ-AVL02

Esta página ofrece el contexto público del protocolo para usar el rastreador GPS/GSM/GPRS TZone TZ-AVL02 con Plaspy. Describe cómo el dispositivo suele comunicarse con una plataforma de rastreo en la nube, explica el papel del protocolo de reporte del rastreador y señala consideraciones prácticas para la integración con Plaspy sin exponer detalles privados o sensibles de implementación.

El TZ-AVL02 es un rastreador compacto para vehículos con módulos GPS y GPRS de alta sensibilidad, antenas externas y múltiples puertos de entrada/salida. Plaspy utiliza configuraciones de conexión compartidas entre los dispositivos compatibles y detecta automáticamente el protocolo del dispositivo cuando este reporta al punto de ingestión de Plaspy. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página se centra en el contexto público y no sensible útil para la configuración y solución de problemas.

## Resumen del protocolo

El protocolo de reporte del rastreador es el conjunto de mensajes y el comportamiento de transporte que usa el TZ-AVL02 para enviar posición, estado e información de eventos a un servidor remoto como Plaspy. En términos generales, el protocolo permite que el dispositivo se identifique, transmita datos de GPS y telemetría, y reciba comandos básicos o acuses de recibo del servidor cuando esto está soportado.

- Proporciona identificación del dispositivo para que Plaspy asocie los reportes entrantes con un rastreador y vehículo específicos.
- Envía coordenadas GPS, hora y telemetría básica para que Plaspy muestre ubicación y estado.
- Incluye reportes de eventos para entradas como SOS, encendido y entradas digitales o analógicas útiles para la gestión de flotas.
- Puede utilizar distintos modos de transporte dependiendo de la configuración del equipo y las condiciones de red.
- Ayuda al servidor a correlacionar mensajes periódicos y aquellos generados por eventos para un historial y seguimiento precisos.

## Detección automática del protocolo por Plaspy

Plaspy recibe tráfico entrante en un punto de red compartido y detecta automáticamente el protocolo del rastreador para enrutar y parsear los mensajes adecuadamente. Cuando el TZ-AVL02 está configurado para reportar a Plaspy, normalmente no es necesaria la selección manual de protocolo dentro de la plataforma.

- Plaspy escucha en el endpoint público d.plaspy.com y en la dirección IP 54.85.159.138 para datos entrantes de rastreadores.
- Todos los dispositivos soportados por Plaspy usan el mismo puerto, lo que simplifica la configuración del equipo y centraliza la ingestión.
- Plaspy acepta conexiones UDP y TCP en el puerto 8888 y procesará los datos recibidos desde el rastreador.
- Si el dispositivo está configurado para apuntar a d.plaspy.com o 54.85.159.138 en el puerto 8888, Plaspy intenta detectar e interpretar el protocolo de forma automática.
- La configuración correcta de red y APN en el dispositivo suele ser requisito previo para que la detección automática funcione correctamente.

## Contexto de transporte y conexión

El contexto de conexión describe cómo el TZ-AVL02 establece la ruta hacia Plaspy y qué opciones de transporte son comúnmente disponibles. Estos detalles ayudan a garantizar que el dispositivo pueda alcanzar de forma fiable el punto de ingestión de Plaspy a través de redes celulares.

- El TZ-AVL02 puede configurarse para usar UDP o TCP para enviar datos al servidor, dependiendo del soporte del dispositivo y de la configuración escogida.
- El servidor público de Plaspy es accesible en d.plaspy.com y en la dirección IP 54.85.159.138 en el puerto 8888.
- El puerto 8888 es el único puerto compartido que Plaspy utiliza para todos los dispositivos soportados, por lo que los ajustes del dispositivo deben apuntar a ese puerto para el reporte.
- Consideraciones de red como la configuración del APN, los puertos salientes permitidos en la SIM y reglas de firewall del operador o la red local pueden afectar la conectividad.
- Use el modo de transporte soportado y documentado por el firmware del dispositivo; cambiar entre UDP y TCP puede modificar las características de entrega sin alterar el punto de conexión de Plaspy.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden introducir cambios sutiles en el tiempo de mensajes, conjuntos de campos o características opcionales; confirme la compatibilidad con la versión de firmware de su equipo.
- Las revisiones de hardware o variantes de fábrica pueden diferir en I/O disponible o comportamiento de ciertos eventos, por lo que la revisión de hardware debe considerarse al revisar notas de protocolo.
- Las interfaces de configuración del fabricante pueden nombrar el transporte y los ajustes del servidor con etiquetas distintas; asegúrese de que el host del servidor esté establecido en d.plaspy.com o en la IP 54.85.159.138 y el puerto en 8888.
- Algunas implementaciones prefieren TCP para entrega garantizada, mientras que otras usan UDP para reducir sobrecarga; consulte el manual del dispositivo para elegir el transporte más adecuado para su caso de uso.
- La detección automática de Plaspy cubre la mayoría de implementaciones comunes, pero confirmar el comportamiento de reporte del dispositivo en una prueba controlada ayuda a evitar sorpresas en producción.
- Valide siempre las funciones críticas como reporte SOS, eventos de geocerca y comportamiento de entradas después de cualquier actualización de firmware o cambio de configuración.

## Por qué es importante conocer el protocolo

Conocer el protocolo de reporte ayuda a administradores e integradores a configurar, monitorear y solucionar problemas de los dispositivos TZ-AVL02 de manera más efectiva cuando usan Plaspy. Tener claridad sobre cómo el dispositivo se conecta y reporta reduce el tiempo de despliegue y mejora la confiabilidad operativa.

- Asegura que el dispositivo esté configurado para apuntar a d.plaspy.com o 54.85.159.138 y use el puerto 8888 para que Plaspy reciba los datos.
- Facilita el diagnóstico de problemas de conectividad al confirmar la selección de transporte (UDP vs TCP), la configuración APN y la dirección del servidor.
- Permite verificar fácilmente que eventos como SOS, encendido o cambios en entradas se estén reportando y interpretando correctamente en Plaspy.
- Ayuda a planificar la escala de la flota entendiendo la frecuencia de reporte del dispositivo y su interacción con el uso de datos y la ingestión en el servidor.
- Apoya prácticas seguras para actualizaciones de firmware al señalar las áreas que deben volver a verificarse tras una actualización.

## Por qué usar Plaspy con este protocolo

Usar el TZ-AVL02 con Plaspy ofrece a las organizaciones una vía sencilla para integrar un rastreador GPS compacto y sensible en una plataforma moderna de gestión de flotas. El punto de ingestión centralizado de Plaspy y la detección automática de protocolos reducen la complejidad de configuración, permitiendo que los equipos se concentren en flujos operativos como enrutamiento, alertas e informes históricos en lugar de gestionar el protocolo a bajo nivel.

Si desea obtener más información sobre cómo Plaspy maneja la conectividad de dispositivos y los datos de flota, visite https://www.plaspy.com. Para obtener los detalles más actuales sobre el protocolo específico del dispositivo, notas de firmware e instrucciones de configuración para el TZ-AVL02, por favor verifique la información en el sitio del fabricante en http://www.tzonedigital.com/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
