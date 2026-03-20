---
slug: /astra_telematics/at502/configuration
id: at502-configuration
sidebar_label: Configuration
title: Astra Telematics - AT502 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el rastreador Astra Telematics AT502 y conectarlo al servidor Plaspy
keywords:
  - Configuración Astra Telematics AT502
  - Configuración AT502
  - Integración AT502 Plaspy
  - Configuración Astra Telematics
  - Configuración rastreador GPS
  - Configuración rastreador de activos
  - Configuración servidor de seguimiento
  - Configuración rastreador Plaspy
  - Comandos GPRS para rastreador
  - Configuración BLE rastreador
---

# Astra Telematics - Configuración del AT502

Esta página documenta la información pública de configuración para usar el Astra Telematics AT502 con Plaspy. Se centra en los ajustes y comandos publicados por el fabricante necesarios para apuntar el dispositivo al servidor Plaspy, de modo que las posiciones y la telemetría lleguen a su cuenta de Plaspy. Cuando estén disponibles, se incluyen los comandos SMS del AT502 publicados por el fabricante para configurar APN y servidor.

Plaspy usa ajustes de servidor compartidos para los rastreadores compatibles y detecta automáticamente el protocolo del dispositivo, pero los pasos exactos por parte del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El AT502 soporta configuración por SMS y BLE además de reporte por datos móviles, por lo que debe seguir la guía del fabricante para su revisión de hardware mientras aplica las configuraciones de servidor Plaspy que se describen a continuación.

## Resumen de la configuración

Esta configuración prepara el AT502 para enviar posiciones GNSS y telemetría del dispositivo a Plaspy. El objetivo es configurar los ajustes de red, dirigir el dispositivo al endpoint y puerto del servidor Plaspy y verificar que el dispositivo sea visible en la plataforma Plaspy.

- Configure las credenciales APN del dispositivo para que use datos móviles y alcance Plaspy.
- Establezca la dirección y el puerto del servidor GPRS para dirigir los reportes a la infraestructura de Plaspy.
- Seleccione el protocolo de transporte si el dispositivo requiere elegir entre UDP o TCP.
- Valide la conectividad y confirme que el dispositivo aparezca y reporte en Plaspy.
- Use BLE o SMS según lo provea el fabricante para la configuración in situ y la resolución de problemas.

## Ajustes del servidor Plaspy

Use los siguientes ajustes públicos del servidor Plaspy al configurar el AT502:

- server domain d.plaspy.com
- server IP 54.85.159.138
- port 8888
- transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol

Todos los dispositivos en Plaspy usan el mismo puerto, y la plataforma intentará identificar automáticamente el protocolo del dispositivo cuando el rastreador empiece a reportar.

## Requisitos habituales antes de la configuración

- Un dispositivo AT502 cargado y operativo con un método de configuración accesible (SMS o BLE).
- Una SIM activa o perfil eSIM con plan de datos y la información APN del operador en su región.
- Acceso a la lista de comandos SMS del fabricante o a la herramienta BLE para el AT502.
- Conocimiento de si el dispositivo requiere selección explícita de UDP o TCP durante la configuración.
- Una cuenta de Plaspy y la posibilidad de verificar el reporte del dispositivo en la consola de Plaspy.
- Herramientas básicas para reiniciar o hacer ciclo de energía del dispositivo tras la configuración si fuera necesario.

## Cómo se conecta este rastreador a Plaspy

Una vez configurado, el AT502 envía posiciones GNSS y telemetría a través de redes celulares al endpoint y puerto del servidor Plaspy. Plaspy ingiere estos reportes, aplica detección automática de protocolo y muestra los datos de ubicación y estado en la plataforma para monitoreo e informes.

- El dispositivo usa los ajustes APN configurados para establecer una sesión de datos GPRS o LTE.
- Las posiciones GNSS y la telemetría se envían al endpoint de Plaspy en d.plaspy.com o 54.85.159.138 en el puerto 8888.
- El transporte puede ser UDP o TCP según la configuración del dispositivo y las condiciones de la red.
- Plaspy detecta automáticamente el protocolo del rastreador y enlaza los mensajes entrantes con el registro del dispositivo.
- Los datos de movimiento, batería y conectividad reportados por el AT502 son visibles en Plaspy para monitoreo y alertas.

