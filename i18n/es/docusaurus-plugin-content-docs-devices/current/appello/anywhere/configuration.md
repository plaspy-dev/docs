---
slug: /appello/anywhere/configuration
id: anywhere-configuration
sidebar_label: Configuration
title: Appello - Anywhere Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para conectar el rastreador Appello Anywhere a los servidores Plaspy con ajustes compartidos y pasos básicos
keywords:
  - Configuración Appello Anywhere
  - Configuración inicial Appello Anywhere
  - Appello Anywhere en Plaspy
  - Configuración rastreador GPS Appello
  - Configuración servidor Appello Anywhere
  - Configuración dispositivo Appello
  - Configuración rastreador Plaspy
  - Configuración rastreador GPS Plaspy
  - Rastreo de vehículos Appello
  - Configuración rastreador Anywhere
---

# Appello - Configuración de Anywhere

Esta página describe el contexto público de configuración para usar el rastreador GPS Appello Anywhere con la plataforma Plaspy. Reúne los ajustes públicos de servidor de Plaspy que necesitará, resume los pasos preparatorios más comunes y presenta un flujo de trabajo general para dirigir los reportes del dispositivo al servidor de Plaspy para que el rastreador sea visible en la plataforma.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando los dispositivos se conectan. Los pasos de configuración en el lado del fabricante para el Anywhere pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor; además existen ejemplos públicos que usan configuración por SMS para valores de APN y servidor. Esta documentación se centra en los valores específicos de Plaspy y en el proceso general para aplicarlos al rastreador, recomendando revisar la documentación oficial del fabricante para cualquier comando o cambio específico del dispositivo.

## Resumen de configuración

El objetivo de la configuración es preparar el rastreador Anywhere para que envíe de forma fiable mensajes de ubicación y estado a Plaspy y aparezca en su vista de flota o activos. Normalmente esto implica asegurar la conectividad celular, configurar el APN del operador si es necesario y apuntar el rastreador al endpoint y puerto de Plaspy usados por todos los dispositivos soportados.

- Prepare el rastreador para comunicación GPRS y confirme que cuenta con suficiente energía y cobertura de red.
- Asegúrese de que el APN del operador y los ajustes de conectividad estén configurados según lo requiera su SIM y región.
- Configure el dispositivo para que reporte al endpoint del servidor Plaspy y pueda ser descubierto por la plataforma.
- Valide el transporte de red y confirme que el dispositivo está enviando datos a Plaspy.
- Verifique que el dispositivo aparezca y se actualice en la interfaz de Plaspy después de la configuración.

## Ajustes del servidor Plaspy

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support UDP or TCP depending on device options
- Plaspy automatically detects the tracker protocol when a device connects

Tenga en cuenta que Plaspy usa el mismo puerto para todos los dispositivos soportados y confía en la detección automática del protocolo para determinar el formato correcto de los datos entrantes.

## Requisitos habituales antes de la configuración

- Una tarjeta SIM operativa con datos habilitados y cobertura suficiente para GSM GPRS en el área donde operará el dispositivo.
- Acceso al dispositivo y al método o software de configuración del fabricante para controlar APN y ajustes de servidor.
- Batería suficiente en el dispositivo o alimentación externa para completar los pasos de configuración sin interrupciones.
- Conocimiento del APN de su operador y de cualquier requisito del operador para conexiones de datos.
- Los valores del servidor Plaspy listados en esta página para poder ingresar el dominio o IP y el puerto compartido durante la configuración.
- Acceso a comandos SMS o a la app/herramienta del fabricante si el dispositivo se configura por esos canales.

## Cómo se conecta este rastreador a Plaspy

El Appello Anywhere envía información de GPS y estado del dispositivo a través de la red celular a un servidor central. Al configurarlo con el endpoint y puerto del servidor Plaspy, los reportes del dispositivo son recibidos y parseados por Plaspy para que la unidad sea visible en la plataforma y pueda usarse en seguimiento, reportes y monitoreo.

- El rastreador se configura para reportar al endpoint y puerto compartido de Plaspy indicados arriba.
- Los datos se transmiten por UDP o TCP según el transporte que seleccione en el dispositivo.
- Plaspy recibe la conexión del dispositivo y detecta automáticamente el protocolo del rastreador para su parseo.
- Una vez conectado, Plaspy expone la ubicación y los reportes del dispositivo en la plataforma para monitoreo operativo.
- El reporte regular y la salud de la conexión pueden validarse desde la interfaz de Plaspy luego de la configuración.

## Flujo típico de configuración

1. Acceda al método oficial de configuración del fabricante o al software para Appello Anywhere para iniciar la configuración.
2. Ingrese el dominio del servidor de Plaspy d.plaspy.com o la IP del servidor 54.85.159.138 como destino del dispositivo.
3. Establezca el puerto del servidor en 8888, tenga en cuenta que Plaspy usa el mismo puerto para todos los dispositivos.
4. Elija UDP o TCP como transporte en el dispositivo si requiere selección de transporte.
5. Guarde o aplique la configuración en el dispositivo usando la herramienta o el método de comandos del fabricante.
6. Valide que el dispositivo reporte a Plaspy y aparezca en la plataforma con las actualizaciones esperadas.

Si utiliza configuración por SMS o herramientas del proveedor para el Anywhere, siga la guía pública del fabricante para establecer APN y valores de servidor antes de probar la conectividad. No intente comandos no documentados; consulte siempre el manual oficial del dispositivo para la sintaxis y el uso correcto.

## Notas sobre la configuración

- Las revisiones de firmware y hardware pueden cambiar los ajustes disponibles y los formatos de comandos; confirme la versión de firmware de su dispositivo antes de seguir cualquier ejemplo de comandos del proveedor.
- El Anywhere puede configurarse mediante comandos SMS o mediante el software del fabricante; los ejemplos públicos muestran uso por SMS para configuración de APN y servidor, pero la sintaxis exacta debe obtenerse de la documentación oficial.
- Cuando esté disponible, UDP generalmente minimiza el overhead mientras que TCP ofrece un transporte orientado a conexión; elija el transporte que se ajuste a su instalación y a las capacidades del dispositivo.
- Siempre ingrese exactamente d.plaspy.com o la IP del servidor Plaspy y el puerto 8888 tal como se indican para asegurar que el dispositivo se conecte al endpoint correcto.
- Las prácticas del instalador y el comportamiento de los operadores regionales pueden afectar los ajustes de APN y celular; verifique los requisitos del operador al configurar la conectividad de datos.

## Por qué usar Plaspy con esta configuración

Usar el Appello Anywhere con Plaspy ofrece un camino directo para centralizar los reportes GPS y obtener visibilidad operativa de vehículos y activos. Apuntar el rastreador al endpoint y puerto compartido de Plaspy permite que la plataforma detecte automáticamente el protocolo del dispositivo e inicie la ingesta de datos de ubicación y estado sin cambios de servidor por dispositivo.

Para obtener más información sobre cómo Plaspy soporta la integración de dispositivos y la visibilidad de flotas, visite https://www.plaspy.com. Para los métodos de configuración específicos más recientes del dispositivo, el comportamiento del firmware y los detalles del fabricante, verifique la información en el sitio oficial de Appello http://www.cnjeo.com/ ya que los requisitos del proveedor y las interfaces de firmware pueden cambiar con el tiempo.
