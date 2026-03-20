---
slug: /gosafe/gtu30/configuration
id: gtu30-configuration
sidebar_label: Configuration
title: Gosafe - GTU30 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el rastreador Gosafe GTU30 con Plaspy, ajustes de servidor, checklist y pasos prácticos para integrar y validar conectividad
keywords:
  - configuración Gosafe GTU30
  - instalación Gosafe GTU30
  - integración GTU30 Plaspy
  - configuración servidor GTU30
  - configuración software seguimiento GTU30
  - configuración rastreador GPS GTU30
  - seguimiento de flotas GTU30
  - configuración telemetría GTU30
  - configuración dispositivo Plaspy
  - rastreador de vehículo GTU30
---

# Gosafe - Configuración del GTU30

Esta página describe el contexto público de configuración para usar el rastreador Gosafe GTU30 con Plaspy. Explica los ajustes compartidos del servidor que Plaspy requiere, qué verificar en el equipo antes de la integración y los pasos generales que la mayoría de los instaladores seguirá para poner el GTU30 en línea en Plaspy. El contenido es práctico y se enfoca en los valores públicos que necesita apuntar en el dispositivo y en cómo validar la conectividad.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas de configuración que provea su proveedor. El GTU30 es compatible con Plaspy desde fábrica y admite LTE CAT1 y 2G en modos TCP y SMS, por lo que la ruta de integración más común es configurar el dispositivo para que reporte al endpoint de Plaspy y confirmar que aparece en la plataforma.

## Resumen de la configuración

Preparar el GTU30 para Plaspy consiste en direccionar su telemetría al servidor compartido de Plaspy, validar el rendimiento de la red y GNSS, y confirmar que el dispositivo es visible y reporta correctamente en la plataforma Plaspy.

- Configure la dirección y el puerto del servidor en el dispositivo para que el rastreador envíe posiciones GNSS y eventos a Plaspy.
- Seleccione el transporte adecuado (UDP o TCP) en el dispositivo si la herramienta de configuración lo requiere.
- Verifique la conectividad celular, el acceso a datos de la SIM y la calidad del fix GNSS antes de ponerlo en servicio.
- Confirme que el GTU30 reporte eventos del acelerómetro, detecciones de trayecto y mensajes de estado a Plaspy para el monitoreo operativo.
- Valide que el dispositivo aparezca en Plaspy y que estén disponibles actualizaciones en vivo y trazas históricas.

## Ajustes de servidor de Plaspy

Use los siguientes ajustes públicos de Plaspy al configurar el GTU30. Estos son los valores concretos que deberá ingresar en el dispositivo mediante la herramienta del fabricante, el conjunto de comandos SMS o el portal de configuración:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support: device may be configured to use UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol and all devices in Plaspy use the same port

## Requisitos típicos antes de la puesta en marcha

- Un GTU30 cargado y correctamente instalado con la batería o la alimentación del vehículo conectada.
- Una SIM celular activa con datos habilitados y la provisión APN necesaria aplicada.
- Acceso al método oficial de configuración Gosafe o a la herramienta del proveedor para el GTU30 (software, comandos SMS o interfaz de configuración).
- El IMEI o número de serie del dispositivo disponible para registro y verificación en Plaspy.
- Una vista despejada para fijar GNSS durante las pruebas iniciales y confirmar bloqueo de satélites y posicionamiento preciso.
- Saber si usará TCP o UDP para el reporte si el dispositivo requiere una selección explícita de transporte.

## Cómo se conecta este rastreador a Plaspy

El GTU30 transmite posiciones GNSS, eventos de acelerómetro y mensajes de estado a través de la red celular hacia Plaspy. Una vez configurado para apuntar al servidor y puerto de Plaspy, la telemetría del dispositivo será recibida y mostrada para seguimiento en tiempo real y análisis de eventos.

