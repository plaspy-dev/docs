---
slug: /teltonika/fmu126/protocol
id: fmu126-protocol
sidebar_label: Protocol
title: Teltonika - FMU126 Protocol
sidebar_class_name: menu_item_tracker
description: Información pública del protocolo para integrar el Teltonika FMU126 con los servidores de Plaspy y guía de conexión
keywords:
  - Protocolo Teltonika FMU126
  - Protocolo GPS Teltonika FMU126
  - Protocolo de comunicación FMU126
  - Compatibilidad FMU126 con Plaspy
  - Protocolo GPS Teltonika
  - Rastreo de vehículos FMU126
  - Gestión de flotas Teltonika FMU126
  - Integración de trackers Plaspy
  - Conectividad Teltonika FMU126
  - Guía del protocolo FMU126
---

# Teltonika - Protocolo FMU126

Esta página describe el contexto público del protocolo para usar el rastreador Teltonika FMU126 con Plaspy. Resume cómo la conectividad y las funciones del dispositivo —como 3G con fallback a 2G, GNSS y Bluetooth, interfaces RS232, soporte para sensores BLE, adaptadores CAN, antenas internas y salidas de alimentación nativas— se relacionan con el envío de datos de ubicación y telemetría a Plaspy para monitorización y flujos de trabajo de flotas.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del equipo cuando éste reporta a la plataforma. El endpoint del servidor Plaspy es d.plaspy.com con la IP pública 54.85.159.138 y la plataforma acepta informes de dispositivos en el puerto 8888. Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888 y Plaspy utiliza el mismo puerto para todos los dispositivos soportados. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que se debe validar el comportamiento del equipo contra la documentación oficial del fabricante.

## Resumen del protocolo

El protocolo del FMU126 regula cómo el rastreador empaqueta la posición GNSS, el contexto celular, la telemetría de sensores y las entradas de periféricos para su entrega a un servidor remoto como Plaspy. El protocolo determina qué campos se envían, cómo se comunica la identidad y el estado del dispositivo y qué funciones de gestión están disponibles de forma remota.

- Permite la entrega de datos de posición y movimiento del FMU126 a Plaspy para seguimiento en tiempo real y análisis histórico
- Transporta datos de sensores y periféricos como lecturas de sensores BLE, datos CAN y entradas RS232 que Plaspy puede mapear a campos telemáticos
- Transmite la identidad y el estado del dispositivo para que Plaspy asocie los mensajes con el activo correcto
- Soporta las funciones del fabricante expuestas para configuración remota y reporte según lo implemente el firmware del dispositivo
- Proporciona la carga útil que Plaspy ingiere y traduce en telemetría utilizable para paneles y alertas

## Cómo detecta Plaspy el protocolo

Plaspy acepta informes entrantes en un único endpoint y puerto compartidos y detecta automáticamente el protocolo del rastreador cuando un dispositivo configurado correctamente se comunica con el servidor. Esto significa que en la mayoría de las implementaciones usted no necesita seleccionar manualmente un protocolo dentro de Plaspy si el equipo está configurado para reportar al endpoint de Plaspy.

- Los dispositivos envían datos a d.plaspy.com o directamente a 54.85.159.138 y Plaspy recibe esos informes en el puerto 8888
- Plaspy identifica automáticamente el formato de reporte y mapea los campos entrantes a objetos de la plataforma cuando los datos del dispositivo coinciden con patrones soportados
- Como Plaspy utiliza el mismo puerto para todos los dispositivos compatibles, las reglas de despliegue y firewall se simplifican
- Si un dispositivo está configurado para usar UDP o TCP, Plaspy acepta ambos transportes en el puerto 8888
- En el caso poco común de comportamientos no estándar del dispositivo, revisar la configuración del equipo y la guía del fabricante ayuda a alinear el reporte con las expectativas de Plaspy

## Contexto de transporte y conexión

Las opciones de transporte y la configuración de red afectan cómo el FMU126 alcanza el servidor de Plaspy. El dispositivo puede configurarse para usar UDP o TCP según el firmware instalado y el comportamiento de reporte deseado, y el destino de reporte puede especificarse mediante un nombre de dominio o la IP del servidor Plaspy.

- El endpoint de Plaspy para reportes es d.plaspy.com y la IP pública del servidor es 54.85.159.138
- Los equipos pueden configurarse para usar UDP o TCP en el puerto 8888 para enviar datos a Plaspy
- Plaspy acepta tráfico de dispositivos en el puerto 8888 para todos los dispositivos soportados, por lo que una única regla de salida suele ser suficiente
- Al configurar el FMU126, asegúrese de que el APN del dispositivo y la ruta de datos móviles permitan conexiones salientes al endpoint de Plaspy
- Elementos de red como NAT, firewalls del operador y proxies empresariales pueden afectar el comportamiento del transporte y deben permitir tráfico hacia el servidor Plaspy en el puerto 8888

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar qué campos se reportan y con qué frecuencia el FMU126 envía datos
- Las revisiones de hardware y los accesorios opcionales, como adaptadores CAN o sensores externos, pueden afectar la telemetría disponible y los formatos de mensaje
- La selección de transporte entre UDP y TCP es una opción de configuración del dispositivo y puede afectar la semántica de entrega
- Las opciones de configuración del fabricante, como los modos RS232, influyen en cómo se representan en los reportes los dispositivos y lectores externos
- Valide siempre comportamientos clave como la frecuencia de reporte GNSS, el manejo de sensores BLE y los mapeos CAN en una unidad de prueba antes de un despliegue masivo
- Consulte la documentación de Teltonika para detalles sobre características específicas de firmware que puedan cambiar la comunicación del FMU126

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación del FMU126 ayuda a garantizar una configuración sin contratiempos, un mapeo de datos preciso y una operación predecible cuando el dispositivo reporta a Plaspy. Tener claro qué envía el dispositivo y cuándo lo hace reduce el tiempo de resolución de problemas y ayuda a alinear las capacidades del equipo con los requisitos operativos.

- Ayuda a confirmar que el FMU126 está configurado para reportar la telemetría y los sensores correctos a Plaspy
- Acelera el diagnóstico de problemas de conectividad relacionados con transporte, DNS o restricciones del operador
- Mejora el mapeo de datos periféricos como valores de sensores BLE y métricas CAN en los paneles de Plaspy
- Asiste en la planificación de actualizaciones de firmware que puedan alterar el comportamiento de reporte
- Favorece un comportamiento consistente en una flota mixta cuando los dispositivos usan el mismo endpoint y puerto de Plaspy

## Por qué usar Plaspy con este protocolo

Usar el Teltonika FMU126 con Plaspy ofrece a las organizaciones una vía sencilla para ingerir en una sola plataforma de gestión de flotas los datos de posición, sensores y periféricos del vehículo. El soporte del FMU126 para GNSS, redundancia celular, sensores BLE, CAN y periféricos RS232 lo hace adecuado para una variedad de casos de uso telemático, y la detección automática de protocolo y el modelo de puerto común de Plaspy simplifican los despliegues a gran escala.

Para obtener más información sobre la integración de dispositivos y las capacidades de la plataforma, visite https://www.plaspy.com. Para detalles específicos y actualizados del protocolo del dispositivo, notas de firmware y orientación de implementación, consulte al fabricante en https://www.teltonika-gps.com/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
