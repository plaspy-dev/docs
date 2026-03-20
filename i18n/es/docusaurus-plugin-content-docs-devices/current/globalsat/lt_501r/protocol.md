---
slug: /globalsat/lt_501r/protocol
id: lt-501r-protocol
sidebar_label: Protocol
title: GlobalSat - LT-501R Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo del GlobalSat LT-501R y su comunicación con Plaspy para rastreo de activos y telemetría
keywords:
  - Protocolo GlobalSat LT-501R
  - Protocolo GPS GlobalSat LT-501R
  - Protocolo de rastreo LT-501R
  - Protocolo LoRaWAN GlobalSat
  - Compatibilidad LT-501R Plaspy
  - Protocolo rastreador de activos LoRaWAN
  - Rastreador GPS red Helium
  - Protocolo de comunicación LT-501R
  - Protocolo de dispositivo Plaspy
  - Protocolo de rastreo de activos
---

# GlobalSat - Protocolo LT-501R

Esta página describe el contexto público del protocolo para usar el rastreador de activos GlobalSat LT-501R con Plaspy. Se centra en cómo el dispositivo intercambia ubicación y telemetría con Plaspy de forma útil para la configuración, integración y resolución de problemas, sin exponer detalles privados de parseo ni internos del firmware.

El LT-501R es un rastreador compatible con LoRaWAN optimizado para larga duración de batería, posicionamiento en interiores asistido por BLE y detección de movimiento. Plaspy emplea ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador. El comportamiento exacto y el contenido del payload pueden variar según la versión de firmware, la revisión de hardware, la configuración de la red LoRaWAN y la implementación del fabricante; por ello, siempre valide la configuración del equipo con la documentación del fabricante para su unidad.

## Resumen del protocolo

El LT-501R envía datos de rastreo y telemetría a Plaspy a través de las capas de transporte de red y los puntos de integración de la plataforma. El papel público del protocolo es garantizar que el dispositivo pueda identificarse, reportar posición y eventos de telemetría, y permitir que Plaspy convierta esos reportes en actualizaciones de ubicación, historial y alertas para flujos de trabajo de gestión de activos.

- Transporte de fijaciones de ubicación y telemetría para que Plaspy muestre la posición en tiempo real y las rutas históricas.
- Entrega de eventos de movimiento y alertas del acelerómetro para que Plaspy pueda activar notificaciones antirrobo y cambios de estado.
- Transmisión de detecciones de balizas BLE y estados de sensores para soportar posicionamiento híbrido interior-exterior en Plaspy.
- Identificación y reporte del estado del dispositivo para que Plaspy asocie la telemetría entrante con el activo correcto.
- Los payloads se reencaminan a Plaspy por la ruta de red utilizada en el despliegue en lugar de requerir una selección manual de protocolo dentro de la plataforma.

## Cómo detecta Plaspy el protocolo

Plaspy recibe telemetría de los rastreadores soportados en un punto de ingestión común y usa esos datos entrantes para identificar automáticamente el protocolo del dispositivo. En la mayoría de las integraciones estándar, los usuarios no necesitan seleccionar un protocolo dentro de Plaspy si el dispositivo está configurado para reportar correctamente al endpoint de Plaspy.

- Plaspy escucha en un único endpoint y puerto compartido para los reportes de dispositivos y aplica detección automática de protocolo.
- Todos los dispositivos que reportan a Plaspy usan el mismo puerto, lo que simplifica la configuración y el onboarding.
- Si un dispositivo o la red está configurado para apuntar al endpoint de Plaspy, la plataforma detectará las variantes de protocolo soportadas sin selección manual.
- La configuración correcta del dispositivo y el enrutamiento adecuado de la telemetría al endpoint de Plaspy suelen ser los requisitos para que la detección automática funcione.
- En despliegues basados en LoRaWAN y Helium, el reenvío desde el network server hacia Plaspy es la vía típica para entregar los payloads.

