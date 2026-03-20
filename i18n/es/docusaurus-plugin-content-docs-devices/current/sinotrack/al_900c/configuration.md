---
slug: /sinotrack/al_900c/configuration
id: al_900c-configuration
sidebar_label: Configuration
title: SinoTrack - AL-900C Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar SinoTrack AL-900C con Plaspy, incluye comandos SMS y ajustes de servidor
keywords:
  - Configuración SinoTrack AL-900C
  - Instalación SinoTrack AL-900C
  - SinoTrack AL-900C Plaspy
  - Configuración servidor AL-900C
  - Comandos SMS AL-900C
  - Configuración GPRS AL-900C
  - Configuración rastreador Plaspy
  - Ajustes servidor Plaspy
  - Configuración rastreador GPS
  - Rastreo vehicular AL-900C
---

# SinoTrack - AL-900C Configuración

Esta página reúne la información pública necesaria para preparar el rastreador SinoTrack AL-900C para su uso con Plaspy. Aquí encontrará los ajustes de servidor compartidos que Plaspy requiere, además de los comandos SMS públicos y los pasos de verificación conocidos para esta familia de dispositivos, con el fin de ayudarle a integrar el equipo en la plataforma.

Plaspy utiliza ajustes de servidor compartidos para todos los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando este se conecta. Los pasos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor; trate los comandos que aparecen aquí como una guía pública y verifique cualquier diferencia específica del dispositivo con la documentación del fabricante.

## Resumen de configuración

El objetivo de este proceso es dejar el AL-900C listo para enviar con fiabilidad datos de posición y eventos a Plaspy mediante el endpoint y puerto compartidos de la plataforma. El AL-900C permite configurar parámetros por SMS y ajustes de servidor GPRS, que son los métodos más habituales para dirigir el equipo hacia Plaspy.

- Envíe o aplique los ajustes de servidor y APN para que el rastreador pueda establecer una conexión GPRS con Plaspy.
- Configure los intervalos de reporte para que las ubicaciones lleguen a Plaspy de forma oportuna y predecible.
- Use el comando de verificación del rastreador para confirmar el ID del equipo y los ajustes de servidor antes del despliegue final.
- Valide la conectividad comprobando que el rastreador aparece y reporta correctamente en Plaspy tras la configuración.
- Mantenga un registro de los comandos SMS utilizados y del ID del rastreador devuelto por el comando de verificación para el onboarding en la plataforma.

## Ajustes del servidor de Plaspy

- El dominio del servidor d.plaspy.com es el dominio público que debe usar al configurar el host/servidor en el rastreador.
- La IP del servidor 54.85.159.138 puede emplearse como host alternativo cuando se requiere una dirección IP.
- El puerto 8888 es el único puerto que Plaspy utiliza para todos los dispositivos soportados.
- El transporte puede ser UDP o TCP; elija el que requiera el dispositivo o el firmware.
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta al servidor y utiliza el mismo puerto para todos los equipos.

## Requisitos típicos antes de la configuración

- Una unidad AL-900C alimentada y accesible, con acceso a su interfaz de configuración por SMS o a la herramienta de configuración del proveedor.
- Una tarjeta SIM operativa con datos GPRS habilitados y los credenciales APN correctos del operador móvil.
- Permiso para enviar comandos SMS al dispositivo si utiliza configuración por SMS.
- Conocimiento del comando de verificación del dispositivo y de dónde obtener el ID del equipo para coincidirlo en Plaspy.
- Acceso a la documentación del fabricante o soporte del proveedor para detalles específicos de firmware o recomendaciones de herramientas.

## Cómo se conecta este rastreador a Plaspy

El AL-900C se configura para enviar datos de ubicación y eventos al endpoint y puerto compartidos de Plaspy. Una vez que el dispositivo tiene el APN y los ajustes de servidor correctos, abre una sesión GPRS y transmite datos a Plaspy, donde la plataforma detecta el protocolo del rastreador y procesa los mensajes.

- El rastreador envía reportes periódicos de posición a d.plaspy.com o a 54.85.159.138 en el puerto 8888.
- Plaspy recibe la conexión entrante por UDP o TCP según la configuración de transporte del dispositivo.
- Plaspy determina automáticamente el protocolo del rastreador e interpreta la telemetría para mostrarla en la plataforma.
- Los reportes y alarmas enviados por el dispositivo pasan a ser visibles en Plaspy para monitoreo y uso operativo.
- Usar el comando de verificación confirma el ID del equipo y la configuración actual del servidor antes del onboarding en la plataforma.

