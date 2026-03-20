---
slug: /concox/jm_vg01/configuration
id: jm_vg01-configuration
sidebar_label: Configuration
title: Concox - JM-VG01 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar Concox JM-VG01 y conectarlo a Plaspy mediante servidor compartido y comandos SMS
keywords:
  - Concox JM VG01 configuración
  - Configuración Concox JM VG01
  - JM VG01 Plaspy
  - Configuración SMS JM VG01
  - Configuración rastreador GPS Concox
  - Configuración rastreador de vehículo
  - Configuración plataforma GPS
  - Guía configuración servidor
  - Configuración GPRS rastreador
  - Ajustes protocolo rastreador
---

# Concox - Configuración del JM-VG01

Esta página presenta la guía pública para usar el rastreador Concox JM-VG01 con Plaspy. Explica los ajustes de servidor compartido que Plaspy requiere, las condiciones típicas previas al montaje y los comandos SMS públicos facilitados por el fabricante que se usan habitualmente para apuntar el equipo al servicio de Plaspy. Utilice esta guía como un punto de partida práctico para integrar el dispositivo en Plaspy y recuerde revisar la documentación del fabricante para detalles específicos del dispositivo.

Plaspy emplea ajustes de servidor compartido para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, pero los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El modelo JM-VG01U incorpora funciones avanzadas como GPS asistido por INS y sensores de movimiento; los comandos que se muestran aquí reflejan las opciones públicas de configuración que Concox proporciona para configuraciones por GPRS y SMS.

## Resumen de configuración

Este procedimiento prepara el JM-VG01 para comunicarse de forma fiable con la plataforma Plaspy y para enviar datos de posición y eventos a los servidores de Plaspy. El enfoque está en definir los parámetros de red, seleccionar el transporte, activar GPRS y validar que el rastreador aparezca en Plaspy usando el endpoint y puerto compartidos por la plataforma.

- Configure el APN del dispositivo y habilite GPRS para que el rastreador pueda intercambiar datos con el servidor de Plaspy.
- Apunte el rastreador a Plaspy usando el dominio o la IP del servidor y el puerto compartido 8888.
- Seleccione UDP o TCP en el dispositivo cuando el firmware lo requiera y guarde la configuración.
- Valide la conectividad y confirme que el dispositivo sea visible en Plaspy después de aplicar la configuración.
- Use comandos SMS o la herramienta del fabricante según corresponda para aplicar los ajustes y verificar los parámetros.

## Ajustes del servidor de Plaspy

- Dominio del servidor: d.plaspy.com  
- IP del servidor: 54.85.159.138  
- Puerto: 8888 para todos los dispositivos compatibles con Plaspy  
- Transporte: UDP o TCP soportado en el lado del dispositivo  
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta

## Requisitos previos

- Un JM-VG01 alimentado y accesible con una SIM activa y habilitada para SMS y/o GPRS para datos.  
- Conocer el APN del operador móvil y, si aplica, el usuario y contraseña del APN de la SIM.  
- Capacidad para enviar comandos SMS al dispositivo o acceso a la herramienta de configuración del fabricante si está disponible.  
- Acceso administrativo básico a Plaspy para confirmar la conectividad y visibilidad del dispositivo tras la configuración.  
- Anotar el IMEI o identificador del dispositivo para poder relacionar el equipo físico con un registro en Plaspy.

## Cómo se conecta este rastreador a Plaspy

El JM-VG01 se configura para reportar datos de ubicación y estado al endpoint y puerto del servidor de Plaspy usando la conexión GPRS del dispositivo y el protocolo de transporte configurado. Plaspy recibe la conexión en el endpoint compartido y detecta automáticamente el protocolo del rastreador, por lo que no es necesario diferenciar puertos por dispositivo.

- El dispositivo envía actualizaciones periódicas de posición a d.plaspy.com o 54.85.159.138 en el puerto 8888.  
- El transporte puede ser UDP o TCP según el firmware y la elección del instalador.  
- Plaspy detecta automáticamente el protocolo del dispositivo cuando el rastreador se conecta.  
- El reporte de eventos y los temporizadores periódicos envían actualizaciones en el intervalo configurado.  
- Una vez configurado y conectado, el dispositivo queda visible para seguimiento y monitoreo en Plaspy.

