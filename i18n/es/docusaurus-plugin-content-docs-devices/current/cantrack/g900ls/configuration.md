---
slug: /cantrack/g900ls/configuration
id: g900ls-configuration
sidebar_label: Configuration
title: CanTrack - G900LS Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para conectar el CanTrack G900LS a Plaspy con ajustes de servidor compartidos y pasos prácticos
keywords:
  - Configuración CanTrack G900LS
  - Instalación CanTrack G900LS
  - CanTrack G900LS Plaspy
  - Configuración rastreador GPS
  - Configuración rastreador vehicular
  - Configuración servidor G900LS
  - Integración rastreador Plaspy
  - Configuración plataforma GPS G900LS
  - Rastreador de flota CanTrack
  - Configuración GPS CanTrack
---

# CanTrack - Configuración del G900LS

Esta página ofrece contexto público sobre la configuración del CanTrack G900LS para su uso con Plaspy. Resume los ajustes de servidor compartidos por Plaspy y los pasos prácticos habituales necesarios para conectar este modelo a la plataforma, manteniendo coherencia con los procedimientos del fabricante y las diferencias de firmware.

Plaspy usa ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador, pero los pasos exactos en el lado del fabricante pueden variar según la revisión de firmware, la variante de hardware, el tipo de instalación y las herramientas del proveedor que utilice. Utilice esta guía para preparar el G900LS para Plaspy y luego confirme los detalles específicos del equipo en la documentación de CanTrack para obtener las instrucciones más actualizadas.

## Resumen de la configuración

El objetivo de la configuración es apuntar el G900LS al backend de Plaspy, comprobar la conectividad y habilitar que el equipo informe posición y eventos para que sea visible en la plataforma. Esta sección destaca los resultados prácticos que debe esperar una vez completada la configuración.

- Establecer la entrada del servidor en el dispositivo para que el rastreador envíe datos a Plaspy usando el endpoint y el puerto compartidos.
- Configurar el transporte (UDP o TCP) si el firmware del dispositivo requiere una selección explícita.
- Verificar la conectividad celular y los ajustes de APN para que el G900LS pueda establecer sesiones IP LTE/GPRS fiables.
- Validar que el dispositivo aparezca en Plaspy y transmita la telemetría prevista, como ubicación, estado de ignición y eventos de alarma.
- Confirmar los intervalos de reporte y las configuraciones de alarma para equilibrar la frecuencia de actualización con el consumo de datos.

## Ajustes de servidor de Plaspy

Use los siguientes ajustes públicos al configurar el G900LS para Plaspy. Plaspy utiliza el mismo puerto para todos los dispositivos compatibles y detecta automáticamente los protocolos de los rastreadores.

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support: UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol, so the platform will interpret incoming device messages once they arrive on the shared port

## Requisitos habituales antes de la configuración

- Asegúrese de que el G900LS tiene alimentación y está instalado según las instrucciones de CanTrack para la variante de cableado elegida.
- Confirme que existe servicio celular activo y una SIM compatible con datos habilitados para conectividad LTE/GPRS.
- Obtenga las credenciales APN correctas del operador móvil para la SIM instalada.
- Tenga acceso a la herramienta oficial de configuración de CanTrack o al conjunto de comandos SMS proporcionado por el fabricante.
- Anote identificadores del equipo como el IMEI para poder localizar el dispositivo en Plaspy cuando comience a reportar.
- Asegúrese de poder reiniciar el equipo después de aplicar cambios si el firmware requiere un reinicio para activar la configuración.

## Cómo se conecta este rastreador a Plaspy

Una vez configurado, el G900LS abre una sesión IP y sube datos de posición y telemetría al endpoint y puerto compartidos de Plaspy. Plaspy recibe mensajes en el mismo puerto para todos los dispositivos y utiliza detección automática de protocolo para parsear los paquetes entrantes según el protocolo del rastreador correspondiente.

