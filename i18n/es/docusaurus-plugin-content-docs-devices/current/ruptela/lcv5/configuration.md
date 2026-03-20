---
slug: /ruptela/lcv5/configuration
id: lcv5-configuration
sidebar_label: Configuration
title: Ruptela - LCV5 Configuration
sidebar_class_name: menu_item_tracker
description: Guía para configurar el Ruptela LCV5 con Plaspy, incluyendo ajustes de servidor, opciones de transporte y flujo de instalación
keywords:
  - Configuración Ruptela LCV5
  - Configurar LCV5 Plaspy
  - Configuración servidor Ruptela LCV5
  - Configuración rastreador GPS LCV5
  - Configuración software seguimiento Ruptela
  - Configuración seguimiento flota LCV5
  - Guía configuración dispositivo Ruptela
  - Configuración rastreador Plaspy
  - Integración telemática LCV5
  - Notas instalación Ruptela LCV5
---

# Ruptela - LCV5 Configuración

Esta página documenta el contexto público de configuración para usar el rastreador GPS Ruptela LCV5 con Plaspy. Se concentra en los ajustes prácticos del servidor y el flujo de trabajo necesarios para apuntar el equipo hacia Plaspy, de modo que el dispositivo envíe ubicación y telemetría a la plataforma. Cuando se requieran pasos por parte del fabricante, se describen a alto nivel para que pueda completar la integración con Plaspy.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta. Los pasos de configuración del lado del fabricante para el LCV5 pueden variar según firmware, revisión de hardware, tipo de instalación y herramientas del proveedor, por lo que use esta guía junto con la documentación del LCV5 y las herramientas de Ruptela Device Center cuando estén disponibles.

## Resumen de configuración

El objetivo de esta configuración es preparar el LCV5 para comunicarse de forma fiable con Plaspy, confirmar que la conectividad funciona y permitir que el dispositivo aparezca y reporte datos en la plataforma. El LCV5 soporta conectividad GSM 2G y LTE Cat M1 y está diseñado para enviar posición y telemetría del vehículo a Plaspy una vez apuntado al servidor y puerto correctos.

- Configure los ajustes de red del dispositivo para reportar al servidor de Plaspy d.plaspy.com o a la dirección IP equivalente.
- Establezca el puerto del dispositivo en 8888 que Plaspy utiliza para todos los dispositivos.
- Seleccione el modo de transporte requerido por el dispositivo, UDP o TCP, y guarde la configuración.
- Verifique la conectividad celular y que el LCV5 pueda establecer una sesión con el endpoint de Plaspy.
- Confirme que el rastreador aparece en Plaspy y que está enviando posiciones GPS y telemetría como CAN o eventos de I/O.

## Ajustes de servidor de Plaspy

Use los siguientes ajustes públicos de servidor de Plaspy al configurar el LCV5:

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte: UDP o TCP puede seleccionarse en el dispositivo
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta

Todos los dispositivos en Plaspy usan la misma configuración de puerto y Plaspy detectará el protocolo usado por el rastreador automáticamente una vez que se establezca la conexión.

## Requisitos comunes antes de la configuración

- Una unidad LCV5 instalada y con alimentación o conectada a una fuente de banco de pruebas.
- Una SIM celular activa con datos habilitados para GSM 2G o LTE Cat M1 según la variante de su equipo.
- Acceso a Ruptela Device Center o a la herramienta oficial de configuración de Ruptela proporcionada por su proveedor.
- Una forma de ver los registros del dispositivo o el estado de conectividad para validar conexiones salientes.
- Acceso a la documentación técnica del LCV5 y a las instrucciones específicas del proveedor para su revisión de hardware.
- Opcional: conocimiento del IMEI del dispositivo o del identificador único usado para registrar o emparejar el equipo en Plaspy.

## Cómo se conecta este rastreador a Plaspy

