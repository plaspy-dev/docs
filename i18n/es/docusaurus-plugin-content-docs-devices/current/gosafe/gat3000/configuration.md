---
slug: /gosafe/gat3000/configuration
id: gat3000-configuration
sidebar_label: Configuration
title: Gosafe - GAT3000 Configuration
sidebar_class_name: menu_item_tracker
description: Configurar el Gosafe GAT3000 para usar con Plaspy mediante ajustes públicos del servidor y guía práctica
keywords:
  - Configuración Gosafe GAT3000
  - Instalación Gosafe GAT3000
  - Configuración GAT3000 Plaspy
  - Ajustes servidor GAT3000
  - Configuración rastreador GPS Gosafe
  - Configuración LTE Cat 1 GAT3000
  - Rastreador de activos Gosafe Plaspy
  - Configuración rastreador solar GAT3000
  - Ajustes servidor rastreador Gosafe
  - Configuración seguimiento de flotas GAT3000
---

# Gosafe - GAT3000: Configuración

Esta página reúne la información pública necesaria para configurar el rastreador Gosafe GAT3000 y conectarlo a Plaspy. Aquí encontrará los ajustes del servidor y las indicaciones prácticas para apuntar dispositivos GAT3000 hacia Plaspy y asegurar el envío correcto de posiciones y telemetría, basándose en las capacidades que describe el fabricante. El objetivo es ayudar a instaladores e integradores a preparar el equipo para una comunicación fiable con Plaspy, respetando las funciones públicas del fabricante.

Plaspy utiliza ajustes de servidor compartidos entre dispositivos compatibles y detecta automáticamente el protocolo del rastreador, sin embargo los pasos específicos en el lado del fabricante pueden variar según la versión de firmware, revisión de hardware, tipo de instalación y herramientas del proveedor. Use esta guía como referencia práctica para despliegues GAT3000 con Plaspy y verifique los controles y menús específicos del dispositivo con la documentación y herramientas oficiales de Gosafe.

## Resumen de la configuración

Configurar el GAT3000 para Plaspy consiste en preparar el dispositivo para que envíe posiciones GNSS y telemetría al endpoint compartido de Plaspy y verificar que el aparato sea visible y reporte correctamente en la plataforma. El proceso público se centra en establecer el endpoint y puerto correctos, seleccionar el transporte cuando sea necesario y confirmar la conectividad de red y la alimentación para operaciones prolongadas con asistencia solar.

- Apunte el dispositivo a Plaspy usando el endpoint y puerto compartidos para que los reportes lleguen a la plataforma.
- Asegúrese de que el dispositivo tenga conectividad celular activa y los ajustes APN correctos para LTE Cat 1 o conmutación a GSM antes de probar.
- Seleccione el modo de transporte requerido por el firmware del dispositivo (UDP o TCP) o utilice la herramienta OTA/automática si está disponible.
- Valide batería, carga solar y la instalación física para mantener intervalos de reporte consistentes.
- Confirme que el dispositivo aparece en Plaspy y que envía datos de ubicación y eventos después de aplicar la configuración.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte: el GAT3000 puede configurarse para usar UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador y usa el mismo puerto para todos los dispositivos compatibles

## Requisitos típicos antes de la configuración

- Un GAT3000 alimentado y accesible con carga de batería suficiente y conexión del panel solar para realizar pruebas.
- Servicio celular activo en una SIM compatible y con los ajustes APN correctos para el operador seleccionado.
- Acceso al método oficial de configuración de Gosafe para el GAT3000 (web, herramienta de escritorio, OTAP o comandos SMS según soporte del dispositivo).
- Identificadores básicos del equipo como IMEI y ID del dispositivo para emparejar el rastreador en Plaspy.
- Una cuenta de Plaspy y la capacidad de ver los reportes o logs entrantes una vez que el dispositivo esté configurado.
- Opcional: verificar visibilidad de ubicación en una zona con buena recepción GNSS para confirmar que las posiciones se transmiten.

## Cómo se conecta este rastreador a Plaspy

Al configurarlo para Plaspy, el GAT3000 envía posiciones GNSS y telemetría relacionada al endpoint y puerto compartidos de Plaspy para que la plataforma pueda procesar datos de ubicación, eventos y sensores para monitoreo e informes.

