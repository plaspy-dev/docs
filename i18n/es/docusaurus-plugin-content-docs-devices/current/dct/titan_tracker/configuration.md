---
slug: /dct/titan_tracker/configuration
id: titan_tracker-configuration
sidebar_label: Configuration
title: DCT - Titan Tracker Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el DCT Titan Tracker y enviar ubicación y eventos a Plaspy con ajustes de servidor compartidos
keywords:
  - configuración DCT Titan Tracker
  - configuración Titan Tracker para Plaspy
  - configuración servidor rastreador GPS DCT
  - script Syrus Desk Titan Tracker
  - ajustes APN Titan Tracker
  - integración rastreador GPS Plaspy
  - configuración rastreador GPS portátil
  - reporte de eventos Titan Tracker
  - configuración plataforma seguimiento de flotas
  - configuración de red Titan Tracker
---

# DCT - Configuración del Titan Tracker

Esta página documenta el contexto público de configuración para usar el DCT Titan Tracker con Plaspy. Se concentra en los ajustes prácticos del servidor y en un ejemplo de script Syrus SB que puede usar con Syrus Desk o el flujo de gestión de dispositivos para apuntar el Titan Tracker a Plaspy y habilitar el seguimiento en tiempo real y el reporte de eventos.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del tracker. Los pasos exactos que deba realizar en el equipo del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor como Syrus Desk o Pegasus Gateway. A continuación se incluye un ejemplo de script Syrus SB del fabricante para ilustrar un flujo de configuración típico.

## Resumen de configuración

El objetivo de la configuración es preparar el Titan Tracker para comunicarse de forma fiable con Plaspy, garantizar que la conectividad de red funcione y permitir que el dispositivo envíe ubicación, SOS y datos de eventos a la plataforma. Esta página proporciona los detalles del servidor Plaspy que debe usar y un ejemplo práctico de script que puede adaptar.

- Configure el tracker para usar Plaspy como servidor AVL remoto, de modo que posiciones y eventos se entreguen a la plataforma.
- Ingrese los parámetros APN y de conectividad celular para que el dispositivo tenga una conexión de datos válida antes de apuntar a Plaspy.
- Elija el transporte (UDP o TCP) y confirme que el dispositivo guarda y utiliza el puerto seleccionado.
- Verifique que el dispositivo informe a Plaspy y que eventos como SOS, movimiento y entradas aparezcan en la plataforma.
- Use el ejemplo de script Syrus SB provisto como punto de partida al configurar mediante Syrus Desk o las herramientas del fabricante.

## Configuración del servidor Plaspy

- Dominio del servidor d.plaspy.com  
- IP del servidor 54.85.159.138  
- Puerto 8888  
- Soporte de transporte: configure UDP o TCP en el puerto 8888 según la selección de transporte del dispositivo  
- Plaspy detecta automáticamente el protocolo del tracker, por lo que el mismo puerto se usa para todos los dispositivos compatibles

## Requisitos previos a la configuración

- Un Titan Tracker con batería cargada o una fuente de alimentación estable durante la configuración.  
- Una SIM celular activa con datos habilitados y el APN correcto del operador móvil.  
- Acceso a las herramientas oficiales de configuración del fabricante, como Syrus Desk o la plataforma Pegasus Gateway para gestión OTA.  
- Tener a mano los ajustes del servidor Plaspy (d.plaspy.com o 54.85.159.138 y puerto 8888) para ingresarlos en la configuración del dispositivo.  
- Conocer el SKU del modelo (por ejemplo 3G ST-1734G o 4G ST-4GM1) para confirmar compatibilidad de red y requisitos de APN.  
- Planificar la validación de la conectividad del dispositivo en campo y confirmar su visibilidad en Plaspy tras la configuración.

## Cómo se conecta este Titan Tracker a Plaspy

Al configurarlo, el Titan Tracker envía actualizaciones de posición, eventos de alerta y estado al endpoint y puerto compartidos de Plaspy. Plaspy ingiere estos mensajes y los asocia con el registro del dispositivo para que la ubicación, las alertas SOS y los eventos de movimiento sean visibles en paneles y notificaciones.

- El tracker reporta posiciones a d.plaspy.com (o 54.85.159.138) en el puerto 8888 usando UDP o TCP según la configuración del dispositivo.  
- Las activaciones de SOS y pánico se reenvían a Plaspy para reglas de alerta y escalamiento.  
- Los eventos de movimiento e impacto generados por el acelerómetro se envían a Plaspy para registro inmediato y alertas.  
- La conectividad y el estado del dispositivo aparecen en Plaspy para apoyar el mantenimiento y la monitorización del tiempo de actividad.  
- Plaspy utiliza el mismo puerto para todos los dispositivos compatibles y detecta automáticamente el protocolo, lo que simplifica los despliegues con múltiples equipos.

