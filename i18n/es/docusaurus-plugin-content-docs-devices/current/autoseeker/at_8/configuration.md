---
slug: /autoseeker/at_8/configuration
id: at_8-configuration
sidebar_label: Configuration
title: Autoseeker - AT-8 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración para integrar Autoseeker AT-8 con Plaspy, ajustes de servidor y consideraciones de instalación
keywords:
  - Configuración Autoseeker AT-8
  - Instalación AT-8 para Plaspy
  - Configuración de servidor AT-8
  - Configuración plataforma GPS AT-8
  - Compatibilidad Autoseeker Plaspy
  - Guía configuración rastreador GPS
  - Configuración rastreador de animales
  - Rastreo GPS de ganado
  - Configuración reporte del rastreador
  - Configuración de dispositivo Plaspy
---

# Autoseeker - Configuración del AT-8

Esta página resume el contexto público de configuración para usar el Autoseeker AT-8, un rastreador animal 4G GPS, con Plaspy. Está enfocada en los ajustes de servidor y en los pasos prácticos necesarios para apuntar un AT-8 a Plaspy y que la ubicación y la telemetría sean visibles en su cuenta de Plaspy. Use estas indicaciones junto con la documentación del fabricante y las herramientas de configuración que provee Autoseeker.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, pero los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión del hardware, el tipo de instalación y las utilidades del proveedor. El AT-8 está diseñado para telemetría animal de larga duración mediante 4G CAT-1 con conmutación a GSM y batería de alta capacidad; esta guía explica cómo configurarlo para que reporte al endpoint de servidor de Plaspy usado por todos los dispositivos.

## Resumen de la configuración

Configurar el AT-8 para Plaspy garantiza que el dispositivo envíe fixes GNSS y telemetría al servicio Plaspy para que las posiciones, el historial y las alertas estén disponibles en la plataforma. El proceso de configuración normalmente consiste en seleccionar el endpoint del servidor Plaspy, elegir el protocolo de transporte y ajustar los modos de reporte para equilibrar la vida útil de la batería y la frecuencia de actualizaciones.

- Apunte el AT-8 al dominio o IP del servidor Plaspy para que los datos se rote hacia su cuenta de Plaspy.  
- Asegúrese de que el dispositivo use el puerto 8888 que Plaspy emplea para todos los dispositivos compatibles.  
- Seleccione UDP o TCP como transporte si el dispositivo requiere escoger uno; Plaspy soporta ambos.  
- Aplique modos de reporte adecuados para equilibrar frecuencia de actualizaciones y autonomía de la batería.  
- Valide la conectividad y confirme que el dispositivo aparece en Plaspy y reporta fixes de posición.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com  
- IP del servidor 54.85.159.138  
- Puerto 8888 (Plaspy usa el mismo puerto para todos los dispositivos compatibles)  
- Soporte de transporte por UDP o TCP según las opciones de configuración del dispositivo  
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que el servidor aceptará variaciones de protocolo compatibles

## Requisitos típicos antes de la configuración

- Un AT-8 encendido y con batería cargada disponible para la configuración y el reporte inicial.  
- Una SIM celular activa con datos habilitados compatible con las bandas 4G CAT-1 del AT-8 o con la conmutación GSM, y cobertura de red adecuada.  
- Acceso al método oficial de configuración del AT-8 proporcionado por Autoseeker (app del fabricante, comandos SMS o herramienta de configuración).  
- Conocimiento del modo de reporte del dispositivo para establecer la frecuencia de actualización acorde a los objetivos de autonomía.  
- Una cuenta en Plaspy donde el dispositivo será visible una vez que empiece a reportar al servidor Plaspy.  
- Ubicación o sitio de instalación que permita conectividad celular para que el dispositivo alcance el endpoint de Plaspy.

## Cómo se conecta este rastreador a Plaspy

Al configurarse para usar Plaspy, el AT-8 transmite fixes GNSS y telemetría a través de redes celulares al endpoint compartido de Plaspy en el servidor y puerto definidos. Plaspy recibe esos mensajes, reconoce automáticamente el protocolo del rastreador y muestra la ubicación, el estado y las alertas del dispositivo en la plataforma.

