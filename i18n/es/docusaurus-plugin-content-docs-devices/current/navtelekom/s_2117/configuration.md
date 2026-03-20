---
slug: /navtelekom/s_2117/configuration
id: s_2117-configuration
sidebar_label: Configuration
title: Navtelekom - СИГНАЛ S-2117 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del Navtelekom СИГНАЛ S-2117 y su compatibilidad con Plaspy para gestión de flotas
keywords:
  - Configuración Navtelekom СИГНАЛ S-2117
  - Configuración S-2117 Navtelekom
  - Configuración S-2117 Plaspy
  - Configuración rastreador GPS Navtelekom
  - Configuración servidor S-2117
  - Rastreador Navtelekom Plaspy
  - Guía de configuración S-2117
  - Configuración rastreador de flota S-2117
  - Configuración sensor de combustible S-2117
  - Sensor de temperatura S-2117
---

# Navtelekom - СИГНАЛ S-2117 Configuración

Esta página documenta el contexto público de configuración para usar el rastreador Navtelekom СИГНАЛ S-2117 con Plaspy. Reúne los detalles prácticos de servidor y flujo de trabajo necesarios para apuntar el dispositivo a Plaspy y validar que el rastreador aparece y reporta correctamente en la plataforma.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, aunque los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Use la guía a continuación para preparar el S-2117 para Plaspy y consulte la documentación del proveedor para utilidades específicas del equipo y comportamientos de firmware.

## Resumen de la configuración

Este proceso prepara al S-2117 para enviar ubicación, telemetría y eventos a Plaspy mediante el endpoint y puerto compartidos de Plaspy. El objetivo es registrar el dispositivo en Plaspy configurando su destino de red y transporte para que la plataforma reciba e interprete los mensajes correctamente.

- Configure el rastreador para reportar al endpoint del servidor de Plaspy para que la ubicación y la telemetría lleguen a la plataforma.
- Seleccione el tipo de transporte (UDP o TCP) si es necesario y establezca el puerto en el que Plaspy escucha.
- Valide la conectividad celular y que los mensajes lleguen al endpoint de Plaspy para actualizaciones en tiempo real.
- Confirme que el dispositivo aparece y reporta la telemetría esperada, como alarmas, entradas de sensor de combustible y temperatura si aplica.
- Guarde y aplique la configuración usando las herramientas oficiales de Navtelekom y verifique el comportamiento en los paneles de Plaspy.

## Ajustes del servidor Plaspy

- Server domain d.plaspy.com  
- Server IP 54.85.159.138  
- Port 8888  
- Transport support: UDP or TCP (the device may be configured using UDP or TCP on port 8888)  
- Plaspy automáticamente detecta el protocolo del rastreador y utiliza el mismo puerto para todos los dispositivos compatibles

## Requisitos típicos antes de la configuración

- Acceso al método u software oficial de configuración de Navtelekom para el S-2117.
- Dispositivo alimentado e instalado según las indicaciones del fabricante para que pueda registrarse en la red celular.
- Servicio celular válido y cualquier credencial requerida por el proveedor para configuración remota.
- Acceso a una cuenta de Plaspy o permisos administrativos para validar que el dispositivo sea visible en la plataforma tras la configuración.
- Información básica de la unidad, como IMEI o identificador del dispositivo, para enlazarlo con los registros en Plaspy.
- Si va a usar sensores adicionales como sensores de combustible RS-485 o sondas de temperatura 1-Wire, téngalos conectados y verificados en el lado del dispositivo.

## Cómo se conecta este rastreador a Plaspy

El S-2117 envía posiciones GNSS y mensajes de telemetría a través del enlace GSM al endpoint de servidor configurado, donde Plaspy ingiere y decodifica los datos. Una vez que el dispositivo esté apuntando al endpoint de Plaspy y se haya establecido el puerto y transporte correctos, Plaspy detectará automáticamente el protocolo y comenzará a procesar los mensajes para paneles, alertas e informes.

