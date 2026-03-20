---
slug: /flextrack/lommy_pro_t/configuration
id: lommy_pro_t-configuration
sidebar_label: Configuration
title: Flextrack - Lommy Pro T Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración para Flextrack Lommy Pro T con ajustes de servidor Plaspy y pasos prácticos para telemetría y GPS
keywords:
  - Configuración Flextrack Lommy Pro T
  - Instalación Lommy Pro T
  - Flextrack Lommy Pro T Plaspy
  - Configuración de servidor Lommy Pro T
  - Configuración rastreador GPS Lommy Pro T
  - Configuración de dispositivo Plaspy
  - Configuración rastreador cadena de frío
  - Rastreador GPS monitoreo de temperatura
  - Configuración rastreador gestión de flotas
  - Integración Lommy Pro T
---

# Flextrack - Configuración de Lommy Pro T

Esta página ofrece la guía pública de configuración para usar el Flextrack Lommy Pro T con la plataforma Plaspy. Aquí se describen los ajustes de servidor y los pasos prácticos que suelen aplicar los operadores para que el Lommy Pro T transmita telemetría de temperatura y posicionamiento GPS a Plaspy, permitiendo la monitorización continua de la cadena de frío.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos de configuración por parte del fabricante para el Lommy Pro T pueden variar según la versión de firmware, el tipo de instalación y las herramientas del proveedor, por lo que esta página debe considerarse orientación práctica pública y se recomienda consultar al fabricante para detalles específicos del dispositivo.

## Resumen de la configuración

Este proceso prepara al Lommy Pro T para comunicarse con Plaspy y que los datos de temperatura y ubicación aparezcan en la plataforma para monitoreo, alertas e informes históricos.

- Apunte el dispositivo al endpoint de servidor de Plaspy y configure el transporte y puerto correctos para que el rastreador abra un canal de datos con la plataforma.
- Verifique la conectividad celular y los ajustes de APN para que el dispositivo pueda establecer una sesión de datos confiable.
- Compruebe que Plaspy reciba informes periódicos de temperatura y GPS y que estos sean visibles en la consola de monitoreo.
- Active cualquier reporte de eventos o umbrales de alarma tanto en el dispositivo como en Plaspy para que las desviaciones generen notificaciones.
- Confirme las opciones de alimentación persistente y el comportamiento de registro para mantener una documentación continua de la cadena de frío.

## Ajustes de servidor Plaspy

Al configurar el Lommy Pro T para Plaspy, utilice los siguientes ajustes públicos de servidor:

- server domain d.plaspy.com
- server IP 54.85.159.138
- port 8888
- transport support using UDP or TCP
- Plaspy automatically detects the tracker protocol

Tenga en cuenta que Plaspy usa el mismo puerto para todos los dispositivos compatibles y detectará automáticamente el protocolo correcto para el Lommy Pro T.

## Requisitos típicos antes de comenzar

- Asegúrese de que el Lommy Pro T tenga suficiente energía de la batería interna o de una fuente externa durante la configuración.
- Confirme que el dispositivo cuenta con una SIM celular operativa y un plan de datos activo adecuado para telemetría continua.
- Disponga del método de configuración oficial de Flextrack o del software recomendado para ajustar el Lommy Pro T.
- Tenga a mano el APN de la red y cualquier credencial del operador necesaria para que el dispositivo se conecte a la red celular.
- Esté preparado para reiniciar el dispositivo después de cambiar ajustes de servidor o transporte para que la nueva configuración entre en vigor.

## Cómo se conecta este rastreador a Plaspy

El Lommy Pro T envía telemetría de temperatura, alarmas y actualizaciones periódicas de ubicación a Plaspy a través de la red celular. El dispositivo se configura para reportar al endpoint y puerto compartidos de Plaspy, de modo que los flujos de datos lleguen a la plataforma para visualización y generación de alertas.

