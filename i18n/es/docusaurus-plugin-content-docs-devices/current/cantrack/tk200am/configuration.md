---
slug: /cantrack/tk200am/configuration
id: tk200am-configuration
sidebar_label: Configuration
title: CanTrack - TK200AM Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del CanTrack TK200AM para integrarlo con Plaspy, incluye ajustes de servidor y pasos prácticos
keywords:
  - Configuración CanTrack TK200AM
  - Instalación CanTrack TK200AM
  - Configuración de servidor CanTrack TK200AM
  - Integración TK200AM Plaspy
  - Configuración rastreador GPS CanTrack
  - Configuración rastreador Plaspy
  - Configuración plataforma GPS TK200AM
  - Configuración rastreador de activos CanTrack
  - Configuración seguimiento de flotas TK200AM
  - Configuración de dispositivo Plaspy
---

# CanTrack - Configuración del TK200AM

Esta página documenta el contexto público de configuración para usar el CanTrack TK200AM con Plaspy. Incluye los ajustes de servidor compartidos de Plaspy a los que debe apuntar el dispositivo, los requisitos habituales que conviene verificar antes de configurar y el flujo de trabajo general para lograr que el TK200AM informe a Plaspy para visualización en mapas, alertas e informes. Las indicaciones se centran en hechos de configuración pública y pasos prácticos, no en procedimientos personalizados de instalación.

Plaspy utiliza ajustes de servidor compartidos para los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando recibe datos. Los pasos de configuración del fabricante y las herramientas disponibles pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y la plataforma del vendedor, así que siempre contraste con la documentación del proveedor cuando necesite comandos específicos del equipo o funciones avanzadas.

## Resumen de la configuración

El objetivo de esta configuración es preparar el TK200AM para que se comunique de forma fiable con Plaspy y para que la ubicación y la telemetría aparezcan en su cuenta de Plaspy. Debe configurar el dispositivo para usar el punto de ingestión compartido de Plaspy y validar la conectividad desde el dispositivo, a través de la red móvil, hasta la plataforma.

- Apuntar el TK200AM al endpoint del servidor de Plaspy para que los envíos lleguen a su espacio de trabajo en Plaspy.
- Asegurarse de que el dispositivo tenga una SIM operativa, el APN correcto y alimentación suficiente para establecer conectividad GSM GPRS.
- Seleccionar el modo de transporte apropiado si el dispositivo requiere elegir entre UDP o TCP para el envío.
- Guardar y aplicar los ajustes en el dispositivo y confirmar que el rastreador es visible en Plaspy.
- Usar la herramienta del proveedor o la app móvil para parámetros propios del dispositivo, como el perfil de reporte o la activación de la alarma por manipulación.

## Ajustes del servidor de Plaspy

Use estos ajustes públicos de Plaspy al configurar el TK200AM para que reporte directamente a Plaspy:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP as required by the device configuration tool
- Plaspy automatically detects the tracker protocol so a single shared port is used for all supported devices

## Requisitos habituales antes de la configuración

- Un TK200AM con batería cargada o con fuente de alimentación conectada para la configuración inicial y las pruebas.
- Una tarjeta SIM válida con un plan de datos activo y el APN correcto configurado para conectividad GPRS sobre la red móvil.
- Cobertura de la red móvil en la ubicación del equipo que soporte GSM GPRS.
- Acceso al método de configuración del fabricante, como la herramienta de CanTrack, la app móvil o la interfaz de configuración suministrada con el dispositivo.
- Una cuenta de Plaspy y los datos necesarios de incorporación para ver el dispositivo una vez que empiece a reportar.
- Conocimiento de si el firmware del dispositivo exige la selección explícita de UDP o TCP para el envío de datos.

## Cómo se conecta este rastreador a Plaspy

Cuando se configura para reportar a Plaspy, el TK200AM usa GSM GPRS para abrir un enlace hacia el endpoint de ingestión de Plaspy y envía paquetes de posición y telemetría para su procesamiento en la plataforma. Plaspy utiliza un puerto compartido y detección automática de protocolo para aceptar y parsear los mensajes del rastreador.