## Transporte y contexto de conexión

Las opciones de transporte y conectividad determinan cómo la telemetría del LT-501R llega a Plaspy. Aunque el LT-501R es principalmente un rastreador LoRaWAN, Plaspy admite recibir reportes de dispositivos en un endpoint y puerto compartidos. Los dispositivos y los network servers pueden estar configurados para enrutar la telemetría al servicio de Plaspy usando DNS o direcciones IP directas.

- El dominio del servidor Plaspy para reportes de dispositivos es d.plaspy.com.
- La dirección IP del servidor Plaspy es 54.85.159.138 y la plataforma acepta conexiones en el puerto 8888.
- Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888 según el soporte del dispositivo y la configuración del despliegue.
- Todos los dispositivos soportados por Plaspy usan el mismo puerto, lo que reduce la variabilidad en la configuración entre modelos.
- Para despliegues LoRaWAN como Helium, el network server suele reenviar los payloads decodificados al endpoint de Plaspy o a una integración que Plaspy ingiere.

## Notas sobre compatibilidad

- Las revisiones de firmware pueden cambiar la composición del payload y las funciones disponibles, por lo que la versión de firmware es importante para validar la compatibilidad.
- Las variantes de hardware y las opciones regionales de radiofrecuencia afectan cómo se despliega el equipo y qué network servers se usan.
- La configuración del network server LoRaWAN y las integraciones de Helium determinan si los payloads llegan a Plaspy según lo esperado.
- La selección de transporte entre UDP y TCP debe coincidir con las capacidades del dispositivo o del network server y con el endpoint configurado en Plaspy.
- La detección automática en Plaspy reduce la configuración manual, pero sigue siendo necesario el enrutamiento correcto del endpoint y el reenvío esperado de payloads.
- Siempre compare las capacidades de los payloads y la disponibilidad de funciones con la documentación del fabricante para su variante específica del LT-501R.

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación ayuda a un onboarding confiable, a una resolución de problemas más rápida y a alcanzar la cadencia de actualizaciones y la duración de batería esperadas del LT-501R cuando se usa con Plaspy. Tener claro cómo se transmite la telemetría facilita diagnosticar datos faltantes, problemas de radio por región o errores en el reenvío de la red.

- Confirma si el dispositivo está reportando al endpoint y puerto correctos de Plaspy.
- Ayuda a validar que los eventos de movimiento y BLE llegan según lo esperado para las reglas de alertas.
- Orienta los pasos de resolución de problemas cuando faltan fijaciones de posición, estado de batería o historial.
- Informa decisiones sobre intervalos de reporte y ajustes de red para optimizar la duración de la batería.
- Facilita la coordinación de actualizaciones de firmware o solicitudes de soporte al proveedor en función del comportamiento observado.

## Por qué usar Plaspy con este protocolo

Usar el LT-501R con Plaspy ofrece una plataforma práctica para monitoreo de activos donde la larga duración de batería, el alcance LoRaWAN y el posicionamiento asistido por BLE son relevantes. Plaspy ingiere fijaciones de ubicación, eventos de movimiento y detecciones de sensores para que los equipos puedan mapear activos, recibir alertas en tiempo real y analizar movimientos históricos en despliegues que pueden combinar LoRaWAN y otras fuentes de telemetría.

Plaspy simplifica la ingestión de dispositivos al usar un único puerto de escucha y detección automática de protocolo, permitiendo que los equipos se concentren en flujos operativos como geocercas, detección de manipulación y gestión de inventario. Para obtener más información sobre Plaspy y cómo integrarse con rastreadores como el LT-501R visite https://www.plaspy.com. Para los detalles específicos del protocolo por dispositivo, notas de firmware y variantes de hardware consulte la documentación del fabricante en https://www.globalsat.com.tw/ ya que el soporte del protocolo y el comportamiento del dispositivo pueden cambiar con el tiempo.
