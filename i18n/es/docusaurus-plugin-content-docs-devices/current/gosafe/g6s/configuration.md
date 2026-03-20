---
slug: /gosafe/g6s/configuration
id: g6s-configuration
sidebar_label: Configuration
title: Gosafe - G6S Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración para compatibilidad del Gosafe G6S con los ajustes del servidor Plaspy y pasos prácticos
keywords:
  - Configuración Gosafe G6S
  - Instalación Gosafe G6S
  - Gosafe G6S Plaspy
  - Configuración rastreador GPS Gosafe
  - Configuración servidor G6S
  - Configuración seguimiento de flotas G6S
  - Integración dispositivo Gosafe
  - Rastreo vehicular G6S
  - Configuración telemetría G6S
  - Guía de configuración Gosafe
---

# Gosafe - G6S Configuración

Esta página reúne la información pública necesaria para usar el rastreador Gosafe G6S con Plaspy. Aquí encontrará los valores de servidor compartidos y los pasos prácticos que normalmente se requieren para apuntar un G6S a Plaspy y habilitar su monitorización en la plataforma. Use esta guía para comprender qué ajustes de servidor son obligatorios y cuál es el flujo típico para que un G6S reporte a Plaspy.

Plaspy emplea ajustes de servidor comunes entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Sin embargo, los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El G6S soporta conectividad GSM GPRS cuatribanda, gestión remota por aire y FOTA, lo que puede influir en cómo aplica los cambios de configuración según el firmware y el método de aprovisionamiento.

## Resumen de configuración

El objetivo del proceso de configuración es preparar el G6S para que se conecte de forma fiable a Plaspy y reporte datos de ubicación y eventos para la supervisión de la flota. A continuación están los resultados prácticos que debe lograr al configurar el equipo.

- Apuntar el endpoint de red del G6S al servidor de Plaspy para que la telemetría sea recibida por la plataforma.
- Asegurar que el transporte use UDP o TCP según lo requiera el firmware del dispositivo y el entorno de red.
- Validar la conectividad y que el IMEI o identificador del dispositivo sea conocido para poder vincularlo en Plaspy.
- Guardar y aplicar la configuración y usar las herramientas de gestión del dispositivo para confirmar que los reportes llegan a Plaspy.
- Mantener el firmware y los ajustes de gestión remota alineados con las recomendaciones del fabricante para soportar FOTA y gestión OTA.

## Ajustes del servidor Plaspy

Use los siguientes ajustes de Plaspy al configurar el Gosafe G6S. Plaspy utiliza el mismo puerto para todos los dispositivos soportados y detecta automáticamente el protocolo del rastreador, por lo que estos valores son consistentes.

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte compatible UDP o TCP según requiera el dispositivo
- Plaspy detecta automáticamente el protocolo del rastreador

## Requisitos típicos antes de la instalación

- El dispositivo esté alimentado e instalado en el vehículo o banco de pruebas con una fuente de energía estable.
- Una tarjeta SIM válida y un plan de datos activo adecuados para la operación GSM GPRS si el equipo usa datos celulares.
- Acceso al método u software oficial de configuración Gosafe para el G6S provisto por el vendedor o instalador.
- Conocimiento del IMEI o identificador único del dispositivo para su registro en su cuenta Plaspy.
- Confirmación del nivel actual de firmware, dado que FOTA y la gestión OTA pueden modificar los pasos de configuración.
- Acceso a la red y la posibilidad de permitir tráfico saliente hacia el endpoint del servidor Plaspy.

## Cómo se conecta este rastreador a Plaspy

Al configurarlo para Plaspy, el Gosafe G6S reporta telemetría y estado al endpoint y puerto compartidos de Plaspy. Plaspy recibe los reportes y asocia el identificador del dispositivo con el activo correspondiente en la plataforma, de modo que ubicación, eventos y alertas sean visibles.

