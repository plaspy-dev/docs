---
slug: /gosafe/g602/configuration
id: g602-configuration
sidebar_label: Configuration
title: Gosafe - G602 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el rastreador Gosafe G602 con Plaspy usando servidor compartido y pasos prácticos
keywords:
  - configuración Gosafe G602
  - instalación Gosafe G602
  - Gosafe G602 Plaspy
  - configuración servidor G602
  - configuración rastreador GPS G602
  - configuración rastreador Plaspy
  - guía configuración rastreador vehicular
  - configuración telemática de flotas
  - integración dispositivo GPS
  - configuración plataforma de rastreo
---

# Gosafe - G602 Configuración

Esta página describe el contexto público de configuración para usar el rastreador Gosafe G602 con Plaspy. Se enfoca en los ajustes del servidor compartido y en los pasos prácticos necesarios para que el G602 sea compatible con Plaspy desde el primer momento, así como en las comprobaciones básicas durante la instalación y la primera conexión. Use estas indicaciones junto con la documentación del fabricante para comandos y herramientas específicos del dispositivo.

Plaspy utiliza un endpoint de servidor compartido y el mismo puerto para los dispositivos compatibles, y detecta automáticamente el protocolo del rastreador. Los pasos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor, por lo que confirme los comandos y menús exactos en los manuales o herramientas del G602 al seguir esta guía.

## Resumen de configuración

El objetivo al configurar un G602 para Plaspy es apuntar el dispositivo al endpoint de ingestión de Plaspy, verificar el transporte y la conectividad, y confirmar que el aparato envía datos de ubicación y eventos a su cuenta de Plaspy. El G602 soporta reportes por TCP, UDP y SMS, lo que ofrece flexibilidad al instalador según la red y los requisitos del sitio.

- Configure el G602 para enviar telemetría al endpoint del servidor Plaspy para que las posiciones y eventos lleguen a la plataforma.
- Elija el modo de transporte adecuado en el dispositivo o mediante SMS según la conectividad y la preferencia de instalación.
- Verifique que la SIM y la conectividad celular estén operativas para que el dispositivo alcance el endpoint de Plaspy.
- Pruebe los reportes para confirmar que el dispositivo es visible en Plaspy y envía eventos esperados como encendido, movimiento y telemetría de choques.
- Guarde y aplique cambios de firmware o configuración y, si es necesario, reinicie el dispositivo para activar los ajustes.

## Configuración del servidor Plaspy

- Dominio del servidor: d.plaspy.com para reportes e ingestión de datos
- IP del servidor: 54.85.159.138 como alternativa si se requiere una dirección numérica
- Puerto: 8888, que es el puerto único que usa Plaspy para todos los dispositivos
- Transporte: soporte para UDP o TCP según la configuración del dispositivo
- Detección automática de protocolo: Plaspy detecta el protocolo del rastreador, por lo que los dispositivos que reporten al endpoint compartido serán ingeridos correctamente

## Requisitos típicos antes de la instalación

- Un G602 con alimentación y la instalación de dos cables completada, con voltaje vehicular estable
- Una SIM activa con datos habilitados cuando se requiera conectividad celular y reporte
- Acceso al método de configuración del Gosafe G602, como la herramienta oficial, comandos SMS o la interfaz web del dispositivo si está disponible
- Conocimiento del servidor objetivo Plaspy d.plaspy.com o 54.85.159.138 y del puerto 8888 para ingresarlos en el dispositivo
- Un área segura con visibilidad GPS para validar el reporte de posición en Plaspy después de la configuración
- Firmware actualizado siempre que sea posible y la guía de configuración del fabricante de Gosafe

## Cómo se conecta este rastreador a Plaspy

Una vez configurado, el G602 envía su posición, eventos y datos de sensores al endpoint y puerto compartidos de Plaspy. Plaspy ingiere ese flujo y lo asigna al registro del vehículo y a los análisis disponibles, de modo que las flotas puedan monitorear ubicación y eventos casi en tiempo real.

