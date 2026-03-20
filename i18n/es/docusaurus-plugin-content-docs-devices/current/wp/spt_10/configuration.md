---
slug: /wp/spt_10/configuration
id: spt_10-configuration
sidebar_label: Configuration
title: WP - SPT-10 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el rastreador GPS WP SPT-10 con Plaspy usando servidor compartido y detección automática de protocolo
keywords:
  - Configuración WP SPT-10
  - Instalación WP SPT-10
  - WP SPT-10 con Plaspy
  - Configuración rastreador GPS SPT-10
  - Ajustes de servidor SPT-10
  - Configuración rastreador GPS WP
  - Configuración de dispositivo Plaspy
  - Rastreo vehicular SPT-10
  - Configuración rastreador GPS portátil
  - Configuración GPRS SMS SPT-10
---

# WP - SPT-10 Configuración

Esta página describe el contexto público de configuración para usar el rastreador WP SPT-10 con Plaspy. Reúne los ajustes prácticos de servidor y la guía de flujo de trabajo necesarios para apuntar un dispositivo SPT-10 compatible al backend de Plaspy, de modo que el equipo pueda enviar posiciones y eventos a su cuenta Plaspy. La información a continuación se concentra en los valores públicos compartidos que Plaspy requiere y en los pasos habituales que deberá seguir en el dispositivo o mediante las herramientas del fabricante.

Plaspy emplea ajustes de servidor compartidos para los rastreadores compatibles y detecta automáticamente el protocolo del equipo cuando este se conecta. Los pasos exactos del lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y la herramienta del proveedor que utilice. Use esta guía como referencia específica para Plaspy y confirme cualquier comando o menú propio del dispositivo con la documentación oficial de WP.

## Resumen de la configuración

El objetivo al configurar un SPT-10 para Plaspy es preparar el rastreador para que envíe de forma fiable datos GPS y eventos a la plataforma Plaspy para su monitoreo e informes. La configuración se centra en el punto final del servidor, la selección del transporte cuando sea necesario y en verificar que el dispositivo pueda comunicarse a través de la red móvil.

- Apuntar el dispositivo al endpoint del servidor de Plaspy para que la telemetría llegue a su cuenta Plaspy
- Seleccionar el modo de transporte si la configuración del SPT-10 requiere elegir UDP o TCP
- Asegurarse de que el dispositivo tenga una SIM activa y capacidad de datos o SMS según lo requiera su instalación
- Guardar y aplicar los ajustes, y luego validar que el dispositivo aparece en Plaspy y reporta ubicación
- Utilizar las herramientas del fabricante o comandos SMS cuando estén disponibles para establecer valores de servidor y verificar el estado del equipo

## Ajustes del servidor de Plaspy

Al configurar el SPT-10 para Plaspy, utilice estos ajustes públicos de conexión tal como se indican:

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador en las conexiones entrantes

Tenga en cuenta que Plaspy utiliza el mismo puerto para todos los dispositivos compatibles y que la detección de protocolo se realiza al establecer la conexión, por lo que el dispositivo puede configurarse usando el dominio o la IP y empleando transporte UDP o TCP.

## Requisitos previos habituales

- Un dispositivo SPT-10 cargado y alimentado con acceso al método de configuración del fabricante
- Una tarjeta SIM activa con datos y SMS habilitados si su configuración usará GPRS o SMS para la puesta a punto y el reporte
- Acceso a la herramienta de configuración oficial de WP, la aplicación o la lista de comandos SMS proporcionada por el fabricante
- Sus credenciales de cuenta Plaspy o acceso a la cuenta Plaspy donde se registrará el dispositivo
- El IMEI o identificador del dispositivo disponible para su verificación en Plaspy después de la primera conexión
- Conocimientos básicos sobre si su instalación prefiere transporte UDP o TCP

## Cómo se conecta este rastreador a Plaspy

El SPT-10 envía datos de ubicación y eventos al endpoint de Plaspy que usted configure en el dispositivo. Una vez que se establecen el servidor y el puerto correctos y el dispositivo tiene acceso a la red, Plaspy detectará automáticamente el protocolo y comenzará a procesar los datos entrantes para que el dispositivo sea visible en su cuenta Plaspy.

