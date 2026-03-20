---
slug: /intellitrack/intellitrac_x8/configuration
id: intellitrac_x8-configuration
sidebar_label: Configuration
title: Intellitrack - Intellitrac X8 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del Intellitrac X8 para usar con Plaspy, con ajustes de servidor y pasos para integración rápida
keywords:
  - Configuración Intellitrack Intellitrac X8
  - Configuración Intellitrac X8
  - Configuración servidor Intellitrac X8
  - Intellitrac X8 Plaspy
  - Configuración rastreador GPS Plaspy
  - Guía configuración rastreador GPS
  - Configuración rastreo de vehículos
  - Configuración rastreador para gestión de flotas
  - Configuración GPS Intellitrack
  - Compatibilidad Intellitrac X8
---

# Intellitrack - Intellitrac X8: Configuración

Esta página describe el contexto público de configuración para usar el rastreador GPS Systech Intellitrac X8 con Plaspy. Resume los ajustes de servidor prácticos y los pasos típicos necesarios para apuntar el dispositivo a Plaspy, de modo que pueda enviar datos de ubicación y eventos a la plataforma. La orientación a continuación se centra en el endpoint público de Plaspy y en el flujo de configuración habitual, basándose en las capacidades públicas del dispositivo descritas por el fabricante.

Plaspy usa ajustes de servidor consistentes para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, pero los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Utilice esta guía para entender los valores de servidor requeridos y el flujo general; siempre verifique la documentación del fabricante o el software de configuración del dispositivo para comandos y opciones específicas.

## Resumen de la configuración

Preparar un Intellitrac X8 para funcionar con Plaspy consiste principalmente en configurar el dispositivo para que envíe su ubicación y estado al endpoint de Plaspy y luego verificar que la plataforma reciba y muestre esos datos. El Intellitrac X8 soporta conectividad GSM GPRS y puede enviar telemetría por TCP o UDP, lo que ofrece opciones flexibles de transporte para la integración.

- Configure el rastreador para que apunte al endpoint del servidor de Plaspy y que los datos lleguen a la plataforma
- Seleccione el modo de transporte adecuado en el dispositivo si requiere elegir entre TCP o UDP
- Valide la conectividad GPRS y los ajustes de la SIM necesarios para que el dispositivo alcance Plaspy
- Verifique que el rastreador aparezca y reporte en Plaspy tras la configuración para que la ubicación y los eventos sean visibles
- Guarde y aplique los cambios usando la herramienta del fabricante o el método SMS, y reinicie el dispositivo si es necesario

## Ajustes del servidor Plaspy

Use los siguientes ajustes públicos de Plaspy al configurar el Intellitrac X8:

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte compatible: UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador

Plaspy usa el mismo puerto para todos los dispositivos compatibles y la detección de protocolo se realiza del lado del servidor, por lo que los valores clave en el dispositivo son el dominio o la IP del servidor y el puerto.

## Requisitos habituales antes de configurar

- Fuente de alimentación estable y batería presente o alimentación del vehículo conectada para que el rastreador permanezca en línea durante la configuración
- Tarjeta SIM activa con datos o GPRS habilitado y el APN del operador correctamente configurado
- Acceso al método oficial de configuración del Intellitrac X8, como el software del proveedor, interfaz serial o conjunto de comandos por SMS
- Antena física y cualquier conexión externa de audio o serial instaladas si su instalación lo requiere
- Conocimiento del modelo del dispositivo y la versión de firmware para seguir las instrucciones correctas del fabricante
- Un método para reiniciar el dispositivo después de aplicar nuevos ajustes de red

## Cómo se conecta este rastreador a Plaspy

Al configurarlo para Plaspy, el Intellitrac X8 envía su ubicación y datos del dispositivo al endpoint y puerto compartidos de Plaspy para que la plataforma muestre la posición y la información de eventos. El dispositivo usa su enlace GSM GPRS para entregar telemetría por TCP o UDP al servidor de Plaspy.

