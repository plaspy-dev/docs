---
slug: /suntech/st4955/configuration
id: st4955-configuration
sidebar_label: Configuration
title: Suntech - ST4955 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar Suntech ST4955 en Plaspy con ajustes de servidor y comandos SMS de ejemplo para instalación práctica
keywords:
  - configuración Suntech ST4955
  - instalación Suntech ST4955
  - Suntech ST4955 Plaspy
  - configuración del rastreador ST4955
  - configuración rastreador GPS Suntech
  - configuración servidor ST4955
  - configuración telemetría ST4955
  - configuración rastreador de activos Suntech
  - configuración plataforma GPS Suntech
  - integración ST4955
---

# Suntech - Configuración ST4955

Esta página describe la configuración pública para utilizar la serie Suntech ST4955 con la plataforma Plaspy. Aquí encontrará los ajustes de servidor de Plaspy que debe aplicar, un resumen del flujo de configuración habitual y las plantillas públicas de comandos SMS para preparar el rastreador y que Plaspy pueda ingerir sus datos.

Plaspy usa ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador, pero los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, revisión de hardware, tipo de instalación y herramientas del proveedor. La documentación del ST4955 y los ejemplos SMS incluidos aquí son orientación pública; confirme el comportamiento del equipo con la documentación del fabricante cuando sea necesario.

## Resumen de la configuración

El objetivo de la configuración es preparar el ST4955 para que envíe de forma fiable datos GNSS y de sensores a Plaspy, sea visible en la plataforma y reporte con los intervalos que usted requiera para monitoreo y alertas. Para el ST4955 esto normalmente implica aplicar ajustes de red, especificar el endpoint y puerto del servidor, y definir un intervalo de reporte — con frecuencia mediante comandos SMS del fabricante o su herramienta de configuración.

- Configure el APN y los ajustes de datos para que la telemetría celular funcione correctamente.
- Direccione el dispositivo a los ajustes del servidor de Plaspy para que los paquetes lleguen al endpoint y puerto correctos.
- Establezca un intervalo de reporte y un comportamiento adecuados para la planificación de batería y carga solar.
- Valide la conectividad y confirme que el dispositivo aparece en Plaspy tras la configuración.
- Use las plantillas SMS del ST4955 o el software del fabricante para aplicar los ajustes cuando sea necesario el aprovisionamiento por aire.

## Ajustes del servidor de Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte: soporte para UDP o TCP (el dispositivo puede configurarse usando UDP o TCP en el puerto 8888)
- Plaspy detecta automáticamente el protocolo del rastreador por lo que todos los dispositivos usan el mismo puerto

Estos valores son los ajustes públicos del endpoint de Plaspy que debe usar al configurar el ST4955 para el reporte a la plataforma.

## Requisitos típicos antes de la configuración

- Un dispositivo ST4955 cargado con el número IMEI conocido para que usted pueda derivar el ID del dispositivo usado en los comandos
- Una SIM celular con plan de datos activo y APN correcto para el operador móvil objetivo
- Un teléfono con capacidad SMS o la herramienta de configuración del fabricante para enviar comandos SMS si utiliza aprovisionamiento por SMS
- Acceso a la documentación del fabricante del ST4955 o a la herramienta de instalador para instrucciones específicas de firmware
- Conocimientos básicos del IMEI del dispositivo para calcular el ID del dispositivo requerido por las plantillas SMS

## Cómo se conecta este rastreador a Plaspy

El ST4955 transmite posiciones GNSS y telemetría de sensores a través de redes celulares al endpoint y puerto del servidor Plaspy. Una vez configurado para enviar paquetes al servidor de Plaspy, la plataforma ingiere y decodifica la telemetría para que el dispositivo sea visible.

- El rastreador se configura para reportar al endpoint y puerto compartidos de Plaspy (d.plaspy.com o 54.85.159.138 en el puerto 8888).
- Los datos pueden enviarse por UDP o TCP según la selección del dispositivo; Plaspy detecta el protocolo automáticamente.
- La telemetría incluye posiciones GNSS y datos de sensores disponibles para que Plaspy muestre ubicación y eventos.
- Debe aplicarse el APN y los ajustes GPRS correctos para que el dispositivo pueda conectarse mediante la red celular.

## Flujo de configuración habitual

