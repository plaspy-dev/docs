---
slug: /telic/sbc3_can/configuration
id: sbc3_can-configuration
sidebar_label: Configuration
title: Telic - SBC3 CAN Configuration
sidebar_class_name: menu_item_tracker
description: Guía práctica para configurar Telic SBC3 CAN con ajustes de servidor Plaspy y comandos SMS
keywords:
  - configuración Telic SBC3 CAN
  - instalación Telic SBC3 CAN
  - integración SBC3 CAN Plaspy
  - configuración rastreador GPS Telic
  - ajustes de servidor rastreador Telic
  - configuración rastreador Plaspy
  - configuración de seguimiento de vehículos
  - configuración GPS gestión de flotas
  - configuración SMS Telic
  - configuración rastreador CAN bus
---

# Telic - SBC3 CAN Configuración

Esta página describe el contexto público de configuración para usar el rastreador Telic SBC3 CAN con Plaspy. Reúne los ajustes de servidor prácticos y los comandos SMS comúnmente empleados para apuntar el SBC3 CAN a Plaspy y así habilitar el reporte de ubicación y la visibilidad del dispositivo. Use esta guía junto con la documentación del fabricante para completar una instalación segura y confiable.

Plaspy utiliza un endpoint de servidor compartido y el mismo puerto para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor, por lo que confirme los detalles con la documentación de Telic cuando sea necesario. Los ejemplos siguientes muestran los comandos SMS y el flujo publicado para el SBC3 CAN que son adecuados para la integración con Plaspy.

## Resumen de configuración

El objetivo de esta configuración es preparar el SBC3 CAN para comunicarse con la plataforma Plaspy y validar que los mensajes de telemetría y estado lleguen al servidor de Plaspy. El SBC3 CAN admite configuración por SMS según las instrucciones públicas, por lo que el flujo se centra en actualizar el acceso a la red, el endpoint del servidor y el modo de operación.

- Configure el APN y las credenciales APN opcionales para que el dispositivo pueda usar GPRS para datos.
- Establezca la dirección del servidor GPRS de Plaspy para que el rastreador reporte a Plaspy.
- Seleccione el modo de transporte adecuado si es necesario y habilite el reporte por GPRS.
- Valide la conectividad y el reporte del dispositivo para que éste quede visible en Plaspy.

## Ajustes del servidor de Plaspy

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Automatic protocol detection in Plaspy

Tenga en cuenta que todos los dispositivos en Plaspy usan el mismo puerto y Plaspy detecta automáticamente el protocolo del rastreador, por lo que normalmente sólo necesita configurar la dirección del servidor y el puerto en el equipo.

## Requisitos típicos antes de la configuración

- Una unidad Telic SBC3 CAN instalada y con alimentación, con la configuración por SMS habilitada.
- Una SIM celular activa con un plan de datos válido y la información correcta del APN.
- Acceso al método de configuración del dispositivo recomendado por el fabricante, como comandos SMS o la herramienta oficial de Telic.
- La contraseña por defecto del dispositivo si va a usar comandos SMS y autorización para cambiarla si es necesario.
- Cobertura de red en el área de instalación para conectividad GPRS.
- Acceso administrativo a la cuenta de flota en Plaspy para validar la visibilidad del dispositivo después de la configuración.

## Cómo se conecta este rastreador a Plaspy

El SBC3 CAN se configura para enviar datos al endpoint y puerto compartidos del servidor Plaspy, de modo que Plaspy reciba automáticamente las actualizaciones de ubicación y estado. La plataforma utiliza el mismo puerto para todos los rastreadores compatibles y detectará el protocolo entrante para interpretar los mensajes correctamente.

- El rastreador envía datos GPRS al endpoint o IP del servidor Plaspy en el puerto 8888.
- El transporte puede ser UDP o TCP según las preferencias del dispositivo y la red del operador.
- Plaspy detecta automáticamente el protocolo del rastreador e interpreta la telemetría.
- Una vez activo el reporte, el dispositivo queda visible y administrable dentro de Plaspy.
- Los mensajes regulares de estado, posición y eventos se reenvían a Plaspy para su monitoreo.

## Flujo típico de configuración

