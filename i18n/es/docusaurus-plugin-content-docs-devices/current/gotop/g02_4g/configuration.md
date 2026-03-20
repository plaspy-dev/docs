---
slug: /gotop/g02_4g/configuration
id: g02_4g-configuration
sidebar_label: Configuration
title: GOTOP - G02-4G Configuration
sidebar_class_name: menu_item_tracker
description: Guía práctica para configurar el GOTOP G02-4G y conectarlo a Plaspy con ajustes de servidor y pasos necesarios
keywords:
  - configuración GOTOP G02-4G
  - instalación GOTOP G02-4G
  - GOTOP G02-4G Plaspy
  - configuración rastreador GOTOP
  - configuración rastreador Plaspy
  - configuración rastreador GPS
  - configuración seguimiento vehicular
  - rastreador gestión de flotas
  - configuración servidor GPS
  - guía integración rastreador
---

# GOTOP - G02-4G Configuración

Esta página describe el contexto público de configuración para usar el rastreador GOTOP G02-4G con Plaspy. Resume los ajustes de servidor prácticos y los pasos típicos necesarios para preparar el equipo y que envíe ubicación y eventos al sistema Plaspy. El G02-4G es compatible con Plaspy desde el primer momento y admite conectividad 4G LTE con opciones de respaldo y reporte por SMS como parte de la entrega de posiciones y alarmas.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el dispositivo envía datos al endpoint de ingestión. No obstante, los pasos de configuración en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el método de instalación y las herramientas que utilice el instalador. Tenga siempre en cuenta la versión de firmware y el conjunto de herramientas del fabricante al aplicar las indicaciones descritas aquí.

## Resumen de la configuración

A continuación encontrará una explicación concisa del objetivo de configurar un G02-4G para Plaspy, seguida de las tareas prácticas que realizará durante la puesta en marcha.

Configurar el G02-4G para Plaspy prepara el rastreador para enviar actualizaciones de posición y notificaciones de eventos al endpoint de ingestión de Plaspy, de modo que el dispositivo sea visible y gestionable desde los paneles y reportes de Plaspy.

- Apuntar el dispositivo al endpoint de ingestión de Plaspy para que la telemetría llegue a la plataforma.
- Seleccionar el tipo de transporte (UDP o TCP) si la herramienta de configuración del equipo lo requiere.
- Establecer el puerto compartido de Plaspy para que el rastreador y la plataforma coincidan.
- Validar la conectividad y el correcto envío mediante comprobaciones de red y verificación en la plataforma.
- Confirmar el reporte de eventos y alarmas como ACC, geocerca, vibración, movimiento y corte de alimentación para garantizar que las alertas aparezcan en Plaspy.

## Ajustes del servidor Plaspy

Use los siguientes ajustes públicos del servidor Plaspy al configurar el G02-4G. Estos parámetros son compartidos entre los dispositivos compatibles y son necesarios para que el rastreador entregue telemetría a Plaspy.

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support: UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol when data arrives

Tenga en cuenta que Plaspy utiliza el mismo puerto para todos los dispositivos y detectará automáticamente el protocolo del rastreador en función de los datos entrantes.

## Requisitos previos a la configuración

Prepare los siguientes elementos y verificaciones antes de comenzar a configurar el dispositivo para Plaspy.

- Un dispositivo G02-4G encendido y funcional con acceso al método o software de configuración del fabricante.
- Una tarjeta SIM activa y cobertura de la red móvil para 4G LTE con respaldo a 3G/2G según sea necesario.
- Acceso al IMEI o identificador del dispositivo que puede requerirse para registrar o reconocer la unidad en su flota.
- Herramientas básicas de instalación y una conexión de alimentación segura del vehículo para asegurar que el rastreador esté energizado en su entorno operativo previsto.
- Acceso a la documentación de firmware y del proveedor para el G02-4G para confirmar las interfaces y comandos de configuración soportados.
- Una cuenta en Plaspy o acceso administrativo a la plataforma para validar que el dispositivo está reportando correctamente.

## Cómo se conecta este rastreador a Plaspy

Cuando se configura para Plaspy, el G02-4G envía su ubicación y datos de eventos al endpoint y puerto de ingestión compartidos de Plaspy para que los operadores puedan ver posiciones en tiempo real y alarmas en la plataforma.

