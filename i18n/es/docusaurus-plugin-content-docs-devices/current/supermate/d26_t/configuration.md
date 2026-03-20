---
slug: /supermate/d26_t/configuration
id: d26_t-configuration
sidebar_label: Configuration
title: Supermate - D26-T Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar Supermate D26-T y conectarlo a los ajustes del servidor Plaspy
keywords:
  - Configuración Supermate D26 T
  - Instalación Supermate D26 T
  - Supermate D26 T Plaspy
  - Configuración servidor Supermate D26 T
  - Configuración rastreador GPS Supermate D26 T
  - Configuración software seguimiento Supermate D26 T
  - Configuración plataforma Supermate D26 T
  - Configuración rastreador GPS Supermate
  - Integración Supermate D26 T
  - Compatibilidad D26 T Plaspy
---

# Supermate - D26-T — Configuración

Esta página documenta el contexto público de configuración para usar el rastreador Supermate D26-T con la plataforma Plaspy. Se centra en los ajustes prácticos del servidor y en el flujo de trabajo necesario para apuntar un D26-T a Plaspy, de modo que el dispositivo pueda enviar posición y estado a su cuenta Plaspy. La guía está pensada para usuarios técnicos que preparan el dispositivo para su integración y para instaladores que validan la conectividad.

Plaspy utiliza valores de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del tracker una vez que el equipo comienza a reportar. Los pasos exactos del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Use la documentación del fabricante para controles específicos del dispositivo mientras aplica los valores de servidor compartidos de Plaspy que se indican a continuación.

## Resumen de la configuración

Configurar un Supermate D26-T para Plaspy implica preparar el tracker para que envíe sus mensajes de reporte al endpoint compartido de Plaspy y verificar que los informes lleguen a su cuenta. El proceso normalmente requiere unos pocos pasos de configuración en el dispositivo o en la herramienta del fabricante y una validación dentro de Plaspy.

- Introduzca el endpoint del servidor Plaspy en el D26-T mediante el método de configuración oficial de Supermate.
- Configure el transporte de red y el puerto para que el tracker pueda alcanzar Plaspy.
- Verifique que el dispositivo esté alimentado y, si aplica, tenga acceso a la red móvil.
- Confirme que el dispositivo aparezca y reporte en Plaspy después de la configuración.
- Solucione problemas básicos de conectividad y diferencias de firmware si el equipo no reporta.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte: soporta UDP o TCP
- Plaspy detecta automáticamente el protocolo del tracker y todos los dispositivos usan el mismo puerto

Estos valores son el endpoint público de Plaspy que debe usar al configurar el Supermate D26-T para que reporte a la plataforma.

## Requisitos habituales antes de la configuración

- El dispositivo esté alimentado e instalado según la guía de Supermate.
- Si el dispositivo lo requiere, una SIM activa con datos o capacidad SMS y cobertura de red móvil.
- Acceso a la herramienta oficial de configuración del Supermate D26-T o al método del fabricante para actualizar los ajustes del servidor.
- Conectividad de red desde el dispositivo hacia d.plaspy.com o 54.85.159.138 en el puerto 8888.
- Una cuenta Plaspy preparada para recibir y validar los reportes del dispositivo.
- Conocimientos básicos para elegir UDP o TCP si la configuración del equipo solicita seleccionar el transporte.

## Cómo se conecta este tracker a Plaspy

El Supermate D26-T se configura para enviar sus reportes de ubicación y eventos al endpoint compartido y al puerto de Plaspy para que la plataforma pueda mostrar y gestionar los datos del dispositivo. Una vez definidos la dirección del servidor, el puerto y el transporte, Plaspy detectará el protocolo automáticamente y comenzará a procesar los mensajes entrantes.

- El dispositivo se apunta a d.plaspy.com o a 54.85.159.138 como endpoint de reporte.
- Los reportes se envían al puerto 8888, que es el mismo puerto para todos los dispositivos en Plaspy.
- El tracker puede usar UDP o TCP según la configuración del dispositivo y las condiciones de red.
- Plaspy realiza la detección automática del protocolo para decodificar los mensajes entrantes del tracker.
- Tras un reporte exitoso, el dispositivo se vuelve visible para monitoreo, geocercas y alertas dentro de Plaspy.

## Flujo de trabajo típico de configuración

1. Acceda al método o software oficial de configuración del Supermate D26-T proporcionado por el fabricante.
2. Ubique la sección de ajustes de servidor o reporte en la herramienta.
3. Ingrese d.plaspy.com o use 54.85.159.138 como dirección de servidor en la configuración del dispositivo.
4. Establezca el puerto en 8888.
5. Seleccione UDP o TCP para el transporte si el dispositivo requiere elegir uno.
6. Aplique o guarde la configuración en la herramienta del fabricante.
7. Reinicie el dispositivo si el método de configuración o el firmware requiere un reinicio.
8. Valide en Plaspy que el dispositivo está reportando y es visible en la plataforma.

## Ejemplos de comandos de configuración

El método de configuración del Supermate D26-T varía según el firmware y la herramienta del fabricante. Como no se proporcionaron cadenas de comando públicas aquí, no se incluyen ejemplos exactos. Normalmente empleará la utilidad de configuración de Supermate, comandos SMS o una herramienta web suministrada por el vendedor para establecer el servidor en d.plaspy.com o 54.85.159.138 y el puerto 8888, y para elegir UDP o TCP. Consulte la documentación oficial de Supermate para la sintaxis de comandos y ejemplos aplicables a su revisión de firmware.

## Notas de configuración

- Las diferencias de firmware pueden cambiar nombres de menús, transportes disponibles y la sintaxis exacta de los comandos. Verifique la versión de firmware del equipo antes de aplicar los pasos.
- Elija UDP o TCP según la guía de la herramienta Supermate y la fiabilidad de la red; Plaspy detectará y manejará el protocolo entrante automáticamente.
- Todos los dispositivos en Plaspy usan el puerto 8888. Use ese puerto en la configuración del dispositivo independientemente del modelo al integrarlo con Plaspy.
- Mantenga un registro de los marcadores de posición que use la herramienta del fabricante, como valores de APN; reemplace los marcadores por los valores de su operador de red según sea necesario.
- En caso de duda, consulte la guía de configuración oficial de Supermate para su modelo y revisión de firmware.

## Por qué usar Plaspy con esta configuración

Configurar el Supermate D26-T para que reporte a Plaspy ofrece a organizaciones e instaladores un objetivo de servidor uniforme y un flujo de validación predecible. Usar el endpoint compartido de Plaspy simplifica el despliegue en múltiples dispositivos y facilita la provisión a gran escala manteniendo visibilidad, geocercas y alertas en una plataforma central.

Para obtener más información sobre Plaspy y cómo gestiona los datos de los dispositivos, visite https://www.plaspy.com. Para pasos de configuración específicos del dispositivo, notas de firmware y documentación del fabricante para dispositivos Supermate, visite http://www.gps-summit.com/ para verificar los detalles e instrucciones actuales.
