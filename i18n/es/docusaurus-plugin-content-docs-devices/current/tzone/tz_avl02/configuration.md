---
slug: /tzone/tz_avl02/configuration
id: tz_avl02-configuration
sidebar_label: Configuration
title: TZone - TZ-AVL02 Configuration
sidebar_class_name: menu_item_tracker
description: Configure el rastreador TZone TZ-AVL02 para usar con Plaspy mediante configuración de servidor compartido, comandos SMS y flujo de instalación
keywords:
  - Configuración TZone TZ-AVL02
  - Instalación TZ-AVL02
  - Configuración rastreador TZone
  - Configuración GPRS TZ-AVL02
  - Comandos SMS TZ-AVL02
  - Configuración dispositivo Plaspy
  - Configuración rastreador Plaspy
  - Configuración seguimiento vehicular
  - Rastreador GPS TZ-AVL02
  - Ajustes servidor TZ-AVL02
---

# TZone - Configuración del TZ-AVL02

Esta página documenta el contexto público de configuración para usar el rastreador GPS/GSM/GPRS TZone TZ-AVL02 con Plaspy. Se concentra en los ajustes de servidor compartidos que usa Plaspy, las condiciones previas habituales para una integración exitosa y los comandos SMS más comunes para apuntar el equipo al endpoint de Plaspy.

Plaspy emplea ajustes de servidor compartidos para los dispositivos soportados y detecta automáticamente el protocolo del rastreador. Todos los dispositivos en Plaspy usan el mismo puerto y la plataforma identificará el protocolo del equipo cuando comience a enviar datos. Los pasos de configuración del fabricante pueden variar según firmware, revisión de hardware, tipo de instalación y herramientas del proveedor, por lo que verifique detalles específicos del dispositivo con la documentación oficial de TZone cuando sea necesario.

## Resumen de la configuración

El objetivo de la configuración es preparar el TZ-AVL02 para que establezca una sesión GPRS y reporte ubicación y estado al servidor de Plaspy. Para este modelo el fabricante provee comandos por SMS que permiten establecer el APN del operador, el intervalo de reporte y el endpoint del servidor GPRS. Una vez definidos esos valores, el dispositivo intentará conectarse a Plaspy y comenzar a enviar reportes.

- Configure el APN del operador móvil y, si aplica, las credenciales de APN para que el equipo abra una conexión de datos GPRS.
- Ajuste el intervalo de actualización del rastreador para que los reportes de posición se ajusten a sus necesidades de monitoreo.
- Apunte el rastreador al endpoint y puerto del servidor Plaspy usados por todos los dispositivos soportados.
- Active o habilite el modo GPRS en el equipo para que envíe datos por la red celular.
- Valide la conectividad confirmando que el dispositivo sea visible en Plaspy después de la configuración.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte por UDP o TCP según la configuración del dispositivo
- Detección automática de protocolo en Plaspy para que la plataforma reconozca el protocolo del rastreador después de recibir datos

Estos valores arriba indicados son los ajustes públicos de Plaspy que debe ingresar en el dispositivo o enviar por SMS al equipo cuando configure el reporte hacia Plaspy.

## Requisitos típicos previos a la instalación

- Una tarjeta SIM con plan de datos activo y GPRS habilitado para el operador que se usará en el vehículo.
- Acceso a un teléfono con capacidad SMS o a una herramienta de configuración que permita enviar los comandos SMS proporcionados por el fabricante.
- El TZ-AVL02 alimentado con su fuente de alimentación externa o con batería interna suficiente para la configuración inicial.
- El equipo debe ser alcanzable por SMS y encontrarse en un área con cobertura GSM del operador seleccionado.
- La documentación del dispositivo o las instrucciones del proveedor para el formato de los comandos SMS y la contraseña del equipo si se requiere.

## Cómo se conecta este rastreador a Plaspy

El TZ-AVL02 se configura para iniciar una conexión GPRS y enviar su telemetría al endpoint del servidor Plaspy en el puerto compartido. Una vez configurado, el dispositivo transmite periódicamente ubicación e información básica de estado para que Plaspy pueda mostrar el equipo en el mapa y registrar eventos para monitoreo.

- El rastreador abre una sesión de datos GPRS usando el APN del operador configurado en el dispositivo.
- Envía reportes al dominio d.plaspy.com o directamente a 54.85.159.138 en el puerto 8888.
- El transporte puede configurarse como UDP o TCP en el equipo; Plaspy soporta ambos.
- Plaspy detecta automáticamente el protocolo del rastreador en la primera comunicación, por lo que no es necesario seleccionar el protocolo manualmente en la plataforma.
- Tras el reporte exitoso, el dispositivo queda visible en Plaspy para seguimiento en tiempo real y consulta de historial.

