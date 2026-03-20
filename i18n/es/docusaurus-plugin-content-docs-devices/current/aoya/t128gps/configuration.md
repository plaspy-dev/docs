---
slug: /aoya/t128gps/configuration
id: t128gps-configuration
sidebar_label: Configuration
title: AoYa - T128GPS Configuration
sidebar_class_name: menu_item_tracker
description: Configure el AoYa T128GPS para usar con Plaspy mediante ajustes de servidor compartido y un flujo de configuración práctico
keywords:
  - configuración AoYa T128GPS
  - instalación T128GPS AoYa
  - configuración servidor AoYa T128GPS
  - configuración dispositivo Plaspy
  - configuración rastreador Plaspy
  - rastreador GPS T128GPS
  - configuración rastreador AoYa
  - configuración seguimiento vehicular
  - configuración seguimiento de activos
  - configuración GPS magnético
---

# AoYa - Configuración del T128GPS

Esta página describe el contexto público de configuración para usar el AoYa T128GPS con la plataforma de rastreo Plaspy. Resume los ajustes de servidor que Plaspy requiere, detalla los prerrequisitos habituales y ofrece un flujo de trabajo de alto nivel para aplicar esas configuraciones al rastreador y que así pueda reportar a Plaspy para su geolocalización y monitoreo.

Plaspy utiliza ajustes de servidor compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, mientras que los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. La documentación del T128GPS y los métodos de configuración del fabricante indican que el equipo puede configurarse por el canal propio del fabricante, incluidos comandos vía SMS; esta página resume esos pasos públicos sin reproducir la sintaxis específica de comandos del dispositivo.

## Visión general de la configuración

El objetivo de este proceso de configuración es preparar el T128GPS para que se comunique de forma fiable con Plaspy y aparezca como un dispositivo activo en la plataforma. Esto implica apuntar el rastreador al endpoint del servidor de Plaspy, confirmar los ajustes de transporte y validar que el equipo está reportando.

- Apuntar el dispositivo al endpoint del servidor de Plaspy para que los mensajes de ubicación y estado lleguen a la plataforma.
- Verificar que el T128GPS tenga la conectividad móvil necesaria y el APN del operador correctamente configurado cuando sea aplicable.
- Seleccionar el transporte de red (UDP o TCP) según lo soporte el dispositivo y la red.
- Guardar y aplicar los ajustes y confirmar que el rastreador es visible en Plaspy.
- Verificar el reporte continuo y ajustar según la ubicación de instalación y las condiciones de señal.

## Ajustes del servidor de Plaspy

- Dominio del servidor d.plaspy.com para configuración basada en DNS
- IP del servidor 54.85.159.138 como endpoint alternativo
- Puerto 8888 para las conexiones de los dispositivos
- Transporte compatible UDP o TCP según preferencia del dispositivo
- Plaspy detecta automáticamente el protocolo del rastreador y usa el mismo puerto para todos los dispositivos compatibles

## Requisitos típicos antes de la configuración

- Un equipo T128GPS cargado y operativo instalado según las indicaciones del fabricante.
- Acceso al método de configuración del dispositivo que provee AoYa, como la aplicación del fabricante, la herramienta web o los comandos SMS.
- Una SIM activa con plan de datos y la información correcta del APN del operador cuando se requiera conexión celular.
- Conocimiento de si el equipo debe usar UDP o TCP en la red que se va a emplear.
- Señal móvil funcional en el lugar de instalación para completar el registro inicial y las pruebas.

## Cómo se conecta este rastreador a Plaspy

El T128GPS envía sus mensajes de posición y estado al endpoint compartido del servidor de Plaspy para que el dispositivo aparezca en la plataforma para seguimiento y monitoreo operativo. Una vez configurado para usar el endpoint y el puerto de Plaspy, los mensajes entrantes son enrutados a la cuenta y al registro de dispositivo correspondientes mediante la detección de protocolo de Plaspy.

- El rastreador se configura para reportar a d.plaspy.com o a 54.85.159.138.
- Las comunicaciones se envían al puerto 8888, que Plaspy utiliza para todos los dispositivos compatibles.
- El transporte puede ser UDP o TCP según el dispositivo y las condiciones de la red.
- Plaspy detecta automáticamente el protocolo del rastreador y asocia los mensajes con el dispositivo correcto.
- Tras un reporte exitoso, el dispositivo queda visible en la plataforma Plaspy para monitorizar ubicación y estado.

## Flujo de configuración habitual

1. Acceda al método oficial de configuración de AoYa o al software que el fabricante proporcione, como su utilidad de configuración o el canal de configuración por SMS.
2. Ingrese la dirección del servidor de Plaspy usando d.plaspy.com o 54.85.159.138 como endpoint.
3. Configure el puerto del servidor en 8888 para que el dispositivo envíe datos al puerto de escucha de Plaspy.
4. Seleccione UDP o TCP para el transporte si el dispositivo requiere una elección explícita.
5. Guarde o aplique la configuración mediante la herramienta del fabricante o el método de confirmación correspondiente.
6. Valide que el dispositivo reporte a Plaspy y aparezca en su cuenta o lista de dispositivos.

## Notas de configuración

- Las versiones de firmware y las revisiones de hardware del fabricante pueden cambiar la forma en que se aplican los ajustes; siga la documentación vigente de AoYa para los pasos exactos.
- Cuando el dispositivo soporte tanto UDP como TCP, elija el transporte que mejor se adapte a la fiabilidad de su red y a la configuración de firewall.
- La configuración del modelo T128GPS indica que la puesta en marcha por SMS es una opción pública para este equipo; si utiliza la configuración por SMS, consulte o resuma los comandos en la documentación oficial en lugar de reproducir la sintaxis exacta aquí.
- Plaspy usa el mismo puerto para los dispositivos compatibles y realiza la detección automática de protocolo, lo que reduce las variaciones por dispositivo en el lado del servidor.
- Las mejores prácticas de instalación incluyen verificar el APN y la conectividad antes del montaje final y probar al aire libre para obtener recepción fiable de satélite y red móvil.

## Por qué usar Plaspy con esta configuración

Usar el AoYa T128GPS con Plaspy ofrece una forma sencilla de integrar rastreadores magnéticos y portátiles en una plataforma unificada de visibilidad de flota y activos. Al configurarlo para que reporte al endpoint y puerto compartidos de Plaspy, el rastreador puede monitorearse en tiempo real para ubicación y estado, simplificando el seguimiento, las alertas y la supervisión operativa.

Para obtener más información sobre Plaspy y cómo gestiona la conectividad de dispositivos, visite https://www.plaspy.com. Para las instrucciones específicas más recientes, notas de firmware y procedimientos del fabricante, verifique la información actual en el sitio web de AoYa http://www.aoyagps.com/.
