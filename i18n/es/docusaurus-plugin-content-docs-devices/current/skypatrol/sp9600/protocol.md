---
slug: /skypatrol/sp9600/protocol
id: sp9600-protocol
sidebar_label: Protocol
title: SkyPatrol - SP9600 Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo para el rastreador GPS SkyPatrol SP9600 y su compatibilidad con Plaspy
keywords:
  - protocolo SkyPatrol SP9600
  - protocolo GPS SkyPatrol SP9600
  - protocolo rastreador SP9600
  - compatibilidad rastreador SkyPatrol GPS
  - integración SP9600 Plaspy
  - protocolo seguimiento GPS Plaspy
  - compatibilidad dispositivos Plaspy
  - comunicación rastreador de activos
  - protocolo seguimiento vehicular
  - seguimiento vida de batería SP9600
---

# SkyPatrol - SP9600 Protocolo

Esta página describe el contexto público del protocolo para usar el rastreador SkyPatrol SP9600 Series con la plataforma Plaspy. Explica, en términos generales, cómo se comunica el dispositivo, qué ajustes de conexión espera Plaspy y qué consideraciones prácticas importan al integrar el SP9600 como rastreador de contenedores, equipos o vehículos.

La serie SP9600 es un rastreador GPS portátil para activos con opciones de alimentación flexibles, que incluyen pilas CR123 reemplazables (capacidad total 6000 mAh) o baterías recargables mediante un conector externo. Plaspy utiliza ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador, pero el comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante. Esta página se centra en detalles públicos y no sensibles para ayudar en la configuración y solución de problemas, y recomienda verificar el comportamiento específico del dispositivo con el fabricante.

## Resumen del protocolo

El protocolo de comunicación es el conjunto de reglas que emplea el SP9600 para reportar ubicación, estado y telemetría a un servidor remoto. Para integrarlo con una plataforma de gestión como Plaspy, el protocolo determina cómo el rastreador se identifica, cómo programa los reportes y cómo transmite mediciones para que la plataforma presente datos de ubicación y condición útiles.

- Permite que el rastreador envíe mensajes de ubicación y estado que la plataforma Plaspy pueda interpretar y mostrar.
- Transporta la identidad del dispositivo y telemetría básica para que Plaspy asocie los reportes con el activo correcto.
- Permite expresar la frecuencia de reporte y el comportamiento de gestión de energía mediante mensajes o mediante ajustes del dispositivo.
- Proporciona un patrón de tráfico predecible para que la infraestructura de red y servidor de Plaspy pueda manejar los reportes entrantes.
- Soporta tanto reportes periódicos cortos para maximizar la duración de la batería como actualizaciones más frecuentes cuando hay alimentación externa o baterías recargables.

## Cómo Plaspy detecta el protocolo

Plaspy acepta reportes de muchos modelos de dispositivos y determina automáticamente el protocolo del rastreador cuando un dispositivo envía datos a la plataforma. En la mayoría de los casos no necesita seleccionar un protocolo dentro de Plaspy si el dispositivo está configurado para reportar correctamente al endpoint de Plaspy.

- El dominio del servidor Plaspy es d.plaspy.com
- La IP del servidor Plaspy es 54.85.159.138
- El puerto es 8888
- El dispositivo puede configurarse usando UDP o TCP en el puerto 8888
- Todos los dispositivos en Plaspy usan el mismo puerto
- Plaspy detecta automáticamente el protocolo del rastreador

Cuando un SP9600 apunta al endpoint de Plaspy y está reportando, Plaspy emparejará la conexión entrante con un tipo de dispositivo soportado y procesará los datos según el protocolo detectado. Esta detección automática facilita el onboarding de muchos modelos comunes de rastreadores.

## Transporte y contexto de conexión

El contexto de conexión describe cómo el SP9600 alcanza a Plaspy en la red. Para una entrega fiable usted debe configurar el rastreador para que reporte al endpoint de Plaspy y elegir el modo de transporte que coincida con el firmware del dispositivo y su entorno de red.

- El dispositivo puede usar UDP o TCP en el puerto 8888 según el soporte y la configuración del equipo
- Los dispositivos pueden configurarse para usar el nombre DNS d.plaspy.com o la IP 54.85.159.138 para reportar
- Todos los dispositivos soportados por Plaspy usan el puerto 8888, lo que simplifica la configuración de firewall y NAT
- Elija UDP para menor overhead cuando lo permita el firmware del rastreador, o TCP para entrega orientada a conexión cuando esté disponible
- Asegúrese de que los firewalls de red permitan tráfico saliente hacia el endpoint de Plaspy en el puerto 8888 para que los reportes lleguen al servidor

## Notas sobre compatibilidad del protocolo

- Las versiones de firmware pueden modificar el contenido de los mensajes, las opciones de reporte o las funciones disponibles; confirme el nivel de firmware del rastreador al validar el comportamiento.
- Revisiones de hardware o distintos submodelos del SP9600 pueden implementar el reporte y la gestión de energía de manera diferente; trate la compatibilidad caso por caso si es necesario.
- El modo de transporte (UDP versus TCP) se selecciona en la configuración del dispositivo y debe coincidir con lo que el firmware soporta.
- Ajustes en el lado del fabricante, como intervalos de reporte y horarios de activación, afectarán la frecuencia con la que Plaspy recibe actualizaciones y las expectativas de duración de batería.
- Valide siempre que el rastreador esté configurado para reportar a d.plaspy.com o 54.85.159.138 en el puerto 8888 para asegurar que Plaspy reciba los mensajes.
- Consulte la documentación de SkyPatrol para comandos específicos de firmware o comportamientos que puedan influir en la compatibilidad.

## Por qué es importante entender el protocolo

Tener un entendimiento práctico del protocolo de comunicación del SP9600 ayuda a asegurar una configuración sin contratiempos, una duración de batería predecible y un rastreo confiable en Plaspy. Saber qué enviará el rastreador y cuándo lo hará facilita el despliegue y la resolución de problemas operativos.

- Ayuda a ajustar expectativas sobre la frecuencia de reportes y la vida útil de la batería según la configuración del dispositivo
- Orienta la configuración de firewalls, VPN y redes para permitir la entrega confiable al endpoint de Plaspy
- Facilita la solución de problemas cuando un dispositivo no aparece en Plaspy o los reportes son irregulares
- Apoya la toma de decisiones sobre la selección de transporte y sobre cuándo usar alimentación reemplazable frente a recargable
- Hace más sencillo correlacionar el comportamiento del dispositivo con versiones de firmware y notas del fabricante

## Por qué usar Plaspy con este protocolo

Usar el SkyPatrol SP9600 con Plaspy ofrece a las organizaciones un camino sencillo para capturar datos de ubicación y estado de activos a largo plazo con mínima configuración por dispositivo. Las opciones de alimentación flexibles y la larga autonomía en espera del SP9600 son adecuadas para escenarios de reporte de baja frecuencia, y el endpoint compartido de Plaspy junto con la detección automática de protocolos reduce la carga operativa de integrar múltiples dispositivos.

Si desea conocer más sobre Plaspy y cómo maneja el onboarding de dispositivos, conectividad y visibilidad de flotas, visite https://www.plaspy.com. Para obtener los detalles más recientes específicos del protocolo del dispositivo, notas de firmware y guías de implementación, verifique la información en el sitio del fabricante https://www.skypatrol.com/ ya que el soporte del protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
