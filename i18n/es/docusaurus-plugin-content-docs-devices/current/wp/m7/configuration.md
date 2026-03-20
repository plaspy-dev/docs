---
slug: /wp/m7/configuration
id: m7-configuration
sidebar_label: Configuration
title: WP - M7 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el rastreador GPS WP M7 con los ajustes de servidor compartido de Plaspy y pasos prácticos
keywords:
  - configuración WP M7
  - instalación WP M7
  - WP M7 Plaspy
  - configuración dispositivo Plaspy
  - configuración rastreador GPS M7
  - rastreo de vehículos M7
  - configuración rastreador WP
  - configuración servidor M7
  - configuración GPS Plaspy
  - guía WP M7
---

# WP - M7: Configuración

Esta página describe el contexto público de configuración para usar el rastreador GPS portátil WP M7 con Plaspy. Explica los ajustes de servidor compartido que Plaspy espera, los pasos típicos de preparación y recomendaciones prácticas para apuntar el M7 al endpoint de Plaspy, de modo que pueda enviar datos de ubicación y estado a la plataforma. La orientación aquí se basa únicamente en información pública y se centra en lo necesario para que el M7 sea visible en Plaspy.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando se conecta. Los pasos exactos en el lado del fabricante y los nombres de menú pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor, por lo que debe usar esta guía junto con la documentación y las herramientas de configuración del WP M7.

## Resumen de la configuración

El objetivo del proceso de configuración es preparar el M7 para comunicarse de forma fiable con Plaspy usando el endpoint y puerto compartidos, validar que el dispositivo puede alcanzar el servidor por el transporte elegido y confirmar que el rastreador aparece y reporta correctamente en la plataforma Plaspy.

- Apunte el M7 al endpoint de Plaspy para que sus reportes GPRS/UDP/TCP lleguen a la plataforma.
- Elija el transporte (UDP o TCP) compatible con el rastreador y la red, y configure el puerto compartido utilizado por Plaspy.
- Configure los ajustes del operador móvil necesarios, como el APN, para que el M7 tenga conectividad de datos para reportes GPRS.
- Guarde y aplique los cambios, reinicie el rastreador si es necesario y verifique que el dispositivo esté reportando a Plaspy.
- Use Plaspy para confirmar la visibilidad del equipo y la telemetría básica después de que lleguen los primeros reportes.

## Ajustes del servidor Plaspy

Use los siguientes ajustes públicos de servidor de Plaspy al configurar el WP M7 para que reporte a Plaspy:

- dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- puerto 8888
- transporte: UDP o TCP
- detección automática del protocolo en Plaspy

Tenga en cuenta que Plaspy usa el mismo puerto para todos los dispositivos compatibles y detectará automáticamente el protocolo del rastreador cuando el dispositivo se conecte.

## Requisitos típicos antes de configurar

- Un WP M7 cargado, con batería de respaldo en buen estado y montaje magnético listo para la instalación.
- Una tarjeta SIM válida con plan de datos y GPRS habilitado si piensa usar reportes por GPRS.
- Acceso al método o software de configuración del fabricante WP (comandos SMS, aplicación de configuración o herramienta para PC) para establecer servidor y transporte.
- Conocer el IMEI o identificador del dispositivo según lo requieran sus registros de flota y la plataforma Plaspy.
- Confirmación del APN y credenciales de la red móvil proporcionadas por el proveedor de la SIM, si es necesario configurar el APN.
- Un lugar con buena visibilidad al cielo para obtener fijaciones iniciales de GPS durante las pruebas.

## Cómo se conecta este rastreador a Plaspy

El WP M7 puede enviar reportes de posición y estado a Plaspy apuntando su endpoint de reporte al servidor compartido de Plaspy y usando el puerto de la plataforma. Plaspy recibe los mensajes entrantes y los asocia con los registros de dispositivo para que usted pueda ver ubicación en tiempo real y alertas en la plataforma.

