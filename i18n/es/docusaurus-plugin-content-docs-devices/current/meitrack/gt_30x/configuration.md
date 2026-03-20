---
slug: /meitrack/gt_30x/configuration
id: gt_30x-configuration
sidebar_label: Configuration
title: Meitrack - GT-30X Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del Meitrack GT-30X para apuntarlo a Plaspy con ajustes de servidor y comandos SMS
keywords:
  - configuración Meitrack GT-30X
  - configuración GT-30X
  - configuración de servidor Meitrack
  - configuración GT-30X Plaspy
  - configuración de rastreador GPS
  - configuración GPRS para rastreador
  - software de rastreo Meitrack
  - configuración de plataforma GPS
  - configuración SMS del rastreador
  - configuración de rastreador personal
---

# Meitrack - GT-30X Configuración

Esta página describe el contexto público de configuración para usar el Meitrack GT-30X con Plaspy. Se concentra en los ajustes prácticos del servidor y en los pasos habituales del fabricante necesarios para apuntar el GT-30X a Plaspy, de modo que el dispositivo pueda reportar posición y eventos a la plataforma. El contenido se basa en la descripción del GT-30X y en el ejemplo público de configuración vía SMS proporcionado.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador; sin embargo, los pasos exactos del lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El GT-30X soporta reporte por SMS y por GPRS (TCP o UDP), por lo que esta guía explica cómo configurar el dispositivo para Plaspy empleando la información pública y los comandos SMS comunes.

## Resumen de la configuración

Este proceso prepara el GT-30X para enviar datos de GPS y eventos a Plaspy, de manera que el dispositivo sea visible y administrable en la plataforma. Los pasos a continuación se centran en configurar el punto de acceso del servidor, el transporte, los intervalos de reporte y los parámetros básicos de eventos para que Plaspy pueda recibir e interpretar los datos del rastreador.

- Apuntar el GT-30X al endpoint del servidor de Plaspy usando la dirección pública o la IP.
- Establecer el transporte de red y el puerto para que los paquetes GPRS lleguen a Plaspy en el puerto compartido usado por todos los dispositivos Plaspy.
- Configurar el intervalo de reporte y el envío de eventos para que las actualizaciones de ubicación aparezcan en Plaspy con la frecuencia deseada.
- Usar SMS o las herramientas del fabricante disponibles para aplicar ajustes cuando no sea posible usar herramientas de configuración GPRS.
- Validar la conectividad para asegurar que el dispositivo está reportando y visible en la plataforma Plaspy.

## Ajustes del servidor de Plaspy

Configure el GT-30X para reportar al servidor de Plaspy usando los siguientes ajustes públicos:

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte: soporta UDP o TCP según lo permita el dispositivo
- Plaspy detecta automáticamente el protocolo del rastreador y todos los dispositivos en Plaspy usan el mismo puerto

## Requisitos típicos antes de la configuración

- Un equipo GT-30X cargado y funcionando con acceso al método de configuración por SMS o al método de configuración del dispositivo.
- Una tarjeta SIM operativa con datos habilitados y el APN correcto para la red móvil.
- Acceso a la contraseña del dispositivo para configurar. El ejemplo público usa la contraseña por defecto 0000.
- Capacidad para enviar mensajes SMS al rastreador o acceso al software o herramientas oficiales de configuración de Meitrack.
- Conocimientos básicos sobre si el rastreador debe usar UDP o TCP según su despliegue y la compatibilidad de la red.

## Cómo se conecta este rastreador a Plaspy

El GT-30X envía sus datos de ubicación y eventos por GPRS al endpoint y puerto del servidor de Plaspy. Una vez configurado con los ajustes de Plaspy, el rastreador comenzará a reportar según el intervalo configurado y Plaspy detectará y decodificará el protocolo del rastreador automáticamente.

- El dispositivo reporta al endpoint compartido de Plaspy d.plaspy.com o a la IP del servidor 54.85.159.138 en el puerto 8888.
- El transporte puede ser UDP o TCP dependiendo de la configuración del rastreador y la red; ajústelo según los requisitos del dispositivo y del operador.
- Plaspy recibe los paquetes en el mismo puerto usado para todos los dispositivos compatibles y aplica detección automática de protocolo.
- El intervalo de reporte y las configuraciones de eventos determinan la frecuencia con la que llegan los datos de ubicación a Plaspy.
- Una vez recibidos los datos, el dispositivo es visible y puede ser monitoreado en Plaspy para ubicación y alertas de eventos.

## Flujo de configuración habitual

