---
slug: /ruptela/plug5/configuration
id: plug5-configuration
sidebar_label: Configuration
title: Ruptela - Plug5 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el Ruptela Plug5 con Plaspy usando servidor compartido y pasos prácticos
keywords:
  - Configuración Ruptela Plug5
  - Configuración Plug5 Plaspy
  - Configuración rastreador GPS Ruptela
  - Configuración servidor Plug5
  - Configuración gestión de flotas Plug5
  - Configuración plataforma GPS Plug5
  - Configuración rastreador Plaspy
  - Configuración dongle OBD Plug5
  - Integración Ruptela Plug5
  - Configuración telemática Plug5
---

# Ruptela - Configuración Plug5

Esta página contiene la información pública necesaria para usar el rastreador Ruptela Plug5 con Plaspy. Explica los ajustes del servidor compartido de Plaspy que usan los rastreadores compatibles y describe los pasos prácticos y las consideraciones para preparar un dongle OBD Plug5 para que reporte ubicación y telemetría del vehículo a la plataforma Plaspy.

Plaspy utiliza un único endpoint y puerto compartido para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos de configuración en el lado del fabricante para Plug5 pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor, por lo que esta guía se centra en los parámetros que debe configurar hacia Plaspy y en un flujo de trabajo conservador y práctico que puede aplicar antes de finalizar la integración del dispositivo.

## Resumen de la configuración

Preparar el Plug5 para integrarlo con Plaspy implica configurar el dispositivo para enviar su GNSS y telemetría OBD/CAN al endpoint de Plaspy y validar que los datos llegan correctamente a la plataforma. El objetivo es garantizar conectividad fiable, selección correcta del transporte y reporte consistente para que los vehículos sean visibles en los paneles de Plaspy.

- Configure el rastreador para que use el endpoint y puerto del servidor Plaspy para enrutar los datos a Plaspy
- Seleccione el transporte apropiado (UDP o TCP) si el dispositivo requiere una elección explícita
- Verifique la conectividad celular, el APN y la configuración del operador para que el dispositivo pueda alcanzar Plaspy
- Guarde y aplique la configuración del dispositivo y, si es necesario, reinicie el rastreador para activar los ajustes
- Confirme que el dispositivo aparece y reporta correctamente dentro de Plaspy para seguimiento y telemetría en tiempo real

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte compatible: UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador y todos los dispositivos usan el mismo puerto

## Requisitos típicos antes de la configuración

- Acceso al puerto OBD del vehículo e instalación física del dongle Plug5 o ubicación OBD compatible
- Dispositivo con alimentación y accesible para configuración, con la versión de firmware requerida para su despliegue
- Conectividad celular activa para la variante del dispositivo en uso (LTE M con fallback a 2G) y SIM o suscripción del operador válida según sea necesario
- Conocimiento del APN del operador y cualquier dato de autenticación de la SIM si su implementación requiere APN personalizados
- Acceso al método oficial de configuración de Ruptela o a herramientas de gestión como Ruptela Device Center o utilidades locales por USB/SMS
- Acceso administrativo a Plaspy para poder verificar el reporte y la visibilidad del dispositivo después de la configuración

## Cómo se conecta este rastreador a Plaspy

El Plug5 envía posiciones GNSS y telemetría del vehículo al endpoint de Plaspy. Cuando se configura con los ajustes de servidor de Plaspy, el dispositivo establecerá conectividad a través de redes celulares y enviará registros en vivo y en búfer al servidor y puerto compartidos de Plaspy.

- El dispositivo reporta ubicación y telemetría OBD/CAN al endpoint de Plaspy d.plaspy.com o 54.85.159.138
- Los datos se envían al puerto 8888 usando el transporte elegido durante la configuración (UDP o TCP)
- Plaspy detecta automáticamente el protocolo del rastreador para interpretar los mensajes entrantes
- Ante pérdida de conectividad, Plug5 almacena registros localmente y carga los datos almacenados cuando se restaura la conexión
- Una configuración exitosa hace que el dispositivo sea visible en Plaspy para seguimiento en tiempo real y reporte de eventos

## Flujo de trabajo común para la configuración

1. Acceda al método o software oficial de Ruptela apropiado para su dispositivo y firmware (por ejemplo Ruptela Device Center, herramienta de configuración por USB o comandos SMS si están soportados).
2. En los ajustes de servidor o GPRS, ingrese el dominio del servidor Plaspy d.plaspy.com o la IP 54.85.159.138.
3. Configure el puerto del servidor en 8888 como el puerto de destino para la telemetría.
4. Si el dispositivo requiere seleccionar el transporte, elija UDP o TCP según su política de red o preferencia del instalador.
5. Configure los parámetros de APN o del operador de la SIM necesarios para que el dispositivo establezca la conexión celular.
6. Aplique o guarde la configuración y reinicie el dispositivo si la herramienta de Ruptela o la documentación del equipo indican que es necesario para activar los ajustes.
7. Valide que el dispositivo empiece a reportar a Plaspy y que aparezca en su cuenta o vista de monitoreo en Plaspy.

## Comandos de configuración de ejemplo

Los comandos exactos y los procedimientos para Plug5 dependen de la herramienta de gestión de Ruptela y del firmware. La integración con Plaspy requiere establecer el endpoint y el puerto de Plaspy mediante las herramientas proporcionadas por el fabricante. Para Plug5, los canales de configuración comunes del fabricante incluyen Ruptela Device Center, configuración por USB o gestión OTA vía plataformas de Ruptela. Siga las instrucciones de Ruptela para el método elegido e ingrese el dominio o la IP de Plaspy y establezca el puerto en 8888.

## Notas de configuración

- Las variaciones de firmware pueden cambiar menús, nombres de campos o pasos requeridos; confirme siempre el procedimiento correcto para su versión de firmware.
- Plaspy soporta tanto UDP como TCP; elija el transporte que mejor se ajuste a sus requisitos de red y fiabilidad.
- Plaspy utiliza el mismo puerto 8888 para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, por lo que los valores críticos a configurar son el dominio o IP del servidor y el puerto.
- Para implementaciones a gran escala, utilice Ruptela Device Center o la plataforma de gestión de dispositivos de Ruptela para aplicar ajustes y realizar FOTA masivas cuando esté disponible.
- Verifique el APN y la configuración del operador celular con antelación para evitar retrasos en la conectividad durante el despliegue.

## Por qué usar Plaspy con esta configuración

Usar Plug5 con Plaspy permite a las flotas consolidar ubicación y telemetría vehicular en una sola plataforma. La forma OBD del Plug5 y su acceso profundo a datos del vehículo, junto con el enrutamiento al servidor de Plaspy, permiten centralizar monitoreo, alertas e informes para visibilidad operativa en tiempo real, gestión de combustible y análisis del comportamiento del conductor.

Para más información sobre Plaspy y cómo funciona con rastreadores compatibles como el Ruptela Plug5 visite https://www.plaspy.com. Para métodos de configuración específicos por dispositivo, comportamiento de firmware y guías del fabricante, verifique los detalles en el sitio de Ruptela https://ruptela.com/ ya que las especificaciones y los pasos de instalación del fabricante pueden cambiar con el tiempo.
