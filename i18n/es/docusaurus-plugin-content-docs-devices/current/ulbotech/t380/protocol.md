---
slug: /ulbotech/t380/protocol
id: t380-protocol
sidebar_label: Protocol
title: Ulbotech - T380 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del Ulbotech T380 y cómo el rastreador se comunica con Plaspy para un seguimiento de flotas fiable
keywords:
  - protocolo Ulbotech T380
  - protocolo GPS T380
  - Ulbotech T380 Plaspy
  - protocolo de comunicación T380
  - protocolo de rastreo T380
  - rastreador GPS Ulbotech
  - protocolo GPS OBDII
  - protocolo de rastreo de vehículos
  - protocolo de gestión de flotas
  - compatibilidad de dispositivos Plaspy
---

# Ulbotech - Protocolo T380

Esta página describe el contexto público del protocolo para usar el Ulbotech T380 con Plaspy. Se centra en cómo el equipo transmite telemetría y eventos al backend de Plaspy y en qué debe tener en cuenta al configurar el rastreador para gestión de flotas, antirrobo y monitoreo del comportamiento del conductor. La información aquí es intencionalmente de alto nivel y evita detalles privados de implementación.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando un equipo reporta a la plataforma. El comportamiento exacto del protocolo y la cadencia de mensajes pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que el comportamiento en campo puede diferir entre unidades o versiones de firmware. El T380 es un rastreador OBDII plug and play con 4G LTE, hotspot Wi‑Fi integrado y funciones de bridging, posicionamiento GNSS, sensores de movimiento a bordo, salidas de inmovilizador y capacidades FOTA que, en conjunto, entregan la telemetría que Plaspy consume.

## Resumen del protocolo

El protocolo del dispositivo define cómo el T380 envía posiciones, eventos de movimiento, estados de entradas/salidas y actualizaciones de estado para que Plaspy pueda ingerir y mostrar telemetría útil. Para la compatibilidad con Plaspy, este protocolo proporciona los identificadores y campos de telemetría necesarios para asociar reportes con un dispositivo y generar mapas en vivo, alertas e informes sin exponer aquí los formatos propietarios crudos de los mensajes.

- Transporta posiciones y fixes GNSS junto con marca de tiempo e identidad del dispositivo al backend para seguimiento en tiempo real e histórico.
- Envía eventos de movimiento y acelerómetro utilizados para detectar comportamiento del conductor, registrar eventos y generar alertas.
- Reporta estados de E/S como encendido, salida de inmovilizador y eventos de entradas digitales para que Plaspy pueda activar acciones o alarmas.
- Comunica el estado del hotspot y bridging Wi‑Fi, además de la fuente de conexión, lo que ayuda a gestionar el uso celular y las decisiones de conectividad.
- Soporta señales de gestión remota como disponibilidad para FOTA, detección automática de APN y zona horaria que facilitan despliegues y mantenimiento a gran escala.

## Cómo Plaspy detecta el protocolo

Plaspy recibe reportes de dispositivos en un endpoint compartido y determina automáticamente el protocolo apropiado para la mayoría de los rastreadores compatibles, incluido el T380. Cuando un rastreador está configurado para reportar al endpoint de Plaspy, normalmente no se requiere seleccionar el protocolo manualmente en la plataforma, lo que simplifica la incorporación del dispositivo.

- Plaspy acepta tráfico de dispositivos dirigido a d.plaspy.com o a la IP del servidor 54.85.159.138 usando el puerto común 8888.
- Todos los dispositivos que reportan a Plaspy usan el mismo valor de puerto, de modo que la configuración de puerto es consistente entre modelos.
- Plaspy detecta automáticamente el protocolo del rastreador cuando la telemetría llega a la plataforma, reduciendo la necesidad de ajustes por dispositivo.
- Asegúrese de que el T380 esté configurado para reportar al endpoint de Plaspy para que la detección automática funcione.
- Si un dispositivo no aparece, verifique la configuración de reporte en el rastreador y compruebe que la red del dispositivo pueda alcanzar d.plaspy.com o 54.85.159.138 en el puerto 8888.

## Transporte y contexto de conexión

El transporte de conexión y la selección del endpoint determinan cómo el T380 llega a Plaspy y con qué fiabilidad llegan los reportes. El T380 puede usar su módem celular o el Wi‑Fi disponible para enviar telemetría, y la elección de transporte puede afectar la latencia y el comportamiento de entrega.

