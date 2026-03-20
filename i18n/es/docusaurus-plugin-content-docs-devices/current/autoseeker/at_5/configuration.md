---
slug: /autoseeker/at_5/configuration
id: at_5-configuration
sidebar_label: Configuration
title: Autoseeker - AT-5 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración para usar Autoseeker AT-5 con Plaspy, ajustes de servidor compartido y pasos prácticos
keywords:
  - Configuración Autoseeker AT-5
  - Ajuste Autoseeker AT-5
  - Autoseeker AT-5 Plaspy
  - Configuración servidor AT-5
  - Configuración rastreador GPS AT-5
  - Configuración rastreador Autoseeker
  - Configuración software seguimiento AT-5
  - Configuración plataforma GPS Autoseeker
  - Guía configuración dispositivo AT-5
  - Rastreadores compatibles Plaspy
---

# Autoseeker - Configuración del AT-5

Esta página describe el contexto público de configuración para usar el rastreador magnético inalámbrico Autoseeker AT-5 con Plaspy. Aquí se explican los ajustes de servidor compartidos de Plaspy a los que deberá apuntar el dispositivo, el flujo de trabajo típico de configuración y las consideraciones prácticas que conviene verificar antes de integrar el AT-5 en la plataforma. La orientación se basa en el conjunto de funciones del AT-5, incluida la compatibilidad con redes 4G y las capacidades de posicionamiento multimodal.

Plaspy utiliza ajustes de servidor compartidos para los dispositivos soportados y detecta automáticamente el protocolo del rastreador; sin embargo, los pasos de configuración en el lado del fabricante y las interfaces disponibles pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Use esta página para comprender los valores públicos de Plaspy y los pasos habituales, y consulte la documentación de Autoseeker para las herramientas y el formato exacto de comandos según su dispositivo.

## Visión general de la configuración

El objetivo de la configuración es dejar el AT-5 listo para que se comunique de forma fiable con Plaspy y aparezca en la plataforma para supervisión y notificación de eventos. Esto implica fijar el destino de red del rastreador, el tipo de transporte y las opciones del dispositivo necesarias para su despliegue, y luego validar que el equipo informe correctamente a Plaspy.

- Apunte el dispositivo al endpoint y puerto compartidos de Plaspy para que la telemetría llegue a la plataforma.
- Seleccione el tipo de transporte apropiado si el AT-5 requiere elegir entre TCP o UDP.
- Verifique la conectividad móvil y que la tarjeta SIM tenga datos activos cuando corresponda.
- Aplique o guarde los cambios y reinicie el equipo cuando el procedimiento del fabricante lo requiera.
- Confirme que el dispositivo sea visible y reporte eventos en Plaspy después de la configuración.

## Ajustes del servidor Plaspy

Configure el AT-5 para que reporte al servidor Plaspy con estos valores públicos:

- dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- puerto 8888
- soporte de transporte UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador y todos los dispositivos usan el mismo puerto

Estos valores son el endpoint público y el puerto de Plaspy que debe usar al configurar el AT-5 para enviar su ubicación y estados a la plataforma.

## Requisitos típicos antes de la configuración

- Asegúrese de que la batería del AT-5 esté cargada y el dispositivo encendido.
- Confirme que hay una SIM activa con datos móviles si la unidad requiere conectividad celular para operar en 4G.
- Disponga de acceso físico al dispositivo o de la herramienta o app de configuración del fabricante compatibles.
- Obtenga el método oficial de configuración de Autoseeker o el software correspondiente a la versión de firmware de su equipo.
- Verifique que exista cobertura celular en la ubicación de instalación para las bandas de red necesarias.
- Prepare su cuenta Plaspy o el acceso a la plataforma para poder validar el reporte del dispositivo tras la configuración.

## Cómo se conecta este rastreador a Plaspy

Cuando se configura para Plaspy, el AT-5 envía datos de ubicación y eventos al endpoint y puerto compartidos de Plaspy, de modo que el dispositivo sea visible y gestionable dentro de la plataforma. Plaspy recibe la telemetría entrante, reconoce automáticamente el protocolo del rastreador y asocia el dispositivo con su cuenta o contexto de instalación.

