---
slug: /autoseeker/at_11/protocol
id: at_11-protocol
sidebar_label: Protocol
title: Autoseeker - AT-11 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del rastreador GPS Autoseeker AT-11 y cómo se comunica con Plaspy para seguimiento en tiempo real
keywords:
  - protocolo Autoseeker AT-11
  - protocolo GPS Autoseeker AT-11
  - compatibilidad AT-11 Plaspy
  - protocolo de comunicación AT-11
  - Autoseeker GPS Plaspy
  - protocolo rastreador de vehículo AT-11
  - protocolo plug and play rastreador GPS
  - seguimiento de flotas AT-11 Plaspy
  - protocolo telemetría AT-11
  - compatibilidad seguimiento AT-11
---

# Autoseeker - Protocolo AT-11

Esta página resume el contexto público del protocolo para usar el rastreador GPS Autoseeker AT-11 (cargador de auto 4G) con Plaspy. Aquí se describe de forma general cómo el dispositivo se comunica con los servidores de Plaspy, el contexto de conexión relevante al desplegar el AT-11 y consideraciones prácticas para su integración sin exponer detalles sensibles o propietarios del protocolo. El AT-11 es una unidad compacta plug-and-play que combina posicionamiento GPS y Beidou, conectividad global 4G con retroceso a 2G y un cargador integrado para teléfono, mientras reporta telemetría y alarmas para uso en flotas y antirrobo.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando la unidad está configurada para reportar a los endpoints de Plaspy. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página mantiene la discusión a un nivel público y práctico, explicando el contexto de conexión que importa para la integración y la resolución de problemas.

## Visión general del protocolo

El protocolo de reporte del AT-11 es el mecanismo que permite al rastreador enviar posiciones GNSS, estado y eventos de alarma a una plataforma de seguimiento remota como Plaspy. En términos prácticos, el protocolo define cómo el dispositivo se identifica ante el servidor, cómo envía actualizaciones periódicas de ubicación y notificaciones de eventos, y cómo el servidor interpreta esos mensajes para convertirlos en datos telemáticos útiles en mapas en vivo y alertas.

- Permite al dispositivo enviar coordenadas de ubicación, marca temporal, velocidad, rumbo y banderas de alarma a Plaspy.
- Transporta telemetría de eventos como activaciones de geocerca, alarmas por exceso de velocidad, desconexión o pérdida de alimentación, y alertas de movimiento o remolque.
- Permite al servidor asociar los mensajes entrantes con una identidad de dispositivo específica para que los datos aparezcan en la cuenta y el historial correctos.
- Soporta actualizaciones en tiempo real para el rastreo en vivo y la entrega de historiales ordenados por tiempo para reproducción y generación de informes.
- Funciona en conjunto con la capa de transporte del dispositivo para asegurar que los mensajes lleguen de forma fiable al endpoint de Plaspy.

## Cómo Plaspy detecta el protocolo

Plaspy recibe conexiones entrantes en un endpoint compartido y determina automáticamente el protocolo del rastreador basándose en los mensajes recibidos y la información de identidad del dispositivo. En la mayoría de los despliegues no es necesario seleccionar manualmente un protocolo dentro de Plaspy si el AT-11 está configurado para reportar al endpoint de Plaspy de forma correcta.

- El dominio del servidor Plaspy es d.plaspy.com y la IP del servidor es 54.85.159.138. El puerto es 8888.
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que los dispositivos que reportan a la plataforma suelen aparecer sin selección manual de protocolo.
- La plataforma agrupa los datos entrantes por identidad de dispositivo y usa esa identidad para mapear la telemetría y los eventos a cuentas y dispositivos.
- Una configuración correcta del dispositivo y una versión de firmware compatible son los prerequisitos habituales para una detección automática sin fricciones.
- Si el dispositivo no aparece, las comprobaciones más comunes incluyen la dirección del servidor, el tipo de transporte, la conectividad de la SIM y la compatibilidad de firmware.

