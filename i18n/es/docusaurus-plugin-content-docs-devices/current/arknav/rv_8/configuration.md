---
slug: /arknav/rv_8/configuration
id: rv_8-configuration
sidebar_label: Configuration
title: ArkNav - RV-8 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para apuntar el rastreador ArkNav RV-8 a Plaspy con ajustes de servidor y pasos prácticos
keywords:
  - configuración ArkNav RV-8
  - instalación ArkNav RV-8
  - configuración servidor ArkNav RV-8
  - configuración dispositivo Plaspy
  - rastreador GPS Plaspy
  - rastreador GPS RV-8
  - configuración seguimiento vehicular
  - configuración rastreo de flotas
  - configuración dispositivo telemático
  - integración ArkNav Plaspy
---

# ArkNav - Configuración del RV-8

Esta página explica el contexto público de configuración para usar el rastreador GPS de flotas ArkNav RV-8 con Plaspy. Está enfocada en los ajustes prácticos a nivel de plataforma que debe aplicar para que el equipo reporte posición y telemetría a Plaspy, y describe las configuraciones de servidor compartidas que Plaspy espera para trackers compatibles. El contenido se basa en la descripción pública del RV-8 y la información publicada sobre los parámetros de servidor de Plaspy.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del tracker, pero los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Use esta guía para preparar el RV-8 para Plaspy y consulte la documentación de ArkNav para pasos específicos del dispositivo cuando sea necesario.

## Resumen de la configuración

El objetivo de la configuración es apuntar el RV-8 al endpoint de Plaspy, seleccionar el transporte correcto y confirmar que GNSS y la telemetría del vehículo lleguen a Plaspy para su visualización y alertas. Plaspy usa el mismo puerto de red para todos los dispositivos soportados y detectará el protocolo del tracker automáticamente cuando el tráfico llegue a la plataforma.

- Configure el servidor del dispositivo a d.plaspy.com o use la IP del servidor de Plaspy para que la telemetría se enrute a Plaspy
- Ajuste el puerto del dispositivo a 8888, el puerto compartido de Plaspy para todos los equipos
- Seleccione UDP o TCP como transporte en el dispositivo si la herramienta o el firmware lo requiere
- Aplique y guarde la configuración, y reinicie el equipo si las herramientas de ArkNav lo recomiendan
- Valide la conectividad y confirme que el dispositivo aparece en los paneles y reportes de Plaspy

## Ajustes del servidor de Plaspy

Use los siguientes valores de servidor al configurar el RV-8 para Plaspy. Estos son los endpoints públicos de Plaspy que debe ingresar en la herramienta de configuración del dispositivo o en la interfaz SMS/administrativa:

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte: el dispositivo puede configurarse para usar UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del tracker cuando el dispositivo se conecta al puerto compartido

## Requisitos típicos antes de la configuración

- Una unidad RV-8 instalada y alimentada con antenas y conexiones al vehículo completadas
- Una SIM celular activa y un plan de datos compatible con la variante del dispositivo y las bandas celulares de la región
- Acceso a las herramientas oficiales de configuración de ArkNav o a la interfaz de instalación proporcionada con el equipo
- Identificadores del dispositivo como IMEI o número de serie disponibles para registro o diagnóstico
- Conocimiento del APN de la SIM y credenciales relacionadas si el firmware del equipo las requiere
- Cuenta en Plaspy o contacto con su administrador de Plaspy para confirmar la visibilidad del dispositivo después de la configuración

## Cómo se conecta este tracker a Plaspy

El RV-8 obtiene fijaciones GNSS y telemetría del vehículo y transmite esos paquetes por la red celular al endpoint y puerto compartido de Plaspy. Una vez que el tráfico llega a Plaspy en d.plaspy.com o la IP del servidor, Plaspy detectará el protocolo del equipo y procesará los mensajes entrantes para mapeo, alertas e informes.

