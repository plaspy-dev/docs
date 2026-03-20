---
slug: /careu/ueco/configuration
id: ueco-configuration
sidebar_label: Configuration
title: CAREU - Ueco Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el tracker CAREU Ueco con Plaspy mediante ajustes de servidor compartidos y pasos prácticos
keywords:
  - configuración CAREU Ueco
  - instalación CAREU Ueco
  - configuración servidor CAREU Ueco
  - CAREU Ueco Plaspy
  - configuración tracker GPS Ueco
  - configuración tracker Plaspy
  - configuración plataforma de rastreo de vehículos
  - configuración tracker gestión de flotas
  - configuración remota Ueco
  - detección de protocolo tracker GPS
---

# CAREU - Ueco: Configuración

Esta página documenta el contexto público de configuración para usar el tracker CAREU Ueco con la plataforma Plaspy. Explica los ajustes de servidor compartidos que Plaspy requiere y describe pasos prácticos, independientes del fabricante, para preparar el Ueco y verificar su conexión en Plaspy. Use esta página como referencia de configuración junto con la documentación oficial del fabricante.

Plaspy utiliza ajustes de servidor compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del tracker cuando el equipo reporta datos a la plataforma. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor; confirme siempre el comportamiento del equipo con la documentación oficial de CAREU.

## Resumen de configuración

El objetivo de esta configuración es preparar el CAREU Ueco para comunicarse de forma estable con la plataforma Plaspy, de modo que el dispositivo aparezca y reporte correctamente en su cuenta Plaspy. Estos ajustes públicos son el puente práctico entre el dispositivo y Plaspy y deben aplicarse mediante el método de configuración oficial del Ueco.

- Configure el equipo para que reporte a Plaspy usando el endpoint de servidor compartido y el puerto indicados.
- Seleccione el transporte (UDP o TCP) según el método de configuración del dispositivo; Plaspy acepta ambos y detecta el protocolo automáticamente.
- Asegúrese de que los datos móviles y la configuración de la SIM sean válidos para que el Ueco pueda abrir una sesión de datos y enviar reportes.
- Aplique y guarde la configuración mediante la herramienta oficial de CAREU o mediante SMS/firmware según corresponda, y reinicie la unidad si fuera necesario.
- Valide que el tracker aparece como dispositivo activo en Plaspy y que está enviando mensajes de ubicación y eventos.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte soportado UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del tracker al recibir datos
- Plaspy usa el mismo puerto para todos los dispositivos compatibles

## Requisitos habituales antes de la configuración

- Confirme que el Ueco tiene una tarjeta SIM activa con datos habilitados y crédito o plan de datos suficiente para el reporte móvil.
- Asegúrese de que el equipo esté con alimentación y funcione correctamente según las comprobaciones del fabricante.
- Tenga acceso al método o software de configuración oficial de CAREU provisto por el vendedor para enviar los ajustes de servidor y APN.
- Conozca los valores de APN, usuario y contraseña requeridos por el proveedor celular (manténgalos como [apn], [apnu], [apnp] en herramientas que acepten marcadores).
- Verifique la versión de firmware y cualquier nota del proveedor que afecte la configuración remota o la selección de transporte.
- Disponga de un método para reiniciar o cortar y volver a aplicar la alimentación del tracker después de aplicar ajustes, si fuera necesario.

## Cómo se conecta este tracker a Plaspy

Cuando está configurado, el CAREU Ueco abre una conexión de datos hacia el endpoint de Plaspy y transmite periódicamente información de posición y eventos. Plaspy procesa la telemetría entrante y hace visible el dispositivo en la plataforma; los ajustes de servidor y transporte que siguen son los valores públicos que debe aplicar en el lado del equipo.

- El Ueco se apunta al endpoint compartido de Plaspy d.plaspy.com o a la IP 54.85.159.138 en el puerto 8888.
- El transporte del dispositivo puede configurarse en UDP o TCP en el puerto 8888 según la herramienta de configuración; Plaspy acepta ambos.
- Plaspy detecta automáticamente el protocolo del tracker a partir de la conexión entrante, por lo que solo necesita establecer el endpoint y el transporte correctos.
- Una vez que el tracker envíe mensajes válidos, Plaspy registrará telemetría y actualizaciones de estado para su monitoreo.
- Los datos típicos que se reportan incluyen actualizaciones de posición, eventos de geovalla, notificaciones de choque o conducción brusca y diagnósticos configurados según las capacidades del Ueco.

## Flujo de configuración habitual

1. Acceda al método oficial de configuración de CAREU o al software provisto por el vendedor, o utilice los comandos SMS documentados si su equipo y firmware lo soportan.
2. Ingrese la dirección del servidor Plaspy como d.plaspy.com o la IP 54.85.159.138 en el campo de servidor/host del dispositivo.
3. Configure el puerto en 8888 para la conexión con Plaspy.
4. Seleccione UDP o TCP si el equipo requiere elegir el transporte; Plaspy acepta ambos.
5. Aplique o guarde la configuración en la herramienta del fabricante y confirme que los ajustes se han escrito en el dispositivo.
6. Reinicie o corte y vuelva a aplicar la alimentación del Ueco si las instrucciones del fabricante indican que es necesario para que los ajustes de red tengan efecto.
7. Valide que el equipo reporte a Plaspy comprobando los mensajes entrantes y la telemetría en la plataforma una vez que la unidad esté en línea.

## Ejemplos de comandos de configuración

El CAREU Ueco puede configurarse usando herramientas del fabricante, conjuntos de comandos por SMS o software de aprovisionamiento según el firmware. La sintaxis exacta y el proceso varían por firmware y herramienta del proveedor, por lo que confirme los comandos correctos con la documentación de CAREU. Dado que los comandos y formatos específicos del modelo pueden cambiar, consulte el manual de configuración oficial de CAREU para ejemplos exactos de SMS o comandos por serie.

## Notas de configuración

- El firmware importa: distintas revisiones de firmware o hardware pueden cambiar la sintaxis de comandos, los transportes soportados o las capacidades de configuración remota.
- Elección de transporte: TCP y UDP están soportados en el puerto 8888; elija el transporte que coincida con su método de aprovisionamiento o las condiciones de la red local.
- Marcadores de APN: muchas herramientas usan marcadores como [apn], [apnu] y [apnp] para los ajustes celulares; mantenga estos marcadores cuando la interfaz de configuración lo requiera.
- FOTA y actualizaciones: el Ueco soporta FOTA vía FTP según la documentación del fabricante; asegúrese de que cualquier proceso FOTA no sobrescriba inadvertidamente los ajustes de servidor.
- Verifique la documentación del proveedor sobre las opciones de configuración por SMS frente a la configuración por software y cualquier función opcional, como voz bidireccional o sistemas GNSS adicionales.

## Por qué usar Plaspy con esta configuración

Usar el CAREU Ueco con Plaspy ofrece a las organizaciones un camino práctico hacia la visibilidad y el monitoreo centralizado de vehículos y activos. Con el endpoint compartido de Plaspy y la detección automática de protocolo, integrar dispositivos Ueco en Plaspy se reduce a aplicar correctamente los ajustes públicos de servidor y transporte para que los equipos transmitan telemetría y eventos de forma fiable.

To learn more about Plaspy and platform capabilities visit https://www.plaspy.com. For the most current device specific configuration methods, firmware behavior, and manufacturer guidance, verify details on the official CAREU site https://www.systech-iot.com/ as vendor documentation may change over time.
