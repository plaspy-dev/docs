---
slug: /flextrack/lommy_pro/protocol
id: lommy_pro-protocol
sidebar_label: Protocol
title: Flextrack - Lommy Pro Protocol
sidebar_class_name: menu_item_tracker
description: Notas públicas del protocolo para la compatibilidad de Flextrack Lommy Pro con servidores Plaspy y ajustes de conexión compartidos
keywords:
  - Protocolo Flextrack Lommy Pro
  - Compatibilidad Lommy Pro Plaspy
  - Protocolo GPS Lommy Pro
  - Comunicación GPS Flextrack
  - Informes de telemetría Lommy Pro
  - Rastreo de vehículos Lommy Pro
  - Conectividad Lommy Pro
  - Integración de rastreadores Plaspy
  - Rastreo de flotas Lommy Pro
  - Monitoreo remoto Lommy Pro
---

# Flextrack - Protocolo Lommy Pro

Esta página describe el contexto público del protocolo para usar el rastreador Flextrack Lommy Pro con la plataforma Plaspy. Aquí encontrará cómo Lommy Pro reporta posiciones GNSS y telemetría vehicular a Plaspy, los ajustes de conexión compartidos que Plaspy espera y notas prácticas para la configuración y validación. El objetivo es explicar el papel del protocolo del dispositivo en una integración exitosa sin exponer detalles privados de implementación.

Plaspy utiliza ajustes de conexión compartidos para los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el equipo envía datos al endpoint de Plaspy. Lommy Pro admite opciones de transporte comunes como UDP, TCP, FTP y SMS; su comportamiento en la red puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante. Para Plaspy la información pública del servidor es d.plaspy.com con IP 54.85.159.138 y puerto 8888; los dispositivos pueden configurarse para usar UDP o TCP en ese puerto.

## Descripción general del protocolo

El protocolo de comunicación de Lommy Pro define cómo se codifican y envían a Plaspy las posiciones GNSS, eventos de movimiento y la telemetría del vehículo para que la plataforma normalice los datos para mapas en vivo, historial y alertas. También determina cómo el dispositivo se identifica, informa su estado y recibe comandos remotos simples o acuses de recibo cuando corresponda.

- Permite la transmisión de posición GNSS, eventos de movimiento y telemetría vehicular (por ejemplo CAN y entradas analógicas) para que Plaspy los procese.
- Transporta la identidad y el estado del equipo para que Plaspy asocie los mensajes entrantes con el registro correcto del activo.
- Soporta múltiples transportes que Lommy Pro ofrece habitualmente, incluidos UDP, TCP, FTP y SMS, para mayor flexibilidad de conectividad.
- Interactúa con la gestión de energía y los modos de suspensión, por lo que los intervalos de reporte y el contenido de las cargas pueden cambiar según la configuración.
- Funciona junto con la normalización de Plaspy para convertir los campos de telemetría en métricas coherentes para paneles y alertas.

## Cómo Plaspy detecta el protocolo

Plaspy recibe el tráfico entrante de los dispositivos en un endpoint y puerto compartidos y determina automáticamente el protocolo utilizado por cada rastreador. En la mayoría de los casos, un equipo configurado correctamente empezará a reportar a Plaspy sin que sea necesario seleccionar manualmente el protocolo dentro de la plataforma.

- Plaspy escucha en el mismo puerto para todos los dispositivos soportados, lo que simplifica la configuración y la incorporación de equipos.
- Los dispositivos apuntados a d.plaspy.com o directamente a 54.85.159.138 en el puerto 8888 serán enroutados hacia Plaspy para detección automática.
- Plaspy asocia los datos entrantes con los dispositivos usando los identificadores presentes en los reportes del rastreador y luego mapea los campos a la telemetría de la plataforma.
- Usted normalmente solo debe asegurarse de que el dispositivo apunte al endpoint de Plaspy y que el APN y la provisión de la SIM sean correctos.
- Cuando un dispositivo utiliza FTP o SMS como canal alterno, Plaspy ingiere los datos mediante los flujos de ingestión soportados correspondientes.

## Contexto de transporte y conexión

