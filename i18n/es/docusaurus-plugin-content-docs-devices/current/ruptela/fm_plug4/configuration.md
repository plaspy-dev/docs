---
slug: /ruptela/fm_plug4/configuration
id: fm_plug4-configuration
sidebar_label: Configuration
title: Ruptela - FM-Plug4 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del Ruptela FM-Plug4 con Plaspy, incluye ajustes de servidor requeridos y flujo de configuración
keywords:
  - Ruptela FM Plug4

  - Ruptela FM Plug4 guía

  - configuración Ruptela FM Plug4

  - instalación Ruptela FM Plug4

  - configuración servidor Ruptela FM Plug4

  - FM Plug4 configuración Plaspy

  - configuración rastreador Plaspy

  - FM Plug4 rastreador GPS instalación

  - seguimiento de flotas FM Plug4

  - integración Ruptela FM Plug4
---

# Ruptela - Configuración del FM-Plug4

Esta página describe el contexto público de configuración para usar el rastreador Ruptela FM-Plug4 con Plaspy. Explica los ajustes compartidos del servidor Plaspy y ofrece orientación práctica para preparar el FM-Plug4 o FM-Plug4+ para reportar a la plataforma Plaspy. Use esta guía para comprender qué ajustes exige Plaspy y qué pasos suele realizar usted con las herramientas de configuración de Ruptela o mediante comandos SMS.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, pero los pasos concretos en el equipo del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Consulte la documentación de Ruptela para comandos específicos del dispositivo y el manual completo del FM-Plug4 cuando necesite instrucciones detalladas para una versión de firmware o un escenario de despliegue particular.

## Resumen de la configuración

Este proceso de configuración está diseñado para preparar el FM-Plug4 para enviar datos de ubicación y eventos a Plaspy y para validar que el dispositivo sea visible en la plataforma. Los pasos se centran en aplicar los ajustes del endpoint de Plaspy, seleccionar el transporte si es necesario y verificar la conectividad.

- Configure el dispositivo para que informe al endpoint del servidor Plaspy y así los datos lleguen a la plataforma Plaspy
- Seleccione el método de transporte que soporte el rastreador, UDP o TCP, en el puerto de Plaspy
- Asegúrese de que el rastreador tenga alimentación y acceso a configuración por SMS o por software, según corresponda
- Valide la conectividad para que el rastreador aparezca y reporte correctamente dentro de Plaspy
- Compruebe el comportamiento del equipo, por ejemplo alertas por robo, reporte de errores OBD y detección de movimiento después de la configuración

## Ajustes del servidor de Plaspy

Use los siguientes ajustes públicos de Plaspy al configurar el dispositivo o al introducir los datos del servidor en la herramienta de configuración de Ruptela:

- Dominio del servidor d.plaspy.com  
- IP del servidor 54.85.159.138  
- Puerto 8888  
- Transporte soportado: UDP o TCP en el puerto 8888 según la opción del dispositivo  
- Plaspy detecta automáticamente el protocolo del rastreador una vez que el dispositivo informa al endpoint

Tenga en cuenta que Plaspy utiliza el mismo puerto 8888 para todos los dispositivos soportados en la plataforma.

## Requisitos típicos antes de la configuración

- Asegúrese de que el FM-Plug4 o FM-Plug4+ esté correctamente conectado al puerto OBD del vehículo y que reciba alimentación del vehículo o de la batería interna si la tiene  
- Si va a usar configuración por SMS, tenga instalada en el dispositivo una SIM con SMS habilitado y en funcionamiento  
- Acceso a los métodos de configuración de Ruptela, como el software oficial, herramientas web o los comandos SMS documentados por Ruptela  
- Una cuenta en Plaspy o los datos de incorporación a la plataforma para que pueda validar el dispositivo una vez que empiece a reportar  
- Información básica del vehículo objetivo, como VIN o identificador de flota, para nombrar el dispositivo en su plataforma de tracking

## Cómo se conecta este rastreador a Plaspy

Cuando se configura para Plaspy, el FM-Plug4 envía sus datos de ubicación y eventos al endpoint y puerto compartidos de Plaspy para que la plataforma pueda mostrar y procesar la información del dispositivo. Plaspy determinará el protocolo automáticamente una vez que el dispositivo comience a reportar.

