---
slug: /appello/tk103b/configuration
id: tk103b-configuration
sidebar_label: Configuration
title: Appello - TK103B Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para conectar el rastreador Appello TK103B a Plaspy usando la configuración de servidor compartida de Plaspy
keywords:
  - Configuración Appello TK103B
  - Instalación Appello TK103B
  - Appello TK103B en Plaspy
  - Configuración de servidor TK103B
  - Configuración del rastreador GPS Appello
  - Configuración de rastreador Plaspy
  - Rastreo de vehículos Appello TK103B
  - Configuración GPRS TK103B
  - Configuración SMS TK103B
  - Rastreo de flotas Appello
---

# Appello - Configuración del TK103B

Esta página resume el contexto público de configuración para usar el rastreador GPS Appello TK103B con la plataforma Plaspy. Explica los ajustes de servidor compartidos que utiliza Plaspy, el flujo general para preparar el TK103B para reportar a Plaspy y los requisitos previos para validar la conectividad. Se mencionan a nivel general los métodos de configuración del fabricante, como comandos SMS o herramientas del proveedor, y se sintetizan para centrarse en la conexión del equipo a Plaspy.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del tracker, aunque los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión del hardware, el tipo de instalación y el software del proveedor. El TK103B admite comunicaciones GSM y GPRS y suele ofrecer opciones de configuración por SMS y ajustes de APN; por eso esta guía se concentra en los valores públicos del endpoint de Plaspy y en los pasos generales necesarios para registrar el dispositivo en la plataforma.

## Resumen de la configuración

Preparar un Appello TK103B para Plaspy implica dirigir su telemetría saliente al endpoint del servidor de Plaspy y confirmar que la unidad puede acceder a la red. El proceso general de configuración garantiza que el rastreador pueda autenticarse en la red móvil, resolver el APN correcto si es necesario y enviar mensajes de ubicación y estado a Plaspy para que sean visibles en la plataforma.

- Configure el dispositivo para que reporte a Plaspy aplicando el endpoint y el puerto compartidos.
- Ajuste el APN o el acceso de red según el operador para que el rastreador pueda usar GPRS.
- Seleccione el modo de transporte que soporte el equipo y apúntelo a Plaspy en el puerto estándar.
- Valide la conectividad para que Plaspy pueda detectar automáticamente el protocolo y mostrar el dispositivo en línea.
- Confirme que los reportes periódicos y las alertas se visualizan en Plaspy para verificar la monitorización operativa.

## Configuración del servidor Plaspy

Use los siguientes ajustes públicos de servidor de Plaspy al configurar el TK103B:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- The device may be configured to use UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol and all devices in Plaspy use the same port

Estos valores son la información pública del endpoint que Plaspy facilita para la integración de dispositivos y deben ingresarse en el rastreador según el método de configuración del fabricante.

## Requisitos típicos antes de la configuración

- Una SIM activa con datos móviles habilitados y saldo o plan de datos necesario para conexiones GPRS.
- Conocimiento del APN del operador y de las credenciales APN si el rastreador las requiere para acceder a la red móvil.
- Acceso al método de configuración del TK103B recomendado por el fabricante, por ejemplo comandos SMS o el software del proveedor.
- Una fuente de alimentación estable o batería cargada para garantizar que el dispositivo permanezca en línea durante la configuración y la verificación.
- Una forma de monitorear los reportes del dispositivo en Plaspy para confirmar que el rastreador aparece en línea tras la configuración.

## Cómo se conecta este rastreador a Plaspy

Al configurarse para Plaspy, el TK103B envía su información de ubicación y estado al endpoint y puerto compartidos de Plaspy, de modo que la plataforma pueda presentar seguimiento en vivo y alertas. Plaspy recibe la conexión entrante en el puerto estándar y utiliza la detección automática de protocolo para interpretar los mensajes del rastreador sin requerir cambios de puerto por dispositivo.

- El rastreador se fija para reportar a d.plaspy.com o a la IP del servidor 54.85.159.138.
- El reporte se envía mediante el modo de transporte seleccionado, UDP o TCP, en el puerto 8888.
- Plaspy recibe los datos y aplica detección automática de protocolo para identificar el tipo de rastreador.
- Una vez que el dispositivo es reconocido, los datos de seguimiento y los eventos se muestran en la plataforma Plaspy.
- Los operadores pueden monitorear la conectividad y las alertas a través de Plaspy cuando la unidad esté reportando correctamente.

## Flujo típico de configuración

1. Acceda al método de configuración oficial del fabricante o al software para el TK103B tal como lo documenta Appello.
2. Ingrese el endpoint del servidor Plaspy indicando el dominio d.plaspy.com o la dirección IP 54.85.159.138.
3. Configure el puerto de red en 8888 para que coincida con el puerto estándar de Plaspy para todos los dispositivos.
4. Seleccione el tipo de transporte UDP o TCP si el rastreador requiere elegir un transporte.
5. Guarde o aplique la configuración en el equipo usando el método del proveedor (por ejemplo, confirmando vía la interfaz del dispositivo o instrucciones por SMS).
6. Verifique que el dispositivo reporte a Plaspy comprobando el estado del equipo y la telemetría en la plataforma Plaspy.

Si usa comandos SMS o herramientas del proveedor para establecer el APN y los ajustes del servidor, siga la guía del fabricante y luego aplique los pasos anteriores para apuntar el rastreador a Plaspy.

## Notas de configuración

- Las unidades Appello TK103B pueden ofrecer configuración por SMS como método público; resuma y siga la guía del proveedor en lugar de copiar comandos sin procesar.
- Las variaciones de firmware y las revisiones específicas del mercado pueden cambiar las opciones disponibles y los pasos exactos necesarios; confirme siempre con la documentación actual del fabricante.
- Cuando el rastreador soporte tanto TCP como UDP, elija el transporte que mejor se adapte a su red y necesidades de monitorización; Plaspy acepta cualquiera en el puerto compartido.
- Plaspy utiliza el puerto 8888 para todos los dispositivos compatibles y gestiona la negociación del protocolo automáticamente, por lo que no se requieren cambios de puerto por dispositivo.
- Las prácticas del instalador, como el momento de la verificación, la colocación del dispositivo y la estabilidad de la alimentación, influyen en las comprobaciones de conectividad iniciales.

## Por qué usar Plaspy con esta configuración

Configurar el Appello TK103B para que reporte a Plaspy ofrece una forma sencilla de centralizar el seguimiento, la monitorización y las alertas en una flota o conjunto de activos. Al usar el endpoint compartido de Plaspy y la detección automática de protocolos, los equipos pueden reducir la complejidad de configuración por dispositivo y lograr que los equipos reporten a una plataforma unificada con rapidez.

Para saber más sobre Plaspy y las capacidades de la plataforma, visite https://www.plaspy.com. Para obtener los detalles más actualizados sobre la configuración específica del dispositivo, notas de firmware e instrucciones del fabricante para el Appello TK103B, verifique la información en el sitio oficial del fabricante http://www.cnjeo.com/.
