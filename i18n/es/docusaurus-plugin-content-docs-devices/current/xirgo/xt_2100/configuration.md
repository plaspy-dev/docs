---
slug: /xirgo/xt_2100/configuration
id: xt_2100-configuration
sidebar_label: Configuration
title: Xirgo - XT-2100 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del Xirgo XT-2100 con ajustes de servidor Plaspy y ejemplos de SMS para conectar el rastreador
keywords:
  - Configuración Xirgo XT-2100
  - Configuración XT-2100
  - Rastreador Xirgo Plaspy
  - Configuración rastreador GPS
  - Configuración seguimiento vehicular
  - Rastreador gestión de flotas
  - Configuración servidor XT-2100
  - Comandos SMS rastreador
  - Configuración GPRS rastreador
  - Integración plataforma de seguimiento
---

# Xirgo - Configuración del XT-2100

Esta página documenta el contexto de configuración pública para usar el Xirgo XT-2100 con Plaspy. Se enfoca en los ajustes de servidor prácticos y en el flujo de configuración habitual necesario para apuntar el rastreador a Plaspy, de modo que el dispositivo informe ubicación y telemetría a la plataforma.

Plaspy utiliza ajustes de servidor compartidos entre dispositivos compatibles y detecta automáticamente el protocolo del rastreador, mientras que la configuración en el lado del fabricante puede variar según firmware, revisión de hardware, tipo de instalación y herramientas del proveedor. El XT-2100 admite configuración por GPRS y por SMS; los comandos SMS de ejemplo más abajo muestran cómo establecer el APN y los parámetros del servidor GPRS para Plaspy.

## Resumen de la configuración

El objetivo de la configuración es dejar el XT-2100 listo para comunicarse con Plaspy de forma fiable, validar la conectividad en campo y permitir la visibilidad del dispositivo en la plataforma. En muchas instalaciones el proceso es directo e incluye proporcionar credenciales de red, configurar el endpoint y puerto del servidor, elegir el tipo de transporte si es necesario y confirmar que el dispositivo reporta correctamente.

- Proveer las credenciales APN del operador para que el dispositivo use datos móviles
- Configurar el dispositivo para que informe al endpoint y puerto del servidor Plaspy
- Seleccionar UDP o TCP cuando el equipo requiera una elección explícita
- Validar la conectividad para que el rastreador aparezca en Plaspy y envíe actualizaciones periódicas
- Usar SMS o la herramienta del fabricante según el acceso disponible y el firmware

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador

Todos los dispositivos en Plaspy usan el mismo puerto y la plataforma detectará el protocolo del rastreador automáticamente, por lo que basta con apuntar el dispositivo al endpoint de Plaspy en el puerto 8888.

## Requisitos típicos antes de la configuración

- Un XT-2100 instalado y con alimentación, con acceso a su método de configuración como SMS o el software del fabricante
- Una SIM celular activa con plan de datos y credenciales APN correctas del operador
- Acceso a los valores del APN del operador, incluyendo el nombre del APN y usuario/contraseña si corresponde
- Permiso para enviar comandos SMS desde un número autorizado si se usa configuración por SMS
- Conocimiento básico de si la instalación requiere seleccionar UDP o TCP como transporte
- Saber la versión de firmware del equipo y acceso a la documentación del fabricante para comportamientos específicos del modelo

## Cómo se conecta este rastreador a Plaspy

Una vez configurado, el XT-2100 envía ubicación y telemetría del dispositivo al servidor Plaspy en el endpoint y puerto compartidos, permitiendo a los gestores de flota monitorear los activos en tiempo real. Plaspy recibe los datos del dispositivo tanto si apunta al dominio d.plaspy.com como si usa la IP numérica.

