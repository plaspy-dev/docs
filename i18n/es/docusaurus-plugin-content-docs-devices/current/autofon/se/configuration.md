---
slug: /autofon/se/configuration
id: se-configuration
sidebar_label: Configuration
title: AutoFon - SE+ Маяк Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para conectar el rastreador AutoFon SE+ Маяк a Plaspy con ajustes de servidor compartidos y pasos prácticos de configuración
keywords:
  - AutoFon SE+ Маяк configuración
  - AutoFon SE+ instalación
  - AutoFon SE+ Plaspy
  - AutoFon Mayak GPS configuración
  - AutoFon configuración de rastreador
  - configuración de seguimiento vehicular
  - ajustes de servidor para GPS
  - guía de configuración AutoFon SE
  - servidor de monitoreo SE+ Mayak
  - configuración plataforma GPS AutoFon
---

# AutoFon - SE+ Маяк Configuración

Esta página describe el contexto público de configuración para usar el rastreador AutoFon SE+ Маяк con Plaspy. Se centra en los ajustes de servidor prácticos y en los pasos habituales necesarios para apuntar el dispositivo a Plaspy, de modo que la ubicación y los eventos lleguen a la plataforma. El contenido aquí se limita a información de integración pública y a orientaciones generales adecuadas para instaladores y usuarios técnicos.

Plaspy utiliza ajustes de servidor compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando este se conecta. Los pasos exactos del lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas de configuración del proveedor. Utilice la guía a continuación junto con la documentación oficial de AutoFon y cualquier herramienta de proveedor que se haya suministrado con el SE+ Маяк.

## Resumen de la configuración

Este proceso prepara el AutoFon SE+ Маяк para enviar datos de ubicación y eventos al servidor de monitoreo de Plaspy. El objetivo es que el dispositivo reporte vía GPRS al endpoint de Plaspy para que aparezca y se actualice en su cuenta de Plaspy.

- Apuntar el reporte GPRS del SE+ Маяк al endpoint del servidor de Plaspy
- Seleccionar el modo de transporte y asegurarse de usar el puerto de escucha de Plaspy
- Verificar la conectividad del dispositivo y que los paquetes lleguen al servidor Plaspy
- Confirmar que el dispositivo queda visible en Plaspy tras una conexión exitosa
- Ajustar parámetros del fabricante según sea necesario, como intervalo de reporte y umbrales de eventos

## Ajustes del servidor Plaspy

Al configurar el AutoFon SE+ Маяк para Plaspy, use los siguientes ajustes públicos de servidor:

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte: soporte para UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador

Tenga en cuenta que Plaspy usa el mismo puerto para todos los dispositivos compatibles y detecta el protocolo correcto cuando el dispositivo se conecta.

## Requisitos típicos antes de la configuración

- Confirmar que el SE+ Маяк está encendido y que la SIM tiene datos activos si va a usar reporte GPRS
- Acceso al método oficial de configuración de AutoFon o a la herramienta del proveedor para el SE+ Маяк
- Conocer el IMEI del dispositivo o el identificador requerido por la herramienta del fabricante
- Cobertura de red que permita la comunicación GPRS hacia Internet público
- Credenciales o acceso a la cuenta de Plaspy o al administrador para verificar el dispositivo después del reporte
- Si usa configuración por SMS, tener disponible el número controlador y los comandos SMS correspondientes

## Cómo se conecta este rastreador a Plaspy

El SE+ Маяк puede reportar ubicación vía GPRS a un servidor de monitoreo especificado o enviar coordenadas por SMS. Para integrarlo con Plaspy, se configura el dispositivo para transmitir paquetes GPRS al endpoint y puerto compartidos de Plaspy para que la plataforma ingiera la telemetría automáticamente.

- Configure la dirección del servidor GPRS del dispositivo como d.plaspy.com o 54.85.159.138
- Establezca el puerto de destino en 8888, usado por Plaspy
- Seleccione el transporte UDP o TCP en el dispositivo si se solicita; Plaspy soporta ambos
- El rastreador enviará paquetes periódicos de ubicación y eventos al servidor de Plaspy
- Plaspy recibe los paquetes y detecta automáticamente el protocolo para presentar el dispositivo en la plataforma

## Flujo de trabajo habitual de configuración

1. Acceda al método oficial de configuración de AutoFon o al software o conjunto de comandos SMS del SE+ Маяк proporcionado por el fabricante.
2. Introduzca d.plaspy.com o 54.85.159.138 como dirección del servidor de monitoreo en la configuración del dispositivo.
3. Establezca el puerto de destino en 8888, que Plaspy usa para todos los dispositivos.
4. Seleccione UDP o TCP como transporte si la configuración del dispositivo lo requiere.
5. Aplique o guarde la configuración en la herramienta del fabricante o envíe los comandos SMS correspondientes si usa configuración por SMS.
6. Reinicie el dispositivo o realice el reinicio recomendado si la documentación del fabricante lo indica.
7. Verifique que el dispositivo reporte a Plaspy comprobando la llegada de telemetría en su cuenta de Plaspy o contactando a su administrador de Plaspy.

## Ejemplos de comandos de configuración

Los comandos exactos para el AutoFon SE+ Маяк varían según el firmware y la herramienta del proveedor. Los dispositivos AutoFon suelen permitir la configuración mediante el software del fabricante y en ocasiones mediante comandos SMS. Dado que los conjuntos de comandos del fabricante pueden cambiar, consulte la documentación oficial de AutoFon o la herramienta de instalación que recibió con el dispositivo para obtener los comandos precisos para establecer servidor, puerto y transporte.

Si dispone de una plantilla SMS oficial de AutoFon o de una herramienta de configuración, úsela para:
- Establecer el hostname o IP del servidor a d.plaspy.com o 54.85.159.138
- Poner el puerto en 8888
- Seleccionar UDP o TCP como transporte si el dispositivo lo requiere

Consulte el manual de AutoFon para la sintaxis exacta de SMS o los parámetros del archivo de configuración del SE+ Маяк.

## Notas de configuración

- Las diferencias de firmware pueden cambiar la sintaxis de comandos y los ajustes disponibles entre revisiones de hardware y versiones de firmware del SE+ Маяк.
- Elija UDP para menor sobrecarga cuando esté soportado, o TCP si su despliegue requiere comportamiento de sesión más fiable; Plaspy acepta ambos y detecta el protocolo automáticamente.
- Si su herramienta de instalación soporta actualizaciones remotas de firmware por GPRS, considere actualizar el firmware antes de la configuración final para asegurar el comportamiento más reciente.
- La configuración y verificación por SMS puede estar disponible como alternativa a la configuración por software, según el firmware del SE+ Маяк.
- Mantenga siempre un registro del IMEI del dispositivo y de cualquier cambio de configuración realizado para facilitar futuras tareas de soporte.

## Por qué usar Plaspy con esta configuración

Usar el AutoFon SE+ Маяк con Plaspy ofrece una forma sencilla de centralizar datos de ubicación y eventos en una única plataforma de monitoreo. El endpoint compartido de Plaspy y la detección automática de protocolos simplifican la integración para instaladores y administradores de flota, evitando la necesidad de gestionar puertos y mapeos de protocolo específicos por dispositivo.

Para más información sobre Plaspy y las funcionalidades de la plataforma visite https://www.plaspy.com. Para detalles específicos del dispositivo, referencias de comandos SMS y notas de firmware del AutoFon SE+ Маяк, verifique la información más reciente en la web del fabricante https://www.autofon.ru/ .
