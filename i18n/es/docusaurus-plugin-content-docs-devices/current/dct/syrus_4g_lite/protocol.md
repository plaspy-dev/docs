---
slug: /dct/syrus_4g_lite/protocol
id: syrus_4g_lite-protocol
sidebar_label: Protocol
title: DCT - Syrus 4G Lite Protocol
sidebar_class_name: menu_item_tracker
description: Referencia pública del protocolo DCT Syrus 4G Lite para comunicación con Plaspy en rastreo GPS y telemetría
keywords:
  - DCT Syrus 4G Lite
  - protocolo DCT Syrus
  - protocolo GPS Syrus 4G Lite
  - compatibilidad Syrus 4G Lite con Plaspy
  - protocolo rastreador GPS
  - protocolo rastreo vehicular
  - protocolo gestión de flotillas
  - protocolo telemática IoT
  - integración Syruslang
  - telemática Apex OS
---

# DCT - Protocolo Syrus 4G Lite

En esta página se describe el contexto público del protocolo utilizado por el tracker DCT Syrus 4G Lite cuando se integra con Plaspy. Se explica de forma general cómo se comunica el dispositivo, qué ajustes de conexión se emplean para alcanzar el punto de conexión de Plaspy y de qué manera el comportamiento del protocolo afecta la entrega de datos para rastreo en tiempo real, registros tipo blackbox y diagnósticos del motor. El enfoque está en detalles operativos públicos y no sensibles, no en formatos de paquetes propietarios internos.

Plaspy emplea ajustes de conexión compartidos para los dispositivos soportados y detecta automáticamente el protocolo del tracker cuando el equipo reporta al endpoint de Plaspy. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que para configurar y resolver incidencias conviene revisar tanto las notas de firmware como la documentación del fabricante además de esta página.

## Visión general del protocolo

El protocolo de comunicación del Syrus 4G Lite es el mecanismo que permite al equipo identificarse, reportar posición GNSS y telemetría, y enviar información de estado del dispositivo y eventos de blackbox a Plaspy. En la práctica esto significa que el tracker envía periódica y puntualmente telemetría al endpoint de Plaspy para que la plataforma pueda ingerir, correlacionar y presentar información útil a los operadores de flota.

- Permite reportes de posición GNSS y telemetría en tiempo real a Plaspy para mapas en vivo y alertas
- Transporta registros de salud del dispositivo y eventos blackbox que Plaspy utiliza para diagnóstico y reproducción de incidentes
- Envía códigos de falla del motor y telemetría del bus del vehículo cuando están disponibles para flujos de mantenimiento
- Soporta activadores de gestión remota como configuración y comandos OTA coordinados a través de Plaspy
- Puede filtrarse o enriquecerse en el edge usando el entorno de scripting del dispositivo para reducir ruido antes de reportar

## Cómo Plaspy detecta el protocolo

Plaspy está diseñado para aceptar conexiones de muchos modelos de trackers usando un único endpoint y puerto compartidos, y detecta automáticamente el protocolo entrante para que los usuarios normalmente no necesiten seleccionar el protocolo manualmente dentro de Plaspy. La configuración correcta del dispositivo apuntando al endpoint de Plaspy es el requisito principal para que la detección automática funcione.

- Plaspy acepta tráfico de dispositivos en el dominio compartido d.plaspy.com y la IP pública 54.85.159.138
- Todos los dispositivos en Plaspy usan el mismo puerto, por lo que una única configuración de puerto simplifica la puesta en marcha
- Plaspy detecta automáticamente el protocolo del tracker cuando el dispositivo reporta al endpoint de Plaspy
- Por lo general, los usuarios solo deben configurar el dispositivo para que reporte al dominio o IP de Plaspy y seleccionar el modo de transporte adecuado en el equipo
- Si un dispositivo es alcanzable en el endpoint de Plaspy y está enviando telemetría, la selección de protocolo dentro de la plataforma Plaspy normalmente no es necesaria

## Transporte y contexto de conexión

Las elecciones de conexión y transporte determinan cómo el Syrus 4G Lite entrega su telemetría a Plaspy. El dispositivo soporta transportes celulares comunes y puede configurarse para usar UDP o TCP según la implementación de firmware y el despliegue. Los equipos pueden apuntar al nombre de dominio de Plaspy o directamente a la dirección IP cuando así lo requiera la configuración de red.

- Los dispositivos pueden configurarse para reportar a d.plaspy.com o a 54.85.159.138
- El dispositivo puede usar UDP o TCP en el puerto 8888 según el soporte y la configuración del firmware
- Plaspy usa el puerto 8888 como puerto compartido de reporte para todos los dispositivos soportados
- La elección entre UDP o TCP puede afectar características de entrega como retransmisiones y latencia
- Los firewalls de red y la configuración APN del operador deben permitir conexiones salientes al endpoint de Plaspy en el puerto compartido

## Notas de compatibilidad del protocolo

- Las revisiones de firmware pueden alterar el comportamiento o agregar nuevos campos de telemetría que afectan cómo llegan los datos a Plaspy
- Las variantes de SKU de hardware y las versiones regionales de radio pueden cambiar los transportes disponibles o el rendimiento GNSS
- Las interfaces de configuración del fabricante y los scripts en Syruslang permiten adaptar las tasas de reporte y las cargas útiles de datos
- La selección de transporte entre UDP y TCP debe coincidir con la capacidad del firmware del dispositivo y los compromisos operativos elegidos
- Valide siempre el comportamiento del dispositivo frente a las notas de lanzamiento oficiales y las guías de configuración
- Confirme que el dispositivo apunta al endpoint de Plaspy y usa el puerto 8888 para una ingestión consistente

## Por qué es importante conocer el protocolo

Comprender el protocolo de comunicación ayuda a administradores e integradores a configurar los equipos correctamente, diagnosticar problemas de conectividad o fidelidad de datos y planear actualizaciones de firmware o despliegues a gran escala. Tener claro cómo se entrega la telemetría a Plaspy mejora la disponibilidad y asegura que la plataforma reciba la información necesaria para operaciones e informes.

- Facilita la configuración correcta del equipo para apuntar al endpoint y puerto de Plaspy
- Agiliza la resolución de problemas al acotar incidencias a transporte, red o diferencias de firmware
- Permite optimizar intervalos de reporte y filtrado en el edge para un uso eficiente de datos y batería
- Soporta captura fiable de blackbox y entrega oportuna de diagnósticos del motor para mantenimiento
- Informa decisiones sobre el uso de scripting en el edge o comandos remotos para ajustar el comportamiento del dispositivo

## Por qué usar Plaspy con este protocolo

Usar el Syrus 4G Lite con Plaspy ofrece una vía práctica para integrar hardware telemático robusto con una plataforma centralizada de gestión de flotas. La combinación de GNSS a bordo, capacidad de blackbox, telemetría de fallas del motor y programabilidad en el edge permite a las organizaciones volcar en Plaspy ubicación precisa, registros de incidentes y datos diagnósticos para monitoreo operativo, prevención de pérdidas y automatización del mantenimiento.

Si desea saber más sobre Plaspy y cómo ingiere y presenta telemetría de dispositivos como el Syrus 4G Lite, por favor visite https://www.plaspy.com. Para detalles específicos más recientes del protocolo del dispositivo, notas de firmware y guías de configuración, verifique la información actual en el sitio del fabricante https://www.digitalcomtech.com/. El soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo, por lo que siempre conviene consultar la documentación del fabricante para los detalles de implementación más actuales.
