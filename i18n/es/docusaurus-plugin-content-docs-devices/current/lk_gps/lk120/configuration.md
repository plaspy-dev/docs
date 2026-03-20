---
slug: /lk_gps/lk120/configuration
id: lk120-configuration
sidebar_label: Configuration
title: LK-GPS - LK120 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el LK-GPS LK120 con ajustes del servidor Plaspy y pasos prácticos para integración y conectividad
keywords:
  - configuración LK-GPS LK120
  - instalación LK-GPS LK120
  - configuración LK120 Plaspy
  - configuración rastreador GPS
  - configuración rastreador para mascotas
  - configuración GPS portátil
  - ajustes servidor Plaspy
  - integración plataforma GPS
  - guía instalación LK-GPS
  - configuración servidor rastreador
---

# LK-GPS - LK120 Configuración

Esta página describe el contexto público de configuración para usar el LK-GPS LK120 con Plaspy. El LK120 es un rastreador compacto portátil 2G/4G diseñado para mascotas y seguridad personal; ofrece actualizaciones de ubicación, alertas SOS y notificaciones de geocercas. A continuación encontrará los ajustes públicos de servidor de Plaspy y el proceso general para preparar el dispositivo y conectarlo a la plataforma.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta al endpoint de Plaspy. Los pasos de configuración del fabricante, las herramientas y los menús exactos pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las utilidades del proveedor; utilice esta guía como referencia pública de integración y verifique las instrucciones específicas del dispositivo con la documentación de LK-GPS.

## Resumen de la configuración

Este proceso prepara el LK120 para enviar su ubicación y sus eventos a la plataforma Plaspy, de modo que el dispositivo sea visible en los paneles, notificaciones e informes de Plaspy.

- Apunte el LK120 al endpoint del servidor Plaspy usando el dominio o la IP y el puerto compartido de Plaspy.
- Seleccione la opción de transporte disponible en el dispositivo (UDP o TCP) cuando sea requerido.
- Asegúrese de que el dispositivo tenga conexión celular activa y que los ajustes APN necesarios estén configurados para datos 2G/4G.
- Guarde y aplique la configuración, luego verifique que el dispositivo esté informando a Plaspy.
- Valide el funcionamiento de SOS, geocercas y reportes de movimiento en la plataforma Plaspy.

## Ajustes del servidor Plaspy

Use los siguientes ajustes públicos del servidor Plaspy al configurar el LK120. Todos los dispositivos en Plaspy usan el mismo puerto y Plaspy detectará automáticamente el protocolo del rastreador una vez que el dispositivo se conecte.

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol once the device connects

## Requisitos típicos antes de comenzar

- Batería del dispositivo completamente cargada o una fuente de energía confiable durante la configuración y el periodo de pruebas inicial.
- SIM celular activa con un plan de datos compatible con redes 2G/4G en su mercado.
- Acceso al método oficial de configuración de LK-GPS, como la herramienta web del fabricante, la aplicación móvil, comandos SMS o el software de configuración.
- Datos del APN y parámetros de red del operador de la SIM por si el dispositivo requiere configuración manual del APN.
- Acceso a los detalles del servidor Plaspy indicados arriba para poder introducir el dominio o la IP y el puerto compartido.
- Un área de prueba breve con recepción GPS suficiente para la verificación inicial.

## Cómo se conecta este rastreador a Plaspy

Cuando se configura para apuntar a Plaspy, el LK120 envía coordenadas GPS y mensajes de estado a través de la red celular al endpoint y puerto compartido de Plaspy. Plaspy ingiere esos mensajes y muestra la posición del dispositivo, eventos y telemetría en la plataforma.

- El rastreador reporta coordenadas GPS y marcas temporales al endpoint del servidor Plaspy d.plaspy.com o 54.85.159.138 en el puerto 8888.
- Los eventos del botón SOS se transmiten y procesan en Plaspy para notificaciones inmediatas.
- Los mensajes de entrada y salida de geocerca se envían a Plaspy para que la plataforma pueda activar alertas.
- Las actualizaciones de nivel de batería y estado de movimiento se remiten a Plaspy para su monitoreo y reglas de notificación.
- El transporte puede ser UDP o TCP según la configuración del dispositivo; Plaspy detecta automáticamente el protocolo entrante del rastreador.

## Flujo de configuración común

1. Acceda al método o software oficial de configuración de LK-GPS provisto por el fabricante.
2. Introduzca el dominio del servidor Plaspy d.plaspy.com o la IP del servidor 54.85.159.138 en el campo de servidor del dispositivo.
3. Configure el puerto del dispositivo en 8888 (Plaspy usa el mismo puerto para todos los dispositivos compatibles).
4. Elija UDP o TCP si el rastreador requiere selección de transporte.
5. Configure cualquier APN o parámetros de red necesarios para la tarjeta SIM y guarde los cambios.
6. Aplique o guarde la configuración y reinicie el dispositivo si las instrucciones del fabricante recomiendan un reinicio.
7. Valide que el dispositivo reporte a Plaspy comprobando la conectividad y la telemetría en la plataforma Plaspy.

## Ejemplos de comandos de configuración

Los comandos exactos de configuración y la forma de enviarlos varían según el firmware de LK-GPS y las herramientas del fabricante. Algunos dispositivos LK-GPS admiten configuración por comandos SMS, otros usan una aplicación de escritorio o móvil para configurar. Debido a que los métodos difieren por firmware y región, consulte la documentación oficial de LK-GPS para la sintaxis de comandos y ejemplos específicos de su unidad LK120.

## Notas de configuración

- Las revisiones de firmware y hardware pueden modificar la sintaxis de comandos y la ubicación de los menús; confirme siempre las instrucciones vigentes con LK-GPS.
- Elija UDP o TCP según la capacidad del dispositivo y el comportamiento de la red local. TCP suele ser más fiable para la entrega de mensajes, mientras que UDP es común para rastreo de baja latencia.
- Los ajustes APN deben coincidir con los requisitos del operador de la SIM; en algunos casos se requieren campos de usuario o contraseña del APN.
- Pruebe las alertas SOS, geocercoas y de batería baja después de la configuración para asegurarse de que los eventos lleguen a Plaspy según lo esperado.
- Recuerde que Plaspy utiliza un puerto compartido para todos los dispositivos y detectará automáticamente el protocolo del rastreador cuando el dispositivo se conecte.

## Por qué usar Plaspy con esta configuración

Configurar el LK-GPS LK120 para reportar a Plaspy centraliza la ubicación en tiempo real, los eventos SOS y la telemetría para facilitar el monitoreo y la respuesta rápida. Para dueños de mascotas, refugios o gestores de activos a pequeña escala, integrar rastreadores portátiles como el LK120 con Plaspy proporciona visibilidad consistente, alertas automatizadas y una plataforma única para el historial de eventos y notificaciones.

Para obtener más información sobre Plaspy y cómo soporta integraciones de dispositivos como el LK120 visite https://www.plaspy.com. Para instrucciones específicas del dispositivo, notas de firmware y herramientas del fabricante consulte LK-GPS en https://www.lk-gps.com para verificar los detalles actuales de configuración y referencias de comandos.
