---
slug: /skypatrol/sp4600/protocol
id: sp4600-protocol
sidebar_label: Protocol
title: SkyPatrol - SP4600 Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo para la compatibilidad del SkyPatrol SP4600 con la plataforma Plaspy
keywords:
  - Protocolo SkyPatrol SP4600
  - Protocolo GPS SkyPatrol SP4600
  - Protocolo de comunicación SkyPatrol SP4600
  - Compatibilidad SP4600 Plaspy
  - Protocolo de rastreo de flotas SP4600
  - Protocolo de rastreador GPS SkyPatrol
  - Protocolo de dispositivo Plaspy
  - Integración de rastreador GPS Plaspy
  - Rastreo de vehículos SP4600
  - Compatibilidad de firmware SP4600
---

# SkyPatrol - Protocolo SP4600

Esta página describe el contexto público del protocolo para usar el rastreador SkyPatrol SP4600 Series con Plaspy. Explica a alto nivel cómo se comunica el dispositivo, qué ajustes de conexión espera Plaspy y qué comportamientos del equipo suelen afectar la integración. El objetivo es ofrecer orientación práctica y no sensible para usuarios técnicos e integradores.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el equipo reporta correctamente al endpoint de Plaspy. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página se centra en conceptos generales de comunicación más que en detalles internos del dispositivo. La familia SkyPatrol SP4600 incluye variantes 2G y 3G, capacidad GSM GPRS cuatribanda, gestión remota OTA y FOTA, y soporte de geocercas por hardware, todo lo cual puede influir en las características de reporte.

## Resumen del protocolo

El protocolo de reporte define cómo el SP4600 envía información de posición, estado y eventos a un servidor remoto y cómo recibe actualizaciones de configuración o comandos. Para la integración con Plaspy, los elementos públicos importantes son el endpoint de red al que envía el dispositivo, los protocolos de transporte permitidos y el hecho de que el servidor acepta y clasifica los mensajes entrantes para su procesamiento.

- Permite reportes periódicos o basados en eventos desde el dispositivo hacia un servidor remoto
- Permite que el rastreador incluya información de identidad y estado para que Plaspy asocie los mensajes con un vehículo o activo
- Soporta funciones de gestión remota por aire, como configuración a distancia y actualizaciones de firmware a nivel del fabricante
- Transporta telemetría y eventos de alerta que Plaspy convierte en registros de ubicación, velocidad, geocerca y estado
- Funciona sobre transportes celulares comunes para que el mismo dispositivo pueda emplearse en flotas, telemática y recuperación

## Cómo Plaspy detecta el protocolo

Plaspy acepta reportes de dispositivos en un endpoint y puerto compartidos e implementa identificación automática de protocolos. Cuando un SP4600 se configura para reportar a Plaspy, el sistema inspecciona la conexión entrante de forma general para asociar el flujo de mensajes con la clase de dispositivo y protocolo correcta, en la mayoría de los casos sin requerir selección manual del protocolo.

- El dominio del servidor Plaspy para reportes de dispositivos es d.plaspy.com
- La dirección IP del servidor Plaspy es 54.85.159.138
- Plaspy escucha en el puerto 8888 para conexiones de rastreadores
- Plaspy detecta automáticamente el protocolo del rastreador por lo que normalmente no se requiere selección manual
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la configuración entre modelos

## Transporte y contexto de conexión

Las opciones de transporte influyen en cómo el SP4600 entrega mensajes a Plaspy. La serie SP4600 soporta GPRS celular para transporte de datos y puede configurarse para usar distintos modos de transporte según el firmware y las necesidades de despliegue. Desde la perspectiva de Plaspy, entender si un equipo usa transporte orientado a conexión o sin conexión ayuda a configurar firewalls, NAT y enrutamiento.

- Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888
- Los equipos pueden apuntar al dominio d.plaspy.com o a la IP del servidor 54.85.159.138
- Plaspy usa el mismo puerto 8888 para todos los rastreadores compatibles, reduciendo la variación por dispositivo
- Elija UDP o TCP en el rastreador según la fiabilidad de la red y la guía del fabricante
- La conectividad celular, la intensidad de señal y el comportamiento del plan de SIM influyen en la frecuencia y fiabilidad de la entrega de mensajes

## Notas de compatibilidad del protocolo

- Las versiones de firmware pueden cambiar el tiempo de mensajes, los campos disponibles y los transportes soportados; siempre verifique la versión de firmware del equipo
- Las revisiones de hardware entre variantes 2G y 3G pueden alterar las bandas de red soportadas y el comportamiento de conectividad
- Funciones del fabricante como FOTA y gestión remota pueden modificar el comportamiento del dispositivo después del despliegue
- La selección de transporte entre UDP y TCP puede afectar la pérdida de mensajes y las estrategias de reconexión
- Plaspy detecta el protocolo automáticamente, pero la configuración inicial del dispositivo debe apuntar al endpoint de Plaspy para que ocurra la detección
- Valide los ajustes del dispositivo y la accesibilidad de la red antes de asumir compatibilidad

## Por qué es importante entender el protocolo

Conocer cómo se comunica el SP4600 con Plaspy ayuda a garantizar un rastreo fiable, agilizar la resolución de problemas y mantener una operación estable a largo plazo. Saber qué transporte y endpoint usa el dispositivo, y cómo las actualizaciones de firmware pueden alterar su comportamiento, permite a los operadores resolver problemas de conectividad y mantener telemetría consistente.

- Ayuda a confirmar que los dispositivos apuntan a d.plaspy.com o 54.85.159.138 y usan el puerto 8888
- Acelera la resolución de problemas de conectividad, NAT y firewall al acotar el ámbito a transporte y endpoint
- Aclara expectativas sobre intervalos de reporte, eventos de geocerca y funciones de gestión OTA
- Permite tomar decisiones informadas sobre usar UDP o TCP según las condiciones de red
- Reduce la fricción en despliegues con flotas mixtas y múltiples revisiones de dispositivos

## Por qué usar Plaspy con este protocolo

Usar el SkyPatrol SP4600 con Plaspy brinda a las organizaciones una forma práctica de ingerir datos de ubicación, estado y eventos de vehículos en una única plataforma de seguimiento. El endpoint compartido y la detección automática de protocolos de Plaspy reducen la configuración por dispositivo y facilitan la escalabilidad de despliegues que incluyan SP4600 junto a otros rastreadores.

Para conocer más sobre Plaspy y cómo maneja los reportes de dispositivos, visite https://www.plaspy.com. Para obtener los detalles más recientes específicos del protocolo del dispositivo, notas de firmware y guías de implementación del fabricante, verifique la información actual en https://www.skypatrol.com/
