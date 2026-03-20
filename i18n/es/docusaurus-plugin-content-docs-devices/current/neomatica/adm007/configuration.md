---
slug: /neomatica/adm007/configuration
id: adm007-configuration
sidebar_label: Configuration
title: Neomatica - ADM007 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el rastreador Neomatica ADM007 BLE y su compatibilidad con Plaspy con ajustes de servidor y flujo de instalación
keywords:
  - configuración Neomatica ADM007
  - instalación Neomatica ADM007
  - configuración ADM007 Plaspy
  - configuración rastreador GPS Neomatica
  - configuración servidor ADM007
  - rastreo BLE Neomatica ADM007
  - configuración rastreador GPS Plaspy
  - instalación rastreador vehicular ADM007
  - integración sensores BLE ADM007
  - configuración plataforma Neomatica
---

# Neomatica - Configuración del ADM007

Esta página documenta el contexto público de configuración para utilizar el rastreador BLE Neomatica ADM007 con la plataforma Plaspy. Se centra en la información práctica de servidor y del flujo de trabajo necesaria para apuntar el ADM007 a Plaspy, de modo que las posiciones GNSS, el estado del dispositivo y la telemetría de sensores BLE se reporten en la plataforma para monitoreo y alertas.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando llegan los datos. Los pasos exactos del fabricante para configurar el ADM007 pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor; use esta guía como referencia práctica y verifique cualquier comando o utilidad específica con la documentación de Neomatica.

## Resumen de la configuración

Este proceso prepara el ADM007 para comunicarse con Plaspy, dirigiendo los datos salientes (GPRS o SMS según la configuración del equipo) al punto de conexión de Plaspy y confirmando el reporte correcto. El objetivo es garantizar que el rastreador sea alcanzable por Plaspy, que la configuración de transporte y puerto sea la correcta, y que la telemetría de los sensores BLE integrados sea visible en la plataforma.

- Apunte el ADM007 al punto de conexión de Plaspy para que las posiciones GNSS y la telemetría BLE se entreguen de forma confiable.  
- Seleccione el transporte correcto (UDP o TCP) en el dispositivo si la herramienta de configuración lo requiere.  
- Establezca el puerto compartido de Plaspy para que los mensajes del rastreador lleguen al lado de la plataforma.  
- Valide la conectividad y la detección de protocolo desde Plaspy para confirmar que el rastreador está reportando.  
- Guarde y aplique la configuración, luego verifique que la ubicación y los datos de los sensores aparezcan en Plaspy.

## Ajustes del servidor Plaspy

- Server domain: d.plaspy.com  
- Server IP: 54.85.159.138  
- Port: 8888  
- Transport: the device may be configured to use UDP or TCP on port 8888  
- Plaspy automatically detects the tracker protocol when data is received and uses the same port for all supported devices

Estos valores son el punto de conexión público de Plaspy que debe ingresar en el ADM007 durante la configuración.

## Requisitos previos habituales

- Confirme que el ADM007 tenga una nanoSIM activa y con datos habilitados cuando use reporte por GPRS.  
- Asegúrese de que el rastreador tenga alimentación confiable y esté instalado según los requisitos del sitio.  
- Tenga a la mano el IMEI o el número de serie del dispositivo para el registro y la verificación en la plataforma.  
- Acceso al método de configuración oficial de Neomatica o al software correspondiente (Bluetooth, SMS o herramientas GPRS) para cambiar la dirección del servidor y la selección de transporte.  
- Conozca la versión de firmware instalada y, si es necesario, tenga la posibilidad de actualizar el firmware mediante FOTA o herramientas del proveedor.  
- Opcionalmente, tenga los sensores BLE emparejados y probados si planea reportar telemetría de periféricos a Plaspy.

## Cómo se conecta este rastreador a Plaspy

El ADM007 envía posiciones GNSS, estado del dispositivo y telemetría de sensores BLE al punto de conexión y puerto del servidor Plaspy para que la plataforma ingiera, decodifique y presente los datos en paneles, geocercas y reglas de alerta. La detección automática de protocolo de Plaspy facilita la integración porque la plataforma identifica el protocolo del rastreador cuando llegan los paquetes.

