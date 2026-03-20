---
slug: /xirgo/xt_2400/configuration
id: xt_2400-configuration
sidebar_label: Configuration
title: Xirgo - XT-2400 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del Xirgo XT-2400 para conectarlo a Plaspy con ajustes de servidor y ejemplos de comandos SMS
keywords:
  - configuración Xirgo XT-2400
  - instalación Xirgo XT-2400
  - configuración rastreador Xirgo
  - configuración XT-2400 en Plaspy
  - configuración servidor rastreador GPS
  - configuración rastreador OBDII
  - configuración seguimiento vehicular
  - seguimiento de flotas XT-2400
  - integración plataforma GPS
  - ajustes rastreador Plaspy
---

# Xirgo - Configuración XT-2400

Esta página documenta el contexto público de configuración para usar el Xirgo XT-2400 con Plaspy. Se enfoca en los ajustes de servidor prácticos, las preparaciones necesarias y ejemplos de comandos que están públicamente disponibles para apuntar el rastreador a Plaspy y habilitar el envío de telemetría y ubicaciones.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor, así que considere los ejemplos aquí como una guía práctica y consulte los recursos del fabricante cuando sea necesario.

## Resumen de la configuración

El objetivo de este proceso es preparar el XT-2400 para que se comunique de forma confiable con Plaspy y sea visible en su plataforma de monitoreo. Los comandos de ejemplo abajo reflejan patrones de configuración por SMS públicamente documentados para establecer el APN y el endpoint del servidor GPRS.

- Configure el dispositivo para usar el APN y las credenciales de datos móviles correctas para acceder a la red celular.
- Establezca el endpoint del servidor para que el rastreador reporte a Plaspy en el servidor y puerto compartidos.
- Seleccione la opción de transporte si el dispositivo requiere elegir explícitamente UDP o TCP.
- Aplique y guarde la configuración, y reinicie el dispositivo si es necesario para activar los cambios.
- Valide que el dispositivo aparezca en Plaspy y que se reciban actualizaciones de ubicación y estado.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com  
- IP del servidor 54.85.159.138  
- Puerto 8888  
- Soporte de transporte UDP o TCP en el puerto 8888  
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta

Estos valores son los detalles públicos del endpoint de Plaspy que debe usar al configurar el XT-2400.

## Requisitos típicos antes de la configuración

- Un dispositivo XT-2400 con alimentación instalado o conectado a la toma OBD II del vehículo cuando aplique.
- Una SIM celular activa con un plan de datos compatible y el APN correcto para el operador.
- Capacidad para enviar comandos de configuración por SMS o acceso a la herramienta oficial de configuración Xirgo según el método que elija.
- Acceso a la referencia de comandos SMS del XT-2400 o a la guía de configuración del fabricante para confirmar la sintaxis de los comandos.
- Acceso administrativo a Plaspy para verificar que el rastreador aparezca como activo después de la configuración.

## Cómo se conecta este rastreador a Plaspy

El XT-2400 se configura para reportar ubicación y datos del dispositivo al endpoint y puerto compartidos de Plaspy. Una vez aplicados el APN y los ajustes de servidor, el dispositivo establecerá una sesión de datos GPRS y enviará telemetría a Plaspy, donde la plataforma identificará el protocolo automáticamente.

- El rastreador usa la conexión de datos celular para enviar actualizaciones de ubicación y estado a d.plaspy.com o a 54.85.159.138.
- Los datos se envían por el puerto 8888 usando el modo de transporte que seleccione en el dispositivo, UDP o TCP.
- Plaspy recibe la conexión entrante y detecta automáticamente el protocolo del rastreador para el parseo.
- La telemetría se vuelve visible en Plaspy para monitoreo, reportes y flujos operativos.
- La validación de conectividad se realiza confirmando que el dispositivo se registra y reporta en Plaspy.

## Flujo común de configuración

1. Identifique y abra el método oficial de configuración Xirgo para el XT-2400, como comandos SMS o el software del proveedor.  
2. Ingrese el servidor de Plaspy usando el dominio d.plaspy.com o la IP del servidor 54.85.159.138 según lo requiera la interfaz del dispositivo.  
3. Establezca el puerto del servidor en 8888.  
4. Elija UDP o TCP como transporte si el dispositivo requiere una selección explícita.  
5. Configure el APN del dispositivo y cualquier usuario o contraseña del APN necesarios para que el rastreador pueda establecer datos GPRS.  
6. Aplique o guarde la configuración y reinicie el dispositivo si es necesario para activar los nuevos ajustes.  
7. Valide que el dispositivo reporte a Plaspy y aparezca como activo en su cuenta de Plaspy.

Si su distribuidor o instalador utiliza una herramienta de proveedor diferente, siga el flujo documentado por ellos pero asegúrese de aplicar el servidor y puerto indicados arriba.

## Comandos de configuración de ejemplo

El XT-2400 soporta configuración vía SMS. Las siguientes instrucciones públicas por SMS son una secuencia de ejemplo para establecer el APN del operador y el servidor GPRS para Plaspy. Envíe cada línea como un SMS separado desde un número autorizado o según el procedimiento de configuración por SMS del dispositivo.

1. Establezca el APN del operador. Reemplace los marcadores por los valores de su operador:
```text
+XT:1002,{{apnu}},{{apnp}},{{apn}}
```
- {{apn}} es el nombre del APN proporcionado por el operador móvil.
- {{apnu}} es el nombre de usuario del APN si se requiere, o déjelo en blanco si no aplica.
- {{apnp}} es la contraseña del APN si se requiere, o déjelo en blanco si no aplica.

2. Configure el servidor GPRS hacia Plaspy. Esto establece el puerto 8888 y la IP del servidor Plaspy:
```text
+XT:1001,8888,54.85.159.138,4,0,0
```
- El comando incluye el puerto requerido 8888 y la IP del servidor Plaspy 54.85.159.138.
- Envíe los comandos en el orden mostrado cuando el orden sea relevante para su flujo.

Si prefiere el software del proveedor o una herramienta de aprovisionamiento, use campos equivalentes para ingresar el dominio o la IP, el puerto 8888 y los valores de APN indicados arriba.

## Notas de configuración

- Las variantes de firmware y regionales pueden cambiar la sintaxis de los comandos o los métodos de configuración disponibles. Confirme los comandos según la revisión de firmware del dispositivo.
- El XT-2400 soporta la configuración por SMS como se muestra, pero muchos instaladores usan una herramienta de aprovisionamiento del proveedor o una app de configuración en lugar de SMS.
- Elija UDP o TCP según las características de la red o la recomendación del instalador; Plaspy aceptará cualquiera de los dos y detectará el protocolo automáticamente.
- Plaspy utiliza el mismo puerto 8888 para todos los dispositivos soportados, por lo que asegúrese de mantener consistencia al aprovisionar múltiples dispositivos.
- Mantenga un registro de los marcadores que reemplace, como {{apn}}, {{apnu}} y {{apnp}}, para mantenimiento futuro.

## Por qué usar Plaspy con esta configuración

Configurar el Xirgo XT-2400 para reportar a Plaspy proporciona una vía sencilla hacia la visibilidad del vehículo, monitoreo de eventos y supervisión operativa. Usar el endpoint compartido de Plaspy simplifica el aprovisionamiento en flotas porque los mismos ajustes de servidor y puerto aplican para dispositivos soportados y Plaspy se encarga de la detección del protocolo.

Para saber más sobre Plaspy y las capacidades de la plataforma visite https://www.plaspy.com. Para obtener los métodos de configuración específicos más recientes, notas de firmware y orientación del fabricante verifique los detalles actuales en https://xirgo.com/.
