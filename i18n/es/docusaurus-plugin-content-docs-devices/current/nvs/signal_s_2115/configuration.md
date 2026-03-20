---
slug: /nvs/signal_s_2115/configuration
id: signal_s_2115-configuration
sidebar_label: Configuration
title: NVS - SIGNAL S-2115 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración para NVS SIGNAL S-2115 con ajustes de servidor y comandos SMS para conectar el rastreador a Plaspy
keywords:
  - Configuración NVS SIGNAL S-2115
  - Instalación NVS SIGNAL S-2115
  - SIGNAL S-2115 Plaspy
  - Configuración rastreador NVS
  - Configuración seguimiento vehicular
  - Configuración rastreador GPS
  - Configuración gestión de flotas
  - Integración rastreador GNSS
  - Comandos SMS para rastreador
  - Configuración servidor Plaspy
---

# NVS - SIGNAL S-2115: Configuración

Esta página recopila la información pública de configuración para usar el rastreador NVS SIGNAL S-2115 con Plaspy. Aquí se condensan los pasos y comandos SMS de dominio público que normalmente se emplean para preparar el dispositivo y que pueda reportar ubicación y estado a la plataforma Plaspy. El SIGNAL S-2115 es un kit de monitoreo móvil para vehículos que usa señales GNSS y un protocolo de intercambio abierto, por lo que resulta apto para integrarse con sistemas de terceros como Plaspy.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador. Sin embargo, los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión del hardware, el tipo de instalación y las herramientas del proveedor. Los comandos SMS de ejemplo incluidos aquí reflejan instrucciones públicas y muestran cómo se configuran típicamente el APN, la dirección del servidor, el transporte y el modo GPRS; verifique siempre los detalles contra el firmware de su equipo y la documentación de NVS cuando sea necesario.

## Resumen de la configuración

Esta configuración prepara el SIGNAL S-2115 para enviar datos de posición y del equipo a Plaspy, de modo que la unidad quede visible y sea administrable desde la plataforma. El flujo público de configuración normalmente ajusta el acceso a la red, el endpoint del servidor remoto, el modo de transporte y el comportamiento básico de reporte.

- Configure el APN y, si corresponde, las credenciales del APN para que el equipo pueda establecer una sesión de datos GPRS.
- Apunte el dispositivo a Plaspy estableciendo la dirección del servidor y el puerto compartido que utiliza Plaspy.
- Seleccione el tipo de transporte (UDP o TCP) si el dispositivo lo requiere.
- Habilite el modo de reporte por GPRS para que el rastreador envíe activamente datos a Plaspy.
- Verifique los parámetros del equipo y confirme que el rastreador está reportando a Plaspy mediante un comando de verificación o con el indicador de conectividad en la plataforma.

## Ajustes del servidor Plaspy

- Server domain: d.plaspy.com  
- Server IP: 54.85.159.138  
- Port: 8888  
- Transport: device may be configured to use UDP or TCP on port 8888  
- Plaspy behavior: Plaspy automatically detects the tracker protocol and uses the same port for all supported devices

## Requisitos habituales antes de comenzar

- Una unidad SIGNAL S-2115 con alimentación y acceso a su interfaz de configuración por SMS o a la herramienta del fabricante.  
- Una tarjeta SIM con plan de datos activo y capacidad de SMS instalada en el equipo.  
- El valor APN del operador móvil y, si aplica, usuario y contraseña del APN (aquí se muestran como [apn], [apnu], [apnp]).  
- Acceso para enviar SMS desde un teléfono o una herramienta de aprovisionamiento del fabricante según lo especifique NVS.  
- Conocimiento de la contraseña por defecto del equipo (el ejemplo público usa la contraseña por defecto 123456) y la posibilidad de cambiarla si es necesario.  
- Documentación del fabricante o notas de firmware por si la sintaxis de comandos varía según la revisión del firmware.

## Cómo se conecta este rastreador a Plaspy

Una vez configurado, el SIGNAL S-2115 establece una sesión de datos GPRS con el endpoint del servidor Plaspy y envía reportes periódicos o por eventos para que el equipo sea visible dentro de la plataforma. Plaspy recibe los datos entrantes en el endpoint y puerto compartidos, y asocia el dispositivo a la interfaz de la plataforma mediante la detección automática del protocolo.

