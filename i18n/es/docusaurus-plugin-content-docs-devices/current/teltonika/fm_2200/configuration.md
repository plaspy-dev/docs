---
slug: /teltonika/fm_2200/configuration
id: fm_2200-configuration
sidebar_label: Configuration
title: Teltonika - FM 2200 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el Teltonika FM 2200 con Plaspy, incluye ajustes de servidor y comandos de ejemplo
keywords:
  - Configuración Teltonika FM 2200
  - Instalación Teltonika FM 2200
  - Configuración servidor FM 2200
  - Configuración Plaspy FM2200
  - Configuración rastreador GPS Teltonika
  - Configuración software rastreo FM 2200
  - Guía Teltonika FM2200
  - Configuración plataforma FM 2200
  - Rastreo vehicular FM 2200
  - Configuración dispositivo Plaspy
---

# Teltonika - Configuración FM 2200

Esta página describe el contexto de configuración público para usar el rastreador Teltonika FM 2200 con Plaspy. Consolida los ajustes de servidor prácticos, los pasos preparatorios y un comando de ejemplo que se utiliza comúnmente para apuntar un equipo FM 2200 a la plataforma Plaspy. Utilice esta guía para dejar su dispositivo listo para reportar y ser visible en Plaspy, manteniendo en cuenta siempre las instrucciones del fabricante.

Plaspy emplea ajustes de servidor compartidos para todos los rastreadores compatibles y detecta automáticamente el protocolo del rastreador en las conexiones entrantes. Los pasos exactos en el equipo pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El FM 2200 admite comunicación GSM GPRS y métodos de configuración por USB, por lo que puede elegir el método que mejor se ajuste a su instalación y capacidades de firmware.

## Resumen de la configuración

El objetivo de este proceso es preparar el FM 2200 para que se comunique de forma fiable con Plaspy, permitiendo seguimiento en tiempo real y envío de eventos. El comando de ejemplo que se muestra a continuación demuestra cómo establecer el APN y los valores del servidor Plaspy en una sola operación por lotes si su equipo acepta SMS u otros comandos de parámetros.

- Apuntar el dispositivo al endpoint compartido de Plaspy para que los datos lleguen a su cuenta Plaspy
- Asegurar los ajustes correctos de APN y conectividad para que el FM 2200 use GPRS y envíe datos
- Establecer el transporte y el puerto del dispositivo para que el rastreador abra sesiones a Plaspy en el puerto esperado
- Validar que el dispositivo reporte y sea visible en Plaspy después de la configuración
- Usar herramientas del fabricante o USB cuando se requiera configuración específica de firmware

## Ajustes del servidor de Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte disponible para UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador en las conexiones entrantes

## Requisitos habituales antes de la configuración

- Un FM 2200 con alimentación y acceso administrativo para modificar parámetros del dispositivo
- Una tarjeta SIM activa y credenciales de APN correctas para datos móviles cuando aplique
- Acceso al método de configuración del fabricante, como comandos SMS, herramienta de configuración por USB o software de Teltonika
- Conocimientos básicos sobre si su instalación prefiere transporte UDP o TCP
- Un equipo o teléfono capaz de enviar SMS si piensa usar configuración por SMS
- Confirmación de la versión de firmware del dispositivo para seguir las instrucciones del fabricante adecuadas

## Cómo se conecta este rastreador a Plaspy

El FM 2200 envía ubicación y telemetría del dispositivo a la plataforma Plaspy usando sesiones estándar TCP o UDP sobre la red móvil. Configurar el dispositivo para apuntar a Plaspy garantiza que las actualizaciones de ubicación, los informes de estado y los disparadores de eventos sean visibles en la plataforma.

- El rastreador se configura para reportar al endpoint y puerto compartidos de Plaspy
- Las sesiones de datos usan UDP o TCP según el transporte seleccionado
- Plaspy recibe el tráfico del dispositivo en el puerto 8888 para todos los dispositivos compatibles
- Una vez conectado, Plaspy identifica automáticamente el protocolo del rastreador y analiza los mensajes entrantes
- Los eventos y las posiciones quedan disponibles para monitoreo e informes históricos en Plaspy

