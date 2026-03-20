---
slug: /gpsmarker/m80/configuration
id: m80-configuration
sidebar_label: Configuration
title: GPSMarker - M80 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del GPSMarker M80 para conectarlo a Plaspy, con ajustes de servidor y flujo de instalación
keywords:
  - Configuración GPSMarker M80
  - Instalación GPSMarker M80
  - GPSMarker M80 Plaspy
  - Configuración rastreador GPS Plaspy
  - Configuración servidor M80
  - Configuración plataforma seguimiento M80
  - Guía configuración GPSMarker
  - Rastreo de vehículos M80
  - Rastreador de activos M80
  - Configuración rastreador Plaspy
---

# GPSMarker - Configuración del M80

Esta página describe el contexto público de configuración para usar el rastreador GPSMarker M80 con la plataforma Plaspy. Explica los ajustes públicos del servidor de Plaspy a los que debe apuntar el dispositivo, las condiciones habituales previas a la configuración y el flujo práctico para poner un M80 en línea y que reporte ubicación y eventos a Plaspy. Los detalles reflejan la información pública de integración y las características del M80 publicadas por el fabricante.

Plaspy utiliza los mismos ajustes de servidor compartidos para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta. Los pasos de configuración en el lado del fabricante para el M80 pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Use esta guía para preparar y aplicar los ajustes públicos del servidor y luego confirme el comportamiento del dispositivo con las herramientas del fabricante y la verificación en Plaspy.

## Resumen de la configuración

El objetivo de la configuración es apuntar el M80 al servidor de Plaspy y confirmar que reporta de forma fiable para que el dispositivo aparezca y se actualice en la interfaz de Plaspy. Para el M80 esto normalmente implica actualizar el endpoint del dispositivo, el transporte y cualquier parámetro de conectividad requerido por el rastreador y el plan de datos SIM.

- Configure el rastreador para que envíe datos al endpoint de Plaspy para que los mensajes de posición y eventos lleguen a la plataforma
- Seleccione el método de transporte apropiado si el dispositivo requiere elegir entre UDP o TCP
- Valide la conectividad GPRS o SMS según cómo esté configurado el M80 para la transmisión de datos
- Aplique y guarde los ajustes en el dispositivo y reinícielo si el procedimiento del fabricante lo requiere
- Confirme que el dispositivo es visible en Plaspy y que reporta la ubicación y los eventos de sensores esperados

## Ajustes de servidor de Plaspy

Use los siguientes ajustes públicos del servidor de Plaspy al configurar el M80. Plaspy requiere el mismo puerto para todos los dispositivos y detecta automáticamente el protocolo del rastreador cuando se conecta.

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support: UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol when the device connects

## Requisitos habituales antes de la configuración

- Unidad M80 con batería cargada o alimentación correcta y una instalación estable en su ubicación montada
- Tarjeta Micro SIM con un plan de datos activo o capacidad SMS según lo requiera la configuración elegida
- Acceso al método o software oficial de configuración GPSMarker proporcionado por el fabricante
- Conocimientos básicos del APN, usuario o contraseña requeridos por el plan SIM si el dispositivo usa GPRS
- Forma de reiniciar o cortar y restaurar la alimentación del dispositivo después de aplicar la configuración
- Acceso a la cuenta Plaspy o instrucciones de onboarding para verificar que el dispositivo aparezca una vez que comience a reportar

## Cómo se conecta este rastreador a Plaspy

Cuando está configurado, el M80 envía sus mensajes de ubicación, estado y eventos al endpoint y puerto del servidor de Plaspy para que el dispositivo sea visible en la plataforma. Plaspy procesa los mensajes entrantes e identifica automáticamente el protocolo del rastreador, por lo que no se requiere seleccionar un protocolo adicional en Plaspy.

- El rastreador se configura para reportar al endpoint compartido de Plaspy en d.plaspy.com o 54.85.159.138
- Todos los dispositivos usan el puerto 8888 en Plaspy, así que use ese mismo puerto al configurar el M80
- El M80 puede usar transporte UDP o TCP para transmitir datos según la configuración y las condiciones de red
- Plaspy detecta automáticamente el protocolo del rastreador y analiza los paquetes entrantes para identificar el dispositivo y extraer telemetría
- Una vez que reporta, la ubicación y los eventos de sensores configurados están disponibles en Plaspy para monitoreo y alertas

## Flujo de configuración común

1. Acceda al método o software oficial de configuración del GPSMarker M80 que proporcione el fabricante
2. En los ajustes del dispositivo, ingrese el servidor de Plaspy por dominio d.plaspy.com o por IP 54.85.159.138
3. Configure el puerto del dispositivo en 8888, que es el puerto compartido que Plaspy espera para todos los dispositivos
4. Seleccione UDP o TCP como transporte si el dispositivo requiere elegir uno
5. Aplique o guarde la configuración en el dispositivo usando la herramienta del fabricante o comandos SMS cuando estén soportados
6. Reinicie o ciclé la alimentación del M80 si el procedimiento de configuración exige un reinicio para aplicar los nuevos ajustes
7. Valide que el dispositivo reporte a Plaspy comprobando la visibilidad del dispositivo y los datos recientes en la plataforma Plaspy

## Ejemplos de comandos de configuración

El fabricante del M80 proporciona varios métodos para configurar el rastreador, que pueden incluir software para PC, comandos SMS o configuración basada en GPRS. Los comandos exactos y la sintaxis pueden variar según el firmware; utilice la documentación oficial de GPSMarker para obtener los formatos precisos. Dado que los conjuntos de comandos del fabricante difieren entre versiones de firmware, consulte el manual de configuración de GPSMarker para los comandos SMS o de software exactos para establecer servidor, puerto, transporte y valores de APN.

## Notas de configuración

- Las diferencias de firmware pueden cambiar la sintaxis de los comandos o la disposición de los menús. Verifique siempre la versión de firmware del M80 antes de aplicar comandos.
- Algunas instalaciones usan comandos SMS, mientras que otras utilizan el software de PC del fabricante a través de un enlace serial o de red. Use el método recomendado para la revisión de su dispositivo.
- Están disponibles opciones de transporte TCP y UDP; elija el transporte que mejor se ajuste a la fiabilidad de su red y a las recomendaciones del operador.
- Si el M80 admite actualizaciones OTA de firmware vía GPRS, confirme que su plan SIM permite estas actualizaciones para evitar un uso de datos inesperado.
- Mantenga un registro de los ajustes aplicados y de cualquier cambio en la configuración de APN o SIM para facilitar la resolución de problemas en el futuro.

## Por qué usar Plaspy con esta configuración

Usar el GPSMarker M80 con Plaspy ofrece a las organizaciones un camino sencillo para integrar hardware de rastreo económico y de larga duración en una plataforma de monitoreo unificada. Apuntar el M80 a Plaspy con los ajustes de servidor compartidos simplifica el onboarding y permite que Plaspy gestione la detección de protocolo, de modo que los dispositivos sean visibles y reporten telemetría sin configuración adicional de protocolos en la plataforma.

To learn more about Plaspy and platform capabilities visit https://www.plaspy.com. For the latest device specific setup instructions, firmware notes, and command references verify details with the manufacturer at https://gpsmarker.ru/ since device configuration methods and firmware behavior can change over time.
