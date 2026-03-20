---
slug: /navtelekom/smart_s_2425_complex/configuration
id: smart_s_2425_complex-configuration
sidebar_label: Configuration
title: Navtelekom - SMART S-2425 COMPLEX Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el Navtelekom SMART S-2425 COMPLEX con Plaspy usando ajustes de servidor compartido y pasos prácticos
keywords:
  - Navtelekom SMART S-2425 COMPLEX
  - configuración SMART S-2425 COMPLEX
  - configuración rastreador GPS Navtelekom
  - configuración rastreador Plaspy
  - rastreador compatible con Plaspy
  - configuración de rastreo vehicular
  - configuración rastreador para gestión de flotas
  - configuración rastreador GNSS GLONASS
  - configuración rastreador GPS doble SIM
  - configuración NTC Configurator
---

# Navtelekom - Configuración del SMART S-2425 COMPLEX

Esta página describe el contexto público de configuración para utilizar el Navtelekom SMART S-2425 COMPLEX con Plaspy. Resume los ajustes de servidor compartido necesarios y los pasos prácticos que suelen seguir los integradores para dejar el equipo reportando posición y telemetría a la plataforma Plaspy. El contenido se basa en características públicas del dispositivo y en los ajustes de servidor compartido que Plaspy requiere para la conectividad.

Plaspy utiliza ajustes de servidor compartido para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando se conecta. Los pasos concretos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas de configuración que utilice. El SMART S-2425 COMPLEX soporta posicionamiento GNSS y GLONASS, conexión celular 2G con dual SIM, configuración local por Bluetooth y herramientas Navtelekom NTC Configurator para gestión de firmware y parámetros, que suelen emplearse durante la puesta en marcha.

## Resumen de la configuración

Este proceso prepara el SMART S-2425 COMPLEX para enviar posiciones GNSS y telemetría del vehículo a Plaspy, apuntando el equipo al endpoint de Plaspy y verificando la conectividad celular. El objetivo es garantizar que el rastreador sea accesible, reporte los eventos esperados y aparezca en la plataforma Plaspy.

- Apunte el rastreador al endpoint de servidor de Plaspy para que los paquetes de datos lleguen a la plataforma.
- Seleccione el modo de transporte que soporte el dispositivo y guarde los ajustes de servidor y puerto.
- Verifique la conectividad celular y el comportamiento de la doble SIM para mantener disponibilidad ante cambios de cobertura.
- Valide el reporte en tiempo real en Plaspy y confirme que el dispositivo aparece en la plataforma.
- Utilice NTC Configurator de Navtelekom o herramientas Bluetooth locales para actualizar firmware y aplicar ajustes específicos del dispositivo.

## Ajustes de servidor de Plaspy

- Server domain d.plaspy.com  
- Server IP 54.85.159.138  
- Port 8888  
- Transport support for UDP or TCP on port 8888  
- Plaspy automatically detects the tracker protocol when the device connects

Tenga en cuenta que Plaspy emplea el mismo puerto para todos los dispositivos soportados y detecta el protocolo automáticamente, por lo que la configuración consistente del servidor y el puerto es el requisito principal en el equipo.

## Requisitos típicos antes de la configuración

- Asegúrese de que el rastreador tenga una conexión de energía confiable al vehículo y que la batería secundaria esté disponible o cargada durante la puesta en marcha.
- Inserte SIM activas con un plan de datos adecuado y confirme cobertura 2G GSM en el sitio de instalación, ya que el dispositivo usa un módem 2G.
- Tenga acceso a las herramientas de configuración de Navtelekom, como NTC Configurator, o a la utilidad de puesta en marcha por Bluetooth para configuración local y gestión de firmware.
- Complete el cableado del dispositivo y las conexiones de sensores para entradas, salidas, puertos seriales o sensores 1-Wire que empleará con la telemetría en Plaspy.
- Disponga de una cuenta de Plaspy o acceso de administrador a su instancia Plaspy para verificar la visibilidad del dispositivo tras la configuración.
- Conozca si la instalación requiere selección de UDP o TCP y cualquier preferencia de transporte según su red.

## Cómo se conecta este rastreador a Plaspy

