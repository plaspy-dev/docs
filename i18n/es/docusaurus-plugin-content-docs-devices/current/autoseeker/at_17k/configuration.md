---
slug: /autoseeker/at_17k/configuration
id: at_17k-configuration
sidebar_label: Configuration
title: Autoseeker - AT-17K Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el Autoseeker AT-17K con Plaspy usando ajustes de servidor compartido y pasos prácticos
keywords:
  - Autoseeker AT-17K
  - Configuración AT-17K
  - Configuración GPS Autoseeker
  - Configuración de dispositivo Plaspy
  - Configuración rastreador GPS
  - Configuración seguimiento de flotas
  - Configuración rastreador de activos
  - Configuración rastreador GPS solar
  - Configuración rastreador GPS impermeable
  - Configuración plataforma de rastreo vehicular
---

# Autoseeker - Configuración AT-17K

Esta página ofrece el contexto público de configuración para conectar el Autoseeker AT-17K 4G Solar Wireless Magnetic GPS Tracker con Plaspy. Se concentra en los ajustes de servidor compartido que Plaspy requiere y en pasos prácticos comúnmente utilizados para preparar el AT-17K a fin de que reporte ubicación y telemetría a la plataforma Plaspy. Use esto como referencia práctica para la planificación y verificación de la instalación.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del tracker, pero los pasos exactos del lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El AT-17K está documentado aquí como un dispositivo compatible con Plaspy que envía ubicación y estado a través de redes celulares; siempre contraste estos pasos públicos con la documentación oficial de Autoseeker y con su firmware actual.

## Resumen de la configuración

Preparar el AT-17K para Plaspy implica configurar el punto de subida (uplink), verificar la conectividad celular y confirmar que el dispositivo reporte la telemetría esperada a Plaspy. El objetivo es que el tracker sea visible en el panel de Plaspy para que pueda usar ubicación en tiempo real, reproducción de historial y alertas por eventos.

- Direccione el tracker al endpoint del servidor de Plaspy y asegúrese de que los ajustes de transporte coincidan con las opciones de configuración del dispositivo.
- Confirme la SIM y la conectividad celular para que el tracker pueda enviar datos de ubicación y alarmas por 4G LTE o GSM.
- Valide la operación de batería y recarga solar para que el dispositivo permanezca en línea durante el tiempo previsto de despliegue.
- Pruebe el reporte de alarmas y telemetría como batería baja, vibración y manipulación para que Plaspy pueda activar flujos de trabajo.
- Verifique que el dispositivo aparezca en Plaspy y que las actualizaciones de ubicación y las rutas históricas sean visibles.

## Ajustes de servidor de Plaspy

Al configurar el AT-17K para Plaspy, se usan los siguientes ajustes públicos de servidor. Plaspy usa el mismo puerto para todos los dispositivos compatibles y detecta automáticamente el protocolo del tracker.

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP; el dispositivo puede configurarse usando UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del tracker para interpretar el flujo de datos entrante

## Requisitos típicos antes de la configuración

- Un AT-17K con alimentación y carga de batería suficiente y, si es posible, exposición solar para pruebas en campo.
- Una tarjeta SIM activa y operativa en redes 4G LTE o GSM adecuadas para su región.
- Acceso al método de configuración oficial de Autoseeker o al software que se use para el AT-17K (comandos SMS, herramienta web o herramienta USB/serial según la cadena de herramientas del proveedor).
- APN y credenciales celulares confirmadas para la SIM en uso si su región u operador las requiere.
- Un lugar estable para probar el dispositivo al aire libre con visibilidad clara del cielo para obtener fijaciones GPS y completar el reporte inicial.
- Acceso administrativo a su cuenta de Plaspy o la persona responsable de registrar y monitorear el dispositivo en Plaspy.

## Cómo se conecta este tracker a Plaspy

El AT-17K envía posición GPS y telemetría a bordo a través de la red celular al endpoint y puerto del servidor de Plaspy. Plaspy recibe esos mensajes, reconoce el protocolo automáticamente y muestra la ubicación, el historial y los eventos en la plataforma para monitoreo e informes.

