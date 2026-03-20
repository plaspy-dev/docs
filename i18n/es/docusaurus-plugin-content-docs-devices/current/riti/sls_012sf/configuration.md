---
slug: /riti/sls_012sf/configuration
id: sls_012sf-configuration
sidebar_label: Configuration
title: Riti - SLS-012SF Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el rastreador Riti SLS-012SF con servidores Plaspy y ajustes compartidos
keywords:
  - Configuración Riti SLS-012SF
  - Configuración SLS-012SF
  - Configuración rastreador GPS Riti
  - Riti SLS-012SF Plaspy
  - Configuración servidor SLS-012SF
  - Configuración rastreador para gestión de flotas
  - Configuración GPS Plaspy
  - Guía instalación rastreador vehicular
  - Integración rastreador Riti
  - Configuración telemetría SLS-012SF
---

# Riti - Configuración SLS-012SF

Esta página documenta el contexto público de configuración para usar el rastreador vehicular Riti SLS-012SF con el backend de Plaspy. Resume los ajustes compartidos del servidor Plaspy que debe aplicar para apuntar el equipo a la plataforma, explica los requisitos habituales y describe los pasos prácticos para aplicar y verificar la configuración. La información está pensada para ayudar a instaladores e integradores a preparar el dispositivo para comunicarse con Plaspy.

El SLS-012SF incluye un módulo GPS de alta sensibilidad y un módulo de comunicaciones móviles con soporte GSM SMS y GPRS. Plaspy emplea un único endpoint de servidor y puerto compartido para los dispositivos soportados y detecta automáticamente el protocolo del rastreador. Los pasos concretos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas de configuración que proporcione Riti o instaladores externos, por lo que confirme los detalles específicos del dispositivo con el fabricante cuando sea necesario.

## Resumen de la configuración

Prepare el SLS-012SF para enviar ubicación y datos de sensores a Plaspy actualizando los parámetros del servidor en el equipo y validando la conectividad. El objetivo de esta configuración es establecer un transporte IP fiable hacia el servidor Plaspy y comprobar que el dispositivo es visible en la plataforma.

- Apunte el rastreador al endpoint de Plaspy y asegúrese de que el modo de transporte coincida con las opciones del dispositivo.
- Configure una conexión de datos móviles funcional en el dispositivo y verifique la APN si fuera necesario.
- Guarde y aplique la configuración y reinicie el rastreador cuando lo indique el fabricante.
- Valide que el dispositivo aparece y reporta en la plataforma Plaspy utilizando el servidor y puerto compartidos.
- Use la visibilidad en la plataforma para confirmar la recepción GPS y el reenvío de datos de sensores externos.

## Ajustes públicos del servidor Plaspy

Utilice los siguientes ajustes públicos de servidor Plaspy al configurar el SLS-012SF:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support using UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol when the device connects

Tenga en cuenta que Plaspy utiliza el mismo puerto 8888 para todos los dispositivos compatibles y detecta el protocolo del rastreador automáticamente.

## Requisitos típicos antes de la configuración

- Una unidad SLS-012SF instalada y con alimentación, con acceso a su interfaz de configuración del fabricante.
- Conexión de datos móviles operativa y una SIM activada si usa GSM GPRS para telemetría.
- Acceso a la herramienta oficial de configuración de Riti, al listado de comandos SMS o a la interfaz técnica suministrada con el dispositivo.
- Los ajustes del servidor Plaspy listos para ingresar: d.plaspy.com o 54.85.159.138 y puerto 8888.
- Acceso administrativo a Plaspy o una cuenta de integrador para verificar los reportes y la visibilidad del equipo.
- Conocimientos básicos sobre si su firmware requiere seleccionar TCP o UDP para el transporte hacia el servidor.

## Cómo se conecta este rastreador a Plaspy

Cuando está configurado, el SLS-012SF envía datos posicionales y de sensores en tiempo real al backend de Plaspy usando el endpoint y puerto compartidos. Plaspy recibe la conexión del dispositivo y detecta el protocolo de forma automática, lo que permite a la plataforma decodificar y mostrar la telemetría entrante.

