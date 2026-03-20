---
slug: /tk_star/tkstar/protocol
id: tkstar-protocol
sidebar_label: Protocol
title: TK-Star - TKSTAR Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del rastreador GPS TK STAR y su comunicación con Plaspy para seguimiento en tiempo real
keywords:
  - protocolo TK Star TKSTAR
  - protocolo GPS TKSTAR
  - rastreador TK Star Plaspy
  - protocolo de seguimiento TKSTAR
  - comunicación GPS TK Star
  - compatibilidad rastreadores Plaspy
  - guía protocolo rastreador GPS
  - rastreo vehicular TKSTAR
  - rastreo de activos TK STAR
  - configuración protocolo TKSTAR
---

# TK-Star - Protocolo TKSTAR

Esta página ofrece una visión pública del contexto de comunicación del rastreador portátil GPS TK-Star TKSTAR cuando se utiliza con la plataforma Plaspy. Se centra en consideraciones generales del protocolo y en cómo los informes del dispositivo proporcionan ubicación, estado y alertas a Plaspy para su monitoreo y uso operativo.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el dispositivo reporta al endpoint de Plaspy. Los dispositivos compatibles pueden configurarse para enviar informes al servidor de Plaspy en d.plaspy.com o a la dirección IP 54.85.159.138 en el puerto 8888. Los dispositivos pueden enviar usando UDP o TCP en el puerto 8888 y Plaspy emplea el mismo puerto para todos los dispositivos. El comportamiento exacto del equipo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que siempre debe revisar la documentación del fabricante para detalles específicos del firmware.

## Visión general del protocolo

El protocolo de un rastreador portátil como el TKSTAR define cómo el equipo se identifica ante un servidor y cómo transmite información de posición y estado. Para integrarse con Plaspy, el protocolo debe entregar ubicaciones utilizables, alertas de movimiento y sensores, y actualizaciones periódicas de estado para que Plaspy pueda presentar historial de ubicaciones, eventos de geocercas y notificaciones de alarma.

- Permite que el TKSTAR envíe coordenadas y marcas de tiempo a Plaspy para el seguimiento en tiempo real.
- Transmite información de estado como nivel de batería, alertas de movimiento y eventos SOS que Plaspy convierte en notificaciones para el usuario.
- Facilita la identificación del dispositivo para que Plaspy asocie los mensajes entrantes con el registro de activo correcto.
- Soporta reportes periódicos y por eventos para que Plaspy muestre trazas históricas y detecte recuperación tras áreas sin cobertura.
- Funciona sobre transporte IP estándar para que los dispositivos apunten al endpoint de Plaspy y reciban manejo unificado.

## Cómo Plaspy detecta el protocolo

Plaspy recibe los informes entrantes de los dispositivos en un endpoint compartido y determina cómo interpretar esos mensajes para convertirlos en registros de ubicación y estado significativos dentro de la plataforma. En la mayoría de los casos, un rastreador bien configurado que reporta a Plaspy no requiere selección manual de protocolo dentro de la plataforma.

- Plaspy escucha en un único endpoint público d.plaspy.com y en la IP 54.85.159.138 para los informes de dispositivos.
- La plataforma usa el puerto 8888 para todos los dispositivos compatibles, lo que simplifica la configuración.
- Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888 según la capacidad del equipo y la preferencia del usuario.
- Cuando un dispositivo reporta al endpoint de Plaspy, Plaspy detecta automáticamente el protocolo del rastreador y asocia los mensajes con el dispositivo correcto.
- Los pasos típicos para el usuario son configurar la dirección de reporte y el transporte del rastreador y dejar que Plaspy gestione la detección del protocolo.

## Transporte y contexto de conexión

Las opciones de conexión determinan cómo el TKSTAR envía sus mensajes a Plaspy y pueden afectar la confiabilidad y el consumo de batería. El TKSTAR soporta reportes basados en IP, y Plaspy ofrece un destino único para recibir esos informes.

- Los dispositivos pueden usar UDP o TCP en el puerto 8888 para enviar actualizaciones a Plaspy.
- Los rastreadores pueden configurarse para reportar a d.plaspy.com o directamente a la IP 54.85.159.138.
- Plaspy utiliza el mismo puerto 8888 en todos los modelos para reducir errores de configuración.
- Elija UDP para menor sobrecarga cuando la pérdida ocasional de paquetes sea aceptable, o TCP cuando se prefiera entrega ordenada y confirmación de conexión, según la capacidad del dispositivo.
- Las condiciones de red, la configuración del APN y los modos de energía del dispositivo influyen en la frecuencia con la que los datos llegan al servidor.

## Notas sobre compatibilidad del protocolo

- Las diferencias en la versión de firmware pueden cambiar qué funciones o mensajes envía el rastreador; verifique la compatibilidad para la revisión de firmware exacta.
- Las revisiones de hardware y las variantes regionales pueden implementar comportamientos de reporte diferentes aunque compartan el mismo nombre de modelo.
- La configuración de servidores del fabricante, el APN y la selección de transporte (UDP o TCP) son fuentes comunes de diferencias en la integración.
- Los modos de ahorro de energía, como sueño o reportes de baja potencia, afectan la frecuencia de paquetes y la información disponible.
- El comportamiento de geocercas y alertas puede implementarse en el dispositivo o en el servidor según la configuración y el firmware.
- Confirme siempre los ajustes de reporte del dispositivo y cualquier nota de firmware con la documentación del fabricante antes de desplegar a gran escala.

## Por qué es importante entender el protocolo

Comprender cómo el TKSTAR se comunica con Plaspy ayuda a asegurar una configuración confiable y agiliza la resolución de problemas cuando los dispositivos no aparecen en línea o cuando faltan eventos esperados. Tener expectativas claras sobre el comportamiento de reporte facilita ajustar la configuración del equipo para optimizar la batería, la frecuencia de actualizaciones y la sensibilidad de alarmas.

- Ayuda a diagnosticar por qué un dispositivo puede no aparecer en Plaspy debido a una configuración incorrecta de transporte o dirección del servidor.
- Orienta sobre la configuración correcta del APN y los intervalos de reporte para equilibrar inmediatez y duración de la batería.
- Aporta criterios para decidir entre usar geocercas en el dispositivo o procesarlas en el servidor.
- Facilita interpretar mensajes de estado y alerta que impactan los flujos operativos.
- Reduce el tiempo en soporte y mejora la confiabilidad a largo plazo para el seguimiento de flotas y activos.

## Por qué usar Plaspy con este protocolo

Usar el TK-Star TKSTAR con Plaspy ofrece a las organizaciones un camino sencillo para recibir actualizaciones de ubicación y estado desde rastreadores portátiles en una plataforma de monitoreo única. El endpoint unificado de Plaspy y la detección automática de protocolos reducen la complejidad de configuración para que los dispositivos puedan comenzar a reportar con un mapeo manual mínimo.

Plaspy consolida los mensajes GPS y de estado entrantes de rastreadores como el TKSTAR, permitiendo a los equipos rastrear activos, recibir alertas SOS y de movimiento, y revisar trazas históricas y eventos de geocerca en un solo lugar. Para obtener más información sobre la configuración de rastreadores y la plataforma, visite el sitio de Plaspy en https://www.plaspy.com. Para detalles específicos de protocolo por dispositivo, notas de firmware y orientación de implementación más actualizados, consulte al fabricante en https://www.tk-star.com/ ya que el comportamiento del protocolo y la implementación del firmware pueden cambiar con el tiempo.
