---
slug: /pointer/cello_track_3y/configuration
id: cello_track_3y-configuration
sidebar_label: Configuration
title: Pointer - Cello Track 3Y Configuration
sidebar_class_name: menu_item_tracker
description: Guía para configurar el Pointer Cello Track 3Y y conectarlo a Plaspy, con ajustes de servidor y pasos prácticos
keywords:
  - Configuración Pointer Cello Track 3Y
  - Instalación Pointer Cello Track 3Y
  - Configuración de servidor Cello Track 3Y
  - Configuración de rastreador Plaspy
  - Instalación de rastreador GPS Pointer
  - Integración Cello Track 3Y con Plaspy
  - Guía configuración seguimiento de activos
  - Configuración seguimiento de vehículos Pointer
  - Configuración plataforma rastreador GPS
  - Configuración dispositivo Pointer
---

# Pointer - Configuración del Cello Track 3Y

Esta página describe el contexto de configuración pública para usar la familia Pointer Cello Track 3Y con la plataforma Plaspy. Resume los ajustes de servidor compartidos por Plaspy y ofrece orientación práctica para que instaladores y administradores preparen el dispositivo para reportar hacia Plaspy. Aquí se incluyen los pasos públicos y no propietarios necesarios para apuntar el rastreador a Plaspy y validar la conectividad.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando recibe tráfico. Los pasos exactos en el lado del fabricante para el Cello Track 3Y pueden variar según firmware, revisión de hardware, tipo de instalación y herramientas del proveedor, por lo que debe usar esta guía junto con el método oficial de Pointer para su modelo.

## Resumen de la configuración

El objetivo de este proceso es preparar el Cello Track 3Y para comunicarse de forma fiable con la plataforma Plaspy y confirmar que el rastreador aparece en su cuenta. Los pasos siguientes cubren las tareas prácticas típicas para que el dispositivo sea visible y operativo en Plaspy.

- Apuntar el rastreador al endpoint de servidor de Plaspy para que envíe posiciones y estados.
- Usar el puerto compartido de Plaspy para que los dispositivos sean aceptados y procesados por la plataforma.
- Seleccionar el modo de transporte adecuado si el dispositivo requiere UDP o TCP.
- Guardar y aplicar las configuraciones del fabricante y reiniciar el dispositivo cuando sea necesario.
- Verificar que Plaspy detecte automáticamente el protocolo y empiece a mostrar datos.

## Ajustes de servidor de Plaspy

Al configurar el Pointer Cello Track 3Y para Plaspy, utilice estos valores públicos de servidor:

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte: UDP o TCP pueden usarse en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador en las conexiones entrantes

Tenga en cuenta que todos los dispositivos en Plaspy usan el mismo puerto y que Plaspy se encarga de la detección del protocolo, por lo que no necesita seleccionar un protocolo de rastreador en la plataforma.

## Requisitos habituales antes de la configuración

- Acceso a la herramienta de configuración oficial de Pointer o al método recomendado para la familia Cello Track 3Y.
- Dispositivo con alimentación y accesible mediante el procedimiento del fabricante para configuración y pruebas.
- Conectividad de red en el lugar donde se realiza la configuración para que los mensajes del dispositivo lleguen a Plaspy.
- Una cuenta en Plaspy o el acceso necesario a la plataforma para confirmar que el dispositivo aparece tras la configuración.
- Información básica del dispositivo, como el número de serie o el ID usado por las herramientas de Pointer.
- Conocimiento de si el dispositivo requiere seleccionar UDP o TCP en el lado del fabricante.

## Cómo se conecta este rastreador a Plaspy

La familia Cello Track 3Y se configura para reportar ubicaciones y mensajes del dispositivo al endpoint y puerto compartidos de Plaspy para que la plataforma ingiera y muestre los datos. Plaspy recibe tráfico de dispositivos en un único puerto y usa detección automática de protocolo para procesar mensajes de muchos modelos de rastreadores.

