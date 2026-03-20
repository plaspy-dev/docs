---
slug: /trackerking/jx01/configuration
id: jx01-configuration
sidebar_label: Configuration
title: TrackerKing - JX01 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del TrackerKing JX01 con pasos para apuntar al servidor Plaspy y notas prácticas
keywords:
  - TrackerKing JX01
  - configuración TrackerKing JX01
  - instalación TrackerKing JX01
  - configuración rastreador JX01
  - configuración Plaspy JX01
  - configuración rastreador GPS personal
  - configuración dispositivo Plaspy
  - configuración servidor rastreador GPS
  - configuración rastreador antirrobo
  - configuración rastreo activo portátil
---

# TrackerKing - Configuración del JX01

Esta página describe el contexto público de configuración para usar el TrackerKing JX01 con la plataforma Plaspy. Se centra en los ajustes del servidor y en los pasos prácticos que normalmente aplicará para preparar el dispositivo y que informe ubicación y eventos en su cuenta Plaspy.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, mientras que los pasos exactos del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El JX01 es un rastreador personal compacto recargable con batería de 850 mAh, conectividad celular cuatribanda y varios tipos de alarma; esta guía le muestra cómo apuntar el dispositivo a Plaspy y validar su visibilidad en la plataforma usando los datos de conexión públicos.

## Resumen de la configuración

Configurar el JX01 para Plaspy consiste principalmente en apuntar el dispositivo al endpoint del servidor Plaspy, seleccionar el transporte adecuado y verificar que el dispositivo envíe con éxito eventos de ubicación y alarma. El proceso prepara el rastreador para integrarse en la supervisión centralizada, alertas y mapeo dentro de Plaspy.

- Ingrese el endpoint y el puerto del servidor Plaspy en el método de configuración del TrackerKing o en la app complementaria para que el dispositivo pueda enviar reportes a Plaspy.
- Seleccione el tipo de transporte que soporte el dispositivo (UDP o TCP) y confirme la opción si es necesario.
- Guarde la configuración y, si se requiere, reinicie el JX01 para aplicar los cambios de red.
- Valide la conectividad observando que el primer reporte de ubicación o alarma llegue a los paneles de Plaspy.
- Confirme que eventos como movimiento, vibración, geocerca, batería baja y monitoreo de voz sean visibles en Plaspy tras la configuración exitosa.

## Ajustes del servidor Plaspy

Use los siguientes parámetros públicos de conexión a Plaspy al configurar el TrackerKing JX01. Estos son los valores que Plaspy utiliza para recibir los reportes del dispositivo.

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automáticamente detecta el protocolo del rastreador y todos los dispositivos en Plaspy usan el mismo puerto

## Requisitos típicos antes de la configuración

- Batería del JX01 cargada y el dispositivo encendido y listo para configurar.
- Acceso al método oficial de configuración de TrackerKing, como la app complementaria, portal web o herramienta del proveedor.
- Conexión celular activa en el dispositivo, ya que el JX01 usa GSM cuatribanda para el envío de reportes.
- Acceso de red desde su estación de trabajo o teléfono para confirmar y validar los reportes en Plaspy.
- El identificador del dispositivo (IMEI u otro similar) disponible para registrar o localizar el dispositivo en Plaspy una vez que comience a reportar.
- Conocimiento de la versión de firmware del dispositivo para seguir la guía del fabricante correcta cuando los pasos difieran según firmware.

## Cómo se conecta este rastreador a Plaspy

Al configurarlo para reportar a Plaspy, el JX01 envía actualizaciones periódicas de ubicación e informes de eventos al endpoint y puerto compartidos de Plaspy. Plaspy ingiere esos reportes y pone a disposición los datos de ubicación, alarmas y telemetría en paneles y herramientas de informes.

