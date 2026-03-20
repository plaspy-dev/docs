---
slug: /skypatrol/sp6824/configuration
id: sp6824-configuration
sidebar_label: Configuration
title: SkyPatrol - SP6824 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del SkyPatrol SP6824 mostrando compatibilidad con Plaspy y ajustes de servidor necesarios
keywords:
  - Configuración SkyPatrol SP6824
  - Instalación SkyPatrol SP6824
  - Configuración servidor SP6824
  - Configuración SP6824 para Plaspy
  - Configuración rastreador GPS Plaspy
  - Seguimiento de vehículos SP6824
  - Configuración gestión de flotas SP6824
  - Configuración plataforma GPS SP6824
  - Integración OBDII SP6824
  - Configuración rastreador LTE M
---

# SkyPatrol - Configuración SP6824

Esta página describe el contexto público de configuración para usar el SkyPatrol SP6824 con Plaspy. Explica los ajustes de servidor compartidos que Plaspy requiere, el propósito general de configurar el equipo y los pasos prácticos más comunes para apuntar el rastreador al servidor de Plaspy para que pueda reportar ubicación y telemetría.

Plaspy utiliza un endpoint y puerto compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando llegan los datos. Los pasos de configuración en el lado del fabricante para el SP6824 pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor, por lo que debe revisar la documentación del dispositivo para conocer los comandos y las interfaces exactas antes de realizar cambios.

## Resumen de la configuración

Configurar el SP6824 para Plaspy prepara el equipo para enviar ubicación y telemetría a la plataforma de forma confiable. El proceso se centra en apuntar el dispositivo al endpoint compartido de Plaspy, seleccionar el transporte correcto y validar que el equipo aparezca en la plataforma.

- Apuntar el rastreador al endpoint del servidor Plaspy para que los datos lleguen a la plataforma.
- Establecer el puerto y el transporte del equipo para que coincidan con los requisitos de Plaspy, usados por todos los dispositivos de la plataforma.
- Verificar la conectividad celular y la recepción GNSS para que el rastreador pueda enviar actualizaciones precisas.
- Guardar y aplicar la configuración, luego confirmar que el SP6824 sea visible y esté reportando en Plaspy.
- Usar las herramientas del fabricante para capturar opciones específicas del dispositivo, como el reenvío de telemetría OBDII si usa la variante OBDII.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte soportado UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta

Tenga en cuenta que Plaspy utiliza el mismo puerto para todos los dispositivos soportados y confía en la detección automática de protocolo para interpretar los mensajes entrantes.

## Requisitos típicos antes de la configuración

- Un SP6824 con alimentación instalado o conectado para que tenga energía y recepción GNSS
- Servicio celular LTE M activo en el dispositivo o aprovisionamiento celular compatible con LTE Cat M1
- Acceso al método de configuración oficial de SkyPatrol o al software del proveedor para cambiar los ajustes de servidor y transporte
- Una cuenta válida de Plaspy y la posibilidad de confirmar el registro o la aparición del dispositivo en la plataforma
- Acceso al puerto OBDII si utiliza la variante plug and play OBDII y desea reenviar diagnósticos del vehículo
- Documentación del fabricante correspondiente a su revisión de hardware y versión de firmware

## Cómo se conecta este rastreador a Plaspy

El SP6824 transmite posición y telemetría vía LTE M a Plaspy. Una vez configurado para reportar al endpoint y puerto compartidos de Plaspy, los mensajes del dispositivo se enrutan a la plataforma Plaspy donde se procesan y se presentan para monitoreo y alertas.

- El rastreador se configura para reportar a d.plaspy.com o a la IP equivalente 54.85.159.138
- Los mensajes se envían al puerto 8888 que Plaspy utiliza para todos los dispositivos
- El transporte puede ser UDP o TCP según las opciones del dispositivo y la preferencia del instalador
- Plaspy detecta e interpreta automáticamente el protocolo del dispositivo en las conexiones entrantes
- Eventos del dispositivo, actualizaciones de ubicación y la telemetría disponible se muestran en Plaspy para el monitoreo operativo

## Flujo de trabajo de configuración común

1. Acceda al método de configuración oficial de SkyPatrol o al software para el SP6824 según las instrucciones del fabricante.
2. Ingrese el servidor de Plaspy como d.plaspy.com o la IP 54.85.159.138 en los ajustes de servidor del dispositivo.
3. Establezca el puerto del dispositivo en 8888, tenga en cuenta que Plaspy usa el mismo puerto para todos los equipos.
4. Si el dispositivo requiere seleccionar un transporte, elija UDP o TCP según las necesidades de su instalación.
5. Aplique o guarde los cambios de configuración en la herramienta del fabricante o en el menú del dispositivo.
6. Reinicie el dispositivo si la herramienta o el firmware requieren un reinicio para que los ajustes de red surtan efecto.
7. Valide que el SP6824 está reportando a Plaspy y es visible en la plataforma; confirme que se reciben las actualizaciones de ubicación y la telemetría esperada.

## Comandos de configuración de ejemplo

Los comandos exactos y la interfaz de configuración para el SP6824 dependen de las herramientas de SkyPatrol, la versión de firmware y la revisión de hardware específica. Dado que los métodos varían, siga la guía de configuración oficial de SkyPatrol o la utilidad proporcionada por el proveedor para establecer el servidor y el puerto. Los métodos típicos del fabricante incluyen una aplicación de configuración, comandos por SMS o herramientas serial/USB, o una interfaz HTTP/USB. Consulte la documentación de SkyPatrol para el formato preciso de los comandos según su firmware.

## Notas de configuración

- Las diferencias de firmware pueden cambiar los comandos exactos y la ubicación de los menús; verifique la versión de firmware del SP6824 antes de realizar cambios.
- Elija UDP o TCP en función de la fiabilidad y las condiciones de red; ambos transportes son compatibles al usar el puerto 8888 para llegar a Plaspy.
- Plaspy utiliza un único puerto compartido para todos los dispositivos y realiza detección automática de protocolo, por lo que el equipo solo necesita apuntar al endpoint y puerto correctos.
- Si usa la variante plug and play OBDII, confirme el cableado OBDII y siga las instrucciones del fabricante para habilitar el reenvío de telemetría diagnóstica.
- Mantenga siempre una copia actualizada de la documentación de SkyPatrol para su modelo y revisión para asegurarse de aplicar el método de configuración correcto.

## Por qué usar Plaspy con esta configuración

Usar el SkyPatrol SP6824 con Plaspy ofrece una ruta sencilla hacia la visibilidad continua de vehículos y activos. La conectividad LTE M y la forma compacta del SP6824 lo hacen adecuado para instalaciones discretas en flotas y lotes de concesionarios, mientras que Plaspy recoge y normaliza la telemetría entrante para monitoreo, geocercas y alertas.

Learn more about Plaspy on the main website https://www.plaspy.com. For the latest device specific setup information, firmware details, and official SkyPatrol instructions, verify current guidance on the manufacturer site https://www.skypatrol.com/ as device behavior and configuration methods can change over time.
