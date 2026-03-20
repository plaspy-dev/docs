---
slug: /sanav/gx_101/configuration
id: gx_101-configuration
sidebar_label: Configuration
title: Sanav - GX-101 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el rastreador Sanav GX-101 y conectarlo a Plaspy
keywords:
  - Configuración Sanav GX-101
  - Instalación Sanav GX-101
  - Configuración Plaspy
  - Configuración rastreador GPS
  - Configuración seguimiento de vehículos
  - Configuración servidor Sanav GX-101
  - Configuración plataforma de rastreo
  - Configuración GPRS para rastreador
  - Comandos SMS de configuración
  - Integración seguimiento de flotas
---

# Sanav - GX-101 Configuración

Esta página describe la configuración pública necesaria para usar el rastreador GPS Sanav GX-101 con Plaspy. Aquí se detallan los ajustes y comandos de uso público que permiten apuntar un GX-101 al endpoint del servidor de Plaspy para que el equipo reporte ubicación y telemetría básica a la plataforma.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador; sin embargo, los pasos exactos en el lado del fabricante pueden variar según la revisión de firmware, la versión de hardware, el tipo de instalación y las herramientas de configuración del proveedor. El GX-101 admite flujos de configuración por SMS y GPRS; los comandos SMS del fabricante que se muestran a continuación son ejemplos públicos comúnmente usados para configurar el servidor GPRS y el comportamiento de reporte.

## Resumen de configuración

Este proceso prepara el GX-101 para comunicarse con Plaspy ajustando el APN del operador, el endpoint del servidor GPRS, el modo de transporte y los intervalos de reporte. Los comandos que siguen están ordenados según el uso típico en una configuración inicial y asumen que la contraseña SMS por defecto del dispositivo es 0000, salvo que usted o su proveedor la hayan cambiado.

- Establecer el APN del operador para que el rastreador pueda abrir una conexión de datos GPRS.
- Apuntar el servidor GPRS del dispositivo al endpoint de Plaspy para que los datos lleguen a la plataforma.
- Seleccionar el transporte (UDP o TCP) y el puerto de Plaspy para que el dispositivo use el mismo puerto que otros dispositivos soportados.
- Configurar el intervalo de reporte para controlar la frecuencia de actualización de la ubicación.
- Opcionalmente realizar un restablecimiento de fábrica si necesita restaurar valores predeterminados antes de aplicar la nueva configuración.

## Ajustes del servidor de Plaspy

- dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- puerto 8888
- transporte compatible UDP o TCP
- detección automática de protocolo en Plaspy

Estos valores corresponden al endpoint y puerto compartidos de Plaspy utilizados por todos los dispositivos soportados. Plaspy detectará automáticamente el protocolo del rastreador una vez que el dispositivo empiece a enviar datos al endpoint configurado.

## Requisitos típicos antes de la configuración

- Una tarjeta SIM con plan de datos activo y capacidad de SMS insertada en el GX-101.
- El dispositivo encendido y accesible para enviar comandos SMS o usar la herramienta oficial de configuración.
- Información del APN del operador, nombre de usuario APN y contraseña APN del proveedor celular.
- Conocer la contraseña SMS por defecto del dispositivo (en los ejemplos se usa 0000).
- Capacidad para recibir las respuestas del dispositivo vía SMS para confirmar la aceptación de los comandos.
- Acceso al método oficial de configuración Sanav o la documentación correspondiente a su versión de firmware.

## Cómo se conecta este rastreador a Plaspy

El GX-101 se configura para enviar datos de ubicación y estado por la red celular al endpoint y puerto compartidos de Plaspy. Una vez que el dispositivo abra una sesión GPRS y transmita datos al servidor configurado, Plaspy detectará el protocolo y empezará a procesar los mensajes para mostrarlos y gestionarlos en la plataforma.

- El rastreador usa GPRS para transmitir los datos de posición al endpoint configurado.
- Configure el servidor GPRS a 54.85.159.138:8888 para que los datos lleguen a Plaspy.
- Alternativamente, los administradores pueden usar el dominio de servidor d.plaspy.com con el mismo puerto al ingresar los ajustes.
- Seleccione UDP o TCP en el dispositivo si la opción de transporte es requerida por el equipo.
- Plaspy detecta automáticamente el protocolo del dispositivo cuando llegan datos al puerto 8888.

