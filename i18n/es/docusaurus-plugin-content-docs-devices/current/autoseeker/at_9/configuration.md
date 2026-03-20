---
slug: /autoseeker/at_9/configuration
id: at_9-configuration
sidebar_label: Configuration
title: Autoseeker - AT-9 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del AT-9 para compatibilidad con Plaspy y pasos prácticos para rastreo fiable de activos
keywords:
  - Configuración Autoseeker AT-9
  - Configuración inicial Autoseeker AT-9
  - Autoseeker AT-9 Plaspy
  - Configuración rastreador GPS Autoseeker
  - Configuración rastreador Plaspy
  - Ajustes servidor AT-9
  - Configuración software rastreo AT-9
  - Configuración rastreo vehicular
  - Configuración rastreador de activos
  - Configuración rastreo de flotas
---

# Autoseeker - AT-9 Configuración

Esta página documenta el contexto público de configuración para usar el Autoseeker AT-9 con Plaspy. Se enfoca en los ajustes y pasos prácticos que usted aplicará del lado del fabricante para que el AT-9 pueda reportar ubicación y telemetría en la plataforma Plaspy. El contenido está pensado para usuarios técnicos que preparan el dispositivo para su integración con Plaspy y no reemplaza las instrucciones oficiales del fabricante.

Plaspy utiliza ajustes de servidor compartidos para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando llegan los datos. Los pasos exactos del fabricante para configurar un AT-9 pueden variar según la versión de firmware, la revisión del hardware, el tipo de instalación y la herramienta de configuración que use su proveedor o instalador. Use esta guía para preparar el AT-9 para la comunicación con Plaspy y verifique los ajustes contra la documentación del fabricante.

## Resumen de configuración

Preparar un AT-9 para integrarlo con Plaspy significa configurar el dispositivo para que envíe su ubicación y alarmas al endpoint de Plaspy y verificar la conectividad. Los valores públicos clave que deberá aplicar son el dominio o IP del servidor Plaspy y el puerto de la plataforma. Tras la configuración, debe validar que el dispositivo aparezca en Plaspy y que se reciban los canales de alarma y telemetría esperados.

- Ingrese el endpoint del servidor Plaspy en la herramienta de configuración del AT-9 para que el rastreador envíe datos a d.plaspy.com o 54.85.159.138 usando el puerto 8888.
- Seleccione transporte UDP o TCP si la interfaz de configuración del AT-9 requiere elegir transporte; Plaspy acepta ambos.
- Asegúrese de que el dispositivo tenga conexión celular operativa y una SIM válida para que la telemetría llegue a Plaspy.
- Guarde y aplique la configuración, luego confirme que el rastreador sea visible en Plaspy y que reporte eventos GPS y de alarma.
- Verifique que los sensores de batería, manipulación, SOS y movimiento estén habilitados según el plan de instalación para que las alertas se envíen a Plaspy.

## Ajustes de servidor de Plaspy

Use los siguientes ajustes públicos de servidor al configurar el AT-9 para su uso con Plaspy. Estos son los valores oficiales que Plaspy publica para los rastreadores compatibles.

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol when data arrives

Tenga en cuenta que Plaspy utiliza el mismo puerto para todos los dispositivos compatibles y realiza la detección del protocolo de forma automática.

## Requisitos típicos antes de la configuración

- Un AT-9 cargado con una batería de 3.7V funcional y montado en la posición prevista de instalación.
- Una Micro SIM compatible y provisionada para datos en una red celular soportada, ya que el AT-9 utiliza 4G LTE y GSM.
- Acceso al método o software oficial de configuración de Autoseeker provisto por el vendedor o fabricante.
- Conocimientos básicos de la versión de firmware del dispositivo y de cualquier comando o formato SMS específico del proveedor.
- Un plan de pruebas para validar las fijaciones de ubicación, el reporte de alarmas y la visibilidad del dispositivo en Plaspy después de la configuración.

## Cómo se conecta este rastreador a Plaspy

El AT-9 envía datos GNSS y datos suplementarios de ubicación a través de redes celulares al endpoint de recolección de Plaspy. Cuando se configura con los ajustes de servidor de Plaspy, el rastreador transmitirá actualizaciones periódicas de posición y mensajes basados en eventos como manipulación, movimiento o SOS.

