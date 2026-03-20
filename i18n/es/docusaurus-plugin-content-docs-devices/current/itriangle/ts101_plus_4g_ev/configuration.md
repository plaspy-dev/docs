---
slug: /itriangle/ts101_plus_4g_ev/configuration
id: ts101_plus_4g_ev-configuration
sidebar_label: Configuration
title: iTriangle - TS101 PLUS 4G EV Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el iTriangle TS101 PLUS 4G EV en Plaspy con ajustes de servidor compartido y pasos prácticos
keywords:
  - configuración iTriangle TS101 PLUS 4G EV
  - TS101 PLUS 4G EV Plaspy
  - configuración de rastreador iTriangle
  - configuración GPS flota EV
  - guía de configuración TS101 PLUS 4G EV
  - configuración telemática vehicular
  - configuración de rastreador Plaspy
  - configuración rastreador CAN bus
  - configuración rastreador LTE Cat1 EV
  - guía configuración rastreador GPS
---

# iTriangle - Configuración TS101 PLUS 4G EV

Esta página recoge la información pública necesaria para conectar el iTriangle TS101 PLUS 4G EV a Plaspy. Incluye los ajustes de servidor compartido y la orientación práctica que usted necesita para apuntar el dispositivo a Plaspy y permitir el seguimiento en tiempo real y la ingestión de telemetría. La guía se centra en los valores públicos de conexión de Plaspy y en los pasos habituales al preparar esta unidad telemática orientada a vehículos eléctricos para despliegues de flota.

Plaspy utiliza ajustes de servidor compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el equipo se conecta. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión hardware, el tipo de instalación y las herramientas del proveedor. Según la información pública del dispositivo, el TS101 PLUS 4G EV admite configuración por USB, SMS, TCP/IP y BLE, así que utilice el método que provea su herramienta de instalación o la documentación de iTriangle para los comandos y menús específicos del equipo.

## Resumen de la configuración

Este proceso prepara el TS101 PLUS 4G EV para comunicarse de forma consistente con Plaspy y enviar ubicación, telemetría del bus CAN y reportes de eventos. El objetivo es garantizar que el dispositivo entregue sus datos al endpoint compartido de Plaspy usando el transporte y puerto correctos, de modo que la plataforma pueda ingerir y mostrar la actividad del equipo.

- Apunte el rastreador al endpoint del servidor Plaspy para que la telemetría se entregue a su cuenta.
- Configure el protocolo de transporte y el puerto para que el dispositivo abra sesiones hacia Plaspy correctamente.
- Valide la conectividad celular y los ajustes APN cuando sea necesario para que la eSIM integrada o la red local puedan transmitir datos.
- Verifique que el dispositivo reporte GNSS, eventos de movimiento y datos del bus CAN a Plaspy para que los tableros y alertas se llenen.
- Guarde y aplique la configuración, luego confirme que el dispositivo aparezca en Plaspy y reporte la telemetría esperada.

## Ajustes del servidor Plaspy

Al configurar el TS101 PLUS 4G EV para Plaspy, utilice exactamente los siguientes ajustes públicos de servidor:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP depending on device configuration choice
- Plaspy automatically detects the tracker protocol when the device connects

Tenga en cuenta que Plaspy utiliza el mismo puerto para todos los dispositivos compatibles y realiza detección automática del protocolo para reconocer el protocolo del rastreador utilizado por el equipo.

## Requisitos típicos antes de la configuración

- Un TS101 PLUS 4G EV con alimentación y acceso a su interfaz de configuración (USB, SMS, TCP/IP o BLE según firmware y herramientas).
- Conectividad celular habilitada mediante la eSIM integrada o cobertura de red local y las credenciales APN necesarias.
- Conocimiento del método de configuración del fabricante o del software que iTriangle provea para su versión de firmware.
- Acceso a una cuenta o instancia de Plaspy para verificar los datos entrantes del dispositivo y confirmar que aparece después de la configuración.
- Herramientas básicas de instalación como un cable USB o un dispositivo con Bluetooth si usa configuración por BLE.
- Notar la versión de firmware del equipo para consultar la documentación correcta de iTriangle sobre la sintaxis de comandos o diferencias en la interfaz.

## Cómo se conecta este rastreador a Plaspy

El TS101 PLUS 4G EV se configura para reportar ubicación, eventos de movimiento y telemetría del vehículo a la plataforma Plaspy enviando sus datos al endpoint y puerto compartidos de Plaspy. Una vez apuntado a Plaspy, la IP o el dominio del servidor y el puerto dirigen las sesiones entrantes hacia la canalización de ingestión de Plaspy, donde la detección de protocolos asigna el dispositivo al parser adecuado.