- El rastreador se configura para reportar a d.plaspy.com (o 54.85.159.138) en el puerto 8888.  
- Los mensajes pueden enviarse por UDP o TCP según la configuración de transporte del dispositivo.  
- Plaspy detecta automáticamente el protocolo del rastreador y asocia los datos entrantes con el dispositivo correcto.  
- La telemetría de sensores BLE recopilada por el ADM007 se reenvía a Plaspy junto con las posiciones GNSS.  
- Una configuración exitosa resulta en actualizaciones de ubicación en tiempo real, informes de estado y cargas históricas de rutas visibles en Plaspy.

## Flujo de configuración habitual

1. Acceda al método o software de configuración oficial de Neomatica (aplicación Bluetooth de configuración, comandos SMS o herramienta de configuración GPRS) tal como lo provee Neomatica.  
2. Ingrese la dirección del servidor Plaspy usando el dominio d.plaspy.com o la IP 54.85.159.138 en el campo de servidor del dispositivo.  
3. Configure el puerto del servidor en 8888 para que coincida con el puerto compartido usado por todos los dispositivos soportados en Plaspy.  
4. Si el dispositivo requiere selección de transporte, elija UDP o TCP según su preferencia de instalación o las condiciones de red.  
5. Aplique o guarde la nueva configuración en la herramienta del dispositivo y confirme que no se presenten errores inmediatos.  
6. Reinicie el dispositivo si la herramienta del fabricante lo solicita o después de guardar la configuración para asegurar que los cambios surtan efecto.  
7. Valide que el ADM007 reporte a Plaspy y que la posición y la telemetría BLE aparezcan en la plataforma.

## Ejemplos de comandos de configuración

El ADM007 puede configurarse usando los métodos soportados por Neomatica (aplicación de configuración Bluetooth, comandos SMS o utilidad de configuración GPRS). Las cadenas de comandos y la sintaxis exacta varían según el firmware y la herramienta del proveedor. En general, deberá ingresar el punto de conexión y el puerto de Plaspy en los campos de configuración del dispositivo, por ejemplo:

- Server address field: d.plaspy.com or 54.85.159.138  
- Server port field: 8888  
- Transport selection: UDP or TCP (if prompted)

Si utiliza una interfaz de comandos SMS del fabricante o una utilidad de configuración, consulte el manual de usuario de Neomatica para el formato preciso de comandos compatible con su firmware. Diferentes revisiones de firmware y herramientas de configuración requerirán la sintaxis exacta proporcionada por Neomatica.

## Notas de configuración

- Las diferencias de firmware pueden cambiar la sintaxis de los comandos soportados, el flujo de configuración o la disponibilidad de funciones como el reenvío de telemetría BLE. Verifique siempre la versión de firmware del dispositivo.  
- Elija UDP o TCP según el comportamiento de su red; Plaspy acepta ambos transportes en el puerto 8888 y detecta el protocolo automáticamente.  
- Todos los dispositivos de Plaspy usan el mismo puerto para simplificar el enrutamiento del servidor y la incorporación de dispositivos.  
- Si usa configuración por SMS, tenga en cuenta que los formatos de comando SMS son específicos del proveedor y pueden requerir un orden particular de comandos. Verifique los comandos con la documentación de Neomatica.  
- El reporte de sensores BLE depende de la capacidad del ADM007 para emparejarse y recolectar telemetría de periféricos; verifique que los sensores estén emparejados y probados antes de la validación en la plataforma.

## Por qué usar Plaspy con esta configuración

Apuntar el ADM007 a Plaspy usando el punto de conexión y puerto compartidos ofrece un camino sencillo para incorporar rastreo compacto con BLE en una plataforma centralizada de gestión de flotas y activos. Las organizaciones se benefician de una visibilidad consolidada de ubicación, telemetría BLE para monitoreo ambiental o de activos, y de la detección automática de protocolos de Plaspy, lo que reduce la necesidad de seleccionar manualmente el protocolo.

To learn more about Plaspy and platform capabilities visit https://www.plaspy.com. For the latest device-specific configuration commands, firmware details, and manufacturer guidance verify information on Neomatica’s official site at https://neomatica.com/ as methods and firmware behavior can change over time.
