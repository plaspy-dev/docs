---
slug: /gotop/l15/configuration
id: l15-configuration
sidebar_label: Configuration
title: GOTOP - L15 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del rastreador GPS wearable GOTOP L15 para integración con Plaspy y pasos prácticos
keywords:
  - Configuración GOTOP L15
  - Instalación GOTOP L15
  - Configuración servidor GOTOP L15
  - GOTOP L15 Plaspy
  - Rastreador GPS GOTOP L15
  - Configuración rastreador Plaspy
  - Configuración servidor Plaspy
  - Configuración rastreador GPS portátil
  - Configuración rastreador GPS para cuidado de adultos
  - Configuración software L15
---

# GOTOP - L15 Configuración

Esta página ofrece el contexto público de configuración para usar el rastreador GPS tipo colgante GOTOP L15 con la plataforma Plaspy. Explica los ajustes públicos compartidos del servidor Plaspy que se usan al aprovisionar el equipo, consideraciones prácticas de instalación y cómo el L15 integra ubicación y eventos de emergencia en Plaspy para la monitorización y alertas a cuidadores.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador una vez que el equipo envía datos al servidor. Los pasos exactos del fabricante para configurar el L15 pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor; por ello esta guía se centra en los valores públicos comunes y en el flujo de trabajo práctico para que el L15 comience a reportar en Plaspy.

## Resumen de configuración

Esta sección describe el objetivo práctico de configurar un L15 para Plaspy. El propósito general es dejar el colgante listo para que comunique de forma fiable ubicación, alertas SOS y telemetría básica al endpoint de ingestión de Plaspy y aparezca en el panel de Plaspy.

- Configure el dispositivo para que envíe sus datos al endpoint y puerto del servidor Plaspy para que Plaspy pueda recibir GPS y telemetría.
- Verifique la provisión celular y la SIM para que el L15 pueda establecer un enlace de datos 4G antes de probar la conectividad con el servidor.
- Seleccione la opción de transporte del dispositivo cuando sea necesario y apunte al destino de Plaspy para habilitar seguimiento en vivo y alertas.
- Valide que los eventos SOS y la telemetría periódica lleguen a Plaspy para que los cuidadores reciban alertas y actualizaciones de ubicación.
- Confirme el reporte de energía y batería del equipo para que la disponibilidad del dispositivo sea visible en la interfaz de Plaspy.

## Ajustes del servidor Plaspy

Use estos ajustes públicos del servidor Plaspy al configurar el GOTOP L15 para su integración con Plaspy.

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support: UDP or TCP may be used on port 8888 depending on tracker options
- Plaspy automatically detects the tracker protocol when the device connects

Tenga en cuenta que Plaspy utiliza el mismo puerto para todos los dispositivos compatibles y la plataforma detectará automáticamente el protocolo correcto después de que lleguen los primeros paquetes de datos.

## Requisitos habituales antes de la configuración

- Un dispositivo L15 cargado y operativo con una nano SIM instalada y servicio de datos activo
- Acceso al método oficial de configuración GOTOP para el L15 (comandos SMS, herramienta web o app del proveedor según lo entregue el fabricante)
- Conocer el IMEI o identificador del equipo para poder emparejarlo en Plaspy una vez que se conecte
- Conexión de red estable o acceso local a la unidad para el paso inicial de configuración
- Familiaridad básica con la selección del tipo de transporte UDP o TCP si la herramienta de configuración lo solicita

## Cómo se conecta este rastreador a Plaspy

Una vez configurado, el L15 envía datos de ubicación y eventos al endpoint compartido de Plaspy para que los cuidadores y los sistemas de monitorización reciban actualizaciones y alertas en tiempo real. El dispositivo utiliza su enlace celular y posicionamiento híbrido opcional para proporcionar a Plaspy coordenadas, notificaciones SOS y telemetría.

