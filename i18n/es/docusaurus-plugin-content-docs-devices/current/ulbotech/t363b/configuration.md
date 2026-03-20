---
slug: /ulbotech/t363b/configuration
id: t363b-configuration
sidebar_label: Configuration
title: Ulbotech - T363B Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública del Ulbotech T363B con ajustes de servidor Plaspy y pasos prácticos de configuración
keywords:
 - configuración Ulbotech T363B
 - instalación Ulbotech T363B
 - configuración T363B Plaspy
 - configuración rastreador Plaspy
 - instalación rastreador OBD GPS
 - configuración rastreador vehicular
 - rastreador GPS Plaspy
 - configuración seguimiento de flotas
 - configuración servidor T363B
 - configuración plataforma Ulbotech GPS
---

# Ulbotech - T363B — Configuración

Esta página documenta el contexto público de configuración para usar el Ulbotech T363B con Plaspy. Se centra en los ajustes prácticos del servidor y el flujo de trabajo necesarios para apuntar un dispositivo T363B al backend de Plaspy, de modo que el rastreador pueda transmitir ubicación y telemetría del vehículo para visualización, alertas e informes en Plaspy.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, pero los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Use esta guía como referencia práctica orientada a Plaspy y consulte la documentación de Ulbotech para procedimientos específicos del equipo y las notas de firmware más recientes.

## Resumen de configuración

El objetivo de la configuración es dejar el T363B preparado para comunicarse de forma fiable con Plaspy y aparecer en la plataforma para seguimiento en tiempo real e informes. La configuración abarca asignar el servidor Plaspy al dispositivo, seleccionar el transporte adecuado y validar la conectividad y el flujo de telemetría.

- Configure el rastreador para que reporte al endpoint y puerto del servidor Plaspy, de modo que la ubicación y la telemetría OBD/CAN lleguen a Plaspy.
- Seleccione el modo de transporte (UDP o TCP) si el interfaz del dispositivo o el firmware lo requieren.
- Confirme que el dispositivo tenga una SIM operativa con datos y que los ajustes APN sean correctos o estén en detección automática.
- Aplique y guarde los ajustes en el lado del fabricante y reinicie el dispositivo si es necesario para que comience a reportar.
- Verifique la conectividad y la visibilidad en Plaspy para confirmar la recepción de posición, telemetría y eventos.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP; el dispositivo puede configurarse con cualquiera de los dos en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador y todos los dispositivos en Plaspy usan el mismo puerto

## Requisitos típicos antes de la instalación

- Acceso físico al puerto OBD-II del vehículo para instalación plug and play o acceso al dispositivo para configuración por USB
- Una tarjeta SIM válida con plan de datos activo y conectividad GPRS para el T363B
- Acceso al método oficial de configuración de Ulbotech o al software del proveedor, como herramienta web del vendedor, interfaz USB de depuración o aplicación de configuración aprobada
- Una cuenta de Plaspy o detalles de incorporación para validar la visibilidad del dispositivo después de la configuración
- Cobertura de red móvil estable en el sitio de instalación para el registro inicial y FOTA si fuera necesario
- Herramientas de diagnóstico básicas o registros (indicadores LED, consola micro USB o logs del fabricante) para confirmar conectividad

## Cómo se conecta este rastreador a Plaspy

Cuando el T363B está configurado, transmite la posición GPS y la telemetría OBD/CAN al backend de Plaspy sobre GPRS. El dispositivo reporta al endpoint y puerto compartido de Plaspy, de modo que los datos de muchos modelos se gestionen de forma consistente y se muestren en los paneles de Plaspy.

- El T363B envía actualizaciones periódicas de posición y flags de eventos a d.plaspy.com en el puerto 8888
- La telemetría del OBD y del bus CAN se reenvía a Plaspy para mapearla a atributos del vehículo y análisis
- Las alertas y eventos de comportamiento del conductor reportados por el dispositivo se ingieren en Plaspy para notificaciones y reglas
- Plaspy usa detección automática de protocolo, por lo que la plataforma interpreta el protocolo del dispositivo sin necesidad de seleccionar el protocolo por dispositivo
- Utilizar el mismo puerto para todos los dispositivos simplifica las reglas de firewall y la integración en la red

