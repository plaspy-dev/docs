---
slug: /wanway/g19h/configuration
id: g19h-configuration
sidebar_label: Configuration
title: WanWay - G19H Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el rastreador WanWay G19H y conectarlo al servidor de Plaspy mediante comandos SMS y ajustes compartidos
keywords:
  - Configuración WanWay G19H
  - Instalación WanWay G19H
  - Integración G19H con Plaspy
  - Configuración servidor G19H
  - Configuración rastreador WanWay
  - Configuración rastreador Plaspy
  - Rastreo de vehículos G19H
  - Configuración SMS G19H
  - Ajustes GPRS G19H
  - Integración de flotas Plaspy
---

# WanWay - G19H Configuración

Esta página documenta el contexto público de configuración para utilizar el rastreador WanWay G19H con Plaspy. Resume los pasos prácticos y los comandos públicos conocidos para preparar el dispositivo y que envíe datos de GPS y telemetría a Plaspy, y detalla los valores de servidor compartidos que Plaspy espera. Utilice esta guía para comprender los valores de servidor requeridos, el flujo típico de trabajo y los comandos SMS que suelen usar los instaladores.

Plaspy emplea ajustes de servidor compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador; sin embargo, los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El G19H soporta configuración por SMS según su documentación pública; esos comandos se incluyen a continuación como ejemplo de cómo apuntar el dispositivo a Plaspy y verificar la conectividad.

## Resumen de la configuración

El objetivo de esta configuración es habilitar que el G19H reporte su posición GPS y telemetría a Plaspy para que el dispositivo sea visible en la plataforma. La configuración normalmente prepara la conectividad celular, establece el endpoint y puerto del servidor, define los intervalos de reporte y cambia el dispositivo al modo de reporte GPRS.

- Configure el APN del equipo para que pueda enviarse tráfico GPRS desde la SIM instalada.  
- Apunte el equipo al endpoint del servidor de Plaspy para que la telemetría se routée a Plaspy.  
- Establezca el intervalo de reporte (timer) para controlar la frecuencia de actualizaciones hacia Plaspy.  
- Cambie el dispositivo al modo GPRS para que utilice el servidor y puerto configurados.  
- Valide que el dispositivo reporte y sea visible en Plaspy después de la configuración.

## Ajustes del servidor de Plaspy

- Dominio del servidor: d.plaspy.com  
- IP del servidor: 54.85.159.138  
- Puerto: 8888 (Plaspy utiliza el mismo puerto para todos los dispositivos compatibles)  
- Transporte: el dispositivo puede configurarse para usar UDP o TCP en el puerto 8888  
- Detección de protocolo: Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta

## Requisitos típicos antes de la configuración

- Una unidad G19H alimentada e instalada, con las conexiones estándar de cuatro hilos realizadas según las prácticas de instalación.  
- Una tarjeta SIM operativa con acceso a datos activo y los ajustes de APN correctos para el operador.  
- Capacidad para enviar mensajes SMS al dispositivo (configuración por SMS) o acceso a la herramienta de configuración del fabricante si está disponible.  
- Conocimiento de las credenciales APN correctas para la SIM instalada (usuario y contraseña si se requieren).  
- Acceso a la documentación del fabricante o a las herramientas del proveedor para instrucciones específicas de firmware y cualquier interfaz de selección de transporte.  
- Cobertura celular en la ubicación del dispositivo; tener en cuenta que el G19H está diseñado para redes GSM 2G donde estén disponibles.

## Cómo se conecta este rastreador a Plaspy

Cuando se configura con el endpoint de Plaspy, el G19H establece conectividad GPRS y envía paquetes de ubicación y telemetría al endpoint y puerto compartido de Plaspy. Plaspy recibe estos paquetes, reconoce automáticamente el protocolo del rastreador y muestra los datos del dispositivo en la plataforma.

- El rastreador reporta coordenadas GPS a d.plaspy.com en el puerto 8888 para que Plaspy pueda ubicar el dispositivo en los mapas.  
- La telemetría como el estado de ACC/ignición, alarmas por manipulación o vibración y el estado del inmovilizador se envía junto con las actualizaciones de posición.  
- La frecuencia de reporte la gobiernan los ajustes de timer del dispositivo, de modo que los operadores puedan equilibrar la granularidad de las actualizaciones y el consumo de datos.  
- Plaspy detecta automáticamente el protocolo entrante, permitiendo que dispositivos que usen TCP o UDP sean manejados sin necesidad de seleccionar manualmente el protocolo en el servidor.  
- La visibilidad y las notificaciones de eventos en Plaspy dependen del registro exitoso en la red GPRS y de la correcta configuración del APN y del servidor.

## Flujo de trabajo típico de configuración

