---
slug: /concox/ll701/configuration
id: ll701-configuration
sidebar_label: Configuration
title: Concox - LL701 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el Concox LL701 y apuntarlo a Plaspy para reportes y visibilidad
keywords:
  - Concox LL701 configuración
  - Concox LL701 instalación
  - Concox LL701 Plaspy
  - LL701 configuración de servidor
  - LL701 configuración GPS
  - configuración rastreador de activos
  - configuración rastreador GPS Plaspy
  - rastreo vehicular Concox LL701
  - LL701 configuración SMS
  - LL701 ajustes APN servidor
---

# Concox - Configuración del LL701

Esta página describe el contexto público de configuración para usar el rastreador Concox LL701 con Plaspy. Explica los ajustes prácticos de servidor y los comandos de fabricante más comunes para que usted pueda apuntar el LL701 a Plaspy y habilitar el reporte y la supervisión. El contenido está basado en comandos de configuración públicos y en características generales del dispositivo; sirve como referencia práctica para preparar la integración con Plaspy.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, por lo que en la plataforma se usa el mismo puerto y endpoint para los dispositivos LL701. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor, por lo que use los comandos aquí como referencia y confirme los detalles con la documentación oficial de Concox cuando sea necesario.

## Resumen de configuración

Preparar un LL701 para Plaspy se centra en configurar GPRS, establecer el APN correcto y apuntar el rastreador al servidor de Plaspy para que envíe ubicación y alertas. El LL701 permite configurarse por SMS y también vía Bluetooth mediante la app móvil de Concox; la conexión al servidor se realiza usando el endpoint y puerto compartidos de Plaspy.

- Configure el APN y el perfil GPRS del dispositivo para que el rastreador pueda establecer una conexión de datos.
- Apunte el LL701 al endpoint y puerto de Plaspy para que los mensajes de ubicación y alertas lleguen a la plataforma.
- Establezca intervalos de reporte y active GPRS para que el dispositivo envíe actualizaciones periódicas a Plaspy.
- Verifique la comunicación y confirme que el dispositivo aparece en Plaspy después de la configuración.
- Considere la autonomía y la alimentación del dispositivo durante las pruebas para evitar interrupciones inesperadas.

## Ajustes del servidor de Plaspy

Use los siguientes ajustes del servidor de Plaspy al configurar el LL701. Plaspy emplea el mismo puerto para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador.

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automáticamente detecta el protocolo del rastreador

## Requisitos típicos antes de la configuración

- Un dispositivo LL701 con energía suficiente o alimentación externa para realizar la configuración y las pruebas.
- Una SIM activa con plan de datos y el APN correcto del operador móvil.
- Capacidad para enviar comandos SMS al rastreador o acceso a la app móvil de Concox para configurar por Bluetooth.
- Conocimiento del APN del operador y del usuario/contraseña del APN si la red lo requiere.
- Una cuenta en Plaspy o acceso a su despliegue de Plaspy para confirmar que el dispositivo aparece después de la configuración.
- Un método para reiniciar o ciclar la alimentación del dispositivo si es necesario aplicar nuevos ajustes de red.

## Cómo se conecta este rastreador a Plaspy

El LL701 se configura para usar GPRS y reportar a Plaspy mediante el endpoint y puerto compartidos. Una vez aplicados el APN y los ajustes de servidor correctos, el rastreador abre una conexión de datos y envía reportes de ubicación y eventos a Plaspy, donde se vuelven visibles en la plataforma.

- El rastreador envía reportes periódicos de posición a d.plaspy.com en el puerto 8888.
- Alertas activadas por eventos, como manipulación o apertura, se envían al mismo endpoint de Plaspy.
- La comunicación puede usar UDP o TCP según la selección; Plaspy detectará el protocolo del rastreador automáticamente.
- Plaspy recibe los flujos de datos en su puerto compartido y asigna la información entrante al registro del dispositivo en la plataforma.
- La validación en Plaspy confirma el reporte exitoso y la visibilidad para supervisión y operaciones.