- El JX01 se configura para reportar al endpoint del servidor Plaspy d.plaspy.com (o 54.85.159.138) en el puerto 8888.
- El dispositivo puede usar UDP o TCP como transporte según las opciones de configuración; Plaspy aceptará cualquiera de los dos.
- Los pings de ubicación, la telemetría de batería baja, las alarmas de movimiento y vibración, y los eventos de geocerca se encaminan a Plaspy para su visualización.
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que no necesita seleccionar un manejador específico de protocolo dentro de Plaspy.
- Una vez que comienza a reportar, el dispositivo aparece en las listas de dispositivos de Plaspy y genera alertas y actualizaciones de mapa según la configuración.

## Flujo común de configuración

1. Acceda al método de configuración oficial de TrackerKing o a la app complementaria proporcionada por el fabricante.
2. Localice los ajustes de servidor o reporte remoto en la herramienta del fabricante.
3. Ingrese la dirección del servidor Plaspy usando d.plaspy.com o 54.85.159.138.
4. Establezca el puerto 8888 como puerto de destino para los reportes del dispositivo.
5. Elija UDP o TCP si el dispositivo requiere selección de transporte.
6. Aplique o guarde la configuración en la herramienta o app de TrackerKing.
7. Reinicie el dispositivo si el fabricante recomienda un reinicio para aplicar los ajustes de red.
8. Valide que el JX01 reporte a Plaspy confirmando que el dispositivo aparece y envía la telemetría inicial a los paneles de Plaspy.

## Ejemplos de comandos de configuración

El JX01 puede configurarse usando las herramientas del fabricante o la app complementaria, y los comandos exactos o las cadenas SMS varían según el firmware y el modelo regional. Debido a que los métodos de configuración del fabricante difieren, no hay líneas de comando públicas universales que mostrar aquí. En la práctica ingresará los valores del servidor Plaspy d.plaspy.com (o 54.85.159.138) y el puerto 8888 en la interfaz de configuración de TrackerKing o en la herramienta del proveedor y elegirá UDP o TCP si se le solicita.

Si su dispositivo o proveedor ofrece comandos SMS o CLI para la configuración remota, busque comandos que establezcan el dominio o IP del servidor y el puerto. Conserve cualquier marcador de posición que use el fabricante como {{apn}} o {{apnu}} cuando aparezca y reemplácelo con los datos APN de su operador siguiendo la documentación del proveedor.

## Notas de configuración

- Las diferencias de firmware pueden cambiar los nombres exactos de los menús y los pasos requeridos en la app de configuración de TrackerKing; siempre verifique los pasos según la guía de firmware del dispositivo.
- Elija UDP o TCP según lo soporte el dispositivo; Plaspy acepta ambos y detecta automáticamente el protocolo, aunque algunas instalaciones prefieren un transporte por razones de fiabilidad en su entorno de red.
- Todos los dispositivos en Plaspy usan el mismo valor de puerto 8888, por lo que solo necesita configurar el puerto 8888 para el JX01 al apuntarlo a Plaspy.
- Si el fabricante ofrece configuración por SMS o una app complementaria, utilice el método oficial provisto por TrackerKing para evitar errores de configuración.
- Tras aplicar los ajustes, espere unos minutos a que llegue el primer reporte a Plaspy y verifique los tipos de eventos esperados como movimiento, geocerca, batería baja y monitoreo de voz.

## Por qué usar Plaspy con esta configuración

Usar el TrackerKing JX01 con Plaspy integra el rastreo personal y de activos portátiles en un entorno de monitoreo centralizado. El diseño recargable del JX01 y sus capacidades de alarma lo hacen adecuado para anti pérdida, seguridad personal y protecciones temporales de activos, y Plaspy proporciona el mapeo, las alertas y la telemetría histórica necesarios para una respuesta oportuna y supervisión operativa.

Para conocer más sobre Plaspy y cómo gestionar configuraciones de dispositivos a gran escala visite https://www.plaspy.com. Para los pasos más actuales específicos del dispositivo, notas de firmware y métodos de configuración consulte el sitio del fabricante TrackerKing en https://trackerking.cn/ ya que las instrucciones del proveedor y el comportamiento del firmware pueden cambiar con el tiempo.
