---
slug: /arknav/rx_12/configuration
id: rx_12-configuration
sidebar_label: Configuration
title: ArkNav - RX-12 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del rastreador ArkNav RX-12 y compatibilidad con Plaspy para flotas y telemetría
keywords:
  - Configuración ArkNav RX-12
  - Instalación ArkNav RX-12
  - Compatibilidad Plaspy RX-12
  - Configuración servidor RX-12
  - Configuración rastreador GPS RX-12
  - Configuración GPS ArkNav
  - Seguimiento de flotas RX-12
  - Configuración LTE M RX-12
  - Guía ArkNav Plaspy
  - Configuración telemetría RX-12
---

# ArkNav - Configuración RX-12

Esta página documenta el contexto público de configuración para desplegar el rastreador GPS ArkNav RX-12 con Plaspy. Describe los ajustes prácticos de servidor y el flujo de trabajo necesarios para apuntar el RX-12 a Plaspy, de modo que los dispositivos puedan reportar posición y telemetría a la plataforma. Use esta guía junto con la documentación del fabricante para pasos específicos en la interfaz del dispositivo, comandos SMS o configuración por USB.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, lo que simplifica la configuración del lado del servidor. Los pasos exactos en el dispositivo pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor, por lo que siempre confirme los detalles del procedimiento en la documentación oficial de ArkNav o en el software de configuración del dispositivo.

## Resumen de configuración

El objetivo del proceso de configuración es preparar el RX-12 para comunicarse de forma fiable con Plaspy y validar la conectividad para que las unidades aparezcan en la plataforma. Esto incluye indicar el endpoint y puerto correctos del servidor, seleccionar el tipo de transporte si es necesario y verificar que el dispositivo reporte datos GNSS y eventos a Plaspy.

- Configure el equipo para enviar posiciones GNSS y telemetría al endpoint del servidor de Plaspy.
- Seleccione transporte UDP o TCP en el rastreador si el firmware del dispositivo requiere una selección de transporte.
- Asegúrese de que el equipo disponga de una SIM activa y cobertura celular para LTE‑M o con conmutación a 2G.
- Valide que el dispositivo aparezca en Plaspy y que se reciban los reportes basados en eventos (movimiento, encendido, velocidad).
- Guarde y aplique la configuración y realice un reinicio si el procedimiento del fabricante lo exige.

## Ajustes del servidor Plaspy

Use estos ajustes públicos de Plaspy al configurar el ArkNav RX-12. Plaspy emplea el mismo puerto para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador.

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy performs automatic protocol detection for incoming tracker connections

## Requisitos típicos antes de la configuración

- Acceso físico al RX-12 y a las herramientas de instalación necesarias o cable de configuración USB.
- Una Nano SIM provisionada con un plan de datos que soporte LTE‑M y conmutación a 2G cuando sea necesario.
- Cobertura celular confirmada en el área de despliegue para redes LTE‑M o EGPRS.
- Acceso al método de configuración oficial de ArkNav, como el software del proveedor, la lista de comandos SMS o la herramienta de depuración por USB.
- Firmware actual del dispositivo o plan para actualizarlo si ArkNav lo recomienda para compatibilidad con Plaspy.
- Fuente de alimentación para el rastreador y una conexión eléctrica estable al instalar en vehículos.

## Cómo se conecta este rastreador a Plaspy

El RX-12 transmite posiciones GNSS y telemetría mediante LTE‑M o EGPRS al endpoint en la nube de Plaspy, donde se procesan los datos de ubicación y sensores. Al configurarlo con los ajustes del servidor Plaspy, el rastreador envía actualizaciones basadas en eventos para que la plataforma ofrezca visibilidad en tiempo real y alertas.

