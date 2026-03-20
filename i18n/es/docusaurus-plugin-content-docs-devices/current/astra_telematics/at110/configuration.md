---
slug: /astra_telematics/at110/configuration
id: at110-configuration
sidebar_label: Configuration
title: Astra Telematics - AT110 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar servidor y SMS del Astra Telematics AT110 para usar con Plaspy
keywords:
  - Configuración Astra Telematics AT110
  - Configuración AT110
  - AT110 Plaspy
  - Configuración servidor AT110
  - Configuración rastreador GPS Astra Telematics
  - Configuración SMS AT110
  - Configuración GPRS AT110
  - Configuración Plaspy rastreador GPS
  - Rastreo de vehículos AT110
  - Gestión de flotas AT110
---

# Astra Telematics - Configuración del AT110

Esta página describe el contexto público de configuración para usar el rastreador Astra Telematics AT110 con la plataforma Plaspy. Resume los ajustes y comandos públicos prácticos necesarios para apuntar un AT110 a los servidores de Plaspy y explica qué verificar antes de intentar la integración. Las indicaciones que siguen están pensadas para usuarios técnicos que preparan un rastreador para que sea visible en la plataforma y se basan en los comandos de configuración públicos y los detalles del servidor de Plaspy.

Plaspy utiliza ajustes de servidor compartidos para los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta. Los pasos exactos del fabricante pueden variar según la versión de firmware, la revisión del hardware, el tipo de instalación y las herramientas del proveedor usadas para configurar el AT110. Donde el AT110 permite configuración por SMS o GPRS, se indican esos métodos; confirme siempre las instrucciones específicas del dispositivo con la documentación del fabricante.

## Resumen de la configuración

El AT110 debe configurarse para enviar su ubicación y mensajes del dispositivo al endpoint y puerto compartidos de Plaspy. El proceso público de configuración generalmente implica proporcionar acceso de red (APN), indicar al rastreador la dirección del servidor de Plaspy y verificar que los reportes lleguen a la plataforma. Los comandos de ejemplo a continuación muestran un método común basado en SMS que algunos instaladores usan para establecer parámetros GPRS y la dirección del servidor.

- Configure el APN del dispositivo y las credenciales del APN si son necesarias para que el rastreador tenga conectividad de datos GPRS.
- Indique la dirección y el puerto del servidor de Plaspy para que el AT110 envíe la telemetría al endpoint correcto.
- Seleccione el modo de transporte (UDP o TCP) en el equipo o en la herramienta del proveedor si el dispositivo lo requiere.
- Aplique y guarde la configuración, luego reinicie el dispositivo cuando se solicite para activar los ajustes.
- Valide la conectividad confirmando que el equipo aparezca y reporte en Plaspy.

## Ajustes del servidor Plaspy

- Server domain: d.plaspy.com  
- Server IP: 54.85.159.138  
- Port: 8888  
- Transport: device may use UDP or TCP on port 8888  
- Plaspy automatically detects the tracker protocol when the device connects

Tenga en cuenta que Plaspy utiliza el mismo puerto para todos los dispositivos compatibles y se apoya en la detección automática de protocolos para identificar el protocolo del rastreador.

## Requisitos típicos antes de la configuración

- Un dispositivo AT110 con alimentación y la instalación y cableado adecuados.
- Una tarjeta SIM con servicio de datos activo y las configuraciones APN correctas para el operador.
- Acceso al método oficial de configuración de Astra Telematics para el AT110 (comandos SMS, software del proveedor o herramienta de configuración).
- Conocer los ajustes de servidor de Plaspy d.plaspy.com o 54.85.159.138 y el puerto 8888.
- Si usa configuración por SMS, poder enviar mensajes desde un número autorizado que el dispositivo acepte.
- Un plan para validar la conectividad en Plaspy tras la configuración, por ejemplo verificando el estado del dispositivo o las posiciones recientes.

## Cómo se conecta este rastreador a Plaspy

Cuando se configura para usar Plaspy, el AT110 envía posiciones y mensajes del dispositivo al endpoint y puerto compartidos de Plaspy. Plaspy ingiere y decodifica los mensajes del rastreador usando su detección automática de protocolo para mostrar la unidad en la plataforma.

