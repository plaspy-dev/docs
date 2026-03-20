---
slug: /hunterpro/cp60_counter/configuration
id: cp60_counter-configuration
sidebar_label: Configuration
title: HunterPro - CP60-COUNTER Configuration
sidebar_class_name: menu_item_tracker
description: Notas públicas de configuración del rastreador HunterPro CP60-COUNTER para Plaspy con servidor compartido y detección automática
keywords:
  - Configuración HunterPro CP60 COUNTER
  - Instalación HunterPro CP60 COUNTER
  - HunterPro CP60 COUNTER en Plaspy
  - Configuración de servidor CP60 COUNTER
  - Configuración GPS CP60 COUNTER
  - Configuración de rastreador Plaspy
  - Ajustes de servidor Plaspy
  - Configuración de dispositivo de conteo de pasajeros
  - Configuración de plataforma rastreo GPS
  - Rastreo de flotas CP60 COUNTER
---

# HunterPro - Configuración CP60-COUNTER

Esta página documenta el contexto público de configuración para usar el HunterPro CP60-COUNTER con Plaspy. Se centra en los ajustes de servidor prácticos y el flujo de trabajo que debe aplicar para que el CP60-COUNTER pueda enviar datos de conteo de pasajeros y ubicación a la plataforma Plaspy mediante su transmisión GPRS.

Plaspy utiliza ajustes de servidor compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, pero los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Use esta guía para preparar y validar la conectividad, y consulte la documentación de HunterPro para los nombres de menú y las notas de firmware específicas del dispositivo.

## Resumen de la configuración

El objetivo de este proceso es preparar el CP60-COUNTER para que informe en tiempo real la ubicación y los eventos de entrada y salida de pasajeros a Plaspy. La configuración usualmente garantiza que el dispositivo tenga los ajustes GPRS correctos, apunte al punto final de Plaspy y confirme el transporte y el puerto para que la plataforma reciba los datos de forma confiable.

- Configure el dispositivo para que reporte al endpoint de Plaspy y así lleguen al sistema los eventos de ubicación y de pasajeros
- Ajuste el APN y las credenciales GPRS para que el rastreador establezca conectividad de datos móviles
- Ingrese el dominio o la IP del servidor de Plaspy y el puerto compartido usado por todos los dispositivos
- Seleccione UDP o TCP si el dispositivo exige una elección explícita de transporte
- Guarde y aplique los ajustes y luego valide que el CP60-COUNTER aparezca en Plaspy
- Confirme pasos específicos de firmware y herramientas del fabricante si algún campo difiere de esta guía pública

## Ajustes del servidor de Plaspy

Use los siguientes ajustes públicos del servidor de Plaspy al configurar el HunterPro CP60-COUNTER. Estos valores son la información de endpoint estándar que Plaspy espera para los dispositivos compatibles.

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte: soporte para UDP o TCP según las opciones de configuración del dispositivo
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que los dispositivos pueden reportar sin seleccionar el protocolo manualmente en la plataforma

Tenga en cuenta que Plaspy usa el mismo puerto para todos los dispositivos compatibles y detectará automáticamente el protocolo correcto.

## Requisitos típicos antes de la configuración

- Asegúrese de que el CP60-COUNTER tenga una tarjeta SIM válida con un plan de datos GPRS activo
- Conozca el APN de la red móvil y cualquier usuario o contraseña APN que requiera el operador de la SIM
- Tenga acceso físico al dispositivo o acceso a la herramienta de configuración del fabricante usada para el CP60-COUNTER
- Confirme que el dispositivo tenga energía y pueda obtener fijación GPS y registro en la red móvil
- Descargue o consulte las instrucciones de configuración de HunterPro para su revisión de firmware
- Reserve una ventana de prueba breve para verificar que el dispositivo se registre y envíe datos a Plaspy

## Cómo se conecta este rastreador a Plaspy

El CP60-COUNTER envía eventos de ubicación y de entrada y salida de pasajeros por GPRS al endpoint y puerto del servidor Plaspy. Una vez configurado, Plaspy recibe los datos y hace visible el dispositivo en la plataforma para monitoreo y generación de reportes en tiempo real.

- El rastreador informa de forma periódica y por disparadores de eventos al endpoint compartido de Plaspy
- Los datos se transmiten mediante datos móviles GPRS a d.plaspy.com o 54.85.159.138 en el puerto 8888
- El transporte puede ser UDP o TCP según la opción de configuración del dispositivo
- Plaspy detecta automáticamente el protocolo del rastreador y decodifica los mensajes entrantes
- La conexión exitosa habilita la visibilidad de la ubicación en vivo y el conteo de pasajeros en Plaspy

## Flujo de trabajo típico de configuración

1. Acceda al método de configuración oficial del HunterPro CP60-COUNTER o al software recomendado por el fabricante
2. Configure el APN GPRS y las credenciales de la SIM para que el dispositivo pueda conectarse a datos móviles
3. Ingrese d.plaspy.com o la IP del servidor 54.85.159.138 como servidor de reporte
4. Establezca el puerto en 8888, ya que Plaspy utiliza el mismo puerto para todos los dispositivos
5. Elija UDP o TCP si el dispositivo requiere selección de transporte
6. Aplique o guarde la configuración en la herramienta o en el menú del dispositivo
7. Reinicie el dispositivo si el fabricante o la herramienta lo requieren para aplicar los cambios
8. Valide que el dispositivo esté reportando a Plaspy y sea visible en la plataforma

## Ejemplos de comandos de configuración

El CP60-COUNTER se configura típicamente usando herramientas suministradas por HunterPro o el menú del dispositivo, y los comandos exactos o cadenas SMS pueden variar según el firmware y la herramienta. Debido a que la sintaxis de configuración del fabricante difiere, consulte la guía de configuración de HunterPro para las líneas de comando o formatos SMS exactos que se usan para establecer servidor, puerto, APN y opciones de transporte.

Si recibe una lista de comandos públicos de HunterPro o de su proveedor, aplíquelos en el orden indicado y verifique cada paso con una prueba de conectividad al servidor Plaspy en d.plaspy.com o 54.85.159.138 en el puerto 8888.

## Notas de configuración

- Los nombres de menú de firmware y de configuración varían entre revisiones de hardware, por lo que debe remitirse al manual de HunterPro para su firmware específico del CP60-COUNTER
- Elija UDP o TCP según la preferencia del instalador y el soporte del dispositivo; Plaspy aceptará cualquiera de los dos, pero el dispositivo debe quedar configurado correctamente
- Asegúrese de que el APN y cualquier credencial sean correctos para la operadora de la SIM antes de apuntar el dispositivo a Plaspy
- Dado que Plaspy usa un único puerto para todos los dispositivos, utilice el puerto 8888 en la configuración del equipo para simplificar el despliegue
- Si configura mediante SMS o una herramienta de configuración, confirme que los ajustes se guardaron y que el dispositivo se reinició si es necesario

## Por qué usar Plaspy con esta configuración

Usar el HunterPro CP60-COUNTER con Plaspy ofrece a los operadores de transporte de pasajeros una forma directa de centralizar la recolección de datos de ubicación y de entradas y salidas de pasajeros. Configurar el dispositivo para que reporte al endpoint compartido de Plaspy garantiza que los datos lleguen a la plataforma para monitoreo, generación de reportes y supervisión operativa sin variaciones de servidor por dispositivo.

Learn more about how Plaspy receives and displays device data by visiting https://www.plaspy.com. For the most current device specific configuration methods, firmware behavior, and manufacturer details verify setup information on the HunterPro website at http://hunterpro.com.tw/ before deploying changes to production devices.
