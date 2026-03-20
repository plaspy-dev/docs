---
slug: /gosafe/g616/configuration
id: g616-configuration
sidebar_label: Configuration
title: Gosafe - G616 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para conectar el rastreador Gosafe G616 a Plaspy con ajustes de servidor compartidos y pasos prácticos
keywords:
  - Configuración Gosafe G616
  - Instalación Gosafe G616
  - Integración G616 Plaspy
  - Configuración rastreador Gosafe
  - Configuración servidor G616
  - Configuración dispositivo Plaspy
  - Guía rastreador G616 GPS
  - Configuración seguimiento vehicular
  - Configuración gestor de flotas
  - Configuración telemática G616
---

# Gosafe - G616 Configuración

Esta página describe el contexto público de configuración para usar el rastreador GPS Gosafe G616 con la plataforma Plaspy. Se centra en los ajustes de red compartidos que requiere Plaspy, orientación práctica para la instalación y los pasos comunes que usted utilizará al preparar el equipo para el monitoreo de flotas y la ingestión de telemetría en Plaspy. La descripción técnica del G616 en esta guía se basa en la información pública y las capacidades conocidas del modelo.

Plaspy emplea ajustes de servidor compartidos para todos los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el equipo reporta a la plataforma. Los pasos exactos en el lado del fabricante pueden variar según el firmware, la revisión de hardware, el método de instalación y las herramientas del proveedor, por lo que siempre confirme los procedimientos específicos con la documentación de Gosafe y sus herramientas de integración.

## Visión general de la configuración

Este proceso prepara el G616 para comunicarse de forma fiable con Plaspy, apuntando el dispositivo al endpoint de servidor compartido de la plataforma y validando la conectividad. El objetivo es habilitar el rastreo en tiempo real, el reporte de eventos y la visibilidad de la telemetría en Plaspy, asegurando que el dispositivo utilice el transporte y la configuración de red adecuados.

- Configure el equipo para enviar datos de ubicación y eventos al endpoint del servidor de Plaspy.
- Asegúrese de seleccionar el transporte correcto (UDP o TCP) y el puerto adecuado para que Plaspy reciba la información.
- Valide la conectividad celular y la disponibilidad de la SIM para que el G616 pueda transmitir telemetría.
- Guarde y aplique los ajustes en el G616 y confirme que el dispositivo sea visible en Plaspy.
- Verifique los reportes del dispositivo y pruebe eventos comunes como encendido/apagado de ignición o detección de movimiento.

## Ajustes del servidor Plaspy

Use las siguientes configuraciones públicas de servidor de Plaspy al configurar el G616. Plaspy utiliza el mismo puerto para todos los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando un equipo se conecta.

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte: UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador cuando recibe datos

## Requisitos habituales antes de la configuración

- Alimente el dispositivo usando la alimentación recomendada del vehículo o una fuente externa y asegúrese de que la unidad esté en funcionamiento.
- Inserte y active una tarjeta SIM celular compatible con un plan de datos adecuado para LTE y con conmutación a GSM si es necesario.
- Tenga a mano la herramienta oficial de configuración de Gosafe, la lista de comandos SMS o el software del distribuidor utilizado para el G616.
- Confirme la versión de firmware y las notas de la versión del fabricante que puedan afectar el comportamiento de configuración.
- Asegúrese de disponer del IMEI o número de serie del dispositivo para poder identificar la unidad en Plaspy una vez que reporte.
- Si realiza la configuración de forma remota, verifique que el vehículo tenga señal celular suficiente para la conexión inicial.

## Cómo se conecta este rastreador a Plaspy

Al integrarse con Plaspy, el G616 transmite mensajes de ubicación, telemetría y eventos al endpoint y puerto compartido de Plaspy. Plaspy recibe estos mensajes por el transporte seleccionado y mapea automáticamente el protocolo entrante, por lo que no se necesita diferenciar puertos por dispositivo en el lado de Plaspy.

