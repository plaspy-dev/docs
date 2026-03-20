---
slug: /careu/uwatch_wt1/configuration
id: uwatch_wt1-configuration
sidebar_label: Configuration
title: CAREU - uWatch WT1 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el CAREU uWatch WT1 con Plaspy cubre ajustes del servidor y flujo de instalación
keywords:
  - configuración CAREU uWatch WT1
  - instalación CAREU uWatch WT1
  - uWatch WT1 con Plaspy
  - guía de configuración uWatch WT1
  - ajustes de servidor uWatch WT1
  - configuración de rastreador Plaspy
  - configuración de rastreador GPS wearable
  - configuración de smartwatch GPS
  - software de rastreo uWatch WT1
  - configuración de dispositivo de monitoreo de personal
---

# CAREU - uWatch WT1 Configuración

Esta página documenta el contexto público de configuración para usar el CAREU uWatch WT1 con Plaspy. Se enfoca en los ajustes compartidos del servidor de Plaspy y en los pasos prácticos que instaladores y administradores suelen seguir para apuntar el dispositivo a Plaspy, de modo que la ubicación, eventos SOS y la telemetría disponible lleguen a una cuenta Plaspy. Utilice esta guía junto con la documentación del fabricante para procedimientos específicos del dispositivo.

Plaspy utiliza un endpoint y puerto compartidos y consistentes para los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el dispositivo comienza a reportar. Los pasos exactos por parte del fabricante para configurar el uWatch WT1 pueden variar según la versión de firmware, la revisión de hardware, las herramientas del proveedor y el tipo de instalación, por lo que confirme los pasos finales con el material oficial del fabricante cuando sea necesario.

## Visión general de la configuración

Este proceso prepara el uWatch WT1 para comunicarse con Plaspy, indicando al dispositivo el servidor de Plaspy, confirmando los ajustes de transporte y validando que la telemetría y las alertas de emergencia lleguen a la plataforma. El objetivo es habilitar actualizaciones de ubicación confiables, notificaciones SOS y cualquier telemetría de salud compatible para que los equipos de cuidado y operaciones puedan monitorear y responder.

- Apuntar el rastreador al endpoint del servidor Plaspy y asegurarse de que use el puerto compartido de Plaspy
- Verificar la selección de transporte (UDP o TCP) si la herramienta de configuración del dispositivo lo requiere
- Confirmar la conectividad celular o de mensajería que el wearable necesite para reportar
- Validar que el dispositivo sea visible y esté reportando en Plaspy después de la configuración
- Opcionalmente configurar geocercas, destinatarios de SOS e intervalos de reporte mediante las herramientas del fabricante y Plaspy

## Ajustes del servidor de Plaspy

- Server domain: d.plaspy.com  
- Server IP address: 54.85.159.138  
- Port: 8888 (Plaspy uses the same port for all supported devices)  
- Transport: support for UDP or TCP on port 8888 depending on device preference  
- Plaspy behavior: automatic protocol detection in Plaspy detects the tracker protocol when the device connects

## Requisitos previos típicos

- Un wearable uWatch WT1 cargado y funcional con acceso al método o software de configuración del fabricante  
- Conectividad activa en el dispositivo según requiera el modelo, como una SIM celular operativa o servicio SMS donde aplique  
- Acceso al IMEI del dispositivo u otro identificador y cualquier información de cuenta necesaria para emparejar el dispositivo en Plaspy  
- Acceso administrativo a la herramienta de configuración o a la app del proveedor usada para cambiar ajustes de servidor y transporte  
- Una cuenta Plaspy con permisos para agregar y monitorear dispositivos, de modo que pueda validar los reportes después de la configuración

## Cómo se conecta este rastreador a Plaspy

El uWatch WT1 se configura para enviar sus actualizaciones de ubicación, alertas SOS y telemetría disponible al endpoint y puerto compartidos de Plaspy. Una vez que el dispositivo esté direccionado a d.plaspy.com o a 54.85.159.138 en el puerto 8888, Plaspy detecta automáticamente el protocolo del rastreador e ingiere los datos del dispositivo en la plataforma para visualización en el mapa y generación de alertas.

