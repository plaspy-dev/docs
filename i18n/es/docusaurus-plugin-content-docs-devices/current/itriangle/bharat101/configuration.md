---
slug: /itriangle/bharat101/configuration
id: bharat101-configuration
sidebar_label: Configuration
title: iTriangle - Bharat101 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar iTriangle Bharat101 con Plaspy usando servidor compartido y detección automática de protocolo
keywords:
  - configuración iTriangle Bharat101
  - configuración Bharat101 Plaspy
  - configuración rastreador GPS iTriangle
  - configuración NavIC Bharat101
  - configuración rastreador AIS 140
  - configuración servidor Bharat101
  - instalación plataforma GPS Bharat101
  - rastreo vehicular Bharat101
  - gestión de flotas Bharat101
  - guía de configuración Bharat101
---

# iTriangle - Configuración Bharat101

Esta página documenta el contexto público de configuración para usar el tracker iTriangle Bharat101 con Plaspy. Explica los ajustes de servidor prácticos y el flujo de trabajo necesario para apuntar el dispositivo a Plaspy, aprovechando capacidades publicadas del Bharat101 como soporte NavIC, eSIM integrada, actualizaciones OTA y múltiples interfaces de configuración.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos que soporta y detecta automáticamente el protocolo del tracker, pero los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Use esta guía para entender el endpoint de Plaspy requerido y el flujo de configuración más común, y siempre contraste los pasos específicos con la documentación del fabricante.

## Resumen de la configuración

Configurar el Bharat101 para Plaspy implica preparar el equipo para enviar datos GNSS y eventos a los servidores de Plaspy y verificar que el dispositivo aparezca y reporte correctamente en la plataforma. El objetivo principal es asegurar conectividad celular estable y ajustes de servidor correctos para que Plaspy pueda recibir y decodificar los mensajes del tracker.

- Apunte el Bharat101 al endpoint del servidor de Plaspy usando los ajustes de servidor publicados.
- Seleccione el modo de transporte que soporte el dispositivo y configure el tracker para que use ese transporte al reportar.
- Valide la conectividad de red y confirme que la eSIM integrada o el plan de datos celular esté activo.
- Guarde y aplique la configuración y reinicie o haga un ciclo de energía del dispositivo si el fabricante lo requiere.
- Verifique que el tracker sea visible y reporte en Plaspy después de la configuración.

## Resumen de la configuración

(Nota: esta sección repite el encabezado intencionadamente para respetar la estructura de la página solicitada)

## Ajustes del servidor Plaspy

Al configurar el Bharat101 para comunicarse con Plaspy, use los siguientes ajustes públicos de servidor. Estos valores son iguales para todos los dispositivos soportados por Plaspy y permiten que la plataforma determine automáticamente el protocolo correcto.

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support UDP or TCP on port 8888 depending on device preference or firmware capability
- Plaspy automatically detects the tracker protocol so the same port is used for all supported devices

## Requisitos típicos antes de la configuración

- Asegúrese de que el Bharat101 tenga una fuente de alimentación estable y que la batería de respaldo esté cargada si la instalación lo requiere.
- Confirme que la eSIM integrada o la conectividad celular y el plan de datos estén activos para que el dispositivo pueda alcanzar los servidores de Plaspy.
- Tenga acceso a las herramientas o métodos oficiales de configuración de iTriangle para este modelo, como USB, SMS, herramientas de configuración TCP o Bluetooth según lo soporte el dispositivo.
- Acceso físico al dispositivo para la configuración inicial, o acceso remoto mediante la herramienta del fabricante o un flujo de aprovisionamiento aprobado.
- Credenciales o acceso a su cuenta Plaspy o al proceso de aprovisionamiento para validar la visibilidad del dispositivo y la telemetría una vez que comience a reportar.

## Cómo se conecta este tracker a Plaspy

El Bharat101 envía posiciones GNSS, eventos de movimiento y estados de E/S digitales o analógicos a servidores IP configurados. Para la integración con Plaspy, el dispositivo se configura para reportar al endpoint y puerto compartidos de Plaspy, lo que permite a la plataforma ingerir la telemetría de ubicación y eventos para mapeo, alertas e informes.