Una vez configurado, el SMART S-2425 COMPLEX envía posiciones GNSS y telemetría por la red celular al endpoint y puerto compartido de Plaspy. Plaspy recibe los paquetes del dispositivo en el puerto 8888 y determina automáticamente el protocolo correcto para procesar y mostrar el dispositivo en la plataforma.

- El dispositivo se configura para enviar datos a d.plaspy.com o directamente a 54.85.159.138 en el puerto 8888.
- El transporte puede ser UDP o TCP; elija la opción requerida por el dispositivo o el entorno de red.
- El soporte de doble SIM ayuda a mantener un canal de datos activo cuando la red principal no está disponible.
- La telemetría de entradas, puertos seriales y sensores 1-Wire se transmite junto con las posiciones GNSS a Plaspy.
- Plaspy realiza la detección del protocolo y comienza a aceptar y parsear los datos una vez que el dispositivo se conecta al endpoint compartido del servidor.

## Flujo típico de configuración

1. Acceda al método oficial de configuración de Navtelekom, como el software NTC Configurator o la interfaz de puesta en marcha por Bluetooth del equipo.
2. En los ajustes de servidor del dispositivo ingrese d.plaspy.com o 54.85.159.138 como dirección del servidor.
3. Configure el puerto del servidor en 8888, que es el puerto compartido de Plaspy para todos los dispositivos.
4. Seleccione UDP o TCP para el transporte si el equipo requiere una elección explícita.
5. Guarde o aplique la configuración en la herramienta del fabricante y confirme que los ajustes se escribieron en el dispositivo.
6. Reinicie o haga un ciclo de alimentación del dispositivo si el firmware exige un reinicio para que las configuraciones tengan efecto.
7. Valide que el rastreador reporte a Plaspy revisando el estado del dispositivo y las posiciones/telemetría recientes en su cuenta o panel de Plaspy.

## Ejemplos de comandos de configuración

El SMART S-2425 COMPLEX se configura habitualmente con las herramientas de Navtelekom o mediante aplicaciones de puesta en marcha por Bluetooth proporcionadas por el fabricante. La sintaxis exacta de los comandos y los métodos varían según el firmware y la herramienta del proveedor. Dado que los comandos de configuración dependen de Navtelekom y pueden cambiar con el firmware, siga las instrucciones del NTC Configurator para configuraciones basadas en comandos.

Al realizar la configuración directa del servidor en una herramienta del fabricante, utilice los valores de Plaspy indicados aquí:
- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Select UDP or TCP as required by the device

Consulte las guías de configuración de Navtelekom o la documentación de NTC Configurator para formatos exactos de línea de comandos o SMS si requiere ejemplos a nivel de comandos.

## Notas de configuración

- Las diferencias de firmware pueden cambiar los nombres de menú, los formatos de comando o las opciones de transporte disponibles; siempre verifique la versión de firmware del rastreador antes de seguir un procedimiento.
- NTC Configurator de Navtelekom y la configuración local por Bluetooth son las herramientas públicas principales para la puesta en marcha del SMART S-2425 COMPLEX; utilícelas para actualizar firmware y garantizar una configuración fiable.
- TCP y UDP se comportan diferente en redes móviles; elija UDP para menor overhead cuando esté soportado, o TCP donde se prefiera un comportamiento de conexión persistente.
- El comportamiento de la doble SIM puede afectar qué SIM se usa para datos; verifique la prioridad de ranura SIM y la configuración de APN y roaming como parte de la puesta en marcha.
- Confirme que el cableado de entradas, salidas, puertos seriales y sensores 1-Wire esté completo antes de la verificación final en Plaspy.

## Por qué usar Plaspy con esta configuración

Usar el SMART S-2425 COMPLEX con Plaspy ofrece una vía sencilla para que operadores de flota e integradores recolecten posiciones GNSS y telemetría detallada del vehículo en una plataforma central. El endpoint compartido de Plaspy y la detección automática de protocolo reducen la complejidad del onboarding, mientras que características del equipo como doble SIM, batería de respaldo y amplio soporte de E/S permiten monitorización operacional robusta y flujos anti-robo.

Learn more about Plaspy and platform capabilities at https://www.plaspy.com. For the latest device specific setup details, firmware behavior, and official configuration tools consult Navtelekom documentation at https://www.navtelecom.ru/ to verify the current manufacturer guidance.
