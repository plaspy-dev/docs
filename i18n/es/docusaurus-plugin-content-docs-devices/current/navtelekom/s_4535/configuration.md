---
slug: /navtelekom/s_4535/configuration
id: s_4535-configuration
sidebar_label: Configuration
title: Navtelekom - СМАРТ S-4535 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el Navtelekom СМАРТ S-4535 con Plaspy, con ajustes de servidor, flujo de trabajo y buenas prácticas
keywords:
  - Configuración Navtelekom СМАРТ S-4535
  - Configuración Navtelekom SMART S-4535
  - Configuración Plaspy СМАРТ S-4535
  - Configuración rastreador S-4535
  - Ajustes servidor Navtelekom
  - Configuración rastreador GPS Plaspy
  - Seguimiento vehículo S-4535
  - Gestión de flotas Navtelekom S-4535
  - Integración telemetría S-4535
  - Rastreador CAN bus Navtelekom
---

# Navtelekom - Configuración del СМАРТ S-4535

Esta página describe el contexto público de configuración para usar el rastreador Navtelekom СМАРТ S-4535 con la plataforma Plaspy. Reúne los ajustes de servidor prácticos y los pasos del flujo de trabajo necesarios para apuntar el dispositivo a Plaspy y permitir el seguimiento centralizado, la telemetría y el reporte de eventos, manteniendo en cuenta los detalles de configuración del fabricante.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, pero los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Use la guía a continuación para preparar el dispositivo para Plaspy y consulte la documentación y herramientas de Navtelekom para acciones específicas del modelo.

## Descripción general de la configuración

El objetivo al configurar el СМАРТ S-4535 para Plaspy es garantizar que el dispositivo reporte ubicación, telemetría del bus CAN y eventos de entradas de forma confiable al endpoint compartido de Plaspy, de modo que los vehículos sean visibles en la plataforma. El proceso se centra en los ajustes del endpoint de red, la selección del transporte y la validación de que el dispositivo transmite como se espera.

- Configure el rastreador para que reporte al endpoint de Plaspy y así la ubicación y la telemetría lleguen a la plataforma.
- Seleccione el protocolo de transporte compatible con el equipo y confirme que Plaspy detectará el protocolo automáticamente.
- Establezca el puerto compartido de Plaspy utilizado por todos los dispositivos y asegúrese de que el equipo use ese puerto para las sesiones de datos.
- Valide la conectividad móvil y la redundancia de SIM para que el módem 4G dual mantenga la conexión durante los trayectos.
- Confirme el reporte de eventos desde CAN, entradas y sensores para habilitar alertas y paneles en Plaspy.

## Ajustes del servidor Plaspy

Use estos ajustes públicos de servidor Plaspy al configurar el dispositivo en la herramienta del fabricante o mediante gestión remota:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support UDP or TCP on port 8888 depending on device requirements
- Plaspy automatically detects the tracker protocol when the device connects

Tenga en cuenta que todos los dispositivos en Plaspy usan el mismo puerto y Plaspy detectará el protocolo automáticamente, por lo que solo necesita apuntar el rastreador al servidor y puerto correctos.

## Requisitos típicos antes de la configuración

- Acceso al método de configuración de Navtelekom para el S-4535, como NTC Configurator, DRC remote management o la herramienta de instalador recomendada por el fabricante.
- Dispositivo alimentado con un módem 4G dual SIM funcional y al menos una SIM activa provisionada para datos.
- Un plan de SIM que permita conexiones de datos IP para reportes a servidores externos.
- Acceso físico o por Bluetooth si el dispositivo requiere emparejamiento local para la configuración inicial.
- Conocimiento de los valores APN requeridos por su operador de SIM cuando aplique.
- Confirmación de la versión de firmware y la revisión de hardware para ajustar los pasos según la guía del fabricante.

## Cómo se conecta este rastreador a Plaspy

El СМАРТ S-4535 utiliza su módem 4G para abrir una sesión de datos hacia el servidor de Plaspy y luego transmite ubicación, telemetría y datos de eventos para visualización y reporte. El rastreador se configura para reportar al endpoint y puerto compartidos de Plaspy, de modo que Plaspy reciba las cargas útiles del dispositivo y las mapee en la plataforma.