- El rastreador apunta a d.plaspy.com o a la IP 54.85.159.138 como servidor de destino  
- Los datos se envían al puerto 8888, que es el puerto común de Plaspy para todos los dispositivos soportados  
- El transporte se configura en UDP o TCP según la opción del dispositivo o la preferencia del instalador  
- Plaspy recibe los datos y detecta automáticamente el protocolo para su correcta decodificación y visualización  
- Una vez que comienza el reporte, el dispositivo se vuelve visible en Plaspy para seguimiento de ubicación, alertas y monitorización operativa

## Flujo típico de configuración

1. Acceda al método o software oficial de configuración de Ruptela para el FM-Plug4, como la herramienta documentada de Ruptela o los comandos SMS soportados por el dispositivo.  
2. Introduzca el endpoint del servidor Plaspy usando el dominio d.plaspy.com o la IP 54.85.159.138 en el campo de dirección del servidor.  
3. Establezca el puerto de destino en 8888, que Plaspy utiliza para todos los dispositivos.  
4. Elija UDP o TCP si el rastreador solicita una selección de transporte durante la configuración.  
5. Aplique o guarde la configuración mediante la herramienta de Ruptela, confirmación por SMS o la interfaz del dispositivo.  
6. Reinicie el dispositivo si las instrucciones del fabricante lo requieren para aplicar los ajustes de red.  
7. Valide que el FM-Plug4 informe a Plaspy comprobando la visibilidad del dispositivo y las actualizaciones de posición recientes en la plataforma Plaspy.  
8. Confirme el reporte de eventos como alertas por robo o la visibilidad de mensajes de error OBD cuando corresponda.

## Ejemplo de comandos de configuración

Los comandos y la sintaxis exacta para configurar el FM-Plug4 dependen de la versión de firmware de Ruptela y del método de configuración que elija. Ruptela generalmente proporciona una utilidad de configuración o un conjunto de comandos SMS para uso público. Debido a que los comandos varían según el firmware y la herramienta, consulte la documentación del usuario de Ruptela para las cadenas SMS precisas o los pasos en la utilidad de configuración para establecer el servidor a d.plaspy.com o 54.85.159.138 en el puerto 8888 y seleccionar UDP o TCP.

Si prefiere la configuración por SMS y dispone de la documentación de comandos SMS de Ruptela, use los comandos SMS de Ruptela para especificar el dominio o la IP del servidor y el puerto, luego guarde y reinicie el dispositivo. Conserve exactamente los marcadores de posición que proporcione el fabricante (por ejemplo los del APN) al emitir comandos SMS.

## Notas de configuración

- FM-Plug4 y FM-Plug4+ pueden tener conjuntos de funciones diferentes, como batería interna y lectura de errores OBD-II; verifique qué modelo tiene antes de aplicar los pasos de configuración.  
- Las versiones de firmware pueden cambiar la sintaxis de los comandos y la ubicación de menús en las herramientas de configuración. Revise la documentación de Ruptela para instrucciones específicas por firmware.  
- Cuando estén disponibles tanto TCP como UDP, elija el transporte que coincida con su política de instalación o las condiciones de red; Plaspy acepta cualquiera de los dos en el puerto 8888.  
- La configuración por SMS es posible según la lista de funciones del dispositivo; asegúrese de que la SIM soporte SMS y siga el formato de comandos SMS de Ruptela.  
- Confirme siempre la conectividad final verificando que el dispositivo aparezca y reporte correctamente en Plaspy después de guardar los ajustes y realizar cualquier reinicio requerido.

## Por qué usar Plaspy con esta configuración

Usar el Ruptela FM-Plug4 con Plaspy ofrece a los operadores de flotas una vía sencilla para integrar un rastreador OBD plug and play en una plataforma de seguimiento moderna. Configurar el dispositivo para que informe al endpoint compartido de Plaspy permite visibilidad centralizada, alertas de eventos y supervisión operativa sin la complejidad de servidores por dispositivo.

Para saber más sobre Plaspy y cómo gestiona la conectividad de dispositivos y la monitorización de flotas visite https://www.plaspy.com. Para obtener los comandos de configuración específicos más recientes, notas de firmware y detalles de funcionalidades, verifique siempre la información actualizada en el sitio oficial del fabricante https://ruptela.com/
