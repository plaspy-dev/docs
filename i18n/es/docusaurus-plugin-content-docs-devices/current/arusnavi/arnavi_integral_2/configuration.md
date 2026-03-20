---
slug: /arusnavi/arnavi_integral_2/configuration
id: arnavi_integral_2-configuration
sidebar_label: Configuration
title: Arusnavi - Arnavi Integral 2 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar Arnavi Integral 2 con los ajustes de servidor de Plaspy y pasos prácticos
keywords:
  - Configuración Arusnavi Arnavi Integral 2
  - Configuración de seguimiento Arusnavi
  - Arnavi Integral 2 Plaspy
  - Configuración de servidor Arnavi Integral 2
  - Guía de instalación Arnavi Integral 2
  - Configuración GPS Arnavi Integral 2
  - Compatibilidad rastreador Arusnavi Plaspy
  - Configuración plataforma seguimiento Arnavi Integral 2
  - Configuración dispositivo Arusnavi
  - Guía integración Arnavi Integral 2
---

# Arusnavi - Arnavi Integral 2: Configuración

Esta página explica el contexto público de configuración para usar el rastreador Arusnavi Arnavi Integral 2 con la plataforma Plaspy. Describe los ajustes de servidor compartidos que Plaspy requiere y ofrece orientación práctica para preparar el dispositivo y verificar que sea visible en Plaspy.

Plaspy utiliza ajustes de servidor compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor, así que use esta página como referencia práctica y confirme los pasos específicos con la documentación de Arusnavi cuando sea necesario.

## Resumen de la configuración

Preparar el Arnavi Integral 2 para Plaspy consiste en apuntar el dispositivo al servidor de Plaspy, elegir el transporte correcto y verificar que el rastreador esté reportando como se espera. El objetivo es obtener informes confiables y continuos en Plaspy para que el dispositivo aparezca en la plataforma y envíe eventos y actualizaciones de ubicación.

- Configure el rastreador para enviar datos al endpoint del servidor de Plaspy.
- Seleccione el método de transporte compatible con el dispositivo y con Plaspy.
- Guarde y aplique los ajustes en el dispositivo usando el método oficial de Arusnavi.
- Reinicie o haga un ciclo de energía si el dispositivo lo requiere para comenzar a reportar.
- Valide la conectividad y la aparición del dispositivo en Plaspy.

## Ajustes del servidor Plaspy

Al configurar el Arnavi Integral 2 para comunicarse con Plaspy, utilice los siguientes ajustes públicos del servidor:

- server domain d.plaspy.com
- server IP 54.85.159.138
- port 8888
- transport support for UDP or TCP
- automatic protocol detection in Plaspy

Tenga en cuenta que Plaspy usa el mismo puerto para todos los dispositivos compatibles y detectará automáticamente el protocolo del rastreador una vez que el dispositivo empiece a enviar datos al endpoint del servidor.

## Requisitos típicos antes de comenzar

- Dispositivo encendido e instalado en su ubicación prevista con las conexiones necesarias realizadas.
- Acceso al método de configuración oficial de Arusnavi o a la herramienta del proveedor para el Arnavi Integral 2.
- Capacidad para suministrar al dispositivo una conexión de datos funcional según la instalación del rastreador.
- Conocimiento del IMEI del dispositivo o identificador único para el registro y verificación en la plataforma.
- Acceso a la información de la versión de firmware para seguir los pasos correctos de configuración para esa versión.
- Confirmación de que dispone de los ajustes del servidor Plaspy para ingresarlos durante la configuración.

## Cómo se conecta este rastreador a Plaspy

El Arnavi Integral 2 se configura para enviar ubicación y eventos al endpoint y puerto compartidos de Plaspy. Una vez que el dispositivo envía sus paquetes iniciales a Plaspy, la plataforma identificará el protocolo del rastreador automáticamente y comenzará a procesar los datos para visualización y monitoreo.

