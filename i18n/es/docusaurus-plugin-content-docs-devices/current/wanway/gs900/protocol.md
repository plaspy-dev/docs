---
slug: /wanway/gs900/protocol
id: gs900-protocol
sidebar_label: Protocol
title: WanWay - GS900 Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo del rastreador WanWay GS900 y su comunicación con Plaspy para ubicación y reporte de eventos
keywords:
  - WanWay GS900 protocolo
  - WanWay GS900 protocolo GPS
  - WanWay GS900 protocolo de comunicación
  - GS900 compatibilidad Plaspy
  - WanWay protocolo de rastreador
  - GS900 rastreo vehicular
  - GS900 protocolo de telemetría
  - Plaspy integración de dispositivos
  - rastreo de flotas WanWay
  - GPS vehicular Plaspy
---

# WanWay - Protocolo GS900

Esta página describe el contexto público del protocolo para utilizar el rastreador WanWay GS900 con Plaspy. Se centra en cómo el dispositivo informa posición y eventos a la plataforma Plaspy y en qué aspectos debe considerar al configurar la conectividad. El GS900 es un rastreador vehicular inteligente diseñado para monitoreo profesional y seguridad, con conectividad 4G, posicionamiento GPS y BDS, detección de ACC, alarmas por manipulación, alertas de exceso de velocidad, estadísticas de kilometraje y funciones de inmovilización remota que alimentan telemetría y eventos en Plaspy.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el equipo está correctamente configurado para reportar al endpoint de Plaspy. El comportamiento exacto del protocolo puede variar según la versión de firmware del GS900, variantes regionales del hardware y la implementación del fabricante, por lo que la orientación aquí se enfoca en el contexto público y práctico de conexión, no en detalles internos sensibles del dispositivo.

## Descripción general del protocolo

El protocolo del rastreador define los mensajes y señales que el GS900 usa para reportar ubicación, estado y eventos a un servidor remoto como Plaspy. Para los usuarios de Plaspy, los aspectos importantes son la entrega fiable de posiciones y alarmas, un mecanismo para que el rastreador se identifique ante la plataforma y un reporte consistente de eventos para que Plaspy genere actualizaciones en el mapa en tiempo real, alertas e historiales.

- Permite transmisión periódica y por eventos de datos GPS y estado del vehículo al servidor
- Incluye información de identidad para que Plaspy asocie la telemetría entrante con el dispositivo correcto
- Transmite entradas y alertas del vehículo como estado de ACC, alarma por manipulación, notificaciones de exceso de velocidad y actualizaciones de odómetro
- Soporta comandos de control remoto cuando el dispositivo y las políticas de despliegue lo permiten, por ejemplo control de inmovilizador
- Proporciona los datos observables que Plaspy utiliza para poblar mapas en vivo, reproducciones históricas, alertas e informes de telemetría

## Cómo detecta Plaspy el protocolo

Plaspy recibe conexiones entrantes en un endpoint y puerto compartidos y determina automáticamente el protocolo del rastreador en función de los datos que el dispositivo envía. En la mayoría de los casos, usted no necesita seleccionar manualmente un protocolo en Plaspy si el GS900 está configurado para reportar al endpoint de Plaspy con los ajustes de red correctos.

- Plaspy escucha en un puerto común para todos los dispositivos compatibles, por lo que se usa el mismo puerto independientemente del modelo
- Plaspy detecta automáticamente el protocolo del rastreador cuando la telemetría llega al endpoint
- Si el GS900 está apuntando al servidor de Plaspy y configurado correctamente, normalmente no es necesario seleccionar el protocolo en la plataforma
- Una identidad de dispositivo y configuración adecuadas aseguran que la telemetría se atribuya al activo correcto en Plaspy
- Cuando surgen problemas, revisar la configuración del equipo y confirmar que el dispositivo reporta al endpoint de Plaspy es el primer paso de solución

## Transporte y configuración de conexión

La configuración de la conexión es una cuestión de transporte separada del formato de mensajes. El GS900 puede estar configurado para usar UDP o TCP según el soporte y la configuración del equipo, y puede dirigirse a Plaspy por nombre de host o por IP. Estos detalles determinan cómo el dispositivo alcanza Plaspy, pero no describen el formato interno de los mensajes.

- Los dispositivos pueden configurarse para reportar a d.plaspy.com o a la IP del servidor de Plaspy 54.85.159.138
- Plaspy recibe tráfico de dispositivo en el puerto 8888 y se usa el mismo puerto para todos los dispositivos compatibles
- El GS900 puede usar UDP o TCP en el puerto 8888 según la configuración del equipo y los requisitos de la red
- Use el modo de transporte que coincida con su entorno de red y las capacidades del firmware del GS900
- Confirme cualquier APN y configuración celular requerida para que el rastreador establezca una conexión de datos al endpoint de Plaspy

## Notas sobre compatibilidad del protocolo

- La compatibilidad puede variar con las revisiones de firmware del GS900 y variantes regionales del hardware; verifique la versión de firmware al confirmar el comportamiento
- Los valores predeterminados del fabricante para modo de transporte o dirección del servidor pueden diferir según lote o distribuidor; actualice los ajustes para apuntar al endpoint de Plaspy si es necesario
- Al elegir UDP frente a TCP, considere la fiabilidad de la red y el comportamiento NAT del operador en su área de implantación
- Las funciones de control remoto como la activación del inmovilizador dependen del cableado del dispositivo, la configuración y las políticas operativas
- Plaspy detecta automáticamente el protocolo entrante, pero se requiere una identidad de dispositivo correcta y una configuración de reporte adecuada para una integración exitosa
- Consulte siempre la documentación del fabricante para la disponibilidad de comandos específicos del modelo y las notas de la versión de firmware

## Por qué es importante entender el protocolo

Comprender cómo el GS900 se comunica con la plataforma ayuda en la configuración inicial, el diagnóstico de problemas de conectividad y datos, y a asegurar una operación consistente a largo plazo en Plaspy. Tener claridad sobre las opciones de transporte y cómo el dispositivo reporta eventos reduce el tiempo de implementación y facilita el mantenimiento de telemetría confiable.

- Agiliza la incorporación confirmando que los ajustes de reporte del dispositivo coinciden con los detalles de conexión de Plaspy
- Hace que la resolución de fallas sea más eficiente cuando falta telemetría o eventos
- Aclara qué entradas y alarmas del vehículo aparecerán en los informes y alertas de Plaspy
- Ayuda a elegir el modo de transporte apropiado para su entorno de red
- Facilita la planificación de actualizaciones de firmware o la gestión de variantes regionales de los dispositivos que puedan afectar el comportamiento

## Por qué usar Plaspy con este protocolo

Usar el WanWay GS900 con Plaspy proporciona visibilidad centralizada de la ubicación del vehículo, su estado y eventos de seguridad. El GS900 suministra la telemetría que Plaspy necesita para monitoreo en vivo, enrutamiento de alarmas y reproducción histórica, mientras que Plaspy organiza esos datos en paneles, alertas e informes para uso operativo. Esta combinación es adecuada para operaciones de flota, gestión de vehículos de alquiler y despliegues centrados en seguridad que requieren inmovilización remota y detección de manipulación.

Para obtener más información sobre Plaspy y cómo funciona con rastreadores compatibles visite https://www.plaspy.com. Para detalles específicos del protocolo por dispositivo, notas de firmware e información sobre variantes regionales, verifique la información actual en el sitio del fabricante https://www.wanwaytech.net/ ya que el soporte del protocolo y el comportamiento del dispositivo pueden cambiar con el tiempo.
