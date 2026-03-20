---
slug: /suntech/st410mg/configuration
id: st410mg-configuration
sidebar_label: Configuration
title: Suntech - ST410MG Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del Suntech ST410MG con detalles del servidor Plaspy y comandos SMS para la configuración básica
keywords:
  - Configuración Suntech ST410MG
  - Instalación Suntech ST410MG
  - Rastreador Suntech Plaspy
  - Configuración servidor ST410MG
  - Configuración SMS ST410MG
  - Configuración rastreador GPS
  - Configuración rastreador de activos Plaspy
  - Configuración APN ST410MG
  - Configuración seguimiento de vehículos
  - Compatibilidad ST410MG Plaspy
---

# Suntech - Configuración ST410MG

Esta página reúne la información pública necesaria para usar el Suntech ST410MG con Plaspy. Aquí encontrará los ajustes de servidor prácticos, ejemplos de comandos SMS y notas de procedimiento para apuntar un equipo ST410MG a Plaspy y permitir que envíe posiciones GNSS y telemetría a su cuenta Plaspy.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos exactos en el equipo pueden variar según firmware, revisión de hardware, tipo de instalación y herramientas del proveedor, por lo que la información aquí es una referencia pública práctica. Confirme siempre los detalles específicos del dispositivo con la documentación oficial de Suntech.

## Resumen de la configuración

El proceso de configuración prepara el ST410MG para enviar posiciones y telemetría vía GSM/GPRS a Plaspy y valida que el dispositivo sea visible en la plataforma. Para las unidades ST410MG que soportan configuración por SMS, el fabricante publica formatos de comandos SMS para establecer APN, servidor GPRS, intervalos de reporte y para consultar ajustes actuales.

- Definir el APN del operador móvil y la dirección del servidor GPRS para apuntar el rastreador a Plaspy
- Configurar el intervalo de reporte para que el equipo envíe actualizaciones con la frecuencia deseada
- Seleccionar el modo de transporte UDP o TCP en el puerto 8888 según lo requiera el firmware del dispositivo
- Validar la configuración con un comando de verificación por SMS y confirmar que la unidad aparece en Plaspy
- Asegurarse de derivar correctamente el ID del dispositivo desde el IMEI como se describe más abajo

## Ajustes de servidor de Plaspy

- Dominio del servidor d.plaspy.com  
- IP del servidor 54.85.159.138  
- Puerto 8888  
- Transporte compatible UDP o TCP (el dispositivo puede configurarse para usar cualquiera de los dos)  
- Plaspy detecta automáticamente el protocolo del rastreador y utiliza el mismo puerto para todos los dispositivos soportados

## Requisitos típicos antes de configurar

- Un equipo ST410MG con batería cargada y una tarjeta SIM válida instalada con conectividad móvil habilitada
- Acceso al método de configuración que soporte su unidad, por ejemplo comandos SMS o la herramienta oficial de Suntech
- El APN del operador y, si aplica, el usuario y la contraseña APN que suministre su proveedor celular
- El número IMEI del equipo para derivar el ID de dispositivo usado en los comandos SMS de Suntech
- Un procedimiento de prueba para confirmar que el rastreador reporta a Plaspy tras la configuración

## Cómo se conecta este rastreador a Plaspy

El ST410MG envía posiciones GNSS, estado del equipo y telemetría vía GSM/GPRS al endpoint y puerto del servidor Plaspy. Plaspy recibe esos paquetes, detecta el protocolo del rastreador automáticamente y hace que el dispositivo sea visible en su cuenta Plaspy para monitoreo y alertas.

- El rastreador se apunta al endpoint compartido de Plaspy usando d.plaspy.com o la IP 54.85.159.138
- Envía datos al puerto 8888; Plaspy usa este mismo puerto para todos los dispositivos soportados
- El transporte puede ser UDP o TCP según la configuración y opciones del firmware del dispositivo
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que no es necesario seleccionar un protocolo distinto en la plataforma
- Una vez que comienzan los reportes, Plaspy recibe posiciones y telemetría para monitoreo en tiempo real, alertas por eventos y rutas históricas

## Flujo de configuración habitual

