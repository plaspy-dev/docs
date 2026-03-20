---
slug: /queclink/gv350mg/configuration
id: gv350mg-configuration
sidebar_label: Configuration
title: QuecLink - GV350MG Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del QuecLink GV350MG con Plaspy, incluye ajustes de servidor, comandos SMS y lista de verificación
keywords:
  - Configuración QuecLink GV350MG
  - Configuración GV350MG
  - Configuración GV350MG Plaspy
  - Configuración rastreador GPS QuecLink
  - Configuración rastreador Plaspy
  - Configuración rastreador vehicular
  - Configuración seguimiento de flotas
  - Configuración servidor GV350MG
  - Configuración telemática QuecLink
  - Comandos SMS GV350MG
---

# Configuración de QuecLink GV350MG

Esta página reúne la información pública necesaria para configurar un QuecLink GV350MG con Plaspy. Aquí encontrará los detalles prácticos para apuntar un GV350MG al endpoint de ingestión de Plaspy, además de ejemplos de comandos SMS que se usan con frecuencia para ajustar la configuración del servidor y los parámetros básicos de reporte. Use esta guía como lista de verificación de despliegue y punto de partida para la configuración con Plaspy.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El GV350MG admite comandos de configuración vía SMS como se muestra abajo y también puede conectarse por datos celulares usando transporte TCP o UDP según la opción que elija.

## Resumen de la configuración

Esta sección explica el propósito de configurar un GV350MG para usar con Plaspy y qué debe validar durante la instalación.

- Prepare el GV350MG para que reporte ubicación y telemetría del vehículo al endpoint de ingestión de Plaspy.
- Configure los parámetros GPRS o SMS del equipo y apunte los ajustes del servidor al endpoint de Plaspy.
- Valide la selección de transporte y la conectividad para que el rastreador alcance Plaspy de forma confiable por TCP o UDP.
- Habilite reportes programados y eventos de entradas para que Plaspy reciba actualizaciones periódicas de ubicación y alarmas.
- Confirme que el dispositivo aparece en Plaspy y que la telemetría, eventos y alertas son visibles en la plataforma.

## Ajustes del servidor Plaspy

Utilice los siguientes ajustes públicos de servidor Plaspy al configurar el GV350MG:

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte compatible UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador y se usa el mismo puerto para todos los dispositivos soportados

## Requisitos típicos antes de configurar

- Un GV350MG alimentado y accesible con una SIM válida y plan de datos activo para reportes GPRS o LTE
- Capacidad para enviar comandos SMS al rastreador si va a usar configuración vía SMS
- Acceso a las herramientas oficiales de configuración QuecLink o al conjunto de comandos SMS correspondiente a su revisión de firmware
- La contraseña por defecto del dispositivo queclink para los comandos SMS de ejemplo mostrados abajo, a menos que ya la haya cambiado
- Un punto de instalación con buena visibilidad GNSS para la validación inicial de posición
- Una cuenta de técnico o instalador en su instancia de Plaspy para verificar la llegada del dispositivo y la telemetría después de la configuración

## Cómo se conecta este rastreador a Plaspy

Cuando está configurado, el GV350MG envía ubicación y telemetría a Plaspy para que los administradores de flota puedan monitorear vehículos y eventos.

El comportamiento de conexión suele incluir:

- El dispositivo está configurado para reportar al endpoint compartido de servidor de Plaspy y al puerto indicado
- El rastreador envía paquetes regulares de posición y telemetría a d.plaspy.com o 54.85.159.138 en el puerto 8888
- Los datos pueden enviarse por TCP o UDP según la selección hecha en la configuración
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que no necesita identificar manualmente una variante de protocolo
- Informes basados en eventos como SOS, encendido o cambios en entradas se reenvían a Plaspy para el procesamiento de alertas y reglas

## Flujo común de configuración

Siga estos pasos prácticos para configurar un GV350MG con Plaspy:

1. Acceda al método oficial de configuración QuecLink para su dispositivo, como la interfaz de comandos SMS o el software de configuración QuecLink
2. Ingrese la dirección del servidor de Plaspy usando d.plaspy.com o 54.85.159.138 en los ajustes de servidor del dispositivo
3. Establezca el puerto del servidor en 8888 como puerto de reporte del dispositivo
4. Seleccione el transporte UDP o TCP si su dispositivo requiere elegir uno
5. Aplique o guarde la configuración en el rastreador usando la herramienta del fabricante o comandos SMS
6. Reinicie el equipo si es necesario para aplicar los cambios de red y servidor
7. Valide que el dispositivo reporte a Plaspy confirmando que la unidad aparece en su cuenta Plaspy y que la ubicación y la telemetría llegan como se espera

