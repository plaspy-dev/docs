---
slug: /suntech/st_300/configuration
id: st_300-configuration
sidebar_label: Configuration
title: Suntech - ST 300 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para conectar el rastreador Suntech ST 300 a Plaspy con ejemplos prácticos de servidor y comandos SMS
keywords:
  - configuración Suntech ST 300
  - configuración Suntech ST300
  - configuración servidor ST 300
  - configuración ST300 Plaspy
  - configuración rastreador GPS Suntech
  - configuración GPRS ST300
  - configuración rastreador vehicular ST 300
  - configuración gestión de flotas Suntech
  - configuración software seguimiento ST 300
  - ajustes servidor Suntech ST300
---

# Suntech - Configuración del ST 300

Esta página describe el contexto público de configuración para usar el rastreador Suntech ST 300 con Plaspy. Organiza los ajustes de servidor prácticos y los ejemplos de comandos SMS proporcionados por el fabricante para que pueda preparar el equipo y empezar a enviar datos a la plataforma Plaspy.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador. Los pasos exactos en el equipo del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor; use las indicaciones aquí junto con la documentación oficial de Suntech y la información específica de su unidad.

## Resumen de la configuración

El objetivo de este flujo de configuración es preparar el ST 300 para que se comunique de forma fiable con Plaspy, verificar la conectividad y que el dispositivo sea visible en la vista de flota de Plaspy. Los comandos SMS públicos suministrados por Suntech permiten establecer parámetros de red, la dirección del servidor y el comportamiento de reporte en muchas variantes del ST 300.

- Definir el identificador de dispositivo usado por los comandos Suntech y calcular el device id a partir del IMEI.
- Configurar el APN del operador móvil y los ajustes GPRS para apuntar al endpoint de Plaspy.
- Seleccionar el transporte (UDP o TCP) y configurar el puerto compartido de Plaspy para que el equipo envíe posiciones y eventos.
- Ajustar el intervalo de reporte para que las actualizaciones de ubicación cumplan sus necesidades operativas y validar que el dispositivo informe correctamente a Plaspy.
- Usar el comando de verificación provisto para confirmar que los ajustes se aplicaron.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte soportado: UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador
- Todos los dispositivos en Plaspy usan el mismo puerto

## Requisitos habituales antes de la configuración

- Un ST 300 alimentado y accesible con el IMEI disponible para el cálculo del device id.
- Una SIM GSM operativa con datos (GPRS) y SMS habilitados, ya que el ST 300 admite configuración por SMS y reporte por GPRS.
- Acceso al método de configuración oficial de Suntech para su unidad, que puede ser por comandos SMS o una herramienta del proveedor según el modelo y firmware.
- Los ajustes correctos del APN de su operador móvil y cualquier credencial de autenticación si se requieren.
- Una forma de reiniciar o hacer un ciclo breve de alimentación del dispositivo tras aplicar los ajustes si el fabricante lo recomienda.
- Permiso para colocar el rastreador en un área con cobertura móvil para las pruebas.

## Cómo se conecta este rastreador a Plaspy

El ST 300 se configura para enviar reportes de ubicación y eventos al endpoint y puerto compartido del servidor Plaspy. Plaspy recibe esos mensajes y detecta automáticamente el protocolo del rastreador para que el dispositivo pueda ser gestionado y monitorizado en la plataforma.

- El rastreador envía posiciones y eventos del equipo a d.plaspy.com o 54.85.159.138 en el puerto 8888.
- Puede configurar el reporte usando comandos SMS o herramientas del fabricante para establecer el APN y la información del servidor.
- Elija UDP o TCP en el dispositivo cuando sea necesario; Plaspy acepta ambos.
- Una vez que el reporte comience, Plaspy analizará los mensajes entrantes y mostrará la ubicación del dispositivo y el estado básico en la plataforma.
- Use un comando de verificación para solicitar los ajustes actuales y confirmar que el dispositivo reporta como se espera.

## Flujo de configuración común

