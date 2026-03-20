---
slug: /lk_gps/lk970/configuration
id: lk970-configuration
sidebar_label: Configuration
title: LK-GPS - LK970 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el rastreador LK-GPS LK970 con Plaspy, incluyendo ajustes de servidor y flujo de trabajo
keywords:
  - configuración LK-GPS LK970
  - instalación LK-GPS LK970
  - configuración del servidor LK970
  - configuración LK970 Plaspy
  - configuración del rastreador LK-GPS
  - guía de configuración de rastreador GPS
  - configuración de seguimiento de vehículos
  - configuración de rastreadores para gestión de flota
  - configuración SMS LK970
  - configuración LTE LK970
---

# LK-GPS - Configuración del LK970

Esta página ofrece contexto público sobre la configuración del rastreador LK-GPS LK970 para su uso con la plataforma Plaspy. Resume los ajustes públicos del servidor Plaspy a los que debe apuntar el dispositivo, describe el flujo de trabajo habitual para que el LK970 reporte ubicación y eventos a Plaspy, y señala requisitos prácticos y pasos de verificación. El LK970 soporta modo plataforma por SMS para consultas y seguimiento en tiempo real, por lo que es posible configurar el equipo mediante el software del fabricante o con comandos SMS según la versión de firmware y las herramientas disponibles.

Plaspy utiliza valores de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta. Los pasos exactos del lado del fabricante para el LK970 pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor que utilice. Esta página se centra en los valores públicos de conexión a Plaspy y en pasos prácticos; siempre confirme los procedimientos específicos del equipo con los recursos oficiales de LK-GPS.

## Visión general de la configuración

Configurar el LK970 para Plaspy consiste principalmente en dirigir el rastreador al endpoint compartido de Plaspy, seleccionar el transporte correcto y validar que el dispositivo sea visible en la plataforma. Tanto si utiliza el modo plataforma por SMS del LK970, una app de configuración del fabricante o una herramienta de escritorio, el objetivo es establecer conectividad IP fiable y un reporte consistente a Plaspy.

- Apunte el rastreador al endpoint del servidor Plaspy para que los datos de posición y eventos lleguen a la plataforma.
- Seleccione transporte UDP o TCP en el dispositivo si se requiere elegir entre ambos.
- Configure el puerto compartido de Plaspy en el dispositivo para que la plataforma acepte los reportes entrantes.
- Valide la conectividad y el reporte para que el dispositivo aparezca en el inventario de su cuenta Plaspy.
- Use consultas por SMS o las herramientas del fabricante para confirmar la respuesta del equipo cuando no estén disponibles herramientas de red.

## Ajustes de servidor de Plaspy

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP depending on device preference
- Plaspy automáticamente detecta el protocolo del rastreador cuando el dispositivo se conecta

Estos son los valores públicos que debe usar para configurar el LK970 y permitir la comunicación con Plaspy. Plaspy emplea el mismo puerto para todos los dispositivos compatibles y detecta el protocolo automáticamente al conectar los equipos.

## Requisitos típicos antes de la configuración

- Acceso físico al LK970 para aplicar ajustes o enviar comandos SMS según el método del fabricante.
- Una unidad LK970 cargada y funcionando, con batería o alimentación del vehículo conectada.
- Una tarjeta SIM activa instalada y registrada en una red móvil si va a usar reporte por datos móviles o modo plataforma por SMS.
- El IMEI del rastreador y cualquier identificador necesario para registrar el dispositivo en su cuenta o inventario de Plaspy.
- Acceso al método de configuración oficial de LK-GPS, como el software del proveedor, herramienta web o comandos SMS documentados.
- Confirmación de la versión de firmware cuando sea posible, ya que el comportamiento de configuración puede variar entre versiones.

## Cómo se conecta este rastreador a Plaspy

Cuando se configura para Plaspy, el LK970 envía datos de posición y estado al endpoint de la plataforma. La información enviada por el dispositivo es recibida por Plaspy en la dirección y puerto compartidos del servidor, donde Plaspy identifica el protocolo del rastreador e ingresa la telemetría para su visualización y procesamiento.

