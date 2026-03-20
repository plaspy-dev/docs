---
slug: /teltonika/fmb140/protocol
id: fmb140-protocol
sidebar_label: Protocol
title: Teltonika - FMB140 Protocol
sidebar_class_name: menu_item_tracker
description: Guía de protocolo público para Teltonika FMB140 y su comunicación con Plaspy para ubicación y telemetría CAN
keywords:
  - protocolo Teltonika FMB140
  - protocolo GPS Teltonika FMB140
  - compatibilidad FMB140 Plaspy
  - telemetría CAN FMB140
  - protocolo rastreador GPS Teltonika
  - protocolo de seguimiento de vehículos Teltonika
  - compatibilidad de dispositivos Plaspy
  - telemetría Bluetooth FMB140
  - protocolo de rastreo de flotas
  - seguimiento Teltonika FMB140
---

# Teltonika - Protocolo FMB140

Esta página presenta el contexto público del protocolo para integrar el Teltonika FMB140 con la plataforma Plaspy. Describe, a un nivel general, cómo el rastreador comunica a Plaspy la ubicación, la telemetría derivada del bus CAN y los eventos de accesorios, sin entrar en detalles internos del dispositivo ni en información confidencial del fabricante.

Plaspy utiliza ajustes de conexión compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el dispositivo reporta al endpoint de Plaspy. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que las particularidades del dispositivo pueden cambiar entre SKUs y actualizaciones de firmware.

## Descripción general del protocolo

El protocolo de comunicación del rastreador define cómo el FMB140 envía posición, parámetros del bus CAN, datos de sensores Bluetooth y eventos de accesorios a un servidor remoto. Esta visión pública explica el papel del protocolo para garantizar subidas confiables a Plaspy y cómo esos flujos se convierten en telemetría utilizable.

- Permite que el FMB140 se identifique y entregue ubicación y telemetría al endpoint de Plaspy.
- Transfiere parámetros derivados del CAN y eventos de accesorios para que Plaspy los integre en paneles y reportes.
- Soporta reportes periódicos y basados en eventos para que Plaspy reciba actualizaciones oportunas sobre movimiento, contacto/ignición y alertas de sensores.
- Define las interacciones a nivel de transporte necesarias para mantener una conectividad consistente desde el vehículo hacia la nube.
- Permite coordinar cambios de configuración remota y flujos de gestión de firmware mediante las herramientas de Teltonika y las integraciones de Plaspy.

## Cómo Plaspy detecta el protocolo

Plaspy acepta conexiones entrantes de dispositivos en un endpoint y puerto compartidos y realiza detección automática de protocolo, por lo que normalmente no es necesario seleccionar el protocolo manualmente dentro de la plataforma. Cuando el FMB140 está configurado para reportar a Plaspy, la plataforma reconoce el patrón de comunicación entrante y mapea los datos del dispositivo al flujo de procesamiento correcto.

- Todos los dispositivos soportados por Plaspy usan el mismo endpoint y puerto del servidor para reportar.
- El dominio del servidor de Plaspy para reportes de dispositivos es d.plaspy.com y la IP pública del servidor es 54.85.159.138.
- El puerto de escucha que usa Plaspy para reportes de dispositivos es 8888 y se comparte entre dispositivos.
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta al endpoint de Plaspy.
- Si el dispositivo está configurado correctamente para reportar a Plaspy, por lo general no se requiere seleccionar el protocolo manualmente en la plataforma.

## Transporte y contexto de conexión

El transporte es el método de conexión usado para enviar los datos del protocolo desde el FMB140 a Plaspy. La elección entre UDP y TCP depende del soporte del dispositivo y las preferencias de configuración; afecta las características de entrega pero no cambia que el endpoint y el puerto de Plaspy sean los mismos.

- El FMB140 puede configurarse para usar UDP o TCP en el puerto 8888 según la configuración del dispositivo y los requisitos de la red.
- Los dispositivos pueden apuntar al servidor de Plaspy usando el dominio d.plaspy.com o la IP 54.85.159.138.
- Usar TCP ofrece entrega orientada a conexión, mientras que UDP puede reducir latencia en algunos escenarios de reporte de eventos, dependiendo de la red y la configuración del dispositivo.
- Plaspy utiliza el puerto compartido 8888 para todos los dispositivos, por lo que la selección de transporte no cambia el endpoint de Plaspy.
- Asegúrese de que los firewalls de red permitan tráfico saliente hacia d.plaspy.com o 54.85.159.138 en el puerto 8888 para un reporte exitoso.

## Notas de compatibilidad del protocolo

- Las variaciones de firmware pueden cambiar qué campos de datos se reportan y cómo se exponen los parámetros CAN; siempre verifique las notas de la versión de firmware para el SKU FMB140 en uso.
- Las SKUs de hardware difieren por la solución CAN integrada, por ejemplo variantes LV CAN o ALL CAN, lo que afecta los métricos CAN disponibles y la compatibilidad con accesorios.
- La elección del transporte entre UDP y TCP puede verse limitada por políticas del operador o de la red local y puede influir en el modo de entrega de mensajes.
- El soporte de accesorios Bluetooth y los formatos de eventos de accesorios pueden variar según el firmware y el accesorio específico.
- Se recomiendan las herramientas de configuración del fabricante como Teltonika Configurator y FOTA WEB para aplicar los parámetros de reporte correctos para Plaspy.
- Valide la configuración de reporte del dispositivo contra los requisitos de conexión de Plaspy y la documentación del producto de Teltonika antes de un despliegue a gran escala.
- Tenga en cuenta que el FMB140 aparece con estado de fin de vida (EOL) en algunos listados; confirme disponibilidad y soporte oficial al planear despliegues.

## Por qué es importante conocer el protocolo

Comprender el protocolo de comunicación ayuda a asegurar una incorporación de dispositivos más confiable, un mapeo de telemetría preciso y una resolución de problemas más eficiente al integrar dispositivos FMB140 con Plaspy. Tener claridad sobre el contexto público del protocolo reduce la incertidumbre durante la configuración y permite operaciones de flota más predecibles.

- Acelera la configuración inicial al alinear el destino de reporte y el transporte con las expectativas de Plaspy.
- Facilita el diagnóstico de problemas de conectividad o mapeo de datos al saber qué tipos de datos puede suministrar el rastreador.
- Orienta la elección de SKU y combinaciones de accesorios que satisfagan los requisitos de telemetría para su caso de uso.
- Mejora los flujos de gestión remota al clarificar cómo afectan los cambios de firmware y parámetros al reporte.
- Ayuda a planificar según las condiciones de red al escoger el transporte y las estrategias de reintento apropiadas.

## Por qué usar Plaspy con este protocolo

Usar el Teltonika FMB140 con Plaspy ofrece a las organizaciones un dispositivo compacto con capacidad CAN que integra posición del vehículo, telemetría derivada del CAN y eventos de accesorios en una plataforma centralizada de gestión de flotas. Esta combinación es útil para rastreo en tiempo real, análisis de comportamiento de conductores, programas de manejo eficiente y monitoreo de activos donde las perspectivas a nivel CAN y los datos de sensores Bluetooth aportan valor operativo.

Si desea obtener más información sobre cómo Plaspy gestiona las comunicaciones de dispositivos, visite https://www.plaspy.com. Para el comportamiento más reciente de protocolo y firmware específico del dispositivo, verifique siempre los detalles en el sitio del fabricante https://www.teltonika-gps.com/ ya que el soporte e implementación del protocolo pueden cambiar con el tiempo.
