---
slug: /ulbotech/l101/configuration
id: l101-configuration
sidebar_label: Configuration
title: Ulbotech - L101 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el rastreador Ulbotech L101 OBD con servidores Plaspy y flotas
keywords:
  - Configuración Ulbotech L101
  - Instalación Ulbotech L101
  - Configuración L101 Plaspy
  - Configuración rastreador GPS Ulbotech
  - Configuración rastreador OBDII
  - Ajustes servidor Plaspy
  - Configuración telemetría vehicular
  - Seguimiento de flotas L101
  - Configuración OBDII L101
  - Integración plataforma GPS
---

# Ulbotech - Configuración L101

Esta página documenta el contexto público de configuración para usar el Ulbotech L101 con Plaspy. Incluye los ajustes de servidor compartidos que Plaspy requiere, los objetivos generales de configuración del L101 y orientación práctica para preparar el dispositivo para que Plaspy pueda consumir ubicación y telemetría OBDII. Use esta guía junto con la documentación del fabricante para los pasos específicos del equipo.

Plaspy utiliza ajustes de servidor compartidos entre los rastreadores compatibles y detecta automáticamente el protocolo del dispositivo cuando los equipos reportan datos a la plataforma. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación o las herramientas del proveedor, por lo que debe seguir los métodos de configuración de Ulbotech mientras aplica los parámetros de servidor y transporte indicados en esta página.

## Resumen de la configuración

Configurar el L101 para Plaspy se centra en preparar el dispositivo OBDII plug-and-play para que reenvíe los datos de GNSS y la telemetría del vehículo al punto de ingestión de Plaspy, de modo que la unidad sea visible en paneles en tiempo real e informes. El L101 puede enviar datos a través de gateways móviles emparejados o mediante exportación por USB/microSD según lo descrito por el fabricante, y la configuración suele consistir en indicar dónde enviar los datos y qué transporte usar.

- Proporcione el endpoint y el puerto del servidor Plaspy para que el dispositivo o su gateway móvil sepan dónde subir los datos.
- Seleccione el modo de transporte (UDP o TCP) si el dispositivo o gateway requiere elegir.
- Valide la conectividad desde el L101 (o su gateway emparejado) hacia el servidor Plaspy.
- Confirme que la telemetría OBDII y los eventos de conductor se muestran en Plaspy después de las cargas exitosas.
- Guarde o aplique los ajustes en el L101 o en la herramienta del fabricante y reinicie el dispositivo o gateway si es necesario.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador cuando llegan los datos

Estos valores son el endpoint público de Plaspy y deben ingresarse en la herramienta de configuración del fabricante, en el gateway móvil emparejado o en los ajustes de subida que utilice con el L101.

## Requisitos típicos antes de comenzar

- Acceso físico al dispositivo Ulbotech L101 y al puerto OBDII del vehículo para la instalación plug-and-play.
- Fuente de energía o ignición del vehículo presente para que el dispositivo pueda funcionar durante la configuración y las pruebas.
- Un dispositivo móvil o gateway emparejado si el L101 subirá datos por reenvío Bluetooth en lugar de una conexión celular integrada.
- Acceso a las herramientas de configuración de Ulbotech o a las instrucciones para micro USB, microSD o el software del proveedor para aplicar los ajustes del servidor.
- Una tarjeta microSD formateada o acceso por USB para exportación local de datos si piensa usar subidas basadas en archivos o diagnósticos.
- Una cuenta Plaspy y la información del proyecto o la flota lista para validar la telemetría y la visibilidad del dispositivo.

## Cómo se conecta este rastreador a Plaspy

El L101 registra la posición GNSS y la telemetría OBDII localmente y reenvía esos datos a un servidor o gateway configurado para enviar a Plaspy. Al configurar el endpoint de Plaspy y el transporte correcto, los datos del dispositivo quedan disponibles para monitoreo en tiempo real, alertas e informes históricos dentro de Plaspy.

