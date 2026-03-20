---
slug: /concox/gt06e/protocol
id: gt06e-protocol
sidebar_label: Protocol
title: Concox - GT06E Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo Concox GT06E para integrar el rastreador con Plaspy, ajustes de conexión y contexto de comunicación
keywords:
  - Protocolo Concox GT06E
  - Protocolo rastreador GPS GT06E
  - Concox GT06E Plaspy
  - Protocolo de comunicación GT06E
  - Protocolo de seguimiento GT06E
  - Compatibilidad rastreador Concox
  - Rastreador GT06E 3G
  - Detección de protocolo Plaspy
  - Seguimiento de flotas GT06E
  - Seguimiento vehicular Concox
---

# Concox - Protocolo GT06E

Esta página describe el contexto público del protocolo para usar el rastreador Concox GT06E con Plaspy. Se enfoca en cómo el dispositivo se comunica con el servidor Plaspy en términos generales, qué esperar de la configuración de conexión y transporte, y cómo el protocolo se relaciona con funciones comunes de rastreo como envío de ubicación, alarmas y señales I/O opcionales.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el equipo reporta a la plataforma. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página mantiene la descripción a un nivel público y no sensible e invita a verificar con la documentación oficial del fabricante.

## Descripción general del protocolo

El protocolo de comunicación del Concox GT06E define cómo el rastreador informa posición, eventos y estado a un servidor remoto y cómo se pueden enviar de vuelta configuraciones remotas o comandos. En un entorno de flotas, el protocolo vincula los sensores del equipo y las alertas con Plaspy para que la telemetría sea información útil para monitoreo y operaciones.

- Permite subidas periódicas de posición GPS y reportes por eventos como SOS, exceso de velocidad y disparos de geocerca
- Transporta identificación y estado del dispositivo para que Plaspy asocie los reportes con el activo correcto
- Lleva entradas y salidas opcionales como detección de puertas, alertas audiovisuales y datos de voltaje de alimentación externa para un monitoreo más completo
- Soporta reportes sobre datos celulares, por lo que la conectividad 3G del GT06E brinda actualizaciones oportunas a la plataforma
- Admite mensajes de control y configuración remota cuando el fabricante y el firmware ofrecen esas capacidades

## Cómo Plaspy detecta el protocolo

Plaspy acepta reportes de dispositivos en un único endpoint compartido y identifica automáticamente el protocolo del rastreador según las conexiones entrantes. En la mayoría de los casos, un dispositivo correctamente configurado que apunte al endpoint de Plaspy será reconocido y comenzará a reportar sin que sea necesario seleccionar manualmente un protocolo en la interfaz de Plaspy.

- Plaspy server domain is d.plaspy.com and the public server IP is 54.85.159.138
- The configured port for device reports is 8888 and Plaspy uses the same port for all supported devices
- Plaspy automatically detects the tracker protocol when data arrives at the shared endpoint
- Users typically do not need to manually choose a protocol inside Plaspy if the device is set to report correctly to the Plaspy endpoint
- Ensure the GT06E is configured to send reports to the Plaspy domain or IP and port so automatic detection can occur
- If a device does not appear to be detected, confirm device reporting settings and network reachability to the Plaspy server

(Nota: mantenga los valores de dominio, IP y puerto tal como están en la configuración del dispositivo para permitir la detección automática.)

## Transporte y contexto de conexión

El GT06E puede enviar reportes por TCP o UDP según la configuración del dispositivo y las capacidades del firmware. La elección del transporte afecta cómo el equipo establece la sesión con el servidor y cómo se manejan retransmisiones o la entrega, por lo que confirmar el transporte correcto es parte de una integración exitosa.

- El dispositivo puede configurarse usando UDP o TCP en el puerto 8888
- Los equipos pueden apuntar al dominio d.plaspy.com o a la IP 54.85.159.138 para enviar reportes
- Plaspy utiliza el puerto 8888 para todos los dispositivos con el fin de simplificar la configuración y la detección
- La selección entre TCP o UDP depende del firmware del GT06E y de la configuración aplicada por el integrador o instalador
- Consideraciones a nivel de red como NAT del operador, configuración APN y reglas de firewall pueden afectar la conectividad hacia el endpoint de Plaspy
- Verifique que la conectividad de datos móviles y los ajustes APN en el GT06E permitan conexiones salientes al servidor Plaspy

## Notas sobre compatibilidad del protocolo

- Las versiones de firmware pueden cambiar el tiempo de envío de mensajes, los campos disponibles y el reporte de funciones opcionales en el GT06E
- Revisiones de hardware o módulos opcionales pueden añadir o quitar entradas y salidas soportadas que aparezcan en los reportes
- Los comandos de configuración del fabricante y el comportamiento de respuesta pueden diferir entre builds de firmware y deben validarse en el dispositivo real
- La elección de transporte entre TCP y UDP afecta el comportamiento de la conexión y debe coincidir con la configuración del equipo
- Diferencias regionales en redes celulares y requisitos del operador pueden influir en la conectividad 3G y la disponibilidad
- Siempre verifique la disponibilidad de funciones como corte de combustible, detección de puertas y monitoreo de voltaje externo según el dispositivo que tenga en mano
- Valide cualquier flujo de comandos remotos con la documentación del fabricante antes de aplicarlo en producción

## Por qué importa comprender el protocolo

Entender cómo el GT06E se comunica con Plaspy ayuda a garantizar un rastreo confiable, el manejo correcto de eventos y una resolución de problemas más ágil cuando surjan incidencias. Un conocimiento práctico del protocolo y del contexto de conexión reduce el tiempo de integración y facilita que los equipos de operaciones mantengan visibilidad continua.

- Asegura la configuración correcta para que los reportes de ubicación y alarmas lleguen a Plaspy como se espera
- Ayuda a diagnosticar por qué un dispositivo podría no registrarse o por qué faltan eventos en la plataforma
- Orienta las decisiones sobre selección de transporte y configuración APN para reportes celulares confiables
- Aclara qué entradas y salidas opcionales serán reportadas por un dispositivo y firmware específicos
- Facilita despliegues controlados y pruebas al implementar dispositivos en una flota
- Reduce la incertidumbre al validar que funciones como SOS, geocerca y exceso de velocidad estén operativas

## Por qué usar Plaspy con este protocolo

Usar el Concox GT06E con Plaspy ofrece a las organizaciones una vía práctica para convertir reportes crudos del dispositivo en telemetría accionable para la flota. Las capacidades de reporte 3G, las alarmas y las señales I/O opcionales del GT06E proporcionan los datos que Plaspy necesita para ofrecer seguimiento de ubicación, alertas y visibilidad operativa de los vehículos.

Plaspy centraliza los reportes entrantes en un único endpoint de escucha para que dispositivos como el GT06E puedan apuntar a d.plaspy.com o 54.85.159.138 en el puerto 8888 y beneficiarse de la detección automática de protocolo. Esto simplifica la puesta en marcha y ayuda a las flotas a pasar del despliegue de dispositivos a obtener información útil más rápidamente.

To learn more about Plaspy and how it works with trackers such as the Concox GT06E visit https://www.plaspy.com. Please note that protocol support, firmware behavior, and manufacturer details may change over time and users should verify the latest device specific information on the official manufacturer website https://www.iconcox.com/
