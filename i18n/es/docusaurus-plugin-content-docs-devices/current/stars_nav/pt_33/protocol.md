---
slug: /stars_nav/pt_33/protocol
id: pt_33-protocol
sidebar_label: Protocol
title: Stars Nav - PT-33 Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo del tracker Stars Nav PT-33 y cómo se comunica con Plaspy para rastreo en tiempo real
keywords:
  - Protocolo Stars Nav PT-33
  - Protocolo GPS Stars Nav PT-33
  - Compatibilidad PT-33 Plaspy
  - Protocolo de rastreo PT-33
  - Protocolo de tracker personal
  - Protocolo GPS Plaspy
  - Integración tracker Stars Nav
  - Telemetría PT-33
  - Alertas botón de pánico PT-33
  - Registro de ubicaciones PT-33
---

# Stars Nav - Protocolo PT-33

Esta página presenta el contexto público del protocolo para usar el tracker personal Stars Nav PT-33 con Plaspy. Se centra en cómo el dispositivo se comunica en términos generales y no sensibles, y en qué debe considerar al configurar el PT-33 para que envíe ubicaciones, alertas y registros almacenados a Plaspy para seguimiento en tiempo real y revisión histórica.

Plaspy utiliza ajustes de conexión compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del tracker cuando el dispositivo reporta a la plataforma. El comportamiento exacto del protocolo y las funciones disponibles pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta guía cubre el contexto general de comunicación y consideraciones prácticas de compatibilidad más que detalles a nivel de firmware.

## Visión general del protocolo

El protocolo de reporte del PT-33 regula cómo el dispositivo envía fijaciones de posición, eventos de alerta y descargas de registros almacenados a un servidor remoto para que Plaspy pueda ingerir y presentar esos datos. A nivel público, el protocolo define los tipos de mensajes que transmite el tracker y cómo se entregan dichos mensajes a Plaspy para su mapeo, alertas e historial.

- Transporta reportes de posición y marcas de tiempo para que Plaspy muestre la ubicación en tiempo real y reconstruya rutas.
- Envía notificaciones de eventos como pulsaciones del botón de pánico, entrada y salida de geocercas y alertas de exceso de velocidad que activan flujos de trabajo en Plaspy.
- Soporta transferencias por lotes o descargas de registros para que el PT-33 pueda reenviar registros almacenados a Plaspy para análisis histórico.
- Puede incluir formatos de coordenadas configurables como NMEA o WGS84 para ajustarse a las expectativas de mapeo.
- Funciona en conjunto con las opciones de transporte y direccionamiento de servidor para que los mensajes lleguen de forma fiable a Plaspy para su análisis y visualización.

## Cómo Plaspy detecta el protocolo

Plaspy recibe el tráfico entrante de los dispositivos en un único endpoint y puerto compartidos, y la plataforma determina automáticamente el protocolo del tracker según los mensajes reportados. En la mayoría de los despliegues comunes, un PT-33 correctamente configurado para reportar al endpoint de Plaspy no requerirá selección manual de protocolo en la interfaz de Plaspy.

- Plaspy escucha los reportes de los dispositivos en el endpoint compartido d.plaspy.com.
- La plataforma también acepta conexiones directas a la IP del servidor 54.85.159.138 para despliegues que prefieren direccionamiento numérico.
- Todos los dispositivos soportados por Plaspy usan el mismo puerto 8888, lo que simplifica la configuración de los equipos.
- Plaspy detecta automáticamente el protocolo del tracker cuando un dispositivo envía datos al endpoint de Plaspy.
- Por lo general, usted solo necesita apuntar el PT-33 al endpoint de Plaspy y verificar los ajustes de transporte en el lado del dispositivo.

## Transporte y contexto de conexión

Las opciones de transporte determinan cómo se envían los mensajes del PT-33 a Plaspy, pero no cambian el papel público del propio protocolo. El PT-33 puede configurarse para usar distintos métodos de transporte según el firmware del dispositivo y el entorno de red, y esa configuración afecta la forma en que el tracker se conecta a Plaspy.

- El PT-33 puede configurarse para usar UDP o TCP en el puerto 8888 según el soporte del dispositivo y los ajustes seleccionados.
- Los dispositivos pueden apuntar al dominio d.plaspy.com o a la IP del servidor 54.85.159.138 cuando no se utiliza resolución DNS.
- Usar el puerto compartido 8888 entre dispositivos reduce la complejidad de configuración para despliegues y aprovisionamiento.
- La selección del transporte influye en características de entrega como el estado de conexión y la retransmisión, lo cual se maneja en la capa de red.
- Asegúrese de que la SIM del dispositivo y el operador móvil permitan el transporte seleccionado para que los mensajes alcancen el endpoint de Plaspy.

## Notas de compatibilidad del protocolo

- Las diferencias de firmware pueden cambiar la temporización de los mensajes, los tipos de eventos disponibles y los campos opcionales. Revise las notas de firmware del dispositivo para cambios relevantes al protocolo.
- Las revisiones de hardware pueden añadir o eliminar sensores o funciones que afecten lo que el tracker reporta a Plaspy.
- Las utilidades de configuración del fabricante o los comandos SMS pueden controlar si el PT-33 usa UDP o TCP y qué dirección de servidor reporta.
- Algunas funciones, como alertas del botón de pánico, contestación automática y transferencias grandes de registros almacenados, dependen tanto del soporte del protocolo como de la implementación del firmware del dispositivo.
- Restricciones del operador de red, ajustes de APN y el aprovisionamiento de la SIM pueden impedir que el dispositivo alcance Plaspy incluso cuando los ajustes de protocolo son correctos.
- Valide la compatibilidad y el comportamiento contra la documentación oficial de Stars Nav y realice pruebas de extremo a extremo antes de desplegar en gran escala.

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación del PT-33 a alto nivel ayuda a garantizar una configuración fiable, una interpretación correcta de los eventos del dispositivo y una operación efectiva a largo plazo con Plaspy. Conocer cómo el dispositivo reporta posición y alertas agiliza la resolución de problemas y reduce sorpresas en la integración.

- Confirma que el dispositivo apunta al endpoint correcto de Plaspy y utiliza el transporte previsto.
- Ayuda a interpretar la temporización de eventos y la cadencia esperada de actualizaciones de posición y alertas de pánico.
- Facilita el diagnóstico de problemas causados por cambios de firmware, restricciones de red o configuraciones incorrectas.
- Apoya la planificación para cargas históricas de datos desde PT-33 con memoria a bordo amplia.
- Permite conversaciones informadas con el fabricante sobre firmware o funciones específicas.

## Por qué usar Plaspy con este protocolo

Usar el Stars Nav PT-33 con Plaspy ofrece a las organizaciones una fuente compacta y confiable de datos de posición y eventos para seguridad personal, monitoreo de activos y respuesta a incidentes. El PT-33 proporciona posicionamiento GNSS preciso mediante un módulo u-blox LEA-5S, alertas por botón de pánico, capacidad de contestación automática y amplio registro a bordo que Plaspy puede ingerir para mapas en vivo, alertas y revisión histórica.

Plaspy simplifica la incorporación de dispositivos usando un único endpoint de servidor y puerto para todos los trackers soportados y detectando automáticamente el protocolo del tracker. Para saber más sobre Plaspy y cómo soporta integraciones de dispositivos, visite https://www.plaspy.com. Para los detalles más recientes sobre el protocolo específico del dispositivo, notas de firmware y listas de funciones del PT-33, verifique la información en el sitio del fabricante http://www.starsnav.com/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