- Configure la dirección del servidor del dispositivo a d.plaspy.com o a 54.85.159.138 para enrutar el tráfico a Plaspy.
- Use el puerto 8888 para todos los datos del dispositivo enviados a Plaspy, ya que la plataforma utiliza un puerto único para los dispositivos compatibles.
- Seleccione el transporte UDP o TCP según lo requiera el dispositivo o las condiciones de la red; Plaspy soporta ambos.
- Plaspy detecta automáticamente el protocolo de rastreo entrante, por lo que la misma configuración de servidor funciona para distintos tipos de rastreadores.
- Una vez que el dispositivo reporte, Plaspy procesa actualizaciones de posición, mensajes de estado e informes de eventos para monitoring y despacho.

## Flujo de configuración típico

1. Acceda al método de configuración oficial del Gosafe G6S o al software proporcionado por el fabricante o proveedor.
2. En los ajustes de servidor del dispositivo introduzca d.plaspy.com o, si es necesario, 54.85.159.138 como IP del servidor.
3. Establezca el puerto del servidor en 8888, que es el utilizado por Plaspy para todos los dispositivos.
4. Seleccione UDP o TCP como transporte si el firmware del equipo exige una selección explícita.
5. Aplique o guarde la configuración del dispositivo según el procedimiento del fabricante.
6. Reinicie o haga un ciclo de energía al dispositivo si las instrucciones del fabricante indican que es necesario para que los cambios surtan efecto.
7. Valide que el dispositivo G6S está reportando a Plaspy y que el identificador del equipo aparece en la plataforma Plaspy.

## Ejemplos de comandos de configuración

Los comandos exactos o los formatos SMS para configurar un Gosafe G6S pueden variar según la versión de firmware y las herramientas suministradas por el fabricante. Algunos instaladores usan una interfaz web, otros usan cadenas de comandos por SMS y algunos emplean un servidor de aprovisionamiento OTA. Debido a las diferencias entre modelos y firmware, confirme el formato de comandos con la documentación de Gosafe o con su proveedor. Plaspy requiere que el dispositivo apunte a d.plaspy.com o a 54.85.159.138 en el puerto 8888 y admite transporte UDP o TCP.

## Notas de configuración

- Las diferencias de firmware pueden cambiar cómo se ingresan los comandos o cómo se nombran los campos de servidor en la interfaz. Verifique los campos exactos para su versión de G6S.
- Elija UDP o TCP según sus necesidades de red y fiabilidad; Plaspy soporta ambos y detecta el protocolo automáticamente.
- Utilice con precaución las funciones de gestión remota y FOTA durante la configuración para evitar cambios inesperados en los ajustes del servidor.
- Características de hardware como detección de jamming GSM y hasta 28 geocercas son parte de las capacidades del G6S y deben configurarse siguiendo las indicaciones del fabricante.
- Siempre contraste cualquier configuración basada en SMS o comandos con la documentación oficial de Gosafe para asegurar que la sintaxis de los comandos es correcta.

## Por qué usar Plaspy con esta configuración

Usar el Gosafe G6S con Plaspy permite a las organizaciones centralizar la ubicación de vehículos, el reporte de eventos y la telemetría operativa básica en una sola plataforma de gestión de flotas. Apuntar el G6S al endpoint compartido de Plaspy simplifica el aprovisionamiento porque Plaspy usa el mismo puerto para todos los dispositivos y detecta automáticamente el protocolo del rastreador, reduciendo la necesidad de seleccionar el protocolo por dispositivo.

Para obtener más información sobre Plaspy y cómo puede trabajar con el Gosafe G6S visite https://www.plaspy.com y verifique los detalles actuales de configuración y firmware del dispositivo en la página del fabricante https://gosafesystem.com/ . Las especificaciones del fabricante y los métodos de aprovisionamiento pueden cambiar con el tiempo, por lo que confirme las instrucciones más recientes en los recursos oficiales de Gosafe.
