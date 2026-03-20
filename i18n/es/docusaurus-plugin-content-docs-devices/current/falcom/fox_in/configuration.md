---
slug: /falcom/fox_in/configuration
id: fox_in-configuration
sidebar_label: Configuration
title: Falcom - FOX-IN Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el Falcom FOX-IN y reportar a Plaspy con ajustes de servidor compartidos para seguimiento y monitoreo
keywords:
  - Configuración Falcom FOX-IN
  - Instalación Falcom FOX-IN
  - Configuración FOX-IN Plaspy
  - Guía de configuración de trackers Falcom
  - Configuración de servidor FOX-IN
  - Configuración GPS Falcom
  - Configuración de software de seguimiento FOX-IN
  - configuración de rastreo de vehículos Falcom
  - Configuración plataforma GPS FOX-IN
  - Integración de tracker con Plaspy
---

# Falcom - Configuración FOX-IN

Esta página describe el contexto público de configuración para usar el tracker Falcom FOX-IN con Plaspy. Aquí encontrará los ajustes de servidor compartidos que debe ingresar en el dispositivo o en las herramientas oficiales de Falcom para que el FOX-IN envíe su ubicación y reportes de estado a la plataforma Plaspy.

Plaspy utiliza un único endpoint y puerto compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del tracker. Los pasos exactos en el lado del fabricante para configurar el FOX-IN pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y la herramienta de configuración empleada por el instalador, por lo que debe aplicar estos ajustes públicos de servidor y consultar la documentación de Falcom o a su instalador para pasos específicos del equipo.

## Resumen de configuración

Esta guía se centra en los pasos prácticos necesarios para preparar un dispositivo FOX-IN y que pueda comunicarse de forma confiable con Plaspy para monitoreo de flotas, alertas y registro histórico. El objetivo es que el dispositivo sea visible en Plaspy con reportes consistentes y validar la conectividad.

- Apunte el FOX-IN al endpoint del servidor Plaspy para que la telemetría se dirija a su cuenta Plaspy.
- Seleccione el protocolo de transporte adecuado (UDP o TCP) si el equipo requiere elegir.
- Configure el dispositivo para usar el puerto compartido de Plaspy para que la plataforma acepte los reportes.
- Guarde y aplique los ajustes usando el método oficial de Falcom o la herramienta del instalador.
- Verifique que el dispositivo reporte posición y estados en Plaspy después de un reinicio o reconexión.

## Ajustes del servidor de Plaspy

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support: UDP or TCP may be used depending on device requirements
- Plaspy automatically detects the tracker protocol so the same port is used for all supported devices

## Requisitos típicos antes de la configuración

- Acceso al software oficial de configuración de Falcom, a la interfaz web o a la lista de comandos SMS para el FOX-IN
- Un FOX-IN alimentado y operativo con firmware actualizado y adecuado para su despliegue
- Si el equipo se comunica por celular, una tarjeta SIM activa con datos o capacidad de SMS y un plan móvil válido
- Acceso físico o remoto al dispositivo para aplicar ajustes y reiniciarlo si es necesario
- Credenciales o permisos de instalación requeridos por las herramientas de Falcom o por el instalador
- Una cuenta de Plaspy o acceso administrativo para confirmar que el dispositivo aparece y reporta en la plataforma

## Cómo se conecta este tracker a Plaspy

El FOX-IN envía actualizaciones de ubicación, reportes de estado y alertas al endpoint de Plaspy para que los gestores de flota puedan monitorear vehículos y recibir notificaciones de eventos. Configure el dispositivo para apuntar a Plaspy usando el nombre de dominio o la IP y el puerto compartido para asegurar una entrega consistente.

- El dispositivo se configura para reportar al endpoint del servidor Plaspy d.plaspy.com o a la IP 54.85.159.138
- Los reportes se envían por el puerto 8888 que Plaspy utiliza para todos los dispositivos soportados
- Puede seleccionar UDP o TCP en el equipo cuando se requiera elegir el transporte
- Plaspy realiza detección automática del protocolo por lo que acepta protocolos compatibles en el puerto compartido
- Una vez conectado, los mensajes de posición y alerta son visibles en Plaspy para monitoreo y registro histórico

## Flujo de configuración típico

1. Acceda al método o software oficial de configuración de Falcom para el FOX-IN (herramienta del fabricante, interfaz web o utilidad aprobada por el instalador).
2. Ingrese el dominio del servidor Plaspy d.plaspy.com o alternativamente la IP del servidor 54.85.159.138 como endpoint destino.
3. Configure el puerto del dispositivo a 8888 para que coincida con los ajustes del servidor Plaspy.
4. Seleccione UDP o TCP si el FOX-IN requiere elegir el transporte; Plaspy soporta ambos.
5. Aplique o guarde la configuración usando la herramienta o el método de comandos de Falcom.
6. Reinicie el dispositivo si el procedimiento del fabricante lo exige para activar los nuevos ajustes.
7. Valide que el dispositivo reporta a Plaspy comprobando la recepción de datos en su cuenta o vista de la plataforma Plaspy.

## Ejemplos de comandos de configuración

La sintaxis exacta de comandos y la herramienta de configuración varían según el firmware de Falcom y el canal de configuración que utilice (software, interfaz web o SMS). Dado que Falcom ofrece múltiples métodos de configuración para el FOX-IN, siga la lista de comandos oficial de Falcom o la interfaz que tenga y use los ajustes de Plaspy antes indicados al ingresar la información del servidor.

Si utiliza comandos SMS de Falcom o una interfaz basada en texto, reemplace los marcadores de servidor y puerto por:
- Server domain or IP: d.plaspy.com or 54.85.159.138
- Port: 8888
- Transport: UDP or TCP as required by your device interface

Consulte la documentación de Falcom para la sintaxis exacta de SMS o la utilidad de configuración para el formato preciso de comandos.

## Notas de configuración

- Las diferencias de firmware pueden cambiar las opciones disponibles y la sintaxis de comandos; confirme siempre la versión de firmware del FOX-IN antes de aplicar ajustes.
- La elección de UDP frente a TCP puede depender de requisitos de confiabilidad y del comportamiento de la red local; Plaspy acepta cualquiera de los dos y detecta el protocolo automáticamente en el puerto 8888.
- El FOX-IN soporta el envío de mensajes vía TCP y SMS según la descripción del dispositivo; utilice el método compatible con su instalación y operador.
- Use el dominio d.plaspy.com cuando sea posible para que las actualizaciones DNS se gestionen de forma centralizada; la IP 54.85.159.138 se ofrece como endpoint alternativo.
- Mantenga un registro de los ajustes aplicados y de los comandos SMS enviados por si necesita revertir cambios o reconfigurar.

## Por qué usar Plaspy con esta configuración

Configurar el Falcom FOX-IN para reportar a Plaspy otorga a las organizaciones visibilidad consistente sobre vehículos y activos mediante una plataforma centralizada. Con las capacidades de reporte del FOX-IN y la detección automática de protocolos y puerto compartido de Plaspy, las flotas pueden simplificar la puesta en marcha y reducir la complejidad de configuración por dispositivo.

Para saber más sobre Plaspy y cómo gestiona las integraciones de dispositivos visite https://www.plaspy.com. Para métodos específicos por dispositivo, comportamiento de firmware y los últimos detalles de configuración del FOX-IN verifique la información en el sitio del fabricante https://www.falcom.de.
