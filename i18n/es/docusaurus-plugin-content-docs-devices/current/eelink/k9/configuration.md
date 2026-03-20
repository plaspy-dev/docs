---
slug: /eelink/k9/configuration
id: k9-configuration
sidebar_label: Configuration
title: EElink - K9 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para conectar el EElink K9 a Plaspy usando servidor compartido y configuración vía SMS
keywords:
  - configuración EElink K9
  - instalación EElink K9
  - configuración servidor EElink K9
  - rastreador GPS K9 Plaspy
  - configuración rastreador Plaspy
  - configuración GPS EElink
  - comandos SMS K9
  - ajustes APN EElink
  - configuración rastreo vehicular
  - configuración plataforma GPS
---

# EElink - K9 Configuration

Esta página describe el contexto público de configuración para usar el rastreador GPS EElink K9 con Plaspy. Explica los ajustes de servidor compartidos que Plaspy requiere, muestra los comandos SMS más comunes publicados para el K9 y detalla los pasos prácticos para preparar el dispositivo para su uso con Plaspy. Utilice esta página como punto de partida para integrar el K9 con Plaspy y confirme los detalles específicos del dispositivo con el fabricante.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas de configuración del proveedor. El EElink K9 suele admitir configuración vía SMS y reporte por GPRS, por lo que esta guía se centra en el uso de los comandos SMS públicos y el endpoint de servidor de Plaspy para habilitar el rastreo y la visibilidad en la plataforma.

## Resumen de configuración

El objetivo de configurar el K9 para Plaspy es dejar el rastreador listo para enviar ubicación y estado de forma fiable a la plataforma Plaspy y validar que el dispositivo sea visible en la cuenta. Normalmente esto implica ajustar parámetros de red, apuntar el dispositivo a los endpoints de servidor de Plaspy y verificar el comportamiento de reporte.

- Configurar el APN del dispositivo para que pueda usar datos GPRS en el envío de reportes
- Establecer el endpoint y puerto del servidor Plaspy para que el rastreador envíe telemetría a Plaspy
- Elegir el protocolo de transporte si el dispositivo lo requiere y guardar la configuración
- Validar conectividad y envío de datos para que el dispositivo aparezca en Plaspy
- Usar comandos SMS si el firmware o la instalación limitan el acceso a herramientas locales de configuración

## Ajustes del servidor Plaspy

- dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- puerto 8888
- el transporte puede configurarse como UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador
- Todos los dispositivos en Plaspy usan el mismo puerto 8888 para reportes

## Requisitos típicos antes de la configuración

- Un EElink K9 con batería instalada y encendido
- Una tarjeta SIM activa con plan de datos y el APN correcto del operador móvil
- Capacidad para enviar y recibir SMS al número de la SIM del K9 para configuración vía SMS
- Acceso a los comandos de configuración oficiales de EElink o al software proporcionado por el proveedor
- Confirmación de la versión de firmware del dispositivo y posibles diferencias en comandos según el fabricante

## Cómo se conecta este rastreador a Plaspy

El EElink K9 se configura para enviar datos de ubicación y eventos a Plaspy apuntando el dispositivo al endpoint y puerto compartidos de Plaspy. El rastreador utiliza el APN configurado para establecer una sesión de datos GPRS y luego envía paquetes de telemetría al servidor. Plaspy recibe esos paquetes en el mismo puerto para todos los dispositivos compatibles y selecciona automáticamente el parser de protocolo correcto.

- El rastreador envía actualizaciones periódicas de ubicación al endpoint de Plaspy
- Los eventos como SOS, geovalla o alarmas de velocidad se reenvían a Plaspy
- El dispositivo se configura para usar d.plaspy.com o la dirección IP 54.85.159.138 con el puerto 8888
- Los paquetes pueden enviarse por UDP o TCP según la configuración del equipo
- Plaspy recibe datos en un único puerto compartido y detecta el protocolo para su procesamiento

## Flujo típico de configuración

1. Acceda al método de configuración oficial de EElink o al software y revise la lista de comandos SMS publicados o la documentación de la herramienta.
2. Asegúrese de que la SIM esté activa y conozca el APN correcto del operador.
3. Ingrese el endpoint del servidor Plaspy como d.plaspy.com o 54.85.159.138.
4. Configure el puerto del servidor a 8888 y seleccione UDP o TCP si el dispositivo requiere elegir el transporte.
5. Aplique o guarde la configuración en el rastreador y envíe los comandos SMS necesarios.
6. Reinicie el dispositivo si las instrucciones del fabricante o el firmware requieren un reinicio para aplicar los ajustes.
7. Verifique que el dispositivo reporte a Plaspy y aparezca en su cuenta de Plaspy o que el rastreador devuelva estado vía SMS.

## Comandos de configuración de ejemplo

El EElink K9 admite configuración vía SMS con los siguientes comandos públicos. Envíe estos mensajes SMS al número de la SIM del rastreador en el orden requerido. El comando de reinicio es opcional y se utiliza típicamente en la configuración inicial o al recuperar ajustes desconocidos.

1. Reinicio opcional a valores de fábrica
```text
FACTORY#
```
2. Establecer la zona horaria a UTC 0
```text
GMT,E,0#
```
3. Configurar el APN del operador móvil
```text
APN,[apn],[apnu],[apnp]#
```
- [apn] es el nombre del APN del operador
- [apnu] es el nombre de usuario del APN si su operador lo requiere
- [apnp] es la contraseña del APN si su operador lo requiere
- Si su operador no requiere usuario ni contraseña, envíe solo APN,[apn]#

4. Establecer el servidor GPRS usando el dominio de Plaspy y el puerto
```text
SERVER,1,d.plaspy.com,8888#
```
5. O establecer el servidor GPRS usando la IP de Plaspy y el puerto
```text
SERVER,0,54.85.159.138,8888#
```
6. Configurar el intervalo de envío de posición (ejemplo 60 segundos)
```text
TIMER,60#
```
7. Consultar parámetros actuales para verificar ajustes
```text
PARAM#
```

## Notas de configuración

- La configuración vía SMS es de uso habitual en el K9; confirme la sintaxis de los comandos SMS según la versión de firmware de su dispositivo.
- Use el comando SERVER con d.plaspy.com o 54.85.159.138 junto con el puerto 8888 como se muestra arriba.
- Elija UDP o TCP según las necesidades de la instalación; ambos transportes son compatibles en el puerto 8888, pero la selección depende del dispositivo.
- Los marcadores [apn], [apnu] y [apnp] deben reemplazarse por las credenciales del operador móvil cuando sean necesarias.
- Diferentes revisiones de firmware o personalizaciones del proveedor pueden cambiar nombres de comandos u orden de parámetros; siempre verifique con la documentación de EElink.

## Por qué usar Plaspy con esta configuración

Configurar el EElink K9 para reportar a Plaspy brinda a organizaciones y usuarios individuales un endpoint consistente para datos de ubicación y eventos, visibilidad centralizada entre dispositivos y la capacidad de supervisar el estado operativo y las alarmas en una sola plataforma. Usar los ajustes de servidor compartidos de Plaspy simplifica la incorporación, ya que Plaspy acepta telemetría de dispositivos en un único puerto y detecta automáticamente los protocolos compatibles.

Para obtener más información sobre Plaspy y las configuraciones compatibles visite https://www.plaspy.com. Para referencias de comandos específicos del EElink K9, notas de firmware y orientación del fabricante, verifique la información más reciente en https://www.eelink.com.cn/ ya que el comportamiento del dispositivo y los métodos de configuración pueden cambiar con el tiempo.
