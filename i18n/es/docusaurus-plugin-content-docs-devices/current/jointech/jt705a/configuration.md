---
slug: /jointech/jt705a/configuration
id: jt705a-configuration
sidebar_label: Configuration
title: Jointech - JT705A Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar Jointech JT705A con ajustes de servidor Plaspy y comandos SMS
keywords:
  - configuración Jointech JT705A
  - instalación Jointech JT705A
  - JT705A configuración Plaspy
  - ajustes de servidor JT705A
  - configuración rastreador de contenedores
  - configuración rastreador GPS
  - Jointech comandos SMS de configuración
  - integración de rastreador con Plaspy
  - configuración plataforma de seguimiento de vehículos
  - configuración plataforma GPS
---

# Jointech - Configuración del JT705A

Esta página describe el contexto público de configuración para usar el Jointech JT705A con Plaspy. Resume los ajustes de servidor prácticos y las acciones habituales del lado del fabricante necesarias para apuntar un JT705A a Plaspy, de modo que el dispositivo pueda enviar ubicación y telemetría de contenedores a la plataforma. Cuando están disponibles, se muestran los formatos de comando SMS públicos del JT705A para establecer el servidor GPRS y el APN.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando recibe datos. Los pasos exactos del fabricante pueden variar según la versión de firmware, la revisión del hardware, el tipo de instalación y las herramientas del proveedor. El JT705A admite configuración vía SMS en su conjunto de comandos públicos, que se muestra a continuación como ejemplo de cómo registrar el dispositivo en Plaspy.

## Resumen de la configuración

Configurar el JT705A para Plaspy prepara el rastreador para establecer una sesión GPRS con el endpoint del servidor Plaspy y enviar datos de posición y eventos a la plataforma. El proceso se centra en fijar el endpoint correcto del servidor, los detalles del APN si son necesarios, y verificar transporte y conectividad para que el dispositivo quede visible en Plaspy.

- Establecer en el rastreador el servidor GPRS hacia el endpoint de Plaspy y el puerto compartido para que el dispositivo abra una sesión de datos con Plaspy.
- Configurar el APN y, si aplica, las credenciales del APN para permitir que el dispositivo use la red de datos móviles.
- Seleccionar el tipo de transporte en el dispositivo si el firmware lo requiere, ya sea UDP o TCP hacia el puerto de Plaspy.
- Validar el identificador del dispositivo y las respuestas a comandos SMS cuando se utilicen, para confirmar una configuración exitosa.
- Comprobar que el dispositivo está reportando en Plaspy y aparece en la plataforma para monitoreo en vivo y reproducción histórica.

## Ajustes del servidor Plaspy

- El dominio del servidor d.plaspy.com debe configurarse en el dispositivo o usarse como hostname objetivo al configurar el rastreador.
- La IP del servidor 54.85.159.138 puede emplearse como alternativa cuando se requiere una dirección numérica.
- El puerto 8888 es el puerto compartido usado por Plaspy para todos los dispositivos y debe configurarse en el rastreador.
- El dispositivo puede soportar transporte UDP o TCP; seleccione el transporte que el firmware del equipo soporte.
- Plaspy detecta automáticamente el protocolo del rastreador cuando los datos llegan, por lo que la plataforma aceptará telemetría compatible sobre el transporte configurado.

## Requisitos típicos antes de la configuración

- Un JT705A con batería cargada y una SIM activa instalada, con un plan de datos móviles que soporte sesiones GPRS.
- Acceso al identificador del dispositivo o ID del rastreador requerido por el fabricante para comandos SMS o herramientas de configuración.
- Un teléfono capaz de enviar SMS al dispositivo si usará comandos SMS, o acceso al software de configuración oficial del fabricante si lo prefiere.
- El APN correcto del operador de la SIM y, si el operador lo exige, el usuario y la contraseña del APN.
- El manual de configuración o la hoja de datos de Jointech para su revisión de firmware y confirmar los formatos de comando y opciones específicas del dispositivo.
- Un periodo y ubicación de prueba para validar que el dispositivo informa posición y eventos en Plaspy después de la configuración.

## Cómo se conecta este rastreador a Plaspy

El JT705A se configura para establecer una conexión de datos GPRS y enviar actualizaciones de posición y eventos al endpoint del servidor Plaspy en el puerto compartido. Una vez que el dispositivo abre sesión con el servidor y puerto especificados, Plaspy ingiere los datos entrantes y asocia los mensajes con el identificador del equipo para mostrarlos y generar alertas.

