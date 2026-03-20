---
slug: /itriangle/bharat101_plus_4g_with_can/configuration
id: bharat101_plus_4g_with_can-configuration
sidebar_label: Configuration
title: iTriangle - Bharat101 Plus 4G with CAN Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para conectar el iTriangle Bharat101 Plus 4G con CAN a los servidores de Plaspy
keywords:
  - configuración iTriangle Bharat101 Plus 4G con CAN
  - configuración Bharat101 Plus 4G con CAN
  - configuración Bharat101 Plus para Plaspy
  - configuración rastreador GPS iTriangle
  - configuración rastreador AIS-140
  - integración CAN bus Bharat101
  - ajustes de servidor Bharat101 4G
  - rastreador gestión de flotas Plaspy
  - configuración telemetría vehicular CAN
  - configuración OTA Bharat101
---

# iTriangle - Configuración de Bharat101 Plus 4G con CAN

Esta página explica el contexto público de configuración para usar el rastreador iTriangle Bharat101 Plus 4G con CAN en la plataforma Plaspy. Describe los ajustes de servidor compartidos que Plaspy espera y ofrece pasos prácticos para preparar el dispositivo a fin de reportar posición y telemetría CAN al servicio. La orientación se basa en la descripción del equipo y la información pública de los servidores de Plaspy.

Plaspy emplea parámetros de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando se establece la conexión. Los pasos exactos en el lado del fabricante para el Bharat101 Plus 4G con CAN pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor, por lo que siga la documentación del fabricante cuando sea necesario.

## Resumen de la configuración

Esta configuración prepara el Bharat101 Plus 4G con CAN para comunicarse de forma fiable con Plaspy, de modo que la ubicación, los diagnósticos del bus CAN y los eventos de sensores sean visibles en la plataforma. El procedimiento se centra en ingresar los datos del servidor Plaspy, seleccionar el transporte, aplicar los ajustes del dispositivo y verificar la conectividad.

- Apunte el rastreador al endpoint del servidor Plaspy para que el dispositivo pueda enviar telemetría y posiciones GNSS.
- Seleccione el modo de transporte compatible con el dispositivo y con Plaspy, UDP o TCP.
- Asegúrese de que la alimentación del dispositivo, la eSIM o la tarjeta SIM y las interfaces de comunicación estén listas para una conexión en vivo.
- Guarde o aplique la configuración y, si es necesario, reinicie el dispositivo para que los cambios surtan efecto.
- Valide que el dispositivo aparezca en Plaspy y que reporte la posición y la telemetría CAN esperadas.

## Ajustes de servidor de Plaspy

Use los siguientes ajustes públicos de servidor de Plaspy al configurar este rastreador. Plaspy emplea el mismo puerto para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador en las conexiones entrantes.

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte: UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta

## Requisitos típicos antes de la configuración

- Unidad Bharat101 Plus 4G con CAN con alimentación, instalada o accesible para la configuración mediante el método del fabricante.
- Conectividad celular provisionada, ya sea eSIM integrada o una suscripción celular compatible activa y registrada en la red.
- Acceso al método de configuración de iTriangle que vaya a utilizar, como herramienta USB, BLE, comandos SMS o software del proveedor.
- Conocimiento del dominio o IP del servidor Plaspy y del puerto que se usará para el reporte.
- Un entorno de instalación para pruebas donde el dispositivo pueda reportar datos GNSS y CAN y validar la integración.
- Acceso administrativo a la cuenta o plataforma Plaspy para confirmar que el dispositivo aparece y envía telemetría.

## Cómo se conecta este rastreador a Plaspy

Una vez configurado, el Bharat101 Plus 4G con CAN envía posiciones GNSS, telemetría derivada del bus CAN e informes de eventos al endpoint compartido de Plaspy en el puerto 8888. Plaspy recibe paquetes TCP o UDP, detecta automáticamente el protocolo del rastreador y mapea los mensajes del dispositivo en la plataforma para seguimiento y reporte en tiempo real.