- Los reportes del dispositivo se envían al endpoint de Plaspy d.plaspy.com o 54.85.159.138 en el puerto 8888  
- El transporte puede configurarse como UDP o TCP según los requisitos del dispositivo y las condiciones de red  
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta al puerto compartido  
- Las actualizaciones de ubicación, eventos SOS y la telemetría compatible aparecen en Plaspy para monitoreo y reproducción histórica  
- Una conexión exitosa permite a Plaspy registrar la marca de tiempo y visualizar la telemetría entrante para uso operativo

## Flujo de configuración habitual

1. Acceda al método oficial de configuración del fabricante para el CAREU uWatch WT1 (app del proveedor, portal web o comandos SMS si están soportados).  
2. Ingrese el endpoint del servidor de Plaspy usando d.plaspy.com o la IP 54.85.159.138 según lo permita la herramienta del dispositivo.  
3. Establezca el puerto de destino en 8888 (tenga en cuenta que Plaspy usa el mismo puerto para todos los dispositivos soportados).  
4. Seleccione el protocolo de transporte UDP o TCP si la herramienta del dispositivo exige elegir uno.  
5. Aplique o guarde la configuración en la herramienta del fabricante y confirme que los ajustes quedaron guardados en el dispositivo.  
6. Reinicie el dispositivo si las instrucciones del fabricante requieren reboot para activar los nuevos ajustes de servidor.  
7. Valide que el dispositivo reporte a Plaspy comprobando la llegada de ubicaciones o telemetría en su cuenta Plaspy y confirmando la detección del protocolo.

## Ejemplos de comandos de configuración

No se proporcionan aquí cadenas de comandos públicas del dispositivo. Los comandos exactos y el método para aplicarlos varían según la herramienta del fabricante, el firmware y las variantes regionales del dispositivo. Los dispositivos CAREU pueden configurarse usando software del proveedor, portales web o, cuando el dispositivo lo soporte, configuración por SMS. Consulte la documentación oficial de CAREU para la sintaxis de comandos o las pantallas de configuración específicas de su versión de firmware.

Si cuenta con una lista de comandos proporcionada por el proveedor, aplíquelos en el orden que recomiende el fabricante y preserve cualquier marcador de posición como valores APN exactamente tal como se indiquen. Si recibe comandos públicos del proveedor, deben ejecutarse por el canal recomendado por el vendedor y verificarse confirmando que el dispositivo reporta a d.plaspy.com o 54.85.159.138 en el puerto 8888.

## Notas de configuración

- Las diferencias de firmware y las revisiones de hardware pueden cambiar la apariencia de las pantallas de configuración o los comandos SMS; confirme siempre con la documentación del fabricante para la revisión de su dispositivo.  
- Elija UDP o TCP según la confiabilidad de la red y las recomendaciones de la herramienta del dispositivo; Plaspy acepta ambos en el puerto 8888 y detecta el protocolo automáticamente.  
- Todos los dispositivos que se conectan a Plaspy usan el mismo puerto, por lo que mantener una configuración de puerto consistente simplifica la gestión de flotas.  
- Si el dispositivo soporta configuración por SMS, asegúrese de que el APN y los ajustes de mensajería sean correctos antes de apuntar el servidor.  
- Después de configurar servidor y transporte, espere un breve lapso para que el dispositivo establezca la conexión y Plaspy detecte el protocolo de forma automática.

## Por qué usar Plaspy con esta configuración

Usar el CAREU uWatch WT1 con Plaspy centraliza la ubicación y la telemetría de salud disponible en una vista operativa única. Esa combinación ayuda a los equipos de cuidado y a las organizaciones a mantener conciencia situacional, recibir notificaciones SOS con rapidez y revisar rutas históricas junto con signos vitales y eventos reportados por el dispositivo.

Learn more about Plaspy and how devices integrate with the platform at https://www.plaspy.com. For the latest device specific instructions, firmware notes, and manufacturer details for the CAREU uWatch WT1, verify the official guidance from the device manufacturer at https://www.systech-iot.com/ since setup methods and firmware behavior can change over time.
