---
slug: /ulbotech/t376/configuration
id: t376-configuration
sidebar_label: Configuration
title: Ulbotech - T376 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del Ulbotech T376 para integrarlo con Plaspy y telemetría OBDII y GNSS
keywords:
  - configuración Ulbotech T376
  - instalación Ulbotech T376
  - configuración T376 Plaspy
  - configuración rastreador GPS T376
  - rastreador OBDII Ulbotech
  - configuración de servidor T376
  - seguimiento de flotas T376
  - rastreador compatible con Plaspy
  - instalación Ulbotech T376
  - configuración OBDII T376
---

# Ulbotech - Configuración del T376

Esta página documenta el contexto público de configuración para usar el Ulbotech T376 con la plataforma Plaspy. Resume los ajustes de servidor compartidos a los que debe apuntar el equipo, describe los pasos prácticos de preparación y validación, y explica cómo el T376 transmite telemetría OBDII y GNSS a Plaspy para mapeo en tiempo real e informes. Esta guía se enfoca en puntos de integración públicos y pasos prácticos para lograr visibilidad del dispositivo en Plaspy.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del tracker, pero los pasos exactos del lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Use este documento junto con el manual del dispositivo y las utilidades de configuración de Ulbotech al aplicar los ajustes en la unidad o durante el despliegue de flotas.

## Resumen de la configuración

El objetivo de este proceso es preparar el T376 para que informe de manera fiable la posición, la telemetría OBDII y los eventos a Plaspy. La configuración garantiza que el dispositivo sepa a dónde enviar sus datos, que la conectividad y los ajustes de APN sean correctos, y que Plaspy pueda ingerir el flujo para seguimiento en vivo y reproducción histórica.

- Apunte el rastreador al dominio o IP del servidor Plaspy y configure el puerto compartido de Plaspy para que la telemetría llegue a la plataforma.
- Confirme la selección del transporte si el dispositivo lo requiere, eligiendo UDP o TCP en el puerto de Plaspy.
- Valide la conectividad celular y Wi Fi, incluidos APN correctos y servicio de datos activo en la SIM.
- Aplique y guarde los ajustes en la herramienta de configuración de Ulbotech o mediante SMS, y reinicie el dispositivo si es necesario.
- Verifique que el T376 envíe posiciones GNSS y parámetros OBDII a Plaspy y confirme la visibilidad en la plataforma.

## Ajustes del servidor Plaspy

Use estos ajustes públicos de servidor Plaspy al configurar el T376 para compatibilidad con Plaspy:

- Dominio del servidor d.plaspy.com para el reporte del dispositivo
- Dirección IP del servidor 54.85.159.138 como endpoint alternativo
- Puerto 8888 que es el puerto compartido usado por todos los dispositivos en Plaspy
- Soporte de transporte UDP o TCP según la opción de configuración del dispositivo
- Plaspy detecta automáticamente el protocolo del tracker cuando el dispositivo reporta al endpoint configurado

## Requisitos típicos antes de configurar

- Un T376 alimentado e instalado o conectado al puerto OBDII con alimentación estable del vehículo
- Una micro USIM activa con plan de datos y ajustes APN correctos para el reporte celular
- Acceso al método oficial de configuración de Ulbotech, como la herramienta web del proveedor, utilidad de escritorio o comandos SMS documentados
- Conocimiento de si utilizará celular o Wi Fi para datos, para configurar el canal y el APN apropiados
- La revisión de firmware del dispositivo y cualquier nota de configuración proporcionada por el proveedor para esa versión
- Acceso a la cuenta de la plataforma Plaspy o al canal de soporte para validar la visibilidad del dispositivo después de la configuración

## Cómo se conecta este rastreador a Plaspy

El Ulbotech T376 envía posiciones GNSS, parámetros del vehículo OBDII y eventos de sensores al endpoint de Plaspy que usted configure. Plaspy ingiere el flujo de datos entrante para mapeo en tiempo real, alertas e informes. El dispositivo puede usar celular o Wi Fi según esté disponible y reportará al endpoint y puerto compartido de Plaspy.

