---
slug: /cantrack/gf10/configuration
id: gf10-configuration
sidebar_label: Configuration
title: CanTrack - GF10 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el CanTrack GF10 con Plaspy usando ajustes de servidor compartido y pasos prácticos
keywords:
  - Configuración CanTrack GF10
  - Preparación GF10 Plaspy
  - Configuración servidor GF10 CanTrack
  - Configuración rastreador GPS GF10
  - Integración rastreador Plaspy
  - Configuración plataforma rastreadores
  - Guía configuración rastreador GPS
  - Instalación CanTrack tracker
  - Configuración seguimiento vehicular
  - Configuración software GF10
---

# CanTrack - Configuración GF10

Esta página describe el contexto de configuración pública para usar el rastreador CanTrack GF10 con Plaspy. Aquí encontrará los ajustes de servidor que Plaspy requiere y los pasos prácticos para preparar un GF10 para que reporte ubicación y eventos a la plataforma. Use esta guía para verificar que tiene los valores correctos y el flujo de trabajo antes de realizar cambios en el dispositivo.

Plaspy utiliza ajustes de servidor compartidos para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el dispositivo envía datos al servicio. Los pasos de configuración en el lado del fabricante para el GF10 pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas de configuración que el proveedor provea; por eso siempre compare estos ajustes públicos con la documentación del fabricante y la interfaz de configuración disponible en su equipo.

## Resumen de la configuración

Este proceso prepara el GF10 para enviar sus posiciones reportadas, alertas y eventos de estado a Plaspy, de modo que el dispositivo aparezca y se actualice correctamente en la plataforma. El objetivo es apuntar el equipo al endpoint compartido de Plaspy y verificar que los mensajes lleguen y sean interpretados por la detección automática de protocolos de Plaspy.

- Configure el GF10 para que reporte al endpoint y puerto del servidor de Plaspy.
- Seleccione UDP o TCP si la configuración del dispositivo solicita un tipo de transporte.
- Aplique y guarde los ajustes del dispositivo mediante la herramienta del fabricante, comandos SMS o la app móvil.
- Reinicie o haga un ciclo de energía del GF10 si es necesario para activar los nuevos ajustes.
- Verifique que el dispositivo reporte ubicación, eventos de geocerca y alertas de batería en Plaspy.

## Ajustes del servidor Plaspy

- Server domain: d.plaspy.com
- Server IP: 54.85.159.138
- Port: 8888
- Transport: UDP or TCP can be used on port 8888 depending on device options
- Plaspy behavior: the platform automatically detects the tracker protocol so the same port is used for all devices

Estos son los valores públicos de Plaspy que deben ingresarse en el GF10 donde el dispositivo acepte la configuración del servidor.

## Requisitos habituales antes de comenzar

- Acceso físico al GF10 o la posibilidad de enviar la configuración mediante la app del fabricante o comandos SMS.
- El dispositivo con batería cargada y la tarjeta SIM necesaria instalada con datos y capacidad de SMS si el equipo usa GSM para reportar.
- Acceso al método de configuración del CanTrack GF10 que proporcione el proveedor, como una app, conjunto de comandos SMS o herramienta de escritorio.
- Tener a la mano el IMEI o identificador único del dispositivo para añadirlo a su cuenta Plaspy o para tareas de diagnóstico.
- Una cuenta en Plaspy o contacto con su administrador de Plaspy para confirmar la activación y visibilidad del dispositivo en la plataforma.
- Herramientas básicas de verificación, como la posibilidad de monitorear paquetes entrantes o revisar un registro de dispositivo si está disponible.

## Cómo se conecta este rastreador a Plaspy

Una vez configurado, el GF10 envía actualizaciones de posición y eventos del dispositivo al endpoint y puerto compartidos de Plaspy para que la plataforma procese y muestre la información. La detección automática de protocolos de Plaspy inspecciona los mensajes entrantes y los asigna al manejador de protocolo correcto.

