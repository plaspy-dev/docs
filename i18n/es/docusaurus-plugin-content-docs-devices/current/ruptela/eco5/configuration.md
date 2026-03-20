---
slug: /ruptela/eco5/configuration
id: eco5-configuration
sidebar_label: Configuration
title: Ruptela - Eco5 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración para integrar el rastreador Ruptela Eco5 con Plaspy y pasos prácticos de conexión
keywords:
  - Configuración Ruptela Eco5
  - Configuración Eco5 Plaspy
  - Configuración servidor Ruptela Eco5
  - Configuración rastreador GPS Eco5
  - Configuración rastreador Plaspy
  - Integración Eco5 gestión de flotas
  - Configuración telemetría Ruptela Eco5
  - Configuración sensor BLE Eco5
  - Gestión de dispositivo Eco5
  - Integración de dispositivo Plaspy
---

# Ruptela - Configuración Eco5

Esta página documenta el contexto público de configuración para usar el rastreador Ruptela Eco5 con Plaspy. Se centra en los ajustes prácticos del servidor y los pasos necesarios para apuntar un dispositivo Eco5 a Plaspy, de modo que el dispositivo envíe ubicación y telemetría a la plataforma. Utilice esta guía junto con la documentación oficial de Ruptela y las herramientas de su instalador para completar cualquier cambio en el dispositivo.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, por lo que el mismo endpoint y puerto de Plaspy se usan para despliegues Eco5. Los pasos exactos del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor que utilice (por ejemplo Ruptela Device Center), por lo que verifique los detalles del dispositivo con el fabricante cuando sea necesario.

## Visión general de la configuración

Este proceso prepara el Eco5 para comunicarse con Plaspy, confirma la conectividad y permite que el dispositivo aparezca en los paneles y alertas de Plaspy. El objetivo es configurar el endpoint y el transporte de reporte del rastreador, validar que el dispositivo está enviando datos y comprobar la recepción dentro de Plaspy.

- Apunte el endpoint de reporte del Eco5 al servidor de Plaspy para que la ubicación y la telemetría se encaminen a la plataforma.
- Seleccione el transporte (UDP o TCP) si la configuración del Eco5 requiere una elección explícita.
- Utilice el puerto compartido de Plaspy que aplica a todos los dispositivos y confirme que el dispositivo puede alcanzar la IP o el dominio del servidor.
- Valide que el dispositivo envía reportes periódicos y que esos reportes sean visibles en la interfaz de Plaspy.
- Mantenga disponibles las herramientas del fabricante, como Ruptela Device Center, para actualizaciones de firmware y administración remota.

## Ajustes del servidor Plaspy

- Server domain: d.plaspy.com
- Server IP: 54.85.159.138
- Port: 8888
- Transport: the device may be configured using UDP or TCP on port 8888
- All devices in Plaspy use the same port and Plaspy automatically detects the tracker protocol

## Requisitos habituales antes de la configuración

- Una unidad Eco5 alimentada y accesible con el cableado o montaje requerido por el instalador.
- Una conexión celular activa válida para la variante del dispositivo en uso (Eco5 soporta 4G Cat‑1 y 4G Cat‑M1 con retroceso a 2G).
- Acceso al método o software oficial de configuración de Ruptela (por ejemplo Ruptela Device Center u otra herramienta aprobada).
- El IMEI o identificador del dispositivo disponible para registro y verificación en Plaspy.
- Conocimientos básicos para elegir el transporte (UDP o TCP) y para guardar/aplicar los ajustes en el dispositivo.
- Reglas de red o firewall actualizadas si es necesario, de modo que el dispositivo pueda alcanzar d.plaspy.com o 54.85.159.138 en el puerto 8888.

## Cómo se conecta este rastreador a Plaspy

Cuando se configura para Plaspy, el Eco5 envía sus reportes periódicos de posición y telemetría a través del enlace celular al endpoint compartido de Plaspy. Plaspy recibe esos mensajes en el servidor y puerto comunes, determina automáticamente el protocolo del dispositivo y mapea los datos entrantes en la plataforma para seguimiento en tiempo real y alertas.

