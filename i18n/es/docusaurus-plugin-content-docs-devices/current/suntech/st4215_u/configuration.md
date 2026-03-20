---
slug: /suntech/st4215_u/configuration
id: st4215_u-configuration
sidebar_label: Configuration
title: Suntech - ST4215/U Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el rastreador Suntech ST4215/U y conectarlo a Plaspy usando servidores compartidos
keywords:
  - Configuración Suntech ST4215 U
  - Instalación Suntech ST4215U
  - configuración rastreador Suntech
  - configuración ST4215 U Plaspy
  - configuración servidor GPS
  - seguimiento vehicular Suntech
  - configuración software ST4215U
  - integración GPS Plaspy
  - configuración plataforma GPS Suntech
  - guía instalación ST4215U
---

# Suntech - Configuración ST4215/U

Esta página documenta el contexto público de configuración para utilizar el rastreador Suntech ST4215/U con la plataforma Plaspy. Incluye los ajustes de servidor prácticos y los comandos SMS públicos suministrados por el fabricante que se usan comúnmente para apuntar el dispositivo a Plaspy y validar la conectividad. Use esta guía junto con la documentación de su equipo y las herramientas del fabricante.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. No obstante, los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El ST4215/U puede configurarse mediante comandos SMS como en los ejemplos públicos del fabricante y también puede admitir configuración por medio del software oficial de Suntech o herramientas de aprovisionamiento.

## Resumen de la configuración

El objetivo es preparar un Suntech ST4215/U para que se comunique de forma fiable con Plaspy, de modo que la información de ubicación, movimiento y eventos sea visible en la plataforma. El flujo público de configuración suele incluir identificar el ID del dispositivo, establecer el APN y servidor GPRS, elegir el tipo de transporte y confirmar los intervalos de reporte para que Plaspy reciba actualizaciones puntuales.

- Asignar en el equipo el endpoint y puerto correctos de Plaspy para que los reportes lleguen al servicio.
- Configurar el APN del operador y, si corresponde, las credenciales de APN para que el dispositivo establezca conexión GPRS o LTE.
- Definir intervalos y comportamiento de reporte para que el rastreador envíe posiciones y eventos con la frecuencia requerida.
- Validar la conectividad y los reportes con un SMS de verificación o una comprobación de reporte para confirmar que el dispositivo aparece en Plaspy.
- Asegurarse de que el ID del dispositivo se derive correctamente a partir del IMEI según la sintaxis requerida por Suntech.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte soportado UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador para dispositivos compatibles

Estos valores son los endpoints compartidos de Plaspy y deben emplearse al configurar el ST4215/U para reportar a Plaspy.

## Requisitos típicos antes de la configuración

- Un dispositivo ST4215/U encendido y accesible, con una SIM celular válida instalada y con datos activos o capacidad de recibir SMS.
- El IMEI del dispositivo disponible para derivar el ID que se usa en los comandos SMS de Suntech.
- Datos del APN del operador y cualquier usuario o contraseña de APN requeridos por el operador móvil.
- Acceso al método oficial de configuración de Suntech, como comandos SMS o la herramienta de aprovisionamiento del fabricante.
- Un teléfono capaz de enviar SMS al número del equipo o acceso al software de configuración de Suntech para aprovisionamiento en red.
- Conocimientos básicos para elegir UDP o TCP según las necesidades de la instalación.

## Cómo se conecta este rastreador a Plaspy

El ST4215/U se configura para enviar sus posiciones GNSS y datos de eventos al endpoint y puerto compartidos de Plaspy usando transporte TCP o UDP estándar. Plaspy acepta conexiones entrantes en el mismo puerto para todos los dispositivos y detecta automáticamente el protocolo del rastreador para procesar los datos y mostrarlos en la plataforma.

- El rastreador envía reportes periódicos de posición y mensajes por eventos a d.plaspy.com o 54.85.159.138 en el puerto 8888.
- El transporte de datos puede ser TCP o UDP según la configuración del dispositivo y el comportamiento de la red.
- Plaspy ingiere ubicación, movimiento y eventos de entradas para mapas en vivo, alertas e informes históricos.
- Se pueden utilizar consultas de verificación o comprobaciones de estado predefinidas para confirmar que el dispositivo reporta a Plaspy.
- Debido a que Plaspy usa un puerto compartido y detección automática de protocolo, solo necesita configurar la dirección del servidor y el puerto en el rastreador.

## Flujo típico de configuración

