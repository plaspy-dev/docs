---
slug: /concox/jm_vl03/configuration
id: jm_vl03-configuration
sidebar_label: Configuration
title: Concox - JM-VL03 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del Concox JM-VL03 con ajustes de servidor Plaspy, comandos SMS y pasos para la integración
keywords:
  - Configuración Concox JM-VL03
  - Configuración JM-VL03
  - Configuración rastreador GPS Concox
  - Configuración rastreador Plaspy
  - Comandos SMS rastreador GPS
  - Configuración seguimiento de vehículos
  - Rastreador para gestión de flotas
  - Configuración servidor JM VL03
  - Configuración telemetría Concox
  - Integración dispositivo Plaspy
---

# Concox - Configuración del JM-VL03

Esta página documenta el contexto público de configuración para usar el rastreador Concox JM-VL03 con Plaspy. Reúne los ajustes de servidor de Plaspy, los pasos habituales de preparación y los comandos SMS del fabricante que están disponibles públicamente para configurar el dispositivo y que informe a la plataforma Plaspy.

Plaspy utiliza configuraciones de servidor compartidas entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador; sin embargo, los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación o las herramientas del proveedor. Los ejemplos de comandos SMS que aparecen a continuación son las instrucciones públicas para el JM-VL03 y muestran los pasos prácticos para apuntar el dispositivo a Plaspy.

## Resumen de la configuración

Este proceso prepara un JM-VL03 para comunicarse de forma fiable con la plataforma Plaspy, de modo que los datos de ubicación y eventos aparezcan en su cuenta Plaspy. El objetivo es ajustar los parámetros de red, el endpoint del servidor y el comportamiento de reporte para que el rastreador envíe telemetría a Plaspy en casi tiempo real.

- Configure los parámetros GPRS y del servidor del rastreador para que reporte a los endpoints del servidor Plaspy.
- Establezca el APN correcto para la tarjeta SIM instalada para asegurar que los datos móviles funcionen.
- Defina intervalos o temporizadores de reporte para controlar la frecuencia de las actualizaciones enviadas a Plaspy.
- Valide la conectividad y use un comando de verificación para confirmar que el rastreador está apuntando a Plaspy.
- Active GPRS o el modo datos y aplique los ajustes guardados para que el reporte comience hacia la plataforma.

## Ajustes del servidor Plaspy

Use estos ajustes públicos del servidor Plaspy al configurar el JM-VL03. Plaspy utiliza el mismo puerto de reporte para todos los dispositivos soportados y detecta automáticamente el protocolo del rastreador.

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte: UDP o TCP (el dispositivo puede configurarse para cualquiera de los dos en el puerto 8888)
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta

## Requisitos típicos antes de la configuración

- Una tarjeta Micro SIM válida con un plan de datos activo y los valores APN del operador para la SIM.
- Alimentación al JM-VL03 y acceso al número de teléfono del dispositivo para enviar mensajes SMS de configuración.
- Acceso a las instrucciones oficiales de configuración del fabricante o a herramientas de instalador distribuidas por Concox o proveedores autorizados.
- Conocimiento del APN correcto y de cualquier usuario o contraseña APN requeridos por el operador móvil.
- Una lista de verificación para pruebas, como verificar el estado de los LED, la disponibilidad de la señal GPS y que el dispositivo reporte en Plaspy después de la configuración.

## Cómo se conecta este rastreador a Plaspy

El JM-VL03 se configura para usar datos móviles y enviar telemetría de posición y eventos al endpoint y puerto del servidor Plaspy. Una vez que el rastreador tenga un APN funcional y el servidor configurado, iniciará conexiones al servidor Plaspy y Plaspy procesará automáticamente los datos del protocolo.

- El rastreador envía actualizaciones periódicas de ubicación y mensajes por eventos al endpoint del servidor Plaspy.
- La telemetría y las alertas por eventos se visualizan en los paneles de Plaspy y pueden activar reglas y notificaciones.
- El dispositivo reporta al endpoint compartido de Plaspy usando el puerto 8888.
- Puede configurar el dispositivo para usar UDP o TCP si requiere elegir el tipo de transporte.
- Plaspy detecta el protocolo del rastreador, por lo que no es necesario seleccionar el protocolo en la plataforma cuando el dispositivo se conecta.

## Flujo de trabajo común de configuración

