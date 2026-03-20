---
slug: /autoseeker/at_16/configuration
id: at_16-configuration
sidebar_label: Configuration
title: Autoseeker - AT-16 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración y servidor para el Autoseeker AT-16 y su integración con Plaspy
keywords:
  - Configuración Autoseeker AT-16
  - Instalación Autoseeker AT-16
  - Integración Autoseeker AT-16 con Plaspy
  - Configuración del servidor Autoseeker AT-16
  - Configuración rastreador OBD AT-16
  - Configuración plataforma de rastreo AT-16
  - Rastreador GPS Autoseeker Plaspy
  - Guía de instalación rastreador AT-16
  - Configuración gestión de flotas AT-16
  - Configuración telemetría AT-16
---

# Autoseeker - Configuración del AT-16

Esta página documenta el contexto público de configuración para usar el rastreador OBD Autoseeker AT-16 con Plaspy. Incluye los ajustes de servidor públicos que Plaspy requiere, el flujo de trabajo habitual para apuntar el AT-16 a la plataforma Plaspy y los requisitos previos comunes que conviene verificar antes de la integración. El AT-16 es un dispositivo OBD plug-and-play compatible con Plaspy desde fábrica y puede enviar ubicación y telemetría del vehículo a una plataforma de terceros.

Plaspy utiliza ajustes de servidor compartidos para los dispositivos soportados y detecta automáticamente el protocolo del rastreador, mientras que la configuración del fabricante puede variar según firmware, revisión de hardware, tipo de instalación y herramientas del proveedor. Esta guía se centra en los valores públicos de conexión de Plaspy que usará al configurar el AT-16 y explica los pasos y comprobaciones básicas que normalmente se requieren. Siempre verifique los comandos y formatos SMS específicos del dispositivo en la documentación oficial de Autoseeker.

## Resumen de la configuración

El objetivo de la configuración es preparar el AT-16 para que envíe datos de ubicación y eventos a Plaspy, de modo que los dispositivos aparezcan y se actualicen de forma fiable en la plataforma. La configuración se centra en apuntar el dispositivo al endpoint compartido de Plaspy y en confirmar el transporte y la conectividad para que la telemetría fluya de manera continua.

- Apunte el rastreador al endpoint del servidor de Plaspy para que los datos lleguen al destino correcto.
- Configure el modo de transporte (UDP o TCP) y el puerto compartido de Plaspy para que el dispositivo pueda establecer sesión.
- Verifique la SIM y la conectividad de red si usará el canal de datos GSM del dispositivo.
- Aplique y guarde los ajustes en el rastreador y confirme que comience a reportar a Plaspy.
- Valide la visibilidad en Plaspy revisando los mensajes entrantes y la telemetría básica como ubicación y estado de ignición.

## Valores del servidor Plaspy

Use estos valores públicos de conexión de Plaspy al configurar el AT-16:

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte: soporta UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador y usa el mismo puerto para todos los dispositivos soportados

Estos valores son la configuración de servidor compartida que Plaspy espera para las conexiones de los dispositivos.

## Requisitos habituales antes de configurar

- Acceso al puerto OBD del vehículo y posibilidad de conectar el dispositivo AT-16.
- Dispositivo alimentado con una SIM GSM 2G activa configurada para datos y SMS si va a usar las funciones celulares del rastreador.
- Credenciales y acceso a su cuenta Plaspy para validar el reporte del dispositivo una vez configurado.
- Acceso a los métodos oficiales de configuración de Autoseeker como comandos SMS, software de PC o herramientas del proveedor.
- Tener anotado el IMEI o número de serie del equipo para emparejar el rastreador con el registro de flota en Plaspy.
- Conocimientos básicos sobre si la instalación requiere UDP o TCP según la preferencia del instalador o el comportamiento de la red local.

## Cómo se conecta este rastreador a Plaspy

Cuando se configura para reportar a Plaspy, el AT-16 envía puntos de ubicación, notificaciones de eventos y telemetría seleccionada del vehículo al endpoint compartido de Plaspy en el puerto 8888. Plaspy recibe los datos tanto si el rastreador usa el dominio d.plaspy.com como la IP listada, y detectará el protocolo del dispositivo automáticamente.

