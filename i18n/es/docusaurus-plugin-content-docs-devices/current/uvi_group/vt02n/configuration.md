---
slug: /uvi_group/vt02n/configuration
id: vt02n-configuration
sidebar_label: Configuration
title: UVI Group - VT02N Configuration
sidebar_class_name: menu_item_tracker
description: Configuración práctica y ajustes de servidor para usar el UVI Group VT02N con Plaspy y obtener seguimiento vehicular confiable
keywords:
  - UVI Group VT02N
  - configuración VT02N
  - instalación VT02N
  - VT02N Plaspy
  - configuración rastreador GPS
  - instalación rastreador vehicular
  - configuración servidor Plaspy
  - configuración rastreador Plaspy
  - configuración plataforma GPS
  - rastreo de flotas VT02N
---

# UVI Group - Configuración del VT02N

Esta página describe el contexto público de configuración para usar el tracker UVI Group VT02N con Plaspy. Explica los ajustes prácticos de servidor y los pasos comunes que preparan al VT02N para informar ubicación y datos del dispositivo a la plataforma Plaspy. Cuando los comandos específicos del fabricante están disponibles públicamente, se incluyen ejemplos para ayudar a técnicos e integradores a completar la configuración con confianza.

Plaspy utiliza una configuración de servidor compartida entre los dispositivos compatibles y detecta automáticamente el protocolo del tracker una vez que el dispositivo comienza a reportar. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El VT02N admite configuración por SMS y ajustes GPRS estándar comúnmente usados en rastreadores vehiculares, por lo que puede aplicar las configuraciones compartidas de Plaspy que se muestran aquí mientras consulta la documentación de UVI Group para detalles específicos del dispositivo.

## Resumen de la configuración

Preparar el VT02N para Plaspy se centra en definir los parámetros de red del dispositivo y confirmar el envío de reportes a la plataforma. Los comandos de ejemplo públicos que se muestran a continuación usan la contraseña predeterminada del dispositivo y demuestran la configuración por SMS para parámetros habituales de GPRS y servidor.

- Configure el APN del dispositivo para que el tracker pueda conectarse a redes móviles de datos y enviar información a Plaspy
- Apunte el dispositivo al endpoint del servidor de Plaspy y al puerto guardado para que los reportes lleguen a la plataforma
- Seleccione transporte UDP o TCP en el dispositivo si es necesario y guarde la configuración en el tracker
- Valide la conectividad y el envío de datos usando los comandos de verificación integrados y luego confirme la visibilidad en Plaspy
- Opcionalmente restaure la configuración de fábrica antes de preparar un dispositivo para una nueva instalación

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte soportado UDP o TCP en el dispositivo
- Plaspy detecta automáticamente el protocolo del tracker una vez que el dispositivo empieza a reportar
- Tenga en cuenta que todos los dispositivos en Plaspy usan el mismo puerto para reportes

## Requisitos típicos antes de la configuración

- Confirme que el VT02N tiene alimentación y funciona según la guía del fabricante
- Una tarjeta SIM activa y compatible con datos móviles habilitados y los valores APN correctos
- Acceso a un teléfono o a un gateway SMS para enviar comandos de configuración por SMS si usa este método
- La contraseña predeterminada del dispositivo o la contraseña actual para ejecutar comandos de configuración
- Acceso al manual de configuración oficial de UVI Group o a la herramienta del proveedor como referencia
- Información básica de red, como la dirección del servidor Plaspy y la elección entre UDP o TCP

## Cómo se conecta este tracker a Plaspy

El VT02N se configura para enviar sus mensajes de ubicación y estado al endpoint y puerto compartidos del servidor de Plaspy. Una vez aplicados APN y ajustes de servidor y con un enlace de datos móviles operativo, Plaspy detecta automáticamente el protocolo del dispositivo y empieza a procesar los reportes.

- El tracker usa datos móviles para abrir una sesión y enviar telemetría al servidor de Plaspy
- Los mensajes se envían a d.plaspy.com o a la IP del servidor 54.85.159.138 en el puerto 8888
- Seleccione el transporte UDP o TCP cuando el dispositivo requiera elegir el método de entrega de paquetes
- Plaspy determina automáticamente el mapeo de protocolo correcto, por lo que no se requiere una selección de protocolo por dispositivo en el servidor
- Tras la configuración, el dispositivo aparecerá en Plaspy y reportará posición y actualizaciones de estado

## Flujo de trabajo habitual de configuración

