---
slug: /skypatrol/sp8600/configuration
id: sp8600-configuration
sidebar_label: Configuration
title: SkyPatrol - SP8600 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del SkyPatrol SP8600 con ajustes del servidor Plaspy y pasos prácticos para una integración rápida
keywords:
  - configuración SkyPatrol SP8600
  - configuración SP8600 para Plaspy
  - configuración rastreador GPS SkyPatrol
  - configuración de servidor SP8600
  - integración de rastreadores con Plaspy
  - rastreo vehicular SP8600
  - configuración plataforma GPS SP8600
  - configuración software de rastreo SP8600
  - guía de configuración de rastreadores Plaspy
  - configuración rastreador GPS portátil
---

# SkyPatrol - Configuración del SP8600

Esta página describe la configuración pública necesaria para usar la serie SkyPatrol SP8600 con Plaspy. Explica los ajustes compartidos del servidor Plaspy que debe ingresar en el dispositivo o en la herramienta del proveedor, y cómo preparar el rastreador para que pueda comunicarse con la plataforma. Utilice estas indicaciones para comprender lo que Plaspy requiere y cómo se pone en línea típicamente un SP8600 para el rastreo.

Plaspy usa ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador a nivel de plataforma. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor, por lo que esta página presenta los hechos públicos y comunes de configuración; para comandos específicos del dispositivo consulte la documentación oficial de SkyPatrol o la herramienta del proveedor.

## Resumen de configuración

El objetivo de la configuración es preparar el SP8600 para que informe su ubicación y eventos a Plaspy, de modo que el dispositivo aparezca y se actualice correctamente en la plataforma. Esto implica establecer el endpoint del servidor Plaspy, confirmar la selección de transporte si es necesario y verificar la conectividad desde el dispositivo hacia Plaspy.

- Ingresar el endpoint del servidor Plaspy por dominio o IP para que el rastreador sepa dónde enviar sus datos
- Configurar el transporte de red y el puerto para coincidir con lo que Plaspy espera para datos entrantes
- Confirmar que el SP8600 tenga conexión móvil activa y alimentación antes de realizar pruebas
- Validar que el rastreador sea visible y reporte en Plaspy después de la configuración
- Tener a mano las herramientas o instrucciones del fabricante para parámetros específicos de firmware

## Ajustes del servidor Plaspy

Use los siguientes ajustes públicos de Plaspy al configurar el dispositivo SP8600 o la herramienta de configuración del fabricante:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol so the platform recognizes the device type

Todos los dispositivos en Plaspy usan el mismo puerto y la plataforma realizará la detección de protocolo automáticamente.

## Requisitos típicos antes de la instalación

- Asegúrese de que el SP8600 esté alimentado y pueda conectarse al accesorio del vehículo o al cargador según lo previsto
- Confirme que el dispositivo tenga una conexión móvil operativa usando el módem del equipo según lo descrito por SkyPatrol
- Tenga acceso al método oficial de configuración de SkyPatrol o al software provisto por el proveedor
- Conozca el dominio o la IP del servidor Plaspy y el puerto común para ingresar en los ajustes del dispositivo
- Esté preparado para reiniciar o cortar y restaurar la alimentación del rastreador después de guardar la configuración si el equipo lo requiere
- Pruebe con un dispositivo que esté dentro de cobertura y reportando ubicación para simplificar la validación

## Cómo se conecta este rastreador a Plaspy

Una vez configurado, el SP8600 envía actualizaciones de ubicación e informes de eventos al endpoint y puerto compartidos de Plaspy. Plaspy recibe esos datos e identifica automáticamente el protocolo del rastreador para que el dispositivo sea mostrado y procesado por la plataforma.

- El rastreador se configura para reportar a d.plaspy.com o a 54.85.159.138
- Los datos se transmiten al puerto 8888 del endpoint de Plaspy
- El transporte puede ser UDP o TCP dependiendo de la opción de configuración del dispositivo
- Plaspy realiza la detección de protocolo, por lo que no se requiere seleccionar un protocolo específico en la plataforma
- La visibilidad en la plataforma se valida confirmando que el dispositivo aparezca y se actualice en Plaspy

## Flujo de trabajo típico de configuración

1. Acceda al método de configuración oficial de SkyPatrol o al software proporcionado por el fabricante o vendedor
2. Ingrese el dominio del servidor Plaspy d.plaspy.com o alternativamente la IP del servidor 54.85.159.138 en el campo de servidor del dispositivo
3. Configure el puerto a 8888, que Plaspy utiliza para todos los dispositivos soportados
4. Seleccione UDP o TCP si el dispositivo requiere elegir el transporte
5. Aplique o guarde la configuración en la herramienta del fabricante o en el propio dispositivo
6. Reinicie o haga un ciclo de alimentación del SP8600 si el firmware del dispositivo necesita un reinicio para aplicar los nuevos ajustes
7. Valide que el dispositivo reporte a Plaspy y que los datos de ubicación y eventos aparezcan según lo esperado

## Ejemplos de comandos de configuración

Los comandos exactos de configuración y el método para enviarlos dependen de la versión de firmware de SkyPatrol y de la herramienta de configuración del proveedor. Plaspy acepta datos de dispositivos enviados a d.plaspy.com o 54.85.159.138 en el puerto 8888 usando UDP o TCP. Para la sintaxis concreta de comandos, utilice la documentación de SkyPatrol o la utilidad de configuración oficial suministrada por el proveedor, ya que los comandos varían según el firmware y la herramienta.

## Notas de configuración

- Las diferencias de firmware pueden cambiar la sintaxis de comandos y las opciones disponibles, por lo que siempre verifique el conjunto de comandos para su versión de firmware
- Las herramientas de configuración del instalador o del proveedor suelen usarse para rastreadores plug and play como el SP8600 en lugar de la entrada manual en el dispositivo
- Elija TCP o UDP según las opciones de la herramienta del rastreador y las instrucciones de SkyPatrol; ambos transportes son compatibles con Plaspy
- La serie SP8600 es portátil y está pensada para instalaciones rápidas, por lo que pruebe la portabilidad y el reporte después de mover el dispositivo entre vehículos
- Consulte la documentación del fabricante para cualquier paso de reinicio o parámetros de fábrica antes de realizar un restablecimiento en campo

## Por qué usar Plaspy con esta configuración

Usar Plaspy con el SkyPatrol SP8600 ofrece un camino sencillo hacia la visibilidad de la flota y el monitoreo operacional. Los ajustes de servidor compartidos de Plaspy reducen la variabilidad de configuración entre dispositivos y la detección de protocolo en la plataforma simplifica la incorporación de rastreadores compatibles.

Para obtener más información sobre Plaspy y cómo la plataforma gestiona las integraciones de dispositivos visite https://www.plaspy.com. Para métodos de configuración específicos más recientes, notas de firmware y detalles del fabricante, confirme la información en el sitio web de SkyPatrol https://www.skypatrol.com/.
