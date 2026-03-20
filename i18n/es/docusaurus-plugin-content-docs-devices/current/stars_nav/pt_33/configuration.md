---
slug: /stars_nav/pt_33/configuration
id: pt_33-configuration
sidebar_label: Configuration
title: Stars Nav - PT-33 Configuration
sidebar_class_name: menu_item_tracker
description: Guía de configuración y servidor para el rastreador personal Stars Nav PT-33 compatible con la plataforma Plaspy
keywords:
  - Configuración Stars Nav PT-33
  - Configuración PT-33 Plaspy
  - Configuración servidor PT-33
  - Configuración rastreador Stars Nav
  - Configuración plataforma GPS PT-33
  - Configuración dispositivo Plaspy
  - Configuración software seguimiento PT-33
  - Integración rastreador personal Plaspy
  - Configuración telemetría PT-33
  - Configuración geocerca PT-33
---

# Stars Nav - Configuración del PT-33

Esta página documenta la información pública de configuración necesaria para usar el rastreador personal Stars Nav PT-33 con la plataforma Plaspy. Se concentra en los datos prácticos de servidor y flujo de trabajo para dirigir el PT-33 hacia Plaspy, de modo que la ubicación en tiempo real, las alertas y los registros almacenados sean visibles en el sistema. La información aquí está pensada para usuarios técnicos que preparan dispositivos para integración y para instaladores que requieren los detalles compartidos de conexión a Plaspy.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el dispositivo establece conexión. Los pasos exactos en el lado del fabricante y las opciones disponibles pueden variar según la versión de firmware del PT-33, la revisión de hardware, el tipo de instalación y las herramientas del proveedor; por ello combine siempre los ajustes públicos de Plaspy de esta guía con los métodos oficiales de configuración del PT-33 proporcionados por el fabricante.

## Resumen de la configuración

El objetivo de este proceso es apuntar el PT-33 a Plaspy y confirmar una comunicación fiable para que el dispositivo reporte ubicación, alertas y datos almacenados a la plataforma. La configuración se centra en actualizar el servidor/host y el puerto del dispositivo, seleccionar el transporte si fuera necesario, guardar la configuración en el dispositivo y confirmar que Plaspy recibe los primeros reportes.

- Configure el PT-33 para enviar datos al endpoint del servidor Plaspy.
- Seleccione el protocolo de transporte (UDP o TCP) cuando el dispositivo requiera elección.
- Guarde y aplique la configuración usando la herramienta de Stars Nav o el método soportado.
- Reinicie o haga un ciclo de energía del dispositivo si el fabricante lo recomienda para aplicar cambios.
- Valide que Plaspy recibe los mensajes del dispositivo y que este aparece en el panel de Plaspy.

## Ajustes del servidor de Plaspy

Use los siguientes valores públicos de conexión de Plaspy al configurar el PT-33. Plaspy utiliza el mismo puerto para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador al conectarse.

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol when the device connects

## Requisitos previos habituales

- Un dispositivo PT-33 cargado y operativo con acceso al método de configuración del fabricante.
- Una SIM activa y conectividad celular si el dispositivo es un rastreador GSM; la SIM debe tener datos habilitados y estar registrada en una red compatible con el dispositivo.
- Acceso al software de configuración de Stars Nav, al listado de comandos SMS o a la herramienta web/escritorio recomendada por el proveedor.
- Identificadores básicos del dispositivo, como IMEI o número de serie, para poder emparejarlo en Plaspy después de la primera conexión.
- Capacidad para reiniciar o hacer un ciclo de energía del dispositivo tras guardar los cambios de configuración.
- Acceso administrativo en Plaspy para confirmar que el dispositivo aparece y comienza a reportar.

## Cómo se conecta este rastreador a Plaspy

Al configurarse para Plaspy, el PT-33 envía sus reportes de posición GPS, mensajes de alerta y registros almacenados al endpoint y puerto compartidos de Plaspy. Plaspy ingiere esos reportes, determina automáticamente el protocolo del rastreador y presenta los datos del dispositivo en la plataforma para seguimiento en vivo y revisión histórica.

