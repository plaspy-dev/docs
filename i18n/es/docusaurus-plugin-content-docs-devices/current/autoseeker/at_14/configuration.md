---
slug: /autoseeker/at_14/configuration
id: at_14-configuration
sidebar_label: Configuration
title: Autoseeker - AT-14 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del Autoseeker AT-14 para integrarlo con Plaspy, con ajustes de servidor y flujo de configuración
keywords:
  - configuración Autoseeker AT-14
  - instalación Autoseeker AT-14
  - integración AT-14 Plaspy
  - configuración rastreador GPS Autoseeker
  - configuración rastreo de vehículos
  - configuración servidor AT-14
  - rastreo de flotas Plaspy
  - configuración rastreador Autoseeker
  - guía rastreador GPS Plaspy
  - AT-14 rastreador magnético
---

# Autoseeker - Configuración del AT-14

Esta página documenta el contexto público de configuración para usar el Autoseeker AT-14 con Plaspy. Resume los ajustes prácticos de servidor y el flujo de trabajo que aplicará al preparar el AT-14 para reportar a Plaspy, basado en la descripción del dispositivo y los detalles públicos del servidor Plaspy. El AT-14 es un mini rastreador GPS inalámbrico compacto diseñado para vehículos, camiones y contenedores, destacado por su larga autonomía en reposo y su potente montaje magnético para colocación segura.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, pero los pasos concretos desde el lado del fabricante pueden variar según el firmware, la revisión de hardware, el tipo de instalación y las herramientas de configuración del proveedor. Utilice esta guía para comprender los ajustes necesarios en Plaspy y un flujo de configuración típico, y luego aplique los comandos específicos o los pasos basados en la app que Autoseeker recomiende para su firmware y región.

## Resumen de la configuración

Esta sección explica el propósito práctico de configurar el AT-14 para Plaspy y los resultados que debe verificar después de la configuración.

- Configurar el AT-14 para que informe ubicación y datos del dispositivo al endpoint del servidor Plaspy.
- Introducir los ajustes del servidor Plaspy y confirmar que el rastreador use el puerto compartido de Plaspy y el transporte elegido.
- Validar la conectividad celular y la alimentación del dispositivo para garantizar reportes periódicos y comportamiento confiable en reposo.
- Verificar que el dispositivo aparezca en la plataforma Plaspy y que se reciban actualizaciones básicas de telemetría o ubicación.
- Confirmar el montaje y la colocación para una recepción estable sin comprometer las características de larga autonomía del equipo.

## Ajustes del servidor Plaspy

Al configurar el AT-14 para uso con Plaspy, ingrese los siguientes ajustes públicos del servidor exactamente como se muestran:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol and uses the same port for all supported devices

Estos valores son los endpoints estándar de Plaspy para el reporte de dispositivos y deben ser ingresados en la herramienta de configuración del dispositivo o proporcionados al proceso de configuración de Autoseeker.

## Requisitos típicos antes de la configuración

- Asegúrese de que el AT-14 tenga batería cargada o esté conectado a una fuente de energía confiable para la configuración inicial y las pruebas.
- Confirme que el dispositivo tenga una conexión celular 2G compatible y activa para el reporte si va a operar en modo celular.
- Obtenga acceso al método o software oficial de configuración de Autoseeker que corresponda con la versión de firmware de su AT-14.
- Tenga a mano el dominio o la IP del servidor Plaspy y el puerto para ingresarlos durante la configuración.
- Coloque el rastreador donde pueda recibir señales GPS y cobertura celular para un primer contacto confiable.
- Mantenga la documentación del dispositivo o las instrucciones del proveedor para cualquier paso o comando específico del modelo.

## Cómo se conecta este rastreador a Plaspy

El AT-14 se configura para enviar sus mensajes de ubicación y datos del equipo al endpoint compartido del servidor Plaspy para que el dispositivo sea visible y administrable en la plataforma Plaspy. Plaspy escucha en un único puerto y determina automáticamente el protocolo adecuado para cada rastreador.

- El dispositivo apunta al servidor Plaspy d.plaspy.com o a la IP 54.85.159.138.
- El dispositivo envía sus datos de reporte al puerto 8888 en el endpoint de Plaspy.
- El transporte se elige como UDP o TCP en el dispositivo si la configuración requiere una selección explícita.
- Plaspy detecta automáticamente el protocolo del rastreador e ingiere los datos reportados sin necesidad de un puerto por dispositivo.
- Una vez que comienzan los reportes, Plaspy muestra la visibilidad del dispositivo, permitiendo su monitoreo y la generación de eventos dentro de la plataforma.

## Flujo común de configuración

Una secuencia práctica para configurar el AT-14 con Plaspy es:

1. Acceda al método de configuración oficial de Autoseeker o al software apropiado para el AT-14 y su firmware.
2. Ubique la sección de ajustes de servidor o plataforma en la herramienta de configuración.
3. Ingrese el servidor Plaspy como d.plaspy.com o use la IP 54.85.159.138 si la herramienta lo requiere.
4. Establezca el puerto en 8888 como puerto de reporte del dispositivo.
5. Elija UDP o TCP si el dispositivo requiere una selección explícita del transporte.
6. Aplique o guarde la configuración en la herramienta de Autoseeker y siga las indicaciones para confirmar los cambios.
7. Reinicie o corte la alimentación del AT-14 si las instrucciones del fabricante indican que es necesario para activar los nuevos ajustes.
8. Valide que el dispositivo está reportando a Plaspy verificando su aparición en la plataforma y confirmando las actualizaciones de ubicación entrantes.

## Ejemplo de comandos de configuración

Esta sección no incluye cadenas de comandos públicas para el AT-14. Los comandos exactos y el método para enviarlos dependen del firmware de Autoseeker y de las herramientas que el fabricante soporte. Los comandos pueden estar disponibles vía la app del proveedor, un portal web o software de gestión de dispositivos de Autoseeker. Consulte la documentación del fabricante para el formato preciso de comandos y el orden según su versión de firmware.

## Notas de configuración

- El AT-14 usa tecnología celular 2G para reportes donde esté disponible; confirme la disponibilidad regional de 2G antes del despliegue.
- Las revisiones de firmware y hardware pueden cambiar los menús de configuración y la sintaxis de los comandos; siempre consulte la documentación de Autoseeker para su unidad específica.
- La selección TCP frente a UDP puede afectar el comportamiento de entrega según las condiciones de red; elija el transporte que coincida con la confiabilidad de su red y las recomendaciones del proveedor.
- Plaspy utiliza el mismo puerto 8888 para todos los dispositivos y detecta automáticamente el protocolo, por lo que no es necesario asignar puertos únicos por dispositivo.
- Las buenas prácticas de instalación, como la colocación, el montaje magnético y asegurar una vista despejada del cielo, influyen en la fiabilidad de los reportes.

## Por qué usar Plaspy con esta configuración

Configurar el Autoseeker AT-14 para reportar a Plaspy ofrece una vía sencilla hacia la visibilidad de flotas y activos mediante una plataforma que acepta una amplia gama de protocolos de rastreadores. Usar el endpoint y puerto compartidos de Plaspy simplifica la provisión de dispositivos y reduce la cantidad de valores de servidor que debe gestionar entre distintos modelos de rastreadores.

Para obtener más información sobre Plaspy y cómo funciona con dispositivos como el Autoseeker AT-14 visite https://www.plaspy.com. Para detalles específicos de configuración del dispositivo, comportamiento del firmware e instrucciones del fabricante, verifique la información vigente en el sitio de Autoseeker https://autoseekergps.com/.