- El tracker se configura para reportar al endpoint compartido de Plaspy d.plaspy.com o 54.85.159.138.
- Los datos se envían por el puerto 8888 empleando UDP o TCP según la configuración de transporte del dispositivo.
- Plaspy detecta automáticamente el protocolo y parsea la telemetría entrante para mostrarla en el mapa y activar reglas de eventos.
- La telemetría comúnmente reportada incluye actualizaciones de posición, estado de batería y solar, y eventos de alarma como vibración o manipulación cuando el AT-17K lo soporta.
- La configuración exitosa resulta en que el dispositivo aparezca en Plaspy con actualizaciones en vivo y reproducción de rutas históricas.

## Flujo de trabajo típico de configuración

Siga esta secuencia práctica al preparar un AT-17K para Plaspy. Los pasos exactos pueden variar según el firmware y la herramienta de configuración de Autoseeker que utilice.

1. Acceda al método de configuración oficial de Autoseeker o al software del proveedor para el AT-17K (comandos SMS, aplicación de configuración o cable y herramienta para PC).
2. Ingrese la dirección del servidor de Plaspy especificando d.plaspy.com o 54.85.159.138 en el campo de servidor u host del dispositivo.
3. Configure el puerto del dispositivo en 8888, tal como lo requiere Plaspy.
4. Seleccione UDP o TCP si el dispositivo exige elegir explícitamente el transporte; el AT-17K puede configurarse en cualquiera de los dos en el puerto 8888.
5. Introduzca el APN o credenciales del operador necesarias para la SIM para que el tracker obtenga conexión de datos.
6. Aplique o guarde la configuración en la herramienta de Autoseeker y, si el dispositivo lo requiere, reinícielo para activar los nuevos ajustes.
7. Valide que el dispositivo reporte a Plaspy comprobando las actualizaciones de ubicación y la telemetría entrante en la plataforma Plaspy.

## Ejemplos de comandos de configuración

Los comandos exactos de configuración e interfaces dependen del firmware de Autoseeker y de las herramientas del proveedor que utilice. Los fabricantes a veces suministran conjuntos de comandos SMS, una herramienta de configuración para PC o una aplicación móvil para este modelo. Debido a que los comandos varían por firmware, consulte la guía oficial de configuración de Autoseeker para el AT-17K para la sintaxis y secuencia precisas.

Si dispone de comandos públicos específicos de Autoseeker según su firmware o proveedor, inclúyalos aquí siguiendo la guía del fabricante y conserve cualquier marcador de posición como valores de APN o nombres de usuario exactamente tal como se provean.

## Notas de configuración

- Las revisiones de firmware y hardware pueden cambiar los ajustes disponibles y el formato de los comandos; siempre verifique la sintaxis de los comandos según la versión de firmware de su dispositivo.
- Si el dispositivo ofrece ambos transportes UDP y TCP, pruebe los dos en caso de problemas de conectividad; Plaspy aceptará cualquiera en el puerto 8888 y detectará el protocolo del tracker automáticamente.
- Asegúrese de que el APN de la SIM sea el correcto para su operador; un APN incorrecto o ausente es la causa más común de fallas en el uplink.
- Para despliegues que dependan de larga autonomía de batería y recarga solar, valide el reporte de telemetría de energía para poder monitorear la salud de la batería en Plaspy.
- Conserve una copia de cualquier SMS o pasos de configuración utilizados para programar el dispositivo para poder replicar instalaciones en múltiples unidades.

## Por qué usar Plaspy con esta configuración

Usar el Autoseeker AT-17K con Plaspy brinda a las organizaciones una vía clara hacia la visibilidad continua y el monitoreo operativo de activos en entornos exigentes. La larga autonomía del AT-17K y su recarga solar, combinadas con la ingestión unificada y la detección automática de protocolo de Plaspy, facilitan la gestión de despliegues a largo plazo con menos intervenciones manuales.

Para saber más sobre Plaspy y cómo admite el seguimiento de flotas y activos, visite https://www.plaspy.com. Para los métodos de configuración específicos más actuales del dispositivo, detalles de firmware y comandos oficiales del AT-17K, verifique la información con el fabricante en https://autoseekergps.com/ ya que el comportamiento del dispositivo y las instrucciones de configuración pueden cambiar con el tiempo.