- El rastreador se configura para reportar a d.plaspy.com o directamente a 54.85.159.138 en el puerto 8888.
- Seleccione UDP o TCP en el dispositivo si el firmware lo requiere; el rastreador enviará la telemetría usando ese transporte.
- Plaspy detecta automáticamente el protocolo y se encarga del parseo para que los mensajes aparezcan en la plataforma.
- Los valores del bus CAN y los eventos de los sensores a bordo se envían en el mismo flujo de reporte del dispositivo, permitiendo que Plaspy los use en diagnósticos y alertas.
- Tras una configuración exitosa, espere ver actualizaciones de posición y telemetría derivada del CAN en los paneles e informes de Plaspy.

## Flujo de trabajo habitual de configuración

1. Acceda al método o software oficial de configuración de iTriangle para el Bharat101 Plus 4G con CAN mediante USB, BLE, SMS o la herramienta del proveedor.
2. En los ajustes de servidor del dispositivo, ingrese el dominio d.plaspy.com o la IP del servidor Plaspy 54.85.159.138.
3. Establezca el puerto de reporte exactamente en 8888, tal como lo usa Plaspy.
4. Si el dispositivo requiere la selección de transporte, elija UDP o TCP según sus preferencias de red y las capacidades del firmware.
5. Aplique o guarde los cambios de configuración usando la herramienta o el método de comandos del fabricante.
6. Reinicie el dispositivo si el firmware lo exige para aplicar la configuración de red y servidor.
7. Valide que el dispositivo reporte a Plaspy comprobando la conectividad y la telemetría en la plataforma Plaspy y confirmando el flujo de posición y datos CAN.

## Comandos de configuración de ejemplo

El Bharat101 Plus 4G con CAN puede configurarse mediante múltiples métodos del fabricante, incluidos USB, BLE, SMS o software del proveedor. La sintaxis exacta y los comandos de configuración dependen del firmware de iTriangle y de la herramienta de configuración, y varían entre versiones. Dado que los conjuntos de comandos difieren por firmware y herramienta del proveedor, consulte el manual de configuración de iTriangle o el software del vendedor para comandos y secuencias de ejemplo precisas.

Si utiliza el conjunto de comandos SMS o serie de iTriangle, siga la referencia oficial de comandos de iTriangle y reemplace cualquier APN o valores de marcador de posición con los detalles de su red. Conserve los marcadores de posición como [apn] o [apnu] si los muestra el fabricante y consulte el manual del dispositivo para la sustitución correcta.

## Notas de configuración

- Las versiones de firmware pueden cambiar las opciones disponibles y la sintaxis de los comandos; confirme la versión de firmware antes de aplicar comandos.
- Seleccionar UDP suele reducir la sobrecarga, mientras que TCP ofrece mayor fiabilidad de conexión; elija según su red y la recomendación del firmware del dispositivo.
- Plaspy usa el puerto compartido 8888 para todos los dispositivos y detecta automáticamente el protocolo entrante, por lo que la coherencia en la configuración del puerto es importante en toda la flota.
- Use las herramientas del fabricante para ajustes sensibles, como control de inmovilizador o asignación de E/S, y documente cualquier cambio para mantenimiento futuro.
- Si piensa usar configuración por SMS o BLE, asegúrese de contar con acceso de red local y controles de seguridad durante la puesta en marcha.

## Por qué usar Plaspy con esta configuración

Configurar el Bharat101 Plus 4G con CAN para reportar a Plaspy proporciona a los responsables de flota un endpoint único y consistente para ubicación, diagnósticos CAN y telemetría basada en eventos. El hardware del equipo es adecuado para vehículos pesados y transporte público y, cuando se orienta al servidor de Plaspy, entrega visibilidad en tiempo real y métricas derivadas del CAN que respaldan la supervisión operativa y el cumplimiento.

Para saber más sobre Plaspy y cómo gestiona conexiones de dispositivos y datos de flota, visite https://www.plaspy.com. Para detalles específicos más recientes sobre configuración del dispositivo, notas sobre comportamiento de firmware e instrucciones del fabricante, verifique la información actual en el sitio de iTriangle en https://www.itriangle.net/ ya que los métodos de configuración y el firmware pueden cambiar con el tiempo.
