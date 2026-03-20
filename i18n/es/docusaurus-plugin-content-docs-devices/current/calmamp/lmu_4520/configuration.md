---
slug: /calmamp/lmu_4520/configuration
id: lmu_4520-configuration
sidebar_label: Configuration
title: CalmAmp - LMU-4520 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del CalmAmp LMU-4520 para conectarlo a Plaspy con ajustes de servidor y comandos SMS de ejemplo
keywords:
  - Configuración CalmAmp LMU 4520
  - Instalación CalmAmp LMU 4520
  - Configuración de servidor CalmAmp LMU 4520
  - LMU 4520 Plaspy
  - Configuración rastreador GPS CalmAmp
  - Configuración rastreador de vehículo CalmAmp
  - Ajustes APN LMU 4520
  - Configuración SMS LMU 4520
  - Configuración rastreador gestión de flotas
  - Configuración CalmAmp LMU
---

# CalmAmp - Configuración del LMU-4520

Esta página describe el contexto público de configuración para utilizar el rastreador CalmAmp LMU-4520 con Plaspy. Explica los ajustes de servidor compartidos que debe aplicar, describe el flujo típico de configuración y aporta comandos SMS de ejemplo públicamente disponibles para configurar el equipo y que reporte a Plaspy. Utilice esta guía como referencia práctica para preparar el LMU-4520 y garantizar su visibilidad en su entorno de gestión de flotas en Plaspy.

Plaspy emplea ajustes de servidor compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, aunque los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del vendedor. La documentación pública indica que el LMU-4520 admite configuración por SMS y reporte por datos celulares, por lo que esta página incluye los comandos SMS publicados para establecer APN, servidor y puerto, además de pasos para verificar y reiniciar el equipo.

## Resumen de la configuración

El objetivo de esta configuración es dejar el LMU-4520 listo para comunicarse de forma fiable con Plaspy y aparecer en la plataforma como un dispositivo activo. La secuencia pública de configuración normalmente establece las credenciales APN, apunta el dispositivo al endpoint del servidor Plaspy, configura el puerto compartido y reinicia el equipo para que los cambios surtan efecto.

- Aplique el APN del operador y, si procede, las credenciales APN para que funcione la conexión de datos celulares.
- Configure el servidor GPRS del dispositivo para que apunte a Plaspy y establezca el puerto compartido.
- Seleccione UDP o TCP como transporte si el dispositivo pide elegir uno.
- Reinicie el equipo y verifique los ajustes para confirmar que reporte a Plaspy.
- Valide el dispositivo en Plaspy para confirmar la comunicación y la visibilidad adecuadas.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador
- Tenga en cuenta que todos los dispositivos en Plaspy usan el mismo puerto para el reporte

## Requisitos previos típicos

- Un LMU-4520 alimentado y accesible, instalado o conectado temporalmente para la configuración.
- Una SIM activa con datos y capacidad de SMS adecuados, y la información APN correcta.
- Acceso a un teléfono o sistema capaz de enviar comandos SMS al rastreador si utiliza la configuración por SMS.
- Conocimiento del MID o identificador del dispositivo tal como lo devuelve el comando de estado.
- El método de configuración oficial de CalmAmp o la herramienta del vendedor para opciones alternativas de configuración.
- Confirmación de la revisión de firmware y del tipo de instalación para asegurarse de que los comandos aplican correctamente.

## Cómo se conecta este rastreador a Plaspy

El LMU-4520 se configura para enviar ubicaciones y mensajes al endpoint y puerto compartido del servidor Plaspy, de modo que Plaspy pueda ingerir la telemetría y mostrarla en la plataforma. Mediante los pasos públicos de configuración, el rastreador enviará informes periódicos y mensajes de eventos a d.plaspy.com o a la IP del servidor Plaspy en el puerto compartido.

- El dispositivo envía datos GPRS a la dirección del servidor Plaspy 54.85.159.138 o d.plaspy.com
- Las comunicaciones utilizan el puerto 8888, que es el mismo que Plaspy emplea para todos los dispositivos
- El transporte puede ser UDP o TCP según la selección del equipo y las condiciones de la red
- Plaspy detecta automáticamente el protocolo del rastreador para aplicar el parser correcto
- Una vez que esté reportando, la visibilidad del dispositivo, las actualizaciones de ubicación y los informes de eventos aparecerán en Plaspy

