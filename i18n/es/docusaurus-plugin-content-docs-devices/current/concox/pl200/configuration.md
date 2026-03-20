---
slug: /concox/pl200/configuration
id: pl200-configuration
sidebar_label: Configuration
title: Concox - PL200 Configuration
sidebar_class_name: menu_item_tracker
description: Instrucciones para configurar el localizador Concox PL200 con Plaspy, incluyendo ajustes de servidor, comandos SMS y lista de verificación
keywords:
  - Configuración Concox PL200
  - Instalación Concox PL200
  - Configuración PL200 Plaspy
  - Configuración rastreador GPS PL200
  - Comandos SMS Concox
  - Configuración dispositivo Plaspy
  - Configuración APN PL200
  - Ajustes servidor PL200
  - Integración PL200 Plaspy
  - Configuración plataforma seguimiento PL200
---

# Concox - Configuración del PL200

Esta página describe el contexto de configuración pública para usar el localizador personal Concox PL200 con Plaspy. Explica los ajustes de servidor compartidos que debe aplicar, los comandos SMS comunes documentados públicamente y los pasos prácticos para preparar el PL200 y que reporte a Plaspy para rastreo en tiempo real y notificaciones.

Plaspy utiliza ajustes de servidor compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. No obstante, los pasos exactos del lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del vendedor. El PL200 permite configuración remota vía SMS y GPRS, lo que se refleja en los comandos de ejemplo a continuación; confirme cualquier comportamiento específico del equipo con la documentación de Concox antes de desplegar en volumen.

## Resumen de la configuración

Preparar el PL200 para Plaspy implica configurar el dispositivo para que establezca una sesión GPRS y reporte datos de ubicación y eventos al endpoint del servidor de Plaspy. Los comandos públicos que se muestran a continuación ilustran un flujo de configuración por SMS común en dispositivos Concox.

- Apuntar el servidor GPRS para que el dispositivo envíe ubicación y alertas a Plaspy.
- Configurar el APN del dispositivo y confirmar la conexión de datos para que el reporte GPRS funcione.
- Ajustar el intervalo de reporte y el modo GPRS para que el dispositivo envíe actualizaciones con la cadencia deseada.
- Validar la configuración con el comando de verificación del dispositivo y confirmar la visibilidad en Plaspy.
- Opcionalmente, realizar un restablecimiento de fábrica previo para una configuración limpia cuando sea necesario.

## Ajustes del servidor Plaspy

- Dominio del servidor: d.plaspy.com
- IP del servidor: 54.85.159.138
- Puerto: 8888
- Soporte de transporte usando UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador y utiliza el mismo puerto para todos los dispositivos compatibles

## Requisitos típicos antes de la configuración

- Un dispositivo PL200 cargado y listo para configuración con recepción de SMS accesible.
- Una tarjeta SIM activa provisionada para datos móviles y SMS en la zona donde operará el PL200.
- Los datos APN del operador de la SIM listos para ingresar en el dispositivo como {{apn}} y, si aplica, {{apnu}} y {{apnp}}.
- Acceso al método oficial de configuración Concox, como comandos SMS o software del proveedor para gestión de dispositivos.
- Un procedimiento para verificar que el dispositivo se conecta a Plaspy después de la configuración, por ejemplo revisar el estado del dispositivo en la plataforma Plaspy.

## Cómo se conecta este rastreador a Plaspy

El PL200 está configurado para reportar posiciones GNSS y alertas de eventos por la conexión celular al endpoint y puerto compartidos de Plaspy. Una vez que GPRS está habilitado y los ajustes del servidor aplicados, el dispositivo envía datos de ubicación y eventos a Plaspy, donde se procesan y muestran en paneles y flujos de notificación.

- El rastreador reporta al endpoint del servidor Plaspy (d.plaspy.com) o a la IP del servidor (54.85.159.138) en el puerto 8888.
- El dispositivo puede configurarse para usar transporte UDP o TCP según la opción disponible; Plaspy detectará el protocolo automáticamente.
- Las actualizaciones periódicas de ubicación se envían según el intervalo TIMER configurado para que la plataforma reciba posiciones regulares.
- Mensajes de evento como SOS o batería baja se reenvían a Plaspy para notificación y procesamiento inmediato.
- Después de la configuración, la supervisión en Plaspy confirma que el dispositivo es visible y está reportando.

## Flujo típico de configuración