## Flujo típico de configuración

1. Acceda al método oficial de configuración del fabricante, como comandos SMS o software del proveedor recomendado para el AL-900C.
2. Introduzca el dominio de servidor de Plaspy d.plaspy.com o la IP 54.85.159.138 en el campo de servidor/host del dispositivo.
3. Establezca el puerto en 8888, que es el que Plaspy utiliza para todos los equipos.
4. Seleccione UDP o TCP si el firmware del dispositivo requiere elegir explícitamente el transporte.
5. Configure el APN y las credenciales APN que el operador de la SIM exija, luego aplique o guarde la configuración.
6. Reinicie o haga reboot del rastreador si el equipo requiere reinicio para aplicar los cambios de red.
7. Valide que el dispositivo reporte a Plaspy comprobando que aparece y envía actualizaciones a la plataforma y usando el comando de verificación del equipo.

## Ejemplos de comandos de configuración

El AL-900C puede configurarse mediante comandos SMS. Los comandos siguientes proceden del conjunto público de comandos para esta familia de rastreadores. Envíe estos comandos como mensajes SMS al número del rastreador en el orden indicado cuando el orden sea importante.

- Reinicio opcional a valores de fábrica (usar solo si necesita restaurar valores por defecto):

```
RESET
```

- Establecer la zona horaria a UTC 0:

```
8960000E00
```

- Configurar el APN del operador móvil (reemplazar los marcadores por los valores de su operador):
  - {{apn}} = nombre del APN
  - {{apnu}} = usuario del APN (dejar en blanco si no aplica)
  - {{apnp}} = contraseña del APN (dejar en blanco si no aplica)

```
8030000 {{apn}} {{apnu}} {{apnp}}
```

- Establecer el servidor GPRS a la IP y puerto de Plaspy (Plaspy también soporta el dominio d.plaspy.com):

```
8040000 54.85.159.138 8888
```

- Configurar intervalo de actualización cuando el dispositivo está encendido a 60 segundos:

```
8050000 60
```

- Configurar intervalo de actualización cuando el dispositivo está apagado a 60 segundos:

```
8090000 60
```

- Cambiar el dispositivo al modo GPRS:

```
7100000
```

- Comando de verificación para comprobar ajustes y leer el ID del dispositivo:

```
RCONF
```

Nota: Mantenga los marcadores {{apn}}, {{apnu}} y {{apnp}} tal como aparecen y reemplácelos con las credenciales de su operador al enviar el comando APN. Los comandos anteriores son los comandos SMS públicos documentados para esta familia de rastreadores y se presentan en el orden que aparece en la guía pública.

## Notas de configuración

- La configuración por SMS es el método habitual para dispositivos AL-900C; confirme que los comandos SMS están habilitados y son aceptados por el firmware de su equipo.
- Las revisiones de firmware o las variantes regionales pueden usar formatos de comando ligeramente diferentes o requerir herramientas del proveedor; verifique los comandos si un SMS no produce la respuesta esperada.
- Elija UDP o TCP según la preferencia del instalador y el comportamiento del dispositivo; Plaspy acepta ambos y gestionará la detección automática del protocolo.
- Plaspy utiliza el puerto 8888 para todos los dispositivos soportados, así que configure el puerto 8888 en el rastreador independientemente del transporte seleccionado.
- Use el comando RCONF para obtener el ID del dispositivo y verificar los ajustes actuales del servidor y APN antes del onboarding en Plaspy.

## Por qué usar Plaspy con esta configuración

Usar el SinoTrack AL-900C con Plaspy ofrece un camino directo para centralizar la telemetría de los dispositivos en una plataforma para visibilidad de flota, monitoreo de eventos y supervisión operativa. Los comandos SMS públicos y los ajustes de servidor compartidos de Plaspy facilitan la configuración en campo o previa a la instalación y permiten validar la conectividad de forma rápida.

Para conocer más sobre Plaspy y cómo gestiona las conexiones de rastreadores, visite https://www.plaspy.com. Los métodos de configuración específicos del dispositivo, el comportamiento del firmware y los detalles del fabricante pueden cambiar con el tiempo; verifique siempre las últimas instrucciones y referencias de comandos en el sitio oficial del fabricante https://www.sinotrackgps.com/.
