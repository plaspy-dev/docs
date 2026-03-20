---
slug: /khd/kg200/configuration
id: kg200-configuration
sidebar_label: Configuration
title: KHD - KG200 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el rastreador KHD KG200 y conectarlo a los servidores de Plaspy
keywords:
  - configuración KHD KG200
  - configuración Plaspy KG200
  - configuración rastreador GPS KHD
  - configuración servidor KG200
  - guía KHD KG200
  - configuración rastreo vehicular
  - rastreador gestión de flotas
  - configuración plataforma KG200
  - rastreador GPS Plaspy
  - instalación rastreador KHD
---

# KHD - KG200 Configuración

Esta página describe el contexto público de configuración para usar el rastreador KHD KG200 con Plaspy. Explica los valores de servidor compartidos que Plaspy requiere y detalla los pasos típicos para preparar un KG200 para comunicarse con el backend de Plaspy. El KG200 es un rastreador GNSS diseñado para el seguimiento de vehículos y embarcaciones, y admite comunicación mediante la red de datos GSM así como por SMS para reportes.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador, mientras que los pasos de configuración del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Use este documento como guía práctica de los valores de servidor públicos y del flujo de configuración, y revise los recursos del fabricante KHD para comandos específicos del equipo o notas de firmware.

## Resumen de la configuración

El objetivo de la configuración es dirigir el KG200 hacia el backend de Plaspy, asegurar que el rastreador tenga acceso a la red y confirmar que el dispositivo envía datos de ubicación y eventos a la plataforma. Este proceso prepara el rastreador para ofrecer visibilidad confiable en Plaspy y ayuda a validar la conectividad antes de un despliegue masivo.

- Configure el backend del rastreador con el endpoint y puerto del servidor de Plaspy para que pueda reportar telemetría.
- Verifique que el rastreador tenga una SIM activa y la configuración APN correcta si usa GPRS para el envío de datos.
- Seleccione el modo de transporte que el dispositivo requiera y guarde la configuración en el equipo.
- Valide que el dispositivo sea visible y esté reportando en Plaspy después de la configuración.
- Conserve cualquier registro o códigos de respuesta del fabricante para solucionar problemas de conectividad.

## Ajustes del servidor Plaspy

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP, configure whichever the device requires
- Plaspy automatically detects the tracker protocol and uses the same port for all supported devices

## Requisitos previos antes de la configuración

- Dispositivo encendido y accesible mediante el método de configuración oficial de KHD o la herramienta correspondiente
- Tarjeta SIM activa con plan de datos y ajustes APN correctos si se utiliza GPRS para el envío de datos
- Cobertura de red para datos GSM o entrega por SMS según el método de reporte elegido
- Acceso a instrucciones de firmware o configuración del KG200 proporcionadas por KHD o su distribuidor
- Capacidad para aplicar ajustes mediante software de PC, aplicación móvil o comandos SMS según lo suministre KHD
- Cuenta o detalles de incorporación en la plataforma Plaspy para confirmar la visibilidad del dispositivo tras la configuración

## Cómo se conecta este rastreador a Plaspy

El KG200 envía actualizaciones de ubicación y estado al backend de Plaspy sobre el transporte configurado usando el endpoint y puerto compartidos de Plaspy. Una vez que el rastreador apunta al servidor de Plaspy, la plataforma detectará automáticamente el protocolo y aceptará los reportes entrantes para su procesamiento y representación en el mapa.

- El dispositivo se configura para reportar a d.plaspy.com o a 54.85.159.138 en el puerto 8888
- El rastreador puede usar UDP o TCP en el puerto 8888 según la configuración del equipo
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que no es necesario seleccionar el protocolo en la plataforma
- La telemetría reportada se vuelve visible en Plaspy para seguimiento, alertas de eventos y monitoreo operativo
- Si se usa reporte por SMS, se pueden aplicar comandos de configuración o una dirección de servidor de respaldo conforme a la documentación de KHD

## Flujo de configuración habitual

1. Acceda al método de configuración oficial de KHD o al software provisto para el KG200, como herramientas de PC, aplicaciones móviles o listas de comandos SMS.
2. Ubique los ajustes de servidor o backend en el menú del dispositivo o en la herramienta de configuración.
3. Ingrese el servidor de Plaspy como d.plaspy.com o la IP 54.85.159.138 según su preferencia o indicaciones del proveedor.
4. Establezca el puerto del dispositivo en 8888 como puerto de destino para los reportes.
5. Si el equipo requiere selección de transporte, elija UDP o TCP según la recomendación del instalador o del firmware.
6. Aplique o guarde la configuración en el KG200 y confirme que los ajustes se escribieron correctamente en el dispositivo.
7. Reinicie el equipo si el fabricante lo requiere para activar los nuevos ajustes.
8. Valide que el rastreador reporte a Plaspy y que aparezca en su cuenta o vista de la plataforma Plaspy.

## Ejemplos de comandos de configuración

El KG200 admite múltiples métodos de configuración y los comandos exactos o las secuencias dependen del firmware y las herramientas de KHD. Dado que los comandos del fabricante y las cadenas SMS varían según la revisión y la región, consulte la guía oficial de KHD para la sintaxis exacta de los comandos. Los métodos típicos incluyen software de configuración para PC, aplicaciones móviles o cadenas de comandos SMS facilitadas por KHD.

Si dispone de la lista de comandos oficial de KHD, aplique el mismo dominio de servidor o la IP y los valores de puerto mostrados más arriba en los campos de comando correspondientes. Conserve los valores de marcador de posición como APN o credenciales hasta que los reemplace por ajustes validados de su proveedor.

## Notas de configuración

- Las diferencias de firmware pueden cambiar los menús disponibles de configuración o la sintaxis requerida de los comandos. Verifique siempre la versión de firmware antes de aplicar instrucciones.
- Si elige TCP o UDP, mantenga consistencia entre el dispositivo y las reglas de firewall de la red. Plaspy acepta ambos en el puerto compartido, pero el equipo debe coincidir con el transporte seleccionado.
- La configuración por SMS puede estar disponible como alternativa a la configuración por GPRS. Los comandos SMS dependen del dispositivo y del firmware.
- Preserve los marcadores de posición como APN o credenciales APN al copiar ejemplos de comandos y reemplácelos por sus datos de red.
- El backend de Plaspy utiliza el mismo puerto para todos los dispositivos soportados y detectará automáticamente el protocolo del dispositivo al recibir datos.

## Por qué usar Plaspy con esta configuración

Configurar el KHD KG200 para que reporte a Plaspy ofrece un backend operativo para la visibilidad de flotas y activos, permitiendo a las organizaciones monitorear vehículos y embarcaciones en tiempo real mediante un endpoint de servidor consistente. Usar los ajustes compartidos de Plaspy simplifica el despliegue porque el mismo puerto y la detección automática de protocolo reducen la variación por dispositivo durante la incorporación.

Para obtener más información sobre Plaspy y cómo gestiona la conectividad y el reporte de dispositivos, visite https://www.plaspy.com. Para comandos específicos del equipo, notas de firmware y herramientas de configuración más actualizadas, verifique los detalles con el fabricante en http://www.khd.hk.
