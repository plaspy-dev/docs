---
slug: /gosafe/g6c/configuration
id: g6c-configuration
sidebar_label: Configuration
title: Gosafe - G6C Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del Gosafe G6C con valores de servidor Plaspy y pasos prácticos para seguimiento de flotas
keywords:
  - Configuración Gosafe G6C
  - Configuración G6C Plaspy
  - Configuración servidor Gosafe G6C
  - Configuración rastreador G6C
  - Integración rastreador Gosafe Plaspy
  - Configuración seguimiento flota G6C
  - Configuración telemetría G6C
  - Configuración rastreador Plaspy
  - Rastreo vehicular G6C
  - Guía instalación G6C
---

# Gosafe - Configuración del G6C

Esta página describe el contexto público de configuración para usar el rastreador Gosafe G6C con Plaspy. Aquí se detallan los valores de servidor compartidos en Plaspy y el flujo de configuración práctico necesario para apuntar un G6C a la plataforma Plaspy y habilitar el seguimiento en tiempo real y la subida de telemetría en búfer. Utilice esta guía para comprender los valores comunes del servidor de Plaspy y los pasos típicos que aplicará al integrar el G6C en una flota.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador; los pasos exactos en el lado del dispositivo dependen de la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El G6C soporta modos de transporte comunes y buffering de mensajes, por lo que normalmente bastará con ajustar el endpoint, el transporte y el puerto del dispositivo y luego validar la conectividad desde la plataforma.

## Resumen de la configuración

Este proceso prepara el G6C para enviar posición y telemetría a Plaspy usando el endpoint y puerto compartidos de la plataforma. El objetivo es configurar el dispositivo para que Plaspy detecte el protocolo automáticamente, reciba los mensajes entrantes y muestre la telemetría en paneles y reportes.

- Apuntar el G6C al dominio o IP del servidor de Plaspy para que los mensajes lleguen a la plataforma.
- Seleccionar el modo de transporte soportado por el firmware instalado, UDP o TCP en el puerto de Plaspy.
- Guardar y aplicar la configuración en el dispositivo usando el método oficial de Gosafe.
- Validar que el rastreador sea visible en Plaspy y que lleguen la posición y la telemetría de entradas.
- Aprovechar las funciones de buffering y reintento del G6C para asegurar subidas confiables ante conectividad intermitente.

## Ajustes del servidor de Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte soportado: UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador
- Tenga en cuenta que todos los dispositivos en Plaspy usan el mismo puerto para mensajes entrantes de rastreo

## Requisitos típicos antes de configurar

- Asegúrese de que el G6C tenga una fuente de alimentación válida y esté conectado según las instrucciones de instalación del fabricante.
- Confirme que el dispositivo tiene conexión celular activa y una SIM funcional si la unidad usa transporte celular.
- Obtenga la herramienta de configuración oficial de Gosafe o el método adecuado para su modelo y firmware (USB, serial o software del OEM).
- Verifique que el firmware del dispositivo esté actualizado y soporte los modos de subida TCP o UDP que requiere su despliegue.
- Conozca el IMEI o identificador único del dispositivo para poder emparejarlo en Plaspy una vez que se conecte.
- Tenga acceso a la información de la cuenta de Plaspy o al equipo que gestiona la provisión de dispositivos para validar el rastreador en la plataforma.

## Cómo se conecta este rastreador a Plaspy

El G6C envía coordenadas GNSS y datos telemáticos a través de la red celular al endpoint y puerto compartidos de Plaspy. Plaspy ingesta esos mensajes y asocia el dispositivo mediante identificadores incluidos en la subida, lo que permite actualizaciones de posición en vivo, alertas y reportes históricos.

- El rastreador reporta actualizaciones de posición a d.plaspy.com o 54.85.159.138 en el puerto 8888.
- Los mensajes del dispositivo pueden usar transporte UDP o TCP según la configuración seleccionada y las capacidades del firmware.
- El G6C sube mensajes almacenados en búfer una vez que se restablece la conectividad, por lo que Plaspy recibe datos recopilados durante las interrupciones.
- La telemetría de encendido, entradas digitales y analógicas, y eventos del acelerómetro se reenvía a Plaspy para evaluación de reglas y generación de alertas.
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que la configuración estándar de endpoint y puerto suele ser suficiente para el parseo de mensajes.

## Flujo de configuración típico

1. Acceda al método de configuración oficial de Gosafe para el G6C (herramienta USB, software dedicado o portal del proveedor) provisto por el fabricante o el instalador.
2. En los ajustes de servidor o red del dispositivo, ingrese el dominio de Plaspy d.plaspy.com o la IP del servidor 54.85.159.138.
3. Configure el puerto de subida a 8888 según lo requiere Plaspy.
4. Elija UDP o TCP como transporte si el dispositivo solicita selección de transporte.
5. Aplique o guarde la configuración en el dispositivo usando la herramienta del fabricante.
6. Reinicie el dispositivo si la documentación del firmware o la herramienta indica que es necesario.
7. Valide que el dispositivo reporte a Plaspy comprobando la visibilidad del equipo y la llegada de telemetría en la plataforma.

## Ejemplos de comandos de configuración

El G6C admite configuración mediante herramientas de Gosafe y utilidades del fabricante; los formatos exactos de comandos y las cadenas SMS o serial varían según el firmware y la herramienta del proveedor. Dado que los métodos de configuración del fabricante cambian entre revisiones de firmware y variantes regionales, siga las instrucciones oficiales de Gosafe para su modelo y versión de firmware al introducir el dominio del servidor y los valores de puerto.

Si dispone de comandos públicos específicos de Gosafe para el G6C, aplíquelos en el orden indicado por el fabricante y conserve los marcadores de posición como [apn] u otros campos APN exactamente como se proveen. Los marcadores representan valores que debe suministrar, por ejemplo la cadena APN del operador o credenciales de acceso.

## Notas de configuración

- Las diferencias de firmware pueden cambiar las interfaces de configuración y los modos de transporte soportados; revise siempre la versión de firmware del dispositivo antes de aplicar ajustes.
- TCP y UDP se comportan de manera distinta en entrega y semántica de reintento; elija el transporte que se adecúe a sus requisitos de fiabilidad y latencia.
- Debido a que Plaspy usa el mismo puerto para todos los dispositivos y detecta protocolos automáticamente, solo necesita asegurarse de que el dominio o la IP del servidor y el puerto estén correctos en el equipo.
- Mantenga acceso a los registros del dispositivo o a la salida de la herramienta del fabricante al solucionar conectividad hacia d.plaspy.com o 54.85.159.138 en el puerto 8888.
- Verifique cualquier comando de configuración por SMS o pasos de configuración serial frente a la documentación oficial de Gosafe para evitar cambios no deseados.

## Por qué usar Plaspy con esta configuración

Usar el Gosafe G6C con Plaspy ofrece un endpoint probado y una configuración de servidor compartida que simplifica despliegues de flota a gran escala. Apuntar el G6C a Plaspy usando el dominio o la IP documentados y el puerto compartido permite que Plaspy detecte automáticamente el protocolo e ingiera datos GNSS y telemáticos para monitoreo en tiempo real, alertas y análisis históricos.

Learn more about Plaspy on the main website https://www.plaspy.com. For the latest device specific configuration methods, firmware behavior, and manufacturer details, verify current information on the Gosafe official website https://gosafesystem.com/ as device setup instructions and firmware capabilities may change over time.
