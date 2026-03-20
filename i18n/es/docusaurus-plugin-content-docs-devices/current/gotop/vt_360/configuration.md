---
slug: /gotop/vt_360/configuration
id: vt_360-configuration
sidebar_label: Configuration
title: GOTOP - VT-360 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el rastreador GOTOP VT-360 con Plaspy, incluyendo ajustes de servidor y flujo de instalación
keywords:
  - configuración GOTOP VT-360
  - instalación GOTOP VT-360
  - configuración servidor VT-360
  - rastreador GOTOP Plaspy
  - configuración GPS VT-360
  - seguimiento vehicular VT-360
  - guía de configuración GOTOP
  - configuración GPRS VT-360
  - integración GOTOP VT-360
  - configuración de rastreador Plaspy
---

# GOTOP - Configuración VT-360

Esta página describe el contexto público de configuración para usar el rastreador GOTOP VT-360 con Plaspy. Resume los ajustes de servidor compartidos que Plaspy espera, explica los pasos prácticos que suelen seguir los instaladores y destaca los requisitos habituales para que el VT-360 pueda comunicarse con la plataforma. El VT-360 es un dispositivo GPS GSM GPRS que admite seguimiento en tiempo real por GPRS y enlaces de ubicación por SMS, por lo que esta guía se centra en preparar esas vías de comunicación para Plaspy.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del tracker cuando el equipo se conecta. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor que utilice para configurar el VT-360. Considere este documento como una guía práctica pública y verifique cualquier detalle específico del dispositivo en la documentación oficial de GOTOP cuando sea necesario.

## Visión general de la configuración

El objetivo de este proceso es apuntar el VT-360 a Plaspy para que el dispositivo pueda reportar ubicación y eventos de alarma de forma fiable a la plataforma. Preparará el tracker para la conexión de datos, confirmará el acceso a la red y verificará que el dispositivo sea visible en Plaspy.

- Configure el tracker para enviar datos a d.plaspy.com o a la IP del servidor Plaspy en el puerto compartido
- Asegúrese de que el VT-360 tenga una SIM activa con capacidad GPRS y el APN correcto si lo requiere su operador móvil
- Elija transporte UDP o TCP si el dispositivo solicita selección de transporte al enviar a Plaspy
- Guarde y aplique la configuración del fabricante y reinicie el dispositivo cuando sea necesario
- Valide la conectividad y que Plaspy reciba la primera posición o evento del tracker

## Ajustes del servidor de Plaspy

Use estos ajustes públicos de Plaspy al configurar el VT-360 para que el dispositivo reporte al endpoint y puerto correctos.

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP según las opciones de configuración del dispositivo
- Plaspy detecta automáticamente el protocolo del tracker cuando el dispositivo se conecta

Tenga en cuenta que todos los dispositivos en Plaspy usan el mismo puerto, por lo que solo necesita establecer el puerto 8888 para los trackers compatibles.

## Requisitos típicos antes de la instalación

- Confirme que el VT-360 esté alimentado y tenga la batería interna cargada si va a probarse fuera de la alimentación permanente del vehículo
- Inserte una SIM activa con datos habilitados y verifique el APN del operador si el dispositivo va a usar GPRS
- Obtenga acceso a la herramienta o método oficial de configuración GOTOP requerido para su unidad y firmware
- Conozca el IMEI o identificador del dispositivo para poder registrar o identificar el equipo en Plaspy una vez que se conecte
- Disponga de una lista básica de alarmas e entradas que desea habilitar para poder probar el reporte tras la configuración

## Cómo se conecta este tracker a Plaspy

Cuando se configura para Plaspy, el VT-360 enviará su posición e información de eventos al endpoint y puerto compartidos de Plaspy. Plaspy recibe los datos y los asocia al registro del dispositivo para que usted pueda monitorear ubicaciones y alarmas en la plataforma.

- El VT-360 reporta datos de ubicación y estado a d.plaspy.com o 54.85.159.138 en el puerto 8888
- El transporte puede ser UDP o TCP según la configuración del equipo
- El reporte en tiempo real por GPRS entrega posiciones periódicas y alarmas a Plaspy para visibilidad y monitoreo
- Los enlaces de ubicación por SMS siguen siendo útiles para inspecciones rápidas o como respaldo donde no haya GPRS
- Plaspy detecta automáticamente el protocolo del dispositivo una vez que el tracker inicia la comunicación

## Flujo de configuración habitual

1. Acceda al método de configuración oficial de GOTOP para el VT-360, usando el software del fabricante, comandos SMS o cable de configuración según lo permita su unidad
2. Ingrese el servidor de Plaspy como dominio d.plaspy.com o la IP 54.85.159.138 en el campo de servidor o APN correspondiente
3. Establezca el puerto del servidor en 8888, que es el puerto compartido de Plaspy para todos los dispositivos compatibles
4. Seleccione UDP o TCP si su versión del VT-360 solicita elegir transporte
5. Configure cualquier información de APN requerida para que GPRS pueda conectarse si el dispositivo usa datos móviles
6. Aplique o guarde la configuración y reinicie el dispositivo si el fabricante lo requiere
7. Valide que el dispositivo reporte a Plaspy confirmando que la primera posición o evento aparezca en la lista de dispositivos de Plaspy

## Ejemplos de comandos de configuración

Los comandos y el método exacto de configuración varían según el firmware de GOTOP y la herramienta de configuración que utilice. Algunos instaladores configuran el VT-360 con comandos SMS del fabricante, mientras que otros usan una herramienta de configuración por USB o serie. Independientemente del método, los valores críticos de servidor y puerto son d.plaspy.com o 54.85.159.138 y puerto 8888 con UDP o TCP seleccionado si se solicita. Plaspy detectará automáticamente el protocolo del tracker cuando el dispositivo se conecte.

Si utiliza la configuración por SMS proporcionada por el fabricante, consulte la documentación de GOTOP para las plantillas de comando exactas. Mantenga a mano el endpoint y el puerto de Plaspy al sustituirlos en esas plantillas.

## Notas de configuración

- Las revisiones de firmware y hardware pueden cambiar las opciones de menú disponibles o el formato de los comandos SMS; verifique la documentación de GOTOP que corresponda a la revisión de su dispositivo
- Si el dispositivo ofrece UDP y TCP, elija el transporte que coincida con su red y la preferencia del instalador; Plaspy acepta ambos
- La configuración por SMS puede ser una alternativa rápida para ajustes remotos, pero confirme el reporte por GPRS después de aplicar comandos SMS
- Recuerde que todos los dispositivos de Plaspy usan el mismo puerto, por lo que debe configurar el puerto 8888 para este tracker también
- Las herramientas del fabricante pueden presentar el campo de servidor como dominio o IP; use d.plaspy.com o 54.85.159.138 indistintamente

## Por qué usar Plaspy con esta configuración

Configurar el GOTOP VT-360 para reportar a Plaspy brinda visibilidad centralizada de ubicaciones de vehículos, alarmas y eventos operativos. Para gestores de flota e instaladores, el VT-360 ofrece varias funciones de alarma y entradas que pueden encaminarse a Plaspy para mejorar el monitoreo, la seguridad y la toma de decisiones operativas.

Para conocer más sobre Plaspy visite https://www.plaspy.com y revise el conjunto completo de funciones de la plataforma. Para los comandos de configuración específicos más recientes, notas de firmware y orientación de instalación, siempre verifique los detalles en el sitio oficial de GOTOP https://www.gotop.cc/ ya que las especificaciones y los métodos de configuración del fabricante pueden cambiar con el tiempo.