- El GF10 envía reportes periódicos de posición a d.plaspy.com o 54.85.159.138 en el puerto 8888.
- El transporte puede ser UDP o TCP según la opción de configuración del dispositivo.
- Alertas como entrada/salida de geocerca, batería baja y eventos de manipulación o vibración se envían al mismo endpoint de Plaspy.
- Plaspy recibe los mensajes y detecta automáticamente el protocolo para parsear los datos.
- Una vez parseados, el dispositivo queda visible en Plaspy para monitoreo, reproducción del historial y generación de alertas.

## Flujo de configuración típico

1. Acceda al método oficial de configuración del CanTrack GF10 proporcionado por el fabricante (app, comandos SMS o herramienta del proveedor).
2. Localice la sección de ajustes de servidor o plataforma en la interfaz de configuración del dispositivo.
3. Ingrese el dominio del servidor de Plaspy d.plaspy.com o la IP 54.85.159.138 como servidor destino.
4. Ajuste el puerto a 8888 para que el dispositivo envíe los datos a Plaspy.
5. Si el dispositivo requiere seleccionar el transporte, elija UDP o TCP según su entorno o preferencia.
6. Aplique o guarde la configuración y siga cualquier paso de confirmación en pantalla o por SMS.
7. Reinicie o haga un ciclo de energía del GF10 si el fabricante lo requiere para activar los nuevos ajustes.
8. Valide que el dispositivo reporte a Plaspy y que los mensajes de ubicación y eventos aparezcan en la plataforma.

## Ejemplos de comandos de configuración

El CanTrack GF10 admite configuración mediante herramientas del fabricante, aplicaciones móviles y comandos SMS según el firmware y las variantes regionales. Los conjuntos de comandos exactos son específicos del proveedor y pueden cambiar con el firmware, así que consulte la documentación oficial de CanTrack para la sintaxis precisa de SMS y el flujo en la app.

Si su GF10 admite configuración por SMS generalmente:
- Use la contraseña administrativa SMS del dispositivo y el formato de comando documentado para establecer el dominio o la IP del servidor.
- Envíe un comando de confirmación o de consulta para verificar los ajustes actuales del servidor.

Debido a que los formatos de comando y los placeholders varían según el firmware, consulte el manual del CanTrack GF10 para ejemplos concretos de cadenas SMS y los valores requeridos como APN.

## Notas de configuración

- Las diferencias de firmware y las variantes regionales de hardware pueden cambiar los pasos exactos de configuración o las opciones disponibles en el GF10.
- Elija UDP o TCP según la fiabilidad de la red y la implementación de transporte específica del dispositivo; Plaspy acepta ambos en el puerto 8888.
- Plaspy usa el mismo puerto para los dispositivos compatibles y se apoya en la detección automática de protocolos, por lo que use los ajustes compartidos anteriores a menos que CanTrack le indique otra cosa.
- Mantenga la documentación del fabricante a mano durante la configuración, porque los formatos de comandos SMS, contraseñas administrativas y flujos en la app pueden variar según la versión de firmware.
- Si ingresa tanto un dominio como una IP en los ajustes del dispositivo, el dominio d.plaspy.com es el valor recomendado; use la IP 54.85.159.138 si no dispone de resolución DNS.

## Por qué usar Plaspy con esta configuración

Configurar el CanTrack GF10 para que reporte a Plaspy ofrece una vía directa para obtener visibilidad en tiempo real y monitoreo centralizado. Organizaciones y usuarios que necesitan rastreo discreto y portátil con alertas como geocercas y batería baja se benefician de enrutar los reportes del GF10 a Plaspy, donde el seguimiento, el historial y las notificaciones están consolidados.

Para saber más sobre Plaspy y cómo apoya la integración de dispositivos, visite https://www.plaspy.com. Para obtener las instrucciones específicas más recientes, notas de firmware y referencias oficiales de comandos para el CanTrack GF10, verifique la información en el sitio del fabricante https://www.cantrackgps.com/ ya que la documentación del proveedor puede cambiar con el tiempo.
