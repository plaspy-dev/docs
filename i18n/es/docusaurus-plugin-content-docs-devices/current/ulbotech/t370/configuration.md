---
slug: /ulbotech/t370/configuration
id: t370-configuration
sidebar_label: Configuration
title: Ulbotech - T370 Configuration
sidebar_class_name: menu_item_tracker
description: Guía para configurar el tracker OBD Ulbotech T370 con Plaspy usando ajustes de servidor compartidos y pasos prácticos
keywords:
  - Configuración Ulbotech T370
  - Instalación Ulbotech T370
  - Configuración T370 Plaspy
  - Configuración de tracker Plaspy
  - Configuración tracker GPS Ulbotech
  - Configuración tracker OBD T370
  - Seguimiento de vehículo T370
  - GPS para flotas T370
  - Ajustes de servidor T370
  - Configuración de dispositivo Plaspy
---

# Ulbotech - Configuración del T370

Esta página describe el contexto público de configuración para usar el tracker OBD GPS Ulbotech T370 con Plaspy. Reúne los ajustes prácticos a nivel de plataforma y la guía de flujo de trabajo necesarios para apuntar un dispositivo T370 compatible a Plaspy, de modo que el tracker entregue posiciones GNSS, eventos de movimiento y telemetría OBD a los paneles y alertas de Plaspy.

Plaspy utiliza ajustes de servidor compartidos para los dispositivos soportados y detecta automáticamente el protocolo del tracker, pero los pasos exactos del lado del fabricante varían según la versión de firmware, la revisión de hardware y la herramienta de configuración del proveedor que utilice. Use esta guía para comprender los valores de servidor requeridos y un flujo de trabajo seguro, y consulte la documentación o las herramientas de Ulbotech para comandos y menús específicos del dispositivo.

## Resumen de la configuración

El objetivo del proceso de configuración es preparar el T370 para comunicarse de forma fiable con Plaspy, validar la conectividad y habilitar la visibilidad del dispositivo y el reporte de telemetría en la plataforma. Esto incluye establecer el endpoint del servidor, el transporte y cualquier detalle de operador/APN que el equipo necesite.

- Configure el equipo para que reporte al endpoint del servidor Plaspy y al puerto compartido.
- Seleccione el tipo de transporte (UDP o TCP) si la interfaz del dispositivo lo requiere.
- Asegure la conectividad celular y que la SIM esté lista para que el módem Telit pueda alcanzar Plaspy.
- Guarde y aplique los ajustes y reinicie el tracker cuando la herramienta del fabricante lo indique.
- Valide que el dispositivo aparezca en Plaspy y que se reciban ubicación y telemetría OBD.

## Ajustes del servidor Plaspy

Utilice los siguientes ajustes públicos de servidor Plaspy al configurar el T370 para la integración con Plaspy:

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte compatible UDP o TCP
- Plaspy detecta automáticamente el protocolo del tracker y todos los dispositivos en Plaspy usan el mismo puerto

Estos valores son el endpoint y el puerto estándar a los que el equipo debe reportar para que Plaspy pueda aceptar la telemetría y determinar automáticamente el protocolo correcto.

## Requisitos típicos antes de la configuración

- Confirme que el T370 está alimentado y conectado en el puerto OBD del vehículo o que recibe alimentación vehicular de otra forma.
- Tenga instalada una micro SIM válida y activa en un operador compatible con la variante del módem Telit del dispositivo.
- Acceso al método oficial de configuración de Ulbotech, como el software del proveedor, la interfaz micro USB o los comandos SMS documentados.
- Anote la versión de firmware y la revisión de hardware para poder seguir instrucciones de configuración que coincidan.
- Asegúrese de tener una cuenta en Plaspy y sepa cómo identificar el dispositivo cuando empiece a reportar en la plataforma.
- Opcional: disponga del vehículo para una prueba corta de conducción que confirme actualizaciones en tiempo real de ubicación y telemetría OBD.

## Cómo se conecta este tracker a Plaspy

Cuando el T370 se configura con los datos del servidor Plaspy, envía ubicación, movimiento y datos del vehículo a través del transporte configurado al endpoint de Plaspy para su procesamiento. Plaspy ingiere posiciones GNSS, eventos de acelerómetro y los parámetros OBD disponibles para que el vehículo aparezca en paneles, disparadores e informes.

