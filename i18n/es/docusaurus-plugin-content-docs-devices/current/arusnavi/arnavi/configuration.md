---
slug: /arusnavi/arnavi/configuration
id: arnavi-configuration
sidebar_label: Configuration
title: Arusnavi - Arnavi Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el rastreador Arusnavi Arnavi en Plaspy con ajustes de servidor y pasos prácticos
keywords:
  - configuración Arusnavi Arnavi
  - instalación Arnavi Plaspy
  - configuración rastreador GPS Arusnavi
  - configuración servidor Arnavi
  - configuración plataforma GPS Arnavi
  - configuración software rastreo Arusnavi
  - configuración flota Arnavi
  - compatibilidad rastreador GPS Plaspy
  - integración CAN bus Arnavi
  - configuración monitoreo remoto Arnavi
---

# Arusnavi - Configuración Arnavi

Esta página describe el contexto público de configuración para usar el controlador de navegación Arusnavi Arnavi con Plaspy. Explica los ajustes de servidor compartidos de Plaspy a los que debe apuntar el dispositivo Arnavi y detalla los objetivos prácticos de la configuración para que el equipo informe ubicación y datos de sensores a Plaspy para monitoreo remoto.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta. Los pasos exactos desde el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor, por lo que la orientación aquí debe tomarse como la configuración orientada a la plataforma que aplicará en el método de configuración de Arnavi provisto por el fabricante.

## Visión general de la configuración

Configurar un dispositivo Arnavi para Plaspy significa preparar el rastreador para que se conecte de forma confiable al punto de acceso compartido de Plaspy y comience a enviar telemetría, ubicación y estados de sensores. Las siguientes tareas son el foco práctico al integrar Arnavi con Plaspy:

- Configurar el dispositivo Arnavi con los ajustes de servidor de Plaspy para que pueda establecer conexión con la plataforma.
- Seleccionar el tipo de transporte requerido por el firmware del equipo y fijar los parámetros de red al puerto compartido de Plaspy.
- Verificar la conectividad del dispositivo y confirmar que el rastreador aparezca en Plaspy tras los informes iniciales.
- Mapear o habilitar los sensores y entradas CAN bus compatibles para que la telemetría sea visible en Plaspy.
- Probar el envío de alarmas y reportes de estado para que los eventos operativos queden registrados en la plataforma.

## Ajustes de servidor de Plaspy

Use los siguientes ajustes públicos del servidor Plaspy al configurar su dispositivo Arnavi:

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte: UDP o TCP según requiera el dispositivo
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta

Tenga en cuenta que todos los dispositivos en Plaspy usan el mismo puerto, por lo que debe establecer el puerto 8888 en Arnavi para asegurar que el equipo alcance el punto de acceso compartido de Plaspy.

## Requisitos típicos antes de la instalación

- Acceso físico al dispositivo Arnavi o acceso a la herramienta o interfaz de configuración oficial del fabricante.
- Alimentación estable para el dispositivo y cualquier sensor o interfaz CAN bus conectada que vaya a reportarse.
- Conectividad de red disponible para que el equipo pueda alcanzar d.plaspy.com o la dirección IP 54.85.159.138.
- Conocimiento del método de configuración del dispositivo proporcionado por Arusnavi para su versión de firmware y revisión de hardware.
- Un plan sobre cómo mapear las entradas de sensores y señales CAN bus en la plataforma de monitoreo.
- Procedimientos de prueba opcionales para confirmar que los reportes del dispositivo están llegando y que los campos de datos son visibles en Plaspy.

## Cómo se conecta este rastreador a Plaspy

Cuando se configura para Plaspy, el dispositivo Arnavi abre una conexión de red con el punto de acceso compartido de Plaspy y comienza a enviar reportes periódicos y mensajes de evento. Plaspy recibe esos mensajes en el puerto común y determina automáticamente el protocolo del rastreador.

- El dispositivo se dirige al punto de Plaspy por nombre o IP usando los ajustes de servidor indicados arriba.
- Arnavi abre una conexión UDP o TCP al puerto 8888 según el transporte seleccionado.
- El rastreador envía actualizaciones de posición y mensajes derivados de sensores o del bus CAN a Plaspy.
- Plaspy procesa los mensajes entrantes y los asocia con el registro del dispositivo para su monitoreo e informes.
- Usted valida la visibilidad en Plaspy comprobando que los reportes del dispositivo llegan tras la configuración y el arranque.

## Flujo de trabajo común de configuración

1. Acceda al método de configuración oficial de Arusnavi o al software correspondiente para su dispositivo Arnavi y firmware.
2. Ingrese la dirección del servidor Plaspy usando el hostname d.plaspy.com o la IP 54.85.159.138 según lo permita la herramienta.
3. Configure el puerto del dispositivo en 8888, que es el puerto compartido de Plaspy para todos los equipos.
4. Elija UDP o TCP como transporte si el dispositivo requiere una selección explícita.
5. Guarde o aplique los ajustes de configuración en la herramienta o interfaz del dispositivo Arnavi.
6. Reinicie el equipo si las instrucciones del fabricante requieren un reinicio para activar los cambios de red.
7. Verifique que el dispositivo informe a Plaspy y que la ubicación y los datos de sensores aparezcan en la plataforma.

## Ejemplos de comandos de configuración

Los comandos exactos o las rutas de menú para configurar un dispositivo Arnavi dependen de las herramientas del fabricante Arusnavi, del firmware o de la interfaz de configuración que tenga. Algunas instalaciones usan una herramienta gráfica, otras una interfaz de comandos. Debido a que los comandos y la sintaxis son específicos por modelo y firmware, consulte el manual oficial de configuración de Arusnavi para ejemplos de comandos y siga el flujo de trabajo del fabricante para establecer el host del servidor Plaspy, el puerto y el tipo de transporte.

## Notas de configuración

- Las revisiones de firmware y hardware pueden cambiar la interfaz de configuración y las opciones de transporte disponibles. Confirme las instrucciones correctas para su revisión de Arnavi.
- Elija UDP o TCP según la guía del firmware de Arnavi y las características de estabilidad de su red; Plaspy acepta ambos transportes en el puerto 8888.
- Dado que Plaspy utiliza el mismo puerto para todos los rastreadores compatibles, no necesita diferentes números de puerto por dispositivo; cambie solo la dirección del servidor y el transporte cuando sea necesario.
- Pruebe la conectividad después de aplicar los ajustes y después de cualquier actualización de firmware para asegurar que el dispositivo siga reportando correctamente.
- Consulte la documentación de Arusnavi o las herramientas de configuración del proveedor para pasos específicos del dispositivo, como mapeos de sensores o configuración del bus CAN.

## Por qué usar Plaspy con esta configuración

Usar el rastreador Arusnavi Arnavi con Plaspy ofrece a las organizaciones una vía sencilla para reunir la ubicación del vehículo, estados de sensores y datos del bus CAN en una plataforma central. Configurar Arnavi para que apunte al punto de acceso y puerto compartidos de Plaspy reduce la complejidad de la configuración por dispositivo y permite que Plaspy detecte automáticamente el protocolo del rastreador y comience a procesar los mensajes entrantes.

Más información sobre Plaspy y las capacidades de la plataforma en https://www.plaspy.com y consulte los detalles más recientes de configuración del dispositivo Arusnavi y firmware en https://www.arusnavi.ru para verificar los métodos de instalación específicos y las recomendaciones del fabricante. Los pasos de configuración del fabricante, el comportamiento del firmware y las características del dispositivo pueden cambiar con el tiempo, por lo que siempre confirme los procedimientos actuales en la documentación oficial de Arusnavi.
