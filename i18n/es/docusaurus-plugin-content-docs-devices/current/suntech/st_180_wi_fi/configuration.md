---
slug: /suntech/st_180_wi_fi/configuration
id: st_180_wi_fi-configuration
sidebar_label: Configuration
title: Suntech - ST 180 Wi-FI Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar Suntech ST 180 Wi‑FI y conectarlo a Plaspy con ajustes compartidos y ejemplos de SMS
keywords:
  - Configuración Suntech ST 180 Wi-FI
  - Configuración Suntech ST 180 Plaspy
  - Configuración servidor ST 180 Wi‑Fi
  - Configuración rastreador GPS ST180
  - Comandos SMS Suntech
  - Configuración rastreador Wi‑Fi Suntech
  - Integración rastreador Plaspy
  - Configuración rastreador vehicular Plaspy
  - Configuración plataforma GPS ST180
  - Configuración rastreador de flota Suntech
---

# Suntech - Configuración ST 180 Wi‑FI

Esta página documenta el contexto de configuración pública para usar el rastreador Suntech ST 180 Wi‑FI con Plaspy. Se enfoca en los ajustes prácticos del servidor, los pasos preparatorios necesarios y los comandos SMS públicos que el fabricante muestra para apuntar el equipo a los servidores de Plaspy. Use esta guía para entender cómo dirigir un ST 180 Wi‑FI hacia Plaspy y validar la conectividad en la plataforma.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando llegan los datos. Los pasos exactos en el lado del fabricante pueden variar según el firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Donde Suntech proporciona sintaxis de comandos SMS, se incluye a continuación; siempre verifique los detalles del firmware antes de aplicar configuraciones en producción.

## Resumen de la configuración

Este proceso prepara al ST 180 Wi‑FI para reportar ubicación y datos del dispositivo a Plaspy y para que el equipo aparezca en la plataforma. Los pasos públicos mostrados aquí usan la sintaxis de SMS proporcionada por el fabricante y los datos del endpoint de Plaspy que aplican a todos los dispositivos soportados.

- Configure el rastreador para que pueda alcanzar el endpoint del servidor de Plaspy y el puerto utilizado por todos los dispositivos Plaspy.
- Proporcione el ID del dispositivo derivado del IMEI y establezca las credenciales APN del operador cuando sean necesarias.
- Seleccione el protocolo de transporte si el rastreador requiere elegir UDP o TCP y ajuste el puerto al puerto de Plaspy.
- Valide la configuración usando el comando de verificación o revisando los reportes del equipo dentro de Plaspy después de reiniciar el dispositivo.
- Utilice métodos de aprovisionamiento por Wi‑Fi o GSM que el ST 180 soporte para descargar o aplicar ajustes según permita la unidad y el firmware.

## Ajustes del servidor Plaspy

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP (the device may be configured using UDP or TCP on port 8888)
- Plaspy automatically detects the tracker protocol when devices send data to the shared server and port

Tenga en cuenta que Plaspy usa el mismo puerto para todos los dispositivos soportados y detectará el protocolo automáticamente según los datos entrantes.

## Requisitos típicos antes de la configuración

- Una unidad Suntech ST 180 Wi‑FI con alimentación y accesible, con el número IMEI conocido.
- Acceso al método de configuración del fabricante que soporte su dispositivo, como comandos SMS, herramienta de configuración local o aprovisionamiento por Wi‑Fi cuando esté disponible.
- Una SIM válida con datos habilitados y los detalles APN correctos si configura vía GSM/GPRS, o acceso al aprovisionamiento por Wi‑Fi si usa descarga en la red local.
- El IMEI del dispositivo para derivar el ID del equipo usado en los comandos SMS según se describe en los pasos de ejemplo abajo.
- Un método para enviar SMS al dispositivo si decide usar el método de configuración por SMS mostrado en el ejemplo público.

## Cómo se conecta este rastreador a Plaspy

El ST 180 Wi‑FI se configura para reportar posición y eventos del dispositivo al endpoint y puerto compartidos de Plaspy. Una vez que el dominio o IP del servidor y el puerto estén establecidos en el equipo y la conectividad esté disponible, Plaspy detectará el protocolo automáticamente y aceptará los datos del dispositivo.

- El rastreador se apunta a d.plaspy.com o directamente a la IP 54.85.159.138 usando el puerto 8888.
- El transporte puede seleccionarse como UDP o TCP según el firmware del equipo y la preferencia del instalador.
- Tras la configuración y un reinicio, el equipo envía reportes periódicos al servidor de Plaspy donde aparecen en la plataforma.
- La detección automática de protocolo de Plaspy gestiona el tipo de conexión entrante, por lo que no es necesario preseleccionar un protocolo en la plataforma.
- La validación se realiza comprobando que el rastreador aparece y envía telemetría a Plaspy después de la configuración y el reinicio.