- El dispositivo reporta posición GNSS y, como respaldo, localización híbrida por celdas cuando aplica
- La telemetría del vehículo y señales de eventos como ignición, entradas de sensores y alarmas se envían al endpoint de Plaspy
- Opciones de transporte cifrado soportadas por el dispositivo pueden configurarse si coinciden con los requisitos de Plaspy e integradores
- Plaspy escucha en el puerto 8888 para todos los dispositivos y detectará automáticamente el protocolo del tracker
- Una vez conectado, el dispositivo será visible en los paneles de Plaspy para rastreo en tiempo real y reproducción histórica

## Flujo de trabajo típico de configuración

1. Acceda al método oficial de configuración de ArkNav o al software provisto con el RV-8 (herramienta USB, interfaz de instalador o utilitario del proveedor).
2. En los ajustes de servidor, ingrese el endpoint de Plaspy como el dominio d.plaspy.com o la IP del servidor 54.85.159.138.
3. Configure el puerto del servidor en 8888 para coincidir con el puerto compartido de Plaspy para todos los dispositivos.
4. Seleccione el protocolo de transporte (UDP o TCP) si el dispositivo requiere una selección manual.
5. Ingrese los ajustes APN necesarios para la SIM instalada y guarde o aplique la configuración del equipo.
6. Reinicie el RV-8 si la herramienta o el firmware lo recomienda para que los cambios surtan efecto.
7. Verifique que el dispositivo reporte a Plaspy comprobando su visibilidad en la plataforma y confirmando la llegada de telemetría.

## Comandos de configuración de ejemplo

El RV-8 puede configurarse utilizando las herramientas de ArkNav, una interfaz de instalador o métodos SMS/comando del proveedor según el firmware y el embalaje. Los comandos y la sintaxis exacta varían según la herramienta del fabricante y la versión de firmware. Dado que los conjuntos de comandos específicos del modelo los proporciona ArkNav, consulte la guía de configuración oficial de ArkNav o el utilitario incluido con el dispositivo para el formato preciso de los comandos para ingresar servidor, puerto y valores APN.

Si usa comandos SMS o CLI suministrados por ArkNav, mantenga marcadores como [apn], [apnu] o [apnp] intactos al pegar valores. Esos marcadores representan el nombre del APN, el usuario del APN y la contraseña del APN respectivamente y deben reemplazarse por los datos de su operador móvil solo cuando sea necesario.

## Notas sobre la configuración

- Las diferencias de firmware pueden cambiar los nombres de los menús, la sintaxis de comandos o las opciones de selección de transporte. Verifique la versión de firmware antes de aplicar los pasos.
- Las opciones TCP y UDP se comportan de forma distinta según las condiciones de red y las expectativas del servidor; Plaspy acepta ambos en el puerto 8888 y detectará el protocolo cuando lleguen datos.
- Si configura opciones de cifrado en el RV-8 (por ejemplo AES o variantes SSL), asegúrese de que sean compatibles con su integración Plaspy y cualquier requisito de certificados.
- Mantenga un registro del IMEI y otros identificadores antes de la configuración para agilizar las verificaciones de visibilidad y el soporte con Plaspy.
- Siga las mejores prácticas de instalación de ArkNav para la colocación de antenas y protección de alimentación para garantizar un rendimiento celular y GNSS fiable.

## Por qué usar Plaspy con esta configuración

Usar el ArkNav RV-8 con Plaspy centraliza la ubicación, telemetría y datos de eventos de su flota en una plataforma única para monitoreo, alertas y análisis histórico. El diseño robusto del RV-8 y sus interfaces de vehículo lo hacen apto para despliegues exigentes, mientras que dirigir la telemetría a Plaspy proporciona visibilidad operativa para despacho, seguridad y flujos de trabajo anti robo.

Para obtener más información sobre Plaspy y las funcionalidades de la plataforma visite https://www.plaspy.com. Para las instrucciones de configuración específicas del dispositivo, notas de firmware y herramientas de configuración más recientes consulte los recursos técnicos de ArkNav en https://www.arknavgps.com.tw/ para verificar la guía y el comportamiento actual del fabricante.
