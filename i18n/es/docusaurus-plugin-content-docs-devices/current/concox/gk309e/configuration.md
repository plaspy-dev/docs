---
slug: /concox/gk309e/configuration
id: gk309e-configuration
sidebar_label: Configuration
title: Concox - GK309E Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el Concox GK309E con Plaspy, incluye ajustes de servidor, comandos SMS y flujo de instalación
keywords:
  - Configuración Concox GK309E
  - Configuración GK309E
  - Configuración servidor Concox GK309E
  - Configuración GK309E Plaspy
  - Configuración rastreador GPS Concox
  - Configuración rastreador GPS Plaspy
  - Configuración SMS GK309E
  - Seguimiento celular infantil Concox
  - Configuración plataforma GPS
  - Configuración servidor rastreador
---

# Concox - Configuración GK309E

Esta página ofrece el contexto público de configuración para usar el Concox GK309E con la plataforma Plaspy. Se centra en los ajustes de servidor compartidos por Plaspy, la información práctica de configuración publicada para este modelo y los comandos SMS habituales para apuntar el rastreador a Plaspy. Use esta guía como referencia técnica cuando prepare un dispositivo GK309E para su operación con Plaspy.

Plaspy emplea valores de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, pero los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El GK309E permite configuraciones mediante SMS según la documentación pública; siga los comandos a continuación como punto de partida y confirme cualquier detalle específico del dispositivo con el fabricante.

## Resumen de configuración

Configurar un GK309E para Plaspy garantiza que el equipo pueda establecer una sesión de datos GPRS y enviar actualizaciones de posición y estado al endpoint y puerto compartidos de Plaspy. El objetivo es definir el APN y los parámetros del servidor, habilitar el reporte de datos y comprobar que el rastreador aparezca en la plataforma Plaspy.

- Apuntar el dispositivo al endpoint de servidor de Plaspy para que transmita telemetría a la plataforma
- Configurar el APN y activar GPRS para que el dispositivo use datos móviles en los reportes
- Establecer un intervalo de reporte adecuado para que las actualizaciones de posición lleguen con la cadencia deseada
- Verificar la conectividad con el comando de verificación del equipo y confirmar la visibilidad en Plaspy
- Usar comandos por SMS o las herramientas oficiales de Concox según su flujo de instalación

## Ajustes del servidor Plaspy

- Server domain d.plaspy.com  
- Server IP 54.85.159.138  
- Port 8888 (Plaspy uses the same port for all supported devices)  
- Transport support for UDP or TCP on port 8888 (choose the transport the device requires)  
- Plaspy automatically detects the tracker protocol when the device connects

## Requisitos previos típicos

- Una tarjeta SIM válida con plan de datos y capacidad de SMS instalada en el GK309E  
- Credenciales APN del operador móvil (use el marcador de posición {{apn}} y los campos opcionales {{apnu}} y {{apnp}} si son necesarios)  
- Acceso a un teléfono o herramienta de gestión capaz de enviar SMS de configuración al dispositivo, o bien la utilidad oficial de Concox si prefiere ese método  
- Alimentación o batería cargada y una posición de instalación estable para que el equipo obtenga conectividad GNSS y GPRS  
- Acceso a la plataforma Plaspy para confirmar que el rastreador reporte correctamente después de la configuración

## Cómo se conecta este rastreador a Plaspy

El GK309E se configura para iniciar una conexión GPRS y enviar datos de posición y estado al endpoint y puerto compartidos de Plaspy. Una vez configurado, Plaspy recibe los mensajes del dispositivo y determina automáticamente el protocolo del rastreador, lo que simplifica la configuración en la plataforma.

- El equipo utiliza datos GPRS para abrir una sesión y transmitir actualizaciones periódicas de posición a d.plaspy.com o a 54.85.159.138 en el puerto 8888  
- El transporte puede ser UDP o TCP según lo requiera el dispositivo y la elección durante la configuración  
- Plaspy detecta el protocolo automáticamente y procesa los mensajes entrantes para su visualización y notificaciones de eventos  
- El intervalo de reporte del rastreador controla la frecuencia con la que Plaspy recibe actualizaciones y muestra la posición en tiempo real en la plataforma

## Flujo de configuración habitual

