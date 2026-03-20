---
slug: /astra_telematics/at242/configuration
id: at242-configuration
sidebar_label: Configuration
title: Astra Telematics - AT242 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del Astra Telematics AT242 para apuntar el dispositivo a los servidores de Plaspy con ejemplos de comandos SMS
keywords:
  - Configuración Astra Telematics AT242
  - Configuración AT242 para Plaspy
  - Configuración de servidor AT242
  - Guía de configuración Astra Telematics
  - Configuración rastreador GPS AT242
  - Configuración de dispositivo Plaspy
  - Configuración de software de rastreo AT242
  - Configuración plataforma GPS AT242
  - Rastreo de flotas AT242
  - Configuración de dispositivo telemático
---

# Astra Telematics - Configuración del AT242

Esta página describe el contexto público de configuración para usar el Astra Telematics AT242 con Plaspy. Se concentra en los pasos prácticos y los ajustes públicos necesarios para apuntar el rastreador a los servidores de Plaspy y validar que el equipo reporte correctamente. Utilice esta guía junto con la documentación de usuario e instalación del AT242 para detalles específicos del dispositivo.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, aunque los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El AT242 admite métodos de configuración OTA y local, y puede configurarse mediante comandos SMS, ajustes de APN del operador o la herramienta de configuración del proveedor según la instalación y el firmware.

## Resumen de la configuración

El objetivo de la configuración es preparar el AT242 para comunicarse de forma fiable con Plaspy, validar la conectividad y garantizar que el dispositivo aparezca en la plataforma Plaspy para seguimiento en tiempo real y telemetría. Normalmente esto implica configurar las credenciales APN, apuntar el rastreador al endpoint y puerto de Plaspy, y confirmar los ajustes de transporte/protocolo si el dispositivo lo requiere.

- Configure el APN del dispositivo y, opcionalmente, el usuario/clave APN para que el rastreador tenga acceso a datos móviles.
- Apunte el rastreador al dominio o IP del servidor de Plaspy para que posiciones y telemetría se envíen a la plataforma.
- Configure el dispositivo para usar el puerto 8888, que Plaspy utiliza para todos los dispositivos y servicios.
- Seleccione UDP o TCP como transporte si el equipo lo solicita; Plaspy soporta ambos y detecta el protocolo automáticamente.
- Valide la conectividad y confirme que el AT242 reporte posiciones y eventos al servidor de Plaspy.

## Ajustes públicos de Plaspy

Use los siguientes ajustes públicos de Plaspy al configurar el AT242. Estos valores son el endpoint y puerto compartidos que Plaspy utiliza para dispositivos compatibles:

- Server domain: d.plaspy.com
- Server IP: 54.85.159.138
- Port: 8888
- Transport: UDP or TCP are supported; select the transport required by your device or network
- Plaspy automatically detects the tracker protocol so devices can use either standard protocols supported by the AT242

## Requisitos típicos antes de comenzar

- Un AT242 con alimentación, instalado o accesible para configuración y pruebas
- Una SIM celular válida con datos habilitados y las credenciales APN correctas del operador móvil
- Acceso al método de configuración del fabricante soportado por el dispositivo (comandos SMS, herramienta del proveedor o portal de configuración)
- Información básica del entorno de red, por ejemplo si su operador o firewall prefiere UDP o TCP
- Una cuenta Plaspy o instrucciones de aprovisionamiento para confirmar que el dispositivo sea visible en la plataforma

## Cómo se conecta este rastreador a Plaspy

Al estar configurado, el AT242 envía posiciones GNSS y telemetría a través del enlace celular al endpoint y puerto compartidos de Plaspy. Plaspy ingiere los datos del dispositivo y los pone a disposición para seguimiento en tiempo real, alertas e informes.

- El AT242 reporta posiciones y eventos a d.plaspy.com o 54.85.159.138 en el puerto 8888
- La telemetría del dispositivo, como eventos de entradas/salidas, acelerómetro y señales de manipulación, se transmite a Plaspy
- El transporte puede ser UDP o TCP según la configuración del dispositivo y las limitaciones de red
- Plaspy detecta automáticamente el protocolo del dispositivo y procesa los mensajes entrantes para mostrarlos y generar alertas
- Una configuración exitosa hace que el dispositivo aparezca en Plaspy y envíe actualizaciones regulares

