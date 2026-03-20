---
slug: /teltonika/fmc800/protocol
id: fmc800-protocol
sidebar_label: Protocol
title: Teltonika - FMC800 Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo para integrar Teltonika FMC800 con Plaspy usando ajustes compartidos y detección automática
keywords:
  - protocolo Teltonika FMC800
  - protocolo GPS Teltonika FMC800
  - Teltonika FMC800 Plaspy
  - protocolo de rastreo FMC800
  - rastreo vehicular FMC800
  - rastreador OBD FMC800
  - compatibilidad Plaspy Teltonika
  - protocolo de comunicación FMC800
  - rastreo de flotas FMC800
  - integración sensores Bluetooth FMC800
---

# Teltonika - Protocolo FMC800

Esta página describe el contexto público del protocolo para usar el rastreador Teltonika FMC800 con Plaspy. Resume cómo el dispositivo suele comunicarse con Plaspy en términos seguros y no sensibles, y destaca el papel del protocolo de reporte para el rastreo de flotas, el registro de choques y la telemetría de sensores procedente de un rastreador OBD II plug and play.

Plaspy emplea ajustes de conexión compartidos para los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el dispositivo se configura para reportar al endpoint de Plaspy. El comportamiento exacto del protocolo puede variar entre revisiones de firmware, variantes de hardware y decisiones del fabricante, por lo que esta página se concentra en hechos públicos estables sobre conectividad e integración en lugar de detalles internos específicos de firmware.

## Resumen del protocolo

El protocolo de reporte es el mecanismo que transporta posición, telemetría, datos de sensores y eventos desde el FMC800 a Plaspy para que la ubicación y el estado del vehículo sean utilizables en la plataforma. En un FMC800, el protocolo es responsable de identificar el dispositivo, entregar posiciones GNSS, registro de choques o eventos del acelerómetro, datos OBD y del vehículo, así como información de sensores Bluetooth LE al servidor.

- Transporta la posición del vehículo y datos GNSS a Plaspy para mapeo e historial.
- Envía información de registro de choques y eventos basada en el acelerómetro para análisis de incidentes.
- Transmite métricas y estados derivados del OBD cuando el dispositivo los expone.
- Reenvía datos de sensores Bluetooth LE de balizas y sensores emparejados con el rastreador.
- Incluye la identificación del dispositivo y los intervalos de reporte para que Plaspy asocie los datos con el activo correcto.

## Cómo Plaspy detecta el protocolo

Plaspy recibe conexiones de los dispositivos en un único endpoint y puerto compartidos y realiza detección automática del protocolo para el tráfico entrante. En la mayoría de los casos, un FMC800 configurado correctamente que apunte al endpoint de Plaspy comenzará a entregar telemetría utilizable sin que el usuario tenga que seleccionar manualmente un protocolo en la plataforma.

- El dominio del servidor Plaspy es d.plaspy.com y la IP del servidor es 54.85.159.138.
- El puerto es 8888 y Plaspy usa el mismo puerto para todos los dispositivos soportados.
- Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888 según la capacidad y la configuración del equipo.
- Cuando un dispositivo reporta a d.plaspy.com o a 54.85.159.138 en el puerto 8888, Plaspy detecta automáticamente el protocolo del rastreador.
- La selección manual de protocolo en la plataforma generalmente no es necesaria si el dispositivo está apuntando correctamente al endpoint de Plaspy.

## Transporte y contexto de conexión

Los detalles de conexión describen cómo se entregan los paquetes desde el FMC800 a Plaspy y son independientes de los formatos de mensaje de nivel superior. El FMC800 soporta conectividad celular y puede configurarse para reportar a la endpoint de Plaspy usando las opciones de transporte estándar.

- El dispositivo puede configurarse para enviar datos a Plaspy mediante UDP o TCP en el puerto 8888.
- Los dispositivos pueden apuntar al dominio del servidor d.plaspy.com o directamente a 54.85.159.138 según cómo se ingresen los ajustes de APN y servidor.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la configuración del servidor para flotas.
- El comportamiento de conmutación de red celular, por ejemplo LTE Cat 1 con fallback a 2G, es una capacidad del dispositivo y afecta la disponibilidad de la red, pero no el destino público de conexión.
- Asegúrese de que el APN del operador y los campos de servidor del dispositivo estén configurados para que el FMC800 pueda alcanzar d.plaspy.com en el puerto 8888.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware del FMC800 pueden cambiar cómo se reportan ciertos eventos o campos de datos opcionales; confirme siempre el comportamiento para su versión de firmware.
- Las variantes de hardware o las SKUs regionales pueden ofrecer diferentes bandas de radio u opciones de sensores que afectan qué telemetría está disponible.
- La elección del transporte entre UDP y TCP puede afectar características de entrega como retransmisión y orden; seleccione el transporte compatible con la configuración de su dispositivo.
- El soporte para sensores Bluetooth LE y la disponibilidad de datos OBD dependen de la configuración del dispositivo y de los periféricos emparejados.
- Las herramientas de configuración proporcionadas por el fabricante o los conjuntos de comandos SMS pueden variar según el firmware y deben usarse según la guía de Teltonika.
- Valide la compatibilidad y las funciones disponibles contra la documentación más reciente del fabricante antes de un despliegue a gran escala.

## Por qué es importante entender el protocolo

Tener un entendimiento básico del protocolo de reporte del FMC800 ayuda en la configuración inicial, a validar que el registro de choques y la telemetría de sensores lleguen como se espera, y en la resolución de problemas de conectividad o calidad de datos en Plaspy. También orienta decisiones sobre la elección de transporte, la duración de la batería y los intervalos de reporte, así como en la interpretación de eventos en la plataforma.

- Ayuda a identificar por qué puede faltar telemetría específica como el registro de choques o parámetros OBD.
- Facilita la elección entre UDP o TCP según las necesidades de red y fiabilidad.
- Orienta la configuración de intervalos de reporte y filtros de datos para ajustarse a requisitos operativos.
- Mejora la resolución de problemas cuando los dispositivos no pueden alcanzar d.plaspy.com o cuando las entradas no aparecen en la plataforma.
- Apoya la planificación informada de actualizaciones de firmware anticipando cambios en los campos reportados.

## Por qué usar Plaspy con este protocolo

Usar el FMC800 con Plaspy permite a las organizaciones combinar posicionamiento GNSS preciso, registro de choques desde el acelerómetro integrado, telemetría OBD y datos de sensores Bluetooth LE en una sola plataforma de visibilidad de flota. La detección automática de protocolos de Plaspy y su modelo de endpoint de un solo puerto simplifican la puesta en línea de dispositivos para que los equipos operativos puedan concentrarse en flujos de trabajo y analítica en lugar de en la selección de protocolos de bajo nivel.

Si desea obtener más información sobre Plaspy y cómo la plataforma funciona con dispositivos como el Teltonika FMC800 visite https://www.plaspy.com. Para detalles de protocolo específicos del dispositivo, notas de firmware e instrucciones de configuración más actuales, consulte la documentación del fabricante en https://www.teltonika-gps.com/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
