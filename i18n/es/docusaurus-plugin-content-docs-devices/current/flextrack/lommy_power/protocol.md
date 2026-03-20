---
slug: /flextrack/lommy_power/protocol
id: lommy_power-protocol
sidebar_label: Protocol
title: Flextrack - Lommy Power Protocol
sidebar_class_name: menu_item_tracker
description: Contexto público del protocolo para conectar Flextrack Lommy Power con Plaspy y compatibilidad de dispositivos
keywords:
  - protocolo Flextrack Lommy Power
  - protocolo GPS Flextrack Lommy Power
  - protocolo de comunicación Lommy Power
  - protocolo de rastreo Lommy Power
  - compatibilidad de dispositivos Plaspy
  - detección de protocolo Plaspy
  - integración de protocolo de rastreador GPS
  - protocolo de telemetría para maquinaria pesada
  - protocolo para rastreadores de activos cableados
  - protocolo de rastreo de vehículos
---

# Flextrack - Protocolo Lommy Power

Esta página describe el contexto público del protocolo para usar el rastreador Flextrack Lommy Power con Plaspy. Explica cómo el dispositivo transmite la telemetría relevante a Plaspy y qué esperar de los ajustes de conexión compartidos que utiliza la plataforma. El contenido se centra en detalles de alto nivel y no sensibles que facilitan la integración y la resolución de problemas.

Lommy Power es un rastreador cableado, compacto, diseñado para el seguimiento continuo en tiempo real de maquinaria y equipos pesados. Plaspy emplea ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, pero el comportamiento exacto puede variar según la versión de firmware, la revisión de hardware y la implementación de Flextrack. Para comandos específicos de firmware y las notas más recientes del fabricante consulte la documentación oficial de Flextrack.

## Visión general del protocolo

A alto nivel, el protocolo de comunicación Lommy Power define cómo el dispositivo se identifica y entrega datos GNSS y telemetría a un servidor remoto para que una plataforma como Plaspy pueda normalizar y presentar información útil. El protocolo cubre cómo la unidad reporta posición, movimiento, estado de encendido y horas de funcionamiento para convertir esos valores en alertas, eventos de geocerca e informes.

- Permite la identificación del equipo y la entrega periódica y por eventos de posiciones GNSS al backend.
- Transmite telemetría como estado de encendido, eventos de movimiento detectados por el acelerómetro y mediciones de horas de uso derivadas de la corriente de la batería.
- Soporta modos de reporte configurables para enviar actualizaciones frecuentes cuando el equipo está activo y reducir la frecuencia cuando está inactivo, equilibrando consumo de datos y oportunidad de la información.
- Permite a la plataforma correlacionar marcas de tiempo, ubicación y entradas de sensores para geocercas, métricas de utilización y flujos de trabajo anti robo.
- Proporciona las cargas útiles transportables que Plaspy ingiere y normaliza para visualización e informes sin exponer los detalles internos del firmware.

## Cómo Plaspy detecta el protocolo

Plaspy recibe datos de dispositivos en un único endpoint y puerto compartidos y utiliza esa conexión para identificar qué protocolo está empleando el equipo. Cuando Lommy Power está configurado para reportar a Plaspy, la plataforma detecta el protocolo automáticamente, por lo que usted normalmente no necesita seleccionar un protocolo manualmente dentro de Plaspy si el rastreador apunta al endpoint de Plaspy.

- Plaspy escucha en el endpoint de servidor compartido d.plaspy.com y en la IP pública 54.85.159.138 para conexiones entrantes de dispositivos.
- Todos los dispositivos compatibles con Plaspy usan el mismo puerto, por lo que la configuración es consistente entre diferentes modelos.
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo envía sus mensajes iniciales al endpoint de ingestión.
- En la mayoría de despliegues, el instalador solo necesita configurar el APN del dispositivo y el destino de reporte para apuntar al endpoint de Plaspy; Plaspy se encarga de la identificación del protocolo.
- Si un dispositivo no se detecta automáticamente, las comprobaciones estándar incluyen verificar la dirección de reporte y los ajustes de transporte en el rastreador y confirmar la compatibilidad del firmware con el fabricante.

