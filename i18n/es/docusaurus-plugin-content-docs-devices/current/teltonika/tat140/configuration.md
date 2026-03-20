---
slug: /teltonika/tat140/configuration
id: tat140-configuration
sidebar_label: Configuration
title: Teltonika - TAT140 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el Teltonika TAT140 con Plaspy, con ejemplo de servidor y comandos SMS
keywords:
  - configuración teltonika tat140
  - instalación teltonika tat140
  - configuración tat140 plaspy
  - configuración rastreador de activos teltonika
  - configuración servidor tat140
  - configuración rastreador gps teltonika
  - configuración dispositivo plaspy
  - configuración plataforma rastreo de activos
  - configuración sms teltonika
  - configuración rastreador gps alimentación por batería
---

# Teltonika - Configuración TAT140

Esta página describe el contexto público de configuración para usar el Teltonika TAT140 con la plataforma Plaspy. Incluye los ajustes de servidor públicos que debe apuntar el dispositivo, un ejemplo práctico sacado del contenido de configuración pública del TAT140 y los pasos habituales para preparar el equipo y que reporte correctamente a Plaspy.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Use la guía a continuación junto con la documentación y herramientas de Teltonika para garantizar el comportamiento correcto del equipo.

## Resumen de la configuración

El objetivo de la configuración es preparar el TAT140 para que envíe de forma confiable datos de posición y estado a Plaspy para seguimiento, telemetría y alertas. El ejemplo público incluido muestra un lote típico de parámetros que establece los valores APN y el endpoint y puerto del servidor Plaspy.

- Apunte el dispositivo al endpoint del servidor Plaspy para que los datos lleguen a su cuenta.
- Proporcione el APN y las credenciales necesarias para que el dispositivo use la conexión de datos celular.
- Elija un transporte (UDP o TCP) si es necesario y guarde la selección en la configuración del dispositivo.
- Verifique la conectividad y que los reportes lleguen a Plaspy para confirmar visibilidad y telemetría.
- Opcionalmente aplique la configuración por SMS o mediante las herramientas del fabricante para equipos en campo.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte soportado UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador

Estos valores son la información pública del endpoint Plaspy a utilizar al configurar el TAT140. Plaspy usa el mismo puerto para todos los dispositivos soportados y realiza detección automática de protocolo.

## Requisitos típicos previos a la configuración

- Acceso al dispositivo y al método o software de configuración del fabricante, por ejemplo comandos SMS de Teltonika o una herramienta de configuración Teltonika.
- Batería cargada o fuente de alimentación y conocimiento de la ubicación de instalación del dispositivo.
- Una tarjeta SIM activa y un plan de datos celulares compatible con LTE Cat 1 y con respaldo 2G si es necesario.
- Configuración APN y cualquier usuario y contraseña APN que requiera el operador móvil (en el ejemplo se usan marcadores).
- Conocimientos básicos para elegir UDP o TCP si el dispositivo exige selección explícita de transporte.
- Acceso a la documentación del fabricante o a FOTA Web para gestión de firmware y configuración cuando sea necesario.

## Cómo se conecta este rastreador a Plaspy

El TAT140 se configura para enviar periódicamente mensajes de ubicación y estado al endpoint y puerto compartidos de Plaspy. Una vez definidos la dirección del servidor y el transporte, el equipo comenzará a reportar según los intervalos de reporte configurados.

- El dispositivo envía mensajes de posición y telemetría a d.plaspy.com o 54.85.159.138 en el puerto 8888.
- Plaspy recibe conexiones entrantes en el mismo puerto para todos los dispositivos soportados y realiza detección automática del protocolo.
- La frecuencia de reporte periódico determina cada cuánto se transmiten las actualizaciones de ubicación y los mensajes de batería o estado.
- Una configuración correcta habilita la visibilidad en los paneles de Plaspy, monitoreo de geocercas y alertas basadas en eventos entrantes.
- Si la configuración se aplica por SMS, el dispositivo aceptará el lote de parámetros y empezará a reportar sin necesidad de un cliente de software adicional.