## Comandos de configuración de ejemplo

El GV350MG admite configuración vía SMS. Los siguientes comandos públicos se presentan según la configuración modelo original y deben enviarse al dispositivo como mensajes SMS. Los ejemplos usan la contraseña del dispositivo queclink, que es el valor de fábrica en estos ejemplos. Conserve los marcadores {{apn}}, {{apnu}} y {{apnp}} cuando los reemplace por el APN del operador, el usuario del APN y la contraseña del APN respectivamente.

1. Comando opcional para restaurar a configuración de fábrica
Envíe esto solo cuando tenga la intención de restaurar los valores por defecto como parte de la configuración inicial.

```text
AT+GTRTO=queclink,4,,,,,,FFFF$
```

2. Ajustar la zona horaria a UTC 0

```text
AT+GTTMA=queclink,+,0,0,0,,,,,,FFFF$
```

3. Establecer el APN del operador
Reemplace los marcadores con los valores de su operador móvil.

```text
AT+GTBSI=queclink,{{apn}},{{apnu}},{{apnp}},,,,,FFFF$
```

- {{apn}} es el nombre del punto de acceso proporcionado por su operador móvil
- {{apnu}} es el usuario del APN si el operador lo requiere
- {{apnp}} es la contraseña del APN si el operador la requiere

4. Configurar el servidor GPRS a Plaspy
Este comando establece tanto el dominio como la IP para redundancia y apunta al endpoint de ingestión de Plaspy. El puerto 8888 se incluye como puerto de servicio.

```text
AT+GTSRI=queclink,4,,1,d.plaspy.com,8888,54.85.159.138,8888,,0,0,0,,,,FFFF$
```

5. Establecer el intervalo de actualización a 60 segundos

```text
AT+GTFRI=queclink,1,1,0,0,,,60,60,60,60,7F,40,0,,,FFFF$
```

6. Habilitar notificación del botón SOS en la entrada 2

```text
AT+GTSOS=queclink,2,2,,0,0,0,0,0,0,,,FFFF$
```

Notas sobre los comandos SMS
- Envíe cada comando como un SMS separado al número de teléfono del dispositivo.
- Mantenga el orden al realizar la configuración inicial para que el APN y el servidor se establezcan antes de activar los reportes programados.
- Los comandos de ejemplo usan la contraseña por defecto queclink en la cadena de comandos. Cambie o asegure la contraseña después de la configuración inicial si es necesario.

## Observaciones sobre la configuración

- Las diferencias de firmware entre las revisiones del GV350MG pueden cambiar la sintaxis exacta de los comandos o los parámetros disponibles; siempre revise las notas de firmware del equipo si un comando falla.
- La configuración vía SMS es práctica para instalaciones en campo, pero considere usar la herramienta oficial de configuración QuecLink cuando esté disponible para ajustes por lotes o avanzados.
- Elija UDP o TCP de forma deliberada según la confiabilidad de la red y sus preferencias operativas; Plaspy acepta ambos y detectará automáticamente los detalles del protocolo.
- Plaspy utiliza el mismo puerto 8888 para todos los dispositivos compatibles, lo que simplifica la configuración del servidor en flotas mixtas.
- Pruebe la conectividad tras la configuración confirmando que los mensajes del dispositivo llegan a Plaspy y verificando las marcas de tiempo y los reportes de eventos del equipo.

## Por qué usar Plaspy con esta configuración

Usar el GV350MG con Plaspy integra la ubicación del vehículo, la telemetría CAN bus y los eventos de entradas en una sola plataforma operativa para monitoreo, alertas y análisis histórico. Los ajustes de servidor compartidos y la detección automática de protocolo de Plaspy reducen la complejidad de configuración por dispositivo y facilitan estandarizar los despliegues en una flota.

Para obtener más información sobre Plaspy y cómo puede ingerir telemetría del GV350MG, visite https://www.plaspy.com. Para la referencia más actualizada de comandos específicos del dispositivo, notas de firmware y guías de instalación, verifique los detalles en el sitio del fabricante https://www.queclink.com/ ya que los métodos de configuración y el comportamiento del firmware pueden cambiar con el tiempo.
