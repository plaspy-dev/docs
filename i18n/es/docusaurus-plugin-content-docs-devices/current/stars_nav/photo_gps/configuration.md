---
slug: /stars_nav/photo_gps/configuration
id: photo_gps-configuration
sidebar_label: Configuration
title: Stars Nav - Photo GPS Configuration
sidebar_class_name: menu_item_tracker
description: Configure Stars Nav Photo GPS para usar con Plaspy, con ajustes públicos de servidor y guía práctica para importación de archivos o reporte al servidor
keywords:
  - configuración Stars Nav Photo GPS
  - configuración Photo GPS Stars Nav
  - configuración Photo GPS para Plaspy
  - configuración rastreador GPS Stars Nav
  - configuración servidor Photo GPS
  - integración de dispositivos Plaspy
  - registrador GPS Photo GPS
  - configuración geolocalización Photo GPS
  - configuración software de seguimiento Stars Nav
  - configuración plataforma Photo GPS
---

# Stars Nav - Configuración de Photo GPS

Esta página documenta el contexto de configuración pública para usar el Stars Nav Photo GPS con Plaspy. Se enfoca en información práctica para integrar el dispositivo Photo GPS con Plaspy bien sea mediante la importación de datos registrados o configurando herramientas o firmware del fabricante que puedan reenviar datos a un servidor. El contenido aquí se basa únicamente en hechos de configuración públicos y describe flujos de trabajo comunes, no internos privados del dispositivo.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos exactos en el lado del fabricante para el Photo GPS pueden variar según el firmware, la revisión de hardware, el tipo de instalación y las herramientas del vendedor que utilice. Como el Photo GPS es principalmente un registrador GPS de almacenamiento extraíble que guarda archivos de texto (TEXT) en micro SD, muchas integraciones emplean flujos de trabajo de importación de archivos; si dispone de un firmware o herramienta que soporte reporte por red, a continuación se indican los detalles del servidor de Plaspy.

## Resumen de la configuración

Esta información de configuración le ayudará a preparar el Photo GPS para su uso con Plaspy y explica las dos aproximaciones comunes de integración: importación de archivos y reporte al servidor cuando esté disponible. El objetivo es hacer que los datos de ubicación del Photo GPS sean visibles y utilizables dentro de Plaspy usando los endpoints compartidos del servicio y la detección automática de protocolo cuando aplique.

- Prepare el dispositivo Photo GPS y los registros en micro SD para importarlos en Plaspy o en una herramienta de carga del proveedor.
- Configure cualquier software del proveedor o firmware del dispositivo que pueda enviar datos de rastreo a Plaspy usando el endpoint de servidor compartido.
- Valide que los datos subidos o reportados aparezcan en Plaspy y que las marcas de tiempo y las coordenadas coincidan con los archivos TEXT registrados.
- Use los ajustes de servidor de Plaspy para habilitar el reporte directo al servidor cuando el dispositivo o las herramientas soporten transmisión por UDP o TCP.
- Confirme el flujo de trabajo con la documentación del fabricante y verifique la compatibilidad con la versión de firmware de su equipo.

## Ajustes de servidor de Plaspy

Use los siguientes ajustes públicos del servidor de Plaspy al configurar herramientas del proveedor o firmware que puedan reenviar datos del Photo GPS a Plaspy:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automáticamente detecta el protocolo del rastreador y la plataforma usa el mismo puerto para todos los dispositivos compatibles

## Requisitos típicos antes de la configuración

- Asegúrese de que la batería del Photo GPS esté cargada y que el dispositivo encienda correctamente.
- Confirme que haya una tarjeta micro SD con archivos TEXT registrados y que sea legible desde su PC.
- Tenga acceso al método oficial de configuración de Stars Nav o al software del proveedor si usará una herramienta de carga del fabricante.
- Una cuenta en Plaspy y acceso al proyecto u organización en Plaspy para verificar los datos del dispositivo después de la importación o el reporte.
- Una PC, lector de tarjetas o cable para acceder a los archivos registrados, y las utilidades del fabricante necesarias para conversión o carga de archivos.
- Conocimientos básicos sobre si su flujo de trabajo usará importación de archivos a Plaspy o reporte por red vía una herramienta del proveedor o firmware.

## Cómo se conecta este rastreador a Plaspy