## Flujo de trabajo común de configuración

1. Acceda al método oficial de configuración del fabricante o al software para el TAT140 (comando SMS, herramienta de configuración de Teltonika o FOTA Web, según aplique).
2. Ingrese el dominio del servidor Plaspy d.plaspy.com o la IP del servidor 54.85.159.138 en el campo de servidor del dispositivo.
3. Configure el puerto del servidor en 8888.
4. Elija UDP o TCP si el dispositivo requiere selección de transporte.
5. Introduzca los detalles del APN y cualquier usuario o contraseña APN necesarios según su operador.
6. Aplique o guarde la configuración y, si es necesario, reinicie el dispositivo para activar los nuevos ajustes.
7. Valide que el equipo reporte a Plaspy confirmando mensajes entrantes o la visibilidad en la plataforma Plaspy.

Si su dispositivo admite configuración por SMS, puede aplicar el lote de parámetros a través del canal SMS del equipo como se muestra en el ejemplo siguiente.

## Comandos de configuración de ejemplo

El contenido público de configuración del TAT140 incluye un comando de lote de parámetros que puede usarse para fijar los valores APN y el endpoint del servidor Plaspy. Preserve los marcadores y reemplace por los valores de su operador antes de enviar.

- Reemplace los marcadores:
  - [apn] = el APN de su operador
  - [apnu] = usuario APN si es requerido
  - [apnp] = contraseña APN si es requerida

Example SMS batch command:

```
setparam 2001:[apn];2002:[apnu];2003:[apnp];2004:d.plaspy.com;2005:8888;2006:1
```

Notas sobre el comando de ejemplo:
- Este comando actualiza parámetros básicos incluyendo campos APN y el dominio y puerto del servidor Plaspy.
- Las claves de parámetro se presentan tal como aparecen en el contenido público de configuración. Consulte la documentación de Teltonika para el significado exacto de cada clave y los valores numéricos del transporte.
- Envíe este comando por SMS al dispositivo o use la herramienta de configuración recomendada por Teltonika si está disponible.

## Consideraciones de configuración

- Las versiones de firmware y las revisiones de hardware pueden cambiar los nombres de parámetros y los canales de configuración disponibles; siempre confirme las claves de parámetros con la documentación más reciente de Teltonika.
- Si el dispositivo requiere un valor numérico para el transporte, consulte la documentación de Teltonika para mapear el valor numérico a UDP o TCP antes de aplicar los ajustes.
- La configuración por SMS es un método público común para dispositivos Teltonika; utilizar la herramienta del fabricante o FOTA Web puede ofrecer validación adicional y capacidades de gestión remota.
- Plaspy usa el mismo puerto para todos los dispositivos y detecta automáticamente el protocolo, por lo que los elementos principales a configurar son la dirección del servidor, el puerto, el APN y la selección de transporte cuando se requiera.
- Valide la conectividad del dispositivo después de aplicar la configuración y supervise los primeros reportes en Plaspy para confirmar la integración correcta.

## Por qué usar Plaspy con esta configuración

Usar el Teltonika TAT140 con Plaspy ofrece una solución práctica para el rastreo de activos a largo plazo y sin supervisión, donde la duración de batería, la robustez y la cobertura celular fiable son prioridades. Configurar el equipo para apuntar al endpoint compartido de Plaspy garantiza la entrega consistente de datos de posición y telemetría para monitoreo, alertas por geocercas e informes históricos.

Para obtener más información sobre Plaspy y cómo soporta flotas y flujos de trabajo de rastreo de activos visite https://www.plaspy.com. Para los detalles específicos más recientes sobre configuración de dispositivos, definiciones de parámetros y comportamiento de firmware, verifique la información con el fabricante en https://www.teltonika-gps.com/