## Flujo de trabajo típico de configuración

1. Obtenga el IMEI del dispositivo y revise los métodos de configuración y la sintaxis SMS que proporciona Suntech para el ST 180 Wi‑FI.
2. Acceda al método oficial de configuración o software que soporte su unidad (SMS, aprovisionamiento por Wi‑Fi o herramientas de Suntech).
3. Ingrese el endpoint del servidor de Plaspy especificando d.plaspy.com o la dirección IP 54.85.159.138 en el dispositivo.
4. Establezca el puerto del dispositivo en 8888, ya que Plaspy usa el mismo puerto para todos los dispositivos compatibles.
5. Seleccione UDP o TCP en el rastreador si la unidad requiere elegir un tipo de transporte.
6. Aplique o guarde la configuración en el dispositivo y reinícielo si es necesario para que los ajustes entren en vigor.
7. Valide que el equipo reporte a Plaspy revisando el estado del dispositivo en la plataforma o mediante el comando de verificación proporcionado por el fabricante.

## Comandos de configuración de ejemplo

El ejemplo público de Suntech usa comandos SMS para configurar parámetros de red y reporte. El ID del dispositivo en los comandos se deriva del IMEI como se indica abajo. Estos comandos se muestran en la sintaxis pública del fabricante y se incluyeron aquí para mayor claridad.

Device ID derivation
- The device ID is the six digits immediately before the last IMEI digit. In other words, remove the final IMEI digit and take the resulting last six digits.
- Example: if IMEI is 123456789012345 the device ID is 901234 (the six digits before the final digit 5).

Configuration commands (send by SMS to the device)

1) Set operator APN and the GPRS server pointing to Plaspy
- The fourth field is a flag set to 1 if APN username or password are provided, otherwise 0.
- Replace <device_id> with the six digit ID derived from the IMEI.
- Keep the placeholders {{apn}}, {{apnu}}, and {{apnp}} and substitute actual APN values when needed.

```
SA200NTW;<device_id>;02;<apn_flag>;{{apn}};{{apnu}};{{apnp}};54.85.159.138;8888;;;;
```

Example with flag explanation
- If you provide APN username or password set <apn_flag> to 1
- If no username or password set <apn_flag> to 0

2) Set the update/reporting interval to 60 seconds
- Replace <device_id> with your device ID.

```
SA200RPT;<device_id>;02;60;60;60;3;0;0;0;0;0
```

3) Check settings (verification command)
- Replace <device_id> with your device ID.

```
SA200CMD;<device_id>;02;PresetA
```

Notes on placeholders
- {{apn}} is the mobile operator APN
- {{apnu}} is the APN username if required
- {{apnp}} is the APN password if required
- <apn_flag> should be 1 when APN username or password fields are used and 0 when they are empty

Envíe estos comandos SMS en el orden indicado para aplicar los ajustes de red y los intervalos de reporte; luego reinicie o espere a que el dispositivo aplique la configuración según su comportamiento.

## Observaciones de configuración

- El ejemplo del fabricante utiliza configuración vía SMS; si su unidad soporta aprovisionamiento por Wi‑Fi o una herramienta de configuración, use el método oficial recomendado por Suntech para su versión de firmware.
- Las revisiones de firmware y las variantes de hardware pueden cambiar la sintaxis de los comandos o los parámetros requeridos. Confirme el formato exacto del comando para su dispositivo antes de enviar SMS.
- Elija TCP o UDP según la preferencia del instalador y el soporte del firmware del dispositivo; Plaspy detectará el protocolo automáticamente una vez que el equipo se conecte al servidor y puerto compartidos.
- Verifique siempre la derivación del ID del dispositivo a partir del IMEI para su unidad, tal como se muestra arriba, antes de enviar comandos.
- Si el operador requiere usuario o contraseña del APN, establezca la bandera APN a 1 en el comando SA200NTW; de lo contrario, póngala en 0.

## Por qué usar Plaspy con esta configuración

Usar el Suntech ST 180 Wi‑FI con Plaspy ofrece una forma directa de recopilar datos de ubicación y eventos de vehículos en una plataforma hospedada única. Apuntar el rastreador al endpoint y puerto compartidos de Plaspy simplifica la incorporación de dispositivos porque Plaspy usa el mismo puerto para todos los equipos compatibles y realiza la detección automática del protocolo.

Para más información sobre Plaspy y los servicios que ofrece visite https://www.plaspy.com. Para los comandos específicos más recientes, notas de firmware y la documentación completa del fabricante, verifique los detalles en el sitio oficial de Suntech http://www.suntechint.com/ ya que los métodos de configuración y el comportamiento del firmware pueden cambiar con el tiempo.