1. Acceda al método de configuración oficial de UVI Group, como el conjunto de comandos SMS o la herramienta de configuración del proveedor
2. Ingrese el dominio del servidor Plaspy d.plaspy.com o la IP del servidor 54.85.159.138 en el campo de servidor del dispositivo
3. Establezca el puerto de reportes en 8888 que es el utilizado por todos los dispositivos en Plaspy
4. Elija el transporte UDP o TCP si el dispositivo requiere selección de transporte
5. Aplique o guarde la configuración en el dispositivo y envíe los comandos de confirmación que sean necesarios
6. Reinicie el dispositivo si las instrucciones del fabricante recomiendan un reinicio tras la configuración
7. Valide que el dispositivo esté reportando a Plaspy usando los comandos de verificación del dispositivo y comprobando el estado en Plaspy

## Comandos de configuración de ejemplo

El VT02N admite configuración por SMS usando la contraseña del dispositivo. La contraseña predeterminada que figura en la documentación pública es 666666. Envíe estos comandos SMS desde un número autorizado al SIM del dispositivo en el orden que se indica al preparar una instalación nueva. Los comandos se muestran exactamente como se deben enviar por SMS.

1. Comando opcional de restablecimiento de fábrica
```
FACTORY,666666#
```
Use esto para restaurar los ajustes de fábrica antes de una nueva configuración cuando sea necesario. Está etiquetado como opcional y solo utilícelo si se requiere un reinicio completo.

2. Establecer la zona horaria a UTC 0
```
gmt,666666,e,0#
```
Ajuste los parámetros gmt para su zona horaria local si lo requiere la documentación del fabricante.

3. Establecer el APN del operador móvil
```
APN,666666,[apn],[apnu],[apnp]#
```
- [apn] es el nombre APN del operador
- [apnu] es el usuario APN si el operador lo requiere
- [apnp] es la contraseña APN si el operador la requiere
Si no se requieren usuario y contraseña, deje esos marcadores vacíos u omítalos según la sintaxis del dispositivo.

4. Configurar el servidor GPRS a la IP y puerto de Plaspy
```
server,666666,0,54.85.159.138,8888,0#
```
Este comando server apunta el dispositivo a Plaspy mediante IP y puerto. Cuando su dispositivo admite el uso de un nombre de dominio o por legibilidad, configure la herramienta del proveedor para usar d.plaspy.com donde sea compatible.

5. Fijar el intervalo de actualización de ubicación a 60 segundos
```
timer,666666,,60#
```
Ajuste el intervalo de actualización para que coincida con sus necesidades de reporte y el cumplimiento de los planes de datos locales.

6. Verificar ajustes GPRS y servidor
```
GPRSSET,666666#
```
Use este comando de verificación para solicitar la configuración actual de GPRS y servidor al dispositivo.

7. Consultar el estado del dispositivo
```
status,666666#
```
Este comando devuelve el estado del dispositivo sobre alimentación, registro en la red y otra información de estado según lo soportado por el VT02N.

## Notas de configuración

- La configuración por SMS se muestra en la documentación pública y es adecuada para configuraciones en campo cuando el dispositivo tiene un SIM operativo y acepta comandos SMS
- Las revisiones de firmware o variantes de hardware pueden cambiar la sintaxis de los comandos y los parámetros disponibles, por lo que confirme el formato de comandos con la documentación más reciente de UVI Group
- Al elegir UDP frente a TCP, considere la confiabilidad de su red y el comportamiento del operador; ambos transportes son compatibles y Plaspy detecta automáticamente el protocolo del tracker
- Conserve la contraseña del dispositivo y cámbiela conforme a su política de seguridad cuando el dispositivo lo permita
- Confirme los valores APN con el proveedor móvil y use los marcadores [apn], [apnu] y [apnp] al insertar credenciales del operador

## Por qué usar Plaspy con esta configuración

Configurar el VT02N para reportar a Plaspy ofrece un camino sencillo para integrar rastreadores compactos de vehículos en una plataforma centralizada de gestión de flotas. Plaspy simplifica el manejo en el lado del servidor al usar un único puerto para todos los dispositivos compatibles y al detectar automáticamente protocolos comunes de trackers, lo que reduce la configuración por dispositivo en el servidor y acelera los despliegues.

Learn more about Plaspy and how it supports device integrations at https://www.plaspy.com. Manufacturer specifications, setup methods, and device behavior can change over time so verify the latest VT02N details on the UVI Group site http://www.uvi-group.com/ before finalizing installations.
