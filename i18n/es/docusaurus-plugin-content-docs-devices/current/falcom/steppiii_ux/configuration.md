---
slug: /falcom/steppiii_ux/configuration
id: steppiii_ux-configuration
sidebar_label: Configuration
title: Falcom - STEPPIII-UX Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración para Falcom STEPPIII UX y ajustes de servidor Plaspy para la integración
keywords:
  - Configuración Falcom STEPPIII UX
  - Configuración de rastreador Falcom
  - Guía de compatibilidad Plaspy
  - Configuración de servidor STEPPIII UX
  - Integración de rastreador GPS Plaspy
  - Configuración de seguimiento de vehículos Falcom
  - Pasos de configuración Falcom
  - Configuración de plataforma de seguimiento
  - Configuración de rastreador para gestión de flotas
  - Configuración STEPPIII UX
---

# Falcom - Configuración de STEPPIII-UX

Esta página documenta la información pública de configuración para utilizar el rastreador Falcom STEPPIII-UX con la plataforma Plaspy. Aquí se describen los ajustes compartidos del servidor Plaspy que debe aplicar en el dispositivo o mediante las herramientas de Falcom para que el rastreador pueda reportar a Plaspy en casos de AVL, gestión de flotas, seguridad del vehículo y recuperación. La orientación se centra en requisitos públicos de configuración y pasos prácticos para validar la integración con Plaspy.

Plaspy utiliza ajustes de servidor compartidos para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta al endpoint de Plaspy. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor, por lo que siempre compare estas instrucciones públicas con la documentación más reciente de Falcom y con el comportamiento de su firmware.

## Resumen de la configuración

Preparar el STEPPIII-UX para funcionar con Plaspy consiste principalmente en apuntar el dispositivo al servidor Plaspy, confirmar las opciones de transporte y validar que el equipo pueda comunicarse y sea reconocido por la plataforma. Los puntos siguientes resumen los objetivos prácticos del proceso de configuración.

- Configurar el dispositivo para enviar datos de ubicación y eventos al endpoint del servidor Plaspy.
- Elegir el protocolo de transporte y el puerto adecuados para que Plaspy acepte los datos.
- Validar la conectividad de red y que el dispositivo aparezca en Plaspy después de la configuración.
- Habilitar los modos de reporte necesarios en el rastreador para que se reenvíen ubicación y alertas.
- Confirmar ajustes específicos del fabricante, como APN o comandos SMS, si fueran necesarios.

## Ajustes del servidor Plaspy

Al configurar el STEPPIII-UX para Plaspy, use los siguientes ajustes públicos de servidor Plaspy exactamente como se muestran:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol when the device connects

Todos los dispositivos en Plaspy usan el mismo puerto y Plaspy detectará el protocolo automáticamente, así que aplique estos valores de forma consistente durante la configuración del equipo.

## Requisitos habituales antes de la configuración

- Asegúrese de que el rastreador tenga una fuente de alimentación confiable y esté encendido durante la configuración.
- Tenga acceso al método oficial de configuración de Falcom o al software que utilice su proveedor o instalador.
- Si el rastreador usa la red celular para comunicarse con los servidores, verifique que la tarjeta SIM sea válida y que los servicios de datos o SMS estén activos.
- Conozca los ajustes del servidor Plaspy d.plaspy.com y 54.85.159.138 y el puerto requerido 8888 antes de comenzar.
- Confirme cualquier APN o credenciales requeridas con su operador móvil o instalador si el dispositivo los necesita.
- Prepárese para reiniciar el dispositivo después de la configuración si el procedimiento de Falcom lo solicita.

## Cómo se conecta este rastreador a Plaspy

El STEPPIII-UX puede configurarse para enviar sus datos de ubicación y eventos a un servidor remoto. Para la integración con Plaspy, el dispositivo se dirige al endpoint y puerto compartido de Plaspy para que la plataforma reciba la telemetría y las actualizaciones de estado. Plaspy detectará el protocolo del rastreador automáticamente, por lo que la mayoría de las configuraciones solo requieren la dirección del servidor, el puerto y la selección del transporte.

