---
slug: /suntech/snt_100/configuration
id: snt_100-configuration
sidebar_label: Configuration
title: Suntech - SNT 100 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el rastreador Suntech SNT 100 con ajustes de servidor Plaspy y comandos SMS
keywords:
  - Configuración Suntech SNT 100
  - Configuración SNT100 Suntech
  - Configurar rastreador GPS Suntech
  - Configuración SNT 100 Plaspy
  - Configuración servidor SNT100
  - Integración rastreador GPS Plaspy
  - Configuración de seguimiento vehicular Suntech
  - Ajustes APN Suntech SNT 100
  - Configuración SMS rastreador GPS
  - Plataforma de seguimiento de flotas Plaspy
---

# Suntech - Configuración del SNT 100

Esta página documenta el contexto público de configuración para usar el terminal de datos Suntech SNT 100 con Plaspy. Resume los pasos prácticos y los comandos SMS públicos que se emplean para apuntar el equipo a los servidores de Plaspy y validar la conectividad, de modo que el rastreador quede visible dentro de la plataforma Plaspy.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos exactos del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El SNT 100 suele configurarse mediante comandos SMS o herramientas del fabricante para definir el APN, la dirección del servidor, el puerto y los intervalos de reporte; los ejemplos en esta página reflejan esos comandos públicos y los ajustes de servidor requeridos por Plaspy.

## Resumen de configuración

El objetivo del proceso es dejar al SNT 100 listo para enviar de forma fiable datos de ubicación y estado a Plaspy, y poder monitorizarlo desde la plataforma. La configuración normalmente incluye establecer la identidad del equipo, los parámetros de datos móviles, el endpoint del servidor y el comportamiento de reporte.

- Configure el APN y los parámetros GPRS del dispositivo para que la unidad alcance la red y Plaspy.
- Apunte el rastreador al endpoint y puerto del servidor Plaspy para que la telemetría llegue a la plataforma.
- Defina el intervalo de reporte y cualquier comportamiento preestablecido necesario para su caso de monitoreo.
- Valide la conectividad y confirme que el dispositivo aparece en Plaspy tras la configuración.
- Use comandos SMS o la herramienta del fabricante según lo requiera el firmware y la instalación específica.

## Ajustes del servidor Plaspy

Al configurar el SNT 100 para Plaspy, use los siguientes ajustes públicos del servidor exactamente como se muestran:

- server domain d.plaspy.com
- server IP 54.85.159.138
- port 8888
- transport support for UDP or TCP (device may be set to either UDP or TCP)
- Plaspy automatically detects the tracker protocol so you do not need to select a protocol in Plaspy

Todos los dispositivos en Plaspy usan el mismo puerto, por lo que el puerto 8888 es el puerto estándar que debe configurar en el rastreador.

## Requisitos previos típicos

- Una tarjeta SIM con datos móviles y capacidad de SMS funcionando instalada en el SNT 100, y los datos APN del operador disponibles.
- El número IMEI del equipo accesible; lo necesitará para calcular el ID del dispositivo usado en los comandos SMS.
- Un teléfono con capacidad SMS o una herramienta de gestión que pueda enviar comandos SMS de configuración al rastreador.
- Acceso al manual de configuración de Suntech o a la herramienta del proveedor para el SNT 100 para confirmar el formato de comandos según su firmware.
- Alimentación aplicada al rastreador y una ubicación estable para la configuración inicial y las pruebas.

## Cómo se conecta este rastreador a Plaspy

El SNT 100 se configura para reportar ubicación y datos del equipo al endpoint y puerto compartidos de Plaspy. Una vez que el dispositivo tenga enlace de datos móviles y los ajustes de servidor correctos, Plaspy recibirá la telemetría y el equipo quedará visible en la plataforma para monitoreo y alertas.

- El rastreador envía reportes periódicos de posición al servidor Plaspy en d.plaspy.com o 54.85.159.138 en el puerto 8888.
- El equipo puede usar transporte UDP o TCP según su configuración; Plaspy acepta ambos y detecta automáticamente el protocolo.
- Actualizaciones de estado, latidos y mensajes de eventos se reenviarán a la plataforma Plaspy para su supervisión operativa.
- Tras una configuración correcta y conectividad en la red, el rastreador debería aparecer e identificarse en Plaspy usando el ID de dispositivo derivado del IMEI.
- Mensajería bidireccional y confirmaciones de comandos (cuando el dispositivo y el firmware lo soporten) se enrutarán por el mismo endpoint de Plaspy.

## Flujo típico de configuración