1. Obtenga el IMEI del equipo y las instrucciones oficiales de Suntech o la plantilla de comandos SMS correspondiente a su revisión de firmware. Cuando esté disponible, utilice la herramienta de configuración del fabricante.  
2. Introduzca la dirección del servidor Plaspy especificando d.plaspy.com o la IP del servidor 54.85.159.138 en la configuración del rastreador.  
3. Ajuste el puerto del servidor a 8888. Plaspy usa el mismo puerto para todos los dispositivos.  
4. Elija UDP o TCP si el dispositivo requiere seleccionar el transporte para reportes GPRS.  
5. Configure el APN del operador y las credenciales APN que su SIM requiera, y aplique los ajustes del servidor GPRS.  
6. Guarde la configuración y reinicie el dispositivo si el rastreador necesita reinicio para aplicar los cambios.  
7. Valide que el dispositivo reporte a Plaspy consultándolo con el comando de verificación y confirmando que la unidad aparece en la plataforma Plaspy.

## Comandos de configuración de ejemplo

El ST410MG puede configurarse por SMS usando el formato de comandos de Suntech. El ID del dispositivo usado en los comandos es los últimos seis dígitos del IMEI, excluyendo el dígito checksum final del IMEI. Por ejemplo, si el IMEI aparece como 12345678 901234 5, el ID del dispositivo es 901234.

Comandos SMS comunes publicados por el fabricante y usados en ejemplos públicos:

- Establecer el APN del operador y el servidor GPRS (reemplazar {{apn}}, {{apnu}} y {{apnp}} con los valores de su operador; sustituir {{device_id}} por el ID de seis dígitos derivado del IMEI):

```
SA200NTW;{{device_id}};02;1;{{apn}};{{apnu}};{{apnp}};54.85.159.138;8888;;;;
```

Notas sobre el comando APN:
- {{apn}} es la cadena APN del operador
- {{apnu}} es el usuario APN si su operador lo requiere; dejar vacío si no se usa
- {{apnp}} es la contraseña APN si su operador la requiere; dejar vacío si no se usa
- El ejemplo usa la IP del servidor Plaspy 54.85.159.138 y el puerto 8888; también puede utilizar d.plaspy.com en lugar de la IP si su dispositivo acepta nombres de host

- Establecer el intervalo de reporte a 60 segundos (los parámetros de reporte son específicos del dispositivo; este ejemplo asigna varios campos de intervalo a 60 según la plantilla pública):

```
SA200RPT;{{device_id}};02;60;60;60;3;0;0;0;0;0
```

- Consultar ajustes actuales o enviar un comando de verificación preestablecido:

```
SA200CMD;{{device_id}};02;PresetA
```

Las plantillas públicas originales a veces usan una expresión generada para el ID del dispositivo. Si prefiere seguir la plantilla pública tal cual, el ejemplo del fabricante construye el ID a partir de los últimos dígitos del IMEI. El método simplificado es reemplazar esa construcción con {{device_id}} después de determinar el ID de seis dígitos del IMEI como se mostró arriba.

## Notas de configuración

- Las diferencias de firmware y las revisiones de hardware pueden cambiar los formatos de comandos SMS y los parámetros disponibles; confirme siempre la sintaxis de comandos para su revisión de firmware.  
- La configuración por SMS está documentada públicamente para muchas variantes ST410MG; si dispone de la herramienta de configuración de Suntech o del software del proveedor, use la herramienta oficial cuando esté disponible.  
- Elija UDP o TCP según la recomendación del firmware del dispositivo y la fiabilidad de su red; Plaspy soporta ambos, pero el dispositivo debe estar configurado en consecuencia.  
- Plaspy utiliza el mismo puerto 8888 para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, por lo que una configuración consistente de servidor y puerto simplifica la integración con la plataforma.  
- Si es necesario, reinicie el rastreador después de cambiar la red o los ajustes del servidor para asegurar que los nuevos parámetros se apliquen.

## Por qué usar Plaspy con esta configuración

Usar el ST410MG con Plaspy ofrece una forma directa de capturar telemetría de activos y carga de larga duración en una sola plataforma. Apuntar el equipo a Plaspy usando los ajustes públicos de servidor y comandos SMS verificados permite que las posiciones, la telemetría y los eventos lleguen a su cuenta Plaspy, donde podrá configurar geocercas, alertas por movimiento y notificaciones de batería para operaciones de monitoreo y recuperación.

Para más información sobre Plaspy y las capacidades de la plataforma visite https://www.plaspy.com. Los formatos de comandos específicos del dispositivo, el comportamiento del firmware y los detalles de configuración del fabricante pueden cambiar con el tiempo, por lo que verifique las instrucciones más recientes y las especificaciones técnicas en el sitio oficial de Suntech http://www.suntechint.com/.