- El rastreador se configura para enviar datos a d.plaspy.com o 54.85.159.138 en el puerto 8888.
- El transporte puede configurarse como UDP o TCP según las opciones del firmware y la preferencia del instalador.
- Actualizaciones de ubicación, estado de ignición (ACC), eventos de corte de energía y batería de respaldo, y mensajes de alarma se transmiten a Plaspy para su mapeo y alertas.
- Plaspy correlaciona los mensajes recibidos con los identificadores del equipo para que el dispositivo sea visible en la plataforma y pueda gestionarse mediante reglas e informes.
- Tras la configuración inicial y la verificación de conectividad, confirme que la frecuencia de telemetría y los umbrales de alarma coincidan con sus necesidades operativas.

## Flujo de trabajo típico de configuración

1. Acceda al método oficial de configuración de CanTrack o al software para el G900LS, por ejemplo la herramienta de configuración del fabricante o los comandos SMS soportados.
2. Ingrese el servidor de Plaspy como d.plaspy.com o, alternativamente, use la IP 54.85.159.138 si la interfaz de configuración lo requiere.
3. Establezca el puerto del servidor en 8888, teniendo en cuenta que Plaspy usa el mismo puerto para todos los dispositivos compatibles.
4. Elija UDP o TCP si el dispositivo requiere una selección explícita de transporte.
5. Configure y verifique los ajustes de APN para la SIM instalada para que el equipo pueda establecer una conexión IP.
6. Aplique o guarde la configuración y reinicie el dispositivo si el firmware necesita un reinicio para activar los cambios.
7. Valide que el dispositivo reporte a Plaspy comprobando los mensajes iniciales de ubicación y estado en la plataforma.

## Ejemplos de comandos de configuración

Los comandos exactos de configuración y el método para enviarlos variarán según el firmware de CanTrack y la herramienta de gestión que utilice. Algunos instaladores emplean la herramienta PC oficial de CanTrack, otros usan comandos SMS o una app móvil del proveedor. En términos generales, usará esas herramientas para establecer el host del servidor en d.plaspy.com o 54.85.159.138 y el puerto en 8888, y para seleccionar UDP o TCP si es necesario.

Valores típicos a ingresar en la herramienta del fabricante o en comandos SMS incluyen:
- Server host: d.plaspy.com
- Server IP: 54.85.159.138
- Server port: 8888
- Transport: UDP or TCP
- APN and APN credentials as required by the network operator

Consulte el manual de usuario de CanTrack para la sintaxis exacta de comandos o el formato de archivo de configuración según la versión de firmware de su G900LS.

## Notas de configuración

- Las revisiones de firmware y hardware pueden modificar la sintaxis de comandos y las opciones de configuración disponibles; siempre consulte la documentación de CanTrack para la revisión específica del equipo.
- Están disponibles opciones TCP y UDP; elija el transporte que mejor se adapte a sus requisitos de fiabilidad de red. Plaspy acepta ambos en el puerto compartido 8888.
- Plaspy utiliza el mismo puerto para todos los dispositivos soportados y aplica detección automática de protocolo a los mensajes entrantes, reduciendo la necesidad de seleccionar manualmente el protocolo en muchos casos.
- Los ajustes de APN y celular deben ser correctos para el reporte por IP; un APN incorrecto es la causa más frecuente de fallos en la subida de datos.
- Si utiliza configuración por SMS, confirme el conjunto de comandos SMS y el comportamiento de respuesta para su versión de firmware G900LS antes de desplegar dispositivos.

## Por qué usar Plaspy con esta configuración

Emparejar el CanTrack G900LS con Plaspy brinda a los equipos de flota y seguridad una vía práctica para obtener visibilidad en tiempo real, alertas basadas en eventos e informes históricos usando un único endpoint backend compartido. La combinación de la telemetría del G900LS y la detección automática de protocolos de Plaspy simplifica la integración y reduce los pasos necesarios para que los dispositivos comiencen a reportar en la plataforma.

Learn more about Plaspy on the main website https://www.plaspy.com and verify the latest device specific setup and firmware details on the manufacturer site https://www.cantrackgps.com/ to ensure the configuration steps match your unit and firmware version.
