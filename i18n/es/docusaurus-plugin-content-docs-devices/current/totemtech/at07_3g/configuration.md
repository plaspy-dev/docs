---
slug: /totemtech/at07_3g/configuration
id: at07_3g-configuration
sidebar_label: Configuration
title: Totemtech - AT07-3G Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el rastreador Totemtech AT07 3G con Plaspy usando servidor compartido y comandos SMS
keywords:
  - Configuración Totemtech AT07 3G
  - Instalación Totemtech AT07 3G
  - AT07 3G Plaspy
  - Configuración rastreador GPS Plaspy
  - Guía configuración Totemtech
  - Configuración servidor AT07 3G
  - Configuración seguimiento de vehículos
  - Guía instalación rastreador GPS
  - Configuración rastreador GPRS
  - Configuración rastreador por SMS
---

# Totemtech - AT07-3G Configuración

Esta página documenta el contexto público de configuración para usar el rastreador Totemtech AT07-3G con Plaspy. Se centra en los ajustes prácticos del servidor y en los comandos SMS que se usan habitualmente para apuntar este modelo a Plaspy, de modo que el dispositivo pueda enviar ubicación y datos de estado a nuestra plataforma.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta. Los pasos exactos del fabricante y el formato de los comandos pueden variar según la versión de firmware, la revisión de hardware, las preferencias del instalador y las herramientas del proveedor. Cuando están disponibles, en esta página se incluyen los comandos SMS públicos provistos para el AT07-3G para que usted pueda aplicarlos cuando corresponda.

## Resumen de la configuración

El proceso de configuración prepara el AT07-3G para comunicarse de forma fiable con Plaspy y para aparecer en la plataforma para monitoreo e informes.

- Apuntar el rastreador al endpoint del servidor de Plaspy para que el dispositivo pueda enviar telemetría a la plataforma.
- Configurar GPRS y los datos de APN para que el rastreador tenga conectividad móvil para reportes por TCP o UDP.
- Opcionalmente realizar un restablecimiento de fábrica al instalar equipos nuevos o para borrar configuraciones anteriores.
- Ajustar intervalos de reporte y opciones de acuse de recibo para controlar con qué frecuencia el dispositivo actualiza Plaspy.
- Verificar el reporte del dispositivo en Plaspy después de aplicar los ajustes para confirmar visibilidad y estado operativo.

## Ajustes del servidor Plaspy

Use los siguientes ajustes públicos de servidor Plaspy al configurar el AT07-3G. Plaspy requiere el mismo puerto para todos los dispositivos compatibles y detecta el protocolo del rastreador automáticamente.

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol when the device connects

## Requisitos típicos antes de la instalación

- Un dispositivo Totemtech AT07-3G con alimentación y accesible, capaz de recibir SMS o de usar la herramienta de configuración del fabricante.
- Una SIM activa con datos móviles habilitados y la configuración APN correcta para su operador.
- Conocimiento de la contraseña por defecto del dispositivo cuando sea necesaria para comandos SMS o herramientas de configuración; en los ejemplos públicos la contraseña por defecto es 000000.
- Acceso a la lista oficial de comandos SMS del fabricante o al software de configuración correspondiente a su versión de firmware.
- Una lista de verificación para validar la conectividad y la visibilidad en Plaspy después de la configuración.

## Cómo se conecta este rastreador a Plaspy

El AT07-3G envía ubicación y datos del dispositivo a Plaspy usando el reporte estándar por GPRS configurado hacia el endpoint y puerto de Plaspy. Una vez configurada la dirección del servidor y el transporte, Plaspy recibirá los intentos de conexión y aplicará la detección automática de protocolo.

- El rastreador se configura para reportar al endpoint compartido de Plaspy d.plaspy.com o a la IP del servidor 54.85.159.138.
- Todos los dispositivos reportan al puerto 8888 en Plaspy, independientemente del modelo.
- El dispositivo puede usar UDP o TCP como transporte según la configuración; Plaspy acepta ambos.
- Plaspy determina automáticamente el protocolo que usa el rastreador, por lo que la selección del protocolo está soportada pero la plataforma detectará el protocolo activo al conectarse.
- Después de que el rastreador se conecte, Plaspy procesará los mensajes entrantes y hará que el dispositivo sea visible para el monitoreo en la plataforma.

## Flujo de trabajo común de configuración