## Flujo de configuración habitual

1. Acceda al método de configuración oficial de Concox que prefiera, ya sea por comandos SMS o mediante la app Bluetooth de Concox.
2. Introduzca el endpoint del servidor de Plaspy usando el dominio d.plaspy.com o la IP 54.85.159.138.
3. Establezca el puerto del servidor en 8888.
4. Elija UDP o TCP para el transporte si el dispositivo solicita una selección explícita.
5. Configure el APN del operador (y el usuario/contraseña del APN si son necesarios) para que GPRS pueda conectarse.
6. Aplique o guarde la configuración en el LL701 y reinicie el equipo si el fabricante lo requiere.
7. Valide que el dispositivo reporte correctamente a Plaspy y que aparezca en su cuenta de Plaspy.

## Ejemplos de comandos de configuración

El LL701 admite configuración vía SMS. A continuación se muestran comandos SMS públicos usados para configurar el dispositivo. Preserve los marcadores de posición cuando prepare los mensajes reales.

- Optional initial factory reset (use only when you need to restore defaults)
```text
FACTORY#
```

- Set the time zone to UTC 0
```text
GMT,E,0#
```

- Set the operator APN
```text
APN,{{apn}}#
```
If your operator requires an APN username and password, include them as placeholders:
```text
APN,{{apn}},{{apnu}},{{apnp}}#
```
(Replace {{apn}} with the mobile operator APN. Replace {{apnu}} and {{apnp}} with APN username and APN password if required.)

- Set the GPRS server to use the Plaspy domain (UDP or TCP choice is made by transport setting)
```text
SERVER,1,d.plaspy.com,8888,0#
```

- Alternatively set the GPRS server using the Plaspy IP
```text
SERVER,0,54.85.159.138,8888,0#
```

- Set reporting interval to every 60 seconds
```text
TIMER,60#
```
Or alternate timer syntax:
```text
TIMER,60,60#
```

- Enable GPRS mode
```text
GPRSON,1#
```

- Verify current GPRS parameter settings
```text
GPRSSET#
```

Envíe estos comandos SMS al número del dispositivo asociado con el LL701 en el orden mostrado cuando realice una configuración inicial. El comando de restablecimiento de fábrica debe usarse solo cuando usted desea restaurar la configuración por defecto de forma intencionada.

## Notas de configuración

- Revisiones de firmware y hardware pueden alterar el comportamiento de los comandos o las opciones disponibles; verifique siempre con la documentación más reciente de Concox.
- El LL701 admite la configuración por SMS mostrada y también configuración por Bluetooth mediante la app móvil de Concox para una configuración local más rápida.
- Use los marcadores de posición {{apn}}, {{apnu}} y {{apnp}} exactamente como lo requiera su operador móvil; deje usuario y contraseña en blanco si no son necesarios.
- Elija UDP o TCP según la preferencia del instalador; Plaspy detectará automáticamente el protocolo del dispositivo una vez que el rastreador se conecte a d.plaspy.com en el puerto 8888.
- Plaspy emplea el mismo puerto para todos los dispositivos compatibles, lo que simplifica la incorporación de dispositivos en una flota mixta.

## Por qué usar Plaspy con esta configuración

Apuntar el Concox LL701 a Plaspy ofrece una forma directa de integrar rastreadores de activos de larga autonomía en un entorno de monitoreo operativo. Con Plaspy recibiendo los reportes del LL701 en el endpoint compartido, los administradores de flota pueden consolidar datos de ubicación y alertas de maquinaria pesada y activos valiosos en una única plataforma para supervisión operativa y respuesta a incidentes.

Para obtener más información sobre Plaspy y cómo puede gestionar dispositivos como el Concox LL701 visite https://www.plaspy.com. Para instrucciones específicas del dispositivo, notas de firmware y detalles del fabricante, verifique la información con Concox en https://www.iconcox.com/.