- El rastreador envía ubicación y eventos al endpoint de Plaspy en d.plaspy.com o 54.85.159.138.
- Los datos se transmiten por el puerto 8888 usando UDP o TCP según la configuración del dispositivo.
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que no es necesario seleccionar el protocolo desde la plataforma.
- Las lecturas de sensores externos y las entradas auxiliares que reenvía el rastreador se entregan a Plaspy para su análisis y visualización.
- La visibilidad en la plataforma permite monitorizar la conectividad del equipo, la última posición conocida y los registros de eventos.

## Flujo de trabajo común para la configuración

1. Acceda al método o software de configuración oficial de Riti suministrado con su unidad SLS-012SF. Esto puede ser una interfaz web, un conjunto de comandos SMS o una herramienta de PC, según el dispositivo y el firmware.
2. En los ajustes de servidor o backend, ingrese la dirección del servidor Plaspy usando d.plaspy.com o la IP 54.85.159.138.
3. Configure el puerto del servidor del dispositivo en 8888.
4. Seleccione UDP o TCP para el transporte si el dispositivo requiere elegir el modo explícitamente.
5. Aplique o guarde los cambios de configuración en la herramienta del dispositivo o mediante la interfaz de comandos.
6. Reinicie el rastreador si las instrucciones del fabricante indican que es necesario para que los cambios surtan efecto.
7. Valide que el SLS-012SF reporta a Plaspy y aparece en la plataforma comprobando la conectividad y las actualizaciones de posición recientes.

## Comandos de configuración de ejemplo

Los comandos exactos y el método de configuración varían según el firmware de Riti y la herramienta que utilice. Algunas instalaciones usan comandos SMS, mientras que otras emplean una utilidad de configuración para PC o un menú en el propio dispositivo. Dado que las implementaciones del fabricante difieren, consulte la lista oficial de comandos de Riti o el manual de configuración para la sintaxis y ejemplos específicos del equipo.

Al usar una herramienta de configuración, ingrese los siguientes valores públicos donde se soliciten: server d.plaspy.com (o 54.85.159.138), port 8888, y seleccione UDP o TCP si es necesario. Después de aplicar los ajustes, siga las instrucciones del dispositivo para guardar y reiniciar según corresponda.

## Notas sobre la configuración

- Las revisiones de firmware y hardware pueden cambiar la sintaxis de los comandos y la ubicación de los menús; siempre verifique la versión de firmware antes de seguir una guía.
- TCP y UDP funcionan con Plaspy en el puerto 8888; elija el modo de transporte recomendado para su entorno de red o para el firmware del dispositivo.
- Si el rastreador usa GPRS, asegúrese de que la APN esté configurada correctamente para su proveedor de SIM y que el servicio de datos esté habilitado.
- Algunos instaladores prefieren usar la IP del servidor 54.85.159.138 cuando no hay DNS disponible en la red del dispositivo.
- Mantenga una copia de cualquier lista de comandos SMS del fabricante o de una exportación de configuración para resolución de problemas y futuras actualizaciones.

## Por qué usar Plaspy con esta configuración

Configurar el Riti SLS-012SF para que reporte a Plaspy ofrece una vía sencilla hacia la visibilidad continua de la flota y la gestión centralizada de la telemetría. El endpoint compartido de Plaspy y la detección automática de protocolos simplifican la incorporación, reduciendo la cantidad de ajustes específicos por dispositivo que debe gestionar el instalador y permitiendo reportes de posición y eventos casi en tiempo real.

Para conocer más sobre cómo Plaspy puede apoyar su despliegue y revisar las capacidades de la plataforma visite https://www.plaspy.com. Para obtener los comandos específicos más recientes, notas de firmware y orientación de instalación verifique los detalles en el sitio del fabricante https://www.riti.com.tw/ ya que el comportamiento del dispositivo y los métodos de configuración pueden cambiar con las revisiones de firmware y producto.