- El rastreador se configura para reportar a d.plaspy.com o a 54.85.159.138 en el puerto 8888
- Los datos se envían sobre el protocolo de transporte seleccionado usando UDP o TCP según corresponda
- Plaspy detecta automáticamente el protocolo del dispositivo, por lo que se utiliza el mismo puerto para todos los dispositivos compatibles
- Una vez que el reporte está activo, el dispositivo aparece en la plataforma Plaspy para seguimiento y monitoreo de eventos
- Las actualizaciones periódicas de posición y los mensajes de estado del equipo permiten supervisión operativa

## Flujo típico de configuración

1. Acceda al método oficial de configuración de Xirgo apropiado para su unidad, como comandos SMS o la herramienta de software del fabricante
2. Ingrese el servidor Plaspy usando el dominio d.plaspy.com o la IP 54.85.159.138 como la dirección del servidor del dispositivo
3. Configure el puerto del servidor en 8888, que es el usado por todos los dispositivos en Plaspy
4. Elija UDP o TCP como transporte si la configuración del dispositivo requiere una selección explícita
5. Aplique o guarde la configuración en el equipo usando el método del fabricante
6. Reinicie el dispositivo si el firmware lo exige o después de aplicar los ajustes
7. Valide que el XT-2100 informe a Plaspy confirmando que el dispositivo aparece y envía actualizaciones a la plataforma

Si utiliza configuración por SMS, incluya los comandos de APN y servidor en el orden correcto antes de validar la conectividad.

## Ejemplos de comandos de configuración

El XT-2100 puede configurarse por SMS usando los siguientes comandos públicos. Envíe cada comando como un SMS desde un número autorizado al dispositivo. Mantenga los marcadores de posición y reemplácelos con los valores del operador.

- Establecer el APN del operador. Reemplace los marcadores según sea necesario
```text
+XT:1002,[apnu],[apnp],[apn]
```
Explicación de marcadores de posición
- [apn] nombre del APN proporcionado por su operador móvil
- [apnu] usuario del APN si el operador lo requiere, de lo contrario déjelo vacío o use el marcador que indique el proveedor
- [apnp] contraseña del APN si el operador la requiere, de lo contrario déjelo vacío o use el marcador que indique el proveedor

- Establecer el servidor GPRS para apuntar el dispositivo a Plaspy en el puerto 8888
```text
+XT:1001,8888,54.85.159.138,4,0,0
```
Notas
- El orden de estos comandos es importante para la configuración inicial. Por lo general, configure primero el APN y luego el comando del servidor GPRS.
- Estos comandos son los pasos de configuración por SMS documentados públicamente para el modelo. Si utiliza la herramienta de software del fabricante, aplique los mismos valores de servidor y puerto allí.

## Notas de configuración

- Las revisiones de firmware y hardware pueden cambiar el comportamiento de los comandos SMS o el orden de los parámetros. Verifique los comandos con las notas de la versión del firmware cuando sea posible
- El XT-2100 soporta TCP, UDP y FTP en el lado del dispositivo. Para Plaspy, apunte el rastreador a d.plaspy.com o 54.85.159.138 y utilice el puerto 8888
- La configuración por SMS se usa con frecuencia en instalaciones remotas donde no está disponible la herramienta del fabricante en sitio
- Si la herramienta del dispositivo requiere selección explícita de transporte, elija UDP o TCP según su entorno y las capacidades del firmware del rastreador
- Confirme siempre el reporte del dispositivo después de la configuración para garantizar que aparece en Plaspy

## Por qué usar Plaspy con esta configuración

Usar el Xirgo XT-2100 con Plaspy brinda a las organizaciones una forma práctica de centralizar datos de ubicación, estado y eventos de activos móviles. Apuntar el rastreador al endpoint y puerto compartidos de Plaspy garantiza un manejo consistente de los datos del dispositivo y simplifica la incorporación en flotas grandes.

Learn more about Plaspy on the main website https://www.plaspy.com and verify device specific instructions on the manufacturer site https://xirgo.com/ to ensure the latest firmware behavior and setup steps are followed.