1. Acceda al método oficial de configuración del fabricante o a la herramienta del proveedor, o prepárese para enviar comandos SMS si operará por SMS.  
2. Configure el APN del operador en el rastreador con las credenciales de su SIM.  
3. Ingrese la dirección del servidor de Plaspy (d.plaspy.com) o la IP del servidor (54.85.159.138) en los ajustes de servidor del dispositivo.  
4. Establezca el puerto del servidor en 8888 y seleccione UDP o TCP si el rastreador requiere una selección de transporte.  
5. Aplique o guarde la configuración para que el dispositivo use los nuevos ajustes de servidor y APN.  
6. Reinicie el dispositivo si las instrucciones del fabricante recomiendan un reinicio para aplicar los ajustes GPRS.  
7. Valide que el dispositivo reporta a Plaspy y aparece en la plataforma; verifique que se reciben ubicación, telemetría y alarmas.

## Comandos de configuración de ejemplo

La configuración pública del G19H admite comandos por SMS. Envíe estos comandos como mensajes SMS al número del dispositivo en el orden mostrado cuando el orden sea importante.

- Configure el APN del operador (reemplace los marcadores con los valores de su operador):
```
APN,{{apn}}{{#if apnu}},{{apnu}},{{apnp}}{{/if}}#
```
Explicación: Reemplace {{apn}} por su APN. Si su operador requiere usuario y contraseña para el APN, suministre {{apnu}} y {{apnp}} respectivamente. El dispositivo acepta el comando APN para habilitar los datos GPRS.

- Establezca el servidor GPRS a Plaspy (versión con dominio):
```
SERVER,1,d.plaspy.com,8888,0#
```
Explicación: Esto apunta el G19H al dominio de Plaspy en el puerto 8888. El último parámetro es el índice de protocolo según el firmware del dispositivo.

- Configure el intervalo de reporte (ejemplo: timer o heartbeat a 60 segundos):
```
TIMER,60,60#
```
Explicación: Ajuste los valores numéricos para controlar los intervalos de subida según sus necesidades de reporte.

- Habilite el modo de reporte GPRS:
```
GPRSON,1#
```
Explicación: Cambia el dispositivo de modo SMS a modo GPRS para que envíe datos al servidor configurado.

- Verifique los parámetros actuales del dispositivo:
```
PARAM#
```
Explicación: Solicita los parámetros de configuración actuales para verificar APN, servidor y timers.

- Compruebe el estado del rastreador:
```
STATUS#
```
Explicación: Recupera el estado del dispositivo para confirmar el registro en la red, la fijación GPS, el estado de batería/energía y otros indicadores en tiempo de ejecución.

Nota: Conserve exactamente los marcadores tal como se proporcionan ({{apn}}, {{apnu}}, {{apnp}}) al preparar los comandos SMS. Use el dominio d.plaspy.com o la IP del servidor 54.85.159.138 con puerto 8888 según sea necesario. El dispositivo puede aceptar la forma de dominio o la de IP en su comando SERVER.

## Notas de configuración

- Las diferencias de firmware pueden cambiar la sintaxis de los comandos o los parámetros disponibles; siempre confirme el formato exacto de los comandos SMS con la documentación del dispositivo para su versión de firmware.  
- Los comandos públicos del G19H muestran la configuración por SMS; algunos instaladores usan una herramienta USB o software cuando está disponible—siga el método del fabricante al que tenga acceso.  
- Elija UDP o TCP según la capacidad del dispositivo y la preferencia del instalador; Plaspy aceptará cualquiera en el puerto 8888 y detectará automáticamente el protocolo.  
- Mantenga las credenciales APN seguras y confirme que coinciden con el proveedor de la SIM instalada para evitar fallos de registro GPRS.  
- Después de cambiar los ajustes de servidor o APN, verifique PARAM# y STATUS# para validar que los cambios se aplicaron y que el dispositivo puede conectarse a d.plaspy.com.

## Por qué usar Plaspy con esta configuración

Usar el WanWay G19H con Plaspy ofrece a las organizaciones una vía sencilla para obtener visibilidad en tiempo real de vehículos, monitoreo de encendido y manipulación, y control remoto del inmovilizador. Cuando el dispositivo se configura para reportar al endpoint y puerto compartidos de Plaspy, los operadores obtienen mapas consolidados, alertas y datos históricos de rutas para flotas y flujos de trabajo de seguridad.

Para conocer más sobre Plaspy y sus capacidades visite https://www.plaspy.com. Para los detalles de configuración específicos más recientes del dispositivo, notas de firmware e instrucciones del fabricante, verifique la información en el sitio de WanWay https://www.wanwaytech.net/. Las especificaciones y métodos de configuración del fabricante pueden cambiar con el tiempo, así que confirme siempre el comportamiento del dispositivo con la documentación oficial de WanWay antes de despliegues a gran escala.