- El G02-4G reporta actualizaciones de posición y telemetría mediante su conexión celular a d.plaspy.com (o 54.85.159.138) usando el puerto 8888.
- El dispositivo puede usar transporte UDP o TCP en el puerto 8888, según la configuración aplicada.
- El reporte por SMS está disponible como mecanismo de respaldo o redundancia cuando está soportado y configurado.
- Los datos de eventos como estado de ignición ACC, disparos de geocerca, alarmas por vibración y movimiento, bajo voltaje y corte de alimentación principal se envían a Plaspy para alertas e historial.
- Plaspy recibe e interpreta el protocolo de forma automática, por lo que la plataforma puede comenzar a procesar los datos una vez que el dispositivo está apuntando al servidor y puerto correspondientes.

## Flujo de trabajo típico de configuración

Siga estos pasos públicos y prácticos para configurar el G02-4G y que reporte a Plaspy.

1. Acceda al método oficial de configuración del fabricante o al software que GOTOP soporte para el G02-4G.
2. Ingrese la dirección del servidor Plaspy como dominio d.plaspy.com o como IP 54.85.159.138 en el campo server/host.
3. Establezca el puerto del servidor en 8888 (Plaspy usa el mismo puerto para todos los dispositivos compatibles).
4. Elija el protocolo de transporte UDP o TCP si el equipo requiere una selección explícita.
5. Aplique o guarde la configuración en la herramienta de gestión del dispositivo o mediante la interfaz de comandos del equipo.
6. Reinicie o corte la alimentación del dispositivo si la herramienta del fabricante o el firmware requieren un reinicio para activar los nuevos ajustes.
7. Valide que el dispositivo reporta a Plaspy confirmando la visibilidad del equipo y la llegada de telemetría en su cuenta de Plaspy o mediante las herramientas de verificación de la plataforma.

## Ejemplos de comandos de configuración

El G02-4G puede configurarse con herramientas del proveedor, comandos SMS o una aplicación de configuración suministrada por GOTOP. Los comandos exactos y la sintaxis varían según el firmware y la herramienta. Dado que los conjuntos de comandos del fabricante difieren entre revisiones de firmware y utilidades del proveedor, consulte la guía de configuración oficial de GOTOP para ejemplos precisos de comandos.

Si dispone de comandos SMS o de consola específicos publicados por el fabricante, aplíquelos respetando el orden y la sintaxis indicados por GOTOP y reemplace cualquier marcador de posición como {{apn}} por los valores APN de su operador móvil. Mantenga la documentación del fabricante a mano para confirmar la redacción exacta de los comandos según el firmware del dispositivo.

## Notas de configuración

- Las diferencias de firmware pueden modificar las opciones de configuración disponibles y la sintaxis de los comandos. Verifique la versión de firmware del equipo antes de realizar cambios.
- Elija UDP o TCP según la preferencia del instalador y las condiciones de la red; Plaspy acepta ambos transportes en el puerto 8888 y detecta el protocolo automáticamente.
- Use la configuración por SMS solo si está soportada y es necesaria para un ajuste remoto u offline; el SMS puede ser un respaldo cuando no hay redes de datos disponibles.
- Mantenga un registro de los identificadores del dispositivo y de la configuración aplicada para auditar y solucionar problemas de reporte en Plaspy.
- Confirme la colocación de las antenas y el cableado del vehículo siguiendo la guía de instalación del fabricante para asegurar una recepción celular y GNSS fiable.

## Por qué usar Plaspy con esta configuración

Integrar el GOTOP G02-4G con Plaspy ofrece visibilidad en tiempo real sencilla tanto para flotas como para activos vehiculares individuales. La robustez del dispositivo, su amplio rango de voltaje de entrada y el soporte 4G con respaldo a 3G/2G lo convierten en una opción práctica para despliegues con vehículos variados donde la telemetría y el reporte de eventos (ACC, geocerca, vibración, pérdida de alimentación) son críticos.

Para obtener más información sobre Plaspy y cómo gestiona los datos de los dispositivos, visite https://www.plaspy.com. Para los métodos de configuración más actuales específicos del equipo, detalles de firmware y comandos del fabricante, verifique la documentación más reciente en el sitio de GOTOP https://www.gotop.cc/. Las especificaciones del fabricante, los pasos de instalación y el comportamiento del firmware pueden cambiar con el tiempo, por lo que confirme las instrucciones vigentes con el proveedor antes de finalizar un despliegue.