- El Eco5 reporta la ubicación del vehículo y el estado del dispositivo a d.plaspy.com (o directamente a 54.85.159.138) en el puerto 8888.
- El transporte puede ser UDP o TCP según cómo se haya establecido la configuración del dispositivo; Plaspy acepta ambos.
- Plaspy detecta automáticamente el protocolo del rastreador y procesa los mensajes entrantes para mostrarlos en mapas y paneles.
- Telemetría como entradas digitales, canales analógicos, lecturas de sensores BLE y notificaciones de estado se transmiten a Plaspy cuando están soportadas.
- Eventos operativos y alarmas reportadas por el Eco5 se convierten en elementos accionables en los flujos de trabajo y alertas de Plaspy.

## Flujo de trabajo típico de configuración

1. Acceda al método o software oficial de configuración de Ruptela (por ejemplo Ruptela Device Center o la interfaz de configuración del dispositivo).
2. Ubique los ajustes de servidor o endpoint de reporte e ingrese d.plaspy.com o la IP del servidor Plaspy 54.85.159.138.
3. Configure el puerto de reporte del dispositivo en 8888 (Plaspy utiliza el mismo puerto para todos los dispositivos).
4. Elija UDP o TCP para el transporte si el dispositivo requiere una selección explícita.
5. Aplique o guarde los cambios de configuración en la herramienta de gestión del dispositivo.
6. Reinicie el Eco5 si las instrucciones del fabricante indican que es necesario para que los cambios surtan efecto.
7. Valide que el dispositivo reporta a Plaspy comprobando el estado del dispositivo y los mensajes entrantes dentro de Plaspy.

## Ejemplos de comandos de configuración

La sintaxis exacta de comandos y el método varían según las herramientas de Ruptela, las versiones de firmware y la interfaz de configuración elegida. Ruptela Device Center y la plataforma de gestión de dispositivos de Ruptela son las herramientas recomendadas del fabricante para realizar estos pasos. Use la interfaz oficial de Ruptela para establecer el nombre de host o la IP del servidor y el puerto con los valores de Plaspy indicados arriba.

Si su instalación utiliza comandos de texto o configuración por SMS soportada por el dispositivo y el firmware, consulte la referencia de comandos oficial de Ruptela para las cadenas de comando precisas. Siempre conserve los marcadores de posición como valores APN según lo requiera su operador móvil al establecer parámetros de datos móviles.

## Notas sobre la configuración

- Las variaciones de firmware y las revisiones de hardware pueden cambiar los nombres exactos de los menús de configuración y las funciones soportadas; confirme el procedimiento en la documentación de Ruptela para la variante Eco5 que tenga.
- En algunas implementaciones puede ingresar el servidor de Plaspy como nombre de dominio (d.plaspy.com) o como la IP del servidor (54.85.159.138); ambos son aceptados si son alcanzables.
- Elija UDP o TCP según los requisitos del dispositivo y las consideraciones de fiabilidad de la red; Plaspy acepta ambos y detecta el protocolo automáticamente.
- Use Ruptela Device Center o una plataforma de gestión aprobada para configuraciones masivas o remotas cuando sea posible, para reducir pasos manuales por equipo.
- Mantenga el firmware del dispositivo actualizado cuando Ruptela lo recomiende para garantizar compatibilidad con los flujos de configuración y las condiciones de red más recientes.

## Por qué usar Plaspy con esta configuración

Configurar el Ruptela Eco5 para reportar a Plaspy brinda un camino sencillo hacia el seguimiento en tiempo real, la consolidación de telemetría y la visibilidad operativa. La detección automática de protocolos de Plaspy y los ajustes de servidor compartidos simplifican la incorporación, de modo que los dispositivos aparezcan rápidamente en paneles de flota, alertas e informes.

Learn more about Plaspy and how it can be used with devices like the Eco5 at https://www.plaspy.com. For the most current device-specific configuration methods, firmware behavior, and manufacturer details, verify the latest information on the Ruptela website https://ruptela.com/.
