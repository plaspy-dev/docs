---
slug: /bofan/b4/configuration
id: b4-configuration
sidebar_label: Configuration
title: Bofan - B4 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el Bofan B4 y conectarlo a Plaspy con ajustes de servidor y comandos SMS de ejemplo
keywords:
  - Configuración Bofan B4
  - Instalación Bofan B4
  - Configuración servidor Bofan B4
  - Configuración Bofan B4 Plaspy
  - Configuración rastreador GPS B4
  - Instalación rastreador GPS Bofan
  - Configuración software seguimiento B4
  - rastreador vehicular Bofan B4
  - rastreo de flotas Bofan B4
  - Configuración rastreador Plaspy
---

# Bofan - Configuración del B4

Esta página documenta el contexto público de configuración para usar el rastreador GPS Bofan B4 con Plaspy. Se centra en los ajustes prácticos del servidor, el flujo de configuración habitual y los comandos por SMS que aparecen en la guía pública del fabricante, para que usted pueda preparar el equipo y habilitar la comunicación con la plataforma de Plaspy.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos a nivel fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor, por lo que considere estas instrucciones como orientación práctica y verifique los detalles específicos del equipo con la documentación oficial cuando sea necesario.

## Resumen de la configuración

El objetivo al configurar un Bofan B4 para Plaspy es preparar el rastreador para que envíe datos de posición y eventos al endpoint del servidor de Plaspy, de modo que el dispositivo sea visible y administrable dentro de la plataforma. Las instrucciones públicas de Bofan muestran un camino de configuración por SMS que establece identificadores, APN y la dirección del servidor GPRS para apuntar a Plaspy.

- Definir el identificador del dispositivo (GID) para que Plaspy pueda asociar el rastreador a una cuenta o registro de dispositivo.
- Configurar el APN del operador y, si aplica, usuario y contraseña del APN para que el dispositivo pueda enviar datos por GPRS.
- Apuntar el servidor GPRS del dispositivo a Plaspy usando el endpoint y puerto compartidos.
- Ajustar el intervalo de reporte para equilibrar visibilidad en tiempo real y costos de datos.
- Opcionalmente realizar un reseteo de fábrica antes de la configuración si lo recomienda el instalador o el fabricante.

## Ajustes del servidor de Plaspy

Al configurar el Bofan B4 para funcionar con Plaspy, use los siguientes ajustes públicos de servidor exactamente como se muestran:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP; choose the transport the device requires
- Plaspy automatically detects the tracker protocol and all devices in Plaspy use the same port

## Requisitos habituales antes de configurar

- Una unidad Bofan B4 con batería cargada instalada o temporalmente alimentada para la configuración
- Una tarjeta SIM con datos habilitados y capacidad de SMS, ya que el modelo soporta configuración por SMS y GPRS
- Acceso al IMEI del dispositivo para derivar el identificador del equipo si es necesario
- Acceso al método oficial de configuración del fabricante, como comandos SMS o software del proveedor
- Conocimiento del APN del operador móvil y de usuario y contraseña del APN si la SIM lo requiere
- Tener anotado el password por defecto del equipo si se necesita para enviar comandos (el ejemplo público muestra 000000 como contraseña por defecto)

## Cómo se conecta este rastreador a Plaspy

El Bofan B4 normalmente envía datos de posición y alertas a Plaspy mediante GPRS hacia el endpoint y puerto compartidos de Plaspy. La configuración inicial suele realizarse por SMS para establecer los parámetros de red y servidor que permiten la transmisión por GPRS.

- El rastreador se configura para reportar al endpoint y puerto compartidos de Plaspy (d.plaspy.com / 54.85.159.138 en el puerto 8888)
- Tras configurar el APN y el servidor, el dispositivo envía actualizaciones periódicas para que el activo aparezca en Plaspy
- Plaspy detecta automáticamente el protocolo del dispositivo, por lo que usted no necesita seleccionar un perfil de protocolo manualmente en la plataforma
- El dispositivo puede usar transporte TCP o UDP para enviar datos según lo permita el firmware; Plaspy escucha en el mismo puerto único para todos los equipos
- Las alertas y eventos configurados en el equipo (por ejemplo, geovallas o eventos de ignición) se reenviarán a Plaspy una vez que el reporte esté activo

## Flujo de configuración típico

