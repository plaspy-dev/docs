---
slug: /itriangle/ts101_basic_4g/configuration
id: ts101_basic_4g-configuration
sidebar_label: Configuration
title: iTriangle - TS101 Basic 4G Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el iTriangle TS101 Basic 4G en Plaspy con ajustes de servidor y notas prácticas de integración
keywords:
  - Configuración iTriangle TS101 Basic 4G
  - Configuración iTriangle TS101 para Plaspy
  - Configuración de servidor TS101 Basic 4G
  - Configuración del rastreador GPS TS101 Basic 4G
  - Integración rastreador iTriangle Plaspy
  - Configuración seguimiento de flotas TS101
  - Configuración de telemetría TS101
  - Configuración plataforma GPS iTriangle
  - Configuración de seguimiento vehicular TS101
  - Guía de instalación TS101
---

# iTriangle - Configuración TS101 Basic 4G

Esta página explica la configuración pública necesaria para usar el rastreador iTriangle TS101 Basic 4G con la plataforma Plaspy. Se enfoca en la información práctica sobre el servidor y el flujo de trabajo requeridos para apuntar el TS101 Basic 4G a Plaspy, validar la conectividad y llevar la telemetría del dispositivo a su cuenta de Plaspy. El contenido está pensado para técnicos e integradores que preparan dispositivos para monitoreo de flotas y activos en Plaspy.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador para simplificar la integración. Los pasos exactos en el lado del fabricante para el TS101 Basic 4G pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor, como utilidades USB, comandos SMS o aprovisionamiento por BLE. Use esta página como guía pública de configuración y consulte al fabricante para pasos específicos del dispositivo.

## Resumen de configuración

Configurar el TS101 Basic 4G para Plaspy prepara el dispositivo para transmitir posiciones GNSS, datos de eventos y telemetría al endpoint de Plaspy, de modo que vehículos y activos aparezcan en la plataforma en tiempo real. El proceso se centra en establecer el endpoint de red del dispositivo hacia el servidor de Plaspy, elegir el tipo de transporte que soporte el dispositivo y verificar el envío correcto de datos.

- Apunte el rastreador al endpoint del servidor Plaspy para habilitar el reenvío de datos.
- Verifique que el dispositivo tenga una conexión de datos LTE Cat 1 operativa y, cuando sea necesario, los ajustes APN correctos.
- Elija UDP o TCP si el dispositivo requiere selección de transporte y configure el puerto compartido de Plaspy.
- Guarde los cambios y, si aplica, reinicie el rastreador para aplicar la nueva configuración de servidor.
- Confirme que el dispositivo aparece y reporta correctamente en Plaspy después de la configuración.

## Ajustes del servidor Plaspy

Al configurar el TS101 Basic 4G para Plaspy, use los siguientes ajustes públicos de servidor Plaspy tal como se muestran:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support: UDP or TCP can be used on port 8888 depending on device preference
- Plaspy automatically detects the tracker protocol so a single shared port is used for all Plaspy devices

Estos valores son los detalles del endpoint público de Plaspy a los que el TS101 Basic 4G debe ser configurado para reportar.

## Requisitos típicos antes de la configuración

- Un dispositivo TS101 Basic 4G encendido y funcional con la SIM adecuada y un plan de datos activo que soporte LTE Cat 1.
- Acceso al método o software oficial de configuración de iTriangle, como la herramienta USB del proveedor, la app de aprovisionamiento por BLE o el conjunto de comandos SMS.
- Conocimiento de los ajustes APN del operador celular si se requiere un APN de datos.
- Una cuenta en Plaspy o un flujo de aprovisionamiento donde se pueda asociar el IMEI o identificador del dispositivo una vez que comience a reportar.
- Firmware actualizado cuando sea posible y documentación para la revisión de hardware específica que esté configurando.

## Cómo se conecta este rastreador a Plaspy

El TS101 Basic 4G envía posiciones GNSS y telemetría mediante LTE Cat 1 al endpoint centralizado del servidor Plaspy y al puerto correspondiente. Una vez configurado para apuntar a Plaspy, el dispositivo se vuelve visible en la plataforma y reporta ubicación, telemetría y eventos para monitoreo de flotas y alertas.