## Flujo habitual de configuración

1. Acceda al método o software de configuración oficial del fabricante, por ejemplo Syrus Desk o la plataforma Pegasus Gateway IoT.  
2. Prepare los valores APN para el dispositivo e ingréselos en la configuración (use los marcadores de posición [apn], [apnu] y [apnp] si el script los requiere).  
3. Introduzca d.plaspy.com o 54.85.159.138 como dirección del servidor remoto en la configuración del dispositivo.  
4. Configure el puerto en 8888 y elija UDP o TCP si el dispositivo requiere seleccionar el transporte.  
5. Aplique o guarde la configuración en la herramienta del fabricante y suba o envíe el script/perfil al Titan Tracker.  
6. Reinicie el dispositivo si el firmware lo requiere para aplicar los nuevos ajustes de red y servidor.  
7. Verifique que el dispositivo reporte a Plaspy comprobando su visibilidad y los eventos recibidos en la plataforma Plaspy.

## Ejemplo de comandos de configuración

El fabricante proporcionó un ejemplo de script Syrus SB que puede guardarse con extensión .tmf y cargarse con Syrus Desk. Los comandos a continuación se presentan en el mismo orden que el script de ejemplo e incluyen marcadores de posición para los ajustes APN.

- Guarde el siguiente texto como un archivo nuevo con extensión .tmf y cárguelo en Syrus Desk para aplicar la configuración.

```text
# Syrus SB script
# Getting Started example
# Delete any previous configuration
>SRT;CONFIG<
>SXADP**U<
# configuring the APN
>SRFA[apn]<
>SRFI<
>SRFL[apnu]<
>SRFP[apnp]<
# The remote AVL server address and port
>SXADP0000d.plaspy.com;8888<
# A Destination Address holding the server destination
>SDA4;P00<
# Time-only Time And Distance signal definition
>STD80300<
# Event triggered by T&D signal
>SED37NV4;TD8+<
# Input report event
>SED05NV4;IP3+<
# end
```

Notas sobre los comandos anteriores:
- >SRT;CONFIG\< se incluye en el script para borrar cualquier configuración anterior; considérelo como un reinicio inicial opcional al comenzar una configuración desde cero.  
- Los marcadores de posición de APN [apn], [apnu] y [apnp] deben reemplazarse por el APN, el usuario APN y la contraseña APN de su operador móvil cuando sea necesario.  
- La dirección del servidor remoto se establece en d.plaspy.com con el puerto 8888 en el comando SXADP. Puede sustituir el dominio por la IP 54.85.159.138 si lo prefiere.  
- El ejemplo usa comandos específicos de Syrus SB para el dispositivo; cargue el .tmf en Syrus Desk y empújelo al dispositivo según las instrucciones del fabricante.

## Notas de configuración

- Las diferencias de firmware y SKU pueden cambiar el conjunto exacto de comandos y su comportamiento; siempre confirme los comandos disponibles para la versión de firmware de su dispositivo antes de aplicar un script.  
- Cuando tenga la opción, elija UDP o TCP según sus necesidades de red y fiabilidad; Plaspy acepta ambos y detecta el protocolo automáticamente en el puerto 8888.  
- Sustituya los marcadores de posición de APN [apn], [apnu] y [apnp] por los valores específicos del operador; dejar los marcadores sin modificar impedirá que el dispositivo establezca una conexión de datos.  
- Use Syrus Desk o la herramienta de gestión de dispositivos del fabricante para importar el script .tmf y revisar cualquier respuesta del dispositivo o los registros de carga.  
- Dado que Plaspy utiliza el mismo puerto para todos los dispositivos compatibles, no necesita un puerto único por dispositivo al apuntar los trackers a Plaspy.

## Por qué usar Plaspy con esta configuración

Usar el Titan Tracker con Plaspy ofrece a las organizaciones visibilidad unificada de ubicación, alertas de seguridad y telemetría de eventos. El botón SOS del tracker, la detección de movimiento e impacto basada en el acelerómetro y su diseño robusto y portátil complementan los paneles y alertas de Plaspy para apoyar la seguridad del personal, el seguimiento de activos y la supervisión operativa.

Learn more about Plaspy and how it integrates with devices like the DCT Titan Tracker at https://www.plaspy.com. Device-specific configuration methods, firmware behavior, and manufacturer details can change over time; verify the latest setup instructions and technical documentation at the manufacturer site https://www.digitalcomtech.com/ before deployment.