1. Acceda al método de configuración oficial de Suntech para el ST4215/U (comandos SMS o herramienta del fabricante).
2. Verifique el IMEI del dispositivo y derive el ID del equipo usando el método del fabricante indicado más abajo.
3. Ingrese d.plaspy.com o 54.85.159.138 como destino del servidor GPRS en la configuración del equipo.
4. Establezca el puerto en 8888 y elija UDP o TCP si el dispositivo requiere selección de transporte.
5. Configure el APN del operador y, opcionalmente, el usuario y la contraseña de APN en el equipo.
6. Aplique o guarde la configuración y reinicie el dispositivo si el hardware o el firmware lo requieren.
7. Valide que el dispositivo reporta a Plaspy usando el comando de verificación del equipo o comprobando la llegada de reportes en la plataforma Plaspy.

Si configura por SMS, siga cuidadosamente la sintaxis de los comandos del fabricante y use el ID del equipo derivado del IMEI como se muestra a continuación.

## Ejemplos de comandos de configuración

Los siguientes comandos se basan en los ejemplos públicos de configuración SMS de Suntech. El ID del equipo son los últimos seis dígitos del IMEI excluyendo el dígito de control final. Ejemplo: si el IMEI aparece como 12345678 901234 5 entonces el ID del equipo es 901234.

1) Establecer el APN del operador y el servidor GPRS a Plaspy (los marcadores de APN se mantienen)
- Nota: el valor de la bandera antes de los campos APN es 1 cuando se proporciona usuario o contraseña de APN, de lo contrario 0. Reemplace [DEVICE_ID] por el ID de seis dígitos derivado del IMEI y complete [apn], [apnu], [apnp] según lo requiera su operador.

SMS command:
```text
SA200NTW;[DEVICE_ID];02;[APN_AUTH_FLAG];[apn];[apnu];[apnp];54.85.159.138;8888;;;;
```

Explicación del ejemplo:
- [DEVICE_ID] = últimos 6 dígitos del IMEI excluyendo el dígito de control final
- [APN_AUTH_FLAG] = 1 si proporciona [apnu] o [apnp], de lo contrario 0
- [apn] = marcador del APN del operador
- [apnu] = marcador del nombre de usuario del APN
- [apnp] = marcador de la contraseña del APN

2) Establecer el intervalo de reporte a 60 segundos
```text
SA200RPT;[DEVICE_ID];02;60;60;60;3;0;0;0;0;0
```
- Este comando fija los intervalos de reporte periódico a 60 segundos según el ejemplo público de configuración.

3) Verificar o consultar ajustes con una preset query
```text
SA200CMD;[DEVICE_ID];02;PresetA
```
- Este comando solicita el preset A y puede usarse para confirmar que los ajustes fueron aplicados.

Envíe estos comandos SMS al número telefónico del dispositivo usando el teléfono del instalador o la SIM del equipo. Mantenga el orden anterior al aplicar los ajustes de red y reporte para garantizar que el dispositivo tenga acceso a la red antes de finalizar las reglas de reporte.

## Notas de configuración

- La sintaxis de los comandos SMS mostrada arriba es un ejemplo público; el soporte exacto de comandos puede variar según la versión de firmware y la revisión de hardware.
- El método para derivar el ID del equipo es importante: utilice los últimos seis dígitos del IMEI excluyendo el último dígito, como se mostró.
- Elija TCP o UDP según la fiabilidad de su red y las opciones del firmware del dispositivo; Plaspy acepta ambos en el puerto 8888.
- Si proporciona un usuario o contraseña de APN, ajuste la bandera correspondiente en el comando de red para que el dispositivo aplique las credenciales.
- Si prefiere el software de aprovisionamiento del fabricante, utilícelo para aplicar los mismos ajustes de servidor y puerto en lugar de SMS.

## Por qué usar Plaspy con esta configuración

Usar el ST4215/U con Plaspy ofrece a las organizaciones una forma directa de centralizar datos en tiempo real de ubicación, movimiento y eventos en una sola plataforma para mapas, alertas e informes. Al encargarse Plaspy de la detección de protocolos y ofrecer un endpoint compartido, la configuración de dispositivos compatibles resulta más sencilla y reduce la fricción de integración en flotas mixtas.

Learn more about Plaspy and platform features at https://www.plaspy.com. Please verify device specific configuration procedures, firmware behavior and the latest manufacturer instructions at http://www.suntechint.com/ to ensure your setup reflects current Suntech guidance.