## Flujo de trabajo típico de configuración

1. Acceda al método de configuración oficial de TZone descrito por el fabricante, normalmente mediante comandos SMS o una herramienta del proveedor.
2. Configure el APN del operador y, si aplica, las credenciales del APN en el dispositivo para que pueda usar GPRS.
3. Ingrese la dirección del servidor Plaspy como d.plaspy.com o como la IP 54.85.159.138 cuando el equipo requiera una dirección IP.
4. Establezca el puerto del servidor en 8888 y elija UDP o TCP si el dispositivo requiere selección de transporte.
5. Aplique o guarde los ajustes en el dispositivo y active el modo GPRS si es necesario.
6. Reinicie el equipo si lo recomienda el fabricante o si el dispositivo no comienza a reportar después de la configuración.
7. Valide que el dispositivo reporte a Plaspy revisando el estado del equipo y la visibilidad de su ubicación en la plataforma Plaspy.

## Comandos de configuración de ejemplo

El fabricante del TZ-AVL02 proporciona comandos por SMS para configurar el rastreador. Envíe estos comandos como mensajes SMS desde un número permitido al dispositivo. Preserve los marcadores de posición al sustituir valores.

1. Configure el APN del operador. Reemplace {{apn}} con el APN de su operador. Si su APN requiere usuario y contraseña incluya {{apnu}} y {{apnp}} como se muestra.

```
*000000,011,{{apn}}#
```

O incluya usuario y contraseña del APN si son necesarios:

```
*000000,011,{{apn}},{{apnu}},{{apnp}}#
```

- {{apn}} es la cadena APN del operador móvil.
- {{apnu}} es el usuario del APN si el operador lo exige.
- {{apnp}} es la contraseña del APN si el operador la exige.

2. Configure el intervalo de actualización en 60 segundos. Esto establece reportes periódicos.

```
*000000,018,60,999#
```

3. Configure el servidor GPRS para apuntar a Plaspy por IP y puerto. Este ejemplo usa la IP pública y el puerto de Plaspy.

```
*000000,015,0,54.85.159.138,8888#
```

4. Active el modo GPRS para que el dispositivo intente conectar al servidor por datos móviles.

```
*000000,016,1#
```

Envíe los comandos en el orden indicado durante una configuración inicial: APN, intervalo, servidor y finalmente activar GPRS. Confirme que el dispositivo reconozca los comandos según las instrucciones del fabricante.

## Notas de configuración

- Los comandos SMS mostrados son ejemplos públicos del fabricante y pueden incluir un token de contraseña del dispositivo como el prefijo numérico que aparece. Verifique el formato correcto de los comandos y la contraseña del equipo en la documentación de TZone.
- Las revisiones de firmware o las variantes de hardware pueden cambiar los comandos disponibles y su comportamiento. Si un comando falla, compruebe la versión de firmware y consulte el manual oficial.
- El dispositivo permite configurar el transporte como UDP o TCP a nivel de equipo; elija el transporte que su instalación requiera y asegúrese de que esté establecido el puerto 8888.
- La configuración vía SMS es útil para el aprovisionamiento inicial, pero algunos instaladores prefieren herramientas por cable o utilidades del proveedor para configuraciones masivas según las herramientas disponibles.
- Plaspy utiliza el mismo puerto para todos los dispositivos soportados y detecta automáticamente el protocolo del rastreador en el primer contacto.

## Por qué usar Plaspy con esta configuración

Configurar el TZ-AVL02 para que reporte a Plaspy facilita la visibilidad de la flota y el monitoreo operacional. Con el APN, servidor y puerto configurados como se describe, el rastreador entregará reportes de ubicación y estado a Plaspy, donde usted podrá monitorear posiciones en tiempo real, revisar el historial y recibir eventos que mejoren la supervisión de activos.

Si desea conocer más sobre cómo Plaspy gestiona las conexiones de dispositivos y los flujos de trabajo soportados visite https://www.plaspy.com. Para comandos específicos más actuales, comportamiento de firmware y procedimientos del fabricante, verifique detalles con los recursos oficiales de TZone en http://www.tzonedigital.com/ ya que los métodos y el firmware pueden cambiar con el tiempo.
