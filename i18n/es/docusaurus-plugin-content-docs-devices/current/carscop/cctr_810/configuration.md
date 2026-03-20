---
slug: /carscop/cctr_810/configuration
id: cctr_810-configuration
sidebar_label: Configuration
title: Carscop - CCTR-810 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el Carscop CCTR-810 con servidores Plaspy vía SMS y GPRS
keywords:
  - Configuración Carscop CCTR-810
  - Instalación Carscop CCTR-810
  - CCTR-810 Plaspy
  - Configuración rastreador GPS Carscop
  - Ajustes de servidor Plaspy
  - Configuración rastreador de vehículos
  - Configuración GPRS del rastreador
  - Comandos SMS de configuración
  - Configuración de seguimiento de flotas
  - Integración del rastreador Carscop
---

# Carscop - CCTR-810 Configuración

Esta página documenta el contexto público de configuración para usar el tracker Carscop CCTR-810 con Plaspy. Se centra en los ajustes y pasos prácticos necesarios para apuntar el dispositivo a los servidores de Plaspy y validar la conectividad. El contenido sintetiza la descripción del equipo y los comandos SMS de configuración públicos que se usan comúnmente con este modelo.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del tracker, aunque los pasos exactos del fabricante pueden variar según firmware, revisión de hardware, estilo de instalación y herramientas del proveedor. El CCTR-810 soporta configuración por GPRS y SMS e incluye una contraseña por defecto utilizada en los comandos SMS; esta guía combina esos comandos públicos con los valores de servidor de Plaspy para ayudarle a dejar el equipo enviando datos en línea.

## Resumen de configuración

Esta configuración prepara un Carscop CCTR-810 para reportar posición y estado a la plataforma Plaspy. El proceso normalmente establece el APN del equipo y el endpoint de servidor, preserva el comportamiento de conectividad y asegura que el tracker reenvíe los datos en buffer cuando se restablece la conexión.

- Configure el APN del dispositivo y las credenciales opcionales para que el tracker tenga acceso de datos GPRS.
- Apunte el tracker al endpoint del servidor de Plaspy usando el puerto compartido que emplean todos los dispositivos Plaspy.
- Elija el transporte de red si el equipo lo requiere: UDP o TCP, en el puerto 8888.
- Active modos de keepalive u online para que el tracker mantenga la conexión y reenvíe los puntos almacenados.
- Verifique que el tracker reporte a Plaspy y que las rutas registradas aparezcan en la plataforma.

## Ajustes de servidor Plaspy

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol

Tenga en cuenta que Plaspy utiliza el mismo puerto para todos los dispositivos compatibles y que la detección automática del protocolo simplifica la configuración en la plataforma.

## Requisitos previos típicos

- Una tarjeta SIM instalada y con saldo o plan de datos activo, con capacidad de SMS para la configuración inicial.
- Acceso a la interfaz de comandos SMS del tracker o a la herramienta de configuración del fabricante.
- La contraseña por defecto del dispositivo para la configuración por SMS en caso de no haber sido cambiada. En los ejemplos públicos se usa 123456.
- Conocimiento del APN del operador y, si aplica, del usuario y la contraseña del APN para habilitar GPRS.
- Una instalación y fuente de alimentación básica en el vehículo para que el tracker pueda arrancar y registrarse en la red móvil.
- Acceso a la cuenta o plataforma Plaspy para confirmar que el dispositivo aparece y reporta tras la configuración.

## Cómo se conecta este tracker a Plaspy

El CCTR-810 se configura para subir datos de ubicación en vivo y almacenados a Plaspy apuntando el dispositivo al endpoint y puerto compartidos de Plaspy. Una vez configurado con el APN correcto y los datos del servidor, el equipo utiliza GPRS para enviar actualizaciones de posición y eventos a Plaspy para su visualización y monitoreo.

- El tracker envía actualizaciones de ubicación al endpoint de Plaspy en el puerto 8888.
- El equipo puede reenviar las rutas almacenadas cuando se restablece la conectividad de red.
- Los eventos como subida por parada, ACC apagado y alarmas llegarán al endpoint de Plaspy para su procesamiento.
- Plaspy recibe los mensajes del dispositivo y detecta automáticamente el protocolo, por lo que la configuración en la plataforma es mínima.
- El transporte puede ser UDP o TCP según el firmware del dispositivo y la elección del instalador.

