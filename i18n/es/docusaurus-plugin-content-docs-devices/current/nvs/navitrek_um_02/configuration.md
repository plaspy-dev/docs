---
slug: /nvs/navitrek_um_02/configuration
id: navitrek_um_02-configuration
sidebar_label: Configuration
title: NVS - Navitrek UM-02 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración para NVS Navitrek UM-02 con valores de servidor Plaspy y comandos SMS/GPRS para seguimiento fiable
keywords:
  - Configuración NVS Navitrek UM-02
  - Configuración Navitrek UM-02
  - Configuración de rastreador NVS
  - Configuración GPRS Navitrek
  - Configuración de rastreador Plaspy
  - Configuración de rastreador GPS
  - Configuración de servidor Navitrek UM-02
  - Configuración de rastreo de vehículos
  - Configuración Plaspy para seguimiento de activos
  - Configuración APN Navitrek
---

# NVS - Navitrek UM-02: configuración

Esta página documenta el contexto público de configuración para usar el NVS Navitrek UM-02 con Plaspy. Se centra en los ajustes prácticos del servidor y en los comandos por SMS publicados para este modelo, de modo que usted pueda preparar el dispositivo para reportar ubicación y estado a la plataforma Plaspy.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos de configuración en el lado del fabricante, como la sintaxis de SMS, el comportamiento del firmware o las herramientas del proveedor, pueden variar según la versión de firmware, la revisión de hardware y el tipo de instalación; use esta guía junto con la documentación oficial de NVS.

## Resumen de configuración

El Navitrek UM-02 es un dispositivo autónomo de búsqueda y rastreo que puede transmitir por GPRS y SMS. El proceso de configuración prepara el equipo para usar la red móvil, apunta su conexión de datos al servidor de Plaspy y habilita el reporte para que la unidad sea visible en la plataforma Plaspy.

- Configure el APN del dispositivo y, si aplica, las credenciales del APN para que pueda establecer datos GPRS.
- Establezca la dirección y el puerto del servidor Plaspy para que los datos del dispositivo se envíen al endpoint correcto.
- Active el modo de reporte por GPRS para que el rastreador use canales de datos en lugar de, o además de, SMS.
- Verifique los ajustes y la capacidad de respuesta del equipo usando el comando de verificación o los mensajes de estado.
- Confirme la visibilidad y la telemetría en Plaspy una vez que el dispositivo esté configurado y en línea.

## Ajustes del servidor Plaspy

- Dominio del servidor Plaspy d.plaspy.com  
- IP del servidor Plaspy 54.85.159.138  
- Puerto 8888  
- Soporte de transporte UDP o TCP dependiendo de la selección en el dispositivo  
- Plaspy detecta automáticamente el protocolo del rastreador y todos los dispositivos usan el mismo puerto en Plaspy

## Requisitos típicos antes de la configuración

- Una unidad Navitrek UM-02 con alimentación y en funcionamiento, con acceso al número de control por SMS.  
- Una tarjeta SIM activa con datos y SMS habilitados y conocimiento del APN del operador móvil.  
- Conocimiento del método de comandos por SMS del dispositivo o acceso a la herramienta/instrucciones oficiales de NVS.  
- La contraseña del equipo para la configuración vía SMS; el ejemplo público usa la contraseña por defecto 123456.  
- Capacidad para recibir respuestas SMS del dispositivo para validar los comandos y ajustes.  

## Cómo se conecta este rastreador a Plaspy

El Navitrek UM-02 se conecta a Plaspy estableciendo una sesión de datos GPRS y enviando su telemetría al endpoint y puerto del servidor Plaspy. La configuración se realiza habitualmente enviando comandos SMS al dispositivo para establecer el APN, el servidor y el modo de operación.

- El dispositivo se apunta a Plaspy configurando el dominio del servidor o la IP del servidor en d.plaspy.com o 54.85.159.138.  
- El puerto para todos los dispositivos Plaspy es 8888 y debe configurarse en el rastreador.  
- El transporte puede configurarse como UDP o TCP en el dispositivo, si el firmware lo requiere.  
- Una vez habilitado el modo GPRS, el rastreador inicia conexiones al endpoint de Plaspy y Plaspy detecta el protocolo automáticamente.  
- Plaspy pasa a ser el receptor de las actualizaciones de ubicación e informes de eventos para la visibilidad y monitoreo en la plataforma.