1. Acceda al método oficial de configuración Suntech o al software proporcionado por el vendedor o la documentación de instalación.
2. Obtenga el IMEI del dispositivo y calcule el ID del dispositivo requerido por las plantillas SMS (ver Comandos de ejemplo).
3. Ingrese la dirección del servidor de Plaspy especificando d.plaspy.com o 54.85.159.138 en la herramienta del fabricante o en el campo de comando SMS.
4. Establezca el puerto en 8888 para la configuración del servidor del dispositivo.
5. Seleccione UDP o TCP como transporte si el dispositivo requiere elegir el protocolo.
6. Aplique o guarde la configuración con la herramienta del vendedor o enviando los comandos SMS al dispositivo.
7. Reinicie el dispositivo si es necesario y valide que el ST4955 reporte a Plaspy y aparezca en la plataforma.

## Comandos de ejemplo para configuración

Los ejemplos públicos de configuración del ST4955 usan comandos SMS. El ID del dispositivo que se emplea en las plantillas se deriva del IMEI: elimine el último dígito del IMEI y luego tome los últimos 6 dígitos de la cadena resultante (por ejemplo, si el IMEI es 123456789012345, el ID del dispositivo será 901234).

- Placeholders:
  - [apn] = el APN de su operador móvil
  - [apnu] = usuario del APN si se requiere (dejar en blanco o 0 si no se usa)
  - [apnp] = contraseña del APN si se requiere (dejar en blanco o 0 si no se usa)
  - \<device_id> = ID del dispositivo calculado a partir del IMEI como se describió arriba

Envíe los siguientes comandos SMS en orden para configurar la red, el servidor y el intervalo de reporte:

1) Configure el APN del operador y el servidor GPRS (reemplazar \<device_id>, [apn], [apnu], [apnp] según corresponda)
```text
SA200NTW;<device_id>;02;0;[apn];[apnu];[apnp];54.85.159.138;8888;;;;
```
Notas:
- La plantilla de ejemplo en la interfaz del dispositivo puede incluir una opción para habilitar campos de usuario/contraseña del APN. Complete los campos según sea necesario.
- Este comando apunta el dispositivo a la IP del servidor Plaspy 54.85.159.138 y al puerto 8888. También puede usar d.plaspy.com en las herramientas del fabricante si la herramienta acepta nombres de host.

2) Ajuste el intervalo de actualización/reporte a 60 segundos
```text
SA200RPT;<device_id>;02;60;60;60;3;0;0;0;0;0
```
Notas:
- Ajuste los intervalos para que coincidan con las necesidades de batería, carga solar y monitoreo.

3) Verifique o consulte la configuración usando el comando de comprobación de preset del dispositivo
```text
SA200CMD;<device_id>;02;PresetA
```
Notas:
- Este comando solicita un resumen de la configuración preset en el dispositivo como verificación.

Mantenga los comandos en el orden mostrado al aplicarlos para la configuración inicial. Si la herramienta del fabricante acepta el nombre de host d.plaspy.com, puede sustituir la IP por el dominio cuando la herramienta o la sintaxis SMS lo permitan.

## Notas de configuración

- Diferencias por firmware y herramientas: la sintaxis y el comportamiento de los comandos SMS pueden variar según la versión de firmware y las herramientas de aprovisionamiento del proveedor; confirme siempre con la documentación del dispositivo si los comandos fallan.
- SMS frente a aprovisionamiento remoto: el ST4955 soporta la configuración vía SMS mostrada aquí; muchos instaladores prefieren el aprovisionamiento por aire o herramientas del proveedor para aprovisionamientos masivos cuando están disponibles.
- Precisión del APN: utilice el APN y las credenciales proporcionadas por el proveedor de la SIM; un APN incorrecto impide sesiones de datos GPRS.
- TCP frente a UDP: elija UDP o TCP según los requisitos del sitio o la red; Plaspy aceptará cualquiera en el puerto 8888 y detectará el protocolo automáticamente.
- Puerto único de Plaspy: Plaspy usa el mismo puerto 8888 para todos los dispositivos y detecta automáticamente el protocolo del rastreador, por lo que debe usar el puerto 8888 en la configuración del dispositivo.

## Por qué usar Plaspy con esta configuración

Configurar el Suntech ST4955 para reportar a Plaspy le brinda visibilidad centralizada de activos de larga duración y con alimentación solar, con posiciones GNSS y sensores ambientales presentados conjuntamente para monitoreo, alertas e informes. Los modos de bajo consumo del ST4955 y su capacidad multi-red funcionan bien con la ingesta unificada de Plaspy, de modo que los equipos pueden confiar en actualizaciones y reportes de eventos consistentes.

Aprenda más sobre Plaspy y cómo administrar sus despliegues ST4955 en el sitio web de Plaspy en https://www.plaspy.com. Para los métodos de configuración específicos más recientes, comportamiento de firmware y detalles del fabricante, confirme la documentación actual en el sitio de Suntech http://www.suntechint.com/.
