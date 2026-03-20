---
slug: /megastek/s921/configuration
id: s921-configuration
sidebar_label: Configuration
title: Megastek - S921 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del Megastek S921 para conectarlo a Plaspy con ajustes de servidor compartidos y comandos SMS de ejemplo
keywords:
  - Configuración Megastek S921
  - Instalación Megastek S921
  - Megastek S921 Plaspy
  - Configuración servidor S921
  - Configuración estación base S921
  - Configuración rastreador Plaspy
  - Instalación rastreador GPS Megastek
  - Configuración detección presencia S921
  - Integración monitoreo Megastek
  - Guía instalación S921
---

# Megastek - Configuración del S921

Esta página documenta el contexto público de configuración para usar la estación base Megastek S921 con Plaspy. Reúne los ajustes compartidos del servidor Plaspy, comprobaciones prácticas previas y ejemplos de comandos SMS que aparecen en material público de configuración del equipo, para ayudar a instaladores y administradores a preparar el S921 para reportar a la plataforma Plaspy.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del tracker cuando llegan los datos. Los pasos exactos del fabricante para configurar el S921 pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Cuando esté disponible, esta página incluye los comandos SMS del S921 que se usan con frecuencia en la configuración; siga las indicaciones del fabricante y verifique las instrucciones actuales de Megastek para su equipo y su firmware.

## Resumen de configuración

El objetivo de la configuración del S921 para Plaspy es garantizar que la estación base reporte de forma fiable presencia, alarmas y datos de funcionamiento al endpoint central del servidor Plaspy. La configuración prepara el dispositivo para acceder a la red de datos móviles, identificarse ante el servidor y enviar telemetría periódica que Plaspy procesa y presenta.

- Configure la red del dispositivo y el APN para que el S921 pueda establecer conexión GPRS.
- Apunte el dispositivo al endpoint compartido del servidor de Plaspy para que los reportes lleguen a la plataforma.
- Establezca intervalos de reporte y active el modo GPRS para que se transmitan latidos y alarmas.
- Valide la conectividad con el servidor y confirme que el S921 aparece en Plaspy como un dispositivo activo.
- Utilice los comandos SMS proporcionados o la herramienta del fabricante según el tipo de instalación.

## Ajustes del servidor de Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte compatible UDP o TCP
- Plaspy detecta automáticamente el protocolo del tracker

Tenga en cuenta que Plaspy usa el mismo puerto para todos los dispositivos compatibles y detectará el protocolo del tracker automáticamente cuando el dispositivo comience a enviar datos.

## Requisitos típicos antes de la instalación

- Dispositivo alimentado e instalado en su ubicación fija prevista con acceso a la corriente o batería interna según sea necesario.
- Una SIM celular operativa con datos habilitados y capacidad de SMS si va a usar configuración por SMS.
- El IMEI o número de serie del dispositivo necesario para identificación y algunos comandos de configuración.
- APN del operador y, opcionalmente, usuario y contraseña del APN para la configuración de datos móviles.
- Acceso al método de configuración Megastek para el S921, como comandos SMS o herramientas del proveedor.
- Una cuenta en Plaspy o acceso administrativo en la plataforma de monitoreo para añadir y verificar el dispositivo después del aprovisionamiento.

## Cómo se conecta este rastreador a Plaspy

Cuando está configurado, el S921 actúa como pasarela de presencia y nodo de reporte que envía paquetes de estado y alarma al endpoint del servidor Plaspy. El dispositivo usa su enlace celular para transmitir reportes de presencia, latidos y eventos de alarma para que los operadores visualicen el estado "en casa" y la salud del equipo en Plaspy.

- El S921 reporta presencia en casa y eventos de alarma al endpoint compartido de Plaspy d.plaspy.com o 54.85.159.138 en el puerto 8888.
- Los paquetes de latido y estado periódico proporcionan visibilidad del estado del dispositivo dentro de Plaspy.
- Condiciones de alarma como corte de energía, SOS, manipulación y impacto se reenvían a Plaspy para alertas y flujos de trabajo.
- Plaspy detecta automáticamente el protocolo del tracker cuando llegan los datos e ingiere los paquetes sin necesidad de seleccionar el protocolo por dispositivo en el servidor.
- El transporte puede configurarse en UDP o TCP en el puerto 8888 según los requerimientos del dispositivo.

