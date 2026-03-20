---
slug: /galileosky/7x/configuration
id: 7x-configuration
sidebar_label: Configuration
title: GalileoSky - 7x Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el GalileoSky 7x con Plaspy usando ajustes de servidor compartido y pasos prácticos
keywords:
  - GalileoSky 7x
  - configuración GalileoSky
  - instalación GalileoSky
  - rastreador GPS 7x
  - configuración 7x
  - compatible con Plaspy
  - configuración rastreador Plaspy
  - configuración rastreador GPS
  - configuración seguimiento vehicular
  - seguimiento y gestión de flotas
---

# GalileoSky - Configuración del 7x

Esta página documenta el contexto público de configuración para usar el terminal GalileoSky 7x con Plaspy. Resume los ajustes de servidor compartidos de Plaspy y ofrece orientación práctica para preparar el dispositivo y que reporte correctamente a la plataforma. El contenido que sigue es una referencia técnica de integración y no sustituye la documentación del fabricante.

El GalileoSky 7x es un terminal GPS/GLONASS programable con entradas/salidas flexibles y capacidades CAN. Plaspy utiliza ajustes de servidor compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador; sin embargo, los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y la herramienta de configuración del proveedor. Verifique las opciones específicas del dispositivo en la documentación oficial de GalileoSky cuando sea necesario.

## Resumen de configuración

Configurar el GalileoSky 7x para Plaspy implica indicar al dispositivo a dónde enviar sus reportes, elegir el transporte y asegurarse de que el dispositivo esté operativo para que Plaspy pueda detectar el protocolo e ingresar los datos. El objetivo es establecer un enlace fiable entre el rastreador y el endpoint de Plaspy para que la ubicación, datos CAN y eventos de sensores sean visibles en la plataforma.

- Indicar en el equipo el endpoint y el puerto del servidor compartido de Plaspy
- Seleccionar el protocolo de transporte que soporte el dispositivo, por ejemplo UDP o TCP
- Guardar y aplicar los ajustes para que el dispositivo comience a reportar a Plaspy
- Validar la conectividad y los datos visibles en la plataforma Plaspy
- Asegurarse de la alimentación, el cableado y el acceso a la configuración del fabricante

## Ajustes del servidor Plaspy

Use los siguientes ajustes del servidor Plaspy al configurar este rastreador. Plaspy utiliza el mismo puerto para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador.

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte: soporte para UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador

## Requisitos típicos antes de la configuración

- Confirme que el GalileoSky 7x tiene alimentación y es accesible mediante el método de configuración del fabricante
- Tenga acceso al software de configuración oficial de GalileoSky o a la guía de comandos SMS si el dispositivo permite configuración vía SMS
- Verifique que el dispositivo tenga habilitadas las conectividades requeridas y que antenas, alimentación y cableado estén correctos
- Acceso a una cuenta o instancia de Plaspy para validar que el dispositivo aparece en línea después de la configuración
- Conocimiento de si el firmware del dispositivo requiere pasos específicos para habilitar el registro CAN o el reporte de sensores
- Un método probado para reiniciar el dispositivo tras aplicar la configuración si el firmware lo exige

## Cómo se conecta este rastreador a Plaspy

Cuando se configura con los ajustes del servidor Plaspy, el GalileoSky 7x envía su telemetría al endpoint compartido de Plaspy, donde la plataforma detecta automáticamente el protocolo del dispositivo y procesa los mensajes. El proceso está diseñado para que un único puerto y endpoint de Plaspy acepten conexiones de los dispositivos compatibles.

- Los reportes del dispositivo se envían a d.plaspy.com o 54.85.159.138 en el puerto 8888
- El dispositivo puede usar transporte UDP o TCP según la configuración
- Plaspy detecta automáticamente el protocolo del rastreador y procesa los mensajes entrantes
- Ubicación, estado y telemetría como CAN y eventos de sensores se reenvían a la plataforma Plaspy
- Eventos y acuses de recibo de controles remotos del dispositivo aparecen en Plaspy para monitoreo y gestión

## Flujo común de configuración

1. Acceda al método de configuración oficial o al software que provee el fabricante
2. Ingrese el endpoint del servidor Plaspy como d.plaspy.com o 54.85.159.138 en los ajustes del rastreador
3. Establezca el puerto del servidor en 8888
4. Seleccione UDP o TCP como transporte si el equipo requiere elegir el protocolo
5. Aplique o guarde la configuración en la herramienta del dispositivo o mediante la interfaz de comandos
6. Reinicie o haga un ciclo de alimentación al dispositivo si el firmware exige reinicio para aplicar ajustes de red
7. Valide que el dispositivo reporte a Plaspy y aparezca en línea en su cuenta Plaspy

## Ejemplos de comandos de configuración

Los comandos y la sintaxis exacta para configurar un GalileoSky 7x dependen de la herramienta del fabricante, la versión de firmware y de si utiliza una utilidad de escritorio, interfaz web o un conjunto de comandos SMS. Dado que esos métodos varían, consulte el manual de configuración de GalileoSky para los comandos precisos para establecer el host o IP del servidor, el puerto y el transporte.

Si usa una interfaz de comandos del fabricante que acepta entradas de host y puerto, utilice los valores de Plaspy indicados más arriba: d.plaspy.com o 54.85.159.138 para el host y 8888 para el puerto, y seleccione UDP o TCP como método de transporte. Plaspy detectará automáticamente el protocolo del rastreador en cuanto el dispositivo envíe mensajes correctamente a ese endpoint.

## Notas sobre la configuración

- Las diferencias de firmware pueden alterar la sintaxis de los comandos y el orden de las operaciones; siempre revise las notas del firmware del dispositivo
- Algunas herramientas de instalación esperan un nombre de dominio, mientras que otras requieren una dirección IP; d.plaspy.com y 54.85.159.138 son intercambiables para Plaspy
- Plaspy utiliza el mismo puerto 8888 en todos los dispositivos soportados por la plataforma, lo que simplifica la configuración
- Elija UDP o TCP según las necesidades del dispositivo y de la red; ambos son compatibles en el puerto 8888
- Habilitar telemetría del bus CAN o reportes adicionales de sensores puede requerir configuración adicional por parte del fabricante no cubierta aquí

## Por qué usar Plaspy con esta configuración

Usar el GalileoSky 7x con Plaspy ofrece a las organizaciones una manera práctica de centralizar ubicación, datos del bus CAN y eventos de sensores en una sola plataforma. El enfoque de servidor compartido de Plaspy significa que solo necesita apuntar el rastreador al endpoint y puerto de Plaspy, y la plataforma detectará el protocolo para comenzar a procesar mensajes.

Learn more about Plaspy on the main website https://www.plaspy.com. Please verify the latest device specific configuration methods, firmware behavior, and manufacturer guidance on the GalileoSky website https://galileosky.com/ as specifications and setup procedures may change over time.