## Flujo de configuración típico

1. Acceda al método oficial de configuración Sanav o al software provisto, o prepárese para enviar comandos SMS según la documentación del dispositivo.
2. Ingrese d.plaspy.com o 54.85.159.138 como endpoint del servidor GPRS en la configuración del equipo.
3. Establezca el puerto en 8888 para todos los dispositivos, ya que Plaspy utiliza el mismo puerto para los rastreadores soportados.
4. Seleccione UDP o TCP en el dispositivo si la interfaz de configuración lo solicita.
5. Configure el APN del operador y las credenciales APN necesarias (los marcadores [apn], [apnu], [apnp] se usan comúnmente en comandos SMS).
6. Aplique o guarde la configuración y reinicie el dispositivo si es necesario para que los cambios entren en vigor.
7. Valide que el dispositivo reporte a Plaspy confirmando que aparece en la plataforma tras enviar sus primeros paquetes de datos.

## Ejemplos de comandos de configuración

Para configurar el GX-101 usando comandos SMS, envíe los siguientes mensajes al número del dispositivo. Los comandos mostrados son ejemplos públicos proporcionados por el fabricante. La contraseña por defecto del dispositivo en estos ejemplos es 0000.

- Restablecimiento de fábrica (paso inicial opcional)
```text
#username,0000,9*
```

- Establecer el APN del operador (reemplace los marcadores por los valores de su operador)
```text
#username,0000,3,[apn],[apnu],[apnp]*
```
Explicación: [apn] es el APN del operador, [apnu] es el nombre de usuario APN si se requiere, y [apnp] es la contraseña APN si se requiere. Mantenga los marcadores si su proveedor los solicita; omita campos vacíos según la guía del fabricante.

- Establecer el servidor GPRS a Plaspy (IP pública y puerto de Plaspy)
```text
#username,0000,18,54.85.159.138:8888*
```

- Establecer la ruta para la transmisión de datos (seleccione el modo de ruta según requiera el dispositivo)
```text
#username,0000,14,9*
```

- Establecer intervalo de actualización a 60 segundos para el reporte
```text
#username,0000,6,60,9999*
```

Siga el orden de comandos mostrado para una configuración inicial cuando necesite un restablecimiento y luego aplicar APN y ajustes de servidor. Si su instalación requiere normas de tiempo o reporte distintas, ajuste el comando de intervalo en consecuencia.

## Notas de configuración

- Las revisiones de firmware y hardware pueden cambiar la sintaxis o el comportamiento de los comandos; siempre confirme los comandos según la versión de firmware de su dispositivo.
- El GX-101 admite configuración por SMS según los ejemplos anteriores; algunos proveedores o instaladores pueden preferir una herramienta de configuración del vendedor o una conexión por cable.
- Seleccione UDP o TCP según las necesidades de su instalación; Plaspy soporta ambos y detectará el protocolo automáticamente.
- Los ejemplos usan la contraseña por defecto 0000; si esta fue cambiada, utilice la contraseña activa del dispositivo al enviar comandos SMS.
- Use el dominio d.plaspy.com o la IP 54.85.159.138 con el puerto 8888 al configurar los ajustes del servidor en el dispositivo.

## Por qué usar Plaspy con esta configuración

Apuntar el Sanav GX-101 a Plaspy con los ajustes de servidor compartidos ofrece a los operadores de flotas una forma sencilla de centralizar los datos de los dispositivos. Al configurar el APN y el servidor GPRS hacia el endpoint y puerto de Plaspy, el GX-101 puede transmitir de manera fiable su posición y los eventos de reporte para que Plaspy los muestre y procese para la supervisión operativa.

Para conocer más sobre Plaspy y las capacidades de la plataforma visite https://www.plaspy.com. Para obtener los comandos más actualizados, notas de firmware y la guía del fabricante verifique la información en el sitio oficial de Sanav http://es.sanav.com/ ya que los procedimientos de configuración y el comportamiento del firmware pueden cambiar con el tiempo.
