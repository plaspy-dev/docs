---
slug: /telic/lt910_eubis/configuration
id: lt910_eubis-configuration
sidebar_label: Configuration
title: Telic - LT910-EUbis Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración para Telic LT910-EUbis con ajustes de servidor Plaspy comandos SMS y pasos para integración
keywords:
  - Configuración Telic LT910-EUbis
  - Configuración LT910-EUbis
  - Tracker Telic Plaspy
  - Configuración de servidor LT910-EUbis
  - Configuración rastreador GPS Telic
  - Comandos SMS LT910-EUbis
  - Configuración de dispositivo Plaspy
  - Configuración LTE Telic
  - Rastreo de flotas LT910-EUbis
  - Configuración GPRS LT910-EUbis
---

# Telic - LT910-EUbis Configuración

Esta página documenta el contexto público de configuración para usar el terminal Telic LT910-EUbis con la plataforma Plaspy. Explica los valores públicos de servidor Plaspy que debe usar, los pasos prácticos por SMS y GPRS que admite el equipo, y el flujo general para que el LT910-EUbis empiece a reportar a Plaspy. El contenido se centra en información de configuración disponible públicamente y en los valores esenciales que Plaspy requiere para aceptar conexiones del dispositivo.

Plaspy utiliza un único endpoint y puerto consistente entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta. Los pasos en el lado del fabricante pueden variar según la versión de firmware, la variante de hardware, el tipo de instalación y las herramientas del proveedor. El LT910-EUbis puede configurarse mediante comandos SMS y parámetros GPRS para apuntarlo a Plaspy, por lo que debe revisar tanto esta guía como la documentación oficial de Telic al aplicar los ajustes.

## Resumen de la configuración

Esta configuración prepara el LT910-EUbis para enviar telemetría y datos de ubicación al endpoint compartido de Plaspy. Los pasos prácticos se centran en configurar el APN del dispositivo, dirigir el tráfico GPRS hacia Plaspy, seleccionar el transporte (UDP o TCP si aplica) y verificar que el dispositivo reporte correctamente.

- Use SMS o la herramienta del fabricante para configurar el APN del equipo y las credenciales APN necesarias para que el terminal se pueda conectar a la red celular.
- Configure la dirección del servidor GPRS del dispositivo para apuntar al endpoint de Plaspy para que la telemetría se enrute a la plataforma.
- Seleccione el protocolo de transporte si el equipo requiere elegir explícitamente entre UDP y TCP.
- Active el modo de reporte GPRS para que el terminal establezca una sesión de datos y entregue mensajes a Plaspy.
- Verifique el estado del dispositivo con el comando de comprobación incorporado o confirmando que el dispositivo aparece en la plataforma Plaspy.

## Valores del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP según lo requiera el dispositivo
- Plaspy detecta automáticamente el protocolo del rastreador cuando los dispositivos se conectan

Estos son los valores públicos que deberá ingresar en el dispositivo o mediante SMS al apuntar el rastreador a Plaspy.

## Requisitos habituales antes de la configuración

- Energice el equipo y asegúrese de que esté en un estado listo para configuración.
- Una SIM celular válida con datos habilitados y la información APN proporcionada por su operador.
- Capacidad para enviar comandos SMS al rastreador o acceso a la herramienta oficial de configuración de Telic.
- Conocimiento de la contraseña de administrador del dispositivo o credenciales usadas para comandos remotos; los ejemplos públicos usan la contraseña por defecto indicada más abajo.
- Confirme la cobertura de red para LTE y fallback a 2G si la instalación lo requiere.
- Acceso a una cuenta o a la plataforma Plaspy para validar el dispositivo una vez que se registre.

## Cómo se conecta este rastreador a Plaspy

El LT910-EUbis se configura para abrir una sesión de datos GPRS y enviar su telemetría al endpoint y puerto de Plaspy indicados arriba. Plaspy ingiere los mensajes entrantes del dispositivo, normaliza los datos y pone a disposición la ubicación y el estado para paneles y alertas.

- Se configura el APN y, opcionalmente, las credenciales APN para que el dispositivo pueda registrarse en la red móvil.
- El servidor GPRS se establece para apuntar a Plaspy en 54.85.159.138 o d.plaspy.com en el puerto 8888.
- El equipo selecciona un protocolo de transporte (UDP o TCP) si es necesario y abre una sesión hacia Plaspy.
- Plaspy detecta automáticamente el protocolo del rastreador y comienza a parsear los mensajes entrantes.
- Una vez conectado, el dispositivo reportará posición e información de estado a Plaspy para supervisión y monitoreo.