- Envía actualizaciones en tiempo real de posición GPS GLONASS al endpoint del servidor Plaspy.
- Transmite telemetría del bus CAN y canales de sensores para monitoreo de combustible y diagnóstico a Plaspy.
- Reporta estados de entradas digitales y eventos como encendido, puertas o alarmas para habilitar alertas.
- Utiliza el transporte configurado (UDP o TCP) para conectarse a d.plaspy.com o a 54.85.159.138 en el puerto 8888.
- Plaspy lee los mensajes entrantes del dispositivo y detecta automáticamente el protocolo para su análisis.

## Flujo de configuración común

1. Acceda al método o software oficial de Navtelekom para el СМАРТ S-4535, como NTC Configurator o el sistema remoto DRC.
2. Ingrese la dirección del servidor Plaspy usando el dominio d.plaspy.com o la IP 54.85.159.138 en el campo de transporte o servidor.
3. Configure el puerto del dispositivo en 8888, que es el puerto que Plaspy utiliza para todos los dispositivos compatibles.
4. Elija UDP o TCP si el dispositivo requiere una selección de transporte y según las necesidades de su red.
5. Configure los valores APN necesarios para la tarjeta SIM si la herramienta del fabricante lo solicita.
6. Aplique o guarde la configuración y despliegue los cambios al dispositivo mediante la utilidad del fabricante o el sistema remoto.
7. Reinicie el equipo si la herramienta de configuración o el firmware requieren reboot para aplicar los ajustes de red.
8. Valide que el dispositivo reporte a Plaspy confirmando que aparece en la plataforma y que se reciben actualizaciones de posición y telemetría.

## Ejemplos de comandos de configuración

Los comandos exactos y la sintaxis para configurar el СМАРТ S-4535 dependen de la herramienta de configuración de Navtelekom y del firmware. Algunos instaladores usan comandos SMS, otros usan un configurador de escritorio o gestión remota vía DRC. Dado que los comandos específicos del modelo varían según el firmware y la herramienta del proveedor, consulte la guía oficial de configuración de Navtelekom o el NTC Configurator para el conjunto de comandos exactos necesarios para apuntar el rastreador a d.plaspy.com o 54.85.159.138 en el puerto 8888.

Si utiliza una herramienta del fabricante, normalmente presentará campos para dominio o IP del servidor, puerto, transporte y APN, por lo que no serán necesarias líneas de comando manuales. Para flujos de trabajo basados en SMS, siga los ejemplos de Navtelekom en la documentación oficial.

## Notas de configuración

- Las diferencias de firmware pueden cambiar las etiquetas de los menús, la sintaxis de comandos o las opciones de transporte disponibles; verifique la versión de firmware del dispositivo antes de aplicar instrucciones.
- Elija UDP o TCP según la guía del fabricante y el rendimiento de la red; Plaspy soporta ambos transportes y detectará automáticamente el protocolo del dispositivo.
- Asegúrese de que los ajustes APN coincidan con el operador móvil de cada SIM; los marcadores de posición como [apn] suelen reemplazarse con el APN de su operador en las herramientas del fabricante.
- Las prácticas de instalación varían por región y distribuidor; utilice las herramientas recomendadas por Navtelekom como NTC Configurator o el sistema remoto DRC para despliegues a escala de flota.
- Recuerde que Plaspy utiliza un puerto compartido entre dispositivos, por lo que una configuración de puerto consistente simplifica la incorporación.

## Por qué usar Plaspy con esta configuración

Usar el Navtelekom СМАРТ S-4535 con Plaspy ofrece a las organizaciones visibilidad centralizada de la ubicación del vehículo, la telemetría del bus CAN y los eventos de entradas. La redundancia dual SIM 4G del dispositivo, la batería interna de respaldo y la lógica de eventos a bordo contribuyen a mantener la continuidad de los datos y reducir alertas falsas, de modo que los operadores de flota puedan confiar en reportes consistentes hacia los paneles y alertas de Plaspy.

Para conocer más sobre Plaspy y cómo funciona con dispositivos como el Navtelekom СМАРТ S-4535 visite https://www.plaspy.com. Para métodos de configuración específicos del dispositivo, comportamiento de firmware e instrucciones del fabricante más recientes, verifique los detalles en el sitio oficial de Navtelekom https://www.navtelecom.ru/ ya que la documentación del proveedor puede cambiar con el tiempo.