- El dispositivo envía actualizaciones periódicas de ubicación e informes de eventos a d.plaspy.com o 54.85.159.138.
- Los datos se envían al puerto 8888, que es el puerto común que Plaspy utiliza para todos los dispositivos.
- Puede elegir UDP o TCP en el dispositivo si se requiere seleccionar el transporte.
- Plaspy detecta automáticamente el protocolo y asigna los datos entrantes al registro del dispositivo.
- Los reportes exitosos hacen que el rastreador sea visible y activo en Plaspy.

## Flujo típico de configuración

1. Acceda al método de configuración oficial de Arusnavi o al software para el Arnavi Integral 2.
2. Ingrese la dirección del servidor Plaspy usando d.plaspy.com o 54.85.159.138 en el campo de servidor del dispositivo.
3. Ajuste el puerto de destino a 8888.
4. Seleccione UDP o TCP como transporte si el dispositivo requiere elegir uno.
5. Aplique o guarde la configuración dentro de la herramienta del fabricante o la interfaz del dispositivo.
6. Reinicie o haga un ciclo de energía del dispositivo si éste lo requiere para comenzar a enviar datos.
7. Valide que el dispositivo reporte a Plaspy y que aparezca en la plataforma.

## Ejemplos de comandos de configuración

Los comandos exactos o la sintaxis de configuración para el Arnavi Integral 2 varían según la herramienta del fabricante, el firmware y el método de instalación. Los dispositivos Arusnavi suelen configurarse con la utilidad de configuración oficial de Arusnavi o la interfaz web del equipo cuando está disponible. Dado que no existe un conjunto universal de comandos publicado aquí, consulte la herramienta de Arusnavi para los campos y comandos correctos. En general usted:

- Abra la herramienta de configuración del fabricante o la interfaz del dispositivo.
- Ubique la sección de configuración de servidor u host.
- Ingrese d.plaspy.com o 54.85.159.138 en el campo de servidor.
- Ingrese 8888 en el campo de puerto.
- Seleccione UDP o TCP si corresponde.
- Guarde y reinicie el dispositivo.

Si recibe una lista de comandos suministrada por el fabricante, aplique esos comandos en el orden recomendado por el proveedor y conserve los marcadores de posición que incluyan.

## Notas de configuración

- Las diferencias de firmware y de herramientas pueden modificar los nombres de menús, formatos de comando y la ubicación de los campos; siempre ajuste los pasos al firmware de su dispositivo.
- Elegir UDP vs TCP depende del soporte del firmware del dispositivo y de las condiciones de la red local; cualquiera de los dos es aceptable porque Plaspy soporta ambos y detecta el protocolo automáticamente.
- Plaspy usa el mismo puerto 8888 para todos los dispositivos; no cambie el puerto a menos que Plaspy soporte lo indique.
- Mantenga un registro del IMEI o identificador del dispositivo para poder confirmar el equipo correcto en Plaspy después de la configuración.
- Revise las notas de lanzamiento del proveedor antes de realizar cambios para asegurarse de que el flujo de configuración coincide con su versión de firmware.

## Por qué usar Plaspy con esta configuración

Usar el Arnavi Integral 2 con Plaspy ofrece una manera práctica de centralizar el seguimiento y monitoreo de activos móviles. Apuntar el dispositivo al endpoint y puerto compartidos de Plaspy permite que las organizaciones reciban actualizaciones de ubicación e informes de eventos en una sola plataforma de monitoreo, simplificando la supervisión de flotas y la visibilidad operativa.

Para obtener más información sobre Plaspy y cómo gestiona la conectividad y el rastreo de dispositivos, visite https://www.plaspy.com. Para detalles específicos de configuración del dispositivo, información de firmware y orientación del fabricante consulte el sitio oficial de Arusnavi https://www.arusnavi.ru. Las especificaciones del fabricante y los métodos de configuración pueden cambiar con el tiempo, por lo que debe verificar las instrucciones más recientes en el sitio de Arusnavi al configurar su dispositivo.