## Flujo típico de configuración

1. Acceda al método oficial de configuración Carscop o a la interfaz de comandos SMS proporcionada por el fabricante.
2. Asegúrese de que el tracker tenga energía, una SIM con datos operativa y que usted conozca los datos del APN.
3. Configure el APN y, si corresponde, el usuario y la contraseña del APN en el dispositivo.
4. Ingrese d.plaspy.com o la IP del servidor Plaspy 54.85.159.138 en la configuración de servidor GPRS del equipo.
5. Establezca el puerto en 8888 y elija UDP o TCP si el dispositivo requiere seleccionar el transporte.
6. Aplique o guarde la configuración y reinicie el equipo si el fabricante lo indica.
7. Valide que el tracker reporte a Plaspy y que las posiciones en vivo o el historial reenvíado sean visibles en la plataforma.

## Ejemplos de comandos de configuración

El Carscop CCTR-810 puede configurarse mediante comandos SMS. Los siguientes comandos públicos provienen del ejemplo del fabricante. La contraseña por defecto del dispositivo en estos ejemplos es 123456. Use estos comandos en el orden mostrado para la configuración inicial cuando corresponda.

- Optional initial factory reset when starting from unknown state

```
RESET*123456
```

- Set the time zone to UTC 0

```
TIMEZONE*123456*+00
```

- Set the operator APN
  - Replace {{apn}} with your mobile operator APN

```
APN*123456*{{apn}}
```

- Set APN username and password if required
  - Replace {{apnu}} and {{apnp}} with your APN username and APN password
  - Send only if your operator requires username and password

```
USERNAME*123456*{{apnu}}*{{apnp}}
```

- Set the GPRS server to the Plaspy server IP and port
  - This sets reporting to Plaspy using the public IP and port 8888

```
IP*123456*54.85.159.138,8888
```

- Keep the tracker online so it maintains connectivity behavior

```
KEEPONLINE*123456
```

Notas sobre marcadores de posición
- {{apn}} es la cadena APN del operador móvil necesaria para GPRS.
- {{apnu}} es el usuario APN cuando el operador lo exige.
- {{apnp}} es la contraseña APN cuando el operador lo exige.

Si su instalador prefiere usar el nombre de dominio en lugar de la IP y el firmware del dispositivo lo soporta, ingrese d.plaspy.com en el campo IP o servidor donde esté permitido. De lo contrario use la IP de servidor y el puerto proporcionados.

## Notas de configuración

- Las diferencias de firmware o revisiones de hardware pueden cambiar la sintaxis exacta de los SMS o los comandos disponibles. Verifique la sintaxis contra el manual del dispositivo para su versión de firmware.
- El CCTR-810 soporta la configuración vía SMS en ejemplos públicos, lo que resulta útil para instalaciones remotas o en campo sin herramientas de PC.
- Elija UDP o TCP según la preferencia del instalador y las capacidades del firmware del equipo. Ambos funcionan con Plaspy en el puerto 8888.
- Los comandos KEEPONLINE o keepalive ayudan al dispositivo a mantener la sesión y a reenviar puntos almacenados cuando vuelve la conectividad.
- Siempre respete la contraseña del dispositivo en los comandos SMS y cámbiela sólo si su instalación requiere una nueva contraseña y la documenta.

## Por qué usar Plaspy con esta configuración

Usar el Carscop CCTR-810 con Plaspy ofrece a las organizaciones una forma sencilla de recopilar datos de ubicación y eventos de vehículos para monitoreo y control operativo. La capacidad del dispositivo para registrar trayectos sin conexión y reenviarlos al restablecer la conexión se complementa bien con la detección automática de protocolos y el endpoint consistente de Plaspy, lo que permite un flujo de datos fiable hacia la plataforma.

Learn more about Plaspy and platform features at https://www.plaspy.com. Please verify device specific setup methods, firmware behavior, and other manufacturer details on the official Carscop site http://www.carscop.com/ as specifications and commands can change over time.
