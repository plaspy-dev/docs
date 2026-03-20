---
slug: /concox/jm_vl04/configuration
id: jm_vl04-configuration
sidebar_label: Configuration
title: Concox - JM-VL04 Configuration
sidebar_class_name: menu_item_tracker
description: Configurar Concox JM-VL04 para usar con Plaspy, incluyendo ajustes de servidor y ejemplos de comandos SMS
keywords:
  - Configuración Concox JM-VL04
  - Instalación Concox JM-VL04
  - Configuración servidor JM-VL04
  - Configuración JM-VL04 Plaspy
  - Configuración rastreador GPS Plaspy
  - Configuración rastreador GPS Concox
  - Guía configuración rastreador vehicular
  - Configuración SMS JM-VL04
  - Configuración rastreador OBD
  - Configuración plataforma seguimiento de flotas
---

# Concox - JM-VL04 Configuración

Esta página describe el contexto público de configuración para utilizar el Concox JM-VL04 con la plataforma Plaspy. Reúne los ajustes del servidor Plaspy y los comandos a nivel de dispositivo que suelen aparecer en la documentación pública para preparar el rastreador y que reporte a Plaspy.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador. Los pasos exactos del fabricante pueden variar según la versión de firmware, la revisión de hardware, el método de instalación y las herramientas del proveedor, por lo que use esta guía como referencia práctica y confirme detalles específicos del dispositivo con el fabricante cuando sea necesario.

## Resumen de configuración

El objetivo de esta configuración es dejar el dispositivo JM-VL04 listo para comunicar de forma fiable posición y estado a la plataforma Plaspy. Mediante los comandos públicos que se muestran a continuación (configuración por SMS) usted establece el APN, el servidor de destino, el transporte y el intervalo de reporte para que el equipo envíe datos al punto de entrada compartido de Plaspy.

- Configure el APN y los parámetros GPRS del dispositivo para que el rastreador tenga conectividad de datos.
- Indique al rastreador el endpoint del servidor Plaspy y defina el transporte y el puerto.
- Establezca un intervalo de reporte adecuado para que el dispositivo envíe actualizaciones periódicas a Plaspy.
- Active el modo GPRS y confirme que el rastreador guarda los ajustes.
- Verifique la conectividad y que el dispositivo aparezca en Plaspy mediante la vista de dispositivos de la plataforma.

## Ajustes del servidor Plaspy

- Server domain: d.plaspy.com  
- Server IP: 54.85.159.138  
- Port: 8888 (Plaspy usa el mismo puerto para todos los dispositivos soportados)  
- Transport: el dispositivo puede configurarse para usar UDP o TCP en el puerto 8888  
- Protocol handling: Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta

## Requisitos previos a la configuración

- Asegúrese de que el JM-VL04 tenga una tarjeta SIM funcional con datos y SMS habilitados en la red objetivo y con los valores APN correctos.
- Dispositivo encendido y conectado al puerto OBD del vehículo o a la fuente de alimentación adecuada para que acepte comandos de configuración.
- Acceso al método de configuración del fabricante; para el JM-VL04 los comandos públicos por SMS son los más habituales.
- Conocimiento de los valores APN de su operador móvil; pueden utilizarse los marcadores [apn], [apnu] y [apnp] en los comandos.
- Un medio para enviar mensajes SMS al rastreador desde el teléfono del instalador o administrador.
- Si está disponible y lo prefiere, también puede configurarse por BLE mediante la app o herramienta del fabricante según su manual.

## Cómo se conecta este rastreador a Plaspy

El JM-VL04 se configura para reportar datos al endpoint compartido y al puerto de Plaspy. Una vez que se definen el APN y la información del servidor, el rastreador establece una sesión de datos GPRS y envía mensajes periódicos de ubicación y estado a Plaspy. La plataforma recibe la conexión en el puerto compartido y usa la detección automática de protocolo para interpretar los mensajes del dispositivo.

- El dispositivo usa el APN configurado para obtener conectividad de datos GPRS.
- El rastreador abre una conexión TCP o UDP a d.plaspy.com o a la IP del servidor Plaspy en el puerto 8888.
- Plaspy detecta y decodifica automáticamente el protocolo del rastreador cuando el dispositivo se conecta.
- Se envían actualizaciones periódicas y mensajes de eventos a Plaspy según el intervalo TIMER configurado.
- La visibilidad y el monitoreo en la plataforma están disponibles una vez que el dispositivo reporta correctamente al endpoint de Plaspy.

## Flujo típico de configuración