## Flujo habitual de configuración

1. Acceda al método oficial de configuración NVS para el Navitrek UM-02, normalmente mediante comandos SMS publicados por el fabricante o usando su herramienta de configuración.  
2. Ingrese el servidor Plaspy especificando el dominio d.plaspy.com o la IP del servidor 54.85.159.138 en los ajustes del dispositivo.  
3. Configure el puerto en 8888 para la conexión del dispositivo.  
4. Seleccione UDP o TCP si el firmware del equipo requiere elegir un protocolo de transporte.  
5. Configure el APN del dispositivo y, si corresponde, el usuario y la contraseña del APN para que GPRS pueda conectarse.  
6. Aplique o guarde la configuración y reinicie el dispositivo si es necesario para que los cambios surtan efecto.  
7. Valide que el dispositivo informe a Plaspy usando el comando de verificación del equipo o comprobando el estado en la plataforma Plaspy.

## Comandos de ejemplo

El Navitrek UM-02 admite configuración por SMS usando la contraseña del dispositivo. Los ejemplos públicos abajo usan la contraseña por defecto 123456. Envíe cada línea como SMS al número del rastreador en el orden indicado cuando el orden sea importante.

- Reinicio de fábrica inicial opcional (usar solo si es necesario)
```
begin123456
```

- Ajustar la zona horaria a UTC 0
```
time zone123456 0
```

- Establecer el APN del operador
```
apn123456 [apn]
```
Nota: reemplace [apn] por la cadena APN de su operador móvil.

- Establecer usuario y contraseña del APN si el operador los requiere
```
up123456 [apnu] [apnp]
```
Nota: reemplace [apnu] por el usuario del APN y [apnp] por la contraseña del APN. Son opcionales y solo necesarios cuando el operador exige autenticación.

- Configurar el servidor GPRS a Plaspy usando la IP pública y el puerto
```
adminip123456 54.85.159.138 8888
```
Esto apunta el dispositivo directamente a la IP y puerto del servidor Plaspy. Alternativamente, puede usar el dominio d.plaspy.com si el dispositivo acepta nombres de dominio.

- Cambiar el dispositivo a modo GPRS (dos variantes comunes)
```
gprs123456,1,1
```
o
```
gprs123456
```

- Verificar los ajustes actuales en el dispositivo
```
check123456
```

## Notas de configuración

- Los comandos SMS de ejemplo arriba usan la contraseña pública por defecto 123456. Si la contraseña de su equipo es distinta, reemplace 123456 por la contraseña correcta.  
- La configuración vía SMS y el modo GPRS dependen del comportamiento del firmware; la sintaxis de comandos y las variantes disponibles pueden cambiar entre versiones de firmware.  
- Elija TCP o UDP según las opciones del dispositivo. Plaspy soporta ambos transportes en el puerto 8888 y detectará el protocolo automáticamente.  
- Al usar adminip con IP y puerto, puede sustituir por d.plaspy.com si el equipo acepta nombres de dominio en lugar de direcciones IP.  
- Use el comando de verificación check123456 para confirmar que el dispositivo aceptó los ajustes y para recuperar parámetros actuales vía SMS si el equipo lo soporta.

## Por qué usar Plaspy con esta configuración

Configurar el Navitrek UM-02 para que reporte a Plaspy proporciona a las organizaciones visibilidad uniforme de los dispositivos en flotas o grupos de activos. Al dirigir el tráfico GPRS al endpoint y puerto compartidos de Plaspy, los informes de ubicación y eventos de la unidad quedan disponibles para monitorización, generación de reportes y flujos operativos dentro de la plataforma.

Learn more about Plaspy on the main website https://www.plaspy.com and verify the latest device specific configuration details, firmware notices, and installation guidance on the manufacturer site https://www.nvs-ts.ru/. Manufacturer specifications and setup methods can change over time so confirm current procedures on the official NVS resources.