## Flujo común de configuración

1. Acceda al método de configuración oficial del fabricante o al software para el FM 2200, como la herramienta de Teltonika, conexión USB NMEA o la interfaz de comandos SMS
2. Introduzca la dirección del servidor Plaspy como d.plaspy.com o la IP numérica del servidor 54.85.159.138 en el parámetro de servidor del dispositivo
3. Establezca el puerto del dispositivo a 8888, que es el puerto que Plaspy utiliza para todos los dispositivos
4. Elija UDP o TCP como transporte si el equipo requiere seleccionar el transporte
5. Configure el APN y los datos de autenticación para que el rastreador pueda establecer una conexión de datos GPRS
6. Aplique o guarde la configuración mediante la herramienta del fabricante o envíe el comando SMS por lotes de configuración
7. Reinicie el dispositivo si el firmware o la herramienta lo requieren
8. Verifique que el dispositivo reporte a Plaspy y aparezca visible en la plataforma

## Ejemplo de comandos de configuración

El FM 2200 puede aceptar comandos de parámetros por lotes para una configuración rápida. El comando público común usado para establecer el APN y los detalles del servidor Plaspy se muestra a continuación. Mantenga los marcadores de posición tal como aparecen y reemplácelos con sus credenciales de APN de red.

- Comando por lotes para la configuración básica

```text
setparam 2001:[apn];2002:[apnu];2003:[apnp];2004:d.plaspy.com;2005:8888;2006:1
```

Explicación de los marcadores de posición y campos

- [apn] es el nombre del APN de su operador de red móvil
- [apnu] es el usuario del APN si su operador lo requiere; de lo contrario, déjelo en blanco
- [apnp] es la contraseña del APN si su operador lo requiere; de lo contrario, déjelo en blanco
- 2004 establece el dominio del servidor a d.plaspy.com, que es el servidor de Plaspy
- 2005 establece el puerto en 8888 que usa Plaspy para todos los dispositivos
- 2006 puede ser una bandera de transporte o habilitación según el firmware del FM 2200; consulte el mapeo oficial de parámetros en la documentación de Teltonika para confirmar su significado

Si su equipo acepta comandos SMS, envíe el comando como SMS desde un número autorizado. Si utiliza USB o una herramienta de configuración, introduzca los mismos valores de parámetro a través de esa interfaz.

## Notas de configuración

- Las diferencias de firmware pueden cambiar números de parámetros o la sintaxis de comandos; consulte el manual del Teltonika FM 2200 para los mapeos de parámetros que correspondan a su versión de firmware
- Elija TCP o UDP según la fiabilidad de la red y las preferencias de su plataforma: TCP suele ser más resistente en redes inestables, mientras que UDP puede ser más eficiente en algunas configuraciones
- La configuración por SMS es un método común para instalaciones remotas, pero requiere que la lista de números autorizados del dispositivo esté configurada
- USB y las herramientas del fabricante ofrecen una forma más segura de verificar y guardar ajustes cuando tiene acceso directo al dispositivo
- Siempre conserve una copia de la configuración original y documente los cambios para poder revertirlos si es necesario

## Por qué usar Plaspy con esta configuración

Usar el FM 2200 con Plaspy brinda a las organizaciones una forma sencilla de recopilar datos de ubicación y eventos de un rastreador Teltonika muy usado. Los ajustes de servidor compartidos de Plaspy simplifican la provisión porque se usa el mismo puerto y endpoint en los dispositivos compatibles, y Plaspy detecta automáticamente el protocolo del rastreador al conectarse.

Para obtener más información sobre Plaspy visite https://www.plaspy.com. Para los métodos de configuración específicos del dispositivo, el comportamiento del firmware y los detalles de parámetros más actuales, verifique la información en el sitio del fabricante https://www.teltonika-gps.com/ que puede actualizarse con mayor frecuencia que las guías de terceros.
