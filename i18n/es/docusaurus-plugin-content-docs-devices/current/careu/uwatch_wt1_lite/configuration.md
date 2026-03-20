---
slug: /careu/uwatch_wt1_lite/configuration
id: uwatch_wt1_lite-configuration
sidebar_label: Configuration
title: CAREU - uWatch WT1 Lite Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del CAREU uWatch WT1 Lite con parámetros de servidor Plaspy y pasos prácticos para su integración
keywords:
  - configuración CAREU uWatch WT1 Lite
  - configuración uWatch WT1 Lite
  - guía integración Plaspy
  - configuración rastreador GPS wearable
  - configuración seguimiento cuidador
  - configuración alerta SOS
  - guía configuración geocerca
  - configuración telemetría salud
  - configuración plataforma GPS
  - configuración software de rastreo
---

# CAREU - uWatch WT1 Lite — Configuración

Esta página documenta el contexto público de configuración para usar el CAREU uWatch WT1 Lite con la plataforma de monitoreo Plaspy. Se enfoca en los parámetros de servidor públicos y en los pasos generales necesarios para apuntar el rastreador a Plaspy, de modo que los datos de ubicación y eventos puedan recibirse y mostrarse en la plataforma.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador, aunque los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas de configuración del proveedor. Use la información aquí para preparar el dispositivo para la integración con Plaspy y consulte al fabricante para detalles específicos del equipo.

## Resumen de la configuración

Este proceso prepara el uWatch WT1 Lite para enviar datos de ubicación, eventos y telemetría a Plaspy, de modo que los dispositivos aparezcan y reporten correctamente en la plataforma. La tarea principal es configurar el reloj o la herramienta de configuración del fabricante para que apunten al endpoint público de Plaspy y verificar la conectividad.

- Configure el reloj o la herramienta de configuración para que reporte al endpoint del servidor Plaspy.
- Asegúrese de que el dispositivo use el puerto del servidor Plaspy para que la plataforma pueda aceptar mensajes entrantes.
- Seleccione UDP o TCP como transporte si el dispositivo requiere una opción y guarde la configuración.
- Valide que el dispositivo aparezca en Plaspy y confirme que está reportando ubicación y eventos de alerta.
- Ajuste las opciones del fabricante para SOS y geocercas para que esos eventos se reenvíen a Plaspy.

## Parámetros del servidor Plaspy

Use estos parámetros públicos de Plaspy al configurar el CAREU uWatch WT1 Lite o la herramienta de configuración del fabricante:

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte soportado: UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador

Tenga en cuenta que Plaspy utiliza el mismo puerto para todos los dispositivos compatibles y confía en la detección automática de protocolos para manejar diferentes protocolos de rastreadores.

## Requisitos típicos antes de comenzar

- Un uWatch WT1 Lite cargado y operativo con acceso al método de configuración del fabricante o a la app compañera.
- Acceso a la herramienta oficial de configuración del fabricante o a la app móvil usada para establecer servidores y transporte.
- Una cuenta de Plaspy o acceso al despliegue de Plaspy donde se monitoreará el dispositivo.
- Una ruta de red estable desde el dispositivo hacia internet público para que alcance d.plaspy.com o la IP indicada.
- Identificadores básicos del dispositivo (por ejemplo IMEI o ID de dispositivo) para confirmar el equipo en Plaspy después de la configuración.

## Cómo se conecta este rastreador a Plaspy

Cuando se configura para Plaspy, el uWatch WT1 Lite envía ubicación, eventos y telemetría disponible al endpoint compartido de Plaspy para que esos mensajes puedan procesarse y mostrarse en la plataforma. El dispositivo se apunta al endpoint público de Plaspy y usa el puerto común de Plaspy para todos los equipos.

- El dispositivo se configura para reportar a d.plaspy.com o directamente a 54.85.159.138.
- Todos los mensajes se envían al puerto 8888 que Plaspy utiliza para recibir datos de rastreadores.
- El dispositivo puede usar UDP o TCP si el fabricante permite la selección de transporte.
- Plaspy detecta automáticamente el protocolo del rastreador y procesa los mensajes según corresponda.
- Eventos como pulsaciones del botón SOS y rupturas de geocerca se reenvían a la plataforma una vez que se establece el reporte.

## Flujo típico de configuración

1. Ingrese al método oficial de configuración del fabricante o al software para el uWatch WT1 Lite, normalmente la app compañera o una herramienta del proveedor.
2. En los ajustes de servidor, introduzca el servidor Plaspy como d.plaspy.com o use la IP directa 54.85.159.138.
3. Establezca el puerto del servidor en 8888 para coincidir con el puerto público de recepción de Plaspy.
4. Elija UDP o TCP si el dispositivo o la herramienta requiere una selección de transporte.
5. Aplique o guarde la configuración en la herramienta o app del fabricante.
6. Reinicie el dispositivo si las instrucciones del fabricante recomiendan o requieren un reinicio para aplicar los cambios.
7. Valide que el dispositivo reporte a Plaspy ubicándolo en la plataforma y comprobando actualizaciones recientes de posición o eventos.

## Ejemplo de comandos de configuración

El método de configuración del uWatch WT1 Lite varía según la herramienta del fabricante y el firmware. No se incluyen comandos crudos públicos para este modelo. Use la app oficial de CAREU o la herramienta del proveedor para establecer los valores del servidor Plaspy descritos arriba. Si su proveedor ofrece comandos por SMS o CLI para la configuración, aplique los mismos valores:

- Dominio o IP del servidor: d.plaspy.com o 54.85.159.138
- Puerto: 8888
- Transporte: UDP o TCP

Si recibe comandos provistos por CAREU o un script de configuración del proveedor, siga las instrucciones del vendedor y reemplace los valores del servidor y puerto por los listados en este documento.

## Notas de configuración

- Las versiones de firmware y las interfaces de configuración del fabricante pueden diferir; confirme las etiquetas de menú y nombres de campo exactos en la documentación de CAREU.
- Cuando el dispositivo ofrezca una elección entre UDP y TCP, pruebe ambos transportes si encuentra problemas de conectividad; Plaspy acepta cualquiera de los dos en el puerto compartido.
- Plaspy usa el mismo puerto para todos los dispositivos soportados y detecta automáticamente el protocolo del rastreador, lo que reduce la necesidad de seleccionar un protocolo manualmente en muchos casos.
- Si el fabricante proporciona configuración vía SMS o comandos directos, mantenga los marcadores de posición tal como los provea CAREU y sustitúyalos según la guía del proveedor.
- Verifique siempre los identificadores del dispositivo (por ejemplo IMEI o ID de dispositivo) para poder emparejar el equipo físico con el registro en Plaspy después de la configuración.

## Por qué usar Plaspy con esta configuración

Usar el CAREU uWatch WT1 Lite con Plaspy centraliza la ubicación, las alertas y la telemetría de salud en una única plataforma de monitoreo. Organizaciones y cuidadores obtienen visibilidad en tiempo real, reciben notificaciones SOS y de geocerca, y conservan reproducción histórica para la revisión de incidentes y flujos de trabajo de atención continua.

Para obtener más información sobre Plaspy y cómo gestiona las conexiones y el monitoreo de dispositivos, visite https://www.plaspy.com. Para los métodos de configuración, comportamientos de firmware e instrucciones del fabricante más recientes, verifique los detalles con CAREU en https://www.systech-iot.com/ antes de proceder con despliegues a gran escala.
