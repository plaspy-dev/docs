---
slug: /reachfar/rf_v03_sos/configuration
id: rf_v03-sos-configuration
sidebar_label: Configuration
title: Reachfar - RF-V03-SOS Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del Reachfar RF-V03-SOS para Plaspy con ajustes de servidor y flujo de instalación
keywords:
  - Configuración Reachfar RF-V03-SOS
  - Configuración RF V03 SOS
  - Rastreador Reachfar Plaspy
  - Configuración servidor Plaspy
  - Guía configuración rastreador GPS
  - Configuración rastreador de vehículo
  - Seguimiento de flotas Plaspy
  - Integración RF V03 SOS
  - Guía conectividad rastreador
  - Configuración plataforma GPS
---

# Reachfar - Configuración del RF-V03-SOS

Esta página describe el contexto público de configuración para usar el rastreador Reachfar RF-V03-SOS con Plaspy. Se centra en los ajustes prácticos del servidor y en el flujo de instalación necesarios para que el RF-V03-SOS envíe ubicación y eventos a Plaspy y así poder ver mapas en vivo, alertas y reproducir el historial.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Esta guía se concentra en el punto final público de Plaspy y en los pasos prácticos que deberá aplicar en la herramienta de configuración del fabricante o mediante la interfaz SMS para dirigir el dispositivo hacia Plaspy.

## Resumen de la configuración

Preparar el RF-V03-SOS para integrarlo con Plaspy implica actualizar el dispositivo para que reporte al punto final compartido de Plaspy, validar la conectividad celular y confirmar que los eventos llegan a la plataforma. El objetivo es asegurar que el rastreador transmita a d.plaspy.com usando el transporte y puerto correctos para que Plaspy pueda mostrar el dispositivo en vivo y registrar el historial.

- Configure el servidor del dispositivo al punto final compartido de Plaspy para que toda la telemetría vaya a la plataforma
- Elija la opción de transporte requerida por el firmware del dispositivo y use el puerto 8888
- Verifique la conectividad celular y que el dispositivo suba los puntos almacenados de zonas sin cobertura cuando se reconecte
- Valide que eventos SOS, alarmas y estado del motor sean visibles en Plaspy para su operación
- Confirme que el dispositivo aparece en Plaspy y que la reproducción histórica se está registrando

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte: soporte para UDP o TCP según requiera el dispositivo
- Plaspy detecta automáticamente el protocolo del rastreador para dispositivos compatibles
- Todos los dispositivos en Plaspy usan el mismo puerto para reportar

## Requisitos típicos antes de la instalación

- Un RF-V03-SOS con alimentación completa y batería de respaldo cargada o conectado a la alimentación del vehículo
- Una conexión celular activa y aprovisionada adecuada para la variante del dispositivo
- Acceso al método oficial de configuración Reachfar, como el software del proveedor, la herramienta web o la interfaz de comandos SMS
- El manual del usuario del dispositivo o el registro de cambios de firmware para confirmar la sintaxis exacta de los comandos de configuración
- Una cuenta de Plaspy o contacto con su administrador de Plaspy para confirmar el aprovisionamiento y la visibilidad del dispositivo
- Acceso físico al dispositivo para reinicios necesarios o pruebas de manejo

## Cómo se conecta este rastreador a Plaspy

El RF-V03-SOS envía mensajes de posición, estado y eventos por redes celulares al punto final y puerto del servidor Plaspy. Plaspy recibe la telemetría, aplica la detección de protocolo y presenta la ubicación en vivo, las alertas y el historial de rutas en la plataforma.

- Configure el rastreador para reportar al punto final compartido de Plaspy d.plaspy.com o a la IP 54.85.159.138
- Use el puerto 8888 para todos los reportes del dispositivo, ya que Plaspy espera ese puerto para los rastreadores compatibles
- Seleccione UDP o TCP en la configuración del dispositivo si el firmware exige elegir un transporte
- Eventos como SOS, alarma por vibración y estado del motor se envían a Plaspy para alertas y monitoreo
- Los puntos almacenados en zonas sin cobertura se suben a Plaspy cuando se restablece la conectividad para completar el historial

## Flujo de configuración habitual

1. Acceda al método o software oficial de configuración Reachfar para el RF-V03-SOS según la documentación del fabricante.
2. En los ajustes de servidor, indique la dirección de Plaspy usando el dominio d.plaspy.com o la IP 54.85.159.138 como punto final.
3. Establezca el puerto del dispositivo en 8888, que es el puerto compartido de Plaspy para todos los dispositivos soportados.
4. Si el dispositivo requiere seleccionar transporte, elija UDP o TCP según las opciones del firmware y sus requisitos de red.
5. Aplique o guarde la configuración en la herramienta del dispositivo o envíe los comandos SMS según lo documentado por Reachfar.
6. Reinicie el dispositivo si la herramienta del fabricante o el firmware requieren un reboot para que los cambios tengan efecto.
7. Valide que el dispositivo reporta a Plaspy revisando el estado en la plataforma y confirmando que ha llegado telemetría y eventos recientes.

## Ejemplos de comandos de configuración

Los comandos y la sintaxis exacta para el RF-V03-SOS dependen del firmware Reachfar y de la herramienta del fabricante. Muchos dispositivos Reachfar admiten configuración mediante la utilidad oficial para Windows o web, o mediante comandos SMS. Debido a que los formatos de comando varían según el firmware, consulte el manual Reachfar para las cadenas exactas y los marcadores de posición. Si su dispositivo soporta configuración por SMS, normalmente usará una plantilla SMS proporcionada por Reachfar para establecer dominio o IP del servidor, puerto y transporte.

Marcadores de ejemplo que puede encontrar en los comandos del fabricante
- [apn] usado para el nombre APN de la conexión celular
- [apnu] usado para el usuario APN si se requiere
- [apnp] usado para la contraseña APN si se requiere

Consulte la documentación de Reachfar para ejemplos exactos de SMS o comandos de herramienta según la versión de firmware del RF-V03-SOS que esté utilizando.

## Notas de configuración

- Las diferencias de firmware pueden cambiar las opciones de menú disponibles, la sintaxis SMS y las opciones de transporte, así que confirme siempre la versión antes de aplicar comandos.
- Elija UDP o TCP según las recomendaciones del firmware del dispositivo y su entorno de red; Plaspy admite ambos en el puerto 8888.
- El RF-V03-SOS soporta almacenamiento de puntos en zonas sin cobertura para periodos offline; verifique que los puntos almacenados se suben a Plaspy cuando se reanuda la conectividad.
- La monitorización por voz y algunas funciones dependen de la variante regional y la tecnología de radio que soporte la unidad.
- Debido a que este modelo puede estar fuera de producción en algunos mercados, consulte al fabricante por reemplazos recomendados o actualizaciones de firmware.

## Por qué usar Plaspy con esta configuración

Usar el RF-V03-SOS con Plaspy brinda a los equipos visibilidad centralizada de la ubicación del vehículo, eventos y reproducción histórica. La detección automática de protocolos de Plaspy y la configuración de servidor compartida simplifican la integración al minimizar las diferencias de servidor por dispositivo. Esto permite que las operaciones se concentren en las alertas, el seguimiento de rutas y los flujos de recuperación en lugar de manejar protocolos a bajo nivel.

Learn more about Plaspy on the main website https://www.plaspy.com and verify the latest device specific configuration, firmware behavior and availability with Reachfar at https://www.reachfargps.com/. Manufacturer specifications and setup methods can change over time so confirm current details before deployment.
