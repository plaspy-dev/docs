---
slug: /sinotrack/st_901l/configuration
id: st_901l-configuration
sidebar_label: Configuration
title: SinoTrack - ST-901L Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para conectar el SinoTrack ST-901L a Plaspy con instrucciones de servidor y comandos SMS para rastreo confiable
keywords:
  - Configuración SinoTrack ST-901L
  - Instalación SinoTrack ST-901L
  - SinoTrack ST-901L Plaspy
  - Configuración servidor ST-901L
  - Configuración SMS ST-901L
  - Configuración rastreador GPS SinoTrack
  - Configuración rastreador de vehículo Plaspy
  - Configuración APN ST-901L
  - Configuración GPRS ST-901L
  - Integración SinoTrack ST-901L
---

# SinoTrack - Configuración ST-901L

Esta página describe el contexto público de configuración para usar el SinoTrack ST-901L con Plaspy. Resume los pasos prácticos y los comandos SMS públicos que se usan para apuntar el equipo a los servidores de Plaspy y validar el reporte, de modo que sus dispositivos ST-901L aparezcan en Plaspy para rastreo en tiempo real y alertas.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, aunque los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Los comandos que se muestran abajo son los comandos de configuración por SMS públicamente disponibles y comúnmente usados para este modelo; adáptelos según su firmware y la operadora cuando sea necesario.

## Resumen de la configuración

El proceso de configuración prepara al ST-901L para enviar datos de ubicación y eventos a Plaspy de forma confiable mediante datos móviles. Los objetivos habituales son configurar el APN de la SIM, establecer el servidor y puerto objetivo, activar reportes periódicos y verificar que el dispositivo sea visible en Plaspy.

- Configure el APN y los ajustes GPRS del equipo para que el ST-901L pueda usar datos móviles y contactar a Plaspy.
- Indique el endpoint y el puerto del servidor de Plaspy para que los paquetes de datos lleguen a los paneles de Plaspy.
- Habilite intervalos regulares de actualización de posición y modos de reporte para asegurar telemetría oportuna.
- Verifique la configuración del equipo con el comando de verificación del fabricante y confirme que el dispositivo aparece en Plaspy.
- Opcionalmente, restaure los valores de fábrica o cambie de modo al solucionar problemas durante instalaciones iniciales.

## Ajustes de servidor de Plaspy

- Dominio del servidor d.plaspy.com para referencia DNS de la plataforma
- IP del servidor 54.85.159.138 como endpoint público de Plaspy
- Puerto 8888 usado por Plaspy para todos los dispositivos
- Soporte de transporte UDP o TCP según la capacidad del dispositivo
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que la plataforma acepta los formatos compatibles sin selección manual por dispositivo

## Requisitos típicos antes de la configuración

- Fuente de alimentación del vehículo en funcionamiento y acceso al rastreador para configurar por SMS o para la instalación
- Una tarjeta SIM activa con datos móviles y capacidad de SMS compatible con las operadoras locales
- El IMEI del dispositivo disponible para registro o identificación en su cuenta de rastreo si es requerido
- Acceso al método oficial de configuración del fabricante o a los comandos SMS para el ST-901L
- Conocimiento básico del APN de su operador y del usuario o contraseña si son necesarios

## Cómo se conecta este rastreador a Plaspy

El ST-901L se configura para enviar paquetes de datos GPRS al endpoint y puerto compartidos de Plaspy, de modo que las actualizaciones de posición y las alarmas lleguen a la plataforma Plaspy. Tras la configuración por SMS para establecer APN y servidor, el rastreador transmitirá reportes periódicos y mensajes de eventos que Plaspy procesa y visualiza.

- El equipo se apunta al endpoint del servidor de Plaspy (d.plaspy.com o 54.85.159.138) y al puerto 8888 para el reporte
- El rastreador puede usar transporte UDP o TCP cuando se configura en el dispositivo
- Las actualizaciones de posición y las alarmas se envían por la canal GPRS/4G celular a Plaspy
- Eventos como estado ACC, alarma por corte de energía, activación de geocercas y alertas por exceso de velocidad se envían a Plaspy una vez que el dispositivo está reportando
- Plaspy utiliza detección automática de protocolo, por lo que la plataforma acepta los datos del rastreador sin selección manual del protocolo