1. Acceda al método oficial de configuración del fabricante o al software correspondiente (comandos SMS o herramienta del proveedor) que provee Bofan.
2. Identifique el IMEI y determine el identificador de 14 dígitos que usa el dispositivo con Plaspy (normalmente los últimos 14 dígitos del IMEI).
3. Ingrese la dirección del servidor de Plaspy especificando el dominio d.plaspy.com o la IP del servidor 54.85.159.138 en la configuración del dispositivo.
4. Ajuste el puerto a 8888 y elija UDP o TCP si el dispositivo requiere seleccionar el transporte.
5. Configure el APN del operador móvil y, si aplica, el usuario y contraseña del APN para que el equipo pueda usar GPRS.
6. Aplique o guarde la configuración y reinicie el equipo si las instrucciones del fabricante lo indican.
7. Verifique que el dispositivo reporte a Plaspy comprobando la visibilidad del equipo y la hora del último reporte en la plataforma Plaspy.

## Ejemplos de comandos de configuración

La guía pública de Bofan incluye comandos por SMS que se envían al dispositivo para configurarlo. La contraseña del equipo en los ejemplos es 000000 y se muestra aquí como el valor por defecto. Conserve los marcadores de posición tal como se indican.

- Reseteo de fábrica opcional (usar solo cuando sea necesario o como paso inicial):
```text
000000DFT
```

- Establecer el identificador de 14 dígitos (GID) usado con Plaspy. Reemplace \<14-digit-id> con los últimos 14 dígitos del IMEI del dispositivo:
```text
000000GID<14-digit-id>
```
Explicación: Use los últimos 14 dígitos del IMEI como identificador cuando Plaspy lo solicite.

- Configurar el APN del operador móvil. Reemplace {{apn}} con el APN de su operador e incluya {{apnu}} y {{apnp}} si se requiere usuario o contraseña:
```text
000000APN{{apn}},{{apnu}},{{apnp}}
```
Explicación: {{apn}} es la cadena APN proporcionada por el operador. {{apnu}} y {{apnp}} son marcadores de posición opcionales para usuario y contraseña del APN.

- Establecer el servidor GPRS para apuntar a Plaspy. Este comando usa la IP pública y el puerto:
```text
000000SVR54.85.159.138,8888
```
Alternativa: Si el dispositivo acepta un nombre de dominio, ingrese d.plaspy.com y el puerto 8888 en su herramienta del proveedor o en la variante del comando SMS si está soportado.

- Establecer el intervalo de actualización de posición a 60 segundos (1 minuto):
```text
000000GTI60
```

Nota: Mantenga los comandos en el orden mostrado cuando el fabricante indique una secuencia obligatoria. El comando de reseteo de fábrica es opcional y solo debe usarse si pretende borrar la configuración previa.

## Notas sobre la configuración

- La contraseña por defecto mostrada en ejemplos públicos es 000000; verifique la contraseña de su unidad porque el firmware o la provisión del proveedor pueden cambiar los valores por defecto.
- La configuración por SMS aparece en la guía pública, pero algunas instalaciones usan software del proveedor o herramientas de configuración; utilice el método apropiado para su despliegue.
- Revisiones de firmware y variantes regionales pueden cambiar la sintaxis de los comandos o los parámetros soportados; confirme siempre con la documentación actual del fabricante.
- Elija TCP o UDP según las opciones que ofrezca el firmware del rastreador; Plaspy acepta ambos transportes y escucha en el mismo puerto para todos los dispositivos.
- Cuando sea posible, pruebe la configuración con el equipo temporalmente alimentado y en una ubicación con buena cobertura móvil antes de la instalación definitiva.

## Por qué usar Plaspy con esta configuración

Usar el Bofan B4 con Plaspy ofrece un camino sencillo para incorporar seguimiento básico de vehículos, alertas por geovalla y monitoreo remoto de eventos en una sola plataforma. Apuntar el rastreador al endpoint y puerto compartidos de Plaspy permite que el dispositivo reporte posición y alertas, de modo que administradores de flota y propietarios de vehículos accedan a visibilidad operativa e informes de seguimiento.

Para conocer más sobre Plaspy y las funcionalidades de la plataforma visite https://www.plaspy.com. Para detalles de configuración específicos del dispositivo, sintaxis de comandos y notas de firmware, verifique la documentación oficial de Bofan en https://www.bofancloud.com/ ya que las especificaciones del fabricante y los métodos de configuración pueden cambiar con el tiempo.
