---
slug: /winrich/tk206_obd/protocol
id: tk206_obd-protocol
sidebar_label: Protocol
title: Winrich - TK206 OBD Protocol
sidebar_class_name: menu_item_tracker
description: Información pública del protocolo del tracker Winrich TK206 OBD y cómo se comunica con Plaspy mediante ajustes de conexión compartidos
keywords:
  - protocolo Winrich TK206 OBD
  - protocolo GPS Winrich TK206 OBD
  - protocolo TK206 OBD Plaspy
  - protocolo rastreador TK206 OBD
  - protocolo rastreador OBDII Winrich
  - comunicación TK206 OBD
  - compatibilidad TK206 OBD Plaspy
  - rastreo vehicular TK206 OBD
  - protocolo rastreador GPS OBD
  - protocolo rastreador Winrich
---

# Winrich - Protocolo TK206 OBD

Esta página explica el contexto público del protocolo para usar el tracker Winrich TK206 OBD con Plaspy. Resume cómo el dispositivo normalmente reporta posición GPS, parámetros OBD del vehículo y alarmas a un servidor backend, y qué papel juega el protocolo de comunicación al integrar el tracker en una plataforma como Plaspy. La orientación aquí se centra en hechos públicos sobre la comunicación, no en detalles privados de implementación.

Plaspy utiliza un endpoint y ajustes de conexión compartidos para los dispositivos soportados y detecta automáticamente el protocolo del tracker cuando el equipo está configurado para reportar al servidor de Plaspy. Dispositivos como el TK206 OBD pueden comportarse de manera distinta según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que la frecuencia exacta de los mensajes y la disponibilidad de datos pueden variar entre unidades y las ECU de cada vehículo.

## Descripción general del protocolo

El protocolo del tracker regula cómo el TK206 OBD envía telemetría y lecturas OBD del vehículo al backend de Plaspy. A alto nivel, el protocolo define cómo el equipo se identifica, reporta posición y estado, y comunica alarmas y valores diagnósticos para que Plaspy pueda mostrar información útil sobre ubicación y salud del vehículo.

- Permite la transmisión de posición GPS y datos de servicios basados en ubicación al backend
- Transporta parámetros OBD leídos desde la ECU para diagnóstico remoto
- Envía eventos de alarma y estado como geocerca, exceso de velocidad, pérdida de alimentación y golpes
- Permite al servidor asociar paquetes entrantes con la identidad del dispositivo para su rastreo
- Proporciona reportes periódicos y actualizaciones por eventos para que Plaspy muestre el estado actual

## Cómo Plaspy detecta el protocolo

Plaspy recibe los reportes de dispositivos en un único endpoint y puerto compartidos, y aplica detección automática para mapear los mensajes entrantes al formato del tracker correspondiente. En la mayoría de los casos, si el TK206 OBD está configurado para reportar al endpoint de Plaspy, la plataforma detectará y parseará los datos sin que deba seleccionarse el protocolo manualmente.

- Plaspy escucha el tráfico de dispositivos en el endpoint compartido d.plaspy.com
- La IP pública del servidor de Plaspy es 54.85.159.138 y el puerto de escucha es 8888
- Plaspy detecta automáticamente el protocolo del tracker cuando llegan datos al puerto compartido
- Generalmente no es necesario elegir un protocolo dentro de Plaspy si el dispositivo envía datos al endpoint de Plaspy
- Un envío consistente de datos al endpoint ayuda a la plataforma a identificar el tracker de forma confiable

## Transporte y contexto de conexión

La configuración de conexión determina cómo el TK206 OBD llega al backend de Plaspy. El tracker puede configurarse para usar transporte UDP o TCP según el firmware y las opciones de configuración del equipo. Plaspy acepta tráfico de ambos transportes en el mismo puerto, de modo que los dispositivos pueden usar el método que mejor se adapte a sus capacidades.

- El TK206 OBD puede configurarse para enviar datos vía UDP o TCP al puerto 8888
- Los dispositivos pueden apuntar al hostname d.plaspy.com o a la IP del servidor 54.85.159.138
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la configuración entre modelos
- La elección entre UDP y TCP puede afectar el comportamiento de entrega, pero Plaspy acepta ambos
- Asegúrese de que el APN del dispositivo y el plan de datos de la SIM permitan conexiones al endpoint de Plaspy

## Notas sobre compatibilidad del protocolo

- La compatibilidad puede depender de la versión de firmware y de la compilación del fabricante para el TK206 OBD
- La disponibilidad de parámetros OBD puede variar según el modelo de la ECU y los PIDs diagnósticos soportados
- Revisiones de hardware del mismo modelo pueden introducir diferencias en el comportamiento de reporte
- La selección de transporte entre UDP y TCP debe coincidir con las capacidades y ajustes del dispositivo
- Confirme que el equipo esté configurado para reportar a d.plaspy.com o 54.85.159.138 en el puerto 8888
- Valide la compatibilidad con la documentación del dispositivo y las notas de versiones de firmware

## Por qué importa entender el protocolo

Comprender cómo el TK206 OBD se comunica con Plaspy mejora el éxito en la configuración, acelera la resolución de problemas y aumenta la fiabilidad a largo plazo del monitoreo vehicular. Conocer el comportamiento del protocolo a alto nivel le ayuda a confirmar los ajustes del servidor, interpretar los valores OBD reportados y diagnosticar problemas relacionados con conectividad o diferencias de firmware.

- Le ayuda a verificar que el dispositivo esté reportando al endpoint y puerto correctos de Plaspy
- Facilita la resolución de problemas cuando la telemetría, los valores OBD o las alarmas no aparecen como se esperan
- Orienta la elección del transporte y la configuración del dispositivo para un reporte fiable
- Permite correlacionar más fácilmente eventos del dispositivo con el comportamiento del vehículo y la ECU
- Apoya la planificación de despliegues a escala de flota aclarando la frecuencia de reportes y los tipos de eventos

## Por qué usar Plaspy con este protocolo

Usar el Winrich TK206 OBD con Plaspy ofrece una combinación práctica de rastreo de ubicación y diagnóstico remoto mediante datos OBD. Para flotas y operadores de vehículos, esta asociación puede proporcionar mayor visibilidad de la ubicación, condiciones de alarma y parámetros selectos del motor sin requerir una instalación cableada, gracias al diseño plug and play OBDII.

Plaspy acepta reportes entrantes en un endpoint y puerto compartidos y detecta automáticamente el protocolo del tracker, lo que simplifica la incorporación de dispositivos y reduce la configuración manual. Para saber más sobre Plaspy y cómo gestiona conexiones y telemetría visite https://www.plaspy.com. Por favor, verifique los detalles específicos del protocolo del dispositivo y el comportamiento del firmware con el fabricante en http://www.winrichgroup.com/en/ ya que el soporte de protocolo e implementación del dispositivo pueden cambiar con el tiempo.