- El dispositivo envía posiciones GNSS y marcas de tiempo a d.plaspy.com o a 54.85.159.138 en el puerto 8888.
- El transporte se establece sobre UDP o TCP según la opción de configuración que seleccione.
- Plaspy detecta automáticamente el protocolo del rastreador y enruta los datos entrantes para su análisis y visualización.
- Los datos de bus CAN y de sensores recopilados por la unidad se transmiten junto con las actualizaciones GNSS, de modo que diagnósticos y alertas de eventos sean visibles en Plaspy.
- Los reportes de eventos como impactos, manipulaciones, encendido y pánico se envían al mismo endpoint de Plaspy para el procesamiento de alertas y reglas.

## Flujo de trabajo típico de configuración

1. Acceda al método oficial de configuración de iTriangle para su modelo y firmware del TS101 PLUS 4G EV (herramienta USB, configurador BLE, comandos SMS o configuración TCP/IP).
2. En los ajustes de servidor del dispositivo, ingrese el dominio de Plaspy d.plaspy.com o la IP del servidor 54.85.159.138.
3. Configure el puerto del dispositivo en 8888, que es el que usa Plaspy para todos los dispositivos compatibles.
4. Elija UDP o TCP si la configuración del equipo requiere seleccionar un protocolo de transporte.
5. Introduzca o verifique cualquier APN o parámetros celulares necesarios si su despliegue requiere credenciales APN explícitas.
6. Aplique o guarde la configuración y realice cualquier reinicio del dispositivo que requiera el fabricante.
7. Valide que el dispositivo reporte a Plaspy comprobando su cuenta de Plaspy por telemetría entrante y verificando que el equipo aparezca en línea.

Estos pasos enfatizan los ajustes públicos de Plaspy d.plaspy.com, 54.85.159.138 y el puerto 8888, y la necesidad de elegir UDP o TCP cuando aplique. Plaspy detectará automáticamente el protocolo del rastreador una vez que el dispositivo establezca una sesión.

## Ejemplos de comandos de configuración

El TS101 PLUS 4G EV admite múltiples métodos de configuración y la sintaxis exacta de comandos o los pasos en la GUI dependen del firmware y de la herramienta de iTriangle que se utilice. Debido a que las herramientas del fabricante y los conjuntos de comandos SMS varían según la versión de firmware, aquí no se proporcionan comandos públicos exactos. Use la utilidad de configuración de iTriangle o la lista de comandos SMS/TCP de la documentación de iTriangle para establecer:

- server domain to d.plaspy.com or server IP 54.85.159.138
- port to 8888
- transport to UDP or TCP as required

Si dispone de una lista de comandos suministrada por iTriangle para su firmware, aplique esos comandos en el orden que recomiende la documentación del proveedor, luego guarde y reinicie el dispositivo si es necesario. Plaspy detectará automáticamente el protocolo del rastreador una vez que el dispositivo se conecte al endpoint configurado.

## Notas de configuración

- Las diferencias de firmware pueden cambiar la sintaxis de los comandos, los menús disponibles o las opciones de transporte. Siempre haga coincidir los comandos con la versión de firmware del dispositivo.
- La práctica del instalador varía según la región y el proveedor; algunas instalaciones usan herramientas USB mientras que otras usan métodos SMS o BLE.
- La elección entre UDP y TCP puede afectar la entrega y el comportamiento de reconexión; seleccione el transporte recomendado por iTriangle para su escenario de despliegue y pruebe la conectividad.
- Plaspy usa el mismo puerto para todos los dispositivos compatibles y realiza detección automática del protocolo, por lo que enfóquese en ingresar el dominio o la IP del servidor y el puerto correctos.
- Para configuración por SMS, confirme los comandos SMS y el formato requerido con la documentación de iTriangle antes de enviar cambios.

## Por qué usar Plaspy con esta configuración

Conectar el iTriangle TS101 PLUS 4G EV a Plaspy brinda a operadores de flota y equipos de servicio visibilidad continua sobre la ubicación del vehículo, el estado y la telemetría orientada a eventos. Con posicionamiento multi GNSS, telemetría del bus CAN y sensores de movimiento integrados, el dispositivo puede suministrar los datos de alta resolución que Plaspy necesita para seguimiento en tiempo real, alertas y análisis que apoyan operaciones, seguridad y planificación de mantenimiento.

Para obtener más información sobre Plaspy y cómo la plataforma ingiere datos telemáticos, visite https://www.plaspy.com. Verifique los comandos específicos de configuración más recientes, el comportamiento del firmware y las instrucciones de instalación en el sitio de iTriangle https://www.itriangle.net/ ya que las especificaciones y los métodos de configuración del fabricante pueden cambiar con el tiempo.