- El tracker reporta posiciones GNSS y marcas de tiempo a d.plaspy.com o 54.85.159.138 en el puerto 8888.
- Los datos se envían mediante el transporte seleccionado, UDP o TCP, según la configuración del dispositivo.
- Plaspy detecta automáticamente el protocolo entrante del tracker, por lo que solo necesita apuntar el dispositivo al servidor y puerto compartidos.
- Los mensajes de telemetría y eventos se vuelven visibles en Plaspy para monitoreo en tiempo real y reproducción histórica.
- Los parámetros provenientes del OBD y los eventos del acelerómetro se incorporan a los flujos de trabajo de Plaspy cuando hay soporte.

## Flujo de trabajo común de configuración

1. Acceda al método u software oficial de configuración de Ulbotech (interfaz micro USB, herramienta del proveedor o SMS/API del fabricante según documentación).
2. Ingrese la dirección del servidor d.plaspy.com o, de manera opcional, la IP del servidor 54.85.159.138 en el campo de servidor del dispositivo.
3. Configure el dispositivo para usar el puerto 8888 (Plaspy usa el mismo puerto para todos los dispositivos soportados).
4. Seleccione UDP o TCP como transporte si el equipo requiere elegir uno.
5. Guarde o aplique la configuración usando la herramienta del fabricante y siga las indicaciones para confirmar los ajustes.
6. Reinicie el dispositivo si el procedimiento de configuración o el firmware así lo requieren.
7. Valide que el dispositivo reporta a Plaspy revisando el panel de Plaspy para una conexión inicial y la llegada de ubicaciones o telemetría.

## Ejemplos de comandos de configuración

Los comandos exactos de configuración o los menús varían según el firmware de Ulbotech, la herramienta del proveedor y el método de instalación. Algunos instaladores usan una utilidad de configuración por USB, otros usan SMS o un portal web provisto por el vendedor. Dado que los comandos específicos del modelo los controla el fabricante y el firmware, consulte el manual de usuario de Ulbotech para la sintaxis precisa y ejemplos de comandos.

Al usar el software del proveedor o un menú de configuración, los valores clave que deberá ingresar son el dominio del servidor Plaspy d.plaspy.com (o la IP 54.85.159.138), el puerto 8888 y la selección de transporte UDP o TCP. El dispositivo debe guardarse y reiniciarse según las instrucciones de Ulbotech para comenzar a reportar a Plaspy.

## Notas de configuración

- Las diferencias de firmware pueden cambiar la disposición de menús y las opciones disponibles; ajuste los pasos de configuración a la versión de firmware del dispositivo.
- Elija TCP si necesita entrega orientada a conexión para ciertos tipos de mensajes, o UDP si el firmware lo recomienda por menor sobrecarga; Plaspy soporta ambos.
- El T370 admite configuración por micro USB y puede soportar SMS o herramientas del proveedor para configuración remota según el firmware.
- El dispositivo suele detectar automáticamente el APN y la zona horaria, pero verifique el APN del operador si falla la conectividad.
- Confirme siempre los ajustes después de un reinicio y realice una prueba corta para confirmar que las posiciones GNSS y la telemetría OBD fluyen hacia Plaspy.

## Por qué usar Plaspy con esta configuración

Conectar el Ulbotech T370 a Plaspy ofrece a los operadores de flota un camino rápido hacia la visibilidad en tiempo real del vehículo, el monitoreo del comportamiento del conductor y la telemetría OBD sin instalaciones complejas. La forma OBD del T370 y sus sensores integrados lo hacen adecuado para flotas, empresas de alquiler y programas de telemática que necesitan una implementación rápida y datos consolidados en una sola plataforma.

Para obtener más información sobre Plaspy y cómo puede ingerir la telemetría del T370 visite https://www.plaspy.com. Verifique siempre los detalles más recientes de configuración específica del dispositivo, comandos y comportamiento de firmware con Ulbotech en http://www.ulbotech.com/ ya que las especificaciones del fabricante y los métodos de configuración pueden cambiar con el tiempo.
