---
slug: /skypatrol/sp9501/configuration
id: sp9501-configuration
sidebar_label: Configuration
title: SkyPatrol - SP9501 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar SkyPatrol SP9501 con los ajustes de servidor de Plaspy y pasos prácticos de instalación
keywords:
  - configuración SkyPatrol SP9501
  - instalación SkyPatrol SP9501
  - configuración SP9501 Plaspy
  - configuración servidor SP9501
  - configuración rastreador GPS SP9501
  - guía configuración rastreador de activos
  - configuración rastreador CDMA
  - seguimiento de flotas SP9501
  - configuración rastreador Plaspy
  - configuración plataforma de seguimiento
---

# SkyPatrol - Configuración del SP9501

Esta página explica el contexto público para configurar el rastreador SkyPatrol SP9501 con Plaspy. Resume los ajustes públicos del servidor Plaspy a los que debe apuntar el SP9501 y describe los pasos prácticos necesarios para preparar el equipo y que reporte correctamente en la plataforma. El SP9501 es un rastreador CDMA pensado para despliegues prolongados, con carga inalámbrica y gran autonomía; esta guía se centra en los puntos de integración pública relevantes para Plaspy.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando llegan los datos. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Use esta página para aplicar los ajustes públicos de Plaspy y comprender el flujo de trabajo típico, y siempre verifique las instrucciones específicas del dispositivo con la documentación oficial de SkyPatrol.

## Descripción general de la configuración

Este proceso prepara el SP9501 para comunicarse con el backend de Plaspy, de modo que el dispositivo aparezca y reporte de forma fiable en la plataforma. El objetivo es apuntar el rastreador al endpoint de Plaspy, seleccionar el transporte adecuado si es necesario y confirmar que el equipo está reportando correctamente.

- Apuntar el rastreador al endpoint del servidor Plaspy para que los datos lleguen a la plataforma.
- Seleccionar el protocolo de transporte en el dispositivo si el SP9501 requiere elegir entre UDP y TCP.
- Guardar y aplicar la configuración en la unidad o mediante la herramienta del fabricante para que los datos del servidor queden persistentes.
- Reiniciar el rastreador si el flujo de trabajo del dispositivo lo requiere para comenzar a reportar.
- Validar que el equipo sea visible y esté enviando actualizaciones a Plaspy.

## Ajustes de servidor de Plaspy

Utilice los siguientes ajustes públicos de servidor Plaspy al configurar el SP9501. Estos son los valores que debe introducir en la herramienta de configuración SkyPatrol o en la interfaz del dispositivo.

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support: configure UDP or TCP on port 8888 if the tracker requires a transport selection
- Plaspy automatically detects the tracker protocol when the device connects
- Note that all devices in Plaspy use the same port for reporting

## Requisitos previos típicos

- Dispositivo SP9501 con batería cargada o alimentado y acceso a su interfaz de configuración
- Cobertura celular adecuada para dispositivos CDMA en la zona de despliegue
- Acceso al método o software de configuración oficial de SkyPatrol utilizado por su proveedor o instalador
- Información identificadora del dispositivo como número de serie o IMEI para registrar o verificar la unidad en Plaspy
- Cuenta o acceso a la plataforma Plaspy para confirmar que el dispositivo aparece y reporta tras la configuración

## Cómo se conecta este rastreador a Plaspy

El SP9501 se configura para enviar sus reportes de ubicación y estado al endpoint y puerto compartidos de Plaspy. Plaspy recibe esos mensajes y los asocia al registro del dispositivo, lo que permite visualizar ubicación, movimiento y eventos dentro de la plataforma.

- El rastreador envía mensajes periódicos de ubicación y estado a d.plaspy.com o 54.85.159.138
- Los mensajes se envían al puerto 8888 usando el protocolo de transporte configurado
- Plaspy detecta automáticamente el protocolo que utiliza el rastreador, por lo que no es necesaria una selección de protocolo en la plataforma
- Una vez que comienza el envío, Plaspy procesa los mensajes entrantes y pone los datos del dispositivo a disposición dentro de la plataforma
- A partir de ahí se pueden configurar monitorización y alertas en Plaspy en función de la telemetría recibida

## Flujo típico de configuración

1. Acceda al método oficial de configuración de SkyPatrol o al software provisto con el SP9501.
2. Ubique la sección de ajustes de servidor o reporte remoto en la herramienta del fabricante.
3. Ingrese el servidor de Plaspy como d.plaspy.com o la IP 54.85.159.138.
4. Configure el puerto en 8888.
5. Seleccione UDP o TCP en el puerto 8888 si la interfaz del dispositivo solicita elegir un protocolo de transporte.
6. Aplique o guarde la configuración en el rastreador usando la herramienta del fabricante o la interfaz del equipo.
7. Reinicie el dispositivo si el flujo de trabajo del SP9501 requiere un reinicio para activar los nuevos ajustes.
8. Verifique en Plaspy que el dispositivo aparece y está reportando correctamente.

## Ejemplo de comandos de configuración

El SP9501 puede configurarse usando la herramienta oficial de SkyPatrol o la interfaz provista por el proveedor. Los comandos y formatos exactos dependen del software del fabricante y del firmware del dispositivo, por lo que no se incluyen aquí. Si utiliza SMS o un método de configuración estilo línea de comandos provisto por SkyPatrol, siga la documentación oficial del fabricante para la sintaxis y el orden exactos.

## Notas de configuración

- Las revisiones de firmware y hardware pueden cambiar los menús de configuración y la sintaxis requerida; siempre confirme la documentación actual de SkyPatrol para su unidad SP9501.
- Si la interfaz del dispositivo requiere elegir entre TCP y UDP, cualquiera de las dos opciones funcionará con Plaspy siempre que el rastreador envíe a d.plaspy.com o 54.85.159.138 en el puerto 8888; Plaspy detecta automáticamente el protocolo entrante.
- Las prácticas de instalación varían según el proveedor. Use la herramienta de configuración oficial de SkyPatrol o las instrucciones de su suministrador al realizar la instalación.
- Confirme la cobertura celular para redes CDMA en el sitio de instalación al planificar despliegues a largo plazo.
- Las funciones de carga inalámbrica y gestión de batería del SP9501 ayudan a mantener despliegues de varios años; asegúrese de que el dispositivo esté cargado y configurado según las recomendaciones del fabricante.

## Por qué usar Plaspy con esta configuración

Configurar el SkyPatrol SP9501 para reportar a Plaspy proporciona una manera sencilla de consolidar datos de rastreo duraderos en una sola plataforma. Para equipos que administran flotas, equipos o activos de alto valor, apuntar el SP9501 a Plaspy ofrece visibilidad centralizada y un flujo de datos consistente para monitoreo y toma de decisiones operativas.

Para obtener más información sobre Plaspy visite https://www.plaspy.com. Los métodos de configuración específicos del dispositivo, el comportamiento del firmware y los detalles del fabricante pueden cambiar con el tiempo, por lo que es recomendable verificar las últimas instrucciones en el sitio de SkyPatrol https://www.skypatrol.com/ antes de ejecutar un despliegue.
