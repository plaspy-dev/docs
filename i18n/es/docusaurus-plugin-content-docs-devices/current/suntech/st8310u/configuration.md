---
slug: /suntech/st8310u/configuration
id: st8310u-configuration
sidebar_label: Configuration
title: Suntech - ST8310U Configuration
sidebar_class_name: menu_item_tracker
description: Configure el Suntech ST8310U para usar con Plaspy, con ajustes de servidor públicos y comandos SMS de ejemplo para APN e informes
keywords:
  - Configuración Suntech ST8310U
  - Instalación Suntech ST8310U
  - Configuración de servidor Suntech ST8310U
  - ST8310U Plaspy
  - Configuración rastreador Suntech
  - Configuración rastreador GPS vehicular
  - Comandos SMS ST8310U
  - Configuración APN Suntech
  - Guía configuración rastreador GPS
  - Seguimiento de flota ST8310U
---

# Suntech - Configuración ST8310U

Esta página documenta el contexto público de configuración para usar el rastreador Suntech ST8310U con Plaspy. Reúne los ajustes de servidor de Plaspy y recomendaciones prácticas que normalmente se utilizan para apuntar un ST8310U a la plataforma. Cuando procede, se incluyen ejemplos de comandos SMS tomados de contenido público para ayudar a instaladores e integradores a completar una configuración inicial.

Plaspy emplea un conjunto compartido de ajustes de servidor para los dispositivos que soporta y detecta automáticamente el protocolo del rastreador; sin embargo, los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El ST8310U admite configuración por SMS y actualizaciones OTA, por lo que puede usar tanto comandos SMS como herramientas de configuración del fabricante según su instalación y firmware del equipo.

## Resumen de la configuración

El objetivo del proceso de configuración es preparar el ST8310U para que reporte ubicación y eventos al sistema Plaspy de forma fiable y quede visible en la plataforma. Normalmente esto implica definir el APN de la red, apuntar el dispositivo al endpoint y puerto de Plaspy, y confirmar los intervalos de reporte.

- Configure el APN de la tarjeta SIM y las credenciales opcionales para que el rastreador use datos móviles
- Apunte el rastreador al endpoint y puerto del servidor Plaspy para que los reportes lleguen a la plataforma
- Ajuste el intervalo de reporte del dispositivo según la frecuencia de monitoreo requerida
- Verifique la configuración y confirme que el dispositivo aparece en los reportes o diagnósticos de Plaspy
- Mantenga un registro del ID del dispositivo que Plaspy utilizará para identificar el rastreador

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta

## Requisitos típicos antes de la configuración

- Una unidad ST8310U cargada y alimentada accesible para configuración
- Una SIM móvil con datos activados y capacidad de SMS si planea usar comandos SMS
- Acceso al IMEI del dispositivo para poder derivar el ID de Plaspy que se usa en los comandos
- Acceso al método de configuración oficial de Suntech o a la herramienta del proveedor para ajustes específicos de firmware
- Conocimiento del APN de su operador y, opcionalmente, del nombre de usuario y contraseña del APN
- Una ruta de prueba corta o una ubicación estacionaria para confirmar que el dispositivo reporta correctamente tras la configuración

## Cómo se conecta este rastreador a Plaspy

El ST8310U se configura para enviar su telemetría al endpoint y puerto compartidos de Plaspy, de modo que Plaspy pueda ingerir y mostrar los datos del dispositivo. Plaspy utiliza el mismo puerto TCP o UDP para todos los dispositivos y detectará automáticamente el protocolo que use el rastreador cuando lleguen los datos.

- El rastreador envía mensajes de ubicación y estado a d.plaspy.com o la IP equivalente 54.85.159.138
- Todos los dispositivos usan el puerto 8888 para reportar a Plaspy
- Puede elegir transporte UDP o TCP en el dispositivo si el rastreador pide una selección
- Plaspy detecta automáticamente el protocolo del dispositivo, por lo que no necesita configurar un protocolo en el lado del servidor
- Una vez activo el reporte, el dispositivo queda visible para monitoreo y reportes de eventos en Plaspy

## Flujo típico de configuración