1. Acceda al método oficial de configuración Totemtech para su unidad, como comandos SMS o el software del proveedor que coincida con su firmware.
2. Ingrese la dirección del servidor Plaspy usando el dominio d.plaspy.com o la dirección IP 54.85.159.138 según permita la interfaz de configuración del dispositivo.
3. Configure el puerto del servidor en 8888, ya que Plaspy utiliza el mismo puerto para todos los dispositivos.
4. Elija el protocolo de transporte UDP o TCP si el dispositivo requiere una selección explícita; Plaspy acepta ambos y detectará el protocolo automáticamente.
5. Aplique o guarde la configuración en el dispositivo y envíe cualquier comando de confirmación requerido.
6. Reinicie el rastreador si el procedimiento o el firmware exige un reinicio para aplicar los cambios.
7. Valide en Plaspy que el dispositivo reporta correctamente y que las actualizaciones de ubicación coinciden con lo esperado.

## Comandos de configuración de ejemplo

Los siguientes comandos SMS son ejemplos públicos para el AT07-3G. Estos comandos usan el formato de comandos SMS del dispositivo y la contraseña por defecto de ejemplo 000000. Reemplace los marcadores con los valores de su operador donde sea necesario. Los comandos se muestran en el orden publicado.

- Restablecimiento de fábrica inicial opcional (usar solo si necesita borrar configuraciones previas)

```
*000000,007#
```

- Establecer el APN del operador. Reemplace {{apn}}, {{apnu}} y {{apnp}} con el APN, el usuario y la contraseña de su operador móvil según corresponda. Si no se requiere usuario o contraseña, use valores vacíos o siga las reglas SMS del dispositivo.

```
*000000,002,{{apn}},{{apnu}},{{apnp}}#
```

- Configurar el servidor GPRS a Plaspy usando la IP pública y el puerto 8888. El valor final "1" en este comando es específico del proveedor y aparece en la secuencia publicada.

```
*000000,003,54.85.159.138,8888,1
```

- Habilitar reportes con ACK si su instalación lo requiere

```
*000000,019,1#
```

- Establecer el intervalo de actualización a 60 segundos en el ejemplo. Ajuste los valores según sus necesidades de reporte y las capacidades del dispositivo.

```
*000000,60,60,0,60#
```

Notas sobre marcadores y contraseña
- Los comandos de ejemplo usan la contraseña por defecto 000000 tal como aparece en los comandos públicos. Si la contraseña de su dispositivo es diferente, reemplace 000000 por la contraseña correcta.
- Los marcadores {{apn}}, {{apnu}} y {{apnp}} deben reemplazarse por la configuración APN de su operador móvil. Mantenga los marcadores visibles en documentación hasta que los reemplace para su despliegue.

## Observaciones de configuración

- El AT07-3G soporta configuración por SMS como se muestra arriba; verifique la sintaxis exacta de los comandos SMS para su revisión de firmware antes de enviar comandos.
- Las revisiones de firmware y hardware pueden modificar la sintaxis de comandos, los parámetros disponibles o la necesidad de reiniciar tras los cambios. Confirme con la documentación de Totemtech cuando sea posible.
- Elija UDP o TCP según las condiciones de su red o la preferencia del instalador; Plaspy acepta ambos transportes en el puerto 8888 y detectará el protocolo automáticamente.
- Plaspy usa el mismo puerto 8888 para todos los dispositivos compatibles, lo que simplifica el despliegue multidevice y la configuración del servidor.
- Puede existir la posibilidad de actualizar firmware por OTA para este modelo; siga los procedimientos del fabricante para actualizar el firmware antes de un despliegue masivo si es necesario.

## Por qué usar Plaspy con esta configuración

Usar el Totemtech AT07-3G con Plaspy ofrece un camino sencillo para integrar la telemetría de los dispositivos en una plataforma unificada de monitoreo de flotas o activos. Al configurar el rastreador para que reporte al endpoint y puerto compartidos de Plaspy, las organizaciones obtienen visibilidad sobre la ubicación y el estado de los dispositivos y pueden centralizar alertas, historial y supervisión operativa.

To learn more about Plaspy and how it handles device onboarding and device data, visit https://www.plaspy.com. For device specific details, firmware updates, and the latest manufacturer commands, please verify current information at the Totemtech website http://www.totemtek.com/ as manufacturer setup methods and firmware behavior can change over time.
