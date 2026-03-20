---
slug: /gosafe/g3a/configuration
id: g3a-configuration
sidebar_label: Configuration
title: Gosafe - G3A Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el rastreador Gosafe G3A con Plaspy, incluyendo ajustes de servidor y flujo de instalación
keywords:
  - configuración Gosafe G3A
  - instalación Gosafe G3A
  - Gosafe G3A Plaspy
  - configuración rastreador GPS Gosafe
  - configuración servidor G3A
  - guía configuración G3A
  - compatibilidad Gosafe Plaspy
  - configuración plataforma Gosafe G3A
  - parámetros instalación Gosafe G3A
  - ajustes protocolo G3A
---

# Gosafe - Configuración del G3A

Esta página describe el contexto público de configuración para usar el rastreador Gosafe G3A con Plaspy. Explica los ajustes generales del servidor de Plaspy a los que debe apuntar el dispositivo, detalla pasos prácticos de instalación y resalta las comprobaciones comunes para verificar que el rastreador puede comunicarse con la plataforma Plaspy. Use esta guía como referencia técnica para tareas habituales de configuración, no como sustituto del manual del dispositivo.

Plaspy emplea ajustes de servidor compartidos para los dispositivos soportados y detecta automáticamente el protocolo del rastreador, pero los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El G3A es un rastreador compacto con batería interna de respaldo, detección de bloqueo GSM, múltiples opciones de E/S, soporte de micrófono y entrada analógica, y un acelerómetro 2D. Confirme las especificaciones más recientes del dispositivo con el fabricante antes de finalizar la instalación.

## Resumen de la configuración

El objetivo de la configuración es preparar el G3A para que reporte ubicación y eventos a Plaspy de forma fiable y con la mínima intervención. En la práctica, la configuración garantiza que el dispositivo tenga los parámetros de red correctos, los ajustes de transporte adecuados y los identificadores necesarios para que la plataforma Plaspy reconozca y muestre el dispositivo.

- Apuntar el rastreador al endpoint del servidor Plaspy y verificar la conectividad
- Establecer el puerto de la plataforma y elegir UDP o TCP si el dispositivo requiere selección de transporte
- Guardar y aplicar los ajustes, y reiniciar el rastreador si es necesario para comenzar a reportar
- Validar que los mensajes de ubicación y eventos lleguen a Plaspy y que el dispositivo sea visible en la plataforma
- Ajustar umbrales de eventos o comportamiento de E/S del dispositivo según los requisitos de la instalación

## Ajustes de servidor de Plaspy

Use los siguientes ajustes públicos de servidor al configurar el Gosafe G3A para que reporte a Plaspy:

- dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- puerto 8888
- soporte de transporte UDP o TCP en el puerto 8888
- detección automática de protocolo en Plaspy para que la plataforma determine el protocolo del dispositivo

Tenga en cuenta que todos los dispositivos en Plaspy usan el mismo puerto y la plataforma detectará automáticamente el protocolo del rastreador cuando el dispositivo comience a enviar datos.

## Requisitos típicos antes de la configuración

- Acceso físico al G3A para realizar la configuración y reiniciar la unidad si es necesario
- Batería interna cargada y conexión de alimentación primaria para que el dispositivo pueda arrancar y registrarse en la red
- Una SIM celular válida y servicio activo compatible con las capacidades GSM del dispositivo
- Acceso al método oficial de configuración Gosafe o a la herramienta del proveedor para editar los ajustes de servidor y transporte
- Conocimiento del identificador del dispositivo o la información de registro requerida por su plataforma de flotas
- Un plan de pruebas para verificar la conectividad y confirmar que los mensajes llegan a Plaspy después de la configuración

## Cómo se conecta este rastreador a Plaspy

Al configurarse para Plaspy, el G3A envía su posición, eventos de movimiento y mensajes de E/S o alarmas configuradas al endpoint y puerto compartidos de Plaspy. Plaspy recibe y decodifica el protocolo entrante automáticamente, mostrando el dispositivo en la plataforma para su monitoreo e informes.

