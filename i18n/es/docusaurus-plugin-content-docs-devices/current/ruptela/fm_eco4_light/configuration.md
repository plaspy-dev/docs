---
slug: /ruptela/fm_eco4_light/configuration
id: fm_eco4_light-configuration
sidebar_label: Configuration
title: Ruptela - FM-ECO4 Light Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar Ruptela FM-ECO4 Light con Plaspy usando servidor compartido y pasos prácticos
keywords:
  - Configuración Ruptela FM-ECO4 Light
  - Guía de configuración Ruptela
  - Configuración FM-ECO4 Light
  - Configuración del servidor Plaspy
  - Configuración de rastreador GPS
  - Configuración de seguimiento de vehículos
  - Seguimiento de flotas con Plaspy
  - Detección de protocolo del rastreador
  - Integración Ruptela con Plaspy
  - Visibilidad de dispositivos GPS
---

# Ruptela - Configuración FM-ECO4 Light

Esta página describe el contexto público de configuración para usar el Ruptela FM-ECO4 Light con la plataforma Plaspy. Se enfoca en los ajustes de servidor prácticos y el flujo de trabajo necesario para apuntar el dispositivo a Plaspy, de modo que la ubicación y el estado del vehículo sean visibles en la plataforma. La orientación aquí se basa en los endpoints públicos de Plaspy y en las capacidades generales descritas para el FM-ECO4 Light.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador, pero los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor que utilice. Use esta guía para preparar y validar el FM-ECO4 Light para Plaspy y consulte la documentación de Ruptela para comandos específicos del dispositivo o herramientas de configuración.

## Resumen de la configuración

Preparar el FM-ECO4 Light para integrarlo con Plaspy consiste en dirigir el dispositivo al servidor de Plaspy, elegir el transporte apropiado y confirmar que la unidad informe correctamente para que los vehículos aparezcan en la plataforma. Las siguientes acciones resumen el propósito práctico del proceso de configuración.

- Configurar el FM-ECO4 Light para enviar datos al endpoint del servidor de Plaspy, de modo que la ubicación y los eventos se reciban centralmente.
- Elegir y establecer el método de transporte soportado por el dispositivo (UDP o TCP) y fijar el puerto compartido de Plaspy.
- Validar la conectividad celular y cualquier APN o ajuste de SIM requerido para que el rastreador pueda acceder a Internet.
- Aplicar los ajustes y reiniciar el dispositivo si la herramienta del fabricante lo requiere.
- Confirmar que el rastreador reporte a Plaspy y aparezca correctamente en la plataforma con la telemetría esperada.

## Ajustes del servidor Plaspy

Al configurar el FM-ECO4 Light para su uso con Plaspy, utilice los siguientes ajustes públicos del servidor:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP depending on the device configuration option
- Plaspy automatically detects the tracker protocol when the device connects

Nota: Plaspy usa el mismo puerto para todos los dispositivos soportados. Apuntar el dispositivo a d.plaspy.com o 54.85.159.138 en el puerto 8888 y seleccionar el transporte adecuado es la configuración requerida en el lado del servidor.

## Requisitos típicos antes de la configuración

- Verifique que el FM-ECO4 Light esté alimentado y funcione correctamente después de la instalación.
- Asegúrese de que el dispositivo tenga una tarjeta SIM operativa y acceso a la red celular si va a usarlo sobre GSM.
- Obtenga acceso al método o software de configuración de Ruptela necesario para cambiar los ajustes de servidor y transporte.
- Anote cualquier APN o configuración del operador móvil necesaria para la conectividad de datos y tenga esos valores disponibles.
- Tenga a mano conexión serial, USB o la herramienta de configuración del fabricante si la configuración local es necesaria.
- Esté preparado para reiniciar el dispositivo después de aplicar los cambios si la documentación del fabricante así lo recomienda.

## Cómo se conecta este rastreador a Plaspy

