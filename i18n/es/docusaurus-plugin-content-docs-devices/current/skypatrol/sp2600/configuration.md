---
slug: /skypatrol/sp2600/configuration
id: sp2600-configuration
sidebar_label: Configuration
title: SkyPatrol - SP2600 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el SkyPatrol SP2600 y apuntarlo a Plaspy, con pasos para validar conectividad y reportes
keywords:
  - Configuración SkyPatrol SP2600
  - Instalación SkyPatrol SP2600
  - Configuración servidor SP2600
  - Configuración SP2600 Plaspy
  - Configuración rastreador Plaspy
  - Guía configuración rastreador GPS
  - Rastreo vehicular SP2600
  - Instalación rastreador flota
  - Firmware OTA SP2600
  - Configuración plataforma GPS SkyPatrol
---

# SkyPatrol - SP2600: Configuración

Esta página aborda la configuración pública necesaria para usar el rastreador SkyPatrol SP2600 con Plaspy. Resume los ajustes públicos del servidor Plaspy a los que debe apuntar el dispositivo, explica el flujo de trabajo práctico para la puesta en marcha y destaca los requisitos habituales antes de intentar la integración. Úsela como referencia para los pasos públicos necesarios para que un SP2600 sea visible en Plaspy.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el equipo se conecta. Los pasos exactos en el lado del fabricante pueden variar según la revisión del firmware, la versión del hardware, el tipo de instalación y las herramientas de configuración de SkyPatrol que utilice, por lo que confirme detalles específicos del dispositivo con la documentación oficial de SkyPatrol cuando sea necesario. El SP2600 soporta características útiles, como batería auxiliar opcional, actualizaciones FOTA, un acelerómetro de 3 ejes y E/S básicas para integración, las cuales pueden influir en cuándo y cómo el dispositivo reporta eventos.

## Resumen de la configuración

Este proceso prepara el SP2600 para enviar información de ubicación y estado a Plaspy, apuntando el dispositivo al endpoint del servidor Plaspy usando el puerto y transporte compartidos. El objetivo es habilitar conectividad confiable, permitir que Plaspy detecte automáticamente el protocolo del dispositivo y lograr que el equipo sea visible en la plataforma.

- Configure el dispositivo para enviar datos al dominio o IP del servidor Plaspy para que la telemetría llegue a la plataforma.
- Asegúrese de que el dispositivo use el puerto compartido de Plaspy para alinearse con las reglas de enrutamiento de la plataforma.
- Seleccione el modo de transporte apropiado si el firmware del equipo lo requiere, UDP o TCP.
- Guarde y aplique los ajustes, luego verifique que el dispositivo establezca una sesión con Plaspy.
- Valide que los reportes de ubicación y los mensajes de evento aparezcan en Plaspy para confirmar la integración exitosa.

## Ajustes del servidor Plaspy

Use los siguientes parámetros públicos de Plaspy al configurar el SkyPatrol SP2600 para su uso con Plaspy:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol when the device connects

Tenga en cuenta que Plaspy utiliza el mismo puerto para todos los dispositivos compatibles y la plataforma intentará detectar automáticamente el protocolo del rastreador después de la primera conexión.

## Requisitos habituales antes de la configuración

- Verifique que el SP2600 tenga alimentación confiable y que cualquier batería auxiliar opcional esté instalada y cargada si es necesaria.
- Servicio celular activo y una tarjeta SIM compatible con la versión del dispositivo (2G o 3G cuando corresponda), además de cobertura de red adecuada en el lugar de instalación.
- Acceso al método o software oficial de configuración de SkyPatrol para el modelo SP2600 o a un canal de configuración/SMS soportado.
- Información básica del dispositivo, como el identificador o número de serie, según lo requiera su flujo de trabajo de instalación.
- Un plan para probar la conectividad después de la configuración, incluyendo tiempo y ubicación para validar el fix GPS y el envío de reportes.

## Cómo se conecta este rastreador a Plaspy

Una vez configurado, el SP2600 enviará mensajes de ubicación y estado del equipo al endpoint compartido de Plaspy para que la plataforma pueda mostrar y registrar la telemetría y los eventos. Plaspy recibe los datos entrantes en el mismo puerto para todos los dispositivos e identifica el protocolo automáticamente.

