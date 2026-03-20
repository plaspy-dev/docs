---
slug: /sanav/gc_101/configuration
id: gc_101-configuration
sidebar_label: Configuration
title: Sanav - GC-101 Configuration
sidebar_class_name: menu_item_tracker
description: Guía de configuración del Sanav GC-101 para usar con Plaspy y asegurar seguimiento GPRS fiable
keywords:
  - Configuración Sanav GC-101
  - Instalación Sanav GC-101
  - Sanav GC-101 Plaspy
  - Configuración rastreador Sanav
  - Configuración servidor GC-101
  - Ajustes GPS GC-101
  - Configuración rastreador Plaspy
  - Configuración seguimiento de flotas
  - Configuración GPRS rastreador
  - Configuración seguimiento de vehículos
---

# Sanav - Configuración del GC-101

Esta página ofrece el contexto público de configuración para usar el rastreador GPS SANAV GC-101 con Plaspy. Resume los pasos prácticos, basados en la documentación del fabricante, y la información del servidor Plaspy necesaria para conectar el dispositivo y permitir que envíe datos de ubicación y sea visible en las vistas de flota de Plaspy.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El GC-101 soporta cargas por GPRS y transporte por TCP y UDP; esta página también incluye los comandos por SMS publicados por el fabricante que se usan habitualmente para preparar el equipo para Plaspy.

## Resumen de la configuración

El proceso de configuración prepara al GC-101 para enviar su ubicación y estado a la plataforma Plaspy mediante GPRS. Las tareas habituales incluyen configurar el APN del operador, apuntar el dispositivo al endpoint del servidor Plaspy, seleccionar el método de transporte y definir un intervalo de reporte acorde con sus necesidades de seguimiento.

- Prepare el dispositivo para conectarse a la red móvil configurando los parámetros APN proporcionados por su operador de SIM.
- Configure el endpoint del servidor GPRS para que el rastreador cargue los datos de posición a Plaspy.
- Seleccione el método de transporte (UDP o TCP) y confirme que el dispositivo usa el puerto que Plaspy espera.
- Establezca intervalos de reporte periódicos para que el rastreador envíe actualizaciones de posición con la cadencia deseada.
- Verifique la conectividad y que el dispositivo sea visible en Plaspy tras la configuración.

## Ajustes del servidor Plaspy

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol

Estos valores exactos son los que usa Plaspy para la conectividad de los dispositivos. Plaspy mantiene el mismo puerto para todos los equipos compatibles y detectará automáticamente el protocolo correcto.

## Requisitos habituales antes de la configuración

- Un dispositivo GC-101 con alimentación y acceso a su interfaz de SMS o de configuración.
- Una tarjeta SIM funcional con servicio de datos GPRS activo y la información del APN del operador.
- Capacidad para enviar comandos SMS al dispositivo o acceso a la herramienta de configuración del fabricante.
- Conocimiento de la contraseña del equipo; el ejemplo del fabricante usa la contraseña por defecto 0000.
- Confirmación del comportamiento del firmware del GC-101 respecto a los comandos SMS y el formato de parámetros del servidor.

## Cómo se conecta este rastreador a Plaspy

El SANAV GC-101 emplea GPRS para subir información de posición estándar a un servidor web asignado. Para la integración con Plaspy, el rastreador se configura para enviar sus datos al endpoint y puerto compartidos de Plaspy para que la plataforma pueda ingerir y mostrar el flujo de datos del dispositivo.

- El dispositivo sube sentencias RMC que contienen latitud, longitud, velocidad y hora mediante GPRS al servidor configurado.
- El rastreador puede usar TCP o UDP para entregar los paquetes al endpoint de Plaspy.
- Plaspy recibe los datos entrantes en el puerto 8888 y detecta automáticamente el protocolo del rastreador.
- Una vez que el reporte está activo, Plaspy muestra la ubicación, el movimiento y el estado del dispositivo para la supervisión de la flota.
- Los intervalos de reporte regulares aseguran visibilidad operativa y permiten el monitoreo basado en eventos desde Plaspy.

## Flujo típico de configuración