## Flujo común de configuración

1. Acceda al método o software oficial de configuración de Concox, o prepárese para enviar comandos SMS según la documentación del fabricante.  
2. Introduzca el host del servidor de Plaspy como el dominio d.plaspy.com o la dirección IP 54.85.159.138.  
3. Establezca el puerto del servidor en 8888, que es el puerto compartido usado por Plaspy para todos los dispositivos compatibles.  
4. Seleccione el método de transporte UDP o TCP si el equipo requiere elegir uno.  
5. Configure los parámetros APN del dispositivo y habilite el modo GPRS para que el equipo se conecte por datos móviles.  
6. Aplique o guarde la configuración y reinicie el dispositivo si el firmware requiere un reinicio para aplicar los cambios.  
7. Verifique que el dispositivo reporte a Plaspy comprobando la lista de dispositivos o la telemetría entrante en la plataforma Plaspy.

## Ejemplo de comandos de configuración

El JM-VG01 admite configuración mediante SMS. A continuación se muestran los comandos SMS públicos proporcionados por Concox en orden. Envíe cada comando como SMS al número del dispositivo. Los comandos conservan los marcadores de posición cuando corresponde.

- Reinicio opcional a configuración de fábrica
```text
FACTORY#
```

- Ajustar la zona horaria a UTC 0
```text
GMT,E,0#
```

- Configurar el APN del operador
```text
APN,{{apn}}[,{{apnu}},{{apnp}}]#
```
Explicación: reemplace {{apn}} por el APN de su operador móvil. Si su operador requiere usuario y contraseña de APN, incluya {{apnu}} y {{apnp}} en las posiciones opcionales. Mantenga los marcadores de posición si no son necesarios.

- Establecer el servidor GPRS usando el dominio
```text
SERVER,1,d.plaspy.com,8888,0#
```

- O establecer el servidor GPRS usando la dirección IP
```text
SERVER,0,54.85.159.138,8888,0#
```

- Ajustar el intervalo de subida a cada 60 segundos
```text
TIMER,60#
```
Formato alternativo de temporizador
```text
TIMER,60,60#
```

- Habilitar modo GPRS
```text
GPRSON,1#
```

- Verificar la configuración actual de GPRS y servidor
```text
GPRSSET#
```

Nota: El orden de estos comandos es importante para la configuración inicial. FACTORY# es opcional y solo úselo si necesita devolver el dispositivo a los valores de fábrica antes de configurar.

## Notas de configuración

- Las versiones de firmware y las revisiones de hardware del fabricante pueden cambiar la sintaxis o el comportamiento de los comandos; verifique la sintaxis frente a la documentación oficial de Concox para su revisión de dispositivo.  
- Los comandos públicos del JM-VG01 mostrados arriba usan SMS para la configuración, lo cual es compatible con Concox y aparece en material público oficial. Use la herramienta del fabricante si está disponible para aprovisionamiento masivo o remoto.  
- Elija UDP o TCP según la preferencia del instalador y la compatibilidad del firmware del equipo; Plaspy acepta ambos transportes en el puerto compartido.  
- Plaspy utiliza el mismo puerto 8888 para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador al conectarse.  
- Al usar comandos SERVER con dominio, la resolución DNS en el dispositivo depende de la red del operador, por lo que la alternativa con IP puede ser útil en redes con restricciones.

## Por qué usar Plaspy con esta configuración

Usar el JM-VG01 con Plaspy ofrece una forma práctica de unificar la ubicación de vehículos, el reporte de eventos y la visibilidad operativa en una sola plataforma. Las capacidades avanzadas del equipo, como GPS asistido por INS y sensores de movimiento, pueden mejorar la continuidad del rastreo y la detección de comportamiento, mientras Plaspy recibe y normaliza los datos entrantes usando el endpoint de servidor compartido.

Para saber más sobre Plaspy y la integración de dispositivos compatibles visite https://www.plaspy.com. Verifique los métodos específicos de configuración del dispositivo, el comportamiento del firmware y los detalles del fabricante en el sitio de Concox https://www.iconcox.com/ ya que las especificaciones y procedimientos pueden cambiar con el tiempo.
