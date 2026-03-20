---
slug: /aoya/t2d/configuration
id: t2d-configuration
sidebar_label: Configuration
title: AoYa - T2D Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el rastreador AoYa T2D con los ajustes de servidor de Plaspy y detección automática
keywords:
  - configuración AoYa T2D
  - instalación AoYa T2D
  - AoYa T2D Plaspy
  - configuración rastreador AoYa
  - configuración servidor Plaspy
  - puesta en marcha rastreador GPS
  - configuración seguimiento vehicular
  - configuración tracker 2G
  - guía integración T2D
  - configuración seguimiento de flotas
---

# AoYa - Configuración del T2D

Esta página ofrece el contexto público para configurar el rastreador GPS AoYa T2D con la plataforma Plaspy. Resume los ajustes de servidor y transporte que deberá aplicar al integrar el equipo y describe el flujo de trabajo general de configuración sin reproducir comandos del fabricante ni credenciales privadas. La información se basa en detalles públicos del dispositivo y en la configuración estándar de servidores Plaspy.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el equipo se conecta. Los pasos de configuración del fabricante para el AoYa T2D pueden variar según la versión de firmware, la revisión de hardware, el método de instalación y las herramientas del proveedor; el T2D también admite canales comunes de configuración como SMS y parámetros GPRS, que deberá gestionar conforme a la guía oficial de AoYa.

## Resumen de la configuración

Preparar el AoYa T2D para su integración con Plaspy se centra en configurar el dispositivo para que reporte al endpoint compartido de Plaspy y en validar la conectividad para que el equipo aparezca y actualice correctamente en la plataforma. Muchas implementaciones del T2D usan la conexión GPRS del dispositivo y los métodos de configuración provistos por el fabricante para definir la red y los datos del servidor.

- Configure el rastreador para enviar datos al endpoint compartido de Plaspy, de modo que la plataforma reciba ubicaciones y eventos.
- Asegúrese de que el equipo tenga conectividad 2G GSM GPRS funcional y los ajustes APN del operador correctos según la instalación.
- Seleccione el modo de transporte que soporte el dispositivo (UDP o TCP) y apunte el equipo al servidor y puerto de Plaspy.
- Valide que el rastreador reporte y sea visible en Plaspy después de guardar la configuración.
- Use las herramientas del fabricante o la configuración vía SMS (según lo provea AoYa) para aplicar los ajustes cuando corresponda.

## Ajustes de servidor de Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte por UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta
- Plaspy usa el mismo puerto 8888 para todos los dispositivos compatibles

## Requisitos habituales antes de comenzar

- Un dispositivo AoYa T2D alimentado y accesible instalado o con alimentación temporal para la configuración.
- Una SIM 2G GSM válida con datos habilitados y la información APN del operador disponible.
- Acceso al método de configuración oficial de AoYa o al software y documentación del proveedor.
- Una herramienta o canal para aplicar los ajustes, como la app o software del fabricante, herramienta web o comandos SMS si el dispositivo lo admite.
- Un método para supervisar el estado de conexión y reporte en Plaspy una vez aplicados los cambios.

## Cómo se conecta este rastreador a Plaspy

El AoYa T2D utiliza su conexión GSM GPRS para enviar datos de ubicación y del dispositivo al endpoint de Plaspy. Una vez que se establecen los ajustes de servidor y transporte en el rastreador, Plaspy recibe los datos entrantes en su puerto compartido y determina automáticamente el protocolo para interpretar los mensajes y mostrar el equipo en la plataforma.

- El rastreador se configura apuntando al dominio o la IP del servidor Plaspy y al puerto compartido para que los flujos de datos lleguen a Plaspy.
- En el equipo se selecciona el transporte UDP o TCP según las opciones del dispositivo; cualquiera de los dos conectará al puerto 8888.
- Plaspy detecta automáticamente el protocolo en uso y asigna los mensajes entrantes al registro de dispositivo correcto.
- Una vez que comienzan los reportes, Plaspy muestra ubicación, estado de conectividad y eventos para monitoreo operativo.
- La validación en Plaspy confirma que el equipo está comunicándose correctamente con el endpoint compartido del servidor.

## Flujo de configuración típico

1. Acceda al método de configuración oficial de AoYa o al software del proveedor y revise la documentación del dispositivo para conocer los canales de configuración compatibles.
2. Ingrese la dirección del servidor Plaspy usando el dominio d.plaspy.com o la IP 54.85.159.138 en los ajustes del dispositivo.
3. Configure el puerto del equipo en 8888, teniendo en cuenta que Plaspy utiliza este mismo puerto para todos los equipos compatibles.
4. Seleccione el tipo de transporte UDP o TCP si el equipo requiere una selección explícita.
5. Guarde o aplique la configuración según el canal de configuración del dispositivo (por ejemplo, mediante el software del proveedor o por medio de comandos SMS).
6. Valide que el equipo reporte a Plaspy y aparezca en línea en la plataforma, confirmando el flujo de datos y la detección del protocolo.

## Notas sobre la configuración

- Las revisiones de firmware y hardware pueden modificar las opciones de configuración disponibles; consulte siempre la documentación de AoYa para detalles específicos de su unidad.
- Las prácticas del instalador y las variaciones de mercado (por ejemplo diferencias en APN de los operadores) pueden afectar la conectividad; confirme el APN y los ajustes de datos con el proveedor de la SIM.
- La elección entre TCP y UDP puede estar disponible; seleccione el transporte que soporte su implementación y asegúrese de apuntarlo al servidor Plaspy en el puerto 8888.
- El T2D puede configurarse mediante comandos SMS o software del proveedor; remítase a la guía de AoYa para los métodos exactos en lugar de depender de comandos compartidos en la comunidad.
- Confirme que el equipo tenga alimentación estable y buena señal de red durante la configuración para evitar problemas de reporte intermitentes.

## Por qué usar Plaspy con esta configuración

Usar el AoYa T2D con Plaspy es una forma sencilla de centralizar los datos de rastreo de vehículos y obtener visibilidad operativa. Apuntar el rastreador al endpoint y puerto compartidos de Plaspy permite que la plataforma detecte automáticamente el protocolo del equipo y comience a interpretar los datos de ubicación y eventos, lo que facilita que los equipos monitoreen activos y respondan a necesidades operativas.

Para obtener más información sobre Plaspy y cómo gestiona la conectividad de dispositivos y la administración de flotas, visite https://www.plaspy.com. Para los métodos de configuración específicos más actuales, el comportamiento del firmware y los detalles del fabricante, verifique la información más reciente en el sitio oficial de AoYa http://www.aoyagps.com/.
