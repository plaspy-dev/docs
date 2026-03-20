---
slug: /flextrack/lommy_pro/configuration
id: lommy_pro-configuration
sidebar_label: Configuration
title: Flextrack - Lommy Pro Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración para Flextrack Lommy Pro y ajustes de servidor Plaspy para rastreo confiable de flotas y activos
keywords:
  - configuración Flextrack Lommy Pro
  - configuración Lommy Pro
  - Lommy Pro Plaspy
  - configuración rastreador GPS
  - configuración rastreo de vehículos
  - configuración seguimiento de flotas
  - ajustes servidor Plaspy
  - configuración servidor Lommy Pro
  - configuración plataforma GPS
  - detección protocolo rastreador
---

# Flextrack - Lommy Pro: Configuración

Esta página documenta el contexto público de configuración necesario para integrar el Flextrack Lommy Pro con Plaspy y habilitar rastreo y telemetría en tiempo real. Se enfoca en los ajustes compartidos del servidor Plaspy y en los pasos prácticos que deberá aplicar del lado del fabricante para que el Lommy Pro reporte posición y telemetría a los paneles y API de Plaspy.

Plaspy usa ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos exactos del fabricante para el Lommy Pro pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas de configuración que proporcione Flextrack o sus distribuidores. Use esta guía junto con la documentación oficial de Flextrack para comandos y notas específicas del dispositivo.

## Resumen de la configuración

Este proceso prepara una unidad Lommy Pro para que envíe posiciones GNSS, telemetría y datos de eventos al punto de ingestión de Plaspy, de modo que los dispositivos aparezcan en su espacio de trabajo Plaspy y generen rastreo en vivo, alertas e informes.

- Configure el Lommy Pro para que reporte a Plaspy utilizando el endpoint y el puerto compartidos del servidor.
- Seleccione el método de transporte requerido por el equipo (UDP o TCP) y confirme que el ajuste quedó guardado en el dispositivo.
- Valide la conectividad celular y la alimentación para que el dispositivo pueda establecer sesiones y transmitir telemetría.
- Confirme que el dispositivo aparece en Plaspy y que las actualizaciones de ubicación y la telemetría clave son visibles en la plataforma.
- Pruebe eventos básicos como reporte de movimiento, estado de ignición o alertas de temperatura relevantes para su instalación.

## Ajustes del servidor Plaspy

Al configurar Lommy Pro para su uso con Plaspy, aplique exactamente los siguientes ajustes públicos de servidor:

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte: UDP o TCP (el dispositivo puede configurarse usando cualquiera de los dos en el puerto 8888)
- Plaspy detecta automáticamente el protocolo del rastreador cuando llegan los datos

Nota: Todos los dispositivos en Plaspy usan el mismo puerto, por lo que debe usar el puerto 8888 para Lommy Pro al apuntar el dispositivo hacia Plaspy.

## Requisitos habituales antes de la configuración

- Confirme que el Lommy Pro tiene batería cargada o una fuente externa estable y que esté encendido.
- Asegúrese de tener instalada una SIM celular válida y un plan de datos activo compatible con el equipo si va a usar telemetría celular.
- Tenga acceso a la herramienta oficial de configuración de Flextrack o al método proporcionado por el fabricante (software, portal web, comandos SMS o interfaz USB/serial).
- Conozca el IMEI del dispositivo o su identificador único para poder localizar la unidad en Plaspy una vez que comience a reportar.
- Verifique que dispone de las credenciales o permisos necesarios para configuración remota y gestión de firmware.
- Si la instalación es con cableado, compruebe el cableado de ignición y alimentación antes de probar reportes en vivo.

## Cómo se conecta este rastreador a Plaspy

El Lommy Pro envía posiciones GNSS y telemetría a Plaspy usando protocolos de transporte estándar y el endpoint y puerto compartidos de Plaspy. Plaspy ingiere y normaliza esos mensajes para que vehículos y activos sean visibles en tiempo real y en los reportes históricos.