1. Acceda al método oficial de configuración Suntech o al software para el SNT 100, o prepárese para usar la configuración por SMS si el flujo de instalación lo requiere.
2. Determine el ID del dispositivo a partir del IMEI (ver Comandos de ejemplo más abajo) y reúna el APN del operador, usuario APN y contraseña APN si fueran necesarios.
3. Ingrese la dirección de servidor de Plaspy d.plaspy.com o la IP 54.85.159.138 en la interfaz de configuración del equipo.
4. Establezca el puerto del servidor en 8888 y elija UDP o TCP en el dispositivo si se requiere seleccionar el transporte.
5. Aplique o guarde la configuración y reinicie el equipo si el firmware necesita un reinicio para que los cambios surtan efecto.
6. Valide que el equipo reporte a Plaspy comprobando los mensajes y la presencia del dispositivo en la plataforma.
7. Ajuste los intervalos de reporte y el comportamiento según sea necesario usando los comandos de intervalo del dispositivo y vuelva a confirmar la visibilidad en Plaspy.

## Comandos de configuración de ejemplo

El Suntech SNT 100 puede configurarse enviando comandos SMS al equipo. Los comandos de ejemplo públicos a continuación reflejan el formato del fabricante. El ID del dispositivo usado en estos comandos corresponde a los seis dígitos finales antes del dígito de comprobación final del IMEI. Ejemplo: si el IMEI es 123456789012345, el ID del dispositivo sería 901234 (caracteres 9 a 14 del IMEI según las notas del fabricante).

- Calcular ID del dispositivo
  - Device ID = los seis dígitos justo antes del último dígito del IMEI
  - Ejemplo: IMEI 123456789012345 -> device ID 901234

1) Configurar APN del operador y servidor GPRS
- Comando plantilla (envíe por SMS, reemplace <device_id> y los marcadores APN):
```
SA200NTW;<device_id>;02;1;{{apn}};{{apnu}};{{apnp}};54.85.159.138;8888;;;;
```
Notas:
- {{apn}} es la cadena APN del operador
- {{apnu}} es el usuario APN si el operador lo requiere; deje vacío si no se usa
- {{apnp}} es la contraseña APN si el operador la requiere; deje vacío si no se usa
- Las banderas de transporte y modo en el formato del fabricante pueden variar según el firmware; los valores públicos importantes son la dirección del servidor Plaspy 54.85.159.138 y el puerto 8888

2) Establecer intervalo de actualización/reporte a 60 segundos
- Comando plantilla:
```
SA200RPT;<device_id>;02;60;60;60;3;0;0;0;0;0
```
Esto ajusta el comportamiento de reporte periódico al valor público de ejemplo de 60 segundos para reportes activos.

3) Verificar o solicitar configuraciones preestablecidas del dispositivo
- Comando de verificación:
```
SA200CMD;<device_id>;02;PresetA
```
Este comando solicita al equipo que devuelva los valores actuales de PresetA para que usted pueda confirmar la configuración activa.

Mantenga el orden de comandos al realizar una configuración inicial: primero configure APN y servidor, luego el intervalo de reporte y por último verifique los ajustes. Use el IMEI del equipo para calcular <device_id> antes de enviar los SMS.

## Notas de configuración

- El formato de configuración del SNT 100 y la posición de los parámetros pueden variar según la versión de firmware y la herramienta del proveedor; confirme siempre la sintaxis con el manual del equipo para su firmware específico.
- Estos ejemplos usan configuración por SMS porque forman parte de las instrucciones públicas del fabricante. Algunas instalaciones emplean una herramienta de configuración del proveedor; siga el método oficial que tenga disponible.
- Elija UDP o TCP en el dispositivo según la preferencia del instalador; Plaspy soporta ambos y detectará automáticamente el protocolo en conexiones entrantes al puerto 8888.
- Asegúrese de que el APN y los datos móviles funcionen antes de intentar registrar con el servidor Plaspy d.plaspy.com o 54.85.159.138 para que el dispositivo pueda alcanzar el puerto 8888.
- Si debe reiniciar el rastreador para aplicar los ajustes, hágalo después de guardar los cambios y luego verifique que Plaspy reciba los reportes.

## Por qué usar Plaspy con esta configuración

Usar Plaspy con el Suntech SNT 100 ofrece una vía sencilla para integrar la telemetría del equipo en una única plataforma de monitoreo. Con un endpoint de servidor consistente y detección automática de protocolo, Plaspy simplifica la integración entre dispositivos compatibles y permite a los administradores de flota concentrarse en el monitoreo operativo, las alertas de geocerca y el análisis de comportamiento de conductores en lugar de la configuración de enrutamiento de servidores.

Para saber más sobre Plaspy y las funciones de la plataforma visite https://www.plaspy.com. Por favor verifique los métodos de configuración específicos del dispositivo, el comportamiento del firmware y los detalles del fabricante en el sitio oficial de Suntech http://www.suntechint.com/ ya que las instrucciones del fabricante y el firmware pueden cambiar con el tiempo.
