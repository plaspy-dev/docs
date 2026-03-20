---
slug: /flextrack/lommy_power_9b23/configuration
id: lommy_power_9b23-configuration
sidebar_label: Configuration
title: Flextrack - Lommy Power 9B23 Configuration
sidebar_class_name: menu_item_tracker
description: Guía de configuración y servidor para Flextrack Lommy Power 9B23 compatible con Plaspy y pasos prácticos de integración
keywords:
  - Configuración Flextrack Lommy Power 9B23
  - Instalación Lommy Power Flextrack
  - Configuración Lommy Power para Plaspy
  - Configuración de rastreador GPS
  - Configuración seguimiento de vehículos
  - Configuración rastreador para gestión de flotas
  - Configuración de servidor Lommy Power
  - Configuración de dispositivo Plaspy
  - Configuración plataforma GPS Flextrack
  - Configuración GPS Lommy Power
---

# Flextrack - Lommy Power 9B23: Configuración

Esta página describe el contexto público de configuración para usar el Flextrack Lommy Power 9B23 con Plaspy. Resume los ajustes prácticos y el flujo de trabajo necesario para apuntar el dispositivo a Plaspy y garantizar que los datos de posición y telemetría se reciban de manera fiable. La orientación se centra en los ajustes de servidor compartidos que Plaspy espera y en las consideraciones del fabricante que son públicas y aplicables en la mayoría de los casos.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando llegan los datos. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, revisión de hardware, tipo de instalación y herramientas del proveedor. Use la información aquí para preparar el dispositivo para la ingesta en Plaspy y consulte la documentación oficial de Flextrack para comandos o procedimientos específicos de firmware.

## Resumen de la configuración

Este proceso prepara el Lommy Power 9B23 para enviar posiciones y telemetría a Plaspy, de modo que el dispositivo aparezca en sus paneles y APIs de Plaspy. El objetivo es apuntar el equipo al endpoint de Plaspy, elegir el transporte adecuado, confirmar la conectividad y verificar que Plaspy reciba e interprete correctamente el protocolo del dispositivo.

- Configure el dispositivo para reportar al endpoint compartido de Plaspy para que los datos lleguen a los paneles y APIs.
- Seleccione el método de transporte que soporte la unidad y configure el puerto que Plaspy utiliza para todos sus dispositivos.
- Valide la conectividad celular y cualquier ajuste de APN o de la SIM requerido por el operador móvil local.
- Aplique y guarde la configuración del fabricante y reinicie el dispositivo si así se recomienda.
- Confirme que los reportes de telemetría y eventos aparezcan en Plaspy para que la ubicación, encendido, movimiento y horas de operación sean visibles.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte compatible UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador y todos los dispositivos usan el mismo puerto

## Requisitos previos a la instalación

- Confirme que el Lommy Power 9B23 esté instalado y alimentado con la conexión a máquina según la guía de Flextrack (rango de operación 5–40 V).
- Una SIM activa con plan de datos o capacidad SMS según requiera su instalación y la cobertura de la red; verifique APN y disponibilidad de SMS con su operador.
- Acceso al método de configuración de Flextrack o a la herramienta oficial que permita establecer servidor y transporte.
- Verificación básica de cableado e instalación para asegurar recepción GNSS y celular desde la ubicación de montaje.
- Un método para observar las respuestas del dispositivo después de configurar, como indicadores LED, registros serial/USB o el método de verificación de conectividad que recomiende el fabricante.
- Credenciales y acceso físico para reiniciar o hacer un ciclo de alimentación del dispositivo si el flujo de configuración lo requiere.

## Cómo se conecta este rastreador a Plaspy

Cuando se configura para Plaspy, el Lommy Power 9B23 envía sus posiciones GNSS y telemetría por la red celular al endpoint y puerto del servidor Plaspy. Plaspy recibe los mensajes, identifica automáticamente el protocolo del rastreador y procesa eventos y telemetría en la plataforma.

