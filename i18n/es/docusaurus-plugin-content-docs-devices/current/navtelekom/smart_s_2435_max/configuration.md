---
slug: /navtelekom/smart_s_2435_max/configuration
id: smart_s_2435_max-configuration
sidebar_label: Configuration
title: Navtelekom - SMART S-2435 MAX Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar Navtelekom SMART S-2435 MAX con Plaspy usando servidor compartido y pasos prácticos
keywords:
  - Configuración Navtelekom SMART S-2435 MAX
  - Configuración tracker Navtelekom Plaspy
  - Configuración servidor SMART S-2435 MAX
  - Configuración SMART S-2435 MAX para Plaspy
  - Configuración GPS SMART S-2435 MAX
  - Configuración plataforma GPS Navtelekom
  - Integración telemática SMART S-2435 MAX
  - Configuración dispositivo Plaspy
  - Seguimiento de flotas Navtelekom
  - Rastreo vehicular SMART S-2435 MAX
---

# Navtelekom - Configuración del SMART S-2435 MAX

Esta página describe el contexto público de configuración para utilizar el rastreador Navtelekom SMART S-2435 MAX con Plaspy. Reúne la información práctica sobre servidor y parámetros que usted necesita para apuntar el equipo a Plaspy, indica qué verificar antes de la integración y describe el flujo de trabajo típico utilizado por instaladores y técnicos de flota. La descripción del dispositivo destaca las funciones del SMART S-2435 MAX relevantes para la integración con Plaspy, incluyendo GLONASS/GPS, batería de respaldo, módem 2G con doble SIM y amplias entradas/salidas para telemetría y control.

Plaspy utiliza ajustes de servidor compartidos para los dispositivos compatibles y realiza detección automática del protocolo, por lo que no es necesario elegir un servidor por protocolo para cada unidad. Los pasos de configuración por parte del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Use las indicaciones de esta página junto con la documentación de Navtelekom y las notas de firmware de su equipo para completar la integración.

## Resumen de configuración

El proceso de configuración prepara el SMART S-2435 MAX para comunicarse de manera confiable con Plaspy y garantiza que el dispositivo aparezca en la plataforma para seguimiento en tiempo real e informes. Configurar correctamente la unidad establece el punto final del servidor y el transporte, confirma la conectividad celular y habilita la telemetría y el reporte de eventos que Plaspy utiliza para alertas e historial.

- Apunte el rastreador al servidor de Plaspy usando el dominio o IP proporcionados y el puerto compartido de Plaspy.
- Configure la conectividad celular, incluyendo SIM y APN, para que el módem 2G con doble SIM pueda alcanzar Plaspy.
- Seleccione el transporte (UDP o TCP) en el dispositivo si es necesario y guarde la configuración.
- Aplique cambios de firmware o parámetros con la herramienta del fabricante como NTC Configurator, configurador Bluetooth u otros métodos oficiales de Navtelekom.
- Valide que el dispositivo reporte GNSS y telemetría a Plaspy y que los eventos se muestren en la plataforma.

## Ajustes del servidor de Plaspy

- server domain d.plaspy.com
- server IP 54.85.159.138
- port 8888
- transport support for UDP or TCP
- automatic protocol detection in Plaspy

Nota: El SMART S-2435 MAX puede configurarse para enviar datos a d.plaspy.com o directamente a 54.85.159.138 usando el puerto 8888. Plaspy utiliza el mismo puerto para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador.

## Requisitos previos típicos

- Una unidad SMART S-2435 MAX con alimentación y accesible, con la batería de respaldo interna cargada si está disponible.
- Al menos una tarjeta SIM activa y cobertura celular 2G en el área de operación; la doble SIM permite estrategias de conmutación por fallo.
- Acceso a la herramienta o método de configuración del fabricante apropiado para su unidad, como NTC Configurator, configurador Bluetooth u otro software oficial de Navtelekom.
- APN y credenciales de SIM configuradas si su operador móvil las requiere.
- Una cuenta en Plaspy o acceso a la plataforma Plaspy para validar que el dispositivo está reportando después de la configuración.
- Herramientas básicas para reiniciar o cortar la alimentación del equipo después de aplicar cambios de configuración.

## Cómo se conecta este rastreador a Plaspy

Una vez configurado, el SMART S-2435 MAX envía posiciones GNSS y telemetría a través de su enlace celular al punto final y puerto compartido de Plaspy. Plaspy recibe esos mensajes, actualiza la ubicación de los vehículos, registra el historial y aplica las reglas o alertas definidas en la plataforma.

