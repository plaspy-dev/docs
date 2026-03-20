---
slug: /itriangle/bharat101_plus_4g/configuration
id: bharat101_plus_4g-configuration
sidebar_label: Configuration
title: iTriangle - Bharat101 Plus 4G Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el iTriangle Bharat101 Plus 4G y apuntarlo a Plaspy para rastreo en tiempo real
keywords:
  - configuración iTriangle Bharat101 Plus 4G
  - configuración Bharat101 Plus 4G
  - rastreador GPS iTriangle Plaspy
  - configuración servidor Bharat101 Plus 4G
  - configuración dispositivo Plaspy
  - configuración rastreo de vehículos
  - configuración rastreador AIS 140
  - rastreador GPS 4G Plaspy
  - configuración GPS gestión de flotas
  - integración Bharat101 Plus 4G
---

# iTriangle - Configuración del Bharat101 Plus 4G

Esta página ofrece la información pública necesaria para usar el rastreador iTriangle Bharat101 Plus 4G con Plaspy. Explica los ajustes compartidos del servidor Plaspy que debe configurar para que el dispositivo envíe ubicación y telemetría, y describe los pasos prácticos y las comprobaciones habituales para integrar este rastreador certificado AIS 140 en la plataforma Plaspy.

Plaspy emplea ajustes de servidor compartidos y detección automática del protocolo para dispositivos soportados; sin embargo, los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Use este documento como guía para apuntar el dispositivo a Plaspy y validar la conectividad, y consulte la documentación de iTriangle para instrucciones específicas del equipo.

## Resumen de la configuración

El objetivo al configurar el Bharat101 Plus 4G para Plaspy es garantizar que el rastreador envíe ubicación GNSS y telemetría de forma fiable al endpoint de ingestión de Plaspy, de modo que el dispositivo sea visible y administrable en el panel de Plaspy. La configuración se centra en definir el endpoint de red, seleccionar el transporte y verificar que el equipo reporte correctamente tras la instalación.

- Apuntar el dispositivo al endpoint de servidor de Plaspy para que los datos lleguen a su cuenta
- Seleccionar el transporte apropiado (UDP o TCP) y configurar el puerto compartido de Plaspy
- Validar la conectividad celular y que el dispositivo pueda resolver d.plaspy.com o alcanzar la IP del servidor
- Aplicar y guardar los ajustes usando el método o la herramienta oficial de iTriangle
- Confirmar que el rastreador aparece y reporta telemetría en los paneles y alertas de Plaspy

## Ajustes del servidor Plaspy

Al configurar el Bharat101 Plus 4G para Plaspy, use los siguientes ajustes públicos exactamente como se indican:

- Server domain: d.plaspy.com
- Server IP: 54.85.159.138
- Port: 8888
- Transport: the device may be configured using UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol and uses the same port for all supported devices

Estos valores son los detalles del endpoint compartido de Plaspy utilizados para ingerir datos provenientes de rastreadores compatibles.

## Requisitos típicos antes de comenzar

- Confirme que el Bharat101 Plus 4G tiene alimentación y está instalado o temporalmente energizado para la configuración
- Asegúrese de que el dispositivo tenga conexión celular activa (eSIM segura o servicio móvil con datos habilitados)
- Acceso a la herramienta oficial de configuración de iTriangle, comandos SMS, puerto de configuración USB o software autorizado del proveedor
- Conocer la revisión de firmware y hardware del dispositivo para seguir la guía del fabricante correspondiente
- Una cuenta en Plaspy y la información de registro del dispositivo para verificar que el rastreador aparezca en la plataforma después de la configuración

## Cómo se conecta este rastreador a Plaspy

El Bharat101 Plus 4G transmite posición GNSS y telemetría del vehículo a través de la red celular al endpoint compartido y puerto de Plaspy. Plaspy ingiere los paquetes entrantes y asigna los datos del dispositivo en la plataforma para seguimiento en vivo, gestión de eventos e informes.

- El dispositivo reporta ubicación y telemetría a d.plaspy.com (o 54.85.159.138) en el puerto 8888
- Puede configurar el transporte como UDP o TCP según el firmware del dispositivo y su preferencia
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que el mismo puerto se utiliza para dispositivos compatibles
- Cuando se interrumpe la conectividad, el registro local del dispositivo almacena eventos y sincroniza con Plaspy al reconectarse
- Eventos reportados como ignición, manipulación, pánico o estado del inmovilizador aparecen en Plaspy según la configuración

## Flujo típico de configuración

1. Acceda al método o software oficial de configuración de iTriangle para el Bharat101 Plus 4G (aplicación del fabricante, herramienta USB, comandos SMS o portal del proveedor).
2. En los ajustes de red o servidor del dispositivo ingrese la dirección de servidor de Plaspy usando d.plaspy.com o la IP 54.85.159.138.
3. Configure el puerto del dispositivo en 8888 (Plaspy utiliza el mismo puerto para todos los dispositivos).
4. Si el dispositivo requiere seleccionar el transporte, elija UDP o TCP según lo soporte el firmware del rastreador.
5. Aplique o guarde la configuración en la herramienta del fabricante y asegúrese de que los ajustes se hayan grabado en el equipo.
6. Reinicie el dispositivo si el firmware o la herramienta de configuración lo requiere para aplicar los cambios.
7. Valide que el dispositivo reporte a Plaspy comprobando la actividad y la telemetría en su cuenta Plaspy.

## Ejemplos de comandos de configuración

Los comandos exactos y las interfaces para configurar el Bharat101 Plus 4G dependen de la herramienta del fabricante, la versión de firmware y el método de aprovisionamiento. Los dispositivos iTriangle suelen admitir configuración mediante el software oficial, conexión USB o canales de configuración remota; la sintaxis y los pasos varían en consecuencia. Siga la guía de configuración de iTriangle o la herramienta del instalador para los comandos y ejemplos precisos según su revisión de firmware.

## Notas sobre la configuración

- Las diferencias de firmware pueden alterar la disposición de los menús, la sintaxis de comandos y las opciones de transporte; verifique siempre la versión de firmware antes de aplicar instrucciones
- La elección entre UDP o TCP puede afectar la fiabilidad y la confirmación de paquetes; seleccione el transporte que mejor soporte su implementación y firmware
- Plaspy usa el mismo puerto 8888 para todos los dispositivos soportados y detecta automáticamente el protocolo, por lo que solo es necesario apuntar el dispositivo a d.plaspy.com o 54.85.159.138 y establecer el puerto 8888
- Use las herramientas oficiales de iTriangle o interfaces autorizadas por el proveedor para evitar ajustes no soportados o bloquear el dispositivo
- Para despliegues AIS 140 u otros con requisitos regulatorios, verifique cualquier ajuste adicional de reporte o cumplimiento en la documentación de iTriangle y con las normativas locales

## Por qué usar Plaspy con esta configuración

Usar el Bharat101 Plus 4G con Plaspy ofrece a los operadores de flotas visibilidad centralizada sobre ubicación en tiempo real, alertas de eventos y telemetría de vehículo consolidada en una sola plataforma. La combinación de cumplimiento AIS 140, resiliencia multi-GNSS y conectividad celular segura convierte a este rastreador en un endpoint fiable para monitorear transporte público, flotas comerciales y maquinaria pesada.

Para conocer más sobre Plaspy y las funcionalidades de la plataforma, visite https://www.plaspy.com. Para métodos de configuración específicos del dispositivo, comportamiento de firmware y detalles del fabricante, verifique la información en el sitio oficial de iTriangle https://www.itriangle.net/ ya que las especificaciones y procedimientos de instalación pueden cambiar con el tiempo.
