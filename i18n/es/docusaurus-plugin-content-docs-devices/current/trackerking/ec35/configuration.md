---
slug: /trackerking/ec35/configuration
id: ec35-configuration
sidebar_label: Configuration
title: TrackerKing - EC35 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar TrackerKing EC35 y enviar datos a Plaspy, verificando conectividad para rastreo de flotas
keywords:
  - TrackerKing EC35 configuración
  - TrackerKing EC35 instalación
  - TrackerKing EC35 Plaspy
  - EC35 configuración de servidor
  - EC35 configuración rastreador GPS
  - TrackerKing EC35 software de rastreo
  - configuración de gestión de flotas EC35
  - configuración de rastreador TrackerKing
  - configuración rastreador vehicular EC35
  - EC35 GT06 JT808 configuración
---

# TrackerKing - Configuración del EC35

Esta página documenta el contexto público de configuración para usar el TrackerKing EC35 con Plaspy. Resume los ajustes compartidos del servidor de Plaspy a los que deberá apuntar el equipo, explica qué verificar antes de la integración y describe un flujo de trabajo práctico para dejar el EC35 listo y enviando datos confiables a Plaspy.

Plaspy utiliza ajustes de servidor compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, pero los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Use esta guía junto con la documentación de TrackerKing y las herramientas de su instalador para completar la configuración.

## Resumen de la configuración

Aquí se explica el propósito práctico de configurar el EC35 para Plaspy y los objetivos que debería alcanzar durante la puesta en marcha.

- Apuntar el EC35 a los endpoints del servidor de Plaspy para que las telemetrías y los reportes de ubicación lleguen en tiempo real.
- Seleccionar el transporte (UDP o TCP) en el equipo si es necesario, usando el puerto compartido de Plaspy.
- Validar la conectividad y la negociación del protocolo para que Plaspy detecte automáticamente el protocolo del rastreador.
- Verificar que los reportes del dispositivo (posiciones, eventos de encendido, telemetría de sensores) aparezcan en los paneles de Plaspy.
- Asegurar alimentación persistente y conectividad celular para que el EC35 pueda enviar actualizaciones continuas a Plaspy.

## Ajustes del servidor Plaspy

- server domain d.plaspy.com
- server IP 54.85.159.138
- port 8888
- transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol
- All devices in Plaspy use the same port

## Requisitos típicos antes de comenzar

- Una unidad TrackerKing EC35 con los accesorios necesarios instalados y alimentada.
- Conexión de datos móviles activa y provisionada, apropiada para el modelo EC35 y la región.
- Acceso al método oficial de configuración de TrackerKing o al software del proveedor necesario para introducir la dirección del servidor y el transporte.
- Información básica de identidad del rastreador, como IMEI o ID del dispositivo, para confirmar el equipo en Plaspy tras la activación.
- Fuente de alimentación estable o instalación vehicular verificada antes de iniciar la configuración.
- Acceso administrativo a Plaspy o un flujo de incorporación en Plaspy para confirmar la visibilidad del dispositivo después de que empiece a reportar.

## Cómo se conecta este rastreador a Plaspy

El EC35 transmite ubicación y telemetría a Plaspy usando protocolos de rastreo estándar y transporte TCP o UDP. Al configurar el equipo para que reporte a Plaspy, la plataforma ingiere los reportes entrantes y expone posición, eventos y datos de sensores para monitoreo y reglas.

- El EC35 debe apuntar al endpoint compartido de Plaspy d.plaspy.com o a la IP 54.85.159.138.
- Los datos se envían por el puerto 8888, que Plaspy utiliza para todos los dispositivos compatibles.
- El equipo puede usar UDP o TCP según la selección del instalador y la capacidad del dispositivo.
- Plaspy detecta automáticamente el protocolo del rastreador (por ejemplo GT06, JT808, Tianqin), por lo que no suele ser necesario seleccionar el protocolo desde la plataforma.
- Una vez que comienzan los reportes, Plaspy ofrece mapas en vivo, notificaciones de eventos y reproducción histórica basada en los reportes del EC35.

## Flujo de trabajo habitual de configuración

1. Acceda al método de configuración oficial de TrackerKing o al software proporcionado por el fabricante o su instalador.
2. Ubique la sección de ajustes de servidor o reporte en la interfaz de configuración del dispositivo.
3. Ingrese d.plaspy.com o 54.85.159.138 como dirección del servidor para los reportes.
4. Configure el puerto del servidor en 8888.
5. Seleccione UDP o TCP como transporte si el equipo requiere elegirlo.
6. Aplique o guarde la configuración y siga los mensajes del dispositivo para persistir los ajustes.
7. Reinicie el equipo si el método de configuración o el firmware requieren reboot para activar los nuevos ajustes.
8. Valide que el EC35 reporte a Plaspy confirmando que el dispositivo aparece en la interfaz de Plaspy y que se reciben actualizaciones de ubicación o telemetría.

## Comandos de configuración de ejemplo

Los comandos exactos y su formato dependen de la herramienta de configuración de TrackerKing, del firmware o del conjunto de comandos SMS aplicable a su variante del EC35. Los fabricantes suelen proporcionar una utilidad de configuración dedicada, una interfaz web o comandos SMS documentados para ajustar servidor y puerto. Consulte la guía oficial de configuración de TrackerKing para la sintaxis de los comandos y utilícelos dentro del flujo de trabajo del instalador.

## Notas de configuración

- Las diferencias de firmware y modelos regionales pueden cambiar los menús de configuración, los protocolos disponibles o las opciones de transporte admitidas; confirme siempre la versión de firmware antes de aplicar ajustes.
- La elección entre TCP y UDP puede afectar el comportamiento de entrega y la gestión de reintentos; seleccione el transporte que se ajuste a sus necesidades de fiabilidad y red.
- Plaspy detectará automáticamente el protocolo del dispositivo, por lo que la configuración del protocolo en la plataforma no suele ser necesaria cuando el equipo apunta a d.plaspy.com en el puerto 8888.
- Use las herramientas oficiales de TrackerKing para evitar una configuración incorrecta y para acceder a comandos de verificación y registros proporcionados por el fabricante.
- Las prácticas de instalación y opciones de accesorios, como sensores externos, IButton o relés Bluetooth, pueden requerir pasos de configuración adicionales más allá de apuntar la dirección del servidor y el puerto.

## Por qué usar Plaspy con esta configuración

Configurar el TrackerKing EC35 para reportar a Plaspy ofrece un camino directo hacia la visibilidad vehicular, el monitoreo de eventos y la supervisión operativa de flotas. Con soporte para protocolos de rastreo comunes y los ajustes de servidor compartidos de Plaspy, el EC35 se integra en la plataforma para seguimiento en tiempo real, reportes de encendido y sensores, y reproducción histórica de rutas que ayuda a las flotas a gestionar activos y responder a incidentes.

Learn more about Plaspy and how it supports device integrations at https://www.plaspy.com. Please verify device specific configuration methods, firmware behavior, and the latest manufacturer instructions on the TrackerKing website https://trackerking.cn/ as device features and setup steps can change over time.