- El dispositivo se configura para reportar al endpoint y puerto compartidos de Plaspy
- Los datos pueden enviarse por medio de la conexión de datos móviles usando la capacidad GPRS del SPT-10
- Dependiendo del firmware, se puede usar SMS para la configuración por comandos o como reporte de respaldo
- Plaspy recibe la conexión entrante en el puerto 8888 y realiza la detección de protocolo
- Tras una conexión exitosa, el dispositivo aparecerá en Plaspy y reportará posiciones GPS y eventos

## Flujo típico de configuración

1. Acceda al método oficial de configuración del WP SPT-10 o al software provisto por el fabricante, como la herramienta web, la app o el conjunto de comandos SMS.  
2. Ingrese el dominio del servidor Plaspy d.plaspy.com o la IP del servidor Plaspy 54.85.159.138 en el campo de servidor u host.  
3. Establezca el puerto del servidor en 8888 en los ajustes de red del dispositivo.  
4. Elija UDP o TCP si la configuración del SPT-10 requiere seleccionar un protocolo de transporte.  
5. Aplique o guarde la configuración en el dispositivo o mediante la herramienta del fabricante.  
6. Reinicie el SPT-10 si el método de configuración lo requiere para activar los nuevos ajustes del servidor.  
7. Valide que el dispositivo reporta a Plaspy confirmando que aparece en su cuenta Plaspy y verificando una ubicación o actualización de estado inicial.

## Ejemplos de comandos de configuración

El SPT-10 admite configuración mediante las herramientas del fabricante, comandos SMS y actualizaciones OTA según el firmware. Las cadenas de comando públicas son específicas del proveedor y no se incluyen aquí. Al configurar, normalmente suministrará el dominio o IP del servidor Plaspy y el puerto 8888 usando uno de los métodos del dispositivo:

- Use la app de configuración WP o el portal web para establecer el servidor en d.plaspy.com o 54.85.159.138 y el puerto en 8888  
- Si utiliza configuración por SMS, consulte la lista oficial de comandos SMS de WP y envíe los comandos equivalentes de servidor y puerto al dispositivo  
- Para configuración OTA, consulte la guía de firmware del dispositivo para enviar los ajustes de forma remota

Dado que el firmware del SPT-10 y las herramientas del fabricante varían, verifique la sintaxis exacta de los comandos o los nombres de campo en la documentación de WP. Recuerde seleccionar UDP o TCP cuando el dispositivo solicite elegir el transporte.

## Notas de configuración

- Las versiones de firmware y las revisiones de hardware del SPT-10 pueden cambiar nombres de menús, comandos SMS y comportamientos; siempre verifique los comandos con el manual actual de WP.  
- Elija UDP o TCP según sus necesidades de red y servidor; Plaspy acepta ambos y detectará el protocolo automáticamente al conectarse.  
- El SPT-10 soporta comunicación por SMS y GPRS, por lo que la configuración a menudo puede realizarse mediante comandos SMS o por GPRS usando el portal del fabricante.  
- Plaspy utiliza el mismo puerto 8888 para todos los dispositivos compatibles, por lo que no necesita puertos distintos para distintos modelos de rastreadores.  
- Si una configuración o actualización de firmware falla, consulte los materiales de soporte de WP para pasos de solución de problemas antes de intentar cambios adicionales.

## Por qué usar Plaspy con esta configuración

Usar el WP SPT-10 con Plaspy proporciona visibilidad centralizada de la ubicación en tiempo real, alertas de eventos y trayectorias históricas. Apuntar un SPT-10 al endpoint del servidor Plaspy integra el dispositivo en una plataforma gestionada donde gerentes de flotas, cuidadores o supervisores de activos pueden monitorear desplazamientos, recibir alertas y revisar el historial de recorridos desde una única interfaz.

Para obtener más información sobre Plaspy visite https://www.plaspy.com. Verifique siempre los métodos de configuración específicos del dispositivo, el comportamiento del firmware y la guía del fabricante en el sitio oficial de WP http://www.wondeproud.com/ ya que las especificaciones del fabricante y las funciones de firmware pueden cambiar con el tiempo.