- El rastreador inicia una conexión GPRS hacia d.plaspy.com o 54.85.159.138 en el puerto 8888.
- El dispositivo usa la opción de transporte configurada, UDP o TCP, para enviar paquetes a Plaspy.
- Plaspy detecta automáticamente el protocolo del rastreador y asigna la telemetría entrante al parser correcto.
- Actualizaciones de ubicación, eventos de manipulación o alarmas y mensajes de estado se reenviarán a la plataforma Plaspy para visibilidad en tiempo real.
- Tras una configuración y conexión exitosas, el dispositivo quedará visible en los paneles y reportes de Plaspy.

## Flujo de configuración típico

1. Acceda al método oficial de configuración Jointech para su modelo JT705A, ya sea la interfaz de comandos SMS o la herramienta de configuración proporcionada por el fabricante.
2. Introduzca el servidor Plaspy como d.plaspy.com o la IP numérica 54.85.159.138 según lo que acepte el dispositivo.
3. Establezca el puerto en 8888, que es el puerto compartido de Plaspy para todos los dispositivos.
4. Si el dispositivo requiere seleccionar transporte, elija UDP o TCP según sus necesidades de instalación y el firmware del equipo.
5. Configure el APN y, en su caso, el usuario y la contraseña del APN para que el dispositivo pueda acceder al servicio de datos móviles.
6. Aplique o guarde la configuración en el rastreador y reinicie el equipo si el firmware exige un reinicio para que los cambios de red surtan efecto.
7. Valide que el JT705A está reportando a Plaspy monitoreando el dispositivo en la plataforma y comprobando la llegada de telemetría.

## Ejemplos de comandos de configuración

El JT705A soporta configuración vía SMS usando el ID del rastreador seguido del comando de configuración. Los ejemplos públicos que se muestran a continuación son los formatos SMS documentados para establecer el servidor GPRS y el APN en el JT705A. Reemplace los marcadores por los valores de su equipo.

- Tenga en cuenta el marcador de ID del dispositivo etiquetado como [trackerID] que debe ser el identificador requerido por Jointech.
- [apn] es la cadena APN del operador de la SIM. [apnu] y [apnp] son el usuario del APN y la contraseña del APN opcionales si su operador los requiere.

1) Establecer servidor GPRS, IP y puerto y el APN
```text
([trackerID],2,S02,129,1,54.85.159.138,8888,[apn])
```
Puede alternativamente reemplazar la IP numérica por el dominio
```text
([trackerID],2,S02,129,1,d.plaspy.com,8888,[apn])
```

2) Establecer usuario y contraseña del APN si su operador los requiere
```text
([trackerID],2,S24,129,1,[apnu],[apnp])
```

Envíe estos mensajes SMS desde un teléfono al JT705A siguiendo las instrucciones del fabricante. Mantenga el orden mostrado cuando el dispositivo necesite que el APN esté presente antes de iniciar la sesión GPRS.

## Notas de configuración

- Las diferencias de firmware entre revisiones del JT705A pueden afectar la sintaxis exacta de los comandos y los parámetros soportados; siempre verifique los comandos con el manual de su dispositivo.
- El JT705A soporta la configuración vía SMS como se muestra, pero pueden existir herramientas del fabricante o software de escritorio que simplifiquen el aprovisionamiento masivo.
- La elección entre UDP o TCP depende de la instalación y las condiciones de red; Plaspy acepta ambos en el puerto 8888 y detectará el protocolo automáticamente.
- Todos los dispositivos que reportan a Plaspy usan el mismo puerto 8888, por lo que se recomienda ser consistente al aprovisionar flotas mixtas.
- Si las credenciales del APN son opcionales para su operador, puede omitir el comando de usuario y contraseña del APN, pero asegúrese de que la cadena APN esté configurada.

## Por qué usar Plaspy con esta configuración

Usar el JT705A con Plaspy centraliza la ubicación de contenedores y la telemetría de eventos en una plataforma única de gestión de flotas. Para organizaciones que manejan carga multimodal y envíos de alta seguridad, configurar el JT705A para reportar a Plaspy proporciona visibilidad continua, enrutamiento de alarmas y reproducción histórica para apoyar inspecciones, cadena de custodia y respuesta a incidentes.

To learn more about Plaspy visit https://www.plaspy.com. Device specific configuration methods, firmware behavior, and manufacturer details can change over time so confirm the latest JT705A setup information with the manufacturer at https://www.jointcontrols.com/ before large scale provisioning.
