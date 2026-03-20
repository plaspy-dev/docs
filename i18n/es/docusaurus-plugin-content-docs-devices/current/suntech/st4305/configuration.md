---
slug: /suntech/st4305/configuration
id: st4305-configuration
sidebar_label: Configuration
title: Suntech - ST4305 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar Suntech ST4305 en Plaspy, con ajustes de servidor, comandos SMS, APN y verificación
keywords:
  - configuración Suntech ST4305
  - configuración ST4305 Plaspy
  - configuración rastreador GPS Suntech
  - configuración servidor ST4305
  - configuración SMS Suntech ST4305
  - ajustes APN ST4305
  - configuración rastreador vehicular Suntech
  - guía ST4305 Plaspy
  - configuración rastreador Suntech
  - seguimiento vehicular ST4305
---

# Suntech - Configuración ST4305

Esta página reúne el contexto público de configuración para usar la serie Suntech ST4305 con Plaspy. Contiene los ajustes de servidor prácticos, plantillas de comandos SMS y las indicaciones de flujo de trabajo que están disponibles públicamente para preparar un dispositivo ST4305 y que reporte en la plataforma Plaspy. Utilice esta página como referencia práctica al integrar dispositivos ST4305 en su flota Plaspy.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador al conectarse, pero los pasos exactos del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El ST4305 soporta configuración por SMS en su guía pública; esta página incluye esas plantillas de comandos SMS y explica cómo obtener el ID de dispositivo requerido y los marcadores de posición como {{apn}}, {{apnu}} y {{apnp}}.

## Resumen de configuración

Preparar un ST4305 para Plaspy implica configurar el dispositivo para que reporte al endpoint compartido de Plaspy y verificar que transmita correctamente datos de ubicación y eventos. El flujo público de configuración para ST4305 suele usar el IMEI para generar un ID de dispositivo y comandos SMS para establecer los parámetros de red y reporte.

- Configure el APN y los ajustes GPRS/servidor para que el rastreador alcance Plaspy.  
- Establezca el intervalo de reporte y otros parámetros de telemetría según la visibilidad de flota requerida.  
- Asegúrese de que el ID del dispositivo se derive correctamente desde el IMEI para que Plaspy asocie la telemetría entrante con el activo correcto.  
- Verifique la conectividad usando el comando de verificación del fabricante y confirme que el dispositivo aparezca en Plaspy.  
- Use los ajustes de servidor compartidos de Plaspy (dominio o IP y puerto) para que el rastreador envíe datos al endpoint que Plaspy monitorea.

## Ajustes del servidor Plaspy

- Server domain: d.plaspy.com  
- Server IP: 54.85.159.138  
- Port: 8888 (used by all devices in Plaspy)  
- Transport: UDP or TCP supported by the device; choose the transport if required by the device configuration method  
- Plaspy automatically detects the tracker protocol when the device connects to the server

Estos son los valores públicos de Plaspy que debe usar al configurar un ST4305 para que reporte en la plataforma.

## Requisitos habituales antes de la configuración

- Una unidad ST4305 alimentada y accesible con su IMEI disponible (el IMEI es necesario para derivar el ID del rastreador).  
- Una tarjeta SIM activa con datos y capacidad de SMS apropiada para la red móvil y la variante de dispositivo objetivo.  
- Información del APN y, opcionalmente, usuario y contraseña del APN proporcionada por el operador para completar los marcadores {{apn}}, {{apnu}} y {{apnp}}.  
- Acceso al método de configuración recomendado por el fabricante (comandos SMS, herramienta de servicio o utilidad de configuración) para aplicar los ajustes.  
- Conocimientos básicos sobre si el dispositivo debe usar UDP o TCP para la conexión, en caso de que sea necesario seleccionar el transporte.  
- Acceso a una cuenta Plaspy o pasos de onboarding para confirmar que el dispositivo aparece en la plataforma una vez que empiece a reportar.

## Cómo se conecta este rastreador a Plaspy

El ST4305 se configura para enviar su ubicación y telemetría a la plataforma Plaspy usando el endpoint y el puerto compartidos de Plaspy. Normalmente el dispositivo utiliza su enlace celular para alcanzar el APN configurado y luego envía la telemetría a la dirección y puerto del servidor Plaspy.

- El rastreador se configura para reportar a d.plaspy.com o a la IP del servidor Plaspy 54.85.159.138 en el puerto 8888.  
- El transporte de datos puede ser UDP o TCP dependiendo de la configuración del dispositivo y la elección del instalador.  
- Plaspy inspecciona automáticamente las conexiones entrantes y detecta el protocolo del rastreador para identificar los dispositivos sin necesidad de seleccionar el protocolo por separado en la plataforma.  
- Una vez configurado y en línea, el dispositivo envía reportes periódicos de posición y eventos al intervalo configurado para mostrar mapas en vivo e historial en Plaspy.  
- Se pueden usar comandos de verificación o comprobaciones preestablecidas para confirmar que el dispositivo aceptó los ajustes antes de validar en el lado de Plaspy.

## Flujo de configuración habitual

