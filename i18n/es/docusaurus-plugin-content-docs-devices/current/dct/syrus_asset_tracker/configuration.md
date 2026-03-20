---
slug: /dct/syrus_asset_tracker/configuration
id: syrus_asset_tracker-configuration
sidebar_label: Configuration
title: DCT - Syrus Asset Tracker Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración para integrar el DCT Syrus Asset Tracker con el servidor Plaspy
keywords:
  - Configuración DCT Syrus Asset Tracker
  - Configuración Syrus Asset Tracker Plaspy
  - Configuración servidor Syrus Asset Tracker
  - Integración rastreador GPS Plaspy
  - Guía de configuración de rastreador de activos
  - Script .tmf Syrus Desk
  - Configuración de dispositivo Plaspy
  - Monitoreo de activos a largo plazo
  - Configuración de alertas por movimiento
  - Configuración Syrus asset tracker 4G
---

# DCT - Syrus Asset Tracker: Configuración

Esta página describe el contexto público de configuración para usar el DCT Syrus Asset Tracker con Plaspy. Explica los ajustes compartidos del servidor Plaspy que debe aplicar en el tracker y muestra ejemplos de comandos de script Syrus SB que se usan habitualmente para provisionar el dispositivo y reportar a Plaspy. El contenido está pensado para ayudar a usuarios técnicos a preparar un Syrus Asset Tracker para conectividad y visibilidad en Plaspy, manteniéndose alineado con la documentación pública del fabricante.

Plaspy utiliza ajustes de servidor compartidos entre dispositivos compatibles y detecta automáticamente el protocolo del tracker, pero los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor que utilice. Cuando esté disponible, esta página incluye un ejemplo de script compatible con Syrus Desk y recomendaciones prácticas para que el dispositivo reporte a Plaspy rápidamente.

## Resumen de la configuración

Esta sección explica el propósito práctico del proceso de configuración y lo que logrará al aplicar los ajustes descritos. El objetivo principal es dejar al Syrus Asset Tracker listo para enviar de forma fiable posiciones y eventos a Plaspy para su mapeo, alertas e informes históricos.

- Apuntar el dispositivo al endpoint del servidor Plaspy para que la telemetría llegue a su cuenta.
- Configurar los marcadores de APN para que el tracker tenga una conexión de datos celulares activa.
- Habilitar o cargar las reglas de reporte y definiciones de eventos para generar informes basados en movimiento y tiempo.
- Guardar y aplicar la configuración para que el dispositivo comience a transmitir a Plaspy en el puerto compartido.
- Validar que el dispositivo aparece en Plaspy y envía actualizaciones de posición y reportes de eventos.

## Ajustes del servidor Plaspy

Al configurar el Syrus Asset Tracker para Plaspy, use los siguientes ajustes públicos del servidor exactamente tal como se muestran:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol

Tenga en cuenta que Plaspy usa el mismo puerto para todos los dispositivos compatibles y que la plataforma detectará el protocolo adecuado una vez que el dispositivo se conecte.

## Requisitos típicos antes de la configuración

- Una unidad Syrus Asset Tracker alimentada y accesible, con batería o alimentación temporal adecuada para realizar la configuración.
- Acceso a las herramientas oficiales de configuración DCT, como Syrus Desk, para cargar scripts o archivos de provisioning.
- Un plan de datos celulares válido y una tarjeta SIM configurada para el dispositivo cuando aplique.
- Los ajustes APN correctos para la red celular que vaya a usar (en los ejemplos se muestran marcadores de posición).
- Acceso a la información de su cuenta Plaspy para confirmar la visibilidad tras la conexión del dispositivo.
- Un área de prueba o un procedimiento de despliegue para validar el reporte de posición y eventos después de la configuración.

## Cómo se conecta este tracker a Plaspy

El Syrus Asset Tracker envía posiciones GPS y reportes de eventos a través de la red celular al endpoint y puerto del servidor Plaspy. Una vez aplicados los ajustes de servidor, Plaspy recibe e interpreta automáticamente el protocolo del dispositivo para que el tracker sea visible en la plataforma sin valores de servidor por dispositivo.

- El tracker envía telemetría basada en tiempo y distancia o en eventos al endpoint d.plaspy.com en el puerto 8888.
- Los eventos de movimiento y entradas se definen en el dispositivo y se transmiten a Plaspy para alertas y mapeo.
- Los ajustes de APN y de red permiten al dispositivo establecer una sesión IP que envía paquetes UDP o TCP a Plaspy.
- Plaspy detecta el protocolo del tracker e ingiere los mensajes para que los operadores puedan monitorear ubicación y alarmas.
- Después de la configuración, el dispositivo debería aparecer en Plaspy y comenzar a enviar actualizaciones de posición según las reglas de reporte cargadas.

## Flujo de trabajo típico de configuración