- El dispositivo se configura para enviar datos a d.plaspy.com o a 54.85.159.138 en el puerto 8888.
- El transporte puede ser UDP o TCP según la preferencia del instalador o las opciones de firmware; Plaspy acepta ambos.
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que no es necesario seleccionar el protocolo en la plataforma.
- Eventos como encendido, movimiento y horas de operación se transmiten a Plaspy y se mapean en alertas e informes de utilización.
- Si el servicio celular se interrumpe, el dispositivo puede almacenar localmente datos recientes hasta que se restablezca la conectividad y Plaspy ingiera los mensajes en cola.

## Flujo de configuración habitual

1. Acceda al método oficial de configuración de Flextrack o al software proporcionado por el fabricante o vendedor. Esto puede ser una herramienta web, una utilidad serial/USB, comandos SMS o una app dedicada.
2. Introduzca la dirección del servidor de Plaspy como el dominio d.plaspy.com o la IP 54.85.159.138 en los ajustes de servidor del dispositivo.
3. Establezca el puerto del dispositivo en 8888. Tenga en cuenta que todos los dispositivos en Plaspy usan el mismo puerto.
4. Elija UDP o TCP como transporte si el dispositivo requiere una selección, según su red y preferencia de instalación.
5. Configure cualquier parámetro de APN o de la SIM que exija su operador móvil para que el dispositivo pueda establecer una sesión de datos celular.
6. Aplique o guarde la configuración y realice el reinicio del dispositivo o ciclo de alimentación recomendado para activar los ajustes.
7. Valide que el dispositivo reporte a Plaspy comprobando la llegada de datos y confirmando que posición y telemetría aparecen. Plaspy detectará automáticamente el protocolo del rastreador.

## Ejemplo de comandos de configuración

El Lommy Power 9B23 puede configurarse usando las herramientas o métodos del fabricante Flextrack, que pueden incluir comandos SMS, una app de configuración o una utilidad USB/serial. La sintaxis exacta y los comandos disponibles varían según el firmware y la herramienta del proveedor, por lo que aquí no se reproducen comandos concretos. Use la guía de configuración de Flextrack o la herramienta del proveedor para establecer:

- Dominio del servidor o IP del servidor a d.plaspy.com o 54.85.159.138
- Puerto a 8888
- Transporte a UDP o TCP cuando sea requerido

Si su proveedor facilita plantillas SMS o cadenas de comando para la configuración del servidor, aplique esas plantillas para apuntar el dispositivo a d.plaspy.com o 54.85.159.138 y al puerto 8888. Mantenga los marcadores de posición como el del APN si los presenta el fabricante y consulte la documentación de Flextrack para la sintaxis exacta de SMS o comandos.

## Notas de configuración

- Las diferencias de firmware pueden cambiar los pasos exactos y la sintaxis de comandos; siempre verifique la documentación actual de Flextrack para su revisión de firmware.
- UDP se usa comúnmente para telemetría de bajo overhead mientras que TCP puede elegirse por su confiabilidad de sesión; Plaspy acepta ambos y detectará el protocolo automáticamente.
- Si la configuración por SMS está disponible, puede ser un método práctico para actualizaciones en campo, pero verifique los comandos y formatos con Flextrack.
- Confirme los ajustes de APN, usuario y contraseña si el operador los requiere; esos valores los facilita su operador móvil y no Plaspy.
- Tras aplicar cambios, permita tiempo para que el dispositivo se registre en la red celular y para que Plaspy ingiera los primeros mensajes.

## Por qué usar Plaspy con esta configuración

Usar el Lommy Power 9B23 con Plaspy ofrece a gestores de flotas y equipos visibilidad continua de ubicación, eventos de encendido y movimiento, y horas de operación mediante un rastreador robusto y con alimentación fija. Apuntar el dispositivo al endpoint compartido y al puerto de Plaspy, y elegir UDP o TCP según convenga, permite que el dispositivo transmita telemetría a los paneles y APIs de Plaspy para geocercas, informes de utilización y alertas.

Para saber más sobre Plaspy y cómo la plataforma maneja la ingesta y mapeo de dispositivos, visite https://www.plaspy.com. Para detalles específicos de configuración, comportamiento de firmware y orientación del fabricante, siempre verifique las instrucciones en el sitio de Flextrack https://flextrack.dk.