## Flujo de configuración común

1. Acceda al método oficial de configuración Megastek para el S921, como la interfaz de comandos SMS o el software del fabricante.
2. Introduzca el hostname del servidor Plaspy d.plaspy.com o la IP del servidor 54.85.159.138 en la configuración GPRS del servidor.
3. Establezca el puerto del servidor en 8888. Recuerde que Plaspy usa el mismo puerto para todos los dispositivos.
4. Seleccione UDP o TCP si el dispositivo requiere una selección explícita del transporte.
5. Configure el APN y las credenciales del APN que requiera su operador móvil.
6. Aplique o guarde la configuración y reinicie el dispositivo si las instrucciones del fabricante requieren un reboot.
7. Valide que el dispositivo reporte a Plaspy y que presencia, latidos y eventos de alarma aparezcan en la plataforma.

## Ejemplos de comandos de configuración

Los ejemplos públicos de configuración del S921 se envían con frecuencia por SMS. El ejemplo del fabricante utiliza la contraseña por defecto 000000 en estos mensajes. Reemplace 000000 por la contraseña del dispositivo si ha sido cambiada. Use el IMEI de su dispositivo donde se indique.

- Configure el ID del dispositivo usando el IMEI. Reemplace <IMEI15> con el IMEI del dispositivo formateado según lo requiera el fabricante (el ejemplo del fabricante usa los últimos 15 dígitos):

```
M000000,22,<IMEI15>
```

- Configure el APN del operador. Reemplace {{apn}} con el APN del operador. Si su operador requiere usuario y contraseña del APN incluya {{apnu}} y {{apnp}}:

```
M000000,23,{{apn}}
```

O con usuario y contraseña opcionales:

```
M000000,23,{{apn}},{{apnu}},{{apnp}}
```

- Establezca el intervalo de actualización a 60 segundos:

```
M000000,25,60
```

- Configure el servidor GPRS con la IP y el puerto de Plaspy. El ejemplo del fabricante incluye una secuencia inicial usada por la sintaxis de comando del dispositivo; inclúyala tal como se muestra:

```
M000000,24,56 54.85.159.138,8888
```

- Active el modo GPRS:

```
M000000,21,2
```

Notas sobre marcadores y valores por defecto:
- {{apn}} es la cadena APN del operador móvil. {{apnu}} y {{apnp}} son marcadores opcionales para usuario y contraseña del APN.
- 000000 es la contraseña por defecto usada en los comandos de ejemplo. Si su contraseña es distinta, reemplace 000000 por la contraseña correcta.
- El primer comando usa el IMEI del dispositivo para establecer el ID. Use los valores de IMEI de su equipo según lo requiera Megastek.

## Notas sobre la configuración

- Las versiones de firmware y las variantes regionales pueden cambiar la sintaxis de los comandos o las funciones disponibles; confirme siempre el formato exacto del comando para su unidad y firmware.
- El S921 soporta configuración vía SMS en los ejemplos públicos anteriores; algunas instalaciones también pueden aceptar configuración mediante herramientas del proveedor o actualizaciones OTA.
- Elija UDP o TCP según las características del dispositivo y de la red del operador. Plaspy acepta cualquiera de los dos transportes en el mismo puerto y detecta el protocolo automáticamente.
- Todos los dispositivos de Plaspy usan el puerto 8888 para la comunicación con el servidor; use ese puerto cuando apunte el dispositivo a d.plaspy.com o 54.85.159.138.
- Si utiliza SMS para configurar el dispositivo, verifique la entrega del SMS y que el dispositivo reconozca el comando antes de continuar con los siguientes pasos.

## Por qué usar Plaspy con esta configuración

Configurar el Megastek S921 para reportar a Plaspy centraliza la presencia en el hogar, las alarmas y la telemetría de salud en una sola plataforma de monitoreo. Esta configuración mejora la visibilidad en programas de monitoreo supervisado al combinar la detección local confiable con alertas y flujos de trabajo a nivel de plataforma.

Para obtener más información sobre Plaspy y cómo soporta integraciones de dispositivos como el S921, visite https://www.plaspy.com. Para los pasos de configuración específicos del dispositivo más actuales, notas de firmware y recomendaciones del fabricante, verifique los detalles en el sitio de Megastek https://www.megastek.com/