- El L101 se configura (vía herramienta del fabricante o gateway móvil) para enviar datos a d.plaspy.com o a 54.85.159.138.
- Las subidas de datos apuntan al puerto 8888 para que Plaspy pueda ingerir el flujo.
- El dispositivo o gateway puede usar UDP o TCP como transporte según el método de subida; Plaspy acepta ambos.
- Plaspy realiza detección automática del protocolo en conexiones entrantes, por lo que no es necesario especificar un nombre de protocolo en Plaspy.
- Una vez que comience el reporte, las posiciones, parámetros OBDII, eventos de conductor y estados de inmovilizador serán visibles en los paneles y alertas de Plaspy.

## Flujo de trabajo de configuración común

1. Acceda al método oficial de configuración de Ulbotech o al software mediante micro USB, archivo de configuración en microSD o la app móvil del proveedor.
2. Ingrese la dirección del servidor Plaspy ya sea como dominio d.plaspy.com o como la IP 54.85.159.138 según la interfaz de configuración que utilice.
3. Establezca el puerto de destino en 8888 (Plaspy usa el mismo puerto para todos los dispositivos compatibles).
4. Elija UDP o TCP si el dispositivo o gateway requiere selección de transporte.
5. Aplique o guarde los cambios de configuración en la herramienta de Ulbotech o en los ajustes del gateway.
6. Reinicie el L101 o el gateway emparejado si las instrucciones del fabricante indican que es necesario para que los ajustes surtan efecto.
7. Valide que el dispositivo reporte a Plaspy comprobando la visibilidad del equipo y la telemetría entrante en su cuenta Plaspy.

## Ejemplos de comandos de configuración

La sintaxis exacta de los comandos y el método para escribir los ajustes de servidor y transporte dependen de la interfaz de configuración de Ulbotech, la versión de firmware y la herramienta del proveedor. Los puntos de entrada típicos son la utilidad de escritorio de Ulbotech, un archivo de configuración en microSD o una app de gateway móvil. En todos los casos deberá proporcionar el endpoint de Plaspy d.plaspy.com o 54.85.159.138 y el puerto 8888 y elegir UDP o TCP si se solicita.

Si su herramienta del proveedor admite un archivo de configuración en texto, los campos relevantes a completar son el host del servidor, la IP del servidor (opcional), el puerto 8888 y la selección del transporte. Consulte la documentación de Ulbotech para el formato exacto de comandos o archivos requerido por el L101.

## Notas de configuración

- Diferentes versiones de firmware o revisiones de hardware del L101 pueden ofrecer interfaces de configuración distintas; siempre consulte la documentación de Ulbotech para el procedimiento correcto.
- Elija UDP para reportes simples y de baja latencia, o TCP cuando el método de subida o el gateway requiera transporte orientado a conexión; Plaspy acepta ambos y detecta el protocolo automáticamente.
- Si utiliza un dispositivo móvil emparejado o un gateway Bluetooth para reenviar datos, confirme que el gateway esté configurado con d.plaspy.com o 54.85.159.138 y el puerto 8888.
- Use la exportación por microSD o USB para recuperación offline de datos y diagnósticos cuando el reenvío en red no esté disponible.
- En caso de duda, siga las herramientas del fabricante para guardar y aplicar los ajustes y realice un reinicio si los cambios no se aplican de inmediato.

## Por qué usar Plaspy con esta configuración

Vincular el Ulbotech L101 con Plaspy ofrece a operadores de flotas y proveedores de servicio un camino sencillo desde la telemetría OBDII plug-and-play hasta información accionable. Los diagnósticos OBDII del L101, la detección de eventos de conductor, la salida de inmovilizador y la conectividad BLE se integran de forma limpia con la capacidad de Plaspy para ingerir y normalizar datos de rastreadores para seguimiento en tiempo real, alertas e informes históricos.

Aprenda más sobre cómo Plaspy puede utilizar el L101 para monitoreo de flotas y telemática en el sitio web de Plaspy https://www.plaspy.com. Los pasos específicos de configuración del equipo, el comportamiento del firmware y los detalles del fabricante pueden cambiar con el tiempo, por lo que verifique las instrucciones de instalación más recientes con Ulbotech en http://www.ulbotech.com/ antes de desplegar a gran escala.
