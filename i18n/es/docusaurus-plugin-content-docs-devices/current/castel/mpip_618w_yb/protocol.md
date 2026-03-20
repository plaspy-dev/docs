---
slug: /castel/mpip_618w_yb/protocol
id: mpip_618w_yb-protocol
sidebar_label: Protocol
title: Castel - MPIP-618W-YB Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del GPS Castel MPIP-618W-YB y su compatibilidad con Plaspy, incluyendo conexión y transporte
keywords:
  - rastreador Castel MPIP 618W YB
  - rastreador GPS Castel
  - protocolo MPIP 618W YB
  - protocolo GPS Castel
  - compatibilidad Plaspy
  - protocolo de rastreo vehicular
  - rastreo en tiempo real
  - rastreador GPRS SMS
  - rastreador para gestión de flotas
  - protocolo de comunicación del rastreador
---

# Castel - Protocolo MPIP-618W-YB

Esta página describe el contexto público del protocolo para usar el Castel MPIP-618W-YB con la plataforma Plaspy. Resume cómo el rastreador reporta ubicación, velocidad y eventos de alerta a un servicio de monitoreo remoto y explica los detalles de conexión relevantes que Plaspy necesita para recibir los datos. La información aquí es de carácter no sensible y de nivel de proveedor para facilitar la planificación de la configuración e integración.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador, aunque el comportamiento exacto puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante. El MPIP-618W-YB admite canales comunes de subida como GPRS y SMS para el reporte; las alertas en tiempo real y las rutas de viaje son ejemplos de eventos que Plaspy procesa cuando el equipo está configurado para enviar datos a la plataforma.

## Resumen del protocolo

A alto nivel, el protocolo del dispositivo define cómo el MPIP-618W-YB transmite telemetría y alertas desde el vehículo a un servidor remoto. El protocolo cubre identificación, reportes periódicos y por evento, y señales de alarma para que un backend como Plaspy pueda convertir los reportes crudos en datos útiles de monitoreo.

- Permite al rastreador subir ubicación, velocidad en marcha y eventos de alerta a un servidor centralizado para monitoreo en vivo.
- Transporta la identidad y el estado del dispositivo para que Plaspy asocie correctamente los reportes con la ficha del vehículo.
- Envía alertas como SOS, baja tensión de batería principal, consumo anómalo de combustible, encendido no autorizado y puertas abiertas para que aparezcan en las notificaciones y registros de Plaspy.
- Soporta reportes periódicos de posición y mensajes por eventos, lo que permite a la plataforma construir rutas y registros de viaje.
- Opera sobre enlaces celulares estándar como GPRS y puede recurrir a SMS para comandos o alertas cuando las condiciones de red lo requieren.

## Detección del protocolo por Plaspy

Plaspy recibe el tráfico de los dispositivos en un punto de acceso compartido y determina qué protocolo soportado utiliza un equipo según el patrón de conexión y los mensajes entrantes. En la mayoría de los casos no es necesario seleccionar manualmente el protocolo en Plaspy si el dispositivo está configurado para reportar al endpoint de Plaspy.

- El dominio del servidor Plaspy para reportes de dispositivos es d.plaspy.com y la plataforma también acepta conexiones al IP 54.85.159.138.
- Plaspy escucha en el mismo puerto para todos los rastreadores soportados, lo que simplifica la configuración y el alta de dispositivos.
- El puerto entrante que usa Plaspy para tráfico de dispositivos es 8888 y todos los equipos en Plaspy usan el mismo puerto.
- Plaspy detecta automáticamente el protocolo del rastreador cuando el tráfico correctamente enrutado llega al endpoint compartido.
- Cuando un dispositivo está configurado para apuntar al endpoint de Plaspy, los reportes rutinarios y los mensajes por evento se asignan al manejador correspondiente sin selección manual de protocolo.

## Contexto de transporte y conexión

El MPIP-618W-YB puede configurarse para usar UDP o TCP en el enlace ascendente según las opciones del equipo y el comportamiento de la red. La configuración correcta del transporte y la dirección de destino es clave para asegurar que el rastreador alcance Plaspy de forma confiable.

- Los dispositivos pueden configurarse para reportar a d.plaspy.com o directamente a 54.85.159.138 según las preferencias locales de aprovisionamiento.
- El equipo puede usar UDP o TCP en el puerto 8888 según el soporte y la configuración del dispositivo.
- Usar el puerto compartido 8888 de Plaspy entre dispositivos evita la complejidad de mapeo de puertos en el servidor.
- GPRS es el canal principal de datos para reportes en tiempo real, mientras que SMS puede usarse como respaldo para comandos o alertas pequeñas según las funciones del equipo.
- Verifique que el APN y los ajustes de datos salientes en el rastreador estén correctos para que pueda establecer conexiones con el endpoint de Plaspy.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar el tiempo entre mensajes, las alertas disponibles y campos opcionales; siempre verifique la versión de firmware al resolver incidentes.
- Diferentes revisiones de hardware o variantes regionales de firmware del fabricante pueden afectar qué modos de transporte o tipos de mensajes están disponibles.
- Algunas funciones descritas en la documentación del producto, como corte remoto de alimentación o monitoreo de combustible, dependen del cableado, entradas opcionales y comandos soportados.
- La selección del transporte (UDP vs TCP) debe coincidir con la configuración del rastreador y las características de la red local para evitar reportes perdidos.
- Plaspy usa un puerto de escucha único para todos los dispositivos, pero la configuración del fabricante debe apuntar el rastreador a la dirección y puerto del endpoint de Plaspy.
- Para los detalles más actuales del protocolo y notas de firmware, consulte la documentación y las notas de la versión del fabricante.

## Por qué es importante comprender el protocolo

Comprender cómo se comunica el MPIP-618W-YB ayuda a asegurar una integración confiable con Plaspy, lo que se traduce en rastreo en vivo consistente, alertas precisas y una resolución más ágil de problemas cuando faltan reportes o su comportamiento es inesperado.

- Facilita la validación del aprovisionamiento del equipo al confirmar que está apuntando al endpoint y puerto correctos de Plaspy.
- Ayuda a diagnosticar problemas de conectividad revisando el modo de transporte, el APN y si los reportes llegan al servidor de Plaspy.
- Aclara por qué ciertas alertas o telemetría pueden presentarse de forma distinta según el firmware o la configuración.
- Orienta sobre la ubicación del equipo, el cableado de entradas y qué sensores opcionales habilitar para un monitoreo más completo.
- Reduce el tiempo de integración al alinear los ajustes del dispositivo con las expectativas de Plaspy sobre frecuencia de reporte y manejo de eventos.

## Por qué usar Plaspy con este protocolo

Usar el Castel MPIP-618W-YB con Plaspy ofrece a las organizaciones una forma consistente de recolectar telemetría vehicular, capturar eventos de alerta y mantener registros de viaje para la supervisión de flotas. La plataforma de Plaspy ingesta mensajes de ubicación, velocidad y alertas de rastreadores compatibles para que usted pueda visualizar rutas, configurar notificaciones y revisar la actividad histórica para operaciones y seguridad.

Si desea más información sobre cómo Plaspy maneja la conectividad de dispositivos y las funciones soportadas por los rastreadores, visite https://www.plaspy.com. Para las especificaciones de protocolo más recientes, notas de firmware y detalles de hardware del MPIP-618W-YB consulte el sitio del fabricante en http://www.castelecom.com/ ya que el comportamiento del dispositivo y el soporte del protocolo pueden cambiar con el tiempo.
