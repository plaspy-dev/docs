---
slug: /supermate/d11_g/configuration
id: d11_g-configuration
sidebar_label: Configuration
title: Supermate - D11-G Configuration
sidebar_class_name: menu_item_tracker
description: Configure el rastreador Supermate D11 para que reporte a Plaspy con los ajustes públicos de servidor y una guía práctica de puesta en marcha
keywords:
  - Configuración Supermate D11-G
  - Instalación Supermate D11-G
  - Configuración servidor Supermate D11-G
  - Configuración rastreador Plaspy
  - Configuración rastreador GPS
  - Configuración seguimiento vehicular
  - Integración plataforma de rastreo
  - Ajustes servidor dispositivo GPS
  - Configuración rastreo de activos
  - Configuración plataforma Supermate GPS
---

# Supermate - D11-G — Configuración

Esta página describe el contexto público de configuración para usar el rastreador GPS Supermate D11 con Plaspy. Explica los ajustes de servidor compartidos que Plaspy requiere y ofrece orientación práctica para preparar el D11 y que pueda comunicarse con la plataforma. Use esta guía para comprender los pasos principales antes de añadir el dispositivo a Plaspy y para saber qué verificar en el equipo.

Plaspy emplea ajustes de servidor compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta, pero los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El Supermate D11 es un rastreador portátil con seguimiento en tiempo real, geocercas y función SOS, por lo que es importante confirmar el firmware y la documentación del fabricante al realizar la configuración.

## Resumen de configuración

Este proceso prepara el D11 para enviar datos de ubicación y estado a Plaspy y garantiza que el dispositivo sea visible y manejable desde la plataforma. El objetivo es apuntar el rastreador al servidor de Plaspy, verificar los ajustes de transporte y confirmar que los datos llegan correctamente a la plataforma.

- Apunte el rastreador al endpoint de servidor de Plaspy para que los datos de ubicación y eventos lleguen a su cuenta.
- Verifique el transporte y la conectividad para que los mensajes se reciban de forma fiable en Plaspy.
- Valide que el dispositivo informe después de la configuración para que aparezca en el sistema Plaspy.
- Aplique y guarde los ajustes en el D11 usando el método de configuración oficial de Supermate.
- Pruebe eventos comunes como actualizaciones periódicas de ubicación y SOS para confirmar el comportamiento de reporte.

## Ajustes del servidor Plaspy

Use los siguientes ajustes públicos del servidor Plaspy al configurar el Supermate D11. Plaspy usa el mismo puerto para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando se establece la conexión.

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol when the device connects

## Requisitos previos típicos

- Una unidad D11 cargada o con alimentación lista para configuración y pruebas.
- Acceso al método o software de configuración oficial de Supermate proporcionado por el fabricante.
- Una tarjeta SIM activa con datos habilitados si el D11 enviará informes por GSM; confirme el APN cuando sea necesario.
- Conectividad de red básica para permitir que el dispositivo alcance el endpoint d.plaspy.com o 54.85.159.138.
- Acceso a la cuenta Plaspy donde registrará o supervisará el dispositivo para verificar que aparezca tras la configuración.
- Documentación del fabricante o notas de la versión del firmware del D11 para confirmar las opciones y comandos disponibles.

## Cómo se conecta este rastreador a Plaspy

Una vez configurado, el D11 envía datos de ubicación y eventos al endpoint y puerto del servidor Plaspy. Plaspy recibe los mensajes entrantes y empareja automáticamente el protocolo del rastreador, por lo que en el servidor se requiere poca o ninguna selección manual del protocolo.

- El rastreador se configura para reportar al endpoint y puerto compartido de Plaspy.
- Los informes de datos y eventos se envían desde el dispositivo por el transporte elegido, UDP o TCP.
- Plaspy identifica el protocolo correcto a partir de los mensajes entrantes de forma automática.
- Una configuración correcta hace que el rastreador sea visible y reportable dentro de Plaspy para monitoreo en vivo e historial.
- Después de la configuración, valide tanto las actualizaciones periódicas de ubicación como eventos críticos como SOS o alertas de geocerca.

## Flujo de configuración típico

1. Acceda al método o software de configuración oficial de Supermate proporcionado por el fabricante.
2. Busque los ajustes de servidor o centro de rastreo en la interfaz de configuración del dispositivo.
3. Ingrese el servidor de Plaspy como el dominio d.plaspy.com o la dirección IP 54.85.159.138.
4. Configure el puerto del servidor en 8888.
5. Elija UDP o TCP como transporte si el dispositivo requiere una selección explícita.
6. Configure el APN y otros parámetros de la SIM si el D11 usa datos GSM para enviar mensajes, usando los valores de su operador.
7. Aplique o guarde la configuración y reinicie el dispositivo si la herramienta o el firmware lo requieren.
8. Valide que el dispositivo reporte a Plaspy comprobando la visibilidad y las actualizaciones en vivo en su cuenta Plaspy.

## Ejemplos de comandos de configuración

El conjunto exacto de comandos y la sintaxis para el Supermate D11 dependen de la herramienta del fabricante o de la versión de firmware. Dado que Supermate publica herramientas y formatos de comandos por separado, el método puede variar; consulte la guía oficial de Supermate para los comandos precisos o las cadenas SMS usadas para establecer servidor, puerto, transporte y valores de APN. Si dispone de la lista de comandos del fabricante, aplique los mismos ajustes de servidor indicados arriba: d.plaspy.com o 54.85.159.138 y puerto 8888 con UDP o TCP.

## Notas de configuración

- Las diferencias de firmware pueden cambiar las opciones disponibles y el formato de comandos; siempre revise las notas de firmware del Supermate D11.
- Elija UDP o TCP según la capacidad del dispositivo y la fiabilidad de la red; Plaspy acepta ambos, pero el comportamiento puede variar según las condiciones de la red.
- Si el dispositivo utiliza SMS o comandos basados en SMS para la configuración, siga las instrucciones de Supermate y confirme que los valores de servidor y puerto estén correctos.
- Pruebe la configuración en un entorno controlado antes de un despliegue completo para confirmar la cadencia de reporte y el comportamiento de eventos.
- Mantenga un registro de los ajustes aplicados e identificadores del dispositivo para poder diagnosticar problemas de conectividad con Plaspy o con el proveedor del equipo.

## Por qué usar Plaspy con esta configuración

Usar el Supermate D11 con Plaspy ofrece una forma directa de integrar la ubicación de activos y el reporte de eventos en una plataforma unificada. Configurar el rastreador para que reporte al endpoint compartido de Plaspy facilita la incorporación de dispositivos y simplifica la visibilidad de flotas o activos cuando hay hardware mixto.

Para más información sobre Plaspy visite https://www.plaspy.com y confirme detalles específicos del dispositivo y posibles actualizaciones del fabricante en el sitio de Supermate http://www.gps-summit.com/. Las especificaciones del fabricante, los métodos de configuración y el comportamiento del dispositivo pueden cambiar con el tiempo, por lo que debe verificar la información más reciente en los recursos oficiales de Supermate.