- El dispositivo reporta a d.plaspy.com (o 54.85.159.138) en el puerto 8888 para que Plaspy reciba mensajes posicionales y de eventos.
- El transporte puede ser UDP o TCP según el firmware o la configuración seleccionada en el equipo.
- Plaspy detecta automáticamente el protocolo del rastreador, lo que permite aceptar mensajes de diferentes protocolos en el mismo puerto.
- Eventos como alertas de manipulación, detección por acelerómetro y telemetría de sensores BLE se transmiten a Plaspy para generar alertas y mantener el historial.
- Una vez visible en Plaspy, el rastreador proporciona actualizaciones de ubicación en tiempo real, reproducción del historial y alertas en la plataforma para la gestión de activos.

## Flujo de configuración común

1. Acceda al método o software de configuración oficial de Gosafe para el GAT3000 provisto por el fabricante o vendedor.
2. En los ajustes de servidor del dispositivo ingrese el endpoint de Plaspy usando d.plaspy.com o la IP 54.85.159.138.
3. Establezca el puerto de reporte del dispositivo en 8888, que es el puerto compartido de Plaspy para todos los dispositivos compatibles.
4. Si el dispositivo requiere seleccionar el transporte, elija UDP o TCP según su firmware o preferencia de red.
5. Configure la SIM y los parámetros APN que exija su operador móvil para que el rastreador tenga conectividad de datos.
6. Aplique o guarde la configuración y realice los reinicios o apagados y encendidos que indique la herramienta de Gosafe.
7. Valide que el dispositivo reporte a Plaspy revisando mensajes entrantes, el estado del equipo o la visibilidad de la ubicación en la plataforma Plaspy.

## Ejemplos de comandos de configuración

El GAT3000 admite varias vías de configuración según el firmware y las herramientas del proveedor. Los comandos y formatos de mensaje exactos pueden variar entre revisiones de firmware y métodos de aprovisionamiento, por lo que debe usar la utilidad de configuración oficial de Gosafe o la documentación correspondiente para los comandos precisos de su unidad.

En muchas implementaciones los mismos pasos prácticos se aplican a través de una herramienta de configuración o actualización OTA: establecer servidor a d.plaspy.com o 54.85.159.138, fijar el puerto 8888, seleccionar UDP o TCP si se requiere, guardar y reiniciar. Si usa SMS o una interfaz de comandos OEM, consulte la documentación de Gosafe para las plantillas SMS o las cadenas de comandos exactas para su firmware.

## Notas de configuración

- Las variaciones de firmware pueden cambiar las etiquetas de los menús, los transportes disponibles o la sintaxis exacta de los comandos de configuración. Siempre confirme los comandos con las notas de firmware del dispositivo.
- Elija TCP o UDP según la fiabilidad de la red y el soporte de la herramienta del equipo. Plaspy soporta ambos en el puerto 8888 y realiza detección automática de protocolo.
- Si utiliza aprovisionamiento por SMS, confirme que el rastreador acepta configuración por SMS y que la entrega de SMS en el sitio de instalación sea fiable.
- El GAT3000 puede contar con opciones de doble SIM y roaming; asegúrese de que la SIM activa tenga un APN de datos válido y que los valores APN estén configurados en el dispositivo.
- Tras la configuración, deje tiempo para que el dispositivo obtenga fijaciones GNSS y transmita mensajes iniciales; la orientación del panel solar y el estado de carga afectan el comportamiento de reporte.

## Por qué usar Plaspy con esta configuración

Usar el GAT3000 con Plaspy ofrece una solución robusta para el monitoreo de activos al aire libre a largo plazo. La combinación de alimentación asistida por panel solar, GNSS multi-constelación, conectividad LTE Cat 1 y soporte de sensores BLE hace que el equipo sea apto para remolques, contenedores, maquinaria pesada y otros activos remotos, mientras Plaspy procesa y presenta esos datos para alertas, historial e informes operativos.

Learn more about Plaspy and how it supports device integrations at https://www.plaspy.com. For the most current device specific configuration methods, firmware behaviour, and manufacturer details verify information on the official Gosafe website https://gosafesystem.com/.