- El G616 envía posición GPS y telemetría a d.plaspy.com o 54.85.159.138 en el puerto 8888.
- Puede seleccionar UDP o TCP en el dispositivo si es necesario; Plaspy acepta ambos transportes en el puerto 8888.
- Plaspy inspecciona el tráfico entrante y detecta y analiza automáticamente el protocolo del rastreador.
- Una vez que el dispositivo reporta a Plaspy, los datos de ubicación y eventos quedan disponibles para seguimiento en vivo y reproducción.
- Use los paneles y alertas de Plaspy para monitorear estado de ignición, entradas de sensores y eventos de choque o conducción que reporte el G616.

## Flujo de configuración típico

1. Acceda al método oficial de configuración de Gosafe para el G616 (herramienta del fabricante, portal del distribuidor o conjunto de comandos SMS).
2. Introduzca el endpoint del servidor de Plaspy como dominio d.plaspy.com o como IP 54.85.159.138 en el campo servidor/host.
3. Configure el puerto del servidor en 8888 en las opciones de red del dispositivo.
4. Seleccione UDP o TCP si el dispositivo requiere la selección explícita del transporte y guarde esa elección.
5. Aplique o guarde la configuración en el dispositivo mediante la herramienta del fabricante o enviando los comandos SMS correspondientes.
6. Reinicie el G616 si las instrucciones del fabricante indican que es necesario para aplicar los nuevos ajustes.
7. Verifique que el dispositivo reporte a Plaspy comprobando la visibilidad de la unidad y la marca de tiempo del último reporte en la plataforma Plaspy.

## Comandos de configuración de ejemplo

Los comandos exactos de configuración y su sintaxis dependen de la utilidad de Gosafe, la versión de firmware o la interfaz SMS usada para el G616. Dado que los comandos varían según el firmware y las herramientas del fabricante, consulte el manual oficial de configuración de Gosafe para el formato correcto de los comandos. La documentación típica del fabricante muestra cómo establecer servidor, puerto y transporte mediante una herramienta GUI o comandos SMS.

Si usa configuración vía SMS o una herramienta de línea de comandos proporcionada por Gosafe, siga la lista oficial de comandos y reemplace cualquier marcador de APN o credenciales según las indicaciones del fabricante.

## Notas de configuración

- Las diferencias de firmware pueden modificar los ajustes disponibles o la sintaxis de los comandos; confirme siempre el firmware del equipo antes de configurar.
- Las prácticas de instalación varían por mercado e integrador; algunas flotas usan las herramientas del fabricante mientras que otras dependen de SMS o perfiles de aprovisionamiento.
- Elija UDP o TCP según los requisitos de su instalación; Plaspy acepta ambos en el puerto compartido, pero consideraciones de red pueden influir en su decisión.
- Plaspy usa el puerto 8888 para todos los dispositivos y detecta automáticamente el protocolo del rastreador, por lo que solo necesita apuntar el G616 a d.plaspy.com o 54.85.159.138 en ese puerto.
- La documentación y las notas de la versión del fabricante son la fuente autorizada para comandos SMS, marcadores de APN y pasos opcionales de restablecimiento.

## Por qué usar Plaspy con esta configuración

Usar el Gosafe G616 con Plaspy ofrece a operadores de flotas e integradores un flujo telemático sólido en el que el dispositivo puede capturar GPS de alta frecuencia y telemetría de choques, y Plaspy consume esa información para monitoreo, análisis e informes. Los ajustes de servidor compartidos de Plaspy simplifican el aprovisionamiento de dispositivos porque todos usan el mismo puerto y Plaspy realiza detección automática de protocolo, reduciendo la complejidad de red por equipo.

Para obtener más información sobre Plaspy y cómo conectar dispositivos a escala visite https://www.plaspy.com. Para los métodos de configuración específicos más recientes, el comportamiento de firmware y detalles del fabricante, verifique la documentación actual de Gosafe en https://gosafesystem.com/ que proporciona los comandos y herramientas oficiales para el G616.