- Paquetes de posición GNSS y marcas de tiempo enviados a d.plaspy.com o 54.85.159.138 en el puerto 8888.
- Informes de telemetría y estado de entradas/salidas reenviados a Plaspy para monitoreo en vivo y evaluación de reglas.
- Reportes de eventos como entradas, alertas del acelerómetro y salidas de control visibles en los paneles de Plaspy.
- El dispositivo permanece alcanzable para acciones de control o flujos de trabajo remotos cuando se confirma la telemetría y la conectividad.
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que la plataforma interpreta los mensajes sin necesidad de seleccionar un protocolo por dispositivo.

## Flujo de configuración típico

1. Acceda al método o software oficial de configuración de Navtelekom para el SMART S-2435 MAX (por ejemplo NTC Configurator, configurador Bluetooth o herramientas del proveedor).
2. Configure el APN del dispositivo y verifique la conectividad de la SIM para que el módem 2G establezca una sesión de datos.
3. Ingrese el servidor de Plaspy por nombre de host o IP: use d.plaspy.com o 54.85.159.138.
4. Establezca el puerto del servidor en 8888 ya que Plaspy usa este puerto compartido para todos los equipos.
5. Si el dispositivo solicita selección de transporte, elija UDP o TCP según sus requerimientos de red.
6. Aplique o guarde la configuración y, si el equipo o firmware lo requiere, reinicie la unidad para cargar los ajustes.
7. Valide que el dispositivo reporte a Plaspy comprobando posiciones en vivo y telemetría en la plataforma Plaspy.

## Ejemplos de comandos de configuración

El método de configuración del SMART S-2435 MAX depende del firmware y de la herramienta del fabricante que utilice. Los dispositivos Navtelekom se configuran comúnmente con la aplicación NTC Configurator o mediante configuración local por Bluetooth; algunos instaladores también usan SMS o herramientas OEM donde están soportadas. Los comandos exactos y los nombres de parámetros varían según el firmware y la herramienta, por lo que debe consultar la documentación de Navtelekom para la sintaxis específica del equipo y las opciones disponibles.

Si dispone de una lista de comandos proporcionada por el fabricante o un formato SMS de Navtelekom, aplique esos comandos en el orden indicado por el proveedor e incluya el dominio o IP del servidor Plaspy y el puerto 8888 cuando se solicite.

## Notas de configuración

- Las diferencias de firmware pueden cambiar los nombres de parámetros y los flujos de configuración. Confirme la versión de firmware antes de aplicar ajustes y siga las notas de Navtelekom para esa versión.
- UDP suele tener menor sobrecarga mientras que TCP puede ofrecer garantías de entrega; elija el transporte que se adapte a su red y a los requisitos de fiabilidad, teniendo en cuenta que Plaspy aceptará cualquiera en el puerto 8888.
- Configure el comportamiento de doble SIM y la prioridad de conmutación según los requerimientos del sitio para que el dispositivo mantenga la conectividad con Plaspy.
- Los ajustes de APN suelen ser necesarios para datos celulares; campos ejemplo como credenciales del operador deben completarse con los valores proporcionados por su operador móvil.
- Use herramientas del fabricante como NTC Configurator o recursos oficiales de Navtelekom para editar parámetros en lugar de modificaciones improvisadas para evitar conflictos de parámetros.

## Por qué usar Plaspy con esta configuración

Usar el SMART S-2435 MAX con Plaspy ofrece a gerentes de flota e integradores un camino sencillo hacia el seguimiento en tiempo real, visibilidad de telemetría y alertas basadas en reglas. La capacidad GNSS del dispositivo, el módem 2G con doble SIM, la batería de respaldo y las E/S flexibles lo hacen adecuado para escenarios de monitoreo de vehículos y activos donde la telemetría continua y las acciones remotas son importantes, y Plaspy proporciona la plataforma centralizada para visualización, historial y flujos operativos.

Para más información sobre Plaspy y su integración con rastreadores Navtelekom visite https://www.plaspy.com. Para instrucciones específicas del dispositivo, lanzamientos de firmware y referencia técnica del SMART S-2435 MAX consulte el sitio del fabricante https://www.navtelecom.ru/ ya que el comportamiento del firmware y los detalles de configuración pueden cambiar con el tiempo.