- El dispositivo envía mensajes de seguimiento y eventos al endpoint del servidor Plaspy d.plaspy.com o directamente a 54.85.159.138.
- Las comunicaciones se envían en el puerto 8888 usando UDP o TCP según lo configure el rastreador.
- Plaspy recibe y parsea los mensajes entrantes y los asocia con el registro del vehículo conectado.
- Una vez configurado y en línea, el rastreador se vuelve visible en Plaspy para monitoreo, alertas y registro histórico.
- Las alertas o reportes de estado enviados desde el dispositivo se reenvían a Plaspy, donde se pueden aplicar reglas y notificaciones.

## Flujo común de configuración

1. Acceda al método de configuración oficial de Falcom o al software provisto por el fabricante o instalador. Esto puede ser una herramienta para PC, una interfaz web o métodos por SMS/archivo de configuración según el dispositivo y el firmware.
2. Ingrese la dirección del servidor Plaspy usando el dominio d.plaspy.com o la IP del servidor 54.85.159.138 en el campo host del servidor.
3. Establezca el puerto del servidor en 8888 según lo requiere Plaspy.
4. Si el dispositivo requiere selección de transporte, elija UDP o TCP según su preferencia o las indicaciones del instalador.
5. Aplique o guarde la configuración en la herramienta Falcom y siga cualquier instrucción específica del dispositivo para cargar los ajustes.
6. Reinicie el rastreador si las instrucciones del fabricante indican que es necesario para activar los cambios.
7. Valide que el dispositivo reporte a Plaspy y aparezca en línea en la plataforma; confirme que se reciben telemetría y mensajes de eventos.

## Ejemplos de comandos de configuración

Los comandos exactos y el método varían según el software de configuración de Falcom y el firmware del dispositivo. Los equipos Falcom se configuran comúnmente mediante una herramienta del fabricante o por comandos estilo SMS, y la forma de esos comandos depende del firmware del equipo. Como los comandos específicos del modelo los proporciona Falcom y las herramientas del proveedor, consulte la documentación oficial de Falcom o a su instalador para el conjunto de comandos preciso para el STEPPIII-UX.

Si utiliza una herramienta Falcom que acepta líneas de comando o plantillas SMS, los valores públicos clave que deberá proporcionar son el host del servidor Plaspy d.plaspy.com (o 54.85.159.138) y el puerto 8888, además de una elección explícita de transporte UDP o TCP cuando sea necesario.

## Notas de configuración

- Las diferencias de firmware y las revisiones de hardware pueden cambiar los nombres de los campos o la ubicación de los menús en la herramienta de Falcom. Consulte las notas de firmware correspondientes al número de serie de su equipo.
- Elegir TCP o UDP puede afectar el comportamiento de conexión en ciertas condiciones de red. Plaspy acepta ambos y detecta automáticamente el protocolo entrante.
- Todos los dispositivos en Plaspy usan el mismo puerto 8888; no cambie el puerto al configurar el equipo para Plaspy.
- Si su instalador usa comandos SMS para la configuración, guarde una copia de los campos de marcador de posición, como APN o credenciales, y reemplácelos por los valores correctos antes de enviar.
- Verifique siempre los ajustes públicos aquí con el manual de configuración actual de Falcom para STEPPIII-UX.

## Por qué usar Plaspy con esta configuración

Usar el Falcom STEPPIII-UX con Plaspy ofrece una vía sencilla para integrar un dispositivo de rastreo versátil en una plataforma única para visibilidad, monitoreo y supervisión operativa. Al dirigir el dispositivo al endpoint y puerto compartidos de Plaspy, las organizaciones pueden centralizar la ubicación de los vehículos, las alertas de eventos y los registros históricos para la gestión de flotas, seguridad y procesos de recuperación.

Para saber más sobre Plaspy y las capacidades de la plataforma visite https://www.plaspy.com. Para detalles más recientes sobre la configuración específica del dispositivo, el comportamiento del firmware y las instrucciones del fabricante, consulte la documentación oficial de Falcom en https://www.falcom.de. Las especificaciones del fabricante y los métodos de configuración pueden cambiar con el tiempo, así que verifique la información actual con Falcom cuando prepare un despliegue en producción.
