---
slug: /teltonika/ftm305/protocol
id: ftm305-protocol
sidebar_label: Protocol
title: Teltonika - FTM305 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del Teltonika FTM305 y cómo comunica ubicación y telemetría con Plaspy
keywords:
  - protocolo Teltonika FTM305
  - protocolo GPS Teltonika FTM305
  - comunicación Teltonika FTM305
  - compatibilidad FTM305 Plaspy
  - protocolo de rastreo FTM305
  - protocolo GPS Teltonika
  - protocolo e-movilidad
  - protocolo telemetría vehicular
  - protocolo rastreador GNSS
  - protocolo de dispositivo Plaspy
---

# Teltonika - Protocolo FTM305

Esta página ofrece una visión pública y de alto nivel sobre el contexto de comunicación del Teltonika FTM305 cuando se utiliza con Plaspy. Se enfoca en cómo el rastreador informa ubicación y telemetría a Plaspy, y en los aspectos de los reportes del dispositivo que son relevantes para una integración exitosa, sin exponer detalles internos o propietarios sensibles.

Plaspy utiliza ajustes de conexión compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el dispositivo reporta a la plataforma. Dispositivos como el FTM305 pueden configurarse para enviar datos al endpoint de Plaspy en d.plaspy.com o al servidor IP 54.85.159.138 en el puerto 8888 usando UDP o TCP. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la configuración del fabricante, por lo que los detalles específicos del dispositivo deben validarse con la documentación del proveedor.

## Resumen del protocolo

El protocolo del FTM305 define cómo el dispositivo comunica coordenadas GNSS, telemetría del bus CAN y estados al backend remoto, como Plaspy. Para integración, los puntos clave son que el rastreador se identifica ante el servidor, envía actualizaciones de ubicación periódicas o por eventos, y entrega telemetría que Plaspy puede mapear en paneles y alertas.

- Permite el reporte de posiciones GNSS y la entrega de telemetría con marca de tiempo a Plaspy para seguimiento en tiempo real y análisis histórico.
- Transporta señales del vehículo y datos del bus CAN para que Plaspy interprete estado de batería, encendido y sensores personalizados cuando estén disponibles.
- Proporciona identificación y contexto de sesión para que Plaspy asocie los mensajes entrantes con el registro de dispositivo correcto.
- Soporta transporte sobre redes IP estándar, por lo que el dispositivo puede usar redes móviles para alcanzar el endpoint de Plaspy.
- Permite reportes por evento para alarmas, activaciones de geocercas y otros sucesos operativos que Plaspy puede usar en reglas y notificaciones.

## Cómo detecta Plaspy el protocolo

Plaspy recibe el tráfico entrante de los dispositivos en un endpoint y puerto comunes y usa detección automatizada para determinar el protocolo con el que llegan los datos. En la práctica, esto significa que la mayoría de los usuarios no necesitan seleccionar manualmente un protocolo de dispositivo dentro de Plaspy cuando el rastreador está correctamente configurado para reportar al endpoint de Plaspy.

- Plaspy escucha en el endpoint y puerto compartidos para todos los dispositivos soportados y aplica la detección de protocolo de forma automática.
- Los dispositivos deben configurarse para reportar a d.plaspy.com o al servidor IP 54.85.159.138 para alcanzar Plaspy.
- Plaspy utiliza el mismo puerto para todos los dispositivos, lo que mantiene la configuración consistente entre modelos.
- Cuando un dispositivo apunta correctamente a Plaspy, por lo general solo es necesario confirmar la identificación del dispositivo y ajustes básicos en la plataforma.
- Si un dispositivo entrante no se registra como se espera, verificar la configuración de transporte y el comportamiento del firmware es el siguiente paso habitual.

## Contexto de transporte y conexión

El contexto de conexión cubre cómo el FTM305 establece el transporte de red para alcanzar el servidor de Plaspy. El FTM305 soporta rutas de datos celulares adecuadas para despliegues IoT y puede configurarse para usar UDP o TCP según los requisitos y las condiciones de la red.

- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 para enviar datos a Plaspy.
- Los dispositivos pueden apuntar al dominio d.plaspy.com o directamente al servidor IP 54.85.159.138 para alcanzar Plaspy.
- Plaspy acepta reportes de dispositivos en el mismo puerto para todos los modelos compatibles, simplificando el despliegue.
- La selección del transporte puede afectar características de entrega como retransmisión y comportamiento de sesión, por lo que debe elegirse el modo que mejor se ajuste a sus necesidades de red.
- Asegúrese de que los firewalls de red y las configuraciones del operador móvil permitan tráfico saliente hacia el endpoint y puerto de Plaspy.

## Notas de compatibilidad del protocolo

- Las diferencias de firmware entre lotes de dispositivos pueden afectar intervalos de reporte, campos de telemetría disponibles y funciones habilitadas.
- Revisiones de hardware o variantes regionales pueden exponer interfaces distintas o configuraciones de CAN que modifiquen la carga de telemetría.
- Las herramientas remotas del fabricante son comúnmente usadas para configurar endpoints de reporte y el modo de transporte; revise las herramientas de configuración del dispositivo antes del despliegue.
- La elección entre UDP y TCP debe reflejar sus requisitos de confiabilidad y latencia para la entrega de telemetría.
- Plaspy detecta automáticamente el protocolo entrante, pero la identificación precisa del dispositivo requiere una configuración correcta del endpoint y del transporte.
- Valide siempre el comportamiento del dispositivo en un equipo de prueba antes de implementar a gran escala.

## Por qué es importante comprender el protocolo

Comprender el protocolo de comunicación del FTM305 a un nivel práctico ayuda a asegurar una configuración confiable, facilita la resolución de problemas y mejora la fiabilidad a largo plazo cuando el dispositivo se usa con Plaspy. Conocer qué reporta el dispositivo y cómo llega a la plataforma reduce errores de configuración y mejora la visibilidad operativa.

- Simplifica la configuración inicial al alinear los ajustes de reporte del dispositivo con los requisitos de conexión de Plaspy.
- Acelera la resolución de problemas al acotar problemas a transporte, firmware o desajustes de configuración.
- Ayuda a mapear los campos del bus CAN y la telemetría en los paneles y alertas de Plaspy de manera más efectiva.
- Facilita la planificación de capacidad de red, frecuencia de reporte y consumo de energía en despliegues IoT.
- Agiliza las operaciones del ciclo de vida del dispositivo, como actualizaciones de firmware y configuración remota mediante las herramientas del proveedor.

## Por qué usar Plaspy con este protocolo

Usar el Teltonika FTM305 con Plaspy ofrece a las organizaciones una vía práctica para combinar posicionamiento GNSS preciso y telemetría CAN enriquecida con un backend de gestión de flotas. Plaspy ingiere ubicación y señales del vehículo para visualización en tiempo real, geocercas, alertas y reportes históricos, ayudando a los equipos a tomar decisiones operativas basadas en datos oportunos.

Para conocer más sobre cómo Plaspy trabaja con dispositivos como el FTM305, visite https://www.plaspy.com. Para obtener detalles de protocolo específicos del dispositivo, notas de firmware y variantes regionales, consulte al fabricante en https://www.teltonika-gps.com/ ya que el soporte de protocolo y el comportamiento del firmware pueden evolucionar con el tiempo.
