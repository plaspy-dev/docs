---
slug: /suntech/st_240/configuration
id: st_240-configuration
sidebar_label: Configuration
title: Suntech - ST 240 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del rastreador Suntech ST 240 para apuntarlo al servidor Plaspy mediante APN y comandos SMS
keywords:
  - Suntech ST 240
  - Configuración Suntech ST240
  - Configuración Suntech ST 240
  - ST 240 Plaspy
  - Configuración servidor ST240
  - Configuración rastreador GPS Suntech
  - Configuración rastreador de vehículo
  - Configuración GPRS ST 240
  - Plataforma de rastreo Suntech
  - Compatibilidad rastreador GPS Plaspy
---

# Suntech - ST 240 Configuration

Esta página describe la configuración pública para utilizar el rastreador Suntech ST 240 con Plaspy. Explica los ajustes del servidor, los pasos preparatorios necesarios y los comandos SMS públicos que permiten señalar el dispositivo hacia Plaspy para que envíe telemetría y datos de ubicación a la plataforma.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el equipo se conecta. Los pasos exactos del fabricante para el ST 240 pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor que utilice. La guía que sigue se basa únicamente en información pública de configuración y en los ejemplos de comandos SMS disponibles con el equipo.

## Resumen de configuración

El objetivo de este proceso es preparar el ST 240 para que se comunique de forma fiable con Plaspy y los vehículos rastreados aparezcan en la plataforma. Al finalizar, el rastreador deberá usar el APN y la configuración GPRS del operador, reportar al endpoint del servidor de Plaspy en el puerto compartido y utilizar UDP o TCP según lo seleccione.

- Configure el APN y los parámetros de GPRS del dispositivo para que pueda enviar datos por la red celular.
- Apunte el rastreador al endpoint del servidor de Plaspy para que los informes lleguen a la plataforma.
- Establezca los intervalos de reporte para que las actualizaciones de ubicación se ajusten a sus necesidades de monitoreo.
- Valide la conectividad y confirme que el rastreador aparece en Plaspy tras la configuración.
- Use los comandos SMS provistos o las herramientas del fabricante para aplicar los ajustes según sea necesario.

## Ajustes del servidor de Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte: UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador
- Tenga en cuenta que Plaspy usa el mismo puerto para todos los dispositivos compatibles

## Requisitos típicos antes de la configuración

- Una tarjeta SIM operativa con acceso a datos y el APN correcto de su operador móvil
- El IMEI del dispositivo para poder calcular el ID del equipo utilizado en los comandos SMS
- Un teléfono o gateway SMS capaz de enviar mensajes de configuración al rastreador si va a usar SMS
- Acceso al software o herramientas de configuración del fabricante si prefiere no usar SMS
- Alimentación para el ST 240 y una ubicación estable para pruebas iniciales
- Conocimiento de qué transporte requiere su instalación (UDP o TCP) en caso de que el rastreador solicite selección

## Cómo se conecta este rastreador a Plaspy

El ST 240 se configura para enviar datos de ubicación y del equipo al endpoint compartido de Plaspy y al puerto correspondiente. Una vez que el rastreador tenga los ajustes de APN correctos y se apliquen los parámetros del servidor, el dispositivo entregará sus reportes periódicos y eventos a Plaspy, donde se procesarán y mostrarán a los usuarios.

- El rastreador usa GPRS para transmitir mensajes a la dirección de servidor configurada
- Los reportes se envían a d.plaspy.com o a 54.85.159.138 en el puerto 8888
- El transporte puede ser UDP o TCP según la configuración del equipo y las condiciones de la red
- Plaspy detecta automáticamente el protocolo entrante del rastreador y asocia el dispositivo con su cuenta
- Tras iniciar el reporte, las actualizaciones de ubicación y los eventos serán visibles en la plataforma Plaspy

## Flujo de configuración habitual