- El rastreador se configura con el dominio o IP del servidor Plaspy y el puerto compartido 8888.  
- El equipo abre una conexión GPRS usando el APN y las credenciales configuradas, si el operador las requiere.  
- Los datos se transmiten por TCP o UDP según la selección de transporte del dispositivo.  
- Plaspy detecta automáticamente el protocolo del rastreador y decodifica los mensajes entrantes para obtener ubicación y estado.  
- Una configuración correcta permite visibilidad en tiempo real e informes de eventos en Plaspy.

## Flujo típico de configuración

1. Confirme que el equipo tiene alimentación, que la SIM funciona y tiene datos y SMS habilitados, y consulte el método oficial de configuración de NVS.  
2. Usando las herramientas recomendadas por NVS o comandos SMS, establezca el APN del operador y las credenciales opcionales del APN (use los marcadores [apn], [apnu], [apnp] según corresponda).  
3. Ingrese el endpoint de Plaspy especificando d.plaspy.com o 54.85.159.138 en el equipo.  
4. Configure el puerto 8888 en la página de configuración del rastreador o mediante SMS y seleccione UDP o TCP si el equipo requiere elegir el transporte.  
5. Aplique o guarde la configuración en el rastreador y envíe los comandos necesarios para habilitar el modo de reporte GPRS.  
6. Reinicie el dispositivo si el firmware exige un reboot para que los cambios surtan efecto.  
7. Valide que el equipo reporta a Plaspy usando el comando de verificación del dispositivo o confirmando que aparece en Plaspy.

## Comandos de configuración de ejemplo

Los siguientes comandos están en formato SMS según los ejemplos públicos del fabricante. La contraseña del equipo en estos ejemplos es la predeterminada de fábrica 123456. Mantenga los marcadores tal como están y reemplácelos por los valores de su operador.

- Optional initial factory reset (only if you need to return the device to defaults):
```text
begin123456
```

- Set the device time zone to UTC+0:
```text
time zone123456 0
```

- Set the operator APN (replace [apn] with your operator APN):
```text
apn123456 [apn]
```

- Set the APN username and password if your operator requires them (replace placeholders as needed):
```text
up123456 [apnu] [apnp]
```

- Set the GPRS server to Plaspy using the Plaspy IP and port 8888:
```text
adminip123456 54.85.159.138 8888
```
You can alternatively use the server domain if supported by the device configuration interface:
```text
adminip123456 d.plaspy.com 8888
```

- Switch the tracker to GPRS mode (two common forms shown; use the syntax supported by your firmware):
```text
gprs123456,1,1
```
or
```text
gprs123456
```

- Verify current settings on the device:
```text
check123456
```

Notas sobre los marcadores:
- [apn] es la cadena APN del operador móvil requerida para datos.  
- [apnu] y [apnp] son el usuario y la contraseña del APN cuando el operador exige acceso con credenciales.

## Observaciones de configuración

- El aprovisionamiento por SMS se muestra en el ejemplo público; algunas instalaciones usan una herramienta del fabricante o un cable de configuración en su lugar. Siga el método que NVS recomiende para su versión de firmware.  
- El comportamiento y la sintaxis exacta de los comandos pueden diferir entre versiones de firmware y variantes de hardware; pruebe siempre en un equipo antes de desplegar masivamente.  
- Elija UDP o TCP según sus condiciones de red y el soporte del firmware del dispositivo; Plaspy acepta ambos en el puerto 8888 y detecta el protocolo automáticamente.  
- Mantenga la contraseña del equipo segura; el ejemplo público usa la contraseña por defecto 123456, la cual debería cambiarse tras la configuración inicial si es posible.  
- Cuando sea posible, use el dominio d.plaspy.com por legibilidad, o la IP 54.85.159.138 si el dispositivo no dispone de DNS.

## Por qué usar Plaspy con esta configuración

Utilizar el SIGNAL S-2115 con Plaspy ofrece a los equipos de flota y operaciones una vía sencilla para integrar un receptor GNSS certificado en una plataforma moderna de rastreo y despacho. Con los comandos SMS públicos y el endpoint compartido de Plaspy, el dispositivo puede apuntarse rápidamente a la plataforma para que los datos de ubicación y eventos fluyan hacia Plaspy y se empleen en monitoreo, reportes y despacho.

Para obtener más información sobre Plaspy y cómo funciona con dispositivos NVS visite https://www.plaspy.com. Para las instrucciones específicas de dispositivo más recientes, notas de firmware y documentación oficial verifique los detalles en el sitio del fabricante https://www.nvs-ts.ru/. Las especificaciones y métodos de configuración del fabricante pueden cambiar con el tiempo, por lo que conviene consultar las fuentes oficiales al planear un despliegue.