El contexto de conexión se enfoca en la capa de transporte que utiliza Lommy Pro y en los ajustes de destino para alcanzar Plaspy. Lommy Pro está diseñado para operar sobre redes celulares con opciones de transporte flexibles, adecuadas tanto para instalaciones con batería como para instalaciones con alimentación fija.

- Lommy Pro puede configurarse para usar UDP o TCP en el puerto 8888 según el soporte del dispositivo y las condiciones del operador.
- Los dispositivos pueden apuntar al dominio de Plaspy d.plaspy.com o directamente a la IP 54.85.159.138 en el puerto 8888.
- Plaspy usa el mismo puerto para todos los dispositivos, lo que reduce las diferencias de configuración por equipo en el servidor.
- FTP y SMS están disponibles como métodos alternativos de reporte en entornos donde TCP o UDP no sean viables.
- Asegúrese de que el operador de red móvil y las reglas de firewall permitan tráfico saliente hacia el endpoint de Plaspy y de que el APN y la provisión de la SIM sean correctos para los canales de datos.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar el contenido de los mensajes, los tiempos y la disponibilidad de funciones; verifique siempre la versión de firmware del rastreador al validar compatibilidad.
- Las revisiones de hardware y accesorios opcionales, como sensores externos o balizas RF, pueden afectar qué campos de telemetría aparecen en los reportes.
- La elección del transporte (UDP frente a TCP) puede influir en el comportamiento de entrega; seleccione el transporte que mejor se adapte a las necesidades de la implementación y a la fiabilidad de la red.
- Las opciones de configuración del fabricante, como modos de suspensión y detección de movimiento, determinan los intervalos de reporte y las compensaciones en la duración de la batería.
- Al usar el nombre de dominio de Plaspy o la IP directa, confirme el comportamiento DNS y el ruteo de la red del operador para evitar tráfico mal dirigido.
- Valide cualquier comando de configuración suministrado por el fabricante y las configuraciones de APN contra la documentación oficial de Flextrack antes de desplegar a gran escala.

## Por qué es importante entender el protocolo

Comprender cómo Lommy Pro se comunica con Plaspy ayuda a garantizar un rastreo fiable, telemetría precisa y un comportamiento de alertas predecible en los despliegues. Tener claridad sobre el protocolo reduce la fricción en la incorporación, facilita la resolución de problemas y respalda la estabilidad operativa a largo plazo.

- Permite verificar la configuración correcta del equipo para transporte, APN y endpoint de reporte, de modo que los datos lleguen a Plaspy de forma confiable.
- Ayuda a diagnosticar reportes intermitentes correlacionando modos de suspensión, estado de batería y comportamiento del transporte de red.
- Facilita la planificación de necesidades de telemetría como señales CAN, entradas analógicas y expansiones de sensores para que Plaspy normalice los campos adecuadamente.
- Informa decisiones sobre actualizaciones de firmware y revisiones de hardware que puedan cambiar el contenido de los mensajes o las características soportadas.
- Mejora la coordinación entre instaladores de campo, gestores de flota y el soporte de Plaspy al diagnosticar problemas entre el dispositivo y el servidor.

## Por qué usar Plaspy con este protocolo

Usar Lommy Pro con Plaspy brinda a las organizaciones visibilidad continua de ubicación, movimiento y telemetría adecuada para gestión de flotas, prevención de robos y monitoreo de condiciones. Plaspy ingiere las posiciones GNSS y la telemetría vehicular de Lommy Pro y presenta datos normalizados de ubicación, eventos y sensores para paneles, informes y flujos de alertas.

Plaspy simplifica la incorporación de dispositivos al escuchar en un único puerto para todos los equipos y detectar automáticamente el protocolo del rastreador cuando el dispositivo reporta a d.plaspy.com o a 54.85.159.138 en el puerto 8888. Para obtener más información sobre Plaspy y cómo puede apoyar despliegues con Lommy Pro visite https://www.plaspy.com. También verifique los detalles específicos del protocolo del dispositivo, el comportamiento del firmware y la guía del fabricante en el sitio de Flextrack en https://flextrack.dk, ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
