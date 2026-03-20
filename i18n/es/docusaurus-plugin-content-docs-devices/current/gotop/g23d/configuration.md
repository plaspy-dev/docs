---
slug: /gotop/g23d/configuration
id: g23d-configuration
sidebar_label: Configuration
title: GOTOP - G23D Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar GOTOP G23D y enviarlo a los servidores de Plaspy con pasos prácticos de instalación y verificación
keywords:
  - GOTOP G23D
  - configuración GOTOP G23D
  - instalación GOTOP G23D
  - G23D Plaspy
  - configuración rastreador Plaspy
  - rastreador GPS GOTOP
  - configuración servidor G23D
  - rastreo vehicular G23D
  - gestión de flotas GOTOP
  - guía instalación G23D
---

# GOTOP - Configuración del G23D

Esta página recopila la información pública necesaria para usar el rastreador GOTOP G23D con Plaspy. Incluye los ajustes de servidor y el flujo de trabajo prácticos necesarios para apuntar un dispositivo G23D a Plaspy y que pueda ser detectado y monitoreado en la plataforma. Utilice esta guía como referencia para preparar el equipo antes de conectarlo a Plaspy.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, pero los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. La orientación a continuación se centra en el endpoint público de Plaspy y en el proceso general para configurar el rastreador y que reporte correctamente a la plataforma.

## Resumen de la configuración

Este proceso prepara el G23D para comunicarse con el servidor de Plaspy y que la información de ubicación y estado aparezca en su cuenta de Plaspy. Se enfoca en definir el endpoint del servidor, el transporte y el puerto, validar la conectividad y confirmar que el dispositivo sea visible en Plaspy.

- Configure el dispositivo para que reporte al endpoint del servidor de Plaspy y al puerto requerido.
- Seleccione el modo de transporte del dispositivo si el rastreador solicita elegir entre UDP y TCP.
- Guarde o aplique la configuración y reinicie el rastreador si el procedimiento del fabricante lo requiere.
- Verifique que el dispositivo envíe datos y aparezca en línea en Plaspy.
- Solucione problemas de conectividad con las herramientas del fabricante y confirme el estado de la SIM y de la alimentación según sea necesario.

## Ajustes del servidor Plaspy

Use los siguientes ajustes públicos de Plaspy al configurar el GOTOP G23D:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- All devices in Plaspy use the same port
- Plaspy automatically detects the tracker protocol so no protocol selection is required on the platform side

Incluya estos valores en la configuración del dispositivo según la herramienta del fabricante que esté utilizando.

## Requisitos típicos antes de la configuración

- Alimentación confiable al rastreador conforme a las instrucciones de instalación del GOTOP G23D
- Acceso a la herramienta oficial de configuración GOTOP o al método recomendado por el fabricante para cambiar servidor y puerto
- Una tarjeta Micro SIM activa y conectividad celular compatible con el hardware G23D y la red regional
- Acceso físico al dispositivo o acceso del instalador para habilitar la configuración y reiniciar el equipo
- Una cuenta en Plaspy para confirmar que el dispositivo aparece en línea después de la configuración
- Conocimientos básicos sobre cómo elegir UDP o TCP cuando el firmware pida la selección de transporte

## Cómo se conecta este rastreador a Plaspy

Una vez configurado, el G23D envía ubicaciones y eventos del dispositivo al endpoint y puerto compartidos de Plaspy para que los gestores de flota puedan ver la posición y el estado en la plataforma. Plaspy recibe los datos del rastreador y determina automáticamente el protocolo usado, lo que simplifica la incorporación de muchos modelos distintos.

- El G23D se configura para enviar paquetes a d.plaspy.com o 54.85.159.138
- Los datos se envían al puerto 8888 usando UDP o TCP según la configuración del dispositivo
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que no es necesaria la selección manual del protocolo en la plataforma
- Eventos como actualizaciones de posición y alarmas se encaminan a Plaspy para su visualización y alertas
- La visibilidad del dispositivo y su estado en línea se validan en Plaspy tras el reporte exitoso

## Flujo de trabajo típico de configuración

1. Acceda al método o software oficial de configuración GOTOP según lo descrito por el fabricante.
2. Localice las opciones de servidor TCP/UDP o la configuración de red en la interfaz de configuración.
3. Ingrese la dirección del servidor Plaspy como d.plaspy.com o alternativamente 54.85.159.138.
4. Establezca el puerto del dispositivo exactamente a 8888.
5. Elija UDP o TCP en el dispositivo si el firmware solicita seleccionar el transporte.
6. Aplique o guarde la configuración en la herramienta del dispositivo.
7. Reinicie el dispositivo si la herramienta o la documentación indica que es necesario.
8. Verifique que el dispositivo reporte a Plaspy comprobando su cuenta Plaspy para corroborar estado en línea y actualizaciones recientes de posición.

## Ejemplos de comandos de configuración

El modelo proporcionado no incluye cadenas de comandos públicas para el GOTOP G23D. Los formatos exactos de comando o los mensajes de configuración varían según el firmware del fabricante y el método de configuración que utilice. Para el G23D, los fabricantes suelen proporcionar uno de estos métodos de configuración: una herramienta serial UART TTL, una aplicación de escritorio del proveedor o un menú en el propio dispositivo. Consulte la guía oficial de configuración GOTOP para los comandos o pasos GUI exactos aplicables a su versión de firmware y revisión.

Si obtiene comandos públicos oficiales de GOTOP, inclúyalos aquí siguiendo el orden recomendado por el fabricante y conserve los marcadores de posición como APN o credenciales de usuario. Los marcadores de posición deben mantenerse tal como se proporcionan para permitir la sustitución con la información de su operador.

## Notas sobre la configuración

- Las diferencias de firmware y las revisiones de hardware pueden cambiar los nombres de los campos de configuración y las opciones disponibles; confirme siempre los pasos exactos para la versión de firmware de su G23D.
- Cuando el firmware del dispositivo ofrezca ambos transportes TCP y UDP, pruebe el transporte permitido por su red y elija el que ofrezca entrega confiable para su caso de uso.
- Plaspy requiere que el dispositivo apunte al endpoint y puerto compartidos; usar d.plaspy.com o 54.85.159.138 con puerto 8888 garantiza que el dispositivo pueda alcanzar Plaspy.
- Mantenga la documentación del fabricante a la mano para cableado, configuración de la SIM y cualquier paso relacionado con E/S o ACC que pueda afectar el reporte.
- Si utiliza un instalador o integrador tercero, confirme que apliquen exactamente estos ajustes de servidor y validen la visibilidad del dispositivo en Plaspy después de la instalación.

## Por qué usar Plaspy con esta configuración

Configurar el GOTOP G23D para que reporte a Plaspy permite a las organizaciones tener visibilidad centralizada de las ubicaciones de los vehículos y de los eventos clave del dispositivo utilizando un endpoint y puerto comunes. Dado que Plaspy detecta automáticamente el protocolo del rastreador, la incorporación de unidades G23D es sencilla una vez que el servidor, la IP y el puerto están correctamente configurados en el dispositivo.

To learn more about Plaspy and how it supports fleet tracking across multiple device models visit https://www.plaspy.com. For the most current device specific configuration methods, firmware notes, and hardware details for the GOTOP G23D consult the official GOTOP website https://www.gotop.cc/ as manufacturer specifications and setup procedures can change over time.