- El dispositivo se configura para enviar datos a d.plaspy.com o 54.85.159.138 usando el puerto 8888
- El transporte puede ser UDP o TCP según la configuración del tracker; Plaspy soporta ambos
- Plaspy recibe la telemetría y detecta automáticamente el protocolo del dispositivo para su decodificación
- Las posiciones en tiempo real y las actualizaciones de eventos se reenvían a los tableros y herramientas de monitoreo de Plaspy
- El dispositivo puede conservar registros localmente y reenviar mensajes almacenados cuando se restablece la conectividad

## Flujo común de configuración

1. Acceda al método oficial de configuración iTriangle para el Bharat101, como la herramienta de configuración por USB, Bluetooth, comandos SMS o la aplicación de aprovisionamiento del OEM.
2. En los ajustes de servidor del dispositivo, ingrese el servidor de Plaspy como dominio d.plaspy.com o la IP 54.85.159.138.
3. Configure el puerto de reporte en 8888 como puerto del servidor.
4. Seleccione el transporte UDP o TCP si el dispositivo requiere una selección de transporte y guarde esa opción.
5. Aplique o guarde la configuración en el dispositivo usando la herramienta o el método de comandos del fabricante.
6. Reinicie o haga un ciclo de energía del tracker si el fabricante lo requiere para activar los nuevos ajustes de servidor.
7. Valide que el dispositivo reporte a Plaspy y que la telemetría aparezca correctamente en su cuenta Plaspy o en un entorno de pruebas.

## Ejemplos de comandos de configuración

El Bharat101 soporta múltiples interfaces de configuración y los comandos o menús exactos dependen del método elegido y del firmware del dispositivo. Dado que iTriangle ofrece opciones de configuración por USB, SMS, TCP/IP y Bluetooth, la sintaxis concreta de comandos y el uso de herramientas variarán. Use la herramienta de configuración de iTriangle o la documentación SMS/USB del fabricante para aplicar los siguientes valores públicos de servidor:

- server domain d.plaspy.com
- server IP 54.85.159.138
- port 8888
- transport UDP or TCP

Consulte el manual oficial de configuración de iTriangle para los formatos exactos de comandos o los pasos en la interfaz gráfica según la revisión de firmware de su equipo.

## Notas de configuración

- Las revisiones de firmware pueden cambiar los menús de configuración disponibles y la sintaxis de comandos; confirme siempre la versión de firmware del equipo antes de seguir una guía de configuración.
- El Bharat101 soporta actualizaciones OTA FOTA que pueden alterar o mejorar el manejo del protocolo, por lo que conviene mantener los dispositivos actualizados según su política de despliegue.
- Elija TCP si prefiere entrega orientada a conexión, o UDP si prefiere menor sobrecarga; Plaspy soporta ambos y detecta automáticamente las particularidades del protocolo.
- La configuración por SMS y las herramientas USB o Bluetooth son compatibles con el Bharat101; utilice el método que se ajuste a sus requisitos de despliegue y seguridad.
- Plaspy utiliza el mismo puerto para todos los dispositivos soportados, lo que simplifica despliegues multi dispositivo y centraliza los ajustes de servidor.

## Por qué usar Plaspy con esta configuración

Usar el Bharat101 con Plaspy combina las fortalezas del dispositivo, como cumplimiento AIS 140, posicionamiento habilitado por NavIC, eSIM integrada y amplias E/S, con las capacidades de la plataforma Plaspy para seguimiento en tiempo real, alertas y monitoreo de flotas. El endpoint compartido de Plaspy y la detección automática de protocolo reducen la complejidad de configuración por dispositivo y facilitan incorporar Bharat101 en toda una flota.

Learn more about Plaspy on the main website https://www.plaspy.com and verify the latest device specific configuration methods and firmware behavior with the manufacturer at https://www.itriangle.net/ to ensure your setup follows the most current instructions and compliance guidance.
