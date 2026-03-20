---
slug: /xirgo/xt_3200/protocol
id: xt_3200-protocol
sidebar_label: Protocol
title: Xirgo - XT-3200 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público para integrar el rastreador OBDII Xirgo XT 3200 con los servidores de Plaspy y la configuración de conexión compartida
keywords:
  - Protocolo Xirgo XT 3200
  - Protocolo GPS Xirgo XT 3200
  - Compatibilidad Xirgo XT 3200 Plaspy
  - Rastreador OBDII XT 3200
  - Protocolo de rastreo vehicular
  - Seguimiento de flotas Xirgo
  - Comunicación de rastreador GPS
  - Comportamiento de conductor XT 3200
  - Compatibilidad de dispositivos Plaspy
  - Protocolo de rastreador Xirgo
---

# Xirgo - Protocolo XT-3200

Esta página ofrece el contexto público del protocolo para usar el rastreador GPS Xirgo XT-3200 con Plaspy. Se centra en cómo el equipo comunica datos del vehículo y de conducción al platforma Plaspy y en los ajustes de conexión que encontrará al apuntar el dispositivo a los servidores de Plaspy.

Plaspy emplea configuraciones de conexión compartidas para los dispositivos soportados y detecta automáticamente el protocolo cuando un equipo reporta a la plataforma. El comportamiento exacto del protocolo y los datos disponibles pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante; por ello esta página describe el contexto de comunicación público y no detalles internos de firmware.

## Visión general del protocolo

El protocolo del XT-3200 define cómo el dispositivo envía ubicación, estado del vehículo y eventos a un servidor remoto para que Plaspy pueda recibir y mostrar esa información. En términos generales, el protocolo permite que el equipo se identifique, comparta actualizaciones telemétricas y, cuando aplica, soporte comandos remotos.

- Envía telemetría periódica y por eventos, como posición GPS y estados del vehículo derivados del OBDII
- Proporciona identidad del dispositivo e información de sesión para que Plaspy asocie los reportes con el activo correcto
- Entrega marcadores de eventos útiles para análisis de comportamiento del conductor, como ignición, frenadas bruscas y aceleraciones rápidas
- Permite acuse de recibo o respuestas desde el servidor cuando el dispositivo y el transporte soportan comunicación bidireccional
- Traduce señales a nivel vehicular del interfaz OBDII a telemetría adecuada para monitoreo de flotas

## Cómo Plaspy detecta el protocolo

Plaspy recibe reportes entrantes en un único endpoint y puerto compartidos y detecta automáticamente el protocolo de cada dispositivo. En la mayoría de los casos, un XT-3200 configurado correctamente que apunte al endpoint de Plaspy será reconocido sin necesidad de seleccionar manualmente el protocolo en la plataforma.

- Plaspy acepta reportes de dispositivos en el dominio compartido d.plaspy.com y también en la IP pública 54.85.159.138
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la configuración
- Plaspy detectará el protocolo del rastreador cuando el dispositivo envíe sus mensajes iniciales al endpoint de Plaspy
- Normalmente usted no necesita elegir un protocolo en la interfaz de Plaspy si el rastreador está configurado para reportar al servidor de Plaspy
- Si un dispositivo no parece reportar correctamente, verificar la configuración del servidor, el transporte y el firmware del equipo debe ser el primer paso

## Transporte y contexto de conexión

El XT-3200 puede configurarse para usar UDP o TCP según las capacidades del dispositivo y la preferencia del instalador. Para la integración con Plaspy, el contexto de conexión es intencionalmente simple: un puerto compartido y un endpoint de Plaspy accesible.

- Los dispositivos pueden configurarse para reportar a d.plaspy.com o directamente a 54.85.159.138
- El equipo puede usar UDP o TCP en el puerto 8888 según la configuración del rastreador
- Plaspy utiliza el puerto 8888 para todos los dispositivos soportados, lo que mantiene consistencia en despliegues y reglas de firewall
- La confiabilidad de la red y el transporte elegido afectan las características de entrega, pero no cambian el rol público del protocolo
- Confirme que su red permite tráfico saliente hacia el endpoint y puerto de Plaspy para un reporte correcto

## Notas sobre compatibilidad del protocolo

- La compatibilidad puede variar entre versiones de firmware y revisiones de hardware incluso dentro del mismo modelo XT-3200
- La selección de transporte importa: algunos firmwares prefieren UDP y otros soportan TCP en el mismo puerto
- Configuraciones del fabricante o variantes regionales del firmware pueden alterar qué campos telemétricos se envían
- Capacidades plug and play del OBDII, como estado de ignición y eventos del acelerómetro, son características del modelo, pero su reporte puede diferir
- Valide el comportamiento del dispositivo y la telemetría disponible con las notas de la versión del firmware cuando sea posible
- Al solucionar problemas, confirme que el dispositivo apunte a d.plaspy.com o a 54.85.159.138 en el puerto 8888 y que el transporte coincida con la configuración del equipo

## Por qué es importante entender el protocolo

Comprender de forma práctica el protocolo de comunicación del rastreador ayuda a asegurar una incorporación exitosa, telemetría confiable y una resolución de problemas más rápida al usar el XT-3200 con Plaspy. Saber cómo se conecta el dispositivo y qué se espera que envíe reduce el tiempo de configuración y favorece operaciones de flota consistentes.

- Acelera la puesta en marcha aclarando los ajustes requeridos de servidor y transporte
- Facilita el diagnóstico de telemetría faltante o incompleta al alinear expectativas con lo que el dispositivo reporta
- Orienta decisiones de actualización de firmware que pueden agregar o cambiar campos reportados
- Informa la configuración de red y firewall para que los dispositivos puedan alcanzar el endpoint de Plaspy
- Apoya una comunicación informada con el proveedor del dispositivo cuando el comportamiento difiere de lo esperado

## Por qué usar Plaspy con este protocolo

Usar el XT-3200 con Plaspy proporciona a las organizaciones una forma práctica de recopilar telemetría basada en OBDII y movimiento para visibilidad del vehículo, monitoreo del comportamiento del conductor y supervisión rutinaria de la flota. El factor plug and play del XT-3200 combinado con la detección automática de protocolo de Plaspy y el uso consistente de puertos simplifica el despliegue en flotas mixtas.

Si desea saber más sobre Plaspy y cómo la plataforma maneja el reporte de dispositivos y los datos de flota, visite https://www.plaspy.com. Para los detalles más recientes específicos del protocolo del dispositivo, notas de firmware y documentación de hardware, consulte el sitio del fabricante en https://xirgo.com/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