1. Acceda al método de configuración oficial del fabricante o al software, o prepárese para enviar mensajes SMS si va a usar ese método.
2. Determine el ID del equipo a partir del IMEI (ver Ejemplos de comandos de configuración) y tenga listos el APN del operador, el usuario y la contraseña si son necesarios.
3. Ingrese el servidor de Plaspy como d.plaspy.com o 54.85.159.138 en los campos de servidor del dispositivo.
4. Establezca el puerto del servidor en 8888.
5. Elija UDP o TCP si el dispositivo solicita selección de transporte.
6. Aplique o guarde los ajustes de configuración en el rastreador.
7. Reinicie el dispositivo si lo requiere el equipo o después de la configuración vía SMS.
8. Verifique que el dispositivo esté reportando a Plaspy y sea visible en la plataforma.

## Ejemplos de comandos de configuración

El ST 240 acepta comandos de configuración vía SMS. Los siguientes ejemplos son los comandos públicos extraídos del contenido de configuración del equipo. Reemplace \<device_id> por el ID del dispositivo derivado del IMEI (vea la nota más abajo) y sustituya los marcadores de APN por los valores de su operador.

- Cómo calcular el ID del dispositivo
  - El ID de dispositivo usado en los comandos son seis dígitos del IMEI excluyendo el último dígito del IMEI. Por ejemplo, si el IMEI es 123456789012345, el ID del dispositivo corresponde a los dígitos 9–14: 901234.

1) Configurar el APN del operador y el servidor GPRS (la IP y el puerto del servidor apuntan a Plaspy)
```
SA200NTW;<device_id>;02;<gprs_flag>;[apn];[apnu];[apnp];54.85.159.138;8888;;;;
```
- \<device_id> = últimos 6 dígitos del IMEI excluyendo el último dígito del IMEI (ver cálculo arriba)
- \<gprs_flag> = 1 si se proporciona usuario o contraseña del APN, de lo contrario 0
- [apn] = APN de su operador
- [apnu] = usuario del APN si su operador lo requiere
- [apnp] = contraseña del APN si su operador lo requiere

2) Establecer el intervalo de reporte/actualización a 60 segundos
```
SA200RPT;<device_id>;02;60;60;60;3;0;0;0;0;0
```
- Este ejemplo establece valores de reporte periódico; mantenga el orden de parámetros exactamente como se muestra.

3) Verificar ajustes actuales (consulta)
```
SA200CMD;<device_id>;02;PresetA
```
- Use este comando para comprobar o solicitar la configuración preset actual.

Notas sobre el envío de comandos
- Envíe cada comando como mensaje SMS al número telefónico del dispositivo.
- Conserve el orden de parámetros y los marcadores al reemplazarlos por valores reales.
- La dirección del servidor en estos comandos apunta directamente a la IP y el puerto del servidor Plaspy según lo requerido por la plataforma.

## Notas de configuración

- Las versiones de firmware y las revisiones de hardware pueden cambiar la sintaxis exacta de los SMS o los parámetros disponibles. Verifique el formato correcto de comandos para su unidad.
- El ST 240 admite configuración vía SMS y mediante herramientas del fabricante; elija el método que mejor se adapte a sus prácticas de instalación.
- Cuando el dispositivo solicite selección de transporte, elija UDP o TCP de forma coherente con sus reglas de red y firewall.
- Mantenga los marcadores de usuario y contraseña del APN [apnu] y [apnp] solo si su operador los requiere; de lo contrario establezca gprs_flag en 0 y deje esos campos vacíos.
- Después de aplicar los ajustes, espere unos minutos para que el dispositivo se registre en la red y empiece a reportar a Plaspy.

## Por qué usar Plaspy con esta configuración

Usar el Suntech ST 240 con Plaspy ofrece a las organizaciones una manera sencilla de obtener visibilidad del movimiento de vehículos y la telemetría mediante un endpoint de servidor unificado. Los ajustes compartidos del servidor Plaspy y la detección automática de protocolo reducen la carga de configuración por dispositivo y aceleran la integración de múltiples unidades en una vista única de la flota.

To learn more about Plaspy and how it manages device connections, visit https://www.plaspy.com. For device specific firmware details, SMS syntax variations, and the latest setup procedures, verify the current documentation and support resources at the manufacturer website http://www.suntechint.com/ since manufacturer specifications and configuration methods can change over time.
