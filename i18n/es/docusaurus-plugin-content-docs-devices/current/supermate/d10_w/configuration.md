---
slug: /supermate/d10_w/configuration
id: d10_w-configuration
sidebar_label: Configuration
title: Supermate - D10-W Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el Supermate D10 W con Plaspy, incluyendo servidor, transporte y pasos de validación
keywords:
  - Configuración Supermate D10 W
  - Configurar Supermate D10 W
  - Supermate D10 W Plaspy
  - Configuración servidor D10 W
  - Configuración rastreador GPS D10 W
  - Guía instalación Supermate
  - Configuración rastreador Plaspy
  - Rastreo vehicular Supermate D10 W
  - Rastreo de activos D10 W
  - Configurar GPS D10 W
---

# Supermate - Configuración D10-W

Esta página describe el contexto público de configuración para usar el rastreador Supermate D10 W con Plaspy. Reúne los ajustes prácticos de servidor y la guía de configuración que necesitará para apuntar un dispositivo D10 W compatible a la plataforma Plaspy, de modo que el equipo pueda reportar ubicación y eventos básicos a su cuenta.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, las herramientas de instalación y las utilidades del proveedor, por lo que considere los ajustes siguientes como los requisitos por parte de Plaspy y verifique las instrucciones del fabricante antes de aplicar cambios.

## Resumen de configuración

Configurar el Supermate D10 W para Plaspy consiste en ajustar el rastreador para que envíe sus datos al endpoint y puerto compartidos de Plaspy, y luego validar que el dispositivo aparezca en su cuenta de Plaspy. El objetivo es asegurar conectividad fiable y que el rastreador reporte correctamente al servidor de Plaspy para poder monitorear ubicación y eventos.

- Configure el rastreador para usar el endpoint de servidor de Plaspy para el reporte de datos.
- Asegúrese de que el transporte y el puerto del rastreador coincidan con los requisitos de Plaspy.
- Verifique el acceso a la red y que el dispositivo esté encendido y accesible.
- Confirme que el dispositivo aparece y reporta en Plaspy tras la configuración.
- Guarde y, si es necesario, reinicie el rastreador para que los cambios surtan efecto.

## Ajustes del servidor Plaspy

Use los siguientes ajustes del servidor Plaspy al configurar el Supermate D10 W. Estos son los parámetros públicos que Plaspy emplea para las conexiones de los dispositivos.

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte: admite UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta
- Todos los dispositivos en Plaspy usan el mismo puerto para simplificar la configuración

## Requisitos típicos antes de la configuración

- Una unidad Supermate D10 W con alimentación y acceso a la configuración.
- Una tarjeta SIM activa y conectividad celular si va a usar reporte por red GSM, según lo soporte el dispositivo.
- Acceso al método oficial de configuración de Supermate o al software proporcionado por el proveedor.
- La cuenta de Plaspy y las credenciales necesarias para ver y validar el dispositivo en la plataforma.
- Una fuente de energía estable o batería cargada para evitar interrupciones durante la configuración.
- Familiaridad básica con la selección de TCP o UDP en caso de que la configuración del dispositivo lo requiera.

## Cómo se conecta este rastreador a Plaspy

Cuando se configura para Plaspy, el Supermate D10 W se programa para enviar mensajes periódicos de posición y eventos al endpoint y puerto compartidos de Plaspy. Plaspy recibe los mensajes entrantes, detecta automáticamente el protocolo del dispositivo y procesa los datos para que el rastreador sea visible en su cuenta.

- El dispositivo envía datos a d.plaspy.com o directamente a 54.85.159.138.
- Todos los reportes se dirigen al puerto 8888 en el servidor de Plaspy.
- Elija UDP o TCP en el equipo si es necesario seleccionar el transporte.
- Plaspy detecta automáticamente el protocolo y interpreta los mensajes entrantes.
- Una vez que comienzan los reportes, el rastreador se hace visible y puede monitorearse en Plaspy.

## Flujo común de configuración

1. Acceda al método de configuración oficial de Supermate o al software proporcionado por el fabricante o vendedor.
2. En los ajustes de servidor del dispositivo, introduzca d.plaspy.com o, como alternativa, la IP del servidor 54.85.159.138.
3. Configure el puerto del dispositivo en 8888 para cumplir con los requisitos de Plaspy.
4. Seleccione el protocolo de transporte UDP o TCP en el equipo si la configuración solicita una opción.
5. Aplique o guarde los cambios de configuración en la herramienta del fabricante o en el menú del dispositivo.
6. Reinicie el equipo si el dispositivo o el firmware lo requieren para aplicar los nuevos ajustes de red.
7. Valide que el dispositivo comience a reportar a Plaspy y que aparezca en la lista de dispositivos de su cuenta.

## Ejemplos de comandos de configuración

El método y los comandos de configuración del Supermate D10 W varían según el firmware y la herramienta de configuración del fabricante. Dado que el dispositivo puede configurarse mediante diferentes utilidades del fabricante, SMS o interfaces por software, los comandos exactos o pasos dependen de la herramienta que esté utilizando. Consulte la guía oficial de Supermate o la herramienta del proveedor para la sintaxis exacta de los comandos destinados a definir servidor, puerto y transporte.

Si dispone de un conjunto de comandos proporcionado por el fabricante o plantillas SMS, aplique los mismos valores indicados en Ajustes del servidor Plaspy: use d.plaspy.com o 54.85.159.138 como servidor y configure el puerto en 8888. Elija UDP o TCP cuando la interfaz de configuración del dispositivo lo solicite.

## Notas de configuración

- Las diferencias de firmware pueden alterar los nombres de los menús, la sintaxis de comandos o el orden requerido para los ajustes; siempre verifique la versión de firmware del dispositivo.
- Si el fabricante soporta tanto la configuración por SMS como por software, prefiera la configuración por software o directa cuando esté disponible para reducir errores manuales.
- La elección entre TCP y UDP puede afectar la entrega y el reenvío de mensajes; seleccione el transporte que coincida con sus necesidades operativas y las recomendaciones del fabricante.
- Plaspy usa el mismo puerto para todos los dispositivos soportados y detecta automáticamente el protocolo del rastreador, lo que simplifica despliegues masivos.
- En caso de duda, consulte la documentación oficial de Supermate para el D10 W para obtener ejemplos de comandos y el flujo de configuración más precisos.

## Por qué usar Plaspy con esta configuración

Configurar el Supermate D10 W para que reporte a Plaspy le ofrece un camino sencillo hacia el rastreo centralizado, el monitoreo de eventos y mayor visibilidad operativa. El uso del endpoint compartido de Plaspy y la detección automática de protocolos reduce la complejidad por dispositivo y ayuda a los equipos a poner en línea rápidamente unidades para el rastreo de flotas o activos.

Learn more about Plaspy and how it can manage devices like the Supermate D10 W at https://www.plaspy.com. For the latest device specific setup details, firmware notes, and manufacturer guidance verify the information on the official Supermate pages at http://www.gps-summit.com/ as manufacturer documentation may change over time.
