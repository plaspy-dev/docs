---
slug: /falcom/fox_en/configuration
id: fox_en-configuration
sidebar_label: Configuration
title: Falcom - FOX-EN Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el rastreador Falcom FOX-EN y que reporte a Plaspy con ajustes compartidos y flujo de trabajo práctico
keywords:
  - configuración Falcom FOX-EN
  - configuración FOX-EN para Plaspy
  - configuración rastreador Falcom
  - configuración servidor FOX-EN
  - configuración GPS Falcom
  - seguimiento vehicular Falcom
  - integración FOX-EN Plaspy
  - configuración rastreador Plaspy
  - guía Falcom FOX-EN
  - rastreador GPS FOX-EN
---

# Falcom - Configuración del FOX-EN

Esta página describe el contexto público de configuración para usar el rastreador Falcom FOX-EN con Plaspy. Reúne los ajustes prácticos y el flujo de trabajo que necesitará para apuntar un equipo FOX-EN hacia la plataforma Plaspy, de modo que el dispositivo envíe mensajes de estado, alertas e informes de ubicación al endpoint del servidor de Plaspy. Utilice esta guía junto con la documentación del producto FOX-EN y las herramientas del fabricante que tenga disponibles.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, por lo que el mismo endpoint y puerto de Plaspy sirven para todos los equipos compatibles. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del vendedor; confirme siempre los comandos y menús específicos con la documentación de Falcom o su distribuidor cuando sea necesario.

## Resumen de la configuración

Este proceso prepara el FOX-EN para comunicarse de forma fiable con Plaspy estableciendo el endpoint de servidor, el transporte correcto y guardando los ajustes del dispositivo para que comience a reportar a la plataforma y quede visible para monitoreo.

- Apuntar el FOX-EN al dominio o IP del servidor Plaspy y al puerto compartido usado por Plaspy
- Seleccionar el modo de transporte requerido por el dispositivo (UDP o TCP) y guardar la elección
- Aplicar y persistir la configuración para que el dispositivo inicie el envío automático de datos
- Verificar la identidad del dispositivo y confirmar que aparece en Plaspy una vez que comienza a reportar
- Usar las herramientas del fabricante o comandos SMS según estén disponibles para realizar la configuración

## Ajustes del servidor Plaspy

Configure el FOX-EN para que reporte al servidor Plaspy usando los siguientes valores públicos:

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte compatible UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador y todos los dispositivos usan el mismo puerto en la plataforma

## Requisitos previos antes de la configuración

- Confirmar que el FOX-EN tiene alimentación y está instalado o conectado según la guía de instalación del dispositivo
- Tener a mano la identidad del dispositivo, por ejemplo IMEI o número de serie, para cualquier registro o verificación en la plataforma
- Asegurar que el dispositivo tenga una tarjeta SIM operativa con datos o capacidad de SMS si va a usar reporte TCP o configuración por SMS
- Contar con acceso al método oficial de configuración de Falcom, como herramienta web, software de escritorio o lista de comandos SMS
- Verificar la cobertura de red en el sitio de instalación para que el dispositivo pueda alcanzar el endpoint del servidor Plaspy

## Cómo se conecta este rastreador a Plaspy

Una vez configurado, el FOX-EN envía reportes de ubicación, estado y eventos al endpoint y puerto compartido de Plaspy, de modo que el dispositivo quede visible y gestionable dentro de la plataforma.

- Los reportes del dispositivo se dirigen a d.plaspy.com o directamente a 54.85.159.138
- Todo el envío utiliza el puerto 8888 como puerto compartido de Plaspy
- El FOX-EN puede usar transporte UDP o TCP según la selección de configuración
- Plaspy detecta automáticamente el protocolo del rastreador para interpretar correctamente los mensajes del dispositivo
- Cuando el envío comienza, el dispositivo aparece en Plaspy para monitoreo operativo y manejo de eventos

## Flujo de configuración habitual

1. Acceda al método oficial de configuración de Falcom para el FOX-EN (interfaz web, herramienta de escritorio o conjunto de comandos SMS).
2. Ingrese el dominio de Plaspy d.plaspy.com o la IP 54.85.159.138 en el campo de servidor del dispositivo.
3. Configure el dispositivo para usar el puerto 8888, que es el puerto que utiliza Plaspy para todos los dispositivos compatibles.
4. Seleccione UDP o TCP como transporte si el equipo requiere una selección explícita.
5. Aplique o guarde la configuración para que los ajustes queden persistentes en el FOX-EN.
6. Reinicie el dispositivo si las instrucciones del fabricante exigen reinicio para aplicar cambios de red.
7. Valide que el dispositivo reporte a Plaspy y aparezca en la plataforma; compruebe el mensaje de posición inicial o mensajes de estado.

## Ejemplos de comandos de configuración

Los comandos y la sintaxis exacta para configurar el FOX-EN dependen de la interfaz de configuración del fabricante y del firmware. Algunas instalaciones usan comandos SMS, otras el software de Falcom o una herramienta serial/USB. Debido a la variedad de métodos según firmware y herramienta, consulte el manual del FOX-EN o el soporte de Falcom para el conjunto de comandos preciso que debe usar.

Si dispone de una lista de comandos proporcionada por el proveedor o del formato SMS, siga el flujo de trabajo descrito anteriormente y utilice esos comandos adecuados a la plataforma para establecer el servidor en d.plaspy.com (o 54.85.159.138) y el puerto 8888, y para seleccionar UDP o TCP según corresponda.

## Notas de configuración

- Las diferencias de firmware pueden cambiar nombres de menú, sintaxis de comandos y ajustes disponibles; verifique siempre la versión de firmware del FOX-EN y las notas de la versión antes de aplicar cambios.
- Algunos instaladores prefieren la configuración por SMS para equipos remotos, mientras que otros usan herramientas locales por USB o red; emplee el método que se ajuste a su flujo de trabajo y a las capacidades del dispositivo.
- La elección de TCP frente a UDP puede afectar garantías de entrega y comportamiento; seleccione el modo de transporte que cumpla sus requisitos operativos y las recomendaciones del firmware del dispositivo.
- Dado que Plaspy detecta automáticamente los protocolos de los rastreadores y usa el mismo puerto para todos los dispositivos, enfóquese en ingresar correctamente la dirección del servidor y el puerto en el FOX-EN.
- Mantenga un registro del IMEI del dispositivo y de los ajustes de servidor aplicados para resolución de problemas y mantenimiento continuo.

## Por qué usar Plaspy con esta configuración

Configurar el Falcom FOX-EN para que reporte a Plaspy proporciona a las organizaciones un endpoint coherente para recopilar datos de ubicación, alertas y estado de su flota. Los ajustes de servidor compartidos simplifican el despliegue en múltiples dispositivos y ayudan a los administradores a validar la conectividad rápidamente durante la instalación y la puesta en servicio.

Para obtener más información sobre Plaspy y cómo gestiona la conectividad de dispositivos y la visibilidad de flotas visite https://www.plaspy.com. Para instrucciones específicas del FOX-EN, información de firmware y herramientas del fabricante consulte https://www.falcom.de ya que los métodos del fabricante y el comportamiento del firmware pueden cambiar con el tiempo.