1. Acceda al método o software oficial de configuración del fabricante o prepárese para enviar comandos SMS de configuración tal como los proporciona el fabricante.
2. Ingrese el servidor Plaspy como dominio d.plaspy.com o como la IP 54.85.159.138 en los ajustes de servidor del dispositivo.
3. Establezca el puerto de reporte del dispositivo en 8888.
4. Elija UDP o TCP si el dispositivo solicita selección de transporte; Plaspy acepta ambos y detecta automáticamente el protocolo.
5. Configure el APN del operador y, si aplica, el usuario y la contraseña del APN requeridos por su SIM.
6. Aplique o guarde la configuración y reinicie el dispositivo si el fabricante lo requiere.
7. Valide que el dispositivo está reportando a Plaspy y aparece en la plataforma usando el comando de verificación o comprobando datos en vivo en Plaspy.

## Ejemplos de comandos de configuración

El JM-VL03 puede configurarse enviando comandos SMS al dispositivo. Los siguientes comandos son los que están documentados públicamente para la configuración básica. Envíe cada comando como un SMS al número del dispositivo y espere el acuse de recibo según el comportamiento del equipo. Mantenga el orden mostrado para una configuración inicial cuando corresponda.

- Reinicio opcional a configuración de fábrica (usar sólo si necesita una configuración limpia):
```text
FACTORY#
```

- Ajustar la zona horaria a UTC 0 (ejemplo de comando de zona horaria):
```text
GMT,E,0#
```

- Establecer el APN del operador. Reemplace {{apn}} por el APN de su operador. Si su operador usa usuario o contraseña APN incluya {{apnu}} y {{apnp}} respectivamente.
```text
APN,{{apn}}#
```
O con usuario y contraseña:
```text
APN,{{apn}},{{apnu}},{{apnp}}#
```
(Marcadores: {{apn}} = nombre del APN, {{apnu}} = usuario APN, {{apnp}} = contraseña APN)

- Establecer el servidor GPRS usando el dominio de Plaspy y el puerto:
```text
SERVER,1,d.plaspy.com,8888,0#
```

- Alternativamente, establecer el servidor GPRS usando la IP del servidor Plaspy y el puerto:
```text
SERVER,0,54.85.159.138,8888,0#
```

- Establecer el intervalo de actualización (el ejemplo configura actualizaciones cada 60 segundos). Pueden aceptarse dos formatos:
```text
TIMER,60#
```
O:
```text
TIMER,60,60#
```

- Habilitar el modo GPRS para que el dispositivo use datos móviles:
```text
GPRSON,1#
```

- Verificar los parámetros actuales relacionados con GPRS y servidor:
```text
GPRSSET#
```

Notas sobre los comandos:
- Envíe cada línea como un SMS separado al número del dispositivo.
- Mantenga el orden para la configuración inicial: primero el APN, luego el servidor y los temporizadores, y finalmente active GPRS.
- Los ejemplos del comando SERVER muestran tanto la opción de dominio como la de IP para Plaspy y ambos hacen referencia al puerto 8888. El dispositivo puede aceptar cualquiera de las dos formas.
- Plaspy admite tanto UDP como TCP en el puerto 8888; configure el JM-VL03 al tipo de transporte requerido por su entorno si el dispositivo solicita elegir transporte.

## Notas de configuración

- Las revisiones de firmware y hardware pueden cambiar la sintaxis de los comandos o las opciones disponibles; confirme siempre con la documentación más reciente de Concox.
- El dispositivo permite configurar el servidor por dominio o por IP. Se recomienda usar d.plaspy.com por flexibilidad; la IP del servidor se ofrece como alternativa.
- Elija UDP o TCP según la preferencia del instalador o la capacidad del dispositivo; Plaspy acepta ambos y su plataforma detecta el protocolo al conectarse.
- La configuración vía SMS es un método común y práctico para instalaciones del JM-VL03; asegúrese de que la SIM pueda recibir SMS y tenga datos habilitados para los pasos GPRS.
- El comportamiento de temporizadores e intervalos de reporte afecta el consumo de datos y la autonomía de la batería o la alimentación de respaldo; seleccione intervalos que equilibren la necesidad de reporte y el uso de datos.

## Por qué usar Plaspy con esta configuración

Usar el JM-VL03 con Plaspy ofrece a gerentes de flota y equipos de protección de activos un camino sencillo hacia el seguimiento en tiempo real, alertas por eventos y flujos de trabajo basados en telemetría. Configurar el dispositivo para apuntar a Plaspy con los ajustes de servidor compartidos hace que el rastreador sea visible en los mapas de Plaspy, en el motor de reglas y en las herramientas de informes, permitiendo a las organizaciones monitorear ubicación, estado de encendido, eventos de comportamiento del conductor y acciones antirobo.

Learn more about Plaspy and how your fleet can use these integration capabilities at https://www.plaspy.com. For the latest device specific configuration commands, firmware notes and installation guidance verify the most current information on the manufacturer site https://www.iconcox.com/ as methods and firmware behavior can change over time.
