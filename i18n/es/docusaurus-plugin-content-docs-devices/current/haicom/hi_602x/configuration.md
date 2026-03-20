---
slug: /haicom/hi_602x/configuration
id: hi_602x-configuration
sidebar_label: Configuration
title: Haicom - HI-602X Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el Haicom HI-602X y apuntarlo a Plaspy usando servidores compartidos
keywords:
  - configuración Haicom HI-602X
  - instalación Haicom HI-602X
  - rastreador Haicom Plaspy
  - configuración GPRS HI-602X
  - comandos SMS HI-602X
  - configuración dispositivo Plaspy
  - configuración rastreador GPS
  - configuración seguimiento de vehículos
  - rastreo de flotas Haicom
  - plataforma GPS Plaspy
---

# Haicom - Configuración del HI-602X

Esta página explica el contexto público de configuración para usar el rastreador Haicom HI-602X con Plaspy. Describe los pasos prácticos disponibles públicamente para apuntar el equipo a los servidores de Plaspy y resume los comandos SMS y parámetros GPRS más comunes publicados para el HI-602X. Use esta guía para comprender los valores de servidor necesarios y el flujo general de integración de un HI-602X con Plaspy.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, aunque los pasos exactos en el lado del fabricante pueden variar según firmware, revisión de hardware, tipo de instalación y herramientas del proveedor. El HI-602X admite configuración por GPRS y por SMS; esta página destaca los comandos SMS públicos para una configuración básica y los valores de servidor de Plaspy que debe aplicar.

## Resumen de configuración

El objetivo al configurar un HI-602X para Plaspy es preparar el rastreador para autenticarse en la red GPRS, apuntarlo al endpoint y puerto compartidos de Plaspy, y confirmar que el equipo empieza a reportar para que sea visible en la plataforma. El HI-602X permite programación remota vía GPRS y SMS, y el fabricante publica comandos SMS para establecer APN, servidor e intervalo de reporte.

- Configure el APN del operador para que el rastreador pueda iniciar una sesión de datos GPRS.
- Establezca el servidor GPRS del dispositivo apuntando al endpoint compartido de Plaspy para que los datos de posición lleguen a la plataforma.
- Seleccione el transporte (UDP o TCP) según lo permita el equipo y la red.
- Defina un intervalo de reporte adecuado para equilibrar oportunidad y consumo de datos.
- Valide la conectividad y confirme que el dispositivo aparece en Plaspy después de la configuración.

## Valores del servidor de Plaspy

- Server domain: d.plaspy.com  
- Server IP: 54.85.159.138  
- Port: 8888 (Plaspy usa el mismo puerto para todos los dispositivos compatibles)  
- Transport: el equipo puede configurarse para usar UDP o TCP en el puerto 8888  
- Protocol detection: Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta

## Requisitos previos antes de la instalación

- Unidad HI-602X con alimentación y accesible, con batería cargada o conectada a la alimentación del vehículo.  
- Tarjeta SIM con GPRS activado insertada en el rastreador, con datos permitidos y credenciales APN correctas.  
- Capacidad para enviar SMS al dispositivo desde un teléfono de aprovisionamiento si va a usar comandos SMS.  
- Acceso al método oficial de configuración Haicom o al software del proveedor y al manual del equipo como referencia.  
- Conocimiento de la contraseña del dispositivo usada en los comandos SMS; en ejemplos públicos suele aparecer 0000 por defecto.  
- Registro de la versión de firmware o revisión de hardware por si los procedimientos del fabricante varían.

## Cómo se conecta este rastreador a Plaspy

El HI-602X se configura para reportar posiciones GPS y estado del dispositivo vía GPRS al endpoint y puerto compartidos de Plaspy. Una vez establecidos servidor y transporte, el equipo abre una conexión con Plaspy y envía actualizaciones periódicas según el intervalo configurado, de modo que la unidad sea visible y rastreable en la plataforma.

- El rastreador envía sesiones de datos GPRS a d.plaspy.com o directamente a 54.85.159.138 en el puerto 8888.  
- Plaspy recibe la conexión en el puerto 8888 y detecta automáticamente el protocolo del rastreador.  
- Las actualizaciones de posición se envían según el intervalo configurado para que el dispositivo aparezca en Plaspy.  
- El transporte puede ser UDP o TCP según la configuración del equipo y las condiciones de la red.  
- Plaspy procesa los mensajes entrantes y muestra en la plataforma la posición y los eventos del dispositivo.