El FM-ECO4 Light envía su telemetría a Plaspy abriendo una conexión desde el dispositivo hacia el endpoint y puerto compartido de Plaspy. Plaspy recibe e interpreta automáticamente el protocolo del rastreador para que el dispositivo sea visible en la plataforma.

- El rastreador se apunta al endpoint de Plaspy d.plaspy.com o a la IP 54.85.159.138.
- La conexión saliente utiliza el puerto 8888, que es el puerto compartido para todos los dispositivos soportados por Plaspy.
- Puede elegir UDP o TCP en el dispositivo si la configuración requiere la selección del transporte.
- Una vez conectado, Plaspy detecta automáticamente el protocolo del dispositivo y comienza a ingerir los reportes de ubicación y eventos.
- Tras el reporte exitoso, el dispositivo y sus activos estarán disponibles para monitoreo y reproducción histórica en Plaspy.

## Flujo de trabajo típico de configuración

1. Acceda al método oficial de configuración de Ruptela o al software para el FM-ECO4 Light según lo descrito en la documentación del fabricante.
2. En los ajustes de servidor, ingrese el dominio de Plaspy d.plaspy.com o la IP del servidor 54.85.159.138.
3. Configure el puerto del dispositivo en 8888, como lo requiere Plaspy para todos los dispositivos soportados.
4. Seleccione UDP o TCP para el transporte si el dispositivo requiere una selección explícita.
5. Guarde o aplique la configuración usando la herramienta de Ruptela o la interfaz del dispositivo.
6. Reinicie la unidad si el fabricante recomienda un reinicio para aplicar los cambios.
7. Valide que el FM-ECO4 Light reporte a Plaspy y que la telemetría aparezca en la plataforma.

## Ejemplos de comandos de configuración

Los comandos y pasos exactos para configurar el FM-ECO4 Light dependen de la herramienta de configuración de Ruptela o del firmware, y se suministran en la documentación y utilidades de Ruptela. Plaspy acepta datos del dispositivo cuando se apunta al servidor y puerto de Plaspy mencionados más arriba, pero los fabricantes pueden usar formatos de comando distintos, cadenas SMS o herramientas de escritorio para aplicar los ajustes.

Si necesita ejemplos de comandos específicos para su versión de firmware o herramienta, consulte los manuales de configuración de Ruptela o la utilidad web/PC del dispositivo para obtener la sintaxis y los pasos exactos.

## Notas de configuración

- Las revisiones de firmware y hardware pueden cambiar la interfaz de configuración y las opciones disponibles; siempre consulte la documentación de Ruptela para su versión de firmware.
- Si el dispositivo soporta tanto UDP como TCP, elija el transporte que coincida con los requisitos de su despliegue; Plaspy soporta ambos y detectará el protocolo automáticamente.
- Las herramientas de instalación de Ruptela pueden ofrecer utilidades con GUI, comandos SMS o configuración directa por serial/USB. Use el método apropiado para su entorno de instalación.
- Las variantes del dispositivo destinadas a mercados específicos pueden requerir pasos de inicialización diferentes o campos adicionales en la herramienta de configuración.
- Mantenga a mano los valores de APN y del operador de la SIM al configurar la conectividad celular para que el dispositivo pueda alcanzar d.plaspy.com o 54.85.159.138.

## Por qué usar Plaspy con esta configuración

Usar el Ruptela FM-ECO4 Light con Plaspy ofrece una forma sencilla de centralizar los datos de ubicación, rutas y eventos de los vehículos para el monitoreo de flotas y la supervisión operativa. Apuntar el dispositivo al servidor y puerto compartidos de Plaspy facilita la incorporación de múltiples rastreadores y reduce la complejidad de configurar cada unidad por separado, ya que Plaspy detecta automáticamente el protocolo del rastreador.

Para conocer más sobre Plaspy y las características de la plataforma, visite https://www.plaspy.com. Para obtener los pasos de configuración más actuales, detalles de firmware y la guía del fabricante, verifique la información en el sitio web de Ruptela https://ruptela.com/ ya que los métodos y el comportamiento del firmware pueden cambiar con el tiempo.