1. Acceda al método o software oficial de configuración del fabricante (en el caso del GK309E esto suele implicar enviar comandos SMS de configuración o usar las herramientas de Concox).  
2. Ingrese el servidor de Plaspy como dominio d.plaspy.com o como la IP 54.85.159.138 en los ajustes de servidor del dispositivo.  
3. Configure el puerto del servidor en 8888 (el puerto que usa Plaspy para todos los dispositivos).  
4. Seleccione UDP o TCP si el dispositivo exige una selección explícita del transporte.  
5. Configure el APN y otros parámetros GPRS que requiera su operador móvil.  
6. Aplique o guarde la configuración y reinicie el dispositivo si el firmware lo requiere.  
7. Valide que el dispositivo reporte a Plaspy y aparezca en la plataforma; use el comando de verificación del equipo cuando esté disponible.

## Comandos de configuración de ejemplo

La configuración pública del GK309E puede realizarse enviando comandos por SMS al dispositivo. A continuación se muestran los comandos publicados con más frecuencia en el orden recomendado. Preserve los marcadores de posición exactamente donde se indican.

- Optional initial factory reset (use only if you need to return the device to factory defaults):
```text
FACTORY#
```

- Set the time zone to UTC+0:
```text
GMT,E,0#
```

- Set the mobile operator APN (replace {{apn}} and optional {{apnu}} and {{apnp}} as needed):
```text
APN,{{apn}}#, 
```
If your operator requires username and password, include them as:
```text
APN,{{apn}},{{apnu}},{{apnp}}#
```
(Placeholders: {{apn}} = APN name, {{apnu}} = APN username, {{apnp}} = APN password.)

- Set the GPRS server to Plaspy by domain (public example using domain):
```text
SERVER,1,d.plaspy.com,8888,0#
```

- Or set the GPRS server to Plaspy by IP (alternate public example using IP):
```text
SERVER,0,54.85.159.138,8888,0#
```

- Set the reporting/update interval to every 60 seconds (two variants shown in public docs):
```text
TIMER,60#
```
or
```text
TIMER,60,60#
```

- Enable GPRS mode so the device uses the configured APN and server:
```text
GPRSON,1#
```

- Check current GPRS and server parameter settings (verification command):
```text
GPRSSET#
```

Notas sobre el envío de comandos:
- Envíe cada comando como un SMS independiente al número del dispositivo.  
- Mantenga el orden cuando realice una configuración inicial completa: APN, SERVER, TIMER y luego habilite GPRS.  
- Use la versión del comando SERVER que corresponda a su preferencia por dominio o IP. Ambos apuntan a Plaspy en el puerto 8888.  
- Si necesita restablecer los valores de fábrica, utilice FACTORY# primero; téngalo como opcional y solo úselo cuando proceda.

## Notas de configuración

- Las revisiones de firmware y hardware pueden cambiar los comandos disponibles o la sintaxis de los mismos; confirme siempre con la documentación de Concox para la revisión de su dispositivo.  
- El GK309E admite configuración por SMS como se muestra, pero los instaladores también pueden emplear las herramientas de software de Concox cuando estén disponibles.  
- Elija UDP o TCP según los requisitos de su instalación; Plaspy acepta ambos en el puerto 8888 y detecta el protocolo automáticamente.  
- Todos los dispositivos que reportan a Plaspy usan el mismo puerto, lo que simplifica la configuración del servidor en despliegues con múltiples equipos.  
- Verifique las credenciales APN y la disponibilidad de datos antes de habilitar GPRS para evitar intentos de conexión fallidos.

## Por qué usar Plaspy con esta configuración

Usar el Concox GK309E con Plaspy ofrece una vía sencilla para obtener visibilidad y monitoreo remoto, tanto para organizaciones como para familias que requieren reportes constantes de posición y estado. Configurar el equipo para reportar al endpoint compartido de Plaspy permite centralizar el rastreo, las alertas y la supervisión operativa en una única plataforma.

To learn more about Plaspy and how it handles incoming tracker data, visit https://www.plaspy.com. Device-specific configuration methods, firmware behavior, and manufacturer details can change over time, so verify the latest instructions on the official Concox website https://www.iconcox.com/.