## Flujo de trabajo típico de configuración

1. Acceda al método oficial de configuración de Astra Telematics para el AT242 (SMS, herramienta del proveedor o configurador web/USB) según la documentación del fabricante.
2. Introduzca el endpoint del servidor Plaspy usando d.plaspy.com o la dirección IP 54.85.159.138 en los ajustes del dispositivo.
3. Establezca el puerto del servidor en 8888. Todos los dispositivos de Plaspy usan el mismo puerto.
4. Si el equipo solicita seleccionar el transporte, elija UDP o TCP según la política de su red o su preferencia.
5. Configure el APN y cualquier usuario/clave APN necesario para que el dispositivo pueda establecer sesión de datos móviles.
6. Guarde o aplique la configuración y reinicie el equipo si el método o el firmware requieren reinicio para que los cambios surtan efecto.
7. Valide que el AT242 reporte a Plaspy comprobando la conectividad del dispositivo y las posiciones en vivo en su cuenta Plaspy o monitorizando los mensajes entrantes en el servidor.

## Comandos de configuración de ejemplo

El AT242 puede configurarse enviando comandos SMS. Los siguientes comandos públicos se encuentran en la guía del fabricante. Conserve los marcadores de posición cuando inserte sus valores de operador.

- Establecer el APN del operador
```text
$APAD,{{apn}}
```
Reemplace {{apn}} por el nombre del APN de su operador.

- (Opcional) Establecer el usuario del APN
```text
$APUN,{{apnu}}
```
Reemplace {{apnu}} por el usuario del APN si su operador lo requiere.

- (Opcional) Establecer la contraseña del APN
```text
$APPW,{{apnp}}
```
Reemplace {{apnp}} por la contraseña del APN si su operador lo requiere.

- Establecer el servidor GPRS (IP del servidor Plaspy)
```text
$IPAD,54.85.159.138
```

- Establecer el puerto del servidor (Plaspy usa el mismo puerto para todos los dispositivos)
```text
$PORT,8888
```

Notas sobre estos comandos:
- Estos comandos SMS se envían en el orden mostrado cuando se usa SMS para la configuración. Los comandos de usuario y contraseña APN son opcionales y solo necesarios si su operador exige autenticación.
- Si su despliegue o firmware permite usar d.plaspy.com en lugar de la dirección IP, puede usar el dominio d.plaspy.com en la herramienta del proveedor o en el portal de configuración cuando se acepten nombres de dominio.
- El AT242 puede ofrecer ajustes adicionales para seleccionar el transporte. Use la herramienta de configuración del proveedor o la documentación para elegir UDP o TCP cuando sea necesario.

## Notas de configuración

- Las diferencias de firmware pueden cambiar el formato exacto de los comandos o los ajustes disponibles; verifique los comandos con la guía de usuario del AT242 correspondiente a su versión de firmware.
- La configuración por SMS es habitualmente compatible para la puesta en marcha, pero las herramientas del proveedor o una interfaz local USB/web pueden ofrecer una experiencia de configuración más completa.
- Confirme las credenciales APN con el operador móvil si el dispositivo no logra obtener conexión de datos.
- Elija UDP o TCP según los requisitos de la red; Plaspy soporta ambos y detecta el protocolo automáticamente al recibir los mensajes.
- Siempre guarde y aplique los ajustes en la herramienta de configuración oficial y siga cualquier procedimiento de reinicio recomendado por Astra Telematics.

## Por qué usar Plaspy con esta configuración

Usar el AT242 con Plaspy proporciona una forma simple de recolectar ubicación y telemetría confiable desde un rastreador robusto diseñado para entornos exigentes. Apuntar el dispositivo al endpoint y puerto compartidos de Plaspy permite visibilidad en tiempo real, alertas basadas en eventos e informes históricos que ayudan a los operadores de flota y activos a gestionar operaciones, seguridad y mantenimiento.

Para conocer más sobre Plaspy y su integración con dispositivos como el AT242 visite https://www.plaspy.com. Para los comandos de configuración más recientes, notas de firmware y guía de instalación del dispositivo, verifique siempre los detalles actuales en el sitio del fabricante https://astratelematics.com/.