- El rastreador reporta ubicación y telemetría OBDII a d.plaspy.com o 54.85.159.138 en el puerto 8888
- El transporte puede ser UDP o TCP según la configuración del dispositivo y las consideraciones de red
- Plaspy detecta automáticamente el protocolo del tracker, por lo que los paquetes estándar de reporte serán reconocidos
- Los datos enviados al endpoint de Plaspy permiten seguimiento en vivo, reproducción histórica e informes de eventos en la plataforma
- Después de la configuración, valide que lleguen los mensajes de latido, posición y OBDII a Plaspy para tener visibilidad completa

## Flujo de configuración habitual

1. Acceda al método oficial de configuración de Ulbotech o al software proporcionado para el T376, o utilice el flujo de configuración por SMS si está soportado.
2. En los ajustes de red del dispositivo, ingrese el servidor Plaspy d.plaspy.com o la IP 54.85.159.138 como endpoint de reporte.
3. Configure el puerto de reporte del dispositivo en 8888, que es el puerto compartido de Plaspy para todos los trackers compatibles.
4. Si el dispositivo requiere seleccionar transporte, elija UDP o TCP según su red y preferencia.
5. Ingrese o confirme los ajustes de APN y los parámetros de la SIM para que la unidad tenga conexión de datos celular activa, o configure Wi Fi según sea necesario.
6. Aplique o guarde la configuración y reinicie el dispositivo si el procedimiento de Ulbotech requiere un reinicio para activar los cambios.
7. Valide que el T376 reporte a Plaspy comprobando la llegada de telemetría y actualizaciones de posición en la plataforma.

## Ejemplos de comandos de configuración

Los comandos y el método exacto de configuración del Ulbotech T376 dependen de las herramientas del fabricante o la revisión de firmware. Ulbotech puede proporcionar una utilidad web, una herramienta de configuración de escritorio o un conjunto de comandos SMS para la configuración inicial. Debido a que los comandos difieren según el firmware y las versiones regionales, consulte la documentación oficial de Ulbotech o la interfaz de configuración suministrada con su dispositivo para la sintaxis y ejemplos precisos.

## Notas de configuración

- Las diferencias de firmware pueden cambiar las opciones de configuración disponibles y la sintaxis exacta de los comandos, por lo que confirme la revisión de firmware del T376 antes de aplicar los procedimientos.
- Elija TCP cuando necesite entrega orientada a conexión y UDP si prefiere menor latencia y menor overhead; pruebe ambos cuando sea posible, ya que el comportamiento de la red puede variar.
- Los ajustes de APN son necesarios para el reporte celular; tenga a mano las credenciales APN y el estado de la SIM durante la configuración.
- Si usa Wi Fi como canal de reporte, asegúrese de que la red permita alcanzar d.plaspy.com o 54.85.159.138 en el puerto 8888.
- Tome nota del IMEI del dispositivo y de cualquier cadena identificadora para poder vincular las conexiones entrantes con el activo correcto en Plaspy.

## Por qué usar Plaspy con esta configuración

Combinar el Ulbotech T376 con Plaspy brinda a las flotas acceso inmediato a ubicación en tiempo real, diagnóstico OBDII y monitoreo de eventos usando un único endpoint compartido de Plaspy. El factor de forma plug and play OBDII del T376, junto con GNSS robusto y comunicaciones de doble canal, ayuda a las organizaciones a capturar telemetría vehicular para seguridad, mantenimiento y eficiencia operativa.

Para saber más sobre Plaspy y cómo ingiere datos de dispositivos para mapeo, alertas y análisis de flota visite https://www.plaspy.com. Para los comandos específicos más recientes del dispositivo, comportamiento de firmware y detalles de configuración del fabricante, verifique la información en el sitio de Ulbotech http://www.ulbotech.com/ para que su despliegue utilice la guía oficial más actual.
