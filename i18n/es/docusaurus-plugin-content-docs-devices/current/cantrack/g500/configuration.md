---
slug: /cantrack/g500/configuration
id: g500-configuration
sidebar_label: Configuration
title: CanTrack - G500 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del CanTrack G500 con parámetros de servidor Plaspy y pasos prácticos para seguimiento confiable
keywords:
  - configuración CanTrack G500
  - instalación CanTrack G500
  - ajustes servidor CanTrack G500
  - CanTrack G500 Plaspy
  - rastreador GPS CanTrack G500
  - guía configuración G500
  - configuración G500 para Plaspy
  - configuración seguimiento vehicular
  - configuración rastreo de flotas
  - configuración servidor rastreador GPS
---

# CanTrack - G500 Configuración

Esta página describe el contexto público de configuración para usar el CanTrack G500 con Plaspy. Explica los ajustes de servidor compartidos a los que debe apuntar el dispositivo y resume los pasos prácticos para preparar el rastreador y que reporte correctamente a Plaspy. La guía aquí se basa en la descripción del equipo: el G500 utiliza GSM GPRS para comunicaciones y GPS para posicionamiento satelital, y admite monitoreo remoto y alertas por mensajes cortos.

Plaspy usa ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor, así que use esta página como referencia pública práctica y verifique cualquier paso específico del dispositivo en la documentación de CanTrack o en las instrucciones del proveedor.

## Resumen de la configuración

Este proceso prepara el G500 para enviar datos de ubicación y eventos a Plaspy, de modo que el dispositivo sea visible y administrable en la plataforma. El objetivo es establecer el endpoint y transporte del servidor, validar la conectividad de red y confirmar que el dispositivo está reportando correctamente a Plaspy.

- Apunte el rastreador al servidor de Plaspy usando el dominio o IP compartidos y el puerto de la plataforma.
- Seleccione el método de transporte que soporte el dispositivo para enviar los datos de forma fiable a Plaspy.
- Confirme que el dispositivo tiene conexión de datos celular activa y el APN correcto si es necesario.
- Aplique y guarde los cambios de configuración usando la herramienta del fabricante o comandos SMS según lo provea el proveedor.
- Verifique que el dispositivo aparezca en Plaspy y esté enviando actualizaciones de posición y eventos de alarma.

## Ajustes del servidor Plaspy

Use los siguientes ajustes públicos de servidor Plaspy al configurar el CanTrack G500:

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte: UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador

Tenga en cuenta que Plaspy utiliza el mismo puerto para todos los dispositivos compatibles y la plataforma detectará el protocolo adecuado cuando el rastreador se conecte.

## Requisitos típicos antes de la configuración

- Un CanTrack G500 instalado y con alimentación, con una tarjeta SIM funcional y plan de datos activo para conectividad GSM GPRS.
- Acceso al método de configuración oficial de CanTrack o al software proporcionado por el fabricante o su proveedor.
- Conocimiento del APN correcto y cualquier dato de autenticación de la SIM requerido por su operador móvil.
- Un medio para aplicar los ajustes al dispositivo, como la herramienta web del fabricante, software de escritorio o comandos SMS compatibles.
- Herramientas básicas para reiniciar o ciclar la alimentación del equipo tras aplicar los cambios.
- Acceso a su cuenta o proyecto en Plaspy para confirmar que el dispositivo aparece en la plataforma después del alta.

## Cómo se conecta este rastreador a Plaspy

Al configurarse para Plaspy, el CanTrack G500 envía sus datos de posición y eventos al endpoint y puerto compartidos de Plaspy. Plaspy recibe la conexión del dispositivo en el puerto común y utiliza detección automática de protocolo para interpretar los datos del rastreador.

- El rastreador reporta fijaciones de ubicación al endpoint d.plaspy.com o a la IP 54.85.159.138.
- Los datos se envían por el puerto 8888 usando UDP o TCP según la configuración del dispositivo.
- Plaspy detecta automáticamente el protocolo que usa el G500 y procesa los mensajes entrantes en consecuencia.
- Los eventos de alarma y las actualizaciones de estado del rastreador se reenvían a Plaspy para su visibilidad y monitoreo.
- Tras la conexión exitosa, el dispositivo será visible en Plaspy y podrá monitorearse para reportes de posición y eventos.

## Flujo típico de configuración

1. Acceda al método de configuración oficial de CanTrack o al software recomendado por su proveedor o el fabricante. Esto puede ser una herramienta de configuración, una interfaz web o un conjunto de comandos SMS.
2. En los ajustes de servidor, ingrese el endpoint de Plaspy. Use el dominio d.plaspy.com o la IP del servidor 54.85.159.138 según lo permita la herramienta del dispositivo.
3. Establezca el puerto de destino en 8888, que es el que usa Plaspy para todos los dispositivos.
4. Seleccione UDP o TCP si el dispositivo requiere elección explícita del transporte.
5. Aplique o guarde los cambios de configuración en la interfaz del dispositivo.
6. Reinicie o ciclé la alimentación del rastreador si el firmware lo requiere para aplicar los nuevos ajustes de red.
7. Valide que el dispositivo reporte a Plaspy verificando las actualizaciones de posición y los mensajes de estado entrantes en la plataforma Plaspy.

## Comandos de configuración de ejemplo

El CanTrack G500 admite múltiples métodos de configuración del fabricante y los comandos exactos varían según el firmware y las herramientas del proveedor. Como el dispositivo puede configurarse mediante el software oficial o mediante el conjunto de comandos SMS proporcionado por CanTrack, la sintaxis precisa difiere entre versiones. En la práctica usted deberá:

- Usar la utilidad de configuración CanTrack o el conjunto de comandos SMS para establecer el servidor en d.plaspy.com o 54.85.159.138 y el puerto en 8888.
- Seleccionar UDP o TCP si la herramienta requiere una elección de transporte.

Consulte la documentación oficial de comandos de CanTrack o la utilidad de configuración suministrada por el proveedor para las cadenas de comando exactas necesarias para aplicar estos ajustes.

## Notas de configuración

- Plaspy usa el mismo puerto 8888 para todos los dispositivos compatibles; esto simplifica despliegues múltiples y la configuración del servidor.
- Las versiones de firmware y las revisiones de hardware pueden cambiar los menús de configuración o la sintaxis de los comandos SMS; compruebe siempre las notas de la versión del fabricante.
- Si su herramienta de despliegue solicita transporte, elija UDP o TCP según las opciones de la herramienta; Plaspy admite ambos y detectará el protocolo automáticamente.
- Confirme el APN y la conectividad de la SIM antes de cambiar los ajustes de servidor para evitar problemas de conexión.
- Cuando sea posible, use la utilidad de configuración oficial del G500 para evitar errores de sintaxis en los comandos SMS.

## Por qué usar Plaspy con esta configuración

Configurar el CanTrack G500 para que reporte a Plaspy ofrece a las organizaciones una vía sencilla para obtener visibilidad en tiempo real y monitoreo de eventos sin la complejidad de servidores por dispositivo. El enfoque de endpoint compartido de Plaspy y la detección automática de protocolo permiten estandarizar despliegues en flotas y reducir la carga de configuración.

Learn more about how Plaspy works and view platform details at https://www.plaspy.com. For the latest device specific configuration commands, firmware notes, and hardware details check the official CanTrack website at https://www.cantrackgps.com/. Manufacturer setup methods and firmware behavior can change over time, so verify current instructions on the manufacturer site before large scale deployments.
