---
slug: /concox/pg201/configuration
id: pg201-configuration
sidebar_label: Configuration
title: Concox - PG201 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el rastreador Concox PG201 y conectarlo a Plaspy con los ajustes públicos del servidor
keywords:
  - Configuración Concox PG201
  - Instalación Concox PG201
  - Configuración servidor Concox PG201
  - Concox PG201 Plaspy
  - Configuración rastreador GPS PG201
  - Configuración SMS PG201
  - Configuración APN PG201
  - Configuración rastreador personal
  - Seguimiento de personal PG201
  - Integración con plataforma GPS
---

# Concox - Configuración del PG201

Esta página documenta los ajustes públicos necesarios para usar el rastreador personal Concox PG201 con Plaspy. Se enfoca en las opciones prácticas y públicas que permiten que el dispositivo reporte al servicio Plaspy, cómo se aplican esos parámetros y qué verificar para confirmar que el rastreador aparece en Plaspy. Cuando aplica, esta guía incluye los comandos SMS publicados por el fabricante para la configuración básica.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión del hardware, el tipo de instalación y las herramientas del proveedor. El PG201 admite flujos de configuración por SMS y GPRS; en esta página se explican los comandos públicos y los procedimientos comúnmente usados para apuntar el dispositivo a Plaspy y validar la conectividad.

## Resumen de la configuración

Configurar el PG201 para Plaspy prepara el dispositivo para enviar datos GNSS y de estado a un endpoint centralizado de Plaspy, de modo que ubicaciones, alertas y telemetría aparezcan en la plataforma. El proceso de configuración normalmente establece el APN, el endpoint y puerto del servidor GPRS, los intervalos de reporte y el modo GPRS para que el rastreador envíe datos a Plaspy de forma fiable.

- Establecer el APN y, si corresponde, el usuario y la contraseña del APN para que el rastreador abra una sesión de datos GPRS.
- Configurar el servidor GPRS para apuntar el equipo a Plaspy usando el dominio o la IP proporcionados y el puerto compartido.
- Definir los intervalos de reporte (timers) para equilibrar la frecuencia de actualización y la duración de la batería.
- Habilitar el modo GPRS para que el dispositivo envíe activamente los reportes al endpoint de Plaspy.
- Verificar los ajustes y probar el envío de datos para que el dispositivo quede visible en los mapas y en la lista de alertas de Plaspy.

## Ajustes del servidor Plaspy

Use los siguientes ajustes públicos del servidor Plaspy al configurar el PG201. Plaspy usa el mismo puerto para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador.

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador cuando llegan los datos

## Requisitos típicos antes de la configuración

- Un dispositivo PG201 con batería cargada y funcionamiento básico confirmado.
- Una tarjeta SIM GSM activa con datos habilitados y capacidad para recibir/enviar SMS, instalada y registrada en la red.
- Información del APN de su operador móvil (nombre del APN y, opcionalmente, usuario y contraseña).
- Acceso a un método para enviar comandos SMS al equipo o a la herramienta de configuración del fabricante según lo documentado por Concox.
- Cobertura en una ubicación con servicio GSM/GPRS para que el dispositivo pueda conectarse.
- Acceso a Plaspy para validar que el dispositivo aparece y está reportando después de la configuración.

## Cómo se conecta este rastreador a Plaspy

El PG201 envía mensajes de GNSS y estado del equipo mediante GSM GPRS hacia la nube de Plaspy. Una vez configurado con la dirección y el puerto del servidor Plaspy, el rastreador establece una sesión de datos y transmite periódicamente telemetría de posición y alertas para que Plaspy pueda mostrar la ubicación y activar notificaciones.

- El rastreador se configura para reportar al endpoint y puerto compartidos de Plaspy (d.plaspy.com o 54.85.159.138 en el puerto 8888).
- Las actualizaciones de ubicación, las alertas SOS y los eventos de movimiento son enviados desde el dispositivo a Plaspy para su mapeo y notificaciones.
- Los modos de reporte por temporizador e informes instantáneos permiten ajustar la frecuencia de actualización para balancear visibilidad y consumo de batería.
- Plaspy recibe conexiones entrantes en el mismo puerto para todos los dispositivos y determina automáticamente el protocolo para procesar los mensajes.
- Se requiere una conexión GPRS exitosa y alcanzabilidad del servidor para reportes en tiempo real y entrega de alertas.