- El dispositivo envía actualizaciones periódicas de posición a d.plaspy.com o 54.85.159.138 en el puerto 8888.
- El rastreador también puede enviar mensajes de evento o estado que Plaspy asociará con el registro del dispositivo.
- Plaspy inspecciona el tráfico entrante y detecta automáticamente el protocolo del rastreador para un parseo correcto.
- La conectividad exitosa hace que el dispositivo aparezca y reporte en Plaspy sin necesidad de seleccionar el protocolo en la plataforma.
- Si el dispositivo requiere transporte UDP o TCP, configure el transporte en el dispositivo para que coincida con la opción elegida.

## Flujo de trabajo típico de configuración

1. Acceda al método o software oficial de Pointer para configurar la familia Cello Track 3Y.
2. Localice la sección de ajustes de servidor o reporte en la herramienta del fabricante.
3. Ingrese d.plaspy.com o 54.85.159.138 como dirección de servidor según su preferencia.
4. Establezca el puerto en 8888, teniendo en cuenta que Plaspy usa el mismo puerto para todos los dispositivos compatibles.
5. Elija UDP o TCP si el dispositivo le solicita seleccionar un modo de transporte.
6. Aplique o guarde los cambios de configuración en la herramienta del fabricante.
7. Reinicie o haga un ciclo de alimentación del dispositivo si la herramienta o el firmware lo requieren.
8. Valide que el dispositivo reporte a Plaspy comprobando la visibilidad del equipo y la llegada de datos en su cuenta de Plaspy.

## Ejemplos de comandos de configuración

Los comandos exactos o las cadenas SMS usadas para configurar los dispositivos Pointer varían según el firmware y las variantes regionales. Dado que los comandos públicos disponibles para la familia Cello Track 3Y los proporciona Pointer y pueden entregarse mediante una herramienta de configuración o interfaz SMS, consulte la documentación oficial de Pointer o las instrucciones del proveedor para obtener los comandos precisos.

Si su proveedor de dispositivos facilita ejemplos de comandos, aplíquelos en la herramienta del fabricante o envíelos siguiendo las indicaciones del vendedor. Los comandos típicos del fabricante indicarán al rastreador establecer la dirección del servidor, fijar el puerto 8888 y seleccionar el transporte UDP o TCP. Conserve marcadores como [apn] si aparecen en comandos proporcionados por el proveedor y siga las instrucciones del fabricante para reemplazarlos.

## Notas de configuración

- Las diferencias de firmware pueden cambiar la interfaz de configuración exacta y la sintaxis de comandos; siempre confirme los comandos para su versión de firmware.
- Las prácticas de instalación varían por región y proveedor. Use las herramientas de Pointer o el software suministrado por el vendedor para flujos de configuración autorizados.
- TCP y UDP son compatibles para acceder al puerto 8888; elija el transporte requerido por su dispositivo o el que indique el proveedor.
- Plaspy detectará automáticamente el protocolo del rastreador en las conexiones entrantes, por lo que no es necesario seleccionar el protocolo en la plataforma.
- Mantenga la documentación del fabricante a mano durante la configuración y verificación.

## Por qué usar Plaspy con esta configuración

Usar Plaspy con la familia Pointer Cello Track 3Y ofrece una forma sencilla de centralizar los reportes de ubicación y estado de los dispositivos en una sola plataforma. Los ajustes de servidor compartidos y la detección automática de protocolo de Plaspy simplifican la incorporación, de modo que los instaladores puedan concentrarse en la correcta configuración y validación en el lado del dispositivo en lugar de en detalles de protocolo de la plataforma.

Para saber más sobre Plaspy y las capacidades de la plataforma visite https://www.plaspy.com. Para pasos específicos de configuración del dispositivo, notas de firmware y la guía más reciente del fabricante, verifique los detalles con Pointer en http://www.pointer.com.
