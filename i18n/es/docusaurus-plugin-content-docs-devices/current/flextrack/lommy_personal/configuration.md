---
slug: /flextrack/lommy_personal/configuration
id: lommy_personal-configuration
sidebar_label: Configuration
title: Flextrack - Lommy Personal Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración para Flextrack Lommy Personal con ajustes de servidor Plaspy y pasos prácticos
keywords:
  - Configuración Flextrack Lommy Personal
  - Configuración Lommy Personal
  - Guía de configuración Flextrack
  - Configuración de servidor Lommy Personal
  - Configuración de rastreador Plaspy
  - Integración plataforma GPS
  - Configuración GPS Lommy Personal
  - Ajustes servidor Plaspy
  - Configuración rastreador seguridad personal
  - Configuración de rastreador para Plaspy
---

# Flextrack - Configuración Lommy Personal

Esta página describe el contexto público de configuración para usar el rastreador Flextrack Lommy Personal con Plaspy. Resume los ajustes de servidor y el flujo de trabajo práctico para apuntar el dispositivo a Plaspy, de modo que el equipo pueda enviar ubicación y estado a la plataforma. La guía aquí se enfoca en puntos de integración públicos y no sustituye la documentación del fabricante.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el equipo se conecta. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor, por lo que debe consultar el material de Flextrack cuando necesite instrucciones específicas del dispositivo.

## Visión general de la configuración

Este proceso prepara el Lommy Personal para comunicarse con Plaspy, valida la conectividad y hace que el dispositivo sea visible en la plataforma para supervisión e informe de eventos.

- Configure el rastreador para que apunte al endpoint del servidor Plaspy y pueda enviar actualizaciones de posición y eventos.
- Seleccione el método de transporte apropiado si el dispositivo requiere elegir entre UDP o TCP.
- Guarde y aplique la configuración en el dispositivo usando la herramienta o método del fabricante.
- Reinicie o reinicie el dispositivo si el fabricante lo requiere para activar los nuevos ajustes del servidor.
- Confirme que el dispositivo aparece en Plaspy y está enviando actualizaciones de ubicación a d.plaspy.com en el puerto 8888.

## Ajustes del servidor Plaspy

Use los siguientes ajustes públicos de Plaspy al configurar su dispositivo Lommy Personal:

- dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- puerto 8888
- transporte compatible UDP o TCP
- detección automática de protocolo en Plaspy

Plaspy usa el mismo puerto para todos los dispositivos compatibles y detectará automáticamente el protocolo del rastreador cuando el equipo se conecte.

## Requisitos previos típicos

- Un dispositivo Lommy Personal cargado y en funcionamiento con acceso al método de configuración del fabricante.
- Acceso al software de configuración de Flextrack, portal web o instrucciones oficiales de instalación.
- Conocimiento del identificador del dispositivo, como IMEI o número de serie, si se requiere para registro o verificación.
- Un entorno de red estable para que el dispositivo pueda alcanzar d.plaspy.com en el puerto 8888 durante las pruebas.
- Acceso administrativo para aplicar cambios de configuración y reiniciar el dispositivo si es necesario.

## Cómo se conecta este rastreador a Plaspy

Al configurarse para Plaspy, el Lommy Personal envía sus datos de posición y eventos al endpoint y puerto compartidos de Plaspy para que el dispositivo sea visible en la plataforma para monitoreo y análisis.

- El dispositivo se configura para reportar a d.plaspy.com usando el puerto 8888.
- Plaspy acepta conexiones por UDP o TCP según la configuración del dispositivo.
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que la plataforma interpreta los datos entrantes correctamente.
- Las actualizaciones de ubicación y eventos enviadas por el Lommy Personal son procesadas por Plaspy para estado, historial y alertas.
- Una vez que el dispositivo se conecta al endpoint de Plaspy, usted podrá validar la visibilidad y la telemetría en la plataforma.

## Flujo de trabajo común de configuración

1. Acceda al método de configuración oficial de Flextrack o al software recomendado para el Lommy Personal.
2. En los ajustes del servidor del dispositivo, introduzca el servidor Plaspy como d.plaspy.com o 54.85.159.138.
3. Configure el puerto del dispositivo en 8888.
4. Si el dispositivo requiere selección de transporte, elija UDP o TCP según corresponda a su instalación.
5. Aplique o guarde los cambios de configuración en la herramienta del fabricante.
6. Reinicie o haga ciclo de energía del Lommy Personal si el fabricante lo indica para activar los nuevos ajustes de red.
7. Valide que el dispositivo reporte a Plaspy comprobando la visibilidad del equipo y las posiciones entrantes en la plataforma Plaspy.

## Ejemplos de comandos de configuración

Las herramientas del fabricante o del instalador determinan los comandos exactos o los pasos de configuración disponibles para el Lommy Personal. Los comandos públicos y los formatos varían según el firmware y el método de configuración. Las formas comunes de configurar un rastreador incluyen usar la aplicación de configuración del proveedor, una interfaz web de gestión o una herramienta de aprovisionamiento autorizada.

Si necesita ejemplos de comandos específicos para el Lommy Personal, consulte la documentación oficial de Flextrack o la herramienta de configuración de Flextrack proporcionada a instaladores e integradores.

## Notas de configuración

- Las revisiones de firmware y las variantes de hardware pueden cambiar la forma en que se ingresan los ajustes; confirme siempre el procedimiento correcto para la versión de su dispositivo.
- Elija UDP o TCP según su red y las preferencias de instalación; Plaspy soporta ambos, pero el método para seleccionar el transporte depende del fabricante.
- Plaspy utiliza el mismo puerto 8888 para todos los dispositivos y detecta automáticamente el protocolo del rastreador, por lo que apunte el Lommy Personal a d.plaspy.com o 54.85.159.138 en el puerto 8888.
- Siga las prácticas recomendadas por Flextrack para manejo de baterías y aprovisionamiento del dispositivo para evitar problemas de configuración.
- Cuando esté disponible, utilice las herramientas del fabricante para la configuración y verificación en lugar de intentar comandos manuales no soportados.

## Por qué usar Plaspy con esta configuración

Usar Plaspy con el Flextrack Lommy Personal ofrece una manera sencilla de centralizar el reporte de ubicación y la visibilidad operativa de dispositivos de seguridad personal. Apuntar el rastreador al endpoint compartido de Plaspy simplifica la integración y permite a las organizaciones monitorear ubicación y estado del dispositivo desde una sola plataforma para supervisión y respuesta rápida.

To learn more about Plaspy and supported integrations, visit https://www.plaspy.com. For the latest device-specific setup details, firmware notes, and Flextrack tools consult the manufacturer at https://flextrack.dk. Manufacturer specifications and setup methods can change over time so verify the current information on the official Flextrack site.