- El rastreador envía actualizaciones de posición y estado a d.plaspy.com o 54.85.159.138 en el puerto 8888
- El transporte puede seleccionarse como TCP o UDP en el dispositivo según la preferencia del instalador o las opciones del firmware
- Plaspy detecta automáticamente el protocolo del rastreador para analizar los datos entrantes correctamente
- Entradas de eventos y telemetría básica se transmiten al endpoint de Plaspy y aparecen en la plataforma para monitoreo
- El puerto compartido 8888 es utilizado por Plaspy para todos los dispositivos compatibles, lo que simplifica la configuración

## Flujo de configuración habitual

1. Acceda al método oficial de configuración del Intellitrac X8 o al software proporcionado por el fabricante o distribuidor.
2. Localice los campos de configuración del servidor u host en la interfaz de configuración del dispositivo.
3. Ingrese el dominio del servidor Plaspy d.plaspy.com o la IP del servidor 54.85.159.138.
4. Establezca el puerto del dispositivo en 8888, que es el puerto que usa Plaspy para todos los dispositivos.
5. Elija UDP o TCP si el dispositivo requiere selección de transporte.
6. Aplique o guarde la configuración en la herramienta del fabricante o mediante comandos SMS según la documentación del proveedor.
7. Reinicie el dispositivo si el firmware lo requiere o después de aplicar los ajustes de red.
8. Valide que el dispositivo reporte a Plaspy y que los datos de posición y eventos sean visibles en la plataforma.

## Ejemplos de comandos de configuración

Los comandos exactos y el método para aplicarlos dependen de la herramienta del fabricante, la versión de firmware y si usa configuración por serial, USB o SMS. La familia Intellitrac X8 suele ofrecer configuración mediante el software del proveedor o comandos SMS configurables; siga la documentación oficial de Intellitrac o la herramienta del distribuidor para el formato correcto de los comandos y cualquier autenticación necesaria.

Si utiliza configuración basada en SMS con su firmware, la documentación del fabricante listará las cadenas exactas de comandos SMS y cualquier marcador de posición requerido para el APN o campos de autenticación. Siempre conserve los marcadores de posición y reemplácelos por los datos de su operador de red cuando así se indique.

## Notas sobre la configuración

- Diferencias de firmware y revisiones de hardware pueden cambiar los nombres de menús, la sintaxis de comandos y las opciones de transporte disponibles. Revise la documentación del firmware del dispositivo antes de hacer cambios.
- Elija UDP para menor sobrecarga o TCP para un flujo orientado a conexión si su instalación y firmware soportan ambos; pruebe las dos opciones si observa comportamientos distintos.
- Asegúrese de configurar correctamente el APN y la autenticación de la SIM para el acceso a datos GPRS y permitir que el rastreador alcance d.plaspy.com.
- Cuando sea posible, use la herramienta de configuración del proveedor en lugar de SMS crudos para reducir la probabilidad de errores tipográficos y preservar la configuración del dispositivo.
- Mantenga un registro de la versión de software del dispositivo y de los pasos de configuración que utilizó para facilitar el mantenimiento y la resolución de problemas futuros.

## Por qué usar Plaspy con esta configuración

Usar el Intellitrac X8 con Plaspy ofrece a las organizaciones una vía sencilla para convertir las capacidades GPS y GPRS del dispositivo en visibilidad dentro de la plataforma para monitoreo de flotas, eventos de seguridad y supervisión operativa. La posibilidad del rastreador de enviar telemetría por TCP o UDP y la detección automática de protocolo de Plaspy reducen la complejidad de configuración y agilizan la integración.

Para conocer más sobre Plaspy y las integraciones de dispositivos compatibles visite https://www.plaspy.com. Para obtener las instrucciones de configuración específicas más recientes, comportamiento de firmware y detalles del fabricante, verifique la información en el sitio oficial del fabricante https://www.systech-iot.com/.
