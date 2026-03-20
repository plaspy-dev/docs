---
slug: /cantrack/g01_g02/configuration
id: g01_g02-configuration
sidebar_label: Configuration
title: CanTrack - G01 / G02 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para conectar los rastreadores CanTrack G01 y G02 a Plaspy con ajustes de servidor compartidos y pasos prácticos
keywords:
  - configuración CanTrack G01 G02
  - configuración CanTrack G01
  - configuración CanTrack G02
  - configuración del servidor CanTrack
  - configuración rastreador GPS CanTrack
  - configuración G01 G02 Plaspy
  - configuración rastreador GPS Plaspy
  - configuración rastreo vehicular CanTrack
  - configuración GPRS rastreador GPS
  - guía de configuración CanTrack
---

# CanTrack - Configuración G01 / G02

Esta página documenta el contexto público de configuración para usar los rastreadores GPS CanTrack G01 y G02 con Plaspy. Se centra en los pasos prácticos y los ajustes de servidor compartidos necesarios para apuntar el dispositivo a Plaspy para reporte en tiempo real y vía GPRS, y resume las capacidades del G01 y G02 como conectividad GSM GPRS, seguimiento en tiempo real, reproducción de historial, geocercas y alarma SOS según la descripción del dispositivo.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, pero los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, revisión de hardware, tipo de instalación y herramientas del proveedor. Use esta guía para preparar el rastreador para Plaspy y, para comandos específicos del dispositivo y detalles de firmware, consulte la documentación oficial del fabricante.

## Resumen de configuración

El objetivo de la configuración es preparar el CanTrack G01 o G02 para que envíe datos de ubicación y eventos de forma confiable a Plaspy, de modo que el dispositivo sea visible y gestionable en la plataforma. Esto incluye establecer el endpoint del servidor correcto, el transporte y guardar los cambios para que el dispositivo reporte vía GPRS a Plaspy.

- Apuntar el rastreador al endpoint del servidor de Plaspy para que los datos lleguen a la plataforma
- Elegir el protocolo de transporte compatible con el dispositivo y con Plaspy
- Validar que el rastreador tenga conectividad móvil y pueda comunicarse con Plaspy
- Guardar y aplicar los ajustes para que el dispositivo reporte en tiempo real y registre historial
- Confirmar visibilidad e informes correctos dentro de Plaspy una vez que el dispositivo se registre

## Ajustes del servidor Plaspy

Al configurar el CanTrack G01 o G02 para Plaspy, use exactamente los siguientes ajustes públicos del servidor:

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP según las opciones de configuración del dispositivo
- Plaspy detecta automáticamente el protocolo del rastreador y todos los dispositivos en Plaspy usan el mismo puerto

## Requisitos habituales antes de la instalación

- Un dispositivo con batería cargada o conectado a la alimentación del vehículo para que el rastreador arranque y permanezca en línea
- Una tarjeta SIM activa con plan de datos y capacidad SMS si va a configurar o verificar mediante SMS
- Acceso al método oficial de configuración CanTrack o al software proporcionado por el fabricante
- Cobertura celular básica para transmisión GPRS en la ubicación de despliegue
- Acceso a una cuenta Plaspy o a un administrador para validar que el dispositivo sea visible después de reportar
- Conocimiento del IMEI del dispositivo y de las credenciales de instalador que el fabricante pueda requerir

## Cómo se conecta este rastreador a Plaspy

Los CanTrack G01 y G02 envían datos GPS y eventos a Plaspy a través de la red GSM GPRS usando TCP o UDP. Una vez configurado el endpoint y el puerto de Plaspy, el dispositivo transmitirá actualizaciones de ubicación y alarmas para que la unidad aparezca en la plataforma Plaspy.

- Configure el dispositivo para reportar a d.plaspy.com o a la IP 54.85.159.138
- Establezca el puerto 8888 para el reporte a Plaspy
- Seleccione UDP o TCP según las opciones de configuración del equipo; Plaspy acepta ambos
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que la plataforma reconocerá el flujo de datos
- Tras iniciar el reporte, verifique el dispositivo en Plaspy para ubicación en vivo e informes de eventos

## Flujo de configuración habitual

1. Acceda al método de configuración oficial de CanTrack o al software que provea el fabricante
2. Ingrese d.plaspy.com o 54.85.159.138 como dirección del servidor en los ajustes del dispositivo
3. Configure el puerto del servidor en 8888, puerto que Plaspy usa para todos los dispositivos soportados
4. Elija UDP o TCP si el dispositivo requiere selección explícita del transporte
5. Aplique o guarde la configuración en el rastreador utilizando la herramienta del fabricante o comandos SMS
6. Reinicie el dispositivo si el procedimiento del fabricante exige reboot para que los ajustes surtan efecto
7. Valide que el dispositivo reporte correctamente a Plaspy y que aparezca en los paneles de la plataforma

## Ejemplos de comandos de configuración

La sintaxis exacta de los comandos depende del firmware de CanTrack y del canal de configuración que use, por ejemplo el software de PC del fabricante, una app móvil o comandos SMS. Dado que los métodos varían entre firmwares y herramientas del proveedor, consulte la documentación oficial de CanTrack para los comandos precisos de su equipo.

En términos generales usted deberá suministrar el endpoint y el puerto de Plaspy en la herramienta del fabricante o vía SMS. Ejemplos conceptuales que podría encontrar en las instrucciones del fabricante son:

- Establecer servidor por dominio
  - d.plaspy.com puerto 8888 usando TCP o UDP según se requiera
- Establecer servidor por IP
  - 54.85.159.138 puerto 8888 usando TCP o UDP según se requiera

Si su equipo utiliza configuración por SMS con plantillas, la documentación del fabricante explicará cómo reemplazar valores como APN o credenciales de usuario. Mantenga marcadores de posición como [apn], [apnu] o [apnp] tal como los muestre el proveedor y sustitúyalos por los valores apropiados para su SIM y operador.

## Notas de configuración

- Variaciones de firmware y revisiones de hardware pueden cambiar la sintaxis exacta de los comandos o las ubicaciones del menú para configurar el servidor
- En algunos mercados el dispositivo se configura habitualmente por SMS, mientras que en otros se usa la herramienta de escritorio o móvil del fabricante; siga el método provisto con su unidad
- Elija UDP o TCP según las indicaciones de su instalador o el manual del equipo; Plaspy acepta ambos y detecta el protocolo automáticamente
- Siempre guarde y aplique los ajustes y, si es necesario, realice un reinicio para que el rastreador comience a reportar a Plaspy
- Verifique el reporte del IMEI y, tras la configuración inicial, que el rastreador figure en la lista de dispositivos en Plaspy

## Por qué usar Plaspy con esta configuración

Configurar el CanTrack G01 o G02 para reportar a Plaspy le brinda acceso sencillo a visibilidad en tiempo real, alertas de eventos como geocercas y SOS, y la posibilidad de reproducir rutas históricas capturadas por el rastreador. El uso de los ajustes de servidor compartidos de Plaspy simplifica el despliegue, porque la plataforma utiliza el mismo puerto para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador.

Para más información sobre Plaspy y las funcionalidades de la plataforma visite https://www.plaspy.com. Para obtener los comandos de configuración específicos más recientes, notas de firmware y guías de instalación consulte el sitio del fabricante en https://www.cantrackgps.com/ ya que el comportamiento y los métodos de configuración del dispositivo pueden cambiar con el tiempo.
