---
slug: /navtelekom/smart_s_4513/configuration
id: smart_s_4513-configuration
sidebar_label: Configuration
title: Navtelekom - СМАРТ S-4513 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del Navtelekom СМАРТ S-4513 con ajustes de servidor Plaspy y pasos prácticos para integración
keywords:
  - Configuración Navtelekom СМАРТ S-4513
  - Configuración rastreador GPS Navtelekom
  - Configuración Plaspy SMART S-4513
  - Configuración servidor rastreador Navtelekom
  - Guía de configuración rastreador Plaspy
  - Integración rastreador vehículo Plaspy
  - Configuración rastreador gestión de flotas
  - Ajustes conectividad GPS tracker
  - Configuración telemetría SMART S-4513
  - Configuración dispositivo Navtelekom
---

# Navtelekom - Configuración del СМАРТ S-4513

Esta página describe el contexto público de configuración para usar el tracker Navtelekom СМАРТ S-4513 con Plaspy. Se concentra en los ajustes prácticos y las acciones orientadas a la plataforma que deberá realizar para apuntar el dispositivo a Plaspy y habilitar el envío en tiempo real de posiciones y telemetría. Use esta guía junto con la documentación del fabricante para completar cualquier paso que deba realizarse del lado del dispositivo.

Plaspy acepta datos de los trackers compatibles mediante ajustes de servidor compartidos y detección automática de protocolo. Los pasos exactos del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor, por lo que verifique las opciones específicas del dispositivo en las utilidades de configuración de Navtelekom antes de aplicar los ajustes indicados aquí.

## Resumen de la configuración

El objetivo al configurar el СМАРТ S-4513 para Plaspy es dejar el tracker listo para enviar de forma fiable posiciones GNSS y telemetría al endpoint de ingestión de Plaspy, de modo que el equipo sea visible y utilizable en los paneles, alertas e informes de Plaspy.

- Apuntar el tracker al endpoint del servidor de Plaspy para que los datos lleguen a la plataforma.
- Seleccionar el transporte correcto (UDP o TCP) en el dispositivo si la herramienta del fabricante lo requiere.
- Verificar la conectividad celular y los ajustes de APN para que el tracker pueda alcanzar el servidor de Plaspy.
- Guardar y aplicar la configuración del dispositivo y reiniciarlo cuando sea necesario.
- Validar que el dispositivo reporte a Plaspy y que la ubicación y la telemetría de sensores aparezcan en la plataforma.

## Ajustes del servidor Plaspy

- Server domain: d.plaspy.com  
- Server IP: 54.85.159.138  
- Port: 8888  
- Transport: support for UDP or TCP on port 8888 depending on device transport selection  
- Plaspy behavior: Plaspy automatically detects the tracker protocol and all devices in Plaspy use the same port for ingestion

Incluya estos valores al configurar el tracker para asegurarse de que se comunique correctamente con Plaspy.

## Requisitos habituales antes de la configuración

- El СМАРТ S-4513 debe estar alimentado e instalado según las recomendaciones del fabricante, con conexiones de energía y masa fiables.
- Conectividad celular activa con una SIM con datos habilitados (este modelo soporta redundancia con doble SIM) y los ajustes de APN correctos para el operador móvil.
- Acceso a las herramientas o flujos de configuración de Navtelekom que utilice para el dispositivo, como DRC, NTC Configurator u otro configurador suministrado por el proveedor.
- Una cuenta o proyecto en Plaspy donde registrar dispositivos para poder verificar que el equipo aparece tras la configuración.
- Acceso físico o remoto a la unidad para aplicar los ajustes y reiniciar el dispositivo si es necesario.
- Conocimiento de los identificadores del dispositivo y del mapeo de telemetría que use su instancia de Plaspy; confirme con el administrador de Plaspy si tiene dudas.

## Cómo se conecta este tracker a Plaspy

Al configurarse para Plaspy, el СМАРТ S-4513 transmite posiciones GNSS y telemetría del dispositivo a través de su enlace celular al endpoint compartido de ingestión de Plaspy. Plaspy recibe los mensajes de los dispositivos en el puerto común y utiliza la detección automática de protocolo para interpretar los datos del tracker sin necesidad de un puerto distinto por modelo.

