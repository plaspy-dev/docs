---
slug: /orion/bd_3112/configuration
id: bd_3112-configuration
sidebar_label: Configuration
title: Orion - BD-3112 Configuration
sidebar_class_name: menu_item_tracker
description: Configure el Orion BD-3112 para Plaspy con ajustes públicos de servidor y guía práctica de instalación
keywords:
  - Configuración Orion BD-3112
  - Instalación Orion BD-3112
  - Orion BD-3112 Plaspy
  - Configuración rastreador GPS Orion BD-3112
  - Ajustes servidor BD-3112
  - Configuración rastreador Plaspy
  - Integración rastreador Orion
  - Seguimiento de flotas Orion BD-3112
  - Configuración GPS Plaspy
  - Seguimiento vehicular Orion BD-3112
---

# Orion - Configuración BD-3112

Esta página documenta el contexto público de configuración para usar el rastreador GPS Orion BD-3112 con Plaspy. Resume los ajustes de servidor compartidos que Plaspy requiere y describe los pasos prácticos que normalmente seguirá para apuntar un BD-3112 a la plataforma Plaspy, de modo que el dispositivo pueda reportar ubicación, eventos de geocercas y alertas SOS en Plaspy.

Plaspy utiliza un punto de conexión de servidor consolidado y detección automática de protocolo para los dispositivos soportados, pero los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Use esta guía para preparar el dispositivo y comprender los ajustes compartidos de Plaspy, y consulte la documentación del fabricante para detalles específicos del BD-3112.

## Resumen de la configuración

Este resumen explica el objetivo público de configuración del BD-3112 al integrarlo con Plaspy. El objetivo principal es asegurar que el rastreador pueda alcanzar el punto de conexión del servidor de Plaspy y validar que la plataforma reciba los mensajes de ubicación y eventos.

- Apuntar el BD-3112 al punto de conexión de Plaspy para que pueda enviar datos de GPS y eventos.
- Elegir un protocolo de transporte compatible y configurar el puerto de Plaspy usado por todos los dispositivos.
- Confirmar que el dispositivo tenga conectividad celular funcional y esté alimentado durante las pruebas.
- Verificar que los eventos de geocerca y SOS se transmitan y sean visibles dentro de Plaspy.
- Realizar una prueba de conectividad e informe para que el dispositivo aparezca en la plataforma Plaspy.

## Ajustes del servidor Plaspy

Al configurar el BD-3112 para Plaspy, utilice los siguientes ajustes públicos de servidor como destino para el reporte del dispositivo:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support using UDP or TCP as required by the device
- Plaspy performs automatic protocol detection for supported tracker protocols

Todos los dispositivos que se conectan a Plaspy usan el mismo puerto y Plaspy detectará automáticamente el protocolo del rastreador. Use el dominio o la dirección IP de arriba al configurar el BD-3112.

## Requisitos típicos antes de la configuración

- Una unidad BD-3112 con alimentación y en funcionamiento, lista para configurarse y probarse.
- Una tarjeta SIM activa con datos si el dispositivo requiere conectividad móvil; confirme la cobertura en el lugar de instalación.
- Acceso al método oficial de configuración de Orion o al software proporcionado por el proveedor para el BD-3112.
- Credenciales o permisos necesarios en la herramienta del fabricante para cambiar ajustes de red o servidor.
- Una cuenta en Plaspy y acceso a la plataforma para verificar el reporte del dispositivo tras la configuración.
- Un entorno de prueba controlado para validar conectividad e informes antes de la instalación definitiva.

## Cómo se conecta este rastreador a Plaspy

El BD-3112 se configura para enviar sus reportes de ubicación, estado y eventos al punto de conexión y puerto compartidos de Plaspy. Una vez configurado con los ajustes de Plaspy, la plataforma mostrará actualizaciones de ubicación y alertas para monitoreo y uso operativo.

- El dispositivo transmite mensajes regulares de ubicación y actualizaciones de estado a d.plaspy.com o 54.85.159.138 en el puerto 8888.
- El transporte se selecciona como UDP o TCP en el dispositivo; Plaspy acepta ambos y detecta el protocolo del rastreador.
- Las entradas y salidas de geocerca configuradas en el dispositivo o en herramientas locales se reenvían a Plaspy para notificación.
- Los eventos del botón SOS se transmiten al punto de conexión de Plaspy para que las alertas sean visibles para los operadores.
- La configuración exitosa se confirma al ver que el BD-3112 reporta en la plataforma Plaspy y al validar mensajes recientes.

## Flujo de configuración típico

1. Acceda al método o software oficial de configuración del Orion BD-3112 proporcionado por el fabricante.
2. Ubique la sección de ajustes de servidor o reporte remoto en la herramienta de configuración.
3. Ingrese el objetivo del servidor de Plaspy usando el dominio d.plaspy.com o la IP 54.85.159.138.
4. Establezca el valor del puerto en 8888 según lo requerido por Plaspy.
5. Elija UDP o TCP si el BD-3112 pide seleccionar un transporte para el reporte.
6. Aplique o guarde los cambios de configuración en la herramienta del fabricante.
7. Reinicie o corte y restablezca la alimentación del BD-3112 si el dispositivo requiere reinicio para aplicar cambios de red.
8. Valide que el dispositivo reporte a Plaspy comprobando la presencia del dispositivo y la telemetría reciente en la plataforma Plaspy.

## Ejemplos de comandos de configuración

Los comandos exactos y la sintaxis para el BD-3112 varían según el firmware de Orion y la herramienta del proveedor. Los fabricantes suelen proporcionar una aplicación para Windows, una interfaz web o un conjunto de comandos SMS para la configuración inicial. Dado que no se incluyen comandos públicos específicos del BD-3112 aquí, siga la documentación de Orion o la herramienta de configuración suministrada para establecer el dominio o la IP del servidor y el puerto 8888, y para elegir UDP o TCP.

Si su herramienta u documentación de Orion lista comandos SMS o CLI, aplíquelos en el orden que indique el fabricante y sustituya los marcadores de posición necesarios como APN o credenciales por los valores de su operador. Si necesita ayuda para interpretar los comandos del fabricante, consulte la documentación de soporte de Orion.

## Notas de configuración

- Las diferencias de firmware pueden cambiar las etiquetas de menú, la sintaxis de comandos o las opciones de transporte disponibles en el BD-3112. Confirme la versión de firmware antes de aplicar las instrucciones.
- Elija TCP o UDP según la interfaz de configuración del dispositivo; Plaspy acepta ambos y detectará el protocolo automáticamente.
- Todos los dispositivos de Plaspy usan el mismo puerto 8888, lo que simplifica la configuración del servidor entre varios modelos de rastreadores.
- Pruebe la configuración en un entorno seguro y verifique que los mensajes de geocerca y SOS aparezcan en Plaspy como se espera.
- Consulte siempre la documentación oficial de Orion o el soporte del proveedor para comandos específicos del dispositivo y para los procedimientos de configuración más recientes.

## Por qué usar Plaspy con esta configuración

Usar el Orion BD-3112 con Plaspy brinda a las organizaciones un camino sencillo hacia la visibilidad centralizada de datos de ubicación, eventos de geocerca y reportes de emergencia SOS. Apuntar el rastreador al punto de conexión y puerto compartidos de Plaspy permite a los equipos operativos recibir telemetría coherente e integrar el BD-3112 en flujos de trabajo de monitoreo de flotas y gestión de activos.

To learn more about the Plaspy platform and supported integrations visit https://www.plaspy.com. For the latest device specific setup instructions, firmware notes, and manufacturer guidance verify the current information on the Orion website at http://www.oriontech.com.tw/