Al configurarse para usar el endpoint de Plaspy, el LCV5 abre una sesión saliente hacia el servidor compartido de Plaspy y transmite GPS y telemetría del vehículo a la plataforma. Plaspy recibe los datos en el puerto y protocolo estándar, detecta automáticamente el protocolo del rastreador e ingiere la telemetría para su visualización y generación de alertas.

- El rastreador reporta posiciones GPS a d.plaspy.com o 54.85.159.138 en el puerto 8888.
- La telemetría como parámetros CAN u OBD, entradas digitales, sensores analógicos y eventos de I/O se envía junto con las actualizaciones de ubicación.
- El dispositivo puede usar UDP o TCP según la selección durante la configuración; Plaspy acepta ambos transportes.
- Plaspy realiza detección automática de protocolo para interpretar los mensajes entrantes del dispositivo.
- Una vez conectado, el dispositivo se vuelve visible en Plaspy para seguimiento en vivo, reproducción de rutas y generación de alertas.

## Flujo típico de configuración

1. Acceda al método oficial de configuración de Ruptela, como Ruptela Device Center o el software del proveedor para el LCV5.
2. Ubique la sección de TCP UDP o ajustes de servidor en la herramienta de configuración.
3. Ingrese como destino d.plaspy.com o utilice la IP del servidor 54.85.159.138 cuando la herramienta lo requiera.
4. Configure el puerto de destino en 8888 que usa Plaspy para todos los dispositivos compatibles.
5. Seleccione UDP o TCP si el LCV5 requiere elegir el transporte y guarde o aplique el cambio.
6. Reinicie el dispositivo si la herramienta de configuración o el firmware requieren reinicio para aplicar cambios.
7. Valide que el LCV5 reporta a Plaspy revisando la actividad del dispositivo en Plaspy y verificando posiciones y telemetría entrantes.

## Ejemplos de comandos de configuración

Los comandos exactos y la sintaxis dependen del método de aprovisionamiento de Ruptela y la versión de firmware. Ruptela Device Center y la plataforma de gestión del dispositivo son las formas principales soportadas para configurar el LCV5 y ofrecen opciones por GUI o SMS según su infraestructura. Debido a que las herramientas del fabricante varían según el firmware, consulte la documentación de Ruptela o a su proveedor para formatos de comandos y ejemplos concretos.

## Notas de configuración

- Las revisiones de firmware y hardware pueden cambiar los ajustes disponibles y los pasos de configuración; verifique siempre la versión de firmware en la documentación de Ruptela.
- Si debe elegir entre TCP y UDP, considere la confiabilidad de la red y el comportamiento del operador; Plaspy acepta ambos pero el comportamiento del dispositivo difiere según el transporte.
- Use los registros del dispositivo o las herramientas de diagnóstico de Ruptela Device Center para solucionar intentos de conexión a d.plaspy.com o 54.85.159.138 en el puerto 8888.
- Al configurar de forma remota, asegúrese de que la SIM tenga datos y que los valores APN requeridos estén configurados según su operador móvil.
- Mantenga las herramientas del fabricante y el firmware del dispositivo actualizados para acceder a las últimas funciones de configuración y correcciones.

## Por qué usar Plaspy con esta configuración

Configurar el Ruptela LCV5 para reportar a Plaspy ofrece visibilidad centralizada de la ubicación y telemetría del vehículo, combinando posiciones GPS con datos CAN y sensores para apoyar el monitoreo de flotas, gestión de combustible y análisis de comportamiento del conductor. Usar Plaspy con un LCV5 bien configurado ayuda a los equipos operativos a reducir tiempos de respuesta, mejorar la visibilidad de rutas y generar alertas basadas en telemetría para operaciones más seguras y eficientes.

To learn more about Plaspy and how it supports device integrations like the LCV5 visit https://www.plaspy.com. For the latest device specific setup details, firmware notes, and manufacturer guidance verify information at the Ruptela website https://ruptela.com/ as manufacturer specifications and configuration methods can change over time.