- El dispositivo reporta telemetría a d.plaspy.com o 54.85.159.138 usando el transporte configurado
- Los datos se envían al puerto 8888, que Plaspy usa para todos los dispositivos soportados
- Plaspy detecta automáticamente el protocolo del rastreador y procesa la información entrante para ubicar y registrar eventos
- Los reportes incluyen actualizaciones de posición estándar y mensajes por eventos, como telemetría de choques y comportamiento del conductor cuando estén habilitados
- Una vez activo el reporte, el dispositivo aparece en la plataforma Plaspy para monitoreo y alertas basadas en reglas

## Flujo de trabajo de configuración habitual

1. Acceda al método o software oficial de configuración del Gosafe G602 según la documentación del fabricante.
2. En la configuración del dispositivo ingrese el dominio del servidor Plaspy d.plaspy.com o la IP 54.85.159.138.
3. Establezca el puerto de destino en 8888, que Plaspy usa para todos los dispositivos.
4. Seleccione UDP o TCP como transporte si el dispositivo requiere selección explícita; elija el transporte apropiado según su red y política.
5. Aplique o guarde la configuración en la herramienta del dispositivo o envíe la configuración por SMS si el dispositivo soporta configuración por SMS.
6. Reinicie el dispositivo si el método de configuración o el firmware requieren un reinicio para aplicar los cambios.
7. Valide que el dispositivo reporte a Plaspy comprobando la visibilidad y la telemetría entrante en la plataforma Plaspy.

## Ejemplos de comandos de configuración

Los comandos exactos y la sintaxis para configurar el G602 los provee Gosafe y pueden variar por firmware y variante regional del dispositivo. La configuración se realiza habitualmente con la herramienta oficial de Gosafe, por conexión USB o micro USB, o mediante comandos SMS cuando está soportado. Consulte la guía de configuración de Gosafe para conocer los formatos de comando y las cadenas de ejemplo antes de ejecutar comandos.

Si utiliza configuración por SMS, el fabricante puede ofrecer plantillas con marcadores de posición para APN o credenciales en el formato [apn] [apnu] [apnp]. Mantenga los marcadores intactos y reemplácelos por los valores de su operador de red cuando sea necesario.

## Notas de configuración

- Las diferencias de firmware y las variantes regionales pueden cambiar los nombres de menús y la sintaxis de comandos SMS; siempre confirme con la documentación actual de Gosafe.
- La selección entre TCP y UDP puede afectar las características de entrega según redes celulares y comportamiento del operador; elija según necesidades de fiabilidad y latencia.
- La configuración por SMS suele estar disponible como método alterno en dispositivos que soportan reportes por SMS, pero la sintaxis y las opciones dependen del build de firmware.
- Debido a que Plaspy usa el mismo puerto para todos los dispositivos y detección automática de protocolo, los pasos críticos son apuntar el dispositivo a d.plaspy.com o 54.85.159.138 y asegurarse de que el puerto 8888 esté configurado y accesible.
- Las buenas prácticas del instalador incluyen probar el reporte del dispositivo en un entorno controlado y registrar la versión de firmware y los parámetros de configuración para los registros de flota.

## Por qué usar Plaspy con esta configuración

Usar el G602 con Plaspy ofrece a las organizaciones una opción telemática de instalación rápida que combina hardware compacto con compatibilidad con los servidores de Plaspy. Apuntar el dispositivo al endpoint y puerto compartidos de Plaspy permite a la plataforma ingerir datos de ubicación y eventos para monitoreo, alertas, análisis y flujos operativos como despacho y gestión de incidentes.

Learn more about Plaspy and how it integrates with fleet devices at https://www.plaspy.com. For the most current device specific commands, firmware notes, and configuration tools refer to the official Gosafe documentation at https://gosafesystem.com/ as manufacturer setup methods and firmware behavior may change over time.