## Flujo de trabajo común de configuración

1. Acceda al método oficial de configuración del fabricante o al flujo de comandos SMS para el ST-901L.
2. Asegúrese de que el dispositivo tenga una SIM funcional y tenga a mano la información del APN del operador.
3. Introduzca la dirección del servidor de Plaspy usando el dominio d.plaspy.com o la IP 54.85.159.138 en la configuración del equipo.
4. Establezca el puerto del dispositivo en 8888 como lo requiere Plaspy y seleccione UDP o TCP si el equipo solicita elegir el transporte.
5. Aplique o guarde la configuración en el rastreador usando los comandos SMS del fabricante o la herramienta de configuración.
6. Reinicie o corte la alimentación del dispositivo si el fabricante recomienda un reinicio para que los cambios surtan efecto.
7. Valide que el dispositivo reporte a Plaspy comprobando la llegada de telemetría y usando el comando de verificación del dispositivo.

## Comandos de configuración de ejemplo

El ST-901L admite configuración paso a paso por SMS. Envíe estos comandos SMS en el orden indicado como parte de la configuración inicial o de la resolución de problemas. Mantenga el orden cuando se indique y reemplace los marcadores con los valores de su operadora.

- Paso inicial opcional o restablecimiento de fábrica (usar solo cuando sea necesario)
```text
RESET
```

- Establecer la zona horaria a UTC 0
```text
8960000E00
```

- Configurar el APN del operador y el usuario y contraseña opcionales
```text
8030000 [apn] [apnu] [apnp]
```
Explicación: mantenga los marcadores tal como aparecen. [apn] es el APN de su operador móvil. [apnu] es el usuario del APN y [apnp] es la contraseña del APN. Si su operadora no requiere usuario o contraseña, deje esos campos en blanco según las instrucciones del equipo.

- Configurar el servidor GPRS para apuntar a Plaspy por IP y puerto
```text
8040000 54.85.159.138 8888
```
Nota: Plaspy también usa el dominio d.plaspy.com pero este ejemplo de dispositivo usa la IP numérica. Use la forma que requiera el equipo o su instalación.

- Establecer intervalo periódico de actualización de posición mientras el dispositivo está encendido
```text
8050000 60
```

- Establecer intervalo periódico de actualización de posición cuando el dispositivo está apagado
```text
8090000 60
```

- Cambiar el dispositivo al modo GPRS
```text
7100000
```

- Verificar la configuración actual del dispositivo
```text
RCONF
```
Explicación: RCONF devuelve la configuración actual incluyendo el ID del dispositivo usado por Plaspy. Úselo para confirmar APN, servidor, puerto e intervalos de reporte.

## Notas de configuración

- La configuración por SMS es compatible y se utiliza frecuentemente en el ST-901L; siga la sintaxis SMS del proveedor al pie de la letra y conserve el formato de los marcadores.
- Las revisiones de firmware y las variantes regionales pueden modificar la sintaxis de los comandos o los parámetros disponibles; confirme los comandos según la documentación del firmware de su dispositivo.
- Elija UDP o TCP en función de la preferencia del instalador y la capacidad del equipo; Plaspy acepta ambos y detecta automáticamente el protocolo del rastreador en su lado.
- Plaspy usa el mismo puerto 8888 para todos los dispositivos compatibles, lo que simplifica la configuración de servidor en flotas mixtas.
- Si modifica los ajustes del servidor, verifique con RCONF y compruebe el reporte del dispositivo en Plaspy para confirmar conectividad.

## Por qué usar Plaspy con esta configuración

Usar el SinoTrack ST-901L con Plaspy ofrece una solución de rastreo compacta y discreta que puede apuntarse rápidamente al servidor compartido de Plaspy para reportes de ubicación y alarmas en tiempo real. El método de configuración por SMS del ST-901L facilita establecer el APN y los datos del servidor en campo, mientras que la detección automática de protocolo y la política de puerto unificado de Plaspy reducen la complejidad de configurar cada dispositivo.

Learn more about Plaspy at https://www.plaspy.com and verify the latest device specific commands, firmware behavior, and manufacturer guidance on the official SinoTrack site https://www.sinotrackgps.com/ to ensure your setup matches current device documentation and local operator requirements.