1. Acceda al método o software de configuración oficial del fabricante, o prepárese para enviar comandos SMS según lo indicado por el fabricante.
2. Ingrese el endpoint del servidor Plaspy, ya sea como dominio d.plaspy.com o como la IP 54.85.159.138 según el soporte de la herramienta o firmware del dispositivo.
3. Configure el puerto en 8888 en los ajustes del servidor del equipo.
4. Elija UDP o TCP si el rastreador requiere la selección de transporte.
5. Configure el APN del operador y las credenciales que su proveedor móvil requiera.
6. Aplique o guarde la configuración y reinicie el dispositivo si el firmware lo exige.
7. Valide que el dispositivo reporte a Plaspy y que aparezca en la plataforma.

Si utiliza la configuración vía SMS, emplee los comandos del fabricante que se muestran a continuación en el orden indicado y reemplace los marcadores por los datos del APN de su operador cuando sea necesario.

## Ejemplos de comandos de configuración

Los siguientes comandos por SMS son los ejemplos públicos proporcionados por el fabricante para configurar el GC-101. La configuración de ejemplo utiliza la contraseña del dispositivo 0000 por defecto. Envíe cada comando por SMS al número del dispositivo. Los comandos están mostrados en orden; el restablecimiento de fábrica es opcional y solo debe usarse cuando sea necesario durante la puesta en marcha inicial.

- Factory reset (opcional reinicio inicial)
```text
#username,0000,9*
```
Este comando realiza un restablecimiento de fábrica. Úselo solo cuando sea necesario para borrar configuraciones previas.

- Set the operator APN
```text
#username,0000,3,{{apn}},{{apnu}},{{apnp}}*
```
Reemplace los marcadores:
- {{apn}} = nombre del APN del operador
- {{apnu}} = nombre de usuario del APN si lo requiere el operador (dejar en blanco si no aplica)
- {{apnp}} = contraseña del APN si la requiere el operador (dejar en blanco si no aplica)

- Set the GPRS Server to Plaspy
```text
#username,0000,18,54.85.159.138:8888*
```
Esto configura el rastreador para enviar datos a la IP y puerto del servidor Plaspy. Si su tracker permite ingresar un nombre de dominio, puede alternativamente configurar d.plaspy.com.

- Set the route for data transmission
```text
#username,0000,14,9*
```
Este comando establece la ruta de datos según lo requerido por el dispositivo para el reporte por GPRS. Mantenga a mano la documentación del fabricante para las opciones de ruta.

- Set update interval to 60 seconds
```text
#username,0000,6,60,9999*
```
Esto fija el intervalo de reporte en 60 segundos (primer valor) y un segundo parámetro que a menudo se usa para comportamientos extendidos; consulte la documentación SANAV para el significado exacto de los parámetros. Ajuste el intervalo según la batería y el consumo de datos que desee.

## Notas de configuración

- El GC-101 soporta la configuración por SMS como se muestra en los comandos de ejemplo; algunos instaladores prefieren usar el software del fabricante cuando esté disponible.
- Las versiones de firmware o las revisiones de hardware pueden cambiar la sintaxis exacta de los comandos SMS o los parámetros soportados; verifique contra la documentación de firmware de su dispositivo.
- Cuando sea posible, use el dominio d.plaspy.com; si el dispositivo u operador requiere una IP, use 54.85.159.138 como se muestra en el ejemplo.
- Plaspy usa el puerto 8888 para todos los dispositivos y detecta automáticamente el protocolo, por lo que la misma configuración de puerto se aplica a los rastreadores compatibles.
- Elija UDP o TCP según los requisitos de la instalación y el comportamiento de la red; Plaspy aceptará cualquiera de los dos y detectará el protocolo automáticamente.

## Por qué usar Plaspy con esta configuración

Usar el SANAV GC-101 con Plaspy ofrece a las organizaciones una vía sencilla para integrar la telemetría del dispositivo en una plataforma centralizada para la visibilidad de la flota y la supervisión operativa. Configurar correctamente el APN y apuntar el rastreador al servidor Plaspy garantiza cargas GPRS fiables para que las actualizaciones de posición y los reportes básicos de estado aparezcan en sus paneles de Plaspy.

Learn more about Plaspy and how it ingests device data at https://www.plaspy.com. Manufacturer specifications, setup methods, and device behavior can change over time; verify the latest device-specific configuration guidance and firmware details on the official manufacturer website http://es.sanav.com/ before deploying at scale.
