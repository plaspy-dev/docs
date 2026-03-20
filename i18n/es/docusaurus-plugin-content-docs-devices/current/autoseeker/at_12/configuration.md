---
slug: /autoseeker/at_12/configuration
id: at_12-configuration
sidebar_label: Configuration
title: Autoseeker - AT-12 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el Autoseeker AT-12 con Plaspy, con ajustes de servidor y pasos prácticos de preparación
keywords:
  - Configuración Autoseeker AT-12
  - Configurar Autoseeker AT-12
  - Autoseeker AT-12 Plaspy
  - Configuración rastreador AT-12
  - Configuración servidor AT-12
  - Guía configuración Autoseeker
  - Rastreo vehicular AT-12
  - Configuración GPRS AT-12
  - Configuración plataforma GPS Autoseeker
  - Configuración software rastreo AT-12
---

# Autoseeker - Configuración AT-12

Esta página describe el contexto público de configuración para usar el rastreador Autoseeker AT-12 con Plaspy. Aquí se explican los ajustes de servidor compartidos a los que debe apuntar el dispositivo y cómo suele comunicarse el AT-12. Use estas indicaciones para preparar el dispositivo para la integración con Plaspy, respetando en todo momento las instrucciones específicas del fabricante Autoseeker.

Plaspy utiliza un endpoint y puerto compartidos entre los rastreadores compatibles y detecta automáticamente el protocolo del equipo. Los pasos exactos a realizar del lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del vendedor, por lo que confirme los procedimientos específicos del equipo con la documentación oficial de Autoseeker cuando sea necesario.

## Resumen de la configuración

El objetivo de la configuración es preparar el AT-12 para que envíe datos de ubicación y estado a Plaspy, de modo que el dispositivo aparezca y se actualice correctamente en la plataforma. Esto incluye actualizar los ajustes de servidor del dispositivo, confirmar el modo de transporte y validar la conectividad.

- Configure el dispositivo para que reporte al endpoint y puerto del servidor Plaspy.
- Seleccione el modo de transporte que requiere el dispositivo, UDP o TCP, si se solicita.
- Verifique la conectividad GPRS/SMS y cualquier ajuste de la SIM requerido por el rastreador.
- Guarde y aplique los cambios, y reinicie o corte la energía del dispositivo si es necesario.
- Confirme que el dispositivo es visible y está reportando en Plaspy tras la configuración.

## Ajustes del servidor Plaspy

Use los siguientes ajustes públicos de Plaspy al configurar los parámetros de servidor del rastreador:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol so the same port is used for all devices

Estos valores corresponden al endpoint compartido al que el AT-12 debe reportar para garantizar compatibilidad con Plaspy.

## Requisitos típicos antes de iniciar

- Un AT-12 con alimentación suficiente o conectado a la energía del vehículo para la configuración y las pruebas.
- Una tarjeta SIM válida activada para datos o SMS según lo requiera su instalación y las capacidades del AT-12.
- Acceso al método de configuración oficial de Autoseeker, como la aplicación del fabricante, el software de configuración o la lista de comandos SMS.
- Cobertura GPRS o celular en la ubicación del dispositivo para permitir conexiones TCP o UDP a Plaspy.
- Una forma de monitorear los mensajes o registros del dispositivo durante las pruebas y la validación.
- Anote la versión de firmware y la revisión de hardware del dispositivo para poder consultar pasos específicos del firmware en los recursos de Autoseeker.

## Cómo se conecta este rastreador a Plaspy

Cuando está configurado correctamente, el AT-12 envía sus reportes de posición y estado al endpoint compartido de Plaspy en el puerto estándar. Plaspy recibe esos mensajes y los asocia a su cuenta según el identificador del dispositivo y el protocolo detectado automáticamente.

- El rastreador se configura para reportar al dominio o IP y puerto del servidor Plaspy.
- Los mensajes se envían por el transporte seleccionado, UDP o TCP, al puerto 8888.
- Plaspy inspecciona los mensajes entrantes y determina automáticamente el protocolo adecuado.
- Las actualizaciones de ubicación y los reportes de eventos se vuelven visibles en Plaspy una vez que el dispositivo es reconocido.
- Los intervalos regulares de reporte y las alarmas se entregan a Plaspy según la configuración del rastreador.

## Flujo de trabajo habitual de configuración

1. Acceda al método de configuración oficial de Autoseeker recomendado para el AT-12 (aplicación del fabricante, herramienta web o comandos SMS).
2. Localice la sección de ajustes de servidor o reporte donde se puedan ingresar servidor primario, secundario o servidor remoto.
3. Ingrese d.plaspy.com o la IP del servidor 54.85.159.138 como dirección del servidor del dispositivo.
4. Configure el puerto en 8888.
5. Seleccione UDP o TCP como opción de transporte si el dispositivo requiere elegir uno.
6. Aplique o guarde la configuración y siga las instrucciones del fabricante para confirmar los cambios.
7. Reinicie o corte la alimentación del dispositivo si el firmware del AT-12 lo requiere.
8. Valide que el dispositivo reporte a Plaspy y aparezca en la plataforma con actualizaciones de ubicación recientes.

## Ejemplos de comandos de configuración

El Autoseeker AT-12 admite múltiples métodos de configuración y los comandos exactos o los campos de la interfaz dependen del firmware y de la herramienta del proveedor que utilice. Dado que los comandos y formatos SMS del fabricante varían, consulte los recursos de Autoseeker para conocer el conjunto de comandos aplicable a su dispositivo.

Si usa un método de configuración por SMS proporcionado por Autoseeker, siga exactamente la sintaxis SMS que documente el fabricante. Si utiliza una aplicación o herramienta de configuración para PC de Autoseeker, ingrese el dominio o la IP del servidor y el puerto tal como se describe en el flujo de trabajo anterior. Plaspy aceptará los reportes del dispositivo enviados a d.plaspy.com o 54.85.159.138 en el puerto 8888 por UDP o TCP.

## Notas de configuración

- Las revisiones de firmware y hardware pueden cambiar los formatos de comando y las opciones disponibles; siempre verifique con las notas de firmware del AT-12.
- Elija UDP o TCP de forma deliberada: en algunas instalaciones y con ciertos operadores, un transporte puede ser más fiable que el otro.
- La configuración por SMS suele estar disponible en dispositivos con capacidad SMS; consulte la documentación de comandos SMS de Autoseeker si prefiere ese método.
- Plaspy usa el mismo puerto para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, por lo que los dispositivos pueden compartir el mismo endpoint.
- Mantenga un registro del IMEI del dispositivo y de cualquier identificador requerido por Plaspy al validar la visibilidad del equipo.

## Por qué usar Plaspy con esta configuración

Usar el Autoseeker AT-12 con Plaspy ofrece a las organizaciones una forma práctica de centralizar la ubicación de vehículos, el reporte de estado y la monitorización de eventos. La capacidad GPRS multibanda del AT-12 y sus funciones integradas pueden proporcionar cobertura y reportes fiables a Plaspy cuando los ajustes de servidor y transporte están configurados correctamente.

Para saber más sobre Plaspy y cómo funciona con dispositivos como el Autoseeker AT-12, visite https://www.plaspy.com. Para comandos de configuración específicos, comportamiento de firmware y detalles del fabricante, verifique la documentación oficial de Autoseeker en https://autoseekergps.com/ ya que los procedimientos y el firmware pueden cambiar con el tiempo.