- El dispositivo se configura para reportar al endpoint compartido de Plaspy d.plaspy.com o directamente a 54.85.159.138.
- Todo el tráfico del rastreador se dirige al puerto 8888 en el endpoint de Plaspy.
- Puede elegir UDP o TCP en el dispositivo si se requiere selección de transporte; Plaspy soporta ambos.
- Plaspy recibe la telemetría y detecta automáticamente el protocolo correcto del rastreador para que los datos entrantes sean parseados y mostrados.
- Una vez que llegan los datos, Plaspy ofrece visibilidad en tiempo real, alertas y reproducción histórica de rutas para el AT-9.

## Flujo de configuración habitual

1. Acceda al método o software oficial de configuración de Autoseeker suministrado por el vendedor o fabricante; esto puede ser una herramienta para PC, una app móvil o un conjunto de comandos SMS.
2. En los ajustes de servidor del dispositivo, ingrese d.plaspy.com o la IP del servidor 54.85.159.138 como host de reporte.
3. Configure el puerto de reporte del dispositivo en 8888 como puerto de destino.
4. Si la configuración del AT-9 requiere seleccionar transporte, elija UDP o TCP según la preferencia del instalador.
5. Aplique o guarde la configuración en la herramienta del fabricante y confirme que los ajustes se hayan subido al dispositivo.
6. Reinicie el AT-9 si el fabricante o la herramienta lo requieren para activar los nuevos ajustes de red.
7. Valide que el dispositivo reporte a Plaspy comprobando la llegada de telemetría y eventos en la plataforma Plaspy.

## Ejemplos de comandos de configuración

Los comandos exactos o los campos de menú usados para configurar un AT-9 dependen del firmware de Autoseeker y del método de configuración proporcionado por el proveedor. En muchos casos ingresará el endpoint y el puerto de Plaspy en una pantalla de servidor o APN en la herramienta del fabricante. Entradas de ejemplo que debería esperar usar en la herramienta son:

- Campo Host o Server configurado en d.plaspy.com o 54.85.159.138
- Campo Port configurado en 8888
- Selección de transporte configurada en UDP o TCP si el dispositivo lo requiere

Debido a que las herramientas de los fabricantes varían, consulte la guía de configuración de Autoseeker o la documentación del proveedor para la sintaxis precisa o los comandos SMS necesarios para actualizar el servidor y el puerto en su AT-9.

## Notas de configuración

- Las diferencias de firmware pueden cambiar las pantallas de configuración, los formatos de comandos SMS o las opciones de transporte disponibles; revise las notas de la versión de firmware del AT-9 cuando esté resolviendo problemas.
- Elegir UDP frente a TCP puede afectar las garantías de entrega y la sobrecarga; Plaspy soporta ambos y detectará el protocolo automáticamente cuando reciba datos.
- Plaspy utiliza el mismo puerto para todos los dispositivos compatibles, lo que simplifica despliegues con múltiples equipos y reduce la variación por dispositivo en la configuración.
- Las herramientas del fabricante a veces aceptan como servidor tanto un nombre de dominio como una dirección IP; use d.plaspy.com o 54.85.159.138 según lo que acepte la herramienta.
- Confirme la conectividad de datos de la SIM y la configuración de APN siguiendo la guía de Autoseeker si el dispositivo no alcanza el servidor Plaspy.

## Por qué usar Plaspy con esta configuración

Usar el AT-9 con Plaspy brinda a las organizaciones visibilidad remota y alertas confiables para activos de alto valor. La carcasa robusta IP68 del AT-9, su fuerte montaje magnético, la larga duración de batería y su posicionamiento multimodal lo hacen adecuado para implementaciones encubiertas o de uso intensivo. Configurar el dispositivo para reportar a Plaspy permite centralizar los datos de ubicación, alarma y telemetría para monitoreo operativo y respuesta a incidentes.

Learn more about Plaspy and how it can handle AT-9 telemetry by visiting https://www.plaspy.com. For the most current and device specific configuration methods, firmware details, and manufacturer instructions, verify information on the Autoseeker website https://autoseekergps.com/.
