---
slug: /gotop/q1/configuration
id: q1-configuration
sidebar_label: Configuration
title: GOTOP - Q1 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para integrar el GOTOP Q1 con Plaspy usando ajustes de servidor compartido y pasos prácticos de configuración
keywords:
  - configuración GOTOP Q1
  - instalación GOTOP Q1
  - GOTOP Q1 Plaspy
  - configuración servidor GOTOP Q1
  - configuración rastreador GPS GOTOP
  - configuración seguimiento GOTOP Q1
  - configuración plataforma GPS GOTOP Q1
  - configuración rastreador Plaspy
  - seguimiento vehicular Q1
  - seguimiento de activos GOTOP Q1
---

# GOTOP - Q1 Configuración

Esta página recoge la información pública de configuración necesaria para usar el GOTOP Q1 Mini GPS Tracker con la plataforma Plaspy. Incluye los valores prácticos y orientaciones para apuntar un Q1 a Plaspy y obtener visibilidad en tiempo real, además de resumir las capacidades del dispositivo descritas por el fabricante, como protección IPX7 contra agua, alerta por movimiento, posicionamiento GPS y LBS, ubicación por SMS y gestión de energía.

Plaspy emplea ajustes de servidor compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador en la plataforma. Los pasos de configuración en el lado del fabricante pueden variar según la versión de firmware, revisión de hardware, herramientas del instalador y procedimientos del proveedor local, por lo que esta página se centra en los valores públicos de Plaspy y en el proceso práctico para aplicarlos en el dispositivo.

## Resumen de la configuración

El objetivo de la configuración es preparar el Q1 para que se comunique de forma fiable con Plaspy, validar la conectividad y permitir que el dispositivo sea visible en la plataforma. Para el Q1 esto suele implicar configurar el envío de informes de ubicación y eventos al endpoint compartido de Plaspy y confirmar que esos informes llegan a su cuenta Plaspy.

- Configure la dirección del servidor del dispositivo para que apunte a Plaspy usando los ajustes públicos.
- Seleccione el protocolo de transporte que requiera el firmware del Q1, UDP o TCP, y establezca el puerto compartido.
- Guarde y aplique la configuración mediante la herramienta de GOTOP o el método SMS soportado por su unidad.
- Verifique que el dispositivo se registra y envía actualizaciones periódicas de posición y alertas de movimiento a Plaspy.
- Confirme que el comportamiento ante batería baja y alertas de movimiento cumple con sus expectativas operativas.

## Ajustes del servidor Plaspy

Use estos ajustes públicos de Plaspy al configurar el Q1:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol and uses the same port for all supported devices

## Requisitos habituales antes de comenzar

- Un dispositivo Q1 cargado con la batería instalada y encendido.
- Una tarjeta SIM activa y conectividad móvil compatible con las bandas GSM y GPRS del Q1.
- Acceso al método oficial de configuración GOTOP para su unidad, como la herramienta del fabricante, comandos SMS o software del vendedor.
- Identificadores del dispositivo disponibles, como el IMEI, para registrar el equipo en Plaspy si su cuenta lo requiere.
- Un entorno de prueba tranquilo para validar la fijación de GPS y las comunicaciones iniciales con Plaspy.
- Conocimientos básicos para elegir entre UDP o TCP si la configuración del dispositivo solicita esa opción.

## Cómo se conecta este rastreador a Plaspy

Una vez configurado, el GOTOP Q1 envía datos de ubicación y estado al endpoint y puerto del servidor Plaspy, donde la plataforma detecta e interpreta automáticamente el protocolo del rastreador. Esto permite que Plaspy muestre actualizaciones de posición, alertas de movimiento y otros eventos del dispositivo.

- El dispositivo envía reportes periódicos de posición GPS o LBS a d.plaspy.com o 54.85.159.138 en el puerto 8888.
- El transporte puede ser UDP o TCP según la configuración de firmware del Q1.
- Plaspy detecta automáticamente el protocolo entrante del rastreador, por lo que no es necesario seleccionar protocolo en la plataforma.
- Las alertas de movimiento y otros mensajes de evento se reencaminan a la plataforma Plaspy para supervisión en tiempo real.
- Una configuración correcta hace que el dispositivo sea visible en Plaspy para seguimiento operativo e informes.

## Flujo de trabajo típico de configuración

1. Acceda al método oficial de configuración GOTOP para su unidad Q1 usando la herramienta del fabricante, comandos SMS o el software del proveedor.
2. Ingrese el dominio del servidor Plaspy d.plaspy.com o la IP 54.85.159.138 en el campo de dirección del servidor del dispositivo.
3. Establezca el puerto en 8888, ya que Plaspy usa el mismo puerto para todos los dispositivos compatibles.
4. Elija el transporte UDP o TCP si el Q1 solicita seleccionar una opción durante la configuración.
5. Aplique o guarde la configuración en el dispositivo según el procedimiento del fabricante.
6. Reinicie el dispositivo si el firmware lo requiere o después de aplicar los ajustes.
7. Valide que el Q1 reporte a Plaspy revisando el estado del dispositivo y las últimas actualizaciones de posición en su cuenta Plaspy.

## Ejemplos de comandos de configuración

Los comandos exactos y su sintaxis dependen del firmware GOTOP y del método del fabricante. Dado que los comandos varían según el firmware y la herramienta del proveedor, este documento no incluye cadenas de comandos específicas del dispositivo. Los métodos habituales del fabricante incluyen configuración vía herramienta de escritorio, aplicación móvil o conjunto de comandos SMS. Consulte la documentación GOTOP para conocer los comandos o el formato de payload exacto utilizados por su firmware Q1.

## Notas de configuración

- Las diferencias de firmware entre lotes de producción del Q1 pueden cambiar los ajustes disponibles y el formato de los comandos; siempre confirme con el dispositivo físico que tenga en mano.
- Cuando el dispositivo permite elegir UDP o TCP, pruebe ambos transportes si surgen problemas de conectividad; Plaspy acepta cualquiera en el puerto 8888 y realiza detección automática de protocolo.
- Algunas versiones de firmware del Q1 pueden soportar configuración vía SMS; utilice el conjunto oficial de comandos de GOTOP al configurar por SMS.
- Después de la configuración, espere el tiempo necesario para un fix GPS y la subida inicial de datos, de modo que la ubicación y las alertas de movimiento aparezcan en Plaspy.
- Mantenga un registro del IMEI del dispositivo y de los parámetros de configuración para futuras tareas de resolución de incidentes y para registrar dispositivos en Plaspy si fuera necesario.

## Por qué usar Plaspy con esta configuración

Usar el GOTOP Q1 con Plaspy ofrece un camino sencillo hacia la visibilidad de activos, seguimiento en tiempo real y monitoreo de alertas de movimiento. La combinación del formato compacto del Q1, su clasificación impermeable y la detección de movimiento con el modelo de servidor compartido de Plaspy y la detección automática de protocolos permite a las organizaciones desplegar rastreadores y centralizar la supervisión sin gestionar endpoints de servidor por dispositivo.

Para obtener más información sobre Plaspy y las capacidades de la plataforma visite https://www.plaspy.com. Para comandos específicos del dispositivo, notas de firmware y manuales de usuario consulte la información actual en el sitio del fabricante https://www.gotop.cc/. Las especificaciones del fabricante, los métodos de configuración y el comportamiento del firmware pueden cambiar con el tiempo, por lo que siempre confirme los detalles con la documentación de GOTOP antes de despliegues a gran escala.
