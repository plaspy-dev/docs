---
slug: /teltonika/fmb150/protocol
id: fmb150-protocol
sidebar_label: Protocol
title: Teltonika - FMB150 Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo para usar Teltonika FMB150 con Plaspy en rastreo de flotas e integración de datos CAN
keywords:
 - Protocolo Teltonika FMB150
 - Compatibilidad FMB150 Plaspy
 - Protocolo GPS Teltonika FMB150
 - Protocolo de comunicación FMB150
 - Protocolo de rastreo FMB150
 - Rastreo de vehículos Teltonika
 - Protocolo rastreador GPS Plaspy
 - Seguimiento de datos CAN FMB150
 - Configuración Teltonika FMB150
 - Rastreo de flotas FMB150
---

# Teltonika - Protocolo FMB150

Esta página ofrece contexto público sobre el protocolo utilizado por el rastreador Teltonika FMB150 con Plaspy. Se centra en cómo el dispositivo se comunica con Plaspy a un nivel general, qué esperar durante la configuración y consideraciones prácticas para enviar datos CAN, GNSS y de sensores a la plataforma.

Plaspy emplea una configuración de conexión compartida para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando este reporta al endpoint de Plaspy. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y las implementaciones del fabricante, por lo que esta página se concentra en detalles seguros y no sensibles que ayudan en la integración y solución de problemas.

## Resumen del protocolo

El protocolo de reporte del rastreador es el conjunto de convenciones de transporte y mensajes que permiten al FMB150 enviar ubicación, datos del bus CAN y lecturas de sensores a Plaspy. Los protocolos definen cómo se identifica el dispositivo, cómo se empaqueta la telemetría para el envío y cómo el servidor reconoce o registra los mensajes recibidos.

- Permite la transmisión de posición GNSS, diagnósticos del bus CAN y telemetría del FMB150 al servidor de rastreo.
- Incluye identidad del dispositivo e información de sesión para que Plaspy asocie los datos con el activo correcto.
- Facilita que Plaspy interprete la telemetría entrante para mapeo, alertas y analítica sin configuración manual por dispositivo.
- Soporta datos adicionales de sensores como lecturas de beacons BLE, eventos de acelerómetro y entradas analógicas cuando el dispositivo está configurado para reportarlos.
- Permite configuración remota y actualizaciones de firmware mediante los canales soportados por el fabricante, mientras que el reporte estándar permanece compatible con Plaspy.

## Cómo detecta Plaspy el protocolo

Plaspy escucha en un único endpoint compartido e identifica automáticamente el protocolo del rastreador cuando un dispositivo se conecta y comienza a reportar. En la mayoría de los casos no necesita seleccionar un protocolo dentro de Plaspy si el rastreador está correctamente apuntando al endpoint de Plaspy.

- El dominio del servidor Plaspy es d.plaspy.com, al que los dispositivos pueden configurarse para reportar.
- La IP del servidor Plaspy es 54.85.159.138 para casos en los que se requiere direccionamiento numérico.
- El puerto es 8888 y el dispositivo puede configurarse usando UDP o TCP en el puerto 8888.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la configuración y el onboarding.
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que típicamente no es necesaria la selección manual si el dispositivo envía datos al endpoint correcto.

## Transporte y contexto de conexión

Los ajustes de transporte y conexión determinan cómo el FMB150 alcanza a Plaspy a través de la red móvil. El rastreador soporta modos de transporte comunes y puede apuntarse tanto al dominio de Plaspy como a su dirección numérica según necesidades de red o configuración.

- Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888 según la configuración del equipo y el comportamiento de la red.
- Los dispositivos pueden apuntar a d.plaspy.com o a la IP numérica 54.85.159.138 cuando la resolución DNS no está disponible.
- Plaspy mantiene un único puerto de escucha para todos los dispositivos soportados, reduciendo la complejidad de la configuración.
- Las condiciones de red, la configuración del APN y el comportamiento del operador pueden influir en si TCP o UDP es más recomendable para una entrega confiable.
- Use la herramienta de configuración del dispositivo o los comandos SMS/GPRS soportados por Teltonika para establecer el endpoint de reporte hacia Plaspy.

## Notas sobre compatibilidad del protocolo

- Las versiones de firmware pueden cambiar el comportamiento de los mensajes y los campos disponibles; siempre revise las notas de la versión del firmware para detectar cambios que afecten el reporte.
- Las revisiones de hardware pueden añadir o quitar interfaces, como ciertos buses CAN o entradas de sensores, que afectan la telemetría que el dispositivo puede enviar.
- Las configuraciones del fabricante y las características opcionales, como el reporte de sensores BLE o la decodificación de tramas CAN, pueden variar según la región y la variante del modelo.
- La selección de transporte entre UDP y TCP puede afectar las garantías de entrega y el consumo de batería del dispositivo.
- Confirme que la configuración del dispositivo (dirección del servidor, puerto, APN) esté apuntando al endpoint de Plaspy para asegurar la detección automática del protocolo.
- Valide cualquier característica avanzada, como la decodificación CAN para vehículos eléctricos o campos de datos personalizados, con la documentación de Teltonika antes de depender de ellas en producción.

## Por qué es importante entender el protocolo

Conocer el comportamiento del protocolo de comunicación ayuda a asegurar una configuración exitosa, una recolección de datos robusta y una resolución de problemas más rápida cuando algo falla. Incluso cuando Plaspy detecta el protocolo automáticamente, entender el rol general del protocolo ayuda a los equipos a gestionar dispositivos y expectativas.

- Acelera la configuración inicial al confirmar la dirección del servidor y el modo de transporte correctos.
- Ayuda a diagnosticar problemas de conectividad relacionados con APN, TCP versus UDP o resolución DNS.
- Orienta sobre qué campos de telemetría recibirá el servidor desde CAN, GNSS y sensores.
- Soporta la planificación de actualizaciones de firmware cuando cambian los formatos de mensajes o las capacidades.
- Mejora la respuesta ante incidentes al clarificar si una brecha de datos es por transporte o por el propio dispositivo.

## Por qué usar Plaspy con este protocolo

El Teltonika FMB150 ofrece datos de vehículo y CAN combinados con soporte para sensores BLE, lo que lo hace ideal para operaciones de flota que requieren tanto rastreo como diagnósticos. Usar el FMB150 con Plaspy brinda a las organizaciones un punto único de recolección para ubicación, métricas derivadas del CAN y entradas de sensores, de modo que puedan monitorear la salud y el comportamiento del vehículo junto con su posición.

El enfoque de endpoint compartido de Plaspy simplifica el onboarding y reduce la sobrecarga de configuración por dispositivo. Si su flota usa dispositivos FMB150, apuntarlos a d.plaspy.com o a 54.85.159.138 en el puerto 8888 y permitir que Plaspy detecte automáticamente el protocolo suele ser suficiente para comenzar a recibir telemetría. Para conocer más sobre Plaspy y cómo gestiona los datos de los dispositivos, visite https://www.plaspy.com. Para detalles específicos del protocolo del dispositivo, notas de firmware e indicaciones de implementación más actualizadas, verifique siempre con el fabricante en https://www.teltonika-gps.com/