1. Acceda al método de configuración oficial de Meitrack para el GT-30X, ya sea mediante comandos SMS o utilizando la herramienta de configuración del fabricante.
2. Ingrese la dirección del servidor de Plaspy usando d.plaspy.com o la IP del servidor 54.85.159.138 en el campo de configuración del servidor.
3. Establezca el puerto en 8888, ya que Plaspy utiliza el mismo puerto para todos los dispositivos.
4. Elija UDP o TCP si el dispositivo requiere selección de transporte, según la red y el firmware.
5. Configure el intervalo de reporte y los parámetros de eventos para que coincidan con sus necesidades de monitoreo.
6. Aplique o guarde la configuración y reinicie el dispositivo si el firmware lo requiere para aplicar cambios.
7. Valide que el dispositivo reporte a Plaspy comprobando los datos entrantes en la plataforma y confirmando que el dispositivo aparece en línea.

## Ejemplo de comandos de configuración

El GT-30X puede configurarse enviando comandos SMS al dispositivo. La secuencia siguiente es un ejemplo público que muestra acciones comunes de configuración. La muestra utiliza la contraseña del dispositivo 0000, que es la predeterminada en el ejemplo proporcionado.

1. Restauración opcional a configuración de fábrica o reset inicial
```
0000,F11
```
- Use este comando si necesita restaurar los valores de fábrica antes de la configuración. Etiquételo como opcional y ejecútelo solo cuando sea necesario.

2. Establecer el servidor GPRS a Plaspy usando la IP del servidor y el puerto, con marcadores de posición para APN
```
0000,A21,2,54.85.159.138,8888,[apn],[apnu],[apnp]
```
- Explicación de los marcadores de posición:
  - [apn] = el APN de su operador móvil
  - [apnu] = nombre de usuario del APN si el operador lo requiere (opcional)
  - [apnp] = contraseña del APN si el operador lo requiere (opcional)
- El comando anterior incluye la IP 54.85.159.138 y el puerto 8888 para apuntar el rastreador a Plaspy. Alternativamente, puede reemplazar la IP por el dominio del servidor d.plaspy.com si el dispositivo lo soporta.

3. Establecer la zona horaria a UTC 0
```
0000,B36,0
```
- Ajuste el parámetro de zona horaria si necesita una zona diferente.

4. Establecer el intervalo de actualización cada 1 minuto
```
0000,A12,6,0
```
- Este ejemplo fija un intervalo de reporte regular. Modifique el código de intervalo según la documentación del dispositivo.

5. Configurar reportes básicos de eventos
```
0000,C03,0
```
- Configura las banderas de reporte de eventos. Consulte la documentación del fabricante para los significados detallados de las banderas de eventos.

Nota: Conserve el prefijo de contraseña del dispositivo (0000) en cada comando si el dispositivo utiliza una contraseña. Si su dispositivo utiliza una contraseña diferente, reemplace 0000 por la suya.

## Notas de configuración

- La sintaxis exacta de los comandos SMS y los parámetros disponibles pueden variar según la versión de firmware y las diferencias regionales del firmware. Siempre consulte el manual del dispositivo para la sintaxis específica de su firmware.
- La configuración se puede realizar vía SMS como se muestra o mediante las herramientas de configuración de Meitrack cuando estén disponibles; elija el método que mejor se adapte a su práctica de instalación.
- Al decidir entre TCP y UDP, considere la confiabilidad de la red y el comportamiento NAT del operador; pruebe ambos si no está seguro. Plaspy detectará automáticamente el protocolo que envíe el dispositivo.
- Confirme el APN y las credenciales opcionales del APN con el operador móvil antes de configurar el servidor GPRS.
- Todos los dispositivos en Plaspy usan el mismo puerto 8888, por lo que el puerto no cambia entre modelos; Plaspy usa detección automática de protocolo.

## Por qué usar Plaspy con esta configuración

Usar Plaspy con el GT-30X permite visibilidad centralizada y monitoreo operativo de rastreadores personales en distintos despliegues. Apuntar el GT-30X al servidor de Plaspy facilita la recolección de actualizaciones de ubicación, el seguimiento de eventos e integrar el dispositivo en flujos de monitoreo más amplios sin tener que cambiar puertos de servidor para distintos modelos.

Para obtener más información sobre Plaspy y cómo gestiona la conectividad de dispositivos y el monitoreo de flotas visite https://www.plaspy.com. Para el firmware más reciente del GT-30X, la sintaxis de comandos y las instrucciones específicas del dispositivo, verifique la información actual en el sitio web de Meitrack https://www.meitrack.com/ ya que los métodos del fabricante y el comportamiento del firmware pueden cambiar con el tiempo.
