---
slug: /gotop/vt_392/configuration
id: vt_392-configuration
sidebar_label: Configuration
title: GOTOP - VT-392 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el GOTOP VT-392 con Plaspy, ajustes de servidor y pasos prácticos
keywords:
  - configuración GOTOP VT-392
  - instalación GOTOP VT-392
  - GOTOP VT-392 Plaspy
  - configuración de servidor VT-392
  - configuración tracker GPS GOTOP
  - instalación seguimiento VT-392
  - configuración rastreo vehicular
  - configuración gestión de flotas
  - configuración tracker Plaspy
  - integración plataforma GPS
---

# GOTOP - VT-392 Configuración

Esta página describe el contexto público de configuración para usar el rastreador GOTOP VT-392 con Plaspy. Se enfoca en los ajustes del servidor Plaspy y en los pasos prácticos necesarios para apuntar un dispositivo VT-392 hacia Plaspy, de modo que los datos de posición y eventos lleguen a la plataforma. Use esta guía junto con la documentación del fabricante al ajustar la configuración del dispositivo.

Plaspy emplea parámetros de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando llegan los datos. Los pasos exactos en el dispositivo pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor, por lo que siempre confirme los detalles con la documentación oficial del VT-392.

## Resumen de la configuración

Este proceso prepara al VT-392 para comunicarse de forma fiable con Plaspy direccionando su telemetría al endpoint y puerto del servidor Plaspy. El objetivo es garantizar que el rastreador informe posición, eventos de alarma y datos de identificación de conductor a la plataforma, de modo que los dispositivos sean visibles y gestionables en Plaspy.

- Apunte las opciones de reporte del VT-392 al servidor Plaspy para que los datos se enruten a la plataforma.
- Configure el transporte del dispositivo para usar UDP o TCP en el puerto de Plaspy según lo requiera la interfaz del dispositivo.
- Verifique la conectividad GPRS y los parámetros APN necesarios para que el rastreador pueda acceder a Internet y al endpoint de Plaspy.
- Guarde y aplique los ajustes, luego reinicie el dispositivo si el firmware o las herramientas lo requieren.
- Valide que el dispositivo aparezca y reporte correctamente en Plaspy después de la configuración.

## Parámetros del servidor Plaspy

Use los siguientes ajustes públicos de servidor Plaspy al configurar el VT-392 para la plataforma:

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte compatible UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador cuando llegan los datos

Tenga en cuenta que todos los dispositivos en Plaspy usan el mismo puerto. El VT-392 puede configurarse para usar UDP o TCP en el puerto 8888 según las opciones del dispositivo.

## Requisitos típicos antes de la configuración

- El dispositivo debe tener alimentación y ser accesible para su configuración (acceso de instalador o administrador).
- SIM activa y servicio de datos GPRS configurado en el rastreador si va a usar comunicación celular.
- Acceso al método de configuración oficial GOTOP o al software necesario para cambiar servidor y transporte.
- IMEI del dispositivo o identificador único disponible para el registro y la validación en la plataforma.
- Entender si el firmware del rastreador espera transporte TCP o UDP al apuntar a Plaspy.
- Documentación del fabricante o contacto del proveedor para instrucciones específicas de firmware.

## Cómo se conecta este rastreador a Plaspy

El VT-392 envía datos de ubicación, alarma e identificación de conductor al endpoint de Plaspy para que gestores de flota y propietarios puedan monitorear estado y eventos. Los datos de identificación de conductor leídos por el lector telefónico se transmiten por el canal de datos del dispositivo hacia el servidor.

- El rastreador se configura para reportar al endpoint y puerto compartido de Plaspy (d.plaspy.com o 54.85.159.138 en el puerto 8888).
- El dispositivo puede usar UDP o TCP como protocolo de transporte al enviar datos a Plaspy.
- GPRS se utiliza para transportar los datos del VT-392 al servidor Plaspy cuando la conectividad celular está activa.
- Los eventos de Driver ID y del lector telefónico se envían al servidor para que la plataforma muestre identidad y eventos de alarma.
- Plaspy detecta automáticamente el protocolo del rastreador y procesa los mensajes entrantes sin necesidad de seleccionar el protocolo manualmente en la plataforma.

