---
slug: /teltonika/fmc250/protocol
id: fmc250-protocol
sidebar_label: Protocol
title: Teltonika - FMC250 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del Teltonika FMC250 y su comunicación con Plaspy mediante ajustes compartidos y detección automática
keywords:
  - Teltonika FMC250
  - protocolo FMC250
  - protocolo GPS FMC250
  - Teltonika FMC250 Plaspy
  - protocolo de comunicación FMC250
  - telemática vehicular FMC250
  - protocolo rastreador GPS Teltonika
  - rastreo de flotas FMC250
  - telemetría CAN FMC250
  - compatibilidad de dispositivos Plaspy
---

# Teltonika - Protocolo FMC250

Esta página describe el contexto público y no sensible del protocolo para usar el Teltonika FMC250 con Plaspy. Explica cómo el FMC250 reporta ubicación y telemetría del vehículo al endpoint de Plaspy y qué aspectos de la comunicación del dispositivo son relevantes para una integración y operación cotidiana exitosas.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el dispositivo está configurado para reportar al endpoint de Plaspy. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página se enfoca en el contexto general del protocolo y en los requisitos de conexión más que en los detalles internos del dispositivo.

## Resumen del protocolo

El FMC250 transmite posición GNSS y telemetría derivada del CAN a un servidor remoto para que plataformas como Plaspy puedan ingerir, normalizar y presentar datos de ubicación, diagnóstico y operación. El protocolo del dispositivo regula la identificación, el establecimiento de sesión y los reportes periódicos para que Plaspy reciba parámetros de ubicación y del vehículo útiles para paneles, alertas e informes.

- Permite que el FMC250 se identifique y envíe la posición GNSS a Plaspy para seguimiento en tiempo real.
- Transporta parámetros del bus CAN leídos por el dispositivo para ofrecer telemetría de motor, tren motriz y sensores.
- Soporta reportes periódicos y basados en eventos para que Plaspy convierta entradas crudas en alertas y desencadenantes de mantenimiento.
- Transmite estado del dispositivo y señales de E/S que Plaspy utiliza para monitorear la salud y puntos de integración como inmovilizadores o entradas accesorias.
- Proporciona el mecanismo básico para emparejar accesorios Bluetooth, eventos de identificación de conductor y otros datos perimetrales que complementan el reporte de ubicación.

## Cómo detecta Plaspy el protocolo

Plaspy recibe datos de dispositivos en un único endpoint y puerto compartidos y puede detectar automáticamente el protocolo del rastreador cuando llegan datos. En la mayoría de despliegues no es necesario seleccionar manualmente un protocolo dentro de Plaspy siempre que el FMC250 esté configurado para reportar al endpoint de Plaspy y use un transporte aprobado.

- Plaspy escucha en el dominio compartido d.plaspy.com y en la IP del servidor 54.85.159.138 usando el mismo puerto para todos los dispositivos.
- La plataforma inspecciona automáticamente las conexiones entrantes para determinar el formato de reporte del rastreador y enrutar los datos al pipeline de ingestión correcto.
- Si el FMC250 está configurado para enviar datos a d.plaspy.com o a 54.85.159.138 en el puerto de Plaspy, la plataforma intentará detectar y procesar los mensajes del dispositivo.
- La selección manual de protocolo en Plaspy rara vez es necesaria cuando los dispositivos apuntan al endpoint y transporte correctos.
- Una configuración adecuada del dispositivo y un firmware actualizado aumentan las probabilidades de detección automática fluida y un análisis preciso de la telemetría.

## Contexto de transporte y conexión

La selección de transporte y la dirección del servidor son detalles importantes a nivel de conexión. El FMC250 soporta enlaces celulares modernos y puede configurarse para usar UDP o TCP para llegar a Plaspy en el puerto designado. Usar el dominio o la IP y el puerto correctos asegura que el dispositivo pueda establecer una sesión y entregar tanto GNSS como telemetría CAN de forma confiable.