## Flujo de configuración habitual

1. Acceda al método de configuración oficial de Telic para el LT910-EUbis, por ejemplo la interfaz por comandos SMS o la herramienta del proveedor.
2. Introduzca la dirección del servidor Plaspy usando d.plaspy.com o la IP 54.85.159.138 en los ajustes de servidor del dispositivo.
3. Configure el puerto del servidor en 8888 en la configuración del equipo.
4. Elija UDP o TCP si el dispositivo le pide seleccionar un protocolo de transporte.
5. Configure el APN del operador y, si corresponde, el usuario y la contraseña del APN para que el equipo pueda establecer una sesión GPRS.
6. Guarde o aplique la configuración en el dispositivo y envíe los comandos de activación necesarios para habilitar el reporte GPRS.
7. Reinicie o apague y encienda el equipo si el fabricante lo requiere para aplicar los cambios.
8. Valide que el dispositivo reporte a Plaspy usando el comando de comprobación del equipo o confirmando que aparece en la plataforma Plaspy.

## Comandos de ejemplo para la configuración

El LT910-EUbis puede configurarse enviando comandos SMS al dispositivo. Los ejemplos que siguen están en el mismo orden en que normalmente se aplican. Los comandos de muestra usan la contraseña pública por defecto 123456 según la documentación del equipo. Reemplace los marcadores donde corresponda.

- Restablecimiento de fábrica (paso inicial opcional)
  
```text
begin123456
```

- Ajustar la zona horaria a UTC 0

```text
time zone123456 0
```

- Configurar el APN del operador (reemplazar {{apn}} por el APN de su operador móvil)

```text
apn123456 {{apn}}
```

- Establecer usuario y contraseña del APN si se requieren (reemplazar {{apnu}} y {{apnp}} por las credenciales del operador)

```text
up123456 {{apnu}} {{apnp}}
```

- Configurar el servidor GPRS hacia Plaspy usando la IP pública y el puerto

```text
adminip123456 54.85.159.138 8888
```

- Cambiar al modo GPRS (la forma aceptada puede variar según el firmware)

```text
gprs123456,1,1
```

o

```text
gprs123456
```

- Verificar la configuración actual

```text
check123456
```

Notas sobre los marcadores
- {{apn}} es la cadena APN de su operador móvil requerida para datos.
- {{apnu}} es el nombre de usuario del APN si el operador lo solicita.
- {{apnp}} es la contraseña del APN si el operador la solicita.
- Mantenga la contraseña del dispositivo en los comandos SMS; cambie la contraseña por defecto tras la configuración inicial si el dispositivo lo permite.

## Notas sobre la configuración

- La sintaxis exacta de los SMS y los comandos disponibles puede variar según la versión de firmware. Use los comandos anteriores solo si coinciden con los documentados para su firmware de Telic.
- Elija UDP o TCP según la preferencia del instalador y el comportamiento de la red; Plaspy soporta ambos transportes y detectará automáticamente el protocolo del dispositivo.
- La configuración vía SMS es práctica para instalaciones remotas o en campo, pero asegure el control por SMS y actualice la contraseña por defecto cuando sea posible.
- Los valores de APN y credenciales deben ser proporcionados por su operador móvil; ajustes incorrectos de APN impedirán la conectividad GPRS.
- Plaspy usa el mismo puerto 8888 para todos los dispositivos y la plataforma acepta conexiones a d.plaspy.com o a la IP indicada.

## Por qué usar Plaspy con esta configuración

Usar el LT910-EUbis con Plaspy ofrece a las organizaciones una columna vertebral de comunicaciones celulares confiable para flujos de trabajo de ubicación y telemetría. La conectividad LTE Cat 1bis del terminal y su diseño industrial lo hacen una opción práctica para despliegues que requieren cobertura celular consistente y la capacidad de integrar GNSS y entradas de sensores, al tiempo que entregan datos a Plaspy para monitoreo, alertas e informes.

Learn more about Plaspy on the main website https://www.plaspy.com. For the latest device specific configuration methods, firmware behavior, and official instructions verify setup details on the manufacturer site https://www.telic.de. Manufacturer specifications and setup procedures may change over time so consult Telic documentation when implementing device configuration.
