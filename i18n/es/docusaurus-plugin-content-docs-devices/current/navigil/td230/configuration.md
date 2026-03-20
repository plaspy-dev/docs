---
slug: /navigil/td230/configuration
id: td230-configuration
sidebar_label: Configuration
title: Navigil - TD230 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el Navigil TD230 con Plaspy, con ajustes de servidor y flujo de instalación
keywords:
  - Configuración Navigil TD230
  - Instalación Navigil TD230
  - Configuración de servidor TD230
  - Configuración TD230 Plaspy
  - Configuración de rastreador GPS
  - Ajustes de servidor para rastreadores
  - Configuración de plataforma GPS
  - Configuración de rastreo vehicular
  - Integración de rastreadores con Plaspy
  - Firmware Navigil TD230
---

# Navigil - Configuración del TD230

Esta página resume el contexto público de configuración para usar el rastreador Navigil TD230 con la plataforma Plaspy. Se enfoca en la información práctica necesaria para apuntar un TD230 hacia Plaspy y asegurar que los reportes de servidor y la visibilidad operativa funcionen correctamente. Utilice esta guía junto con la documentación del fabricante y la información de incorporación de Plaspy para completar el despliegue.

Plaspy utiliza un conjunto compartido de ajustes de servidor para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el equipo se conecta. Los pasos exactos en el lado del fabricante para el TD230 pueden variar según la versión de firmware, la revisión del hardware, el tipo de instalación y las herramientas de configuración proporcionadas por el proveedor. Revise las notas de firmware y las instrucciones del vendedor antes de aplicar cambios.

## Resumen de la configuración

Esta sección explica el propósito general de configurar un TD230 para su uso con Plaspy y qué debe lograr al finalizar el proceso.

- Configure el dispositivo para que reporte al endpoint de Plaspy y así los mensajes de ubicación y eventos lleguen a la plataforma.
- Asegúrese de que el firmware y los archivos de configuración del TD230 sean compatibles con el reporte remoto y los ajustes de transporte requeridos.
- Valide la conectividad y confirme que el dispositivo aparezca en Plaspy tras guardar y reiniciar el equipo.
- Preserve la gestión de energía y los intervalos de reporte del dispositivo según los requerimientos operativos.
- Mantenga el firmware y la configuración actualizados usando las capacidades OTA del TD230 cuando estén disponibles.

## Ajustes del servidor de Plaspy

Al configurar el TD230 para que reporte a Plaspy, utilice los siguientes ajustes públicos exactamente como se muestran:

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador

Todos los dispositivos en Plaspy usan el mismo puerto, por lo que apunte el TD230 al puerto 8888 al ingresar los ajustes del servidor.

## Requisitos típicos antes de la configuración

- Confirme que el TD230 tenga batería suficiente o una fuente de alimentación externa para la configuración y las pruebas.
- Acceso al método de configuración oficial de Navigil o al software proporcionado para el modelo y la versión de firmware del TD230.
- Conectividad de red desde el dispositivo a Internet para que pueda alcanzar el endpoint de Plaspy.
- El firmware del dispositivo debe soportar reporte a servidor y los protocolos de transporte relevantes.
- Identificadores del dispositivo como IMEI o ID del equipo disponibles para el registro y la validación en Plaspy.
- Una cuenta en Plaspy o la información de incorporación necesaria para asociar y validar el dispositivo en la plataforma.

## Cómo se conecta este rastreador a Plaspy

El TD230 está diseñado para enviar mensajes periódicos a un servidor remoto y puede apuntarse a Plaspy para obtener visibilidad operativa. Una vez configurado, el rastreador abrirá conexiones salientes hacia el endpoint y puerto compartidos de Plaspy, donde la plataforma se encarga del análisis del protocolo y la asociación del dispositivo.

- El TD230 reporta datos de ubicación y eventos al endpoint del servidor de Plaspy.
- Los mensajes se envían a d.plaspy.com o a 54.85.159.138 en el puerto 8888.
- Puede seleccionar transporte UDP o TCP en el dispositivo cuando el firmware solicite el tipo de transporte.
- Plaspy detecta automáticamente el protocolo del rastreador y parsea los mensajes entrantes para su visualización.
- Las funciones de firmware del equipo, como geovallas o monitoreo del estado del vehículo, pueden generar eventos que se reenvían a Plaspy.

## Flujo de trabajo típico para la configuración

Siga este flujo de trabajo práctico para configurar un TD230 y que funcione con Plaspy:

1. Acceda al método de configuración oficial del Navigil TD230 o al software proporcionado por el fabricante o el proveedor.
2. En los ajustes de servidor o reporte, ingrese d.plaspy.com o la IP del servidor 54.85.159.138 como destino.
3. Establezca el puerto del servidor en 8888, que es el puerto común que utiliza Plaspy para todos los dispositivos.
4. Elija UDP o TCP como transporte si el dispositivo requiere seleccionar un protocolo de transporte.
5. Aplique o guarde la configuración en la herramienta del dispositivo o mediante la interfaz del equipo.
6. Reinicie o haga un ciclo de energía del TD230 si el dispositivo necesita reiniciarse para que los cambios surtan efecto.
7. Valide que el dispositivo reporte a Plaspy verificando que aparezca en la plataforma y que se reciban mensajes recientes.

## Ejemplos de comandos de configuración

El método y los comandos de configuración del TD230 pueden variar según la herramienta del fabricante, el firmware y el empaquetado del proveedor. Navigil ofrece configuración mediante sus herramientas oficiales e interfaces de firmware, por lo que los comandos o formatos de mensaje exactos difieren entre instalaciones. Consulte la guía de configuración del Navigil TD230 o la documentación suministrada por el proveedor para la sintaxis y ejemplos específicos del dispositivo.

## Notas de configuración

- Las diferencias de firmware pueden cambiar dónde y cómo se ingresan los ajustes del servidor; confirme la versión de firmware del TD230 antes de aplicar ajustes.
- Algunos instaladores usan herramientas del proveedor o configuración via SMS cuando está soportado; siga el método recomendado por el suministrador del equipo.
- Elija UDP o TCP según la capacidad del dispositivo y su entorno de red; Plaspy aceptará cualquiera en el puerto 8888 y detectará el protocolo automáticamente.
- Use la ruta de actualización OTA del TD230 para mantener el firmware y los archivos de configuración al día cuando esté disponible.
- Mantenga listos los identificadores del dispositivo y los detalles de registro para agilizar la confirmación de que el equipo está reportando correctamente a Plaspy.

## Por qué usar Plaspy con esta configuración

Usar Plaspy con el Navigil TD230 ofrece una forma sencilla de centralizar el reporte de ubicación y la visibilidad de eventos para dispositivos que soportan el firmware estándar del TD230. Apuntar los dispositivos al endpoint compartido de Plaspy simplifica el despliegue porque la plataforma se encarga de la detección de protocolo y normaliza los mensajes entrantes del rastreador para su monitoreo y uso operativo.

Para saber más sobre Plaspy y cómo se integra con rastreadores como el TD230, visite https://www.plaspy.com. Para conocer los métodos de configuración específicos más actuales, el comportamiento del firmware y los detalles del fabricante, verifique la documentación de Navigil en http://www.navigil.com/
