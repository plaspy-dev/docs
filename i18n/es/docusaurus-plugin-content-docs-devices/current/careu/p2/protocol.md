---
slug: /careu/p2/protocol
id: p2-protocol
sidebar_label: Protocol
title: CAREU - P2 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del rastreador CAREU P2 y su comunicación con los servidores de Plaspy
keywords:
  - protocolo CAREU P2
  - protocolo GPS CAREU P2
  - compatibilidad CAREU P2 Plaspy
  - protocolo de comunicación CAREU P2
  - protocolo de rastreo CAREU P2
  - rastreador CAREU P2
  - integración de dispositivos Plaspy
  - protocolo de rastreador GPS
  - protocolo de rastreador personal
  - rastreo de vehículos CAREU
---

# CAREU - P2 Protocolo

Esta página ofrece una visión pública y de alto nivel sobre el contexto del protocolo de comunicación del rastreador personal CAREU P2 cuando se utiliza con Plaspy. Explica cómo el dispositivo normalmente reporta ubicación, alertas y estado a una plataforma remota, y qué papel cumple el protocolo de reporte del rastreador para lograr una integración fiable con Plaspy.

El CAREU P2 es un rastreador personal compacto con conectividad 3G y 2G, llamadas bidireccionales, alerta SOS, intervalos de reporte configurables hasta un segundo y accesorios opcionales como una estación de carga Bluetooth. Plaspy utiliza ajustes de conexión compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, pero el comportamiento exacto puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante.

## Resumen del protocolo

A grandes rasgos, el protocolo del dispositivo P2 define cómo el rastreador se identifica ante un servidor, comunica ubicaciones y telemetría, y envía alertas de eventos como SOS o batería baja. Comprender este contexto público ayuda a los administradores a garantizar que el equipo esté configurado para reportar a Plaspy y a confirmar que la telemetría esperada llega a la plataforma.

- Permite el envío periódico de posición y estado desde el P2 a un servidor remoto para que Plaspy muestre ubicación y alertas.
- Incluye identificación del dispositivo e información de sesión para asociar los reportes entrantes con el activo correcto en Plaspy.
- Transmite tipos de eventos como SOS, caída o falta de movimiento, batería baja y alertas de movimiento que se usan para monitoreo y notificaciones.
- Soporta intervalos de reporte configurables, permitiendo rastreo detallado hasta un segundo cuando el dispositivo y la red lo permiten.
- Puede incluir estados de accesorios opcionales, como sincronización Bluetooth o presencia de estación de carga, como señales separadas que la plataforma puede usar para determinar el estado del equipo.

## Cómo Plaspy detecta el protocolo

Plaspy recibe reportes de muchos modelos y protocolos distintos. Para simplificar la configuración, Plaspy ofrece un único endpoint y puerto y detecta automáticamente el protocolo del rastreador cuando el dispositivo reporta a ese endpoint. En la mayoría de los casos, un dispositivo correctamente configurado no requiere que el usuario seleccione manualmente un protocolo dentro de Plaspy.

- Plaspy server domain is d.plaspy.com which devices can use as the reporting endpoint.
- Plaspy server IP is 54.85.159.138 and can be used where DNS is not available.
- The port is 8888 and Plaspy accepts tracker reports on this port for all supported devices.
- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 según el soporte del equipo y el entorno de red.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la configuración de equipos y las reglas de firewall.
- Plaspy detecta automáticamente el protocolo del rastreador cuando los datos llegan al endpoint compartido, por lo que la selección manual suele ser innecesaria.

## Transporte y contexto de conexión

Los ajustes de transporte y conexión determinan cómo el CAREU P2 alcanza Plaspy a través de la red móvil. El P2 soporta reporte celular y puede configurarse para usar transporte TCP o UDP hacia el endpoint y puerto compartidos de Plaspy.

- Los dispositivos pueden apuntar al dominio Plaspy d.plaspy.com o a la IP del servidor 54.85.159.138 según los requerimientos de la red.
- El puerto utilizado para todos los reportes a Plaspy es 8888 y el dispositivo puede configurarse para usar UDP o TCP en ese puerto.
- Los modos de red del P2 incluyen 3G y 2G, lo que afecta la conectividad y la confiabilidad del reporte según la región.
- Usar el endpoint y puerto compartidos de Plaspy reduce las diferencias de configuración por dispositivo y simplifica el manejo de firewalls y NAT.
- Si surgen problemas de conectividad, verifique la señal del operador, la configuración del APN y que el dispositivo esté configurado para reportar al endpoint de Plaspy en el puerto 8888.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware y software en el P2 pueden modificar features disponibles, el contenido de los mensajes y el comportamiento. Verifique la versión de firmware al resolver problemas.
- Revisiones de hardware o SKUs regionales pueden introducir pequeñas diferencias en los campos reportados o en las alertas disponibles.
- Algunas funciones opcionales, como la Estación de Carga y la sincronización BLE, pueden usar enlaces locales separados o estados de dispositivo que no forman parte del canal primario de reporte.
- La selección de transporte entre UDP y TCP puede afectar la semántica de entrega; elija el transporte que coincida con la configuración del dispositivo y el entorno de red.
- Siempre valide ajustes clave como el endpoint de destino y el puerto frente a los requisitos de Plaspy antes de desplegar dispositivos a gran escala.
- Para comandos específicos del dispositivo, funciones extendidas o notas relacionadas con firmware, consulte la documentación del fabricante.

## Por qué es importante entender el protocolo

Conocer el contexto público del protocolo del CAREU P2 ayuda a administradores e integradores a configurar los equipos correctamente, interpretar el comportamiento del dispositivo y resolver problemas comunes de conectividad o reporte. Tener conciencia del protocolo facilita despliegues más rápidos y un monitoreo continuo más confiable.

- Asegura que el dispositivo esté configurado para reportar al endpoint y puerto correctos de Plaspy para que los datos lleguen a la plataforma.
- Ayuda a distinguir entre problemas de red, de transporte y de dispositivo durante la resolución de incidencias.
- Orienta sobre las expectativas de frecuencia de reporte, impacto en batería y tiempos de evento según la configuración del equipo.
- Apoya decisiones operativas sobre qué transporte habilitar y cómo configurar geocercas y umbrales de alerta.
- Reduce el tiempo de inactividad al facilitar la confirmación de si la telemetría se está enviando y recibiendo como se espera.

## Por qué usar Plaspy con este protocolo

Usar el CAREU P2 con Plaspy proporciona una forma centralizada de recopilar ubicación, estado y alertas desde rastreadores personales desplegados entre usuarios o activos. La detección automática de protocolos y el modelo de endpoint compartido de Plaspy simplifican despliegues masivos y reducen la configuración por dispositivo, lo cual es especialmente útil en escenarios de cuidado, seguridad y trabajadores de campo donde las alertas fiables y el reporte frecuente son críticos.

To learn more about Plaspy and how it integrates with devices like the CAREU P2 visit https://www.plaspy.com. Please note that protocol support, firmware behavior, and manufacturer device details can change over time so verify the latest device specific information on the manufacturer website https://www.systech-iot.com/.