## Transporte y contexto de conexión

El AT-11 puede configurarse para enviar datos usando los transportes de red estándar que soporta el hardware del rastreador. Plaspy utiliza un único puerto compartido para todos los dispositivos soportados y el AT-11 puede estar configurado para usar UDP o TCP en ese puerto según el soporte del equipo y las elecciones de configuración.

- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888.
- Los dispositivos pueden apuntar a d.plaspy.com o a 54.85.159.138 como endpoint del servidor Plaspy.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la configuración del servidor entre distintos modelos de rastreadores.
- La selección entre UDP y TCP puede afectar el comportamiento de entrega y debe coincidir con la configuración del dispositivo y las condiciones de red.
- Asegúrese de que el proveedor móvil y la SIM del equipo tengan datos activos y que los ajustes APN sean correctos para que la unidad alcance a Plaspy.

## Notas de compatibilidad del protocolo

- Las variaciones de firmware pueden cambiar la frecuencia de mensajes, los campos de telemetría disponibles o el comportamiento de reporte de eventos opcionales.
- Revisiones de hardware pueden introducir diferencias en el desempeño GNSS o en el reporte de sensores que afectan el contenido de la carga útil del protocolo.
- Configuraciones del lado del fabricante o compilaciones regionales de firmware pueden alterar qué eventos se reportan o cómo se presentan los identificadores al servidor.
- La selección de transporte entre UDP y TCP influye en las características de entrega y debe validarse frente a la configuración activa del dispositivo.
- Confirme que la unidad esté configurada para reportar a d.plaspy.com o a la dirección IP de Plaspy y que el puerto esté en 8888.
- Valide siempre el reporte de identidad del dispositivo para que Plaspy pueda asociar automáticamente los mensajes entrantes con el dispositivo y la cuenta correctos.

## Por qué es importante entender el protocolo

Conocer el papel del protocolo de comunicación ayuda a operadores e integradores a configurar correctamente los equipos, resolver problemas de conectividad o de datos y planear cambios de firmware o hardware que afecten la fiabilidad a largo plazo.

- Ayuda a diagnosticar por qué un dispositivo puede no aparecer en Plaspy aun cuando hay alimentación y conectividad de SIM.
- Aclara si la falta de telemetría se debe al transporte, al firmware o a la configuración en vez de a un problema del servidor.
- Informa decisiones sobre elegir UDP frente a TCP según la fiabilidad de la red y los patrones de envío esperados.
- Facilita la validación del comportamiento de alarmas como desconexión, movimiento e ignición ilegal para asegurar notificaciones oportunas.
- Apoya la planificación de actualizaciones de firmware o despliegues de hardware al resaltar el impacto de cambios a nivel de protocolo.

## Por qué usar Plaspy con este protocolo

Usar el Autoseeker AT-11 con Plaspy ofrece a organizaciones y usuarios individuales una forma práctica de combinar un despliegue rápido plug-and-play con una plataforma de seguimiento centralizada. El AT-11 suministra ubicación en tiempo real, alarmas y señales de salud del dispositivo que Plaspy convierte en vistas de mapa en vivo, alertas configurables, reproducción histórica e informes operativos útiles para gestores de flotas, operadores de alquiler, aseguradoras y propietarios de vehículos.

Plaspy simplifica la configuración del servidor al usar un endpoint compartido y un solo puerto para todos los dispositivos y al detectar automáticamente los protocolos de rastreadores cuando los dispositivos reportan correctamente. Para saber más sobre cómo Plaspy puede trabajar con dispositivos Autoseeker y otros rastreadores compatibles, visite https://www.plaspy.com. Por favor verifique los detalles específicos del protocolo del dispositivo, el comportamiento del firmware y las notas de implementación en el sitio del fabricante https://autoseekergps.com/ ya que las funciones y el firmware del dispositivo pueden cambiar con el tiempo.