El Stars Nav Photo GPS está diseñado como un registrador GPS de almacenamiento extraíble que graba el historial de ubicaciones en un archivo TEXT en micro SD. La integración con Plaspy suele conseguirse importando esos archivos de registro o usando el software del fabricante que pueda reenviar los datos. Si un firmware o herramienta del proveedor soporta reporte directo, se configura para enviar datos al endpoint y puerto compartidos de Plaspy.

- Suba los archivos TEXT registrados desde la micro SD a Plaspy o a una herramienta de importación compatible para disponer de las trayectorias históricas.
- Use el software del proveedor Stars Nav o herramientas de terceros para convertir archivos de registro a un formato aceptado por Plaspy cuando sea necesario.
- Si el reporte por red está disponible mediante firmware o una puerta de enlace, configure el endpoint a d.plaspy.com o 54.85.159.138 y el puerto 8888.
- Seleccione UDP o TCP según lo requiera la herramienta del proveedor o el firmware; Plaspy detectará automáticamente el protocolo del dispositivo.
- Valide la visibilidad de los datos en Plaspy tras la importación o después de que el dispositivo reporte al endpoint compartido del servidor.

## Flujo de configuración habitual

1. Acceda al método de configuración oficial de Stars Nav o al software que suministra el fabricante para el Photo GPS.
2. Si usa una opción de reporte por red en el software del proveedor o el firmware, ingrese d.plaspy.com o 54.85.159.138 como dirección del servidor.
3. Configure el puerto del servidor en 8888, ya que la plataforma Plaspy usa el mismo puerto para todos los dispositivos.
4. Elija UDP o TCP cuando el dispositivo o la herramienta requiera selección de transporte.
5. Aplique o guarde la configuración en la utilidad del fabricante o en la interfaz del firmware del dispositivo.
6. Reinicie el dispositivo o el servicio de carga del proveedor si el dispositivo o el software lo requieren.
7. Verifique que el dispositivo reporte a Plaspy o que los archivos importados aparezcan correctamente en su cuenta de Plaspy.

## Comandos de ejemplo de configuración

Este documento no incluye cadenas de comando públicas específicas para el Photo GPS porque el dispositivo es principalmente un registrador de datos de almacenamiento extraíble. Los comandos exactos y la sintaxis de configuración dependen de las utilidades de Stars Nav, las versiones de firmware o las herramientas de carga de terceros. Si su herramienta del proveedor soporta el reenvío al servidor, use los ajustes del servidor indicados arriba (d.plaspy.com o 54.85.159.138 y puerto 8888) al ingresar la información del servidor.

Para dispositivos o herramientas que sí publiquen formatos de configuración por SMS o línea de comandos, incluya esos comandos aquí si los proporciona su proveedor o el manual del dispositivo. Conserve los marcadores de posición como {{apn}}, {{apnu}} o {{apnp}} en los comandos del proveedor si son requeridos por su firmware y siga las indicaciones del proveedor para los valores de los marcadores.

## Notas de configuración

- El Stars Nav Photo GPS está diseñado principalmente para registro offline en micro SD; muchas integraciones utilizan importación de archivos en lugar de reporte en vivo al servidor.
- Las versiones de firmware y las utilidades del proveedor difieren entre revisiones de hardware; verifique los pasos de configuración exactos para la revisión de su dispositivo.
- Cuando una herramienta del proveedor soporte reenvío por red, elegir TCP o UDP es una opción a nivel de dispositivo o herramienta; Plaspy soporta ambos y detectará el protocolo automáticamente.
- Plaspy usa el mismo puerto para todos los dispositivos compatibles, lo que simplifica la configuración, pero siempre confirme que la herramienta del proveedor use el puerto 8888 para Plaspy.
- Consulte la documentación de Stars Nav para obtener las instrucciones más recientes sobre utilidades de carga o actualizaciones de firmware que afecten la configuración.

## Por qué usar Plaspy con esta configuración

Usar Plaspy con el Stars Nav Photo GPS es una vía práctica para organizar y analizar datos de ubicación procedentes de un dispositivo que destaca por su registro confiable y sencillo. Para usuarios que recopilan fotos georreferenciadas y registros detallados en archivos TEXT, Plaspy ofrece una plataforma central para importar registros, visualizar trayectorias e integrar el historial de ubicaciones en flujos operativos más amplios.

Para más información sobre Plaspy y las funciones disponibles visite https://www.plaspy.com. Verifique siempre los métodos de configuración específicos del dispositivo, el comportamiento del firmware y los detalles del fabricante en el sitio oficial de Stars Nav http://www.starsnav.com/ ya que las especificaciones del producto y los métodos de configuración pueden cambiar con el tiempo.
