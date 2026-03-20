---
slug: /gelix/gelix_3/configuration
id: gelix_3-configuration
sidebar_label: Configuration
title: Gelix - Gelix 3 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar Gelix 3 con Plaspy, con ajustes de servidor y pasos prácticos para integrar el dispositivo
keywords:
  - Configuración Gelix Gelix 3
  - Configuración Gelix 3
  - Configuración de servidor Gelix 3
  - Gelix 3 Plaspy
  - Configuración del rastreador Gelix
  - Configuración de rastreador GPS
  - Configuración de registrador de consumo energético
  - Guía de integración de rastreadores
  - Ajustes de servidor Plaspy
  - Configuración de telemetría del dispositivo
---

# Gelix - Configuración del Gelix 3

Esta página documenta el contexto público de configuración para usar el rastreador Gelix 3 con Plaspy. Resume los ajustes de servidor prácticos y los pasos habituales para apuntar un dispositivo Gelix 3 hacia Plaspy, de modo que el equipo pueda reportar telemetría y eventos a la plataforma. El Gelix 3 es un registrador de consumo energético que integra un módem GSM GPRS o una interfaz Ethernet y se utiliza comúnmente para monitoreo, reporte de eventos y control remoto.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando éste se conecta. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la variante de hardware, el tipo de instalación y las herramientas del proveedor; esta página ofrece los detalles públicos del endpoint de Plaspy y un flujo de trabajo práctico para aplicarlos en dispositivos Gelix 3.

## Resumen de la configuración

El objetivo de esta configuración es preparar una unidad Gelix 3 para comunicarse de forma confiable con el backend de Plaspy, de manera que los datos del dispositivo sean visibles y accionables en la plataforma. Usted configurará el dispositivo para que envíe sus datos al endpoint de Plaspy, seleccionará el transporte que soporte el dispositivo y validará la conectividad para que los eventos aparezcan en Plaspy.

- Ingrese el endpoint del servidor Plaspy en el Gelix 3 mediante la interfaz de configuración del fabricante.
- Configure el transporte y el puerto para que el dispositivo pueda abrir una sesión con Plaspy.
- Asegúrese de que el dispositivo tenga conectividad de red válida a través del módem GSM GPRS integrado o del puerto Ethernet.
- Aplique y guarde los ajustes, y reinicie el dispositivo si las instrucciones del fabricante lo requieren.
- Verifique que el dispositivo esté reportando correctamente a Plaspy y que sea visible en la plataforma.

## Ajustes del servidor Plaspy

Use estos ajustes públicos de conexión de Plaspy al configurar el Gelix 3:

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte compatible: UDP o TCP, según la opción de configuración del dispositivo
- Plaspy detecta automáticamente el protocolo del rastreador después de que el dispositivo se conecta

Estos valores corresponden al endpoint de servidor compartido que Plaspy utiliza para todos los dispositivos compatibles.

## Requisitos previos típicos

- Acceso al método o software de configuración del fabricante Gelix, tal como lo provee el fabricante
- Energía y acceso físico al dispositivo para la configuración inicial y cualquier reinicio necesario
- Conectividad de red para la variante del dispositivo en uso, por ejemplo una SIM activa para modelos GSM GPRS o una conexión Ethernet operativa para variantes Ethernet
- Conocimiento de la versión de firmware del dispositivo y de la documentación del proveedor para los pasos de configuración
- Acceso administrativo a cualquier herramienta o portal utilizado para ingresar los ajustes de servidor y transporte
- Opcional: una SIM de prueba o un entorno de red para validar las conexiones salientes antes de la instalación definitiva

## Cómo se conecta este rastreador a Plaspy

Al configurarse para Plaspy, el Gelix 3 envía su telemetría y datos de eventos al endpoint y puerto compartido de Plaspy. Una vez que el dispositivo tenga una ruta de red activa hacia el servidor configurado y el transporte correcto, Plaspy detectará automáticamente el protocolo y comenzará a procesar los mensajes del dispositivo para su visualización y monitoreo.

- El dispositivo apunta a d.plaspy.com o directamente a 54.85.159.138
- El dispositivo envía datos a través del puerto 8888
- Puede elegir UDP o TCP si el dispositivo requiere seleccionar un transporte
- Plaspy recibe los mensajes del dispositivo y mapea los datos reportados dentro de la plataforma
- La visibilidad en Plaspy permite monitoreo operativo, alertas de eventos y registro de datos

## Flujo de trabajo de configuración habitual

1. Acceda al método oficial de configuración de Gelix o al software provisto en la documentación del fabricante.
2. Ubique la sección de red o servidor donde pueda ingresar la dirección del servidor remoto.
3. Ingrese el dominio del servidor Plaspy d.plaspy.com o la IP del servidor 54.85.159.138.
4. Configure el puerto de comunicación en 8888.
5. Seleccione el modo de transporte UDP o TCP si el dispositivo exige elegir uno.
6. Aplique o guarde los cambios de configuración en la herramienta o el menú del Gelix.
7. Reinicie el dispositivo si las instrucciones del fabricante indican que es necesario.
8. Valide que el dispositivo esté reportando a Plaspy revisando la visibilidad del dispositivo y los mensajes recientes en la plataforma.

## Ejemplos de comandos de configuración

Los comandos de configuración del modelo Gelix 3 y la sintaxis exacta varían según el firmware y la utilidad de configuración del fabricante. Dado que Gelix ofrece varias maneras de configurar el dispositivo (interfaz web integrada, software del proveedor o archivos de configuración), los comandos o pasos de menú exactos no son universales y dependen de la herramienta que utilice. Consulte la guía de configuración oficial de Gelix incluida con su hardware para el formato de comandos y ejemplos precisos.

Si utiliza una herramienta del proveedor que acepta comandos de texto o configuraciones tipo SMS, siga la referencia de comandos publicada por el fabricante y sustituya los detalles del servidor de Plaspy indicados más arriba por cualquier marcador de posición de servidor, IP o puerto.

## Notas de configuración

- Las revisiones de firmware y hardware pueden cambiar los nombres de menú y las opciones disponibles; confirme los pasos exactos para su revisión Gelix 3 en la documentación del proveedor.
- Elija UDP o TCP según las opciones que exponga el firmware del dispositivo; ambos son compatibles con Plaspy y la plataforma detectará el protocolo automáticamente.
- Para variantes GSM GPRS, asegúrese de que el APN y la provisión de la SIM sean correctos antes de intentar alcanzar d.plaspy.com.
- Para variantes Ethernet, verifique la conectividad física de red y cualquier ajuste de red requerido, como IP estática o configuración DHCP conforme a las instrucciones de Gelix.
- Mantenga un registro de los cambios de configuración y de la versión de firmware para facilitar la resolución de problemas y futuras actualizaciones.

## Por qué usar Plaspy con esta configuración

Configurar un Gelix 3 para reportar a Plaspy ofrece visibilidad centralizada y recopilación consolidada de datos sobre consumo eléctrico, monitoreo de eventos y telemetría del dispositivo. Las organizaciones que requieren monitoreo continuo, control remoto o informes consolidados se benefician al enviar los datos del Gelix 3 a Plaspy, donde pueden visualizarse, procesarse y utilizarse para la toma de decisiones operativas.

Learn more about Plaspy and how it supports device integration at https://www.plaspy.com. For the latest device specific configuration methods, firmware behavior, and manufacturer details verify the official Gelix documentation at http://www.gelix.com/ as vendor procedures and firmware may change over time.