- El dispositivo envía la posición GPS y marcas de tiempo a d.plaspy.com o 54.85.159.138 en el puerto 8888.
- Eventos como encendido/apagado, alertas de desconexión, activación de geo-cercas y exceso de velocidad pueden reenviarse a Plaspy para su procesamiento inmediato.
- El historial de viajes y la telemetría enviados por el rastreador se sincronizan con Plaspy para reproducción de rutas e informes.
- Plaspy soporta tanto UDP como TCP; configure el AT-16 según corresponda y Plaspy aceptará los datos entrantes detectando el protocolo automáticamente.
- La visibilidad y el monitoreo operativo en Plaspy dependen de la entrega correcta de paquetes al puerto compartido 8888.

## Flujo de trabajo típico de configuración

1. Acceda al método de configuración oficial recomendado para el AT-16, como la herramienta de PC del proveedor, la aplicación móvil o la interfaz de comandos SMS.
2. Establezca la dirección del servidor en d.plaspy.com o ingrese la IP del servidor 54.85.159.138 en el campo de configuración del dispositivo según lo permita.
3. Configure el puerto de destino en 8888.
4. Elija el transporte UDP o TCP si el dispositivo requiere selección de transporte; normalmente seleccione el que sea preferible para su red local.
5. Aplique o guarde la configuración en el rastreador usando la herramienta del fabricante o el comando SMS de guardado.
6. Reinicie el dispositivo si el fabricante recomienda un reinicio tras la configuración.
7. Valide que el dispositivo reporte a Plaspy confirmando que los datos entrantes aparecen en su cuenta Plaspy y que la telemetría básica como ubicación y estado de ignición se actualizan.

## Ejemplos de comandos de configuración

El AT-16 admite configuración mediante herramientas del fabricante y comandos SMS, pero los comandos exactos y la sintaxis pueden variar según la versión de firmware y el conjunto de herramientas del proveedor. Autoseeker suele documentar las cadenas SMS disponibles y las opciones de configuración por software en el manual oficial. Dado que los comandos los proporciona y mantiene el fabricante, consulte la documentación de Autoseeker para el juego de comandos preciso que debe usar con su equipo.

Si recibe una lista oficial de comandos SMS de Autoseeker, siga el orden que allí se indique al enviar las configuraciones y los comandos de guardado. Al ingresar la dirección del servidor puede usar el dominio d.plaspy.com o la IP 54.85.159.138 y configurar el puerto 8888; seleccione UDP o TCP cuando se lo solicite. Mantenga siempre el formato SMS y los marcadores que muestre la guía del fabricante.

## Notas de configuración

- Las revisiones de firmware y hardware pueden cambiar la sintaxis de comandos disponibles y los flujos de configuración; consulte siempre el manual del dispositivo para su unidad AT-16 específica.
- Debido a que el AT-16 usa 2G GSM, confirme que las redes 2G estén disponibles y sean compatibles con su operador móvil en la región de despliegue.
- La elección entre UDP y TCP depende de la confiabilidad de la red y la preferencia del instalador; Plaspy acepta ambos transportes en el puerto 8888 y detecta el protocolo automáticamente.
- Tenga a mano el IMEI y los datos de registro del dispositivo al validar el equipo en Plaspy para agilizar la resolución de problemas.
- Use las herramientas suministradas por el fabricante o los comandos SMS para la configuración para evitar aplicar ajustes no soportados.

## Por qué usar Plaspy con esta configuración

Usar el Autoseeker AT-16 con Plaspy ofrece una vía práctica y de bajo esfuerzo hacia una visibilidad centralizada de la flota y flujos de trabajo basados en eventos. La forma OBD plug-and-play del AT-16 reduce el tiempo de instalación y aporta telemetría como estado de ignición, alertas de desconexión y ubicación, que Plaspy convierte en seguimiento en vivo, alertas y reportes históricos. Para flotas, operaciones de alquiler y despliegues de seguridad vehicular, esta combinación permite notificaciones oportunas, análisis de rutas y registros listos para auditoría.

Para obtener más información sobre Plaspy y cómo gestiona las conexiones de dispositivos y los datos de flota, visite https://www.plaspy.com. Para los comandos específicos más recientes, formatos SMS, notas de firmware e instrucciones de instalación detalladas del AT-16, verifique la información con el fabricante en https://autoseekergps.com/ ya que el comportamiento del dispositivo y los pasos de configuración pueden cambiar con el tiempo.