1. Acceda al método oficial de configuración Suntech para el ST4305 (comandos SMS según el fabricante o su herramienta de configuración).  
2. Determine el ID de dispositivo a partir del IMEI: elimine el último dígito y tome los seis dígitos finales del IMEI resultante. Por ejemplo, el IMEI 123456789012345 genera el ID de dispositivo 901234 según el ejemplo del fabricante.  
3. Ingrese la dirección del servidor Plaspy (d.plaspy.com) o la IP del servidor (54.85.159.138) en la configuración del dispositivo.  
4. Establezca el puerto en 8888 (Plaspy utiliza el mismo puerto para todos los dispositivos).  
5. Elija el transporte UDP o TCP si el dispositivo requiere selección de transporte y la instalación necesita un transporte específico.  
6. Aplique o guarde la configuración en el dispositivo usando el método del fabricante (envíe comandos SMS o use la herramienta).  
7. Reinicie o haga un ciclo de alimentación del dispositivo si el firmware lo exige para aplicar los ajustes.  
8. Valide que el dispositivo reporte a Plaspy usando el comando de verificación del fabricante y confirme que el dispositivo aparece en Plaspy.

## Ejemplos de comandos de configuración

La guía pública del ST4305 proporciona plantillas de comandos SMS para la configuración de red y reporte. El fabricante usa un ID de dispositivo derivado del IMEI (los seis dígitos previos al último dígito del IMEI). Los marcadores {{apn}}, {{apnu}} y {{apnp}} deben sustituirse por el APN, usuario y contraseña del operador cuando sea necesario. Reemplace {{device_id}} con el ID de seis dígitos derivado del IMEI como se describió arriba.

1) Configurar el APN del operador y el servidor GPRS (incluye la IP y el puerto de Plaspy)
```text
SA200NTW;{{device_id}};02;0;{{apn}};{{apnu}};{{apnp}};54.85.159.138;8888;;;;
```
- Notas:  
  - {{device_id}} es el ID derivado del IMEI (los últimos 6 dígitos excluyendo el dígito final del IMEI).  
  - Los campos de APN {{apn}}, {{apnu}} y {{apnp}} deben rellenarse con los valores de su operador.  
  - El comando incluye la IP del servidor Plaspy 54.85.159.138 y el puerto 8888. Puede sustituir d.plaspy.com en lugar de la IP si el dispositivo acepta nombres de dominio.

2) Establecer el intervalo de reporte a 60 segundos
```text
SA200RPT;{{device_id}};02;60;60;60;3;0;0;0;0;0
```
- Notas: Este comando configura múltiples intervalos de reporte; el ejemplo establece un intervalo principal de 60 segundos.

3) Consultar la configuración o solicitar los parámetros actuales del Preset A
```text
SA200CMD;{{device_id}};02;PresetA
```
- Notas: Use este comando de verificación para solicitar al dispositivo que devuelva los valores actuales de PresetA y poder confirmar que los ajustes se aplicaron.

Conserve el orden anterior al aplicar estos comandos si el dispositivo espera que se configuren primero los parámetros de red antes de los cambios de intervalo de reporte. Si su dispositivo soporta enviar el servidor por nombre de dominio, puede usar el dominio d.plaspy.com en lugar de la IP numérica.

## Notas de configuración

- La sintaxis exacta de los SMS y el orden de los parámetros pueden variar según la versión de firmware y la variante regional del dispositivo; siempre verifique el formato de comando con la documentación del fabricante para su revisión de dispositivo.  
- El flujo público del ST4305 en estos ejemplos usa comandos SMS, por lo que debe asegurarse de que la SIM pueda recibir SMS y de que el dispositivo tenga conectividad GSM durante la configuración.  
- Elija UDP o TCP según las condiciones de la instalación y la red; algunos instaladores prefieren UDP por menor overhead y otros usan TCP por su entrega garantizada. Plaspy soporta ambos y detecta el protocolo automáticamente.  
- Los marcadores {{apn}}, {{apnu}} y {{apnp}} deben completarse con los valores del operador. Si su SIM no requiere usuario o contraseña, deje {{apnu}} y {{apnp}} vacíos según lo permita la sintaxis del dispositivo.  
- El ID del dispositivo se deriva del IMEI usando la regla del fabricante mostrada arriba; un ID incorrecto impedirá que Plaspy asocie la telemetría con el activo correspondiente.

## Por qué usar Plaspy con esta configuración

Configurar el ST4305 para que reporte a Plaspy brinda a los operadores de flota visibilidad centralizada sobre la ubicación del vehículo, el estado y los eventos reportados. Los ajustes de servidor recomendados por Plaspy y los comandos SMS de ejemplo ayudan a poner un ST4305 en línea con Plaspy para seguimiento en tiempo real, alertas e informes históricos que respaldan operaciones de flota y procesos de recuperación.

Para obtener más información sobre Plaspy y las características de la plataforma visite https://www.plaspy.com. Para métodos de configuración específicos del dispositivo, comportamiento del firmware y guías del fabricante verifique los detalles en el sitio oficial de Suntech http://www.suntechint.com/ ya que las especificaciones y los pasos de configuración del fabricante pueden cambiar con el tiempo.