- El AT-8 envía ubicación y telemetría a d.plaspy.com o a 54.85.159.138 en el puerto 8888.  
- El transporte puede ser UDP o TCP según la opción seleccionada en el dispositivo.  
- Plaspy recibe los mensajes y detecta automáticamente el protocolo para su correcto parseo.  
- Los modos de reporte del AT-8 determinan la frecuencia de actualizaciones y afectan la autonomía y la granularidad del historial.  
- Una vez que llegan los mensajes, Plaspy ofrece mapeo, alertas de geocercas y reproducción del historial para el AT-8.

## Flujo de configuración habitual

1. Acceda al método oficial de configuración del AT-8 proporcionado por Autoseeker (app del fabricante, herramienta de configuración por SMS o utilidad para PC) según la documentación de Autoseeker.  
2. En los ajustes de servidor del dispositivo, ingrese la dirección del servidor Plaspy como d.plaspy.com o como 54.85.159.138.  
3. Configure el puerto del dispositivo en 8888 que Plaspy usa para todos los dispositivos compatibles.  
4. Si el AT-8 requiere seleccionar un transporte, elija UDP o TCP según las opciones disponibles. Plaspy soporta ambos y detectará el protocolo automáticamente.  
5. Configure el modo de reporte y las opciones de telemetría para equilibrar la frecuencia de actualizaciones y la autonomía de la batería según su despliegue.  
6. Aplique o guarde la configuración en la herramienta del dispositivo y reinícielo si el fabricante lo requiere.  
7. Valide que el dispositivo reporte a Plaspy revisando la llegada de datos en su cuenta y confirmando posiciones y estado recibidos.

## Comandos de ejemplo para configuración

Los comandos exactos y la interfaz dependen de las herramientas de Autoseeker y del firmware del AT-8. Las utilidades del fabricante pueden usar una app, comandos SMS o una herramienta de configuración para PC. Como los métodos varían, consulte la documentación de Autoseeker para la sintaxis exacta de los comandos y siga el flujo descrito más arriba para apuntar el dispositivo al servidor Plaspy d.plaspy.com o a 54.85.159.138 en el puerto 8888 usando UDP o TCP según sea necesario.

Si su versión del AT-8 admite configuración por SMS y Autoseeker publica comandos SMS, utilice esos comandos oficiales del fabricante para establecer servidor, puerto, transporte y modo de reporte. Preserve los marcadores de posición que indique el fabricante, como valores de APN, al emitir comandos.

## Notas de configuración

- Las diferencias de firmware pueden cambiar los campos de configuración disponibles y la sintaxis de los comandos; siempre utilice la documentación del AT-8 correspondiente a su versión de firmware.  
- Elegir UDP frente a TCP afecta las características de entrega; Plaspy soporta ambos y detectará el protocolo automáticamente. Pruebe ambos si el dispositivo los soporta y experimenta problemas de entrega.  
- Todos los dispositivos en Plaspy usan el mismo puerto, por lo que confirme que el puerto 8888 esté configurado exactamente como se requiere.  
- Los modos de reporte afectan significativamente la vida útil de la batería en la batería de 20,000mAh del AT-8; ajuste los intervalos de actualización según sus necesidades de monitoreo.  
- Para cualquier configuración basada en SMS o herramienta del fabricante, preserve marcadores como las entradas de APN exactamente como las proporcione el operador y el fabricante.

## Por qué usar Plaspy con esta configuración

Usar el AT-8 con Plaspy brinda a ganaderos y gestores de animales una solución centralizada para ubicación en tiempo real, reproducción de historial y alertas de geocercas en múltiples dispositivos. El hardware del AT-8 está optimizado para despliegues prolongados y condiciones rudas, mientras que Plaspy ofrece la plataforma para visualizar movimiento, recibir alertas y planificar mantenimiento según el estado del dispositivo.

Para saber más sobre Plaspy y cómo funciona con rastreadores compatibles como el Autoseeker AT-8 visite https://www.plaspy.com. Para los comandos específicos de configuración más recientes, notas de firmware y orientación de instalación, verifique los detalles en el sitio del fabricante https://autoseekergps.com/ ya que los métodos y el comportamiento del firmware pueden cambiar con el tiempo.