1. Acceda al método de configuración oficial de Suntech o al software del proveedor, o prepárese para enviar comandos SMS según la guía del fabricante.
2. Ingrese el servidor de Plaspy como d.plaspy.com o la IP 54.85.159.138 en la configuración de servidor del dispositivo.
3. Establezca el puerto del dispositivo en 8888 como puerto de reporte.
4. Si el dispositivo requiere seleccionar un transporte, elija UDP o TCP según su red y preferencia de instalación.
5. Configure el APN y, si corresponde, el nombre de usuario y la contraseña del APN para la SIM del dispositivo.
6. Aplique o guarde la configuración y reinicie el dispositivo si el firmware requiere reinicio para que los cambios tengan efecto.
7. Valide que el dispositivo reporta a Plaspy revisando la actividad del equipo o usando un comando de verificación.

## Comandos de configuración de ejemplo

El ST8310U puede configurarse por SMS usando el formato de comandos públicos que se muestra a continuación. El ID del dispositivo es el valor de seis dígitos extraído del IMEI como se describe tras los comandos. Conserve los marcadores de posición cuando envíe los SMS reales.

- Regla para el ID de dispositivo
  - El ID del dispositivo son los seis dígitos tomados del IMEI empezando en el noveno dígito y terminando en el décimo cuarto dígito inclusive (es decir, los seis dígitos antes del dígito de verificación final del IMEI). Ejemplo: IMEI 12345678 901234 5 produce el ID de dispositivo 901234.

- Configurar APN del operador y servidor GPRS
```text
SA200NTW;{{ID}};02;{0 or 1};[apn];[apnu];[apnp];54.85.159.138;8888;;;;
```
- Notas sobre el comando APN
  - Reemplace {{ID}} con el ID de dispositivo derivado del IMEI según se explicó arriba.
  - El cuarto campo debe ser 1 si suministra nombre de usuario o contraseña del APN; de lo contrario, 0.
  - Mantenga los marcadores [apn], [apnu] y [apnp] si piensa sustituirlos por el APN, nombre de usuario y contraseña de su operador.

- Fijar el intervalo de reporte a 60 segundos
```text
SA200RPT;{{ID}};02;60;60;60;3;0;0;0;0;0
```

- Consultar ajustes actuales
```text
SA200CMD;{{ID}};02;PresetA
```

Envíe estos comandos SMS desde el número autorizado si el dispositivo requiere autenticación por número. Si usa una herramienta de configuración en su lugar, los mismos campos suelen estar disponibles en el panel de red o servidor.

## Observaciones sobre la configuración

- Las variaciones de firmware pueden cambiar el orden exacto de parámetros o los campos disponibles. Siempre verifique con las notas de firmware de Suntech para la revisión de su dispositivo.
- El dispositivo soporta configuración por SMS como se muestra aquí, y también puede soportar OTA o configuración mediante herramientas del proveedor según su hardware y firmware.
- Elija UDP o TCP según los requisitos de la instalación. TCP puede ofrecer mayor fiabilidad de sesión mientras que UDP es más simple y a menudo se usa para telemetría ligera.
- Los marcadores de usuario y contraseña del APN [apnu] y [apnp] son opcionales para muchos operadores. Ajuste el cuarto campo bandera a 1 cuando los suministre.
- Plaspy utiliza el mismo puerto 8888 para todos los dispositivos soportados y detecta automáticamente el protocolo del rastreador, por lo que no son necesarios cambios en el servidor.

## Por qué usar Plaspy con esta configuración

Usar Plaspy con el Suntech ST8310U le proporciona una forma centralizada y sencilla de recopilar datos de ubicación y eventos de sus vehículos rastreados. Los ajustes de servidor compartidos y la detección automática de protocolo de Plaspy reducen la complejidad de la configuración de servidor, permitiendo que los instaladores se concentren en la configuración a nivel de dispositivo, como el APN y los intervalos de reporte.

Para obtener más información sobre Plaspy visite https://www.plaspy.com. Para métodos de configuración específicos de dispositivo, comportamiento de firmware y detalles del fabricante más recientes, verifique la información en el sitio oficial de Suntech http://www.suntechint.com/ ya que la documentación del proveedor y el firmware pueden cambiar con el tiempo.