## Flujo de configuración habitual

1. Acceda al método oficial de configuración de Concox para el PG201 (comandos SMS, herramienta del proveedor o proceso documentado por el fabricante).
2. Prepare su SIM y confirme los datos del APN del operador que va a enviar al dispositivo.
3. Ingrese la dirección del servidor Plaspy manualmente como d.plaspy.com o 54.85.159.138 en la configuración del dispositivo.
4. Establezca el puerto del servidor en 8888 y elija UDP o TCP si el PG201 solicita selección de transporte.
5. Configure los intervalos de reporte (por ejemplo, un temporizador de 60 segundos) y active el modo GPRS en el equipo.
6. Aplique o guarde la configuración y reinicie el dispositivo si las instrucciones del fabricante lo requieren.
7. Valide que el equipo reporte a Plaspy y aparezca en su cuenta o en la lista de dispositivos de Plaspy.

## Ejemplo de comandos de configuración

El PG201 admite configuración por SMS usando los siguientes comandos publicados. Envíe estos comandos como mensajes SMS al número del dispositivo en el orden indicado al realizar una configuración inicial. Los comandos conservan marcadores de posición donde se requieren.

- Reinicio de fábrica opcional (usar sólo si es necesario)
```text
FACTORY#
```

- Establecer la zona horaria a UTC 0
```text
GMT,E,0#
```

- Configurar el APN del operador (reemplazar [apn], [apnu], [apnp] según corresponda)
```text
APN,[apn]# 
```
Si su operador requiere usuario y contraseña del APN, inclúyalos así:
```text
APN,[apn],[apnu],[apnp]#
```
Nota: [apn] es el nombre del APN del operador. [apnu] y [apnp] son campos opcionales de usuario y contraseña del APN.

- Configurar el servidor GPRS para Plaspy usando el dominio (UDP o TCP en el puerto 8888)
```text
SERVER,1,d.plaspy.com,8888,0#
```

- O configurar el servidor GPRS usando la IP de Plaspy
```text
SERVER,0,54.85.159.138,8888,0#
```

- Establecer el intervalo de actualización cada 60 segundos (se muestran dos variantes)
```text
TIMER,60#
```
o
```text
TIMER,60,60#
```

- Habilitar el modo GPRS
```text
GPRSON,1#
```

- Consultar parámetros GPRS actuales y verificar la configuración
```text
GPRSSET#
```

Use estos comandos SMS según la guía de Concox. Reemplace los marcadores de posición y elija la forma de SERVER con dominio o IP según su preferencia o el comportamiento del rastreador.

## Notas sobre la configuración

- La configuración por SMS está documentada públicamente para el PG201; puede usar SMS para establecer APN, servidor, timers y modo GPRS como se muestra arriba.
- Conserve y reemplace valores marcados como [apn], [apnu] y [apnp] con las credenciales de su operador. Los campos de usuario y contraseña son opcionales según el proveedor móvil.
- Elija UDP o TCP cuando el dispositivo lo solicite; Plaspy acepta ambos en el puerto 8888 y detectará automáticamente el protocolo entrante.
- Las versiones de firmware, las revisiones de hardware y los firmwares regionales pueden cambiar el comportamiento de los comandos o las funciones disponibles; consulte la documentación de Concox si un comando es rechazado.
- Use GPRSSET# para verificar el servidor, APN y timers configurados antes de depender de reportes en vivo.

## Por qué usar Plaspy con esta configuración

Configurar el PG201 para que reporte a Plaspy ofrece a las organizaciones visibilidad centralizada de la ubicación del personal, alertas SOS y eventos de movimiento usando un endpoint y puerto consistentes. La forma compacta del PG201, sus funciones SOS y los modos de reporte programado lo hacen adecuado para la seguridad del personal y monitoreo operativo básico cuando se integra con Plaspy.

Learn more about Plaspy and how the platform handles device telemetry and alerts at https://www.plaspy.com. For the latest device specific setup details, firmware notes and manufacturer instructions verify the official Concox documentation at https://www.iconcox.com/ since manufacturer procedures and firmware behavior can change over time.