## Flujo de configuración típico

1. Acceda al método oficial de configuración de Ulbotech para el T363B (herramienta micro USB, portal web del proveedor o comandos SMS documentados).
2. En los ajustes de servidor del dispositivo ingrese el endpoint de Plaspy por nombre de host o IP: d.plaspy.com o 54.85.159.138.
3. Establezca el puerto del dispositivo en 8888 como puerto de reporte usado por todos los dispositivos en Plaspy.
4. Elija UDP o TCP si el dispositivo requiere selección de transporte y guarde la opción de transporte.
5. Aplique o guarde la configuración en la herramienta del fabricante y empuje los cambios al dispositivo.
6. Reinicie el dispositivo si las instrucciones del proveedor lo requieren para iniciar la nueva conexión al servidor.
7. Valide que el dispositivo reporte a Plaspy revisando el estado en línea, la primera fijación GPS o la recepción de telemetría en su cuenta Plaspy.

## Ejemplos de comandos de configuración

Los comandos y métodos exactos para configurar el T363B dependen del firmware de Ulbotech y de las herramientas del proveedor utilizadas para la instalación. Las herramientas del fabricante pueden exponer opciones vía micro USB, un portal web o conjuntos de comandos SMS. Como no se incluye aquí un conjunto público de comandos, consulte las guías de configuración de Ulbotech o pida a su proveedor los comandos específicos o el formato de archivo de configuración necesario para establecer el servidor en d.plaspy.com o 54.85.159.138 en el puerto 8888 y para seleccionar UDP o TCP.

Si su proveedor proporciona comandos SMS o una lista de comandos por línea, utilice esas herramientas para configurar:
- Nombre de host o IP del servidor a d.plaspy.com o 54.85.159.138
- Puerto a 8888
- Transporte a UDP o TCP si es necesario
Siempre conserve los marcadores de posición que le proporcione su proveedor y siga el orden exacto requerido por el firmware del dispositivo.

## Notas de configuración

- Las revisiones de firmware y hardware pueden cambiar las interfaces de configuración y la sintaxis de comandos soportada; verifique las notas de la versión de firmware antes de desplegar a gran escala.
- TCP y UDP funcionan para conectar a Plaspy en el puerto 8888; elija el transporte que mejor se ajuste a su red y al comportamiento del dispositivo. Plaspy detectará el protocolo automáticamente al recibir datos.
- El T363B soporta reconocimiento automático de APN, pero en algunos despliegues será necesario configurar explícitamente APN, usuario o contraseña proporcionados por el operador.
- Use los indicadores LED del dispositivo o la consola USB de depuración para confirmar el registro en GPRS y la conexión exitosa a d.plaspy.com o 54.85.159.138.
- Si depende de métodos de configuración por SMS, confirme que la tarjeta SIM soporte SMS y datos en el momento del aprovisionamiento inicial.

## Por qué usar Plaspy con esta configuración

Configurar el Ulbotech T363B para reportar a Plaspy proporciona a las organizaciones visibilidad en tiempo real de la ubicación del vehículo, telemetría OBD y CAN, y eventos de conductor. La forma plug and play en OBD, combinada con telemetría y soporte para inmovilizadores, hace que el T363B sea adecuado para operaciones de flotas, servicios de renta, telemática para seguros y programas de seguridad vehicular que necesitan paneles consolidados, alertas e informes.

To learn more about Plaspy and how it supports device integrations, visit https://www.plaspy.com. For device specific setup steps, firmware notes, and manufacturer instructions verify the latest technical documentation at http://www.ulbotech.com/ as manufacturer specifications and setup methods can change over time.