- El rastreador envía actualizaciones periódicas de posición GNSS al endpoint de Plaspy en d.plaspy.com o 54.85.159.138 usando el puerto 8888.
- Los eventos basados en acelerómetro, como choque o conducción brusca, se reportan a Plaspy para alertas inmediatas.
- La detección de trayectos y señales similares a ignición se transmiten para soportar funciones de kilometraje y comportamiento del conductor en la plataforma.
- Plaspy recibe los datos del dispositivo por TCP o UDP y usa detección automática de protocolo para interpretar el protocolo entrante del rastreador.
- Una vez activo el reporte, el dispositivo se vuelve visible en Plaspy para ubicación en mapa en vivo, reproducción del historial y reporte de eventos.

## Flujo de configuración común

1. Acceda al método oficial de configuración del Gosafe GTU30 (software del fabricante, conjunto de comandos SMS o portal del proveedor) según lo entregue su suministrador.
2. Ingrese la dirección del servidor de Plaspy usando d.plaspy.com o la IP 54.85.159.138 en el campo de servidor del dispositivo.
3. Configure el puerto del dispositivo en 8888 (Plaspy utiliza este mismo puerto para todos los dispositivos).
4. Elija UDP o TCP como transporte si la configuración del GTU30 exige una selección explícita.
5. Aplique o guarde la configuración y confirme que el dispositivo aceptó los ajustes.
6. Reinicie el GTU30 si las instrucciones del fabricante requieren un reinicio para que los cambios surtan efecto.
7. Valide que el dispositivo reporte a Plaspy revisando su visibilidad en la plataforma y confirmando actualizaciones de posición en vivo y mensajes de evento.

## Comandos de configuración de ejemplo

Los comandos exactos y la sintaxis de configuración del GTU30 los provee Gosafe y pueden variar según el firmware y el método de configuración que utilice (SMS frente a herramienta de PC). Debido a que los conjuntos de comandos del fabricante difieren, utilice las instrucciones oficiales de Gosafe o la herramienta de configuración provista por su proveedor para ingresar los ajustes del servidor Plaspy (d.plaspy.com o 54.85.159.138) y el puerto 8888, y para elegir UDP o TCP cuando corresponda.

Si su herramienta de instalación o proveedor entrega comandos SMS, siga esos formatos SMS exactos de Gosafe en lugar de ejemplos genéricos. Para herramientas de configuración de PC o móvil, ingrese el dominio o la IP del servidor y el puerto 8888 en los campos de configuración del servidor y guarde según la interfaz del proveedor.

## Notas de configuración

- El firmware y las herramientas del proveedor pueden cambiar la sintaxis de los comandos y las opciones disponibles; siempre prefiera la documentación más reciente de Gosafe para comandos exactos.
- Si el GTU30 admite tanto modos SMS como datos, tenga en cuenta que SMS puede usarse como respaldo o para la configuración inicial, pero el reporte de datos sobre LTE/2G y TCP/UDP es necesario para la telemetría completa en Plaspy.
- Elegir TCP frente a UDP puede afectar la fiabilidad y el comportamiento de retransmisión; pruebe ambos modos de transporte en su entorno de instalación si el dispositivo permite la selección.
- Confirme el APN y la conectividad de datos de la SIM antes de considerar un dispositivo en línea; los problemas de datos móviles son la causa más común de fallos en el reporte.
- Mantenga un registro del IMEI y de los detalles de configuración de cada unidad para facilitar la resolución de problemas y el registro en la plataforma.

## Por qué usar Plaspy con esta configuración

Usar el GTU30 con Plaspy ofrece a los operadores un camino rápido hacia la localización en tiempo real, alertas basadas en eventos y telemetría de comportamiento de conducción con un esfuerzo mínimo de instalación. El diseño compacto del GTU30 con respaldo de batería y GNSS multi-constelación, combinado con la ingestión en servidor de Plaspy y la detección automática de protocolos, proporciona visibilidad accionable para flotas, vehículos de alquiler y programas telemáticos.

Learn more about how Plaspy supports device integrations and fleet workflows at https://www.plaspy.com. Manufacturer specifications, firmware behavior, and configuration methods can change over time, so verify the latest device-specific setup details and command sets on the Gosafe website https://gosafesystem.com/ before final deployment.