- El rastreador reporta GPS y datos de posicionamiento complementarios al servidor Plaspy d.plaspy.com en el puerto 8888
- El transporte puede ser UDP o TCP según la configuración del dispositivo; asegúrese de que el transporte seleccionado coincida con la configuración del equipo
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que no es necesario seleccionar un protocolo en la plataforma
- Eventos como SOS, manipulación o batería baja serán reenviados a Plaspy cuando estén habilitados en el rastreador
- Una conexión exitosa y el envío periódico de informes proporcionan visibilidad para la supervisión operativa y las alertas

## Flujo de trabajo de configuración habitual

1. Acceda al método de configuración oficial de Autoseeker o al software adecuado para la versión de firmware y la revisión de hardware del AT-5.
2. En los ajustes de servidor o red del dispositivo introduzca el dominio del servidor Plaspy d.plaspy.com o la IP del servidor 54.85.159.138.
3. Establezca el puerto remoto en 8888, que es el puerto que usa Plaspy para todos los dispositivos soportados.
4. Si el AT-5 requiere elegir el tipo de transporte, seleccione UDP o TCP en el puerto 8888 según la interfaz del dispositivo.
5. Aplique o guarde los cambios de configuración en la herramienta del dispositivo o siga las instrucciones del fabricante.
6. Reinicie el equipo si la documentación del fabricante indica que es necesario para que los ajustes surtan efecto.
7. Valide que el dispositivo reporte a Plaspy comprobando la llegada de telemetría en la plataforma y confirmando que el equipo aparece en su cuenta Plaspy.

## Ejemplos de comandos de configuración

Los comandos exactos y su formato dependen de la herramienta de configuración de Autoseeker, el firmware o los comandos SMS que soporte su unidad AT-5. Las herramientas del fabricante suelen ofrecer una interfaz gráfica o comandos estilo SMS/AT para establecer servidor, puerto y transporte. Dado que los métodos varían, consulte la documentación de Autoseeker o la utilidad de configuración suministrada con su unidad para obtener comandos y ejemplos precisos.

## Notas sobre la configuración

- Las diferencias de firmware pueden cambiar las opciones disponibles y el flujo exacto de configuración. Verifique la versión de firmware del AT-5 antes de aplicar instrucciones.
- Algunos instaladores usan la app o la herramienta de escritorio del fabricante, mientras que otros emplean SMS o configuración por serial; siga el método que soporte su unidad.
- La elección entre UDP y TCP puede afectar la forma en que se entrega la información; pruebe el transporte seleccionado para confirmar informes fiables al servidor Plaspy.
- Todos los dispositivos en Plaspy usan el mismo puerto y Plaspy detecta automáticamente el protocolo del rastreador, por lo que no necesita un puerto personalizado por dispositivo.
- Mantenga un registro del IMEI y la información de identificación del equipo para poder emparejar el rastreador en Plaspy una vez que empiece a reportar.

## Por qué usar Plaspy con esta configuración

Usar el Autoseeker AT-5 con Plaspy ofrece una vía sencilla para centralizar datos de ubicación, eventos y estado de rastreadores magnéticos en una única plataforma de supervisión. La larga duración de batería del AT-5, su posicionamiento multimodal y las alarmas relacionadas con la seguridad lo hacen adecuado para la visibilidad de activos y vehículos; configurarlo para que reporte a Plaspy habilita un seguimiento consistente, generación de alertas y supervisión operativa.

Conozca más sobre Plaspy y cómo gestiona la telemetría de dispositivos y la visibilidad de flotas en el sitio principal https://www.plaspy.com. Para métodos de configuración específicos de dispositivo, comportamiento de firmware y detalles del fabricante más actualizados, verifique la guía de Autoseeker en https://autoseekergps.com/ ya que las funciones y los pasos de instalación pueden cambiar con el tiempo.