- El T380 puede configurarse para usar UDP o TCP en el puerto 8888 según el soporte del dispositivo y la configuración elegida.
- Los dispositivos pueden apuntar al dominio d.plaspy.com o directamente a la dirección IP 54.85.159.138 como endpoint de ingestión de Plaspy.
- Plaspy usa el mismo puerto 8888 para todos los dispositivos compatibles para simplificar la configuración de firewall y red.
- El bridging Wi‑Fi del T380 puede reducir el uso de datos celulares manteniendo el flujo de telemetría hacia el endpoint de Plaspy cuando la conectividad lo permite.
- Las condiciones de red, NAT del operador y el roaming regional pueden afectar la elección del transporte y deben considerarse durante la planificación del despliegue.

## Notas sobre compatibilidad del protocolo

- Las versiones de firmware pueden cambiar el comportamiento de los paquetes, los intervalos de reporte y campos opcionales; confirme siempre qué firmware ejecutan sus unidades T380.
- Revisiones de hardware o variantes regionales de bandas pueden implementar el mismo protocolo de alto nivel de forma distinta; valide la compatibilidad para su SKU específico.
- Algunas funciones como control de inmovilizador, bridging Wi‑Fi o FOTA pueden depender del firmware y de certificaciones regionales.
- La selección de transporte (UDP vs TCP) puede estar limitada por el firmware del dispositivo o por el comportamiento de la red del operador; confirme que el equipo soporta el transporte que usted prefiere.
- Apuntar el dispositivo a d.plaspy.com o a 54.85.159.138 en el puerto 8888 es obligatorio para la ingestión en Plaspy; asegure que los firewalls de red permitan tráfico saliente a este endpoint y puerto.
- Para despliegues masivos, pruebe con una flota reducida y confirme la semántica de eventos, la cadencia y el comportamiento de FOTA antes de la implementación a gran escala.

## Por qué es importante comprender el protocolo

Comprender el protocolo de comunicación del T380 a nivel conceptual ayuda a garantizar una integración fiable con Plaspy y a acelerar la resolución de problemas cuando los dispositivos no se comportan como se espera. Saber qué tipos de telemetría se reportan y cómo se conecta el equipo permite a los administradores ajustar intervalos de reporte, alertas y configuraciones de red para optimizar rendimiento y costos.

- Ayuda a confirmar que la posición, el acelerómetro y la telemetría de E/S requeridas por sus flujos de trabajo están presentes y se reportan correctamente.
- Simplifica la configuración de red y firewalls al conocer el endpoint de Plaspy y el puerto compartido usado por todos los dispositivos.
- Facilita el diagnóstico de problemas de conectividad al comprender cuándo un dispositivo debe usar celular o bridging Wi‑Fi.
- Permite planificar despliegues de FOTA y cambios de configuración anticipando cómo los dispositivos anuncian disponibilidad y estado.
- Soporta controles de calidad de datos que mejoran la precisión de los informes para operaciones de flota y análisis del comportamiento del conductor.

## Por qué usar Plaspy con este protocolo

El Ulbotech T380 es un rastreador OBDII plug and play cuya telemetría se alinea con las necesidades comunes de gestión de flotas: fixes GNSS continuos, eventos basados en acelerómetro, reporte de estados de E/S y control remoto de inmovilizador. Combinado con la detección automática de protocolos e ingestión centralizada de Plaspy, las organizaciones obtienen un camino sencillo hacia visibilidad en tiempo real, alertas e informes históricos sin configuraciones complejas por dispositivo.

Los ajustes de conexión compartidos y la detección automática de protocolo de Plaspy reducen la fricción de incorporación para el T380. Usar las funciones de bridging y hotspot Wi‑Fi del dispositivo junto con el reporte celular puede disminuir los costos operativos al tiempo que mantiene la continuidad de la telemetría. Para obtener más información sobre Plaspy y cómo puede trabajar con dispositivos Ulbotech visite https://www.plaspy.com. Tenga en cuenta que el soporte de protocolo, el comportamiento del firmware y la implementación del fabricante pueden cambiar con el tiempo; usted debe verificar los detalles específicos del protocolo y del firmware con el fabricante en http://www.ulbotech.com/.