- El dispositivo se configura para enviar paquetes salientes a d.plaspy.com o directamente a 54.85.159.138.
- Todos los dispositivos de Plaspy usan el puerto 8888 para ingestión, por lo que la configuración del puerto en el dispositivo debe quedar en 8888.
- El transporte puede ser UDP o TCP; seleccione la opción soportada o preferida durante la configuración.
- Plaspy detecta automáticamente el protocolo del tracker para que la plataforma pueda parsear los mensajes soportados sin mapeos de puerto personalizados.
- Tras una configuración correcta, las posiciones y la telemetría del tracker serán visibles en Plaspy para seguimiento en vivo y reproducción histórica.

## Flujo de configuración típico

1. Acceda al método o software oficial de configuración de Navtelekom para el СМАРТ S-4513, como DRC, NTC Configurator o la herramienta del fabricante incluida con el equipo.
2. Introduzca el endpoint de Plaspy como dominio d.plaspy.com o como la IP del servidor 54.85.159.138 en los ajustes de servidor del dispositivo.
3. Establezca el puerto del dispositivo en 8888 (nota que Plaspy usa el mismo puerto para todos los dispositivos compatibles).
4. Seleccione UDP o TCP en los ajustes de transporte del dispositivo si este requiere selección de transporte.
5. Aplique o guarde la configuración en la herramienta del fabricante y confirme que no haya errores de configuración.
6. Reinicie el dispositivo si el configurador lo exige o después de guardar los ajustes para que los nuevos parámetros de red entren en efecto.
7. Valide que el dispositivo reporte a Plaspy comprobando la visibilidad del equipo y la telemetría entrante en su cuenta de Plaspy.

## Ejemplo de comandos de configuración

El contenido de configuración modelo incluido en esta página no contiene cadenas de comandos específicas para el dispositivo. Los equipos Navtelekom suelen configurarse mediante herramientas del fabricante (DRC, NTC Configurator) o utilidades del proveedor en lugar de un conjunto único de comandos públicos. Dado que los comandos exactos y la sintaxis SMS o de consola pueden variar según el firmware y la herramienta, consulte la guía de usuario de Navtelekom y la documentación del configurador para obtener los formatos de comandos exactos.

Al usar una herramienta del fabricante, introduzca el servidor como d.plaspy.com o 54.85.159.138 y configure el puerto 8888, luego guarde y reinicie el dispositivo. Si su flujo de trabajo usa configuración por SMS o cadenas de comando directas, aplique esos valores siguiendo la referencia oficial de comandos de Navtelekom.

## Notas de configuración

- Las diferencias de firmware y las revisiones de hardware pueden cambiar los menús de configuración, los transportes disponibles y la sintaxis de comandos soportada; siempre confirme la versión de firmware antes de seguir un flujo de trabajo.
- Para la conectividad celular verifique que la tarjeta SIM esté activa, que los datos estén habilitados y que el APN esté configurado correctamente en la herramienta del fabricante si es necesario.
- Elija UDP o TCP según la preferencia del instalador y el comportamiento del dispositivo; UDP suele usarse por su menor overhead en telemetría, mientras que TCP puede elegirse por su fiabilidad según el dispositivo y la red.
- El comportamiento de doble SIM y las políticas de conmutación por fallo se configuran en el equipo; valide cómo maneja el S-4513 el cambio de SIM en su instalación.
- Guarde una copia de la configuración original del dispositivo y pruebe los cambios en un entorno controlado antes de desplegarlos en vehículos de producción.

## Por qué usar Plaspy con esta configuración

Usar el Navtelekom СМАРТ S-4513 con Plaspy ofrece una vía práctica para que las flotas ingresen posiciones GNSS y telemetría rica a una plataforma operativa. La redundancia celular del tracker, la batería de respaldo y el amplio soporte de sensores y E/S permiten a los integradores capturar datos de ubicación, combustible y sensores para enviarlos a Plaspy y así habilitar mapeo, alertas e informes.

To learn more about Plaspy and how it ingests tracker data visit https://www.plaspy.com. Device specific configuration methods, firmware behavior, and manufacturer details can change over time; please verify the latest setup instructions and technical notes on the Navtelekom website https://www.navtelecom.ru/ before applying configuration in a production environment.