1. Acceda al método de configuración oficial del fabricante o al software como Syrus Desk.
2. Prepare o cree un nuevo script de configuración o archivo plantilla (Syrus Desk admite archivos .tmf).
3. Introduzca la dirección del servidor Plaspy usando d.plaspy.com o 54.85.159.138 como destino remoto.
4. Configure el puerto en 8888 y elija UDP o TCP si el dispositivo requiere selección de transporte.
5. Configure los marcadores de APN y cualquier campo de autenticación que requiera su red y aplique o guarde la configuración.
6. Reinicie o haga reboot del dispositivo si la herramienta del fabricante lo solicita para aplicar los nuevos ajustes.
7. Valide que el dispositivo reporta a Plaspy revisando la lista de dispositivos y la telemetría reciente en su cuenta Plaspy.

Si usa el flujo de trabajo con Syrus Desk, puede guardar un script .tmf y cargarlo directamente en la herramienta para provisionar múltiples unidades de forma consistente.

## Comandos de ejemplo para la configuración

Puede copiar y pegar este script en un archivo de texto nuevo, guardarlo con extensión .tmf y cargarlo con Syrus Desk. Los comandos a continuación son el ejemplo público de script Syrus SB proporcionado para la configuración inicial. Los marcadores de posición se han preservado donde corresponde.

Full script (preserve order when loading):

```
#Syrus SB script
#Getting Started example
#Delete any previous configuration
>SRT;CONFIG<
>SXADP**U<
#configuring the APN
>SRFA[apn]<
>SRFI<
>SRFL[apnu]<
>SRFP[apnp]<
#The remote AVL server address and port
>SXADP0000d.plaspy.com;8888<
#A Destination Address holding the server destination
>SDA4;P00<
#Time-only Time And Distance signal definition
>STD80300<
#Event triggered by T&D signal
>SED37NV4;TD8+<
#Input report event
>SED05NV4;IP3+<
#end
```

Extractos clave de comandos y breves explicaciones:

- Borrar configuración previa (use esto al empezar desde cero o al reprovisionar):
```
>SRT;CONFIG<
>SXADP**U<
```

- Establecer valores APN (reemplace los marcadores por el APN de su red y opcionalmente usuario/clave):
```
>SRFA[apn]<
>SRFL[apnu]<
>SRFP[apnp]<
```
Explicación: [apn] es el APN de la red móvil. [apnu] y [apnp] son el usuario y la contraseña de APN opcionales si su operador los requiere.

- Apuntar el dispositivo al servidor y puerto de Plaspy:
```
>SXADP0000d.plaspy.com;8888<
```
Este comando establece la dirección del servidor AVL remoto en d.plaspy.com y el puerto en 8888.

- Crear un bloque de dirección de destino para el servidor:
```
>SDA4;P00<
```

- Definir una regla de reporte por tiempo y distancia y los eventos asociados:
```
>STD80300<
>SED37NV4;TD8+<
>SED05NV4;IP3+<
```
Estas entradas configuran una señal de tiempo y distancia solo por tiempo y fijan eventos para la señal T&D y un evento de reporte de entrada. No modifique estos comandos a menos que comprenda la sintaxis SB de Syrus para definiciones de evento.

Si tiene dudas sobre algún comando o marcador de posición, consulte la documentación oficial de Syrus Desk o el soporte técnico de DCT antes de aplicar scripts en dispositivos de producción.

## Notas de configuración

- Las revisiones de firmware y hardware pueden cambiar los comandos SB disponibles y su sintaxis; confirme siempre la compatibilidad de los comandos con la versión de firmware del dispositivo.
- Use Syrus Desk o la herramienta oficial de provisioning de DCT para cargar scripts .tmf y lograr despliegues por lotes de manera consistente.
- Elija UDP o TCP según la preferencia del instalador y las características de la red; Plaspy acepta ambos transportes en el puerto 8888 y detectará el protocolo automáticamente.
- Reemplace los marcadores APN [apn], [apnu] y [apnp] por los valores correctos de su operador celular antes de cargar el script.
- Los comandos para "borrar configuración previa" son útiles para despliegues nuevos o reprovisionamiento, pero son opcionales si está actualizando una configuración existente.

## Por qué usar Plaspy con esta configuración

Usar el DCT Syrus Asset Tracker con Plaspy brinda a las organizaciones monitoreo confiable a largo plazo para activos sin alimentación y expuestos. Con los ajustes de servidor compartidos y la detección automática de protocolo, provisionar el tracker para reportar ubicaciones y eventos de movimiento es sencillo y replicable en muchas unidades, facilitando operaciones eficientes de flotas y activos.

Learn more about Plaspy and how it supports asset tracking workflows at https://www.plaspy.com. For the latest device specific configuration methods, firmware behavior, and manufacturer documentation verify details on the DCT website at https://www.digitalcomtech.com/ before deploying to production.