- El rastreador se configura para enviar paquetes a d.plaspy.com o a 54.85.159.138 en el puerto 8888.
- Puede seleccionar UDP o TCP en el dispositivo si el firmware ofrece esa opción.
- Plaspy detecta automáticamente el protocolo del rastreador a partir de los datos entrantes, por lo que los dispositivos en el puerto compartido se procesan correctamente.
- Una vez que los paquetes llegan a Plaspy, se asocian a su cuenta y aparecen en paneles, rutas históricas y flujos de alertas.
- Los reportes periódicos y las alertas por manipulación del TK200AM permiten la monitorización y la respuesta operativa en Plaspy.

## Flujo de configuración habitual

1. Acceda al método oficial de configuración de CanTrack, como la app móvil del proveedor, la herramienta web o la interfaz de configuración del dispositivo suministrada por el fabricante.
2. En los ajustes de servidor o red del dispositivo, ingrese el endpoint de Plaspy usando d.plaspy.com o la IP 54.85.159.138.
3. Configure el puerto del servidor en 8888 para que coincida con la ingestión de Plaspy para todos los dispositivos.
4. Elija UDP o TCP si el dispositivo requiere una selección explícita del transporte.
5. Aplique o guarde la configuración en la herramienta del fabricante o directamente en el dispositivo.
6. Reinicie o haga un ciclo de alimentación del dispositivo si el firmware lo solicita para aplicar los cambios de red.
7. Valide que el dispositivo esté reportando a Plaspy comprobando en su cuenta de Plaspy la nueva alimentación de datos y confirmando actualizaciones de posición recientes.

## Ejemplos de comandos de configuración

Los comandos precisos y la sintaxis para configurar el TK200AM varían según la herramienta del fabricante, la versión de firmware y si la configuración se realiza por SMS, serie o la app del proveedor. Dado que los conjuntos de comandos específicos del modelo los proporciona CanTrack y pueden cambiar con el tiempo, consulte la documentación de CanTrack o la interfaz de configuración del proveedor para ejemplos exactos de comandos y plantillas SMS.

Si dispone de una lista de comandos o plantillas SMS proporcionadas por el proveedor, aplique los mismos valores públicos de Plaspy indicados aquí al especificar el host y el puerto del servidor.

## Notas de configuración

- Las diferencias de firmware y las revisiones de hardware pueden cambiar las opciones de configuración disponibles y la sintaxis exacta de los comandos; siempre consulte las notas de la versión del firmware.
- La selección TCP frente a UDP puede afectar el comportamiento durante interrupciones de red; elija el transporte recomendado por el proveedor o validado en sus pruebas de despliegue.
- La configuración del APN y de la SIM es comúnmente necesaria para la conectividad GPRS; confirme el APN correcto del operador de la SIM antes de intentar registrar el dispositivo en Plaspy.
- Plaspy utiliza el mismo puerto para todos los dispositivos soportados y realiza detección automática de protocolo, por lo que solo necesita configurar el host y el puerto de Plaspy en el rastreador.
- Si el dispositivo soporta configuración por SMS o mediante una app del proveedor, prefiera el método que su instalador haya validado por su fiabilidad y repetibilidad.

## Por qué usar Plaspy con esta configuración

Integrar el CanTrack TK200AM con Plaspy ofrece a las organizaciones una forma práctica de combinar el seguimiento de activos de larga duración y las alertas por manipulación con una plataforma centralizada de gestión de flotas. Los modos de bajo consumo y las funciones anti-manipulación del TK200AM lo hacen adecuado para el rastreo oculto de activos, mientras que Plaspy proporciona paneles, alertas e informes históricos necesarios para la supervisión operativa.

Learn more about Plaspy at https://www.plaspy.com and review the latest device specific information and firmware notes on the CanTrack website https://www.cantrackgps.com/. Manufacturer specifications, setup methods and firmware behavior can change over time so verify current details with the official manufacturer documentation.