1. Acceda al método o software de configuración oficial de Suntech para su unidad ST 300 (la configuración por SMS es comúnmente soportada en variantes del ST 300).
2. Calcule el device id a partir del IMEI y prepare los comandos SMS que referencien ese device id.
3. Ingrese d.plaspy.com o 54.85.159.138 como dirección del servidor GPRS en la configuración del equipo.
4. Configure el puerto 8888 y elija UDP o TCP si el dispositivo requiere seleccionar el transporte.
5. Establezca el APN del operador y cualquier dato de autenticación del APN mediante el método de configuración del dispositivo.
6. Aplique o guarde la configuración y reinicie el equipo si el fabricante lo requiere.
7. Valide que el rastreador informa a Plaspy y use el comando de verificación para comprobar los ajustes aplicados.

## Comandos de configuración de ejemplo

El ST 300 se puede configurar enviando comandos SMS al dispositivo. Los siguientes comandos están extraídos del contenido público de configuración de Suntech y preservan los marcadores de posición. Reemplace {{device_id}} por el device id calculado a partir del IMEI (ver explicación abajo). Reemplace [apn], [apnu] y [apnp] por el APN de su operador, el usuario y la contraseña del APN cuando sea necesario. Para la bandera de autenticación del APN use 1 si proporciona usuario o contraseña; de lo contrario use 0.

Nota sobre el cálculo del device id
- El device id son los últimos 9 dígitos del IMEI excluyendo el dígito final de control del IMEI. Por ejemplo, si el IMEI es 123456789012345 entonces el device id es 678901234.

1) Comando opcional de restablecimiento de fábrica inicial (usar solo cuando sea necesario como parte de la configuración inicial):
```
ST300CMD;{{device_id}};02;Reset
```

2) Establecer el APN del operador y el servidor GPRS de Plaspy. Mantenga los marcadores de posición tal como aparecen y asegúrese de que la dirección del servidor y el puerto apunten a Plaspy:
```
ST300NTW;{{device_id}};02;{{auth_flag}};[apn];[apnu];[apnp];54.85.159.138;8888;;;;
```
- {{auth_flag}} debe ser 1 si proporciona [apnu] o [apnp], de lo contrario 0.
- [apn] es el APN del operador. [apnu] y [apnp] son usuario y contraseña opcionales del APN.

3) Establecer el intervalo de reporte a 60 segundos (ejemplo de configuración de reporte):
```
ST300RPT;{{device_id}};02;60;60;60;3;0;0;0;0;0
```

4) Comando de verificación para comprobar los ajustes actuales:
```
ST300CMD;{{device_id}};02;PresetA
```

Preserve el orden anterior al aplicar los comandos si sigue las recomendaciones del fabricante. Envíe cada SMS completo y espere la confirmación del dispositivo cuando aplique.

## Notas de configuración

- Las variantes de firmware y regionales de la familia ST 300 pueden cambiar la sintaxis de los comandos o las opciones disponibles; siempre consulte las notas de firmware de su dispositivo.
- La configuración por SMS es comúnmente soportada en unidades ST 300; pueden existir herramientas del fabricante o utilidades de configuración para PC según la variante del modelo.
- Use la bandera de autenticación (1 o 0) en el comando del APN para indicar si hay usuario o contraseña del APN.
- Si debe elegir, seleccione UDP o TCP según su política operativa; Plaspy acepta ambos transportes y detectará el protocolo automáticamente.
- Reinicie el dispositivo si el fabricante lo recomienda después de aplicar ajustes de red o servidor para asegurar que los cambios surtan efecto.

## Por qué usar Plaspy con esta configuración

Usar el Suntech ST 300 con Plaspy ofrece un camino sencillo para incorporar ubicación de vehículos y monitoreo básico de eventos en una plataforma de flota operativa. Los ajustes de servidor públicos y los ejemplos de comandos SMS permiten a instaladores y administradores apuntar el dispositivo al endpoint de Plaspy para que los equipos empiecen a reportar sin la complejidad de configurar puertos por dispositivo.

Learn more about how Plaspy receives and processes device data and how it can fit into your fleet workflow at https://www.plaspy.com. Device specific configuration methods, firmware behavior, and manufacturer details can change over time, so verify the latest setup information on the official Suntech website http://www.suntechint.com/.
