---
slug: /reachfar/rf_v10/configuration
id: rf_v10-configuration
sidebar_label: Configuration
title: Reachfar - RF-V10 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el rastreador Reachfar RF-V10 con Plaspy incluyendo ajustes de servidor y flujo de instalación
keywords:
  - Configuración Reachfar RF-V10
  - Instalación Reachfar RF-V10
  - Configuración RF-V10 Plaspy
  - Instalación rastreador GPS Reachfar
  - Configuración servidor RF-V10
  - Integración rastreador Plaspy
  - Configuración rastreador GPS para motocicleta
  - Configuración GPRS RF-V10
  - Configuración control SMS RF-V10
  - Seguimiento de flotas RF-V10
---

# Reachfar - RF-V10 Configuración

Esta página describe el contexto de configuración pública para usar el rastreador GPS para motocicletas Reachfar RF-V10 con Plaspy. Reúne los ajustes prácticos del servidor y la guía de flujo de trabajo necesarios para apuntar las unidades RF-V10 a Plaspy y validar la conectividad, basándose en las capacidades GPRS y SMS documentadas por el fabricante y los requisitos del servidor de Plaspy.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador, mientras que los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor empleadas para la configuración. Use esta guía para preparar el RF-V10 para su integración con Plaspy y consulte la documentación de Reachfar para comandos o herramientas específicas del dispositivo.

## Visión general de la configuración

Configurar un RF-V10 para Plaspy prepara la unidad para enviar posiciones GPS y eventos de alarma a la plataforma centralizada Plaspy, habilitando visibilidad en tiempo real, notificaciones y reproducción histórica de trazas. El objetivo es establecer el destino de red y el transporte en el dispositivo, confirmar la conectividad por celular y verificar que la unidad aparezca en Plaspy.

- Apuntar el RF-V10 al endpoint del servidor de Plaspy para que los mensajes GPRS lleguen a la plataforma.
- Seleccionar el método de transporte soportado por el equipo y por Plaspy, UDP o TCP.
- Guardar y aplicar los ajustes en el dispositivo usando el método de configuración Reachfar disponible.
- Validar que los mensajes de GPS y alarmas lleguen a Plaspy y que las actualizaciones de ubicación aparezcan en el panel.
- Probar condiciones de alarma como vibración o batería baja para confirmar el reenvío de eventos.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte soportado UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador y utiliza el mismo puerto para todos los dispositivos compatibles

## Requisitos típicos antes de la configuración

- Un RF-V10 alimentado con la batería interna cargada o con alimentación del vehículo conectada e instalado según las instrucciones del proveedor.
- SIM celular activa con datos habilitados para que el dispositivo use GPRS y envíe mensajes.
- Acceso al método de configuración Reachfar que vaya a utilizar, como comandos SMS, la herramienta web o móvil del fabricante, o una utilidad de configuración USB/serial.
- Conocimiento del número maestro de control del dispositivo para control por SMS si va a usar SMS para aprovisionar los ajustes.
- Una cuenta en Plaspy y acceso a la plataforma para confirmar que el dispositivo aparece tras la configuración.
- Información básica sobre la versión de firmware o la revisión de hardware del dispositivo para seguir la guía del fabricante durante la puesta en marcha.

## Cómo se conecta este rastreador a Plaspy

El RF-V10 envía posiciones GPS y eventos de alarma por la red celular GPRS al endpoint y puerto configurados para que Plaspy pueda recibir e interpretar la telemetría. En Plaspy, el feed del dispositivo queda disponible para seguimiento en vivo, notificaciones de alarma y reproducción de trazas.

- Configure el dispositivo para reportar a d.plaspy.com o a 54.85.159.138 en el puerto 8888.
- Seleccione UDP o TCP como transporte si el equipo requiere una selección explícita.
- El RF-V10 reenvía fixes GPS y mensajes de alarma como vibración o batería baja por GPRS hacia Plaspy.
- Plaspy recibe los mensajes en el puerto compartido y detecta automáticamente el protocolo del dispositivo para su análisis y visualización.
- Una vez recibidos los mensajes, Plaspy ofrece visibilidad de ubicación, enrutamiento de alertas y almacenamiento histórico de trazas.

