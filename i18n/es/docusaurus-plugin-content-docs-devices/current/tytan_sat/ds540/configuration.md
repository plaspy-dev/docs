---
slug: /tytan_sat/ds540/configuration
id: ds540-configuration
sidebar_label: Configuration
title: Tytan SAT - DS540 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del Tytan SAT DS540 con ajustes del servidor Plaspy y pasos prácticos para reportes TCP o UDP
keywords:
  - Tytan SAT DS540
  - configuración DS540
  - configuración inicial DS540
  - configuración del rastreador Tytan SAT
  - configuración Plaspy
  - configuración rastreador GPS
  - configuración rastreador vehicular
  - rastreador para gestión de flotas
  - configuración de servidor DS540
  - configuración telemática GPS
---

# Tytan SAT - Configuración DS540

Esta página documenta el contexto público de configuración para usar el rastreador Tytan SAT DS540 con Plaspy. Resume los valores del servidor Plaspy necesarios para enviar telemetría y datos de ubicación, describe el flujo práctico de configuración y señala lo que los integradores de flota deben verificar antes de intentar la integración. La información aquí está pensada para usuarios técnicos e instaladores que configuren unidades DS540 para reportar a Plaspy.

Plaspy utiliza valores de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando llegan los mensajes. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware del DS540, la revisión de hardware, el tipo de instalación y las herramientas de configuración que proporcione Tytan SAT o los proveedores. Use esta guía como referencia práctica y verifique los detalles específicos del dispositivo con la documentación del fabricante.

## Resumen de la configuración

Este proceso prepara el DS540 para enviar posición GPS, datos del bus CAN y eventos de sensores a la plataforma Plaspy para que los dispositivos sean visibles en paneles en tiempo real e informes históricos. El objetivo principal es apuntar el rastreador al servidor Plaspy, confirmar el transporte y puerto correctos y validar que los paquetes de telemetría lleguen y sean interpretados por Plaspy.

- Configure en el DS540 el destino de red al endpoint y puerto del servidor Plaspy para que pueda enviar telemetría.
- Seleccione el método de transporte requerido por su instalación y confirme que el dispositivo soporta TCP o UDP.
- Verifique la conectividad celular y los ajustes APN necesarios para que los datos GPRS fluyan.
- Valide que la posición, los parámetros derivados del CAN y los eventos de E/S sean visibles en Plaspy después de la configuración.
- Confirme que el firmware y las herramientas del proveedor coincidan con el enfoque de configuración que está siguiendo.

## Ajustes del servidor Plaspy

- Server domain: d.plaspy.com
- Server IP: 54.85.159.138
- Port: 8888
- Transport: the DS540 may be configured to use UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol when data arrives and Plaspy uses the same port for all supported devices

## Requisitos típicos antes de la configuración

- Una unidad DS540 instalada y alimentada con acceso al bus CAN del vehículo o al cableado de sensores requerido según su caso de uso.
- SIM celular activa y credenciales APN correctas para transmisión de datos GPRS si va a usar conectividad celular.
- Acceso al método oficial de configuración de Tytan SAT o al software proporcionado por el proveedor o instalador.
- Cobertura de red y un plan de datos suficiente para el reporte de telemetría.
- Credenciales o acceso a una instancia de Plaspy para confirmar la visibilidad del dispositivo tras la configuración.
- Un plan de pruebas para validar fijaciones GPS, mapeo de datos CAN e informes de eventos una vez que el dispositivo apunte a Plaspy.

## Cómo se conecta este rastreador a Plaspy

Al configurarse para Plaspy, el DS540 envía paquetes de ubicación, telemetría y eventos al endpoint y puerto compartido del servidor Plaspy. Plaspy ingiere los mensajes, mapea coordenadas GPS y parámetros del dispositivo en paneles y flujos de alerta, y almacena trazas históricas para informes.

- El DS540 transmite actualizaciones de posición por TCP o UDP a d.plaspy.com en el puerto 8888.
- Los datos del bus CAN y los parámetros FMS parseados se envían junto con la información GPS para análisis de flota en Plaspy.
- Los eventos de entradas digitales y analógicas y lecturas de sensores 1-wire se reportan a Plaspy para monitorización y alertas.
- Plaspy detecta automáticamente el protocolo usado por los mensajes entrantes del DS540, por lo que usted no necesita declarar el protocolo en la plataforma.

## Flujo típico de configuración

1. Acceda al método de configuración oficial del fabricante o al software proporcionado por Tytan SAT o su proveedor.
2. En los ajustes de destino del rastreador ingrese el dominio del servidor Plaspy d.plaspy.com o la IP del servidor 54.85.159.138.
3. Configure el puerto de destino en 8888 que Plaspy utiliza para todos los dispositivos compatibles.
4. Seleccione UDP o TCP como transporte si la configuración del equipo requiere elegir un transporte.
5. Asegúrese de que la SIM del dispositivo y los ajustes APN sean correctos para que el DS540 establezca conectividad de datos GPRS.
6. Aplique o guarde la configuración y reinicie el equipo si la herramienta lo requiere.
7. Verifique que el dispositivo esté reportando a Plaspy confirmando que la telemetría y los datos de posición llegan a su cuenta Plaspy.

## Ejemplos de comandos de configuración

El DS540 se configura comúnmente usando la utilidad de configuración de Tytan SAT, herramientas web del proveedor o comandos estilo SMS/AT según el firmware y la práctica del instalador. Los comandos exactos y la sintaxis varían según la herramienta del fabricante y la versión de firmware, por lo que aquí no se ofrecen comandos universales. Consulte la guía de configuración de Tytan SAT o el manual del dispositivo para el conjunto de comandos y ejemplos aplicables a su revisión de firmware.

## Notas de configuración

- Las diferencias de firmware pueden cambiar menús de configuración y la sintaxis de comandos. Siempre verifique que los comandos correspondan a la revisión de firmware del equipo.
- La selección entre TCP y UDP se hace en el dispositivo; Plaspy acepta ambos y detectará automáticamente el protocolo entrante.
- Confirme APN, usuario y contraseña con su proveedor de SIM si se requiere conectividad GPRS para la telemetría.
- Algunas herramientas de instalador requieren reiniciar el dispositivo para aplicar los cambios de servidor y puerto.
- Revise el manual de Tytan SAT para métodos de configuración específicos del DS540 y características opcionales antes de efectuar cambios.

## Por qué usar Plaspy con esta configuración

Usar el DS540 con Plaspy brinda a las organizaciones visibilidad consistente sobre la posición del vehículo, métricas del bus CAN y eventos de sensores. Apuntar el dispositivo a Plaspy usando el endpoint de servidor compartido simplifica despliegues a escala de flota porque todos los dispositivos Plaspy usan el mismo puerto y la plataforma detecta automáticamente el protocolo del rastreador, reduciendo la carga de configuración por dispositivo en la plataforma.

To learn more about Plaspy and supported integrations visit https://www.plaspy.com. Device specific setup instructions, firmware behavior and manufacturer configuration methods can change over time so please verify the latest DS540 details on the Tytan SAT website at http://tytansat.com/ before you deploy.