- El L15 se apunta al dominio del servidor Plaspy d.plaspy.com o a la IP del servidor 54.85.159.138
- Todo el tráfico se envía al puerto 8888 en el endpoint de Plaspy
- El transporte puede configurarse como UDP o TCP en el dispositivo; Plaspy acepta ambos y detecta el protocolo automáticamente
- Los eventos SOS, los reportes periódicos de ubicación y la telemetría básica se entregan a Plaspy para el manejo de eventos y generación de alertas
- Una vez que los datos llegan a Plaspy, el dispositivo debería aparecer en el panel de Plaspy y empezar a reportar estado e historial de ubicación

## Flujo de configuración típico

Siga este flujo práctico para configurar un L15 y que funcione con Plaspy.

1. Acceda al método o software oficial de configuración del GOTOP L15 proporcionado por el fabricante, como la app del proveedor, la interfaz web o el conjunto de comandos SMS.
2. Ingrese el destino de Plaspy especificando el dominio del servidor d.plaspy.com o la IP 54.85.159.138 en los ajustes de servidor del dispositivo.
3. Configure el puerto del dispositivo en 8888 como puerto de destino para el reporte de datos.
4. Seleccione UDP o TCP como transporte si la interfaz de configuración del L15 solicita elegir un tipo de transporte.
5. Aplique o guarde los cambios de configuración en la herramienta del fabricante o en el menú del equipo.
6. Reinicie el dispositivo si las instrucciones del fabricante requieren un reinicio para aplicar los ajustes de red.
7. Valide que el dispositivo reporte a Plaspy comprobando su aparición en el panel de Plaspy y confirmando la recepción de una ubicación o actualización de estado.

## Ejemplos de comandos de configuración

No se disponen de comandos públicos de configuración del modelo L15 en los datos fuente de esta página. Los comandos exactos y el conjunto de herramientas que utilice dependerán del firmware de GOTOP y de las utilidades que suministre el proveedor. Los métodos habituales del fabricante incluyen cadenas de comandos SMS, una utilidad de configuración de escritorio o una app de aprovisionamiento móvil.

Si su proveedor facilita comandos SMS o una lista de comandos, ingrese el dominio del servidor Plaspy d.plaspy.com o la IP del servidor 54.85.159.138 y el puerto 8888 según la sintaxis del fabricante, y especifique UDP o TCP si se requiere. Siga siempre el orden que indique la documentación del proveedor al aplicar los ajustes de servidor y transporte.

## Notas de configuración

- Las revisiones de firmware y hardware pueden cambiar los menús de configuración y los comandos soportados; consulte siempre la documentación de GOTOP para el firmware específico de su L15.
- Si el L15 soporta tanto UDP como TCP, elija según sus necesidades operativas; Plaspy acepta ambos y detectará el protocolo automáticamente.
- Debido a que Plaspy usa el mismo puerto para todos los dispositivos, solo necesita configurar el puerto 8888 en el equipo independientemente del modelo.
- Al usar aprovisionamiento por SMS, asegúrese de que el dispositivo tenga suficiente señal y que la SIM esté provisionada para el envío de mensajes salientes y datos según requiera el método del proveedor.
- Mantenga un registro de identificadores del equipo, como el IMEI, para poder emparejar la unidad física con la lista de dispositivos en Plaspy después de la conexión inicial.

## Por qué usar Plaspy con esta configuración

Usar el GOTOP L15 con Plaspy ofrece una vía de integración sencilla para programas de cuidado de adultos mayores y respuesta personal a emergencias que necesitan ubicación en tiempo real, alertas SOS y telemetría básica centralizada. Al configurar el L15 para apuntar al endpoint y puerto compartidos de Plaspy, los equipos de cuidado pueden consolidar alertas y datos de seguimiento para monitorización, seguimiento y generación de informes.

Learn more about Plaspy and its device integration capabilities at https://www.plaspy.com. For the latest device specific instructions, firmware details, and configuration tools for the GOTOP L15, verify current information on the manufacturer site https://www.gotop.cc/. Manufacturer specifications and setup methods can change over time so checking the official GOTOP documentation ensures you follow the most current configuration steps.