## Flujo de configuración habitual

1. Acceda al método de configuración oficial de Haicom para el HI-602X, normalmente comandos SMS o la herramienta del proveedor, y confirme la contraseña del equipo.  
2. Ingrese los valores del servidor de Plaspy especificando el dominio d.plaspy.com o la IP 54.85.159.138 según indique el método del dispositivo.  
3. Configure el puerto del equipo en 8888. Plaspy utiliza el mismo puerto para todos los dispositivos.  
4. Elija el transporte (UDP o TCP) si el dispositivo requiere selección explícita.  
5. Aplique o guarde la configuración en el equipo y envíe los comandos de confirmación que sean necesarios.  
6. Reinicie el dispositivo si el fabricante o el firmware lo requieren para activar los ajustes nuevos.  
7. Verifique que el rastreador reporte a Plaspy comprobando las conexiones entrantes y las actualizaciones de posición en la plataforma.

## Ejemplos de comandos de configuración

El HI-602X admite configuración mediante SMS. Los ejemplos públicos a continuación usan la contraseña del dispositivo 0000, que aparece como valor por defecto en ejemplos publicados. Preserve los marcadores de posición al sustituir sus credenciales APN reales.

- Configurar el APN del operador (reemplazar los marcadores con sus valores de APN)
```text
#0000,200,{{apn}},{{apnu}},{{apnp}}
```
Explicación: {{apn}} es el nombre del APN proporcionado por su operador móvil. {{apnu}} y {{apnp}} son los campos opcionales de usuario y contraseña del APN y con frecuencia se dejan en blanco si el operador no los requiere.

- Establecer el servidor GPRS a Plaspy (IP del servidor y puerto)
```text
#0000,210,54.85.159.138,8888,8888,8888,0
```
Explicación: Este ejemplo público configura el servidor GPRS apuntando a Plaspy con la IP 54.85.159.138 y puerto 8888. Plaspy usa el puerto 8888 para todos los dispositivos y soporta tanto UDP como TCP. Mantenga el orden de los campos tal como lo exige el firmware del equipo.

- Establecer el intervalo de reporte de posición a 60 segundos
```text
#0000,250,0,60,0,0,0,0,0,0
```
Explicación: Este comando configura el equipo para enviar actualizaciones cada 60 segundos según el ejemplo público del dispositivo. Ajuste el intervalo para cumplir con sus requisitos de seguimiento y consumo de datos.

Nota: Al enviar comandos SMS reemplace 0000 por la contraseña de su equipo si se ha cambiado el valor por defecto. Si utiliza la herramienta del fabricante o aprovisionamiento por aire, aplique valores equivalentes para servidor, puerto, APN e intervalo.

## Notas de configuración

- Las revisiones de firmware y hardware pueden cambiar el formato de comandos y los campos disponibles; siempre consulte la documentación del HI-602X correspondiente a la versión de firmware de su unidad.  
- El HI-602X admite configuración vía SMS en ejemplos públicos, pero los fabricantes también pueden ofrecer una herramienta de configuración o una interfaz web para aprovisionamiento masivo.  
- Elija UDP o TCP según la fiabilidad de la red y las recomendaciones de su operador móvil; Plaspy acepta ambos en el puerto 8888.  
- Asegúrese de que las credenciales APN sean correctas; un APN incorrecto es la causa más frecuente de que un rastreador no establezca una sesión GPRS.  
- Considere cambiar la contraseña por defecto del dispositivo después del aprovisionamiento inicial por seguridad operativa.

## Por qué usar Plaspy con esta configuración

Configurar el HI-602X para apuntar a Plaspy permite consolidar los datos de rastreo en una plataforma única que reconoce automáticamente los protocolos de los rastreadores compatibles y utiliza un puerto de servidor consistente. Esto simplifica el aprovisionamiento y la gestión continua de dispositivos, además de ofrecer visibilidad en tiempo real de la ubicación y el estado de los equipos para flotas, activos o casos de uso de seguimiento personal.

To learn more about Plaspy visit https://www.plaspy.com. For the most up to date device specific instructions, firmware notes, and user manuals for the HI-602X verify details with Haicom at http://www.haicom.com.tw/ as manufacturer procedures and firmware behavior can change over time.