## Flujo típico de configuración

1. Acceda al método de configuración oficial de CalmAmp para el LMU-4520, normalmente comandos SMS o las herramientas del proveedor, para preparar el dispositivo para los cambios.
2. Configure el APN del equipo y, si corresponde, las credenciales APN para que el rastreador tenga conectividad de datos celulares.
3. Introduzca el endpoint del servidor Plaspy como dominio d.plaspy.com o la IP 54.85.159.138.
4. Establezca el puerto del servidor en 8888 y elija UDP o TCP si el dispositivo solicita selección de transporte.
5. Aplique o guarde la configuración mediante SMS o la herramienta del proveedor y luego reinicie el equipo si es necesario.
6. Valide la conectividad y que el dispositivo reporte a Plaspy comprobando la configuración del rastreador y confirmando su visibilidad en la plataforma Plaspy.

## Ejemplos de comandos de configuración

El LMU-4520 se puede configurar por SMS usando comandos públicos. El rastreador responde con su MID (ID del dispositivo) tras un comando de estado; utilice ese identificador cuando lo requiera su flujo de trabajo. Los comandos a continuación son los comandos SMS documentados públicamente en el orden recomendado.

- Recupere el MID del dispositivo (ID del dispositivo) usando el comando de estado
```
!R0
```
Envíe este comando por SMS al equipo. Normalmente el dispositivo responde con un MID (10 dígitos) que se usa para identificación en los flujos de comandos posteriores.

- Configure el APN del operador (reemplazar {{apn}} por el APN de su operador)
```
!RP,2306,0,{{apn}}
```

- (Opcional) Configure el nombre de usuario del APN si el operador lo requiere (reemplazar {{apnu}})
```
!RP,2314,0,{{apnu}}
```

- (Opcional) Configure la contraseña del APN si el operador lo requiere (reemplazar {{apnp}})
```
!RP,2315,0,{{apnp}}
```

- Configure el servidor GPRS a Plaspy usando la IP pública del servidor
```
!RP,2319,0,54.85.159.138
```

- Configure el puerto del servidor al puerto compartido de Plaspy
```
!RP,769,0,8888
```

- Reinicie el rastreador para aplicar los cambios (opcional o como parte de la configuración inicial)
```
!R3,70,0
```

- Verifique los parámetros de configuración actuales (comprobar ajustes)
```
!RO
```

Notas sobre marcadores de posición
- {{apn}} es la cadena APN de su operador móvil.
- {{apnu}} y {{apnp}} son campos opcionales de usuario y contraseña del APN que se usan cuando el operador solicita autenticación.
- Mantenga el orden de los comandos al aplicarlos por SMS y reinicie si el dispositivo o el procedimiento requieren reinitialización.

## Notas de configuración

- Las revisiones de firmware de CalmAmp y las variantes regionales del dispositivo pueden modificar los conjuntos de comandos admitidos o los identificadores de parámetros; verifique los comandos exactos para su firmware.
- El LMU-4520 admite configuración por SMS como se muestra arriba; las herramientas del proveedor y los sistemas de gestión OTA pueden ofrecer métodos alternativos.
- La elección entre TCP o UDP puede afectar el comportamiento en redes poco fiables; seleccione el transporte que mejor se adapte a la red y al rendimiento del operador.
- Confirme siempre los ajustes APN, las credenciales y la activación del servicio de la SIM con su operador móvil antes de intentar el reporte de datos.
- En caso de duda, consulte la documentación de CalmAmp o contacte a su proveedor CalmAmp para obtener orientación específica del dispositivo.

## Por qué usar Plaspy con esta configuración

Usar Plaspy con el CalmAmp LMU-4520 ofrece un camino sencillo hacia la visibilidad de flotas y el monitoreo operativo al encaminar la telemetría del rastreador a un único endpoint y puerto compartido de Plaspy. El diseño robusto del LMU-4520 y sus opciones de configuración flexibles lo hacen adecuado para entornos exigentes, y configurarlo para reportar a Plaspy ayuda a consolidar la información de ubicación, eventos y estado en una plataforma para su análisis y acción.

Learn more about Plaspy on the main website https://www.plaspy.com and verify device specific configuration methods and firmware behavior with the official CalmAmp documentation at http://www.calamp.com/. Manufacturer setup details, firmware behavior, and supported commands can change over time so always confirm current information on the manufacturer site.