- El FMC250 puede configurarse para usar UDP o TCP en el puerto 8888 dependiendo del firmware del dispositivo y las preferencias de despliegue.
- El dominio público de Plaspy es d.plaspy.com y la IP pública del servidor es 54.85.159.138; la plataforma acepta reportes de dispositivos en el puerto 8888.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que facilita el aprovisionamiento y las reglas de firewall.
- Elija UDP para reportes livianos y de baja latencia en muchos escenarios, o TCP cuando se prefiera fiabilidad de sesión y entrega ordenada, sujeto al soporte del dispositivo.
- Confirme el APN y la configuración de red del dispositivo para que el rastreador pueda alcanzar d.plaspy.com o la IP especificada a través del enlace celular.

## Notas sobre compatibilidad del protocolo

- Las diferencias en versiones de firmware pueden cambiar el tiempo de mensaje, los parámetros soportados o el comportamiento del transporte; siempre verifique la versión de firmware instalada para entender el comportamiento del dispositivo.
- Las revisiones de hardware y las variantes de SKU (por ejemplo paquetes CAN Estándar versus Extendidos) pueden afectar qué parámetros CAN están disponibles para reporte.
- Las opciones de protocolo del fabricante o paquetes de características opcionales pueden agregar o quitar campos de telemetría que Plaspy puede ingerir y normalizar.
- La selección de transporte entre UDP y TCP puede influir en la latencia y la entrega; verifique qué transporte está habilitado en su SKU de FMC250.
- Al integrar periféricos como sensores Bluetooth o RFID, confirme el soporte y los formatos de evento en la documentación del dispositivo.
- Valide la compatibilidad con el material oficial de Teltonika para el SKU específico del FMC250 y su firmware para evitar sorpresas.

## Por qué es importante comprender el protocolo

Comprender el protocolo de comunicación del FMC250 y el contexto de conexión acelera la configuración y resolución de problemas, y ayuda a garantizar una operación confiable a largo plazo en Plaspy. Tener claro cómo se identifica el dispositivo, qué telemetría envía y cómo llega al endpoint de Plaspy reduce el tiempo de integración y mejora los resultados operativos.

- Acelera el aprovisionamiento inicial asegurando que los dispositivos apunten a d.plaspy.com o a 54.85.159.138 en el puerto 8888 con el transporte correcto.
- Ayuda a diagnosticar problemas de conectividad relacionados con TCP versus UDP, firewalls de red o ajustes de APN.
- Permite a los operadores confirmar qué parámetros CAN se esperan y cómo Plaspy los mostrará en paneles e informes.
- Reduce la ambigüedad cuando las actualizaciones de firmware cambian el comportamiento de reporte o agregan nuevos campos de telemetría.
- Facilita la planificación de integraciones de accesorios como balizas Bluetooth o lectores de ID de conductor al clarificar cómo esos eventos llegan a Plaspy.

## Por qué usar Plaspy con este protocolo

Usar el Teltonika FMC250 con Plaspy ofrece una vía práctica para combinar hardware vehicular robusto y telemática avanzada para flotas que necesitan visibilidad operacional. La capacidad del FMC250 para leer CAN y su clasificación ambiental lo hacen apto para vehículos de servicio pesado y comerciales, mientras que Plaspy ingiere y presenta esos datos para monitoreo, alertas y flujos de trabajo de mantenimiento.

El modelo de endpoint compartido y la detección automática de protocolos de Plaspy simplifican el despliegue en flotas grandes porque todos los dispositivos soportados reportan al mismo puerto y destino. Para saber más sobre Plaspy y las capacidades de la plataforma visite https://www.plaspy.com. Para obtener detalles específicos de protocolo del dispositivo, comportamiento de firmware y documentación del fabricante verifique la información más reciente en el sitio de Teltonika en https://www.teltonika-gps.com/ .