- Configure el M7 para reportar a d.plaspy.com o a 54.85.159.138.
- Establezca el puerto de reporte en 8888 para que el tráfico del dispositivo llegue al puerto de escucha de Plaspy.
- Elija UDP o TCP como transporte si el dispositivo requiere una selección específica.
- El rastreador puede usar GPRS para reportes por paquete de datos; SMS está disponible como canal alternativo cuando el dispositivo lo soporta.
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo envía datos al endpoint compartido.

## Flujo de trabajo de configuración habitual

1. Acceda al método oficial de configuración del fabricante WP (conjunto de comandos SMS, herramienta de configuración para PC o aplicación del proveedor).
2. Ingrese la dirección del servidor Plaspy usando d.plaspy.com o la IP 54.85.159.138 en el campo de servidor/host.
3. Configure el puerto de reporte del dispositivo en 8888 para que coincida con el puerto de escucha de Plaspy.
4. Si el dispositivo lo requiere, seleccione el protocolo de transporte UDP o TCP según la red y las preferencias del dispositivo.
5. Configure el APN del operador y cualquier credencial si usará reportes por GPRS, y asegúrese de que la SIM esté activa.
6. Aplique o guarde la configuración y reinicie el equipo si la herramienta del fabricante recomienda un reinicio.
7. Valide que el dispositivo reporte a Plaspy comprobando la llegada del primer mensaje de ubicación o estado en la plataforma.

## Comandos de configuración de ejemplo

El WP M7 admite configuración mediante las herramientas del fabricante y conjuntos de comandos SMS; los comandos y la sintaxis exacta varían según el firmware y la herramienta. Dado que los conjuntos de comandos del fabricante cambian y distintas revisiones de firmware usan formatos diferentes, consulte la documentación del WP M7 o la herramienta de su proveedor para obtener los comandos precisos para establecer host del servidor, IP del servidor, puerto y transporte.

Cuando use una herramienta de configuración o ajuste por SMS, los valores públicos que normalmente ingresará son:
- host del servidor: d.plaspy.com (o 54.85.159.138)
- puerto: 8888
- transporte: UDP o TCP

Si trabaja con configuración por SMS, siga la sintaxis de comandos del WP M7 indicada en el manual oficial para establecer el servidor y el puerto. Si dispone de una utilidad de configuración para PC o móvil, use esa utilidad para introducir los mismos valores de host y puerto y guardarlos en el dispositivo.

## Notas sobre la configuración

- Las revisiones de firmware del WP M7 y las utilidades de configuración del proveedor pueden cambiar los nombres de comandos y la estructura de menús; siempre consulte el manual actual para la sintaxis exacta.
- Elija UDP o TCP según la fiabilidad de la red y las preferencias de su organización; UDP suele usarse para reportes de baja sobrecarga mientras que TCP ofrece fiabilidad de sesión cuando está soportado.
- SMS puede usarse como alternativa para algunos ajustes o modos de reporte si GPRS no está disponible, pero los flujos basados en SMS dependen del soporte de comandos SMS del dispositivo.
- Recuerde que Plaspy usa el puerto 8888 para todos los dispositivos y detectará automáticamente el protocolo del rastreador cuando se conecte a d.plaspy.com o 54.85.159.138.
- Valide el dispositivo después de la configuración observando los primeros reportes en Plaspy y confirmando el mapeo correcto del IMEI.

## Por qué usar Plaspy con esta configuración

Usar el WP M7 con Plaspy ofrece una forma directa de integrar la capacidad de seguimiento compacta y de larga duración del M7 en una plataforma centralizada de visibilidad de flota o activos. Al apuntar el M7 al endpoint y puerto compartidos de Plaspy, las organizaciones pueden recibir reportes en tiempo real y alertas básicas a través de la plataforma para monitoreo y operaciones.

Para saber más sobre Plaspy e integraciones compatibles, visite https://www.plaspy.com. Los métodos de configuración específicos del dispositivo, el comportamiento del firmware y los detalles del fabricante pueden cambiar con el tiempo, por lo que verifique las últimas instrucciones y referencias de comandos en el sitio del fabricante WP en http://www.wondeproud.com/ antes de aplicar cambios.