## Flujo común de configuración

1. Acceda al método de configuración oficial del Astra Telematics AT502, ya sea por comandos SMS, la herramienta BLE del proveedor o el software del proveedor según lo documentado por Astra Telematics.
2. Introduzca la dirección del servidor Plaspy usando el dominio d.plaspy.com o la IP 54.85.159.138 según lo permita el dispositivo.
3. Establezca el puerto del servidor en 8888 en la configuración del dispositivo.
4. Si el dispositivo requiere seleccionar el transporte, elija UDP o TCP en el puerto 8888 según la preferencia de sitio o red.
5. Ingrese los ajustes APN del operador móvil local y el nombre de usuario o contraseña APN si son obligatorios.
6. Aplique o guarde la configuración y reinicie el dispositivo si el fabricante lo recomienda.
7. Valide que el AT502 reporte a Plaspy comprobando la conectividad del dispositivo y las actualizaciones recientes de posición o telemetría en su cuenta Plaspy.

## Comandos de configuración de ejemplo

Para configurar el rastreador por SMS, Astra Telematics publica los siguientes comandos. Envíe cada comando como un mensaje de texto separado al número del dispositivo. Conserve los marcadores de posición donde corresponda.

- Establecer el APN del operador
```text
$APAD,{{apn}}
```
- Establecer el nombre de usuario del APN del operador (opcional, use si su APN requiere usuario)
```text
$APUN,{{apnu}}
```
- Establecer la contraseña del APN del operador (opcional, use si su APN requiere contraseña)
```text
$APPW,{{apnp}}
```
- Establecer el servidor GPRS (IP del servidor Plaspy)
```text
$IPAD,54.85.159.138
```
- Establecer el puerto del servidor
```text
$PORT,8888
```

Notas sobre los marcadores de posición:
- {{apn}} es la cadena APN del operador móvil requerida para la conectividad de datos.
- {{apnu}} es el nombre de usuario opcional del APN cuando lo proporciona el operador.
- {{apnp}} es la contraseña opcional del APN cuando lo proporciona el operador.

Si su dispositivo o versión de firmware admite apuntar a un dominio en lugar de la IP, puede introducir d.plaspy.com usando el método de configuración del fabricante. Algunos firmwares pueden requerir un comando separado o una interfaz BLE/firmware para seleccionar UDP versus TCP; consulte la documentación de Astra Telematics para la sintaxis exacta si la necesita.

## Notas de configuración

- La configuración por SMS es compatible con los comandos anteriores; BLE y las herramientas del proveedor pueden ofrecer una alternativa con interfaz gráfica para los mismos valores.
- Las revisiones de firmware y las variantes de hardware pueden cambiar la sintaxis de los comandos o las opciones disponibles; verifique los comandos con la documentación del AT502 para su unidad.
- Elija UDP o TCP según sus necesidades de red y fiabilidad; Plaspy aceptará cualquiera en el puerto 8888 y detectará el protocolo automáticamente.
- Todos los dispositivos Plaspy usan el mismo puerto para la comunicación con el servidor, lo que simplifica la configuración de flotas.
- Las herramientas del fabricante pueden ofrecer comandos de verificación o consultas de estado; utilícelos para confirmar los ajustes de APN y servidor cuando estén disponibles.

## Por qué usar Plaspy con esta configuración

Configurar el AT502 para reportar a Plaspy brinda a las organizaciones visibilidad fiable de activos, con larga autonomía de batería y bajo mantenimiento. La capacidad de configuración por BLE y los comandos SMS del AT502 facilitan preparar los dispositivos en sitio o de forma remota, mientras que Plaspy proporciona ingestión centralizada, detección automática de protocolos y monitoreo operativo de posiciones, eventos de movimiento y estado del dispositivo.

Para saber más sobre Plaspy y cómo se integra con el AT502, visite https://www.plaspy.com. Para detalles específicos del dispositivo, comportamiento de firmware y comandos del fabricante más recientes, verifique la información en el sitio de Astra Telematics https://astratelematics.com/ ya que los procedimientos del proveedor y el firmware pueden cambiar con el tiempo.