## Flujo típico de configuración

1. Acceda al método de configuración oficial del GOTOP VT-392 o al software proporcionado por el fabricante o el proveedor.
2. Ingrese la dirección del servidor Plaspy como d.plaspy.com o, alternativamente, la IP 54.85.159.138 en el campo de configuración del servidor del dispositivo.
3. Establezca el puerto del servidor en 8888 como puerto de reporte del dispositivo.
4. Seleccione UDP o TCP si el dispositivo requiere elegir el protocolo de transporte.
5. Configure cualquier parámetro GPRS requerido, como el APN según el operador de la SIM, y guarde esos ajustes.
6. Aplique o guarde los cambios de configuración y reinicie el VT-392 si la herramienta o el firmware requieren reinicio para aplicar los ajustes.
7. Valide que el dispositivo reporte a Plaspy y que los datos de posición y eventos (incluyendo mensajes de Driver ID) aparezcan en la plataforma.

## Ejemplos de comandos de configuración

Los comandos exactos o las pantallas de configuración del VT-392 dependen de la herramienta del fabricante, el firmware y la distribución del proveedor. Dado que los métodos varían según el modelo, consulte el manual de configuración GOTOP o la herramienta del proveedor para la sintaxis y el procedimiento exacto para establecer la dirección del servidor, el puerto, el transporte y los valores APN de GPRS. Plaspy requiere que el dispositivo apunte a d.plaspy.com o 54.85.159.138 en el puerto 8888 y aceptará UDP o TCP.

Si dispone de la lista de comandos del proveedor o del conjunto de comandos SMS para su VT-392, mantenga el orden que especifique el fabricante y sustituya los marcadores de APN como [apn], [apnu] o [apnp] cuando el dispositivo requiera credenciales del operador. Conserve esos marcadores si se proporcionan y reemplácelos con los valores de su operador móvil al aplicar la configuración.

## Notas de configuración

- Las diferencias de firmware pueden cambiar cómo se introducen servidor, puerto y transporte. Siga el manual del VT-392 para pasos específicos según el firmware.
- Elija TCP o UDP según las opciones del VT-392 y las condiciones de su red; ambos son soportados por Plaspy en el puerto 8888.
- Confirme la configuración GPRS y APN para la tarjeta SIM en el dispositivo para que el rastreador pueda alcanzar d.plaspy.com o 54.85.159.138.
- El lector telefónico y las funciones de Driver ID del VT-392 envían datos de identidad por el mismo canal de datos, por lo que debe asegurarse de que el dispositivo esté autorizado a transmitir esa información al servidor.
- Si necesita ejemplos directos de comandos, utilice la guía oficial de configuración GOTOP o la herramienta del proveedor para obtener la sintaxis y la secuencia correcta.

## Por qué usar Plaspy con esta configuración

Usar el GOTOP VT-392 con Plaspy ofrece una manera directa de consolidar en una sola plataforma la recopilación de eventos de ubicación, alarma e identificación de conductor. Apuntar el VT-392 a Plaspy brinda a las organizaciones visibilidad centralizada sobre el movimiento de vehículos, eventos de seguridad e informes de identidad de conductores, lo que ayuda en la supervisión operativa y la respuesta a incidentes.

Aprenda más sobre Plaspy y cómo maneja los datos de dispositivos en el sitio web de Plaspy https://www.plaspy.com. Para métodos de configuración específicos más recientes, comportamiento de firmware y detalles del fabricante del GOTOP VT-392, verifique la información en el sitio oficial de GOTOP https://www.gotop.cc/ antes de comenzar la configuración.