- El dispositivo se configura para reportar al endpoint compartido de Plaspy d.plaspy.com o a la IP equivalente 54.85.159.138.
- Todos los dispositivos usan el puerto 8888 en el servidor Plaspy para la ingestión de datos.
- El transporte puede ser UDP o TCP en el puerto 8888 según las opciones de configuración del TS101 Basic 4G.
- Plaspy detecta automáticamente el protocolo del rastreador y analiza los datos entrantes para que el dispositivo sea reconocido sin mapeo por dispositivo de protocolos.
- Los reportes incluyen fixes GNSS y eventos del dispositivo que Plaspy muestra para monitoreo operativo y alertas.

## Flujo de configuración típico

1. Acceda al método o software oficial de iTriangle para configurar el TS101 Basic 4G (herramienta USB, aprovisionamiento BLE o conjunto de comandos SMS).
2. Ingrese el endpoint del servidor Plaspy ya sea como el dominio d.plaspy.com o como la IP del servidor 54.85.159.138 en los ajustes de servidor del dispositivo.
3. Configure el puerto del servidor en 8888 como el puerto de reporte del dispositivo.
4. Elija UDP o TCP como transporte si el dispositivo requiere seleccionar un protocolo de transporte.
5. Configure el APN y las credenciales de red necesarias si el dispositivo necesita un APN de datos para conectarse a la red LTE.
6. Aplique o guarde la configuración usando la herramienta del fabricante y siga los avisos para confirmar los cambios.
7. Reinicie el dispositivo si el método de configuración o el firmware requiere reboot para aplicar los ajustes.
8. Valide que el dispositivo aparece y reporta en Plaspy y confirme que la telemetría es visible en la plataforma.

## Ejemplo de comandos de configuración

El TS101 Basic 4G soporta múltiples canales de configuración y los comandos o pasos exactos dependen de la herramienta de iTriangle, el firmware y el método de aprovisionamiento elegido. Dado que las utilidades del fabricante y los conjuntos de comandos SMS varían según la revisión de firmware y la variante regional, la sintaxis precisa de los comandos la proporciona la documentación oficial de iTriangle. Los canales típicos de configuración incluyen herramientas USB, apps de aprovisionamiento por BLE y comandos SMS o cargas de configuración por TCP.

Si usa comandos SMS o una utilidad de línea de comandos del fabricante, consulte la documentación oficial de iTriangle para la sintaxis exacta. Los marcadores de posición como valores APN pueden aparecer en las guías del fabricante como {{apn}} {{apnu}} o {{apnp}} y deben reemplazarse por los valores de su operador celular.

## Notas de configuración

- Las diferencias de firmware pueden cambiar los canales de configuración disponibles y la sintaxis de comandos, por lo que confirme la versión de firmware del TS101 Basic 4G antes de aplicar instrucciones.
- Elija UDP o TCP según las necesidades de su despliegue y las consideraciones de confiabilidad de transporte; Plaspy admite ambos en el puerto 8888.
- Si utiliza aprovisionamiento por SMS o BLE, asegúrese de contar con el conjunto de comandos correcto o la app de aprovisionamiento para su variante de dispositivo.
- Tenga a mano los datos del APN y las credenciales celulares cuando configure un rastreador LTE Cat 1 para garantizar que pueda alcanzar d.plaspy.com o 54.85.159.138.
- Después de configurar, valide el reporte del dispositivo en Plaspy y revise los registros del dispositivo en la herramienta del fabricante si el reporte no aparece.

## Por qué usar Plaspy con esta configuración

Usar el TS101 Basic 4G con Plaspy ofrece a operadores de flotas y administradores de activos visibilidad centralizada de ubicación, eventos y flujos de telemetría en una única plataforma. La conectividad LTE Cat 1 del rastreador, el soporte multi GNSS, la batería de respaldo integrada y los canales flexibles de aprovisionamiento lo convierten en un dispositivo práctico para el monitoreo integrado de flotas cuando se apunta al endpoint compartido de Plaspy.

Learn more about Plaspy on the main website https://www.plaspy.com and verify the latest device specific configuration methods and firmware behavior on the manufacturer site https://www.itriangle.net/ to ensure your setup matches the current iTriangle guidance and firmware capabilities.