- El PT-33 se configura para reportar al endpoint del servidor Plaspy d.plaspy.com o a la IP 54.85.159.138.
- Todo el tráfico del dispositivo se dirige al puerto 8888, el puerto compartido que Plaspy usa para los rastreadores compatibles.
- El rastreador puede usar transporte UDP o TCP para enviar mensajes según la configuración del dispositivo.
- Plaspy detecta automáticamente el protocolo del rastreador y asigna los mensajes entrantes a la instancia de dispositivo correcta.
- Una vez que llegan los mensajes, Plaspy procesa los reportes de posición, alerta y registros almacenados para mostrarlos en mapas, reportes y alertas.

## Flujo de trabajo típico de configuración

1. Acceda al método oficial de configuración del Stars Nav PT-33 usando la herramienta del proveedor, comandos SMS o la interfaz web del dispositivo según la documentación del fabricante.
2. Ingrese el servidor de Plaspy como d.plaspy.com o establezca la IP del servidor en 54.85.159.138 en el campo server/host del dispositivo.
3. Configure el puerto del dispositivo en 8888, teniendo en cuenta que Plaspy usa el mismo puerto para todos los dispositivos.
4. Elija UDP o TCP como transporte si el PT-33 requiere seleccionar el protocolo.
5. Aplique o guarde los cambios de configuración en la herramienta del dispositivo.
6. Reinicie o haga un ciclo de energía del PT-33 si la documentación o la herramienta del fabricante lo indica para aplicar los nuevos ajustes.
7. Valide que el dispositivo reporte a Plaspy revisando los datos entrantes en la plataforma y confirmando que el dispositivo aparece en línea.

## Ejemplos de comandos de configuración

El PT-33 soporta métodos de configuración específicos del proveedor, como comandos SMS, una utilidad de configuración para PC o una interfaz web. Los comandos exactos y la sintaxis varían según el firmware y la herramienta del fabricante, por lo que debe incluir los ajustes del servidor Plaspy al usar esos métodos. Dado que el firmware y los conjuntos de comandos del fabricante difieren, consulte la documentación de Stars Nav para la lista precisa de comandos.

Cuando use una interfaz de configuración que solicite valores de servidor y transporte, proporcione:
- Server: d.plaspy.com or 54.85.159.138
- Port: 8888
- Transport: UDP or TCP

Si dispone de una guía de configuración por SMS de Stars Nav, incluya los mismos valores anteriores en los comandos SMS correspondientes. Mantenga cualquier marcador de posición provisto por ejemplos del fabricante como {{apn}}, {{apnu}} o {{apnp}} cuando estén presentes y reemplácelos por las credenciales APN de su operador de red.

## Notas sobre la configuración

- Las variaciones de firmware pueden cambiar los nombres de comandos y los menús de configuración; verifique la versión de firmware del PT-33 antes de aplicar ajustes.
- TCP y UDP funcionan con Plaspy; elija el transporte que su instalación y firmware recomienden. Plaspy aceptará cualquiera de los dos en el puerto 8888.
- Debido a que Plaspy usa un puerto compartido y detección automática del protocolo, la mayoría de las configuraciones requieren únicamente el host/IP del servidor y el puerto correctos.
- Mantenga un registro del IMEI o del número de serie del dispositivo para poder relacionar el PT-33 con su entrada en Plaspy después de la conexión inicial.
- Consulte la documentación de Stars Nav para formatos de comandos SMS, comportamientos por defecto u opciones de reinicio al momento de solucionar problemas.

## Por qué usar Plaspy con esta configuración

Usar el PT-33 con Plaspy permite a las organizaciones obtener visibilidad sencilla de los datos del rastreador personal en una plataforma centralizada. El diseño compacto del PT-33, su amplio registro de rutas a bordo y los eventos de botón de pánico se integran de forma clara en los flujos de trabajo de Plaspy, de modo que los equipos pueden monitorear ubicaciones en tiempo real, recibir alertas y acceder a trayectos históricos para revisión e informes.

Para saber más sobre Plaspy y cómo aparecen los dispositivos compatibles en la plataforma visite https://www.plaspy.com. Para métodos de configuración específicos por dispositivo, comportamiento de firmware y detalles del fabricante, verifique siempre la información más reciente en el sitio oficial de Stars Nav http://www.starsnav.com/
