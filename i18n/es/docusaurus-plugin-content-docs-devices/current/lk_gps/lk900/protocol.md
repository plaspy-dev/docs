---
slug: /lk_gps/lk900/protocol
id: lk900-protocol
sidebar_label: Protocol
title: LK-GPS - LK900 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo LK GPS LK900 y su comunicación con Plaspy para seguimiento confiable de flotas y activos
keywords:
 - protocolo LK GPS LK900
 - rastreador GPS LK900
 - protocolo LK GPS Plaspy
 - protocolo de comunicación LK900
 - protocolo de seguimiento LK900
 - rastreo de vehículos LK900
 - gestión de flotas LK900
 - compatibilidad LK900 Plaspy
 - guía de protocolo de rastreadores GPS
 - rastreo de activos LK900
---

# LK-GPS - Protocolo LK900

Esta página describe el contexto público del protocolo para utilizar la familia de rastreadores LK-GPS LK900 con Plaspy. Se enfoca en cómo el dispositivo se comunica a alto nivel, qué puntos de conexión expone Plaspy y qué aspectos considerar al integrar las variantes LK900 A, B o C para el rastreo de vehículos, equipos o cargas. La orientación aquí está pensada para usuarios técnicos, instaladores y gestores de flota que requieren una visión clara de la comunicación entre dispositivo y plataforma sin entrar en detalles privados de implementación.

Plaspy emplea ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el equipo reporta a la plataforma. Para Plaspy, el endpoint del servidor es d.plaspy.com y la IP del servidor es 54.85.159.138 con puerto 8888. Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888 según sus capacidades y la preferencia del instalador. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que debe validarse la información específica del equipo con la documentación oficial del fabricante.

## Resumen del protocolo

El protocolo utilizado por la familia LK900 define cómo el rastreador reporta posición, estado y alarmas a un servidor remoto como Plaspy. A un nivel público esto incluye identificar el dispositivo ante el servidor, transmitir la ubicación GPS y la información de conectividad GSM, y enviar notificaciones de eventos que activan funciones de la plataforma como geocercas y alertas.

- Permite al LK900 enviar datos de ubicación periódicos y basados en eventos a Plaspy
- Transporta identificadores del dispositivo y estado básico para que Plaspy asocie los reportes con un activo
- Transmite tipos de eventos que respaldan alertas de geocerca, exceso de velocidad, movimiento y batería baja
- Permite al rastreador entregar puntos históricos de ruta para verificación y reproducción
- Soporta tanto UDP como TCP para que el equipo pueda configurarse según el entorno de red

## Cómo detecta Plaspy el protocolo

Plaspy acepta reportes entrantes en un endpoint y puerto compartidos y usa esa información para reconocer el formato del rastreador que está reportando. En la mayoría de los casos, los instaladores no necesitan seleccionar manualmente un protocolo en Plaspy siempre que el LK900 esté configurado para reportar al endpoint de Plaspy.

- Plaspy recibe el tráfico de los dispositivos en d.plaspy.com y 54.85.159.138 en el puerto 8888
- El mismo puerto se utiliza para todos los dispositivos soportados por Plaspy, lo que simplifica la configuración
- Los equipos pueden configurarse para usar UDP o TCP en el puerto 8888 según su soporte de red
- Si el dispositivo está apuntando al endpoint de Plaspy, la detección del protocolo es automática
- Una configuración correcta de los identificadores del dispositivo en el equipo ayuda a que Plaspy asocie los mensajes entrantes al activo correcto

## Transporte y contexto de conexión

Las elecciones de transporte y la dirección del servidor determinan cómo el LK900 establece la comunicación con Plaspy, pero no cambian el papel público del protocolo. El rastreador puede configurarse para enviar sus reportes por UDP o TCP, y puede apuntar a Plaspy por nombre de dominio o por dirección IP según la preferencia del instalador o las condiciones locales de DNS.

- Los dispositivos LK900 pueden configurarse para usar UDP o TCP en el puerto 8888
- El dominio de Plaspy d.plaspy.com y la IP 54.85.159.138 son destinos válidos para el envío de reportes
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que reduce diferencias de configuración entre modelos
- La fiabilidad de la red y el comportamiento de NAT pueden influir en si UDP o TCP es preferible para un despliegue concreto
- Confirme que el APN de la red móvil y las reglas de salida de puertos permitan el tráfico hacia el endpoint de Plaspy en el puerto 8888

## Notas de compatibilidad del protocolo

- Las revisiones de firmware entre las variantes LK900 A, B y C pueden alterar el tiempo de mensajes y las funciones disponibles
- Las revisiones de hardware o diferencias regionales del modelo pueden cambiar los transportes soportados o el conjunto de eventos
- Ajustes del fabricante, como intervalos de reporte por defecto o gestión de energía, afectan la frecuencia de envío de datos
- La selección entre UDP o TCP puede influir en las garantías de entrega y en el consumo de batería según el caso de uso
- Verifique siempre los identificadores del equipo y los parámetros de reporte al registrar un LK900 en Plaspy
- Consulte la documentación oficial de LK GPS para comandos y comportamientos específicos de firmware antes de realizar cambios de configuración

## Por qué es importante entender el protocolo

Conocer los aspectos públicos del protocolo de comunicación LK900 ayuda a asegurar una configuración fiable, una interpretación correcta de los eventos y un comportamiento predecible en Plaspy. Este entendimiento reduce el tiempo de puesta en marcha y facilita el diagnóstico cuando los dispositivos no aparecen en la plataforma como se espera.

- Confirma que el dispositivo está apuntando al endpoint y puerto correctos de Plaspy
- Ayuda a resolver problemas comunes como reportes faltantes o mapeo incorrecto de activos
- Informa la decisión sobre el transporte para equilibrar fiabilidad y duración de batería
- Permite a los integradores interpretar qué eventos del dispositivo aparecerán en los paneles y alertas de Plaspy
- Facilita la validación de que la versión de firmware y la variante del modelo cumplen los requisitos de la organización

## Por qué usar Plaspy con este protocolo

Usar el rastreador LK900 con Plaspy ofrece a las organizaciones visibilidad sobre la ubicación, movimiento y estado de los activos mediante una plataforma consolidada de rastreo. La familia LK900 ofrece opciones de larga duración en espera, resistencia IP67 al agua y montaje magnético para despliegues flexibles, mientras que Plaspy gestiona a escala los datos de ubicación y eventos entrantes, presentándolos mediante herramientas de monitoreo y alertas adecuadas para flotas, alquileres y protección de activos.

Para saber más sobre cómo Plaspy funciona con dispositivos como el LK900 visite https://www.plaspy.com. Para obtener los detalles más recientes a nivel de protocolo de dispositivo, notas de firmware e información específica por modelo consulte el sitio del fabricante en https://www.lk-gps.com ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