- El rastreador utiliza datos GPRS para abrir una conexión a d.plaspy.com o 54.85.159.138 en el puerto 8888.
- El dispositivo puede configurarse para usar transporte UDP o TCP para esa conexión.
- Una vez conectado, las actualizaciones de ubicación y los eventos son reenviados a Plaspy y se vuelven visibles en la plataforma.
- Plaspy detecta el protocolo del rastreador automáticamente para aceptar conexiones de distintos modelos.
- Una configuración correcta permite el monitoreo y la generación de informes operativos del AT110 en Plaspy.

## Flujo de trabajo habitual de configuración

1. Acceda al método oficial de configuración de Astra Telematics para el AT110 (comandos SMS, herramienta del proveedor o utilidad de configuración).
2. Ingrese el servidor de Plaspy como el dominio d.plaspy.com o la dirección IP 54.85.159.138 en los ajustes de servidor del dispositivo.
3. Configure el puerto del servidor a 8888, que Plaspy utiliza para todos los dispositivos.
4. Seleccione UDP o TCP si el rastreador requiere elegir protocolo de transporte.
5. Configure y guarde los ajustes de APN y cualquier usuario o contraseña de APN necesarios para la conectividad de datos GPRS.
6. Aplique o guarde la configuración y reinicie el dispositivo si el procedimiento requiere un reinicio para activar los ajustes.
7. Valide que el AT110 reporte a Plaspy comprobando el estado del dispositivo y los datos de ubicación recientes en la plataforma Plaspy.

## Comandos de configuración de ejemplo

El AT110 puede configurarse enviando comandos SMS al dispositivo. Los siguientes comandos públicos, de uso común, se muestran en orden. Conserve los marcadores de posición y reemplácelos por sus valores de red cuando aplique.

- Set the operator APN
```
$APAD,{{apn}}
```
- Set the APN username (optional)
```
$APUN,{{apnu}}
```
- Set the APN password (optional)
```
$APPW,{{apnp}}
```
- Set the GPRS server IP for Plaspy
```
$IPAD,54.85.159.138
```
- Set the server port for Plaspy
```
$PORT,8888
```

Notas sobre los marcadores de posición:
- {{apn}} es la cadena APN del operador celular requerida para la conectividad de datos.
- {{apnu}} es el usuario del APN si su operador lo exige.
- {{apnp}} es la contraseña del APN si su operador la exige.

El AT110 también puede aceptar el servidor como nombre de dominio (d.plaspy.com) en las herramientas del proveedor o en los menús en lugar de la IP numérica. La selección de transporte (UDP o TCP) normalmente se ajusta en la herramienta del fabricante o en el menú del dispositivo cuando es necesario; no se proporcionaron comandos específicos de transporte en el conjunto público anterior.

## Notas de configuración

- Las revisiones de firmware y hardware pueden cambiar la sintaxis exacta de los SMS, los comandos disponibles y el flujo de configuración. Confirme los comandos con el manual del AT110 para su versión de firmware.
- El AT110 soporta comunicación basada en GPRS y el dispositivo puede configurarse vía SMS o mediante una herramienta de configuración del proveedor según su compra e instalación.
- Elija TCP o UDP según su red y la preferencia del instalador; Plaspy acepta ambos en el puerto compartido 8888 y realiza detección automática de protocolo.
- Usar el dominio d.plaspy.com o la IP 54.85.159.138 es aceptable; algunos instaladores prefieren la IP numérica en comandos SMS para evitar problemas de resolución DNS.
- Siempre guarde o aplique los ajustes y realice un reinicio del dispositivo si es necesario para asegurar que los nuevos parámetros se carguen.

## Por qué usar Plaspy con esta configuración

Configurar el Astra Telematics AT110 para reportar a Plaspy ofrece una forma directa de obtener visibilidad y monitoreo operativo desde una plataforma madura de rastreo de flotas o activos. Con Plaspy manejando la detección de protocolos y un endpoint de servidor compartido, los equipos pueden enfocarse en la recolección confiable de datos y en los flujos de trabajo de la flota, mientras reducen la complejidad de configuración por dispositivo.

Para obtener más información sobre Plaspy y cómo apoya la integración de dispositivos, visite https://www.plaspy.com. Para pasos de configuración específicos más recientes del dispositivo, detalles de firmware y la guía del fabricante, verifique las instrucciones en el sitio de Astra Telematics https://astratelematics.com/ ya que las especificaciones y métodos de configuración del proveedor pueden cambiar con el tiempo.
