---
slug: /careu/uw1/configuration
id: uw1-configuration
sidebar_label: Configuration
title: CAREU - UW1 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del rastreador GPS CAREU UW1 y su compatibilidad con Plaspy usando los ajustes públicos del servidor Plaspy
keywords:
  - configuración CAREU UW1
  - instalación CAREU UW1
  - configuración Plaspy UW1
  - configuración rastreador GPS UW1
  - ajustes servidor tracker CAREU
  - rastreo de flotas UW1
  - configuración de dispositivo Plaspy
  - integración CAREU UW1
  - configuración telemetría UW1
  - rastreo de vehículos UW1
---

# CAREU - Configuración UW1

Esta página documenta el contexto público de configuración para usar el rastreador GPS CAREU UW1 con Plaspy. Se centra en los ajustes prácticos del servidor y el flujo necesario para que el UW1 reporte ubicación y telemetría a la plataforma Plaspy, utilizando el endpoint compartido y las opciones de transporte que Plaspy soporta.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el equipo se conecta. Los pasos exactos en el lado del fabricante para el UW1 pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor que usted utilice; por ello trate la siguiente información como guía práctica y no como un manual exhaustivo del dispositivo.

## Resumen de la configuración

Esta configuración prepara el CAREU UW1 para comunicarse con Plaspy de modo que el dispositivo aparezca en los mapas en tiempo real, envíe telemetría y eventos de alarma, y cargue los registros almacenados después de la recuperación de la red.

- Configure el dispositivo para que reporte al endpoint del servidor Plaspy y confirme la selección del transporte.
- Asegúrese de que el UW1 tenga una conexión de datos celular activa y la SIM con la provisión necesaria.
- Guarde y aplique los cambios de configuración del fabricante y reinicie el dispositivo si es necesario.
- Valide que el UW1 esté reportando a Plaspy y que la posición, alarmas y datos de sensores aparezcan en la plataforma.
- Verifique el comportamiento de carga de registros tras interrupciones de red para confirmar la reproducción de registros offline.

## Ajustes del servidor Plaspy

Utilice estos ajustes públicos de servidor Plaspy al configurar el UW1 para integrarlo con Plaspy.

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP depending on device configuration requirements
- Plaspy automatically detects the tracker protocol when the device connects

Tenga en cuenta que Plaspy usa el mismo puerto para todos los dispositivos compatibles y detectará el protocolo del rastreador automáticamente una vez que el dispositivo alcance el endpoint compartido.

## Requisitos previos antes de la configuración

- Acceso físico al UW1 o acceso remoto a la herramienta o interfaz de configuración del fabricante
- SIM celular activa y provisionada para datos en el dispositivo si va a usar LTE o conexiones de respaldo 3G/2G
- Una cuenta en Plaspy o acceso de administrador a la instancia Plaspy que recibirá los datos del dispositivo
- Firmware del dispositivo actualizado cuando sea posible y el método o software de configuración del fabricante
- Alimentación al dispositivo y cualquier cableado o periférico necesarios para el reporte de telemetría
- Conocimientos básicos para elegir entre UDP y TCP si el dispositivo requiere selección explícita del transporte

## Cómo se conecta este rastreador a Plaspy

El CAREU UW1 envía su posición, telemetría y eventos de alarma a la plataforma cloud de Plaspy en el endpoint y puerto compartidos. Plaspy recibe esos mensajes, identifica automáticamente el protocolo del rastreador y muestra la ubicación y la telemetría en la interfaz y los reportes de la plataforma.

- Actualizaciones en tiempo real de ubicación y telemetría sobre Cat 1 LTE con conmutación a 3G y 2G
- Informes de alarmas y eventos como conducción brusca o impacto detectado por el acelerómetro
- Datos de sensores como temperatura e identificación de conductor desde sensores 1-Wire cuando están habilitados
- Datos de periféricos y telemetría reenviados por RS-232 o por el CAN opcional cuando está configurado
- Registros de posición almacenados que se cargan a Plaspy cuando se restablece la conectividad de red

## Flujo de configuración típico

1. Acceda al método oficial de configuración del CAREU UW1 o al software del fabricante, utilizando la herramienta del proveedor, comandos SMS, interfaz USB u OTA según lo que soporte.
2. En los ajustes de servidor del dispositivo introduzca el dominio del servidor Plaspy d.plaspy.com o la IP del servidor 54.85.159.138 como destino.
3. Configure el puerto de reporte en 8888 que es el puerto compartido de Plaspy para todos los dispositivos.
4. Elija el transporte UDP o TCP si el UW1 requiere que seleccione un protocolo de transporte.
5. Aplique o guarde los cambios de configuración en la herramienta del fabricante o envíe los comandos SMS si está usando la configuración por SMS.
6. Reinicie el dispositivo si el fabricante o la herramienta lo exige para que los nuevos ajustes tengan efecto.
7. Valide que el dispositivo reporte a Plaspy comprobando la conectividad del equipo y las actualizaciones de posición en la plataforma Plaspy.

## Ejemplos de comandos de configuración

El UW1 admite varios métodos de configuración del fabricante, incluidos software del proveedor, comandos SMS, configuración por USB y actualizaciones OTA. Los comandos exactos y el método a utilizar dependerán de la revisión de firmware del UW1 y de las herramientas del proveedor que tenga.

Si usa la interfaz de comandos SMS o del fabricante, consulte la referencia oficial de comandos de CAREU para la sintaxis exacta de ajuste de dominio del servidor, IP del servidor, puerto y selección de transporte. Debido a que los comandos y la sintaxis varían según el firmware, esta guía no inventa cadenas de comando específicas. Use la herramienta del fabricante o el conjunto de comandos SMS para ingresar d.plaspy.com o 54.85.159.138 y establecer el puerto 8888, luego elija UDP o TCP si se requiere.

## Notas de configuración

- Las diferencias de firmware pueden cambiar los métodos de configuración disponibles y la sintaxis exacta de los comandos; siempre consulte la documentación de CAREU para el firmware de su dispositivo.
- Elegir TCP frente a UDP puede afectar el comportamiento de entrega y las características de retransmisión; seleccione la opción de transporte recomendada para su despliegue y pruebe ambos si es necesario.
- Plaspy utiliza el mismo puerto 8888 para todos los dispositivos y detectará automáticamente el protocolo del dispositivo al conectarse, por lo que debe concentrarse en la dirección de servidor y el transporte correctos.
- Si utiliza configuración por SMS o herramientas USB, asegúrese de aplicar los comandos en el orden que recomiende el fabricante y de reiniciar el dispositivo si es necesario.
- Para gestión remota OTA y basada en FTP, confirme la disponibilidad de la red y que las actualizaciones de firmware sean compatibles con su integración en Plaspy.

## Por qué usar Plaspy con esta configuración

Combinar el CAREU UW1 con Plaspy ofrece a las organizaciones seguimiento resiliente en tiempo real, reporte de telemetría y visibilidad de registros históricos en una plataforma centralizada. El diseño robusto del UW1, su conmutación celular y su gran capacidad de registro offline complementan la detección automática de protocolos de Plaspy y la ingestión centralizada de datos para mantener sus activos visibles en entornos exigentes.

Para obtener más información sobre Plaspy visite https://www.plaspy.com y para la documentación específica del dispositivo y la información de firmware verifique los detalles con el fabricante en https://www.systech-iot.com/. Las especificaciones del fabricante, los métodos de configuración y el comportamiento del firmware pueden cambiar con el tiempo, por lo que confirme las instrucciones actuales en los recursos oficiales de CAREU.