- El LK970 se configura para enviar paquetes TCP o UDP a d.plaspy.com o directamente a 54.85.159.138.
- Los datos del dispositivo se dirigen al puerto 8888 para que Plaspy pueda aceptar y enrutar los mensajes entrantes.
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que no necesita seleccionar un protocolo dentro de Plaspy para el dispositivo.
- El rastreador puede usar el modo plataforma por SMS para consultas o recurrir al reporte por datos móviles según la configuración.
- Una vez activo el reporte, la ubicación del dispositivo y las alarmas quedan visibles en la plataforma Plaspy para supervisión y análisis.

## Flujo de trabajo común de configuración

1. Acceda al método de configuración oficial de LK-GPS o al software proporcionado por el fabricante, o identifique el conjunto de comandos SMS necesario para su firmware.
2. Ingrese d.plaspy.com o, si prefiere o necesita una entrada IP, use 54.85.159.138 como dirección de servidor en la configuración del dispositivo.
3. Configure el puerto del servidor en 8888 para que el equipo envíe datos al puerto compartido de Plaspy.
4. Seleccione el transporte UDP o TCP si el LK970 requiere elegir un transporte durante la configuración.
5. Aplique o guarde la configuración en la herramienta del dispositivo o enviando los comandos SMS apropiados.
6. Reinicie el dispositivo si la herramienta del fabricante o el firmware indica que es necesario para aplicar los cambios de red.
7. Verifique que el dispositivo reporte a Plaspy comprobando la presencia del equipo y la telemetría reciente en la plataforma, o mediante una consulta por SMS si está disponible.

## Comandos de configuración de ejemplo

Los comandos exactos y la sintaxis para configurar servidor, transporte y puerto del LK970 dependen del firmware de LK-GPS y del conjunto de comandos o herramienta de configuración proporcionada por el fabricante. Algunas instalaciones usan comandos SMS y otras una app de configuración o una utilidad de escritorio. Consulte la documentación de LK-GPS o la herramienta del proveedor para el formato preciso de comandos de su equipo y firmware.

Si su firmware del LK970 admite configuración por SMS, por lo general deberá enviar cadenas SMS proporcionadas por el fabricante para establecer la dirección del servidor, el puerto y el transporte. Conserve cualquier marcador de posición que indique la documentación del fabricante, por ejemplo {{apn}} u otros marcadores similares al configurar parámetros de red.

## Notas de configuración

- Las diferencias de firmware importan: los comandos y menús pueden variar entre versiones de firmware y variaciones de modelo etiquetadas A/B/C; siempre verifique la sintaxis para su unidad específica.
- TCP frente a UDP: elija el transporte requerido por su despliegue o use la opción recomendada por LK-GPS; Plaspy acepta ambos y detectará el protocolo automáticamente al conectarse.
- Modo plataforma por SMS: dado que el LK970 soporta consultas por modo plataforma SMS y posicionamiento, el SMS puede usarse para una verificación rápida o la configuración inicial cuando no hay datos móviles disponibles.
- Política de un solo puerto: Plaspy acepta reportes de dispositivos en el mismo puerto para todos los equipos compatibles, lo que simplifica la configuración del puerto en el dispositivo.
- Consulte el sitio del fabricante si necesita comandos SMS exactos o el flujo de trabajo de la app del fabricante.

## Por qué usar Plaspy con esta configuración

Usar el LK970 con Plaspy proporciona a los equipos un endpoint coherente a nivel de plataforma para recopilar datos de ubicación, alarmas y reportes desde un dispositivo que admite consultas por SMS y seguimiento en tiempo real. Apuntar el LK970 al servidor compartido de Plaspy permite a las organizaciones consolidar los datos de los dispositivos, supervisar el movimiento de activos y recibir alarmas desde una única plataforma en lugar de gestionar múltiples endpoints de servidor.

To learn more about Plaspy and how it handles device connections, visit https://www.plaspy.com. For the most up to date, device specific commands, firmware notes, and manufacturer guidance for the LK970 consult the official LK-GPS documentation at https://www.lk-gps.com. Device setup steps and firmware behavior can change over time so verify critical configuration details with the manufacturer.