1. Acceda al método de configuración oficial del fabricante para el JM-VL04 (comandos SMS, herramienta BLE o utilidad del proveedor).
2. Verifique que la tarjeta SIM esté insertada y conozca el APN; establezca el APN usando el formato de comando del fabricante.
3. Introduzca el servidor de Plaspy como d.plaspy.com o use la IP del servidor 54.85.159.138 en los ajustes del dispositivo.
4. Establezca el puerto del servidor en 8888 y seleccione UDP o TCP si el rastreador solicita escoger el transporte.
5. Active el modo GPRS y defina un intervalo de reporte (por ejemplo 60 segundos), luego guarde o aplique la configuración.
6. Reinicie o realice un ciclo de alimentación del dispositivo si el equipo lo requiere para aplicar los cambios.
7. Verifique que el dispositivo reporte a Plaspy y aparezca en la plataforma comprobando la actividad del equipo en Plaspy.

## Ejemplos de comandos de configuración

La configuración pública del JM-VL04 puede realizarse enviando comandos SMS al dispositivo. Los siguientes comandos proceden de la guía pública del fabricante y se muestran en orden. Mantenga la sintaxis exacta según la documentación del equipo.

1. Reinicio de fábrica opcional (usar sólo cuando sea necesario o en la puesta en marcha)
```text
FACTORY#
```

2. Establecer la zona horaria a UTC+0
```text
GMT,E,0#
```

3. Definir el APN de su operador móvil (conserve los marcadores)
```text
APN,[apn]{{apnu ? ',' + [apnu] + ',' + [apnp] : ''}}#
```
- Explicación: Reemplace [apn] por el APN de su operador. Si su operador requiere usuario y contraseña, use los marcadores opcionales [apnu] y [apnp] que proporciona el fabricante. (Mantenga el formato separado por comas si se requieren credenciales.)

4. Establecer el servidor GPRS para usar el dominio de Plaspy (la selección UDP/TCP se gestiona por la configuración de transporte del dispositivo)
```text
SERVER,1,d.plaspy.com,8888,0#
```
o establecer el servidor con la IP de Plaspy
```text
SERVER,0,54.85.159.138,8888,0#
```
- Explicación: Utilice la forma con dominio para confiar en DNS o la forma con IP si DNS no está disponible. El puerto debe ser 8888.

5. Definir el temporizador de actualización a 60 segundos
```text
TIMER,60#
```
o formato alternativo de temporizador
```text
TIMER,60,60#
```

6. Activar el modo GPRS
```text
GPRSON,1#
```

7. Verificar los parámetros GPRS actuales
```text
GPRSSET#
```
- Explicación: Envíe GPRSSET# para solicitar al dispositivo que responda con la configuración GPRS actual y así confirmar APN, servidor, puerto y valores de timer.

Nota: Mantenga el orden al aplicar APN y ajustes de servidor cuando el dispositivo lo requiera. En muchos flujos de trabajo el comando APN debe establecerse antes de activar GPRS.

## Notas de configuración

- El JM-VL04 soporta la configuración por SMS tal como se muestra; la configuración por BLE o mediante la herramienta del proveedor también puede estar disponible según el firmware del dispositivo.
- Diferentes revisiones de firmware o variantes regionales pueden modificar el formato de los comandos o los parámetros disponibles; confirme siempre la sintaxis con el manual del equipo.
- Puede apuntar el dispositivo a d.plaspy.com o a la IP del servidor Plaspy; ambos son aceptables, aunque usar el dominio permite resolución DNS si la IP cambia.
- Elija UDP o TCP en el dispositivo si se solicita; Plaspy acepta conexiones por cualquiera de los dos transportes en el puerto 8888 y detectará automáticamente el protocolo del rastreador.
- Todos los dispositivos en Plaspy usan el puerto 8888, lo que simplifica despliegues multi modelo y la configuración del lado del servidor.

## Por qué usar Plaspy con esta configuración

Usar Plaspy con un Concox JM-VL04 correctamente configurado ofrece una vía sencilla hacia la visibilidad en tiempo real y el monitoreo de flotas. Los comandos públicos anteriores preparan el rastreador para reportar de forma fiable a Plaspy, habilitando actualizaciones de ubicación, monitoreo operativo e integración en flujos de trabajo de gestión de flotas. Para organizaciones que requieren reportes consistentes y visibilidad centralizada, apuntar los JM-VL04 al servidor Plaspy centraliza la telemetría mediante un enfoque de endpoint compartido y detección automática de protocolo.

Para obtener más información sobre Plaspy y las funciones de la plataforma visite https://www.plaspy.com. Las especificaciones del fabricante, el comportamiento del firmware y los métodos de configuración pueden cambiar con el tiempo; verifique los detalles de configuración específicos más recientes en el sitio de Concox https://www.iconcox.com/ antes de hacer un despliegue masivo.