- El rastreador transmite actualizaciones de posición y telemetría a d.plaspy.com o 54.85.159.138 en el puerto 8888.
- Elija UDP o TCP cuando el dispositivo requiera selección explícita de transporte; Plaspy acepta ambos en el mismo puerto.
- Plaspy detecta automáticamente el protocolo del dispositivo y asigna los mensajes entrantes al registro de dispositivo correspondiente.
- Eventos como alarmas, señales de manipulación, lecturas de sensores de combustible y entradas de temperatura se encaminan a Plaspy para alertas e historial.
- Para que el dispositivo sea visible en Plaspy, debe enviar al menos un mensaje válido al endpoint configurado.

## Flujo de configuración común

1. Acceda al método o software oficial de configuración de Navtelekom para el СИГНАЛ S-2117 (configurador local, herramienta del proveedor o comandos SMS documentados).
2. Ingrese el dominio del servidor Plaspy d.plaspy.com o la IP del servidor Plaspy 54.85.159.138 como destino del dispositivo.
3. Configure el puerto del dispositivo en 8888, que Plaspy utiliza para todos los equipos.
4. Elija UDP o TCP si el dispositivo requiere selección explícita del transporte para mensajes salientes.
5. Aplique o guarde la configuración en la herramienta del proveedor y confirme que el dispositivo aceptó los cambios.
6. Reinicie el rastreador si la herramienta del proveedor o el firmware lo requiere para aplicar los cambios de destino de red.
7. Valide que el dispositivo reporta a Plaspy verificando la actividad del equipo y los mensajes entrantes en su cuenta de Plaspy.

## Ejemplos de comandos de configuración

El contenido de configuración pública del modelo aquí proporcionado no incluye cadenas de comandos específicas del dispositivo. Los comandos exactos y su sintaxis varían según el firmware de Navtelekom y el método de configuración que utilice (configurador de PC, comandos SMS o herramienta de servicio del proveedor). Al usar comandos o herramientas del fabricante, siga las instrucciones oficiales de Navtelekom para establecer la dirección del servidor y el puerto a d.plaspy.com o 54.85.159.138 y puerto 8888, y seleccione UDP o TCP según corresponda.

Si dispone de ejemplos de comandos suministrados por el proveedor o de una exportación del configurador oficial, inclúyalos en el orden requerido por la herramienta y preserve cualquier marcador de posición. Los marcadores de posición como [apn], [apnu] o [apnp] deben mantenerse y reemplazarse con los datos de su operador celular cuando el equipo lo solicite.

## Notas de configuración

- Las diferencias de firmware y herramientas pueden cambiar los nombres de menú y los formatos de comando; siempre verifique la sintaxis con la documentación actual de Navtelekom.
- Cuando tenga la opción, TCP y UDP funcionan con Plaspy en el puerto 8888. Seleccione el transporte que mejor se adapte a su despliegue y a las necesidades de fiabilidad de la red.
- El S-2117 admite sensores RS-485 y 1-Wire; asegúrese de que esos sensores estén configurados en el dispositivo y que los campos reportados estén habilitados en la configuración del proveedor.
- Que un modelo esté discontinuado no impide su uso con Plaspy, pero puede limitar el acceso a firmware más reciente; conserve copias de las herramientas y firmware del proveedor que funcionen para su instalación.
- Valide cada dispositivo después de la configuración confirmando que al menos un mensaje inicial llegue a d.plaspy.com o 54.85.159.138 en el puerto 8888 y sea visible en Plaspy.

## Por qué usar Plaspy con esta configuración

Usar el Navtelekom СИГНАЛ S-2117 con Plaspy proporciona a los operadores de flotas visibilidad centralizada de la posición y telemetría avanzada como niveles de combustible, temperatura y eventos de alarma. La detección automática de protocolos de Plaspy y el endpoint de servidor compartido simplifican la integración, permitiendo que los dispositivos comiencen a reportar con cambios mínimos en la configuración del equipo, más allá del destino del servidor y el transporte.

To learn more about Plaspy and supported integrations visit https://www.plaspy.com. For the latest device specific commands, firmware behavior, and manufacturer documentation verify details at the Navtelekom site https://www.navtelecom.ru/ as vendor procedures and firmware revisions can change over time.