## Flujo de trabajo típico de configuración

1. Acceda al método o software oficial de configuración Reachfar para el RF-V10, como aprovisionamiento por SMS, la herramienta web del proveedor o la aplicación de configuración del dispositivo.
2. Localice la sección de ajustes de servidor o plataforma en la herramienta del fabricante donde se introduce el endpoint remoto.
3. Introduzca el servidor de Plaspy como d.plaspy.com o 54.85.159.138.
4. Establezca el puerto del servidor en 8888.
5. Si el dispositivo requiere seleccionar transporte, elija UDP o TCP según su preferencia de red o la guía del instalador.
6. Aplique o guarde la configuración en la herramienta y envíe los cambios a la unidad.
7. Reinicie el dispositivo si el fabricante recomienda un reboot para aplicar los ajustes de red.
8. Valide en Plaspy que el RF-V10 reporta posiciones GPS y eventos de alarma y que las ubicaciones en vivo se muestran en la plataforma.

## Comandos de ejemplo para la configuración

El RF-V10 admite múltiples vías de aprovisionamiento y los comandos exactos o los campos de la interfaz dependen del firmware Reachfar y del método de configuración que utilice. Algunos instaladores emplean cadenas de SMS para aprovisionamiento, otros usan una herramienta web o móvil. Independientemente del método, los valores básicos que debe suministrar son el servidor Plaspy y el puerto.

Cuando le pidan los ajustes de servidor, ingrese el endpoint y el puerto de Plaspy exactamente como se indica:
- Dominio o IP del servidor: d.plaspy.com o 54.85.159.138
- Puerto: 8888
- Transporte: UDP o TCP (seleccione si es necesario)

Como la sintaxis de comandos del fabricante varía, consulte la documentación de Reachfar o la interfaz de su proveedor para obtener el formato preciso de SMS o comando de configuración necesario para aplicar estos valores en unidades RF-V10.

## Notas de configuración

- Las diferencias de firmware y las revisiones de hardware pueden cambiar los nombres de campo exactos o el formato de los comandos SMS usados para el aprovisionamiento; confirme siempre la sintaxis correcta para su versión de dispositivo.
- Elija UDP o TCP según la preferencia del instalador y las características de la red; Plaspy soporta ambos y detecta automáticamente el protocolo en el servidor.
- Verifique el APN y el estado de registro celular con el proveedor de la SIM si el dispositivo no puede alcanzar d.plaspy.com o 54.85.159.138; la conectividad GPRS debe funcionar antes de que el reporte al servidor tenga éxito.
- Pruebe el reporte de alarmas y de batería baja después de la configuración para confirmar el reenvío de eventos a Plaspy además de las actualizaciones de posición.
- Mantenga registro del IMEI del dispositivo y del número maestro de control usado para aprovisionamiento por SMS para simplificar diagnósticos y control remoto.

## Por qué usar Plaspy con esta configuración

Usar Plaspy con el Reachfar RF-V10 centraliza el seguimiento de motocicletas, el manejo de alarmas y la reproducción de trazas históricas en una sola plataforma. Para operadores que gestionan pequeñas flotas o motocicletas individuales, configurar el RF-V10 para enviar datos a Plaspy ofrece visibilidad en tiempo real, notificaciones de alarma y un historial consultable de eventos que facilita la recuperación y la supervisión operativa.

Para conocer más sobre Plaspy y las funcionalidades de la plataforma, visite https://www.plaspy.com. Para pasos de configuración específicos del dispositivo, detalles de firmware y herramientas del fabricante para el RF-V10, verifique la información en el sitio de Reachfar https://www.reachfargps.com/ ya que los procedimientos del proveedor y el comportamiento del firmware pueden cambiar con el tiempo.
