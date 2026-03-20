---
slug: /homtecs/h20/configuration
id: h20-configuration
sidebar_label: Configuration
title: Homtecs - H20 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del router Homtecs H20 para conectarlo al servidor de la plataforma Plaspy
keywords:
  - Configuración Homtecs H20
  - Instalación Homtecs H20
  - Configuración servidor Homtecs H20
  - Configuración H20 Plaspy
  - Configuración telemetría Homtecs
  - Configuración router Homtecs
  - Configuración dispositivo Plaspy
  - Ajustes de red H20
  - APN y servidor Homtecs
  - Configuración M2M H20
---

# Homtecs - H20 Configuración

Esta página ofrece orientación pública para integrar el router 3G Homtecs H20 con la plataforma de rastreo Plaspy. Se centra en los ajustes compartidos del servidor Plaspy y en los pasos prácticos que puede seguir usando las herramientas del fabricante H20. El contenido aquí usa únicamente información pública y está pensado para ayudar a técnicos e integradores a preparar el H20 para una comunicación confiable con Plaspy.

Plaspy utiliza un único punto de acceso y puerto compartido para los dispositivos compatibles y detecta automáticamente el protocolo del equipo cuando recibe una conexión. Los métodos de configuración en el lado del fabricante para el H20 pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor, por lo que siempre debe verificar los pasos contra la documentación de Homtecs antes de aplicarlos.

## Resumen de la configuración

Este proceso prepara el Homtecs H20 para enviar telemetría y estado de conectividad a Plaspy y asegura que el equipo aparezca correctamente en la plataforma. El objetivo es apuntar el H20 al endpoint de Plaspy, confirmar transporte y puerto, y validar que el dispositivo informe tras un reinicio o una actualización de configuración.

- Configurar los ajustes de red del H20 para que alcance el endpoint del servidor Plaspy
- Introducir el dominio o IP del servidor Plaspy y establecer el puerto común de Plaspy
- Seleccionar el protocolo de transporte si el H20 lo requiere y guardar la configuración
- Reiniciar o reinitializar el router si el flujo del fabricante así lo exige
- Validar la conectividad y la visibilidad del dispositivo en Plaspy una vez que el H20 esté en línea

## Ajustes del servidor Plaspy

Use los siguientes ajustes públicos del servidor Plaspy al configurar el dispositivo desde el lado del fabricante o mediante la interfaz de gestión del H20:

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP
- Plaspy detecta automáticamente el protocolo del tracker cuando el dispositivo se conecta

Plaspy utiliza el mismo puerto para todos los dispositivos soportados y detectará automáticamente el protocolo apropiado cuando una conexión del dispositivo llegue al endpoint de Plaspy.

## Requisitos previos típicos

- Acceso al método de gestión del H20 provisto por Homtecs, como la interfaz web, CLI, SSH o una plataforma de gestión del proveedor
- Un H20 alimentado y conectado a la red con una SIM o conexión WAN operativa si se requiere celular
- Conocimiento del APN del dispositivo o de los ajustes SIM con IP fija si usa banda ancha móvil
- Credenciales administrativas para modificar parámetros de red y servidor en el H20
- Un plan para probar la conectividad y validar que el dispositivo alcance d.plaspy.com o 54.85.159.138 en el puerto 8888
- Copia de seguridad de la configuración existente y un método de recuperación en caso de necesitar revertir cambios

## Cómo se conecta este tracker a Plaspy

Cuando se configura para Plaspy, el H20 envía datos de conectividad y telemetría al endpoint y puerto compartidos de Plaspy. Plaspy recibe la conexión entrante y determina automáticamente el manejador de protocolo adecuado para que el dispositivo sea visible en la plataforma.

- El H20 envía paquetes salientes a d.plaspy.com o 54.85.159.138
- Todos los dispositivos se conectan al puerto compartido de Plaspy 8888
- Elija UDP o TCP en el H20 si el dispositivo requiere selección explícita de transporte
- Plaspy realiza la detección automática del protocolo cuando un dispositivo se conecta
- Tras la conexión exitosa, el dispositivo debería aparecer en la plataforma Plaspy y reportar estado y telemetría

## Flujo común de configuración

1. Acceda al método oficial de configuración Homtecs para el H20, como la interfaz web, CLI, SSH o la plataforma de gestión de Homtecs.
2. En los ajustes de servidor u host remoto introduzca d.plaspy.com o 54.85.159.138 como destino.
3. Establezca el puerto de destino en 8888, que es el puerto compartido de Plaspy usado por todos los dispositivos compatibles.
4. Si el H20 requiere seleccionar transporte, elija UDP o TCP según sus preferencias de red o la guía de Homtecs.
5. Aplique o guarde la configuración en la interfaz de gestión del H20.
6. Reinicie el dispositivo si el flujo de configuración o el firmware exigen un reboot para activar los nuevos ajustes del servidor.
7. Valide que el H20 está reportando a Plaspy comprobando la presencia del dispositivo y la telemetría en la plataforma Plaspy, o confirmando que las conexiones salientes llegan a d.plaspy.com o 54.85.159.138 en el puerto 8888.

## Ejemplo de comandos de configuración

El Homtecs H20 permite configurarse vía interfaz web, CLI, SSH y métodos de plataforma del proveedor. La sintaxis exacta de los comandos y la ubicación de los menús varían según el firmware y la herramienta de gestión. Dado que los comandos del fabricante y los formularios web cambian entre versiones, aquí no se incluyen comandos precisos. Use el método de gestión del H20 para:

- Apuntar el dispositivo a d.plaspy.com o 54.85.159.138
- Establecer el puerto de destino en 8888
- Elegir UDP o TCP si se requiere
- Guardar y aplicar los ajustes y luego reiniciar si es necesario

Consulte el manual de usuario del Homtecs H20 o la referencia CLI para ejemplos de comandos explícitos y los nombres exactos de los parámetros en su versión de firmware.

## Notas de configuración

- Las diferencias de firmware pueden cambiar nombres de parámetros y la ubicación de menús en la interfaz web o CLI del H20; verifique los campos exactos en el manual del dispositivo antes de aplicar ajustes.
- Seleccione UDP o TCP según las condiciones de la red y las recomendaciones de Homtecs. Plaspy admite ambos transportes y aceptará cualquiera en el puerto 8888.
- Si usa banda ancha móvil con un APN, asegúrese de que los ajustes APN estén configurados correctamente en el H20 para que pueda alcanzar d.plaspy.com o 54.85.159.138.
- Las SIM con IP fija y DNS dinámico son compatibles con la familia de hardware H20; confirme el tipo de SIM que está usando y configure el H20 en consecuencia.
- Mantenga siempre una copia de seguridad de la configuración existente y un método de recuperación conocido por si necesita revertir cambios.

## Por qué usar Plaspy con esta configuración

Usar el Homtecs H20 con Plaspy ofrece una forma sencilla de poner en línea un router industrial 3G con una plataforma de flota y telemetría. Apuntar el H20 al endpoint y puerto compartidos de Plaspy facilita un onboarding consistente de dispositivos, visibilidad centralizada y un reporte consolidado de eventos para equipos de operaciones y monitoreo remoto.

Para obtener más información sobre Plaspy y cómo gestiona la conectividad y la telemetría de dispositivos visite https://www.plaspy.com. Para los pasos de configuración más actuales específicos del Homtecs H20, notas de firmware y referencias de configuración verifique los detalles en el sitio oficial de Homtecs http://www.homtecsm2m.com/ ya que los métodos de configuración del fabricante y el comportamiento del firmware pueden cambiar con el tiempo.