1. Acceda al método oficial de configuración Concox para el PL200, normalmente mediante comandos SMS según la documentación del fabricante o mediante herramientas del proveedor.
2. Ingrese los valores APN del operador de la SIM usando el comando APN para que el dispositivo pueda establecer la sesión GPRS.
3. Configure el servidor Plaspy como d.plaspy.com o como 54.85.159.138 y ajuste el puerto a 8888.
4. Seleccione UDP o TCP si el dispositivo le solicita especificar el tipo de transporte.
5. Establezca el intervalo de reporte (TIMER) y habilite el modo GPRS (GPRSON) para que el dispositivo envíe actualizaciones.
6. Aplique o guarde la configuración y reinicie el dispositivo si el firmware o el equipo lo requieren.
7. Valide que el dispositivo reporta a Plaspy revisando el estado en la plataforma y usando el comando de verificación GPRSSET en el dispositivo.

## Comandos de configuración de ejemplo

Envíe los siguientes comandos por SMS al número del dispositivo. Respete el orden cuando se indique. Los comandos usan la sintaxis recogida en la documentación pública de Concox.

- Restablecimiento de fábrica inicial opcional (usar sólo si necesita borrar configuraciones previas):
```text
FACTORY#
```

- Ajustar la zona horaria a UTC 0:
```text
GMT,E,0#
```

- Establecer el APN del operador. Reemplace los marcadores por los valores de su operador. Si se requieren usuario y contraseña incluya {{apnu}} y {{apnp}}:
```text
APN,{{apn}}#
```
Forma extendida opcional con usuario y contraseña:
```text
APN,{{apn}},{{apnu}},{{apnp}}#
```
Explicación: {{apn}} es el nombre del APN proporcionado por su operador móvil. {{apnu}} y {{apnp}} son marcadores opcionales para usuario y contraseña del APN.

- Configurar el servidor GPRS para usar el dominio Plaspy en el puerto 8888:
```text
SERVER,1,d.plaspy.com,8888,0#
```
O configurar el servidor GPRS usando la IP del servidor Plaspy en el puerto 8888:
```text
SERVER,0,54.85.159.138,8888,0#
```

- Establecer el intervalo de actualización cada 60 segundos. Dos variantes sintácticas comunes:
```text
TIMER,60#
```
o
```text
TIMER,60,60#
```

- Habilitar el modo GPRS:
```text
GPRSON,1#
```

- Para consultar los parámetros GPRS actuales en el dispositivo:
```text
GPRSSET#
```

Notas sobre el envío de comandos: envíe cada SMS al número del dispositivo PL200 y espere la confirmación por SMS del dispositivo (si está configurada) antes de proceder con el siguiente comando. Mantenga el orden para los comandos de servidor y APN para asegurar que el dispositivo pueda establecer conectividad.

## Observaciones sobre la configuración

- Las revisiones de firmware y hardware pueden cambiar la sintaxis de los comandos o las opciones disponibles. Confirme el soporte de comandos para la versión de firmware de su equipo antes de realizar despliegues masivos.
- La configuración por SMS es de uso común en el PL200, pero también pueden existir software del proveedor o herramientas de aprovisionamiento; elija el método que su organización soporte.
- Al configurar el comando SERVER puede usar tanto el dominio d.plaspy.com como la IP 54.85.159.138. Use siempre el puerto 8888 ya que Plaspy emplea el mismo puerto para todos los dispositivos.
- La elección entre UDP o TCP es una opción a nivel de dispositivo; Plaspy detectará el protocolo automáticamente, así que elija el transporte que mejor se adapte a su dispositivo o a los requisitos de red.
- Pruebe cada dispositivo después de la configuración para validar la conectividad GPRS y confirmar que el equipo aparece en Plaspy antes del despliegue final.

## Por qué usar Plaspy con esta configuración

Usar el Concox PL200 con Plaspy ofrece una solución compacta de rastreo personal que envía ubicación, SOS y telemetría de eventos a una plataforma operacional única. Esta configuración permite a las organizaciones mantener visibilidad en tiempo real del personal móvil, recibir alertas oportunas en casos de emergencia y disponer de reportes consistentes mediante los ajustes de servidor compartidos de Plaspy.

Para conocer más sobre Plaspy y cómo integrar dispositivos como el Concox PL200 visite https://www.plaspy.com. Para instrucciones específicas de configuración, notas de firmware y documentación de Concox, verifique la información actual en el sitio del fabricante https://www.iconcox.com/ ya que los métodos y el comportamiento del firmware pueden cambiar con el tiempo.
