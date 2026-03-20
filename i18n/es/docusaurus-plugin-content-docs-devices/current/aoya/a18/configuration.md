---
slug: /aoya/a18/configuration
id: a18-configuration
sidebar_label: Configuration
title: AoYa - A18 Configuration
sidebar_class_name: menu_item_tracker
description: Configurar el AoYa A18 para Plaspy con ajustes públicos de servidor y guía práctica de instalación
keywords:
  - configuración AoYa A18
  - instalación AoYa A18
  - configuración AoYa A18 Plaspy
  - configuración rastreador GPS AoYa A18
  - configuración software de rastreo AoYa
  - configuración servidor AoYa A18
  - instalación rastreador vehicular AoYa
  - guía configuración A18
  - guía instalación rastreador GPS AoYa
  - configuración rastreador Plaspy
---

# AoYa - Configuración del A18

Esta página describe el contexto público de configuración para usar el rastreador GPS AoYa A18 con Plaspy. Resume los ajustes de servidor públicos y los pasos generales para apuntar el dispositivo a Plaspy, además de señalar qué verificar antes de intentar la integración para que el equipo pueda comunicarse con la plataforma.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta. Los pasos exactos en el equipo del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor usadas para configurar el A18. El A18 puede configurarse mediante métodos del fabricante como SMS o software del proveedor; esta página resume los pasos públicos sin reproducir la sintaxis específica de comandos del dispositivo.

## Resumen de la configuración

Configurar el A18 para Plaspy consiste principalmente en asegurarse de que el rastreador pueda alcanzar el endpoint y puerto públicos de Plaspy, y que los ajustes de datos del operador en el dispositivo (por ejemplo APN o parámetros de acceso a datos) estén correctamente configurados. El objetivo es preparar el equipo para enviar su ubicación y estado a Plaspy y validar que los reportes llegan correctamente.

- Apunte el rastreador al endpoint de servidor de Plaspy usando los valores públicos de servidor.
- Confirme que el dispositivo tenga un plan de datos móviles activo u otro método de conectividad soportado por el A18.
- Seleccione el modo de transporte que soporte el equipo (UDP o TCP) y configúrelo para usar el puerto de Plaspy.
- Guarde o aplique los ajustes en el dispositivo y verifique que el equipo sea visible en Plaspy.
- Use el método de configuración del fabricante (SMS o software) para efectuar los cambios cuando sea necesario.

## Ajustes de servidor de Plaspy

Use estos ajustes públicos de servidor de Plaspy al configurar el AoYa A18 para que reporte a la plataforma Plaspy:

- server domain d.plaspy.com
- server IP 54.85.159.138
- port 8888
- transport support for UDP or TCP; the device may be configured to use either transport on port 8888
- automatic protocol detection in Plaspy so the platform identifies the tracker protocol when the device connects

Tenga en cuenta que Plaspy utiliza el mismo puerto para todos los dispositivos soportados y que la plataforma detectará automáticamente el protocolo del dispositivo una vez que este alcance el servidor.

## Requisitos típicos antes de la configuración

- Una unidad A18 con batería y encendida instalada o accesible temporalmente para la configuración.
- Una tarjeta SIM con datos móviles activos y conectividad válida del operador para que el dispositivo alcance Plaspy mediante IP.
- Acceso al método de configuración del fabricante o al software del proveedor (el A18 soporta flujos de configuración basados en SMS y herramientas del vendedor).
- Conocimiento del APN u otros ajustes de red requeridos por su operador móvil.
- Un lugar con señal GPS adecuada para la verificación inicial de visibilidad del rastreo.
- El identificador del dispositivo o la referencia que use su instalador o sistema de flota para localizar el rastreador en Plaspy.

## Cómo se conecta este rastreador a Plaspy

El A18 se configura para enviar sus mensajes de ubicación y operación al endpoint y puerto compartidos de Plaspy. Una vez apuntado a d.plaspy.com o a la dirección IP proporcionada en el puerto 8888, Plaspy recibe el tráfico del dispositivo y detecta automáticamente el protocolo del rastreador para su correcto parseo y visualización.

- El rastreador envía mensajes de ubicación y estado al endpoint de servidor de Plaspy.
- Los mensajes se transmiten por IP usando UDP o TCP según el transporte seleccionado en el dispositivo.
- Plaspy recibe la conexión entrante en el puerto 8888 y aplica la detección automática de protocolo.
- Tras la conexión exitosa, el dispositivo se vuelve visible en la plataforma Plaspy para monitoreo e informes.
- Los operadores pueden entonces supervisar ubicación, eventos y presencia del dispositivo mediante las funciones estándar de la plataforma Plaspy.

## Flujo de configuración habitual

1. Acceda al método oficial de configuración del AoYa A18 o al software del proveedor según lo descrito por el fabricante.
2. En la configuración del dispositivo, introduzca el endpoint del servidor de Plaspy especificando d.plaspy.com o la dirección IP 54.85.159.138.
3. Establezca el puerto del servidor del dispositivo en 8888 (Plaspy usa este mismo puerto para todos los dispositivos).
4. Elija el protocolo de transporte (UDP o TCP) si el A18 exige seleccionar uno.
5. Guarde o aplique la configuración en el dispositivo usando el método del fabricante.
6. Valide que el dispositivo reporte a Plaspy comprobando la visibilidad y el estado de conexión en la plataforma.

Si utiliza la configuración por SMS del A18 o la utilidad del proveedor, siga el flujo documentado por el fabricante para aplicar estos ajustes públicos de servidor en lugar de introducir conjuntos de comandos de terceros.

## Notas de configuración

- Las versiones de firmware y las revisiones de hardware pueden cambiar cómo se presentan las opciones de configuración; consulte siempre la documentación del fabricante del A18 para los pasos exactos aplicables a su unidad.
- La elección entre UDP y TCP puede alterar el comportamiento de entrega; seleccione el transporte soportado y recomendado para su despliegue y condiciones de red.
- El A18 puede configurarse mediante métodos soportados por el fabricante como SMS o software del proveedor. Al usar configuración por SMS, resuma los ajustes en lugar de pegar conjuntos de comandos y evite exponer contraseñas del dispositivo en entornos compartidos.
- Plaspy utiliza un único puerto compartido para conexiones entrantes de dispositivos y realiza la detección de protocolo automáticamente cuando un dispositivo se conecta.
- Las prácticas de instalador y los requisitos regionales de los operadores móviles pueden variar; confirme los detalles de APN y conectividad con su operador móvil y la documentación del dispositivo.

## Por qué usar Plaspy con esta configuración

Usar el AoYa A18 con Plaspy ofrece a las organizaciones una vía clara para integrar los datos de rastreo vehicular en una plataforma unificada. Apuntando el dispositivo al endpoint público y al puerto de Plaspy y validando la conectividad, las flotas obtienen una vista centralizada de ubicación y estado del dispositivo para monitoreo operativo e informes.

To learn more about Plaspy and platform capabilities visit https://www.plaspy.com. Please verify the latest device specific configuration instructions, firmware behavior, and manufacturer details on the official AoYa support site http://www.aoyagps.com/ because manufacturer procedures and firmware behavior can change over time.
