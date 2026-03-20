---
slug: /dct/syrus_satcom_lite/configuration
id: syrus_satcom_lite-configuration
sidebar_label: Configuration
title: DCT - Syrus Satcom Lite Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del DCT Syrus Satcom Lite para Plaspy con ejemplos de scripts Syrus Desk
keywords:
  - Configuración DCT Syrus Satcom Lite
  - Configuración Syrus Satcom Lite
  - Configuración Plaspy
  - Configuración rastreador satelital GPS
  - Script Syrus Desk
  - Integración Pegasus IoT Cloud
  - Ajustes servidor rastreador GPS
  - Seguimiento remoto de activos
  - Configuración de seguimiento de flotas
  - Rastreador satcom Plaspy
---

# DCT - Configuración del Syrus Satcom Lite

Esta página describe el contexto público de configuración para usar el DCT Syrus Satcom Lite con Plaspy. Se concentra en los pasos prácticos y los ajustes de servidor que debe aplicar para que el equipo reporte ubicación y telemetría a Plaspy, permitiendo su monitoreo y la generación de alertas. Cuando está disponible, se incluyen fragmentos de ejemplo de scripts Syrus Desk del fabricante para mostrar un flujo de configuración típico.

Plaspy utiliza ajustes de servidor compartidos para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas de configuración que use el proveedor, como Syrus Desk. Use esta guía para preparar el dispositivo para Plaspy y consulte la documentación del fabricante para detalles específicos del equipo.

## Resumen de la configuración

El objetivo de este proceso es dejar al Syrus Satcom Lite listo para comunicarse de forma confiable con Plaspy, de modo que la telemetría y los eventos aparezcan en la plataforma. Cuando esté disponible, Syrus Desk puede cargar un script .tmf que aplique una secuencia de comandos de configuración, incluidos los ajustes de APN y la definición del servidor remoto para Plaspy.

- Cargue un script .tmf compatible con Syrus Desk para aplicar los comandos de configuración en secuencia.
- Configure el acceso a la red (APN y credenciales cuando aplique) para que el dispositivo pueda alcanzar el servidor de Plaspy.
- Defina el servidor remoto de destino en Plaspy y confirme la selección del transporte (UDP o TCP) si el equipo lo solicita.
- Active y verifique las definiciones de reporte de eventos para que movimiento y entradas se envíen a Plaspy.
- Valide que el dispositivo sea visible en Plaspy y que llegue la actualización de ubicaciones y las alertas.

## Ajustes del servidor Plaspy

- Server domain: d.plaspy.com  
- Server IP: 54.85.159.138  
- Port: 8888  
- Transport: device may be configured using UDP or TCP on port 8888  
- Plaspy automatically detects the tracker protocol when the device connects

## Requisitos habituales antes de la configuración

- Acceso a la herramienta oficial del fabricante, como Syrus Desk, para cargar scripts o enviar comandos.  
- Equipo encendido y operativo con batería cargada para la configuración inicial.  
- Ruta de red válida (APN y configuración de SIM) cuando el equipo requiera acceder a endpoints IP. El script de ejemplo usa marcadores de posición para APN.  
- Conocer si su despliegue necesita transporte UDP o TCP para seleccionarlo durante la configuración si el dispositivo lo solicita.  
- Tener la información del servidor Plaspy (d.plaspy.com o 54.85.159.138 y puerto 8888) lista para ingresar en el dispositivo.  
- Acceso administrativo o credenciales necesarias para sus herramientas de instalación y acceso a manuales de instalación de DCT.

## Cómo se conecta este equipo a Plaspy

El Syrus Satcom Lite se configura para enviar telemetría de posición y eventos a un endpoint compartido del servidor Plaspy, de modo que Plaspy pueda ingerir y mostrar los datos junto con otros activos de la flota. Plaspy usa el mismo puerto para todos los dispositivos soportados y detecta automáticamente el protocolo del equipo cuando se conecta.

- El dispositivo reporta GPS y los eventos de sensores configurados a d.plaspy.com o a la IP de Plaspy en el puerto 8888.  
- El transporte puede elegirse como UDP o TCP durante la configuración; cualquiera de las dos opciones usa el puerto 8888.  
- Plaspy ingiere actualizaciones de posición, eventos de movimiento y cualquier reporte auxiliar habilitado para su visualización y alertas.  
- Una vez que el rastreador se conecta al endpoint de Plaspy, los datos están disponibles para reglas, notificaciones e informes históricos en la plataforma.  
- La detección automática de protocolo de Plaspy elimina la necesidad de elegir manualmente el protocolo en muchos casos, siempre que la dirección del servidor y el puerto estén configurados correctamente.