- El dispositivo reporta fijaciones GNSS al endpoint y puerto compartido de Plaspy.
- Los reportes por eventos como movimiento, velocidad y cambios de encendido se envían a Plaspy para alertas y segmentación de viajes.
- Los estados de entradas y salidas (por ejemplo, estado del inmovilizador) se reportan a Plaspy si están cableados y configurados en el RX-12.
- Plaspy recibe la telemetría y la almacena para paneles en tiempo real, historial e informes.
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta al puerto compartido.

## Flujo de trabajo habitual de configuración

1. Acceda al método o software de configuración oficial de ArkNav según la guía de instalador o usuario del RX-12.
2. Ingrese el endpoint del servidor Plaspy usando el dominio d.plaspy.com o la IP 54.85.159.138 en los ajustes de servidor del dispositivo.
3. Configure el puerto del dispositivo en 8888, que es el puerto compartido usado por Plaspy para todos los equipos.
4. Si el dispositivo requiere selección de transporte, elija UDP o TCP según la preferencia del instalador y el soporte del firmware.
5. Aplique o guarde la configuración en la herramienta ArkNav o mediante el método de comandos del dispositivo.
6. Reinicie el equipo si las instrucciones del fabricante indican que es necesario para activar los nuevos ajustes de servidor.
7. Valide que el RX-12 reporte a Plaspy confirmando que el dispositivo aparece en la plataforma y que se reciben mensajes de posición o eventos.

## Ejemplos de comandos de configuración

Los comandos exactos y la sintaxis dependen de la utilidad de configuración de ArkNav, el conjunto de comandos SMS o la interfaz de depuración USB y pueden variar según el firmware. ArkNav suele proporcionar una lista de comandos o una utilidad para introducir dominio o IP del servidor, puerto, transporte, ajustes APN y otros parámetros. Consulte el manual del usuario del ArkNav RX-12 para los formatos de comando exactos y procedimientos paso a paso.

Si dispone de ejemplos públicos de comandos ArkNav según firmware o una herramienta del proveedor, inclúyalos aquí siguiendo la guía del dispositivo. Mantenga los marcadores de posición como {{apn}} o {{apnu}} exactamente como los provea el fabricante y sustitúyalos por las credenciales APN de su operador durante la configuración.

## Notas de configuración

- Las diferencias de firmware pueden cambiar la interfaz de configuración, la sintaxis de comandos SMS o las opciones de transporte permitidas; verifique las notas de la versión de firmware del RX-12 antes de configurar los dispositivos.
- Para equipos que permiten tanto TCP como UDP, elija el transporte que mejor se adapte a su instalación y condiciones de red; Plaspy acepta ambos en el puerto 8888.
- Use el dominio d.plaspy.com cuando sea posible para permitir el enrutamiento basado en DNS; la IP 54.85.159.138 se proporciona como alternativa cuando las herramientas de configuración lo requieren.
- Si realiza actualizaciones OTA, asegúrese de que los cambios en las plantillas de configuración se prueben en un equipo de muestra antes del despliegue masivo.
- Mantenga un registro del IMEI del dispositivo y de los detalles de la instalación para acelerar la validación en Plaspy y facilitar la resolución de problemas de conectividad.

## Por qué usar Plaspy con esta configuración

Configurar el ArkNav RX-12 para reportar a Plaspy brinda a los operadores de flotas visibilidad centralizada de la ubicación del vehículo, su estado y la telemetría basada en eventos. El diseño robusto del RX-12 y su conectividad LTE‑M con respaldo 2G lo convierten en un endpoint fiable para activos que requieren reportes consistentes con mantenimiento mínimo, mientras que Plaspy se encarga de la detección de protocolo y el procesamiento centralizado.

Para obtener más información sobre Plaspy y las capacidades de la plataforma visite https://www.plaspy.com. Los métodos específicos de configuración del dispositivo, el comportamiento del firmware y los detalles del fabricante pueden cambiar con el tiempo; verifique la información más reciente sobre la configuración del RX-12 y las referencias técnicas en el sitio web de ArkNav https://www.arknavgps.com.tw/.
