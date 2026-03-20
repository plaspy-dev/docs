---
slug: /autoseeker/at_10/configuration
id: at_10-configuration
sidebar_label: Configuration
title: Autoseeker - AT-10 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para conectar el rastreador Autoseeker AT-10 a Plaspy con ajustes de servidor compartido y pasos prácticos
keywords:
  - configuración Autoseeker AT-10
  - instalación Autoseeker AT-10
  - integración AT-10 Plaspy
  - configuración rastreador GPS Autoseeker
  - configuración servidor AT-10
  - ajustes rastreador Plaspy
  - rastreo vehicular AT-10
  - configuración plataforma AT-10
  - seguimiento de flotas Autoseeker
  - configuración servidor rastreador GPS
---

# Autoseeker - Configuración del AT-10

Esta página documenta el contexto público de configuración para usar el rastreador Autoseeker AT-10 con Plaspy. Explica los ajustes de servidor compartidos que requiere Plaspy y ofrece orientación práctica para preparar el AT-10 a fin de que envíe datos de ubicación y eventos a la plataforma. El contenido se centra en pasos de integración de acceso público y no sustituye al manual oficial de Autoseeker.

Plaspy utiliza puntos finales de servidor compartidos y un puerto único para todos los dispositivos compatibles, detectando automáticamente el protocolo del rastreador. Los pasos precisos en el lado del fabricante para configurar el AT-10 pueden variar según la versión de firmware, la revisión del hardware, el tipo de instalación y las herramientas del proveedor; utilice esta página como guía práctica y contraste con la documentación de Autoseeker cuando sea necesario.

## Resumen de la configuración

Esta configuración prepara el AT-10 para enviar datos de posición y alarmas a Plaspy, de modo que los dispositivos sean visibles y gestionables desde la plataforma. El objetivo es apuntar el rastreador al servidor de Plaspy, confirmar los parámetros de transporte y verificar que la telemetría y las alarmas sean recibidas por Plaspy.

- Configure el endpoint de reporte de red del AT-10 hacia el servidor de Plaspy y el puerto correcto
- Seleccione el método de transporte que requiere el dispositivo y guarde la configuración
- Valide que el rastreador establezca conexión a través de la red celular en vivo
- Confirme que el historial de viajes y los reportes de alarma aparezcan en Plaspy una vez que el dispositivo informe
- Resuelva problemas básicos de conectividad antes de completar la instalación o el despliegue

## Ajustes del servidor Plaspy

Use los siguientes parámetros públicos de Plaspy al configurar el Autoseeker AT-10:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol

Plaspy utiliza el mismo puerto para todos los dispositivos compatibles y detectará el protocolo apropiado cuando el rastreador se conecte.

## Requisitos típicos antes de la instalación

- Confirme que el AT-10 tiene alimentación y que la batería interna o la del vehículo esté cargada
- Asegúrese de que el dispositivo tenga una conexión de datos 4G LTE activa y un plan de datos SIM compatible con la región
- Tenga acceso al método o software oficial de Autoseeker necesario para cambiar los ajustes de servidor y transporte
- Reúna los datos de identificación del dispositivo que pueda necesitar para el registro en la plataforma o para soporte
- Verifique que haya cobertura de red en el lugar de instalación para validar la conectividad
- Planifique cómo verificará los reportes de ubicación y el comportamiento de las alarmas una vez configurado el dispositivo

## Cómo se conecta este rastreador a Plaspy

El AT-10 se configura para enviar datos de ubicación y eventos a Plaspy transmitiendo su telemetría al endpoint y puerto compartidos de Plaspy. Una vez configurado, el dispositivo transmite actualizaciones de posición, historial de viajes y mensajes de alarma a la plataforma, donde son visibles para monitoreo e informes.

- El rastreador envía actualizaciones periódicas de ubicación al servidor d.plaspy.com o directamente a 54.85.159.138
- Todos los datos se envían al puerto 8888, el puerto común de la plataforma
- El transporte puede ser UDP o TCP según el firmware del dispositivo o la selección de configuración
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta al servidor
- Eventos como SOS, geocercas o alarmas de alimentación reportados por el AT-10 se reenviarán a Plaspy para su procesamiento

## Flujo de configuración habitual

1. Acceda al método oficial de configuración o al software para el AT-10 tal como lo describe la documentación del fabricante
2. En los ajustes de servidor del dispositivo introduzca el dominio de Plaspy d.plaspy.com o la IP del servidor 54.85.159.138
3. Configure el puerto del dispositivo en 8888, que es el puerto que Plaspy usa para todos los dispositivos compatibles
4. Seleccione el transporte UDP o TCP si el dispositivo requiere elegir un protocolo
5. Aplique o guarde los cambios de configuración en la herramienta del dispositivo o según el procedimiento del fabricante
6. Reinicie el AT-10 si la herramienta de configuración o la documentación indican que es necesario
7. Valide que el dispositivo reporte a Plaspy y que los mensajes de posición y alarma aparezcan en la plataforma

## Comandos de configuración de ejemplo

Los comandos de configuración del modelo AT-10 y los pasos exactos de instalación son provistos por Autoseeker y pueden variar según el firmware o la herramienta de configuración. El método exacto para aplicar los ajustes de servidor y transporte dependerá del software del fabricante, del conjunto de comandos por SMS o de la interfaz web. Consulte la guía oficial de Autoseeker para la sintaxis y ejemplos de comandos.

## Notas de configuración

- Diferencias de firmware y revisiones regionales del hardware pueden cambiar la interfaz de configuración o el conjunto de comandos del AT-10
- Elija UDP o TCP según las recomendaciones del fabricante o las condiciones de la red; Plaspy admite ambos transportes y aceptará datos en el puerto 8888
- Plaspy usa el mismo puerto en todos los dispositivos y detecta automáticamente el protocolo del rastreador, por lo que apuntar el dispositivo a d.plaspy.com o 54.85.159.138 en el puerto 8888 es el paso esencial
- Si utiliza funciones opcionales como corte remoto o SOS, verifique los pasos exactos para habilitarlas en la documentación de Autoseeker
- Mantenga siempre una copia de la configuración original y pruebe la conectividad antes de finalizar la instalación

## Por qué usar Plaspy con esta configuración

Usar el Autoseeker AT-10 con Plaspy ofrece una forma directa de integrar ubicación en tiempo real, historial de viajes y reportes de alarma en una plataforma unificada de monitoreo de flotas. Las organizaciones obtienen visibilidad centralizada del movimiento de vehículos, reciben alertas de eventos y pueden confiar en un endpoint y un puerto consistentes para simplificar el despliegue.

To learn more about Plaspy and supported device integrations visit https://www.plaspy.com. For the most current device specific configuration methods, firmware behavior, and manufacturer details verify the official Autoseeker documentation at https://autoseekergps.com/