- El dispositivo se configura para reportar al dominio del servidor Plaspy d.plaspy.com o a la IP del servidor 54.85.159.138.
- Los datos se envían al puerto 8888 usando UDP o TCP, según la configuración del equipo.
- Plaspy detecta automáticamente el protocolo del rastreador y analiza los mensajes entrantes para su ingestión en la plataforma.
- Los eventos de movimiento y las señales de actividad derivadas del acelerómetro del SP2600 pueden transmitirse a Plaspy según la configuración del dispositivo.
- Los eventos de E/S del equipo y las actualizaciones de estado se reenvían a Plaspy, donde pueden utilizarse en reglas y reportes de la plataforma.

## Flujo de trabajo típico de configuración

Siga estos pasos prácticos al preparar un SP2600 para Plaspy. Los nombres exactos de menús y etiquetas de campo dependen del firmware de SkyPatrol y de la herramienta de configuración que utilice.

1. Acceda al método o software oficial de configuración del SkyPatrol SP2600 proporcionado por el fabricante o distribuidor.
2. Localice los campos de configuración del servidor o del host de seguimiento en los ajustes del dispositivo.
3. Ingrese el dominio del servidor Plaspy d.plaspy.com o la IP del servidor 54.85.159.138 como host de destino.
4. Establezca el puerto de destino en 8888, según lo requiere Plaspy.
5. Elija el transporte UDP o TCP si el dispositivo solicita la selección del modo de transporte.
6. Aplique o guarde la configuración en la herramienta SkyPatrol y confirme que los cambios fueron aceptados.
7. Reinicie el dispositivo si el firmware o las instrucciones de instalación requieren un reinicio para aplicar los cambios de red.
8. Valide que el dispositivo reporte a Plaspy y que las ubicaciones y eventos aparezcan en la plataforma.

## Ejemplos de comandos de configuración

Los comandos exactos de configuración o cadenas SMS para el SkyPatrol SP2600 dependen del firmware y de las herramientas suministradas por el fabricante. SkyPatrol ofrece interfaces de configuración y, en algunos casos, comandos basados en SMS o utilidades de configuración por USB. Debido a que los métodos varían según el firmware y el conjunto de herramientas, consulte la documentación de SkyPatrol o la guía de configuración proporcionada por su distribuidor para los comandos exactos necesarios para establecer el servidor a d.plaspy.com o 54.85.159.138 en el puerto 8888 y seleccionar UDP o TCP.

Si dispone de ejemplos de comandos proporcionados por el fabricante, respete el orden y los marcadores de posición necesarios al aplicarlos. Preserve marcadores como APN o nombre de usuario tal como los indica la guía del dispositivo y reemplácelos por los valores de su operador.

## Observaciones de configuración

- Las diferencias de firmware pueden cambiar la ubicación de menús, los nombres de campos y las opciones de transporte soportadas. Consulte siempre las notas de la versión del firmware del SP2600 al seguir una guía de configuración.
- La capacidad FOTA del SP2600 permite actualizaciones remotas de firmware que pueden añadir o modificar opciones de configuración con el tiempo.
- Elija TCP o UDP según las necesidades del instalador y el comportamiento del firmware del dispositivo. Plaspy soporta ambos y detectará el protocolo automáticamente.
- La batería auxiliar opcional puede ayudar a que el equipo siga reportando durante interrupciones de energía y durante las pruebas de configuración donde pueda producirse un ciclo de energía.
- Si utiliza métodos de configuración por SMS, verifique el formato correcto de los comandos SMS con la documentación de SkyPatrol antes de enviar órdenes.

## Por qué usar Plaspy con esta configuración

Configurar el SkyPatrol SP2600 para reportar a Plaspy ofrece a las organizaciones puntos finales de servidor consistentes y un flujo de trabajo de plataforma sencillo para la visibilidad de flotas y la supervisión operativa. Las funciones del SP2600, como detección de movimiento, actualizaciones FOTA y E/S básicas, lo convierten en una opción práctica para el rastreo económico de flotas cuando se combina con los ajustes de servidor de Plaspy y el análisis de la plataforma.

Learn more about Plaspy and platform capabilities at https://www.plaspy.com. For the latest device specific configuration details, firmware guidance, and manufacturer instructions for the SkyPatrol SP2600, verify information on the official SkyPatrol website https://www.skypatrol.com/ as methods and firmware behavior can change over time.