- El dispositivo se configura para reportar al endpoint compartido de Plaspy d.plaspy.com (o a la IP del servidor 54.85.159.138) en el puerto 8888.
- Elija UDP o TCP en la configuración del Lommy Pro si el equipo requiere una selección explícita de transporte.
- Plaspy detecta automáticamente qué protocolo de rastreador está usando el dispositivo, por lo que no es necesario seleccionar el protocolo dentro de Plaspy.
- Una vez que el dispositivo envía datos, Plaspy procesará las actualizaciones de posición, la telemetría y los mensajes de eventos para mapa en vivo y alertas.
- La validación en Plaspy confirma la salud operativa y la llegada de telemetría para monitoreo y reglas automáticas.

## Flujo de trabajo típico de configuración

1. Acceda al método o software de configuración oficial de Flextrack recomendado para Lommy Pro (herramienta web del fabricante, utilidad de escritorio, comandos SMS o interfaz serial).
2. En el área de ajustes de servidor o APN, ingrese la dirección del servidor Plaspy usando d.plaspy.com o la IP 54.85.159.138.
3. Establezca el puerto del servidor en 8888. Plaspy usa el mismo puerto para todos los dispositivos compatibles.
4. Si el Lommy Pro requiere selección de transporte, elija UDP o TCP y guarde ese ajuste.
5. Aplique o guarde la configuración en el dispositivo mediante la herramienta o el conjunto de comandos del fabricante.
6. Si el dispositivo lo requiere o después de cambiar ajustes clave, reinicie el Lommy Pro para que la nueva configuración entre en vigor.
7. Valide que el Lommy Pro esté reportando a Plaspy comprobando la lista de dispositivos y el mapa en vivo para actualizaciones de posición y telemetría.

## Ejemplos de comandos de configuración

El Lommy Pro puede configurarse por múltiples métodos que proporciona el fabricante y los comandos exactos o los pasos en la GUI varían según el firmware y las herramientas. Dado que Flextrack ofrece varias vías de configuración (utilidades de escritorio, herramientas web, SMS y serial), esta guía no prescribe un único conjunto de comandos. Consulte la documentación de Flextrack o su herramienta de instalación para la sintaxis exacta para apuntar el dispositivo a:

- Servidor d.plaspy.com o 54.85.159.138
- Puerto 8888
- Transporte UDP o TCP

Si usa configuración vía SMS o una interfaz de línea de comandos proporcionada por Flextrack, siga los ejemplos del fabricante para escribir las entradas de servidor, puerto y transporte. Mantenga los valores de APN o credenciales tal como los suministre su operador de SIM y las herramientas de Flextrack.

## Notas de configuración

- Las diferencias de firmware pueden cambiar las opciones de configuración disponibles y la ubicación de los ajustes del servidor; siempre revise las notas de la versión del firmware de Lommy Pro.
- Elija UDP o TCP según las necesidades de su instalación; ambos son compatibles con Lommy Pro y Plaspy aceptará datos en el puerto 8888 independientemente del transporte.
- Dado que Plaspy detecta automáticamente el protocolo del rastreador, no necesita cambiar la configuración de protocolo en la plataforma cuando el dispositivo comience a enviar datos.
- Las prácticas de instalación varían entre instalaciones cableadas en vehículos y despliegues con respaldo de batería; verifique los intervalos de sueño y reporte en las herramientas del fabricante para optimizar la batería.
- Mantenga un registro de identificadores del equipo, como el IMEI, al registrar y validar las unidades en Plaspy.

## Por qué usar Plaspy con esta configuración

Usar Flextrack Lommy Pro con Plaspy proporciona ubicación en tiempo real y telemetría confiable para gestores de flotas y propietarios de activos. Al apuntar el Lommy Pro al endpoint compartido de Plaspy y usar el puerto 8888, los equipos obtienen visibilidad continua, reporte de eventos y telemetría lista para integrarse sin configuraciones de servidor por dispositivo complejas.

Para saber más sobre cómo Plaspy puede ingerir y presentar datos de Lommy Pro, visite https://www.plaspy.com. Para comandos de configuración específicos del dispositivo, actualizaciones de firmware y la guía de instalación más reciente para Lommy Pro, verifique los detalles con el fabricante en https://flextrack.dk. Las especificaciones del fabricante y los métodos de instalación pueden cambiar con el tiempo, así que confirme las instrucciones actuales en el sitio oficial de Flextrack.