- Los informes periódicos de telemetría incluyen lecturas de temperatura con marca de tiempo y actualizaciones del estado del dispositivo enviadas a d.plaspy.com en el puerto 8888.
- Las fijaciones de ubicación GPS y las estimaciones de posición basadas en GSM se transmiten a Plaspy para que el activo pueda rastrearse en un mapa en tiempo real.
- Las alarmas por eventos, como desviaciones de temperatura, se envían a Plaspy para notificación inmediata y registro.
- Los datos pueden enviarse por UDP o TCP según la configuración del dispositivo y la preferencia del instalador; Plaspy detectará el protocolo automáticamente.
- Una vez que el rastreador informe con éxito, Plaspy archiva la telemetría para trazabilidad histórica y documentación de cumplimiento.

## Flujo de configuración típico

1. Acceda al método de configuración oficial de Flextrack o al software recomendado para el Lommy Pro T.
2. Ingrese el dominio de servidor de Plaspy d.plaspy.com o la IP 54.85.159.138 en el campo de servidor del dispositivo.
3. Establezca el puerto del dispositivo en 8888, que es el puerto que Plaspy utiliza para todos los equipos.
4. Seleccione UDP o TCP como transporte si el dispositivo solicita elegir uno.
5. Ingrese el APN y las credenciales de red necesarias para que el dispositivo pueda iniciar una sesión de datos celular.
6. Aplique o guarde la configuración y reinicie el Lommy Pro T si el dispositivo requiere reinicio para que los cambios surtan efecto.
7. Valide que el dispositivo informe a Plaspy y que las actualizaciones de temperatura y posición aparezcan en la plataforma.

## Comandos de configuración de ejemplo

El fabricante de Lommy Pro T suministra herramientas y métodos de configuración que pueden incluir comandos SMS, una app de configuración o una utilidad de escritorio. La sintaxis exacta de los comandos varía según el firmware y la herramienta del proveedor, por lo que el método que use dependerá de la interfaz de configuración Flextrack que le entregaron con su dispositivo.

Si la documentación del dispositivo o del proveedor incluye ejemplos explícitos de SMS o comandos, siga esos ejemplos publicados y reemplace los valores del servidor por d.plaspy.com o 54.85.159.138 y el puerto 8888. Plaspy aceptará datos por UDP o TCP y detectará el protocolo automáticamente.

## Notas de configuración

- Las diferencias de firmware pueden cambiar la sintaxis de los comandos y las opciones disponibles; confirme siempre la sintaxis con la documentación del Lommy Pro T correspondiente a su versión de firmware.
- Seleccione UDP para menor sobrecarga o TCP si prefiere un transporte orientado a conexión, según sus necesidades de fiabilidad y las características de la red; Plaspy admite ambos.
- Verifique las credenciales APN y la disponibilidad celular antes de finalizar los ajustes de servidor Plaspy para evitar pérdida de telemetría.
- En instalaciones alimentadas externamente desde unidades de refrigeración, confirme el comportamiento frente a transiciones de energía para asegurar el registro continuo.
- Mantenga un registro de los cambios de configuración y de los identificadores del dispositivo para mapear correctamente el equipo al activo en Plaspy.

## Por qué usar Plaspy con esta configuración

Implementar el Lommy Pro T con Plaspy integra la telemetría de temperatura y el contexto de ubicación en una sola plataforma de monitoreo, permitiendo a los equipos detectar desviaciones con rapidez, mantener la documentación regulatoria y coordinar acciones correctivas. La combinación de registro continuo y alertas en tiempo real mejora la supervisión operativa de envíos de alto valor y sensibles a la temperatura.

Para obtener más información sobre Plaspy y cómo soporta integraciones de dispositivos, visite https://www.plaspy.com. Para las instrucciones más recientes específicas del dispositivo Lommy Pro T, notas de firmware y soporte del fabricante, verifique los detalles en el sitio de Flextrack https://flextrack.dk ya que los métodos del fabricante y el comportamiento del firmware pueden cambiar con el tiempo.