- El rastreador transmite datos a d.plaspy.com o a 54.85.159.138 en el puerto 8888
- Puede elegir el transporte UDP o TCP en el dispositivo si requiere selección de transporte
- Una vez que los mensajes llegan a Plaspy, la plataforma detecta el protocolo del rastreador y procesa los datos automáticamente
- Los reportes de evento y movimiento del G3A (por ejemplo disparadores por distancia o cambio de rumbo) aparecen en Plaspy para visibilidad operativa
- El puerto compartido y la detección automática de protocolo simplifican el soporte de múltiples modelos de dispositivos en Plaspy

## Flujo de trabajo común de configuración

1. Acceda al método oficial de configuración Gosafe o al software para el G3A provisto por el fabricante o el distribuidor.
2. En los ajustes de servidor del dispositivo ingrese el endpoint de Plaspy como d.plaspy.com o 54.85.159.138 según la interfaz de configuración.
3. Establezca el puerto en 8888 como destino para los mensajes del rastreador.
4. Si el dispositivo requiere selección de transporte, elija UDP o TCP en el puerto 8888 y guarde la selección.
5. Aplique o guarde la configuración en el rastreador usando la herramienta del fabricante o el método de comandos SMS si está soportado.
6. Reinicie el dispositivo si el procedimiento de configuración lo exige para comenzar a reportar hacia los nuevos ajustes del servidor.
7. Valide que el dispositivo reporte a Plaspy confirmando que el rastreador aparece en la plataforma y que hay mensajes recientes de posición o eventos.

## Comandos de configuración de ejemplo

La sintaxis exacta de comandos o las pantallas de configuración para el Gosafe G3A puede variar según el firmware y la herramienta del proveedor. Debido a que las utilidades del fabricante difieren, esta guía no inventa comandos de dispositivo. Use la utilidad oficial de configuración Gosafe o la documentación del proveedor para aplicar los ajustes de servidor d.plaspy.com o 54.85.159.138 y el puerto 8888, y elija UDP o TCP si se lo solicita.

Si dispone de un conjunto de comandos SMS o de consola del fabricante proporcionados con su equipo, aplique el dominio o la IP del servidor y el puerto exactamente como se indican arriba y preserve cualquier marcador de posición requerido por esos comandos.

## Notas de configuración

- Las variaciones de firmware pueden cambiar los nombres de menú exactos o la sintaxis de los comandos SMS; confirme siempre el formato de comandos para la versión de firmware de su dispositivo.
- La elección entre TCP y UDP depende del firmware del dispositivo y de su preferencia operacional; Plaspy soporta ambos transportes en el puerto 8888.
- Dado que Plaspy utiliza el mismo puerto para todos los dispositivos soportados y detecta el protocolo automáticamente, generalmente solo necesita configurar el endpoint y el puerto correctos.
- La detección de bloqueo GSM y los ajustes de eventos del acelerómetro se configuran en el propio dispositivo; consulte la documentación Gosafe para nombres de parámetros detallados.
- Mantenga un registro de cualquier cambio de configuración y un método para restaurar ajustes previos si se requiere resolución de problemas.

## Por qué usar Plaspy con esta configuración

Configurar el Gosafe G3A para que reporte a Plaspy conecta un rastreador compacto con respaldo de batería y opciones avanzadas de eventos a una plataforma unificada de gestión de flotas. Usar Plaspy facilita centralizar la visibilidad de ubicación, las alertas de eventos y el monitoreo operacional entre dispositivos, mientras se confía en un endpoint de servidor compartido y en el manejo automático de protocolos.

Para obtener más información sobre Plaspy y cómo soporta despliegues con múltiples dispositivos visite https://www.plaspy.com. Para los métodos de configuración específicos más actuales, comportamiento de firmware y detalles del fabricante, verifique la información con Gosafe en https://gosafesystem.com/