## Flujo común de configuración

1. Acceda al método o software oficial del fabricante (por ejemplo Syrus Desk) para preparar un script o aplicar ajustes.  
2. Ingrese el servidor de Plaspy como d.plaspy.com o la IP 54.85.159.138 en el campo de dirección del servidor.  
3. Establezca el puerto de destino en 8888 (Plaspy utiliza el mismo puerto para todos los equipos).  
4. Seleccione UDP o TCP si el dispositivo requiere elegir el transporte durante la configuración.  
5. Configure el APN y las credenciales de conectividad necesarias usando los marcadores de posición o los valores de su operador.  
6. Aplique o guarde la configuración y cargue el archivo .tmf si utiliza Syrus Desk.  
7. Reinicie el equipo si el firmware o la herramienta lo requieren.  
8. Valide que el dispositivo reporte a Plaspy comprobando la conexión del equipo y las últimas actualizaciones de posición en la plataforma.

## Comandos de configuración de ejemplo

El fabricante proporciona un script de ejemplo para Syrus SB que puede guardarse como archivo .tmf y cargarse con Syrus Desk. Los comandos a continuación se muestran en el orden en que aparecen en el ejemplo. Reemplace los marcadores de APN por los valores de su operador o red cuando sea necesario.

- Guarde el siguiente contenido como un archivo de texto plano con extensión .tmf y cárguelo usando Syrus Desk.

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

Notas sobre los comandos y los marcadores de posición:
- [apn] es un marcador para la cadena APN que su SIM o pasarela satelital requiere.  
- [apnu] y [apnp] son marcadores para el usuario y la contraseña del APN si su red requiere autenticación.  
- La línea que comienza con SXADP0000 establece el servidor remoto en d.plaspy.com con el puerto 8888. También puede usar la IP 54.85.159.138 si prefiere direccionamiento por IP.  
- El comando SRT;CONFIG\< parece borrar la configuración previa; trátelo como opcional o como un paso inicial al preparar un equipo. Confirme con la documentación del fabricante cuándo ejecutar comandos de reset o borrado.

## Notas sobre la configuración

- Las versiones de firmware y de las herramientas pueden cambiar la sintaxis o el comportamiento de los comandos; siempre confirme la sintaxis del script con la versión de Syrus Desk y el firmware del dispositivo que esté usando.  
- Elija UDP o TCP según las necesidades de su instalación; ambos son soportados por Plaspy en el puerto 8888, pero las condiciones de red y los enlaces satelitales pueden favorecer un transporte sobre el otro.  
- Todos los dispositivos en Plaspy usan el mismo puerto (8888) y la plataforma detecta automáticamente el protocolo del rastreador, así que asegúrese primero de que la dirección del servidor y el puerto sean correctos.  
- Si usa un script .tmf, verifique la codificación del archivo y los finales de línea para que coincidan con las expectativas de Syrus Desk y evitar errores de parseo.  
- Mantenga a mano la documentación del fabricante y las notas de versión de DCT para detalles sobre definiciones de señales y eventos incluidos en el script de ejemplo.

## Por qué usar Plaspy con esta configuración

Configurar el DCT Syrus Satcom Lite para reportar a Plaspy extiende la visibilidad en tiempo real de activos que operan fuera de la cobertura celular, manteniendo la telemetría de flota y activos centralizada. Con el endpoint compartido de Plaspy y la detección automática de protocolo, los equipos de operaciones pueden consolidar rastreadores satelitales y terrestres en un único flujo de monitoreo para alertas, informes históricos y paneles operativos.

Para saber más sobre Plaspy y cómo puede integrar rastreadores con capacidad satelital como el Syrus Satcom Lite, visite https://www.plaspy.com. Para detalles actualizados sobre configuración específica del dispositivo, notas de firmware y documentación completa del producto, consulte la información del fabricante en https://www.digitalcomtech.com/ ya que los métodos y el comportamiento del equipo pueden cambiar con el tiempo.
