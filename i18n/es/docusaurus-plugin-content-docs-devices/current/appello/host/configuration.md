---
slug: /appello/host/configuration
id: host-configuration
sidebar_label: Configuration
title: Appello - Host Configuration
sidebar_class_name: menu_item_tracker
description: Configure el rastreador Appello Host para reportar a Plaspy con ajustes de servidor compartido y una lista de verificación breve
keywords:
  - Configuración Appello Host
  - Instalación Appello Host
  - Appello Host Plaspy
  - Configuración rastreador GPS Appello
  - Configuración rastreador para mascotas Appello
  - Configuración de servidor Host
  - Configuración Host en Plaspy
  - Configuración rastreador GPS en Plaspy
  - Configuración de plataforma de rastreo
  - Configuración de reporte de dispositivo
---

# Appello - Configuración Host

Esta página documenta el contexto público de configuración para usar el rastreador Appello Host con la plataforma Plaspy. Resume los ajustes de servidor compartidos que Plaspy utiliza y explica los pasos generales para apuntar un dispositivo Appello Host hacia Plaspy para que pueda reportar ubicación y estado. La información aquí sirve para la planificación de la configuración y se basa en prácticas públicas de instalación de dispositivos.

Plaspy emplea ajustes de servidor compartidos para dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando recibe datos. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor; el dispositivo Host puede admitir canales de configuración del fabricante como SMS o software del proveedor, los cuales deben utilizarse según la documentación vigente del equipo.

## Resumen de la configuración

El objetivo de esta configuración es preparar el Appello Host para que se comunique de forma fiable con Plaspy y aparezca en su cuenta. El proceso se centra en configurar el dispositivo para que informe al endpoint de servidor compartido de Plaspy y en confirmar que el dispositivo sea visible y reporte como se espera.

- Apunte el rastreador al endpoint del servidor de Plaspy para que pueda enviar telemetría y actualizaciones de ubicación.
- Configure el transporte y el puerto del dispositivo para que coincidan con los ajustes de Plaspy y guarde el cambio en el equipo.
- Asegúrese de que el dispositivo tenga un método de conectividad activo y la configuración del operador correcta para que pueda alcanzar Plaspy a través de la red móvil.
- Valide la conexión del dispositivo en Plaspy y confirme que la detección automática de protocolos haya reconocido el dispositivo.
- Use el método de configuración del fabricante (por ejemplo, la app del proveedor o SMS) para aplicar los ajustes y verificar que el reporte sea exitoso.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte compatible UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador

Estos valores son los ajustes públicos del servidor Plaspy usados para recibir datos de los rastreadores compatibles. Plaspy utiliza el mismo puerto para todos los dispositivos soportados y confía en la detección automática de protocolos para interpretar el tráfico entrante.

## Requisitos típicos antes de la configuración

- Confirme que el rastreador esté encendido y accesible para su configuración.
- Disponga de un método de conectividad móvil activo para el dispositivo y verifique que el servicio del operador esté habilitado.
- Tenga acceso al canal oficial de configuración del fabricante, como la app del proveedor o comandos por SMS según lo proporcione Appello.
- Anote la versión de firmware del dispositivo y cualquier nota de la versión del fabricante que afecte el flujo de configuración.
- Prepare la información identificativa del dispositivo (número de serie o ID del dispositivo) para confirmar su visibilidad en Plaspy después de la configuración.

## Cómo se conecta este rastreador a Plaspy

El Appello Host se configura para enviar su ubicación y datos del dispositivo al endpoint y puerto compartidos de Plaspy para que la plataforma pueda ingerir y presentar esa información. Una vez que el rastreador apunta a Plaspy, los mensajes entrantes se procesan y la detección automática de protocolos de Plaspy identifica el protocolo del dispositivo.

- Los datos del dispositivo se transmiten a d.plaspy.com (o a la IP de servidor equivalente) en el puerto 8888.
- El rastreador puede usar UDP o TCP como transporte, según las capacidades del dispositivo y la preferencia del instalador.
- Plaspy recibe los mensajes y aplica detección automática de protocolos para mapear el flujo entrante a un perfil de dispositivo.
- Tras una conexión exitosa, el dispositivo queda visible en Plaspy para monitoreo y uso operativo.
- Use el método de configuración del fabricante para ajustar la frecuencia de reporte y confirmar que el dispositivo está reportando a Plaspy.

## Flujo de trabajo común de configuración

1. Acceda al método de configuración oficial del fabricante o al software proporcionado por Appello (por ejemplo la app del proveedor o la configuración por SMS) para iniciar la puesta en marcha.
2. Introduzca la dirección del servidor Plaspy ya sea como el nombre de host d.plaspy.com o como la IP del servidor 54.85.159.138 en los ajustes de servidor del dispositivo.
3. Configure el puerto del servidor del dispositivo en 8888 según lo provisto por Plaspy.
4. Seleccione el protocolo de transporte (UDP o TCP) si el dispositivo requiere una selección explícita.
5. Guarde o aplique la configuración en el dispositivo utilizando el método del fabricante.
6. Valide que el dispositivo esté reportando a Plaspy y que la plataforma haya detectado el protocolo del rastreador y muestre la actividad esperada del equipo.

## Notas sobre la configuración

- Los canales de configuración del fabricante pueden incluir SMS o software del proveedor; cuando utilice SMS, siga las indicaciones del fabricante en lugar de copiar sintaxis de comandos de terceros.
- Las diferencias de firmware y las revisiones de hardware pueden cambiar los nombres de menús, los transportes soportados y el comportamiento; siempre confirme el flujo correcto para su revisión de dispositivo.
- TCP y UDP tienen características de confiabilidad distintas; elija el transporte que se ajuste a su red y a las recomendaciones del instalador.
- Plaspy usa el mismo puerto para todos los dispositivos compatibles y detectará automáticamente el protocolo del rastreador en los mensajes entrantes.
- Para conectividad dependiente del operador, asegúrese de proporcionar las configuraciones específicas del operador según la guía del dispositivo en lugar de apoyarse en plantillas genéricas.

## Por qué usar Plaspy con esta configuración

Usar el Appello Host con Plaspy brinda a empresas y propietarios de mascotas una forma estandarizada de recopilar ubicación y estado del dispositivo en una sola plataforma. Apuntar el rastreador al servidor y puerto compartidos de Plaspy permite visibilidad centralizada, incorporación de dispositivos sencilla y manejo automático de protocolos, de modo que usted pueda enfocarse en el monitoreo y las alertas en lugar de en detalles de bajo nivel del protocolo.

Para conocer más sobre Plaspy y las capacidades de la plataforma visite https://www.plaspy.com. Para obtener los detalles más recientes sobre la configuración por dispositivo, notas de firmware e instrucciones del fabricante, verifique la información vigente en el sitio oficial de Appello http://www.cnjeo.com/ y siga su documentación para los pasos exactos que aplican a su dispositivo y versión de firmware.