1. Acceda al método de configuración oficial de Telic para el SBC3 CAN, por ejemplo SMS o la herramienta del fabricante, siguiendo las instrucciones de Telic.
2. Ingrese la dirección del servidor de Plaspy usando d.plaspy.com o 54.85.159.138 cuando se le solicite la dirección del servidor.
3. Establezca el puerto del servidor en 8888 como puerto de reporte del dispositivo.
4. Si el dispositivo solicita elección de transporte, elija UDP o TCP según su preferencia de red.
5. Configure el APN y las credenciales APN opcionales para que GPRS pueda usarse como transporte de datos.
6. Aplique o guarde la configuración y reinicie el dispositivo si las instrucciones del fabricante requieren un reinicio.
7. Valide que el dispositivo reporte a Plaspy comprobando el estado del equipo en la plataforma y utilizando el comando de verificación del dispositivo cuando esté disponible.

## Ejemplos de comandos de configuración

El SBC3 CAN admite configuración mediante SMS. Los siguientes comandos SMS son las instrucciones públicas proporcionadas para este modelo. La contraseña por defecto del dispositivo utilizada en estos ejemplos es 123456. Reemplace los marcadores y la contraseña según corresponda para su instalación.

- Reset de fábrica inicial opcional
```sms
begin123456
```

- Establecer la zona horaria a UTC 0
```sms
time zone123456 0
```

- Configurar el APN del operador
```sms
apn123456 [apn]
```
Explicación: reemplace [apn] por el nombre del APN de su operador móvil.

- Establecer nombre de usuario y contraseña del APN si se requieren
```sms
up123456 [apnu] [apnp]
```
Explicación: reemplace [apnu] con el usuario del APN y [apnp] con la contraseña del APN. Envíe este SMS sólo si su operador solicita credenciales APN.

- Establecer el servidor GPRS a la IP y puerto de Plaspy
```sms
adminip123456 54.85.159.138 8888
```
Nota: Este comando configura el rastreador para reportar a la IP del servidor Plaspy en el puerto 8888. Si su flujo de trabajo requiere usar el dominio en su lugar, introduzca d.plaspy.com en el campo de servidor cuando utilice la herramienta del fabricante si esa opción está disponible.

- Cambiar el dispositivo al modo GPRS
```sms
gprs123456,1,1
```
O la variante más corta
```sms
gprs123456
```
Explicación: Use la variante requerida por su firmware. La primera forma muestra parámetros comúnmente usados para habilitar la operación GPRS.

- Comprobar la configuración actual del dispositivo
```sms
check123456
```
Este comando de verificación devuelve valores clave de configuración para confirmar APN, servidor y modo.

## Notas de configuración

- La configuración por SMS es un método publicado para el SBC3 CAN, pero también pueden existir herramientas o interfaces de configuración del fabricante; siga las recomendaciones de Telic para elegir la mejor herramienta según su entorno.
- Las revisiones de firmware y hardware pueden cambiar la sintaxis de los comandos o los parámetros disponibles; si un comando no responde, verifique la versión de firmware del dispositivo y consulte la documentación de Telic.
- Elija UDP o TCP según la estabilidad del operador y las necesidades de la aplicación. Plaspy admite ambos transportes en el puerto 8888 y detecta automáticamente el protocolo entrante.
- La contraseña SMS por defecto en estas instrucciones públicas es 123456. Sustituya la contraseña cuando sea posible para mantener la seguridad del dispositivo.
- Todos los dispositivos de Plaspy usan el mismo puerto de servidor, lo que simplifica la configuración de flotas con diferentes modelos de rastreadores.

## Por qué usar Plaspy con esta configuración

Usar el Telic SBC3 CAN con Plaspy ofrece una forma práctica de obtener visibilidad de ubicaciones de vehículos y estado de dispositivos, apoyándose en una configuración de servidor consistente entre equipos. La capacidad del SBC3 CAN de configurarse para reporte por GPRS y los comandos SMS publicados facilita poner las unidades en línea y visibles en Plaspy para tareas de monitoreo y operaciones.

To learn more about Plaspy visit https://www.plaspy.com. For the latest device specific setup details, firmware notes, and manufacturer instructions verify information on the Telic website https://www.telic.de. Manufacturer configuration methods, firmware behavior, and device interfaces can change over time so always cross check with official Telic documentation.