## Transporte y contexto de conexión

El contexto de conexión abarca cómo Lommy Power llega a Plaspy más que los formatos de paquete a nivel de implementación. El rastreador puede usar redes celulares para entregar telemetría y admite múltiples transportes de reporte según la configuración y la disponibilidad de red.

- Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888 para alcanzar los endpoints de ingestión de Plaspy.
- Lommy Power también puede enviar telemetría vía SMS como mecanismo de respaldo según la configuración del equipo y las preferencias del operador.
- El endpoint de ingestión de Plaspy es accesible como d.plaspy.com o directamente mediante la IP 54.85.159.138 y escucha en el puerto 8888.
- Todos los dispositivos soportados por Plaspy usan el mismo puerto para mantener consistencia entre modelos y despliegues.
- La elección entre UDP y TCP afecta el comportamiento de la conexión y las garantías de entrega a nivel de transporte, y se selecciona en el dispositivo según cobertura y necesidades del operador.

## Notas sobre compatibilidad del protocolo

- Las versiones de firmware y las revisiones de hardware pueden cambiar el contenido de los mensajes, los intervalos de reporte o los campos de telemetría disponibles; siempre revise las notas de la versión del firmware.
- Las opciones de configuración del fabricante, como ajustes de APN, selección de transporte y perfiles de reporte, influyen en cómo el dispositivo se comunica con Plaspy.
- Al cambiar de dispositivo o de firmware, valide que la unidad esté correctamente apuntando a d.plaspy.com o a 54.85.159.138 y que esté usando el puerto 8888.
- Algunas instalaciones pueden preferir TCP sobre UDP por la fiabilidad de la red, mientras que otras usan UDP por su menor sobrecarga; confirme el transporte elegido en el dispositivo.
- Plaspy normaliza los datos entrantes, pero los nombres de sensores o las entradas auxiliares específicas pueden variar según el firmware de Lommy Power y deben mapearse durante la integración.
- Para obtener detalles de compatibilidad más actuales y precisos consulte la documentación de Flextrack y las notas de las versiones de firmware.

## Por qué es importante entender el protocolo

Comprender el protocolo del rastreador ayuda a asegurar una configuración confiable, un comportamiento predecible y una resolución de problemas más ágil al integrar Lommy Power con Plaspy. Conocer los transportes y modos de reporte que soporta el dispositivo reduce errores de configuración y acelera el despliegue.

- Facilita el diagnóstico de problemas de conectividad comprobando transporte, dirección del endpoint y ajustes de puerto en el dispositivo.
- Aclara el comportamiento esperado de los reportes para que se puedan validar alarmas, eventos de geocerca y cálculos de horas de funcionamiento.
- Permite tomar decisiones informadas sobre intervalos de reporte y compensaciones de uso de datos para los planes celulares.
- Facilita el mapeo de entradas auxiliares y campos de telemetría a las reglas y paneles de Plaspy.
- Mejora la preparación ante actualizaciones de firmware al comprender los posibles cambios en telemetría o cadencia de mensajes.

## Por qué usar Plaspy con este protocolo

Usar el rastreador Lommy Power con Plaspy proporciona a las organizaciones visibilidad centralizada de maquinaria y equipos pesados. La alimentación cableada continua, la compatibilidad con múltiples constelaciones GNSS y el diseño robusto se combinan con la ingestión y normalización de Plaspy para entregar datos de ubicación, movimiento, encendido y horas de funcionamiento útiles para la gestión de flotas, monitoreo antirrobo e informes operativos.

Para saber más sobre cómo Plaspy puede trabajar con Lommy Power y otros rastreadores de activos visite https://www.plaspy.com. Para los detalles más recientes sobre el protocolo específico del dispositivo, el comportamiento del firmware y las instrucciones del fabricante, verifique la información en el sitio de Flextrack en https://flextrack.dk ya que el soporte de protocolo y las implementaciones de firmware pueden cambiar con el tiempo.
